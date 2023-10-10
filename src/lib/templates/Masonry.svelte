<script>
  import { onMount } from 'svelte'
  onMount(() => {
    let grids = [...document.querySelectorAll('.masonry')];

    if (grids.length && getComputedStyle(grids[0]).gridTemplateRows !== 'masonry') {
      grids = grids.map(grid => ({
        _el: grid,
        gap: parseFloat(getComputedStyle(grid).rowGap),
        items: [...grid.childNodes].filter(c => c.nodeType === 1),
        ncol: 0 }));

        function layout() {
          grids.forEach(grid => {
            /* get the post relayout number of columns */
            let ncol = getComputedStyle(grid._el).gridTemplateColumns.split(' ').length;

            /* if the number of columns has changed */
            if (grid.ncol !== ncol) {
              /* update number of columns */
              grid.ncol = ncol;

              /* revert to initial positioning, no margin */
              grid.items.forEach(c => c.style.removeProperty('margin-top'));

              /* if we have more than one column */
              if (grid.ncol > 1) {
                grid.items.slice(ncol).forEach((c, i) => {
                  let prev_fin = grid.items[i].getBoundingClientRect().bottom /* bottom edge of item above */,
                  curr_ini = c.getBoundingClientRect().top /* top edge of current item */;

                  c.style.marginTop = `${prev_fin + grid.gap - curr_ini}px`;
                });
              }
            }
          });
        }

      addEventListener('load', e => {
        layout(); /* initial load */
        addEventListener('resize', layout, false); /* on resize */
      }, false);
    }
  })
</script>

<div class="masonry">
  <slot/>
</div>

<style>
  /* :global(:has(.masonry)) {
    container-type: inline-size;
  } */
  .masonry {
    display: grid;
    grid-template-columns: repeat(auto-fit, min(10em, 100%));
    grid-template-rows: masonry;
    justify-content: center;
    grid-gap: 0.5em;
    padding: 0.5em;
  }
  .masonry > * {
    width: min(10em, 100%);
  }
</style>