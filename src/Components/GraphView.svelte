<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	import { addData, removeData, updateValue } from './chartMethods.js';

	let rangeValue = '0';
	let djurValue = '';
	let djurAntalValue = '';

	const getRandomValue = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
	};

	const getArrOfRandomValues = (max) => {
		let min = 0;
		let myScopedArr = [];
		for (let i = 0; i < max; i++) {
			let randomValue = getRandomValue(min, max);
			myScopedArr.push(randomValue);
		}
		return myScopedArr;
	};

	const getArr100 = () => {
		let myScopedArr = [];
		for (let i = 0; i < 100; i++) {
			myScopedArr.push(i);
		}
		return myScopedArr;
	};
	let xLabels = getArr100();
	let yValues = getArrOfRandomValues(100);
	// let xNewValues = new Set();

	console.log('getArr100(): ', xLabels);
	console.log('getArrOfRandomValues(100): ', yValues);

	// let xLabels = ['Hund', 'Katt', 'Vildsvin'];
	// let yValues = [4, 6, 8];

	let ctx;
	let myChart;
	let massPopChart;
	onMount(() => {
		myChart = document.getElementById('myChart').getContext('2d');

		massPopChart = new Chart(myChart, {
			type: 'line',
			data: {
				labels: xLabels,
				datasets: [
					{
						label: 'Population',
						data: yValues,
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	});

	function handleChange() {
		console.log('Range touched!');
		updateValue(massPopChart, rangeValue, getRandomValue(0, 100));
	}

	function handleSubmit() {
		console.log('Submitted!');
		console.log('Djur: ', djurValue);
		console.log('Djur antal: ', djurAntalValue);

		let labelExists = massPopChart.data.labels.find(
			(label) => label === djurValue
		);

		if (labelExists) {
			updateValue(massPopChart, djurValue, parseInt(djurAntalValue, 10));
		} else {
			addData(massPopChart, djurValue, parseInt(djurAntalValue, 10));
		}
	}
</script>

<main>
	<p>See this cup?</p>
	<p>Value: {rangeValue}</p>

	<input
		on:input={handleChange}
		type="range"
		id="volume"
		name="volume"
		bind:value={rangeValue}
		min="0"
		max="100"
	/>
	<form on:submit|preventDefault={handleSubmit}>
		<p>
			<label for="djur">Djur</label>
			<input type="text" id="djur" bind:value={djurValue} required />
		</p>
		<p>
			<label for="antal">Antal</label>
			<input type="number" id="antal" bind:value={djurAntalValue} required />
		</p>
		<button type="submit">Submit</button>
	</form>
	<p>See this graph?</p>
	<div class="canvas-wrapper">
		<canvas id="myChart" />
	</div>
</main>

<style>
	form {
		display: none;
		border: 1px dotted black;
	}
	.canvas-wrapper {
		width: 90%;
		/* height: 100px; */
	}

	canvas {
		display: block;
	}
</style>
