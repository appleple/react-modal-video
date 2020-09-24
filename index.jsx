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
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' youtube={{mute:1,autoplay:1}} onClose={() => this.setState({isOpen: false})} />
        <button className='btn btn-orange' onClick={this.openModal}>Open Video</button>
      </React.Fragment>
    )
  }
}
 
ReactDOM.render(
  <App />,
    document.getElementById('root')
)