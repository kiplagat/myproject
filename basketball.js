let scoreHome = 0;
let scoreGuest = 0;
function incrementHomeByOne(){
    scoreHome += 1
 document.getElementById("counter1").innerText = scoreHome
}
function incrementHomeByTwo(){
    scoreHome+= 2
 document.getElementById("counter1").innerText = scoreHome
}

function incrementHomeByThree(){
    scoreHome += 3
 document.getElementById("counter1").innerText = scoreHome
}

function incrementGuestByOne(){
    scoreGuest += 1
    document.getElementById("counter2").innerText = scoreGuest
   }
   function incrementGuestByTwo(){
    scoreGuest += 2
    document.getElementById("counter2").innerText = scoreGuest
   }
   
   function incrementGuestByThree(){
    scoreGuest += 3
    document.getElementById("counter2").innerText = scoreGuest
   }
   function scoreClear(){
    document.getElementById("counter1").innerText = 0
    document.getElementById("counter2").innerText = 0
    scoreHome = 0
    scoreGuest = 0

   }
