# README Generator
![MIT License Badge](https://img.shields.io/badge/License-MIT-blue)

## Description

As a developer, I wanted to create a README generator so that I can quickly create a professional README for a new project. Using Node.js and the fs & inquirer NPM dependencies, this command-line application will take user input to produce a fully complete READ.md file. 

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Technical Skills](#technical-skills-used-in-this-project)


## Installation

1. Fork the repository by clicking the Fork button:

    ![Screenshot of the fork button in GitHub](./assets/images/fork-screenshot.png)

2. Open the repository in VS Code.

3. Ensure you have node.js installed on your computer. To check open the Windows Command Prompt, Powershell or a similar command line tool, and type:
    ```sh 
    node -v
    ```
    If you have node.js installed it will print a version number (e.g. v0. 10.35). Otherwise, go to [nodejs.org](https://nodejs.org/en) and download it (it is recommended to download the LTS version).

4. Install npm dependencies by typing the following into your command-line:
    ```
    npm install
    ```

## Usage 

1. Open the repository in VS Code and right click on the index.js file and select 'Open in Integrated Terminal'.

2. In the terminal, run the command:

    ```sh 
    node index.js
    ```

3. A series of questions about your README content will be presented in the terminal. Please type your answer to each question in the terminal and press enter. When presented with a list of choices, use the up & down arrows to select an option and then press enter to select it.  

> [!NOTE]
> If you do not provide an answer, you'll be prompted to provide this. The application will not progress until an answer is provided.
> When adding in your email, if you provide an invalid email address, you'll be prompted to enter a valid email address.

4. Once all questions have been answered, you'll see a success comment in the terminal and a README.md file will have been created in the output folder. 


> [!CAUTION]
> If you run the 'node index.js' command again in the integrated terminal, it will overwrite any current README.md file that may already exist in the output folder.

### This video provides a walkthrough of how to use the application:



## License 

This application is covered under the MIT license. Please see the [LICENSE](./LICENSE) file in the repository for the full details of this license.


## Technical skills used in this project

![Static Badge - JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Static Badge - node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
