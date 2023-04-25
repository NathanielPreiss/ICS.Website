<script lang="ts">
	import { BodyCard, LoadingComponent } from '$lib/components';
	import { _bodyArea } from './+page';
</script>

<svelte:head>
	<title>Muscle</title>
	<meta name="Body Area" content="About this app" />
</svelte:head>

<LoadingComponent loadFunction={_bodyArea()} let:promiseResult>
	<div class="container text-center">
		<div class="row">
			{#each promiseResult as bodyAreaRow}
				<div class="col">
					<BodyCard bodyArea={bodyAreaRow} />
				</div>
			{/each}
		</div>
	</div>
</LoadingComponent>
