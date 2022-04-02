const m = moment();
var currentDay = document.querySelector("#currentDay");
var currentHour = m.format("k");

//display date in jumbotron
var displayDate = function() {
    currentDay.textContent = m.format("dddd, MMMM Do");
};

displayDate();

//change task color with passing hour
var adjustTask = function () {
    var task9 = document.querySelector("#task9");
    if(9 == currentHour) {
        task9.classList.add("present");
    }
    else if(9 < currentHour) {
        task9.classList.add("past");
    }
    else if(9 > currentHour) {
        task9.classList.add("future");
    }

    var task10 = document.querySelector("#task10");
    if(10 == currentHour) {
        task10.classList.add("present");
    }
    else if(10 < currentHour) {
        task10.classList.add("past");
    }
    else if(10 > currentHour) {
        task10.classList.add("future");
    }

    var task11 = document.querySelector("#task11");
    if(11 == currentHour) {
        task11.classList.add("present");
    }
    else if(11 < currentHour) {
        task11.classList.add("past");
    }
    else if(11 > currentHour) {
        task11.classList.add("future");
    }

    var task12 = document.querySelector("#task12");
    if(12 == currentHour) {
        task12.classList.add("present");
    }
    else if(12 < currentHour) {
        task12.classList.add("past");
    }
    else if(12 > currentHour) {
        task12.classList.add("future");
    }

    var task13 = document.querySelector("#task13");
    if(13 == currentHour) {
        task13.classList.add("present");
    }
    else if(13 < currentHour) {
        task13.classList.add("past");
    }
    else if(13 > currentHour) {
        task13.classList.add("future");
    }

    var task14 = document.querySelector("#task14");
    if(14 == currentHour) {
        task14.classList.add("present");
    }
    else if(14 < currentHour) {
        task14.classList.add("past");
    }
    else if(14 > currentHour) {
        task14.classList.add("future");
    }

    var task15 = document.querySelector("#task15");
    if(15 == currentHour) {
        task15.classList.add("present");
    }
    else if(15 < currentHour) {
        task15.classList.add("past");
    }
    else if(15 > currentHour) {
        task15.classList.add("future");
    }

    var task16 = document.querySelector("#task16");
    if(16 == currentHour) {
        task16.classList.add("present");
    }
    else if(16 < currentHour) {
        task16.classList.add("past");
    }
    else if(16 > currentHour) {
        task16.classList.add("future");
    }

    var task17 = document.querySelector("#task17");
    if(17 == currentHour) {
        task17.classList.add("present");
    }
    else if(17 < currentHour) {
        task17.classList.add("past");
    }
    else if(17 > currentHour) {
        task17.classList.add("future");
    }
};

adjustTask();




