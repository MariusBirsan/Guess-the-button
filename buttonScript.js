function randomButton() {
	return Math.floor(Math.random() * 3 + 1)
}
let chosenButton = randomButton()
function choise(val) {
	let pickedButton = document.getElementById("getMessage")
	if (val === chosenButton) {
		pickedButton.innerHTML = 'That is the correct choise'
		chosenButton = randomButton()
	} else {
		pickedButton.innerHTML = 'Please try again!'
	}
}
