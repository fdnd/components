<script>
  import { Bar, Slider, Icon, Square, CollapsingColumns, Microsites, Codestring } from '../index.js';
</script>

<footer>
  <CollapsingColumns>
    <Microsites class="rounded title-outset-right" />
    <Codestring>
      <Bar class="blue-on-white pilled">Nieuw!</Bar>
      <Bar class="blue-on-purple rounded">Information <Icon name="search" style="height: 2rem; margin-left: .5rem; margin-bottom: -.4rem;"/></Bar>
      <Square class="blue-on-green pilled" style="padding: .3rem;"><Icon name="heart" alt="loves"/></Square>
      <Slider class="blue-on-white pilled" bgtext="free">to be</Slider>
      <Square class="blue-on-green">@</Square>
      <Bar class="purple-on-blue pilled" style="flex-grow: 3">frontend</Bar>
      <Bar class="blue-on-purple pilled" style="flex-grow: 5">Design</Bar>
      <Square class="white-on-blue pilled">&</Square>
      <Bar class="blue-on-green pilled" style="flex-grow: 5">development</Bar>
    </Codestring>
  </CollapsingColumns>
</footer>

<style>
  footer {
    container-type: inline-size;
    margin-top: var(--component-padding);
  }
</style>