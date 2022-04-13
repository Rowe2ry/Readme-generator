// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'Please enter the name for this project:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description:'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for this project?'
    },
    {
        type: 'input',
        name: 'build',
        message: 'Why did you build this project?'
    },
    {
        type: 'input',
        name: 'solves',
        message: 'What problem does it solve?'
    },
    {
        type: 'input',
        name: 'learned',
        message: 'Talk about what you learned while building this application.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'How (if applicable) do you install this application?'
    },
    {
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
