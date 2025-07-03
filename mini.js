// This script will add confetti effect when the page loads
window.onload = function() {
  const body = document.body;
  const confettiColors = ['#ff66b2', '#ff99cc', '#ffccf2'];
  
  setInterval(() => {
    let confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.top = '0';
    confetti.style.left = `${Math.random() * window.innerWidth}px`;
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    body.appendChild(confetti);

    let fallDistance = window.innerHeight + 100;
    let fallTime = Math.random() * 3 + 2;

    confetti.animate([
      { transform: 'translateY(0)' },
      { transform: `translateY(${fallDistance}px)` }
    ], {
      duration: fallTime * 1000,
      easing: 'linear',
      fill: 'forwards'
    });

    // Remove confetti after animation ends
    setTimeout(() => {
      confetti.remove();
    }, fallTime * 1000);
  }, 100);
};
               
