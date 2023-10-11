<script>
  // $$restProps.class makes it possible to always inject a class should we want to
</script>

<section class="{$$restProps.class || ''}">
  <h2>Microsites</h2>
  <p>
    FDND maakt gebruik van een heleboel microsites in plaats van één grote website met een
    ingewikkelde informatiestructuur. Microsites zijn kleine websites met een specifiek doel ter
    ondersteuning van een campagne, informatie over een product of dienst.
  </p>

  <ul>
    <li><a href="https://fdnd.nl">fdnd.nl</a></li>
    <li><a href="https://contact.fdnd.nl">contact en routebeschrijving</a></li>
    <li><a href="https://docs.fdnd.nl">documenten</a></li>
    <li><a href="https://partners.fdnd.nl">partners</a></li>
    <li><a href="https://programma.fdnd.nl">programma</a></li>
    <li><a href="https://quotes.fdnd.nl">quotes</a></li>
    <li><a href="https://styleguide.fdnd.nl">styleguide</a></li>
    <li><a href="https://weloveweb.fdnd.nl">we♥web</a></li>
  </ul>
</section>

<style>
  section {
    padding: var(--component-padding);
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