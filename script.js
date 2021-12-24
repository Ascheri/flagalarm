// Timer
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
}

// ShowAndHide
var isHidden = 0;
function showAndHide(){
    if (isHidden === 0) {
    isHidden = isHidden + 1;
    document.getElementById("settings").style.display="block";
    document.getElementById("settings").style.height="100%";
    document.getElementById("settings").style.animation="brighter 0.3s";
    hidebutton.value="설정 닫기";
    }
    else {
    isHidden = isHidden - 1;
    document.getElementById("settings").style.animation="darker 0.3s forwards";
    document.getElementById("settings").style.height="0px";
    hidebutton.value="설정 열기";
    }
}

// get minute
var bringtime = new Date();
var nowminute = bringtime.getMinutes();

//audio
var audio1 = new Audio("sounds/beach.mp3");
audio1.loop = true;
audio1.volume = 0.5;
