//DOM manipulation




//STYLING ELEMENTS

//changing styling of elements

const title = document.querySelector('#main-heading');

title.style.color = 'green';//accesing css properties in javascript

//styling multiple list

const listItems = document.querySelectorAll('.list-items');//we will use a for loop
for(i = 0; i < listItems.length; i++){
    listItems[i].style.fontSize = '2.2rem';
}






//CREATING ELEMENTS 

const ul = document.querySelector('ul');
const li = document.createElement('li');

//we have to add the element we created using the append method
ul.append(li)

//Modifying the text

li.innerText = 'X-men';

//Modifying Attributes and Classes

//Attribute
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');//to remove the attribute

//Classes

li.classList.add('list-items')
//li.classList.remove('list-items')// to remove the class

console.log(li.classList.contains('list-items'));





//REMOVE ELEMENTS

li.remove();





//TRAVERSE THE DOM


// PARENT NODE TRAVERSAL

let list = document.querySelector('ul');

console.log(list.parentNode);
console.log(list.parentElement);
console.log(list.parentNode.parentNode);
console.log(list.parentElement.parentElement);




//CHILD NODE TRAVERSAL

let items = document.querySelector('ul');

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = 'grey';

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);




//SIBLING NODE TRAVERSAL


let itms = document.querySelector('ul');






//others

const firstlistitems = document.querySelector('.list-items');

console.log(firstlistitems.innerText)
console.log(firstlistitems.textContent)
console.log(firstlistitems.innerHTML)

console.log();