const pokeAttackList = document.getElementById("PokeAttackList");

function addAttack() {
	let attackName = document.getElementById("AttackName").value;
	let attackDmg = document.getElementById("AttackDmg").value;
	if (attackName != "" && attackDmg != "") {
		let attack = { Name: attackName, Damage: attackDmg };
		const option = document.createElement("option");
		option.value = JSON.stringify(attack);
		option.textContent = `${attackName}: ${attackDmg}`;
		pokeAttackList.appendChild(option);
	}
}

function removeAttack() {
	for (let i = 0; i < pokeAttackList.options.length; i++) {
		if (pokeAttackList.options[i].selected) {
			pokeAttackList.remove(i);
		}
	}
}

document.getElementById("AddBtn").addEventListener("click", function (e) {
	e.preventDefault();
	addAttack();
});

document.getElementById("RemoveBtn").addEventListener("click", function (e) {
	e.preventDefault();
	removeAttack();
});

function updateCard() {
	const outputDiv = document.getElementById("OutputDiv");

	const pokemonName = document.getElementById("pokeName").value;
	const pokemonStage = document.getElementById("pokeStage").value;
	let pokemonStageImg = document.getElementById("pokeStageImgFile").value;
	const pokemonMainImg = document.getElementById("pokeMainImgFile").value;
	const pokemonType = document.getElementById("pokeType").value;
	const pokemonHealth = document.getElementById("hpNum").value;
	const pokemonStatString = document.getElementById("PokeStatString").value;
	const pokemonWeakness = document.getElementById("pokeWeakness").value;
	const pokemonResistance = document.getElementById("pokeRes").value;
	const pokemonFullDesc = document.getElementById("pokeFullDesc").value;

	if (pokemonStage == "basic") {
		pokemonStageImg = null;
	} else {
		pokemonStageImg = "images/Tepig.png";
	}

	const pokeAttacks = [];
	for (const option of pokeAttackList.options) {
		pokeAttacks.push(JSON.parse(option.value));
	}

	let newPokemon = new Pokemon({
		Name: pokemonName,
		Stage: pokemonStage,
		StageImg: pokemonStageImg,
		TypeImg: getTypePicture(pokemonType),
		MainImg: "images/Pignite.jpg",
		Hp: pokemonHealth,
		StatsString: pokemonStatString,
		Attacks: pokeAttacks,
		Weakness: pokemonWeakness,
		Resistance: pokemonResistance,
		FullDescription: pokemonFullDesc,
		Type: pokemonType,
	});

	//Append the card to the output
	outputDiv.innerHTML = "";
	outputDiv.appendChild(newPokemon.getCard());
	if (window.innerWidth >= 992) {
		document.documentElement.scrollTop = 0;
	}
}

document.getElementById("submitBtn").addEventListener("click", function (e) {
	e.preventDefault();
	updateCard();
});

function getTypePicture(type) {
	switch (type) {
		case "bug":
			return "images/types/BugTypeLogo.png";
		case "dark":
			return "images/types/DarkTypeLogo.png";
		case "dragon":
			return "images/types/DragonTypeLogo.png";
		case "electric":
			return "images/types/ElectricTypeLogo.png";
		case "fairy":
			return "images/types/FairyTypeLogo.png";
		case "fighting":
			return "images/types/FightingTypeLogo.png";
		case "fire":
			return "images/types/FireTypeLogo.png";
		case "flying":
			return "images/types/FlyingTypeLogo.png";
		case "ghost":
			return "images/types/GhostTypeLogo.png";
		case "grass":
			return "images/types/GrassTypeLogo.png";
		case "ground":
			return "images/types/GroundTypeLogo.png";
		case "ice":
			return "images/types/IceTypeLogo.png";
		case "normal":
			return "images/types/NormalTypeLogo.png";
		case "poison":
			return "images/types/PoisonTypeLogo.png";
		case "psychic":
			return "images/types/PsychicTypeLogo.png";
		case "rock":
			return "images/types/RockTypeLogo.png";
		case "steel":
			return "images/types/SteelTypeLogo.png";
		case "water":
			return "images/types/WaterTypeLogo.png";
		default:
			return "";
	}
}

updateCard();

document.getElementById("pokeForm").addEventListener("click", function (e) {
	//e.preventDefault();
	updateCard();
});
