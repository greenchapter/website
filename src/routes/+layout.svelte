<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<footer></footer>
</div>
<style>
	.app {
		margin: 56px 32px;
	}

	main {
	}

	@media only screen and (max-width: 600px) {
	}

	footer {
	}
</style>
