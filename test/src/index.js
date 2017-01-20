import React from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from '../../lib/index.js';

ReactDom.render(
    <div>
      <ModalVideo channel="youtube"></ModalVideo>
      <button onClick={ModalVideo.openModal}>Open</button>
    </div>,
    document.getElementById('root')
);
