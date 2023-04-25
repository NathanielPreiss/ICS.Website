<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from '$lib/components/button/Button.svelte';

	function onClick() {
		console.warn('error');
	}
</script>

<Meta
	title="Buttonsss2"
	component={Button}
	argTypes={{
		backgroundColor: { control: 'color' },
		label: { control: 'text' },
		onClick: { action: 'onClick' },
		primary: { control: 'boolean' },
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		}
	}}
/>

<!--We create a “template” of how args map to rendering -->

<Template let:args>
	<Button {...args} />
</Template>

<!-- Each story then reuses that template -->

<Story
	name="Primary"
	args={{
		primary: true,
		label: 'Buttons'
	}}
/>
