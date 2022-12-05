const Engineer = require('../lib/Engineer');
const name="Marcus",id=5,email="engrMarcus@test.com",github='MarcusEngineer';

const engineer = new Engineer(name,id,email,github);

test('Testing object...', ()=> expect(typeof(engineer)).toBe('object'));
test('Testing getName method', ()=> expect(engineer.getName()).toBe(name));
test('Testing getId  method',()=>expect(engineer.getId()).toBe(id));
test('Testing getEmail  method',()=>expect(engineer.getEmail()).toBe(email));
test('Testing getGithub  method',()=>expect(engineer.getGithub()).toBe(github));
test('Testing getRole  method',()=>expect(engineer.getRole()).toBe('Engineer'));

//test for html creation of getHTML by checking the text content of html ids
it('should create an HTML for buildHTML method and tested by use of getElementID',()=>{
    document.body.innerHTML = engineer.buildHTML();

    const engineerNameHTML=document.getElementById('role').textContent;
    const engineerId=document.getElementById('idEmployee').textContent;
    const engineerEmail=document.getElementById('email').textContent;
    const engineerGithub=document.getElementById('github').textContent;

    expect(engineerNameHTML).toBe('Engineer: Marcus');
    expect(engineerId).toBe('ID: 5');
    expect(engineerEmail).toBe('Email: engrMarcus@test.com');
    expect(engineerGithub).toBe('GitHub: MarcusEngineer');
})