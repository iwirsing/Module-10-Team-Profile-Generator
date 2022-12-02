const inquirer=require('inquirer');
const fs= require ('fs');
const Manager=require('./manager');
const Engineer=require('./engineer');
const Intern=require('./intern');


//call another file to create object on team profile

//generate prompts
const questions = [
    {
        type: 'input',
        message: ' What is the team manager\'s name?',
        name:'teamManager',

    },
    {
        type: 'input',
        message: ' What is the team manager\'s employee ID?',
        name:'teamManagerID',

    },
    {
        type: 'input',
        message: ' What is the team manager\'s email address?',
        name:'teamManagerEmail',

    },
    {
        type: 'input',
        message: ' What is the team manager\'s office number?',
        name:'teamManagerOfficeNumber',

    },
    {
        type: 'list',
        message: 'What would you like to do next?',
        choices: ['Add an engineer','Add an intern','Finish Building My Team'],
        name:'toDoNext',
    },
];

//prompt for add engineer
const addEngineer = [
    {
        type: 'input',
        message: ' What is the engineer\'s name?',
        name:'engineerName',

    },
    {
        type: 'input',
        message: ' What is the engineer\'s employee ID?',
        name:'engineerID',

    },
    {
        type: 'input',
        message: ' What is the engineer\'s email address?',
        name:'engineerEmail',

    },
    {
        type: 'input',
        message: ' What is the engineer\'s Github username?',
        name:'engineerGithub',

    },
];
//prompt for add intern
const addIntern = [
    {
        type: 'input',
        message: ' What is the intern\'s name?',
        name:'internName',
    },
    {
        type: 'input',
        message: ' What is the intern\'s employee ID?',
        name:'internID',

    },
    {
        type: 'input',
        message: ' What is the intern\'s email address?',
        name:'internEmail',

    },
    {
        type: 'input',
        message: ' What is the intern\'s school?',
        name:'internSchool',

    },
];

//team array
let teamArray=[];


//FUNCTIONS
//build object on prompts
function init(){
    inquirer.prompt(questions).then((data) => {
        
        //build manager object
        const manager = new Manager(data.teamManager,data.teamManagerID,data.teamManagerEmail, data.teamManagerOfficeNumber);
        teamArray.push(manager);
        
        toDoNextResponse(data.toDoNext);
    });


}

//function to check toDoNext response
function toDoNextResponse(data){

    //check if program is asked to make engineer or intern input
    if (data==='Add an engineer'){
        //prompt for engineer data
        inquirer.prompt(addEngineer).then((data)=>{
        //build engineer object
        const engineer = new Engineer (data.engineerName,data.engineerID,data.engineerEmail,data.engineerGithub);
        teamArray.push(engineer)

        //go back to teambuild menu
        teamBuild();

    });
    
    }
    else if (data==='Add an intern'){
        //prompt for intern data
        inquirer.prompt(addIntern).then((data)=>{
        //build intern object
        const intern = new Intern (data.internName,data.internID,data.internEmail,data.internSchool);
        teamArray.push(intern);

        //go back to teambuild menu
        teamBuild();

            });


    }
    else{
        //build the html

        // console.log(teamArray);
        const indexData= buildHTML(teamArray);
        

    };

}



//function to go back to team building question
function teamBuild(){
    inquirer.prompt(questions[4]).then((data)=>{
       
        toDoNextResponse(data.toDoNext);
        //build engineer object

        });

}

//create function to create HTML file
function buildHTML(team){
    const topHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Team Profile Generator</title>
    </head>
    <body>
        <div class="container p-3 my-3 bg-dark text-white">
        <h1>Team Profile Generator</h1>
        <p>Meet the team...</p>
        </div>
        <main class="row container" style="margin-left:2rem">`;

    const bottomHTML = `</main></body></html>`

    let teamContent =''
    team.forEach(employee=>{
        teamContent += employee.buildHTML();
    });

    //build it together
    const finalHTML =topHTML+teamContent+bottomHTML;

    //write the file
    fs.writeFile('index.html', finalHTML, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
     );
}




// Function call to initialize app
init();