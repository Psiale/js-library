const ourLibrary = [
  new Book('One Hundred Years Of Solitude', 'Gabriel Garcia Marquez', 200, 'Read'),
  new Book('Clash of Kings', 'George R.R. Martin', 1000, 'Read'),
  new Book('Bible', 'God', 100, 'Read'),
  new Book('I Robot', 'Isaac Asimov', 300),
];

function Book(title, author, pageCount, readStatus = 'not read') {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pageCount} pages, ${this.readStatus}.`;
};

function addBookToLibrary(title, author, pageCount, readStatus = 'not read') {
  title = document.getElementById('title-input').value;
  author = document.getElementById('author-input').value;
  pageCount = document.getElementById('pageCount-input').value;
  readStatus = document.getElementById('readStatus-input').value;
  let newEntry = new Book(title, author, pageCount, readStatus);
  let updatedLibrary = ourLibrary;
  updatedLibrary.push(newEntry);
  let result = document.getElementById('result');

  for(let books in updatedLibrary) {
    let text = document.createTextNode(`${updatedLibrary[books].info()}`);
    result.appendChild(text);
  };

  //let text = document.createTextNode(`${ourLibrary.length}`);
  //result.appendChild(text);
}