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

let totalData = []

const promptQuestions = () => {
    
    inquirer.prompt([
        // {
        //     type: 'input',
        //     name: 'name',
        //     message: 'What is your name? (Required)',
        //     validate: nameInput => {
        //         if (nameInput) {
        //             return true;
        //         } else {
        //             console.log('Your name is a required input.');
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'githubUser',
        //     message: 'What is your GitHub username? (Required)',
        //     validate: githubInput => {
        //         if (githubInput) {
        //             return true;
        //         } else {
        //             console.log('Your GitHub username is a required input.');
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'email',
        //     message: 'Enter your email address (Optional): '
        // },
        // {
        //     type: 'input',
        //     name: 'title',
        //     message: 'What is the title of your project? (Required)',
        //     validate: titleInput => {
        //         if (titleInput) {
        //             return true;
        //         } else {
        //             console.log('The title of your project is a required input.');
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'editor',
        //     name: 'projectDesc',
        //     message: 'Please provide a description of the project. (Required)',
        //     validate: descInput => {
        //         if (descInput) {
        //             return true;
        //         } else {
        //             console.log('The description of your project is a required input.');
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'list',
        //     name: 'projectType',
        //     message: 'What kind of project is this? (Required)',
        //     choices: ['browser-based', 'node-based'],
        //     validate: typeInput => {
        //         if (typeInput) {
        //             return true;
        //         } else {
        //             console.log('You must select a project type.');
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'editor',
        //     name: 'installation',
        //     message: 'Please provide installation instructions for the project. (Required)',
        //     when: ({projectType}) => {
        //         if (projectType === 'node-based') {
        //             return true;
        //         } else {
        //             return false;
        //         }
        //     },
        //     validate: installInput => {
        //         if (installInput) {
        //             return true;
        //         } else {
        //             console.log('Please provide installation instructions.');
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'editor',
        //     name: 'usage',
        //     message: 'Please provide usage instructions. (Required)',
        //     validate: usageInput => {
        //         if (usageInput) {
        //             return true;
        //         } else {
        //             console.log('Please provide usage instructions');
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'editor',
        //     name: 'credits',
        //     message: 'Please credit any contributors or resources you used to build this project. (Required)',
        //     validate: credits => {
        //         if (credits) {
        //             return true;
        //         } else {
        //             console.log('Please list credits for the project.');
        //             return false;
        //         }
        //     } 
        // },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project, the MIT license is the preferred choice for open-source projects.',
            choices: ['MIT', 'Academic Free License v3.0', 'Artistic license 2.0', 'Creative Commons license family', 'Educational Community License', 'ISC', 'Microsoft Public License', 'Open Software License 3.0', 'The Unilicense'],
            default: 'MIT'
        },
        {
            type: 'confirm',
            name: 'confirmAddBadge',
            message: 'Would you like to add badges to your README?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmOptional',
            message: 'Would you like to also add other optional fields (contribution instructions and tests?)',
            default: false
        },
        {
            type: 'input',
            name: 'badgeLogo',
            message: 'Please provide a logo name (must be complete name [ex. javascript, not JS])',
        },
        {
            type: 'confirm',
            name: 'confirmAddMoreBadges',
            message: 'Would you like to add more badges?',
            default: false
        }
    ])
    
};


promptQuestions()


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
