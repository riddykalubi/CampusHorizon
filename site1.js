document.addEventListener("DOMContentLoaded", function() {
    // --- 1. GESTION DE LA POPUP ---
    const btn = document.querySelector(".btn");
    const popup = document.getElementById("popup");
    const close = document.querySelector(".close");

    if (btn && popup) {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            popup.style.display = "flex";
            setTimeout(() => { popup.classList.add("show"); }, 10);
        });
    }

    if (close) {
        close.addEventListener("click", function() {
            popup.classList.remove("show");
            setTimeout(() => { popup.style.display = "none"; }, 300);
        });
    }

    // --- 2. INITIALISATION DU TÉLÉPHONE ---
    const phoneInput = document.querySelector("#phone");
    if (phoneInput) {
        window.intlTelInput(phoneInput, {
            initialCountry: "cd",
            separateDialCode: true,
             
            autoPlaceholder: "aggressive"
        });
    }

    // --- 3. TEXTE DYNAMIQUE ---
    const texts = [
        "''Le futur du leadership étudiant commence ici''",
        "''Rejoignez-nous pour façonner l'avenir du leadership étudiant.''",
        "''Ensemble, nous pouvons faire une différence.''"
    ];
    let index = 0;
    const dynamicText = document.getElementById("dynamic-text");
    if (dynamicText) {
        setInterval(() => {
            index = (index + 1) % texts.length;
            dynamicText.textContent = texts[index];
        }, 5000);
    }

    // --- 4. FORMULAIRE ---
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            const success = document.getElementById("success-message");
            if (success) {
                success.style.display = "block";
                setTimeout(() => { success.style.display = "none"; }, 3000);
            }
        });
    }
});

const phoneInput = document.querySelector("#phone");
if (phoneInput) {
    window.intlTelInput(phoneInput, {
        initialCountry: "cd",
        separateDialCode: true, // Affiche le code à côté du drapeau
        // Cette option aide sur mobile pour que la liste soit bien centrée
        fixedCenter: true, 
        autoPlaceholder: "aggressive",
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18/build/js/utils.js"
    });
}
