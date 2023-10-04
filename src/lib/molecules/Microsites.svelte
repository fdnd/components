<script>
  // $$restProps.class makes it possible to always inject a class should we want to
</script>

<section class="{$$restProps.class || ''}">
  <div class="corner--top-right" />
  <h2>Microsites</h2>
  <p>
    FDND maakt gebruik van een heleboel microsites in plaats van één grote website met een
    ingewikkelde informatiestructuur. Microsites zijn kleine websites met een specifiek doel ter
    ondersteuning van een campagne, informatie over een product of dienst.
  </p>

  <ul>
    <li><a href="https://fdnd.nl">fdnd.nl</a></li>
    <li><a href="https://agency.fdnd.nl">Agency</a></li>
    <li><a href="https://contact.fdnd.nl">Contact en routebeschrijving</a></li>
    <li><a href="https://docs.fdnd.nl">Documenten</a></li>
    <li><a href="https://partners.fdnd.nl">Partners</a></li>
    <li><a href="https://programma.fdnd.nl">Programma</a></li>
    <li><a href="https://quotes.fdnd.nl">Quotes</a></li>
    <li><a href="https://styleguide.fdnd.nl">Styleguide</a></li>
    <li><a href="https://weloveweb.fdnd.nl">We♥web</a></li>
  </ul>
</section>

<style>
  section {
    position: relative;
    --radius: var(--rounded);
    display: flex;
    flex-wrap: wrap;
    gap: var(--component-padding);
    margin: 0 auto;
    padding: var(--component-padding);
    color: var(--color);
    background-color: var(--background);
    border: 1px solid currentColor;
    border-radius: var(--radius, var(--rounded));
  }
ul {
  padding: 0;
}
ul li {
  display: inline;
}
a {
  color: var(--color);
  white-space: nowrap;
}
</style>