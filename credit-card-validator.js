




// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];


const validateCreditCard = (cardNumbers) => {
	
	let cardSum = 0;

	for (let i=cardNumbers.length - 1; i >= 0; i--) {
		
		// we want to do something different to every other number in the array	
		if (((cardNumbers.length - 1) % 2) === (i % 2)) {
			// we are at the end or 3rd from the end or 5th from the end etc
			// just add the number to the sum
			cardSum += cardNumbers[i];
		} else {
			// we are at the 2nd from the end or 4th from the end etc
			// do work to the number
			cardSum += prepareNumber(cardNumbers[i]);
		}
	}

	// if the work done on the numbers is divisible by 10, we have a valid credit card number
	let isValidCardNumber = cardSum % 10 === 0;
	return isValidCardNumber;
}

// helper function
const prepareNumber = (cardNumber) => {
	cardNumber *= 2;
	
	if (cardNumber > 9) {
		return cardNumber -= 9;
	} else {
		return cardNumber;
	}
}





