import React from 'react';

export default class ModalVideo extends React.Component {

  getVideoUrl () {
    if(!this.props.isOpen){
      return "";
    }
    const id = this.props.videoid;
    if(this.props.channel === 'youtube'){
      return this.getYoutubeUrl();
    }
  }

  getYoutubeUrl() {
    return `//www.youtube.com/embed/${this.props.videoId}?wmode=${this.props.wmode}&rel=0&autoplay=${this.props.autoPlay}&theme=${this.props.theme}&start=${this.props.start}&cc_load_policy=1&rel=0`;
  }

  render () {
    return (
      <div className={this.props.isOpen ? 'js-youtube-open' : 'js-youtube-close'}>
      	<div className="youtubePopup">
      		<div className="youtubePopupBody">
      			<div className="youtubePopupInner">
      				<div className="youtubePopupIframeWrap">
      					<i className="fa fa-close fa-3x"></i>
      					<iframe width="460" height="230" src={this.getVideoUrl()} frameBorder="0" allowFullScreen={this.props.allowFullScreen}></iframe>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
    );
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
  isOpen: false
}
