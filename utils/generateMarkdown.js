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
  license != 'none' ? licenseSection = `${renderLicenseBadge(license)}  \n [${license}](${renderLicenseLink(license)})`: lisenceSection = '';
  return licenseSection 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
