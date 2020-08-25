const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// inquirer will prompt manager information first,
// then user can add more employees that are engineers or interns

function promptUser() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter Manager Name:",
        name: "name",
      },
      {
        type: "input",
        message: "Enter Manager Email:",
        name: "email",
      },
      {
        type: "input",
        message: "Enter Manager ID:",
        name: "id",
      },
      {
        type: "input",
        message: "Enter Office Number:",
        name: "officeNumber",
      },
    ])
    .then(function (info) {
      const manager = new Manager(
        info.name,
        info.email,
        info.id,
        info.officeNumber
      );
      employees.push(manager);
    })
    .then(function addEmployee() {
      return inquirer
        .prompt([
          {
            type: "list",
            message: "Select Employee Role:",
            name: "role",
            choices: ["Engineer", "Intern"],
          },
        ])
        .then(function (input) {
          switch (input.role) {
            case "Engineer":
              return inquirer
                .prompt([
                  {
                    type: "input",
                    message: "Enter Employee Name:",
                    name: "name",
                  },
                  {
                    type: "input",
                    message: "Enter Employee Email:",
                    name: "email",
                  },
                  {
                    type: "input",
                    message: "Enter Employee ID:",
                    name: "id",
                  },
                  {
                    type: "input",
                    message: "Enter Github:",
                    name: "github",
                  },
                  {
                    type: "list",
                    message: "Add another team member?",
                    name: "answer",
                    choices: ["Yes", "No"],
                  },
                ])
                .then(function (info) {
                  const engineer = new Engineer(
                    info.name,
                    info.email,
                    info.id,
                    info.github
                  );
                  employees.push(engineer);

                  switch (info.answer) {
                    case "Yes":
                      return addEmployee();
                    case "No":
                      return;
                  }
                });
            case "Intern":
              return inquirer
                .prompt([
                  {
                    type: "input",
                    message: "Enter Employee Name:",
                    name: "name",
                  },
                  {
                    type: "input",
                    message: "Enter Employee Email:",
                    name: "email",
                  },
                  {
                    type: "input",
                    message: "Enter Employee ID:",
                    name: "id",
                  },
                  {
                    type: "input",
                    message: "Enter School:",
                    name: "school",
                  },
                  {
                    type: "list",
                    message: "Add another team member?",
                    name: "answer",
                    choices: ["Yes", "No"],
                  },
                ])
                .then(function (info) {
                  const intern = new Intern(
                    info.name,
                    info.email,
                    info.id,
                    info.school
                  );
                  employees.push(intern);

                  switch (info.answer) {
                    case "Yes":
                      return addEmployee();
                    case "No":
                      return;
                  }
                });
          }
        });
    });
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

promptUser().then(function () {
  let html = render(employees);
  fs.writeFile(outputPath, html, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
