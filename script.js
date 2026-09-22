document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const form = document.querySelector('.newsletter-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = form.querySelector('button');
      const input = form.querySelector('input');

      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Subscribed';
        button.disabled = true;

        if (input) {
          input.value = '';
        }

        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 1800);
      }
    });
  }
});
