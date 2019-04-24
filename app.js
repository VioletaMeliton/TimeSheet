var config = {
    apiKey: "AIzaSyBrqJ1Nka3JGsLr6kkFe1_HjuSyCX1fwEs",
    authDomain: "aizhan87-64ac9.firebaseapp.com",
    databaseURL: "https://aizhan87-64ac9.firebaseio.com",
    projectId: "aizhan87-64ac9",
    storageBucket: "aizhan87-64ac9.appspot.com",
    messagingSenderId: "643270252194"
};
firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// Initial Values
var name = "";
var role = "";
var startDate = 0;
var monthsWorked = "";
var monthlyRate = "";
var totalBilled = "";

// Capture Button Click
$("#submit").on("click", function (event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name = $("#employee-name").val().trim();
    role = $("#role").val().trim();
    startDate = $("#date").val().trim();
    monthlyRate = $("#monthly-rate").val().trim();

    console.log(startDate)
    console.log(role)
    console.log(name)
    console.log(monthlyRate)


    // Code for handling the push
    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

});