<script>
  import { page } from '$app/stores';

  export let item = {
    Example: 'http://example.com'
  };

  console.log(item);

  const url = Object.keys(item)[0];
  const body = Object.values(item)[0];
</script>

<li>
  <a href={url} class:active={$page.url.pathname == url}>
    {body}
  </a>
</li>
