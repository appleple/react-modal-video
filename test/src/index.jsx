import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from '../../lib/index.js'

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false,
      isOpenYouku: false,
      isOpenCustom:false,
      customUrl:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
        <button onClick={this.openModal}>Open youtube</button>
        
        <ModalVideo
            channel='youku'
            isOpen={this.state.isOpenYouku}
            videoId='XMTczNjgzMDYwNA='
            onClose={() => this.setState({isOpenYouku: false})}
        />
        <button onClick={() => this.setState({isOpenYouku: true})}>Open youku</button>
        
        <ModalVideo channel='custom' isOpen={this.state.isOpenCustom} url={this.state.customUrl} autoplay={1} onClose={() => this.setState({isOpenCustom: false})} />
        <button onClick={() => this.setState({isOpenCustom: true})}>Open Custom</button>
       
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
    document.getElementById('root')
)
