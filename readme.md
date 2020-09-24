# react-modal-video
React Modal Video Component

## Features

- Not affected by dom structure.
- Beautiful transition
- Accessible for keyboard navigation and screen readers.
- Rich options for youtube API and Vimeo API

## Demo
[http://rawgit.com/appleple/react-modal-video/master/test/](http://rawgit.com/appleple/react-modal-video/master/test/)

## Install

### npm

```sh
npm install react-modal-video
```

## Usage

import sass file to your project

```scss
@import 'node_modules/react-modal-video/scss/modal-video.scss';
```
### Functional Implementation with Hooks

```jsx
import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

const App = () => {

	const [isOpen, setOpen] = useState(false)

	return (
		<React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

			<button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
		</React.Fragment>
	)
}

ReactDOM.render(
  <App />,
    document.getElementById('root')
)
```
### Class Implementation
change "isOpen" property to open and close the modal-video

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

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
      <React.Fragment>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
        <button onClick={this.openModal}>Open</button>
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />,
    document.getElementById('root')
)
```

## Options

- About YouTube options, please refer to https://developers.google.com/youtube/player_parameters?hl=en
- About Vimeo options, please refer to https://developer.vimeo.com/apis/oembed

<table style="min-width:100%;">
	<tbody><tr>
		<th colspan="2">properties</th>
		<th>default</th>
	</tr>
	<tr>
		<td colspan="2">channel</td>
		<td>'youtube'</td>
	</tr>
	<tr>
		<td rowspan="23">youtube</td>
		<td>autoplay</td>
		<td>1</td>
	</tr>
	<tr>
		<td>cc_load_policy</td>
		<td>1</td>
	</tr>
	<tr>
		<td>color</td>
		<td>null</td>
	</tr>
	<tr>
		<td>controls</td>
		<td>1</td>
	</tr>
	<tr>
		<td>disablekb</td>
		<td>0</td>
	</tr>
	<tr>
		<td>enablejsapi</td>
		<td>0</td>
	</tr>
	<tr>
		<td>end</td>
		<td>null</td>
	</tr>
	<tr>
		<td>fs</td>
		<td>1</td>
	</tr>
	<tr>
		<td>h1</td>
		<td>null</td>
	</tr>
	<tr>
		<td>iv_load_policy</td>
		<td>1</td>
	</tr>
	<tr>
		<td>list</td>
		<td>null</td>
	</tr>
	<tr>
		<td>listType</td>
		<td>null</td>
	</tr>
	<tr>
		<td>loop</td>
		<td>0</td>
	</tr>
	<tr>
		<td>modestbranding</td>
		<td>null</td>
	</tr>
	<tr>
		<td>origin</td>
		<td>null</td>
	</tr>
	<tr>
		<td>playlist</td>
		<td>null</td>
	</tr>
	<tr>
		<td>playsinline</td>
		<td>null</td>
	</tr>
	<tr>
		<td>rel</td>
		<td>0</td>
	</tr>
	<tr>
		<td>showinfo</td>
		<td>1</td>
	</tr>
	<tr>
		<td>start</td>
		<td>0</td>
	</tr>
	<tr>
		<td>wmode</td>
		<td>'transparent'</td>
	</tr>
	<tr>
		<td>theme</td>
		<td>'dark'</td>
	</tr>
	<tr>
		<td>mute</td>
		<td>0</td>
	</tr>
	<tr>
		<td rowspan="15">vimeo</td>
		<td>api</td>
		<td>false</td>
	</tr>
	<tr>
		<td>autopause</td>
		<td>true</td>
	</tr>
	<tr>
		<td>autoplay</td>
		<td>true</td>
	</tr>
	<tr>
		<td>byline</td>
		<td>true</td>
	</tr>
	<tr>
		<td>callback</td>
		<td>null</td>
	</tr>
	<tr>
		<td>color</td>
		<td>null</td>
	</tr>
	<tr>
		<td>height</td>
		<td>null</td>
	</tr>
	<tr>
		<td>loop</td>
		<td>false</td>
	</tr>
	<tr>
		<td>maxheight</td>
		<td>null</td>
	</tr>
	<tr>
		<td>maxwidth</td>
		<td>null</td>
	</tr>
	<tr>
		<td>player_id</td>
		<td>null</td>
	</tr>
	<tr>
		<td>portrait</td>
		<td>true</td>
	</tr>
	<tr>
		<td>title</td>
		<td>true</td>
	</tr>
	<tr>
		<td>width</td>
		<td>null</td>
	</tr>
	<tr>
		<td>xhtml</td>
		<td>false</td>
	</tr>
	<tr>
        <td rowspan="2">youku</td>
        <td>autoplay</td>
        <td>1</td>
    </tr>
	<tr>
        <td>show_related</td>
        <td>0</td>
    </tr>
	<tr>
        <td rowspan="1">custom</td>
        <td>url</td>
        <td>MP4 URL</td>
    </tr>
	<tr>
		<td colspan="2">ratio</td>
		<td>'16:9'</td>
	</tr>
	<tr>
		<td colspan="2">allowFullScreen</td>
		<td>true</td>
	</tr>
	<tr>
		<td colspan="2">animationSpeed</td>
		<td>300</td>
	</tr>
	<tr>
		<td rowspan="6">classNames</td>
		<td>modalVideo</td>
		<td>'modal-video'</td>
	</tr>
	<tr>
		<td>modalVideoClose</td>
		<td>'modal-video-close'</td>
	</tr>
	<tr>
		<td>modalVideoBody</td>
		<td>'modal-video-body'</td>
	</tr>
	<tr>
		<td>modalVideoInner</td>
		<td>'modal-video-inner'</td>
	</tr>
	<tr>
		<td>modalVideoIframeWrap</td>
		<td>'modal-video-movie-wrap'</td>
	</tr>
	<tr>
		<td>modalVideoCloseBtn</td>
		<td>'modal-video-close-btn'</td>
	</tr>
	<tr>
		<td rowspan="2">aria</td>
		<td>openMessage</td>
		<td>'You just openned the modal video'</td>
	</tr>
	<tr>
		<td>dismissBtnMessage</td>
		<td>'Close the modal by clicking here'</td>
	</tr>
</tbody></table>

## Licence
[MIT](https://github.com/appleple/modal-video.js/blob/master/LICENSE)
