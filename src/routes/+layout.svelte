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
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		/*		flex: 1;*/
		/*		display: flex;*/
		/*		flex-direction: column;*/
		padding: 5.8125rem 0 0 5.375rem;
		width: 100%;
		/*		max-width: 64rem;*/
		/*		margin: 0 auto;*/
		/*		box-sizing: border-box;*/
	}

	@media only screen and (max-width: 600px) {
		main {
			padding: 4.5rem 2.2rem 0 2.2rem;
		}
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}
</style>
