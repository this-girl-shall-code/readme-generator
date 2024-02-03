// function to generate markdown for README

function generateMarkdown(answers) {
  return `# ${answers.title}
![${answers.license} License Badge](https://img.shields.io/badge/License-${answers.license}-blue)

# Description
${answers.description} 

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation 
${answers.installation} 

## Usage 
${answers.usage} 

## License 
This application is covered under the ${answers.license} license. Please see the [LICENSE](../LICENSE) file in the repository for the full details of this license.

## Contributing 
${answers.contributing} 

## Tests 
Please use the following command to run tests: 

\`\`\`sh
${answers.tests} 
\`\`\`

## Questions
If you have any questions regarding this repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${answers.githubUsername}](https://github.com/${answers.githubUsername}/).
`;
}


//this exports the function to be used in another file
module.exports = generateMarkdown;
