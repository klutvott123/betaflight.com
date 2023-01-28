"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7167],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24458:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={},i="**Overview**",l={unversionedId:"wiki/boards/FURYF4",id:"wiki/boards/FURYF4",title:"**Overview**",description:"The FuryF4 is the next iteration in the Fury line of flight controllers. Designed around the STM32F4 MCU, it features a simple layout that makes connecting components convenient and easy to accomplish. The FuryF4 utilizes an SPI gyro (MPU-6000 or ICM-20689) for super fast communication with the MCU. Flight logging can be easily done by writing to the onboard data flash or SDCard slot.",source:"@site/docs/wiki/boards/FURYF4.md",sourceDirName:"wiki/boards",slug:"/wiki/boards/FURYF4",permalink:"/betaflight.com/docs/wiki/boards/FURYF4",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"**Overview**",permalink:"/betaflight.com/docs/wiki/boards/FURYF3"},next:{title:"Board - HAKRCF405",permalink:"/betaflight.com/docs/wiki/boards/HAKRCF405"}},s={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},(0,n.kt)("strong",{parentName:"h1"},"Overview")),(0,n.kt)("p",null,"The FuryF4 is the next iteration in the Fury line of flight controllers. Designed around the STM32F4 MCU, it features a simple layout that makes connecting components convenient and easy to accomplish. The FuryF4 utilizes an SPI gyro (MPU-6000 or ICM-20689) for super fast communication with the MCU. Flight logging can be easily done by writing to the onboard data flash or SDCard slot."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"RCGroups Thread: ",(0,n.kt)("a",{parentName:"strong",href:"https://www.rcgroups.com/forums/showthread.php?t=2628430"},"https://www.rcgroups.com/forums/showthread.php?t=2628430"))),(0,n.kt)("h1",{id:"board-features"},(0,n.kt)("strong",{parentName:"h1"},"Board Features")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"F4 processor (allows you to run high loop times and gives you 3x dedicated UART outputs\nfor things such as GPS, OSDs, Telemetry, etc.)"),(0,n.kt)("li",{parentName:"ul"},"MPU6000 or ICM20689 gyro- The MPU-6000 is a favorite gyro amongst many FPV pilots at the time of writing. It\u2019s\nlow noise floor and high reliability rate makes it a top choice which is why it is on this flight\ncontroller. The ICM20689 is the new gyro designed by Invensense to replace the MPU-6000."),(0,n.kt)("li",{parentName:"ul"},"Large Solder Pads on edge of board"),(0,n.kt)("li",{parentName:"ul"},"USB connector"),(0,n.kt)("li",{parentName:"ul"},"Spektrum Receiver connector port (additional connector is recommended but not required\nif using Spektrum Hardware."),(0,n.kt)("li",{parentName:"ul"},"3v3 output for I2C connections"),(0,n.kt)("li",{parentName:"ul"},"Buzzer connection availability"),(0,n.kt)("li",{parentName:"ul"},"Led connection availability"),(0,n.kt)("li",{parentName:"ul"},"Current sensor connections available")),(0,n.kt)("h1",{id:"board-specifications"},(0,n.kt)("strong",{parentName:"h1"},"Board Specifications:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"5V input or On-board 5v, 2A Switching Regulator"),(0,n.kt)("li",{parentName:"ul"},"Standard 36x36 Board (30.5x30.5 mounting)"),(0,n.kt)("li",{parentName:"ul"},"STM32F4: 32-Bit, 168MHz, 1MB Processor (floating point arithmetic, lots of I/O)"),(0,n.kt)("li",{parentName:"ul"},"3 hardware serial ports."),(0,n.kt)("li",{parentName:"ul"},"USB VCP (can be used at the same time as the serial ports)."),(0,n.kt)("li",{parentName:"ul"},"4 PWM outputs (dedicated for quads)."),(0,n.kt)("li",{parentName:"ul"},"3.3v regulator output for external devices/Spektrum (up to 500mA)"),(0,n.kt)("li",{parentName:"ul"},"Dedicated PPM/SerialRX input header pins."),(0,n.kt)("li",{parentName:"ul"},"Dedicated SPEKTRUM adapter port."),(0,n.kt)("li",{parentName:"ul"},"Dedicated I2C headers."),(0,n.kt)("li",{parentName:"ul"},"MPU6000 or ICM20689 Mems Gyro/Accelerometer (these gyros are less sensitive to noise then the 9250\nor 6500. There is no need to soft mount the controller, and it is known as the \u201cgold\nstandard\u201d"),(0,n.kt)("li",{parentName:"ul"},"SPI Gyro connection (this is a faster communication protocol then SP"),(0,n.kt)("li",{parentName:"ul"},"Optional MS561 Barometer on bottom of board for easy foam covering isolation."),(0,n.kt)("li",{parentName:"ul"},"On-Board MicroSD Card Support for blackbox data logging (no fuss easy Data logging so that you can get the perfect tune."),(0,n.kt)("li",{parentName:"ul"},"On-Board 16MB Flash for blackbox data logging"),(0,n.kt)("li",{parentName:"ul"},"Voltage monitoring (built in Voltage divider)"),(0,n.kt)("li",{parentName:"ul"},"Current monitoring (with external current sensor)"),(0,n.kt)("li",{parentName:"ul"},"RSSI monitoring (if your receiver of choice has an output)"),(0,n.kt)("li",{parentName:"ul"},"Buzzer Connector"),(0,n.kt)("li",{parentName:"ul"},"LED Strip Connector"),(0,n.kt)("li",{parentName:"ul"},"SWD Port"),(0,n.kt)("li",{parentName:"ul"},"Direct mounting option for a Pololu switching regulator for up to 6S lipo operation (if no onboard 5v Regulator)."),(0,n.kt)("li",{parentName:"ul"},"Thoughtful, easy-to-build layout"),(0,n.kt)("li",{parentName:"ul"},"Edge launch pins for a low profile build, also better for direct soldering.")),(0,n.kt)("h1",{id:"board-layout"},(0,n.kt)("strong",{parentName:"h1"},"Board Layout")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://i.imgur.com/oTEpDBK.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://i.imgur.com/25HUK2C.jpg",alt:null})))}p.isMDXComponent=!0}}]);