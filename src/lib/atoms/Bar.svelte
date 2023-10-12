<script>
</script>

<span class="{$$restProps.class || ''}" style="{$$restProps.style || ''}">
  <slot/>
</span>

<style>
  span {
    display: block;
    text-align: center;
    white-space: nowrap;
    padding: 0 1.2rem;
    height: var(--codestring-height);
    line-height: var(--codestring-height);
    font-size: 1.3rem;

    border-style: solid;
    border-width: 1px;
  }
</style>