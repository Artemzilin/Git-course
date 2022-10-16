document.body.innerHTML = '<h1>Hello from JavaScript</h1>'
console.log('Test !!!!!!!!!!!');



let count = 0;

function cc(card) {

	switch (card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count++;
			break;

		case 10:
		case 'J':
		case 'Q':
		case 'K':
		case 'A':
			count--;
	}
	if (count > 0) {
		return count + " Bet";
	} else {
		return count + " Hold";
	}


}

cc(2); cc(3); cc(7); cc('K'); cc('A');


console.log('Artem');

const Maly = 24;
console.log('Maly');


