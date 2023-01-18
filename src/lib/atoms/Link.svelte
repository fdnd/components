<script>
  import '../styles/atoms/_link.css';
  import { page } from '$app/stores';

  export let item = [];

  const url = item[1] || '';
  const body = item[0] || '';
</script>

<a
  href={url}
  class:active={$page.url.pathname == url || (url != '/' && $page.url.pathname.startsWith(url))}
  >{body}</a
>
