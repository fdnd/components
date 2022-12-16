<script>
  import { Nav } from '$lib/index.js';

  let menu = {
    Title: {
      Link: '/example'
    },
    'Longer title': {
      'Longer link': '/example',
      'Second link': '/example'
    }
  };
</script>

<h2>Nav</h2>

<p>
  Is a recursive list generator. It expects a data structure holding subtitles and links which will
  be parsed into a set of ul>li>a elements. Svelte will add .active to the currently active element.
  You can add an optional type to pass what type of nav you're implementing, options being:
  document.
</p>

<pre>
<code>
  let menu = &#123;
    Title: &#123;
      Link: '/example'
    &#125;,
    'Longer title': &#123;
      'Longer link': '/example',
      'Second link': '/example'
    &#125;
  &#125;;

  &lt;Nav data={menu} type="document" /&gt;
</code>
</pre>

<p>Will generate:</p>

<div class="example">
  <Nav data={menu} type="document" />
</div>

<style>
  .example {
    --background: var(--c-green);
    --color: var(--c-blue);
    --highlight: var(--c-blue);

    background-color: var(--background);
    color: var(--color);
  }
</style>
