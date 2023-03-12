<script>
  import '../styles/atoms/_link.css';
  import { page } from '$app/stores';

  export let reload = false;
  export let prefix = '';
  export let item = [];

  const url = prefix + item[1] || '';
  const body = item[0] || '';
</script>

<a
  href={url}
  class:active={$page.url.pathname == url || (url != '/' && $page.url.pathname.startsWith(url))}
  data-sveltekit-reload={reload ? '' : 'off'}>{body}</a
>
