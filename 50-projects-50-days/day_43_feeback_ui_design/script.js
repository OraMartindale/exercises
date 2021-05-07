const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendButton = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', event => {
  const parent = event.target.parentNode;
  if (parent.classList.contains('rating')) {
    removeActive();
    parent.classList.add('active');
    selectedRating = event.target.nextElementSibling.innerHTML;
  }
});

sendButton.addEventListener('click', event => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br />
    <strong>Feedback: ${selectedRating}</strong>
    <p>
      We'll use your feedback to improve our customer support.
    </p>
  `;
});

const removeActive = () => {
  for (let i = 0, l = ratings.length; i < l; i++) {
    ratings[i].classList.remove('active');
  }
};
