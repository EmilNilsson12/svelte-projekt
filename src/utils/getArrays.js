function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function getArrOfRandomValues(size, maxValue) {
	let min = 0;
	let myScopedArr = [];
	for (let i = 0; i < size; i++) {
		let randomValue = getRandomValue(min, maxValue);
		myScopedArr.push(randomValue);
	}
	return myScopedArr;
}

function getArrofZeros(size) {
	let myScopedArr = [];
	for (let i = 0; i < size; i++) {
		myScopedArr.push(0);
	}
	return myScopedArr;
}

function getArr100() {
	let myScopedArr = [];
	for (let i = 0; i < 100; i++) {
		myScopedArr.push(i);
	}
	return myScopedArr;
}

export { getRandomValue, getArrofZeros, getArrOfRandomValues, getArr100 };
