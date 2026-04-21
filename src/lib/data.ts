export const siteConfig = {
  name: "Michał Kochaniak",
  title: "Senior Test Automation Engineer",
  subtitle: "AI-Driven Quality Systems · Performance Engineering · Automation Architecture",
  description:
    "I design and build automation frameworks, performance reporting systems, and AI-assisted quality workflows.",
  email: "kochaniakmichal@gmail.com",
  linkedin: "https://linkedin.com/in/michalkochaniak",
  github: "https://github.com/mikoch81",
};

export const credibilityItems = [
  "Automation Engineering",
  "Performance Engineering",
  "AI-Driven QA Systems",
  "Mobile & Web Testing",
  "Reporting Pipelines",
  "CI/CD Integrations",
];

export const pillars = [
  {
    title: "Automation Architecture",
    description:
      "Designing maintainable web and mobile automation frameworks built for long-term stability, cross-platform coverage, and CI/CD integration.",
    technologies: ["Java", "Selenium", "Appium", "Maven", "TestNG"],
  },
  {
    title: "Performance Engineering",
    description:
      "Turning raw JMeter results into structured analysis, visual reporting, and decision-ready performance insights.",
    technologies: ["JMeter", "CSV/JTL Analysis", "Python", "DOCX/PDF Generation"],
  },
  {
    title: "Applied AI in QA",
    description:
      "Using local LLMs and agent workflows to support test analysis, reporting, and engineering decisions without external data exposure.",
    technologies: ["LLMs", "Ollama", "Agent Orchestration", "Prompt Engineering"],
  },
];

export interface ProjectCard {
  slug: string;
  title: string;
  problem: string;
  summary: string;
  tech: string[];
  outcome: string;
  category: string;
  badge?: string;
}

