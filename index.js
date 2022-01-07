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
const fs = require('fs');

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
        },
        {
            type: 'input',
            name: 'projectDesc',
            message: 'Please provide a description of the project. (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('The description of your project is a required input.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for the project. (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please provide installation instructions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage instructions. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide usage instructions');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please credit any contributors or resources you used to build this project. (Required)',
            validate: credits => {
                if (credits) {
                    return true;
                } else {
                    console.log('Please list credits for the project.');
                    return false;
                }
            } 
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project (MIT is preferred for most open-source projects).',
            choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License', 'The Unilicense'],
            default: 'MIT'
        },
        {
            type: 'confirm',
            name: 'confirmAddBadge',
            message: 'Would you like to add a custom badge to your README?',
            default: false
        },
        {
            type: 'input',
            name: 'badgeLogo',
            message: 'Please provide a logo name (must be complete name [ex. javascript, not JS] and do not use any separator characters).',
            when: ({confirmAddBadge}) => {
                if (confirmAddBadge) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'badgeLabel',
            message: 'Please provide a label for your badge (do not use separator characters [ex. space]).',
            when: ({confirmAddBadge}) => {
                if (confirmAddBadge) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'badgeMessage',
            message: 'Please provide a message for your badge (do not use separator characters [ex. space]).',
            when: ({confirmAddBadge}) => {
                if (confirmAddBadge) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'You can add contribution instructions here for other users of your code (Required)',
            validate: contribution => {
                if (contribution) {
                    return true;
                } else {
                    console.log('Please provide contribution instructions for the project.');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'tests',
            message: 'You can provide instructions for testing your code here along with test commands (Required)',
            validate: tests => {
                if (tests) {
                    return true;
                } else {
                    console.log('Please provide tests for the project.');
                    return false;
                }
            } 
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created successfully!'
            });
        });
    });
};


promptQuestions().then(promptResponse => {
    return generateMarkdown(promptResponse)
})
.then(markdownOutput => {
    writeToFile('./dist/README.md', markdownOutput)
})




// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
