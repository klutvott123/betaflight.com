"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7571],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46025:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},l="OMNIBUS F7",o={unversionedId:"wiki/boards/OMNIBUSF7",id:"wiki/boards/OMNIBUSF7",title:"OMNIBUS F7",description:"V2 support",source:"@site/docs/wiki/boards/OMNIBUSF7.md",sourceDirName:"wiki/boards",slug:"/wiki/boards/OMNIBUSF7",permalink:"/betaflight.com/docs/wiki/boards/OMNIBUSF7",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"Board Omnibus F4 Nano V7",permalink:"/betaflight.com/docs/wiki/boards/OMNIBUSF4NANOV7"},next:{title:"OMNIBUS Fireworks v2",permalink:"/betaflight.com/docs/wiki/boards/OMNIBUSFW-V2"}},u={},p=[{value:"V2 support",id:"v2-support",level:3},{value:"Firmware target",id:"firmware-target",level:4},{value:"ESC Mid Rail and ESC Telemetry Jumper Block",id:"esc-mid-rail-and-esc-telemetry-jumper-block",level:4},{value:"Features",id:"features",level:2}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"omnibus-f7"},"OMNIBUS F7"),(0,a.kt)("h3",{id:"v2-support"},"V2 support"),(0,a.kt)("h4",{id:"firmware-target"},"Firmware target"),(0,a.kt)("p",null,"For OMNIBUS F7 V2, please use ",(0,a.kt)("strong",{parentName:"p"},"OMNIBUSF7V2")," target, available in 3.2RC-4 and later."),(0,a.kt)("h4",{id:"esc-mid-rail-and-esc-telemetry-jumper-block"},"ESC Mid Rail and ESC Telemetry Jumper Block"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ESC Mid Rail can be configured either as (a) 5V INPUT rail or (b) ESC telemetry input to UART7_RX(RX7)."),(0,a.kt)("li",{parentName:"ul"},"Current sensing uses pin7 of J3 connector. This pin can be used as (c) voltage (0-3V3) encoded current sensor output suitable for input to ADC, or (d) ESC telemetry input to UART7_RX(RX7)."),(0,a.kt)("li",{parentName:"ul"},"These functions should be selected with two jumper blocks, as described in the drawing below.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14850998/29853571-abed2e8c-8d7b-11e7-81ac-2eaf86052bda.jpg",alt:null})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("p",null,"F7 + OSD"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OSD"),(0,a.kt)("li",{parentName:"ul"},"SPI Gyro ICM-20608-G (SPI1)"),(0,a.kt)("li",{parentName:"ul"},"SPI Gyro MPU6000 (SPI3)"),(0,a.kt)("li",{parentName:"ul"},"STM32 F745 MCU",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"F7 MCUs have an integrated inverter, like the STM32F3"))),(0,a.kt)("li",{parentName:"ul"},"SBUS/PPM input"),(0,a.kt)("li",{parentName:"ul"},"4PWM output, DSHOT enabled"),(0,a.kt)("li",{parentName:"ul"},"BMP280 BARO"),(0,a.kt)("li",{parentName:"ul"},"VBAT sensor (voltage divider)"),(0,a.kt)("li",{parentName:"ul"},"External current sensor and RSSI ADC ready"),(0,a.kt)("li",{parentName:"ul"},"SDCARD")))}c.isMDXComponent=!0}}]);