<script>
	import { onMount } from 'svelte';

	import Chart from 'chart.js/auto';

	import CupViewsComponent from './CupViewsComponent.svelte';
	import MyInput from './reusables/MyInput.svelte';

	import SummaryComponent from './SummaryComponent.svelte';

	import { addData, removeData, updateValue } from '../utils/chartMethods.js';
	import {
		getRandomValue,
		getArrofZeros,
		getArrOfRandomValues,
		getArr100,
	} from '../utils/getArrays.js';

	let rangeValueHeight = '70';
	let rangeValueDia = '50';
	let rangeValueThickness = '10';

	function handleChange(paramString, newValue) {
		console.log('---Before value---');
		console.log('Range touched!');
		console.log('Inside CupVisualizer called back');
		switch (paramString) {
			case 'height':
				console.log('Height: ', newValue);
				rangeValueHeight = newValue;
				break;

			case 'diameter':
				console.log('Diameter: ', newValue);
				rangeValueDia = newValue;
				break;

			case 'thickness':
				console.log('Thickness: ', newValue);
				rangeValueThickness = newValue;
				break;

			default:
				break;
		}
		console.log('---After value---');
	}
</script>

<main>
	<p>See this cup?</p>

	<div class="grid-container">
		<div class="cup-views">
			<CupViewsComponent
				{rangeValueHeight}
				{rangeValueDia}
				{rangeValueThickness}
			/>
		</div>
		<div class="range-inputs">
			<MyInput
				descProp="Inside height"
				valueProp={rangeValueHeight}
				callback={handleChange}
				callbackParam="height"
				minProp="1"
				maxProp="170"
			/>
			<MyInput
				descProp="Inside Diameter"
				valueProp={rangeValueDia}
				callback={handleChange}
				callbackParam="diameter"
				minProp="1"
				maxProp="140"
			/>
			<MyInput
				descProp="Wall thickness"
				valueProp={rangeValueThickness}
				callback={handleChange}
				callbackParam="thickness"
				minProp="1"
				maxProp="30"
			/>
		</div>
		<div class="summaries">
			<SummaryComponent
				{rangeValueHeight}
				{rangeValueDia}
				{rangeValueThickness}
			/>
		</div>
	</div>

	<!-- <form on:submit|preventDefault={handleSubmit}>
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
	</div> -->
</main>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: 202px 1fr 1fr;
	}

	.cup-views {
		grid-area: 1 / 1 / 2 / 2;
	}
	.range-inputs {
		grid-area: 1 / 2 / 2 / 3;
	}
	.summaries {
		grid-area: 1 / 3 / 2 / 4;
	}

	.grid-container,
	.grid-container > * {
		border: 1px solid black;
	}

	/* form {
		border: 1px dotted black;
	}
	.chart-wrapper {
		height: 400px;
	}
	canvas {
		display: block;
	} */
</style>
