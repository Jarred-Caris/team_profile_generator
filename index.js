// const Employee = require("./lib/Employee");
// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer =require("inquirer")
// const employee = new Employee();



const questions =[
    {
        type: 'input',
        message: 'What is the new employee name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the above employees id number?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the above employees email address?',
        name: 'email'
    }
]

// const managerQuestions =[
//     {
//         type: 'input',
//         message: 'What is the Office ID Number',
//         name: 'officeNumber'
//     }]

function start(){
    inquirer
    .prompt(questions)
    .then(res=> {
        console.log(res)
    })
    .catch()

}
start();

// function init () {
//     inquirer.prompt(questions)
//     .then((answer) => console.log(answer))
// }
// init();


