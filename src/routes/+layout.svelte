<script>
  import { Branding, Header, Wrapper, Nav, Footer } from '$lib/index.js'

  let menu = {
    Menu: {
      Home: '/',
      Components: '/components',
      Utility: '/utility',
      Styleguide: '/styleguide',
    },
  }
</script>

<svelte:head>
  <title>FDND: Component Library</title>
</svelte:head>

<Branding>
  <Wrapper>
    <Header title="Component Library" punchline="A magical place where our components will live happily ever after..." />
    <Nav data={menu} />
    <slot />
    <Footer />
  </Wrapper>
</Branding>