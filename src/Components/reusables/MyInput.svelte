<script>
	export let descProp = '';
	export let valueProp = '';
	export let callback = '';
	export let callbackParam = '';
	export let minProp = '';
	export let maxProp = '';

	function callCallback() {
		if (valueProp < 1) valueProp = 1;
		callback(callbackParam, valueProp);
	}
</script>

<p>
	{descProp}:
	<input
		type="number"
		bind:value={valueProp}
		on:change={callCallback}
		min={minProp}
		max={maxProp}
		on:input={callCallback}
	/>px
	<input
		type="range"
		min={minProp}
		max={maxProp}
		bind:value={valueProp}
		on:change={callCallback}
		on:input={callCallback}
	/>
</p>

<style>
	input[type='number'] {
		width: 60px;
	}
</style>
