//dark mode

const darkModeButton = document.getElementById("dark-mode-btn");

darkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});



const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const greeting = document.getElementById("greeting");

contactForm.addEventListener("submit", function (event) {

    
    event.preventDefault();

    
    const visitorName = nameInput.value.trim();

   
    greeting.textContent = "Hello, " + visitorName + "! Thanks for visiting my page.";

});

