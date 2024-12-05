// const pokeJSON =
// 	'{"Name":"Jeff Johnson","Stage":"basic","EvoImg":null,"TypeImg":"images/types/BugTypeLogo.png","Type":"bug","Color":"Green","MainImg":"images/default-image.jpg","Hp":"500","StatsString":"","Attacks":[{"Name":"My Attack","Damage":"My Attack Dmg"},{"Name":"Ur Mom","Damage":"Infinite"}],"Weakness":"0","Resistance":"0","FullDescription":"His name is Jeff. I wonder if this will actually work!!! That would be so dope... because then I might be able to add upload capabilities tomrorow."}';

// const pokeJSON =
// 	'{"Name":"","Stage":"basic","EvoImg":null,"TypeImg":"images/types/BugTypeLogo.png","Type":"bug","Color":"Green","MainImg":"images/default-image.jpg","Hp":"","StatsString":"","Attacks":[],"Weakness":"","Resistance":"","FullDescription":"I wonder why it smooshes it all to one line... maybe I have some CSS that needs to be fixed. Or maybe the JSON will be different? I am not entirely sure!"}';

const pokeJSON = localStorage.getItem("most-recent-card");
//console.log(JSON.parse(pokeJSON));
const pokemonCard = new Pokemon(JSON.parse(pokeJSON));
console.log(pokemonCard);

const output = document.getElementById("cardOutput");
const jsonDiv = document.getElementById("PokemonJson");

output.appendChild(pokemonCard.getCard());
jsonDiv.textContent = pokeJSON;

function copyToClipboard(text) {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			document.getElementById("copyOut").innerHTML += "Text Copied<br>";
			console.log("Text copied!");
		})
		.catch((err) => {
			document.getElementById("copyOut").innerHTML +=
				"Could not Copy Text<br>";
			console.log("could not copy to clipboard: ", err);
		});
}
document.getElementById("copyBtn").addEventListener("click", function (e) {
	copyToClipboard(pokeJSON);
	//In the future, it would not be hard to make an "upload" button so the user can uplaod a previously made pokemon card.
});
