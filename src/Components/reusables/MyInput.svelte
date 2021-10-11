<script>
	export let descProp = '';
	export let valueProp = '';
	export let callback = '';
	export let callbackParam = '';
	export let minProp = '';
	export let maxProp = '';

	function callCallback(min, max) {
		if (valueProp < min) valueProp = min;
		if (valueProp > max) valueProp = max;
		callback(callbackParam, valueProp);
	}
</script>

<p>
	{descProp}:
	<input
		type="number"
		bind:value={valueProp}
		min={minProp}
		max={maxProp}
		on:change={callCallback(minProp, maxProp)}
		on:input={callCallback(minProp, maxProp)}
	/>px
	<input
		type="range"
		min={minProp}
		max={maxProp}
		bind:value={valueProp}
		on:change={callCallback(minProp, maxProp)}
		on:input={callCallback(minProp, maxProp)}
	/>
</p>

<style>
	input[type='number'] {
		width: 60px;
	}
</style>
