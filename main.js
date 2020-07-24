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

Book.prototype.title_info = function () {
  return `${this.title}`;
};
Book.prototype.author_info = function () {
  return `${this.author}`;
};
Book.prototype.pageCount_info = function () {
  return `${this.pageCount} pages`;
};
Book.prototype.readStatus_info = function () {
  return `${this.readStatus}`;
};


const ourLibrary = [
  new Book('One Hundred Years Of Solitude', 'Gabriel Garcia Marquez', 200, 'Read'),
  new Book('Clash of Kings', 'George R.R. Martin', 1000, 'Read'),
  new Book('Bible', 'God', 100, 'Read'),
  new Book('I Robot', 'Isaac Asimov', 300),
];

 //stores the value associated with a key.

const addButtons = (parent, index) => {
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('book-buttons');
  const removeButton = document.createElement('button');
  const readButton = document.createElement('button');
  buttonContainer.appendChild(readButton);
  buttonContainer.appendChild(removeButton);
  parent.appendChild(buttonContainer);
  const buttonText = document.createTextNode('Remove Book');
  const readButtonText = document.createTextNode('Read Book?');
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
    const heading = document.createElement('h1');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const status = document.createElement('p');

    const content_heading = document.createTextNode(`${library[i].title_info()}`);
    const content_author = document.createTextNode(`${library[i].author_info()}`);
    const content_pages = document.createTextNode(`${library[i].pageCount_info()}`);
    const content_status = document.createTextNode(`${library[i].readStatus_info()}`);

    heading.appendChild(content_heading);
    author.appendChild(content_author);
    pages.appendChild(content_pages);
    status.appendChild(content_status);
    contain.appendChild(heading);
    contain.appendChild(author);
    contain.appendChild(pages);
    contain.appendChild(status);
    newLibrary.appendChild(contain);
    contain.classList.add('book-item');
    addButtons(contain, i);
  }
  localStorage.setItem('setLibrary', library);
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
  const form = document.getElementById('form-container');
  form.classList.toggle('form-container-show');
}

const cleanForm = () => {
  const title = document.getElementById('title-input').value = '';
  const author = document.getElementById('author-input').value = '';
  const pageCount = document.getElementById('pageCount-input').value = '';
  const readStatus = document.getElementById('readStatus-input').value = '';
};

function addBookToLibrary(title, author, pageCount, readStatus = 'not read') {
  title = document.getElementById('title-input').value;
  author = document.getElementById('author-input').value;
  pageCount = document.getElementById('pageCount-input').value;
  readStatus = document.getElementById('readStatus-input').value;
  const newEntry = new Book(title, author, pageCount, readStatus);
  const updatedLibrary = ourLibrary;
  updatedLibrary.push(newEntry);
  formView();
  render(updatedLibrary);
  cleanForm();
}
