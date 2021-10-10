<script>
	export let rangeValueHeight = '';
	export let rangeValueDia = '';
	export let rangeValueThickness = '';

	let outerDiameter = '';
	let totalHeight = '';

	$: {
		rangeValueHeight = parseInt(rangeValueHeight, 10);
		rangeValueDia = parseInt(rangeValueDia, 10);
		rangeValueThickness = parseInt(rangeValueThickness, 10);
		outerDiameter = rangeValueDia + rangeValueThickness * 2;
		totalHeight = rangeValueHeight + rangeValueThickness;
	}
</script>

<section>
	<h3>Info about the cup</h3>

	<details>
		<summary>Outer diameter: {outerDiameter}px</summary>
		<p>{rangeValueDia} + {rangeValueThickness} * 2</p>
		<p>Inner diameter + Wall thickness (both sides)</p>
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
