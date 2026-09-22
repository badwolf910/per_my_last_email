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

  const catButton = document.getElementById('fetch-cat');
  const catImage = document.getElementById('cat-image');
  const catPlaceholder = document.querySelector('.cat-placeholder');
  const catCaption = document.getElementById('cat-caption');
  const catSource = document.getElementById('cat-source');

  if (catButton && catImage && catPlaceholder && catCaption && catSource) {
    catButton.addEventListener('click', async () => {
      catButton.disabled = true;
      catButton.textContent = 'Finding the right level of displeasure...';
      catPlaceholder.textContent = 'Consulting the office oracle.';
      catPlaceholder.hidden = false;
      catImage.hidden = true;
      catSource.hidden = true;

      try {
        const response = await fetch('https://meme-api.com/gimme/grumpycat');
        if (!response.ok) {
          throw new Error('Could not fetch a meme.');
        }

        const meme = await response.json();
        catImage.src = meme.url;
        catImage.alt = meme.title || 'A grumpy cat meme';
        catCaption.textContent = meme.title || 'A small, judgmental pause.';
        catSource.href = meme.postLink || meme.url;
        catSource.hidden = false;
        catImage.hidden = false;
        catPlaceholder.hidden = true;
      } catch (error) {
        catPlaceholder.textContent = 'The mood could not be fetched. Honestly, that feels on brand.';
      } finally {
        catButton.disabled = false;
        catButton.textContent = 'Fetch another cat';
      }
    });
  }
});
