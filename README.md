# Components
FDND is an Associate Degree at the University of Applied Sciences in Amsterdam (HvA). For our microsites we use the components as defined in this NPM package.

## Install
Install this dependency with NPM or your prefered package manager.
```bash
npm install @fdnd/components
```
Include only the components you want to use. A visual overview of the available components is not available (yet), but [you can find a textual overview here](https://github.com/fdnd/components/blob/main/src/index.js).

## Usage

```svelte
<script>
  import { Header, PageHeader } from '@fdnd/components'
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
  }
</script>

<Header title="FDND Programma" />
<PageHeader content={pageHeaderContents} />
```

## Working on this package
Clone this repository and create a test [SvelteKit](https://kit.svelte.dev/) project (if you haven't already).

Create a link to the local version of this package in your test project:

Use `npm link` on this package and then use `npm link @fdnd/components` in your test project.

[See more on linking local packages with NPM](https://docs.npmjs.com/cli/v8/commands/npm-link).

Now when you update anything in the local package you can test/use it in your test project.

## Publishing a new version of this package
Publishing a new version should be done with care, first test if everything works and if there are breaking changes add directions on how to update websites using the old version.

Bump the version of the package, without a version bump, it's not possible to publish the new version of the package.
```bash
npm version patch -m "Upgrade to %s; new components added"
```

Run NPM publish, it might ask you to login to the NPM registry, follow the instructions. If you're not added as a user to the @FDND organisation on NPM (this is not the same as the FDND organisation on Github), you are not able to publish this package. Ask Justus for access.
```bash
npm publish
```
