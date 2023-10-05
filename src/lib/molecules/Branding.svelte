<script>
  import {HvaLogo, HvaPayoff, FdndLogo} from '../index.js'
</script>

<div>
  <HvaLogo />
</div>

<slot />

<div class="payoff">
  <HvaPayoff />
</div>

<style>
  div {
    container: branding / inline-size;
    padding: 1rem;
    height: 4rem;
    display: flex;
    flex-direction: row;
    flex-wrap:nowrap;
    justify-content: space-between;
    z-index: 0;
  }
  div.payoff {
    height: 3rem;
  }
</style>