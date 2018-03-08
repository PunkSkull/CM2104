$(function(){
  //document ready
  alert("document ready");

  $('#searchform').submit(function(){
    //get current value and add to item list
  var searchterms = $("#searchterms").val();
  //call our search youtube function
    getResultsFromOMDB(searchterms);
    return false;
  });
});

function getResultsFromOMDB (searchterms){
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=eda0fd69&s=" + searchterms;

  $.getJSON(url, function(jsondata){
    printJSON(jsondata);

});
}

function printJSON(jsondata) {
  var normal = JSON.stringify(jsondata);
  $('#resultsbox').append("<p>" + normal + "</p>");
}
