[{}, {}];

let Pokedex = document.getElementById("pokedex");

function createNewElement(name, attr, value) {
	let att = document.createElement(name);
	att.setAttribute(attr, value);
	return att;
}
function createNewElementTxt(name, attr, value, text) {
	let att = createNewElement(name, attr, value);
	att.textContent = text;
	return att;
}

class Pokemon {
	constructor(Name, attributes) {
		Pokemon.#count++;
		this.Name = Name ?? "";
		this.Stage = attributes.Stage ?? "Basic";
		this.EvoImg = attributes.StageImg ?? null; //in the "" I can put a default image path...
		this.TypeImg = attributes.TypeImg ?? "";
		this.Type = attributes.Type ?? "normal";
		this.Color = attributes.Color ?? "white";
		this.MainImg = attributes.MainImg ?? "";
		this.Hp = attributes.Hp ?? 0;
		this.StatsString = attributes.StatsString ?? "";
		this.Attacks = attributes.Attacks ?? [
			{
				Name: "Oops, No attacks",
				Damage: 0,
			},
		];
		this.Weakness = attributes.Weakness ?? 0;
		this.Resistance = attributes.Resistance ?? 0;
		this.FullDescription = attributes.FullDescription ?? "";
	}
	static #count = 0;

	getCard() {
		let pokeCard = createNewElement("div", "class", "pokeCard");
		this.Color = Pokemon.#getColor(this.Type);
		pokeCard.setAttribute("id", "pokeCard#" + Pokemon.#count);
		//#region TopOfCard
		let pokeCardTop = createNewElement("div", "class", "pokeCardTop");
		let pokeStageTxt = createNewElementTxt(
			"p",
			"class",
			"pokeStageTxt",
			this.Stage
		);
		let pokeEvoImgDiv;
		if (this.EvoImg) {
			pokeEvoImgDiv = createNewElement("div", "class", "pokeEvoImg");
			let pokeEvoImg = createNewElement("img", "src", this.EvoImg);
			pokeEvoImgDiv.appendChild(pokeEvoImg);
		}
		let pokeCardTitle = createNewElementTxt(
			"p",
			"class",
			"pokeCardTitle",
			this.Name
		);
		let pokeCardHealth = createNewElement("p", "class", "pokeCardHealth");
		let subHp = createNewElementTxt("sub", "class", "sub", "hp");
		// let HPP = createNewElementTxt("p", "class", "p", this.Hp);
		pokeCardHealth.appendChild(subHp);
		pokeCardHealth.innerHTML += this.Hp;
		// pokeCardHealth.appendChild(HPP);
		let pokeCardTypeImgDiv = createNewElement(
			"div",
			"class",
			"pokeCardTypeImg"
		);
		let pokeCardTypeImg = createNewElement("img", "src", this.TypeImg);
		pokeCardTypeImgDiv.appendChild(pokeCardTypeImg);
		pokeCardTop.appendChild(pokeStageTxt);
		if (pokeEvoImgDiv) {
			pokeCardTop.appendChild(pokeEvoImgDiv);
		}
		pokeCardTop.appendChild(pokeCardTitle);
		pokeCardTop.appendChild(pokeCardHealth);
		pokeCardTop.appendChild(pokeCardTypeImgDiv);
		//#endregion
		//#region PokeCardMain
		let pokeCardMain = createNewElement("div", "class", "pokeCardMain");
		let pokeCardImgDiv = createNewElement("div", "class", "pokeCardImg");
		let pokeCardImg = createNewElement("img", "src", this.MainImg);
		pokeCardImgDiv.appendChild(pokeCardImg);
		let pokeCardInfoBarDiv = createNewElement(
			"div",
			"class",
			"pokeCardInfoBar"
		);
		let pokeCardInfoBar = createNewElementTxt(
			"sub",
			"class",
			"sub",
			this.StatsString
		);
		pokeCardInfoBarDiv.appendChild(pokeCardInfoBar);

		pokeCardMain.appendChild(pokeCardImgDiv);
		pokeCardMain.appendChild(pokeCardInfoBarDiv);

		//#endregion
		//#region pokeCardAttackInfo
		let pokeCardAttackInfo = createNewElement(
			"div",
			"class",
			"pokeCardAttackInfo"
		);

		for (const attack in this.Attacks) {
			let pokeCardAttack = createNewElement(
				"div",
				"class",
				"pokeCardAttack"
			);
			let pokeCardAttackName = createNewElementTxt(
				"div",
				"class",
				"pokeCardAttackName",
				this.Attacks[attack].Name
			);
			let pokeCardAttackDamage = createNewElementTxt(
				"div",
				"class",
				"pokeCardAttackDmg",
				this.Attacks[attack].Damage
			);
			pokeCardAttack.appendChild(pokeCardAttackName);
			pokeCardAttack.appendChild(pokeCardAttackDamage);
			pokeCardAttackInfo.appendChild(pokeCardAttack);
		}

		//#endregion
		//#region pokeCardFooter
		let pokeCardFooter = createNewElement("div", "class", "pokeCardFooter");
		let pokeCardWeakRes = createNewElementTxt(
			"div",
			"class",
			"pokeCardWeakRes",
			`Weakness: ${this.Weakness} Resistance: ${this.Resistance}`
		);
		let pokeCardDesc = createNewElement("div", "class", "pokeCardDesc");
		let pokeCardDescSub = createNewElementTxt(
			"sub",
			"class",
			"sub",
			this.FullDescription
		);
		pokeCardDesc.appendChild(pokeCardDescSub);

		pokeCardFooter.appendChild(pokeCardWeakRes);
		pokeCardFooter.appendChild(pokeCardDesc);

		//#endregion
		pokeCard.style.backgroundColor = this.Color;
		pokeCard.appendChild(pokeCardTop);
		pokeCard.appendChild(pokeCardMain);
		pokeCard.appendChild(pokeCardAttackInfo);
		pokeCard.appendChild(pokeCardFooter);
		return pokeCard;
	}

	static #getColor(type) {
		switch (type) {
			case "bug":
				return "Green";
			case "dark":
				return "Black";
			case "dragon":
				return "orangeRed";
			case "electric":
				return "yellow";
			case "fairy":
				return "pink";
			case "fighting":
				return "chocolate";
			case "fire":
				return "red";
			case "flying":
				return "blue";
			case "ghost":
				return "purple";
			case "grass":
				return "green";
			case "ground":
				return "brown";
			case "ice":
				return "lightblue";
			case "normal":
				return "white";
			case "poison":
				return "green";
			case "psychic":
				return "purple";
			case "rock":
				return "brown";
			case "steel":
				return "silver";
			case "water":
				return "blue";
			default:
				return "snow";
		}
	}
}

