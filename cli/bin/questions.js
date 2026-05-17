   export const questions = [
      {
        type: 'input',
        name: ' projectName',
        message: 'What is the name of your project : ',
        default: 'my-react-app'
      },
      {
        type: 'list',
        name: 'frontend',
        message: 'Choose your frontend:',
        choices: [
          { name: 'React', value: 'react' },
          { name: 'Angular', value: 'angular' }
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
          { name: 'AdonisJS', value: 'adonisjs' }
        ],
        default: 'express'
      },
      {
        type: 'list',
        name: 'database',
        message: 'Choose your database:',
        choices: [
          { name: 'PostgreSQL', value: 'postgresql' },
          { name: 'MySQL', value: 'mysql' },
          { name: 'MongoDB', value: 'mongodb' },
          { name: 'SQLite', value: 'sqlite' }
        ],
        default: 'mysql'
      },
      {
        type: 'list',
        name: 'orm',
        message: 'Choose your ORM:',
        choices: [
          { name: 'Sequelize', value: 'sequelize' },
          { name: 'Prisma', value: 'prisma' },
          { name: 'Mongoose', value: 'mongoose' },
          { name: 'Lucid', value: 'lucid' }
        ],
        default: 'prisma'
      }
    ];