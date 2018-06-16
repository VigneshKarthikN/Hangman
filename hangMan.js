var s=0,i=0,f=0;
var can,c,yy,y;
var len=0;
var b = {
    word1:['h', 'e','l','p','o'],
    word2:['a', 'b','c','d','e'],
    word3:['f', 'e','l','p','o'],
    word4:['g', 'e','l','p','o'],
    word5:['i', 'e','l','p','o'],    
};
//var a = ['h', 'e','l','p','o',b.length];
window.onload = function load(){
    var x = Math.round(Math.random()*10)%5;
    checkWord(x);
            
    console.log(x);
    // switch(x)
    // {
    //     case 0: checkWord1(x);
    //             break;
    //     case 1: checkWord2(x);
    //            break;
    //     case 2: checkWord3(x);
    //             break;
    //     case 3: checkWord4(x);
    //             break;
    //     case 4: checkWord5(x);
    //            break;
    // }
}


if(a[5] == 0)
    z.onclick = null;

function checkLetter(z){
    //  var x = document.getElementById("ques").value;
    //  a[5] -= 1;
    if(isAlpha(z))
    { 
     var xcan = document.querySelector("#h");
     var xc = xcan.getContext('2d');
     //xc.='red';
     xc.textAlign="center";
     xc.font="25px Georgia";
     a[0] = a[0].toUpperCase(a[0]); 
     xc.fillText(a[0],10,26);
     a[0] = 0;
     show(x);
     console.log(a);
     z.onclick = null;
     }
 }
 function writeLetter(xc,z){
    // var xcan = document.querySelector("#h");
    //  var xc = xcan.getContext('2d');
    //  //xc.='red';
     xc.textAlign="center";
     xc.font="25px Georgia";
     z = z.toUpperCase(z); 
     xc.fillText(z,10,26);
     show(x);
     console.log(a);
     z.onclick = null;
 }

 function checke(z){
    var x = document.getElementById("ques2").value;
    a[5] -= 1;
    if(isAlpha(a[1]) )
    {
    var xcan = document.querySelector("#e");
    var xc = xcan.getContext('2d');
    xc.font="25px Georgia";
     a[1] = a[1].toUpperCase(a[1]); 
    xc.textAlign="centre"; 
    xc.fillText(a[1],10,26);
    a[1] = 0;
    show(x);
    console.log(a);
    z.onclick = null;
    }
 }

 function checkl1(z){
    var x = document.getElementById("ques3").value;
    if(isAlpha(a[2]) || isAlpha(a[3]) )
    {
    if(f==0){
    a[5] -= 1;
    var xcan = document.querySelector("#l1");
    var xc = xcan.getContext('2d');
    xc.font="25px Georgia";
     a[2] = a[2].toUpperCase(a[2]); 
    xc.textAlign="centre"; 
    xc.fillText(a[2],10,26);
    a[2] = 0;
    f++;}
    if(f==1){
        var xcan = document.querySelector("#l2");
     var xc = xcan.getContext('2d');
     xc.font="25px Georgia";
     a[3] = a[3].toUpperCase(a[3]); 
     xc.textAlign="centre"; 
     xc.fillText(a[3],10,26);
     a[3] = 0;
     a[5] -= 1;
     f++;
    }
        z.onclick = null;
   show(x);
    console.log(a);
}
 }
        
 function checko(z)
 {
    var x = document.getElementById("ques5").value;
    if(isAlpha(a[4]) )
    {
    var xcan = document.querySelector("#o");
    var xc = xcan.getContext('2d');
    xc.font="25px Georgia";
     a[4] = a[4].toUpperCase(a[4]); 
    xc.textAlign="centre"; 
    xc.fillText(a[4],10,26);
    a[4] = 0;
    a[5] -= 1;
    show(x);
    console.log(a);
    z.onclick = null;
    }
 }
 function isAlpha(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.match(letters))
     {
      return true;
     }
   else
     {
     alert("message");
     return false;
     }
  }
  
          
 function check6(z){
        i++;
        forward(z,i);
 }
           
// function show(x){        
//     var y1 = document.querySelector("#a");
//     if(a[5] == 0){
//     y.clearRect(0,0,yy.width,yy.height);
//     y.font="25px Arial";
//     y.fillText("GAME OVER, YOU WIN !!",00,50);}
//  }
//  window.onload = function set(){
//     can = document.querySelector("#can");
//     c = can.getContext('2d');
//     yy = document.querySelector("#yy");
//     y = yy.getContext('2d');
    
// }
// function clearField(){
//     document.getElementById("ques").value="";
// }
// function drawRect1(a,b,len,bre){
//     c.fillStyle="red";
//     c.fillRect(a,b,len,bre);
// }

// function drawCircle(a,b){
//     c.strokeStyle="white";
//     c.beginPath();
//     c.arc(a,b,35,0,2*Math.PI);
//     c.stroke();
    
// }

// function drawRect2(a,b,len,bre){
//     c.moveTo(a,b);
//     c.lineTo(a+len,b+bre);
//     c.stroke();
// }



// function forward(z,i){
//     z.onclick = null;
    
//         //f=1;
//     y.clearRect(0,0,10,50);
//     var h = document.querySelector("#a");
    
//     switch(i)
//     {
//     case 1: drawCircle(127,91.5);
//             break;
//     case 2: drawRect2(127,125,0,100);
//             break;
//     case 3: drawRect2(127,137,60,22);
//             break;
//     case 4: drawRect2(127,137,-60,22);  
//             break;
//     case 5: drawRect2(124,224,-45,38);
//             break;
//     case 6: drawRect2(130,224,45,38);
//             break;
//     case 7: drawRect1(15,275,100,15);
//             drawRect1(30,20,15,270);
//             drawRect1(30,20,150,15);
//             drawRect1(120,25,15,30);
//             for(var d=0;d<a.length;d++)
//             a[d] = 0;
//     }  
    
//     if(i < 7){
//         y.clearRect(0,0,yy.width,yy.height);
//         y.font = "27px Arial";
//         y.fillText("NO OF ATTEMPTS : " + (7-i),5,50);
//      }

        
//     else{
//         y.clearRect(0,0,yy.width,yy.height);
//         y.font="30px Arial";
//         y.fillText("YOU LOST",10,50);
//         a.splice(0,a.length)}
// }
       
