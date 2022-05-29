const style = document.querySelector('#stylesheet')
const input = document.querySelector('.input')

function changeBg(color) {
	style.innerHTML = `:root{--bgColor:#${color};}`
}

document.addEventListener('keydown', (e) => {
	if (e.key == 'Enter') {
		inputValue = input.value.split('#')
		inputValue.length === 2
			? changeBg(inputValue[1])
			: changeBg(inputValue[0])
		return
	}
})
