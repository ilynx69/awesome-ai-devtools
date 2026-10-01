// ==========================================================================
// OmniDev - Database of Curated Tools, MCP Servers, Models & Cheatsheets
// ==========================================================================

const OMNI_DATA = {
  // ------------------------------------------------------------------------
  // 1. Prompts Library
  // ------------------------------------------------------------------------
  prompts: [
    {
      id: "p1",
      title: "Senior Software Architect - System Design",
      category: "Architecture",
      badge: "Production Ready",
      description: "Produce a robust, fault-tolerant, scalable system architecture with trade-off analysis.",
      variables: [
        { key: "system_name", label: "System / Feature Name", default: "Global Real-Time Chat & Notification Engine" },
        { key: "scale", label: "Scale / Concurrency Target", default: "10M DAU, 50k msgs/sec peak" },
        { key: "constraints", label: "Technical Constraints", default: "Sub-50ms latency, P99 150ms, multi-region failover" }
      ],
      template: `You are an elite Principal Software Architect.
Design an end-to-end architecture for {{system_name}}.

Requirements & Scale:
- Expected Scale: {{scale}}
- Constraints: {{constraints}}

Please output the architecture following this structure:
1. Executive Summary & Design Principles
2. High-Level Architecture Diagram (Mermaid C4 Container diagram)
3. Data Flow & Ingestion Pipeline
4. Storage Strategy (Hot / Warm / Cold data paths, caching policies)
5. Fault Tolerance, Consensus & Disaster Recovery
6. Critical Bottlenecks & Pragmatic Trade-offs (CAP theorem considerations)
7. Production Readiness Checklist (Observability, SLOs, Rate limiting)`
    },
    {
      id: "p2",
      title: "Zero-Vulnerability Security & Code Audit",
      category: "Security",
      badge: "High Security",
      description: "Thoroughly inspect code for OWASP Top 10, race conditions, memory leaks, and logic flaws.",
      variables: [
        { key: "language", label: "Programming Language", default: "TypeScript / Node.js" },
        { key: "framework", label: "Framework / Runtime", default: "Express / Next.js API Routes" },
        { key: "code_snippet", label: "Target Code to Audit", default: "export async function handleWebhook(req, res) {\n  const { token, payload } = req.body;\n  const user = await db.query('SELECT * FROM users WHERE auth_token = ' + token);\n  // Process payload...\n}" }
      ],
      template: `You are a Lead Application Security Engineer and Whitehat Penetration Tester.
Perform an exhaustive security review of the following {{language}} code using {{framework}}:

\`\`\`{{language}}
{{code_snippet}}
\`\`\`

Analyze the code under the following criteria:
1. Critical Vulnerabilities (SQL injection, Prototype pollution, SSRF, XSS, IDOR, Re-entrancy, Insecure Deserialization)
2. Authentication & Authorization bypasses
3. Timing attacks and Race conditions
4. Cryptographic weaknesses and secret leaks
5. For each detected issue:
   - Severity: [Critical | High | Medium | Low]
   - Attack Vector & Exploitation Scenario
   - Refactored Secure Implementation
   - Unit test asserting that the exploit fails`
    },
    {
      id: "p3",
      title: "Clean Code & Performance Refactorer",
      category: "Refactoring",
      badge: "Clean Code",
      description: "Refactor legacy or messy code to SOLID principles, reducing cyclomatic complexity.",
      variables: [
        { key: "language", label: "Language", default: "Python" },
        { key: "goal", label: "Primary Goal", default: "Improve readability, vectorize loops, reduce complexity" },
        { key: "code", label: "Code", default: "def process_data(items):\n    res = []\n    for i in items:\n        if i.get('active'):\n            if i.get('price') > 100:\n                res.append(i['price'] * 0.9)\n    return res" }
      ],
      template: `Act as a Staff Software Engineer. Refactor this {{language}} code with the goal to: {{goal}}.

Original Code:
\`\`\`{{language}}
{{code}}
\`\`\`

Provide:
1. Diagnosis of current code smells (Cognitive complexity, anti-patterns)
2. Idiomatic, highly performant rewritten version
3. Benchmark / Complexity comparison (Big-O Time & Space)
4. Comprehensive test coverage snippet using standard testing frameworks`
    },
    {
      id: "p4",
      title: "Master SQL & Query Performance Optimizer",
      category: "Database",
      badge: "DBA",
      description: "Analyze slow queries, optimize execution plans, and propose index strategies.",
      variables: [
        { key: "engine", label: "RDBMS Engine", default: "PostgreSQL 16" },
        { key: "table_schema", label: "Schema / Indexes", default: "orders (id, user_id, status, created_at, total_amount)" },
        { key: "query", label: "Slow Query", default: "SELECT user_id, COUNT(*), SUM(total_amount) FROM orders WHERE status = 'COMPLETED' AND created_at >= NOW() - INTERVAL '30 days' GROUP BY user_id ORDER BY SUM(total_amount) DESC LIMIT 20;" }
      ],
      template: `You are an elite Database Reliability Engineer and PostgreSQL DBA.
Optimize the following query on {{engine}}:

Table Schema:
{{table_schema}}

Query:
\`\`\`sql
{{query}}
\`\`\`

Deliver:
1. Execution Plan breakdown & predicted bottlenecks (Sequential scans vs Index scans)
2. Recommended Composite Index or Covering Index definitions
3. Rewritten, optimized SQL query (leveraging CTEs, materialized views, or partial indexes where beneficial)
4. Specific configuration tuning parameters (work_mem, effective_cache_size) if applicable`
    },
    {
      id: "p5",
      title: "Production Incident Root Cause & Post-Mortem",
      category: "DevOps",
      badge: "SRE",
      description: "Transform error logs, stack traces, and metrics into a Blameless Post-Mortem.",
      variables: [
        { key: "service", label: "Affected Service", default: "Payment Processing Gateway" },
        { key: "duration", label: "Downtime / Incident Duration", default: "42 minutes" },
        { key: "symptoms", label: "Logs / Metrics / Symptoms", default: "HTTP 504 Gateway Timeout spikes; Connection pool exhausted; DB CPU spiked to 100% after deployment #412" }
      ],
      template: `You are a Principal Site Reliability Engineer (SRE).
Draft a Blameless Post-Mortem report for an incident on {{service}}.
- Duration: {{duration}}
- Observed Symptoms:
{{symptoms}}

Format the post-mortem with:
1. Incident Summary & User Impact (Calculated Availability SLA hit)
2. Chronological Timeline of Events (Detection, Triage, Escalation, Mitigation)
3. 5-Whys Root Cause Analysis
4. Trigger vs Contributing Factors
5. Action Items with owners and priority (P0 Immediate, P1 Preventative, P2 Observability)`
    },
    {
      id: "p6",
      title: "OpenAPI 3.1 & REST API Contract Generator",
      category: "API Design",
      badge: "Design-First",
      description: "Generate compliant, production-grade OpenAPI specifications from plain descriptions.",
      variables: [
        { key: "resource", label: "Resource & Operations", default: "Subscription Billing (Create subscription, cancel, upgrade tier, webhook listener)" },
        { key: "auth", label: "Auth Scheme", default: "Bearer JWT & API Key in Header" }
      ],
      template: `Generate a production-ready OpenAPI 3.1.0 YAML specification for the following resource:
Resource: {{resource}}
Authentication: {{auth}}

Make sure to include:
- Idempotency-Key headers for mutation endpoints
- Detailed HTTP status codes (200, 201, 400, 401, 403, 404, 409, 429, 500) with error schema
- Reusable components/schemas with strict validation constraints (min, max, format, regex, nullable)`
    },
    {
      id: "p7",
      title: "Universal Regex & Test Suite Synthesizer",
      category: "Utilities",
      badge: "Regex Guru",
      description: "Generate bulletproof regular expressions with detailed token breakdown and test cases.",
      variables: [
        { key: "pattern_goal", label: "Pattern Goal", default: "Match semver strings (e.g., v1.2.3-alpha.1+build.42) with named capture groups" },
        { key: "flavor", label: "Regex Flavor", default: "JavaScript / PCRE" }
      ],
      template: `You are a Regex master.
Target: {{pattern_goal}}
Engine Flavor: {{flavor}}

Provide:
1. The exact Regex string with optimal flags
2. Visual breakdown of each token and group
3. 5 Valid sample inputs that MUST match (with expected capture group outputs)
4. 5 Invalid tricky edge cases that MUST fail`
    }
  ],

  // ------------------------------------------------------------------------
  // 2. Model Context Protocol (MCP) Servers Registry
  // ------------------------------------------------------------------------
  mcpServers: [
    {
      id: "mcp-filesystem",
      name: "Filesystem MCP",
      author: "Anthropic / ModelContextProtocol",
      category: "System",
      description: "Secure, sandboxed access to local files and directories for reading, writing, and listing.",
      command: "npx",
      args: ["-y", "@modelcontextprotocol/server-filesystem", "C:/Projects"],
      env: {},
      featured: true
    },
    {
      id: "mcp-github",
      name: "GitHub Official MCP",
      author: "GitHub / ModelContextProtocol",
      category: "DevOps",
      description: "Manage GitHub repositories, pull requests, issues, commits, branches, and code search.",
      command: "npx",
      args: ["-y", "@modelcontextprotocol/server-github"],
      env: { GITHUB_PERSONAL_ACCESS_TOKEN: "ghp_your_token_here" },
      featured: true
    },
    {
      id: "mcp-postgres",
      name: "PostgreSQL Database MCP",
      author: "ModelContextProtocol",
      category: "Database",
      description: "Inspect schemas, execute read-only queries, and analyze relational data structures.",
      command: "npx",
      args: ["-y", "@modelcontextprotocol/server-postgres", "postgresql://user:password@localhost:5432/mydb"],
      env: {},
      featured: true
    },
    {
      id: "mcp-brave-search",
      name: "Brave Search MCP",
      author: "ModelContextProtocol",
      category: "Search & Web",
      description: "Execute web and local searches using Brave's independent privacy-first search index.",
      command: "npx",
      args: ["-y", "@modelcontextprotocol/server-brave-search"],
      env: { BRAVE_API_KEY: "BSA_your_brave_search_api_key" },
      featured: true
    },
    {
      id: "mcp-hyperconsciousness",
      name: "Hyperconsciousness",
      author: "Louis Beaumont",
      category: "AI & State",
      description: 'Developer-alpha encrypted, append-only knowledge store with scoped, expiring MCP grants. Follow the <a href="https://github.com/louis030195/hyperconsciousness#install-from-source" class="underline">source installation and demo grant setup</a>, then replace all placeholders in the exported JSON with absolute executable/store paths and your grant ID. Hosted models can see returned plaintext.',
      command: "{{hc_executable_path}}",
      args: ["mcp", "--as", "{{grant_id}}", "--dir", "{{hc_store_path}}"],
      env: {},
      featured: false
    },
    {
      id: "mcp-memory",
      name: "Knowledge Graph Memory MCP",
      author: "ModelContextProtocol",
      category: "AI & State",
      description: "Persistent memory using an open-source knowledge graph to remember entities and relationships.",
      command: "npx",
      args: ["-y", "@modelcontextprotocol/server-memory"],
      env: {},
      featured: true
    },
    {
      id: "mcp-puppeteer",
      name: "Puppeteer Web Browser MCP",
      author: "ModelContextProtocol",
      category: "Automation",
      description: "Automate web browsing, scrape dynamic JS single-page apps, and capture full-page screenshots.",
      command: "npx",
      args: ["-y", "@modelcontextprotocol/server-puppeteer"],
      env: {},
      featured: false
    },
    {
      id: "mcp-sqlite",
      name: "SQLite Database MCP",
      author: "ModelContextProtocol",
      category: "Database",
      description: "Direct zero-configuration connection to SQLite database files on your disk.",
      command: "uvx",
      args: ["mcp-server-sqlite", "--db-path", "d:/data/database.db"],
      env: {},
      featured: false
    },
    {
      id: "mcp-slack",
      name: "Slack Integration MCP",
      author: "ModelContextProtocol",
      category: "Communication",
      description: "Read channel history, search conversations, and post formatted messages to Slack.",
      command: "npx",
      args: ["-y", "@modelcontextprotocol/server-slack"],
      env: { SLACK_BOT_TOKEN: "xoxb-your-token", SLACK_TEAM_ID: "T00000000" },
      featured: false
    },
    {
      id: "mcp-docker",
      name: "Docker Container MCP",
      author: "Community",
      category: "DevOps",
      description: "Inspect running Docker containers, stream container logs, restart, and inspect images.",
      command: "npx",
      args: ["-y", "mcp-server-docker"],
      env: {},
      featured: false
    }
  ],

  // ------------------------------------------------------------------------
  // 3. AI Models & Benchmarks Radar
  // ------------------------------------------------------------------------
  aiModels: [
    {
      name: "Claude 3.5 Sonnet",
      provider: "Anthropic",
      context: "200k tokens",
      inputPrice: "$3.00 / 1M",
      outputPrice: "$15.00 / 1M",
      codingScore: "93.7% (HumanEval / SWE-bench)",
      speed: "Fast (75 t/s)",
      bestFor: "Complex reasoning, full-stack coding, agentic workflows, architecture design",
      type: "Proprietary",
      badge: "Industry Leader"
    },
    {
      name: "DeepSeek R1",
      provider: "DeepSeek",
      context: "64k tokens",
      inputPrice: "$0.55 / 1M",
      outputPrice: "$2.19 / 1M",
      codingScore: "90.8% (AIME / SWE-bench)",
      speed: "Medium (45 t/s)",
      bestFor: "Deep mathematical reasoning, algorithmic logic, open-weights self-hosting",
      type: "Open Weights",
      badge: "Open Weights King"
    },
    {
      name: "DeepSeek V3",
      provider: "DeepSeek",
      context: "64k tokens",
      inputPrice: "$0.14 / 1M",
      outputPrice: "$0.28 / 1M",
      codingScore: "88.5% (HumanEval)",
      speed: "Very Fast (85 t/s)",
      bestFor: "Extremely cost-effective batch operations, general code synthesis",
      type: "Open Weights",
      badge: "Maximum Value"
    },
    {
      name: "GPT-4o",
      provider: "OpenAI",
      context: "128k tokens",
      inputPrice: "$2.50 / 1M",
      outputPrice: "$10.00 / 1M",
      codingScore: "90.2% (HumanEval)",
      speed: "Fast (90 t/s)",
      bestFor: "Multimodal audio/vision analysis, fast general purpose problem solving",
      type: "Proprietary",
      badge: "Multimodal Peak"
    },
    {
      name: "Gemini 2.0 Flash",
      provider: "Google",
      context: "1,048k tokens (1M)",
      inputPrice: "$0.10 / 1M",
      outputPrice: "$0.40 / 1M",
      codingScore: "89.4% (SWE-bench)",
      speed: "Ultra Fast (140 t/s)",
      bestFor: "Massive context codebase scanning, multi-hour video understanding, realtime streaming",
      type: "Proprietary",
      badge: "Speed & Context Giant"
    },
    {
      name: "Llama 3.3 70B",
      provider: "Meta",
      context: "128k tokens",
      inputPrice: "$0.30 / 1M (Cloud)",
      outputPrice: "$0.60 / 1M",
      codingScore: "86.0% (HumanEval)",
      speed: "Fast (80 t/s)",
      bestFor: "Local deployment via Ollama/vLLM, enterprise privacy compliance",
      type: "Open Weights",
      badge: "Self-Host Benchmark"
    },
    {
      name: "Qwen 2.5 Coder 32B",
      provider: "Alibaba",
      context: "128k tokens",
      inputPrice: "$0.20 / 1M",
      outputPrice: "$0.40 / 1M",
      codingScore: "92.7% (HumanEval)",
      speed: "Fast (70 t/s)",
      bestFor: "Local specialized code generation, lightweight local dev runner",
      type: "Open Weights",
      badge: "Top Coding 32B"
    }
  ],

  // ------------------------------------------------------------------------
  // 4. Latency Numbers Every Programmer Should Know (Interactive Scale)
  // ------------------------------------------------------------------------
  latencyNumbers: [
    { operation: "L1 Cache Reference", timeNs: 0.5, humanTime: "0.5 ns", comparative: "1 heart beat" },
    { operation: "Branch Mispredict", timeNs: 5, humanTime: "5 ns", comparative: "10 heart beats" },
    { operation: "L2 Cache Reference", timeNs: 7, humanTime: "7 ns", comparative: "14 heart beats" },
    { operation: "Mutex Lock / Unlock", timeNs: 25, humanTime: "25 ns", comparative: "50 heart beats" },
    { operation: "Main Memory (RAM) Access", timeNs: 100, humanTime: "100 ns", comparative: "3.3 minutes" },
    { operation: "Compress 1KB with Snappy", timeNs: 3000, humanTime: "3 µs", comparative: "1.7 hours" },
    { operation: "Send 1KB over 1 Gbps Network", timeNs: 10000, humanTime: "10 µs", comparative: "5.5 hours" },
    { operation: "Read 1MB sequentially from SSD", timeNs: 1000000, humanTime: "1 ms", comparative: "23 days" },
    { operation: "Round trip within same Datacenter", timeNs: 500000, humanTime: "0.5 ms", comparative: "11 days" },
    { operation: "Round trip California to Netherlands", timeNs: 150000000, humanTime: "150 ms", comparative: "9.5 years" }
  ],

  // ------------------------------------------------------------------------
  // 5. Git Survival Recipes
  // ------------------------------------------------------------------------
  gitRecipes: [
    {
      scenario: "Undo the last commit, but KEEP all changes staged",
      command: "git reset --soft HEAD~1",
      explanation: "Takes the commit off the current branch, leaving your working directory and staging index untouched."
    },
    {
      scenario: "Undo the last commit and DISCARD all changes completely",
      command: "git reset --hard HEAD~1",
      explanation: "Destructive: completely erases the commit and discards all modified files."
    },
    {
      scenario: "Squash the last 3 commits into one single commit",
      command: "git reset --soft HEAD~3\ngit commit -m \"feat: combined feature work\"",
      explanation: "Resets the branch pointer back 3 commits while keeping all diffs staged, then creates a clean unified commit."
    },
    {
      scenario: "Committed directly to main by mistake, move to new branch",
      command: "git branch feature-my-work\ngit reset --hard origin/main\ngit checkout feature-my-work",
      explanation: "Creates a new branch at current HEAD, resets main back to origin, then switches to the new branch."
    },
    {
      scenario: "Amend author name/email on previous commit without editing files",
      command: "git commit --amend --author=\"Name <email@example.com>\" --no-edit",
      explanation: "Updates the author metadata of the top commit without prompting for message changes."
    },
    {
      scenario: "Clean up untracked files and directories safely",
      command: "git clean -fdn # Dry run preview\ngit clean -fd  # Actually delete",
      explanation: "Always run with -n first to review what files and directories will be deleted permanently."
    }
  ],

  // ------------------------------------------------------------------------
  // 6. Curated Awesome Tools & AI Agents
  // ------------------------------------------------------------------------
  awesomeTools: [
    {
      name: "Cursor",
      category: "IDE & Coding Agent",
      url: "https://cursor.com",
      description: "Next-generation AI-first code editor with Composer multi-file editing and codebase indexing.",
      stars: "60k+",
      license: "Proprietary"
    },
    {
      name: "Cline (formerly Claude Dev)",
      category: "Autonomous Agent",
      url: "https://github.com/cline/cline",
      description: "Autonomous coding agent in VS Code that can create files, run terminal commands, and use browser.",
      stars: "40k+",
      license: "Apache 2.0"
    },
    {
      name: "Aider",
      category: "CLI Agent",
      url: "https://github.com/paul-gauthier/aider",
      description: "AI pair programming in your terminal. Connects with git to auto-commit meaningful diffs.",
      stars: "32k+",
      license: "Apache 2.0"
    },
    {
      name: "Windsurf",
      category: "IDE & Coding Agent",
      url: "https://codeium.com/windsurf",
      description: "Agentic IDE featuring Cascade flows that proactively collaborate with developer intentions.",
      stars: "Hot",
      license: "Proprietary"
    },
    {
      name: "v0 by Vercel",
      category: "Generative UI",
      url: "https://v0.dev",
      description: "Generative UI system that produces accessible Tailwind CSS and React component code from prompts.",
      stars: "Hot",
      license: "Proprietary"
    },
    {
      name: "LangChain & LangGraph",
      category: "Agent Framework",
      url: "https://github.com/langchain-ai/langchain",
      description: "Framework for developing applications powered by large language models and cyclic agent graphs.",
      stars: "95k+",
      license: "MIT"
    },
    {
      name: "Ollama",
      category: "Local AI Runtime",
      url: "https://ollama.com",
      description: "Get up and running with Llama 3, DeepSeek, Mistral and other large language models locally.",
      stars: "110k+",
      license: "MIT"
    },
    {
      name: "Qdrant",
      category: "Vector Database",
      url: "https://github.com/qdrant/qdrant",
      description: "High-performance vector search engine & database written in Rust with advanced payload filtering.",
      stars: "22k+",
      license: "Apache 2.0"
    }
  ]
};
