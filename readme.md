# modal-video.js
modal video viewer

## Install

### npm

```sh
npm install react-modal-video
```

## Usage

import sass file to your project

```scss
@import 'node_modules/react-modal-video/assets/scss/mvv.scss';
```

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from '../../lib/index.js'

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' />
        <button onClick={this.openModal}>Open</button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
    document.getElementById('root')
)
```


## Licence
[MIT](https://github.com/appleple/modal-video.js/blob/master/LICENSE)
