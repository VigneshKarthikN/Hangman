var len=5,x,xc,x1,xcan,value1,corectWord=0,wrongWord=0,can,c,y,yy,qu,q,clr,mySound,my;
var word=[];
var qi;
var b = {
    word1:['c','d','r','o','m'],
    word2:['c', 'r','a','s','h'],
    word3:['d', 'e','b','u','g'],
    word4:['i', 'n','t','e','l'],
    word5:['b', 'u','r','s','t'],
    word6:['p', 'i','x','e','l'],
    word7:['q', 'u','e','r','y'],
    word8:['s', 't','a','c','k'],
    word9:['v', 'i','r','u','s'], 
    word10:['n','o','i','s','e'],   
};

    q1="Seldom used storage device";
    q2="Serious computer failure";
    q3="How do u correct me???";
    q4="Company with monopoly over processors";
    q5="Send data in a large package all at one time";
    q6="Smallest unit of image";
    q7="Requesting data from database";
    q8="Pushup / pushdown";
    q9="Malicious software program";
    q10="Disruption interfering with the transmission of information";

   

window.onload = function load(){
    localStorage.ques = localStorage.ques+1;
    // my = new sound("bgm.mp3");
    // my.play();
    x = Math.round(Math.random()*10)%10;
    checkWord();
    can = document.querySelector("#can");
    c = can.getContext('2d');
    yy = document.querySelector("#yy");
    y = yy.getContext('2d');
    qu=document.querySelector("#que");
    q=qu.getContext('2d');
    q.font="25px Arial";
    q.fillText(qi,20,35);
}

function check(xy){
    clr=xy;
    xy.onclick=null;
    mySound = new sound("click.mp3");
    mySound.play();
    if(corectWord == 4 || corectWord == 5 )
         success();
    value1 = xy.value;
    console.log(value1);
    for(var i=0;i<5;i++)
    {
        if(value1 == word[i]){
            corectWord++;
            drawLetter(i,value1);
            break;
        }
    }
   if(i>4){
        wrongWord++;
        console.log(wrongWord);
        drawHangMan(wrongWord);
    }
}
function checkWord(){ 
     
   switch(x)
   {
        case 0:  word = b.word1;
                qi=q1;
                break;
        case 1:  word = b.word2;
                qi=q2;
                break;
        case 2:  word = b.word3;
                qi=q3;
                break;
        case 3:  word = b.word4;
                qi=q4;
                break;
        case 4:  word = b.word5;
                qi=q5;    
                break;
        case 5:  word = b.word6; 
                qi=q6;   
                break;
        case 6:  word = b.word7;
                qi=q7;    
                break;
        case 7:  word = b.word8;
                qi=q8;    
                break;
        case 8:  word = b.word9;
                qi=q9;    
                break;
        case 9:  word = b.word10;
                qi=q10;    
                break;
        
   }
   console.log(qi);
//    q.fillText(qi,20,20);

}


function drawLetter(i,val){
    switch(i){
        case 0:xcan = document.querySelector("#a1"); 
        break;
        case 1:xcan = document.querySelector("#a2"); 
        break;
        case 2:xcan = document.querySelector("#a3"); 
        break;
        case 3:xcan = document.querySelector("#a4"); 
        break;
        case 4:xcan = document.querySelector("#a5"); 
        break;
    }  
    clr.style.backgroundColor = "white";
    mySound = new sound("success1.mp3");
    mySound.play();
    xc = xcan.getContext('2d');
    xc.textAlign="center";
    xc.font="25px Georgia";
    val = val.toUpperCase(); 
    xc.fillText(val,10,26);
}
function drawHangMan(i){
    mySound = new sound("fail1.mp3");
    if(corectWord < 5 )
        mySound.play();
    switch(i)
    {
    case 1: drawFace();
            break;
    case 2: drawleft1();
            break;
    case 3: drawleft2();
            break;
    case 4: drawrright1();
            break;
    case 5: drawrright2();
            break;
    case 6: drawteeth();
            break;
    case 7: drawdead();
    }
    clr.style.backgroundColor = "grey";
    y.clearRect(0,0,yy.width,yy.height);
    y.font = "27px Arial";
    if(corectWord > 4){
        c.clearRect(0,0,can.width,can.height);
        success();
    }
    else if(i < 7){
        y.fillText("NO OF ATTEMPTS : " + (7-i),5,50);
     }
    else{
        y.fillText("YOU LOST",10,50);
        // my.stop();
        mySound = new sound("Smoke Alarm1.mp3");
        mySound.play();
        word.splice(0,word.length);
        checkq();
    }  
}
function drawFace(){
    var link = new Image(10,10);
    var img = document.getElementById("face");
    console.log(link);
    c.drawImage(img,75,34);
}
function drawleft1(){
    var link = new Image(10,10);
    var img = document.getElementById("left1");
    console.log(link);
    c.drawImage(img,20,160);
}
function drawleft2(){
    var link = new Image(10,10);
    var img = document.getElementById("left2");
    console.log(link);
    c.drawImage(img,230,160);
}
function drawrright1(){
    var link = new Image(10,10);
    var img = document.getElementById("right1");
    console.log(link);
    c.drawImage(img,20,250);
}
function drawrright2(){
    var link = new Image(10,10);
    var img = document.getElementById("right2");
    console.log(link);
    c.drawImage(img,230,250);
}

function drawteeth(){
    var link = new Image(10,10);
    var img = document.getElementById("teeth");
    console.log(link);
    c.drawImage(img,120,220);
}


 function success(){     
     localStorage.crct = localStorage.crct + 1;   
    y.clearRect(0,0,yy.width,yy.height);
    y.font="25px Arial";
    // my.stop();
        mySound = new sound("Tada.mp3");
        mySound.play();
        //wrongWord = 10;
    y.fillText("YOU WIN !!",00,30);
    y.fillText("Press any key",0,58);
    checkq();
}
    
function drawdead(){
    c.strokeStyle="red";
    drawline(0,0,300,300);
    drawline(0,300,300,-300);
    drawRect1(0,0,5,300);
    drawRect1(0,0,300,5);
    drawRect1(300,300,-300,-5);
    drawRect1(300,300,-5,-300);
}
function drawline(a,b,len,bre){
    c.moveTo(a,b);
    c.lineTo(a+len,b+bre);
    c.stroke();
}
function drawRect1(a,b,len,bre){
    c.fillStyle="red";
    c.fillRect(a,b,len,bre);
}  

function reload(){
    location.reload();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    // this.stop = function(){
    //     this.sound.pause();
    // }
}

function checkq(){
    if(corectWord == 5 || wrongWord > 7){
        location.reload();
    }}

function stop(){
    c.clearRect(0,0,can.width,can.height);
    q.clearRect(0,0,qu.width,qu.height);
    c.font="25px Arial";
    c.fillText(" **** GAME OVER !! ****",10,100);
    c.fillText("***** THANK YOU *****",17,190);
    y.clearRect(0,0,yy.width,yy.height);
}