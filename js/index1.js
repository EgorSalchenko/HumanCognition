const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', function() {
  const element = document.getElementById('small');
  element.scrollIntoView({ behavior: 'smooth' });
});

