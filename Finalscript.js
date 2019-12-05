var rolling = false;
var earnings = 0;

var picker1 = 1;
var picker2 = 0;
var picker3 = 2;

var begin;

function Start(){
    document.getElementById("jackpotimg").style.display = "none";
    rolling = true;
    begin = setInterval("roll()",50);
}

function roll(){
    var roller1 = Math.floor(Math.random()*3).toString();
    var roller2 = Math.floor(Math.random()*3).toString();
    var roller3 = Math.floor(Math.random()*3).toString();
    picker1 = "pic"+ roller1 +".JPG";
    picker2 = "pic"+ roller2 +".JPG";
    picker3 = "pic"+ roller3 +".JPG";
    document.getElementById("slot0").src = picker1;
    document.getElementById("slot1").src = picker2;
    document.getElementById("slot2").src = picker3;
}

function Stop(){
    rolling = false;
    clearInterval(begin);
    if(picker1 == picker2 && picker2 == picker3){
        earnings = earnings + 50;
        document.getElementById("jackpotimg").style.display = "block";
        document.getElementById("WinDialog").innerHTML = "JACKPOT! You now have $"+earnings+"!";
    } else if(picker1 == picker2 || picker1 == picker3 || picker2 == picker3){
        earnings = earnings + 3;
        document.getElementById("WinDialog").innerHTML = "Nice! So far you have $"+earnings+"!";
    }
}

function Reset(){
    clearInterval(begin);
    earnings = 0;
    document.getElementById("jackpotimg").style.display = "none";
    document.getElementById("WinDialog").innerHTML = "Play On";
    document.getElementById("slot0").src = "pic0.JPG";
    document.getElementById("slot1").src = "pic0.JPG";
    document.getElementById("slot2").src = "pic0.JPG";
}