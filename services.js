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

document.getElementById('submitReview').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const reviewText = event.target.reviewText.value;
    const reviewerName = event.target.reviewerName.value;
    const rating = event.target.rating.value;
    const currentDate = new Date().toLocaleDateString(); // Get current date

    // Create a new review element
    const newReview = document.createElement('div');
    newReview.classList.add('review');

    // Add HTML content for the new review
    newReview.innerHTML = `
        <div class="review-header">
            <div class="stars">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>
            <cite>- ${reviewerName}</cite>
        </div>
        <p>"${reviewText}"</p>
        <span class="review-date">Posted on: ${currentDate}</span>
    `;

    // Append the new review to the reviews container
    document.querySelector('.reviews-container').appendChild(newReview);

    // Reset the form
    event.target.reset();
});
