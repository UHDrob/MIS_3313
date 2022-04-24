/* add in your functions here */
function outputBooks() {
    for (i=0; i<books.length;i++) {
       document.write("<h2>" + books[i].title + "</h2>" + books[i].publisher + "<br>");
       outputAuthors(books[i]);
    }
 }
 
 function outputAuthors(book) {
    for (i=0; i<book.authors.length;i++) {
       document.write(book.authors[i].lastName + "<br>");
    }
 }
 
 outputBooks();