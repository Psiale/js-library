const form = document.getElementById('form-container');

class Book {
  constructor(title, author, pageCount, readStatus) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pageCount} pages, ${this.readStatus}`;
  }
}


const ourLibrary = [
  new Book('One Hundred Years Of Solitude', 'Gabriel Garcia Marquez', 200, 'Read'),
  new Book('Clash of Kings', 'George R.R. Martin', 1000, 'Read'),
  new Book('Bible', 'God', 100, 'Read'),
  new Book('I Robot', 'Isaac Asimov', 300),
];

const addButtons = (parent, index) => {
  const removeButton = document.createElement('button');
  const readButton = document.createElement('button');
  parent.appendChild(readButton);
  parent.appendChild(removeButton);
  const buttonText = document.createTextNode('Remove Book');
  const readButtonText = document.createTextNode('Change Read Status');
  removeButton.appendChild(buttonText);
  readButton.appendChild(readButtonText);
  removeButton.dataset.id = index;
  readButton.dataset.id = index;
  removeButton.setAttribute('onClick', `removeBook(${index})`);
  readButton.setAttribute('onClick', `changeReadStatus(${index})`);
};

function render(library) {
  const newLibrary = document.getElementById('result');
  newLibrary.innerHTML = '';
  for (let i = 0; i < library.length; i += 1) {
    const contain = document.createElement('div');
    const para = document.createElement('p');
    const content = document.createTextNode(`${library[i].info()}`);
    contain.appendChild(para);
    addButtons(contain, i);
    para.appendChild(content);
    newLibrary.appendChild(contain);
  }
}

const removeBook = (index) => {
  ourLibrary.splice(index, 1);
  render(ourLibrary);
};

const changeReadStatus = (index) => {
  ourLibrary[index].readStatus === 'Read' ? ourLibrary[index].readStatus = 'Not Read' : ourLibrary[index].readStatus = 'Read';
  render(ourLibrary);
};

render(ourLibrary);

function formView() {
  form.classList.toggle('form-container-show');
}

form.addEventListener('click', formView);

function addBookToLibrary(title, author, pageCount, readStatus = 'not read') {
  title = document.getElementById('title-input').value;
  author = document.getElementById('author-input').value;
  pageCount = document.getElementById('pageCount-input').value;
  readStatus = document.getElementById('readStatus-input').value;
  const newEntry = new Book(title, author, pageCount, readStatus);
  const updatedLibrary = ourLibrary;
  updatedLibrary.push(newEntry);
  render(updatedLibrary);
}