export const projects: ProjectCard[] = [
  {
    slug: "playwright-web-e2e-demo",
    title: "Playwright Web E2E Demo",
    problem:
      "Teams often need a fast, modern regression pack for critical web journeys, but without a heavyweight environment setup or fragile external dependencies.",
    summary:
      "Built a local Playwright-based E2E demo covering login, cart, and checkout flows, with CI-ready execution, HTML reporting, and failure diagnostics.",
    tech: ["Playwright", "TypeScript", "GitHub Actions", "HTML Reports"],
    outcome:
      "Shows how manual smoke testing can be converted into a repeatable, pipeline-ready quality gate around the most business-critical user flow.",
    category: "Automation Architecture",
    badge: "New / Open Source",
  },
  {
    slug: "selenium-framework-demo",
    title: "Selenium Framework Demo",
    problem:
      "UI automation in Java projects often degrades into isolated scripts instead of a maintainable framework that teams can expand safely over time.",
    summary:
      "Created a Selenium + Java framework demo with Page Objects, reusable setup, screenshot artifacts, and a local demo application executed through Maven.",
    tech: ["Java", "Selenium", "JUnit 5", "Maven", "Page Objects"],
    outcome:
      "Demonstrates an enterprise-friendly framework foundation for stable UI regression in teams working in the Java ecosystem.",
    category: "Automation Architecture",
    badge: "New / Open Source",
  },
  {
    slug: "api-testing-demo",
    title: "API Testing Demo",
    problem:
      "Backend teams need quick assurance that key endpoints still behave correctly and stay within acceptable response-time guardrails.",
    summary:
      "Designed a local API quality demo combining health checks, contract validation, and performance baseline assertions in a lightweight Maven setup.",
    tech: ["Java", "JUnit 5", "HttpClient", "Jackson", "Maven"],
    outcome:
      "Provides a compact example of how to add backend quality signals without depending on a separate shared environment.",
    category: "Performance Engineering",
    badge: "New / Open Source",
  },
  {
    slug: "jmeter-performance",
    title: "JMeter Performance Pack",
    problem:
      "Performance work often starts too late, or requires external systems that make small, repeatable baseline checks harder to establish.",
    summary:
      "Prepared a JMeter starter pack with a local mock API, reusable test plan, scenario data, and a safe synthetic load setup for baseline performance testing.",
    tech: ["JMeter", "Python", "Load Testing", "Synthetic Data"],
    outcome:
      "Shows a practical entry point into performance engineering using local, reproducible assets that can evolve into broader load testing workflows.",
    category: "Performance Engineering",
    badge: "New / Open Source",
  },
  {
    slug: "ai-performance-reporting",
    title: "AI Performance Reporting System",
    problem:
      "Raw JTL and CSV outputs required hours of manual analysis, while reporting quality varied between cycles and stakeholders lacked self-service visibility.",
    summary:
      "Built an automated Python pipeline for performance analysis, chart generation, and structured DOCX/PDF reporting, with a local LLM layer for narrative summaries and anomaly flagging.",
    tech: ["Python", "JMeter", "pandas", "Ollama", "DOCX/PDF"],
    outcome:
      "Reduced reporting time from hours to minutes and established a consistent, stakeholder-ready reporting workflow.",
    category: "Performance Engineering",
  },
  {
    slug: "mobile-test-automation",
    title: "Mobile Test Automation for Banking App",
    problem:
      "A hybrid banking app with native and webview flows required reliable automated regression across Android and iOS under frequent UI change.",
    summary:
      "Designed a layered automation framework with cross-platform abstractions, webview context handling, and CI-ready execution patterns.",
    tech: ["Java", "Appium", "Selenium", "Maven", "TestNG"],
    outcome:
      "Delivered stable automation coverage for critical user flows with low maintenance overhead across major UI updates.",
    category: "Automation Architecture",
  },
  {
    slug: "jira-zephyr-ci",
    title: "Jira + Zephyr + CI Quality Pipeline",
    problem:
      "Automated test results were disconnected from Jira workflows, making traceability, reporting, and quality visibility inconsistent.",
    summary:
      "Implemented a CI-integrated quality pipeline that publishes automated results to Zephyr Scale and maintains requirement-level traceability in Jira.",
    tech: ["Java", "Maven", "Jenkins", "GitHub Actions", "Zephyr Scale"],
    outcome:
      "Established real-time quality visibility and removed manual result synchronisation from the delivery workflow.",
    category: "CI/CD Integration",
  },
  {
    slug: "agentic-qa-assistant",
    title: "Agentic QA Assistant",
    problem:
      "Senior QA time was repeatedly spent on routine tasks — reviewing logs, comparing baselines, and preparing reports.",
    summary:
      "Designed a locally hosted LLM-based assistant to support result interpretation, regression analysis, and QA reporting workflows in privacy-sensitive environments.",
    tech: ["Ollama", "LLM Orchestration", "Python", "Prompt Design"],
    outcome:
      "Reduced routine analysis effort and created a reusable foundation for domain-specific QA support with fully local processing.",
    category: "Applied AI",
  },
];

export const capabilities = [
  {
    category: "Automation Engineering",
    items: [
      "Java",
      "Selenium WebDriver",
      "Appium",
      "Maven",
      "TestNG / JUnit",
      "Page Object Model",
      "Cross-Platform Test Design",
      "Data-Driven Testing",
    ],
  },
  {
    category: "Performance Engineering",
    items: [
      "Apache JMeter",
      "CSV / JTL Analysis",
      "Performance Reporting",
      "Trend Comparison",
      "Result Visualization",
    ],
  },
  {
    category: "CI/CD & Tooling",
    items: [
      "Jenkins",
      "GitHub Actions",
      "Build Pipelines",
      "Jira Integration",
      "Zephyr Scale",
      "Git Workflow",
    ],
  },
  {
    category: "AI & Agent Systems",
    items: [
      "LLM Integration",
      "Ollama / Local AI",
      "Agent Orchestration",
      "Prompt & System Design",
      "AI-Assisted Analysis",
    ],
  },
];

