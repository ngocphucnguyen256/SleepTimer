window.onload = function functions() {
  currentTime();
  //calulate 1
  document
    .getElementById("calculateButton-1")
    .addEventListener("click", function () {
      calculateButtonFunction("calculateButton-1");
    });
  document
    .getElementById("calculateButton-2")
    .addEventListener("click", function () {
      calculateButtonFunction("calculateButton-2");
    });
  //go top
  document
    .getElementById("goTopButton")
    .addEventListener("click", scrollToTopFunction);
  window.onscroll = function () {
    displayGoTopButton();
  };
  document.getElementById("goBack").addEventListener("click", function () {
    goBackSection();
  });
};
//ket thuc onload
/*functions*/
//current time
function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;
  var t = setTimeout(function () {
    currentTime();
  }, 1000);
}
//calculateButtonFunction
function calculateButtonFunction(targetId) {
  const equationHour = 1;
  const equationMinute = 44;
  const equationMinuteAfter = 30;
  const minutesPerHour = 60;
  const hoursPerDay = 24;
  const rowNumber = 6;
  var timeContainer = [];
  if (targetId == "calculateButton-1") {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var i = 1;
    hour += equationHour;
    minute += equationMinute;
    while (hour >= hoursPerDay || minute >= minutesPerHour) {
      if (minute >= minutesPerHour) {
        minute -= minutesPerHour;
        hour++;
      }
      if (hour >= hoursPerDay) {
        hour -= hoursPerDay;
      }
    }
    timeContainer.push(updateTime(hour) + " : " + updateTime(minute));
    while (i < rowNumber) {
      i++;
      hour += equationHour;
      minute += equationMinuteAfter;
      while (hour >= hoursPerDay || minute >= minutesPerHour) {
        if (minute >= minutesPerHour) {
          minute -= minutesPerHour;
          hour++;
        }
        if (hour >= hoursPerDay) {
          hour -= hoursPerDay;
        }
      }
      timeContainer.push(updateTime(hour) + " : " + updateTime(minute));
    }
    calculateButtonShow(timeContainer);
    timeContainer = [];
  } else {
    //calcutate2
    var hour;
    var minute;
    var i = 1;
    var inputTime = document.getElementById("timeSelector").value.split(":");
    hour = inputTime[0];
    minute = inputTime[1];
    hour -= equationHour;
    minute -= equationMinute;
    if (minute < 0) {
      hour--;
      minute = minutesPerHour + minute;
    }
    if (hour < 0) {
      hour = hoursPerDay + hour;
    }
    timeContainer.push(updateTime(hour) + " : " + updateTime(minute));
    while (i < rowNumber) {
      hour -= equationHour;
      minute -= equationMinuteAfter;
      if (minute < 0) {
        hour--;
        minute = minutesPerHour + minute;
      }
      if (hour < 0) {
        hour = hoursPerDay + hour;
      }
      timeContainer.push(updateTime(hour) + " : " + updateTime(minute));
      i++;
    }
    calculateButtonShow(timeContainer);
    timeContainer = [];
  }
}
function calculateButtonShow(timeContainer) {
  var i = 1;
  timeContainer.reverse();
  timeContainer.forEach(function (item, array) {
    document.getElementById("timeDiv" + i).innerText = item;
    i++;
  });

  document.getElementById("sectionButtonView").style.height = "0px";
  document
    .getElementById("sectionButtonView")
    .classList.remove("expandButtonView");
  document.getElementById("sectionTimeView").classList.toggle("expandTimeView");
  document.getElementById("sectionTimeView").style.height = "400px";
}
function goBackSection() {
  document.getElementById("sectionTimeView").style.height = "0px";
  document.getElementById("sectionTimeView").classList.remove("expandTimeView");
  document
    .getElementById("sectionButtonView")
    .classList.toggle("expandButtonView");
  document.getElementById("sectionButtonView").style.height = "400px";
}
//update time
function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}
//display go top button

function displayGoTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("goTopButton").style.display = "block";
  } else {
    document.getElementById("goTopButton").style.display = "none";
  }
}
//goToTopButtonFunctionfunction
function scrollToTopFunction() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
//contact
