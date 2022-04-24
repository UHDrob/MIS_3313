/* add in your functions here */
function outputBooks() {
    for (i=0; i<countries.length;i++) {
       document.write(
       "<h2 >" + countries[i].country + "</h2>" + 
       "<h3>" + countries[i].continent + "</h3><br>"
       );
       outputAuthors(countries[i]);
    }
 }
 
 function outputAuthors(city) {
    for (i=0; i<city.cities.length;i++) {
       document.write(city.cities[i].city + "<br>");
    }
 }
 
 outputBooks();