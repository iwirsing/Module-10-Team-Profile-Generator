const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name,id,email, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    };

    getOfficeNumber = () => this.officeNumber;
    getRole = () => 'Manager';

    //returns bootstrap card format for manager
    buildHTML(){
        
        return `<div class="col-sm" style="margin:1rem;">
        <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary" id='role'>${this.getRole()}: ${this.name}</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" id='idEmployee'>ID: ${this.id}</li>
            <li class="list-group-item" id='email'>Email: <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item" id='phone'>Office Number: ${this.officeNumber}</li>
        </ul>
        </div>
        </div>`
   };



}

module.exports =Manager;