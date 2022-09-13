var artists = "";
var apiKeyTD = "442081-DavidHer-JPC29JEG";
var searchHistory = [];
const inputVal = document.getElementById('searchArtists')
const input = inputVal.value;



// getting the ticket master api 

// key FskGqxyeT5Cc6gGb9olDTAvqKCLwfpT3
// info on api https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/
// to get attraction id &attractionId='

let city = 'nashville'
ticketMasterURL = 'https://app.ticketmaster.com/discovery/v2/events.json?city=&classificationName=music&apikey=FskGqxyeT5Cc6gGb9olDTAvqKCLwfpT3';

function  ticketMaster() {
    fetch(ticketMasterURL)
    .then((response) => response.json())
    .then((data) => console.log(data));
  }
  
// Event Handler for Search Artists Button
$(".searchBtn").on("click", (event) => {
    event.preventDefault();
    var artists = $("#searchArtists").val();
    // artists = $("searchArtistsInput").val();
    // Function for returning artist recommendation
    getRecArtist(artists);
//  getBandShows
//  saveSearchedArtist

// connecting button to api's
    // app.getRelated()
    ticketMaster();
});

var getRecArtist = (artists) => {
    // fetch function can go here 
   
    // fetch function goes here
   // getting the tasteDive api. 
   const app = {};
   app.apiKey = '442081-DavidHer-JPC29JEG';
   // app.apiURL = 'http://tastedive.com/api/similar?info=1&q=' + 'Nirvana' + '&k=442081-DavidHer-I9V9LHL5'
   app.apiURL = 'http://tastedive.com/api/similar?info=1&q=' +  artists + '&k=442081-DavidHer-I9V9LHL5'
   console.log(input)
   
   app.getRelated = function (search) {
       $.ajax({
           type: 'GET',
           data: {
               k: app.apiKey,
               q: search,
               type: 'music',
               info: 1,
           },
           url: app.apiURL,
           dataType: "jsonp",
       }).then(function (res) {
           console.log('dataRetrieved', res);
           console.log(res)
       });

   }; 
   app.getRelated()
}