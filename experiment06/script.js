function changeHeading() {
  const val = document.getElementById("userInput").value;
  if (val) document.getElementById("heading").textContent = val;
}
function changeBg() {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}
function changeFontSize() {
  const h = document.getElementById("heading");
  h.style.fontSize = (parseInt(window.getComputedStyle(h).fontSize) + 4) + "px";
}
function togglePara() {
  const p = document.getElementById("para");
  p.style.display = p.style.display === "none" ? "block" : "none";
}
function resetPage() {
  document.getElementById("heading").textContent = "Original Heading";
  document.getElementById("heading").style.fontSize = "";
  document.body.style.backgroundColor = "";
  document.getElementById("para").style.display = "block";
  document.getElementById("userInput").value = "";
}
