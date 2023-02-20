<script>
	import Component from './Component.svelte';
	import github_logo from '$lib/images/github.svg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<picture>
		<source srcset="{github_logo}" type="image/svg" />
		<!-- <img src="{github_logo}" alt="Welcome" /> -->
	</picture>

	<Component />
</section>

<style></style>
