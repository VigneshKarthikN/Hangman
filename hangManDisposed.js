var s=0,i=0,count,flag=0;
var can,c;
var b = ['h','e','l','l','o'];
var a = ['h','e','l','l','o',b.length];
//var y = document.querySelector("#a");
//alert(a[5]);
 function check(z){
     count = 0;
     flag = 0;
     var x = document.querySelector("#ques").value;

     for( var j=0;j<a.length;j++)
     {
         if(x == a[j])
         {
           count = count + 1;
           window.onload = function setData(){
               var s = document.querySelector();
           }
           //a[j] = null;
           a[j] = 0;
           flag = 1;
           
        //    a[5] -= count;
        //    console.log(a);
         }
        }   
         

     a[5] -= count;
     console.log(a);
         if((flag === 0) && (a[5] != 0))
         {
                i++;
                forward(i);            
         }
         //x="";
     
         var y = document.querySelector("#a");
         if(a[5] === 0)
            y.innerHTML = "game over <br> you won!!!!!!!!";
        if((i < 7) && (a[5] != 0))
             y.innerHTML += x + " found "+ count + "times <br>" ;
        }

 
//alert(a.length);
 window.onload = function set(){
    can = document.querySelector("#can");
    c = can.getContext('2d');
}

function drawrect1(a,b){
    c.fillStyle="white";
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
    c.fillStyle="red";
    c.translate(a,b);
    c.beginPath();
    c.arc(a,b,35,0,2*Math.PI);
    c.fill();
    
}

function drawrect5(a,b){
    c.translate(a,b);
    c.fillRect(a,b,25,100);
}

function drawrect6(a,b){
    c.translate(a,b);
    c.fillRect(a,b,50,20);
}


function drawrect7(a,b){
    c.translate(a,b);
    c.fillRect(a,b,50,20);
}

function drawrect8(a,b){
    c.translate(a,b);
    c.fillRect(a,b,50,20);
}

function drawrect9(a,b){
    c.translate(a,b);
    c.fillRect(a,b,50,20);
}

function forward(i){
    switch(i)
    {
    case 1: drawrect1(15,10);
            drawrect2(-5,125);
            drawrect3(10,-60);
            drawrect4(60,-25);
            break;
    case 2: drawCircle(34,17);
            break;
    case 3: drawrect5(10.5,26.3);
            break;
    case 4: drawrect6(18.3,20);
            break;
    case 5: drawrect7(-29.5,10);  
            break;
    case 6: drawrect8(-14.7,39.5);
            break;
    case 7: drawrect9(31.3,19.7);
          //a[0] = 0;
          var h = document.querySelector("#a");
          h.innerHTML = "you lost";
    }
}
       
