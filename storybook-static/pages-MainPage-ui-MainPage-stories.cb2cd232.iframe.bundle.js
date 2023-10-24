"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[384,809],{"./src/pages/MainPage/ui/MainPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DarkPage:()=>DarkPage,Page:()=>Page,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Page$parameters,_Page$parameters2,_DarkPage$parameters,_DarkPage$parameters2,_MainPage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/pages/MainPage/ui/MainPage.tsx"),_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/config/ThemeDecorator/ThemeDecorator.tsx"),_app_providers_ThemeProvider_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/providers/ThemeProvider/lib/ThemeContext.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Page/MainPage",component:_MainPage__WEBPACK_IMPORTED_MODULE_0__.default,parameters:{background:"color"},tags:["autodocs"]};var Page={args:{}};Page.decorators=[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_providers_ThemeProvider_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.Q2.LIGHT)];var DarkPage={args:{}};DarkPage.decorators=[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_providers_ThemeProvider_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.Q2.DARK)],Page.parameters=_objectSpread(_objectSpread({},Page.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Page$parameters=Page.parameters)||void 0===_Page$parameters?void 0:_Page$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n} satisfies Meta<typeof MainPage>"},null===(_Page$parameters2=Page.parameters)||void 0===_Page$parameters2||null===(_Page$parameters2=_Page$parameters2.docs)||void 0===_Page$parameters2?void 0:_Page$parameters2.source)})}),DarkPage.parameters=_objectSpread(_objectSpread({},DarkPage.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DarkPage$parameters=DarkPage.parameters)||void 0===_DarkPage$parameters?void 0:_DarkPage$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n} satisfies Meta<typeof MainPage>"},null===(_DarkPage$parameters2=DarkPage.parameters)||void 0===_DarkPage$parameters2||null===(_DarkPage$parameters2=_DarkPage$parameters2.docs)||void 0===_DarkPage$parameters2?void 0:_DarkPage$parameters2.source)})});var __namedExportsOrder=["Page","DarkPage"]},"./src/app/providers/ThemeProvider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>ui_ThemeProvider,F:()=>useTheme});var react=__webpack_require__("./node_modules/react/index.js"),ThemeContext=__webpack_require__("./src/app/providers/ThemeProvider/lib/ThemeContext.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var defaultTheme=localStorage.getItem(ThemeContext.a1)||ThemeContext.Q2.LIGHT,ThemeProvider_ThemeProvider=function ThemeProvider(props){var initialTheme=props.initialTheme,children=props.children,_useState2=_slicedToArray((0,react.useState)(initialTheme||defaultTheme),2),theme=_useState2[0],setTheme=_useState2[1],defaultProps=(0,react.useMemo)((function(){return{theme,setTheme}}),[theme]);return(0,jsx_runtime.jsx)(ThemeContext.Ni.Provider,{value:defaultProps,children})};ThemeProvider_ThemeProvider.displayName="ThemeProvider";const ui_ThemeProvider=ThemeProvider_ThemeProvider;try{ThemeProvider_ThemeProvider.displayName="ThemeProvider",ThemeProvider_ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{initialTheme:{defaultValue:null,description:"",name:"initialTheme",required:!1,type:{name:"enum",value:[{value:'"app_light_theme"'},{value:'"app_dark_theme"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider_ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}function useTheme(){var _useContext=(0,react.useContext)(ThemeContext.Ni),theme=_useContext.theme,setTheme=_useContext.setTheme;return{theme,toggleTheme:function toggleTheme(){var newTheme=theme===ThemeContext.Q2.DARK?ThemeContext.Q2.LIGHT:ThemeContext.Q2.DARK;document.body.className=newTheme,localStorage.setItem(ThemeContext.a1,newTheme),setTheme(newTheme)}}}try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{initialTheme:{defaultValue:null,description:"",name:"initialTheme",required:!1,type:{name:"enum",value:[{value:'"app_light_theme"'},{value:'"app_dark_theme"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/providers/ThemeProvider/index.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/app/providers/ThemeProvider/index.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/app/providers/ThemeProvider/lib/ThemeContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ni:()=>ThemeContext,Q2:()=>Theme,a1:()=>LOCAL_STORAGE_THEME_KEY});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),Theme=function(Theme){return Theme.LIGHT="app_light_theme",Theme.DARK="app_dark_theme",Theme}({}),ThemeContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),LOCAL_STORAGE_THEME_KEY="theme"},"./src/pages/MainPage/ui/MainPage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>ui_MainPage});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var BugButton=function BugButton(_ref){_ref.className;var _useState2=_slicedToArray((0,react.useState)(!1),2),error=_useState2[0],setError=_useState2[1];return(0,react.useEffect)((function(){if(error)throw new Error}),[error]),(0,jsx_runtime.jsx)(Button.zx,{onClick:function onThrow(){return setError(!0)},children:"throw error"})};BugButton.displayName="BugButton";try{BugButton.displayName="BugButton",BugButton.__docgenInfo={description:"",displayName:"BugButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/providers/ErrorBoundary/ui/BugButton.tsx#BugButton"]={docgenInfo:BugButton.__docgenInfo,name:"BugButton",path:"src/app/providers/ErrorBoundary/ui/BugButton.tsx#BugButton"})}catch(__react_docgen_typescript_loader_error){}var react_redux_es=__webpack_require__("./node_modules/react-redux/es/index.js"),counterSlice=(0,__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js").oM)({name:"counter",initialState:{value:0},reducers:{increment:function increment(state){state.value+=1},decrement:function decrement(state){state.value-=1}}}),counterActions=counterSlice.actions,getCounterValue=(counterSlice.reducer,(0,__webpack_require__("./node_modules/reselect/es/index.js").P1)((function getCounter(state){return state.counter}),(function(counter){return counter.value}))),Counter=function Counter(){var dispatch=(0,react_redux_es.I0)(),counterValue=(0,react_redux_es.v9)(getCounterValue);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("h1",{children:["value = ",counterValue]}),(0,jsx_runtime.jsx)(Button.zx,{onClick:function increment(){dispatch(counterActions.increment())},children:"increment"}),(0,jsx_runtime.jsx)(Button.zx,{onClick:function decrement(){dispatch(counterActions.decrement())},children:"decrement"})]})};Counter.displayName="Counter";var MainPage=function MainPage(){var t=(0,es.$G)("main").t;return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(BugButton,{}),t("Главная страница"),(0,jsx_runtime.jsx)(Counter,{})]})};MainPage.displayName="MainPage";const ui_MainPage=MainPage},"./src/shared/config/ThemeDecorator/ThemeDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/app/providers/ThemeProvider/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=function ThemeDecorator(theme){return function(StoryComponent){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__.f,{initialTheme:theme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"app ".concat(theme),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StoryComponent,{})})})}};const __WEBPACK_DEFAULT_EXPORT__=ThemeDecorator;try{ThemeDecorator.displayName="ThemeDecorator",ThemeDecorator.__docgenInfo={description:"",displayName:"ThemeDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"]={docgenInfo:ThemeDecorator.__docgenInfo,name:"ThemeDecorator",path:"src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/lib/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function classNames(cls){var mods=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return[cls].concat(_toConsumableArray((arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]).filter(Boolean)),_toConsumableArray(Object.entries(mods).filter((function(_ref){var _ref2=_slicedToArray(_ref,2),value=(_ref2[0],_ref2[1]);return Boolean(value)})).map((function(_ref3){return _slicedToArray(_ref3,1)[0]})))).join(" ")}__webpack_require__.d(__webpack_exports__,{A:()=>classNames})},"./src/shared/ui/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zx:()=>Button,qE:()=>ButtonSize,UH:()=>ThemeButton});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.Z,options);const Button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["className","children","theme","square","size"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ThemeButton=function(ThemeButton){return ThemeButton.CLEAR="clear",ThemeButton.OUTLINE="outline",ThemeButton.BACKGROUND="background",ThemeButton.BACKGROUND_INVERTED="backgroundInverted",ThemeButton}({}),ButtonSize=function(ButtonSize){return ButtonSize.M="size_m",ButtonSize.L="size_l",ButtonSize.XL="size_xl",ButtonSize}({}),Button=function Button(props){var _mods,className=props.className,children=props.children,theme=props.theme,square=props.square,_props$size=props.size,size=void 0===_props$size?ButtonSize.M:_props$size,otherProps=_objectWithoutProperties(props,_excluded),mods=(_defineProperty(_mods={},Button_Button_module[theme],!0),_defineProperty(_mods,Button_Button_module.square,square),_defineProperty(_mods,Button_Button_module[size],!0),_mods);return(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({className:(0,classNames.A)(Button_Button_module.Button,mods,[className])},otherProps),{},{children}))};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"outline"'},{value:'"background"'},{value:'"backgroundInverted"'}]}},square:{defaultValue:null,description:"",name:"square",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"size_m"'},{value:'"size_l"'},{value:'"size_xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/ui/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Button-Button-module__Button--a4nOa{cursor:pointer;color:var(--inverted-primary-color)}.src-shared-ui-Button-Button-module__clear--FAEtI{padding:0;border:none;background:none;outline:none}.src-shared-ui-Button-Button-module__outline--pxBl_{padding:10px 15px;border:1px solid var(--primary-color);color:var(--primary-color);background:none}.src-shared-ui-Button-Button-module__square--pKS1A{padding:0px}.src-shared-ui-Button-Button-module__background--nXdyj{background:var(--bg-color);color:var(--primary-color);border:none}.src-shared-ui-Button-Button-module__backgroundInverted--EXVU3{background:var(--inverted-bg-color);color:var(--inverted-primary-color);border:none}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_m--xvXQX{width:var(--font-line-m);height:var(--font-line-m)}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_l--rsm7T{width:var(--font-line-l);height:var(--font-line-l)}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_xl--WJ8He{width:var(--font-line-xl);height:var(--font-line-xl)}.src-shared-ui-Button-Button-module__size_m--xvXQX{font:var(--font-m)}.src-shared-ui-Button-Button-module__size_l--rsm7T{font:var(--font-l)}.src-shared-ui-Button-Button-module__size_xl--WJ8He{font:var(--font-xl)}","",{version:3,sources:["webpack://./src/shared/ui/Button/Button.module.scss"],names:[],mappings:"AAAA,mDACI,cAAA,CACA,mCAAA,CAGJ,kDACI,SAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CAGJ,oDACI,iBAAA,CACA,qCAAA,CACA,0BAAA,CACA,eAAA,CAKJ,mDAEK,WAAA,CAIL,uDACK,0BAAA,CACA,0BAAA,CACA,WAAA,CAIL,+DACK,mCAAA,CACA,mCAAA,CACA,WAAA,CAKL,qGAEK,wBAAA,CACA,yBAAA,CAIL,qGAEK,wBAAA,CACA,yBAAA,CAIL,sGAEK,yBAAA,CACA,0BAAA,CAKL,mDACI,kBAAA,CAGJ,mDACI,kBAAA,CAGJ,oDACI,mBAAA",sourcesContent:[".Button {\n    cursor: pointer;\n    color: var(--inverted-primary-color);\n}\n\n.clear {\n    padding: 0;\n    border: none;\n    background: none;\n    outline: none;\n}\n\n.outline {\n    padding: 10px 15px;\n    border: 1px solid var(--primary-color);\n    color: var(--primary-color);\n    background: none;\n}\n\n\n\n.square {\n\n     padding: 0px;\n}\n\n\n.background {\n     background: var(--bg-color);\n     color: var(--primary-color);\n     border: none;\n}\n\n\n.backgroundInverted {\n     background: var(--inverted-bg-color);\n     color: var(--inverted-primary-color);\n     border: none;     \n\n}\n\n\n.square.size_m {\n\n     width: var(--font-line-m);\n     height: var(--font-line-m);\n\n}\n\n.square.size_l {\n\n     width: var(--font-line-l);\n     height: var(--font-line-l);\n\n}\n\n.square.size_xl {\n\n     width: var(--font-line-xl);\n     height: var(--font-line-xl);\n\n}\n\n\n.size_m {\n    font: var(--font-m);\n}\n\n.size_l {\n    font: var(--font-l);\n}\n\n.size_xl {\n    font: var(--font-xl);\n}\n\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Button:"src-shared-ui-Button-Button-module__Button--a4nOa",clear:"src-shared-ui-Button-Button-module__clear--FAEtI",outline:"src-shared-ui-Button-Button-module__outline--pxBl_",square:"src-shared-ui-Button-Button-module__square--pKS1A",background:"src-shared-ui-Button-Button-module__background--nXdyj",backgroundInverted:"src-shared-ui-Button-Button-module__backgroundInverted--EXVU3",size_m:"src-shared-ui-Button-Button-module__size_m--xvXQX",size_l:"src-shared-ui-Button-Button-module__size_l--rsm7T",size_xl:"src-shared-ui-Button-Button-module__size_xl--WJ8He"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);