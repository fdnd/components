<script>
  import { Bar, Slider, Square, CollapsingColumns, Microsites, Codestring } from '../index.js';
</script>

<footer>
  <CollapsingColumns>
    <Microsites class="rounded title-outset-right" />
    <Codestring>
      <Bar class="blue-on-purple rounded">Information 🔍</Bar>
      <Square class="blue-on-green pilled">♥</Square>
      <Slider class="blue-on-white" bgtext="free">to be</Slider>
      <Square class="blue-on-green">@</Square>
      <Bar class="purple-on-blue pilled" style="flex-grow: 3">frontend</Bar>
      <Square class="white-on-blue pilled">&</Square>
      <Bar class="blue-on-green pilled" style="flex-grow:5">development</Bar>
    </Codestring>
  </CollapsingColumns>
</footer>

<style>
  footer {
    container-type: inline-size;
    margin-top: var(--component-padding);
  }
</style>