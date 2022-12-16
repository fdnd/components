<script>
  import '../styles/atoms/_navlink.css';
  import { page } from '$app/stores';

  export let item = [];

  const url = item[1] || '';
  const body = item[0] || '';
</script>

<li>
  <a href={url} class:active={$page.url.pathname == url}>
    {body}
  </a>
</li>
