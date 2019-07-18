var firebaseConfig = {
    apiKey: "AIzaSyAnNIvC7UkY5PXZakAk4bnREa3UyOVCCyk",
    authDomain: "database-brain.firebaseapp.com",
    databaseURL: "https://database-brain.firebaseio.com",
    projectId: "database-brain",
    storageBucket: "",
    messagingSenderId: "145137268484",
    appId: "1:145137268484:web:410be2d5f85763b3"
  };
firebase.initializeApp(firebaseConfig);
var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------


database.ref().on("value", function(snapshot) {

    if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {
        
        highBidder = snapshot.val().highBidder
        highPrice = parseInt(snapshot.val().highprice)
        
        $("#highest-bidder").text(snapshot.val().highBidder)
        $("#highest-price").text(snapshot.val().highPrice)
        
        console.log(snapshot.val());

    }
        
    $("#highest-bidder").text(initialBidder)
    $("#highest-price").text(initialBid)
    console.l0g(snapshot.val());
    
},function(errorObject) {
console.log("The read failed: " + errorObject.code);
  });

  

$("#submit-bid").on("click", function() {
    event.preventDefault()

    bidderName = $("#bidder-name").val().trim()
    bidderPrice= parseInt($("#bidder-price").val().trim());

    if (bidderPrice > highPrice) {
        alert("You are now the highest bidder.");
      } else {
        alert("Sorry that bid is too low. Try again.");
      }
});