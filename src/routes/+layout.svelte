<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css';
	import Header from './Header.svelte';
	import './+layout.css';
	import './styles.css';
</script>

<!--<svelte:head>
	TODO
	<script src='bootstrap/dist/js/bootstrap.bundle.min.js'></script>
</svelte:head>-->

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>
			visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
		</p>
	</footer>
</div>
