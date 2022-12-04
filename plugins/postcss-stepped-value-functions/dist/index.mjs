import e from"postcss-value-parser";function t(t,o,r,u){const a=[];let s=!1;if(t.nodes.forEach((e=>{"word"!==e.type?function(e){return"function"===e.type&&"var"===e.value.toLowerCase()}(e)&&(s=!0):a.push(e)})),s)return void n(o,r,`Failed to transform ${o.value} as variables can't be processed.`,u);if(2!==a.length)return void n(o,r,`Failed to transform ${o.value} as it's expecting 2 arguments instead of ${a.length}`,u);const i=e.unit(a[0].value),l=e.unit(a[1].value);if(i&&l){if(i.unit===l.unit)return[i,l];n(o,r,`Failed to transform ${o.value} as the units don't match`,u)}}function n(e,t,n,o){"warn"===o.onInvalid&&e.warn(t,n)}function o(e){delete e.nodes;const t=e;return t.type="word",t}const r="mod(";const u="rem(";const a="round(";var s;!function(e){e.Nearest="nearest",e.Up="up",e.Down="down",e.ToZero="to-zero"}(s||(s={}));const i=/^[a-z|-]+$/i;const l=l=>{const c=Object.assign({preserve:!1,onInvalid:""},l);return{postcssPlugin:"postcss-stepped-value-functions",Declaration(l,{result:v}){const f=[r,u,a].some((e=>l.value.toLowerCase().includes(e)));if(!l||!f)return;const d=l.clone();if(d.value.toLowerCase().includes(r)){const n=function(n,r,u){const a=e(n.value);return a.walk((e=>{if("function"!==e.type||"mod"!==e.value.toLowerCase())return;const a=t(e,n,r,u);if(!a)return;const[s,i]=a,l=Number(s.number),c=Number(i.number),v=(l%c+c)%c;"number"!=typeof v||isNaN(v)||(o(e).value=0===v?"0":`${v}${s.unit}`)}),!0),a.toString()}(d,v,c);n&&(d.value=n)}if(d.value.toLowerCase().includes(u)){const n=function(n,r,u){const a=e(n.value);return a.walk((e=>{if("function"!==e.type||"rem"!==e.value.toLowerCase())return;const a=t(e,n,r,u);if(!a)return;const[s,i]=a,l=Number(s.number)%Number(i.number);("number"==typeof l||isNaN(l))&&(o(e).value=0===l?"0":`${l}${s.unit}`)}),!0),a.toString()}(d,v,c);n&&(d.value=n)}if(d.value.toLowerCase().includes(a)){const t=function(t,r,u){const a=e(t.value);return a.walk((a=>{if("function"!==a.type||"round"!==a.value.toLowerCase())return;if(3!==a.nodes.length&&5!==a.nodes.length)return void n(t,r,`Failed to transform ${t.value} as the amount of arguments isn't valid`,u);const l=a.nodes.filter((e=>"word"===e.type)),c=l[0].value;let v,f,d;if(i.test(c.toLowerCase())){var m,p;if(!Object.values(s).includes(c.toLowerCase()))return void n(t,r,`Failed to transform ${t.value} as ${c} is not a valid rounding strategy.`,u);v=c.toLowerCase(),f=e.unit((null==l||null==(m=l[1])?void 0:m.value)||""),d=e.unit((null==l||null==(p=l[2])?void 0:p.value)||"")}else{var b,w;v=s.Nearest,f=e.unit((null==l||null==(b=l[0])?void 0:b.value)||""),d=e.unit((null==l||null==(w=l[1])?void 0:w.value)||"")}if(!f||!d)return;if(f.unit!==d.unit)return void n(t,r,`Failed to transform ${t.value} as the units don't match`,u);const h=Number(f.number),N=Number(d.number);let $;switch(v){case s.Down:$=Math.floor(h/N)*N;break;case s.Up:$=Math.ceil(h/N)*N;break;case s.ToZero:$=Math.trunc(h/N)*N;break;case s.Nearest:default:$=Math.round(h/N)*N}"number"!=typeof $||isNaN($)||(o(a).value=0===$?"0":`${$}${f.unit}`)}),!0),a.toString()}(d,v,c);t&&(d.value=t)}l.value!==d.value&&(l.before(d),c.preserve||l.remove())}}};l.postcss=!0;export{l as default};
