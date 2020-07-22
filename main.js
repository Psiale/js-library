const ourLibrary = [];

function Book(title, author, pageCount, readStatus = 'not read') {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
};

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pageCount} pages, ${this.readStatus}.`;
};

function addBookToLibrary(title, author, pageCount, readStatus = 'not read') {
  let title = document.getElementById('title-input').value;
  let author = document.getElementById('author-input').value;
  let pageCount = document.getElementById('pageCount-input').value;
  let readStatus = document.getElementById('readStatus-input').value;
  let newEntry = new Book(title, author, pageCount, readStatus);
  let updatedLibrary = ourLibrary;
  updatedLibrary.push(newEntry);
  return updatedLibrary;
};


