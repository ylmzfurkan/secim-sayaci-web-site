
  const form = document.querySelector('form');
  const result = document.querySelector('.result');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstRound = form.elements.firstRound.value;
    const secondRound = form.elements.secondRound.value;

    result.innerHTML = `İlk turda ${firstRound} adayına, ikinci turda ${secondRound} adayına oy vereceksiniz.`;
  });

