var books = [
   { title: "Canada",
     publisher: "North America",
     authors: [
      {firstName: "Mark", lastName: "Calgary" }]
   }, ,
   { title: "United States",
     publisher: "North America",
     authors: [
      {firstName: "Arthur", lastName: "Boston" },
      {firstName: "John", lastName: "Chicago" }]
   },
   { title: "Italy",
     publisher: "Europe",
     authors: [
      {firstName: "Sylvan", lastName: "Florence" },
      {firstName: "William", lastName: "Milan" },
      {firstName: "William", lastName: "Naples" }]
     }
];

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