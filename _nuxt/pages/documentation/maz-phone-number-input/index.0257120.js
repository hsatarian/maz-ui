(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{486:function(e,n,t){var content=t(515);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(6).default)("16ff8fd9",content,!0,{sourceMap:!1})},514:function(e,n,t){"use strict";var o=t(486);t.n(o).a},515:function(e,n,t){(n=t(5)(!1)).push([e.i,".maz-phone-number-doc .examples[data-v-ad687560]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:20px;align-items:start}@media screen and (max-width:1024px){.maz-phone-number-doc .examples[data-v-ad687560]{grid-template-columns:repeat(1,1fr)}}.maz-phone-number-doc ul li[data-v-ad687560]{margin-bottom:8px}",""]),e.exports=n},558:function(e,n,t){"use strict";t.r(n);var o={name:"MazPhoneNumberInputDoc",data:function(){return{phoneNumber:null,results:null,phoneNumberExample:"+33656565656",resultsExample:null,codeExample:"<template>\n  <p>\n    <strong>Value:</strong> {{ phoneNumber || 'null' }}\n  </p>\n  <p>\n    <strong>Results:</strong> {{ results || 'null' }}\n  </p>\n  <MazPhoneNumberInput\n    v-model=\"phoneNumber\"\n    @update=\"results = JSON.stringify($event)\"\n  />\n</template>\n\nexport default {\n  data () {\n    return {\n      phoneNumber: '',\n      results: null\n    }\n  }\n}",example2:"<template>\n  <p>\n    <strong>Value:</strong> {{ phoneNumberExample || 'null' }}\n  </p>\n  <p>\n    <strong>Results:</strong> {{ resultsExample || 'null' }}\n  </p>\n  <MazPhoneNumberInput\n    v-model=\"phoneNumberExample\"\n    no-flags\n    show-code-on-list\n    size=\"lg\"\n    :preferred-countries=\"['FR', 'BE', 'DE']\"\n    @update=\"resultsExample = getJson($event)\"\n  />\n</template>\n\nexport default {\n  data () {\n    return {\n      phoneNumberExample: '+3365656565',\n      resultsExample: null\n    }\n  }\n}"}},methods:{getJson:function(e){return JSON.stringify(e).replace(/,/g,",\n").replace(/{/g,"{\n").replace(/}/g,"\n}")}}},r=(t(514),t(1)),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"maz-phone-number-doc"},[t("h4",[e._v("\n      Informations\n    ")]),e._v(" "),t("p",[e._v("\n      This component uses "),t("router-link",{attrs:{to:{name:"documentation-maz-input"}}},[e._v("\n        MazInput\n      ")]),e._v(" and therefore inherits all these options\n    ")],1),e._v(" "),t("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),e._v(" "),t("h4",[e._v("\n      Features list\n    ")]),e._v(" "),e._m(0),e._v(" "),t("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),e._v(" "),t("h4",[e._v("\n      Translations\n    ")]),e._v(" "),e._m(1),e._v(" "),t("CodeContainer",{attrs:{language:"javascript",code:":translations=\"{\n  countrySelectorLabel: 'Code pays',\n  countrySelectorError: 'Choisir un pays',\n  phoneNumberLabel: 'Numéro de téléphone',\n  example: 'Exemple :'\n}\""}}),e._v(" "),t("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),e._v(" "),t("h4",[e._v("\n      Keyboard accessibility\n    ")]),e._v(" "),e._m(2),e._v(" "),t("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),e._v(" "),t("h4",[e._v("\n      Examples\n    ")]),e._v(" "),t("div",{staticClass:"examples"},[t("ComponentContainer",{attrs:{code:e.codeExample}},[t("h5",[e._v("\n          Basic\n        ")]),e._v(" "),t("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-3"}),e._v(" "),t("MazPhoneNumberInput",{on:{update:function(n){e.results=e.getJson(n)}},model:{value:e.phoneNumber,callback:function(n){e.phoneNumber=n},expression:"phoneNumber"}}),e._v(" "),t("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-3"}),e._v(" "),t("p",[t("strong",[e._v("Value:")]),e._v(" "+e._s(e.phoneNumber||"null")+"\n        ")]),e._v(" "),t("br"),e._v(" "),t("strong",[e._v("Results sent on @update event:")]),e._v(" "),t("CodeContainer",{attrs:{code:e.results||"null",language:"json"}})],1),e._v(" "),t("ComponentContainer",{attrs:{code:e.example2}},[t("h5",{staticClass:"maz-mb-2"},[e._v("\n          Advanced settings\n        ")]),e._v(" "),t("h6",[e._v("\n          With default value & preferred countries & default country code & no flags & show code on list\n        ")]),e._v(" "),t("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-3"}),e._v(" "),t("MazPhoneNumberInput",{attrs:{"show-code-on-list":"","no-use-browser-locale":"","preferred-countries":["FR","BE","DE"],size:"lg"},on:{update:function(n){e.resultsExample=e.getJson(n)}},model:{value:e.phoneNumberExample,callback:function(n){e.phoneNumberExample=n},expression:"phoneNumberExample"}}),e._v(" "),t("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-3"}),e._v(" "),t("p",[t("strong",[e._v("Value:")]),e._v(" "+e._s(e.phoneNumberExample||"null")+"\n        ")]),e._v(" "),t("br"),e._v(" "),t("strong",[e._v("Results sent on @update event:")]),e._v(" "),t("CodeContainer",{attrs:{code:e.resultsExample||"null",language:"json"}})],1)],1),e._v(" "),t("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5",attrs:{id:"howToUseIt"}}),e._v(" "),t("h4",[e._v("\n      How to use it ?\n    ")]),e._v(" "),t("CodeContainer",{attrs:{language:"html",code:"<template>\n  <MazPhoneNumberInput\n    v-model=\"phoneNumber\"\n  />\n</template>\n\n<script>\n  import { MazPhoneNumberInput } from 'maz-ui'\n  export default {\n    components: { MazPhoneNumberInput }\n    data () {\n      return {\n        phoneNumber: null\n      }\n    }\n  }\n<\/script>"}})],1)}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",[t("li",[t("strong",[e._v("Auto-detect")]),e._v(" country calling code with phone number provided\n      ")]),e._v(" "),t("li",[e._v("\n        You can set "),t("strong",[e._v("preferred-countries")]),e._v(", "),t("strong",[e._v("ignored-countries")]),e._v(" or have "),t("strong",[e._v("only-countries")])]),e._v(" "),t("li",[e._v("\n        Validation UI state: input becomes green ($success-color) when the phone number is valid (can be disabled by "),t("strong",[e._v("no-validation")]),e._v(" attr)\n      ")]),e._v(" "),t("li",[t("strong",[e._v("Multi options to getting country code")]),e._v(" : By default the component get the country code via the browser (disable it with no-use-browser-locale)\n        or you can use fetch-country to get the country code via https://ip2c.org/s (network needed) - you can use default-country-code option instead to set one\n      ")]),e._v(" "),t("li",[e._v("\n        Phone number formatting while typing\n      ")]),e._v(" "),t("li",[e._v("\n        You can search your country in list (open countries list & type your country name)\n      ")]),e._v(" "),t("li",[e._v("\n        Keyboard accessibility (Arrow down, Arrow up: Countries list navigation - Escape: Close countries list)\n      ")]),e._v(" "),t("li",[e._v("\n        Phone number example for each country in placeholder/label\n      ")]),e._v(" "),t("li",[e._v("\n        Auto focus phone number input after selecting country\n      ")]),e._v(" "),t("li",[e._v("\n        You can disable the flags - no-flags props\n      ")]),e._v(" "),t("li",[e._v("\n        Set your translations\n      ")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("\n      You can translate the component with the "),n("strong",[this._v("translations")]),this._v(" attribute option like this:\n    ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("table",{staticClass:"maz-md"},[t("tbody",[t("tr",[t("th",[e._v("\n            Entries\n          ")]),e._v(" "),t("th",[e._v("\n            Actions\n          ")])]),e._v(" "),t("tr",[t("td",[e._v("\n            ArrowDown\n          ")]),e._v(" "),t("td",[e._v("\n            Navigation down in countries list\n          ")])]),e._v(" "),t("tr",[t("td",[e._v("\n            ArrowUp\n          ")]),e._v(" "),t("td",[e._v("\n            Navigation up in countries list\n          ")])]),e._v(" "),t("tr",[t("td",[e._v("\n            Escape\n          ")]),e._v(" "),t("td",[e._v("\n            Close countries list\n          ")])]),e._v(" "),t("tr",[t("td",[e._v("\n            All letters characters\n          ")]),e._v(" "),t("td",[e._v("\n            Searching country name in countries list (should be open)\n          ")])])])])}],!1,null,"ad687560",null);n.default=component.exports}}]);