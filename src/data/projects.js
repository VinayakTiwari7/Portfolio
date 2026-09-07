export const projects = [
  {
    id: "cortex",
    title: "Cortex — AI Orchestration Gateway",
    tagline: "Resilient, provider-agnostic async LLM orchestration gateway with automatic failover, circuit breaking, and caching",
    category: "ai", // "ai" -> AI & LLM Engineering
    categoryLabel: "AI & LLM Engineering",
    tech: ["Python", "FastAPI", "AsyncIO", "httpx", "Pydantic v2", "Redis", "Server-Sent Events", "Render"],
    live: "https://cortex-rnhl.onrender.com/",
    docs: "https://cortex-rnhl.onrender.com/docs",
    github: "https://github.com/VinayakTiwari7/cortex",
    highlights: [
      "Designed and built a resilient async FastAPI gateway unifying two independent LLM providers (Groq, Gemini) behind one normalized interface via an abstract provider pattern (Python ABC), so new providers plug in without touching routing code.",
      "Engineered automatic failover routing for both standard and streaming responses — a failed request against the primary provider transparently retries against a secondary with zero caller-visible downtime; streaming failover commits only after a provider's first chunk succeeds, since HTTP headers can't be un-sent mid-stream.",
      "Built a custom circuit breaker from first principles (closed/open/half-open state machine) that trips after repeated provider failures and self-tests recovery after a cooldown, verified through live failure injection.",
      "Added Redis-backed response caching and per-caller rate limiting using atomic INCR/EXPIRE operations for correctness under concurrent requests, both designed to fail open gracefully if Redis becomes unreachable; deployed live on Render with a connected GitHub pipeline.",
    ],
    architecture: {
      overview: "Every LLM provider has divergent schemas, rate-limits, and transient downtime. Cortex standardizes request/response payloads, isolates provider failures with autonomous circuit breakers, and retries against backup providers transparently.",
      routes: [
        { method: "POST", path: "/chat", desc: "Single complete completion, cached, with automatic multi-provider fallback" },
        { method: "POST", path: "/chat/stream", desc: "Real-time token streaming over SSE with pre-stream commit failover" },
        { method: "GET", path: "/health/deep", desc: "Real-time health check returning live circuit breaker states per provider" },
      ],
    },
  },
  {
    id: "nexus",
    title: "Nexus — Autonomous Agentic RAG Assistant",
    tagline: "StateGraph RAG assistant with persistent ChromaDB semantic search, multi-tool execution, and deterministic evaluation",
    category: "ai",
    categoryLabel: "AI & LLM Engineering",
    tech: ["Python", "FastAPI", "LangGraph", "Google Gemini", "ChromaDB", "React 18", "TypeScript", "Docker"],
    live: "https://nexus-upp2.onrender.com",
    github: "https://github.com/VinayakTiwari7/nexus",
    highlights: [
      "Built an autonomous LangGraph agent that routes user queries across a document-search RAG tool, an order-lookup tool, and a safe AST-based calculator through a single cyclical StateGraph, falling back to a direct response when no tool is needed.",
      "Engineered a grounded RAG pipeline over a persistent ChromaDB store using Google Gemini's text-embedding-004 embeddings and hierarchical document chunking (PDF/MD/TXT), with application-controlled source citations and a system prompt enforcing hallucination- and prompt-injection-resistant grounding.",
      "Built a full-stack app — FastAPI backend, React 18/TypeScript/Tailwind frontend — containerized with Docker and deployed to Render, backed by 44 passing Pytest unit and integration tests.",
      "Designed dual runtime modes — live Gemini function calling alongside a deterministic offline agent and embedding fallback — keeping the test suite reproducible without external API costs.",
    ],
    architecture: {
      overview: "StateGraph cycle: START → agent decision → conditional branch (document_search / order_lookup / calculator) → tool execution node → agent reflection → END or final grounded citation synthesis.",
      routes: [
        { method: "POST", path: "/api/chat", desc: "Autonomous agent turn handling tool selection, execution, and grounded response generation" },
        { method: "POST", path: "/api/ingest", desc: "Hierarchical document splitter, text-embedding-004 embedding, and ChromaDB vector persistence" },
        { method: "GET", path: "/api/health", desc: "Vector store collection integrity and LLM connectivity status" },
      ],
    },
  },
  {
    id: "smarthire",
    title: "SmartHire — Full-Stack Employee Onboarding Platform",
    tagline: "Layered Spring Boot 3 REST API and React SPA with 3-tier RBAC, JWT authentication, and automated overdue task detection",
    category: "backend", // "backend" -> Backend & Full-Stack
    categoryLabel: "Backend & Full-Stack",
    tech: ["Java 17", "Spring Boot 3", "Spring Security 6", "Spring Data JPA", "Hibernate", "JWT", "MySQL", "React 18", "Tailwind CSS", "Railway", "Vercel"],
    live: "https://smarthire-frontend-sooty.vercel.app",
    swagger: "https://smarthire-production-9543.up.railway.app/swagger-ui.html",
    github: "https://github.com/VinayakTiwari7/smarthire",
    highlights: [
      "Built a full-stack employee onboarding platform — a Spring Boot REST API backend with a React SPA frontend — enforcing three-tier RBAC (Admin, Manager, Employee) via @PreAuthorize on every endpoint, secured end-to-end with JWT.",
      "Designed a strictly layered backend (Controller → Service → Repository, DTO-only responses) with a global exception handler returning a consistent JSON error envelope, and a custom JPQL query auto-surfacing overdue tasks.",
      "Built a role-aware React UI (auth context, protected routes, dashboard/batches/tasks views) where available actions adapt to the signed-in user's role, with overdue-task highlighting and client-side status filtering.",
      "Deployed the backend to Railway with a MySQL plugin and H2/MySQL dev-prod profile separation, with the API live in production and the React frontend deploying to Vercel.",
    ],
    architecture: {
      overview: "Strictly layered backend where Controllers handle HTTP only, Services own all domain business logic, and Repositories handle persistence. Entities are never exposed directly, ensuring clean DTO contracts.",
      routes: [
        { method: "POST", path: "/api/auth/login", desc: "JWT generation with user claims and assigned system roles" },
        { method: "GET", path: "/api/batches", desc: "RBAC protected batch management for Admin and Manager roles" },
        { method: "GET", path: "/api/tasks/overdue", desc: "Custom JPQL indexed query auto-filtering overdue employee assignments" },
      ],
    },
  },
  {
    id: "lost-found",
    title: "Campus Lost & Found Portal",
    tagline: "MERN platform with 15+ REST endpoints, JWT authentication, claim-based verification workflow, and admin moderation",
    category: "backend",
    categoryLabel: "Backend & Full-Stack",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "JWT", "Multer", "Tailwind CSS", "Vercel", "Render"],
    live: "https://lost-found-portal-two.vercel.app",
    github: "https://github.com/VinayakTiwari7/Lost_found_Portal",
    highlights: [
      "Architected a full-stack MERN platform with a 15+ endpoint REST API, JWT authentication, and role-based access control, powering a claim-based workflow for students to report, verify, and reclaim lost campus items.",
      "Built an admin moderation system with live analytics, an item approval pipeline, Multer-based image uploads, and a self-resolve flow that automatically closes out pending claims.",
      "Modeled Users, Items, and Claims in MongoDB Atlas via Mongoose, and took the system from local development to a live, production-ready deployment with the React/Vite frontend on Vercel and the Express API on Vercel/Render.",
    ],
    architecture: {
      overview: "Claim-based verification state machine: Reported → Approved by Moderator → Claim Requested by Owner → Verified with Verification Questions / Proof → Self-Resolved & Closed.",
      routes: [
        { method: "POST", path: "/api/items/report", desc: "Multer multipart item ingestion with category tags and geo-location metadata" },
        { method: "POST", path: "/api/claims", desc: "Claim submission and verification question flow between claimer and finder" },
        { method: "GET", path: "/api/admin/analytics", desc: "Moderator metrics on recovery rate, open investigations, and resolved items" },
      ],
    },
  },
];
