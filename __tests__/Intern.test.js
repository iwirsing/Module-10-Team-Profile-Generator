const Intern = require('../lib/Intern');
const name="Kyle",id='9',email="kyleStudent@test.com",school='Savoy University';

const intern = new Intern(name,id,email,school);

test('Testing object...', ()=> expect(typeof(intern)).toBe('object'));
test('Testing getName method', ()=> expect(intern.getName()).toBe(name));
test('Testing getId  method',()=>expect(intern.getId()).toBe(id));
test('Testing getEmail  method',()=>expect(intern.getEmail()).toBe(email));
test('Testing getSchool  method',()=>expect(intern.getSchool()).toBe(school));
test('Testing getRole  method',()=>expect(intern.getRole()).toBe('Intern'));

//test for html creation of getHTML by checking the text content of html ids
it('should create an HTML for buildHTML method and tested by use of getElementID',()=>{
    document.body.innerHTML = intern.buildHTML();

    const internNameHTML=document.getElementById('role').textContent;
    const internId=document.getElementById('idEmployee').textContent;
    const internEmail=document.getElementById('email').textContent;
    const internSchool=document.getElementById('school').textContent;

    expect(internNameHTML).toBe('Intern: Kyle');
    expect(internId).toBe('ID: 9');
    expect(internEmail).toBe('Email: kyleStudent@test.com');
    expect(internSchool).toBe('School: Savoy University');
})