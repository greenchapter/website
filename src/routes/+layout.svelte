<script>
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles.css';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<footer></footer>
</div>
<style>
	main {
		margin: 3.5rem 2rem;
	}
</style>
