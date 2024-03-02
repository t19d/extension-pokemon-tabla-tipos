function calculateDamage(selectedTypes) {
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

export { calculateDamage };
