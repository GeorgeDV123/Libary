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
            <td>${book.read}</td>
            <td><button class="delete"><a href="#">X</a></button></td>
            <td><button class="read-yet-yes"><a href="#">R</a></button></td>
            <td><button class="read-yet-no><a href="#">N/R</a></button></td> 
        `;
        list.appendChild(row);

    }

    static deleteBook(el) {
        if(el.classList.contains("delete")) {
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        const title = document.querySelector(".title").value = "";
        const author = document.querySelector(".author").value = "";
        const pages = document.querySelector(".pages").value = "";
        const read = document.querySelector(".read").value = "";
    }

    static bookRead (el) {
        if(el.classList.contains("read-yet-yes")) {
            el.closest(".read-yet").innerHTML = "yassssss"
        }


    }
};

// Display Books (Event)

document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Add a Book

document.querySelector(".book-form").addEventListener("submit", (e) => {

    e.preventDefault();

    const title = document.querySelector(".title").value;
    const author = document.querySelector(".author").value;
    const pages = document.querySelector(".pages").value;
    const read = document.querySelector(".read").value;

    const book = new Book (title, author, pages, read);

    UI.addBookToList(book);

    UI.clearFields()
});

// Delete a Book

document.getElementById("book-list").addEventListener("click", (e) => {

    UI.deleteBook(e.target)
});

// Book Read or not?

document.getElementById("book-list").addEventListener("click", (e) => {

    UI.bookRead(e.target)
})