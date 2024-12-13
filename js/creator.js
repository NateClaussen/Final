let pokemonCard = new Pokemon({});

let currentEvoImgName = "";
let currentMainImgName = "";

const FpokemonName = document.getElementById("pokeName");
const FpokemonStage = document.getElementById("pokeStage");
const FpokemonStageImg = document.getElementById("pokeStageImgFile");
const FpokemonMainImg = document.getElementById("pokeMainImgFile");
const FpokemonType = document.getElementById("pokeType");
const FpokemonHealth = document.getElementById("hpNum");
const FpokemonStatString = document.getElementById("PokeStatString");
const pokeAttackList = document.getElementById("PokeAttackList");
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
		document.getElementById("AttackName").value = "";
		document.getElementById("AttackDmg").value = "";
		updatePokemon();
		updateCard();
	}
}

function removeAttack() {
	for (let i = 0; i < pokeAttackList.options.length; i++) {
		if (pokeAttackList.options[i].selected) {
			pokeAttackList.remove(i);
			updatePokemon();
			updateCard();
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
	let pokemonStage = FpokemonStage.value;
	let pokemonType = FpokemonType.value;
	let pokemonHealth = FpokemonHealth.value;
	let pokemonStatString = FpokemonStatString.value;
	let pokemonWeakness = FpokemonWeakness.value;
	let pokemonResistance = FpokemonResistance.value;
	let pokemonFullDesc = FpokemonFullDesc.value;

	//#region PokeAttacks
	//Get all of the attacks that the user has inputted
	const pokeAttacks = [];
	for (const option of pokeAttackList.options) {
		pokeAttacks.push(JSON.parse(option.value));
	}
	//#endregion
	//#region Evo and EvoImg
	if (pokemonStage == "basic") {
		FpokemonStageImg.disabled = true;
		FpokemonStageImg.value = "";
		currentEvoImgName = "";
		pokemonCard.EvoImg = null;
	} else {
		FpokemonStageImg.disabled = false;
		const evoImgFile = document.getElementById("pokeStageImgFile").files[0];
		const evoReader = new FileReader();

		evoReader.addEventListener(
			"load",
			() => {
				if (currentEvoImgName != evoImgFile.name) {
					pokemonCard.EvoImg = evoReader.result;
					currentEvoImgName = evoImgFile.name;
					updateCard();
				}
			},
			false
		);
		if (evoImgFile) {
			evoReader.readAsDataURL(evoImgFile);
		} else {
			pokemonCard.EvoImg = "images/Default-Stage.png";
		}
	}
	//#endregion

	//#region MainImage
	const mainImgFile = document.getElementById("pokeMainImgFile").files[0];
	const mainReader = new FileReader();

	mainReader.addEventListener(
		"load",
		() => {
			if (currentMainImgName != mainImgFile.name) {
				pokemonCard.MainImg = mainReader.result;
				currentMainImgName = mainImgFile.name;
				updateCard();
				console.log("Main Image Updated");
				console.log(localStorage.getItem("PokeCount"), "From creator");
			}
		},
		false
	);
	if (mainImgFile) {
		mainReader.readAsDataURL(mainImgFile);
	} else {
		pokemonCard.MainImg = "images/default-image.jpg";
	}
	//#endregion

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

	//Append the card to the output
	outputDiv.innerHTML = "";
	outputDiv.appendChild(pokemonCard.getCard());
	//If you want to make it scroll to the top. I have found this is kind of annoying...
	// if (window.innerWidth >= 992) {
	// 	document.documentElement.scrollTop = 0;
	// }
}

document.getElementById("submitBtn").addEventListener("click", function (e) {
	e.preventDefault();
	updatePokemon();
	updateCard();

	let pokeJson = JSON.stringify(pokemonCard);
	localStorage.setItem("most-recent-card", pokeJson);
	//localStorage.removeItem("SavedPokedex");
	const savedPokedex = JSON.parse(localStorage.getItem("SavedPokedex"));
	if (savedPokedex) {
		savedPokedex.push(pokeJson);
		localStorage.setItem("SavedPokedex", JSON.stringify(savedPokedex));
	} else {
		let newPokedex = [];
		newPokedex.push(pokeJson);
		localStorage.setItem("SavedPokedex", JSON.stringify(newPokedex));
	}

	const a = document.createElement("a");
	a.target = "_blank";
	a.href = "newCard.html";
	a.click();
});

document.getElementById("pokeForm").addEventListener("change", function (e) {
	updatePokemon();
	updateCard();
});

updatePokemon();
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
