let heading=document.getElementById("heading");
let paragraph=document.getElementById("paragraph");
let input=document.getElementById("input");
let fontSize=16;
document.getElementById("changeHeading").addEventListener("click",function(){
    if (input.value !== "") {
        heading.textContent = input.value;
    }
});
document.getElementById("bgColorBtn").onclick=function(){
    document.body.style.backgroundColor="lightblue";
}
document.getElementById("fontSizeBtn").onclick=function(){
    fontSize += 2;
    paragraph.style.fontSize = fontSize + "px";
}
document.getElementById("colorBtn").onclick=function(){
    paragraph.style.color = "red";
}

document.getElementById("resetBtn").onclick=function(){
    document.body.style.backgroundColor="white";
    fontSize=16;
    paragraph.style.fontSize = fontSize + "px";
}
