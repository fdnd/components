<script>
  import { page } from '$app/stores';
  export let data = {};
</script>

<nav>
  <div>
  {#each Object.entries(data) as [title, items]}
    <h2>{title}</h2>
    <ul>
      {#each Object.entries(items) as item}
        <li>
          <a href={item[1]} class:active={$page.url.pathname == item[1] || (item[1] != '/' && $page.url.pathname.startsWith(item[1]))}>{item[0]}</a>
        </li>
      {/each}
    </ul>
  {/each}
  </div>
</nav>

<style>
  nav {
    container: nav/inline-size;
  }

  nav ul {
    padding: 0;
  }

  nav li {
    list-style: none;
  }

  nav h2 {
    margin: 0; padding: 0;
    font-size: 1rem;
  }

  nav a {
    color: var(--color);
    font-size: 1rem;
  }
  nav a.active {
    color: var(--color-blue);
    background: var(--highlight);
  }

  nav h2:not(:first-of-type) {
    margin-top: 1rem;
  }
  
  nav div {
    column-count: 1;
  }
  @container nav (min-width: 16.4rem) {
    nav div {
      column-count: 2;
    }
  }
  @container nav (min-width: 25.1rem) {
    nav div {
      column-count: 3;
    }
  }

</style>