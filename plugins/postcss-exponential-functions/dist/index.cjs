"use strict";var e=require("@csstools/css-calc");const s=new RegExp(`(${["exp","hypot","log","pow","sqrt"].join("|")})\\(`,"i"),creator=o=>{const t=Object.assign({preserve:!1},o);return{postcssPlugin:"postcss-exponential-functions",Declaration(o){if(!s.test(o.value))return;const c=e.calc(o.value);c!==o.value&&(o.cloneBefore({value:c}),t.preserve||o.remove())}}};creator.postcss=!0,module.exports=creator;
