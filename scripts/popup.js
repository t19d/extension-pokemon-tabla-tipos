import types from "./pokemon-types/types.js";
const selectedTypes = {};

document.addEventListener("DOMContentLoaded", async function () {
	updateListCheckbox();
});

async function searchDamage(type) {
	let damage;
	await fetch(`https://pokeapi.co/api/v2/type/${type}`)
		.then((response) => response.json())
		.then(({ damage_relations }) => {
			damage = refineDamageData(damage_relations);
		})
		.catch((error) => console.error("Error fetching types:", error));

	return damage;
}

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

function refineDamageData(damage_relations) {
	// x1DamageTo son todos los tipos que no aparecen en damage_relations.double_damage_to, damage_relations.half_damage_to ni en damage_relations.no_damage_to.
	const x1DamageTo = types.filter(
		(type) =>
			!damage_relations.double_damage_to.some(
				(t) => t.name === type.name
			) &&
			!damage_relations.half_damage_to.some(
				(t) => t.name === type.name
			) &&
			!damage_relations.no_damage_to.some((t) => t.name === type.name)
	);
	const damageTo = {
		2: damage_relations.double_damage_to,
		1: x1DamageTo,
		0.5: damage_relations.half_damage_to,
		0: damage_relations.no_damage_to,
	};

	// x1DamageFrom son todos los tipos que no aparecen en damage_relations.double_damage_from, damage_relations.half_damage_from ni en damage_relations.no_damage_from.
	const x1DamageFrom = types.filter(
		(type) =>
			!damage_relations.double_damage_from.some(
				(t) => t.name === type.name
			) &&
			!damage_relations.half_damage_from.some(
				(t) => t.name === type.name
			) &&
			!damage_relations.no_damage_from.some((t) => t.name === type.name)
	);

	const damageFrom = {
		2: damage_relations.double_damage_from,
		1: x1DamageFrom,
		0.5: damage_relations.half_damage_from,
		0: damage_relations.no_damage_from,
	};

	return {
		to: damageTo,
		from: damageFrom,
	};
}

