!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):((e=e||self)["k-intl"]=e["k-intl"]||{},e["k-intl"].br=t())}(this,function(){"use strict";return[{locale:"br",pluralRuleFunction:function(e,t){var n=String(e).split("."),i=Number(n[0])==e,o=i&&n[0].slice(-1),l=i&&n[0].slice(-2),r=i&&n[0].slice(-6);return t?"other":1==o&&11!=l&&71!=l&&91!=l?"one":2==o&&12!=l&&72!=l&&92!=l?"two":(3==o||4==o||9==o)&&(l<10||19<l)&&(l<70||79<l)&&(l<90||99<l)?"few":0!=e&&i&&0==r?"many":"other"}}]});
