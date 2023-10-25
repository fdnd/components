<script>
  import { Documentation } from '$lib/index.js'

  let data = {
    'Inhoud': {
      Introductie: '/styleguide/introduction',
      Vormentaal: '/styleguide/vormen'
    },
  }
</script>

<Documentation {data}>
  <slot/>
</Documentation>