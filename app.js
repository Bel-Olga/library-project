let myLibrary  = [
    {
        title: 'test 1',
        author: 'test 1',
        pages: 234,
        isRead: true
    },
    {
        title: 'test 2',
        author: 'test 2',
        pages: 434,
        isRead: false
    },
    {
        title: 'test 3',
        author: 'test 3',
        pages: 789,
        isRead: true
    }
];


function Book (title, author, pages, isRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead
}

// Submit new book

const form = document.getElementById('book-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('submited')

    closeModal();
    addBookToLibrary();
    displayBooksInLibrary();
    form.reset();
})

function addBookToLibrary() {
    let newTitle = document.getElementById('title').value;
    let newAuthor = document.getElementById('author').value;
    let newPages = Number(document.getElementById('pages').value);
    let newIsRead = document.getElementById('read').checked;


    book = new Book (newTitle, newAuthor, newPages, newIsRead);
    myLibrary.push(book);

    console.table(myLibrary);
    console.log(book);
    //added for check
   return book;
}



// function createCard(book) {
//     const books = document.querySelector('.books');
//     const card = document.createElement('div');
//         card.classList.add('card');
//         books.appendChild(card);
//         // for (let key in book) {
//         //     const para = document.createElement('div');
//         //     if (key == 'isRead') {
//         //         let checkbox = document.createElement('input');
//         //         checkbox.type = "checkbox";
//         //         checkbox.name = "read";
//         //         checkbox.id = "read";
//         //         let label = document.createElement('label');
//         //         label.htmlFor = "read";
//         //         label.textContent = "Read"
//         //         checkbox.checked = book.read;
//         //         para.appendChild(label);
//         //         para.appendChild(checkbox);
//         //      }    
//         //      else if (key == "pages") {
//         //         para.textContent = (`${book[key] + " pages"}`)} 
//         //      else {
//         //         para.textContent = (`${book[key]}`)
//         //     }
//         //     card.appendChild(para)
//         // }


//         card.innerHTML = `
//         <div>${book.title}<div>
//         <div>${book.author}<div>
//         <div>${book.pages} pages<div> 
//         <button id='btn-isRead'>${book.isRead == true ?  "Readed" : "Not readed"}<button>
//         <button>Delete</button>
//         `;

// document.querySelector('#btn-isRead').addEventListener('click', toogleRead());

// function toogleRead() {
//     book.isRead = !book.isRead; 
// }  
// }

//Try to rewrite working code another way

function createCard(book, i) {

    let bookCard = document.createElement('div');
    bookCard.classList.add('card');
    bookCard.dataset.index = `${i}`;
    

    let bookTitle = document.createElement('p');
    bookTitle.textContent = `${book.title}`;

    let bookAuthor = document.createElement('p');
    bookAuthor.textContent = `${book.author}`;

    let bookPages = document.createElement('p');
    bookPages.textContent = `${book.pages} pages`;

    let bookRead = document.createElement('button');
    bookRead.classList.add('btn', 'btn-read');
    bookRead.textContent = `${book.isRead == true ?  "Readed" : "Not readed"}`;
    bookRead.addEventListener('click', (e)=> {
        book.isRead = !book.isRead;
        console.table(myLibrary);
        displayBooksInLibrary();
    });

    let bookRemove = document.createElement('button');
    bookRemove.classList.add('btn-remove', 'btn');
    bookRemove.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    bookRemove.addEventListener('click', (e) => {
        console.log(e.target.parentNode.dataset.index);
        let index = parseInt(e.target.parentNode.dataset.index);
        myLibrary.splice(index, 1);
        displayBooksInLibrary();
        console.table(myLibrary);
    })

    let buttonsDiv = document.createElement('div');
    buttonsDiv.appendChild(bookRead);
    buttonsDiv.appendChild(bookRemove);

    bookCard.append(bookTitle, bookAuthor, bookPages, buttonsDiv);

    return bookCard;
}

function displayBooksInLibrary() {
        const library = document.querySelector('.library');
        library.innerHTML = '';
        myLibrary.forEach((book, i) => {
            library.appendChild(createCard(book, i));
        });
      
}




displayBooksInLibrary();

// Working code, but i can't add events to buttons

// function displayBooksInLibrary() {
//     const library = document.querySelector('.library');
//     library.innerHTML = '';
  
    
//     myLibrary.forEach((book, i) => {  
//         let card = document.createElement('div');
//         card.dataset.index = i;
//         card.innerHTML += `
//             <p>${book.title}</p>
//             <p>${book.author}</p>
//             <p>${book.pages} pages</p>
//             <button class="btn-read">${book.isRead == true ?  "Readed" : "Not readed"}</button>
//             <button class="btn-delete" data-index="${i}">Delete</button>    `;
//         card.classList.add('card');
//         library.appendChild(card);
//         console.log(card.dataset.index);  
//     }); 
  
// }




// function displayBooksInLibrary() {
//     const books = document.querySelector('.books');
//     books.innerHTML = ''; // prevent 

//     myLibrary.forEach((book) => {
//         const card = document.createElement('div');
//         const id = myLibrary.indexOf(book);
//         card.setAttribute('id', id);

//         card.classList.add('card');
//         books.appendChild(card);
//         for (let key in book) {
//             const para = document.createElement('div');
//             const button = document.createElement('button');
           
//             if (key == "isRead") {
//                 button.textContent = (`${book.isRead == true ?  "Readed" : "Not readed"}`);
//             }
//             else if (key == "pages") {
//                 para.textContent = (`${book[key] + " pages"}`)} 
//              else {
//                 para.textContent = (`${book[key]}`);
//             } 
            
//             card.appendChild(para);
//             card.appendChild(button);

//             button.addEventListener('click', () => {
//                 book.isRead = !book.isRead;
//                 displayBooksInLibrary();
//             })
//         }     
//     })
// }
    






// //Modal
const openModalButtons = document.querySelector('[data-modal-target]')
const closeModalButtons = document.querySelector('.modal-close')
const overlay = document.getElementById('overlay')
const modal = document.querySelector('.modal')

function openModal() {
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal() {
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

openModalButtons.addEventListener('click', openModal)
closeModalButtons.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)


