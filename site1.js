document.addEventListener("DOMContentLoaded", function(){

    const btn = document.querySelector(".btn");
    

    const popup = document.getElementById("popup");
    const close = document.querySelector(".close");
    document.body.style.overflow = "hidden";
    document.body.style.overflow = "auto";

    btn.addEventListener("click", function(e){
        e.preventDefault();
        popup.style.display = "flex";
    
    setTimeout(()=> {popup.classList.add("show");},10);
        });
    close.addEventListener("click", function(){
        popup.classList.remove("show"); 
        setTimeout(()=> {popup.style.display = "none"}, 300);
    });
    const form = document.querySelector("form");
const success = document.getElementById("success-message");

form.addEventListener("submit", function(){
    success.style.display = "block";

    setTimeout(() => {
        success.style.display = "none";
    }, 3000);
});

});


const texts = ["''Le futur du leadership étudiant commence ici''",
        "''Rejoignez-nous pour façonner l'avenir du leadership étudiant.''",
        "''Ensemble, nous pouvons faire une différence.''"];
let index = 0;

setInterval(() => {
    index = (index + 1) % texts.length;
    document.getElementById("dynamic-text").textContent = texts[index];
}, 5000);




const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    let valid = true;

    const email = document.querySelector("input[name='email']");
    const phone = document.querySelector("#phone");

    document.querySelectorAll(".error").forEach(el => el.remove());

    // EMAIL
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email.value)){
        showError(email, "Email invalide");
        valid = false;
    }

    // TELEPHONE
    const phoneRegex = /^[0-9]{9}$/;
    if(!phoneRegex.test(phone.value)){
        showError(phone, "Numéro invalide");
        valid = false;
    }

    if(!valid){
        e.preventDefault();
        return;
    }

});

const input = document.querySelector("#phone");
window.intlTelInput(input, {
    initialCountry: "cd",
    separateDialCode: true,
    // Cette ligne est la clé :
    dropdownContainer: document.body 

    autoPlaceholder: "aggressive"
});





