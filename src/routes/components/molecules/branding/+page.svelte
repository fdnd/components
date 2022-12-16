<script>
  import { Branding } from '$lib/index.js';
</script>

<!-- Should have the readme.md contents, can we hook it together? -->

<h2>Branding</h2>
<p>
  The branding component has a slot and will usually be applied as a wrapper for a layout. It places
  two semantically meaningless divs holding the HvA and FDND branding on the top and HvA Payoff on
  the bottom. It uses container queries to decide what version to show as demonstrated below. You
  have some control over the colors by changing root-vars on the parent element:
</p>

<pre><code>
&lt;div class="large"&gt;
  &lt;Branding /&gt;
&lt;/div&gt;

&lt;style&gt;
.large &#123;
  --background: var(--c-green);
  --color: var(--c-blue);
  --highlight: var(--c-blue);

  background-color: var(--background);
  color: var(--color);
&#125;
&lt;/style&gt;

</code></pre>

<div class="large">
  <Branding />
</div>

<div class="normal theme-purple">
  <Branding />
</div>

<div class="small background--light">
  <Branding />
</div>

<style>
  .large {
    --background: var(--c-green);
    --color: var(--c-blue);
    --highlight: var(--c-blue);

    background-color: var(--background);
    color: var(--color);
  }
  .normal {
    --highlight: var(--c-light);
    width: 66%;
  }

  .small {
    --background: var(--c-light);
    --color: var(--c-blue);
    --highlight: var(--c-blue);

    background-color: var(--background);
    color: var(--color);

    width: 40%;
  }
</style>
