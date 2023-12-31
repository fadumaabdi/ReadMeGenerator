// TODO: Include packages needed for this application
const fs = require("fs"); //package for filesystem work
const path = require("path");
const inquirer = require("inquirer"); //package for command line interface (CLI)
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your Github Username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your Email?",
    },
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description about you project.",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license does your project need?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i",   
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test", 
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know ?",
        default: "npm test", 
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contribuitng to the repo?",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app - calls the questions in
function init() {
    inquirer.prompt(questions). then((inquirerResponses) => {
        console.log("Generating README -");

        const markdown = generateMarkdown({...inquirerResponses});

        writeToFile("README.md", markdown);

    });
}

// Function call to initialize app
init();
