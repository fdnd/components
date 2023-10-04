# Components

Frontend Design & Development (FDND) is an Associate Degree programme at the Amsterdam University of Applied Sciences (AUAS). For our microsites we use the components as defined in this NPM package. This project is intended for internal use but as we strive to be an open source (GPLv3) Higher Ed. programme we intend to share everything that is not GDPR sensitive.

## Description

It's a component library for FDND students and teachers. It implements the FDND styleguide and is actively maintained as it's components are used throughout our microsite environment.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Use](#use)
- [Contribute](#contribute)
- [Publishing](#publishing)

## Installation

Install this dependency with NPM or your prefered package manager.

```shell
npm install @fdnd/components
```

Include only the components you want to use. A visual overview of the available components is not available (yet), but [you can find a textual overview here](https://github.com/fdnd/components/blob/main/src/index.js).

## Use

```svelte
<script>
  import { Header, PageHeader } from '@fdnd/components';
  const pageHeaderContents = {
    subtitle: 'Associate Degree',
    title: 'Frontend design & development',
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
  };
</script>

<Header title="FDND Programma" />
<PageHeader content={pageHeaderContents} />
```

## Contribute

Clone this repository using `git clone` and create a test [SvelteKit](https://kit.svelte.dev/) project (if you haven't already).

Run `npm run install` and `npm run package`

Use `npm link ../path-to/components/package` in your test project folder to create a local link. [See more on linking local packages with NPM](https://docs.npmjs.com/cli/v8/commands/npm-link).

Now when you update anything in the local package, run `npm run package` and your test project will be able to reach it. Changes will be automagically picked up if you have a running `npm run dev` process on your test project.

## Publishing

Publishing a new version should be done with care, first test if everything works and run automated test using `npm run test`, if there are breaking changes please add directions on how to update websites using the old version.

Bump the version of the package using `npm version patch -m "Upgrade to %s; descriptive message plx"`. Without a version bump, it's not possible to publish the new version of the package. This is a restriction forced by NPM.

Run `npm publish`, you might be asked to login to the NPM registry, just follow the instructions. If you're not added as a user to the @FDND organisation on NPM (this is not the same as the FDND organisation on Github), you are not able to publish this package. Ask @ju5tu5 for access :)

## License

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
