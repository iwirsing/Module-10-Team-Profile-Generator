const inquirer=require('inquirer');
const fs= require ('fs');
//call another file to create object on team profile

//generate prompts
const questions = [
    {
        type: 'input',
        message: ' What is the team manager\'s name?',
        name:'teamManager',

    },
    // {
    //     type: 'input',
    //     message: ' What is the team manager\'s employee ID?',
    //     name:'teamManagerID',

    // },
    // {
    //     type: 'input',
    //     message: ' What is the team manager\'s email address?',
    //     name:'teamManagerEmail',

    // },
    // {
    //     type: 'input',
    //     message: ' What is the team manager\'s office number?',
    //     name:'teamManagerOfficeNumber',

    // },
    {
        type: 'list',
        message: 'What would you like to do next?',
        choices: ['Add an engineer','Add an intern','Finish Building My Team'],
        name:'toDoNext',
    },
]

//prompt for add engineer
const addEngineer = [
    {
        type: 'input',
        message: ' What is the engineer\'s name?',
        name:'engineerName',

    },
    // {
    //     type: 'input',
    //     message: ' What is the engineer\'s employee ID?',
    //     name:'engineerID',

    // },
    // {
    //     type: 'input',
    //     message: ' What is the engineer\'s email address?',
    //     name:'engineerEmail',

    // },
    // {
    //     type: 'input',
    //     message: ' What is the engineer\'s Github username?',
    //     name:'engineerGithub',

    // },
]
//prompt for add intern
const addIntern = [
    {
        type: 'input',
        message: ' What is the intern\'s name?',
        name:'internName',
    },
    // {
    //     type: 'input',
    //     message: ' What is the intern\'s employee ID?',
    //     name:'internID',

    // },
    // {
    //     type: 'input',
    //     message: ' What is the intern\'s email address?',
    //     name:'internEmail',

    // },
    // {
    //     type: 'input',
    //     message: ' What is the intern\'s school?',
    //     name:'internEmail',

    // },
]

//build object on prompts
function init(){
    inquirer.prompt(questions).then((data) => {
        console.log(data);

        
}

//create function to create HTML file