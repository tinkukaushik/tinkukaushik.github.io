// script.js

// Data for buttons (can be fetched from backend in real scenario)
const buttonsData = [
  { text: 'Login', url: 'login.html' },
  { text: 'Register', url: 'register.html' }
];

// Function to create button element
function createButton(text, url) {
  const button = document.createElement('a');
  button.href = url;
  button.classList.add('btn');
  button.textContent = text;
  return button;
}

// Function to generate buttons
function generateButtons(data) {
  const buttonContainer = document.getElementById('button-container');
  data.forEach(button => {
    const buttonElement = createButton(button.text, button.url);
    buttonContainer.appendChild(buttonElement);
  });
}

// Generate buttons
generateButtons(buttonsData);









// Function to add review dynamically
function addReview(review) {
  const reviewsList = document.querySelector('.reviews-list');
  const li = document.createElement('li');
  li.textContent = `"${review}"`;
  reviewsList.appendChild(li);
}

// Example usage:
addReview("Excellent doctor, highly recommend!");
addReview("Great experience, very knowledgeable.");

