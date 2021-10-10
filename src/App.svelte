<script>
	import CupView from './components/CupView.svelte';
	import GraphView from './components/GraphView.svelte';
</script>

<main>
	<h1>App.svelte!</h1>
	<h2>svelte made easy</h2>
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
