"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2381],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10490:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={},o="YuPiF4 by Copperyu",l={unversionedId:"wiki/boards/YUPIF4",id:"wiki/boards/YUPIF4",title:"YuPiF4 by Copperyu",description:"An high quality flight controller for the most demanding pilotes.",source:"@site/docs/wiki/boards/YUPIF4.md",sourceDirName:"wiki/boards",slug:"/wiki/boards/YUPIF4",permalink:"/betaflight.com/docs/wiki/boards/YUPIF4",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"Board - VIVAF4AIO",permalink:"/betaflight.com/docs/wiki/boards/VIVAF4AIO"},next:{title:"YuPiF7 by Copperyu",permalink:"/betaflight.com/docs/wiki/boards/YUPIF7"}},s={},u=[{value:"Description",id:"description",level:2},{value:"MCU, Sensors and Features",id:"mcu-sensors-and-features",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Features",id:"features",level:3},{value:"Designers and Maintainers",id:"designers-and-maintainers",level:2},{value:"Manufacturers and Distributors",id:"manufacturers-and-distributors",level:2},{value:"Hardware Designs (if available)",id:"hardware-designs-if-available",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"yupif4-by-copperyu"},"YuPiF4 by Copperyu"),(0,n.kt)("p",null,"An high quality flight controller for the most demanding pilotes."),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"The YuPiF4 is a 36x36mm (30.5x30.5 mounting holes) board with an F4 microcontroller."),(0,n.kt)("h2",{id:"mcu-sensors-and-features"},"MCU, Sensors and Features"),(0,n.kt)("h3",{id:"hardware"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MCU: STM32F405RTG6"),(0,n.kt)("li",{parentName:"ul"},"IMU: ICM-20689 (SPI)"),(0,n.kt)("li",{parentName:"ul"},"IMU Interrupt: Yes"),(0,n.kt)("li",{parentName:"ul"},"BARO: No"),(0,n.kt)("li",{parentName:"ul"},"VCP: Yes"),(0,n.kt)("li",{parentName:"ul"},"Hardware UARTS: 3 with an inverter for SBus"),(0,n.kt)("li",{parentName:"ul"},"Blackbox: SD card slot"),(0,n.kt)("li",{parentName:"ul"},"PPM : A specific pad is available for PPM input"),(0,n.kt)("li",{parentName:"ul"},"Battery Voltage Sensor: Yes, directly connected, no wiring necessary"),(0,n.kt)("li",{parentName:"ul"},"Integrated Voltage Regulator: the board can be powered by your lipo (2S to 6S)"),(0,n.kt)("li",{parentName:"ul"},"Brushed Motor Mosfets: No"),(0,n.kt)("li",{parentName:"ul"},"Motor outputs : can drive up to 6 motors"),(0,n.kt)("li",{parentName:"ul"},"Buttons: Boot0 to enter in DFU mode")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Current Sensor: Not implemented"),(0,n.kt)("li",{parentName:"ul"},"BlHeli passthrough: Yes"),(0,n.kt)("li",{parentName:"ul"},"WS2811 Led Strip: Yes (on motor output Pin 5)"),(0,n.kt)("li",{parentName:"ul"},"Transponder: No")),(0,n.kt)("h2",{id:"designers-and-maintainers"},"Designers and Maintainers"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/ted-rcnet"},"RcNet")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Faduf"},"FaduF")),(0,n.kt)("h2",{id:"manufacturers-and-distributors"},"Manufacturers and Distributors"),(0,n.kt)("p",null,"This board is currently in the prototype phase. Only small batches were manufactured for testing."),(0,n.kt)("p",null,"Website : ",(0,n.kt)("a",{parentName:"p",href:"http://www.yupif4.com/"},"http://www.yupif4.com/")),(0,n.kt)("h2",{id:"hardware-designs-if-available"},"Hardware Designs (if available)"),(0,n.kt)("p",null,"The hardware is currently closed source."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.yupif4.com/imgs/FC2.jpg",alt:"YuPiF4 - FC"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://www.yupif4.com/imgs/YuPiF4.jpg",alt:"YuPiF4 - Logo"})))}c.isMDXComponent=!0}}]);