#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT="${PORT:-3311}"
HOST="127.0.0.1"
OUTPUT_PATH="${1:-$ROOT_DIR/public/Michal_Kochaniak_CV.pdf}"
CV_URL="http://$HOST:$PORT/cv/print"
LOG_FILE="${TMPDIR:-/tmp}/michal-cv-pdf.log"

find_chromium() {
  command -v chromium || command -v chromium-browser || command -v google-chrome || true
}

if [ -f "$HOME/.nvm/nvm.sh" ]; then
  # shellcheck disable=SC1090
  source "$HOME/.nvm/nvm.sh"
fi

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is not available. Load nvm or install Node before running this script." >&2
  exit 1
fi

CHROMIUM_BIN="$(find_chromium)"

if [ -z "$CHROMIUM_BIN" ]; then
  echo "Chromium or compatible Chrome binary is required to generate the PDF." >&2
  exit 1
fi

cleanup() {
  if [ -n "${SERVER_PID:-}" ] && kill -0 "$SERVER_PID" >/dev/null 2>&1; then
    kill "$SERVER_PID" >/dev/null 2>&1 || true
    wait "$SERVER_PID" 2>/dev/null || true
  fi
}

trap cleanup EXIT

cd "$ROOT_DIR"

mkdir -p "$(dirname "$OUTPUT_PATH")"

echo "Building portfolio application..."
npm run build >/dev/null

echo "Starting local server on $HOST:$PORT..."
npm run start -- --hostname "$HOST" --port "$PORT" >"$LOG_FILE" 2>&1 &
SERVER_PID=$!

for _ in $(seq 1 60); do
  if curl -fsS "$CV_URL" >/dev/null 2>&1; then
    break
  fi
  sleep 1
done

if ! curl -fsS "$CV_URL" >/dev/null 2>&1; then
  echo "Failed to start local server. See log: $LOG_FILE" >&2
  exit 1
fi

echo "Generating PDF from $CV_URL ..."
"$CHROMIUM_BIN" \
  --headless \
  --disable-gpu \
  --no-sandbox \
  --run-all-compositor-stages-before-draw \
  --virtual-time-budget=12000 \
  --print-to-pdf-no-header \
  --print-to-pdf="$OUTPUT_PATH" \
  "$CV_URL" >/dev/null 2>&1

echo "PDF written to: $OUTPUT_PATH"

if command -v pdfinfo >/dev/null 2>&1; then
  pdfinfo "$OUTPUT_PATH" | sed -n '1,12p'
else
  ls -lh "$OUTPUT_PATH"
fi