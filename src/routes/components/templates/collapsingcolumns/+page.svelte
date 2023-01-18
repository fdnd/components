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

<CollapsingColumns>
  <div>&lt;div/&gt;</div>
  <div>&lt;div/&gt;</div>
  <div>&lt;div/&gt;</div>
  <div>&lt;div/&gt;</div>
  <div>&lt;div/&gt;</div>
  <div>&lt;div/&gt;</div>
</CollapsingColumns>

<style>
  nav,
  main {
    padding: var(--component-padding);
    width: 100%;
    height: 20rem;
    background-color: var(--c-green);
    color: var(--c-blue);
  }
</style>
