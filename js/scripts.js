document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.mdpl-start');
  const loadingMessage = document.querySelector('.loading');
  const resultado = document.querySelector('.resultado');

  function generateRandomNumber() {
    return Math.floor(Math.random() * (300 - 50 + 1)) + 50;
  }

  function animateLoadingMessage() {
    let dots = '';
    const intervalId = setInterval(() => {
      dots = dots.length < 3 ? dots + '.' : '';
      loadingMessage.textContent = 'Realizando análise' + dots;
    }, 500);
    return intervalId;
  }

  button.addEventListener('click', () => {
    button.style.display = 'none';

    let storedNumber = localStorage.getItem('frequencyNumber');
    if (!storedNumber) {
      storedNumber = generateRandomNumber();
      localStorage.setItem('frequencyNumber', storedNumber);
    }

    loadingMessage.style.display = 'block';
    const intervalId = animateLoadingMessage();

    setTimeout(() => {
      clearInterval(intervalId);
      loadingMessage.style.display = 'none';
      resultado.style.display = 'block';
      resultado.innerHTML = `<h3>Frequência cerebral estipulada:</h3><h2>${storedNumber}</h2>`;
    }, 10000);
  });
});