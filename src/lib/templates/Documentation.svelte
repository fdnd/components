<script>
  import { Subnav } from '../index.js';
  export let data = {};
</script>

<main>
  <div>
    <slot />
  </div>

  <Subnav {data} />
</main>

<style>
  :global(:has(main)) {
    container-type: inline-size;
  }

  main {
    display: grid;
    grid-template-columns: 10rem 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'main main'
      'nav nav';
    gap: var(--component-gap);
  }

  main > :nth-child(1) {
    grid-area: main;
  }

  main > :nth-child(2) {
    grid-area: nav;
  }

  @container (min-width: 30rem) {
    main {
      grid-template-areas: 'nav main';
    }
  }
</style>