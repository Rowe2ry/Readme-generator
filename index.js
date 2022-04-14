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
        type: 'input',
        name: 'tests',
        message: 'How should users test this application?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Anybody you\'d like to thank?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want for this project?',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'none']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([...questions])
    .then((res) => {
        //console.log(res)
        console.log(generateMarkdown(res));

    })
};

// Function call to initialize app
init();
