const typesDamages = {
	steel: {
		to: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
			],
			2: [
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			0.5: [
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
			],
		},
		from: {
			0: [
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
			],
			1: [
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
			],
			2: [
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
			],
			0.5: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
		},
	},
	rock: {
		to: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
			],
			0.5: [
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
			],
		},
		from: {
			0: [],
			1: [
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
			],
			0.5: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
			],
		},
	},
	grass: {
		to: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
			],
			0.5: [
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
			],
		},
		from: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
			],
			0.5: [
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
			],
		},
	},
	ground: {
		to: {
			0: [
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
			],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
			],
			0.5: [
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
			],
		},
		from: {
			0: [
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
			],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
			],
			0.5: [
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
			],
		},
	},
	normal: {
		to: {
			0: [
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
			],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [],
			0.5: [
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
			],
		},
		from: {
			0: [
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
			],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
			],
			0.5: [],
		},
	},
	flying: {
		to: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
			],
			0.5: [
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
			],
		},
		from: {
			0: [
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
			],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
			],
			0.5: [
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
			],
		},
	},
	bug: {
		to: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
			],
			2: [
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
			],
			0.5: [
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
		},
		from: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
			],
			0.5: [
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
			],
		},
	},
	ghost: {
		to: {
			0: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
			],
			1: [
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
			],
			0.5: [
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
			],
		},
		from: {
			0: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
			],
			1: [
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
			],
			0.5: [
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
			],
		},
	},
	fighting: {
		to: {
			0: [
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
			],
			1: [
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
			],
			2: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
			],
			0.5: [
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
		},
		from: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
			],
			2: [
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			0.5: [
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
			],
		},
	},
	electric: {
		to: {
			0: [
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
			],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
			],
			0.5: [
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
			],
		},
		from: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
			],
			0.5: [
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
			],
		},
	},
	water: {
		to: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
			],
			0.5: [
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
			],
		},
		from: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
			],
			0.5: [
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
			],
		},
	},
	fairy: {
		to: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
			],
			0.5: [
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
			],
		},
		from: {
			0: [
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
			],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
			],
			0.5: [
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
			],
		},
	},
	dark: {
		to: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
			],
			2: [
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
			],
			0.5: [
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
		},
		from: {
			0: [
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
			],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
			],
			2: [
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			0.5: [
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
			],
		},
	},
	ice: {
		to: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
			],
			0.5: [
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
			],
		},
		from: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
			],
			0.5: [
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
			],
		},
	},
	fire: {
		to: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
			],
			0.5: [
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
			],
		},
		from: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
			],
			2: [
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
			],
			0.5: [
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
		},
	},
	dragon: {
		to: {
			0: [
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
			],
			2: [
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
			],
			0.5: [
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
			],
		},
		from: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
			],
			2: [
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			0.5: [
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
			],
		},
	},
	psychic: {
		to: {
			0: [
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
			],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
			],
			0.5: [
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
			],
		},
		from: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			2: [
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
			],
			0.5: [
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
			],
		},
	},
	poison: {
		to: {
			0: [
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
			],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
			],
			2: [
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
			0.5: [
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
			],
		},
		from: {
			0: [],
			1: [
				{
					name: "normal",
					url: "https://pokeapi.co/api/v2/type/1/",
				},
				{
					name: "flying",
					url: "https://pokeapi.co/api/v2/type/3/",
				},
				{
					name: "rock",
					url: "https://pokeapi.co/api/v2/type/6/",
				},
				{
					name: "ghost",
					url: "https://pokeapi.co/api/v2/type/8/",
				},
				{
					name: "steel",
					url: "https://pokeapi.co/api/v2/type/9/",
				},
				{
					name: "fire",
					url: "https://pokeapi.co/api/v2/type/10/",
				},
				{
					name: "water",
					url: "https://pokeapi.co/api/v2/type/11/",
				},
				{
					name: "electric",
					url: "https://pokeapi.co/api/v2/type/13/",
				},
				{
					name: "ice",
					url: "https://pokeapi.co/api/v2/type/15/",
				},
				{
					name: "dragon",
					url: "https://pokeapi.co/api/v2/type/16/",
				},
				{
					name: "dark",
					url: "https://pokeapi.co/api/v2/type/17/",
				},
			],
			2: [
				{
					name: "ground",
					url: "https://pokeapi.co/api/v2/type/5/",
				},
				{
					name: "psychic",
					url: "https://pokeapi.co/api/v2/type/14/",
				},
			],
			0.5: [
				{
					name: "fighting",
					url: "https://pokeapi.co/api/v2/type/2/",
				},
				{
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/",
				},
				{
					name: "bug",
					url: "https://pokeapi.co/api/v2/type/7/",
				},
				{
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/",
				},
				{
					name: "fairy",
					url: "https://pokeapi.co/api/v2/type/18/",
				},
			],
		},
	},
};

export default typesDamages;
