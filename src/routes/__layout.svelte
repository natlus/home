<script lang="ts">
	import { page } from '$app/stores';

	import NightSky from '$components/NightSky.svelte';
	import Footer from '$components/Footer.svelte';
	import Nav from '$components/Nav.svelte';
</script>

<NightSky>
	<Nav stowed={Boolean($page.routeId)} />
	<slot />
	<Footer />
</NightSky>

<style>
</style>
