let  a1='0'
let  a2='0'

let  v1='0'
let  v2='0'
function assign(){

    a1= document.getElementById("t1")

    a2 = document.getElementById("t2")



    v1= document.getElementById("1")

    v2= document.getElementById("2")

}






function onclickk(clicked){
assign()
switch(clicked) {
    case "t1":
        a1.style.color="yellow"
        a2.style.color="white"
        v2.style.display="none"
        v1.style.display="flex"
       

       break;
    case "t2":
        a2.style.color="yellow"
        a1.style.color="white"
        v2.style.display="flex"
        v1.style.display="none"
       

      break;
   
  }
}


  