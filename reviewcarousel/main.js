const prevBtn = document.querySelector('.prev'); 
const nextBtn = document.querySelector('.next'); 
const reviews = document.querySelectorAll('.review'); 

let currentIndex = 0;

function showReview(index) {

    reviews.forEach((review, i) => {
        if (i === index) {
            review.style.display = 'block'; 
        } else {
            review.style.display = 'none'; 
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % reviews.length; 
    showReview(currentIndex); 
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length; 
    showReview(currentIndex); 
});

showReview(currentIndex);
