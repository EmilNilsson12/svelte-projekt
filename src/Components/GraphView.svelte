<script>
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';

	import { addData, removeData, updateValue } from './chartMethods.js';
	import {
		getRandomValue,
		getArrofZeros,
		getArrOfRandomValues,
		getArr100,
	} from './getArrays.js';

	let rangeValueHeight = '0';
	let rangeValueDia = '0';
	let rangeValueThickness = '0';

	let djurValue = '';
	let djurAntalValue = '';

	let xLabels = getArr100();
	let yValues = getArrofZeros(100);

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
				responsive: true,
				scales: {
					y: {
						beginAtZero: true,

						suggestedMax: 10,
					},
				},
			},
		});
	});

	function handleChange(paramString) {
		console.log('Range touched!');
		switch (paramString) {
			case 'height':
				console.log('Height: ', rangeValueHeight);
				break;

			case 'diameter':
				console.log('Diameter: ', rangeValueDia);
				break;

			case 'thickness':
				console.log('Thickness: ', rangeValueThickness);
				break;

			default:
				break;
		}
	}

	function handleSubmit() {
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
	<p>
		Height: {rangeValueHeight}

		<input
			on:input={handleChange('height')}
			on:change={handleChange('height')}
			type="range"
			id="volume"
			name="volume"
			bind:value={rangeValueHeight}
			min="0"
			max="100"
		/>
	</p>
	<p>
		Inside Diameter: {rangeValueDia}
		<input
			on:input={handleChange('diameter')}
			on:change={handleChange('diameter')}
			type="range"
			id="volume"
			name="volume"
			bind:value={rangeValueDia}
			min="0"
			max="100"
		/>
	</p>
	<p>
		Wall thickness: {rangeValueThickness}

		<input
			on:input={handleChange('thickness')}
			on:change={handleChange('thickness')}
			type="range"
			id="volume"
			name="volume"
			bind:value={rangeValueThickness}
			min="0"
			max="100"
		/>
	</p>

	<div class="cup-views-container">
		<div class="cup-from-above cup-view">
			<div class="cup-above cup">cup-above</div>
		</div>
		<div class="cup-from-front cup-view">
			<div class="cup-front cup" style={`height: ${rangeValueHeight}`}>
				cup-front
			</div>
		</div>
	</div>

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
	<div class="chart-wrapper">
		<canvas id="myChart" />
	</div>
</main>

<style>
	form {
		display: none;
		border: 1px dotted black;
	}
	.chart-wrapper {
		height: 400px;
	}
	canvas {
		display: block;
	}

	.cup {
		border: 1px solid black;
		position: absolute;
	}
	.cup-front {
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}
	.cup-above {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	.cup-view {
		height: 200px;
		width: 200px;
		border: 1px solid black;
		position: relative;
	}
</style>
