function renderLicenseBadge(license) {
  if (license) {
    return `![](https://img.shields.io/badge/license-${license}-blue)`
  }

  return '';
}

function renderGeneralBadge(badgeConfirm,label,message,logo) {
  if (badgeConfirm) {
    return `https://img.shields.io/badge/${label}-${message}-blue?logo=${logo}`
  }

  return '';
}

function renderLicenseSection(license) {
  if (license) {
    return `Licensed under [${license}](https://opensource.org/licenses/${license}) ${new Date().getFullYear()}`;
  }

  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![](${renderGeneralBadge(data.confirmAddBadge, data.badgeLabel, data.badgeMessage, data.badgeLogo)})

  ## Description

  ${data.projectDesc}

  ## Table of contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Maintainers](#maintainers)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Maintainer
  [@${data.name}](https://github.com/${data.githubUser})

  Email: [${data.email}](${data.email})

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## Credits

  ${data.credits}

  ## License
  ${renderLicenseSection(data.license)} 
  
  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
