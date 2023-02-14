<script>
  import Footer from '$lib/organisms/Footer.svelte';
</script>

<h2>Footer</h2>
<p>
  It's a footer component that holds the default footer for FDND sites. It uses both the <em
    >Microsites</em
  >
  and the <em>Codestring</em> components and implements them in the first two columns of the
  <em>CollapsingColumns</em> layout.
</p>

<div>
  <Footer />
</div>

<style>
  div {
    --background: var(--c-blue);
    --color: var(--c-light);
  }
</style>
