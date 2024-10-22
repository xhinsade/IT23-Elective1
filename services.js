let currentIndex = 0; // Track the currently displayed card
const cards = document.querySelectorAll('.card'); // Select all cards
const totalCards = cards.length;

// Initially hide all cards except the first one
cards.forEach((card, index) => {
    card.style.display = index === currentIndex ? 'block' : 'none';
});

// Show the next card
document.getElementById('nextBtn').addEventListener('click', () => {
    cards[currentIndex].style.display = 'none'; // Hide current card
    currentIndex = (currentIndex + 1) % totalCards; // Move to the next card
    cards[currentIndex].style.display = 'block'; // Show next card
});

// Show the previous card
document.getElementById('prevBtn').addEventListener('click', () => {
    cards[currentIndex].style.display = 'none'; // Hide current card
    currentIndex = (currentIndex - 1 + totalCards) % totalCards; // Move to the previous card
    cards[currentIndex].style.display = 'block'; // Show previous card
});
