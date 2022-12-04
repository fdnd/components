<script>
  import '../styles/molecules/_two-column-text.css'
  import Button from '../atoms/Button.svelte'
  
  export let columnLeft = {
    title: '',
    text: '',
    button: {
      url: '',
      title: '',  
    },
    footnote: ''
  };
  export let columnRight = {
    title: '',
    text: '',
    button: {
      url: '',
      title: '',  
    },
    footnote: ''
  };
  export let order = 'normal'
  export let border = '';
</script>

<section class="two-column-text two-column-text--{order}">
  <div class="two-column-text-inner">
    <div class="corner"></div>
    <div class="two-column-text-text background--inherit">
      <h2 class="medium-heading">
        {columnLeft.title}
      </h2>
      <p class="small-body">
        {columnLeft.text}
      </p>
      {#if columnLeft.button}
        <Button {...columnLeft.button} />
      {/if}
      {#if columnLeft.footnote}
        <p class="xsmall-body">
          {@html columnLeft.footnote}
        </p>
      {/if}
    </div>
  </div>
  {#if columnRight}
  <div class="two-column-text-inner {border ? 'border-rounding--' + border : 'border-rounding--top-right'}">
    <div class="corner"></div>
    <div class="two-column-text-text background--inherit">
      <h2 class="medium-heading">
        {columnRight.title}
      </h2>
      <p class="small-body">
        {columnRight.text}
      </p>
      {#if columnRight.button}
        <Button url={columnRight.button.url} title={columnRight.button.title} />
      {/if}
      {#if columnRight.footnote}
        <p class="xsmall-body">
          {@html columnRight.footnote}
        </p>
      {/if}
    </div>
  </div>
  {/if}
</section>