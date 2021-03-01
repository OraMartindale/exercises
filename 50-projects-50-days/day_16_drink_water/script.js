const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

const highLightCups = index => {
  if (smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) {
    index--;
  }

  smallCups.forEach((cup, i) => {
    if (i <= index) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
};

const updateBigCup = () => {
  const numberOfFullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (numberOfFullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${numberOfFullCups / totalCups * 330}px`;
    percentage.innerText = `${numberOfFullCups / totalCups * 100}%`;
  }

  if (numberOfFullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * numberOfFullCups / 1000)}L`;
  }
};

smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => highLightCups(index));
});

updateBigCup();
