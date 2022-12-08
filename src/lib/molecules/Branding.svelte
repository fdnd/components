<script>
  import '../styles/molecules/_branding.css';
  import HvaLogo from '../atoms/HvaLogo.svelte';
  import HvaPayoff from '../atoms/HvaPayoff.svelte';
  import FdndLogo from '../atoms/FdndLogo.svelte';

  export let color = 'white';
</script>

<div class="branding branding--top">
  <HvaLogo {color} />
  <FdndLogo {color} />
</div>

<div>
  <slot />
</div>

<div class="branding branding--bottom">
  <HvaPayoff {color} />
</div>
