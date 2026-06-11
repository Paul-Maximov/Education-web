// let myName = 'Pavel';
// let myAge = 14;
// let fruits = ['apple', 'banana', 'kiwi'];
// let bool = true;
// console.log(myAge, myName, fruits, bool)
// // myAge = '14';
// console.log(myAge)

// let title = document.querySelector('.hero__title')
// console.log(title)
// title.style.color = 'red'
// title.style.backgroundColor = 'black'
// title.textContent = 'hello world'
// title.innerHTML = '<p>abc</p>'

let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.header__nav')
burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
})