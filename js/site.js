let Pokedex = document.getElementById("pokedex");

function addPikachu() {
	let pikachu = new Pokemon({
		Name: "Pikachu",
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
	// let JSONTest = JSON.stringify(pikachu);
	// console.log(JSONTest);
	// let pikachu2 = new Pokemon(JSON.parse(JSONTest));
	// //console.log(pikachu2);
	// Pokedex.appendChild(pikachu2.getCard());
}

function addPignite() {
	let pignite = new Pokemon({
		Name: "Pignite",
		Stage: "Stage 1",
		EvoImg: "images/Tepig.png",
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
	Pokedex.appendChild(pignite.getCard());
	// console.log(JSON.stringify(pikachu));
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
