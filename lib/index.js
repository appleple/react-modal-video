'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var settings = {
  wmode: 'transparent',
  rel: 0,
  autoplay: 1,
  theme: 'dark',
  start: 0,
  channel: 'youtube',
  allowfullscreen: true
};

var ModalVideo = function (_React$Component) {
  _inherits(ModalVideo, _React$Component);

  function ModalVideo() {
    _classCallCheck(this, ModalVideo);

    return _possibleConstructorReturn(this, (ModalVideo.__proto__ || Object.getPrototypeOf(ModalVideo)).apply(this, arguments));
  }

  _createClass(ModalVideo, [{
    key: 'getVideoUrl',
    value: function getVideoUrl() {
      if (!this.isOpen) {
        return "";
      }
      var id = this.props.videoid;
      if (this.props.channel === 'youtube') {
        return this.getYoutubeUrl();
      }
    }
  }, {
    key: 'getYoutubeUrl',
    value: function getYoutubeUrl() {
      return 'http://www.youtube.com/' + this.props.videoid + 'wmode=' + this.props.wmode + '&rel=0&autoplay=' + this.props.autoplay + '&theme=' + this.props.theme + '&start=' + this.props.start + '&cc_load_policy=1&rel=0';
    }
  }, {
    key: 'openModal',
    value: function openModal() {
      this.isOpen = true;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'js-youtube-dismiss' },
        _react2.default.createElement(
          'div',
          { className: 'youtubePopup' },
          _react2.default.createElement(
            'div',
            { className: 'youtubePopupBody' },
            _react2.default.createElement(
              'div',
              { className: 'youtubePopupInner' },
              _react2.default.createElement(
                'div',
                { className: 'youtubePopupIframeWrap' },
                _react2.default.createElement('i', { className: 'fa fa-close fa-3x' }),
                _react2.default.createElement('iframe', { width: '460', height: '230', src: this.getVideoUrl(), frameborder: '0', allowfullscreen: this.props.allowfullscreen })
              )
            )
          )
        )
      );
    }
  }]);

  return ModalVideo;
}(_react2.default.Component);

exports.default = ModalVideo;
