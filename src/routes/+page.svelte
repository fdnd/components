<script>
  import { PageHeader, TextBlock, TwoColumnText } from '$lib/index.js'
  import headerImage from '../assets/img/header-photo.jpg'

  const pageHeaderContents = {
    subtitle: 'Frontend design & development',
    title: 'Component library',
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
      },
    ]
  }
  const textBlockContents = {
    title: 'Frontender worden?',
    text: 'Heb jij een passie voor code, problemen oplossen en zet jij je graag in voor de eindgebruiker van een site of app? Wil jij leren hoe je interactieve toepassingen voor het web maakt? Én ben je op zoek naar een praktijkgerichte hbo-opleiding, maar wil je niet vier jaar lang studeren? Dan is de nieuwe tweejarige Associate degree Frontend Design & Development (FDND) vast iets voor jou.',
    button: {
      title: 'Schrijf je direct in via studielink',
      url: '#studielink'
    },
    footnote: 'Heb je een vraag? Neem dan contact op via <a href="mailto:info-cmd@hva.nl">info-cmd@hva.nl</a>',
    image: {
      src: headerImage,
      alt: 'Een man en een vrouw kijken weg van de camera',
      caption: 'In het studiomodel werken studenten onder begeleiding van coaches en experts uit het vakgebied aan praktijkgerichte opdrachten.'
    },
  }

  const twoColumnTextContents = {
    columnLeft: {
      title: 'Frontender worden?',
      text: 'Heb jij een passie voor code, problemen oplossen en zet jij je graag in voor de eindgebruiker van een site of app? Wil jij leren hoe je interactieve toepassingen voor het web maakt? Én ben je op zoek naar een praktijkgerichte hbo-opleiding, maar wil je niet vier jaar lang studeren? Dan is de nieuwe tweejarige Associate degree Frontend Design & Development (FDND) vast iets voor jou.',
      button: {
        title: 'Schrijf je direct in via studielink',
        url: '#studielink'
      },
      footnote: 'Heb je een vraag? Neem dan contact op via <a href="mailto:info-cmd@hva.nl">info-cmd@hva.nl</a>',
    },
    columnRight: {
      title: 'Frontender worden?',
      text: 'Heb jij een passie voor code, problemen oplossen en zet jij je graag in voor de eindgebruiker van een site of app? Wil jij leren hoe je interactieve toepassingen voor het web maakt? Én ben je op zoek naar een praktijkgerichte hbo-opleiding, maar wil je niet vier jaar lang studeren? Dan is de nieuwe tweejarige Associate degree Frontend Design & Development (FDND) vast iets voor jou.',
      footnote: 'Heb je een vraag? Neem dan contact op via <a href="mailto:info-cmd@hva.nl">info-cmd@hva.nl</a>',
    }
  }
</script>

<PageHeader {...pageHeaderContents} />
<TextBlock {...textBlockContents} />
<TwoColumnText {...twoColumnTextContents} />

