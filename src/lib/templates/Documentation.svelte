<script>
  import { Nav } from '../index.js';
  export let data = {};
</script>

<main class="documentation">
  <div>
    <slot />
  </div>

  <Nav {data} type="document" />
</main>

<style>
  :has(.documentation) {
    container-type: inline-size;
  }

  .documentation {
    --background: var(--c-light);
    --color: var(--c-blue);
    display: grid;
    grid-template-columns: 12rem 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'main main'
      'nav nav';
    gap: var(--component-gap);
    /* background: var(--background); */
    /* color: var(--color); */
  }

  .documentation > :nth-child(1) {
    grid-area: main;
  }

  .documentation > :nth-child(2) {
    grid-area: nav;
  }

  @container (min-width: 40rem) {
    .documentation {
      grid-template-areas: 'nav main';
    }
  }
</style>