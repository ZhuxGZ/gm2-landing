const buttons = document.querySelectorAll("button");
const nav = document.querySelector("#nav");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const currentState = button.getAttribute("data-state");

		if (!currentState || currentState === "closed") {
			button.setAttribute("data-state", "opened");
			button.setAttribute("aria-expanded", "true");
			nav.classList.add("menu-mobile");
		} else {
			button.setAttribute("data-state", "closed");
			button.setAttribute("aria-expanded", "false");
			nav.classList.remove("menu-mobile");
		}
	});
});
