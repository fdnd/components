<script>
  import '../styles/molecules/_page-header.css'
  export let image = {};
  export let subtitle = '';
  export let title = '';
  export let meta = {};
</script>

<section class="page-header {image ? 'has-image': ''}">
  <div class="page-header-inner">
    <div class="page-header-text background--inherit rounded--left-bottom">
      <p class="small-heading caps font-bold">
        {subtitle}
      </p>
      <h1 class="large-heading color--highlight">
        {title}
      </h1>
    </div>
    {#if image}
      <div class="page-header-image">
        <img src={image.src} alt="{image.alt}">
      </div>
    {/if}
    {#if meta}
    <ul class="page-header-meta background--inherit rounded--right-top">
        {#each meta as metaItem}
          <li class="page-header-item">
            <p class="font-bold caps medium-body">
              { metaItem.label }
            </p>
            <p class="page-header-value medium-body">
              {@html metaItem.text }
            </p>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</section>
