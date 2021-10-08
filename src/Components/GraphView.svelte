<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	let volume = '0';

	const getArrOfRandomValues = (min = 0, max) => {
		let arr = [];
		for (let i = 0; i < max; i++) {
			min = Math.ceil(min);
			max = Math.floor(max);
			arr.push(Math.floor(Math.random() * (max - min + 1) + min)); //The maximum is inclusive and the minimum is inclusive
		}
		return arr;
	};
	// let yValues = getArrOfRandomValues(100);
	// let xNewValues = new Set();

	let ctx;
	let myChart;
	onMount(() => {
		myChart = document.getElementById('myChart').getContext('2d');
		console.log('myChart: ', myChart);

		let massPopChart = new Chart(myChart, {
			type: 'bar',
			data: {
				labels: ['Hundar', 'Katter', 'Vildsvin'],
				datasets: [
					{
						label: 'Population',
						data: [4, 6, 8],
					},
				],
			},
			options: {},
		});
	});

	function handleChange() {
		console.log('Range touched!');
	}

	function handleSubmit() {
		console.log('Submitted!');
	}
</script>

<main>
	<p>See this cup?</p>
	<p>Value: {volume}</p>

	<input
		on:input={handleChange}
		type="range"
		id="volume"
		name="volume"
		bind:value={volume}
		min="0"
		max="100"
	/>
	<form on:submit|preventDefault={handleSubmit}>
		<p>
			<label for="djur">Djur</label>
			<input type="text" id="djur" required />
		</p>
		<p>
			<label for="antal">Antal</label>
			<input type="number" id="antal" required />
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
