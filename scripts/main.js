let myImage = document.querySelector('img')

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src')
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.webp')
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName(){
    let myName = prompt('Please enter your name')
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla is cool, " + myName;
    }
}


let storedName = localStorage.getItem("name");

if (!storedName){
    setUserName()
} else {
    myHeading.textContent = "Mozilla is cool, " + storedName;
}