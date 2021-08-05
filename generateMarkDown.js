// function to generate markdown for README
function licenseBadge(data) {
    const licenInput = data.License;
    // const varLicenses = " "
    if (licenInput === "BSD 3-Clause License") {
        return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
    };
    if (licenInput === "Apache 2.0 License") {
        return  "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    };
    if (licenInput === "Eclipse Public License 1.0") {
        return  "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)";
      };
    if (licenInput === "GNU GPL v3") {
        return  "![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)";
      };

    if (licenInput === "MIT") {
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg";
      };


    // return varLicenses
    };
  
function generateMarkdown(data) {
return `
# ${data.Title}
${licenseBadge(data)}
## Table of Contents:
- [Description](#description)
- [License](#License)
- [Installation](#Installation)
- [Usage](#Usage)  
- [Contribution](#Contribution)
- [Tests](#Tests)
- [GitHub](#GitHub)
- [Email](#Email)
## Description
${data.Description} 
## Installation
${data.Installation}
## Usage
${data.Usage}
## Contributing
${data.Contributing}
## Tests
${data.Tests}
## License
${licenseBadge(data)}
## GitHub
${data.Github}
## E-mail
${data.Email}`
}
module.exports = generateMarkdown;