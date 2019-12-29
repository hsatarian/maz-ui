(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"16c0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home flex-1 flex direction-column"},[a("div",{staticClass:"home__header flex align-center justify-center p-4"},[a("MazBtn",{on:{click:function(e){return t.setDarkTheme(!t.hasDarkTheme)}}},[t._v(" "+t._s(t.modeBtnText)+" ")])],1),a("div",{staticClass:"home__main flex flex-1 container"},[a("div",{staticClass:"home__content flex direction-column justify-center p-4"},[t._m(0),a("h3",{staticClass:"subtitle mb-5 fs-16"},[t._v(" UI Components & CSS framework ")]),a("div",{staticClass:"flex flex-center direction-column"},[a("CodeContainer",{staticClass:"mb-4",attrs:{language:"bash",code:"npm i maz-ui -S"}}),a("div",{staticClass:"flex align-start flex--wrap my-3 align-center justify-center"},[a("router-link",{staticClass:"btn btn--primary--outline mr-2 mb-2",attrs:{to:{name:"Install"}}},[t._v(" Installation ")]),a("router-link",{staticClass:"btn btn--primary--outline mr-2 mb-2",attrs:{to:{name:"GetStarted"}}},[t._v(" Get started ")]),a("router-link",{staticClass:"btn btn--primary--outline",attrs:{to:{name:"MazInputDoc"}}},[t._v(" Components ")])],1),t._m(1)],1)]),a("div",{staticClass:"home__illu-container flex align-center justify-center p-4"},[a("img",{staticClass:"home__illu-container__illu",attrs:{src:t.illuPath,alt:"maz ui logo"}})])]),a("NavFooter")],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"mb-2"},[t._v(" A library to build your interfaces with "),a("span",{staticClass:"text-primary"},[t._v("Vue.js")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex align-start flex--wrap align-center justify-center"},[a("a",{staticClass:"btn btn--dark--outline mr-4",attrs:{href:"https://github.com/LouisMazel/maz-ui",target:"_blank"}},[t._v(" Github ")]),a("a",{staticClass:"btn btn--danger--outline",attrs:{href:"https://www.npmjs.com/package/maz-ui",target:"_blank"}},[t._v(" NPM ")])])}],s=a("2f62"),i=a("cef0");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(a,!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u={name:"Home",components:{NavFooter:i["a"]},computed:c({},Object(s["c"])(["hasDarkTheme"]),{illuPath:function(){return this.hasDarkTheme?a("c4da"):a("ef52")},modeBtnText:function(){return this.hasDarkTheme?"Enable Light Mode":"Enable Dark Mode"}}),methods:c({},Object(s["b"])(["setDarkTheme"]))},f=u,m=(a("a8c3"),a("2877")),b=Object(m["a"])(f,n,r,!1,null,"c4b91f6c",null);e["default"]=b.exports},"224e":function(t,e,a){},3199:function(t,e,a){},a8c3:function(t,e,a){"use strict";var n=a("224e"),r=a.n(n);r.a},bf10:function(t,e,a){t.exports=a.p+"img/logo-maz-ui.c869f72a.png"},c4da:function(t,e,a){t.exports=a.p+"img/maz-ui-illu-dark.2734ee6b.png"},cef0:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"nav-footer flex-fixed",attrs:{role:"contentinfo"}},[a("nav",{staticClass:"nav-footer-content px-4 flex align-center space-between py-4"},[a("div",{staticClass:"flex hidden-tablet"},[a("RouterLink",{staticClass:"mr-3",attrs:{to:{name:"Home"}}},[t._v(" Home ")]),a("RouterLink",{attrs:{to:{name:"Documentation"}}},[t._v(" Documentation ")])],1),t._m(0),a("div",{staticClass:"flex align-center"},[a("SocialButtons",{staticClass:"mr-2"}),a("VersionNumber")],1)]),t._m(1)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-footer-content__logo hidden-tablet flex align-center"},[n("img",{staticClass:"nav-footer-content__logo__img",attrs:{src:a("bf10"),alt:"logo-loic-mazuel"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-footer-subs py-2"},[a("div",{staticClass:"px-4 flex justify-end"},[a("a",{staticClass:"flex align-center",attrs:{href:"https://www.loicmazuel.com/",target:"_blank"}},[a("p",{staticClass:"fs-14"},[t._v(" © Loïc Mazuel | Website made with VueJS ")])])])])}],s=a("2eb3"),i=a("54de"),o={name:"NavFooter",components:{SocialButtons:s["a"],VersionNumber:i["a"]}},c=o,l=(a("fd14"),a("2877")),u=Object(l["a"])(c,n,r,!1,null,"13c9be7b",null);e["a"]=u.exports},ef52:function(t,e,a){t.exports=a.p+"img/maz-ui-illu.59d20184.png"},fd14:function(t,e,a){"use strict";var n=a("3199"),r=a.n(n);r.a}}]);
//# sourceMappingURL=home.3ff268e1.js.map