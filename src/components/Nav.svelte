<script lang="ts">
  import Button from '$components/Button.svelte';

  export let stowed = false;
</script>

<nav class={stowed ? 'topleft' : 'middle'}>
  <Button href="https://github.com/natlus">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 22"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-github"
    >
      <path
        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
      />
    </svg>
  </Button>

  <Button href="/photos">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-camera"
      ><path
        d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
      /><circle cx="12" cy="13" r="4" /></svg
    >
  </Button>

  <Button href="/dog">Kira</Button>
</nav>

<slot />

<style>
  .middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .topleft {
    top: 24px;
    left: 24px;
  }

  nav {
    position: fixed;
    z-index: 10;
    color: var(--fg-primary);
    box-shadow: 0 0 1px var(--ol-elevated);
    border-radius: var(--radius);
    transition: top 200ms ease, left 200ms ease, transform 200ms ease;
    backdrop-filter: blur(3px);
    display: grid;
    grid-auto-flow: column;
    overflow: hidden;
  }
</style>
