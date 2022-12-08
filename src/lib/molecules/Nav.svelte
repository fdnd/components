<script>
  import '../styles/molecules/_nav.css';
  import NavLink from '../atoms/NavLink.svelte';

  export let data = {};
  export let type = 'nav';
</script>

<nav class={type}>
  {#each Object.entries(data) as [title, items]}
    <div>
      <h2>{title}</h2>
      <ul>
        {#each Object.entries(items) as item}
          <NavLink {item} />
        {/each}
      </ul>
    </div>
  {/each}
</nav>
