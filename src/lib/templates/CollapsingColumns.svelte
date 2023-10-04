<script>
</script>

<div class="collapsing-columns">
  <slot />
</div>

<style>
  .collapsing-columns {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--component-padding);
  }

  /* Ignore the warning, this works.. */
  @container (min-width: 40rem) {
    .collapsing-columns {
      grid-template-columns: 1fr 1fr;
    }
  }
  @container (min-width: 80rem) {
    .collapsing-columns {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @container (min-width: 120rem) {
    .collapsing-columns {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
</style>