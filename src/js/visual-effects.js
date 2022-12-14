// this creates canvas on the page. We are supposed to call it only once.
const confetti = new JSConfetti();
const container = document.querySelector('.fireworks');
const fireworks = new Fireworks.Fireworks(container, { /* options */ });

