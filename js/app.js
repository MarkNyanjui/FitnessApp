// ApexFitness Script Engine
document.addEventListener("DOMContentLoaded", () => {
    
    const targetButtons = document.querySelectorAll(".filter-btn");
    const functionalCards = document.querySelectorAll(".filter-item");

    if (targetButtons.length > 0 && functionalCards.length > 0) {
        targetButtons.forEach(button => {
            button.addEventListener("click", () => {
                
                // 1. Reset button active states
                targetButtons.forEach(btn => {
                    btn.classList.remove("btn-dark", "active");
                    btn.classList.add("btn-outline-dark");
                });
                
                // 2. Highlight selected button
                button.classList.remove("btn-outline-dark");
                button.classList.add("btn-dark", "active");

                // 3. Toggle card display
                const processingFilter = button.getAttribute("data-filter");

                functionalCards.forEach(card => {
                    const trackingCategory = card.getAttribute("data-category");
                    
                    if (processingFilter === "all" || processingFilter === trackingCategory) {
                        card.style.display = "block"; // Show the card
                    } else {
                        card.style.display = "none";  // Hide the card
                    }
                });
            });
        });
    }
});

// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactGymForm");
    const statusBanner = document.getElementById("formFeedback");

    if (contactForm && statusBanner) {
        contactForm.addEventListener("submit", (event) => {
            // Stop the form from submitting
            event.preventDefault();

            // Get form values
            const nameTxt = document.getElementById("userName").value.trim();
            const emailTxt = document.getElementById("userEmail").value.trim();
            const selectedTrack = document.getElementById("classSelect").value;
            const messageTxt = document.getElementById("userMsg").value.trim();

            // Clear previous message
            statusBanner.className = "alert mb-4 p-3 small d-none";
            statusBanner.innerText = "";

            // Check name
            const namePattern = /^[a-zA-Z\s]{2,50}$/;
            if (!nameTxt) {
                statusBanner.innerText = "✕ Please enter your full name.";
                statusBanner.className = "alert alert-danger mb-4 p-3 small";
                return;
            } else if (!namePattern.test(nameTxt)) {
                statusBanner.innerText = "✕ Name must contain only letters and be at least 2 characters.";
                statusBanner.className = "alert alert-danger mb-4 p-3 small";
                return;
            }

            // Check email
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailTxt) {
                statusBanner.innerText = "✕ Please enter your email address.";
                statusBanner.className = "alert alert-danger mb-4 p-3 small";
                return;
            } else if (!emailPattern.test(emailTxt)) {
                statusBanner.innerText = "✕ Please enter a valid email address.";
                statusBanner.className = "alert alert-danger mb-4 p-3 small";
                return;
            }

            // Check class selection
            if (!selectedTrack) {
                statusBanner.innerText = "✕ Please select a class.";
                statusBanner.className = "alert alert-danger mb-4 p-3 small";
                return;
            }

            // Check message
            if (!messageTxt) {
                statusBanner.innerText = "✕ Please enter your message.";
                statusBanner.className = "alert alert-danger mb-4 p-3 small";
                return;
            } else if (messageTxt.length < 10) {
                statusBanner.innerText = "✕ Message must be at least 10 characters.";
                statusBanner.className = "alert alert-danger mb-4 p-3 small";
                return;
            }

            // Show success message
            statusBanner.innerText = `✓ Thank you, ${nameTxt}! Your message has been sent.`;
            statusBanner.className = "alert alert-success mb-4 p-3 small fw-bold text-success";

            // Clear the form
            contactForm.reset();
        });
    }
});