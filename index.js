const inquirer = require('inquirer');
const fs = require('fs');

inquirer
// array of objects
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'projectName',
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Can I have a link to your Github profile?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Whats your email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'How should you be contacted?',
        name: 'contact',
      },
    {
      type: 'input',
      message: 'Can you give me a description of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How should your project be installed?',
      name: 'install',
    },
    {
        type: 'input',
        message: 'How should dependencies be installed?',
        name: 'depend',
      },
    {
        type: 'input',
        message: 'What do you want people to know about using this repo?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Whats do users need to know about making contributions?',
        name: 'contributions',
      },
        {
        type: "list",
        message: "Choose your crust:",
        choices: ["Apache 2.0", "GNU GPL v3", "MIT", "BSD 3", "None"],
        name: "license",
      },
  ])
  .then((response) =>{
    if(response.license = "Apache 2.0"){
        console.log("your mom");
    }
    fs.appendFile('index.html',"", (err) =>
    err ? console.log(err) : console.log('Success!'))
  }
  );
