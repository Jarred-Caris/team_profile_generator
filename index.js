const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");


const employees = [];

const managerQuestions = [
  {
    type: "input",
    message: "What is the new employee name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the above employees id number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the above employees email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the Office ID Number",
    name: "officeNumber",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is the new employee name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the above employees id number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the above employees email address?",
    name: "email",
  },
  {
    type: "input",
    message: "Please provide the Github address for this Engineer",
    name: "github",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is the new employee name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the above employees id number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the above employees email address?",
    name: "email",
  },
  {
    type: "input",
    message: "Please provide the education institute this intern attends",
    name: "school",
  },
];

function start() {
  inquirer
    .prompt(managerQuestions)
    .then((res) => {
      console.log(res);
      manager = new Manager(res.name, res.id, res.email, res.officeNumber);
      employees.push("Manager");
      createTeam();
    })
    .catch();
}
start();

function createTeam() {
  console.log("create Team");
  inquirer
    .prompt([
      {
        name: "choice",
        type: "rawlist",
        choices: ["Engineer", "Intern", "Exit"],
        message: "What role would you like to submit?",
      },
    ])
    .then((res) => {
      console.log(res);
      switch (res.choice) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        default:
        generateHTML(res);
      }
    });
}

function createEngineer() {
  inquirer.prompt(engineerQuestions).then((res) => {
    console.log(res);
    engineer = new Engineer(res.name, res.id, res.email, res.github);
    employees.push("Engineer");
    createTeam();
  });
}

function createIntern() {
    inquirer.prompt(internQuestions).then((res) => {
      console.log(res);
      intern = new Intern(res.name, res.id, res.email, res.school);
      employees.push("Intern");
      createTeam();
    });
  }


 const generateHTML = () => {
     console.log(employees);
     const teamComplete = JSON.stringify(employees)
     fs.writeFile('employees.json', teamComplete, function(err) {
         if (err) throw (err);
         console.log('Welcome to your new team!')
     })
 }

 module.exports = generateHTML;
