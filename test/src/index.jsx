import React from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from '../../lib/index';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isOpenYouku: false,
      isOpenCustom: false,
      customUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="L61p2uyiMSo"
          youtube={{ mute: 0, autoplay: 0 }}
          onClose={() => this.setState({ isOpen: false })}
        />
        <button onClick={this.openModal}>Open YouTube</button>

        <ModalVideo
          channel="vimeo"
          isOpen={this.state.isOpenVimeo}
          videoId="336257407"
          onClose={() => this.setState({ isOpenVimeo: false })}
        />
        <button onClick={() => this.setState({ isOpenVimeo: true })}>Open Vimeo</button>

        <ModalVideo
          channel="youku"
          isOpen={this.state.isOpenYouku}
          videoId="XMTczNjgzMDYwNA="
          onClose={() => this.setState({ isOpenYouku: false })}
        />
        <button onClick={() => this.setState({ isOpenYouku: true })}>Open youku</button>

        <ModalVideo
          channel="custom"
          isOpen={this.state.isOpenCustom}
          url={this.state.customUrl}
          onClose={() => this.setState({ isOpenCustom: false })}
        />
        <button onClick={() => this.setState({ isOpenCustom: true })}>Open Custom</button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
