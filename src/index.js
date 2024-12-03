import { loadHero } from "../src/js/hero.js";
import { loadAboutus } from "../src/js/aboutUs.js";
import { fetchAPI } from "../src/js/apiFetch.js";
import { loadListing } from "../src/js/listing.js";
import { onClickLogIn } from "./js/modal.js"; // Import the modal function
import { loadContact } from "./js/contact.js"; // Import the modal function

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    content.appendChild(loadHero());

    const dirHome = document.getElementById("bloom");
    dirHome.addEventListener("click", (event) => {
        event.preventDefault(); 
        content.innerHTML = ""; 
        content.appendChild(loadHero());
    });

    const aboutUsLink = document.getElementById("aboutus-menu-link");
    aboutUsLink.addEventListener("click", (event) => {
        event.preventDefault(); 
        content.innerHTML = ""; 
        content.appendChild(loadAboutus()); 
    });

    const shopLink = document.getElementById("shop-menu-link");
    shopLink.addEventListener("click", (event) => {
        event.preventDefault(); 
        content.innerHTML = ""; 
        content.appendChild(loadListing());
        fetchAPI();
    });


    const contactLInk = document.getElementById("contact-menu-link");
    contactLInk.addEventListener("click", (event) =>{
        event.preventDefault();
        content.innerHTML="";
        content.appendChild(loadContact());

    })

    onClickLogIn();
});