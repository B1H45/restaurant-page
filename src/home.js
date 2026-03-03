import heroImgSrc from "./imgs/hero.jpeg";

const loadHome = function() {
    console.log("THINGTHINGTHING");

    const heroTitle = document.createElement("h1");
    const heroBody = document.createElement("p");
    const heroLeft = document.createElement("div");
    const heroRight = document.createElement("div");
    const heroImg = document.createElement("img");
    const heroContainer = document.createElement("div");

    heroTitle.textContent = "Welcome to the restaurant!";
    heroBody.textContent = "Your body text here.";
    heroImg.src = "your-image.jpg";

    heroLeft.appendChild(heroTitle);
    heroLeft.appendChild(heroBody);
    heroRight.appendChild(heroImg);
    heroContainer.appendChild(heroLeft);
    heroContainer.appendChild(heroRight);

    heroContainer.classList.add("hero-container");
    heroImg.classList.add("hero-img");
    heroImg.src = heroImgSrc;

    document.querySelector("#content").appendChild(heroContainer);

}

export {loadHome};