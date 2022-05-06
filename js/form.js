
document.getElementById("loginForm").addEventListener("submit", function(e) {
    var noName = document.getElementById("customer").value;
    var noCountry = document.getElementById("countries").value;
    var noStatus = document.getElementById("status").value;

    if (noName == null || noName == "") {
        // the fiedl was empty. Stop the form submission
        e.preventDefault();
        // Now tell teh user somthing went wrong
        alert("Please enter a name");
    };

    if (noCountry == 0 {
        e.preventDefault();
        // Now tell teh user somthing went wrong
        alert("Please choose a country");
    });

    if (noStatus != 0 && noStatus != 1  && noStatus != 2) {
        e.preventDefault();
        // Now tell teh user somthing went wrong
        alert("Please choose a stastua");
    }



});
        
