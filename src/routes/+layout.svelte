<script>
  import Nav from '$lib/molecules/Nav.svelte';
  import BrandingHvA from '$lib/molecules/BrandingHvA.svelte';
</script>

<svelte:head>
  <title>Frontend Design & Development | Component Library</title>
</svelte:head>

<BrandingHvA>
  <Nav />

  <main>
    <slot />
  </main>

  <footer />
</BrandingHvA>
