<script>
  import { Documentation, CollapsingColumns } from '$lib/index.js';
</script>

<h2>CollapsingColumns</h2>

<p>
  We use a couple of templates that take care for the base layout of our pages. A template component
  usually is nothing more that a div with a classname and a grid or flex layout in css. Sometimes a
  template demands a specific set of children as is the case with the documentation template.
</p>

<p>Is a multi-column collapsing component.</p>

<div class="colcolcontainer">
  <CollapsingColumns>
    <div>&lt;div/&gt;</div>
    <div>&lt;div/&gt;</div>
    <div>&lt;div/&gt;</div>
    <div>&lt;div/&gt;</div>
    <div>&lt;div/&gt;</div>
    <div>&lt;div/&gt;</div>
  </CollapsingColumns>
</div>

<style>
  .colcolcontainer {
    --background: var(--c-green);
    background: var(--background);

    --color: var(--c-blue);
    color: var(--color);
  }
  .colcolcontainer div {
    --background: var(--c-purple);
    background: var(--background);

    --color: var(--c-blue);
    color: var(--color);
  }
</style>
