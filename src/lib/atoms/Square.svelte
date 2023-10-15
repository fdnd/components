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

    width: var(--codestring-height);
    height: var(--codestring-height);
    line-height: var(--codestring-height);
    font-size: 1.3rem;

    border-style: solid;
    border-width: 1px;
  }
</style>