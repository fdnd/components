<script>
  import '../styles/molecules/_nav.css';
  import Link from '../atoms/Link.svelte';

  export let data = {};
  export let type = 'main';
</script>

<nav class={type}>
  <div>
    {#each Object.entries(data) as [title, items]}
      <h2>{title}</h2>
      <ul>
        {#each Object.entries(items) as item}
          <li><Link {item} /></li>
        {/each}
      </ul>
    {/each}
  </div>
</nav>
