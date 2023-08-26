function goToSamhitha() {
    window.open("https://samhitha.ag/");
}       

 document.getElementById("showTel").addEventListener("click", function() {
    var button2 = document.getElementById("showEng"); 
    button2.classList.remove("clicked"); 
    var button = document.getElementById("showTel"); 
    button.classList.add("clicked"); 
    //showing telugu cards
    var hiddenElement = document.getElementById("telElement"); 
    hiddenElement.style.display = "block"; 
    //hiding english cards
    var hideElement = document.getElementById("engElement"); 
    hideElement.style.display = "none";
    //showing telugu title
    var hiddenElement = document.getElementById("telHeading"); 
    hiddenElement.style.display = "block"; 
    //hiding english title
    var hideElement = document.getElementById("engHeading"); 
    hideElement.style.display = "none";
     //showing telugu subtitle
     var hiddenElement = document.getElementById("telSubtitle"); 
     hiddenElement.style.display = "block"; 
     //hiding english subtitle
     var hideElement = document.getElementById("engSubtitle"); 
     hideElement.style.display = "none";

 }); 

 document.getElementById("showEng").addEventListener("click", function() {
    var button2 = document.getElementById("showTel"); 
    button2.classList.remove("clicked"); 
    var button = document.getElementById("showEng"); 
    button.classList.add("clicked"); 
    //showing english cards
    var hiddenElement = document.getElementById("engElement"); 
    hiddenElement.style.display = "block"; 
    //hiding telugu cards
    var hideElement = document.getElementById("telElement"); 
    hideElement.style.display = "none";
     //showing english title
     var hiddenElement = document.getElementById("engHeading"); 
     hiddenElement.style.display = "block"; 
     //hiding telugu title
     var hideElement = document.getElementById("telHeading"); 
     hideElement.style.display = "none";
     //showing english subtitle
     var hiddenElement = document.getElementById("engSubtitle"); 
     hiddenElement.style.display = "block"; 
     //hiding telugu subtitle
     var hideElement = document.getElementById("telSubtitle"); 
     hideElement.style.display = "none";

 }); 
