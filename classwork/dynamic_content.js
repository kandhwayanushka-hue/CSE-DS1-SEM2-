document.getElementById("changeTextBtn").addEventListener("click", function() {
    let newText = document.getElementById("userInput").value;
    if (newText !== "") {
        document.getElementById("mainHeading").innerText = newText;
    }
});

document.getElementById("bgColorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = "#f0e68c";
});

document.getElementById("fontSizeBtn").addEventListener("click", function() {
    let para = document.getElementById("paragraph");
    let currentSize = parseInt(window.getComputedStyle(para).fontSize);
    para.style.fontSize = (currentSize + 2) + "px";
});

document.getElementById("toggleBtn").addEventListener("click", function() {
    let para = document.getElementById("paragraph");
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
});

document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("mainHeading").innerText = "Welcome to JavaScript Lab";
    document.getElementById("userInput").value = "";
    document.body.style.backgroundColor = "#ffffff";
    document.getElementById("paragraph").style.fontSize = "16px";
    document.getElementById("paragraph").style.display = "block";
});
