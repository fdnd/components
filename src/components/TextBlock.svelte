<script>
  import Logo from './partials/Logo.svelte'
  import HvaLogo from './partials/HvaLogo.svelte'
  import Button from './partials/Button.svelte'
  export let content = {};
</script>

<section class="text-block {content.image ? 'has-image': ''}">
  <div class="text-block-inner {content.border ? 'text-block-rounding--' + content.border : 'text-block-rounding--top-right'}">
    <div class="corner"></div>
    <div class="text-block-text background--inherit">
      <h2 class="medium-heading">
        {content.title}
      </h2>
      <p class="small-body">
        {content.text}
      </p>
      {#if content.button}
        <Button url={content.button.url} title={content.button.title} />
      {/if}
      {#if content.footnote}
        <p class="xsmall-body">
          {@html content.footnote}
        </p>
      {/if}
    </div>
  </div>
  {#if content.image}
    <div class="text-block-image">
      <img src={content.image.src} alt="{content.image.alt}">
    </div>
  {/if}
</section>