const m = moment();
var currentDay = document.querySelector("#currentDay");

var displayDate = function() {
    currentDay.textContent = m.format("dddd, MMMM Do");
};

displayDate();