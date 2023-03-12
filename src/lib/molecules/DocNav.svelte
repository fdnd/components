<script>
  import '../styles/molecules/_docnav.css';
  import Link from '../atoms/Link.svelte';

  // It's a special nav component that deals with our Hygraph docs.fdnd.nl structure
  export let data = {};
  export let prefix = '';
  export let reload = false;
</script>

<nav class="document">
  <div>
    <ul>
      {#each Object.entries(data) as [i, link]}
        {#if link.__typename == 'Page'}
          <li class="page"><Link item={[link.title, link.slug]} {prefix} {reload} /></li>
        {:else if link.__typename == 'Chapter'}
          <li class="chapter">
            <h2>{link.title}</h2>
            <ul>
              {#each link.pages as page}
                <li class="page"><Link item={[page.title, page.slug]} {prefix} {reload} /></li>
              {/each}
            </ul>
          </li>
        {:else if link.__typename === 'ExternalLink'}
          <li class="externallink"><Link item={[link.label, link.url]} /></li>
        {/if}
      {/each}
    </ul>
  </div>
</nav>