export const aiUseCases = [
  {
    title: "Test Result Analysis",
    description:
      "Parsing logs, clustering failures, and surfacing root causes — faster than manual triage.",
    details: [
      "Summarising test failures across suites",
      "Grouping similar errors by pattern",
      "Identifying likely root causes from stack traces",
    ],
  },
  {
    title: "Performance Report Interpretation",
    description:
      "Interpreting JMeter results and performance baselines into actionable observations.",
    details: [
      "Explaining throughput and latency anomalies",
      "Comparing runs against historical baselines",
      "Generating stakeholder-readable summaries",
    ],
  },
  {
    title: "AI-Assisted Reporting",
    description:
      "Structured reports from raw test data — consistent format, no manual writing.",
    details: [
      "Narrative summaries from execution data",
      "Executive-level conclusions and risk flags",
      "Consistent formatting across report cycles",
    ],
  },
  {
    title: "Local AI / On-Prem Systems",
    description:
      "Running models locally via Ollama. Sensitive data never leaves the environment.",
    details: [
      "No external API calls for analysis",
      "Sensitive data stays inside the network",
      "Reproducible and version-controlled workflows",
    ],
  },
];

export const impactItems = [
  "Delivered maintainable automation for critical banking flows across Android and iOS",
  "Built reporting pipelines used by both engineering teams and executive stakeholders",
  "Connected automated test execution with Jira and Zephyr for end-to-end traceability",
  "Designed privacy-safe local AI workflows for QA analysis and engineering support",
];

export const processSteps = [
  {
    step: "01",
    title: "Assess",
    description:
      "Understand the system, identify risk areas, and define what quality means before building automation.",
  },
  {
    step: "02",
    title: "Architect",
    description:
      "Design framework patterns that remain stable across product change, not scripts that break on the next release.",
  },
  {
    step: "03",
    title: "Automate",
    description:
      "Focus on high-value flows and integration points where automation improves delivery confidence.",
  },
  {
    step: "04",
    title: "Report",
    description:
      "Turn execution data and performance results into structured signals that support engineering decisions.",
  },
];

// ---------------------------------------------------------------------------
// Project Case Studies
// ---------------------------------------------------------------------------

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  repositoryUrl?: string;
  challenge: string[];
  approach: string[];
  stack: { category: string; items: string[] }[];
  outcomes: string[];
  conclusion: string;
}

