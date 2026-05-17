# create-fullstack-app-cli

Create a production-ready fullstack monorepo with one command.

## Features

- Interactive CLI
- React or Angular frontend
- NestJS, Express, or AdonisJS backend
- PostgreSQL, MySQL, MongoDB, or SQLite
- Docker & Docker Compose
- GitHub Actions CI/CD
- Authentication starter
- Monorepo architecture

---

## Usage

```bash
npx create-fullstack-app-cli
```

---

## CLI example
✔ Project name? → my-app

✔ Frontend?
  React
  Angular

✔ Backend?
  NestJS
  Express
  AdonisJS

✔ Database?
  PostgreSQL
  MySQL
  MongoDB
  SQLite

  ---

  ## Generated structure
  my-app/
├── frontend/
├── backend/
├── docker-compose.yml
├── docker-compose.dev.yml
├── .github/workflows/
├── .env.example
├── .gitignore
└── README.md
