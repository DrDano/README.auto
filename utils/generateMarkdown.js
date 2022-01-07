function renderLicenseBadge(license) {
  if (license) {
    const edited = license.split("-").join("");
    return `![](https://img.shields.io/badge/license-${edited}-blue)`
  }

  return '';
}

function renderGeneralBadge(badgeConfirm,label,message,logo) {
  if (badgeConfirm) {
    const edited = [message.split(" ").join(''), label.split(" ").join(''), logo.split(" ").join('')]
    return `https://img.shields.io/badge/${edited[1]}-${edited[0]}-blue?logo=${edited[2]}`
  }

  return '';
}

retrieveLicense = (license) => {
  const licenses = 
  {
    'MIT': 'mit',
    'GNU AGPLv3': 'agpl-3.0',
    'GNU GPLv3': 'gpl-3.0',
    'GNU LGPLv3': 'lgpl-3.0',
    'Mozilla Public License 2.0': 'mpl-2.0',
    'Apache License 2.0':'apache-2.0',
    'Boost Software License 1.0': 'bsl-1.0',
    'The Unilicense': 'unilicense'
  }

  return licenses[license]
}

function renderLicenseSection(licenseCode) {
  if (licenseCode) {
    return `Licensed under [${licenseCode}](https://choosealicense.com/licenses/${licenseCode}) ${new Date().getFullYear()}`;
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

  Email: [${data.email}](mailto:${data.email})

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## Credits

  ${data.credits}

  ## License
  ${renderLicenseSection(retrieveLicense(data.license))} 
  
  ${renderLicenseBadge(retrieveLicense(data.license))}
`;
}

module.exports = generateMarkdown;
