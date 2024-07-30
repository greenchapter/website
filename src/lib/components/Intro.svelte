<script lang="ts">
	import gate from '$lib/images/gate.png';
</script>

<picture>
	<source srcset="{gate}" type="image/png" />
	<img width="40px" height="auto" src="{gate}" alt="Welcome to my website" />
</picture>

<p>Thomas Ott <span class="grey">Software and Fundamentals</span></p>

<style>
	p .grey {
		color: rgba(15, 15, 15, 0.5);
		padding-left: 1rem;
	}
</style>
