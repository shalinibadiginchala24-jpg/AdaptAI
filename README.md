# AdaptAI — Personalized Learning Intelligence Platform

> An AI-powered adaptive learning system that remembers your history, analyzes performance, and personalizes what you learn next.

---

## Architecture Overview

```
AdaptAI/
├── frontend/          # React + TypeScript + Vite + Tailwind + shadcn/ui
├── backend/           # Python + FastAPI + Pydantic + SQLAlchemy
├── execution-service/ # (future) Sandboxed code execution engine
├── database/          # SQL migrations, seed data, schema docs
└── docs/              # Architecture decisions, API docs, guides
```

### System Design

```
┌─────────────────────────────────────────────────────────┐
│                     AdaptAI Platform                     │
│                                                         │
│  ┌───────────────┐        ┌──────────────────────────┐  │
│  │   Frontend    │◄──────►│   Backend API (FastAPI)  │  │
│  │  React + Vite │  HTTP  │                          │  │
│  │  Tailwind CSS │        │  ┌──────┐ ┌──────────┐  │  │
│  │  shadcn/ui    │        │  │  AI  │ │Analytics │  │  │
│  └───────────────┘        │  └──────┘ └──────────┘  │  │
│                           │         ▼                │  │
│  ┌───────────────┐        │  ┌─────────────────┐    │  │
│  │  Exec Service │        │  │   PostgreSQL DB  │    │  │
│  │  (future)     │        │  └─────────────────┘    │  │
│  └───────────────┘        └──────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Learning Domains (Planned)
| Domain      | Status    |
|-------------|-----------|
| DSA         | 🏗️ Next   |
| DBMS        | 📋 Planned |
| OS          | 📋 Planned |
| Aptitude    | 📋 Planned |
| Programming | 📋 Planned |

---

## Quick Start

### Prerequisites
- Node.js ≥ 18
- Python ≥ 3.11 (Anaconda3 recommended)
- PostgreSQL ≥ 15

### Frontend

```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

### Backend

```bash
cd backend

# Create virtual environment
python -m venv .venv
.venv\Scripts\activate          # Windows
# source .venv/bin/activate     # macOS/Linux

# Install dependencies
pip install -r requirements.txt

# Set up environment
copy .env.example .env          # Windows
# cp .env.example .env          # macOS/Linux
# Edit .env with your DB credentials

# Start server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
# → http://localhost:8000
# → http://localhost:8000/docs  (Swagger UI)
```

### Health Check

```bash
curl http://localhost:8000/api/health
# {"status":"ok","service":"AdaptAI API"}
```

---

## Backend Structure

```
backend/app/
├── main.py              # FastAPI app factory + middleware
├── api/
│   └── v1/
│       ├── router.py    # Aggregate router
│       └── endpoints/   # One file per resource group
├── core/
│   └── config.py        # Pydantic Settings (env-based)
├── models/              # SQLAlchemy ORM models
├── schemas/             # Pydantic request/response schemas
├── services/            # Business logic layer
├── repositories/        # Data access layer (DB queries)
├── analytics/           # Learning performance analysis
└── ai/                  # AI/ML inference hooks (future)
```

---

## Frontend Structure

```
frontend/src/
├── main.tsx             # React entry point
├── App.tsx              # Root component
├── index.css            # Tailwind directives + CSS variables
├── lib/
│   └── utils.ts         # cn() helper (clsx + tailwind-merge)
└── components/          # shadcn/ui + custom components
```

---

## Environment Variables

| File                        | Purpose                        |
|-----------------------------|--------------------------------|
| `backend/.env.example`      | Backend env template           |
| `frontend/.env.example`     | Frontend env template          |

Copy each `.env.example` to `.env` and fill in your values.

---

## Tech Stack

| Layer       | Technology                              |
|-------------|-----------------------------------------|
| Frontend    | React 18, TypeScript, Vite, Tailwind v3 |
| UI Library  | shadcn/ui, Lucide React, Recharts       |
| Backend     | Python, FastAPI, Pydantic v2            |
| ORM         | SQLAlchemy 2.0                          |
| Database    | PostgreSQL                              |
| Linting     | ESLint, Prettier, TypeScript strict     |

---

## Contributing

1. Create a branch: `git checkout -b feat/your-feature`
2. Make changes and commit using conventional commits
3. Open a PR with a clear description

---

*AdaptAI Foundation — v0.1.0*
