let searchTerm = ""
let numRecords = 0
let startYear = 0
let endYear = 0

let articleCounter = 0

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

    console.log(response)

    $('#run-search').on('click', function() {

        event.preventDefault()

        searchTerm = $('#search-term').val().trim()

        console.log(searchTerm)

        numRecords = $('option').attr('value')
        
        console.log(numRecords)
        
        console.log(queryURL)
    
    
    });
    
});


