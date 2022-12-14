"use strict";

Liferay.Loader.define("my-react-app@1.0.0/App", ['module', 'exports', 'require', 'my-react-app$react', './BlogPostings', './DocumentsMedia', './KnowledgeBase', './site'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      }, _typeof(obj);
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    var _react = _interopRequireWildcard(require("my-react-app$react"));

    var _BlogPostings = _interopRequireDefault(require("./BlogPostings"));

    var _DocumentsMedia = _interopRequireDefault(require("./DocumentsMedia"));

    var _KnowledgeBase = _interopRequireDefault(require("./KnowledgeBase"));

    var _site = require("./site");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }

    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;var cacheBabelInterop = new WeakMap();var cacheNodeInterop = new WeakMap();return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }

    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }var cache = _getRequireWildcardCache(nodeInterop);if (cache && cache.has(obj)) {
        return cache.get(obj);
      }var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }newObj["default"] = obj;if (cache) {
        cache.set(obj, newObj);
      }return newObj;
    }

    function App() {
      return (/*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Posting a Blog"), /*#__PURE__*/_react["default"].createElement(_BlogPostings["default"], null), /*#__PURE__*/_react["default"].createElement("br", null), " ", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("h1", null, "Posting a Document"), /*#__PURE__*/_react["default"].createElement(_DocumentsMedia["default"], null), /*#__PURE__*/_react["default"].createElement("br", null), " ", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("h1", null, "Posting a KnowledgeBase"), /*#__PURE__*/_react["default"].createElement(_KnowledgeBase["default"], null))
      );
    }

    var _default = App;
    exports["default"] = _default;
    //# sourceMappingURL=App.js.map
  }
});
//# sourceMappingURL=App.js.map