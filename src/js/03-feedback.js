import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

function saveFormData() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('input', throttle(saveFormData, 500));

window.addEventListener('DOMContentLoaded', () => {
  const storedFormData = localStorage.getItem('feedback-form-state');

  if (storedFormData) {
    const formData = JSON.parse(storedFormData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formData);

  localStorage.clear();
  emailInput.value = '';
  messageInput.value = '';
});