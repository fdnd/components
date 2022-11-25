<script>
  import NavLink from '$lib/atoms/NavLink.svelte';

  export let data = {
    title: 'Please pass a data object containing data.title and data.items, see docs for details.',
    items: {
      Example: 'http://example.com'
    }
  };
</script>

<nav>
  <h2>{data.title}</h2>
  <ul>
    {#each Object.entries(data.items) as item}
      <NavLink {item} />
    {/each}
  </ul>
</nav>
