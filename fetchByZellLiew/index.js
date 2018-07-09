let button = document.querySelector('button');
let header = document.querySelector('header');

button.addEventListener('click', fetchData);

function fetchData() {
    return fetch('https://api.github.com/users/milanzivanov/repos')
        // parsing
        .then(response => response.json())
        .then(data => {
            let d = data;

            for (let r of d) {
                console.log(r.name);
                console.log(123);
                console.log(r.owner.login);
                let myP = document.createElement('p');
                myP.textContent = r.name;
                header.appendChild(myP);
            }

            // forEach()
            let output = '<h2 class="mb-4">Users</h2>';
            data.forEach((user) => {
              output += `
                <ul class="list-group mb-3">
                  <li class="list-group-item">ID: ${user.id}</li>
                </ul>
              `;
            });
            document.getElementById('output').innerHTML = output;
            
        });
}

///////////////
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  console.log(data);
    
  let authors = data.results;
  return authors.map(function(author) {
    let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(JSON.stringify(error));
});

