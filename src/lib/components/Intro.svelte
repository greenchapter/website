<script lang="ts">
	import gate from '$lib/images/gate.png';
</script>

<picture>
	<source srcset="{gate}" type="image/png" />
	<img width="50px" height="auto" src="{gate}" alt="Welcome to my website" />
</picture>

<p>Thomas Ott<br /><span class="grey">Director of Engineering</span></p>

<style>

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }

	p .grey {
		color: rgba(15, 15, 15, 0.5);
	}

</style>
