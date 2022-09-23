// TODO: Include packages needed for this application

const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your project title?',
                name: 'Title',
            },
            {
                type: 'input',
                message: '',
                name: '',
            },
            {
                
            }
        ])

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
