let newHeading = document.getElementById("myHeading");
    newHeading.textContent = "Welcome to DOM Manipulation!";
    newHeading.style.color = "blue";
    newHeading.style.fontSize = "24px";
    console.log(newHeading);
    let paragraph = document.getElementsByClassName("myParagraph");
    paragraph[0].innerHTML = "<strong>This is the first paragraph.</strong>";//indexing new content at 0 index
    paragraph[1].textContent = "This is the second paragraph.";
    paragraph[0].style.color = "red";
    paragraph[1].style.color = "green";
    paragraph[0].style.fontSize = "16px";
    let listItems = document.getElementsByTagName("li");
    for(let i=0; i<listItems.length; i++){
        listItems[i].style.fontSize = "18px";
        listItems[i].style.color = "purple";
    }
