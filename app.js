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
$(document).on("click", "#submit", function (event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name = $("#employee-name-input").val().trim();
    role = $("#role-input").val().trim();
    startDate = $("#date-input").val().trim();
    monthlyRate = $("#monthly-rate-input").val().trim();

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

database.ref().on("child_added", function (snapshot) {
    var sv = snapshot.val()
    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().role);
    console.log(snapshot.val().startDate);
    console.log(snapshot.val().monthlyRate);

    // Change the HTML to reflect
    $("#employee-name").text(sv.name);
    $("#role").text(sv.role);
    $("#date").text(sv.startDate);
    $("#months-worked").text(sv.monthlyRate);
    $("#monthly-rate").text(sv.monthsWorked);
    $("#total-billed").text(sv.totalBilled);

    var tBody = $("tbody");
    var tRow = $("<tr>");
    var titleTd = $("<td>").text(name);
    var roleTd = $("<td>").text(role);
    var startTd = $("<td>").text(startDate);
    var monthTd = $("<td>").text(monthlyRate);

    tRow.append(titleTd, roleTd, startTd, monthTd);
    tBody.append(tRow);


    // var tableRow = $("<tr>")
    // var tableHeaderCell = $("<th>")
    // var tableD = $("<td>")
    // $("tableGoesHere").append(tableRow)
    // tableRow.append(tableHeaderCell)
    // tableHeaderCell.append(tableD + name)
    // tableHeaderCell
    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});