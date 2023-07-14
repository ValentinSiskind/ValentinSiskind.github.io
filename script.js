console.log(window.innerWidth)

const link = document.querySelectorAll(".link")
for (i = 0; i < link.length; i++) {
	link[i].addEventListener("click", navIconButton)
}

function navIconButton() {
	document.body.classList.toggle("opennav")
	document.body.classList.toggle("changeicons")
}

let activeIndex = 0;

const slides = document.getElementsByClassName("carouselcard");

const handleLeftClick = () => {
	const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

	const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
		nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

	currentSlide.dataset.status = "after";

	nextSlide.dataset.status = "becoming-active-from-before";

	setTimeout(() => {
		nextSlide.dataset.status = "active";
		activeIndex = nextIndex;
	});
}

const handleRightClick = () => {
	const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

	const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
		nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

	currentSlide.dataset.status = "before";

	nextSlide.dataset.status = "becoming-active-from-after";

	setTimeout(() => {
		nextSlide.dataset.status = "active";
		activeIndex = nextIndex;
	});
}