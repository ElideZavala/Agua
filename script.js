const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCUP();

smallCups.forEach((cup, index) => {
	cup.addEventListener('click', () => destacarCopa(index));
});

function destacarCopa(index) {
	if (smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) {
		index--;
	}

	smallCups.forEach((cup, index2) => {
		if (index2 <= index) {
			cup.classList.add('full');
		} else {
			cup.classList.remove('full');
		}
	});

	updateBigCUP();
}

function updateBigCUP() {
	const fullCups = document.querySelectorAll('.cup-small.full').length;

	const totalCups = smallCups.length;

	if (fullCups === 0) {
		porcentage.style.visibility = 'hidden'
	}

}