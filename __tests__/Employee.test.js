const Employee = require('../lib/Employee');
const name="John",id=5,email="j@test.com";

const e = new Employee(name,id,email);

test('Testing object...', ()=> expect(typeof(e)).toBe('object'));
test('Testing getName method', ()=> expect(e.getName()).toBe(name));
test('Testing gedId  method',()=>expect(e.getId()).toBe(id));
test('Testing gedEmail  method',()=>expect(e.getEmail()).toBe(email));
test('Testing getRole  method',()=>expect(e.getRole()).toBe('Employee'));
