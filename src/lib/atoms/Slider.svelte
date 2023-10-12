<script>
  export let bgtext;
</script>

<span class="outer {$$restProps.class || ''}" style="{$$restProps.style || ''}">
  <span><slot/></span>
  {bgtext || ''}
</span>

<style>
  .outer {
    display: flex;
    white-space: nowrap;
    padding: 0 1.2rem;
    height: var(--codestring-height);
    line-height: var(--codestring-height);
    font-size: 1.3rem;

    border-style: solid;
    border-width: 1px;
    border-radius: var(--pilled);
    
    justify-content: space-between;
    width: 11rem;
  }
  span > span {
    margin-top: 0.15rem;
    margin-left: -1rem;
    height: 3rem;
    line-height: 3rem;
    padding: 0 1rem;
    border-radius: var(--pilled);
    background-color: var(--color);
    color: var(--background);
  }
</style>