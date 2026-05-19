<div align="center">
  
# 🚀 Create Fullstack App CLI

**The ultimate tool to scaffold a production-ready, fullstack monorepo in seconds.**

[![npm version](https://img.shields.io/npm/v/create-fullstack-app-cli.svg?style=flat-square)](https://npmjs.org/package/create-fullstack-app-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

</div>

`create-fullstack-app-cli` is an interactive command-line interface that generates a complete, connected, and scalable fullstack workspace. It seamlessly stitches together your favorite frontend framework, backend framework, and shared TypeScript configurations.

Stop wasting time wiring up API endpoints, JWT authentication, and CORS. Start building features instantly!

---

## ✨ Key Features

- **Interactive Setup:** Answer a few prompts and get a fully configured workspace.
- **Frontend Choices:** React (Vite) out-of-the-box (Angular coming soon).
- **Backend Choices:** NestJS or Express with Prisma ORM (AdonisJS coming soon).
- **Batteries Included Authentication:** Pre-configured JWT registration, login, and logout flow.
- **Shared Type Safety:** Automatically generates a `shared` folder so your frontend and backend use the exact same TypeScript DTOs and Interfaces.
- **Auto-Linked:** Environment variables (`VITE_API_URL`) and CORS are pre-configured to communicate instantly.

---

## 📦 Quick Start

Run the following command in your terminal. You don't need to install anything globally!

```bash
npx create-fullstack-app-cli
```

### The Interactive Prompts

```text
? What is the name of your project: my-awesome-app
? Choose your frontend: React
? Choose your backend: NestJS
```

That's it! The CLI will generate your project, link the apps, and install all dependencies automatically.

---

## 🏗️ Generated Workspace Structure

Your newly generated monorepo will look like this:

```text
my-awesome-app/
├── frontend/                 # Your React (Vite) application
│   ├── src/
│   ├── .env                  # Auto-configured VITE_API_URL
│   └── package.json
│
├── backend/                  # Your NestJS or Express application
│   ├── src/
│   │   ├── auth/             # Fully functional JWT Auth!
│   │   └── main.ts
│   ├── prisma/               # Prisma Schema & SQLite ready
│   └── package.json
│
└── shared/                   # Shared TypeScript definitions
    └── types/
        └── index.ts          # AuthResponse, LoginDto, RegisterDto used by both!
```

---

## 🚀 How to Run Your Generated App

After the CLI finishes, it takes just two commands to get everything running locally.

**1. Start the Backend API:**
```bash
cd my-awesome-app/backend
npm run dev
```

**2. Start the Frontend App:**
```bash
# In a new terminal window:
cd my-awesome-app/frontend
npm run dev
```

Your React app will immediately be able to communicate with your backend's authentication endpoints at `http://localhost:3000/api/v1/auth`.

---

## 🛣️ Roadmap

- [x] React & Vite integration
- [x] NestJS Backend support
- [x] Express Backend support
- [x] Shared TypeScript definitions
- [x] JWT Authentication flow
- [ ] Angular Frontend support
- [ ] AdonisJS Backend support
- [ ] Docker Compose generation
- [ ] CI/CD Github Actions templates

---

## 🤝 Contributing

Contributions, issues, and feature requests are highly welcome! 

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
