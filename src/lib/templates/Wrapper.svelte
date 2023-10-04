<script>
</script>

<div class="wrapper">
  <slot />
</div>

<style>
  .wrapper {
    padding: 0 var(--component-padding);
    display: flex;
    flex-direction: column;
    gap: var(--component-gap);
  }
</style>