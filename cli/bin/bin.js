#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const { questions } = require('./questions');

async function createApp() {
  const inquirer = (await import('inquirer')).default;
  
  const answers = await inquirer.prompt(questions);

  const templateDir = path.join(__dirname, '..', 'templates', 'react-app');
  const targetDir = path.join(process.cwd(), answers.projectName);

  console.log(`Project is creating ${answers.projectName}...`);

  try {
    await fs.copy(templateDir, targetDir);
    console.log(`Project created successfully in ${targetDir}`);
    
    
    console.log('Installing dependencies...');
    process.chdir(targetDir);
    execSync('npm install', { stdio: 'inherit' });
    
    try {
      execSync('npm audit fix', { stdio: 'pipe' });
    } catch (error) {
    }
    
    console.log('===============================================================================');
    console.log('N\'oubliez pas de configurer VITE_API_URL dans .env');
    console.log('===============================================================================');
    console.log('');
    console.log('Démarrage du serveur de développement...');
    
    execSync('npm run dev', { stdio: 'inherit' });
    
  } catch (err) {
    console.error('Erreur lors de la création:', err);
  }
}

createApp();