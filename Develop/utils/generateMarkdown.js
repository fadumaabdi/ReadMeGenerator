// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return "![Github license](https://img.shields.io/badge/license-${license}-blue.svg)";
  }
  return "";
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return "\n* [License](#license)\n";
  }
  return "";
}

// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license !== "None") {
    return "# License This project is licensed under the ${license} license.";
  }
  return "";
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)})

  ##  Description
  ${data.description}

  ## Table of Contents

  *[Installation](#installation)

  [Usage](#usage)

  ${renderLicenseLink(data.license)}

  *[Contributing](#contributing)

  *[Tests](#test)

  *[Questions](#questions)

  ## Installation
  To install dependencies, run the following command:
  
  \"\"\"
  ${data.installation}
  \"\"\"

  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ##Tests
  
  To run tests, run the following command
  \"\"\"
  ${data.test}
  \"\"\"

  ## Questions

  If you have questions about the repo, contact me at
  ${data.email}. You can find my work at [${data.github}}(https://github.com/${data.github}/)).
  ";
  }

`;
}

module.exports = generateMarkdown;
