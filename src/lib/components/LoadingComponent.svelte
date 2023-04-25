<script lang="ts">
	import { Spinner } from '$lib/components';
    
    type T = $$Generic;
	export let loadFunction: Promise<T>;
</script>

{#await loadFunction}
	<div class="text-column">
		<Spinner />
	</div>
{:then promiseResult}
	<slot {promiseResult} />
{:catch error}
	{error.message}
{/await}
