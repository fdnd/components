<script>
  import { Documentation } from '$lib/index.js'

  let data = {
    'Getting Started': {
      Introduction: '/utility/introduction',
    },
    Colors: {
      '.blue-on-green': '/utility/blue-on-green',
      '.green-on-blue': '/utility/green-on-blue',
      '.blue-on-purple': '/utility/blue-on-purple',
      '.purple-on-blue': '/utility/purple-on-blue',
      '.blue-on-white': '/utility/blue-on-white',
      '.white-on-blue': '/utility/white-on-blue',
      '.gradient': '/utility/gradient',
    },
    Corners: {
      
    },
    Sizes: {
      '.rounded': '/utility/rounded',
      '.pilled': '/utility/pilled'
    },
    Titles: {
      '.title-outset-right': '/utility/title-outset-right',
      '.title-outset-left': '/utility/title-outset-left',
    }
  }
</script>

<Documentation {data}>
  <slot/>
</Documentation>