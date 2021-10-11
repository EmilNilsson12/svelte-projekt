<script>
	export let rangeValueHeight = '';
	export let rangeValueDia = '';
	export let rangeValueThickness = '';
</script>

<div class="cup-views-container">
	<div class="cup-view">
		<div
			class="cup-above cup"
			style={`
				height: ${rangeValueDia}px;
				width: ${rangeValueDia}px;
				border-width: ${rangeValueThickness}px;`}
		/>
	</div>
	<div class="cup-view">
		<div
			class="cup-front cup"
			style={`
				height: ${rangeValueHeight}px;
				width: ${rangeValueDia}px;
				border-left-width: ${rangeValueThickness}px;
				border-bottom-width: ${rangeValueThickness}px;
				border-right-width: ${rangeValueThickness}px;`}
		/>
	</div>
</div>

<style>
	.cup {
		border: 1px solid black;
		position: absolute;
	}
	.cup-front {
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		background: linear-gradient(
			90deg,
			rgba(103, 103, 103, 1) 0%,
			rgba(0, 255, 128, 1) 50%,
			rgba(57, 39, 39, 1) 100%
		);
	}
	.cup-above {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background: radial-gradient(
			rgba(103, 103, 103, 1) 0%,
			rgba(0, 255, 128, 1) 25%,
			rgba(57, 39, 39, 1) 100%
		);
		border-radius: 999px;
	}
	.cup-view {
		height: 200px;
		width: 200px;
		border: 1px solid black;
		position: relative;
	}
</style>
