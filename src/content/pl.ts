import type { Content } from "./types";

export const pl: Content = {
  locale: "pl",

  site: {
    name: "Michał Kochaniak",
    role: "Senior Test Automation Engineer",
    location: "Łódź · praca zdalna",
    email: "kochaniakmichal@gmail.com",
    linkedin: "https://linkedin.com/in/michalkochaniak",
    github: "https://github.com/mikoch81",
    cvPdf: "/Michal_Kochaniak_CV.pdf",
    availability: "Otwarty na nowe projekty",
  },

  meta: {
    title: "Michał Kochaniak — Senior Test Automation Engineer",
    description:
      "Senior Test Automation Engineer: architektura automatyzacji testów, inżynieria wydajności i systemy jakości wspierane AI. Projektuję skalowalne frameworki, buduję pipeline'y raportowania oparte na danych i wdrażam praktyczne workflow AI w nowoczesnym dostarczaniu oprogramowania.",
    cvTitle: "CV — Michał Kochaniak",
    cvDescription:
      "Senior Test Automation Engineer. Architektura automatyzacji, inżynieria wydajności, systemy jakości wspierane AI.",
  },

  nav: {
    work: "Projekty",
    how: "Jak pracuję",
    ai: "AI w QA",
    stack: "Stack",
    proof: "Efekty",
    contact: "Kontakt",
    cv: "CV",
  },

  ui: {
    skipToContent: "Przejdź do treści",
    openMenu: "Otwórz nawigację",
    closeMenu: "Zamknij nawigację",
    themeLight: "Przełącz na jasny motyw",
    themeDark: "Przełącz na ciemny motyw",
    switchLanguage: "Switch to English",
    switchLanguageShort: "EN",
    viewWork: "Zobacz projekty",
    downloadCv: "Pobierz CV",
    viewCv: "Zobacz CV",
    getInTouch: "Napisz do mnie",
    viewCase: "Czytaj case study",
    viewRepo: "Zobacz repozytorium",
    allProjects: "Wszystkie projekty",
    copyEmail: "Kopiuj adres e-mail",
    copied: "Skopiowano",
    backToPortfolio: "Wróć do portfolio",
    footerRights: "Wszelkie prawa zastrzeżone.",
    notFoundTitle: "Nie znaleziono strony",
    notFoundBody: "Strona, której szukasz, nie istnieje lub została przeniesiona.",
    backHome: "Wróć na stronę główną",
  },

  hero: {
    eyebrow: "Senior Test Automation Engineer · Łódź",
    headline: "Systemy jakości, które zespoły potrafią",
    headlineAccent: "naprawdę utrzymać.",
    lead: "Projektuję frameworki automatyzacji, pipeline'y raportowania wydajności i bezpieczne dla danych workflow AI dla dostarczania klasy enterprise — obecnie w bankowości, w web, mobile i WebView.",
    stats: [
      { value: "15+", label: "lat w web i QA", detail: "od 2011" },
      { value: "9", label: "lat w automatyzacji testów", detail: "od 2017" },
      { value: "4", label: "otwarte repozytoria demo", detail: "Playwright · Selenium · API · JMeter" },
    ],
    portraitAlt: "Portret Michała Kochaniaka",
    sparklineLabel: "Ilustracyjny trend latencji p95 w kolejnych przebiegach regresji",
  },

  work: {
    eyebrow: "Wybrane projekty",
    title: "Automatyzacja, wydajność i AI — budowane jako systemy, nie skrypty",
    lead: "Trzy wdrożenia, które ukształtowały mój sposób pracy, oraz zestaw publicznych, uruchamialnych demo, które sklonujesz i odpalisz w kilka minut.",
    featuredLabel: "Case studies",
    openSourceLabel: "Demo open source",
    openSourceLead: "Małe, samowystarczalne repozytoria — lokalne aplikacje demo, dane syntetyczne, gotowe pod CI. Każde pokazuje wzorzec, którego używam w prawdziwych projektach.",
    categories: {
      automation: "Architektura automatyzacji",
      performance: "Inżynieria wydajności",
      ci: "CI/CD i traceability",
      ai: "Zastosowania AI",
    },
  },

  projects: [
    {
      slug: "mobile-test-automation",
      title: "Automatyzacja testów mobilnych aplikacji bankowej",
      category: "automation",
      featured: true,
      summary:
        "Warstwowy framework Appium dla hybrydowej aplikacji bankowej — przepływy natywne i WebView na Androidzie i iOS, zintegrowany z Jenkinsem.",
      outcome: "Stabilne pokrycie regresją krytycznych przepływów, które przetrwało kilka dużych przeprojektowań UI.",
      tech: ["Java", "Appium", "Selenium", "TestNG", "Jenkins"],
      cover: "mobile",
    },
    {
      slug: "ai-performance-reporting",
      title: "System raportowania wydajności wspierany AI",
      category: "performance",
      featured: true,
      summary:
        "Pipeline w Pythonie zamieniający surowe wyniki JMetera w wykresy i gotowe dla interesariuszy raporty DOCX/PDF; narrację pisze lokalny LLM.",
      outcome: "Analiza na cykl testowy skróciła się z godzin ręcznej pracy do minut.",
      tech: ["Python", "JMeter", "pandas", "Ollama"],
      cover: "chart",
    },
    {
      slug: "jira-zephyr-ci",
      title: "Pipeline jakości Jira + Zephyr + CI",
      category: "ci",
      featured: true,
      summary:
        "Listenery TestNG i integracja z Zephyr Scale publikujące każdy przebieg CI do Jiry z traceability na poziomie wymagań.",
      outcome: "Koniec ręcznej synchronizacji wyników; jakość stała się widoczna per sprint i release.",
      tech: ["Java", "Zephyr Scale API", "Jenkins", "GitHub Actions"],
      cover: "pipeline",
    },
    {
      slug: "agentic-qa-assistant",
      title: "Agentowy asystent QA",
      category: "ai",
      featured: true,
      summary:
        "Lokalny asystent LLM (Ollama), który interpretuje wyniki testów, porównuje baseline'y i przygotowuje raporty QA — żadne dane nie opuszczają sieci.",
      outcome: "Mniej rutynowej analizy dzięki wielokrotnego użytku, w pełni lokalnej bazie agenta.",
      tech: ["Ollama", "Python", "Projektowanie promptów", "Orkiestracja agentów"],
      cover: "terminal",
    },
    {
      slug: "playwright-web-e2e-demo",
      title: "Playwright — demo E2E dla web",
      category: "automation",
      featured: false,
      badge: "Open source",
      summary: "Ścieżki logowania, koszyka i zakupu na lokalnej aplikacji demo — raporty HTML, diagnostyka błędów, GitHub Actions.",
      outcome: "Ręczny smoke test zamieniony w powtarzalną bramkę jakości.",
      tech: ["Playwright", "TypeScript", "GitHub Actions"],
      cover: "browser",
      repositoryUrl: "https://github.com/mikoch81/playwright-web-e2e-demo",
    },
    {
      slug: "selenium-framework-demo",
      title: "Selenium — demo frameworka",
      category: "automation",
      featured: false,
      badge: "Open source",
      summary: "Szkielet frameworka Java + Selenium 4 — Page Objects, driver factory, artefakty screenshotów, wbudowany serwer demo.",
      outcome: "Fundament klasy enterprise pod stabilną regresję UI w zespołach Java.",
      tech: ["Java 21", "Selenium 4", "JUnit 5", "Maven"],
      cover: "browser",
      repositoryUrl: "https://github.com/mikoch81/selenium-framework-demo",
    },
    {
      slug: "api-testing-demo",
      title: "Demo testów API",
      category: "performance",
      featured: false,
      badge: "Open source",
      summary: "Health checki, walidacja kontraktu JSON i baseline'y latencji p95 na syntetycznym serwisie HTTP.",
      outcome: "Poprawność i responsywność sprawdzane w jednym lekkim zestawie Maven.",
      tech: ["Java 21", "JUnit 5", "HttpClient", "Jackson"],
      cover: "api",
      repositoryUrl: "https://github.com/mikoch81/api-testing-demo",
    },
    {
      slug: "jmeter-performance",
      title: "Pakiet wydajnościowy JMeter",
      category: "performance",
      featured: false,
      badge: "Open source",
      summary: "Wielokrotnego użytku plan JMeter, scenariusze CSV i mock API w Pythonie z regulowaną latencją do bezpiecznych testów bazowych.",
      outcome: "Powtarzalny punkt wejścia w inżynierię wydajności — bez dotykania systemów zewnętrznych.",
      tech: ["JMeter", "Python", "Scenariusze CSV"],
      cover: "chart",
      repositoryUrl: "https://github.com/mikoch81/jmeter-performance",
    },
  ],

  caseStudyUi: {
    overview: "Przegląd",
    challenge: "Wyzwanie",
    approach: "Podejście",
    stack: "Stack technologiczny",
    outcomes: "Efekty",
    summary: "Podsumowanie",
    atAGlance: "W skrócie",
    role: "Rola",
    context: "Kontekst",
    category: "Kategoria",
    repository: "Repozytorium",
    related: "Powiązane projekty",
  },

  caseStudies: {
    "ai-performance-reporting": {
      slug: "ai-performance-reporting",
      title: "System raportowania wydajności wspierany AI",
      subtitle: "Zautomatyzowany pipeline zamieniający surowe wyniki JMetera w uporządkowane raporty gotowe dla interesariuszy",
      role: "Projekt i implementacja",
      context: "Testy wydajnościowe w środowisku enterprise",
      overview:
        "Testy wydajnościowe generują ogromne ilości surowych danych — pliki JTL, eksporty CSV, metryki serwerowe — które wymagają kompetentnej interpretacji, zanim staną się użyteczne. Ten projekt zastąpił ręczny proces analizy zautomatyzowanym pipeline'em w Pythonie, który wczytuje wyniki JMetera, liczy metryki statystyczne, generuje wykresy i tworzy uporządkowane raporty DOCX/PDF. Warstwa LLM oparta na Ollamie dodaje narracyjne podsumowania, flaguje anomalie i tłumaczy wyniki na język zrozumiały dla osób nietechnicznych.",
      challenge: [
        "Ręczna analiza wyników JMetera zajmowała godziny na każdy cykl testowy i różniła się w zależności od analityka.",
        "Raporty różniły się strukturą, głębokością i jakością zależnie od tego, kto je pisał.",
        "Interesariusze nietechniczni mieli trudność z wyciąganiem wniosków z surowych danych wydajnościowych.",
        "Porównywanie trendów historycznych wymagało żmudnego ręcznego wyciągania danych z wielu plików wyników.",
      ],
      approach: [
        "Zaprojektowałem pipeline w Pythonie parsujący pliki JTL/CSV i liczący kluczowe metryki — czasy odpowiedzi, przepustowość, wskaźniki błędów i rozkłady percentyli.",
        "Zbudowałem generowanie wykresów — rozkłady czasów odpowiedzi, krzywe przepustowości, podział błędów — w matplotlib, osadzane bezpośrednio w szablonach raportów.",
        "Przygotowałem szablony DOCX/PDF o stałej strukturze: streszczenie dla zarządu, szczegółowe metryki, porównanie trendów, wnioski i rekomendacje.",
        "Zintegrowałem warstwę LLM (Ollama) generującą sekcje narracyjne — tłumaczącą dane statystyczne na jasne, czytelne wnioski.",
        "Dodałem logikę porównań historycznych, która automatycznie wskazuje regresje i poprawy między przebiegami.",
      ],
      stack: [
        { category: "Rdzeń", items: ["Python", "pandas", "matplotlib"] },
        { category: "Dane", items: ["Parsowanie JTL / CSV", "Analiza statystyczna", "Obliczanie percentyli"] },
        { category: "Raportowanie", items: ["python-docx", "FPDF", "Silnik szablonów"] },
        { category: "AI", items: ["Ollama", "Prompt engineering", "Generowanie narracji"] },
      ],
      outcomes: [
        "Czas analizy na cykl skrócił się z godzin ręcznej pracy do minut automatycznego przetwarzania.",
        "Ujednolicona struktura raportów w zespole — każdy raport ma teraz spójny, profesjonalny format.",
        "Interesariusze nietechniczni rozumieją wyniki wydajnościowe bez pośrednictwa inżyniera.",
        "Wykrywanie trendów historycznych ujawniło regresje wcześniej pomijane w ręcznych przeglądach.",
      ],
      conclusion:
        "Wartość inżynierii wydajności mierzy się tym, jak szybko wyniki trafiają do osób decyzyjnych. Automatyzacja ścieżki od analizy do raportu — z narracją wspieraną AI — zamieniła surowe dane w uporządkowane materiały, które bezpośrednio wspierały decyzje o wydaniu.",
    },

    "mobile-test-automation": {
      slug: "mobile-test-automation",
      title: "Automatyzacja testów mobilnych aplikacji bankowej",
      subtitle: "Wieloplatformowy framework automatyzacji krytycznych przepływów bankowych na Androidzie i iOS",
      role: "Architektura i implementacja frameworka",
      context: "Bankowość · hybrydowa aplikacja mobilna",
      overview:
        "Aplikacja bankowa potrzebowała niezawodnej automatycznej regresji na Androidzie i iOS. Łączyła natywne UI, hybrydowe ekrany WebView i wieloetapowe uwierzytelnianie — realne wyzwania dla stabilności automatyzacji. Projekt obejmował zaprojektowanie frameworka od zera, z naciskiem na utrzymywalność, współdzielenie kodu między platformami i integrację z CI/CD.",
      challenge: [
        "Hybrydowa architektura z kontekstami natywnym i WebView wymagała precyzyjnej obsługi przełączania kontekstu podczas wykonywania testów.",
        "Złożone przepływy uwierzytelniania (biometria, OTP, zarządzanie sesją) generowały niestabilne scenariusze.",
        "Częste zmiany UI między wydaniami wymagały frameworka o minimalnym koszcie utrzymania.",
        "Pokrycie obu platform trzeba było osiągnąć bez duplikowania całego zestawu testów dla Androida i iOS.",
      ],
      approach: [
        "Zaprojektowałem architekturę warstwową: Page Objects jako abstrakcja UI, warstwa serwisowa dla interakcji API i współdzielona logika testów działająca na obu platformach.",
        "Zaimplementowałem narzędzia do przełączania kontekstu natywny ↔ WebView z automatycznymi powtórzeniami i strategiami oczekiwania.",
        "Stworzyłem dynamiczny system identyfikacji elementów łączący accessibility ID, zapasowe XPath-y i lokatory specyficzne dla platform.",
        "Zbudowałem wzorce data-driven pozwalające uruchamiać te same scenariusze na wielu środowiskach i profilach użytkowników.",
        "Zintegrowałem framework z pipeline'ami Jenkins, tak aby regresja uruchamiała się automatycznie dla każdego release candidate.",
      ],
      stack: [
        { category: "Rdzeń", items: ["Java", "Appium", "Selenium WebDriver"] },
        { category: "Build", items: ["Maven", "TestNG", "Zarządzanie profilami"] },
        { category: "Wzorce", items: ["Page Object Model", "Testy data-driven", "Abstrakcja wieloplatformowa"] },
        { category: "CI/CD", items: ["Jenkins", "Wykonanie równoległe", "Integracja raportów"] },
      ],
      outcomes: [
        "Stabilne pokrycie automatyzacją krytycznych przepływów bankowych na Androidzie i iOS.",
        "Krótszy cykl regresji dzięki równoległemu wykonywaniu testów.",
        "Architektura przetrwała kilka dużych przeprojektowań UI przy minimalnym utrzymaniu lokatorów.",
        "Zespół dostał jasne, automatyczne sygnały pass/fail wpięte bezpośrednio w pipeline'y wydań.",
      ],
      conclusion:
        "Automatyzacja mobilna w bankowości wymaga architektury zbudowanej pod realną złożoność — aplikacje hybrydowe, złożone uwierzytelnianie, ciągła ewolucja UI. Ten framework stawiał na trwałość, a jego warstwowa struktura utrzymała się przez wiele dużych wydań.",
    },

    "jira-zephyr-ci": {
      slug: "jira-zephyr-ci",
      title: "Pipeline jakości Jira + Zephyr + CI",
      subtitle: "Połączenie automatycznego wykonywania testów z Jirą i Zephyr Scale dla traceability jakości w czasie rzeczywistym",
      role: "Projekt i implementacja integracji",
      context: "Dostarczanie enterprise · ekosystem Jira",
      overview:
        "Testy automatyczne produkują cenne sygnały jakości, ale często zostają uwięzione w logach CI — z dala od miejsca, w którym zespoły planują i decydują. Ten projekt zbudował pipeline łączący wykonanie Maven/TestNG z Jirą i Zephyr Scale: automatyczne tworzenie cykli testowych, publikowanie wyników, linkowanie do wymagań i pokazywanie metryk jakości wewnątrz procesu dostarczania.",
      challenge: [
        "Wyniki testów żyły w logach CI i raportach HTML — odcięte od procesu w Jirze, w którym podejmowano decyzje.",
        "Ręczne aktualizowanie cykli w Zephyrze po automatycznych przebiegach było wolne, podatne na błędy i często pomijane.",
        "Traceability między testami automatycznymi a wymaganiami/historyjkami była niespójna, co czyniło analizę pokrycia niewiarygodną.",
        "Raportowanie metryk jakości wymagało ręcznego składania danych z wielu rozłącznych źródeł.",
      ],
      approach: [
        "Zbudowałem warstwę integracyjną na Zephyr Scale REST API, która programowo tworzy cykle testowe i publikuje wyniki po każdym przebiegu CI.",
        "Zaimplementowałem listenery TestNG zbierające metadane per test (pass/fail/skip, czas, szczegóły błędu) i formatujące je pod API Zephyra.",
        "Stworzyłem system linkowania wymagań mapujący klasy testowe na zgłoszenia Jira przez adnotacje — traceability utrzymywana na poziomie kodu.",
        "Skonfigurowałem pipeline'y Jenkins i GitHub Actions uruchamiające integrację automatycznie przy każdym buildzie, z konfigurowalnymi środowiskami i nazewnictwem cykli.",
        "Zbudowałem lekką warstwę zapytań dashboardowych agregującą metryki jakości z Jira/Zephyr do raportów sprintowych i wydaniowych.",
      ],
      stack: [
        { category: "Rdzeń", items: ["Java", "Maven", "TestNG"] },
        { category: "Integracja", items: ["Zephyr Scale API", "Jira REST API", "Własne listenery"] },
        { category: "CI/CD", items: ["Jenkins", "GitHub Actions", "Konfiguracja pipeline'ów"] },
        { category: "Raportowanie", items: ["Dashboardy jakości", "Metryki sprintowe", "Mapowanie traceability"] },
      ],
      outcomes: [
        "Koniec ręcznych aktualizacji cykli — każdy przebieg CI sam raportuje wyniki do Zephyr Scale.",
        "Pełna traceability między testami automatycznymi a wymaganiami w Jirze.",
        "Liderzy produktu i inżynierii zyskali bieżący wgląd w sygnały jakości per sprint i release.",
        "Mniejszy koszt raportowania — inżynierowie QA skupiają się na analizie, nie na wpisywaniu danych.",
      ],
      conclusion:
        "Inżynieria jakości jest warta tyle, ile jej widoczność. Bezpośrednie połączenie wyników automatyzacji z narzędziami dostarczania uczyniło jakość pełnoprawnym wejściem do planowania sprintów i decyzji o wydaniu — a nie przypisem w logach CI.",
    },

    "agentic-qa-assistant": {
      slug: "agentic-qa-assistant",
      title: "Agentowy asystent QA",
      subtitle: "Lokalny system LLM do analizy wyników testów, interpretacji raportów i wspierania decyzji QA",
      role: "Architektura, prompty i orkiestracja",
      context: "Środowisko enterprise wrażliwe na dane",
      overview:
        "Inżynieria jakości to sporo powtarzalnej pracy poznawczej — parsowanie logów, porównywanie przebiegów, pisanie raportów. Ten projekt to lokalnie hostowany asystent LLM, który analizuje wyniki, interpretuje dane wydajnościowe, podpowiada ścieżki dochodzenia i wspiera codzienne decyzje QA. Całe wnioskowanie działa on-premises przez Ollamę — żadne dane nie opuszczają sieci.",
      challenge: [
        "Znaczna część wysiłku QA idzie na przewidywalne, schematyczne zadania — przegląd logów, porównanie z baseline'em, formatowanie raportów.",
        "Interpretacja raportów wydajnościowych wymaga kontekstu domenowego trudnego do przekazania nowym członkom zespołu.",
        "Chmurowe narzędzia AI budziły obawy o prywatność przy przetwarzaniu wewnętrznych danych testowych i informacji o systemach.",
        "Ogólne asystenty AI nie mają wiedzy domenowej potrzebnej do sensownych wskazówek QA bez rozbudowanego promptowania.",
      ],
      approach: [
        "Zaprojektowałem architekturę agenta na Ollamie z lokalnym wnioskowaniem LLM — wszystkie dane pozostają on-premises, nic nie trafia do usług zewnętrznych.",
        "Zbudowałem wyspecjalizowane szablony promptów dla typowych zadań QA: analiza błędów testów, porównanie wydajności, badanie regresji i generowanie raportów.",
        "Zaimplementowałem warstwę orkiestracji łączącą kroki analizy w łańcuchy — np. parsuj wyniki → porównaj z baseline'em → wygeneruj podsumowanie → zaproponuj kolejne kroki.",
        "Stworzyłem bazę wiedzy o wzorcach QA, typowych trybach awarii i benchmarkach wydajności, do której agent sięga podczas analizy.",
        "Zaprojektowałem system pod rozszerzalność — nowe możliwości analityczne dodaje się jako modularne łańcuchy promptów bez przebudowy rdzenia.",
      ],
      stack: [
        { category: "AI / LLM", items: ["Ollama", "Lokalne wnioskowanie LLM", "Prompt engineering"] },
        { category: "Architektura", items: ["Orkiestracja agentów", "Wzorce chain-of-thought", "Projektowanie tool-use"] },
        { category: "Domena QA", items: ["Analiza wyników testów", "Interpretacja wydajności", "Rozpoznawanie wzorców błędów"] },
        { category: "Integracja", items: ["Interfejs CLI", "Parsowanie raportów", "Hooki pipeline'owe"] },
      ],
      outcomes: [
        "Praktyczna integracja lokalnego AI w QA bez zależności od chmury i bez ryzyka dla prywatności danych.",
        "Mniej czasu na rutynową analizę wyników i interpretację raportów.",
        "Wielokrotnego użytku framework do budowy domenowych agentów QA, adaptowalny do różnych projektów.",
        "Ustalone wzorce współpracy człowiek–AI w inżynierii jakości — wzmacnianie osądu, nie zastępowanie go.",
      ],
      conclusion:
        "AI w QA działa najlepiej, gdy przyspiesza analizę, a nie zastępuje osąd. Lokalny, świadomy domeny asystent ograniczył powtarzalną pracę poznawczą, a wszystkie dane pozostały pod kontrolą zespołu.",
    },

    "playwright-web-e2e-demo": {
      slug: "playwright-web-e2e-demo",
      title: "Playwright — demo E2E dla web",
      subtitle: "Lokalny pakiet regresji web skupiony na krytycznych ścieżkach użytkownika, szybkim feedbacku i diagnostyce gotowej pod CI",
      role: "Autor",
      context: "Demo open source · działa lokalnie",
      overview:
        "Ten projekt pokazuje moje podejście do nowoczesnej automatyzacji UI, gdy celem nie jest szerokie pokrycie „na odhaczenie”, lecz niezawodna ochrona najważniejszych biznesowo przepływów. Zestaw jest zbudowany wokół lokalnej aplikacji demo i skupia się na kilku ścieżkach o wysokiej wartości — logowanie, koszyk, finalizacja zakupu — wspieranych przez Playwright, raporty HTML i diagnostykę błędów. Efekt to zwarty, gotowy do użycia przykład powtarzalnej warstwy smoke/regresji uruchamialnej lokalnie i w CI.",
      challenge: [
        "Zespoły często potrzebują szybkiego, wiarygodnego feedbacku o kluczowych ścieżkach web bez inwestowania z góry w duże, dedykowane środowisko testowe.",
        "Zależności zewnętrzne i niestabilne środowiska potrafią zamienić mały zestaw regresji w niestabilny ciężar utrzymaniowy.",
        "Ręczny smoke test logowania i checkoutu wciąż jest powszechny, choć to najbardziej krytyczne biznesowo przepływy.",
        "Wczesne inicjatywy automatyzacji muszą być zrozumiałe, przenośne i łatwe do wpięcia w CI od pierwszego dnia.",
      ],
      approach: [
        "Zbudowałem lokalną aplikację demo z danymi syntetycznymi, aby zestaw działał bezpiecznie i powtarzalnie bez zależności od systemów trzecich.",
        "Wybrałem wąski, ale wartościowy zakres: obsługa błędnego logowania, poprawne logowanie i checkout oraz egzekwowanie reguły płatności przy pustym koszyku.",
        "Użyłem Playwrighta do szybkiej automatyzacji przeglądarki, screenshotów przy błędach, retry i raportów HTML o natychmiastowej wartości diagnostycznej.",
        "Przygotowałem projekt do uruchamiania w GitHub Actions, aby ten sam sygnał jakości był dostępny lokalnie i w pipeline'ach.",
        "Dodałem ścieżkę bootstrapu Node bez sudo, aby demo było przenośne między środowiskami deweloperskimi.",
      ],
      stack: [
        { category: "Rdzeń", items: ["Playwright", "TypeScript", "Node.js"] },
        { category: "Projekt testów", items: ["Krytyczne ścieżki użytkownika", "Pakiet smoke", "Diagnostyka błędów"] },
        { category: "Wykonanie", items: ["GitHub Actions", "Raporty HTML", "Lokalna aplikacja demo"] },
      ],
      outcomes: [
        "Pokazuje, jak ręczną ścieżkę smoke zamienić w powtarzalną, zautomatyzowaną bramkę jakości.",
        "Prezentuje nowoczesny stack automatyzacji web łatwy do uruchomienia lokalnie i prosty w integracji z CI.",
        "Zwarta implementacja referencyjna dla zespołów zaczynających regresję web na Playwrighcie.",
        "Całe wykonanie jest lokalne i syntetyczne — demo jest bezpieczne, przenośne i łatwe do publicznej prezentacji.",
      ],
      conclusion:
        "Skuteczna automatyzacja web zaczyna się od krytycznych biznesowo ścieżek i prostoty operacyjnej. Ten projekt pokazuje, jak mały zestaw Playwright może dać natychmiastową wartość regresyjną bez zbędnej złożoności.",
    },

    "selenium-framework-demo": {
      slug: "selenium-framework-demo",
      title: "Selenium — demo frameworka",
      subtitle: "Utrzymywalny framework automatyzacji UI w Javie z Page Objects, lokalnym wykonaniem i artefaktami błędów",
      role: "Autor",
      context: "Demo open source · ekosystem Java",
      overview:
        "To repozytorium reprezentuje bardziej klasyczną architekturę automatyzacji UI dla zespołów pracujących w środowiskach Java. Zamiast pojedynczych skryptów testowych kładzie nacisk na strukturę wielokrotnego użytku: konfigurację WebDrivera, Page Objects, lokalne wykonanie na serwerze demo i zbieranie screenshotów przy błędach. Pokazuje, jak wygląda fundament Selenium klasy enterprise, gdy utrzymywalność i długoterminowa stabilność regresji liczą się tak samo jak samo pokrycie.",
      challenge: [
        "Wiele baz kodu Selenium rośnie organicznie w ciasno powiązane skrypty, drogie w utrzymaniu.",
        "Zespoły w ekosystemach Java potrzebują startera frameworka pasującego do istniejących standardów budowania i wykonywania.",
        "Publiczne przykłady portfolio powinny unikać zależności od stron trzecich, a jednocześnie pokazywać realistyczną strukturę regresji.",
        "Diagnostyka błędów bywa dodawana na końcu, choć bezpośrednio wpływa na utrzymywalność i szybkość triage'u.",
      ],
      approach: [
        "Zbudowałem demo wokół Page Objects i wspólnej infrastruktury testów bazowych, oddzielając warstwę UI od logiki testów.",
        "Użyłem lokalnej, wbudowanej aplikacji demo, aby zestaw działał przewidywalnie bez publicznych stron i zewnętrznych środowisk.",
        "Zaimplementowałem wielokrotnego użytku konfigurację WebDrivera i obsługę środowisk pod wykonanie Mavenem w CI.",
        "Dodałem zapis screenshotów przy błędach, modelując bardziej produkcyjne doświadczenie debugowania.",
        "Skupiłem scenariusze na logowaniu i przepływie zakupu, aby historia biznesowa była czytelna, a wzorce frameworka nadal widoczne.",
      ],
      stack: [
        { category: "Rdzeń", items: ["Java 21", "Selenium 4", "JUnit 5", "Maven"] },
        { category: "Architektura", items: ["Page Object Model", "Wspólna baza testów", "Driver factory"] },
        { category: "Wykonanie", items: ["Tryb headless", "Lokalny serwer demo", "Artefakty screenshotów"] },
      ],
      outcomes: [
        "Pokazuje utrzymywalny styl frameworka Selenium zgodny z długoterminową pracą zespołów Java.",
        "Demonstruje wartość wielokrotnego użytku konfiguracji, abstrakcji UI i zbierania artefaktów zamiast skryptów ad hoc.",
        "Gotowy do portfolio przykład automatyzacji UI w stylu enterprise bez ekspozycji systemów zewnętrznych.",
        "Konkretny punkt startowy do rozszerzania pokrycia regresją w projektach opartych na Javie.",
      ],
      conclusion:
        "Selenium pozostaje wartościowe, gdy traktuje się je jako architekturę frameworka, a nie zbiór skryptów. To demo skupia się na utrzymywalności, powtarzalności i wzorcach operacyjnych, które liczą się w prawdziwych zespołach.",
    },

    "api-testing-demo": {
      slug: "api-testing-demo",
      title: "Demo testów API",
      subtitle: "Lokalny pakiet jakości backendu łączący health checki, walidację kontraktu i baseline'y czasów odpowiedzi",
      role: "Autor",
      context: "Demo open source · jakość backendu",
      overview:
        "Ten projekt pokazuje, jak podchodzę do jakości backendu, gdy liczą się zarówno poprawność, jak i responsywność. Wykorzystuje lokalny, syntetyczny serwis HTTP i zestaw testów Maven do weryfikacji dostępności usługi, porównania odpowiedzi endpointów z oczekiwanym kontraktem i sprawdzenia prostych baseline'ów wydajności, takich jak średni czas odpowiedzi i p95. Efekt to lekki, ale konkretny przykład wprowadzania sygnałów jakości API bez budowania osobnego środowiska integracyjnego.",
      challenge: [
        "Zespoły backendowe często weryfikują poprawność i wydajność w osobnych narzędziach i na osobnych etapach procesu dostarczania.",
        "Nawet małe serwisy potrzebują pewności co do kontraktów i czasów odpowiedzi, a zespoły nie zawsze mają dedykowane współdzielone środowisko testowe.",
        "Przykłady portfolio powinny pokazywać realistyczną weryfikację backendu, pozostając bezpieczne i w pełni lokalne.",
        "Sygnały jakości są bardziej użyteczne, gdy są tanie w uruchomieniu i zrozumiałe zarówno dla inżynierów, jak i interesariuszy.",
      ],
      approach: [
        "Zbudowałem lokalny serwis HTTP z syntetycznymi odpowiedziami, aby cała pętla walidacji była samowystarczalna i powtarzalna.",
        "Dodałem test health check weryfikujący dostępność oraz test kontraktu porównujący payloady z oczekiwaną strukturą JSON.",
        "Zaimplementowałem prosty baseline wydajności oparty na powtarzanych żądaniach i asercjach na średnią latencję i p95.",
        "Użyłem standardowego Javy i Mavena, aby projekt wyglądał i działał jak mały, gotowy pod CI zestaw jakości backendu.",
        "Zachowałem celowo lekką konfigurację, pokazując, jak wprowadzać użyteczne sygnały bez ciężkiej infrastruktury.",
      ],
      stack: [
        { category: "Rdzeń", items: ["Java 21", "JUnit 5", "Maven"] },
        { category: "Walidacja API", items: ["Java HttpClient", "Kontrakty JSON", "Health checki"] },
        { category: "Wydajność", items: ["Średnia latencja", "Baseline p95", "Syntetyczny serwis HTTP"] },
      ],
      outcomes: [
        "Połączony obraz poprawności i wydajności API w jednym zwartym zestawie.",
        "Pokazuje, jak wprowadzić walidację kontraktu i strażników latencji bez dedykowanych środowisk zewnętrznych.",
        "Czytelny, powtarzalny przykład inżynierii jakości backendu łatwy do uruchomienia w CI.",
        "Demo pozostaje bezpieczne i gotowe do publikacji, opierając się wyłącznie na lokalnym, syntetycznym serwisie.",
      ],
      conclusion:
        "Jakość API jest najsilniejsza, gdy poprawność i responsywność weryfikuje się razem. To demo pokazuje lekką drogę do takiego połączonego sygnału wyłącznie na lokalnych, powtarzalnych zasobach.",
    },

    "jmeter-performance": {
      slug: "jmeter-performance",
      title: "Pakiet wydajnościowy JMeter",
      subtitle: "Bezpieczny lokalny starter wydajnościowy z mock API, wielokrotnego użytku planem JMeter i scenariuszowymi danymi obciążenia",
      role: "Autor",
      context: "Demo open source · testy obciążeniowe",
      overview:
        "Ten mini-projekt to skupiony starter inżynierii wydajności. Łączy lokalne mock API, wielokrotnego użytku plan testów JMeter, dane scenariuszy w CSV i mały skrypt uruchomieniowy, aby bezpiecznie zademonstrować bazowe testy obciążeniowe na danych syntetycznych. Celem nie jest symulacja dużej platformy, lecz pokazanie, jak czysty, wytłumaczalny setup wydajnościowy można spakować do szybkiej iteracji, nauki i dalszego rozwoju.",
      challenge: [
        "Testy wydajnościowe bywają odkładane, bo zespołom brakuje bezpiecznego środowiska do wczesnych eksperymentów.",
        "Wiele przykładów jest albo zbyt trywialnych, by były użyteczne, albo zbyt zależnych od środowiska, by dało się je łatwo współdzielić.",
        "Dobry starter powinien pokazywać więcej niż pojedynczy plik JMX — także otaczający kontekst wykonania.",
        "Publiczne demonstracje nie mogą generować obciążenia na systemach, których nie posiadamy wyraźnie do testów.",
      ],
      approach: [
        "Stworzyłem lokalne mock API w Pythonie symulujące prosty backend podsumowania konta z regulowanym opóźnieniem odpowiedzi.",
        "Przygotowałem wielokrotnego użytku plan JMeter z asercjami, wejściami scenariuszy z CSV i strukturą gotową pod generowanie dashboardów.",
        "Dodałem lekki skrypt uruchomieniowy upraszczający lokalne wykonanie i prezentację.",
        "Oparłem projekt na danych syntetycznych i wykonaniu wyłącznie lokalnym, aby demo było bezpieczne, etyczne i przenośne.",
        "Ustawiłem repozytorium jako pakiet bazowy, który można później rozszerzyć o mocniejsze raportowanie, progi i dodatkowe scenariusze.",
      ],
      stack: [
        { category: "Rdzeń", items: ["Apache JMeter", "Python 3", "Dane scenariuszy CSV"] },
        { category: "Wydajność", items: ["Bazowe testy obciążeniowe", "Asercje", "Symulacja opóźnień"] },
        { category: "Wykonanie", items: ["Lokalne mock API", "Wielokrotnego użytku plan JMX", "Bezpieczny setup lokalny"] },
      ],
      outcomes: [
        "Praktyczny punkt wejścia w testy wydajnościowe na samowystarczalnych zasobach lokalnych.",
        "Pokazuje, jak pakować pracę w JMeterze w sposób zrozumiały, wielokrotnego użytku i rozszerzalny.",
        "Bezpieczny publiczny przykład testów obciążeniowych bez celowania w systemy zewnętrzne.",
        "Wzmacnia wydajnościową stronę portfolio jasno zakreślonym artefaktem skupionym na JMeterze.",
      ],
      conclusion:
        "Inżynieria wydajności nie musi zaczynać się od złożonej infrastruktury. Ten pakiet pokazuje, jak mały, lokalny setup JMeter może ustanowić użyteczny baseline i przekazać praktyczne myślenie o wydajności.",
    },
  },

  how: {
    eyebrow: "Jak pracuję",
    title: "Jakość jako inżynieria systemów",
    manifesto:
      "Traktuję automatyzację testów jako problem architektoniczny, nie zadanie skryptowe. Frameworki, które przeżyją kolejny redesign, dane wydajnościowe, które docierają do decydentów, i sygnały z CI, którym ludzie naprawdę ufają — na tym polega ta praca.",
    steps: [
      {
        step: "01",
        title: "Zrozum",
        description: "Poznaj system, zidentyfikuj obszary ryzyka i zdefiniuj, co znaczy jakość, zanim zaczniesz budować automatyzację.",
      },
      {
        step: "02",
        title: "Zaprojektuj",
        description: "Twórz wzorce frameworka stabilne mimo zmian produktu — nie skrypty, które pękną przy kolejnym wydaniu.",
      },
      {
        step: "03",
        title: "Zautomatyzuj",
        description: "Skup się na przepływach o wysokiej wartości i punktach integracji, gdzie automatyzacja realnie podnosi pewność dostarczania.",
      },
      {
        step: "04",
        title: "Raportuj",
        description: "Zamieniaj dane z wykonania i wyniki wydajnościowe w uporządkowane sygnały wspierające decyzje inżynierskie.",
      },
    ],
  },

  ai: {
    eyebrow: "AI w QA",
    title: "AI w inżynierii jakości — lokalnie, prywatnie, użytecznie",
    lead: "Nie do generowania testów. Do przyspieszania analizy, interpretacji wyników i wspierania decyzji inżynierskich — z modelami działającymi on-premises przez Ollamę, więc wrażliwe dane nigdy nie opuszczają sieci.",
    useCases: [
      {
        title: "Analiza wyników testów",
        description: "Parsowanie logów, grupowanie błędów i wskazywanie przyczyn — szybciej niż ręczny triage.",
        details: [
          "Podsumowania błędów testów w wielu zestawach",
          "Grupowanie podobnych błędów według wzorca",
          "Wskazywanie prawdopodobnych przyczyn ze stack trace'ów",
        ],
      },
      {
        title: "Interpretacja raportów wydajności",
        description: "Zamiana wyników JMetera i baseline'ów wydajności w konkretne obserwacje.",
        details: [
          "Wyjaśnianie anomalii przepustowości i latencji",
          "Porównywanie przebiegów z historycznymi baseline'ami",
          "Podsumowania czytelne dla interesariuszy",
        ],
      },
      {
        title: "Raportowanie wspierane AI",
        description: "Uporządkowane raporty z surowych danych testowych — spójny format, bez ręcznego pisania.",
        details: [
          "Narracyjne podsumowania z danych wykonania",
          "Wnioski dla zarządu i flagi ryzyka",
          "Spójne formatowanie między cyklami raportów",
        ],
      },
      {
        title: "Lokalne AI / systemy on-prem",
        description: "Modele uruchamiane lokalnie przez Ollamę. Wrażliwe dane nie opuszczają środowiska.",
        details: [
          "Brak zewnętrznych wywołań API do analizy",
          "Wrażliwe dane pozostają w sieci",
          "Powtarzalne, wersjonowane workflow",
        ],
      },
    ],
    terminal: {
      title: "qa-agent — sesja lokalna",
      command: "qa-agent analyze results/run-142.jtl --baseline results/run-138.jtl",
      lines: [
        "▸ sparsowano 48 210 próbek · 6 transakcji · 0,42 % błędów",
        "▸ latencja p95: 812 ms → 1 034 ms (+27 %) na POST /transfer",
        "▸ przepustowość stabilna: 118 rps vs 121 rps w baseline",
        "▸ klaster błędów: 91 % HTTP 502 z gatewaya między 14:32–14:35",
        "▸ prawdopodobna przyczyna: timeout upstreamu w oknie deployu (zob. release notes)",
        "✓ raport zapisany → reports/run-142-summary.docx (model lokalny · zero wycieku danych)",
      ],
    },
    footnote: "Traktuję AI jako narzędzie inżynierskie — użyteczne, gdy poprawia jakość sygnału, ogranicza ręczną pracę i trzyma decyzje przy danych.",
  },

  stack: {
    eyebrow: "Stack",
    title: "Narzędzia, z którymi pracuję codziennie",
    lead: "Kluczowe technologie i metody w automatyzacji, wydajności, narzędziach dostarczania i zastosowaniach AI.",
    groups: [
      {
        category: "Inżynieria automatyzacji",
        items: ["Java", "Selenium WebDriver", "Appium", "Playwright", "Maven", "TestNG / JUnit", "Page Object Model", "Testy data-driven"],
      },
      {
        category: "Inżynieria wydajności",
        items: ["Apache JMeter", "Analiza CSV / JTL", "Raportowanie wydajności", "Porównanie trendów", "Wizualizacja wyników"],
      },
      {
        category: "CI/CD i narzędzia",
        items: ["Jenkins", "GitHub Actions", "Pipeline'y budowania", "Integracja z Jirą", "Zephyr Scale", "Praca z Gitem"],
      },
      {
        category: "AI i systemy agentowe",
        items: ["Integracja LLM", "Ollama / lokalne AI", "Orkiestracja agentów", "Projektowanie promptów i systemów", "Analiza wspierana AI"],
      },
    ],
    logos: [
      { slug: "openjdk", label: "Java" },
      { slug: "selenium", label: "Selenium" },
      { slug: "appium", label: "Appium" },
      { slug: "bitbucket", label: "Bitbucket" },
      { slug: "apachejmeter", label: "Apache JMeter" },
      { slug: "python", label: "Python" },
      { slug: "typescript", label: "TypeScript" },
      { slug: "jenkins", label: "Jenkins" },
      { slug: "githubactions", label: "GitHub Actions" },
      { slug: "apachemaven", label: "Maven" },
      { slug: "junit5", label: "JUnit 5" },
      { slug: "jira", label: "Jira" },
      { slug: "ollama", label: "Ollama" },
      { slug: "docker", label: "Docker" },
      { slug: "git", label: "Git" },
      { slug: "android", label: "Android" },
      { slug: "apple", label: "iOS" },
      { slug: "pandas", label: "pandas" },
    ],
  },

  proof: {
    eyebrow: "Efekty",
    title: "Wyniki, nie przymiotniki",
    lead: "Co ta praca realnie zmieniła — plus prawdziwy raport z pipeline'u i CV do przeczytania w dwie minuty.",
    impact: [
      { value: "godziny → min", label: "analizy wydajności na cykl testowy", detail: "Pipeline raportowania z AI" },
      { value: "Android + iOS", label: "jeden framework, obie platformy", detail: "Aplikacja bankowa, hybrydowy WebView" },
      { value: "0", label: "ręcznych synchronizacji wyników do Zephyra", detail: "Każdy przebieg CI publikuje się sam" },
      { value: "100 %", label: "wnioskowania AI on-premises", detail: "Ollama, zero wycieku danych" },
    ],
    report: {
      title: "Przykładowy raport wydajności",
      description: "Prawdziwy wynik pipeline'u raportowania: wyniki testu obciążeniowego z analizą przepustowości, rozkładem latencji, podziałem błędów i streszczeniem dla zarządu.",
      cta: "Otwórz PDF",
      href: "/reports/sample-report.pdf",
      previewAlt: "Pierwsza strona wygenerowanego raportu wydajności",
    },
    cv: {
      title: "Curriculum vitae",
      description: "Dwie strony, gotowe do druku. Bank Pekao S.A. (2019–dziś), T-Mobile, Tsunami, Agora — 15+ lat w QA, automatyzacji i web.",
    },
  },

  contact: {
    eyebrow: "Następny krok",
    title: "Rozwiążmy problem z jakością",
    lead: "Pomagam zespołom inżynierskim wydawać z pewnością — architektura automatyzacji, pipeline'y wydajnościowe i systemy jakości wspierane AI. Jeśli Twój cykl wydań potrzebuje odblokowania, porozmawiajmy o zakresie.",
    emailCta: "Zacznij rozmowę",
    linkedinCta: "LinkedIn",
    githubCta: "GitHub",
  },
};
