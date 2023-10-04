<script>
  import HvaLogo from '../atoms/HvaLogo.svelte';
  import HvaPayoff from '../atoms/HvaPayoff.svelte';
  import FdndLogo from '../atoms/FdndLogo.svelte';
</script>

<div>
  <HvaLogo />
  <FdndLogo />
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

  /* Hide the FDND logo on screens smaller than 14rem */
  /* @container branding (max-width: 14rem) {
    .branding .fdnd-logo {
      display: none;
    }
  } */
</style>