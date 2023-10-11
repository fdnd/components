<script>
  import { Documentation } from '$lib/index.js'

  let data = {
    'Getting Started': {
      Introduction: '/styleguide/introduction'
    },
  }
</script>

<Documentation {data}>
  <slot/>
</Documentation>