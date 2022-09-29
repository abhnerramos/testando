"use strict";

Liferay.Loader.define("my-react-app@1.0.0/site", ['module', 'exports', 'require'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getSite = getSite;

    function getSite() {
      return Liferay.Util.fetch('/o/headless-admin-user/v1.0/my-user-account/sites', {
        method: 'GET'
      }).then(function (res) {
        return res.json();
      });
    }
    //# sourceMappingURL=site.js.map
  }
});
//# sourceMappingURL=site.js.map