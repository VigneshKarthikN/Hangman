var len=5,x;
var word=[];
var l1=document.querySelector("#l1");
var l2=document.querySelector("#l2");
var l3=document.querySelector("#l3");
var l4=document.querySelector("#l4");
var l5=document.querySelector("#l5");
var b = {
    word1:['h', 'e','l','p','o'],
    word2:['a', 'b','c','d','e'],
    word3:['f', 'e','l','p','o'],
    word4:['g', 'e','l','p','o'],
    word5:['i', 'e','l','p','o'],    
};
window.onload = function load(){
    x = Math.round(Math.random()*10)%5;
    console.log(x);
    //checkWord(x);
}
function check(x){
    var x1 = document.getElementById("ques").value;
    checkWord(x1);
}
function checkWord(x1){  
    //console.log(a);
    //var x1 = document.getElementById("ques").value;
    checkLetter(x1);
}
function checkLetter(a,x1){
    //var word=[];
    if(a==0){
        word=b.word1;
    }
    else if(a==1){
        word=b.word2;
    }
    else if(a==3){
        word=b.word4;
    }
    else if(a==2){
        word=b.word3;
    }
    else if(a==4){
        word=b.word5;
    }
    else{
        console.log('err');
    }
    console.log(word[0]);
    if(x1==word[0]){
        writeLetter(x1,0);
        word[0]=0;
        x1.onclick=null;
    }
}
function writeLetter(a,i){
    var xc;
    if(i==0){
        xc = l1.getContext('2d');
        draw(xc,a);

    }
}
function draw(xc,a){
    xc.font="25px Georgia";
     a = a.toUpperCase(a[1]); 
    xc.textAlign="centre"; 
    xc.fillText(a,10,26);
    //a[1] = 0;
    show(x);
    //console.log(a);
    //z.onclick = null;
}
function show(x){        
    var y1 = document.querySelector("#a");
    if(a[5] == 0){
    y.clearRect(0,0,yy.width,yy.height);
    y.font="25px Arial";
    y.fillText("GAME OVER, YOU WIN !!",00,50);}
 }
