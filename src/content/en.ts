import type { Content } from "./types";

export const en: Content = {
  locale: "en",

  site: {
    name: "Michał Kochaniak",
    role: "Senior Test Automation Engineer",
    location: "Łódź, Poland (remote)",
    email: "kochaniakmichal@gmail.com",
    linkedin: "https://linkedin.com/in/michalkochaniak",
    github: "https://github.com/mikoch81",
    cvPdf: "/Michal_Kochaniak_CV.pdf",
    availability: "Open to opportunities",
  },

  meta: {
    title: "Michał Kochaniak | Senior Test Automation Engineer",
    description:
      "Senior Test Automation Engineer specializing in automation architecture, performance engineering, and AI-driven quality systems. Designing scalable frameworks, building data-driven reporting pipelines, and applying practical AI workflows in modern software delivery environments.",
    cvTitle: "CV",
    cvDescription:
      "Senior Test Automation Engineer. Automation architecture, performance engineering, AI-driven quality systems.",
  },

  nav: {
    work: "Work",
    how: "How I work",
    ai: "Applied AI",
    stack: "Stack",
    proof: "Proof",
    contact: "Contact",
    cv: "CV",
  },

  ui: {
    skipToContent: "Skip to content",
    openMenu: "Open navigation",
    closeMenu: "Close navigation",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    switchLanguage: "Przełącz na polski",
    switchLanguageShort: "PL",
    viewWork: "View selected work",
    downloadCv: "Download CV",
    viewCv: "View CV",
    getInTouch: "Get in touch",
    viewCase: "Read case study",
    viewRepo: "View repository",
    allProjects: "All projects",
    copyEmail: "Copy e-mail address",
    copied: "Copied",
    backToPortfolio: "Back to portfolio",
    footerRights: "All rights reserved.",
    notFoundTitle: "Page not found",
    notFoundBody: "The page you are looking for does not exist or has moved.",
    backHome: "Back to home",
  },

  hero: {
    eyebrow: "Senior Test Automation Engineer, Łódź, Poland",
    headline: "Quality systems that teams can",
    headlineAccent: "actually maintain.",
    lead: "I design automation frameworks, performance reporting pipelines and privacy-safe AI workflows for enterprise delivery. Currently in banking, across web, mobile and WebView.",
    stats: [
      { value: "15+", label: "years in web and QA", detail: "since 2011" },
      { value: "9", label: "years in test automation", detail: "since 2017" },
      { value: "4", label: "open-source demo repos", detail: "Playwright, Selenium, API, JMeter" },
    ],
    portraitAlt: "Portrait of Michał Kochaniak",
    sparklineLabel: "Illustrative p95 latency trend across regression runs",
  },

  work: {
    eyebrow: "Selected work",
    title: "Automation, performance and AI, built as systems rather than scripts",
    lead: "Four engagements that shaped how I work, plus a set of public, runnable demos you can clone and execute in minutes.",
    featuredLabel: "Case studies",
    openSourceLabel: "Open-source demos",
    openSourceLead: "Small, self-contained repositories: local demo apps, synthetic data, ready for CI. Each one shows a pattern I use in real projects.",
    categories: {
      automation: "Automation architecture",
      performance: "Performance engineering",
      ci: "CI/CD and traceability",
      ai: "Applied AI",
    },
  },

  projects: [
    {
      slug: "mobile-test-automation",
      title: "Mobile test automation for a banking app",
      category: "automation",
      featured: true,
      summary:
        "Layered Appium framework for a hybrid banking app: native and WebView flows on Android and iOS, wired into Jenkins.",
      outcome: "Stable regression coverage for critical flows that survived several major UI redesigns.",
      tech: ["Java", "Appium", "Selenium", "TestNG", "Jenkins"],
      cover: "mobile",
    },
    {
      slug: "ai-performance-reporting",
      title: "AI performance reporting system",
      category: "performance",
      featured: true,
      summary:
        "Python pipeline that turns raw JMeter output into charts and stakeholder-ready DOCX/PDF reports, with a local LLM writing the narrative.",
      outcome: "Per-cycle analysis went from hours of manual work to minutes.",
      tech: ["Python", "JMeter", "pandas", "Ollama"],
      cover: "chart",
    },
    {
      slug: "jira-zephyr-ci",
      title: "Jira + Zephyr + CI quality pipeline",
      category: "ci",
      featured: true,
      summary:
        "TestNG listeners and a Zephyr Scale integration that publish every CI run to Jira with requirement-level traceability.",
      outcome: "Eliminated manual result synchronisation. Quality became visible per sprint and release.",
      tech: ["Java", "Zephyr Scale API", "Jenkins", "GitHub Actions"],
      cover: "pipeline",
    },
    {
      slug: "agentic-qa-assistant",
      title: "Agentic QA assistant",
      category: "ai",
      featured: true,
      summary:
        "On-premises LLM assistant (Ollama) that interprets test results, compares baselines and drafts QA reports. No data leaves the network.",
      outcome: "Reduced routine analysis effort with a reusable, fully local agent foundation.",
      tech: ["Ollama", "Python", "Prompt design", "Agent orchestration"],
      cover: "terminal",
    },
    {
      slug: "playwright-web-e2e-demo",
      title: "Playwright web E2E demo",
      category: "automation",
      featured: false,
      badge: "Open source",
      summary: "Login, cart and checkout journeys against a local demo app. HTML reports, failure diagnostics, GitHub Actions.",
      outcome: "Manual smoke path turned into a repeatable quality gate.",
      tech: ["Playwright", "TypeScript", "GitHub Actions"],
      cover: "browser",
      repositoryUrl: "https://github.com/mikoch81/playwright-web-e2e-demo",
    },
    {
      slug: "selenium-framework-demo",
      title: "Selenium framework demo",
      category: "automation",
      featured: false,
      badge: "Open source",
      summary: "Java + Selenium 4 framework skeleton: Page Objects, driver factory, screenshot artifacts, embedded demo server.",
      outcome: "Enterprise-friendly foundation for stable UI regression in Java teams.",
      tech: ["Java 21", "Selenium 4", "JUnit 5", "Maven"],
      cover: "browser",
      repositoryUrl: "https://github.com/mikoch81/selenium-framework-demo",
    },
    {
      slug: "api-testing-demo",
      title: "API testing demo",
      category: "performance",
      featured: false,
      badge: "Open source",
      summary: "Health checks, JSON contract validation and p95 latency baselines against a synthetic HTTP service.",
      outcome: "Correctness and responsiveness validated in one lightweight Maven suite.",
      tech: ["Java 21", "JUnit 5", "HttpClient", "Jackson"],
      cover: "api",
      repositoryUrl: "https://github.com/mikoch81/api-testing-demo",
    },
    {
      slug: "jmeter-performance",
      title: "JMeter performance pack",
      category: "performance",
      featured: false,
      badge: "Open source",
      summary: "Reusable JMeter plan, CSV scenario data and a Python mock API with controllable latency for safe baseline load tests.",
      outcome: "A reproducible entry point into performance engineering, with no external systems touched.",
      tech: ["JMeter", "Python", "CSV scenarios"],
      cover: "chart",
      repositoryUrl: "https://github.com/mikoch81/jmeter-performance",
    },
  ],

  caseStudyUi: {
    overview: "Overview",
    challenge: "Challenge",
    approach: "Approach",
    stack: "Technology stack",
    outcomes: "Outcomes",
    summary: "Summary",
    atAGlance: "At a glance",
    role: "Role",
    context: "Context",
    category: "Category",
    repository: "Repository",
    related: "Related work",
  },

  caseStudies: {
    "ai-performance-reporting": {
      slug: "ai-performance-reporting",
      title: "AI Performance Reporting System",
      subtitle: "Automated pipeline turning raw JMeter output into structured, stakeholder-ready performance reports",
      role: "Design and implementation",
      context: "Enterprise performance testing",
      overview:
        "Performance testing produces large volumes of raw data: JTL files, CSV exports, server-side metrics. All of it needs skilled interpretation before it becomes actionable. This project replaced a manual analysis workflow with an automated Python pipeline that ingests JMeter results, computes statistical metrics, generates charts, and produces structured DOCX/PDF reports. An LLM layer running on Ollama adds narrative summaries, flags anomalies, and provides plain-language interpretation for non-technical readers.",
      challenge: [
        "Manual analysis of JMeter results consumed hours per test cycle and was inconsistent between analysts.",
        "Reports varied in structure, depth, and quality depending on who wrote them.",
        "Non-technical stakeholders struggled to extract actionable conclusions from raw performance data.",
        "Historical trend comparison required tedious manual data extraction across multiple result files.",
      ],
      approach: [
        "Designed a Python pipeline to parse JTL/CSV result files and compute key performance metrics: response times, throughput, error rates, and percentile distributions.",
        "Built chart generation in matplotlib (response time distributions, throughput curves, error breakdowns), embedded directly into report templates.",
        "Created DOCX/PDF report templates with a consistent structure: executive summary, detailed metrics, trend comparison, conclusions, and recommendations.",
        "Integrated an LLM layer (Ollama) that generates narrative analysis sections and translates statistical data into clear, human-readable conclusions.",
        "Added historical comparison logic to automatically surface regressions and improvements across test runs.",
      ],
      stack: [
        { category: "Core", items: ["Python", "pandas", "matplotlib"] },
        { category: "Data", items: ["JTL / CSV parsing", "Statistical analysis", "Percentile computation"] },
        { category: "Reporting", items: ["python-docx", "FPDF", "Template engine"] },
        { category: "AI", items: ["Ollama", "LLM prompt engineering", "Narrative generation"] },
      ],
      outcomes: [
        "Reduced per-cycle analysis time from hours of manual work to minutes of automated processing.",
        "Standardized report structure across the team. Every report now follows a consistent, professional format.",
        "Enabled non-technical stakeholders to understand performance results without engineer interpretation.",
        "Historical trend detection surfaced regressions that were previously missed in manual reviews.",
      ],
      conclusion:
        "The value of performance engineering lies in how efficiently results reach decision-makers. Automating the analysis-to-report pipeline, with an AI-assisted narrative, turned raw data into structured deliverables that directly supported release decisions.",
    },

    "mobile-test-automation": {
      slug: "mobile-test-automation",
      title: "Mobile Test Automation for a Banking App",
      subtitle: "Cross-platform automation framework for critical banking flows on Android and iOS",
      role: "Framework architecture and implementation",
      context: "Banking, hybrid mobile app",
      overview:
        "A banking application needed reliable automated regression across Android and iOS. The app combined native UI, hybrid WebView screens, and multi-step authentication, which created real challenges for automation stability. This project involved designing a test framework from scratch, with a focus on maintainability, cross-platform reuse, and CI/CD integration.",
      challenge: [
        "Hybrid app architecture with native and WebView contexts required careful handling of context switching during test execution.",
        "Complex authentication flows (biometrics, one-time codes, session management) created flaky automation scenarios.",
        "Frequent UI changes across releases demanded a framework designed for minimal maintenance overhead.",
        "Cross-platform coverage needed to be achieved without duplicating the entire test suite for Android and iOS.",
      ],
      approach: [
        "Designed a layered framework architecture: Page Objects for UI abstraction, service layers for API interactions, and a shared test logic layer that works across both platforms.",
        "Implemented robust context-switching utilities for seamless native-to-WebView transitions, with auto-retry and wait strategies for stability.",
        "Created a dynamic element identification system combining accessibility IDs, XPath fallbacks, and platform-specific locator strategies.",
        "Built data-driven test patterns allowing the same test scenarios to run against multiple environments and user profiles.",
        "Integrated the framework with Jenkins pipelines for automated regression execution on every release candidate.",
      ],
      stack: [
        { category: "Core", items: ["Java", "Appium", "Selenium WebDriver"] },
        { category: "Build", items: ["Maven", "TestNG", "Profile management"] },
        { category: "Patterns", items: ["Page Object Model", "Data-driven testing", "Cross-platform abstraction"] },
        { category: "CI/CD", items: ["Jenkins", "Parallel execution", "Report integration"] },
      ],
      outcomes: [
        "Achieved stable automation coverage for critical banking user flows across both Android and iOS.",
        "Reduced regression testing cycle time by enabling parallel automated execution.",
        "Framework architecture withstood multiple major UI redesigns with minimal locator maintenance.",
        "Provided the team with clear, automated pass/fail signals integrated directly into release pipelines.",
      ],
      conclusion:
        "Mobile automation in banking demands architecture built for real-world complexity: hybrid apps, complex authentication, constant UI evolution. This framework prioritised durability, and its layered structure held up across multiple major releases.",
    },

    "jira-zephyr-ci": {
      slug: "jira-zephyr-ci",
      title: "Jira + Zephyr + CI Quality Pipeline",
      subtitle: "Connecting automated test execution to Jira and Zephyr Scale for real-time quality traceability",
      role: "Integration design and implementation",
      context: "Enterprise delivery, Jira ecosystem",
      overview:
        "Automated tests produce valuable quality signals, but those signals often stay trapped in CI logs, disconnected from where teams plan and decide. This project built a pipeline connecting Maven/TestNG execution with Jira and Zephyr Scale to automatically create test cycles, post results, link to requirements, and surface quality metrics inside the delivery workflow.",
      challenge: [
        "Test results lived in CI logs and HTML reports, disconnected from the Jira-based workflow where decisions were made.",
        "Manual updating of Zephyr test cycles after automated runs was slow, error-prone, and often skipped.",
        "Traceability between automated tests and requirements or stories was inconsistent, making coverage analysis unreliable.",
        "Quality metrics reporting required manual data assembly from multiple disconnected sources.",
      ],
      approach: [
        "Built a custom integration layer using the Zephyr Scale REST API to programmatically create test cycles and post execution results after each CI run.",
        "Implemented TestNG listeners that capture per-test metadata (pass/fail/skip, duration, error details) and format it for the Zephyr API.",
        "Created a requirement-linking system that maps automated test classes to Jira issues via annotations, maintaining traceability at the code level.",
        "Configured Jenkins and GitHub Actions pipelines to trigger the integration automatically on every build, with configurable environments and test cycle naming.",
        "Built a lightweight dashboard query layer that aggregates quality metrics from Jira and Zephyr for sprint and release reporting.",
      ],
      stack: [
        { category: "Core", items: ["Java", "Maven", "TestNG"] },
        { category: "Integration", items: ["Zephyr Scale API", "Jira REST API", "Custom listeners"] },
        { category: "CI/CD", items: ["Jenkins", "GitHub Actions", "Pipeline configuration"] },
        { category: "Reporting", items: ["Quality dashboards", "Sprint metrics", "Traceability mapping"] },
      ],
      outcomes: [
        "Eliminated manual test cycle updates. Every CI run automatically reports results to Zephyr Scale.",
        "Established full traceability between automated tests and Jira requirements.",
        "Gave product and engineering leadership real-time visibility into quality signals per sprint and release.",
        "Reduced reporting overhead and freed QA engineers to focus on analysis rather than data entry.",
      ],
      conclusion:
        "Quality engineering is only as valuable as its visibility. Connecting automated results directly to delivery tools made quality a first-class input to sprint planning and release decisions, not an afterthought in CI logs.",
    },

    "agentic-qa-assistant": {
      slug: "agentic-qa-assistant",
      title: "Agentic QA Assistant",
      subtitle: "On-premises LLM system for test result analysis, report interpretation, and QA decision support",
      role: "Architecture, prompts and orchestration",
      context: "Privacy-sensitive enterprise environment",
      overview:
        "Quality engineering involves repetitive cognitive work: parsing logs, comparing test runs, writing reports. This project designed a locally hosted LLM assistant that analyses results, interprets performance data, suggests investigation paths, and supports day-to-day QA decisions. All inference runs on-premises through Ollama, so no data leaves the network.",
      challenge: [
        "A significant share of QA effort goes to predictable, pattern-based tasks: log review, baseline comparison, report formatting.",
        "Performance report interpretation requires domain context that is difficult to transfer to new team members.",
        "Cloud-based AI tools raised data privacy concerns when processing internal test data and system information.",
        "Generic AI assistants lack the domain knowledge needed to provide useful QA guidance without extensive prompting.",
      ],
      approach: [
        "Designed an agent architecture using Ollama for local LLM inference, ensuring all data stays on-premises and no internal information is sent to external services.",
        "Built specialized prompt templates for common QA tasks: test failure analysis, performance comparison, regression investigation, and report generation.",
        "Implemented an orchestration layer that chains analysis steps, for example: parse results, compare to baseline, generate a summary, suggest next actions.",
        "Created a knowledge base of QA patterns, common failure modes, and performance benchmarks that the agent can reference during analysis.",
        "Designed the system for extensibility. New analysis capabilities can be added as modular prompt chains without restructuring the core architecture.",
      ],
      stack: [
        { category: "AI / LLM", items: ["Ollama", "Local LLM inference", "Prompt engineering"] },
        { category: "Architecture", items: ["Agent orchestration", "Chain-of-thought patterns", "Tool-use design"] },
        { category: "QA domain", items: ["Test result analysis", "Performance interpretation", "Failure pattern recognition"] },
        { category: "Integration", items: ["CLI interface", "Report parsing", "Pipeline hooks"] },
      ],
      outcomes: [
        "Demonstrated practical local AI integration for QA without cloud dependency or data privacy concerns.",
        "Reduced time spent on routine result analysis and report interpretation.",
        "Created a reusable framework for building domain-specific QA agents adaptable to different project contexts.",
        "Established patterns for human-AI collaboration in quality engineering: augmenting judgment, not replacing it.",
      ],
      conclusion:
        "AI in QA works best when it accelerates analysis rather than replacing judgment. A locally hosted, domain-aware assistant reduced repetitive cognitive work while keeping all data under team control.",
    },

    "playwright-web-e2e-demo": {
      slug: "playwright-web-e2e-demo",
      title: "Playwright Web E2E Demo",
      subtitle: "Local web regression pack focused on critical user journeys, fast feedback, and CI-ready diagnostics",
      role: "Author",
      context: "Open-source demo, runs locally",
      overview:
        "This project demonstrates how I approach modern web UI automation when the goal is not broad checkbox coverage, but reliable protection of the most business-critical user flows. The suite is built around a local demo app and focuses on a small set of high-value journeys: login, cart interaction, and purchase completion. It is supported by Playwright, HTML reporting, and failure diagnostics. The result is a compact, service-ready example of a repeatable smoke and regression layer that can run locally or in CI.",
      challenge: [
        "Teams often need quick, trustworthy feedback on core web journeys without investing in a large bespoke test environment upfront.",
        "External dependencies and unstable environments can turn small regression suites into flaky maintenance burdens.",
        "Manual smoke testing around login and checkout remains common, even when these flows are the most business-critical.",
        "Early-stage automation efforts need to be understandable, portable, and easy to wire into CI from day one.",
      ],
      approach: [
        "Built a local demo application with synthetic data so the suite can run safely and repeatably without depending on third-party systems.",
        "Selected a narrow but valuable scope: invalid login handling, successful login and checkout, and rule enforcement for empty-cart payment attempts.",
        "Used Playwright for fast browser automation, failure screenshots, retry support, and HTML reporting that gives immediate diagnostic value.",
        "Prepared the project for CI execution with GitHub Actions so the same quality signal is available both locally and in automation pipelines.",
        "Added a no-sudo bootstrap path for local Node execution to keep the demo portable across different developer environments.",
      ],
      stack: [
        { category: "Core", items: ["Playwright", "TypeScript", "Node.js"] },
        { category: "Test design", items: ["Critical user journeys", "Smoke pack", "Failure diagnostics"] },
        { category: "Execution", items: ["GitHub Actions", "HTML reporting", "Local demo app"] },
      ],
      outcomes: [
        "Demonstrates how a manual smoke path can be turned into a repeatable, automated quality gate.",
        "Shows a modern web automation stack that is easy to run locally and simple to integrate into CI.",
        "Provides a compact reference implementation for teams starting with Playwright-based web regression.",
        "Keeps all execution local and synthetic, which makes the demo safe, portable, and easy to present publicly.",
      ],
      conclusion:
        "Effective web automation starts with business-critical journeys and operational simplicity. This project shows how a small Playwright suite can deliver immediate regression value without unnecessary system complexity.",
    },

    "selenium-framework-demo": {
      slug: "selenium-framework-demo",
      title: "Selenium Framework Demo",
      subtitle: "Maintainable Java-based UI automation framework with Page Objects, local execution, and failure artifacts",
      role: "Author",
      context: "Open-source demo, Java ecosystem",
      overview:
        "This repository represents a more classical UI automation architecture built for teams working in Java-centric environments. Instead of focusing on individual test scripts, the project emphasizes reusable structure: WebDriver setup, Page Objects, local server execution, and screenshot artifact collection on failure. It is designed to show what an enterprise-friendly Selenium foundation looks like when maintainability and long-term regression stability matter as much as simple test coverage.",
      challenge: [
        "Many Selenium codebases grow organically into tightly coupled test scripts that are expensive to maintain.",
        "Teams in Java ecosystems often need a framework starter that fits existing build and execution standards.",
        "Public portfolio examples should avoid third-party dependencies while still demonstrating realistic regression structure.",
        "Failure diagnostics are often an afterthought, even though they directly affect maintainability and triage speed.",
      ],
      approach: [
        "Designed the demo around Page Objects and shared base test infrastructure to separate UI concerns from test logic.",
        "Used a local embedded demo application so the suite can run predictably without relying on public sites or external test environments.",
        "Implemented reusable WebDriver configuration and environment handling suitable for Maven-driven execution in CI.",
        "Added screenshot capture on failure to model a more production-ready debugging experience.",
        "Focused scenarios on login and purchase flow behavior to keep the business story clear while still showing framework patterns.",
      ],
      stack: [
        { category: "Core", items: ["Java 21", "Selenium 4", "JUnit 5", "Maven"] },
        { category: "Architecture", items: ["Page Object Model", "Shared test base", "Driver factory"] },
        { category: "Execution", items: ["Headless runs", "Local demo server", "Screenshot artifacts"] },
      ],
      outcomes: [
        "Shows a maintainable Selenium framework style aligned with long-term Java team workflows.",
        "Demonstrates the value of reusable setup, UI abstraction, and artifact capture over ad hoc test scripting.",
        "Provides a portfolio-ready example of enterprise-style UI automation without exposing external systems.",
        "Works as a concrete starting point for expanding into broader regression coverage in Java-based projects.",
      ],
      conclusion:
        "Selenium remains valuable when it is treated as framework architecture rather than a script collection. This demo focuses on maintainability, repeatability, and the operational patterns that matter in real teams.",
    },

    "api-testing-demo": {
      slug: "api-testing-demo",
      title: "API Testing Demo",
      subtitle: "Local backend quality pack combining health checks, contract validation, and response-time baselines",
      role: "Author",
      context: "Open-source demo, backend quality",
      overview:
        "This project shows how I approach backend quality when both correctness and responsiveness matter. It uses a local synthetic HTTP service and a Maven-based test suite to validate service health, compare endpoint responses against an expected contract, and assert simple performance baselines such as average response time and p95. The result is a lightweight but concrete example of introducing API quality signals without building a separate integration environment first.",
      challenge: [
        "Backend teams often validate correctness and performance in separate tools and at separate points in the delivery process.",
        "Even small services need confidence around contracts and response-time expectations, but teams may not have a dedicated shared test environment.",
        "Portfolio examples should demonstrate realistic backend verification while staying safe and fully local.",
        "Quality signals are more useful when they are cheap to run and easy to understand for both engineers and stakeholders.",
      ],
      approach: [
        "Built a local HTTP service with synthetic responses to keep the full validation loop self-contained and reproducible.",
        "Added a health check test to verify service availability and a contract test to compare payloads with an expected JSON structure.",
        "Implemented a simple performance baseline using repeated requests and assertions on average latency and p95.",
        "Used standard Java and Maven tooling so the project looks and behaves like a small, CI-ready backend quality suite.",
        "Kept the setup intentionally lightweight to show how useful signals can be introduced without heavy infrastructure overhead.",
      ],
      stack: [
        { category: "Core", items: ["Java 21", "JUnit 5", "Maven"] },
        { category: "API validation", items: ["Java HttpClient", "JSON contract checks", "Health checks"] },
        { category: "Performance", items: ["Average latency", "P95 baseline", "Synthetic HTTP service"] },
      ],
      outcomes: [
        "Demonstrates a combined correctness-and-performance view of API quality in one compact suite.",
        "Shows how contract validation and latency guardrails can be introduced without dedicated external environments.",
        "Provides a clear, repeatable example of backend quality engineering that is easy to run in CI.",
        "Keeps the demo safe and public-ready by relying only on local synthetic service behavior.",
      ],
      conclusion:
        "API quality is strongest when correctness and responsiveness are validated together. This demo shows a lightweight path to that combined signal using only local, reproducible assets.",
    },

    "jmeter-performance": {
      slug: "jmeter-performance",
      title: "JMeter Performance Pack",
      subtitle: "Safe local performance starter pack with a mock API, reusable JMeter plan, and scenario-driven load inputs",
      role: "Author",
      context: "Open-source demo, load testing",
      overview:
        "This mini-project is a focused performance engineering starter pack. It combines a local mock API, a reusable JMeter test plan, scenario data in CSV form, and a small execution helper so that baseline load testing can be demonstrated safely on synthetic data. The goal is not to simulate a large platform, but to show how a clean, explainable performance setup can be packaged for fast iteration, learning, and future extension.",
      challenge: [
        "Performance testing is often postponed because teams lack a safe environment for early experiments.",
        "Many examples are either too trivial to be useful or too environment-dependent to be easily shared and reused.",
        "A good starter pack should show more than a single JMX file. It should also model the surrounding execution context.",
        "Public-facing demonstrations must avoid generating load against systems that are not explicitly owned for testing.",
      ],
      approach: [
        "Created a local Python-based mock API that simulates a simple account-summary backend and supports controllable response delay.",
        "Prepared a reusable JMeter plan with assertions, scenario inputs from CSV, and a structure ready for dashboard generation.",
        "Added a lightweight run script to simplify local execution and make the setup easier to present and reuse.",
        "Designed the project around synthetic data and local-only execution so the demo remains safe, ethical, and portable.",
        "Positioned the repo as a baseline pack that can later be extended with stronger reporting, thresholds, and additional scenarios.",
      ],
      stack: [
        { category: "Core", items: ["Apache JMeter", "Python 3", "CSV scenario data"] },
        { category: "Performance", items: ["Baseline load testing", "Assertions", "Synthetic delay simulation"] },
        { category: "Execution", items: ["Local mock API", "Reusable JMX plan", "Safe local setup"] },
      ],
      outcomes: [
        "Demonstrates a practical entry point into performance testing using self-contained local assets.",
        "Shows how to package JMeter work in a way that is easy to understand, reuse, and extend.",
        "Provides a safe public example of load testing without targeting external systems.",
        "Strengthens the performance engineering side of the portfolio with a clearly scoped JMeter-focused artifact.",
      ],
      conclusion:
        "Performance engineering does not have to begin with complex infrastructure. This pack shows how a small, local JMeter setup can establish a useful baseline and communicate a practical performance mindset.",
    },
  },

  how: {
    eyebrow: "How I work",
    title: "Quality as systems engineering",
    manifesto:
      "I treat test automation as an architecture problem, not a scripting task. Frameworks that outlive the next redesign, performance data that reaches decision-makers, and CI signals that people actually trust. That is the job.",
    steps: [
      {
        step: "01",
        title: "Assess",
        description: "Understand the system, identify risk areas, and define what quality means before building automation.",
      },
      {
        step: "02",
        title: "Architect",
        description: "Design framework patterns that remain stable across product change, not scripts that break on the next release.",
      },
      {
        step: "03",
        title: "Automate",
        description: "Focus on high-value flows and integration points where automation improves delivery confidence.",
      },
      {
        step: "04",
        title: "Report",
        description: "Turn execution data and performance results into structured signals that support engineering decisions.",
      },
    ],
  },

  ai: {
    eyebrow: "Applied AI",
    title: "AI in quality engineering: local, private, useful",
    lead: "Not for generating tests. For accelerating analysis, interpreting results and supporting engineering decisions. Models run on-premises through Ollama, so sensitive data never leaves the network.",
    useCases: [
      {
        title: "Test result analysis",
        description: "Parsing logs, clustering failures, and surfacing root causes faster than manual triage.",
        details: [
          "Summarising test failures across suites",
          "Grouping similar errors by pattern",
          "Identifying likely root causes from stack traces",
        ],
      },
      {
        title: "Performance report interpretation",
        description: "Turning JMeter results and performance baselines into actionable observations.",
        details: [
          "Explaining throughput and latency anomalies",
          "Comparing runs against historical baselines",
          "Generating stakeholder-readable summaries",
        ],
      },
      {
        title: "AI-assisted reporting",
        description: "Structured reports from raw test data: consistent format, no manual writing.",
        details: [
          "Narrative summaries from execution data",
          "Executive-level conclusions and risk flags",
          "Consistent formatting across report cycles",
        ],
      },
      {
        title: "Local AI and on-premises systems",
        description: "Running models locally through Ollama. Sensitive data never leaves the environment.",
        details: [
          "No external API calls for analysis",
          "Sensitive data stays inside the network",
          "Reproducible and version-controlled workflows",
        ],
      },
    ],
    terminal: {
      title: "qa-agent: local session",
      command: "qa-agent analyze results/run-142.jtl --baseline results/run-138.jtl",
      lines: [
        "> parsed 48 210 samples | 6 transactions | 0.42% errors",
        "> p95 latency: 812 ms -> 1 034 ms (+27%) on POST /transfer",
        "> throughput stable: 118 rps vs 121 rps baseline",
        "> error cluster: 91% HTTP 502 from gateway between 14:32 and 14:35",
        "> likely cause: upstream timeout during deploy window (see release notes)",
        "OK report written -> reports/run-142-summary.docx (local model, no data egress)",
      ],
    },
    footnote: "I treat AI as an engineering tool. It is useful when it improves signal quality, reduces manual effort, and keeps decision-making grounded in data.",
  },

  stack: {
    eyebrow: "Stack",
    title: "Tools I work with daily",
    lead: "Core technologies and methods across automation, performance, delivery tooling and applied AI.",
    groups: [
      {
        category: "Automation engineering",
        items: ["Java", "Selenium WebDriver", "Appium", "Playwright", "Maven", "TestNG / JUnit", "Page Object Model", "Data-driven testing"],
      },
      {
        category: "Performance engineering",
        items: ["Apache JMeter", "CSV / JTL analysis", "Performance reporting", "Trend comparison", "Result visualization"],
      },
      {
        category: "CI/CD and tooling",
        items: ["Jenkins", "GitHub Actions", "Build pipelines", "Jira integration", "Zephyr Scale", "Git workflow"],
      },
      {
        category: "AI and agent systems",
        items: ["LLM integration", "Ollama / local AI", "Agent orchestration", "Prompt and system design", "AI-assisted analysis"],
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
    eyebrow: "Proof",
    title: "Outcomes, not adjectives",
    lead: "What the work actually changed, plus a real report from the pipeline and a CV you can read in two minutes.",
    impact: [
      { value: "Minutes", label: "instead of hours of performance analysis per test cycle", detail: "AI reporting pipeline" },
      { value: "Android + iOS", label: "one framework, both platforms", detail: "Banking app, hybrid WebView" },
      { value: "0", label: "manual result syncs to Zephyr", detail: "Every CI run publishes itself" },
      { value: "100%", label: "of AI inference on-premises", detail: "Ollama, no data egress" },
    ],
    report: {
      title: "Sample performance report",
      description: "Real output of the reporting pipeline: load test results with throughput analysis, latency distribution, error breakdown and an executive summary.",
      cta: "Open the PDF",
      href: "/reports/sample-report.pdf",
      previewAlt: "First page of a generated performance report",
    },
    cv: {
      title: "Curriculum vitae",
      description: "Two pages, print-ready. Bank Pekao S.A. (since 2019), T-Mobile, Tsunami, Agora. Over 15 years across QA, automation and web.",
    },
  },

  contact: {
    eyebrow: "Next step",
    title: "Let's solve a quality problem",
    lead: "I help engineering teams ship with confidence: automation architecture, performance pipelines and AI-assisted quality systems. If your release cycle needs unblocking, let's talk scope.",
    emailCta: "Start a conversation",
    linkedinCta: "LinkedIn",
    githubCta: "GitHub",
  },
};
