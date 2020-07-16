'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CSSTransition = require('react-transition-group/CSSTransition');

var _CSSTransition2 = _interopRequireDefault(_CSSTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalVideo = function (_React$Component) {
  _inherits(ModalVideo, _React$Component);

  function ModalVideo(props) {
    _classCallCheck(this, ModalVideo);

    var _this = _possibleConstructorReturn(this, (ModalVideo.__proto__ || Object.getPrototypeOf(ModalVideo)).call(this, props));

    _this.state = {
      isOpen: false
    };
    _this.closeModal = _this.closeModal.bind(_this);
    _this.updateFocus = _this.updateFocus.bind(_this);
    return _this;
  }

  _createClass(ModalVideo, [{
    key: 'openModal',
    value: function openModal() {
      this.setState({ isOpen: true });
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ isOpen: false });
      if (typeof this.props.onClose === 'function') {
        this.props.onClose();
      }
    }
  }, {
    key: 'keydownHandler',
    value: function keydownHandler(e) {
      if (e.keyCode === 27) {
        this.closeModal();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.keydownHandler.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.keydownHandler.bind(this));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.isOpen && this.modal) {
        this.modal.focus();
      }
    }
  }, {
    key: 'updateFocus',
    value: function updateFocus(e) {
      if (e.keyCode === 9) {
        e.preventDefault();
        e.stopPropagation();
        if (this.modal === document.activeElement) {
          this.modalbtn.focus();
        } else {
          this.modal.focus();
        }
      }
    }
  }, {
    key: 'getQueryString',
    value: function getQueryString(obj) {
      var url = '';
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] !== null) {
            url += key + '=' + obj[key] + '&';
          }
        }
      }
      return url.substr(0, url.length - 1);
    }
  }, {
    key: 'getYoutubeUrl',
    value: function getYoutubeUrl(youtube, videoId) {
      var query = this.getQueryString(youtube);
      return '//www.youtube.com/embed/' + videoId + '?' + query;
    }
  }, {
    key: 'getVimeoUrl',
    value: function getVimeoUrl(vimeo, videoId) {
      var query = this.getQueryString(vimeo);
      return '//player.vimeo.com/video/' + videoId + '?' + query;
    }
  }, {
    key: 'getYoukuUrl',
    value: function getYoukuUrl(youku, videoId) {
      var query = this.getQueryString(youku);
      return '//player.youku.com/embed/' + videoId + '?' + query;
    }
  }, {
    key: 'getVideoUrl',
    value: function getVideoUrl(opt, videoId) {
      if (opt.channel === 'youtube') {
        return this.getYoutubeUrl(opt.youtube, videoId);
      } else if (opt.channel === 'vimeo') {
        return this.getVimeoUrl(opt.vimeo, videoId);
      } else if (opt.channel === 'youku') {
        return this.getYoukuUrl(opt.youku, videoId);
      } else if (opt.channel === 'custom') {
        return opt.url;
      }
    }
  }, {
    key: 'getPadding',
    value: function getPadding(ratio) {
      var arr = ratio.split(':');
      var width = Number(arr[0]);
      var height = Number(arr[1]);
      var padding = height * 100 / width;
      return padding + '%';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = {
        paddingBottom: this.getPadding(this.props.ratio)
      };

      return _react2.default.createElement(
        _CSSTransition2.default,
        {
          classNames: this.props.classNames.modalVideoEffect,
          timeout: this.props.animationSpeed
        },
        function () {
          if (!_this2.state.isOpen) {
            return null;
          }

          return _react2.default.createElement(
            'div',
            { className: _this2.props.classNames.modalVideo, tabIndex: '-1', role: 'dialog',
              'aria-label': _this2.props.aria.openMessage, onClick: _this2.closeModal, ref: function ref(node) {
                _this2.modal = node;
              }, onKeyDown: _this2.updateFocus },
            _react2.default.createElement(
              'div',
              { className: _this2.props.classNames.modalVideoBody },
              _react2.default.createElement(
                'div',
                { className: _this2.props.classNames.modalVideoInner },
                _react2.default.createElement(
                  'div',
                  { className: _this2.props.classNames.modalVideoIframeWrap, style: style },
                  _react2.default.createElement('button', { className: _this2.props.classNames.modalVideoCloseBtn, 'aria-label': _this2.props.aria.dismissBtnMessage, ref: function ref(node) {
                      _this2.modalbtn = node;
                    }, onKeyDown: _this2.updateFocus }),
                  _this2.props.children || _react2.default.createElement('iframe', { width: '460', height: '230', src: _this2.getVideoUrl(_this2.props, _this2.props.videoId), frameBorder: '0', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: _this2.props.allowFullScreen, tabIndex: '-1' })
                )
              )
            )
          );
        }
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props) {
      return { isOpen: props.isOpen };
    }
  }]);

  return ModalVideo;
}(_react2.default.Component);

exports.default = ModalVideo;


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
    openMessage: 'You just openned the modal video',
    dismissBtnMessage: 'Close the modal by clicking here'
  }
};