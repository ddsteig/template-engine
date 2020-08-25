
  
  # Template Engine

  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

  ## Table of Contents
  - [Description](#description)
  - [Installation Instructions](#install)
  - [Usage Information](#usage)
  - [Resources](#resources)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)
  
  <hr>
  
  ## Description <a name="description"></a>
  
  A cli generated team roster with a manager, and multiple employees that are egineers or interns. 
  It uses a main class Employee that is inherited into other classes: Manager, Engineer, and Intern. 

 ![classes](https://github.com/ddsteig/template-engine/blob/master/Assets/img/classes.jpg)

  It also makes use of inquirer to prompt for input from the user, utilizes switch cases for the different roles, and whether or not to add another team member. 
  
  ![inquirer](https://github.com/ddsteig/template-engine/blob/master/Assets/img/inquirer.jpg)
  
  Promises are used through out the app.js and used after the function runs to fs writeFile to create the team.html.

  ![writefile](https://github.com/ddsteig/template-engine/blob/master/Assets/img/writefile.jpg)
  
  <hr>
  
  ## Installation Instructions <a name="install"></a>
  
  You will need to run npm install from inside the folder with package.json
  
  <hr>
  
  ## Usage <a name="usage"></a>
  
  You will install the dependencies, then run via node app.js. Once you are the prompt, you will input information based on prompts. You can to continue to add a new employees (egineers or interns) by selecting yes when asked to add another team member, or select no to exit and genrate the team profile. Once the cli is complete a html file will be generated based on the information entered.

  <iframe src="https://drive.google.com/file/d/1So32Gi4QFBdHf2Y9flgPvyeRKbPZPCke/preview" width="640" height="480"></iframe>
  
  <hr>
  
  ## Resources <a name="resources"></a>
  
  node, inquirer, javascript, jest
  
  <hr>
  
  ## Test Information <a name="test"></a>
  
  You can npm run test to check the validity of the classes used for the team: Employee and then, Manager, Egineer, and Intern that inherit the Employee class. 
  
  ![test](https://github.com/ddsteig/template-engine/blob/master/Assets/img/test.jpg)

  <hr>
  
  ## License <a name="license"></a>
  
  Please refer to the following license for guidelines, usage details, and information.
  
  License: MIT
  
  <hr>
  
  ## Questions <a name="questions"></a>
  
  For any questions regarding this material, contact me at the following:
  
  Email: tekhexrax@yahoo.com
  
  Github: [https://github.com/ddsteig](https://github.com/ddsteig)
  
  