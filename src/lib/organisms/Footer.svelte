<script>
  import { CollapsingColumns, Microsites, Codestring } from '$lib/index.js';
</script>

<footer>
  <CollapsingColumns>
    <Microsites />
    <Codestring />
  </CollapsingColumns>
</footer>

<style>
  footer {
    container-type: inline-size;
    margin-top: var(--component-padding);
  }
</style>