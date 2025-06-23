
// function goToStep(stepId) {
//   const scenes = document.querySelectorAll('.story-scene');
//   scenes.forEach(scene => {
//     scene.classList.remove('active');
//     scene.classList.add('hidden');
//   });
//   const target = document.getElementById(stepId);
//   target.classList.remove('hidden');
//   target.classList.add('active');
// }
function goToStep(stepId) {
  const current = document.querySelector('.story-scene.active');
  const next = document.getElementById(stepId);

  if (!next || current === next) return;

  // Fade out current step
  current.classList.remove('fade-in');
  current.classList.add('fade-out');

  setTimeout(() => {
    current.classList.remove('active', 'fade-out');
    current.classList.add('hidden');

    // Fade in next step
    next.classList.remove('hidden');
    next.classList.add('active', 'fade-in');
  }, 500); // Duration should match CSS fade-out time
}
