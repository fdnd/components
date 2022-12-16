<script>
  import { Documentation } from '$lib/index.js';

  let data = {
    'Getting Started': {
      Introduction: '/components'
    },
    Atoms: {},
    Molecules: {
      Branding: '/components/molecules/branding',
      PageHeader: '/components/molecules/pageheader',
      Nav: '/components/molecules/nav',
      TextBlock: '/components/molecules/textblock'
    },
    Organisms: {
      Footer: '/components/organisms/footer'
    },
    Templates: {
      Templates: '/components/templates'
    }
  };
</script>

<Documentation {data}>
  <slot />
</Documentation>
