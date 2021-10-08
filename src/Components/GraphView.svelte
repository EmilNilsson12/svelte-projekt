<script>
	import { onMount } from 'svelte';

	import Chart from 'chart.js/auto';

	import SummaryComponent from './SummaryComponent.svelte';
	import CupViewsComponent from './CupViewsComponent.svelte';

	import { addData, removeData, updateValue } from './chartMethods.js';
	import {
		getRandomValue,
		getArrofZeros,
		getArrOfRandomValues,
		getArr100,
	} from './getArrays.js';

	let rangeValueHeight = '70';
	let rangeValueDia = '50';
	let rangeValueThickness = '10';

	let djurValue = '';
	let djurAntalValue = '';

	let xLabels = getArr100();
	let yValues = getArrofZeros(100);

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
		Inside height: {rangeValueHeight}px
		<input
			on:input={handleChange('height')}
			on:change={handleChange('height')}
			type="range"
			id="volume"
			name="volume"
			bind:value={rangeValueHeight}
			min="0"
			max="170"
		/>
	</p>
	<p>
		Inside Diameter: {rangeValueDia}px
		<input
			on:input={handleChange('diameter')}
			on:change={handleChange('diameter')}
			type="range"
			id="volume"
			name="volume"
			bind:value={rangeValueDia}
			min="0"
			max="140"
		/>
	</p>
	<p>
		Wall thickness: {rangeValueThickness}px
		<input
			on:input={handleChange('thickness')}
			on:change={handleChange('thickness')}
			type="range"
			id="volume"
			name="volume"
			bind:value={rangeValueThickness}
			min="1"
			max="30"
		/>
	</p>

	<div class="grid-container">
		<CupViewsComponent
			{rangeValueHeight}
			{rangeValueDia}
			{rangeValueThickness}
		/>
		<SummaryComponent
			{rangeValueHeight}
			{rangeValueDia}
			{rangeValueThickness}
		/>
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
	.grid-container {
		display: grid;
		grid-template-columns: 1fr 3fr;
	}
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
</style>
