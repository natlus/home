<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let width = '400px';
	export let height = 'auto';
</script>

<div
	class="modal"
	style="height: {height}; width: {width}"
	transition:fly={{ delay: 0, duration: 200, x: 500, y: 500, opacity: 0, easing: quintOut }}
>
	<div class="modal-title">
		<slot name="title" />
	</div>

	<div class="modal-body">
		<slot name="body" />
	</div>

	<a class="back-button" href="/">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="feather feather-arrow-left"
		>
			<line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
		</svg>
	</a>
</div>

<style>
	.modal {
		background-color: var(--bg-elevated);
		box-shadow: 0 0 1px var(--ol-elevated), var(--drop-shadow);
		border-radius: var(--radius);
		color: var(--fg-primary);
		padding: calc(var(--spacing) * 2);
		backdrop-filter: var(--backdrop-filter);
		z-index: 10;
		position: relative;

		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		display: flex;
		flex-direction: column;
		gap: var(--spacing);
		/* overflow: hidden; */
	}

	.back-button {
		background-color: transparent;
		outline: none;
		border: 0;
		color: inherit;

		position: absolute;
		top: calc(var(--spacing) * 1.5);
		left: calc(var(--spacing) * 1);

		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--spacing);
		cursor: pointer;
		border-radius: var(--radius);
		transition: 150ms ease background-color;
	}

	.back-button:hover {
		background-color: var(--bg-elevated);
	}

	.modal-title {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--spacing);
		padding-bottom: var(--spacing);
		padding-right: var(--spacing);
		margin-left: calc(var(--spacing) * 5);
		width: calc(100% - (var(--spacing) * 5));
		flex: 1 1 auto;
	}

	.modal-body {
		height: 100%;
	}
</style>
