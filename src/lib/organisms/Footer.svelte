<script>
  import { Bar, Slider, Square, CollapsingColumns, Microsites, Codestring } from '../index.js';
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
</script>

<footer>
  <CollapsingColumns>
    <Microsites class="rounded title-outset-right" />
    <Codestring {content} />
  </CollapsingColumns>
</footer>

<style>
  footer {
    container-type: inline-size;
    margin-top: var(--component-padding);
  }
</style>