function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementsByClassName("session")[0];

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementsByClassName("hours")[0].innerHTML = hrs;
    document.getElementsByClassName("minutes")[0].innerHTML = min;
    document.getElementsByClassName("seconds")[0].innerHTML = sec;
}
setInterval(displayTime, 10);