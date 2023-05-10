import React from 'react';
import ReactDom from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(
    React.createElement('div', null, 'Hello World'),
    document.body.appendChild(document.create.createElement('div')),
  );
});
