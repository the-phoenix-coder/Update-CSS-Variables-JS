const inputs = document.querySelectorAll('input')

function update() {
	const data = this.dataset.size || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + data)
}

inputs.forEach(input => input.addEventListener('change', update))
inputs.forEach(input => input.addEventListener('mousemove', update))