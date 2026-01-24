<script>
	import Intro from '$lib/components/Intro.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Website Thomas Ott" />
</svelte:head>

<section>
	<Intro />
</section>
<style>
	:root {
		--color-text: #767676;
	}

	p span, li span {
		color: var(--color-text);
	}

	p, h2 {
		font-size: 1.3rem;
		line-height: 1.65rem;
	}

	h2 {
		color: black;
		margin-top: 4rem;
	}

	li {
		font-size: 1.1rem;
		line-height: 1.45rem;
	}

	ul {
		width: 80%;
		padding: 0;
		padding-left: 15px;
		margin-left: 0;
	}

	@media only screen
	  and (min-device-width: 720px)
	  and (-webkit-min-device-pixel-ratio: 2) {
	  	p {
	  		width: 38rem;
	  	}
	}

	@media only screen
	  and (max-device-width: 720px)
	  and (-webkit-min-device-pixel-ratio: 2) {
	  	p {
	  		width:92%;
	  	}
	}
</style>

<p>
	I'm a engineering executive at the intersection of human-centered technology, business strategy, and innovation.<br /><br />

  I help organizations scale through engineering leadership, cloud-native architecture, and AI-driven transformation.<br />
	With a deep passion for user experience and systems thinking, I advise on
  building meaningful digital interactions and resilient high-impact products.<br />

	As a strategic advisor and investor, I support founders and enterprises alike, combining hands-on mentorship to turn bold ideas into scalable solutions.
</p>
<h2>Professional Services</h2>
<ul>
	<li>Strategic Business Development and Innovation Consulting Services</li>
	<li>Engineering Leadership and Organizational Excellence</li>
	<li>Human-Centered Intelligence Experience Design and Architecture</li>
	<li>Cloud-Native Architecture and DevOps Acceleration</li>
	<li>Data Engineering and Intelligent Operations (MLOps) Infrastructure</li>
	<li>Strategic Advisory and Expertise Sharing through Angel Investments</li>
</ul>
