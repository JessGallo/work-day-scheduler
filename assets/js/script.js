const m = moment();
var currentDay = document.querySelector("#currentDay");
var currentHour = m.format("k");
var task9 = document.querySelector("#task9");
var task9Btn = document.querySelector("#task9Btn");
var task10 = document.querySelector("#task10");
var task11 = document.querySelector("#task11");
var task12 = document.querySelector("#task12");
var task13 = document.querySelector("#task13");
var task14 = document.querySelector("#task14");
var task15 = document.querySelector("#task15");
var task16 = document.querySelector("#task16");
var task17 = document.querySelector("#task17");

//display date in jumbotron
var displayDate = function() {
    currentDay.textContent = m.format("dddd, MMMM Do");
};

displayDate();

//change task color with passing hour
var adjustTask = function () {
    if(9 == currentHour) {
        task9.classList.add("present");
    }
    else if(9 < currentHour) {
        task9.classList.add("past");
    }
    else if(9 > currentHour) {
        task9.classList.add("future");
    }
    
    if(10 == currentHour) {
        task10.classList.add("present");
    }
    else if(10 < currentHour) {
        task10.classList.add("past");
    }
    else if(10 > currentHour) {
        task10.classList.add("future");
    }

    if(11 == currentHour) {
        task11.classList.add("present");
    }
    else if(11 < currentHour) {
        task11.classList.add("past");
    }
    else if(11 > currentHour) {
        task11.classList.add("future");
    }

    if(12 == currentHour) {
        task12.classList.add("present");
    }
    else if(12 < currentHour) {
        task12.classList.add("past");
    }
    else if(12 > currentHour) {
        task12.classList.add("future");
    }

    if(13 == currentHour) {
        task13.classList.add("present");
    }
    else if(13 < currentHour) {
        task13.classList.add("past");
    }
    else if(13 > currentHour) {
        task13.classList.add("future");
    }

    if(14 == currentHour) {
        task14.classList.add("present");
    }
    else if(14 < currentHour) {
        task14.classList.add("past");
    }
    else if(14 > currentHour) {
        task14.classList.add("future");
    }

    if(15 == currentHour) {
        task15.classList.add("present");
    }
    else if(15 < currentHour) {
        task15.classList.add("past");
    }
    else if(15 > currentHour) {
        task15.classList.add("future");
    }

    if(16 == currentHour) {
        task16.classList.add("present");
    }
    else if(16 < currentHour) {
        task16.classList.add("past");
    }
    else if(16 > currentHour) {
        task16.classList.add("future");
    }
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

//store data to localStorage
var loadTasks = function() {
    task9 = JSON.parse(localStorage.getItem("task9"));
};

var saveTasks = function() {
    localStorage.setItem("task9", JSON.stringify(tasks));
  };


// audit task time-intervals every 30 seconds
setInterval(function() {
    adjustTask();
  }, 30000);
