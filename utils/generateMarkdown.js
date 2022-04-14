// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';

  license == 'MIT' ?  badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)': null;

  license == 'GNU GPLv3' ? badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)' : null;

  license == 'Apache 2.0' ? badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)' : null;

  license == 'none' ? badge = 'This project is not protected by a license.' : null;

   if (badge != '') {
     return badge
   } else {
     badge = 'This project is not protected by a license.';
     return badge;
   };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  license == 'MIT' ?  licenseURL = 'https://opensource.org/licenses/MIT': null;

  license == 'GNU GPLv3' ? licenseURL = 'https://www.gnu.org/licenses/gpl-3.0' : null;

  license == 'Apache 2.0' ? licenseURL = 'https://opensource.org/licenses/Apache-2.0' : null;

  license == 'none' ? licenseURL = '' : null;

  return licenseURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection;
  license != 'none' ? licenseSection = `[${license}](${renderLicenseLink(license)})`: lisenceSection = '';
  return licenseSection 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let commandInstall
  data.installDetails != '' ? commandInstall = `> ${data.installDetails}` : commandInstall = '';

  return `# ${data.projectName}  \n
  \n
  ${renderLicenseBadge(data.license)}
  ## Description  \n
  \n
  ${data.description}  \n
  * Motivation  \n
    ${data.motivation}  \n
  * Reason for Building  \n
    ${data.build}  \n
  * Problems Solved  \n
    ${data.solves}  \n
  * Things Learned  \n
    ${data.learned}  \n
  \n
  ## Table of Contents  \n
  \n
  * [Installation](#installation)  \n
  * [Usage](#usage)  \n
  * [License](#license)  \n
  * [Contributing](#contributing)  \n
  * [Tests](#tests)  \n
  * [Questions](#questions)  \n
  \n
  ## Installation  \n
  \n
  ${data.install}  \n
  \n
  ${commandInstall}  \n
  \n
  ## Usage  \n
  \n
  ${data.usage}  \n
  \n
  ## License  \n
  \n
  ${renderLicenseSection(data.license)}  \n
  \n
  ## Contributing  \n
  \n
  ${data.credits}  \n
  \n
  ## Tests  \n
  \n
  ${data.tests}  \n
  \n
  ## Questions  \n
  \n
  Reach out if you have any questions about this project.
`;
}

module.exports = generateMarkdown;
