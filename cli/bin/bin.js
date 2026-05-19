#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const { questions } = require('./questions');

async function createApp() {
  let inquirer;
  try {
    inquirer = (await import('inquirer')).default;
  } catch (err) {
    // Fallback if not using ESM version of inquirer
    inquirer = require('inquirer');
  }
  
  const answers = await inquirer.prompt(questions);

  const projectName = answers.projectName.trim() || 'my-fullstack-app';
  const targetDir = path.join(process.cwd(), projectName);

  console.log(`\n Creating project ${projectName}...`);

  try {
    await fs.ensureDir(targetDir);

    const frontendDir = path.join(targetDir, 'frontend');
    const backendDir = path.join(targetDir, 'backend');
    const sharedDir = path.join(targetDir, 'shared');

    // Copy frontend
    console.log('Generating frontend...');
    if (answers.frontend === 'react' || answers.frontend === 'angular') {
      if (answers.frontend === 'angular') {
        console.log('Ooops sorry! Angular is not ready yet, falling back to React...');
      }
      await fs.copy(path.join(__dirname, '..', 'templates', 'react'), frontendDir);
    }

    // Copy backend
    console.log('Generating backend...');
    if (answers.backend === 'nestjs') {
      await fs.copy(path.join(__dirname, '..', 'templates', 'nestjs'), backendDir);
    } else if (answers.backend === 'express' || answers.backend === 'adonisjs') {
      if (answers.backend === 'adonisjs') {
        console.log('Ooops sorry! AdonisJS is not ready yet, falling back to Express...');
      }
      await fs.copy(path.join(__dirname, '..', 'templates', 'express'), backendDir);
    }

    // Copy shared types
    console.log('Generating shared types...');
    await fs.copy(path.join(__dirname, '..', 'templates', 'shared'), sharedDir);

    // Setup direct link (.env for React)
    console.log('🔗 Linking frontend to backend...');
    const envContent = `VITE_API_URL=http://localhost:3000/api/v1\n`;
    await fs.writeFile(path.join(frontendDir, '.env'), envContent);

    console.log('\n⚙️ Installing dependencies... This may take a few minutes.');
    
    console.log('📥 Installing backend dependencies...');
    execSync('npm install', { stdio: 'inherit', cwd: backendDir });

    console.log('📥 Installing frontend dependencies...');
    execSync('npm install', { stdio: 'inherit', cwd: frontendDir });

    console.log('\n===============================================================================');
    console.log('✅ Fullstack App Created successfully!');
    console.log('===============================================================================');
    console.log(`\nTo get started:\n`);
    console.log(`  cd ${projectName}\n`);
    console.log(`To run the Backend:`);
    console.log(`  cd backend`);
    console.log(`  npm run dev  (or npm run start:dev)\n`);
    console.log(`To run the Frontend:`);
    console.log(`  cd frontend`);
    console.log(`  npm run dev`);
    console.log('===============================================================================\n');
    
  } catch (err) {
    console.error('❌ Error creating project:', err);
  }
}

createApp();