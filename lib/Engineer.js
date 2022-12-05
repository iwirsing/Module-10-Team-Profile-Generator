const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name,id,email, github){
        super(name,id,email);
        this.github = github;
    };

    getGithub = () => this.github;
    getRole = () => 'Engineer';

    //returns bootstrap card for engineer
    buildHTML(){
        
        return `<div class="col-sm" style="margin:1rem">
        <div class="card" style="width: 18rem;">
        <div class="card-header bg-info" id='role'>${this.getRole()}: ${this.name}</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" id='idEmployee'>ID: ${this.id}</li>
            <li class="list-group-item" id='email' >Email: <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item" id='github'>GitHub: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a></li>
        </ul>
        </div>
        </div>`
    };

}

module.exports =Engineer;