export const siteConfig = {
  name: "Michał Kochaniak",
  title: "Senior Test Automation Engineer",
  subtitle: "Automation Architecture · Performance Engineering · AI-Assisted QA",
  description:
    "I build test automation frameworks, performance analysis pipelines, and AI-augmented quality workflows. Focus on systems that produce reliable signals and clear reporting.",
  email: "michal.kochaniak@example.com",
  linkedin: "https://linkedin.com/in/michalkochaniak",
  github: "https://github.com/michalkochaniak",
};

export const credibilityItems = [
  "Automation Engineering",
  "Mobile & Web QA",
  "Performance Testing",
  "Reporting Systems",
  "CI/CD Integrations",
  "AI Agent Workflows",
];

export const pillars = [
  {
    title: "Automation Architecture",
    description:
      "Framework design for web and mobile testing — structured for long-term maintainability, cross-platform coverage, and direct integration into CI/CD pipelines.",
    technologies: ["Java", "Selenium", "Appium", "Maven", "TestNG"],
  },
  {
    title: "Performance Engineering",
    description:
      "Load testing, result analysis, and automated reporting. Turning raw JMeter data into structured deliverables with statistical rigour and clear conclusions.",
    technologies: ["JMeter", "CSV/JTL Analysis", "Python", "DOCX/PDF Generation"],
  },
  {
    title: "Applied AI in QA",
    description:
      "Using local LLMs and agent patterns to support test analysis, report generation, and engineering decisions — without sending data off-premises.",
    technologies: ["LLMs", "Ollama", "Agent Orchestration", "Prompt Engineering"],
  },
];

