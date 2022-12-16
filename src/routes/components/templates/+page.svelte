<script>
  import { Documentation, CollapsingColumns } from '$lib/index.js';
</script>

<h2>Templates</h2>

<p>
  We use a couple of templates that take care for the base layout of our pages. A template component
  usually is nothing more that a div with a classname and a grid or flex layout in css. Sometimes a
  template demands a specific set of children as is the case with the documentation template.
</p>

<h3>Documentation</h3>
<p>
  Consists of a div.documentation with a media queried grid layout. It is used for this site so you
  can witness a double collapse on a small enough screen. The Documentation component expects two
  elements as children, most logical would be a nav and a main element. Classes on these children
  are optional.
</p>

<!-- <DocumentationLayout>
  <nav>&lt;nav/&gt;</nav>
  <main>&lt;main/&gt;</main>
</DocumentationLayout>

<h3>CollapsingColumns</h3>
<p>Is a multi-column collapsing component.</p>
-->

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
