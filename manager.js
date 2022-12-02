const Employee=require('./employee');

class Manager extends Employee{
    constructor(name,employeeID,email,officeNumber){
        super(name, employeeID, email);
        this.officeNumber=officeNumber;
    }

    //returns the card HTML for engineer
    buildHTML(){
        
        return `<div class="col-sm" style="margin:1rem">
        <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary">
            Manager: ${this.name}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.employeeID}</li>
            <li class="list-group-item">Email:  <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">Office Number: ${this.officeNumber}</li>
        </ul>
        </div></div>`
    }
}

module.exports = Manager;