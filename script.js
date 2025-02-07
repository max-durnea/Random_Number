// script.js
var last_int = 0;
function generateRandom() {
    const lower = parseInt(document.getElementById('lowerLimit').value, 10);
    // Scădem 1 din valoarea limită superioară introdusă de utilizator
    const upper = parseInt(document.getElementById('upperLimit').value, 10) - 1;

    if (upper >= lower) { // Asigurăm că valoarea superioară ajustată este încă mai mare sau egală cu cea inferioară
        var result = Math.floor(Math.random() * (upper - lower + 1) + lower);
		while(result == last_int){
			result = Math.floor(Math.random() * (upper - lower + 1) + lower);

		}
		last_int = result;
        document.getElementById('result').innerText = `Random Number: ${result}`;
    } else {
        document.getElementById('result').innerText = "Upper limit must be greater than lower limit after adjustment!";
    }
}
