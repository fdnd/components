<script>
  // $$restProps.class makes it possible to always inject a class should we want to
</script>

<div class="{$$restProps.class || ''}">
  <slot />
</div>

<style>
  div {
    container-type: inline-size;
    padding: var(--component-padding);
  }
</style>
