/* add in your functions here */
function outputBooks() {
    for (i=0; i<countries.length;i++) {
       document.write(
       "<h2>" +  countries[i].country + "</h2>"  +
         "<p>" +
        countries[i].continent 
        + "</p>" 
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