<script>
  import '../styles/molecules/_brandinghva.css';

  import HvaLogo from '$lib/atoms/HvaLogo.svelte';
  import HvaPayoff from '$lib/atoms/HvaPayoff.svelte';
  import FdndLogo from '$lib/atoms/FdndLogo.svelte';

  export let color = 'white';
</script>

<div class="branding branding--top">
  <HvaLogo {color} />

  <FdndLogo />
</div>

<slot />

<div class="branding branding--bottom">
  <HvaPayoff {color} />
</div>
