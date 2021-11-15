var uri = "https://developer.nps.gov/api/v1/activities/parks?id=&q="
var apikey = "limit=50&sort=&api_key=WSAdqFUtu59kwua9z41Qs7cuVbKpruMf7eXb3kPD";
function setup(){

    var button = select('#submit');
    button.mousePressed(setValue);

    input = select('#activity')
}    

function setValue() {
    
    var url = uri + input.value() + apikey
    loadJSON(uri,gotData);
}
function gotData(data){
    examine = data; 
    document.getElementById("app").innerHTML = `<h1> Parks (${examine.length} results)</h1>`
}

(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function () {
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
        } else {
            logger.innerHTML += arguments[i] + '<br />';
        }
      }
    }
})();



