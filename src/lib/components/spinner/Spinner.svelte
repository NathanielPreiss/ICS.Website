<!--<script lang="ts">
	import { Circle2 } from 'svelte-loading-spinners';
	export let size: number = 100;
	export let unit: string = "px";
	export let pause: boolean = false;
</script>

<Circle2
	size="{size}"
	unit="{unit}"
	pause="{pause}"
	colorInner="#676778"
	colorCenter="#40B3FF"
	colorOuter="#FF3E00"
	durationInner="1.5s"
	durationCenter="3s"
	durationOuter="2s"
/>-->

<script lang="ts">
	export let size: string = '100';
	export let unit: string = 'px';
	export let pause: boolean = false;
	export let colorOuter: string = '#FF3E00';
	export let colorCenter: string = '#40B3FF';
	export let colorInner: string = '#676778';
	export let durationMultiplier: number = 1;
	export let durationOuter: string = `${durationMultiplier * 2}s`;
	export let durationInner: string = `${durationMultiplier * 1.5}s`;
	export let durationCenter: string = `${durationMultiplier * 3}s`;
</script>

<div
	class="circle"
	class:pause-animation={pause}
	style="--size: {size}{unit}; --colorInner: {colorInner}; --colorCenter: {colorCenter}; --colorOuter: {colorOuter}; --durationInner: {durationInner}; --durationCenter: {durationCenter}; --durationOuter: {durationOuter};"
/>

<style>
	.circle {
		width: var(--size);
		height: var(--size);
		box-sizing: border-box;
		position: relative;
		border: 3px solid transparent;
		border-top-color: var(--colorOuter);
		border-radius: 50%;
		animation: circleSpin var(--durationOuter) linear infinite;
	}
	.circle::before,
	.circle::after {
		content: '';
		box-sizing: border-box;
		position: absolute;
		border: 3px solid transparent;
		border-radius: 50%;
	}
	.circle::after {
		border-top-color: var(--colorInner);
		top: 9px;
		left: 9px;
		right: 9px;
		bottom: 9px;
		animation: circleSpin var(--durationInner) linear infinite;
	}
	.circle::before {
		border-top-color: var(--colorCenter);
		top: 3px;
		left: 3px;
		right: 3px;
		bottom: 3px;
		animation: circleSpin var(--durationCenter) linear infinite;
	}
	.pause-animation,
	.pause-animation::after,
	.pause-animation::before {
		animation-play-state: paused;
	}
	@keyframes circleSpin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>