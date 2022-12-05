const Manager = require('../lib/Manager');
const name="Tristesse",id=2,email="tristesseBoss@test.com",phoneNum='630-123-4567';

const manager = new Manager(name,id,email,phoneNum);

test('Testing object...', ()=> expect(typeof(manager)).toBe('object'));
test('Testing getName method', ()=> expect(manager.getName()).toBe(name));
test('Testing getId  method',()=>expect(manager.getId()).toBe(id));
test('Testing getEmail  method',()=>expect(manager.getEmail()).toBe(email));
test('Testing getOfficeNumber  method',()=>expect(manager.getOfficeNumber()).toBe(phoneNum));
test('Testing getRole  method',()=>expect(manager.getRole()).toBe('Manager'));

//test for html creation of getHTML by checking the text content of html ids
it('should create an HTML for buildHTML method and tested by use of getElementID',()=>{
    document.body.innerHTML = manager.buildHTML();

    const managerNameHTML=document.getElementById('role').textContent;
    const managerId=document.getElementById('idEmployee').textContent;
    const managerEmail=document.getElementById('email').textContent;
    const managerPhone=document.getElementById('phone').textContent;

    expect(managerNameHTML).toBe('Manager: Tristesse');
    expect(managerId).toBe('ID: 2');
    expect(managerEmail).toBe('Email: tristesseBoss@test.com');
    expect(managerPhone).toBe('Office Number: 630-123-4567');
})