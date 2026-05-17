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

## CLI Example

```bash
? Project name: my-app

? Choose your frontend
[0] React
[1] Angular

✔ Selected: React

? Choose your backend
[0] NestJS
[1] Express
[2] AdonisJS

✔ Selected: NestJS

? Choose your database
[0] PostgreSQL
[1] MySQL
[2] MongoDB
[3] SQLite

✔ Selected: PostgreSQL
```

---

## Generated Structure

```bash
my-app/
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   └── nginx.conf
│
├── backend/
│   ├── src/
│   └── Dockerfile
│
├── docker-compose.yml
├── docker-compose.dev.yml
├── .github/workflows/
├── .env.example
├── .gitignore
└── README.md
```

---

## Example Stack

```bash
Frontend  → React
Backend   → NestJS
Database  → PostgreSQL
```

Generated automatically with:

- Docker setup
- Authentication
- CI/CD workflow
- Production configuration

---

## Development

```bash
docker compose -f docker-compose.dev.yml up
```

---

## Production

```bash
docker compose up --build
```

---

## License

MIT
