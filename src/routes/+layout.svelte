<script>
  import Nav from '$lib/molecules/Nav.svelte';
</script>

<svelte:head>
  <title>Frontend Design & Development | Component Library</title>
</svelte:head>

<header>
  <h1>
    <abbr title="Frontend Design &amp; Development">
      <span>FDND</span>
    </abbr>
    <span>Component Library</span>
  </h1>
</header>

<Nav />

<main>
  <slot />
</main>

<footer />
