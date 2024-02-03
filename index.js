const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username',
    validate: (input) => {
      if (input == ''){
        return 'Please enter your GitHub username'
      } else {
        return true
      };
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address',
    validate: (input) => {
      if (!input.includes('@') || !input.includes('.co') || input == ''){
        return 'Please enter a valid email address'
      } else {
        return true
      };
    }
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: (input) => {
      if (input == ''){
        return 'Please enter the title of your project'
      } else {
        return true
      };
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project.',
    validate: (input) => {
      if (input == ''){
        return 'Please provide a description of your project.'
      } else {
        return true
      };
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What does the user need to know about how to install this application?',
    validate: (input) => {
      if (input == ''){
        return 'Please enter what the user needs to know about how to install this application'
      } else {
        return true
      };
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using this application?',
    validate: (input) => {
      if (input == ''){
        return 'Please enter what the user needs to know about using this application'
      } else {
        return true
      };
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project have?',
    choices: ['Apache', 'BSD', 'GPL', 'MIT']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to this project?',
    validate: (input) => {
      if (input == ''){
        return 'Please enter what the user needs to know about contributing to this project'
      } else {
        return true
      };
    }
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What command should be used to run tests?',
    validate: (input) => {
      if (input == ''){
        return 'Please enter what command should be used to run tests'
      } else {
        return true
      };
    }
  }
];

// function to create a README file
function writeToFile(answers) { 

    fs.writeFile('./output/README.md', generateMarkdown(answers), (err) => 
    err ? console.error(err) : console.log("Success! Your README has been created in the output folder."))
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)  
        .then((answers) =>{ 
            console.log(answers)
            //what to do with the answers collated from the user?
            writeToFile(answers)
        });
}

// function call to initialize program when you type node index.js into terminal
init();
