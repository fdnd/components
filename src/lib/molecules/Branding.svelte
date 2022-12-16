<script>
  import '../styles/molecules/_branding.css';
  import HvaLogo from '../atoms/HvaLogo.svelte';
  import HvaPayoff from '../atoms/HvaPayoff.svelte';
  import FdndLogo from '../atoms/FdndLogo.svelte';
</script>

<div class="foo branding branding--top">
  <HvaLogo />
  <FdndLogo />
</div>

<slot />

<div class="branding branding--bottom">
  <HvaPayoff />
</div>