function updateDamageList() {
	const damageFromContainer = document.getElementById("from");
	damageFromContainer.innerHTML = "";
	const damageToContainer = document.getElementById("to");
	damageToContainer.innerHTML = "";

	const totalDamage = calculateDamage();
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
		const titleList = document.createElement("h3");
		titleList.innerText = `${type}`;
		titleList.className = `bg-type bg-color-${type}`;
		damageToContainer.appendChild(titleList);
		const damageToList = document.createElement("ul");
		damageToContainer.appendChild(damageToList);

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

async function handleCheckboxChange(event) {
	const type = event.target.value;

	if (Object.keys(selectedTypes).length >= 2 && !selectedTypes[type]) {
		event.target.checked = false;
		return;
	}

	if (event.target.checked) {
		const damage = await searchDamage(type);
		selectedTypes[type] = damage;
	} else {
		delete selectedTypes[type];
	}

	updateDamageList();
}

function calculateDamage() {
	const damages = Object.values(selectedTypes);
	const totalDamage = {
		from: {},
		to: {},
	};

	// damage.from
	let initialX0DamageFrom = [];
	let initialX0_5DamageFrom = [];
	let x0_25DamageFrom = [];
	let initialX1DamageFrom = [];
	let initialX2DamageFrom = [];
	let x4DamageFrom = [];

	// #region data in arrays
	damages.forEach((damage) => {
		Object.entries(damage.from).forEach(([key, value]) => {
			if (key === "0") {
				initialX0DamageFrom.push(...value);
			} else if (key === "0.5") {
				initialX0_5DamageFrom.push(...value);
			} else if (key === "1") {
				initialX1DamageFrom.push(...value);
			} else if (key === "2") {
				initialX2DamageFrom.push(...value);
			}
		});
	});
	// #endregion

	// Delete duplicates of objects, take the first one
	let x0DamageFrom = removeTypesDuplicates([...initialX0DamageFrom]);
	let x1DamageFrom = removeTypesDuplicates([...initialX1DamageFrom]);

	// #region x0_25
	// If any type is duplicated in x0_5DamageXX, add to x0_25DamageXX
	x0_25DamageFrom = getTypesDuplicates([...initialX0_5DamageFrom]);
	let x0_5DamageFrom = removeTypesDuplicates([...initialX0_5DamageFrom]);
	x0_5DamageFrom = x0_5DamageFrom.filter((type) => {
		return !x0_25DamageFrom.some((t) => type.name === t.name);
	});
	// #endregion

	// #region x4
	// If any type is duplicated in x2DamageXX, add to x4DamageXX
	x4DamageFrom = getTypesDuplicates([...initialX2DamageFrom]);
	let x2DamageFrom = removeTypesDuplicates([...initialX2DamageFrom]);
	x2DamageFrom = x2DamageFrom.filter((type) => {
		return !x4DamageFrom.some((t) => type.name === t.name);
	});
	// #endregion

	// #region x0
	// If any type is in x0DamageXX, remove from others arrays that type
	x0_5DamageFrom = x0_5DamageFrom.filter((type) => {
		return !x0DamageFrom.some((t) => type.name === t.name);
	});
	x1DamageFrom = x1DamageFrom.filter((type) => {
		return !x0DamageFrom.some((t) => type.name === t.name);
	});
	x2DamageFrom = x2DamageFrom.filter((type) => {
		return !x0DamageFrom.some((t) => type.name === t.name);
	});
	// #endregion

	// #region put x1 (if are in x0_5 and x2)
	// If any type is in x0_5DamageXX and x2DamageXX, add to x1DamageXX and remove from x0_5DamageXX and x2DamageXX
	const x1DamageFromTemp = [];
	x0_5DamageFrom.forEach((type) => {
		if (x2DamageFrom.some((t) => type.name === t.name)) {
			x1DamageFromTemp.push(type);
		}
	});
	x0_5DamageFrom = x0_5DamageFrom.filter(
		(type) => !x1DamageFromTemp.some((t) => type.name === t.name)
	);
	x2DamageFrom = x2DamageFrom.filter(
		(type) => !x1DamageFromTemp.some((t) => type.name === t.name)
	);
	x1DamageFrom = [...new Set([...x1DamageFrom, ...x1DamageFromTemp])];
	// #endregion

	// #region remove x1 if duplicate in x2 or x0_5
	// If any type is in (x0_5DamageXX or x2DamageXX) and x1DamageXX, remove from x1DamageXX
	x1DamageFrom = x1DamageFrom.filter(
		(type) =>
			!x0_5DamageFrom.some((t) => type.name === t.name) &&
			!x2DamageFrom.some((t) => type.name === t.name)
	);
	// #endregion

	totalDamage.from.total = {
		4: x4DamageFrom,
		2: x2DamageFrom,
		1: x1DamageFrom,
		0.5: x0_5DamageFrom,
		0.25: x0_25DamageFrom,
		0: x0DamageFrom,
	};

	for (const type in selectedTypes) {
		totalDamage.to[type] = selectedTypes[type].to;
	}

	return totalDamage;
}

function removeTypesDuplicates(array) {
	const uniqueNames = [...new Set(array.map((obj) => obj.name))];

	const uniqueObjects = uniqueNames.map((name) => {
		return array.find((obj) => obj.name === name);
	});

	return uniqueObjects;
}

function getTypesDuplicates(array) {
	const duplicatedItems = [];
	let i = 0;
	let arrLenght = array.length;

	while (i < arrLenght) {
		const item = array[i];

		for (let j = i + 1; j < arrLenght; j++) {
			if (item.name === array[j].name) {
				duplicatedItems.push(item);
				array.splice(j, 1);
				arrLenght--;
			}
		}

		i++;
	}

	return duplicatedItems;
}
