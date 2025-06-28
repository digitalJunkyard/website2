// Bounce effect on buttons on hover
document.querySelectorAll('.topnav .button').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.animate(
      [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-8px)' },
        { transform: 'translateY(0)' },
      ],
      { duration: 400, easing: 'ease-out' }
    );
  });
});

// Confetti burst on clicking any link inside a .col
function createConfetti(x, y) {
  const colors = ['#FF3B30', '#FFD60A', '#007AFF', '#32D74B', '#FF2D55'];
  const confettiCount = 30;
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = x + 'px';
  container.style.top = y + 'px';
  container.style.pointerEvents = 'none';
  container.style.zIndex = 9999;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = '8px';
    confetti.style.height = '8px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = '50%';
    confetti.style.left = '0px';
    confetti.style.top = '0px';
    confetti.style.opacity = 1;
    confetti.style.transform = `translate(0, 0) rotate(0deg)`;
    container.appendChild(confetti);

    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 100 + 50;
    const duration = 1000 + Math.random() * 500;

    confetti.animate(
      [
        { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px) rotate(720deg)`, opacity: 0 }
      ],
      {
        duration,
        easing: 'ease-out',
        fill: 'forwards',
      }
    );
  }

  document.body.appendChild(container);

  setTimeout(() => {
    container.remove();
  }, 1500);
}

document.querySelectorAll('.col a').forEach(link => {
  link.addEventListener('click', (e) => {
    const rect = e.target.getBoundingClientRect();
    createConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
  });
});
