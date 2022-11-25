<script>
  import PageHeader from '../lib/molecules/PageHeader.svelte'
  import headerImage from '../assets/img/header-photo.jpg'

  const pageHeaderContents = {
    subtitle: 'Associate Degree',
    title: 'Frontend design & development',
    image: {
      src: headerImage,
      alt: 'Een man en een vrouw kijken weg van de camera'
    },
    meta: [
      {
        label: 'Duur',
        text: 'Twee jaar'
      },
      {
        label: 'Type',
        text: 'Voltijd'
      },
      {
        label: 'Open dag',
        text: '4 november 2022'
      }
    ]
  }
</script>

<PageHeader content={pageHeaderContents} />

