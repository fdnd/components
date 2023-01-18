<script>
  import { Documentation } from '$lib/index.js';

  let data = {
    Title: {
      item: 'https://www.example.com'
    }
  };
</script>

<h2>Documentation</h2>
<p>
  Consists of a div.documentation with a media queried grid layout. It is used for this site so you
  can witness a double collapse on a small enough screen. The Documentation component expects two
  elements as children, most logical would be a nav and a main element. Classes on these children
  are optional.
</p>

<div>
  <Documentation {data}>
    <main>&lt;main/&gt;</main>
  </Documentation>
</div>

<style>
  nav {
    background: var(--c-green);
  }
  main {
    background: var(--c-purple);
  }
</style>
