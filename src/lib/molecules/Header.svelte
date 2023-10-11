<script>
  import {FdndLogo} from "$lib/index.js"

  export let title = '';
  export let punchline = '';
</script>

<header>
  <div>
  <FdndLogo/>
  </div>
  <h1>
    <abbr title="Frontend Design & Development"><span>FDND</span></abbr>
    <span>{title}</span>
  </h1>
  <p>{punchline}</p>
</header>

<style>
  div {
    width:5rem;
  }
</style>