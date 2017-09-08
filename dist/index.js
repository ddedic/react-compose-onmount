'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeWithOnMount = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var composeWithOnMount = exports.composeWithOnMount = function composeWithOnMount(onMount, onUnmount) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return function (BaseComponent) {
    return function (_React$PureComponent) {
      _inherits(_class, _React$PureComponent);

      function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        var forMount = options.onMount || 'componentDidMount';
        var forUnmount = options.onUnmount || 'componentWillUnmount';
        if (onMount) {
          _this[forMount] = function () {
            onMount(this.props);
          };
        }
        if (onUnmount) {
          _this[forUnmount] = function () {
            onUnmount(this.props);
          };
        }
        return _this;
      }

      _createClass(_class, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(BaseComponent, this.props);
        }
      }]);

      return _class;
    }(_react2.default.PureComponent);
  };
};