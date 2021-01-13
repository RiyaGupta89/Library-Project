console.log("This is our library");


function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display(book) {

}

Display.prototype.add = function(book) {
    
    let tableBody = document.getElementById("tableBody");
    let uiString = `
    <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>`;
    
    tableBody.innerHTML += uiString;

}

Display.prototype.clear = function() {
    let libraryForm = document.querySelector("#form");
    libraryForm.reset();
}

let addBook = document.getElementById('addBook');
addBook.addEventListener("click", addingBook);

function addingBook(e) {
    e.preventDefault();
    name = document.getElementById("bookName").value;
    author = document.getElementById("authorName").value;
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let crime = document.getElementById("crime");
    let cooking = document.getElementById("cooking");
    let fantasy = document.getElementById("fantasy");
    let historicalFiction = document.getElementById("historicalFiction");
    let horror = document.getElementById("horror");
    let inspiration = document.getElementById("inspiration");
    let type;
    if(fiction.checked) {
        type = fiction.value;
    } else if(programming.checked) {
        type = programming.value;
    } else if(cooking.checked) {
        type = cooking.value;
    } else if(crime.checked) {
        type = crime.value;
    } else if(fantasy.checked) {
        type = fantasy.value;
    } else if(historicalFiction.checked) {
        type = historicalFiction.value;
    } else if(horror.checked) {
        type = horror.value;
    } else if(inspiration.checked) {
        type = inspiration.value;
    }
    

    let book = new Book(name, author, type);
    let display = new Display();
    display.add(book);
    display.clear();

}