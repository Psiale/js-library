function Book(title, author, pageCount, readStatus = 'not read.') {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
  if (!title) throw new Error('Please give the book a title.');
  if (!author) throw new Error('Please give the book an author.');
  if (!pageCount) throw new Error('Please give the book a page count.');
  if (!readStatus) throw new Error('Please tell us if you have read this book or what?');
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pageCount} pages, ${this.readStatus}`;
};

const ourLibrary = [
  new Book('One Hundred Years Of Solitude', 'Gabriel Garcia Marquez', 200, 'Read'),
  new Book('Clash of Kings', 'George R.R. Martin', 1000, 'Read'),
  new Book('Bible', 'God', 100, 'Read'),
  new Book('I Robot', 'Isaac Asimov', 300),
];

const addButton = (parent, index) => {
  const removeButton = document.createElement('button');
  parent.appendChild(removeButton);
  const buttonText = document.createTextNode('Remove Book');
  removeButton.appendChild(buttonText);
  removeButton.dataset.id = index;
  removeButton.setAttribute('onClick', `removeBook(${index})`);
};

function render(library) {
  const newLibrary = document.getElementById('result');
  newLibrary.innerHTML = '';
  for (let i = 0; i < library.length; i += 1) {
    const contain = document.createElement('div');
    const para = document.createElement('p');
    contain.appendChild(para);
    const content = document.createTextNode(`${library[i].info()}`);
    addButton(contain, i);
    para.appendChild(content);
    newLibrary.appendChild(contain);
  }
}
const removeBook = (index) => {
  ourLibrary.splice(index, 1);
  render(ourLibrary);
};

render(ourLibrary);

function formView() {
  const form = document.getElementById('form-container');
  form.classList.toggle('form-container-show');
}

function addBookToLibrary(title, author, pageCount, readStatus = 'not read') {
  title = document.getElementById('title-input').value;
  author = document.getElementById('author-input').value;
  pageCount = document.getElementById('pageCount-input').value;
  readStatus = document.getElementById('readStatus-input').value;
  const newEntry = new Book(title, author, pageCount, readStatus);
  const updatedLibrary = ourLibrary;
  updatedLibrary.push(newEntry);
  render(updatedLibrary);
  // let text = document.createTextNode(`${ourLibrary.length}`);
  // result.appendChild(text);
  // result.replaceChild(ourLibrary, updatedLibrary);
}

// function removeBookFromLibrary(id, ourLibrary) {
//  ourLibrary
// }
