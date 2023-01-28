"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9522],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>k});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),d=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(r),c=n,k=s["".concat(p,".").concat(c)]||s[c]||f[c]||l;return r?a.createElement(k,i(i({ref:e},m),{},{components:r})):a.createElement(k,i({ref:e},m))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},88162:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const l={},i="Betaflight Flight Controller LED usage",o={unversionedId:"development/FC-LEDs",id:"development/FC-LEDs",title:"Betaflight Flight Controller LED usage",description:"Betaflight Flight Controllers typically have two LEDs, possibly three which indicate the conditions below.",source:"@site/docs/development/FC-LEDs.md",sourceDirName:"development",slug:"/development/FC-LEDs",permalink:"/betaflight.com/docs/development/FC-LEDs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"development",previous:{title:"EXST bootloader",permalink:"/betaflight.com/docs/development/EXST-Bootloader"},next:{title:"Failsafe",permalink:"/betaflight.com/docs/development/Failsafe-Before-4.3"}},p={},d=[],m={toc:d};function s(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"betaflight-flight-controller-led-usage"},"Betaflight Flight Controller LED usage"),(0,n.kt)("p",null,"Betaflight Flight Controllers typically have two LEDs, possibly three which indicate the conditions below."),(0,n.kt)("p",null,"FCs implement at least one LED to indicate activity. The second is preferable, and the third optional."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"LED Number"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Colour"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Function"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Blue"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Flashes 5 times on startup",(0,n.kt)("br",null),"On whilst armed",(0,n.kt)("br",null),"Flashes to indicate warning",(0,n.kt)("br",null),"Flashes during ESC passthough",(0,n.kt)("br",null),"Flashes during USB MSC activity",(0,n.kt)("br",null),"Indicates activity for serial passthrough",(0,n.kt)("br",null),"Indicates Rx activity for serial 4way",(0,n.kt)("br",null),"Flashes during Spekrum binding",(0,n.kt)("br",null),"Flashes during Hard Fault conditions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Green"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Preferably"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Flashes 5 times on startup",(0,n.kt)("br",null),"Indicates Tx activity for serial 4way",(0,n.kt)("br",null),"Flashes during Hard Fault conditions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Amber"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Normally on",(0,n.kt)("br",null),"Flashes during Spekrum binding",(0,n.kt)("br",null),"Flashes during Hard Fault conditions")))),(0,n.kt)("p",null,"Error codes indicated by a brief 100 ms flash and then a count of 250 ms flashes as per the table below."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Error"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Flash count"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FAILURE_MISSING_ACC"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FAILURE_ACC_INIT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FAILURE_ACC_INCOMPATIBLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FAILURE_INVALID_EEPROM_CONTENTS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FAILURE_CONFIG_STORE_FAILURE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FAILURE_GYRO_INIT_FAILED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FAILURE_FLASH_READ_FAILED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FAILURE_FLASH_WRITE_FAILED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FAILURE_FLASH_INIT_FAILED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FAILURE_EXTERNAL_FLASH_READ_FAILED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FAILURE_EXTERNAL_FLASH_WRITE_FAILED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"11")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FAILURE_EXTERNAL_FLASH_INIT_FAILED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"12")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FAILURE_SDCARD_READ_FAILED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"13")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FAILURE_SDCARD_WRITE_FAILED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"14")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FAILURE_SDCARD_INITIALISATION_FAILED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"15")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FAILURE_SDCARD_REQUIRED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"16")))))}s.isMDXComponent=!0}}]);