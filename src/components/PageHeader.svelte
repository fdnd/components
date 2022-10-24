<script>
  import Logo from './partials/Logo.svelte'
  import HvaLogo from './partials/HvaLogo.svelte'
  export let content = {};
</script>

<section class="page-header color--light {content.image ? 'has-image': ''}">
  <div class="page-header-inner">
    <div class="page-header-text background--inherit rounded--left-bottom">
      <p class="small-heading caps font-bold">
        {content.subtitle}
      </p>
      <h1 class="large-heading color--green">
        {content.title}
      </h1>
    </div>
    {#if content.image}
      <div class="page-header-image">
        <img src={content.image.src} alt="{content.image.alt}">
      </div>
    {/if}
    {#if content.meta}
    <ul class="page-header-meta background--inherit rounded--right-top">
        {#each content.meta as metaItem}
          <li class="page-header-item">
            <p class="font-bold caps medium-body">
              { metaItem.label }
            </p>
            <p class="medium-body">
              { metaItem.text }
            </p>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</section>