canvas.addEventListener('touchstart', function(event) {
    event.preventDefault();
    startPainting();
  });
  
  canvas.addEventListener('touchend', function(event) {
    event.preventDefault();
    stopPainting();
  });
  
  canvas.addEventListener('touchmove', function(event) {
    event.preventDefault();
    paint(event.touches[0]);
  });
  