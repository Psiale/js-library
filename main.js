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

function removeBook(index) {
  let savedArr = JSON.parse(localStorage.getItem('bookItems'));
  let updatedArr = [];
  (savedArr != null) ? updatedArr = savedArr : updatedArr = ourLibrary;
  updatedArr.splice(index, 1);
  localStorage.setItem('bookItems', JSON.stringify(updatedArr));
  render(updatedArr);
}

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

    const contentHeading = document.createTextNode(`${library[i].title}`);
    const contentAuthor = document.createTextNode(`${library[i].author}`);
    const contentPages = document.createTextNode(`${library[i].pageCount}`);
    const contentStatus = document.createTextNode(`${library[i].readStatus}`);

    heading.appendChild(contentHeading);
    author.appendChild(contentAuthor);
    pages.appendChild(contentPages);
    status.appendChild(contentStatus);
    contain.appendChild(heading);
    contain.appendChild(author);
    contain.appendChild(pages);
    contain.appendChild(status);
    newLibrary.appendChild(contain);
    contain.classList.add('book-item');
    addButtons(contain, i);
  }
}

(function firstRender() {
  let updatedArr = [];
  const savedArr = JSON.parse(localStorage.getItem('bookItems'));
  (savedArr != null) ? updatedArr = savedArr : updatedArr = ourLibrary;
  render(updatedArr);
  localStorage.setItem('bookItems', JSON.stringify(ourLibrary));
}());




const changeReadStatus = (index) => {
  const savedArr = JSON.parse(localStorage.getItem('bookItems'));
  let updatedArr = [];
  (savedArr != null) ? updatedArr = savedArr : updatedArr = ourLibrary;
  updatedArr[index].readStatus === 'Read' ? updatedArr[index].readStatus = 'Not Read' : updatedArr[index].readStatus = 'Read';
  localStorage.setItem('bookItems', JSON.stringify(updatedArr));
  render(updatedArr);
};

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
  const savedArr = JSON.parse(localStorage.getItem('bookItems'));
  let updatedArr = [];
  (savedArr !== null) ? updatedArr = ourLibrary : updatedArr = savedArr;
  updatedArr.push(newEntry);
  const json = JSON.stringify(updatedArr);
  localStorage.setItem('bookItems', json);
  formView();
  render(updatedArr);
  cleanForm();
}

render(ourLibrary);