function addPikachu() {
	let pikachu = new Pokemon("Pikachu", {
		TypeImg: "images/types/ElectricTypeLogo.png",
		MainImg: "images/pikacuMain.png",
		Hp: 60,
		StatsString: "NO. 025 Mouse Pokemon  HT: 1'04\" WT: 13.2 lbs.",
		Attacks: [
			{
				Name: "Gnaw",
				Damage: 10,
			},
			{
				Name: "Thunder Jolt",
				Damage: 30,
			},
		],
		Weakness: "+20",
		Resistance: "-20",
		FullDescription:
			"It has small electric sacs on both its cheecks. If threatened, it looses electric charge from the sacs",
		Type: "electric",
	});
	Pokedex.appendChild(pikachu.getCard());
}

function addPignite() {
	let pikachu = new Pokemon("Pignite", {
		Stage: "Stage 1",
		StageImg: "images/Tepig.png",
		TypeImg: "images/types/FireTypeLogo.png",
		MainImg: "images/Pignite.jpg",
		Hp: 100,
		StatsString: "NO. 499 Fire Pig Pokemon  HT: 3'03\" WT: 122.4 lbs.",
		Attacks: [
			{
				Name: "Rollout",
				Damage: 20,
			},
			{
				Name: "Flamethrower",
				Damage: 70,
			},
		],
		Weakness: "x2",
		Resistance: "-30",
		FullDescription:
			"When its internal fire flares up, its movements grow sharper and faster. When in trouble, it emits smoke.",
		Type: "fire",
	});
	Pokedex.appendChild(pikachu.getCard());
}

addPikachu();
addPignite();

// let mockDatabase = [
//     {
//         new Pokemon({
//             Name: "Pignite",
//             Stage: "Stage 1",
//             Hp = 100,
//             StatsString = "NO. 499 Fire Pig Pokemon HT: 3'03\" WT: 122.4 lbs.",
//             Attakcs = [{
//                 Name: "Rollout",
//                 Damage: 20
//             }, {
//                 Name: "Flamethrower",
//                 Damage: 70
//             }],
//             Weakness = "W x 2",
//             FullDescription = "When its internal fire flares up, its movements grow sharper and faster. When in trouble, it emits smoke."
//         })
//     }
// ]

/*
Stage
stageImg
typeImg
mainImg
Name
Hp
Stats String
Attacks
    Name
    Damage
Weakness
Resistance
FullDescription

*/
