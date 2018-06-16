var s=0,i=0,f=0;
var can,c,yy,y;
var b = ['h', 'e','l','l','o'];
var a = ['h', 'e','l','l','o',b.length];
if(a[5] == 0)
    z.onclick = null;

 function checkh(z){
     var x = document.getElementById("ques1").value;
     a[5] -= 1;
    if(isAlpha(a[0]) )
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
    //if(a[5]!=0){
        //f=1;
        i++;
  
        forward(z,i);
 
 }
           

        
 function show(x){        
var y1 = document.querySelector("#a");
if(a[5] == 0){
y.clearRect(0,0,yy.width,yy.height);
y.font="30px Arial";
y.fillText("game over you won!!",10,50);}
 }
 window.onload = function set(){
    can = document.querySelector("#can");
    c = can.getContext('2d');
    yy = document.querySelector("#yy");
    y = yy.getContext('2d');
    
}
function clearField(){
    document.getElementById("ques").value="";
}
function drawrect1(a,b){
    c.fillStyle="red";
    c.translate(a,b);
    c.fillRect(a,b,25,250);
}

function drawrect2(a,b){
    c.translate(a,b);
    c.fillRect(a,b,150,20)
}

function drawrect3(a,b){
    c.translate(a,b);
    c.fillRect(a,b,200,15);
}

function drawrect4(a,b){
    c.translate(a,b);
    c.fillRect(a,b,15,40);
}

function drawCircle(a,b){
    c.strokeStyle="white";
    c.translate(a,b);
    c.beginPath();
    c.arc(a,b,35,0,2*Math.PI);
    c.stroke();
    
}

function drawrect5(a,b){
    c.translate(a,b);
    c.moveTo(a,b);
    c.lineTo(a,b+80);
    c.stroke();
}

function drawrect7(a,b){
    c.translate(a,b);
    c.moveTo(a,b);
    c.lineTo(a+50,b+35);
    c.stroke();
}


function drawrect6(a,b){
    c.translate(a,b);
    c.moveTo(a,b);
    c.lineTo(a-50,b+35);
    c.stroke(); 
}

function drawrect8(a,b){
    c.translate(a,b);
    c.moveTo(a,b);
    c.lineTo(a-35,b+35);
    c.stroke();}

function drawrect9(a,b){
    c.translate(a,b);
    c.moveTo(a,b);
    c.lineTo(a+35,b+35);
    c.stroke();
}

function forward(z,i){
    z.onclick = null;
    
        //f=1;
    y.clearRect(0,0,10,50);
    var h = document.querySelector("#a");
    
    switch(i)
    {
    case 1: drawrect1(15,10);
            drawrect2(-5,125);
            drawrect3(10,-60);
            drawrect4(60,-25);
            break;
    case 2: //y.clearRect(0,0,10,50);
            drawCircle(34,25);
            break;
    case 3: drawrect5(16.8,30.3);
            break;
    case 4: drawrect6(8.5,20);
            break;
    case 5: drawrect7(3.5,10);  
            break;
    case 6: drawrect8(1.7,39.5);
            break;
    case 7: drawrect9(1.7,19.7);
         for(var d=0;d<a.length;d++)
            a[d] = 0;
          console.log(a);
    }  
    
    if(i < 7){
        y.clearRect(0,0,yy.width,yy.height);
        y.font = "30px Arial";
        //y.clearField();
        //delay();
        y.fillText("no of attempts " + (7-i),10,50);
        //delay();
        //y.clearField(); 
    }

        
    else{
        y.clearRect(0,0,yy.width,yy.height);
        y.font="30px Arial";
        y.fillText("YOU LOST",10,50);}
}
       
