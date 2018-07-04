!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("intl-messageformat"),require("k-intl/locale-data/en"),require("react"),require("fbjs/lib/shallowEqual")):"function"==typeof define&&define.amd?define(["exports","intl-messageformat","k-intl/locale-data/en","react","fbjs/lib/shallowEqual"],t):t(e["k-intl"]={},e.IntlMessageFormat,e.defaultLocaleData,e.React,e.shallowEqual)}(this,function(e,a,t,o,c){"use strict";a=a&&a.hasOwnProperty("default")?a.default:a,t=t&&t.hasOwnProperty("default")?t.default:t;var i="default"in o?o.default:o;c=c&&c.hasOwnProperty("default")?c.default:c;var n=function(n){var r=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];return function(e){var t=e.store&&e.store.getState()&&e.store.getState().config;if((!t||!t[n])&&r)throw new Error("/HOC k-intl/ "+n+" is not readable. Make sure that this one is available at config."+n+" on your redux store");return t[n]}},l=n("locale"),s=n("lang"),f=n("formats",!1);function r(e){[].concat(e).forEach(function(e){e&&e.locale&&a.__addLocaleData(e)})}var p=function(e,t){return"string"==typeof t?(n=e,t.split(".").reduce(function(e,t){return e&&e[t]},n)):e;var n},d=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),y=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h={},b=window.navigator.language||window.navigator.browserLanguage;r(t);var g=function(e){for(var t=arguments.length,n=Array(2<t?t-2:0),r=2;r<t;r++)n[r-2]=arguments[r];var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";if(e)try{return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return new(Function.prototype.bind.apply(a,[null].concat(t)))}.apply(void 0,[o].concat(n)).format(e)}catch(e){console.warn("/HOC k-intl/",e.message)}return o},m=function(){var u=0<arguments.length&&void 0!==arguments[0]?arguments[0]:b,c=arguments[1],l=arguments[2];return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];if(!c)return{};var t,n,o,a,i=e;return"string"==typeof i&&(n=e,a=p(c,t=i),i=a&&"string"!=typeof a?Object.keys(a).reduce(function(e,t){return v({},e,y({},t,n+"."+t))},h):y({},(o=t.split("."))[o.length-1],t)),Object.keys(i).reduce(function(e,t){var n=p(c,i[t]);return v({},e,y({},t,g(r[t],n,u,l)))},h)}};e.default=function(u){return function(t){var e,n,r;return n=e=function(e){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));return i.inject=function(e){var t=s(i.context),n=l(i.context),r=f(i.context),o=u;"function"==typeof u&&(o=u(e||i.props));var a=m(t,n,r)(o,e||i.props);c(i.state.injectedProps.messages,a)||i.setState(function(e){return v({},e,{injectedProps:{messages:a}})})},i.messages={},i.state={injectedProps:{}},i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,o.Component),d(n,[{key:"componentWillMount",value:function(){var e=this;this.unsubscribe=this.context.store.subscribe(function(){e.inject()}),this.inject()}},{key:"componentWillReceiveProps",value:function(e){this.inject(e)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){return i.createElement(t,v({},this.props,this.state.injectedProps))}}]),n}(),e.displayName="Intl ("+((r=t).displayName||r.name||r.constructor&&r.constructor.name||"Unknown")+")",e.contextTypes={store:function(){return null}},n}},e.addLocaleData=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
