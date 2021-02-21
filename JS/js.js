window.onload=function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;
      var t = setTimeout(function(){ currentTime() }, 1000);
      //1:44
      //1:30
/*-----------------cal1-------------------*/

      document.getElementById("cal1").onclick= function calcutate1(){
        var h=hour; var m=min; var i=1;
        h+=1;
        m+=44;
        while(h>=24 || m>=60){
          if(m>=60){
            m-=60;
            h++;}
          if(h>=24){
            h-=24;}
          }
        document.getElementById("show"+i).innerText=updateTime(h) + " : " + updateTime(m);
        while(i<6){
          i++;
          h+=1;
          m+=30;
          while(h>=24 || m>=60){
            if(m>=60){
              m-=60;
              h++;}
            if(h>=24){
              h-=24;}
            }
          document.getElementById("show"+i).innerText=updateTime(h) + " : " + updateTime(m);
        }
        toggle(1);
      
        
      }
/*-----------------cal2-------------------*/
      document.getElementById("cal2").onclick= function calcutate2(){
        var h; var m; var i=6;
        var container =document.getElementById("time").value.split(":");
        h=container[0];
        m=container[1];
        h-=1;
        m-=44;
          if(m<0){
            h--;
            m=60+m;
          }
          if(h<0){
            h=12+h;
        }
        h=updateTime(h);
        m=updateTime(m);
        document.getElementById("show2_"+i).innerText=h + " : " + m;
          while(i>1){
              h-=1;
              m-=30;
              if(m<0){
                h--;
                m=60+m;
              }
              if(h<0){
                  h=12+h;
            }
            h=updateTime(h);
            m=updateTime(m);
            i--;
            document.getElementById("show2_"+i).innerText=h + " : " + m;
            }
          toggle(2);
       

      }

  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
 
}
function toggle(t){
  if (document.getElementById("toggle"+t).style.display === "none") {
    document.getElementById("toggle"+t).style.display = "block";
  } else {
    document.getElementById("toggle"+t).style.display = "none";
  }
}