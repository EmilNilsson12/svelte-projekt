<script>
	import CupView from './components/CupView.svelte';
	import CupVisualizer from './components/CupVisualizer.svelte';
</script>

<main>
	<h1>App.svelte!</h1>
	<h2>svelte made easy</h2>
	<CupView />
	<CupVisualizer />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
