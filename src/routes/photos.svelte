<script lang="ts">
	import Modal from '$components/Modal.svelte';
	import PhotoGrid from '$components/PhotoGrid.svelte';
</script>

<Modal width="900px" height="auto">
	<svelte:fragment slot="title">
		<h3>Photos 📷</h3>

		<div class="center">
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
				class="feather feather-instagram"
			>
				<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
				<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
				<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
			</svg>
			<a href="https://www.instagram.com/jesper_sultan/"> View more on Instagram </a>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="body">
		<PhotoGrid />
	</svelte:fragment>
</Modal>

<style>
	.center {
		font-size: 0.75rem;
		text-align: center;
		margin-left: auto;
	}

	svg {
		vertical-align: middle;
	}

	a {
		text-decoration: underline;
	}

	a:hover {
		text-decoration: none;
	}
</style>
