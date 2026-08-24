let cardContainer = document.querySelector(".card-container");
let addBook = document.querySelector("#_addBookToLibrary");
let newBookName = document.querySelector("#_bookname");
let newBookAuthor = document.querySelector("#_author");
let newBookPagecount = document.querySelector("#_page-count");


addBook.addEventListener("click", (e) => {
    e.preventDefault();
    if (newBookName.value && newBookAuthor.value && newBookPagecount.value) {
        let book = new Book(newBookName.value, newBookAuthor.value, newBookPagecount.value, false);
        addBookToLibrary(book);
        createNewCard(book);
        document.querySelector(".form").reset();
    }
});

const myLibrary = [];

function Book(name, author, pagecount, readStatus) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.name = name;
    this.author = author;
    this.pages = pagecount;
    this.readStatus = readStatus;

    this.info = function () {
        return `${this.name}, by ${this.author}, ${this.pages}, ${this.readStatus ? "Completed reading" : "Not read yet"}`;
    }
}
Book.prototype.changeReadStatus = function () {
    this.readStatus = !this.readStatus;
};

addBookToLibrary = function (Book) {
    myLibrary.push(Book);
}

removeBookFromLibrary = function (name) {
    const index = myLibrary.findIndex(book => book.name === name)
    if (index !== -1) {
        myLibrary.splice(index, 1);
    }
}

createNewCard = function (book) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("card");
    let bookImg = document.createElement("img");
    bookImg.classList.add("card-img");
    bookImg.setAttribute("src", "image.png");
    let bookName = document.createElement("h4");
    bookName.textContent = book.name;
    let author = document.createElement("p");
    author.textContent = book.author;
    let readStatus = document.createElement("button");
    readStatus.textContent = (book.readStatus == true) ? ("Read") : ("Not yet Read");
    readStatus.classList.add((book.readStatus == true) ? ("read") : ("toRead"));
    readStatus.addEventListener('click', () => {
        book.changeReadStatus();
        readStatus.textContent = book.readStatus ? "Read" : "Not yet Read";
        readStatus.classList.toggle("read", book.readStatus);
        readStatus.classList.toggle("toRead", !book.readStatus);
    })
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("dlt-btn");
    deleteButton.addEventListener('click', () => {
        newDiv.remove();
        removeBookFromLibrary(book.name);
    })

    newDiv.append(bookImg, bookName, author, readStatus, deleteButton);
    cardContainer.append(newDiv);
}

refreshBookCards = function () {
    myLibrary.forEach((book) => {
        createNewCard(book);
    })
}


const theHobbit = new Book("The Hobbit", "J.R.R Toliken", "295 Pages", true);
const nineteenEightyFour = new Book("1984", "George Orwell", "328 Pages", true);
const braveNewWorld = new Book("Brave New World", "Aldous Huxley", "268 Pages", false);
const fahrenheit451 = new Book("Fahrenheit 451", "Ray Bradbury", "256 Pages", true);
const dune = new Book("Dune", "Frank Herbert", "688 Pages", false);
const theNameOfTheWind = new Book("The Name of the Wind", "Patrick Rothfuss", "662 Pages", true);
const theAlchemist = new Book("The Alchemist", "Paulo Coelho", "208 Pages", true);
const prideAndPrejudice = new Book("Pride and Prejudice", "Jane Austen", "432 Pages", false);
const janeEyre = new Book("Jane Eyre", "Charlotte Bronte", "532 Pages", true);
const theBookThief = new Book("The Book Thief", "Markus Zusak", "584 Pages", false);
const theGreatGatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", "180 Pages", true);
const toKillAMockingbird = new Book("To Kill a Mockingbird", "Harper Lee", "336 Pages", false);
const theCatcherInTheRye = new Book("The Catcher in the Rye", "J.D. Salinger", "234 Pages", true);
const theMartian = new Book("The Martian", "Andy Weir", "369 Pages", false);
const endersGame = new Book("Ender's Game", "Orson Scott Card", "352 Pages", true);
const theLeftHandOfDarkness = new Book("The Left Hand of Darkness", "Ursula K. Le Guin", "304 Pages", false);



addBookToLibrary(theHobbit);
addBookToLibrary(nineteenEightyFour);
addBookToLibrary(braveNewWorld);
addBookToLibrary(fahrenheit451);
addBookToLibrary(dune);
addBookToLibrary(theNameOfTheWind);
addBookToLibrary(theAlchemist);
addBookToLibrary(prideAndPrejudice);
addBookToLibrary(janeEyre);
addBookToLibrary(theBookThief);
addBookToLibrary(theGreatGatsby);
addBookToLibrary(toKillAMockingbird);
addBookToLibrary(theCatcherInTheRye);
addBookToLibrary(theMartian);
addBookToLibrary(endersGame);
addBookToLibrary(theLeftHandOfDarkness);
// Book("The Hobbit", "J.R.R Toliken", "295 Pages", true);
// the above line throws error as new operator is not used and this error behaviour is set intentionally because, otherwise it may lead to undebuggable issues as constructor calling may occur without using new.



refreshBookCards();