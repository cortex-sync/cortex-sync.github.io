// Fetch the quotes file and display a random quote in the footer
fetch('../quotes.txt')
  .then(response => response.text())
  .then(text => {
    const quotes = text.split('\n').filter(quote => quote.trim() !== '');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('footer-quote').textContent = randomQuote;
  })
  .catch(err => console.error('Failed to load quotes:', err));
