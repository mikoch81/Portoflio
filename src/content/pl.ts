import type { Content } from "./types";

export const pl: Content = {
  locale: "pl",

  site: {
    name: "Michał Kochaniak",
    role: "Senior Test Automation Engineer",
    location: "Łódź, praca zdalna",
    email: "kochaniakmichal@gmail.com",
    linkedin: "https://linkedin.com/in/michalkochaniak",
    github: "https://github.com/mikoch81",
    cvPdf: "/Michal_Kochaniak_CV.pdf",
    availability: "Otwarty na nowe projekty",
  },

  meta: {
    title: "Michał Kochaniak | Senior Test Automation Engineer",
    description:
      "Senior Test Automation Engineer: architektura automatyzacji testów, inżynieria wydajności i systemy jakości wspierane AI. Projektuję skalowalne frameworki, buduję pipeline'y raportowania oparte na danych i wdrażam praktyczne rozwiązania AI w procesie dostarczania oprogramowania.",
    cvTitle: "CV",
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
    eyebrow: "Senior Test Automation Engineer, Łódź",
    headline: "Systemy jakości, które zespoły potrafią",
    headlineAccent: "naprawdę utrzymać.",
    lead: "Projektuję frameworki automatyzacji, pipeline'y raportowania wydajności i bezpieczne dla danych rozwiązania AI dla organizacji klasy enterprise. Obecnie pracuję w bankowości: web, mobile i WebView.",
    stats: [
      { value: "15+", label: "lat w web i QA", detail: "od 2011" },
      { value: "9", label: "lat w automatyzacji testów", detail: "od 2017" },
      { value: "4", label: "publiczne repozytoria demo", detail: "Playwright, Selenium, API, JMeter" },
    ],
    portraitAlt: "Portret Michała Kochaniaka",
    sparklineLabel: "Przykładowy trend latencji p95 w kolejnych przebiegach regresji",
  },

  work: {
    eyebrow: "Wybrane projekty",
    title: "Automatyzacja, wydajność i AI budowane jako systemy, nie jako skrypty",
    lead: "Cztery wdrożenia, które ukształtowały mój sposób pracy, oraz zestaw publicznych demo, które sklonujesz i uruchomisz w kilka minut.",
    featuredLabel: "Case studies",
    openSourceLabel: "Demo open source",
    openSourceLead: "Małe, samowystarczalne repozytoria: lokalne aplikacje demo, dane syntetyczne, gotowość do uruchomienia w CI. Każde pokazuje wzorzec, którego używam w prawdziwych projektach.",
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
        "Warstwowy framework Appium dla hybrydowej aplikacji bankowej: przepływy natywne i WebView na Androidzie i iOS, zintegrowany z Jenkinsem.",
      outcome: "Stabilne pokrycie regresją krytycznych przepływów, które przetrwało kilka dużych przeprojektowań interfejsu.",
      tech: ["Java", "Appium", "Selenium", "TestNG", "Jenkins"],
      cover: "mobile",
    },
    {
      slug: "ai-performance-reporting",
      title: "System raportowania wydajności wspierany AI",
      category: "performance",
      featured: true,
      summary:
        "Pipeline w Pythonie, który zamienia surowe wyniki JMetera w wykresy i gotowe dla interesariuszy raporty DOCX/PDF. Część narracyjną pisze lokalny model językowy.",
      outcome: "Analiza jednego cyklu testowego skróciła się z godzin ręcznej pracy do minut.",
      tech: ["Python", "JMeter", "pandas", "Ollama"],
      cover: "chart",
    },
    {
      slug: "jira-zephyr-ci",
      title: "Pipeline jakości Jira + Zephyr + CI",
      category: "ci",
      featured: true,
      summary:
        "Listenery TestNG i integracja z Zephyr Scale, które publikują każdy przebieg CI do Jiry z powiązaniem do wymagań.",
      outcome: "Koniec ręcznej synchronizacji wyników. Jakość stała się widoczna w każdym sprincie i wydaniu.",
      tech: ["Java", "Zephyr Scale API", "Jenkins", "GitHub Actions"],
      cover: "pipeline",
    },
    {
      slug: "agentic-qa-assistant",
      title: "Agentowy asystent QA",
      category: "ai",
      featured: true,
      summary:
        "Lokalny asystent oparty na LLM (Ollama), który interpretuje wyniki testów, porównuje je z wartościami bazowymi i przygotowuje raporty QA. Żadne dane nie opuszczają sieci.",
      outcome: "Mniej rutynowej analizy oraz w pełni lokalna baza, na której powstają kolejne agenty.",
      tech: ["Ollama", "Python", "Projektowanie promptów", "Orkiestracja agentów"],
      cover: "terminal",
    },
    {
      slug: "playwright-web-e2e-demo",
      title: "Demo testów E2E w Playwright",
      category: "automation",
      featured: false,
      badge: "Open source",
      summary: "Ścieżki logowania, koszyka i zakupu na lokalnej aplikacji demo. Raporty HTML, diagnostyka błędów, GitHub Actions.",
      outcome: "Ręczny smoke test zamieniony w powtarzalną bramkę jakości.",
      tech: ["Playwright", "TypeScript", "GitHub Actions"],
      cover: "browser",
      repositoryUrl: "https://github.com/mikoch81/playwright-web-e2e-demo",
    },
    {
      slug: "selenium-framework-demo",
      title: "Demo frameworka Selenium",
      category: "automation",
      featured: false,
      badge: "Open source",
      summary: "Szkielet frameworka Java + Selenium 4: Page Objects, fabryka driverów, zrzuty ekranu przy błędach, wbudowany serwer demo.",
      outcome: "Fundament klasy enterprise pod stabilną regresję UI w zespołach pracujących w Javie.",
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
      summary: "Health checki, walidacja kontraktu JSON i progi latencji p95 na syntetycznym serwisie HTTP.",
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
      summary: "Gotowy do ponownego użycia plan JMeter, scenariusze w CSV i mock API w Pythonie z regulowaną latencją do bezpiecznych testów bazowych.",
      outcome: "Powtarzalny punkt wejścia w inżynierię wydajności, bez obciążania systemów zewnętrznych.",
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
      subtitle: "Zautomatyzowany pipeline, który zamienia surowe wyniki JMetera w uporządkowane raporty gotowe dla interesariuszy",
      role: "Projekt i implementacja",
      context: "Testy wydajnościowe w środowisku enterprise",
      overview:
        "Testy wydajnościowe generują duże ilości surowych danych: pliki JTL, eksporty CSV, metryki serwerowe. Zanim staną się użyteczne, wymagają kompetentnej interpretacji. Ten projekt zastąpił ręczny proces analizy zautomatyzowanym pipeline'em w Pythonie, który wczytuje wyniki JMetera, liczy metryki statystyczne, generuje wykresy i tworzy uporządkowane raporty DOCX/PDF. Warstwa LLM oparta na Ollamie dodaje narracyjne podsumowania, wskazuje anomalie i tłumaczy wyniki na język zrozumiały dla osób nietechnicznych.",
      challenge: [
        "Ręczna analiza wyników JMetera zajmowała godziny w każdym cyklu testowym, a jej jakość zależała od analityka.",
        "Raporty różniły się strukturą, szczegółowością i jakością w zależności od tego, kto je pisał.",
        "Interesariusze nietechniczni mieli trudność z wyciąganiem wniosków z surowych danych wydajnościowych.",
        "Porównywanie trendów historycznych wymagało żmudnego ręcznego wyciągania danych z wielu plików wyników.",
      ],
      approach: [
        "Zaprojektowałem pipeline w Pythonie, który parsuje pliki JTL/CSV i liczy kluczowe metryki: czasy odpowiedzi, przepustowość, wskaźniki błędów i rozkłady percentyli.",
        "Zbudowałem generowanie wykresów w matplotlib (rozkłady czasów odpowiedzi, krzywe przepustowości, podział błędów), osadzanych bezpośrednio w szablonach raportów.",
        "Przygotowałem szablony DOCX/PDF o stałej strukturze: streszczenie dla zarządu, szczegółowe metryki, porównanie trendów, wnioski i rekomendacje.",
        "Zintegrowałem warstwę LLM (Ollama), która generuje sekcje narracyjne i tłumaczy dane statystyczne na jasne, czytelne wnioski.",
        "Dodałem logikę porównań historycznych, która automatycznie wskazuje regresje i poprawy między przebiegami.",
      ],
      stack: [
        { category: "Rdzeń", items: ["Python", "pandas", "matplotlib"] },
        { category: "Dane", items: ["Parsowanie JTL / CSV", "Analiza statystyczna", "Obliczanie percentyli"] },
        { category: "Raportowanie", items: ["python-docx", "FPDF", "Silnik szablonów"] },
        { category: "AI", items: ["Ollama", "Prompt engineering", "Generowanie narracji"] },
      ],
      outcomes: [
        "Czas analizy jednego cyklu skrócił się z godzin ręcznej pracy do minut automatycznego przetwarzania.",
        "Struktura raportów w zespole została ujednolicona. Każdy raport ma teraz spójny, profesjonalny format.",
        "Interesariusze nietechniczni rozumieją wyniki wydajnościowe bez pośrednictwa inżyniera.",
        "Wykrywanie trendów historycznych ujawniło regresje, które wcześniej umykały w ręcznych przeglądach.",
      ],
      conclusion:
        "Wartość inżynierii wydajności mierzy się tym, jak szybko wyniki trafiają do osób decyzyjnych. Automatyzacja drogi od analizy do raportu, z narracją wspieraną AI, zamieniła surowe dane w uporządkowane materiały, które bezpośrednio wspierały decyzje o wydaniu.",
    },

    "mobile-test-automation": {
      slug: "mobile-test-automation",
      title: "Automatyzacja testów mobilnych aplikacji bankowej",
      subtitle: "Wieloplatformowy framework automatyzacji krytycznych przepływów bankowych na Androidzie i iOS",
      role: "Architektura i implementacja frameworka",
      context: "Bankowość, hybrydowa aplikacja mobilna",
      overview:
        "Aplikacja bankowa potrzebowała niezawodnej automatycznej regresji na Androidzie i iOS. Łączyła natywny interfejs, hybrydowe ekrany WebView i wieloetapowe uwierzytelnianie, co stanowiło realne wyzwanie dla stabilności automatyzacji. Projekt obejmował zaprojektowanie frameworka od zera, z naciskiem na łatwość utrzymania, współdzielenie kodu między platformami i integrację z CI/CD.",
      challenge: [
        "Hybrydowa architektura z kontekstem natywnym i WebView wymagała precyzyjnej obsługi przełączania kontekstu w trakcie testów.",
        "Złożone przepływy uwierzytelniania (biometria, kody jednorazowe, zarządzanie sesją) powodowały niestabilność scenariuszy.",
        "Częste zmiany interfejsu między wydaniami wymagały frameworka o niskim koszcie utrzymania.",
        "Pokrycie obu platform trzeba było osiągnąć bez duplikowania całego zestawu testów dla Androida i iOS.",
      ],
      approach: [
        "Zaprojektowałem architekturę warstwową: Page Objects jako abstrakcja interfejsu, warstwa serwisowa do komunikacji z API i współdzielona logika testów działająca na obu platformach.",
        "Zaimplementowałem narzędzia do przełączania między kontekstem natywnym a WebView, z automatycznymi powtórzeniami i strategiami oczekiwania.",
        "Stworzyłem dynamiczny system identyfikacji elementów, który łączy accessibility ID, zapasowe lokatory XPath i lokatory specyficzne dla platformy.",
        "Zbudowałem wzorce data-driven, dzięki którym te same scenariusze działają na wielu środowiskach i profilach użytkowników.",
        "Zintegrowałem framework z pipeline'ami Jenkins, tak aby regresja uruchamiała się automatycznie dla każdego kandydata do wydania.",
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
        "Architektura przetrwała kilka dużych przeprojektowań interfejsu przy minimalnych zmianach w lokatorach.",
        "Zespół otrzymał jasne, automatyczne sygnały pass/fail wpięte bezpośrednio w pipeline'y wydań.",
      ],
      conclusion:
        "Automatyzacja mobilna w bankowości wymaga architektury zbudowanej pod realną złożoność: aplikacje hybrydowe, złożone uwierzytelnianie, ciągłe zmiany interfejsu. Ten framework stawiał na trwałość, a jego warstwowa struktura utrzymała się przez wiele dużych wydań.",
    },

    "jira-zephyr-ci": {
      slug: "jira-zephyr-ci",
      title: "Pipeline jakości Jira + Zephyr + CI",
      subtitle: "Połączenie automatycznego wykonywania testów z Jirą i Zephyr Scale, aby śledzić jakość w czasie rzeczywistym",
      role: "Projekt i implementacja integracji",
      context: "Dostarczanie oprogramowania w enterprise, ekosystem Jira",
      overview:
        "Testy automatyczne dostarczają cennych sygnałów o jakości, ale często zostają uwięzione w logach CI, z dala od miejsca, w którym zespoły planują i podejmują decyzje. W tym projekcie zbudowałem pipeline łączący wykonanie testów Maven/TestNG z Jirą i Zephyr Scale: automatyczne tworzenie cykli testowych, publikowanie wyników, powiązanie z wymaganiami i prezentowanie metryk jakości wewnątrz procesu dostarczania.",
      challenge: [
        "Wyniki testów żyły w logach CI i raportach HTML, odcięte od procesu w Jirze, w którym podejmowano decyzje.",
        "Ręczne aktualizowanie cykli w Zephyrze po automatycznych przebiegach było wolne, podatne na błędy i często pomijane.",
        "Powiązanie testów automatycznych z wymaganiami i historyjkami było niespójne, co czyniło analizę pokrycia niewiarygodną.",
        "Raportowanie metryk jakości wymagało ręcznego składania danych z wielu rozproszonych źródeł.",
      ],
      approach: [
        "Zbudowałem warstwę integracyjną na Zephyr Scale REST API, która programowo tworzy cykle testowe i publikuje wyniki po każdym przebiegu CI.",
        "Zaimplementowałem listenery TestNG zbierające metadane każdego testu (pass/fail/skip, czas, szczegóły błędu) i formatujące je pod API Zephyra.",
        "Stworzyłem mechanizm powiązania wymagań, który przez adnotacje mapuje klasy testowe na zgłoszenia w Jirze. Traceability jest utrzymywana na poziomie kodu.",
        "Skonfigurowałem pipeline'y Jenkins i GitHub Actions uruchamiające integrację przy każdym buildzie, z konfigurowalnymi środowiskami i nazewnictwem cykli.",
        "Zbudowałem lekką warstwę zapytań, która agreguje metryki jakości z Jiry i Zephyra do raportów sprintowych i wydaniowych.",
      ],
      stack: [
        { category: "Rdzeń", items: ["Java", "Maven", "TestNG"] },
        { category: "Integracja", items: ["Zephyr Scale API", "Jira REST API", "Własne listenery"] },
        { category: "CI/CD", items: ["Jenkins", "GitHub Actions", "Konfiguracja pipeline'ów"] },
        { category: "Raportowanie", items: ["Dashboardy jakości", "Metryki sprintowe", "Mapowanie traceability"] },
      ],
      outcomes: [
        "Koniec ręcznych aktualizacji cykli. Każdy przebieg CI sam raportuje wyniki do Zephyr Scale.",
        "Pełne powiązanie testów automatycznych z wymaganiami w Jirze.",
        "Liderzy produktu i inżynierii zyskali bieżący wgląd w sygnały jakości dla każdego sprintu i wydania.",
        "Mniejszy koszt raportowania: inżynierowie QA skupiają się na analizie, a nie na wpisywaniu danych.",
      ],
      conclusion:
        "Inżynieria jakości jest warta tyle, ile jej widoczność. Bezpośrednie połączenie wyników automatyzacji z narzędziami dostarczania uczyniło jakość pełnoprawnym elementem planowania sprintów i decyzji o wydaniu, a nie przypisem w logach CI.",
    },

    "agentic-qa-assistant": {
      slug: "agentic-qa-assistant",
      title: "Agentowy asystent QA",
      subtitle: "Lokalny system oparty na LLM do analizy wyników testów, interpretacji raportów i wspierania decyzji QA",
      role: "Architektura, prompty i orkiestracja",
      context: "Środowisko enterprise wrażliwe na dane",
      overview:
        "Inżynieria jakości to sporo powtarzalnej pracy analitycznej: parsowanie logów, porównywanie przebiegów, pisanie raportów. Ten projekt to lokalnie hostowany asystent oparty na LLM, który analizuje wyniki, interpretuje dane wydajnościowe, podpowiada kierunki dochodzenia i wspiera codzienne decyzje QA. Całe wnioskowanie działa lokalnie przez Ollamę, więc żadne dane nie opuszczają sieci.",
      challenge: [
        "Znaczna część pracy QA idzie na przewidywalne, schematyczne zadania: przegląd logów, porównanie z wartościami bazowymi, formatowanie raportów.",
        "Interpretacja raportów wydajnościowych wymaga wiedzy domenowej, którą trudno przekazać nowym członkom zespołu.",
        "Chmurowe narzędzia AI budziły obawy o prywatność przy przetwarzaniu wewnętrznych danych testowych i informacji o systemach.",
        "Ogólne asystenty AI nie mają wiedzy domenowej, aby bez rozbudowanego promptowania dawać sensowne wskazówki QA.",
      ],
      approach: [
        "Zaprojektowałem architekturę agenta na Ollamie z lokalnym wnioskowaniem. Wszystkie dane pozostają w sieci firmowej, nic nie trafia do usług zewnętrznych.",
        "Zbudowałem wyspecjalizowane szablony promptów dla typowych zadań QA: analizy błędów testów, porównania wydajności, badania regresji i generowania raportów.",
        "Zaimplementowałem warstwę orkiestracji, która łączy kroki analizy w łańcuchy, na przykład: parsowanie wyników, porównanie z wartościami bazowymi, podsumowanie, propozycja kolejnych działań.",
        "Stworzyłem bazę wiedzy o wzorcach QA, typowych rodzajach awarii i punktach odniesienia dla wydajności, z której agent korzysta podczas analizy.",
        "Zaprojektowałem system z myślą o rozszerzalności. Nowe możliwości analityczne dodaje się jako modularne łańcuchy promptów, bez przebudowy rdzenia.",
      ],
      stack: [
        { category: "AI / LLM", items: ["Ollama", "Lokalne wnioskowanie LLM", "Prompt engineering"] },
        { category: "Architektura", items: ["Orkiestracja agentów", "Wzorce chain-of-thought", "Projektowanie tool-use"] },
        { category: "Domena QA", items: ["Analiza wyników testów", "Interpretacja wydajności", "Rozpoznawanie wzorców błędów"] },
        { category: "Integracja", items: ["Interfejs CLI", "Parsowanie raportów", "Hooki w pipeline'ach"] },
      ],
      outcomes: [
        "Praktyczne wdrożenie lokalnego AI w QA bez zależności od chmury i bez ryzyka dla prywatności danych.",
        "Mniej czasu na rutynową analizę wyników i interpretację raportów.",
        "Framework do budowy domenowych agentów QA, który można dostosować do różnych projektów.",
        "Wypracowane wzorce współpracy człowieka z AI w inżynierii jakości: wzmacnianie osądu, a nie zastępowanie go.",
      ],
      conclusion:
        "AI w QA działa najlepiej, gdy przyspiesza analizę, a nie zastępuje osąd. Lokalny asystent z wiedzą domenową ograniczył powtarzalną pracę analityczną, a wszystkie dane pozostały pod kontrolą zespołu.",
    },

    "playwright-web-e2e-demo": {
      slug: "playwright-web-e2e-demo",
      title: "Demo testów E2E w Playwright",
      subtitle: "Lokalny pakiet regresji web skupiony na krytycznych ścieżkach użytkownika, szybkiej informacji zwrotnej i diagnostyce gotowej do CI",
      role: "Autor",
      context: "Demo open source, działa lokalnie",
      overview:
        "Ten projekt pokazuje moje podejście do nowoczesnej automatyzacji interfejsu web, gdy celem nie jest szerokie pokrycie dla samego pokrycia, lecz niezawodna ochrona najważniejszych biznesowo przepływów. Zestaw jest zbudowany wokół lokalnej aplikacji demo i skupia się na kilku ścieżkach o wysokiej wartości: logowaniu, koszyku i finalizacji zakupu. Wspierają go Playwright, raporty HTML i diagnostyka błędów. Efekt to zwarty, gotowy do użycia przykład powtarzalnej warstwy smoke i regresji, uruchamianej lokalnie i w CI.",
      challenge: [
        "Zespoły często potrzebują szybkiej, wiarygodnej informacji o kluczowych ścieżkach web bez inwestowania z góry w duże, dedykowane środowisko testowe.",
        "Zależności zewnętrzne i niestabilne środowiska potrafią zamienić mały zestaw regresji w kosztowny w utrzymaniu balast.",
        "Ręczny smoke test logowania i zakupu wciąż jest powszechny, choć to najbardziej krytyczne biznesowo przepływy.",
        "Wczesne inicjatywy automatyzacji muszą być zrozumiałe, przenośne i łatwe do wpięcia w CI od pierwszego dnia.",
      ],
      approach: [
        "Zbudowałem lokalną aplikację demo z danymi syntetycznymi, aby zestaw działał bezpiecznie i powtarzalnie, bez zależności od systemów zewnętrznych.",
        "Wybrałem wąski, ale wartościowy zakres: obsługę błędnego logowania, poprawne logowanie i zakup oraz egzekwowanie reguły płatności przy pustym koszyku.",
        "Użyłem Playwrighta do szybkiej automatyzacji przeglądarki, zrzutów ekranu przy błędach, ponownych prób i raportów HTML o natychmiastowej wartości diagnostycznej.",
        "Przygotowałem projekt do uruchamiania w GitHub Actions, aby ten sam sygnał jakości był dostępny lokalnie i w pipeline'ach.",
        "Dodałem ścieżkę uruchomienia Node bez uprawnień administratora, aby demo było przenośne między środowiskami deweloperskimi.",
      ],
      stack: [
        { category: "Rdzeń", items: ["Playwright", "TypeScript", "Node.js"] },
        { category: "Projekt testów", items: ["Krytyczne ścieżki użytkownika", "Pakiet smoke", "Diagnostyka błędów"] },
        { category: "Wykonanie", items: ["GitHub Actions", "Raporty HTML", "Lokalna aplikacja demo"] },
      ],
      outcomes: [
        "Pokazuje, jak ręczną ścieżkę smoke zamienić w powtarzalną, zautomatyzowaną bramkę jakości.",
        "Prezentuje nowoczesny stack automatyzacji web, łatwy do uruchomienia lokalnie i prosty w integracji z CI.",
        "Zwarta implementacja referencyjna dla zespołów, które zaczynają regresję web w Playwrighcie.",
        "Całe wykonanie jest lokalne i syntetyczne, dzięki czemu demo jest bezpieczne, przenośne i łatwe do publicznej prezentacji.",
      ],
      conclusion:
        "Skuteczna automatyzacja web zaczyna się od krytycznych biznesowo ścieżek i prostoty operacyjnej. Ten projekt pokazuje, jak mały zestaw w Playwright może dać natychmiastową wartość regresyjną bez zbędnej złożoności.",
    },

    "selenium-framework-demo": {
      slug: "selenium-framework-demo",
      title: "Demo frameworka Selenium",
      subtitle: "Łatwy w utrzymaniu framework automatyzacji UI w Javie z Page Objects, lokalnym wykonaniem i artefaktami błędów",
      role: "Autor",
      context: "Demo open source, ekosystem Java",
      overview:
        "To repozytorium pokazuje bardziej klasyczną architekturę automatyzacji UI dla zespołów pracujących w Javie. Zamiast pojedynczych skryptów testowych kładzie nacisk na strukturę wielokrotnego użytku: konfigurację WebDrivera, Page Objects, lokalne wykonanie na serwerze demo i zbieranie zrzutów ekranu przy błędach. Pokazuje, jak wygląda fundament Selenium klasy enterprise, gdy łatwość utrzymania i długoterminowa stabilność regresji liczą się tak samo jak samo pokrycie.",
      challenge: [
        "Wiele baz kodu Selenium rozrasta się w ciasno powiązane skrypty, które są drogie w utrzymaniu.",
        "Zespoły pracujące w Javie potrzebują startowego frameworka pasującego do ich standardów budowania i wykonywania testów.",
        "Publiczne przykłady portfolio powinny unikać zależności od stron trzecich, a jednocześnie pokazywać realistyczną strukturę regresji.",
        "Diagnostyka błędów bywa dodawana na końcu, choć bezpośrednio wpływa na koszt utrzymania i szybkość analizy problemów.",
      ],
      approach: [
        "Zbudowałem demo wokół Page Objects i wspólnej infrastruktury testów bazowych, oddzielając warstwę interfejsu od logiki testów.",
        "Użyłem lokalnej, wbudowanej aplikacji demo, aby zestaw działał przewidywalnie, bez publicznych stron i zewnętrznych środowisk.",
        "Zaimplementowałem konfigurację WebDrivera i obsługę środowisk do wielokrotnego użycia, pod wykonanie Mavenem w CI.",
        "Dodałem zapis zrzutów ekranu przy błędach, aby odwzorować produkcyjny sposób debugowania.",
        "Skupiłem scenariusze na logowaniu i przepływie zakupu, aby historia biznesowa była czytelna, a wzorce frameworka nadal widoczne.",
      ],
      stack: [
        { category: "Rdzeń", items: ["Java 21", "Selenium 4", "JUnit 5", "Maven"] },
        { category: "Architektura", items: ["Page Object Model", "Wspólna baza testów", "Fabryka driverów"] },
        { category: "Wykonanie", items: ["Tryb headless", "Lokalny serwer demo", "Zrzuty ekranu jako artefakty"] },
      ],
      outcomes: [
        "Pokazuje łatwy w utrzymaniu styl frameworka Selenium, zgodny z długoterminową pracą zespołów Java.",
        "Demonstruje wartość konfiguracji wielokrotnego użytku, abstrakcji interfejsu i zbierania artefaktów zamiast skryptów pisanych ad hoc.",
        "Gotowy do portfolio przykład automatyzacji UI w stylu enterprise, bez odwołań do systemów zewnętrznych.",
        "Konkretny punkt startowy do rozszerzania pokrycia regresją w projektach opartych na Javie.",
      ],
      conclusion:
        "Selenium pozostaje wartościowe, gdy traktuje się je jako architekturę frameworka, a nie zbiór skryptów. To demo skupia się na łatwości utrzymania, powtarzalności i wzorcach operacyjnych, które liczą się w prawdziwych zespołach.",
    },

    "api-testing-demo": {
      slug: "api-testing-demo",
      title: "Demo testów API",
      subtitle: "Lokalny pakiet jakości backendu łączący health checki, walidację kontraktu i progi czasów odpowiedzi",
      role: "Autor",
      context: "Demo open source, jakość backendu",
      overview:
        "Ten projekt pokazuje, jak podchodzę do jakości backendu, gdy liczą się zarówno poprawność, jak i responsywność. Wykorzystuje lokalny, syntetyczny serwis HTTP i zestaw testów Maven do weryfikacji dostępności usługi, porównania odpowiedzi endpointów z oczekiwanym kontraktem i sprawdzenia prostych progów wydajności, takich jak średni czas odpowiedzi i p95. Efekt to lekki, ale konkretny przykład wprowadzania sygnałów jakości API bez budowania osobnego środowiska integracyjnego.",
      challenge: [
        "Zespoły backendowe często weryfikują poprawność i wydajność w osobnych narzędziach i na osobnych etapach procesu dostarczania.",
        "Nawet małe serwisy potrzebują pewności co do kontraktów i czasów odpowiedzi, a zespoły nie zawsze mają dedykowane, współdzielone środowisko testowe.",
        "Przykłady w portfolio powinny pokazywać realistyczną weryfikację backendu, pozostając bezpieczne i w pełni lokalne.",
        "Sygnały jakości są bardziej użyteczne, gdy są tanie w uruchomieniu i zrozumiałe zarówno dla inżynierów, jak i interesariuszy.",
      ],
      approach: [
        "Zbudowałem lokalny serwis HTTP z syntetycznymi odpowiedziami, aby cała pętla walidacji była samowystarczalna i powtarzalna.",
        "Dodałem test health check weryfikujący dostępność oraz test kontraktu porównujący odpowiedzi z oczekiwaną strukturą JSON.",
        "Zaimplementowałem prosty próg wydajności oparty na powtarzanych żądaniach i asercjach na średnią latencję i p95.",
        "Użyłem standardowej Javy i Mavena, aby projekt wyglądał i działał jak mały, gotowy do CI zestaw jakości backendu.",
        "Zachowałem celowo lekką konfigurację, aby pokazać, jak wprowadzać użyteczne sygnały bez ciężkiej infrastruktury.",
      ],
      stack: [
        { category: "Rdzeń", items: ["Java 21", "JUnit 5", "Maven"] },
        { category: "Walidacja API", items: ["Java HttpClient", "Kontrakty JSON", "Health checki"] },
        { category: "Wydajność", items: ["Średnia latencja", "Próg p95", "Syntetyczny serwis HTTP"] },
      ],
      outcomes: [
        "Połączony obraz poprawności i wydajności API w jednym zwartym zestawie.",
        "Pokazuje, jak wprowadzić walidację kontraktu i progi latencji bez dedykowanych środowisk zewnętrznych.",
        "Czytelny, powtarzalny przykład inżynierii jakości backendu, łatwy do uruchomienia w CI.",
        "Demo pozostaje bezpieczne i gotowe do publikacji, bo opiera się wyłącznie na lokalnym, syntetycznym serwisie.",
      ],
      conclusion:
        "Jakość API jest najsilniejsza, gdy poprawność i responsywność weryfikuje się razem. To demo pokazuje lekką drogę do takiego połączonego sygnału wyłącznie na lokalnych, powtarzalnych zasobach.",
    },

    "jmeter-performance": {
      slug: "jmeter-performance",
      title: "Pakiet wydajnościowy JMeter",
      subtitle: "Bezpieczny lokalny pakiet startowy z mock API, planem JMeter do ponownego użycia i scenariuszowymi danymi obciążenia",
      role: "Autor",
      context: "Demo open source, testy obciążeniowe",
      overview:
        "To niewielki, skoncentrowany pakiet startowy z inżynierii wydajności. Łączy lokalne mock API, plan testów JMeter do ponownego użycia, dane scenariuszy w CSV i mały skrypt uruchomieniowy, aby bezpiecznie zademonstrować bazowe testy obciążeniowe na danych syntetycznych. Celem nie jest symulacja dużej platformy, lecz pokazanie, jak czytelną konfigurację wydajnościową można spakować do szybkiej iteracji, nauki i dalszego rozwoju.",
      challenge: [
        "Testy wydajnościowe bywają odkładane, bo zespołom brakuje bezpiecznego środowiska do wczesnych eksperymentów.",
        "Wiele przykładów jest albo zbyt trywialnych, by były użyteczne, albo zbyt zależnych od środowiska, by dało się je łatwo współdzielić.",
        "Dobry pakiet startowy powinien pokazywać więcej niż pojedynczy plik JMX, także otaczający go kontekst wykonania.",
        "Publiczne demonstracje nie mogą generować obciążenia na systemach, które nie są przeznaczone do testów.",
      ],
      approach: [
        "Stworzyłem lokalne mock API w Pythonie, które symuluje prosty backend podsumowania konta i pozwala regulować opóźnienie odpowiedzi.",
        "Przygotowałem plan JMeter do ponownego użycia, z asercjami, danymi scenariuszy z CSV i strukturą gotową do generowania dashboardów.",
        "Dodałem lekki skrypt uruchomieniowy, który upraszcza lokalne wykonanie i prezentację.",
        "Oparłem projekt na danych syntetycznych i wykonaniu wyłącznie lokalnym, aby demo było bezpieczne, etyczne i przenośne.",
        "Zaprojektowałem repozytorium jako pakiet bazowy, który można później rozszerzyć o dokładniejsze raportowanie, progi i dodatkowe scenariusze.",
      ],
      stack: [
        { category: "Rdzeń", items: ["Apache JMeter", "Python 3", "Dane scenariuszy CSV"] },
        { category: "Wydajność", items: ["Bazowe testy obciążeniowe", "Asercje", "Symulacja opóźnień"] },
        { category: "Wykonanie", items: ["Lokalne mock API", "Plan JMX do ponownego użycia", "Bezpieczna konfiguracja lokalna"] },
      ],
      outcomes: [
        "Praktyczny punkt wejścia w testy wydajnościowe na samowystarczalnych zasobach lokalnych.",
        "Pokazuje, jak pakować pracę w JMeterze w sposób zrozumiały, wielokrotnego użytku i rozszerzalny.",
        "Bezpieczny publiczny przykład testów obciążeniowych bez celowania w systemy zewnętrzne.",
        "Wzmacnia wydajnościową część portfolio jasno zakreślonym projektem skupionym na JMeterze.",
      ],
      conclusion:
        "Inżynieria wydajności nie musi zaczynać się od złożonej infrastruktury. Ten pakiet pokazuje, jak mała, lokalna konfiguracja JMeter może ustanowić użyteczny punkt odniesienia i przekazać praktyczne myślenie o wydajności.",
    },
  },

  how: {
    eyebrow: "Jak pracuję",
    title: "Jakość jako inżynieria systemów",
    manifesto:
      "Traktuję automatyzację testów jako problem architektoniczny, a nie zadanie skryptowe. Frameworki, które przeżyją kolejny redesign, dane wydajnościowe, które docierają do decydentów, i sygnały z CI, którym ludzie naprawdę ufają. Na tym polega ta praca.",
    steps: [
      {
        step: "01",
        title: "Zrozum",
        description: "Poznaj system, zidentyfikuj obszary ryzyka i zdefiniuj, co znaczy jakość, zanim zaczniesz budować automatyzację.",
      },
      {
        step: "02",
        title: "Zaprojektuj",
        description: "Twórz wzorce frameworka stabilne mimo zmian produktu, a nie skrypty, które pękną przy kolejnym wydaniu.",
      },
      {
        step: "03",
        title: "Zautomatyzuj",
        description: "Skup się na przepływach o wysokiej wartości i punktach integracji, gdzie automatyzacja realnie podnosi pewność dostarczania.",
      },
      {
        step: "04",
        title: "Raportuj",
        description: "Zamieniaj dane z wykonania testów i wyniki wydajnościowe w uporządkowane sygnały, które wspierają decyzje inżynierskie.",
      },
    ],
  },

  ai: {
    eyebrow: "AI w QA",
    title: "AI w inżynierii jakości: lokalnie, prywatnie, użytecznie",
    lead: "Nie do generowania testów. Do przyspieszania analizy, interpretacji wyników i wspierania decyzji inżynierskich. Modele działają lokalnie przez Ollamę, więc wrażliwe dane nie opuszczają sieci.",
    useCases: [
      {
        title: "Analiza wyników testów",
        description: "Parsowanie logów, grupowanie błędów i wskazywanie przyczyn szybciej niż w ręcznym triage'u.",
        details: [
          "Podsumowania błędów testów w wielu zestawach",
          "Grupowanie podobnych błędów według wzorca",
          "Wskazywanie prawdopodobnych przyczyn na podstawie stack trace'ów",
        ],
      },
      {
        title: "Interpretacja raportów wydajności",
        description: "Zamiana wyników JMetera i wartości bazowych w konkretne obserwacje.",
        details: [
          "Wyjaśnianie anomalii przepustowości i latencji",
          "Porównywanie przebiegów z historycznymi wartościami bazowymi",
          "Podsumowania czytelne dla interesariuszy",
        ],
      },
      {
        title: "Raportowanie wspierane AI",
        description: "Uporządkowane raporty z surowych danych testowych: spójny format, bez ręcznego pisania.",
        details: [
          "Narracyjne podsumowania z danych wykonania",
          "Wnioski dla zarządu i oznaczenia ryzyka",
          "Spójne formatowanie między cyklami raportów",
        ],
      },
      {
        title: "Lokalne AI i systemy on-premises",
        description: "Modele uruchamiane lokalnie przez Ollamę. Wrażliwe dane nie opuszczają środowiska.",
        details: [
          "Brak zewnętrznych wywołań API podczas analizy",
          "Wrażliwe dane pozostają w sieci firmowej",
          "Powtarzalne, wersjonowane procesy",
        ],
      },
    ],
    terminal: {
      title: "qa-agent: sesja lokalna",
      command: "qa-agent analyze results/run-142.jtl --baseline results/run-138.jtl",
      lines: [
        "> sparsowano 48 210 próbek | 6 transakcji | 0,42% błędów",
        "> latencja p95: 812 ms -> 1 034 ms (+27%) na POST /transfer",
        "> przepustowość stabilna: 118 rps vs 121 rps w baseline",
        "> klaster błędów: 91% HTTP 502 z gatewaya między 14:32 a 14:35",
        "> prawdopodobna przyczyna: timeout upstreamu w oknie deployu (zob. release notes)",
        "OK raport zapisany -> reports/run-142-summary.docx (model lokalny, zero wycieku danych)",
      ],
    },
    footnote: "Traktuję AI jako narzędzie inżynierskie. Jest użyteczne, gdy poprawia jakość sygnału, ogranicza ręczną pracę i trzyma decyzje przy danych.",
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
    lead: "Co ta praca realnie zmieniła. Do tego prawdziwy raport z pipeline'u i CV do przeczytania w dwie minuty.",
    impact: [
      { value: "Minuty", label: "zamiast godzin analizy wydajności w każdym cyklu testowym", detail: "Pipeline raportowania z AI" },
      { value: "Android + iOS", label: "jeden framework, obie platformy", detail: "Aplikacja bankowa, hybrydowy WebView" },
      { value: "0", label: "ręcznych synchronizacji wyników do Zephyra", detail: "Każdy przebieg CI publikuje się sam" },
      { value: "100%", label: "wnioskowania AI lokalnie, w sieci firmowej", detail: "Ollama, zero wycieku danych" },
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
      description: "Dwie strony, gotowe do druku. Bank Pekao S.A. (od 2019), T-Mobile, Tsunami, Agora. Ponad 15 lat w QA, automatyzacji i web.",
    },
  },

  contact: {
    eyebrow: "Następny krok",
    title: "Rozwiążmy problem z jakością",
    lead: "Pomagam zespołom inżynierskim wydawać oprogramowanie z pewnością: architektura automatyzacji, pipeline'y wydajnościowe i systemy jakości wspierane AI. Jeśli Twój cykl wydań potrzebuje odblokowania, porozmawiajmy o zakresie.",
    emailCta: "Zacznij rozmowę",
    linkedinCta: "LinkedIn",
    githubCta: "GitHub",
  },
};
