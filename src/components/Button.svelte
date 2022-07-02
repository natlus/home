<script lang="ts">
  export let onClick: () => void = () => {};
  export let href: string | undefined = undefined;

  let type: 'button' | 'a' = 'button';

  if (href) {
    type = 'a';
  }
</script>

<svelte:element this={type} class="btn btn-reset" on:click={onClick} {href}>
  <slot />
</svelte:element>

<style>
  .btn-reset {
    outline: none;
    border: 0;
    background-color: none;
    background: none;
    appearance: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }

  .btn {
    color: inherit;
    padding: 12px 24px;
    display: block;
    background-color: var(--bg-elevated);
    display: flex;
    align-items: center;
    position: relative;
  }

  .btn:not(:last-child) {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }

  .btn:after {
    content: ' ';
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }

  .btn:hover:after {
    background-color: var(--bg-elevated);
  }
</style>
