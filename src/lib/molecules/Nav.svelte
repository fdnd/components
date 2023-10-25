<script>
  import { page } from '$app/stores';
  export let data = {};
</script>

<nav>
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
</nav>

<style>
  nav {
    container: nav / inline-size;
  }
  h2 {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  ul {
    padding: 0;
    display: flex;
    /* Implement reverse collapsing */
    flex-flow: row-reverse wrap-reverse;
    justify-content: flex-end;
    list-style: none;
  }
  li {
    list-style: none;
    white-space: nowrap;
  }
  a {
    margin: 0.2rem;
    padding: 0.6rem 1.2rem;
    display: inline-block;

    border-width: 1px;
    border-style: solid;
    border-radius: var(--pilled);

    font-weight: normal;
    text-decoration: none;
    transform-origin: center center;
  }
  /* Ugly importance.. we need to overrule more specific styling rules set below... */
  a.active {
    --highlight: var(--color-green);
    background: var(--highlight) !important;
    color: var(--color-blue) !important;
    border-color: var(--highlight) !important;
  }

  /* Change the order back to normal */
  li:nth-of-type(1) {
    order: 11;
  }
  li:nth-of-type(2) {
    order: 10;
  }
  li:nth-of-type(3) {
    order: 9;
  }
  li:nth-of-type(4) {
    order: 8;
  }
  li:nth-of-type(5) {
    order: 7;
  }
  li:nth-of-type(6) {
    order: 6;
  }
  li:nth-of-type(7) {
    order: 5;
  }
  li:nth-of-type(8) {
    order: 4;
  }
  li:nth-of-type(9) {
    order: 3;
  }
  li:nth-of-type(10) {
    order: 2;
  }
  li:nth-of-type(11) {
    order: 1;
  }

  li:nth-of-type(1) a,
  li:nth-of-type(2) a,
  li:nth-of-type(5) a,
  li:nth-of-type(7) a,
  li:nth-of-type(11) a {
    border-radius: var(--rounded);
  }

  li:nth-of-type(odd) a,
  li:nth-of-type(even) a:hover,
  li:nth-of-type(odd) a:focus {
    color: var(--color);
    background-color: var(--background);
    border-color: var(--color);
  }
  li:nth-of-type(even) a,
  li:nth-of-type(odd) a:hover,
  li:nth-of-type(odd) a:focus {
    color: var(--background);
    background-color: var(--color);
    border-color: var(--background);
  }
</style>