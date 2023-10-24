"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[811],{"./src/widgets/Navbar/ui/Navbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DarkSide:()=>DarkSide,LightSide:()=>LightSide,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Navbar_stories});var ThemeDecorator=__webpack_require__("./src/shared/config/ThemeDecorator/ThemeDecorator.tsx"),react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Navbar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Navbar/ui/Navbar.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Navbar_module.Z,options);const ui_Navbar_module=Navbar_module.Z&&Navbar_module.Z.locals?Navbar_module.Z.locals:void 0;var AppLink=__webpack_require__("./src/shared/ui/AppLink/AppLink.tsx"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),routeConfig=__webpack_require__("./src/shared/config/routeConfig/routeConfig.tsx"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),Portal=function Portal(props){var children=props.children,_props$element=props.element,element=void 0===_props$element?document.body:_props$element;return(0,react_dom.createPortal)(children,element)};try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{element:{defaultValue:null,description:"",name:"element",required:!1,type:{name:"HTMLElement"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Portal/Portal.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/shared/ui/Portal/Portal.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}var Modal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Modal/Modal.module.scss"),Modal_module_options={};Modal_module_options.styleTagTransform=styleTagTransform_default(),Modal_module_options.setAttributes=setAttributesWithoutAttributes_default(),Modal_module_options.insert=insertBySelector_default().bind(null,"head"),Modal_module_options.domAPI=styleDomAPI_default(),Modal_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Modal_module.Z,Modal_module_options);const Modal_Modal_module=Modal_module.Z&&Modal_module.Z.locals?Modal_module.Z.locals:void 0;var ThemeProvider=__webpack_require__("./src/app/providers/ThemeProvider/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Modal=function Modal(props){var className=props.className,children=props.children,isOpen=props.isOpen,onClose=props.onClose,mods=_defineProperty({},Modal_Modal_module.opened,isOpen),closeHandler=((0,ThemeProvider.F)().theme,(0,react.useCallback)((function(){onClose&&onClose()}),[onClose])),onKeyDown=(0,react.useCallback)((function(e){"Escape"===e.key&&closeHandler()}),[closeHandler]);return(0,react.useEffect)((function(){return isOpen&&window.addEventListener("keydown",onKeyDown),function(){window.removeEventListener("keydown",onKeyDown)}}),[isOpen,onKeyDown]),(0,jsx_runtime.jsx)(Portal,{children:(0,jsx_runtime.jsx)("div",{className:(0,classNames.A)(Modal_Modal_module.Modal,mods,[className]),children:(0,jsx_runtime.jsx)("div",{className:Modal_Modal_module.overlay,onClick:closeHandler,children:(0,jsx_runtime.jsx)("div",{className:Modal_Modal_module.content,onClick:function onContentClick(e){e.stopPropagation()},children})})})})};Modal.displayName="Modal";try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/shared/ui/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Navbar=function Navbar(_ref){var className=_ref.className,t=(0,es.$G)("navbar").t,_useState2=_slicedToArray((0,react.useState)(!1),2),isAuthModal=_useState2[0],setIsAuthModal=_useState2[1],onToggleModal=(0,react.useCallback)((function(){setIsAuthModal((function(prev){return!prev}))}),[]),_useState4=_slicedToArray((0,react.useState)(!1),2);_useState4[0],_useState4[1];return(0,jsx_runtime.jsxs)("div",{className:(0,classNames.A)(ui_Navbar_module.navbar,{},[className]),children:[(0,jsx_runtime.jsx)(Button.zx,{theme:Button.UH.CLEAR,className:ui_Navbar_module.login,onClick:onToggleModal,children:t("Войти")}),(0,jsx_runtime.jsx)(Modal,{isOpen:isAuthModal,onClose:onToggleModal,children:"****** Fortes fortuna adivuat *****"}),(0,jsx_runtime.jsx)("div",{className:ui_Navbar_module.links,children:(0,jsx_runtime.jsx)(AppLink.F,{theme:AppLink.u.PRIMARY,to:routeConfig.h3.about,className:ui_Navbar_module.aboutLink,children:t("О сайте")})})]})};Navbar.displayName="Navbar";try{Navbar.displayName="Navbar",Navbar.__docgenInfo={description:"",displayName:"Navbar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/Navbar/ui/Navbar.tsx#Navbar"]={docgenInfo:Navbar.__docgenInfo,name:"Navbar",path:"src/widgets/Navbar/ui/Navbar.tsx#Navbar"})}catch(__react_docgen_typescript_loader_error){}var _LightSide$parameters,_LightSide$parameters2,_DarkSide$parameters,_DarkSide$parameters2,ThemeContext=__webpack_require__("./src/app/providers/ThemeProvider/lib/ThemeContext.ts");function Navbar_stories_typeof(o){return Navbar_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Navbar_stories_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){Navbar_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Navbar_stories_defineProperty(obj,key,value){return(key=function Navbar_stories_toPropertyKey(arg){var key=function Navbar_stories_toPrimitive(input,hint){if("object"!==Navbar_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==Navbar_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===Navbar_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const Navbar_stories={title:"Example/Navbar",component:Navbar,parameters:{background:"color"},tags:["autodocs"]};var LightSide={args:{}};LightSide.decorators=[(0,ThemeDecorator.Z)(ThemeContext.Q2.DARK)];var DarkSide={args:{}};DarkSide.decorators=[(0,ThemeDecorator.Z)(ThemeContext.Q2.LIGHT)],LightSide.parameters=_objectSpread(_objectSpread({},LightSide.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LightSide$parameters=LightSide.parameters)||void 0===_LightSide$parameters?void 0:_LightSide$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n} satisfies Meta<typeof Navbar>"},null===(_LightSide$parameters2=LightSide.parameters)||void 0===_LightSide$parameters2||null===(_LightSide$parameters2=_LightSide$parameters2.docs)||void 0===_LightSide$parameters2?void 0:_LightSide$parameters2.source)})}),DarkSide.parameters=_objectSpread(_objectSpread({},DarkSide.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DarkSide$parameters=DarkSide.parameters)||void 0===_DarkSide$parameters?void 0:_DarkSide$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n} satisfies Meta<typeof Navbar>"},null===(_DarkSide$parameters2=DarkSide.parameters)||void 0===_DarkSide$parameters2||null===(_DarkSide$parameters2=_DarkSide$parameters2.docs)||void 0===_DarkSide$parameters2?void 0:_DarkSide$parameters2.source)})});var __namedExportsOrder=["LightSide","DarkSide"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Modal/Modal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Modal-Modal-module__Modal--ESw4g{position:fixed;top:0;bottom:0;left:0;right:0;opacity:0;pointer-events:none;z-index:-1;transition:.3s}.src-shared-ui-Modal-Modal-module__overlay--OTlZW{height:100%;width:100%;background:var(--overlay-color);display:flex;align-items:center;justify-content:center}.src-shared-ui-Modal-Modal-module__content--NxhSG{padding:20px;border-radius:12px;background:var(--bg-color);transition:.3s transform;transform:scale(0.5);max-width:60%}.src-shared-ui-Modal-Modal-module__opened--RuLiu{pointer-events:auto;opacity:1;z-index:var(--modal-z-index)}.src-shared-ui-Modal-Modal-module__opened--RuLiu .src-shared-ui-Modal-Modal-module__content--NxhSG{transform:scale(1)}","",{version:3,sources:["webpack://./src/shared/ui/Modal/Modal.module.scss"],names:[],mappings:"AAAA,gDAEI,cAAA,CACA,KAAA,CACA,QAAA,CACA,MAAA,CACA,OAAA,CACA,SAAA,CACA,mBAAA,CACA,UAAA,CACA,cAAA,CAMJ,kDAEI,WAAA,CACA,UAAA,CACA,+BAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAKJ,kDAEG,YAAA,CACA,kBAAA,CACA,0BAAA,CACA,wBAAA,CACA,oBAAA,CACA,aAAA,CAGH,iDAEG,mBAAA,CACA,SAAA,CACA,4BAAA,CAEA,mGAEF,kBAAA",sourcesContent:[".Modal{\n\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    opacity:0;\n    pointer-events: none;\n    z-index: -1;\n    transition: 0.3s;\n}\n\n\n\n\n.overlay{\n\n    height:100%;\n    width: 100%;\n    background: var(--overlay-color);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n\n\n.content{\n\n   padding: 20px;\n   border-radius: 12px;\n   background: var(--bg-color);\n   transition: 0.3s transform;\n   transform: scale(0.5);\n   max-width: 60%;\n}\n\n.opened{\n\n   pointer-events: auto;\n   opacity:1;\n   z-index:var(--modal-z-index);\n   \n   .content{\n       \n\ttransform:scale(1);\n\n   }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Modal:"src-shared-ui-Modal-Modal-module__Modal--ESw4g",overlay:"src-shared-ui-Modal-Modal-module__overlay--OTlZW",content:"src-shared-ui-Modal-Modal-module__content--NxhSG",opened:"src-shared-ui-Modal-Modal-module__opened--RuLiu"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Navbar/ui/Navbar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-widgets-Navbar-ui-Navbar-module__navbar--CXKG5{width:100%;height:var(--navbar-height);background:var(--inverted-bg-color);display:flex;align-items:center;padding:20px}.src-widgets-Navbar-ui-Navbar-module__links--_tl_p{margin-left:auto}.src-widgets-Navbar-ui-Navbar-module__mainLink--ZMsbP{margin-right:15px}.src-widgets-Navbar-ui-Navbar-module__login--dFCDZ{margin-left:92%;padding-right:8px}","",{version:3,sources:["webpack://./src/widgets/Navbar/ui/Navbar.module.scss"],names:[],mappings:"AAAA,oDACI,UAAA,CACA,2BAAA,CACA,mCAAA,CACA,YAAA,CACA,kBAAA,CACA,YAAA,CAKJ,mDACI,gBAAA,CAKJ,sDACI,iBAAA,CAIJ,mDAEC,eAAA,CACA,iBAAA",sourcesContent:[".navbar {\n    width: 100%;\n    height: var(--navbar-height);\n    background: var(--inverted-bg-color);\n    display: flex;\n    align-items: center;\n    padding: 20px;\n\n}\n\n\n.links {\n    margin-left: auto;\n}\n\n\n\n.mainLink{\n    margin-right: 15px;\n}\n\n\n.login{\n\n margin-left: 92%;\n padding-right: 8px;\n\n\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={navbar:"src-widgets-Navbar-ui-Navbar-module__navbar--CXKG5",links:"src-widgets-Navbar-ui-Navbar-module__links--_tl_p",mainLink:"src-widgets-Navbar-ui-Navbar-module__mainLink--ZMsbP",login:"src-widgets-Navbar-ui-Navbar-module__login--dFCDZ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);