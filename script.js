document.addEventListener('DOMContentLoaded', function () {
    // Matrix explode animation delay
    document.querySelectorAll('.explode-text span').forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.1}s`;
    });
  
    // ALT key to play music
    document.addEventListener('keydown', function (event) {
      if (event.key === "Alt") {
        const audio = document.getElementById('bgmusic');
        audio.play().then(() => {
          console.log('Audio started with Alt key');
        }).catch(err => {
          console.error('Autoplay error:', err);
        });
      }
    });
  });
  