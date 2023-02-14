<script>
  import { DocNav } from '$lib/index.js';

  let menu = {
    id: 'cldx5rnyj2u5l0avzhzmvfu1r',
    title: 'Visitatie',
    slug: 'visitatie',
    linkTo: [
      {
        __typename: 'Page',
        id: 'cldwx19572a7p0avz45i9regx',
        title: 'FDND Docs',
        slug: 'homepage'
      },
      {
        __typename: 'Chapter',
        id: 'cle00r6m328ps0cus58qfkrjq',
        title: 'Leerresultaten',
        slug: 'leerresultaten',
        pages: [
          {
            id: 'cle01431k2b350bw8wdua34rq',
            title: 'Introductie',
            slug: 'introductie'
          },
          {
            id: 'cle1lp79t3a380bw8ed436dcs',
            title: 'Visie op het beroep van frontender',
            slug: 'visie-op-het-beroep'
          }
        ]
      },
      {
        __typename: 'ExternalLink',
        id: 'cle1lm60b388o0cusff5nw31a',
        label: 'FDND Github',
        url: 'https://github.com/fdnd'
      }
    ]
  };
</script>

<h2>DocNav</h2>

<p>
  It's a nav element for documents created to deal with de data structure passed by our docs.fdnd.nl
  hygraph <em>document</em> type. Use it specifically for this type of menu.
</p>

<p>DocNav is single column up to 16.4rem</p>
<div>
  <DocNav data={menu} />
</div>
<br />
<p>DocNav is double column from 16.4rem to 25rem</p>
<div>
  <DocNav data={menu} />
</div>
<br />
<p>DocNav is triple column up from 25.1rem</p>
<div>
  <DocNav data={menu} />
</div>

<style>
  div {
    padding: 0.5rem;
    background: var(--c-green);
    color: var(--c-blue);
  }
  div:first-of-type {
    width: 15rem;
  }
  div:nth-of-type(2) {
    width: 25rem;
  }
</style>
