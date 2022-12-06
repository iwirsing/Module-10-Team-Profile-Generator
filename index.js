const inquirer=require('inquirer');
const fs= require ('fs');

const Manager=require('./lib/Manager');
const Engineer=require('./lib/Engineer');
const Intern=require('./lib/Intern');


//call another file to create object on team profile

//generate prompts
const questions = [
    {
        type: 'input',
        message: ' What is the team manager\'s name?',
        name:'teamManager',
        validate: teamManager =>(teamManager =='')? 'Please do not leave empty.': true,

    },
    {
        type: 'input',
        message: ' What is the team manager\'s employee ID?',
        name:'teamManagerID',
        validate: teamManagerID =>(teamManagerID =='')? 'Please do not leave empty.': true,

    },
    {
        type: 'input',
        message: ' What is the team manager\'s email address?',
        name:'teamManagerEmail',
        validate: function(teamManagerEmail)
        {
            // Regex mail check (return true if valid mail)
            if( /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(teamManagerEmail))
                return true;
            else
                return 'Please enter valid email format.';
        },

    },
    {
        type: 'input',
        message: ' What is the team manager\'s office number?',
        name:'teamManagerOfficeNumber',
        validate: teamManagerOfficeNumber =>(teamManagerOfficeNumber =='')? 'Please do not leave empty.': true,

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
        validate: engineerName =>(engineerName =='')? 'Please do not leave empty.': true,

    },
    {
        type: 'input',
        message: ' What is the engineer\'s employee ID?',
        name:'engineerID',
        validate: engineerID =>(engineerID =='')? 'Please do not leave empty.': true,

    },
    {
        type: 'input',
        message: ' What is the engineer\'s email address?',
        name:'engineerEmail',
        validate: function(engineerEmail)
        {
            // Regex mail check (return true if valid mail)
            if( /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(engineerEmail))
            return true;
            else
            return 'Please enter valid email format.';
        },

    },
    {
        type: 'input',
        message: ' What is the engineer\'s Github username?',
        name:'engineerGithub',
        validate: engineerGithub =>(engineerGithub =='')? 'Please do not leave empty.': true,

    },
];
//prompt for add intern
const addIntern = [
    {
        type: 'input',
        message: ' What is the intern\'s name?',
        name:'internName',
        validate: internName =>(internName =='')? 'Please do not leave empty.': true,
    },
    {
        type: 'input',
        message: ' What is the intern\'s employee ID?',
        name:'internID',
        validate: internID =>(internID =='')? 'Please do not leave empty.': true,

    },
    {
        type: 'input',
        message: ' What is the intern\'s email address?',
        name:'internEmail',
        validate: function(internEmail)
        {
            // Regex mail check (return true if valid mail)
            if( /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(internEmail))
            return true;
            else
            return 'Please enter valid email format.';
        },

    },
    {
        type: 'input',
        message: ' What is the intern\'s school?',
        name:'internSchool',
        validate: internSchool =>(internSchool =='')? 'Please do not leave empty.': true,

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
        buildHTML(teamArray);
        

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
      <link rel="stylesheet" href="style.css">
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

    //write the html file
    fs.writeFile('./dist/index.html', finalHTML, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
     );

    //write the accompanying css file
    fs.writeFile('./dist/style.css',`body {
        /* background image of bricks added, they represent a secure wall, which the passwords should be */
        background-color: #DBA72E;
        font-family: sans-serif;
      }
    
    .card {
        background-color: rgba(255, 255, 255, 0.80);
        border-radius: 5px;
        border-width: 1px;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px 0px;
        color: hsl(206, 17%, 28%);
        font-size: 18px;
        margin: 0 auto;
        max-width: 800px;
        padding: 10px 10px;
      }
    
      .card:hover {
        transform: scale(115%);
    
      }
      @media (max-width: 690px) {
        .btn {
          font-size: 1rem;
          margin: 16px 0px 0px 0px;
          padding: 10px 15px;
        }
      
        #password {
          font-size: 1rem;
        }
      }
      
      @media (max-width: 500px) {
        .btn {
          font-size: 0.8rem;
        }
      }`,(err)=>err ? console.log(err) : console.log('Successfully created style.css')
      );
}




// Function call to initialize app
init();