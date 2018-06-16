var s=0,i=0,f=0;
var can,c;
var b = ['h', 'e','l','l','o'];
var a = ['h', 'e','l','l','o',b.length];

 function check(z){
     var x = document.getElementById("ques").value;
     console.log("x" + x + "z" + z);
     d = x.charAt(0).toLowerCase();
     {
        switch(d)
        {
            case a[0] :
              a[5] -= 1;
                var xcan = document.querySelector("#h");
                var xc = xcan.getContext('2d');
                xc.font="30px Georgia";
                xc.textAlign="centre"; 
                xc.fillText(x,10,26);
                a[0] = 0;
                // clearField();
                console.log(a);
                break;

            case a[1] : 
                a[5] -= 1;
                var xcan = document.querySelector("#e");
                var xc = xcan.getContext('2d');
                xc.font="30px Georgia";
                xc.textAlign="centre"; 
                xc.fillText(x,10,26);
                a[1] = 0;
                console.log(a);
                break;
        
            case a[2] :
                var xcan = document.querySelector("#l1");
                var xc = xcan.getContext('2d');
                xc.font="30px Georgia";
                xc.textAlign="centre"; 
                xc.fillText(x,10,26);
                a[2] = 0;
                a[5] -= 1;
                console.log(a);
               // break;
            case a[3] :
                var xcan = document.querySelector("#l2");
                var xc = xcan.getContext('2d');
                xc.font="30px Georgia";
                xc.textAlign="centre"; 
                xc.fillText(x,10,26);
                a[3] = 0;
                a[5] -= 1;
                console.log(a);
                break;
            case a[4] : 
                var xcan = document.querySelector("#o");
                var xc = xcan.getContext('2d');
                xc.font="30px Georgia";
                xc.textAlign="centre"; 
                xc.fillText(x,10,26);
                a[4] = 0;
                a[5] -= 1;
                console.log(a);
                break;
            default:
            if(a[5]!=0){
                f=1;
                i++;
                forward(i);}

        }     
        clearField();
    }
        
         
         var y = document.querySelector("#a");
         var y1 = document.querySelector("#ab");
         if(a[5] === 0)
            y.innerHTML = "game over <br> you won!!!!!!!!";
        if((i < 7) && (a[5] != 0) && (f != 1))
             y.innerHTML += x + " found <br>"
        }
;
 window.onload = function set(){
    can = document.querySelector("#can");
    c = can.getContext('2d');
    
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
    //c.fillRect(a,b,25,100);
}

function drawrect7(a,b){
    c.translate(a,b);
    c.moveTo(a,b);
    c.lineTo(a+50,b+35);
    c.stroke();
    //c.fillRect(a,b,50,20);
}


function drawrect6(a,b){
    c.translate(a,b);
    c.moveTo(a,b);
    c.lineTo(a-50,b+35);
    c.stroke();  //  c.fillRect(a,b,50,20);
}

function drawrect8(a,b){
    c.translate(a,b);
    c.moveTo(a,b);
    c.lineTo(a-35,b+35);
    c.stroke();
    //c.fillRect(a,b,50,20);
}

function drawrect9(a,b){
    c.translate(a,b);
    c.moveTo(a,b);
    c.lineTo(a+35,b+35);
    c.stroke();
    //c.fillRect(a,b,50,20);
}

function forward(i){
    f=1;
    switch(i)
    {
    case 1: drawrect1(15,10);
            drawrect2(-5,125);
            drawrect3(10,-60);
            drawrect4(60,-25);
            break;
    case 2: drawCircle(34,25);
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
          //a[0] = 0;
          var h = document.querySelector("#a");
          a.splice(0,a.length);
          h.innerHTML = "you lost";
    }
}
       
