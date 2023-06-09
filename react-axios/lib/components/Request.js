'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _axios2 = require('axios');

var _axios3 = _interopRequireDefault(_axios2);

var _AxiosProvider = require('./AxiosProvider');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Request = function (_React$Component) {
  _inherits(Request, _React$Component);

  function Request(props) {
    _classCallCheck(this, Request);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      isLoading: false,
      response: null,
      error: null
      // create debounce function
    };_this.setupDebounce(props);
    return _this;
  }

  Request.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var newProps = this.props;
    if (prevProps.debounce !== newProps.debounce) {
      this.setupDebounce(newProps);
    }

    // quick and dirty prop compare
    var oldPropStr = JSON.stringify(prevProps);
    var newPropStr = JSON.stringify(newProps);
    if (oldPropStr != newPropStr && newProps.isReady) {
      this.debounceMakeRequest(newProps, this.getConfig(newProps));
    }
    return null;
  };

  Request.prototype.componentDidMount = function componentDidMount() {
    this._mounted = true;
    if (this.props.isReady) {
      this.debounceMakeRequest(this.props, this.getConfig(this.props));
    }
  };

  Request.prototype.onMakeReload = function onMakeReload(props) {
    this.debounceMakeRequest(props || this.props, this.getConfig(props ? Object.assign({}, this.props, props) : this.props));
  };

  Request.prototype.componentWillUnmount = function componentWillUnmount() {
    this._mounted = false;
    if (this.source && typeof this.source.cancel === 'function') {
      this.source.cancel('Canceling last request.');
    }
  };

  Request.prototype.setupDebounce = function setupDebounce(props) {
    this.debounceMakeRequest = (0, _utils.debounce)(this.makeRequest, props.debounce, props.debounceImmediate);
  };

  Request.prototype.getConfig = function getConfig(props) {
    return Object.assign({ url: props.url, method: props.method, data: props.data, params: props.params }, props.config);
  };

  Request.prototype.makeRequest = function makeRequest(props, config) {
    var _this2 = this;

    var _axios = props.instance || this.context || _axios3.default;
    if (!this._mounted || config.url === undefined) {
      return;
    }
    // setup cancel tokens
    if (this.source) {
      this.source.cancel('Canceling previous request.');
    }
    this.source = _axios3.default.CancelToken.source();

    // set the isLoading flag
    this.setState({ isLoading: true, error: null });
    if (typeof props.onLoading === 'function') {
      props.onLoading();
    }

    // time to make the axios request
    _axios.request(Object.assign({ cancelToken: this.source.token }, config)).then(function (res) {
      if (!_this2._mounted) {
        return;
      }
      _this2.setState({ isLoading: false, response: res });
      if (typeof props.onSuccess === 'function') {
        props.onSuccess(res);
      }
    }, function (err) {
      if (!_this2._mounted) {
        return;
      }
      if (!_axios3.default.isCancel(err)) {
        _this2.setState({ isLoading: false, response: err.response, error: err });
        if (typeof props.onError === 'function') {
          props.onError(err);
        }
      }
    });
  };

  Request.prototype.render = function render() {
    var _this3 = this;

    if (typeof this.props.children === 'function') {
      var _axios = this.props.instance || this.context || _axios3.default;
      return this.props.children(this.state.error, this.state.response, this.state.isLoading, function (props) {
        return _this3.onMakeReload(props);
      }, _axios);
    }
    return null;
  };

  return Request;
}(_react2.default.Component);

Request.contextType = _AxiosProvider.AxiosContext;

Request.defaultProps = {
  url: undefined,
  method: 'get',
  data: undefined,
  config: {},
  debounce: 200,
  debounceImmediate: true,
  isReady: true
};

Request.propTypes = {
  instance: _propTypes2.default.func,
  url: _propTypes2.default.string,
  method: _propTypes2.default.oneOf(['get', 'delete', 'head', 'post', 'put', 'patch', 'options']).isRequired,
  data: _propTypes2.default.object,
  params: _propTypes2.default.object,
  config: _propTypes2.default.object,
  isReady: _propTypes2.default.bool,
  debounce: _propTypes2.default.number,
  debounceImmediate: _propTypes2.default.bool,
  onSuccess: _propTypes2.default.func,
  onLoading: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  children: _propTypes2.default.func
};

exports.default = Request;
module.exports = exports['default'];