import React from 'react'

export default class ModalVideo extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.closeModal = this.closeModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  closeModal () {
    this.setState({isOpen: false})
  }

  componentWillReceiveProps (nextProps) {
    this.setState({isOpen: nextProps.isOpen})
  }

  getVideoUrl () {
    if (!this.state.isOpen) {
      return ''
    }
    if (this.props.channel === 'youtube') {
      return this.getYoutubeUrl()
    }
  }

  getYoutubeUrl () {
    return `//www.youtube.com/embed/${this.props.videoId}?wmode=${this.props.wmode}&rel=0&autoplay=${this.props.autoPlay}&theme=${this.props.theme}&start=${this.props.start}&cc_load_policy=1&rel=0`
  }

  render () {
    return (
      <div className={this.state.isOpen ? 'js-youtube-open' : 'js-youtube-close'}>
        <div className={this.props.classNames.youtubePopup}>
          <div className={this.props.classNames.youtubePopupBody} onClick={this.closeModal}>
            <div className={this.props.classNames.youtubePopupInner}>
              <div className={this.props.classNames.youtubePopupIframeWrap}>
                <button className={this.props.classNames.youtubePopupCloseBtn} />
                <iframe width='460' height='230' src={this.getVideoUrl()} frameBorder='0' allowFullScreen={this.props.allowFullScreen} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ModalVideo.defaultProps = {
  wmode: 'transparent',
  rel: 0,
  autoPlay: 1,
  theme: 'dark',
  start: 0,
  channel: 'youtube',
  allowFullScreen: true,
  isOpen: false,
  classNames: {
    youtubePopup: 'youtubePopup',
    youtubePopupBody: 'youtubePopupBody',
    youtubePopupInner: 'youtubePopupInner',
    youtubePopupIframeWrap: 'youtubePopupIframeWrap',
    youtubePopupCloseBtn: 'youtubePopupCloseBtn'
  }
}
