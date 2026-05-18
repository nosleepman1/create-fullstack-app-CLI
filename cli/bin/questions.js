const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project : ',
    default: 'my-fullstack-app'
  },
  {
    type: 'list',
    name: 'frontend',
    message: 'Choose your frontend:',
    choices: [
      { name: 'React', value: 'react' },
      { name: 'Angular (Not ready yet, uses React)', value: 'angular' }
    ],
    default: 'react'
  },
  {
    type: 'list',
    name: 'backend',
    message: 'Choose your backend:',
    choices: [
      { name: 'NestJS', value: 'nestjs' },
      { name: 'Express', value: 'express' },
      { name: 'AdonisJS (Not ready yet, uses Express)', value: 'adonisjs' }
    ],
    default: 'nestjs'
  }
];

module.exports = { questions };