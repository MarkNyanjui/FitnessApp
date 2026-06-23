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