<script>
	import CupView from './components/CupView.svelte';
	import GraphView from './components/GraphView.svelte';
</script>

<main>
	<!-- <h1>App.svelte!</h1> -->
	<CupView />
	<GraphView />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
