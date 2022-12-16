<script>
  import '../styles/templates/_documentation.css';
  import { Nav } from '../index.js';

  export let data = {};
</script>

<main class="documentation">
  <div>
    <slot />
  </div>

  <Nav {data} type="document" />
</main>
