<script>
<<<<<<< HEAD
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
=======
  import '../styles/molecules/_text-block.css';
  import Button from '../atoms/Button.svelte';
  export let content = {};
</script>

<section class="text-block {content.image ? 'has-image' : ''}">
  <div
    class="text-block-inner {content.border
      ? 'text-block-rounding--' + content.border
      : 'text-block-rounding--top-right'}"
  >
    <div class="corner" />
>>>>>>> f7019f768ba15922c3c3645f2f0281d050f46bda
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
<<<<<<< HEAD
      <img src={image.src} alt="{image.alt}">
      <p class="xsmall-body">{image.caption}</p>
=======
      <img src={content.image.src} alt={content.image.alt} />
      <p class="xsmall-body">{content.image.caption}</p>
>>>>>>> f7019f768ba15922c3c3645f2f0281d050f46bda
    </div>
  {/if}
</section>
