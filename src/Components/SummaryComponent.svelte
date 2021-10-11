<script>
	// import {p} from 'mathjs'

	export let rangeValueHeight = '';
	export let rangeValueDia = '';
	export let rangeValueThickness = '';

	let outerDiameter = 0;
	let totalHeight = 0;
	let areaOfFloor = 0;
	let maxInsideVolume = 0;
	let volumeIfMassive = 0;
	let volumeOfCup = 0;

	$: {
		// Convert props to numbers
		rangeValueHeight = parseInt(rangeValueHeight, 10);
		rangeValueDia = parseInt(rangeValueDia, 10);
		rangeValueThickness = parseInt(rangeValueThickness, 10);

		// Calculations
		outerDiameter = rangeValueDia + rangeValueThickness * 2;
		totalHeight = rangeValueHeight + rangeValueThickness;

		areaOfFloor = Math.pow(rangeValueDia / 2, 2) * Math.PI;
		maxInsideVolume = rangeValueHeight * areaOfFloor;

		volumeIfMassive = Math.pow(outerDiameter / 2, 2) * Math.PI * totalHeight;
		volumeOfCup = volumeIfMassive - maxInsideVolume;
	}
</script>

<section>
	<h3>Info about the cup</h3>

	<details>
		<summary>Outer diameter: {outerDiameter}px</summary>
		<p>{rangeValueDia} + {rangeValueThickness} * 2</p>
		<p>Inner diameter + Wall thickness (both sides)</p>
	</details>

	<details>
		<summary>Total height: {totalHeight}px</summary>
		<p>{rangeValueHeight} + {rangeValueThickness} * 2</p>
		<p>Inner height + Wall thickness</p>
	</details>

	<details>
		<summary>Max inner volume: <br />{maxInsideVolume.toFixed(2)}px^3</summary>
		<p>{rangeValueHeight} * {areaOfFloor.toFixed(2)}</p>
		<p>Inner height + cross-sec-area</p>
	</details>

	<details>
		<summary>Volume of can: <br />{volumeOfCup.toFixed(2)}px^3</summary>
		<!-- <p>{rangeValueHeight} * {areaOfFloor}</p> -->
		<p>Hypothetical massive volme - inside volume</p>
	</details>
</section>

<style>
	section {
		text-align: left;
		margin: 0 5px;
	}
	details {
		border: 1px dotted black;
	}
</style>
