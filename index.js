const inquirer = require('inquirer');
const fs = require('fs');

inquirer
// Questions to learn about the project adn fill out readme
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
        message: 'What year is it?',
        name: 'year',
      },
      {
        type: 'input',
        message: 'Whats your Github username?',
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
        type: 'input',
        message: 'How should tests be run?',
        name: 'tests',
      },
    //   This is a multiple choice question that allows the user to select a license
        {
        type: "list",
        message: "Choose a license:",
        choices: ["Apache 2.0", "GNU GPL v3", "MIT", "BSD 3", "None"],
        name: "license",
      },
  ])
  .then((response) =>{
    // Depending on the license selected a different badge and notice will be displayed
    if(response.license === "Apache 2.0"){
        var licenseIcon = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        var fullLicense = "Copyright "+response.year+" "+ response.username +"\n\nLicensed under the Apache License, Version 2.0 (the 'License');\n\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\n\nhttp://www.apache.org/licenses/LICENSE-2.0";
    }
    if(response.license === "GNU GPL v3"){
        var licenseIcon = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        var fullLicense = "This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.";
    }
    if(response.license === "MIT"){
        var licenseIcon = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        var fullLicense = "Copyright "+response.year+" "+ response.username +"\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.";
    }
    if(response.license === "BSD 3"){
        var licenseIcon = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        var fullLicense = "Copyright "+response.year+" "+ response.username +"\n\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\n1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n\n2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n\n3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.";
    }
    if(response.license === "None"){
        var fullLicense = "No License";
    }
    // This will create a readme file formatted with all of the users inputted information
    fs.appendFile('README.md', "# "+ response.projectName + "\n \n"+licenseIcon+"\n1. [ Description ](#description)\n2. [ Installation ](#installation)\n3. [ Usage ](#usage)\n4. [ Contributing ](#contributing)\n5. [ Tests ](#tests)\n6. [ License ](#license)\n7. [ Questions ](#questions)\n## Description \n"+response.description+"\n## Installation\nHow should this be installed?" + response.install + "How should dependencies be installed?" + response.dependencies + "\n## Usage\n" + response.usage + "\n## Contributing\n" + response.contributions + "\n## Tests\n" + response.tests + "\n## License\n"+fullLicense+"\n## Questions:\n#### Who created this?\n" + response.username + "\n#### How should the creator be contacted?\n" + response.contact + "\n#### Github:\n<a href='https://github.com/"+ response.github +"'>" + response.github + "</a>\n#### Email:\n" + response.email, (err) =>
    err ? console.log(err) : console.log('Success!'))
  }
  );
