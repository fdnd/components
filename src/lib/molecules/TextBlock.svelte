<script>
  import '../styles/molecules/_text-block.css'
  import Button from '../atoms/Button.svelte'
  
  export let title = '';
  export let text = '';
  export let button = {
    url: '',
    title: ''
  };
  export let footnote = '';
  export let image = {};
  export let border = ''
</script>

<section class="text-block {image ? 'has-image': ''}">
  <div class="text-block-inner {border ? 'border-rounding--' + border : 'border-rounding--top-right'}">
    <div class="corner"></div>
    <div class="text-block-text background--inherit">
      <h2 class="medium-heading">
        {title}
      </h2>
      <p class="small-body">
        {text}
      </p>
      {#if button}
        <Button url={button.url} title={button.title} />
      {/if}
      {#if footnote}
        <p class="xsmall-body">
          {@html footnote}
        </p>
      {/if}
    </div>
  </div>
  {#if image}
    <div class="text-block-image">
      <img src={image.src} alt="{image.alt}">
      <p class="xsmall-body">{image.caption}</p>
    </div>
  {/if}
</section>