const link = document.querySelectorAll(".link")
for (i = 0; i < link.length; i++) {
	link[i].addEventListener("click", navIconButton)
}

function navIconButton() {
	document.body.classList.toggle("opennav")
	document.body.classList.toggle("changeicons")
}