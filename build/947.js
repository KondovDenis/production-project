"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[947],{947:(e,n,t)=>{t.r(n),t.d(n,{default:()=>C});var r=t(893),o=t(611);const a="PQPa1eB5";var i=t(72),l=t(161),c=t(925),u=t(998),s=t(294),f=t(168),d=t(372),p=t(665),v=(0,f.hg)("login/loginByUsername",(function(e,n){return t=void 0,r=void 0,a=function(){var t,r,o,a;return function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(c){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(t=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(e,i)}catch(e){l=[6,e],r=0}finally{t=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(i){switch(i.label){case 0:t=n.extra,r=n.dispatch,o=n.rejectWithValue,i.label=1;case 1:return i.trys.push([1,3,,4]),[4,t.api.post("/login",e)];case 2:if(!(a=i.sent()).data)throw new Error;return localStorage.setItem(p.z,JSON.stringify(a.data)),r(d.hI.setAuthData(a.data)),[2,a.data];case 3:return i.sent(),[2,o("Неверный логин или пароль !")];case 4:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,n){function i(e){try{c(a.next(e))}catch(e){n(e)}}function l(e){try{c(a.throw(e))}catch(e){n(e)}}function c(n){var t;n.done?e(n.value):(t=n.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,l)}c((a=a.apply(t,r||[])).next())}));var t,r,o,a})),h=(0,f.oM)({name:"login",initialState:{isLoading:!1,username:"",password:""},reducers:{setUsername:function(e,n){e.username=n.payload},setPassword:function(e,n){e.password=n.payload}},extraReducers:function(e){e.addCase(v.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(v.fulfilled,(function(e,n){e.isLoading=!1})).addCase(v.rejected,(function(e,n){e.isLoading=!1,e.error=n.payload}))}}),y=h.actions,m=h.reducer,b=t(809),g=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.username)||""},x=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.password)||""},w=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.isLoading)||!1},j=function(e){var n;return null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.error},O=t(150),N=t(461),k=function(){return k=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},k.apply(this,arguments)},P={loginForm:m};const C=(0,s.memo)((function(e){var n=e.className,t=e.onSuccess,f=(0,i.$G)().t,d=(0,N.T)(),p=(0,u.v9)(g),h=(0,u.v9)(x),m=(0,u.v9)(w),C=(0,u.v9)(j),S=(0,s.useCallback)((function(e){d(y.setUsername(e))}),[d]),E=(0,s.useCallback)((function(e){d(y.setPassword(e))}),[d]),I=(0,s.useCallback)((function(){return e=void 0,n=void 0,o=function(){return function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(c){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(t=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(e,i)}catch(e){l=[6,e],r=0}finally{t=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(e){switch(e.label){case 0:return[4,d(v({username:p,password:h}))];case 1:return"fulfilled"==e.sent().meta.requestStatus&&t(),[2]}}))},new((r=void 0)||(r=Promise))((function(t,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,l)}c((o=o.apply(e,n||[])).next())}));var e,n,r,o}),[d,h,p,t]);return(0,r.jsx)(O.W,k({removeAfterUnmount:!0,reducers:P},{children:(0,r.jsxs)("div",k({className:(0,o.A)("xYNEfcE9",{},[n])},{children:[C&&(0,r.jsx)(b.x,{text:C,theme:b.l.ERROR}),(0,r.jsx)(c.I,{autoFocus:!0,type:"text",onChange:S,value:p,className:a,placeholder:f("Введите логин")}),(0,r.jsx)(c.I,{type:"text",onChange:E,value:h,className:a,placeholder:f("Введите пароль")}),(0,r.jsx)(l.zx,k({theme:l.UH.OUTLINE,className:"Ok_5amJo",onClick:I,disabled:m},{children:f("Войти")}))]}))}))}))},150:(e,n,t)=>{t.d(n,{W:()=>i});var r=t(893),o=t(998),a=t(294),i=function(e){var n=e.reducers,t=e.children,i=e.removeAfterUnmount,l=(0,o.oR)();return(0,o.I0)(),(0,a.useEffect)((function(){return Object.entries(n).forEach((function(e){var n=e[0],t=e[1];l.reducerManager.add(n,t)})),function(){i&&Object.entries(n).forEach((function(e){var n=e[0];e[1],l.reducerManager.remove(n)}))}}),[]),(0,r.jsx)(r.Fragment,{children:t})}},925:(e,n,t)=>{t.d(n,{I:()=>l});var r=t(893),o=t(294),a=t(611);var i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},l=(0,o.memo)((function(e){var n=(0,o.useRef)(null),t=(0,o.useState)(!1),l=t[0],c=t[1],u=e.className,s=e.value,f=e.onChange,d=e.type,p=void 0===d?"text":d,v=e.placeholder,h=e.autofocus,y=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}(e,["className","value","onChange","type","placeholder","autofocus"]),m=(0,o.useState)(0),b=m[0],g=m[1];return(0,o.useEffect)((function(){var e;h&&(c(!0),null===(e=n.current)||void 0===e||e.focus())}),[h]),(0,r.jsxs)("div",i({className:(0,a.A)("LuFDUWoP",{},[u])},{children:[v&&(0,r.jsx)("div",i({className:"emAQQ85i"},{children:"".concat(v," >")})),(0,r.jsxs)("div",i({className:"y1GiFC_L"},{children:[(0,r.jsx)("input",i({ref:n,type:p,value:s,onChange:function(e){null==f||f(e.target.value),g(e.target.value.length)},className:"LVdIPwcx",onBlur:function(){c(!1)},onFocus:function(){c(!0)},onSelect:function(e){var n;g((null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.selectionStart)||0)}},y)),l&&(0,r.jsx)("span",{className:"lqMFGBuL",style:{left:"".concat(6*b,"px")}})]}))]}))}))},809:(e,n,t)=>{t.d(n,{x:()=>u,l:()=>i});var r=t(893),o=t(611);const a={text:"uNJeeCm1",error:"F9oLXAK4",title:"ikI7VPeL"};var i,l=t(294),c=function(){return c=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},c.apply(this,arguments)};!function(e){e.PRIMARY="primary",e.ERROR="error"}(i||(i={}));var u=(0,l.memo)((function(e){var n,t=e.className,l=e.title,u=e.text,s=e.theme,f=void 0===s?i.PRIMARY:s;return(0,r.jsxs)("div",c({className:(0,o.A)(a.Text,(n={},n[a[f]]=!0,n),[t])},{children:[l&&(0,r.jsx)("p",c({className:a.title},{children:l})),u&&(0,r.jsx)("p",c({className:a.text},{children:u}))]}))}))},461:(e,n,t)=>{t.d(n,{T:()=>o});var r=t(998),o=function(){return(0,r.I0)()}}}]);