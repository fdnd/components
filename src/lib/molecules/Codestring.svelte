<script>
  import { Bar, Slider, Square } from '$lib/index.js'
  // TODO: embrace different layours for the codestring, standard is reversed wrap
</script>

<section class="codestring">
  <slot/>
</section>

<style>
  section {
    display: flex;
    flex-flow: row-reverse wrap-reverse;
    justify-content: flex-end;
    align-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
  }
  /* Reverse the order of the elements for the weird wrapping */
  :global(.codestring > :nth-of-type(1)) { order: 20; }
  :global(.codestring > :nth-of-type(2)) { order: 19; }
  :global(.codestring > :nth-of-type(3)) { order: 18; }
  :global(.codestring > :nth-of-type(4)) { order: 17; }
  :global(.codestring > :nth-of-type(5)) { order: 16; }
  :global(.codestring > :nth-of-type(6)) { order: 15; }
  :global(.codestring > :nth-of-type(7)) { order: 14; }
  :global(.codestring > :nth-of-type(8)) { order: 13; }
  :global(.codestring > :nth-of-type(9)) { order: 12; }
  :global(.codestring > :nth-of-type(10)) { order: 11; }
  :global(.codestring > :nth-of-type(11)) { order: 10; }
  :global(.codestring > :nth-of-type(12)) { order: 9; }
  :global(.codestring > :nth-of-type(13)) { order: 8; }
  :global(.codestring > :nth-of-type(14)) { order: 7; }
  :global(.codestring > :nth-of-type(15)) { order: 6; }
  :global(.codestring > :nth-of-type(16)) { order: 5; }
  :global(.codestring > :nth-of-type(17)) { order: 4; }
  :global(.codestring > :nth-of-type(18)) { order: 3; }
  :global(.codestring > :nth-of-type(19)) { order: 2; }
  :global(.codestring > :nth-of-type(20)) { order: 1; }
</style>