<script>
  import {Bar, Square, Slider, Codestring, Icon} from "$lib/index.js"
</script>

<h2 class="purple-on-blue">Vormen</h2>

<p class="green-on-blue">We werken met een aantal geabstraheerde interface-elementen. Deze worden gevuld met tekst, iconen
en fotografie.</p>

<p class="green-on-blue">Creëer een compositie waar de elementen op elkaars aanwezigheid lijken te reageren; creëer
interactie.</p>

<div class='solidblock'>
  <Codestring>
    <Bar class="purple-on-blue pilled" style="flex-grow: 1"></Bar>
    <Square class="purple-on-blue pilled"></Square>
    <Bar class="blue-on-purple pilled" style="flex-grow: 1"></Bar>
    <Slider class="blue-on-purple pilled" style="flex-basis: 100%"></Slider>
    <Bar class="purple-on-blue rounded" style="flex-grow: 1"></Bar>
    <Bar class="purple-on-blue" style="flex-grow: 1"></Bar>
    <Slider class="blue-on-purple rounded" style="flex-grow: 2"></Slider>
    <Bar class="blue-on-purple rounded" style="flex-basis: 70%"></Bar>
    <Square class="blue-on-purple pilled" style="padding: .3rem"><Icon cr="camera" /></Square>
    <Bar class="purple-on-blue pilled" style="flex-grow:2"></Bar>
  </Codestring>
</div>

<style>
  .solidblock {
    margin-top: 2rem;
    min-width: 26rem;
    max-width: 40rem;
  }
</style>