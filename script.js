document.addEventListener("DOMContentLoaded", function() {
    const consentPopup = document.getElementById("cookie-consent");
    const acceptButton = document.getElementById("accept-btn");

    // Log the localStorage status to see if consent was stored
    console.log("Cookie Consent Value:", localStorage.getItem("cookieConsent"));

    // Check if the user already accepted cookies
    if (!localStorage.getItem("cookieConsent")) {
        consentPopup.style.display = "flex"; // Show the popup if not accepted
        console.log("Showing cookie popup");
    } else {
        console.log("Cookie consent already given. Hiding popup.");
    }

    // Event listener for the Accept button
    acceptButton.addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "true"); // Store consent
        consentPopup.style.display = "none"; // Hide the popup
        console.log("Cookie consent accepted. Popup hidden.");
    });
});
