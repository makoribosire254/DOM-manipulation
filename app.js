// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob); 
// }

//  Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// };
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// CLASSES IN ES6 to replace constructor functions
// class Person {
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob); 
//     }
//     getBirthYear(){
//       return this.dob.getFullYear();
//     }
//     getFullName(){
//       return `${this.firstName} ${this.lastName}`;
//     }
// }

// let person1 = new Person('Makori', 'Bosire', '11-10-1992');
// console.log(person1.firstName);
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
// const btn = document.querySelector('.btn');
const msg = document.querySelector('.msg');
const userList = document.querySelector('.users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        // msg.classList.add('success');
        // msg.innerHTML = 'Success';

        // setTimeout(() => msg.remove(), 3000);
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`
        ${nameInput.value} : ${ emailInput.value} `));
        
        userList.appendChild(li);

        // clear fields
        nameInput.value = '';
        nameInput.value = '';
    }
}








// btn.addEventListener('click', (e) =>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
// });