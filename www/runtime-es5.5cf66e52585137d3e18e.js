!function(){"use strict";var e,t,f,c,r,n={},a={};function d(e){var t=a[e];if(void 0!==t)return t.exports;var f=a[e]={exports:{}};return n[e](f,f.exports,d),f.exports}d.m=n,e=[],d.O=function(t,f,c,r){if(!f){var n=1/0;for(u=0;u<e.length;u++){f=e[u][0],c=e[u][1],r=e[u][2];for(var a=!0,o=0;o<f.length;o++)(!1&r||n>=r)&&Object.keys(d.O).every(function(e){return d.O[e](f[o])})?f.splice(o--,1):(a=!1,r<n&&(n=r));a&&(e.splice(u--,1),t=c())}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[f,c,r]},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,{a:t}),t},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},d.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var r=Object.create(null);d.r(r);var n={};t=t||[null,f({}),f([]),f(f)];for(var a=2&c&&e;"object"==typeof a&&!~t.indexOf(a);a=f(a))Object.getOwnPropertyNames(a).forEach(function(t){n[t]=function(){return e[t]}});return n.default=function(){return e},d.d(r,n),r},d.d=function(e,t){for(var f in t)d.o(t,f)&&!d.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:t[f]})},d.f={},d.e=function(e){return Promise.all(Object.keys(d.f).reduce(function(t,f){return d.f[f](e,t),t},[]))},d.u=function(e){return({1843:"polyfills-css-shim",2214:"polyfills-core-js",6748:"polyfills-dom",8592:"common"}[e]||e)+"-es5."+{19:"ceead80dba90b8aaee4a",305:"e7cbfbe1cb50487ffb6f",392:"fb19ee9d8da5981d92eb",431:"290e868979041cf0aae9",592:"4e86f0477b158367d252",801:"cc70ad3744e6c9921b0a",862:"ceb14a3c70688212ce37",937:"55f97f56b9fcae71d5f8",1296:"da50b5ac519c4decd396",1374:"fc920e9205c3946f1c25",1489:"8a9d4539e9d8d505ea73",1602:"ac514be53ee626d658de",1709:"05b74422314c2e8a6150",1843:"42b964f870057061a7fe",1855:"f313dad4ae99885be87d",2191:"0c0a4ef274709ac7a7c1",2214:"5fbe1e58c753dec05498",3087:"57901cf4d948ec77b79a",3122:"ef992c37a4ac1f2d1292",3527:"df5708ee48a38a7c8fba",3881:"1940514337306ed05117",4195:"4b9d6e101ffc4c821df8",4513:"33be9c4e9342576f7e0a",4694:"da8bdb0ba5dfb6888e52",5043:"dfa58578f45ff280480f",5174:"1c2d73c2c5615e747630",5182:"8d60a020ddd6705816e9",5277:"ba690d3443ed7e5f8b2d",5494:"129775ae3996c6990c64",5830:"a14e1d26a8a36f7d573a",6034:"1e8eb33fbe93a572cfb8",6069:"31eb955b0f334691f4a4",6108:"7092fd29475b69118056",6164:"50bae028c47944ae8938",6272:"294c40fc298f6f3d8865",6748:"ff7deb7eed83a37beb55",6911:"83f4604c87f7044895d0",7089:"ada9180efe73fa731bbd",7110:"ac9bd12835c8f613dee9",7162:"9a2e1cb8b5d1df58e42b",7321:"8b3c5be839dadbf3df04",7509:"68460eead6f3c7ecfe8d",7757:"61dac4ad3bdb1fc7ee47",7802:"6dcc470f22f274b8cd4e",7895:"1bf48622b08198a5edb6",7896:"f92b81d267954ca09ece",8056:"178f4e93562bd962f2fb",8592:"f900dcf8efbdae65f946",8669:"9ff4cea66e23d5640821",8695:"81e870fc5791fcecf130",8708:"6d14351ac9467ebf3628",8810:"8042d95b7d97a1c9715a",8837:"7f35a23e4ea1a4ed274b",8962:"4d0da7d04a09c826c9eb",8991:"4774b7379633c48f8358",9072:"3ac2016a79020de087c2",9222:"809a5dc4816b6c84e17c",9427:"ae510cdb84f792a993bc",9695:"6c29937162f0161ee252",9706:"214cd251f52b02e76f9e",9857:"ee8f133fbc2964583bfe",9921:"ac856b7034630e727baf"}[e]+".js"},d.miniCssF=function(e){return"styles.5cf13d7cfb336c061d8d.css"},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c={},d.l=function(e,t,f,r){if(c[e])c[e].push(t);else{var n,a;if(void 0!==f)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var b=o[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")=="gamehub:"+f){n=b;break}}n||(a=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,d.nc&&n.setAttribute("nonce",d.nc),n.setAttribute("data-webpack","gamehub:"+f),n.src=d.tu(e)),c[e]=[t];var i=function(t,f){n.onerror=n.onload=null,clearTimeout(l);var r=c[e];if(delete c[e],n.parentNode&&n.parentNode.removeChild(n),r&&r.forEach(function(e){return e(f)}),t)return t(f)},l=setTimeout(i.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=i.bind(null,n.onerror),n.onload=i.bind(null,n.onload),a&&document.head.appendChild(n)}},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.tu=function(e){return void 0===r&&(r={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(r=trustedTypes.createPolicy("angular#bundler",r))),r.createScriptURL(e)},d.p="",function(){var e={3666:0};d.f.j=function(t,f){var c=d.o(e,t)?e[t]:void 0;if(0!==c)if(c)f.push(c[2]);else if(3666!=t){var r=new Promise(function(f,r){c=e[t]=[f,r]});f.push(c[2]=r);var n=d.p+d.u(t),a=new Error;d.l(n,function(f){if(d.o(e,t)&&(0!==(c=e[t])&&(e[t]=void 0),c)){var r=f&&("load"===f.type?"missing":f.type),n=f&&f.target&&f.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",a.name="ChunkLoadError",a.type=r,a.request=n,c[1](a)}},"chunk-"+t,t)}else e[t]=0},d.O.j=function(t){return 0===e[t]};var t=function(t,f){var c,r,n=f[0],a=f[1],o=f[2],u=0;for(c in a)d.o(a,c)&&(d.m[c]=a[c]);if(o)var b=o(d);for(t&&t(f);u<n.length;u++)d.o(e,r=n[u])&&e[r]&&e[r][0](),e[n[u]]=0;return d.O(b)},f=self.webpackChunkgamehub=self.webpackChunkgamehub||[];f.forEach(t.bind(null,0)),f.push=t.bind(null,f.push.bind(f))}()}();