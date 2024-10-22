let currentCardIndex = 0;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

// Function to show the card based on the current index
function showCard(index) {
    cards.forEach((card, i) => {
        card.style.display = (i === index) ? 'block' : 'none'; // Show only the current card
    });
}

// Next button event listener
document.getElementById('nextBtn').addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % totalCards; // Increment index and loop back if at end
    showCard(currentCardIndex); // Show the current card
});

// Previous button event listener
document.getElementById('prevBtn').addEventListener('click', () => {
    currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards; // Decrement index and loop back if at start
    showCard(currentCardIndex); // Show the current card
});

// Show the first card on initial load
showCard(currentCardIndex);