export const projects = [
  {
    slug: "ai-performance-reporting",
    title: "AI Performance Reporting System",
    problem:
      "Raw JTL/CSV output required hours of manual analysis per cycle. Reports were inconsistent and stakeholders couldn't self-serve.",
    summary:
      "Automated Python pipeline — statistical analysis, chart generation, and structured DOCX/PDF output. LLM layer via Ollama for narrative summaries and anomaly flagging.",
    tech: ["Python", "JMeter", "pandas", "Ollama", "DOCX/PDF"],
    outcome:
      "Reduced analysis from hours to minutes. Consistent, stakeholder-ready reporting on every cycle.",
    category: "Performance Engineering",
  },
  {
    slug: "mobile-test-automation",
    title: "Mobile Test Automation — Banking App",
    problem:
      "Hybrid native/webview banking app with complex auth flows lacked reliable automated regression across Android and iOS.",
    summary:
      "Layered framework with cross-platform page objects, webview context-switching, and data-driven test patterns. CI-integrated via Jenkins for every release candidate.",
    tech: ["Java", "Appium", "Selenium", "Maven", "TestNG"],
    outcome:
      "Stable cross-platform suite that survived multiple major UI redesigns with minimal maintenance.",
    category: "Automation Architecture",
  },
  {
    slug: "jira-zephyr-ci",
    title: "Jira + Zephyr + CI Quality Pipeline",
    problem:
      "Test results lived in CI logs, disconnected from Jira workflows. Manual Zephyr updates were slow, often skipped, traceability unreliable.",
    summary:
      "Custom integration — Zephyr Scale API and TestNG listeners auto-create test cycles, post results, and maintain requirement-level traceability on every build.",
    tech: ["Java", "Maven", "Jenkins", "GitHub Actions", "Zephyr Scale"],
    outcome:
      "Full test-to-requirement traceability with zero manual sync. Quality metrics visible in Jira in real time.",
    category: "CI/CD Integration",
  },
  {
    slug: "agentic-qa-assistant",
    title: "Agentic QA Assistant",
    problem:
      "Engineers spent significant time on repetitive analysis — reading logs, comparing baselines, formatting reports — all following automatable patterns.",
    summary:
      "Locally-hosted LLM system using Ollama for test result analysis, performance report interpretation, and multi-step reasoning chains. All data stays on-premises.",
    tech: ["Ollama", "LLM Orchestration", "Python", "Prompt Engineering"],
    outcome:
      "Routine analysis time reduced significantly. Reusable agent framework, fully private — no data leaves the network.",
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
      "Data-Driven Testing",
      "BDD Frameworks",
    ],
  },
  {
    category: "Performance Engineering",
    items: [
      "Apache JMeter",
      "CSV / JTL Analysis",
      "Performance Reporting",
      "Load & Stress Testing",
      "Result Visualization",
    ],
  },
  {
    category: "CI/CD & Tooling",
    items: [
      "Jenkins",
      "GitHub Actions",
      "Maven Build Pipelines",
      "Jira Integration",
      "Zephyr Scale",
      "Git",
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

export const impactItems = [
  "Delivered stable automation for critical banking flows across Android and iOS",
  "Built automated reporting pipelines used by both engineering and executive stakeholders",
  "Connected test execution to Jira/Zephyr for end-to-end quality traceability",
  "Designed local AI workflows for QA analysis without cloud dependency",
];

export const processSteps = [
  {
    step: "01",
    title: "Assess",
    description:
      "Map the system under test, identify risk areas, and define what quality means in context before writing any automation.",
  },
  {
    step: "02",
    title: "Architect",
    description:
      "Design framework structures and patterns that survive product changes — not scripts that break on the next release.",
  },
  {
    step: "03",
    title: "Automate",
    description:
      "Target high-value flows and integration points where automation provides real confidence in deployment readiness.",
  },
  {
    step: "04",
    title: "Report",
    description:
      "Convert test outputs and performance data into structured reports that inform engineering and release decisions.",
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
    subtitle: "Automated pipeline turning raw JMeter data into structured, stakeholder-ready reports",
    overview:
      "Performance testing generates large volumes of raw data — JTL files, CSV exports, server logs — that require skilled interpretation before they become useful. This project replaced a manual analysis workflow with an automated pipeline that ingests JMeter results, applies statistical analysis, generates visualisations, and produces structured DOCX/PDF reports with conclusions and recommendations. An LLM layer provides narrative summaries, flagging anomalies and offering plain-language interpretation for non-technical readers.",
    challenge: [
      "Manual analysis of JMeter results consumed hours per test cycle and was inconsistent between analysts.",
      "Reports varied in structure, depth, and quality depending on who wrote them.",
      "Non-technical stakeholders struggled to extract actionable conclusions from raw performance data.",
      "Historical trend comparison required tedious manual data extraction across multiple result files.",
    ],
    approach: [
      "Designed a Python pipeline to parse JTL/CSV result files and compute key performance metrics — response times, throughput, error rates, and percentile distributions.",
      "Built automated chart generation (response time distributions, throughput over time, error breakdowns) using matplotlib and integrated them directly into report templates.",
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
      "The value of performance engineering comes not from running tests, but from how efficiently results are communicated. Automating the analysis-to-report pipeline and adding AI-assisted narrative turned raw test data into a deliverable that informed release decisions and resource allocation.",
  },

  "mobile-test-automation": {
    slug: "mobile-test-automation",
    title: "Mobile Test Automation for Banking App",
    subtitle: "Scalable framework for critical banking flows across Android and iOS",
    overview:
      "A banking application required reliable automated coverage across Android and iOS. The app combined native elements, hybrid webviews, and complex authentication flows — creating real challenges for automation stability. This project involved designing a test framework from the ground up, prioritising maintainability, cross-platform coverage, and integration with the team's delivery pipeline.",
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
      "Mobile automation in a banking context demands thoughtful architecture that handles real-world complexity: hybrid apps, unreliable networks, complex auth flows, and constant UI evolution. This framework was designed for durability, and its structure proved resilient across multiple release cycles and platform changes.",
  },

  "jira-zephyr-ci": {
    slug: "jira-zephyr-ci",
    title: "Jira + Zephyr + CI Quality Pipeline",
    subtitle: "Automated pipeline connecting test execution to Jira/Zephyr for full traceability",
    overview:
      "Automated tests produce valuable quality signals, but those signals are often disconnected from the tools where teams plan and make decisions. This project built a pipeline connecting test execution (Maven/TestNG) with Jira and Zephyr Scale — automatically updating test cycles, linking results to requirements, and surfacing quality metrics within the existing workflow. The goal: make quality visible without manual data synchronisation.",
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
    subtitle: "Locally-hosted AI system for test analysis and QA workflow support",
    overview:
      "Quality engineering benefits from intelligent assistants that accelerate analysis, surface patterns, and reduce repetitive cognitive work. This project designed and developed a locally-hosted, LLM-powered system that analyses test results, interprets performance reports, suggests investigation paths, and supports day-to-day QA decisions — all without sending data to external services.",
    challenge: [
      "QA engineers spend significant time on repetitive analysis — reading logs, comparing results, formatting reports — that follows predictable patterns.",
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
      "Practical, privacy-respecting AI assistants can meaningfully improve QA workflows — not through automating testing itself, but through smarter analysis, faster interpretation, and better decision support.",
  },
};
