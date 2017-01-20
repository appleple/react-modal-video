import React from 'react';

const settings = {
  wmode: 'transparent',
  rel: 0,
  autoplay: 1,
  theme: 'dark',
  start: 0,
  channel: 'youtube',
  allowfullscreen: true
}

export default class ModalVideo extends React.Component {
  getVideoUrl () {
    if(!this.isOpen){
      return "";
    }
    const id = this.props.videoid;
    if(this.props.channel === 'youtube'){
      return this.getYoutubeUrl();
    }
  }

  getYoutubeUrl() {
    return `http://www.youtube.com/${this.props.videoid}wmode=${this.props.wmode}&rel=0&autoplay=${this.props.autoplay}&theme=${this.props.theme}&start=${this.props.start}&cc_load_policy=1&rel=0`;
  }

  openModal() {
    this.isOpen = true;
  }

  render () {
    return (
      <div className="js-youtube-dismiss">
      	<div className="youtubePopup">
      		<div className="youtubePopupBody">
      			<div className="youtubePopupInner">
      				<div className="youtubePopupIframeWrap">
      					<i className="fa fa-close fa-3x"></i>
      					<iframe width="460" height="230" src={this.getVideoUrl()} frameborder="0" allowfullscreen={this.props.allowfullscreen}></iframe>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}
