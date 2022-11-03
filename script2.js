// Book Class

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    };
};


// UI Class

class UI {
    static displayBooks() {
        let myLibary = [
            {title: "The Hobbit", author: "JRR Tolkien", pages: "295 pages", read: "not read yet"},
            {title: "Short Story", author: "Peter Carey", pages: "127 pages", read: "read"},
            {title: "Heart Of Darkness", author: "J Conrad", pages: "89 pages", read: "read"}
        ];

        const books = myLibary;

        books.forEach((book) => UI.addBookToList())
    }

    static addBookToList(book) {

    }
}





