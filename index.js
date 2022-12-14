var num1 = Math.floor(Math.random()*6+1);
var num2 = Math.floor(Math.random()*6+1);
let loc1="/images/dice"+num1+".png"
let loc2="/images/dice"+num2+".png"

document.querySelector(".img1").setAttribute("src",loc1)
document.querySelector(".img2").setAttribute("src",loc2)


