<script>
  import { DocumentationLayout } from '$lib/index.js';

  let menu = {
    Menu: {
      Components: '/components',
      Styleguide: '/styleguide'
    }
  };
  let submenu = {
    'Getting Started': {
      Introduction: '/'
    },
    Images: {
      Branding: '/images/branding',
      PageHeader: '/images/pageheader'
    },
    Layout: {
      Templates: '/templates'
    },
    Navigation: {
      Navigation: '/navigation/nav'
    }
  };
</script>

<svelte:head>
  <title>Frontend Design & Development | Component Library</title>
</svelte:head>

<DocumentationLayout {menu} {submenu}>
  <slot />
</DocumentationLayout>
