<script lang="ts">
	import { login, logout, isAuthenticated, user } from './page';
</script>

<h1>Welcome to SvelteKit</h1>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

{#if $isAuthenticated && $user}
	<h2>Hey {$user.name}!</h2>
	{#if $user.picture}
		<img src={$user.picture} alt={$user.name} />
	{:else}
		<img src="https://source.unsplash.com/random/400x300" alt="Random" />
	{/if}
	<button on:click={logout}>Logout</button>
{:else}
	<button on:click={login}>Login</button>
{/if}
