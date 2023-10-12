<script>
  import { Bar, Slider, Square } from '$lib/index.js'
   let content = [
    { component: Bar, class: 'blue-on-purple rounded', text: 'Information 🔍' },
    { component: Square, class: 'blue-on-green pilled', text: '♥' },
    { component: Slider, class: 'blue-on-white', text: 'to be', bgtext: 'free' },
    { component: Square, class:'blue-on-green', text: '@' },
    { component: Bar, class: 'purple-on-blue pilled', text: 'frontend', style: 'flex-grow: 3' },
    { component: Bar, class: 'blue-on-purple pilled', text: 'design', style: 'flex-grow: 3' },
    { component: Square, class: 'white-on-blue pilled', text: '&' },
    { component: Bar, class: 'blue-on-green pilled', text: 'development', style: 'flex-grow: 5' },
  ]
  // TODO: write test for the string and give usefull feedback
</script>

<section class="codestring">
  {#each content as code}
    <svelte:component
      this={code.component}
      class={code.class}
      style={code.style}
      bgtext={code.bgtext}>
      {code.text}
    </svelte:component>
  {/each}
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
  :global(.codestring > :nth-of-type(1)) { order: 12; }
  :global(.codestring > :nth-of-type(2)) { order: 11; }
  :global(.codestring > :nth-of-type(3)) { order: 10; }
  :global(.codestring > :nth-of-type(4)) { order: 9; }
  :global(.codestring > :nth-of-type(5)) { order: 8; }
  :global(.codestring > :nth-of-type(6)) { order: 7; }
  :global(.codestring > :nth-of-type(7)) { order: 6; }
  :global(.codestring > :nth-of-type(8)) { order: 5; }
  :global(.codestring > :nth-of-type(9)) { order: 4; }
  :global(.codestring > :nth-of-type(10)) { order: 3; }
  :global(.codestring > :nth-of-type(11)) { order: 2; }
  :global(.codestring > :nth-of-type(12)) { order: 1; }
</style>