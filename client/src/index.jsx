import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';

import { Router } from '@Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const HotReload = hot(module)(Router);
const rootTag = document.getElementById('root');
if (rootTag) {
  render(<HotReload />, rootTag);
} else {
  throw new Error('The root tag with the id "root", dont appear in the document.');
}
