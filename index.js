const Employee = require("./lib/Employee");
const inquirer =require("inquirer")
const employee = new Employee();

const survey =[
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

function init () {
    inquirer.prompt(survey)
    .then((answer) => console.log(answer))
}
init();


