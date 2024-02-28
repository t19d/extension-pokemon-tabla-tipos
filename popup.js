const types = [];

document.addEventListener("DOMContentLoaded", async function () {
	const searchInput = document.getElementById("searchInput");
	const searchButton = document.getElementById("searchButton");

	await searchTypes();

	searchButton?.addEventListener("click", async function () {
		const type = searchInput.value.toLowerCase();
		await searchType(type);
	});
});

async function searchTypes() {
	await fetch("https://pokeapi.co/api/v2/type/")
		.then((response) => response.json())
		.then(({ results }) => {
			types.push(...results);
			updateDatalist();
		})
		.catch((error) => console.error("Error fetching types:", error));
}

async function searchType(type) {
	await fetch(`https://pokeapi.co/api/v2/type/${type}`)
		.then((response) => response.json())
		.then(({ damage_relations }) => {
			const damage = refineDamageData(damage_relations);
			updateDamageList(damage);
		})
		.catch((error) => console.error("Error fetching types:", error));
}

function updateDatalist() {
	const datalist = document.getElementById("datalist-types");
	datalist.innerHTML = "";

	types.forEach((type) => {
		const option = document.createElement("option");
		option.value = type.name;
		datalist.appendChild(option);
	});

	return datalist;
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

function updateDamageList(damage) {
	const damageFromList = document.getElementById("from");
	const damageToList = document.getElementById("to");
	damageFromList.innerHTML = "";
	damageToList.innerHTML = "";

	const { from, to } = damage;
	Object.entries(from).forEach(([key, value]) => {
		const li = document.createElement("li");
		li.textContent = `${key}x damage from: ${value
			.map((t) => t.name)
			.join(", ")}`;
		damageFromList.appendChild(li);
	});

	Object.entries(to).forEach(([key, value]) => {
		const li = document.createElement("li");
		li.textContent = `${key}x damage to: ${value
			.map((t) => t.name)
			.join(", ")}`;
		damageToList.appendChild(li);
	});
}
