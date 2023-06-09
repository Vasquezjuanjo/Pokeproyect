function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { AxiosContext } from './AxiosProvider';
import { debounce } from '../utils';

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
    this.debounceMakeRequest = debounce(this.makeRequest, props.debounce, props.debounceImmediate);
  };

  Request.prototype.getConfig = function getConfig(props) {
    return Object.assign({ url: props.url, method: props.method, data: props.data, params: props.params }, props.config);
  };

  Request.prototype.makeRequest = function makeRequest(props, config) {
    var _this2 = this;

    var _axios = props.instance || this.context || axios;
    if (!this._mounted || config.url === undefined) {
      return;
    }
    // setup cancel tokens
    if (this.source) {
      this.source.cancel('Canceling previous request.');
    }
    this.source = axios.CancelToken.source();

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
      if (!axios.isCancel(err)) {
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
      var _axios = this.props.instance || this.context || axios;
      return this.props.children(this.state.error, this.state.response, this.state.isLoading, function (props) {
        return _this3.onMakeReload(props);
      }, _axios);
    }
    return null;
  };

  return Request;
}(React.Component);

Request.contextType = AxiosContext;

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
  instance: PropTypes.func,
  url: PropTypes.string,
  method: PropTypes.oneOf(['get', 'delete', 'head', 'post', 'put', 'patch', 'options']).isRequired,
  data: PropTypes.object,
  params: PropTypes.object,
  config: PropTypes.object,
  isReady: PropTypes.bool,
  debounce: PropTypes.number,
  debounceImmediate: PropTypes.bool,
  onSuccess: PropTypes.func,
  onLoading: PropTypes.func,
  onError: PropTypes.func,
  children: PropTypes.func
};

export default Request;