// Initialize Firebase (YOUR OWN APP)

  var firebaseConfig = {
    apiKey: "AIzaSyB4inEqUyC72eUcPDqUsun3R0_cARUoZh0",
    authDomain: "my-second-try-ed2a1.firebaseapp.com",
    databaseURL: "https://my-second-try-ed2a1.firebaseio.com",
    projectId: "my-second-try-ed2a1",
    storageBucket: "",
    messagingSenderId: "857304681174",
    appId: "1:857304681174:web:e7616c4c19a48a34"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  database = firebase.database( )


var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------

database.ref().on("value", function(snapshot) {

  console.log(snapshot.val());

  clickCounter = snapshot.val().clickCount;

  $("#click-value").text(clickCounter);

}, function(errorObject) {

  console.log("The read failed: " + errorObject.code);

});

// --------------------------------------------------------------

$("#click-button").on("click", function() {

  clickCounter--;

  $("#click-value").text(clickCounter)

  database.ref().set({
    clickCount: clickCounter
  });

  console.log(clickCounter)

});

$("#restart-button").on("click", function() {

  clickCounter = initialValue

  database.ref().set({
    clickCount: clickCounter
  });

  console.log(clickCounter)

  $("#click-value").text(clickCounter)

});
