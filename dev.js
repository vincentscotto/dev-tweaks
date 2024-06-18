console.log(
	"%cDev Dox Tweaks loaded",
	"color: yellow; font-weight: bold; background-color: blue;padding: 10px;margin: 2px;"
);




// util: find text and give it a class

function findAndApplyClassByText(textToFind, classNames) {
	const allElements = document.getElementsByTagName('*');
	for (let i = 0; i < allElements.length; i++) {
		const element = allElements[i];

		if (element.textContent.trim() === textToFind) {
			if (Array.isArray(classNames)) {
				element.classList.add(...classNames);
			} else {
				element.classList.add(classNames);
			}
		}
	}
}
/*
USAGE:
	single:
	findAndApplyClassByText('Some Text', 'single-class');

	multiple classes:
	findAndApplyClassByText('Some Other Text', ['class1', 'class2', 'class3']);
*/


// util: create an element and have it do some things

function createElement(elementType, text, classNames, href, newTab, position, targetElement) {
	var element = document.createElement(elementType);

	if (text) {
		element.innerText = text;
	}

	if (classNames) {
		if (Array.isArray(classNames)) {
			element.className = classNames.join(' ');
		} else {
			element.className = classNames;
		}
	}

	if (elementType === "a" && href) {
		element.href = href;
	}

	if (newTab) {
		element.target = "_blank";
	}

	if (targetElement && (position === "before" || position === "after")) {
		if (position === "before") {
			targetElement.parentNode.insertBefore(element, targetElement);
		} else {
			targetElement.parentNode.insertBefore(element, targetElement.nextSibling);
		}
	} else {
		document.body.appendChild(element);
	}

	return element;
}









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
	// sections[2].style.display = "none";
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
