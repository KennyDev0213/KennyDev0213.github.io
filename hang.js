var guessNum = 0;
var Letters;
var word;
var WinChecker=0;
var alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

function MakeGuess(userGuess){
    selector=userGuess-1;
    var guessedLetter = alpha[selector];
    var checker = 0;
    document.getElementById(userGuess.toString()).style.display = "none";
    for(i = 0; i < Letters.length; i++){
        if(guessedLetter == Letters[i]){
            checker = 1;
            var Lselect = "L"+i.toString();
            document.getElementById(Lselect).innerHTML = Letters[i] + " ";
            WinChecker++;
        }
    }
    if(checker == 0){
        document.getElementById("gallows").src = "hang"+guessNum.toString()+".jpg";
        guessNum++;
        if(guessNum > 7){
            document.getElementById("alphabetList").style.display = "none";
            alert("You are dead! the word was: "+ word);
            WinChecker = 1;
        }
        document.getElementById("guessNum").innerHTML = guessNum;
    }
    if(WinChecker == Letters.length){
        alert("Congradulations, You Won!");
    }
}

function generate(){
    WinChecker = 0;
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("alphabetList").style.display = "flex";
    var words = ["BLACK","SPHYNX","QUARTZ","JOY","HIPPO","LOVE","SMILE","HORSE","WINNER","POWER","HYPER","SPACE"];
    var selector = Math.floor(Math.random() * words.length);
    word = words[selector];
    Letters = word.split("");
    for(i = 0 ; i < Letters.length; i++){
        var Lselect = "L" + i.toString();
        document.getElementById(Lselect).innerHTML = "_";
    }
}

function restart(){
    word = null;
    WinChecker = 0;
    document.getElementById("startBtn").style.display = "block";
    document.getElementById("alphabetList").style.display = "none";
    for(i=0;i<10;i++){
        var Lselecter = "L"+i;
        document.getElementById(Lselecter).innerHTML = "";
    }
    Letters = null;
    guessNum = 0;
    document.getElementById("guessNum").innerHTML = guessNum;
    for(i=1;i<26;i++){
        document.getElementById(i.toString()).style.display = "block";
    }
    document.getElementById("gallows").src = "hang.jpg";
}