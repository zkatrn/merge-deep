import * as React from 'react';
import './style.css';
import { mergeDeep } from './merge-deep';

const baseTheme = {
  homepage: {
    color: 'red',
    size: '10px',
  },
  marketplace: {
    color: 'red',
    size: '12px',
  },
  collection: {
    color: 'blue',
    size: '10px',
  },
};

const overrides = {
  homepage: {
    color: 'pink',
  },
  collection: {
    size: '50px',
  },
};

export default function App() {
  const newObj = mergeDeep(baseTheme, overrides);

  console.log(newObj);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
