/*
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return(title + " by " + author + ", " + pages + ", " + read)
    }
}

const theHobbit = new Book("the hobbit", "J.R.R Tolkien", "295 pages", "not read yet")

console.log(theHobbit.info())
*/

let myLibary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return(title + " by " + author + ", " + pages + ", " + read)
    };
}

/*
Book.prototype.addBookToLibary = function() {
    myLibary.push(title, author, pages, read)
}
*/


const theHobbit = new Book("the hobbit", "J.R.R Tolkien", "295 pages", "not read yet")
const shortStory = new Book("Short Story", "Peter Carey", "127 pages", "read")
const heartOfDarkness = new Book("Heart Of Darkness", "J Conrad", "read")

function addBookToLibary(theBook, theBook1, theBook2) {
    myLibary.push(theBook, theBook1, theBook2)
    console.log(myLibary)
}

addBookToLibary(shortStory, theHobbit, heartOfDarkness)
