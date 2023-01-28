"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),k=l,d=m["".concat(u,".").concat(k)]||m[k]||c[k]||n;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},9916:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var a=r(87462),l=(r(67294),r(3905));const n={},i="AIORACERF3",o={unversionedId:"wiki/boards/AIORACERF3",id:"wiki/boards/AIORACERF3",title:"AIORACERF3",description:"AIORACERF3 Front",source:"@site/docs/wiki/boards/AIORACERF3.md",sourceDirName:"wiki/boards",slug:"/wiki/boards/AIORACERF3",permalink:"/betaflight.com/docs/wiki/boards/AIORACERF3",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"Aikon F4",permalink:"/betaflight.com/docs/wiki/boards/AIKONF4"},next:{title:"AIR32",permalink:"/betaflight.com/docs/wiki/boards/AIR32"}},u={},s=[{value:"Hardware",id:"hardware",level:2},{value:"Features",id:"features",level:2},{value:"Hardware Designs",id:"hardware-designs",level:2},{value:"Manufacturers and Distributors",id:"manufacturers-and-distributors",level:2},{value:"Designers",id:"designers",level:2},{value:"Maintainers",id:"maintainers",level:2},{value:"Similar Targets",id:"similar-targets",level:2},{value:"Other Resources",id:"other-resources",level:2}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"aioracerf3"},"AIORACERF3"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://betaflight.com/assets/img/boards/aioracerf3/aioracerf3_front.jpg",alt:"AIORACERF3 Front"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://betaflight.com/assets/img/boards/aioracerf3/aioracerf3_back.jpg",alt:"AIORACERF3 Back"})),(0,l.kt)("h2",{id:"hardware"},"Hardware"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MCU: STM32F303CCT6"),(0,l.kt)("li",{parentName:"ul"},"IMU: MPU9250(SPI)"),(0,l.kt)("li",{parentName:"ul"},"IMU interrupt: Yes"),(0,l.kt)("li",{parentName:"ul"},"BARO: BMP280(I2C)"),(0,l.kt)("li",{parentName:"ul"},"VCP: Yes"),(0,l.kt)("li",{parentName:"ul"},"Hardware UARTS: 3"),(0,l.kt)("li",{parentName:"ul"},"PWM input: No"),(0,l.kt)("li",{parentName:"ul"},"PWM outputs: 8"),(0,l.kt)("li",{parentName:"ul"},"OSD: Yes, Minim-OSD, connected to UART1"),(0,l.kt)("li",{parentName:"ul"},"Blackbox: MicroSD card slot (SD/SDHC, upto 64GB)"),(0,l.kt)("li",{parentName:"ul"},"PPM/UART Shared: UART2"),(0,l.kt)("li",{parentName:"ul"},"Serial-RX: selectable UART2/UART3"),(0,l.kt)("li",{parentName:"ul"},"Battery Voltage Sensor: Yes, onboard voltage divider"),(0,l.kt)("li",{parentName:"ul"},"Current Sensor: Provided by ARPDB (optional)"),(0,l.kt)("li",{parentName:"ul"},"Voltage converter: 3.3V/500mA buck converter"),(0,l.kt)("li",{parentName:"ul"},"IR-LED driver for ransponder: Yes"),(0,l.kt)("li",{parentName:"ul"},"Buzzer driver: Yes"),(0,l.kt)("li",{parentName:"ul"},"Buttons: 1/DFU"),(0,l.kt)("li",{parentName:"ul"},"RSSI Analog/PWM port: Yes"),(0,l.kt)("li",{parentName:"ul"},"SWD port: Yes")),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The PWM solder pads close to the four corners, making it easier to connect the ESC signal lines."),(0,l.kt)("li",{parentName:"ul"},"Gyro via SPI and 8K ready."),(0,l.kt)("li",{parentName:"ul"},"Integrated Minim-OSD and FTDI debug socket."),(0,l.kt)("li",{parentName:"ul"},"ZH 1.5-3P socket used for DSM/S.BUS. and others SRX receivers, it can be selected voltage 3.3V/5V on backside solder pads."),(0,l.kt)("li",{parentName:"ul"},"WS2811 LED-strip supported."),(0,l.kt)("li",{parentName:"ul"},"Optimized solder pads for optional ARPDB."),(0,l.kt)("li",{parentName:"ul"},"Dimension: 35x35x7.4mm / fixing hole spacing 30mm."),(0,l.kt)("li",{parentName:"ul"},"Supports DShot (see ",(0,l.kt)("a",{parentName:"li",href:"DSHOT%20ESC%20Protocol"},"this page")," for setup instructions)."),(0,l.kt)("li",{parentName:"ul"},"ARPDB designed for ARF3 FC."),(0,l.kt)("li",{parentName:"ul"},"Two types, Type-A with XT60 mounting holes and suitable for X-frame, Type-B is classic version."),(0,l.kt)("li",{parentName:"ul"},"3 oz copper for high current."),(0,l.kt)("li",{parentName:"ul"},"Max input voltage / current sensing: 28V/90A."),(0,l.kt)("li",{parentName:"ul"},"Back converter outputs: 5.3V/3.5A.")),(0,l.kt)("h2",{id:"hardware-designs"},"Hardware Designs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GPIO"),(0,l.kt)("li",{parentName:"ul"},"TX1:PA9/RX1:PA10"),(0,l.kt)("li",{parentName:"ul"},"TX2:PA14/RX2:PA15"),(0,l.kt)("li",{parentName:"ul"},"TX3:PB10/RX3:PB11"),(0,l.kt)("li",{parentName:"ul"},"MPU_CS:PB9"),(0,l.kt)("li",{parentName:"ul"},"MPU_SCK:PB3"),(0,l.kt)("li",{parentName:"ul"},"MPU_SDO:PB4"),(0,l.kt)("li",{parentName:"ul"},"MPU_SDI:PB5"),(0,l.kt)("li",{parentName:"ul"},"MPU_INT:PC13"),(0,l.kt)("li",{parentName:"ul"},"SCL:PB6"),(0,l.kt)("li",{parentName:"ul"},"SDA:PB7"),(0,l.kt)("li",{parentName:"ul"},"SD_CS:PB12"),(0,l.kt)("li",{parentName:"ul"},"SD_SCK:PB13"),(0,l.kt)("li",{parentName:"ul"},"SD_SDO:PB14"),(0,l.kt)("li",{parentName:"ul"},"SD_SDI:PB15"),(0,l.kt)("li",{parentName:"ul"},"SENS_I:PA4"),(0,l.kt)("li",{parentName:"ul"},"SENS_V:PA5"),(0,l.kt)("li",{parentName:"ul"},"RSSI:PB2"),(0,l.kt)("li",{parentName:"ul"},"PWM1:PB1"),(0,l.kt)("li",{parentName:"ul"},"PWM2:PA7"),(0,l.kt)("li",{parentName:"ul"},"PWM3:PA2"),(0,l.kt)("li",{parentName:"ul"},"PWM4:PA1"),(0,l.kt)("li",{parentName:"ul"},"PWM5:PB0"),(0,l.kt)("li",{parentName:"ul"},"PWM6:PA6"),(0,l.kt)("li",{parentName:"ul"},"PWM7:PA3"),(0,l.kt)("li",{parentName:"ul"},"PWM8:PA0")),(0,l.kt)("h2",{id:"manufacturers-and-distributors"},"Manufacturers and Distributors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CRIUS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.aliexpress.com/store/product/Crius-AIO-RACER-F3-Flight-Controller-with-OSD-for-Betaflight-firmware-ARPDB-Power-Distribution-Board-Output/604349_32729982152.html?spm=2114.12010608.0.0.TuYtnD"},"Available here")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.ebay.com/itm/AIO-RACER-F3-Flight-Controller-with-OSD-for-Betaflight-firmware-ARPDB-B-Board-/322266398060"},"And here"))),(0,l.kt)("h2",{id:"designers"},"Designers"),(0,l.kt)("p",null,"CRIUS"),(0,l.kt)("h2",{id:"maintainers"},"Maintainers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hardware: Eric Liang"),(0,l.kt)("li",{parentName:"ul"},"Software: tianbin4279 / lijingwei0710 / Michael Keller")),(0,l.kt)("h2",{id:"similar-targets"},"Similar Targets"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SPRACINGF3EVO")),(0,l.kt)("h2",{id:"other-resources"},"Other Resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dl.dropboxusercontent.com/u/584481/AIO_RACER_F3_Manual_D20160909.pdf"},"Manual"))))}m.isMDXComponent=!0}}]);