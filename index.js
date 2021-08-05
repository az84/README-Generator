const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkDown.js");

const questions =  [
  {
    type: "input",
    name: "Title",
    message: "Title name?",
  },

  {
    type: "input",
    name: "Installation",
    message: "Installation name?",
  },

  {
    type: "input",
    name: "Description",
    message: "Dexcription?",
  },

  {
    type: "input",
    name: "Usage",
    message: "Usage?",
  },

  {
    type: "input",
    name: "Contribution",
    message: "Contribution?",
  },
  {
    type: "input",
    name: "Tests",
    message: "Tests?",
  },

  {
    type: "input",
    name: "Questions",
    message: "Any Questions?",
  },

  {
    type: "checkbox",
    message: "Please choose a license?",
    name: "License",
    choices: [
      "BSD 3-Clause License",
      "Apache 2.0 License",
      "Eclipse Public License 1.0",
      "GNU GPL v3",
      "MIT",
    ],
  },
  {
    type: "Input",
    name: "Email Address",
    message: "What is your email address?",
  },

  {
    type: "Input",
    name: "Github",
    message: "Could you please provide your Github username?",
  },
];

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log("Making ReadMe",answers);
      fs.writeFileSync(path.join(__dirname,"ReadMe.md"),generateMarkdown(answers));
    })
    .catch((err) => {
       console.log(err);
    })
    .finally(() => {
      console.log("done");
    });
}

init();

//   .then((response) => {
//     return fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(response));
//   });
// }
