$(document).ready(function() {
  $("#button").click(function(event) {


    var first = $("#first1").val();
    var age = $("#age1").val();
    var kids = $("#kids1").val();
    var beach = $("#beach1").val();
    var activity = $("activity1").val();
    var days = $("day1").val();


    if (first === "Yes" || "No" && age === "below 21" || "21 and over" && kids === "Yes" && beach === "Yes" || "No" && activity === "Theme Park" &&
    days === "3 days" || "5 days" || "7 days or more") {
      $("#disneyland").show();
    }
    else if (first === "Yes" || "No" && age === "21 and over" && kids === "No" && beach === "No" && activity === "Entertainment" &&
    days === "3 days" || "5 days" || "7 days or more") {
      $("#lasvegas").show();
    }
    else if (first === "Yes" || "No" && age === "21 and over" || "below 21" && kids === "Yes" || "No" && beach === "Yes" && activity === "Sightseeing" &&
    days === "3 days" || "5 days" || "7days or more") {
      $("#hawaii").show();
    }

    else {
      $("#house").show();
    }

    event.preventDefault();
  });

});
