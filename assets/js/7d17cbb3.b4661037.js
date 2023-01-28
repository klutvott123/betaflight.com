"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9632],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=u(a),N=r,g=m["".concat(o,".").concat(N)]||m[N]||k[N]||l;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[m]="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},52702:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={},i="Board - Seriously Pro SP Racing F3 (Acro/Deluxe)",p={unversionedId:"wiki/boards/SPRACINGF3",id:"wiki/boards/SPRACINGF3",title:"Board - Seriously Pro SP Racing F3 (Acro/Deluxe)",description:"The Seriously Pro Racing F3 board (SPRacingF3) is the first board designed specifically for Cleanflight.",source:"@site/docs/wiki/boards/SPRACINGF3.md",sourceDirName:"wiki/boards",slug:"/wiki/boards/SPRACINGF3",permalink:"/betaflight.com/docs/wiki/boards/SPRACINGF3",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"Board - Speedy Bee F7 AIO",permalink:"/betaflight.com/docs/wiki/boards/SPEEDYBEEF7AIO"},next:{title:"Board - Seriously Pro SP Racing F3 EVO",permalink:"/betaflight.com/docs/wiki/boards/SPRACINGF3EVO"}},o={},u=[{value:"Hardware Features",id:"hardware-features",level:2},{value:"Serial Ports",id:"serial-ports",level:2},{value:"Pinouts",id:"pinouts",level:2},{value:"IO_1",id:"io_1",level:3},{value:"IO_2",id:"io_2",level:3},{value:"UART1/2/3",id:"uart123",level:3},{value:"I2C",id:"i2c",level:3},{value:"SWD",id:"swd",level:3}],d={toc:u};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"board---seriously-pro-sp-racing-f3-acrodeluxe"},"Board - Seriously Pro SP Racing F3 (Acro/Deluxe)"),(0,r.kt)("p",null,"The Seriously Pro Racing F3 board (SPRacingF3) is the first board designed specifically for Cleanflight."),(0,r.kt)("p",null,"Purchasing boards directly from SeriouslyPro / SP Racing and official retailers helps fund Cleanflight development, it's the reason the Seriously Pro boards exist! Official retailers are always listed on the SeriouslyPro.com website."),(0,r.kt)("p",null,"Full details available on the website, here:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://seriouslypro.com/spracingf3"},"http://seriouslypro.com/spracingf3")),(0,r.kt)("h2",{id:"hardware-features"},"Hardware Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No compromise I/O. Use all the features all the time; e.g. Connect your OSD + SmartPort + SBus + GPS + LED Strip + Battery Monitoring + Sonar + 8 motors - all at the same time!"),(0,r.kt)("li",{parentName:"ul"},"On-board high-capacity black box flight log recorder - optimize your tuning and see the results of your setup without guesswork. (Acro and Deluxe)"),(0,r.kt)("li",{parentName:"ul"},"Next-generation STM32 F3 processor with hardware floating point unit for efficient flight calculations and faster ARM-Cortex M4 core."),(0,r.kt)("li",{parentName:"ul"},"Stackable design - perfect for integrating with OSDs and power distribution boards."),(0,r.kt)("li",{parentName:"ul"},"16 PWM I/O lines for ESCs, Servos and legacy receivers. 8 available on standard pin headers. 8 via side mounted connectors."),(0,r.kt)("li",{parentName:"ul"},"Supports SBus, SumH, SumD, Spektrum1024/2048, XBus, PPM, PWM receivers. No external inverters required (built-in)."),(0,r.kt)("li",{parentName:"ul"},"Dedicated output for programmable LEDs - great for orientation, racing and night flying."),(0,r.kt)("li",{parentName:"ul"},"Dedicated I2C port for connection of OLED display without needing flight battery."),(0,r.kt)("li",{parentName:"ul"},"Battery monitoring ports for voltage and current."),(0,r.kt)("li",{parentName:"ul"},"Buzzer port for audible warnings and notifications."),(0,r.kt)("li",{parentName:"ul"},"Solder pads in addition to connectors for Sonar, PPM, RSSI, Current, GPIO, LED Strip, 3.3v,"),(0,r.kt)("li",{parentName:"ul"},"Developer friendly debugging port (SWD) and boot mode selection, unbrickable bootloader."),(0,r.kt)("li",{parentName:"ul"},"Symmetrical design for a super tidy wiring."),(0,r.kt)("li",{parentName:"ul"},"Wire up using using pin headers, JST-SH sockets or solder pads. Use either right-angled or straight pin-headers."),(0,r.kt)("li",{parentName:"ul"},"Barometer mounted on the bottom of the board for easy wind isolation.")),(0,r.kt)("h2",{id:"serial-ports"},"Serial Ports"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Identifier"),(0,r.kt)("th",{parentName:"tr",align:null},"RX"),(0,r.kt)("th",{parentName:"tr",align:null},"TX"),(0,r.kt)("th",{parentName:"tr",align:null},"5v Tolerant"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"USART1"),(0,r.kt)("td",{parentName:"tr",align:null},"PA10"),(0,r.kt)("td",{parentName:"tr",align:null},"PA9"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},"Internally connected to USB port via CP2102 IC. Also available on a USART1 JST connector and on through hole pins.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"USART2"),(0,r.kt)("td",{parentName:"tr",align:null},"PA15"),(0,r.kt)("td",{parentName:"tr",align:null},"PA14"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},"Available on USART2 JST port only.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"USART3"),(0,r.kt)("td",{parentName:"tr",align:null},"PB11 / IO2_3"),(0,r.kt)("td",{parentName:"tr",align:null},"PB10 / IO2_4"),(0,r.kt)("td",{parentName:"tr",align:null},"NO"),(0,r.kt)("td",{parentName:"tr",align:null},"Available on IO_2, USART3 JST port and through hole pins.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You cannot use SWD and USART2 at the same time."),(0,r.kt)("li",{parentName:"ul"},"You may encounter flashing problems if you have something connected to the USART1 RX/TX pins. Power other devices off and/or disconnect them.")),(0,r.kt)("h2",{id:"pinouts"},"Pinouts"),(0,r.kt)("p",null,"Full pinout details are available in the manual, here:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://seriouslypro.com/spracingf3#manual"},"http://seriouslypro.com/spracingf3#manual")),(0,r.kt)("h3",{id:"io_1"},"IO_1"),(0,r.kt)("p",null,"The 8 pin IO_1 connector has the following pinouts when used in RX_PARALLEL_PWM mode."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pin"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Ground"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"VCC_IN"),(0,r.kt)("td",{parentName:"tr",align:null},"Voltage as-supplied by BEC.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"RC_CH1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"RC_CH2"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"RC_CH5"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"RC_CH6"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"LED_STRIP"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable ",(0,r.kt)("inlineCode",{parentName:"td"},"feature LED_STRIP"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"VCC"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3v output for LOW CURRENT application only")))),(0,r.kt)("p",null,"When RX_PPM/RX_SERIAL is used the IO_1 pinout is as follows."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pin"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Ground"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"VCC_IN"),(0,r.kt)("td",{parentName:"tr",align:null},"Voltage as-supplied by BEC.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"RX_PPM"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable ",(0,r.kt)("inlineCode",{parentName:"td"},"feature RX_PPM"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"SoftSerial1_RX"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"SoftSerial1_TX"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"LED_STRIP"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable ",(0,r.kt)("inlineCode",{parentName:"td"},"feature LED_STRIP"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"VCC"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3v output for LOW CURRENT application only")))),(0,r.kt)("h3",{id:"io_2"},"IO_2"),(0,r.kt)("p",null,"The 8 pin IO_2 connector has the following pinouts when used in RX_PARALLEL_PWM mode."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pin"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Ground"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"VCC_IN"),(0,r.kt)("td",{parentName:"tr",align:null},"Voltage as-supplied by BEC.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"RC_CH3"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"RC_CH4"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"RC_CH7/SONAR_TRIG"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"RC_CH8/SONAR_ECHO"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"ADC_1"),(0,r.kt)("td",{parentName:"tr",align:null},"Current Sensor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"ADC_2"),(0,r.kt)("td",{parentName:"tr",align:null},"RSSI")))),(0,r.kt)("p",null,"When RX_PPM/RX_SERIAL is used the IO_2 pinout is as follows."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pin"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Ground"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"VCC_IN"),(0,r.kt)("td",{parentName:"tr",align:null},"Voltage as-supplied by BEC.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"RX_SERIAL"),(0,r.kt)("td",{parentName:"tr",align:null},"UART3 RX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"UART3_TX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"SONAR_TRIG/SoftSerial2_RX"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable ",(0,r.kt)("inlineCode",{parentName:"td"},"feature SONAR/SOFTSERIAL"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"SONAR_ECHO/SoftSerial2_TX"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable ",(0,r.kt)("inlineCode",{parentName:"td"},"feature SONAR/SOFTSERIAL"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"ADC_1"),(0,r.kt)("td",{parentName:"tr",align:null},"Current Sensor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"ADC_2"),(0,r.kt)("td",{parentName:"tr",align:null},"RSSI")))),(0,r.kt)("h3",{id:"uart123"},"UART1/2/3"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pin"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Ground"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"VCC_IN"),(0,r.kt)("td",{parentName:"tr",align:null},"Voltage as-supplied by BEC.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"TXD"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"RXD"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"i2c"},"I2C"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pin"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Ground"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"5.0v"),(0,r.kt)("td",{parentName:"tr",align:null},"Voltage as-supplied by BEC OR USB, always on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"SCL"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"SDA"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"swd"},"SWD"),(0,r.kt)("p",null,"The port cannot be used at the same time as UART2."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pin"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Ground"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"NRST"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"SWDIO"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"SWDCLK"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Reference:",(0,r.kt)("a",{parentName:"p",href:"http://seriouslypro.com/files/SPRacingF3-Manual-latest.pdf"},"SPRF3")))}m.isMDXComponent=!0}}]);