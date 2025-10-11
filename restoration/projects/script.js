const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlayImage');
const images = document.querySelectorAll('.image');

// When you click a thumbnail
images.forEach(img => {
  img.addEventListener('click', () => {
    overlayImage.src = img.src; // use the same image file
    overlay.style.display = 'flex';
  });
});

// When you click outside the expanded image, close overlay
overlay.addEventListener('click', (e) => {
  if (e.target !== overlayImage) { // only close if you clicked outside the image
    overlay.style.display = 'none';
    overlayImage.src = '';
  }
});
