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
        const MyLibary = [
            {title: "The Hobbit", author: "JRR Tolkien", pages: "295 pages", read: "not read yet"},
            {title: "Short Story", author: "Peter Carey", pages: "127 pages", read: "read"},
            {title: "Heart Of Darkness", author: "J Conrad", pages: "89 pages", read: "read"}
        ];

        const books = MyLibary;

        books.forEach((book) => UI.addBookToList(book))
    }

    static addBookToList(book) {
        const list = document.getElementById("book-list");
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.title}</td>
            <td><button><a href="#">X</a></button></td>
            
            
        `;
        list.appendChild(row);

    }
}

// Display Books (Event)

document.addEventListener("DOMContentLoaded", UI.displayBooks);





