# Webfonts loader for React

## What?

A React wrapper for Typekit's [webfontloader](https://www.npmjs.com/package/webfontloader) NPM package.

## How?

```javascript

import { render } from 'react-dom';
import WebfontLoader from '@dr-kobros/react-webfont-loader';

// webfontloader configuration object
const config = {
  google: {
    families: ['Source Sans Pro:300,600'],
  }
};

// Callback receives the status of the webfont loading process.
const callback = status => {
  // I could hook the webfont status to for example Redux here.
}

// wrap your root component with the supplied wrapper component
render(
  <WebfontLoader config={config} callback={callback}>
    <App />
  </WebfontLoader>,
  document.getElementById('app')
);

```
