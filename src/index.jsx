import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition';

export default class ModalVideo extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,
      modalVideoWidth: '100%'
    }
    this.closeModal = this.closeModal.bind(this)
    this.updateFocus = this.updateFocus.bind(this)

    this.timeout; // used for resizing video.
  }

  openModal () {
    this.setState({isOpen: true})
  }

  closeModal () {
    this.setState({isOpen: false})
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
  }

  keydownHandler(e) {
    if (e.keyCode === 27) {
      this.closeModal();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    window.addEventListener('resize', this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this));
    this.setState({
      modalVideoWidth: this.getWidthFulfillAspectRatio(this.props.ratio, window.innerHeight, window.innerWidth)
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydownHandler.bind(this));
    window.removeEventListener('resize', this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this));
  }

  static getDerivedStateFromProps(props) {
    return { isOpen: props.isOpen };
  }

  componentDidUpdate () {
    if (this.state.isOpen && this.modal) {
      this.modal.focus();
    }
  }

  updateFocus (e) {
    if (e.keyCode === 9) {
      e.preventDefault()
      e.stopPropagation()
      if (this.modal === document.activeElement) {
        this.modalbtn.focus()
      } else {
        this.modal.focus()
      }
    }
  }

  /**
   * Resize modal-video-iframe-wrap when window size changed when the height of the video is greater than the height of the window.
   */
  resizeModalVideoWhenHeightGreaterThanWindowHeight() {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      const width = this.getWidthFulfillAspectRatio(this.props.ratio, window.innerHeight, window.innerWidth);
        if (this.state.modalVideoWidth != width) {
          this.setState({
            modalVideoWidth: width
          });
        }
    }, 10);
  }

  getQueryString (obj) {
    let url = ''
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] !== null) {
          url += key + '=' + obj[key] + '&'
        }
      }
    }
    return url.substr(0, url.length - 1)
  }

  getYoutubeUrl(youtube, videoId) {
    const query = this.getQueryString(youtube)
    return '//www.youtube.com/embed/' + videoId + '?' + query
  }

  getVimeoUrl(vimeo, videoId) {
    const query = this.getQueryString(vimeo)
    return '//player.vimeo.com/video/' + videoId + '?' + query
  }

  getYoukuUrl(youku, videoId) {
    const query = this.getQueryString(youku)
    return '//player.youku.com/embed/' + videoId + '?' + query
  }

  getVideoUrl(opt, videoId) {
    if (opt.channel === 'youtube') {
      return this.getYoutubeUrl(opt.youtube, videoId)
    } else if (opt.channel === 'vimeo') {
      return this.getVimeoUrl(opt.vimeo, videoId)
    } else if (opt.channel === 'youku') {
      return this.getYoukuUrl(opt.youku, videoId)
    } else if (opt.channel === 'custom') {
      return opt.url
    }
  }

  getPadding(ratio) {
    const arr = ratio.split(':')
    const width = Number(arr[0])
    const height = Number(arr[1])
    const padding = height * 100 / width
    return padding + '%'
  }

  /**
   * Calculate the width of the video fulfill aspect ratio.
   * When the height of the video is greater than the height of the window,
   * this function return the width that fulfill the aspect ratio for the height of the window.
   * In other cases, this function return '100%'(the height relative to the width is determined by css).
   * 
   * @param string ratio
   * @param number maxWidth
   * @returns number | '100%'
   */
  getWidthFulfillAspectRatio(ratio, maxHeight, maxWidth) {
    const arr = ratio.split(':');
    const width = Number(arr[0]);
    const height = Number(arr[1]);

    // Height that fulfill the aspect ratio for maxWidth.
    const videoHeight = maxWidth * (height / width);

    if (maxHeight < videoHeight) {
      // when the height of the video is greater than the height of the window.
      // calculate the width that fulfill the aspect ratio for the height of the window.

      // ex: 16:9 aspect ratio
      // 16:9 = width : height
      // → width = 16 / 9 * height
      return Math.floor(width / height * maxHeight);
    }

    return '100%';
  }

  render() {
    const modalVideoInnerStyle = {
      width: this.state.modalVideoWidth
    }

    const modalVideoIframeWrapStyle = {
      paddingBottom: this.getPadding(this.props.ratio)
    }

    return (
      <CSSTransition
        classNames={this.props.classNames.modalVideoEffect}
        timeout={this.props.animationSpeed}
      >
        {() => {
          if (!this.state.isOpen) {
            return null;
          }

          return (
            <div className={this.props.classNames.modalVideo} tabIndex='-1' role='dialog'
              aria-label={this.props.aria.openMessage} onClick={this.closeModal} ref={node => { this.modal = node; }} onKeyDown={this.updateFocus}>
              <div className={this.props.classNames.modalVideoBody}>
                <div className={this.props.classNames.modalVideoInner} style={modalVideoInnerStyle}>
                  <div className={this.props.classNames.modalVideoIframeWrap} style={modalVideoIframeWrapStyle}>
                    <button className={this.props.classNames.modalVideoCloseBtn} aria-label={this.props.aria.dismissBtnMessage} ref={node => { this.modalbtn = node; }} onKeyDown={this.updateFocus} />
                    {
                      this.props.children ||
                      <iframe width='460' height='230' src={this.getVideoUrl(this.props, this.props.videoId)} frameBorder='0' allow={'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'} allowFullScreen={this.props.allowFullScreen} tabIndex='-1' />
                    }
                  </div>
                </div>
              </div>
            </div>)
        }}
      </CSSTransition>
    )
  }
}

ModalVideo.defaultProps = {
  channel: 'youtube',
  isOpen: false,
  youtube: {
    autoplay: 1,
    cc_load_policy: 1,
    color: null,
    controls: 1,
    disablekb: 0,
    enablejsapi: 0,
    end: null,
    fs: 1,
    h1: null,
    iv_load_policy: 1,
    list: null,
    listType: null,
    loop: 0,
    modestbranding: null,
    origin: null,
    playlist: null,
    playsinline: null,
    rel: 0,
    showinfo: 1,
    start: 0,
    wmode: 'transparent',
    theme: 'dark',
    mute: 0
  },
  ratio: '16:9',
  vimeo: {
    api: false,
    autopause: true,
    autoplay: true,
    byline: true,
    callback: null,
    color: null,
    height: null,
    loop: false,
    maxheight: null,
    maxwidth: null,
    player_id: null,
    portrait: true,
    title: true,
    width: null,
    xhtml: false
  },
  youku: {
    autoplay: 1,
    show_related: 0
  },
  allowFullScreen: true,
  animationSpeed: 300,
  classNames: {
    modalVideoEffect: 'modal-video-effect',
    modalVideo: 'modal-video',
    modalVideoClose: 'modal-video-close',
    modalVideoBody: 'modal-video-body',
    modalVideoInner: 'modal-video-inner',
    modalVideoIframeWrap: 'modal-video-movie-wrap',
    modalVideoCloseBtn: 'modal-video-close-btn'
  },
  aria: {
    openMessage: 'You just opened the modal video',
    dismissBtnMessage: 'Close the modal by clicking here'
  }
}
