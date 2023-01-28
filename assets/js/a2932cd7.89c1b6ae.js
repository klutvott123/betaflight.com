"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1487],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68985:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={},i="Board - Speedy Bee F7 AIO",l={unversionedId:"wiki/boards/SPEEDYBEEF7AIO",id:"wiki/boards/SPEEDYBEEF7AIO",title:"Board - Speedy Bee F7 AIO",description:"Description",source:"@site/docs/wiki/boards/SPEEDYBEEF7AIO.md",sourceDirName:"wiki/boards",slug:"/wiki/boards/SPEEDYBEEF7AIO",permalink:"/betaflight.com/docs/wiki/boards/SPEEDYBEEF7AIO",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"Board - SpeedyBee F4 AIO",permalink:"/betaflight.com/docs/wiki/boards/SPEEDYBEEF4AIO-1"},next:{title:"Board - Seriously Pro SP Racing F3 (Acro/Deluxe)",permalink:"/betaflight.com/docs/wiki/boards/SPRACINGF3"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Hardware Features",id:"hardware-features",level:3}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"board---speedy-bee-f7-aio"},"Board - Speedy Bee F7 AIO"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"The Speedy Bee F7 AIO is an AIO flight controller that integrates PDB, Bluetooth chip, Barometer, 32MB OnBoard Flash (Used for BlackBox),\nand users can adjust the parameters of the flight controller using the Speedy Bee App with an integrated Bluetooth chip."),(0,n.kt)("h3",{id:"hardware-features"},"Hardware Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MCU: STM32F722"),(0,n.kt)("li",{parentName:"ul"},"IMU: ICM20689"),(0,n.kt)("li",{parentName:"ul"},"OSD: BetaFlight OSD w/ AT7456E chip"),(0,n.kt)("li",{parentName:"ul"},"BLE Module: inner connect to UART3 for remote setting with SpeedyBee App or other similar apps"),(0,n.kt)("li",{parentName:"ul"},"BlackBox: 32MB onboard dataflash"),(0,n.kt)("li",{parentName:"ul"},"Current Sensor: 200A(Scale 102)"),(0,n.kt)("li",{parentName:"ul"},"BetaFlight Camera Control Pad: Yes"),(0,n.kt)("li",{parentName:"ul"},"Power input: 3s - 6s Lipo"),(0,n.kt)("li",{parentName:"ul"},"Power output: 5V ",(0,n.kt)("em",{parentName:"li"},"5(Including BZ+), the maximum load current is 2.5A. 9V ")," 1, the maximum load current is 2.5A."),(0,n.kt)("li",{parentName:"ul"},"ESC power output: 4 ","*"," VCC output"),(0,n.kt)("li",{parentName:"ul"},"UART: UART Pads ","*"," 4(UART1, UART2, UART4, UART5)"),(0,n.kt)("li",{parentName:"ul"},"RSSI input: RSSI input solder pad"),(0,n.kt)("li",{parentName:"ul"},"SmartPort: Use Softserial1 to support SmartPort"),(0,n.kt)("li",{parentName:"ul"},"I2C: Used for external Magnetometer, Sonar, etc."),(0,n.kt)("li",{parentName:"ul"},"Buzzer: BZ+ and BZ- pad used for 5V Buzzer"),(0,n.kt)("li",{parentName:"ul"},"ESC signal: S1 - S5"),(0,n.kt)("li",{parentName:"ul"},"LED pin: Used for WS2812 LED"),(0,n.kt)("li",{parentName:"ul"},"Boot button: Used to easy enter DFU mode"),(0,n.kt)("li",{parentName:"ul"},"BetaFlight Target: SPEEDYBEEF7")))}s.isMDXComponent=!0}}]);