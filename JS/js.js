window.onload = function functions() {
  currentTime();
  //calulate 1
  document.getElementById("cal1").addEventListener("click", function calcutate1() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var i = 1;
    h += 1;
    m += 44;
    while (h >= 24 || m >= 60) {
      if (m >= 60) {
        m -= 60;
        h++;
      }
      if (h >= 24) {
        h -= 24;
      }
    }
    document.getElementById("show" + i).innerText = updateTime(h) + " : " + updateTime(m);
    while (i < 6) {
      i++;
      h += 1;
      m += 30;
      while (h >= 24 || m >= 60) {
        if (m >= 60) {
          m -= 60;
          h++;
        }
        if (h >= 24) {
          h -= 24;
        }
      }
      document.getElementById("show" + i).innerText = updateTime(h) + " : " + updateTime(m);
    }
    toggle(1);
  
  
  });
  //calcutate2
  document.getElementById("cal2").addEventListener("click", function calcutate2() {
    var h;
    var m;
    var i = 6;
    var container = document.getElementById("time").value.split(":");
    h = container[0];
    m = container[1];
    h -= 1;
    m -= 44;
    if (m < 0) {
      h--;
      m = 60 + m;
    }
    if (h < 0) {
      h = 12 + h;
    }
    h = updateTime(h);
    m = updateTime(m);
    document.getElementById("show2_" + i).innerText = h + " : " + m;
    while (i > 1) {
      h -= 1;
      m -= 30;
      if (m < 0) {
        h--;
        m = 60 + m;
      }
      if (h < 0) {
        h = 12 + h;
      }
      h = updateTime(h);
      m = updateTime(m);
      i--;
      document.getElementById("show2_" + i).innerText = h + " : " + m;
    }
    toggle(2);
  });
  //go top 
  document.getElementById("top").addEventListener("click", function topFunction() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  window.onscroll = function () {
    scrollFunction()
  };
}
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
    currentTime()
  }, 1000);
}
//update time
function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}
//toggle
function toggle(t) {
  if (document.getElementById("toggle" + t).style.display === "none") {
    document.getElementById("toggle" + t).style.display = "block";
  } else {
    document.getElementById("toggle" + t).style.display = "none";
  }
}
//display go top button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top").style.display = "block";
  } else {
    document.getElementById("top").style.display = "none";
  }
};