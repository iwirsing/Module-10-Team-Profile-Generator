const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name,id,email, school){
        super(name,id,email);
        this.school = school;
    };

    getSchool = () => this.school;
    getRole = () => 'Intern';

    //returns bootstrap card for Intern
    buildHTML(){
        
        return `<div class="col-sm" style="margin:1rem">
        <div class="card" style="width: 18rem;">
        <div class="card-header bg-secondary" id='role'>${this.getRole()}: ${this.name}</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" id='idEmployee'>ID: ${this.id}</li>
            <li class="list-group-item" id='email'>Email: <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item" id='school'>School: ${this.school}</li>
        </ul>
        </div>
        </div>`
    }
}

module.exports =Intern;