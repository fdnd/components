<script>
  import { Link } from '$lib/index.js';

  let item = ['example.com', 'https://example.com'];
  let reload = true;
</script>

<h2>Link</h2>

<p>
  It's a link. Comes in two flavors depending on passed parameters. The first has a named tuple
  containing the name and the url, passed as item.
</p>
<pre>
  <code>
  let item = ['example.com', 'https://example.com'];

  &lt;Link &#123;item&#125; /&gt;
  </code>
</pre>

<Link {item} />
<br /><br />
<p>
  The second has an optional boolean parameter <em>reload</em> which enforces the page to reload using
  the browser instead of svelte's client-side hydration system.
</p>
<pre>
  <code>
  &lt;Link &#123;item&#125; &#123;reload&#125; /&gt;
  </code>
</pre>
<Link {item} {reload} />
