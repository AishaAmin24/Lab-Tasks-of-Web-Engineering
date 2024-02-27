const myP1 = document.getElementById("p1");
//alert(myP1.innerText);
//myP1.style.color ="red";
//myP1.innerText = "I am over the moon";
const myB1 = document.getElementById("b1");
myB1.innerText = "Button";
function SayHi() {
   const ball = document.createElement("div");
    ball.className = "ball";
   const cont =  document.getElementById("container");
   cont.appendChild(ball);
}

myB1.onclick = SayHi;