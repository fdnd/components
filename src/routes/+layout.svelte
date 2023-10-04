<script>
  import { Branding, Wrapper, Nav, Footer } from '$lib/index.js';

  let menu = {
    Menu: {
      Home: '/',
      Components: '/components',
      Styleguide: '/styleguide'
    }
  };
</script>

<svelte:head>
  <title>FDND: Component Library</title>
</svelte:head>

<Branding>
  <Wrapper>
    <Nav data={menu} />
    <slot />
    <Footer />
  </Wrapper>
</Branding>