// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const util = require('util')
const generateReadme = require('./utils/generateMarkdown')
const writeFileAsync = util.promisify(fs.writeFile)

// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description about your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation process if any',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is this project used for?',
        },
        {
            type: 'list',
            name: 'license',
            choices: [
                'Apache',
                'Academic',
                'GNU',
                'ISC',
                'MIT',
                'Mozilla',
                'Open',
            ],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Is there a test included?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What should i do if i have an issue?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your GitHub username: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email: ',
        },
    ])
}


// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await promptUser();
        const generateContent = generateReadme(answers);

        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Readme successfully created')
    } catch(err) {
        console.log(err)
    }
}

// Function call to initialize app
init();
