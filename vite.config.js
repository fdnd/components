// vite.config.js
import fs from 'fs';
import postcssNesting from 'postcss-nesting'
import postcssVariables from 'postcss-css-variables'
import postcssFunctions from 'postcss-functions';
const css = fs.readFileSync('./src/assets/style/index.css', 'utf8');


export default {
  root: 'src/',
  css: {
    postcss: {
      // @Justus, dit krijg ik niet aan de praat 😭, kan niet nesten in m'n css files
      preprocess: css,
      plugins: [postcssNesting, postcssVariables, postcssFunctions],
    },
    devSourcemap: true,
  }
}