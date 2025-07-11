const myLibrary = [];

function Book(title, author, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();


}

function addBookTolibrary(title,author,pages,read){
    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks(){
    const inputContainer = document.querySelector("#inputContainer");
    inputContainer.innerHTML = "";
    myLibrary.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("bookcard");

        card.innerHTML = `
            <strong>Title:</strong> ${book.title} <br>
            <strong>Author:</strong> ${book.author} <br>
            <strong>Pages:</strong> ${book.pages} <br>
            <strong>Read:</strong> ${book.read ? "Yes" : "No"} <br>
            <strong>ID:</strong> ${book.id}
        `;
        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Toggle Read";
        toggleBtn.addEventListener("click", () => {
            book.read = !book.read;       
            displayBooks(); 

        });
        card.appendChild(toggleBtn);              
        inputContainer.appendChild(card);
    });
}

const dialog = document.querySelector("#dialog");
const inputBtn = document.querySelector("#inputBtn");
const closeBtn = document.querySelector("#closeBtn");

inputBtn.addEventListener("click", () => {
    dialog.showModal();
})
closeBtn.addEventListener("click", () =>{
    dialog.close();
})

const form = document.querySelector("#form")
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;

    addBookTolibrary(title,author,pages,read);
    dialog.close();
    form.reset();


})
