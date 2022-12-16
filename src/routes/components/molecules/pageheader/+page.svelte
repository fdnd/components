<script>
  import { PageHeader } from '$lib/index.js';
  import headerImage from '$assets/img/header-photo.jpg';

  const pageHeaderContents = {
    subtitle: 'Component library',
    title: 'Frontend design & development',
    image: {
      src: headerImage,
      alt: 'Een man en een vrouw kijken weg van de camera'
    },
    meta: [
      {
        label: 'Framework',
        text: 'Sveltekit'
      },
      {
        label: 'Package',
        text: '<a href="https://www.npmjs.com/package/@fdnd/components" target="_blank" rel="noopener">NPM</a>'
      },
      {
        label: 'Taal',
        text: 'CSS, HTML & JS'
      }
    ]
  };
</script>

<h2>PageHeader</h2>

<p>This is the pageheader component.</p>

<PageHeader {...pageHeaderContents} />
