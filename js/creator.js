let pokemonCard = new Pokemon();

const pokeAttackList = document.getElementById("PokeAttackList");
const FpokemonName = document.getElementById("pokeName");
const FpokemonStage = document.getElementById("pokeStage");
const FpokemonStageImg = document.getElementById("pokeStageImgFile");
const FpokemonMainImg = document.getElementById("pokeMainImgFile");
const FpokemonType = document.getElementById("pokeType");
const FpokemonHealth = document.getElementById("hpNum");
const FpokemonStatString = document.getElementById("PokeStatString");
const FpokemonWeakness = document.getElementById("pokeWeakness");
const FpokemonResistance = document.getElementById("pokeRes");
const FpokemonFullDesc = document.getElementById("pokeFullDesc");

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

function updatePokemon() {
	let pokemonName = FpokemonName.value;

	let pokemonType = FpokemonType.value;
	let pokemonHealth = FpokemonHealth.value;
	let pokemonStatString = FpokemonStatString.value;
	let pokemonWeakness = FpokemonWeakness.value;
	let pokemonResistance = FpokemonResistance.value;
	let pokemonFullDesc = FpokemonFullDesc.value;

	//Get all of the attacks that the user has inputted
	const pokeAttacks = [];
	for (const option of pokeAttackList.options) {
		pokeAttacks.push(JSON.parse(option.value));
	}

	//Update all of the stats
	pokemonCard.Name = pokemonName;
	pokemonCard.Stage = pokemonStage;
	pokemonCard.Type = pokemonType;
	pokemonCard.TypeImg = getTypePicture(pokemonType);
	pokemonCard.Hp = pokemonHealth;
	pokemonCard.StatsString = pokemonStatString;
	pokemonCard.Attacks = pokeAttacks;
	pokemonCard.Weakness = pokemonWeakness;
	pokemonCard.Resistance = pokemonResistance;
	pokemonCard.FullDescription = pokemonFullDesc;
}

function updateCard() {
	const outputDiv = document.getElementById("OutputDiv");

	//let pokemonStage = FpokemonStage.value;

	// if (pokemonStage == "basic") {
	// 	FpokemonStageImg = null;
	// } else {
	// 	FpokemonStageImg = "images/Default-Stage.png";
	// }

	// if (pokemonMainImg.files[0]) {
	// 	const reader = new FileReader();
	// 	const file = pokemonMainImg.files[0];

	// 	reader.addEventListener("load", () => {
	// 		FpokemonMainImg = reader.result;
	// 		console.log(reader.result);
	// 	});

	// 	reader.readAsDataURL(file);
	// } else {
	// 	FpokemonMainImg = "images/default-image.jpg";
	// }

	//Append the card to the output
	outputDiv.innerHTML = "";
	outputDiv.appendChild(pokemonCard.getCard());
	if (window.innerWidth >= 992) {
		document.documentElement.scrollTop = 0;
	}
}

document.getElementById("submitBtn").addEventListener("click", function (e) {
	e.preventDefault();
	updateCard();
});

document.getElementById("pokeForm").addEventListener("onchange", function (e) {
	//e.preventDefault();
	updatePokemon();
	updateCard();
});

updateCard();

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
