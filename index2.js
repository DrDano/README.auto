const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptQuestions = async () => {
    const answers = await inquirer.prompt([
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
        }
    ]);
    const badgeData = await promptBadges(confirmAddBadge);
    console.log('answers: ', answers);
    console.log('badge data: ', badgeData);
};

const promptBadges = (badgeConfirm, badgeData) => {
    if (!badgeData) {
        badgeData = [];
    } if (badgeConfirm) {
        console.log('Add Badges')
    } else {
        return badgeData;
    }

    return inquirer.prompt([
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
    ]).then(badgePromptData => {
        badgeData.push(badgePromptData);
        if(badgePromptData.confirmAddMoreBadges) {
            const resultofPromptingBadges =  promptBadges(true, badgeData);
            console.log('result of prompting badges is: ', resultofPromptingBadges);
            return resultofPromptingBadges;
        } else {
            return badgeData;
        }
    })
}

promptQuestions()
// .then(data => promptBadges(data))
// // .then(promptBadges)
// .then(badges => {
//     console.log(badges);
// })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
