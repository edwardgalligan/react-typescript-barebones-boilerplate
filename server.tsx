// vim: et ts=4 sw=4 ff=unix

import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import * as fs from 'fs';

import { App } from './app';

fs.writeFileSync(
    'public/index.html',
    fs.readFileSync('index.html', {encoding: 'utf8'})
      .replace(
          '${app}',
          ReactDOMServer.renderToString(<App />)
      )
)
