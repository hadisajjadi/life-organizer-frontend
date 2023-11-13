<script>
	let count = $state(0);

	function handleClick() {
		count += 1;
	}
    
</script>

<button on:click={handleClick} class="btn btn-primary">
    Click Me {count}
</button>
