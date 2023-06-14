const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/dog.jpeg") {
        myImage.setAttribute("src", "images/me.jpeg");
    } else {
        myImage.setAttribute("src", "images/dog.jpeg");
    }
};