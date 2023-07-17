const button = document.querySelector("#burger-menu");
const body = document.querySelector("body");
const nav = document.querySelector("#nav");

if (button != null) {
	button.addEventListener("click", () => {
		const currentState = button.getAttribute("aria-expanded");

		if (!currentState || currentState === "false") {
			button.setAttribute("aria-expanded", "true");
			nav.classList.add("menu-mobile");
			body.classList.add("no-scroll");
		} else {
			button.setAttribute("aria-expanded", "false");
			nav.classList.remove("menu-mobile");
			body.classList.remove("no-scroll");
		}
	});
} else {
	console.error("Burger Menu do not exist");
}
