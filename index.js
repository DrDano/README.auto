// prompt user for name, github username, and email, then create links to github profile and email address in readme
// prompt user for a project title and validate response
// prompt user for project description and validate response
// prompt user for installation instructions in a step-wise fashion (maybe even ask them for one step at a time and validate after each one to see if they are done adding steps) and validate response
// prompt user for usage instructions and validate response
// prompt user for credits and validate response
// give user multiple choices for license
// give user multiple choices for badges
// prompt user for optional contribution instructions
// prompt user for any optional tests

// create table of contents which is dependent on what optional responses the user filled out

// code generateMarkdown.js to create the markdown file from user responses
// create promise chain in index.js to create MD file from generateMarkdown.js



// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Your name is a required input.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUser',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Your GitHub username is a required input.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Optional): '
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('The title of your project is a required input.');
                    return false;
                }
            }
        }
    ]);
};

promptQuestions()

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
