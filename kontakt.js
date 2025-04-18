document.getElementById('submit-button').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name && email && message) {
        document.getElementById('success-message').style.display = 'block'; // "Xabar yuborildi" ko'rsatish
        document.getElementById('success-message').textContent = 'Xabar yuborildi!';
        // Formni tozalash
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Iltimos, barcha maydonlarni to‘ldiring!');
    }
});

function updateProgress() {
    const progress = document.getElementById('progress');
    let width = 0;
    const interval = setInterval(() => {
        if (width < 100) {
            width += 5;
            progress.style.width = width + '%';
        } else {
            clearInterval(interval);
        }
    }, 100);
}

// Call the function after a button click
document.getElementById('submit-button').addEventListener('click', updateProgress);

document.getElementById('add-review').addEventListener('click', () => {
    const reviewText = document.getElementById('review-input').value.trim();
    if (reviewText) {
        const reviewContainer = document.getElementById('reviews-container');
        const newReview = document.createElement('p');
        newReview.textContent = reviewText;
        reviewContainer.appendChild(newReview);
        document.getElementById('review-input').value = ''; // Clear input
    } else {
        alert('Fikr yozing!');
    }
});