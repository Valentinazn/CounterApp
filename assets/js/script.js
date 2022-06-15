let username = prompt("WHAT'S YOUR NAME? 😃", '');
let greeting = 'Welcome, ';
let myGreeting = `${greeting} ${username}`;
let welcomeEl = document.getElementById('welcome-el');

welcomeEl.textContent += myGreeting + ' 👋';




let count = 0;
let squares = [];
let gridEl = document.querySelector('.cover-content')
let countEl = document.getElementById('count-el')


function increment() {

  count += 1;
  countEl.textContent = count;
}



function decrement() {

  count -= 1;
  countEl.textContent = count;

}


function createIncrementBnt() {


  const incrementBtn = document.createElement('button')


  incrementBtn.classList.add('increment-button')

  gridEl.appendChild(incrementBtn)

  squares.push(incrementBtn)


  incrementBtn.addEventListener('click', function() {
    increment()
  })


}

createIncrementBnt()

function createDecrementBtn() {


  const decrementBtn = document.createElement('button')


  decrementBtn.classList.add('decrement-button')

  gridEl.appendChild(decrementBtn)

  squares.push(decrementBtn)

  decrementBtn.addEventListener('click', function() {
    decrement()
  })

}

createDecrementBtn()
