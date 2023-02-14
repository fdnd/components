<script>
  import { Microsites } from '$lib/index.js';
</script>

<h2>Microsites</h2>

<p>It's a microsites component..</p>

<div>
  <Microsites />
</div>
<br />
<div>
  <Microsites />
</div>

<style>
  div:nth-of-type(1) {
    --color: var(--c-light);
    --background: var(--c-blue);
    width: 30rem;
  }

  div:nth-of-type(2) {
    --color: var(--c-blue);
    --background: var(--c-green);
    padding: var(--component-padding);
    background: var(--background);
  }
</style>
