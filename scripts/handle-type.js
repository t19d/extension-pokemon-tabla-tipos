import typesDamages from "./pokemon-types/types-damages.js";
import { calculateDamage } from "./calculate-damage.js";
const selectedTypes = {};

async function handleCheckboxChange(event) {
	const type = event.target.value;

	if (Object.keys(selectedTypes).length >= 2 && !selectedTypes[type]) {
		event.target.checked = false;
		return;
	}

	if (event.target.checked) {
		selectedTypes[type] = typesDamages[type];
	} else {
		delete selectedTypes[type];
	}

	updateDamageList();
}

function updateDamageList() {
	const damageFromContainer = document.getElementById("from");
	damageFromContainer.innerHTML = "";
	const damageToContainer = document.getElementById("to");
	damageToContainer.innerHTML = "";

	const totalDamage = calculateDamage(selectedTypes);
	const { from, to } = totalDamage;

	for (const type in from) {
		const damageFromList = document.createElement("ul");
		damageFromContainer.appendChild(damageFromList);
		Object.entries(from[type]).forEach(([key, value]) => {
			const li = document.createElement("li");
			li.className = `_${key.replace(".", "_")}`;
			let innerHTML = `<h3>x${key}</h3>`;
			innerHTML += "<div>";
			value.forEach((t) => {
				innerHTML += `<span class="bg-type bg-color-${t.name}">${t.name}</span>`;
			});
			innerHTML += "</div>";
			li.innerHTML = innerHTML;

			damageFromList.appendChild(li);
		});
	}

	for (const type in to) {
		const typeContainer = document.createElement("div");
		typeContainer.className = "type-container";
		damageToContainer.appendChild(typeContainer);
		const titleList = document.createElement("h3");
		titleList.innerText = `${type}`;
		titleList.className = `bg-type bg-color-${type}`;
		typeContainer.appendChild(titleList);
		const damageToList = document.createElement("ul");
		typeContainer.appendChild(damageToList);

		Object.entries(to[type]).forEach(([key, value]) => {
			const li = document.createElement("li");
			li.className = `_${key.replace(".", "_")}`;
			let innerHTML = `<h3>x${key}</h3>`;
			innerHTML += "<div>";
			value.forEach((t) => {
				innerHTML += `<span class="bg-type bg-color-${t.name}">${t.name}</span>`;
			});
			innerHTML += "</div>";
			li.innerHTML = innerHTML;

			damageToList.appendChild(li);
		});
	}
}

export { handleCheckboxChange };