export const caseStudies: Record<string, CaseStudy> = {
  "ai-performance-reporting": {
    slug: "ai-performance-reporting",
    title: "AI Performance Reporting System",
    subtitle: "Automated pipeline turning raw JMeter output into structured, stakeholder-ready performance reports",
    overview:
      "Performance testing produces large volumes of raw data — JTL files, CSV exports, server-side metrics — that need skilled interpretation before they become actionable. This project replaced a manual analysis workflow with an automated Python pipeline that ingests JMeter results, computes statistical metrics, generates charts, and produces structured DOCX/PDF reports. An LLM layer via Ollama adds narrative summaries, flags anomalies, and provides plain-language interpretation for non-technical readers.",
    challenge: [
      "Manual analysis of JMeter results consumed hours per test cycle and was inconsistent between analysts.",
      "Reports varied in structure, depth, and quality depending on who wrote them.",
      "Non-technical stakeholders struggled to extract actionable conclusions from raw performance data.",
      "Historical trend comparison required tedious manual data extraction across multiple result files.",
    ],
    approach: [
      "Designed a Python pipeline to parse JTL/CSV result files and compute key performance metrics — response times, throughput, error rates, and percentile distributions.",
      "Built chart generation — response time distributions, throughput curves, error breakdowns — using matplotlib, embedded directly into report templates.",
      "Created DOCX/PDF report templates with consistent structure: executive summary, detailed metrics, trend comparison, conclusions, and recommendations.",
      "Integrated an LLM layer (via Ollama) to generate narrative analysis sections — translating statistical data into clear, human-readable conclusions.",
      "Added historical comparison logic to automatically surface regressions and improvements across test runs.",
    ],
    stack: [
      { category: "Core", items: ["Python", "pandas", "matplotlib"] },
      { category: "Data", items: ["JTL / CSV Parsing", "Statistical Analysis", "Percentile Computation"] },
      { category: "Reporting", items: ["python-docx", "FPDF", "Template Engine"] },
      { category: "AI", items: ["Ollama", "LLM Prompt Engineering", "Narrative Generation"] },
    ],
    outcomes: [
      "Reduced per-cycle analysis time from hours of manual work to minutes of automated processing.",
      "Standardized report structure across the team — every report now follows a consistent, professional format.",
      "Enabled non-technical stakeholders to understand performance results without engineer interpretation.",
      "Historical trend detection surfaced regressions that were previously missed in manual reviews.",
    ],
    conclusion:
      "The value of performance engineering is in how efficiently results reach decision-makers. Automating the analysis-to-report pipeline — with AI-assisted narrative — turned raw data into structured deliverables that directly supported release decisions.",
  },

  "mobile-test-automation": {
    slug: "mobile-test-automation",
    title: "Mobile Test Automation for Banking App",
    subtitle: "Cross-platform automation framework for critical banking flows on Android and iOS",
    overview:
      "A banking application needed reliable automated regression across Android and iOS. The app combined native UI, hybrid webview screens, and multi-step authentication — creating real challenges for automation stability. This project involved designing a test framework from scratch, with a focus on maintainability, cross-platform reuse, and CI/CD integration.",
    challenge: [
      "Hybrid app architecture with native and webview contexts required careful handling of context switching during test execution.",
      "Complex authentication flows (biometrics, OTP, session management) created flaky automation scenarios.",
      "Frequent UI changes across releases demanded a framework designed for minimal maintenance overhead.",
      "Cross-platform coverage needed to be achieved without duplicating the entire test suite for Android and iOS.",
    ],
    approach: [
      "Designed a layered framework architecture: Page Objects for UI abstraction, service layers for API interactions, and a shared test logic layer that works across both platforms.",
      "Implemented robust context-switching utilities for seamless native-to-webview transitions, with auto-retry and wait strategies for stability.",
      "Created a dynamic element identification system combining accessibility IDs, XPath fallbacks, and platform-specific locator strategies.",
      "Built data-driven test patterns allowing the same test scenarios to run against multiple environments and user profiles.",
      "Integrated the framework with Jenkins pipelines for automated regression execution on every release candidate.",
    ],
    stack: [
      { category: "Core", items: ["Java", "Appium", "Selenium WebDriver"] },
      { category: "Build", items: ["Maven", "TestNG", "Profile Management"] },
      { category: "Patterns", items: ["Page Object Model", "Data-Driven Testing", "Cross-Platform Abstraction"] },
      { category: "CI/CD", items: ["Jenkins", "Parallel Execution", "Report Integration"] },
    ],
    outcomes: [
      "Achieved stable automation coverage for critical banking user flows across both Android and iOS.",
      "Reduced regression testing cycle time by enabling parallel automated execution.",
      "Framework architecture withstood multiple major UI redesigns with minimal locator maintenance.",
      "Provided the team with clear, automated pass/fail signals integrated directly into release pipelines.",
    ],
    conclusion:
      "Mobile automation in banking demands architecture built for real-world complexity — hybrid apps, complex auth, constant UI evolution. This framework prioritised durability, and its layered structure held up across multiple major releases.",
  },

  "jira-zephyr-ci": {
    slug: "jira-zephyr-ci",
    title: "Jira + Zephyr + CI Quality Pipeline",
    subtitle: "Connecting automated test execution to Jira and Zephyr Scale for real-time quality traceability",
    overview:
      "Automated tests produce valuable quality signals, but those signals often stay trapped in CI logs — disconnected from where teams plan and decide. This project built a pipeline connecting Maven/TestNG execution with Jira and Zephyr Scale to automatically create test cycles, post results, link to requirements, and surface quality metrics inside the delivery workflow.",
    challenge: [
      "Test results lived in CI logs and HTML reports — disconnected from the Jira-based workflow where decisions were made.",
      "Manual updating of Zephyr test cycles after automated runs was slow, error-prone, and often skipped.",
      "Traceability between automated tests and requirements/stories was inconsistent, making coverage analysis unreliable.",
      "Quality metrics reporting required manual data assembly from multiple disconnected sources.",
    ],
    approach: [
      "Built a custom integration layer using the Zephyr Scale REST API to programmatically create test cycles and post execution results after each CI run.",
      "Implemented TestNG listeners that capture per-test metadata (pass/fail/skip, duration, error details) and format it for the Zephyr API.",
      "Created a requirement-linking system that maps automated test classes to Jira issues via annotations, maintaining traceability at the code level.",
      "Configured Jenkins and GitHub Actions pipelines to trigger the integration automatically on every build, with configurable environments and test cycle naming.",
      "Built a lightweight dashboard query layer that aggregates quality metrics from Jira/Zephyr for sprint and release reporting.",
    ],
    stack: [
      { category: "Core", items: ["Java", "Maven", "TestNG"] },
      { category: "Integration", items: ["Zephyr Scale API", "Jira REST API", "Custom Listeners"] },
      { category: "CI/CD", items: ["Jenkins", "GitHub Actions", "Pipeline Configuration"] },
      { category: "Reporting", items: ["Quality Dashboards", "Sprint Metrics", "Traceability Mapping"] },
    ],
    outcomes: [
      "Eliminated manual test cycle updates — every CI run automatically reports results to Zephyr Scale.",
      "Established full traceability between automated tests and Jira requirements.",
      "Gave product and engineering leadership real-time visibility into quality signals per sprint and release.",
      "Reduced reporting overhead and freed QA engineers to focus on analysis rather than data entry.",
    ],
    conclusion:
      "Quality engineering is only as valuable as its visibility. Connecting automated results directly to delivery tools made quality a first-class input to sprint planning and release decisions — not an afterthought in CI logs.",
  },

  "agentic-qa-assistant": {
    slug: "agentic-qa-assistant",
    title: "Agentic QA Assistant",
    subtitle: "On-premises LLM system for test result analysis, report interpretation, and QA decision support",
    overview:
      "Quality engineering involves repetitive cognitive work — parsing logs, comparing test runs, writing reports. This project designed a locally-hosted LLM assistant that analyses results, interprets performance data, suggests investigation paths, and supports day-to-day QA decisions. All inference runs on-premises via Ollama — no data leaves the network.",
    challenge: [
      "A significant share of QA effort goes to predictable, pattern-based tasks — log review, baseline comparison, report formatting.",
      "Performance report interpretation requires domain context that is difficult to transfer to new team members.",
      "Cloud-based AI tools raised data privacy concerns when processing internal test data and system information.",
      "Generic AI assistants lack the domain knowledge needed to provide useful QA guidance without extensive prompting.",
    ],
    approach: [
      "Designed an agent architecture using Ollama for local LLM inference, ensuring all data stays on-premises and no internal information is sent to external services.",
      "Built specialized prompt templates for common QA tasks: test failure analysis, performance comparison, regression investigation, and report generation.",
      "Implemented an orchestration layer that can chain multiple analysis steps — e.g., parse results → compare to baseline → generate summary → suggest next actions.",
      "Created a knowledge base of QA patterns, common failure modes, and performance benchmarks that the agent can reference during analysis.",
      "Designed the system for extensibility — new analysis capabilities can be added as modular prompt chains without restructuring the core architecture.",
    ],
    stack: [
      { category: "AI / LLM", items: ["Ollama", "Local LLM Inference", "Prompt Engineering"] },
      { category: "Architecture", items: ["Agent Orchestration", "Chain-of-Thought Patterns", "Tool-Use Design"] },
      { category: "QA Domain", items: ["Test Result Analysis", "Performance Interpretation", "Failure Pattern Recognition"] },
      { category: "Integration", items: ["CLI Interface", "Report Parsing", "Pipeline Hooks"] },
    ],
    outcomes: [
      "Demonstrated practical local AI integration for QA without cloud dependency or data privacy concerns.",
      "Reduced time spent on routine result analysis and report interpretation.",
      "Created a reusable framework for building domain-specific QA agents adaptable to different project contexts.",
      "Established patterns for human-AI collaboration in quality engineering — augmenting judgment, not replacing it.",
    ],
    conclusion:
      "AI in QA works best when it accelerates analysis rather than replacing judgment. A locally-hosted, domain-aware assistant reduced repetitive cognitive work while keeping all data under team control.",
  },

  "playwright-web-e2e-demo": {
    slug: "playwright-web-e2e-demo",
    title: "Playwright Web E2E Demo",
    subtitle: "Local web regression pack focused on critical user journeys, fast feedback, and CI-ready diagnostics",
    overview:
      "This project demonstrates how I approach modern web UI automation when the goal is not broad checkbox coverage, but reliable protection of the most business-critical user flows. The suite is built around a local demo app and focuses on a small set of high-value journeys — login, cart interaction, and purchase completion — supported by Playwright, HTML reporting, and failure diagnostics. The result is a compact, service-ready example of a repeatable smoke/regression layer that can be run locally or in CI.",
    repositoryUrl: "https://github.com/mikoch81/playwright-web-e2e-demo",
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
      { category: "Test Design", items: ["Critical User Journeys", "Smoke Pack", "Failure Diagnostics"] },
      { category: "Execution", items: ["GitHub Actions", "HTML Reporting", "Local Demo App"] },
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
    overview:
      "This repository represents a more classical UI automation architecture built for teams working in Java-centric environments. Instead of focusing on individual test scripts, the project emphasizes reusable structure: WebDriver setup, Page Objects, local server execution, and screenshot artifact collection on failure. It is designed to show what an enterprise-friendly Selenium foundation looks like when maintainability and long-term regression stability matter as much as simple test coverage.",
    repositoryUrl: "https://github.com/mikoch81/selenium-framework-demo",
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
      { category: "Architecture", items: ["Page Object Model", "Shared Test Base", "Driver Factory"] },
      { category: "Execution", items: ["Headless Runs", "Local Demo Server", "Screenshot Artifacts"] },
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
    overview:
      "This project shows how I approach backend quality when both correctness and responsiveness matter. It uses a local synthetic HTTP service and a Maven-based test suite to validate service health, compare endpoint responses against an expected contract, and assert simple performance baselines such as average response time and p95. The result is a lightweight but concrete example of introducing API quality signals without building a separate integration environment first.",
    repositoryUrl: "https://github.com/mikoch81/api-testing-demo",
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
      { category: "API Validation", items: ["Java HttpClient", "JSON Contract Checks", "Health Checks"] },
      { category: "Performance", items: ["Average Latency", "P95 Baseline", "Synthetic HTTP Service"] },
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
    overview:
      "This mini-project is a focused performance engineering starter pack. It combines a local mock API, a reusable JMeter test plan, scenario data in CSV form, and a small execution helper so that baseline load testing can be demonstrated safely on synthetic data. The goal is not to simulate a large platform, but to show how a clean, explainable performance setup can be packaged for fast iteration, learning, and future extension.",
    repositoryUrl: "https://github.com/mikoch81/jmeter-performance",
    challenge: [
      "Performance testing is often postponed because teams lack a safe environment for early experiments.",
      "Many examples are either too trivial to be useful or too environment-dependent to be easily shared and reused.",
      "A good starter pack should show more than a single JMX file — it should also model the surrounding execution context.",
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
      { category: "Core", items: ["Apache JMeter", "Python 3", "CSV Scenario Data"] },
      { category: "Performance", items: ["Baseline Load Testing", "Assertions", "Synthetic Delay Simulation"] },
      { category: "Execution", items: ["Local Mock API", "Reusable JMX Plan", "Safe Local Setup"] },
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
};
