// Name: Pratham Prajapati
// File: main.js
// Date: 09 April 2026
// Description: Object building practice using JavaScript (MDN)

const para = document.querySelector('p');

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

function Cat(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.greeting = function() {
    return `Hi! I'm ${this.name}, a ${this.color} ${this.breed}.`;
  };
}

const cat1 = new Cat('Bertie', 'Cymric', 'white');
const cat2 = new Cat('Elfie', 'Aphrodite Giant', 'ginger');

para.textContent = `${cat1.greeting()} ${cat2.greeting()}`;