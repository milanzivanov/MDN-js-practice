// Adding and removing event listeners
//////////////////////////////////////
// let button = document.querySelector('button')
// let nav = document.querySelector('nav')

// button.addEventListener('click', toggleNav)

// function toggleNav() {
//     if (nav.classList.contains('is-open')) {
//         nav.classList.remove('is-open')
//     } else {
//         nav.classList.add('is-open')
//     }
// }

// Adding and removing classes
//////////////////////////////////////////
// let button = document.querySelector('button')
// let nav = document.querySelector('nav')

// button.addEventListener('click', toggleNav)

// function toggleNav() {
//   if (nav.classList.contains('is-open')) {
//     nav.classList.remove('is-open')
//   } else {
//     nav.classList.add('is-open')
//   }
// }

// Adding, changing and removing attributes
///////////////////////////////////////////

let button = document.querySelector('button')
let nav = document.querySelector('nav')

button.addEventListener('click', toggleNav);

function toggleNav() {
  let isOpen = nav.classList.contains('is-open')
  if (isOpen) {
    nav.classList.remove('is-open')
    nav.setAttribute('aria-hidden', true)
    button.setAttribute('aria-expanded', false)
  } else {
    nav.classList.add('is-open')
    nav.removeAttribute('aria-hidden')
    button.setAttribute('aria-expanded', true)
  }
}

// Adding or removing elements
//////////////////////////////

let prepend = document.querySelector('.prepend')
let append = document.querySelector('.append')
let removeFirst = document.querySelector('.removeFirst')
let removeLast = document.querySelector('.removeLast')
let list = document.querySelector('ul')

function createLi () {
  let li = document.createElement('li')
  li.innerHTML = 'Hello again, world!'
  return li
}

// Prepend
prepend.addEventListener('click', e => list.prepend(createLi()))

// Append
append.addEventListener('click', e => list.append(createLi()))

// Remove First
removeFirst.addEventListener('click', e => {
  if (list.children.length) {
    let firstNode = list.children[0]
    list.removeChild(firstNode)
  }
})    

// Remove Last
removeLast.addEventListener('click', e => {
  if (list.children.length) {
    let lastNode = list.children[list.children.length - 1]
    console.log(lastNode)
    list.removeChild(lastNode)
  }
})   
