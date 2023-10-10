<script>
  import {FdndLogo} from "$lib/index.js"

  export let title = '';
  export let punchline = '';
</script>

<header>
  <FdndLogo/>
  <h1>
    <abbr title="Frontend Design & Development"><span>FDND</span></abbr>
    <span>{title}</span>
  </h1>
  <p>{punchline}</p>
</header>

<style>
    /* width:8rem;
    fill:var(--color-green) !important;
    height:auto !important */
</style>