<script>
  export let tag = 'div'
  // $$restProps.class makes it possible to always inject a class should we want to
</script>

<svelte:element
  this={tag}
  class="{$$restProps.class || ''}"
  style="container-type: inline-size; padding: var(--component-padding);"
>
  <slot />
</svelte:element>
