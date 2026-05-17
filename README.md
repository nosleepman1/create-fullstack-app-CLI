# create-fullstack-app-CLI
One command to generate a production-ready fullstack monorepo. Pick your frontend (React/Angular), backend (NestJS/Express/AdonisJS), and database (PostgreSQL/MySQL/MongoDB/SQLite) — auth, Docker, and GitHub Actions included.

## Structure 
mon-projet/
├── frontend/          # React ou Angular
│   ├── Dockerfile     # Multi-stage build → Nginx
│   ├── nginx.conf     # Proxy /api → backend
│   └── src/
├── backend/           # Nest / Adonis / Express
│   ├── Dockerfile     # Multi-stage build Node.js
│   └── src/
├── docker-compose.yml         # Production
├── docker-compose.dev.yml     # Dev hot-reload
├── .env.example
├── .gitignore
└── README.md
