//function that will generate the password
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');


//create an object literal that will hold the values of the randomly generated 
const getRandom = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
};



//this function controls when the generate password button is clicked, the addeventlistener detects the click and
//the checked boolean returns what criteria is checked. That value is stored in the local variables
//those variables are then used to call the function generatepassword
generateEl.addEventListener('click', function() {
	const length = +lengthEl.value;
	const trueLower = lowercaseEl.checked;
	const trueUpper = uppercaseEl.checked;
	const trueNumber = numbersEl.checked;
	const trueSymbol = symbolsEl.checked;
	
    //display password generated in result container
	resultEl.innerText = generatePassword(trueLower, trueUpper, trueNumber, trueSymbol, length);
});




//functions below are used to generate random letters, symbols, and numbers using the math.random function controlled by the length
function getRandomLower() {
    const loweralphabet = "abcdefghijklmnopqrstuvwxyz";
	return randomalpha=loweralphabet[Math.floor(Math.random() * loweralphabet.length)];
}

function getRandomUpper() {
    const upperalphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	return randomalphabet=upperalphabet[Math.floor(Math.random() * upperalphabet.length)];
}

function getRandomNumber() {
   return number=Math.floor(Math.random() * 10) + 1;
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}



