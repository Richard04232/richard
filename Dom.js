//1. js Dom
// Dom (document object model) is a local application programming
// interface that is used toadd interactivity or to manipulate html document.


document.getElementById
document.getElementsByClassName
document.getElementsByTagName
document.querySelector
document.querySelectorAll



//let text = document.getElementById("first")
//console.log(text);

let fs = document.getElementsByClassName("con")
console.log(fs)

let text2 =document.querySelector("#first")
console.log(text2);

let all =document.querySelectorAll(".bg")
console.log(all)


//styling html element using Dom

text2.style .color ="red"
text2.style .fontSize ="70px"
text2.style .backgroundColor ="blue"

text2.innerHTML = "moses"

//js event

let click = document.querySelector(".bt")

click.onclick = function(){
    console.log("nigeria")
}

click.onclick =function(){
    text2.innerHTML ="Richard"
    text2.style.color = "yellow"
    text2.style.fontSize ="70px"
    text2.style.backgroundColor ="red"
}
function change(){
    text2.innerHTML ="Rooney"
    text2.style.color = "green"
    text2.style.fontSize ="70px"
    text2.style.backgroundColor ="black"
}