// get template
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // get data
       let containerHTML = document.getElementById("animalsContainer");
       getData(function(data) {
         console.log(data);
         let animalsArray = JSON.parse(data);
         console.log(animalsArray);

         for(let i = 0; i < animalsArray.length; i++) {
           let htmlText = xhttp.responseText;
           htmlText = htmlText.replace('*imgSrc*', animalsArray[i].imgUrl);
           htmlText = htmlText.replace('*name*', animalsArray[i].name);
           htmlText = htmlText.replace('*type*', animalsArray[i].type);
           htmlText = htmlText.replace('*about*', animalsArray[i].about);
           containerHTML.innerHTML += htmlText;
         }
       })
       
    }
};

xhttp.open("GET", "template/animals-tmp.html", true);
xhttp.send();


// get data
function getData(callback) {
  function dataLoaded() {
         callback(this.responseText);
  };

  var req = new XMLHttpRequest();
  req.addEventListener('load', dataLoaded);
  req.open("GET", "data/data.json");
  req.send();
}
