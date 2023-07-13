const button = document.querySelector("#burger-menu");
const nav = document.querySelector("#nav");

button.addEventListener("click", () => {
	const currentState = button.getAttribute("aria-expanded");

	if (!currentState || currentState === "false") {
		button.setAttribute("aria-expanded", "true");
		nav.classList.add("menu-mobile");
	} else {
		button.setAttribute("aria-expanded", "false");
		nav.classList.remove("menu-mobile");
	}
});
