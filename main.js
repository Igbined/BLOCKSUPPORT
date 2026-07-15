// Estimator
const slider = document.getElementById('size-slider');
const sizeVal = document.getElementById('size-value');
const estTime = document.getElementById('est-time');
const successRate = document.getElementById('success-rate');

if (slider && sizeVal && estTime && successRate) {
  slider.addEventListener('input', () => {
    let val = parseInt(slider.value);
    if (val < 30) {
      sizeVal.textContent = "Low";
    } else if (val < 70) {
      sizeVal.textContent = "Medium";
    } else {
      sizeVal.textContent = "High";
    }

    const minutes = Math.max(5, Math.round(val / 3));
    estTime.textContent = `~${minutes} min`;

    let success = Math.max(85, 98 - Math.floor(val / 4));
    successRate.textContent = success + '%';
  });
}

function startDemo() {
  alert("✅ Demo Mode\n\nThis would start your blockchain support request in a real service.");
}

// Scroll Animations
function handleScroll() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.85) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
  handleScroll();
  const heroContent = document.getElementById('hero-content');
  if (heroContent) heroContent.classList.add('visible');
});

document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
  alert("Mobile navigation would appear here.");
});

