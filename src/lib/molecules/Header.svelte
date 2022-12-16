<script>
  import '../styles/molecules/_header.css';
  export let title = '';
  export let punchline = '';
</script>

<header>
  <h1>
    <abbr title="Frontend Design & Development"><span>FDND</span></abbr>
    <span>{title}</span>
  </h1>
  <p>{punchline}</p>
</header>
