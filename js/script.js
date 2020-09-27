import books from "./books.js";
const bookContainer = document.querySelector('.book-container');


//Create HTML
let newBookArray = books;
function renderContent() {
    newBookArray.forEach(book => {
        bookContainer.innerHTML += `
        <div class="card">
            <h4>Title: ${book.title}</h4>
            <p>ISBN: ${book.isbn}</p>
            <button class="remove"
            data-title="${book.title}" 
            data-isbn="${book.isbn}">Remove item 
            <i class="far fa-trash-alt"
            ></i>
            </button>
        </div>
        `;
    })
    removeObjects()
}

renderContent();

function removeObjects() {
    const buttons = document.querySelectorAll('.remove');
    buttons.forEach(btn => {
        btn.addEventListener('click', handleClick)
    })


function handleClick() {

    const title = this.dataset.title;
    const isbn = this.dataset.isbn;
    let filterdArray = newBookArray.filter(deleteBook => {
        if (deleteBook.isbn !== isbn || deleteBook.title !== title) {
            return true
        }
    });

    newBookArray = filterdArray;
    bookContainer.innerHTML = "";
    renderContent(filterdArray);

    if (newBookArray.length === 0) {
        bookContainer.innerHTML = `
        <h4 class="warning">No items found!</h4>
        `
    }
    console.log(newBookArray);
    }
}

