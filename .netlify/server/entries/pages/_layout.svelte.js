import { c as create_ssr_component } from "../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-ykw8hg_START -->${$$result.title = `<title>Frontend Design &amp; Development | Component Library</title>`, ""}<!-- HEAD_svelte-ykw8hg_END -->`, ""}

<header><h1><abbr title="${"Frontend Design & Development"}"><span>FDND</span></abbr>
    <span>Component Library</span></h1></header>

<nav></nav>

<main>${slots.default ? slots.default({}) : ``}</main>

<footer></footer>`;
});
export {
  Layout as default
};
