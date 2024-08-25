const slider = document.querySelector('.slider');
const angle = document.querySelector('.angle');
const userText = document.querySelector('.user-text');

slider.addEventListener('input', () => {
	angle.style.transform = `rotate(${slider.value}deg)`;
	userText.textContent = `${slider.value} Degress`;
});
