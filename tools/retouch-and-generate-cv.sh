#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORTRAIT_INPUT="${PORTRAIT_INPUT:-$ROOT_DIR/public/foto.jpeg}"
PORTRAIT_OUTPUT="${PORTRAIT_OUTPUT:-$ROOT_DIR/public/foto-cv.jpg}"
PDF_OUTPUT="${1:-$ROOT_DIR/public/Michal_Kochaniak_CV.pdf}"

if [ -f "$HOME/.nvm/nvm.sh" ]; then
  # shellcheck disable=SC1090
  source "$HOME/.nvm/nvm.sh"
fi

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is not available. Load nvm or install Node before running this script." >&2
  exit 1
fi

cd "$ROOT_DIR"

echo "Retouching portrait via external AI model..."
node ./tools/retouch-portrait.mjs --input "$PORTRAIT_INPUT" --output "$PORTRAIT_OUTPUT" "${@:2}"

echo "Generating CV PDF with the updated portrait..."
bash ./tools/generate-cv-pdf.sh "$PDF_OUTPUT"