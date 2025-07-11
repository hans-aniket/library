const myLibrary = [];

function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();


}

function addBookTolibrary(){
    let newBook = new Book();
    myLibrary.push(newBook);    
}

function displayBooks(){
    for(let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i]);
    };
}
displayBooks();