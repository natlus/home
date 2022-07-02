<footer>
  <a href="/">natlus.dev</a> built with <a href="https://kit.svelte.dev/">SvelteKit</a>
</footer>

<style>
  footer {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    color: var(--fg-primary);
    text-shadow: 0 1px 2px #000;
    padding: calc(var(--spacing) * 4) 0;
    font-size: 0.75rem;
  }

  a {
    text-decoration: underline;
  }

  a:hover {
    text-decoration: none;
  }
</style>
