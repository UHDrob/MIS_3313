/* add in your functions here */
function outputCountries() {
    for (i=0; i<countries.length; i++) {
       document.write(
          "<div class='item'>" +
       "<h2>" +  countries[i].country + "</h2>"  + 
         "<p>" + 
        countries[i].continent 
        + "</p> <p class='inner-box'> <strong> Cities</strong> <br>" 
       );
       outputCountryBox(countries[i]);
       document.write("  </div>")
    }
 }
 
 function outputCountryBox(city) {
    for (j=0; j<city.cities.length;j++) {
       document.write(
         city.cities[j].city  + "<br>");
    }
    document.write( "</p>" +  
      "<p class='inner-box'><strong>Popular Photos</strong><br>");
      for (k=0; k<city.photos.length;k++) {
         document.write( "<img class='photo' src='" +
            city.photos[k].source
             + "'>");
      }  
    document.write(  "</p>" +
      "<button>Visit</button>    <br>" );
      
 }
 
 outputCountries();