<script>
  import { Nav, Branding, Documentation, Footer } from '../index.js';

  export let menu = {};
  export let submenu = {};
</script>

<Branding>
  <Nav data={menu} type="codestring" />
  <Documentation>
    <Nav data={submenu} type="document" />

    <main>
      <slot />
    </main>
  </Documentation>
  <Footer />
</Branding>
