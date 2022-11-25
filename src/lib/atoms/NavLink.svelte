<script>
  import { page } from '$app/stores';

  export let item = {};

  const url = Object.keys(item)[0] || '';
  const body = Object.values(item)[0] || '';
</script>

<li>
  <a href={url} class:active={$page.url.pathname == url}>
    {body}
  </a>
</li>
