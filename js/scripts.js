// constants for ids
const customNumber = document.getElementById("customNumber");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");
const myStudentId = document.getElementById("myStudentId");
// constants for query selector
const custColor = document.querySelector(".custColor");
const randColor = document.querySelector(".randColor");
// array for the paths to the image files
const imgNames = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg"
];

var imgAdded = false;
// function to change bg color from user input and add student id
function changeCustomColor() {
    myStudentId.textContent = "1217611";
    changeColor(customNumber.value);
}

// function to change bg color from random no.
function changeRandomColor() {
    changeColor(Math.floor(Math.random() * 100) + 1);
}
// function to change the background color based on a number
function changeColor(val) {
    let color = "red";
    if (val >= 0) color = "green";
    if (val >= 20) color = "blue";
    if (val >= 40) color = "orange";
    if (val >= 60) color = "purple";
    if (val >= 80) color = "yellow";
    if (val > 100) color = "red";
    document.body.style.backgroundColor = color;
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    // loops through and adds the options only if this is the first time clicking the select
    if (!imgAdded) {
        for (let i = 0; i < imgNames.length; i ++) {
            const imgOption = document.createElement("option");
            imgOption.value = imgNames[i];
            imgOption.innerHTML = imgNames[i];
            imageSelect.appendChild(imgOption);
        }
        imgAdded = true;
    }
}

// function to change image
function changeImage() {
    images.src = imageSelect.value;
}
// event listeners for on click event of buttons and select
custColor.addEventListener("click", changeCustomColor);
randColor.addEventListener("click", changeRandomColor);
// event listeners for on change event of select
imageSelect.addEventListener("change", changeImage);
imageSelect.addEventListener("pointerdown", addList);