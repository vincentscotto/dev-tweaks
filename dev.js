console.log(
	"%cDev Dox Tweaks loaded",
	"color: yellow; font-weight: bold; background-color: blue;padding: 10px;margin: 2px;"
);

const body = document.querySelector("body");

// program previews
if (body.contains(document.getElementById("programs_show"))) {
	let cards = document.getElementsByClassName("card");

	// jump to top
	for (var i = 0; i < cards.length; i++) {
		var heading = cards[i].querySelector("h3");

		if (heading && heading.textContent.includes("Previews")) {
			heading.setAttribute("id", "previews");

			var button = document.createElement("button");
			button.classList.add("top");
			button.innerText = "UP";
			button.setAttribute("href", "#previews");
			cards[i].appendChild(button);

			button.addEventListener("click", function () {
				document
					.querySelector("#previews")
					.scrollIntoView({ behavior: "smooth" });
			});

			// add create button at the bottom too
			let createPreviewButton = document.querySelectorAll(
				".card-title-area-actions"
			);

			let newPreviewBtn = createPreviewButton[1].cloneNode(true);
			newPreviewBtn.id = "preview-dev-tweak";
			body.prepend(newPreviewBtn);
		}
	}

	// hide the waves on the program page
	/*

		THIS APPEARS TO BE BROKEN BECAUSE THEY SWITCHED SOMETHING

	*/
	let sections = document.querySelectorAll(".section");
	sections[2].style.display = "none";
}

// select web checkbox on preview creation
if (body.contains(document.getElementById("previews_new"))) {
	var webCheckbox = (document.getElementById(
		"preview_platform_web"
	).checked = true);
}

//  hk grotesk
// let divs = document.querySelectorAll("div");
// divs.forEach(function (div) {
// 	if (
// 		div.contains(document.querySelector(".scope-is-font-family-is-hk-grotesk"))
// 	) {
// 	}
// });
