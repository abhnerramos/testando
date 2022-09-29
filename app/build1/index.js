"use strict";

Liferay.Loader.define("my-react-app@1.0.0/index", ['module', 'exports', 'require', 'my-react-app$react', 'my-react-app$react-dom', './App'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = main;

    var _react = _interopRequireDefault(require("my-react-app$react"));

    var _reactDom = _interopRequireDefault(require("my-react-app$react-dom"));

    var _App = _interopRequireDefault(require("./App"));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }

    function main(_ref) {
      var portletNamespace = _ref.portletNamespace,
          contextPath = _ref.contextPath,
          portletElementId = _ref.portletElementId,
          configuration = _ref.configuration;

      _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_App["default"], null), document.getElementById(portletElementId));
    }
    //# sourceMappingURL=index.js.map
  }
});
//# sourceMappingURL=index.js.map