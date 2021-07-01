let  a1='0'
let  a2='0'
let  a3='0'
let  a4='0'


let  v1='0'
let  v2='0'
let  v3='0'
let  v4='0'

let avv='0'



function assign(){

    a1= document.getElementById("t1")
    a2 = document.getElementById("t2")
    a3= document.getElementById("t3")
    a4 = document.getElementById("t4")


    v1= document.getElementById("1")
    v2= document.getElementById("2")
    v3= document.getElementById("3")
    v4 = document.getElementById("4")
}



function menu(){
  document.getElementById("menu2").style.display="block"
document.getElementById("topics2").style.display="block"
document.getElementById("menu1").style.display="none"




document.getElementById("1").style.transform="translate(0px,150px)"
document.getElementById("codifyone").style.transform="translate(0px,150px)"



document.getElementById("2").style.transform="translate(0px,150px)"
document.getElementById("3").style.transform="translate(0px,150px)"
document.getElementById("4").style.transform="translate(0px,150px)"
}

function closey(){
  document.getElementById("menu1").style.display="block"
  document.getElementById("menu2").style.display="none"
document.getElementById("topics2").style.display="none"


document.getElementById("1").style.transform="translate(0px,0)"
document.getElementById("codifyone").style.transform="translate(0px,0)"
}


function onclickk(clicked){
assign()
switch(clicked) {
    case "t1":
    
        a1.style.color="#1F3044"
        v1.style.display="flex"
        
  

      a2.style.color="#EF0D50"
        v2.style.display="none"
       


    a3.style.color="#EF0D50"
    v3.style.display="none"
  



     a4.style.color="#EF0D50"
    v4.style.display="none"
   


       break;
       
       case "t2":
    
        a2.style.color="#1F3044"
        v2.style.display="flex"

      a1.style.color="#EF0D50"
        v1.style.display="none"
        a1.style.border="none"


    a3.style.color="#EF0D50"
    v3.style.display="none"
     a4.style.color="#EF0D50"
    v4.style.display="none"
break;
case "t3":
    
    a3.style.color="#1F3044"
    v3.style.display="flex"
  a1.style.color="#EF0D50"
    v1.style.display="none"
a2.style.color="#EF0D50"
v2.style.display="none"
 a4.style.color="#EF0D50"
v4.style.display="none"
break;
case "t4":
    
    a4.style.color="#1F3044"
    v4.style.display="flex"
  a1.style.color="#EF0D50"
    v1.style.display="none"
a2.style.color="#EF0D50"
v2.style.display="none"
 a3.style.color="#EF0D50"
v3.style.display="none"
break;
   
  }
}


  