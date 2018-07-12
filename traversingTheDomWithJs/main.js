// Traversing downwards
// querySelector or querySelectorAll

const component = document.querySelector('.component')
const title = component.querySelector('.component__title')

console.log(title)

// children
/////////////////////
const list = document.querySelector('.list')
const listItems = list.children;

console.log(listItems)

// A HTML Collection is similar to a NodeList
const array = Array.from(HTMLCollection)
array.forEach(el => { 
    console.log(console.log(array)
    );
});

// Selecting a specific child
//////////////////////
const listItemsSpecific = document.querySelectorAll('.list-specific li');

const firstItem = listItemsSpecific[0];
const secondItem = listItemsSpecific[1];
const thirdItem = listItemsSpecific[2];
const fourthItem = listItemsSpecific[3];
const fifthItem = listItemsSpecific[4];


console.log(listItemsSpecific);

console.log(firstItem);
console.log(secondItem);
console.log(thirdItem);
console.log(fourthItem);
console.log(fifthItem);

// parentElement
/////////////////////
const firstListItem = document.querySelector('.list-parent li');
const listParent = firstListItem.parentElement

console.log(listParent);

// closest
//////////////////
const firstLink = document.querySelector('a');
const listClosest = firstLink.closest('.list');

console.log(listClosest);

const firstLink1 = document.querySelector('a');
const firstLinkThroughClosest = firstLink1.closest('a');

console.log(firstLinkThroughClosest);

// Traversing sideways
/////////////////////////

// nextElementSibling
/////////////////////
const firstListItemSibling = document.querySelector('li')
const secondListItem = firstListItemSibling.nextElementSibling

console.log(secondListItem);

// previousElementSibling
///////////////////
const secondListItemPrevious = document.querySelectorAll('li')[1];
const firstListItemP = secondListItemPrevious.previousElementSibling;

console.log(firstListItemP);

// Combining parentElement, children, and index
//////////////////////
const firstItemP = document.querySelector('.list-combining li')
const listP = firstItem.parentElement;
const allItems = list.children;
const fourthItem4 = allItems[3];

console.log(fourthItem);

// Putting everything together in one step:
/////////////////
const firstItem11 = document.querySelector('li');
const fourthItem44 = firstItem11.parentElement.children[3];

console.log(fourthItem);