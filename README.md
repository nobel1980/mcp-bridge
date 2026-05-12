# MCP Bridge: Enterprise MCP Server

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![MCP](https://img.shields.io/badge/MCP-SDK-blue?style=for-the-badge)](https://modelcontextprotocol.io)

An enterprise-grade Model Context Protocol (MCP) server providing robust, secure, and standardized interfaces for Database management, Docker orchestration, System monitoring, and Filesystem operations.

## 🚀 Key Features

- **Multi-Transport Support**: Seamless switching between HTTP (SSE), Stdio, and REST API transports.
- **Premium Architecture**: Standardized module patterns with dedicated services, types, and Zod-based validation.
- **Advanced Security**: Integrated SQL guards and Docker action restrictions to prevent unauthorized or destructive operations.
- **Full Observability**: Comprehensive logging system and real-time monitoring tools.
- **Enterprise Ready**: Full Docker & Docker Compose support with optimized multi-stage builds.

---

## 🛠️ Tool Modules

### 🗄️ Database (MySQL/MariaDB)
Standardized tools for safe database interaction.
- `get_database_status`: Real-time connection health and metadata.
- `list_database_tables`: Automated schema discovery.
- `describe_database_table`: Detailed field-level schema analysis.
- `run_select_query`: Secure, read-only query execution protected by `SqlGuard`.

### 🐳 Docker Management
Standardized container orchestration tools.
- `docker_ps`: Comprehensive container listing and status.
- `docker_logs`: Targeted log retrieval for troubleshooting.
- `docker_restart`: Safe container recycling with `DockerGuard` protection for critical services.

### 📊 System Monitoring
Real-time infrastructure observability.
- `system_health`: High-level platform and uptime status.
- `system_metrics`: Granular report on CPU load, memory distribution, and OS architecture.

### 📁 Filesystem & Project
Intelligent file and structure analysis.
- `list_files`: Directory crawling and content discovery.
- `read_file`: Secure file content retrieval.
- `project_summary`: AI-optimized high-level overview of the repository structure.

---

## ⚙️ Configuration

The server is configured via environment variables. See `.env.example` for a complete list of parameters.

| Variable | Description | Default |
| :--- | :--- | :--- |
| `NODE_ENV` | Environment mode | `development` |
| `TZ` | System timezone | `Asia/Dhaka` |
| `TRANSPORT` | Active transport (`http`, `stdio`, `dev`, `all`) | `http` |
| `DB_HOST` | Database host | `localhost` |
| `DB_NAME` | Database name | `hrms` |

---

## 📦 Installation & Setup

### Local Development
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd mcp-server
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure environment**:
   ```bash
   cp .env.example .env
   # Edit .env with your specific credentials
   ```
4. **Start the server**:
   ```bash
   npm run dev
   ```

### Docker Deployment
The project includes a production-ready multi-stage `Dockerfile`.
```bash
# Using Docker Compose
npm run docker:up

# View logs
npm run docker:logs
```

---

## 🛡️ Security & Reliability

- **SQL Guard**: Prevents `DROP`, `DELETE`, `TRUNCATE`, and other destructive operations in the `run_select_query` tool using regex-based whole-word matching.
- **Docker Guard**: Restricts sensitive actions on core infrastructure containers.
- **Zod Schemas**: Every tool input is strictly validated against defined schemas in `[module]/schemas/` to prevent injection and unexpected behavior.
- **Centralized Logging**: All operations, errors, and security warnings are logged to the `log/` directory with daily rotations.

---

## 📄 License

This project is licensed under the ISC License.
