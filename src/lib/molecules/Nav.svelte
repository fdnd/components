<script>
  import '../styles/molecules/_nav.css';
  import Link from '../atoms/Link.svelte';

  export let data = {};
  export let type = 'main';
  export let reload = false;
</script>

<nav class={type}>
  <div>
    {#each Object.entries(data) as [title, items]}
      <h2>{title}</h2>
      <ul>
        {#each Object.entries(items) as item}
          <li><Link {item} {reload} /></li>
        {/each}
      </ul>
    {/each}
  </div>
</nav>
