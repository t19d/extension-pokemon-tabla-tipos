import types from "./pokemon-types/types.js";
import { handleCheckboxChange } from "./handle-type.js";

document.addEventListener("DOMContentLoaded", async function () {
	updateListCheckbox();
});

function updateListCheckbox() {
	const listTypesCheckbox = document.getElementById("types");
	listTypesCheckbox.innerHTML = "";

	types.forEach((type) => {
		const li = document.createElement("li");
		li.innerHTML = `<label><input type="checkbox" name="types" value="${type.name}"> ${type.name}</label>`;

		// add listener checked
		const checkbox = li.querySelector("input[type='checkbox']");
		checkbox.addEventListener("change", handleCheckboxChange);

		listTypesCheckbox.appendChild(li);
	});
}
