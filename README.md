# MCP Bridge: Enterprise MCP Server 🚀

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge\&logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge\&logo=docker\&logoColor=white)](https://www.docker.com/)
[![MCP](https://img.shields.io/badge/MCP-SDK-blue?style=for-the-badge)](https://modelcontextprotocol.io)
[![License](https://img.shields.io/badge/license-ISC-green?style=for-the-badge)](LICENSE)

Enterprise-grade Model Context Protocol (MCP) server designed for secure AI infrastructure integration, DevOps automation, observability, database analysis, and intelligent system operations.

---

# 🧠 What Is MCP Bridge?

MCP Bridge acts as a secure gateway between Large Language Models (LLMs) and enterprise infrastructure.

It enables AI assistants such as Claude Desktop, internal copilots, automation agents, and DevOps AI systems to safely interact with:

* Databases
* Docker containers
* Filesystems
* Monitoring systems
* Internal services
* Infrastructure tooling

through the standardized Model Context Protocol (MCP).

Instead of giving AI unrestricted system access, MCP Bridge exposes controlled, validated, observable, and enterprise-secure tools.

---

# 🚀 Key Features

## 🌐 Multi-Transport Architecture

Supports multiple MCP communication modes:

* HTTP Streamable MCP
* STDIO Transport
* SSE Streaming
* REST Administrative API

---

## 🏗️ Enterprise Architecture

* Modular tool registry
* Service-oriented architecture
* Zod schema validation
* Dedicated guards & security layers
* Shared service abstractions
* Typed enterprise patterns

---

## 🔒 Advanced Security

* Read-only SQL protection
* Dangerous Docker action restrictions
* Filesystem path controls
* Zod input validation
* Query sanitization
* Audit-friendly logging

---

## 📊 Full Observability

* System health monitoring
* Memory & CPU metrics
* Docker inspection
* Infrastructure visibility
* Structured logging

---

## 🐳 Production Ready

* Docker & Docker Compose support
* Multi-stage optimized builds
* Environment-driven configuration
* Horizontal deployment ready

---

# 🏗️ Architecture

```text
Claude Desktop / AI Agent / Internal Copilot
                    │
                    ▼
           MCP Transport Layer
┌─────────────────────────────────────┐
│ HTTP │ SSE │ STDIO │ REST API │
└─────────────────────────────────────┘
                    │
                    ▼
              MCP Core Server
                    │
                    ▼
           Tool Registration Layer
┌─────────────────────────────────────┐
│ Database │ Docker │ Filesystem │
│ Monitor  │ DevOps │ AI Tools   │
└─────────────────────────────────────┘
                    │
                    ▼
               Service Layer
                    │
                    ▼
         Infrastructure & Systems
```

---

# 📂 Project Structure

```text
src/
│
├── api/
│   └── rest.ts
│
├── config/
│   └── database.config.ts
│
├── mcp/
│   ├── prompts/
│   ├── resources/
│   ├── tools/
│   │
│   │   ├── database/
│   │   ├── docker/
│   │   ├── filesystem/
│   │   ├── monitoring/
│   │   └── devops/
│   │
│   └── register.ts
│
├── services/
│   ├── database.service.ts
│   ├── docker.service.ts
│   ├── monitoring.service.ts
│   └── project.service.ts
│
├── transports/
│   ├── http.ts
│   ├── sse.ts
│   ├── stdio.ts
│   └── rest.ts
│
├── utils/
├── middleware/
├── schemas/
├── types/
│
└── index.ts
```

---

# 🛠️ MCP Tool Modules

# 🗄️ Database Tools

Enterprise-safe MySQL/MariaDB tools.

| Tool                      | Description                    |
| ------------------------- | ------------------------------ |
| `get_database_status`     | Database connectivity & health |
| `list_database_tables`    | Discover all database tables   |
| `describe_database_table` | Detailed schema analysis       |
| `run_select_query`        | Safe read-only SQL execution   |

### Security Features

* SELECT-only queries
* SQL keyword blocking
* Zod validation
* Query guards

---

# 🐳 Docker Tools

Container orchestration & observability.

| Tool             | Description                 |
| ---------------- | --------------------------- |
| `docker_ps`      | List running containers     |
| `docker_logs`    | Retrieve container logs     |
| `docker_restart` | Restart allowed containers  |
| `docker_info`    | Docker environment metadata |

### Security Features

* Restricted actions
* Protected infrastructure containers
* Command validation

---

# 📊 Monitoring Tools

Real-time infrastructure visibility.

| Tool             | Description                 |
| ---------------- | --------------------------- |
| `system_health`  | System health overview      |
| `system_metrics` | CPU & memory metrics        |
| `system_uptime`  | Platform uptime information |

---

# 📁 Filesystem Tools

Secure repository and project analysis.

| Tool                  | Description                  |
| --------------------- | ---------------------------- |
| `list_files`          | Directory inspection         |
| `read_file`           | Secure file reading          |
| `get_project_summary` | AI-friendly project overview |

---

# 🌐 Transport Modes

| Mode    | Purpose                            |
| ------- | ---------------------------------- |
| `stdio` | Claude Desktop & local MCP clients |
| `http`  | Remote/cloud MCP deployment        |
| `sse`   | Streaming transport                |
| `rest`  | Administrative APIs                |
| `dev`   | Local development environment      |
| `all`   | Multi-transport debugging          |

---

# ⚙️ Environment Configuration

Create a `.env` file:

```env
NODE_ENV=development
TZ=Asia/Dhaka

TRANSPORT=http

PORT=3000
REST_PORT=4000
SSE_PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=password
DB_NAME=hrms

LOG_LEVEL=debug
```

---

# 📦 Installation

# 1. Clone Repository

```bash
git clone <repository-url>
cd mcp-server
```

---

# 2. Install Dependencies

```bash
npm install
```

---

# 3. Configure Environment

```bash
cp .env.example .env
```

Update `.env` values.

---

# 4. Start Development Server

```bash
npm run dev
```

---

# 🚀 Production Build

```bash
npm run build
npm start
```

---

# 🐳 Docker Deployment

# Build Docker Image

```bash
docker build -t mcp-bridge .
```

---

# Start with Docker Compose

```bash
docker compose up -d
```

---

# View Logs

```bash
docker compose logs -f
```

---

# 🔌 Claude Desktop Configuration

Example MCP client configuration:

```json
{
  "mcpServers": {
    "mcp-bridge": {
      "command": "node",
      "args": [
        "dist/index.js"
      ],
      "cwd": "/path/to/mcp-server",
      "env": {
        "TRANSPORT": "stdio"
      }
    }
  }
}
```

---

# 🧪 Example MCP Prompts

## Database Analysis

```text
Analyze the HRMS database schema and identify attendance-related tables.
```

---

## Infrastructure Monitoring

```text
Check system health and summarize CPU and memory usage.
```

---

## Docker Operations

```text
List running Docker containers and identify unhealthy services.
```

---

## Project Intelligence

```text
Generate a high-level summary of the current project architecture.
```

---

# 🔒 Security Model

MCP Bridge follows a least-privilege enterprise security model.

---

## Database Protection

* Read-only SQL execution
* Dangerous SQL keyword blocking
* Schema validation
* Query guards

---

## Filesystem Protection

* Controlled file access
* Restricted path validation
* Secure read operations

---

## Docker Protection

* Sensitive container restrictions
* Command validation
* Infrastructure safeguards

---

## Auditability

All critical operations can be logged for:

* observability
* debugging
* compliance
* operational auditing

---

# 📈 Enterprise Use Cases

* AI DevOps Assistant
* HRMS Analytics Copilot
* AI Infrastructure Monitoring
* Docker Troubleshooting Agent
* Engineering Knowledge Assistant
* AI-Powered Observability Platform
* Internal Enterprise AI Gateway
* Secure LLM Infrastructure Automation

---

# 🛡️ Best Practices

## Recommended Production Modes

| Environment       | Transport |
| ----------------- | --------- |
| Claude Desktop    | `stdio`   |
| Docker Deployment | `http`    |
| Local Development | `dev`     |
| Debugging         | `all`     |

---

## Important Recommendations

* Never expose unrestricted SQL access
* Restrict filesystem paths
* Protect critical Docker containers
* Use environment variables for secrets
* Enable centralized logging
* Add RBAC for enterprise deployments

---

# 📚 Tech Stack

* TypeScript
* Node.js
* Express.js
* MCP SDK
* MySQL
* Docker
* Zod
* SSE
* REST API

---

# 🔮 Roadmap

* RBAC Authentication
* Prometheus Metrics
* Grafana Integration
* Loki Log Aggregation
* Kubernetes Tools
* Redis Integration
* AI Workflow Automation
* Multi-tenant MCP Platform
* Plugin System
* Dynamic Tool Discovery

---

# 🤝 Contributing

Contributions, ideas, and enterprise integrations are welcome.

Please open issues or submit pull requests.

---

# 📄 License

Licensed under the ISC License.

---

# ⭐ Vision

MCP Bridge is designed to become a secure enterprise AI infrastructure platform enabling organizations to safely integrate LLMs with real operational systems.
