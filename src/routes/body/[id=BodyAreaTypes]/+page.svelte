<script lang="ts">
	import { BodyCard, LoadingComponent } from '$lib/components';
	import { _bodyArea } from './+page';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Muscle {$page.params.id}</title>
	<meta name="description" content="About this app" />
</svelte:head>

<LoadingComponent loadFunction={_bodyArea()} let:promiseResult>
	<div class="container text-center">
		<div class="row">
				<div class="col">
					<BodyCard bodyArea={promiseResult} />
				</div>
		</div>
	</div>
</LoadingComponent>
