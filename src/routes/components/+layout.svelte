<script>
  import { Documentation } from '$lib/index.js'

  let data = {
    'Getting Started': {
      Introduction: '/components/introduction'
    },
    Atoms: {
      // Button: '/components/atoms/button',
      FdndLogo: '/components/atoms/fdndlogo',
      HvaLogo: '/components/atoms/hvalogo',
      HvaPayoff: '/components/atoms/hvapayoff',
      // Link: '/components/atoms/link'
    },
    Molecules: {
      Branding: '/components/molecules/branding',
      Codestring: '/components/molecules/codestring',
      Header: '/components/molecules/header',
      Microsites: '/components/molecules/microsites',
      Nav: '/components/molecules/nav',
      Subnav: '/components/molecules/subnav',
      // PageHeader: '/components/molecules/pageheader',
      // TextBlock: '/components/molecules/textblock',
      // TwoColumntext: '/components/molecules/twocolumntext'
    },
    Organisms: {
      Footer: '/components/organisms/footer'
    },
    Templates: {
      CollapsingColumns: '/components/templates/collapsingcolumns',
      Documentation: '/components/templates/documentation',
      Wrapper: '/components/templates/wrapper'
    }
  }
</script>

<Documentation {data}>
  <slot/>
</Documentation>