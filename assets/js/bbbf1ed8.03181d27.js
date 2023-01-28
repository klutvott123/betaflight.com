"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9110],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={},i="KakuteH7",l={unversionedId:"wiki/boards/KAKUTEH7",id:"wiki/boards/KAKUTEH7",title:"KakuteH7",description:"Description",source:"@site/docs/wiki/boards/KAKUTEH7.md",sourceDirName:"wiki/boards",slug:"/wiki/boards/KAKUTEH7",permalink:"/betaflight.com/docs/wiki/boards/KAKUTEH7",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"KakuteF7",permalink:"/betaflight.com/docs/wiki/boards/KAKUTEF7"},next:{title:"KakuteH7V2",permalink:"/betaflight.com/docs/wiki/boards/KAKUTEH7V2"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Benefits of KakuteH7 Compared to KakuteF7",id:"benefits-of-kakuteh7-compared-to-kakutef7",level:2},{value:"Image",id:"image",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Pinout Diagram",id:"pinout-diagram",level:2},{value:"Target Code",id:"target-code",level:2},{value:"Manufacturers and Distributors",id:"manufacturers-and-distributors",level:2},{value:"FAQ &amp; Known Issues",id:"faq--known-issues",level:2},{value:"Other Resources",id:"other-resources",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kakuteh7"},"KakuteH7"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"The Holybro Kakute H7 Flight Controller is full of features including integrated Bluetooth, dual plug-and-play 4in1 ESC ports, HD camera plug, barometer, OSD, 6x UARTs, full Blackbox MicroSD card slot, 5V and 9V BEC, easy soldering layout and much more."),(0,n.kt)("p",null,"The Kakute H7 builds upon the best features of its F7 predecessor and further improves on hardware components and layout. With the additional integrated Bluetooth chip onboard, you can perform Betaflight configuration and tuning wirelessly on your phone with the SpeedyBee Android & IOS App. The Kakute H7 is DJI HD ready. It has an easy plug-and-play port with an on-board 9V regulator designed to power your HD video transmitter like DJI/Caddx FPV Air Unit & Caddx Vista while supporting analog system."),(0,n.kt)("p",null,"It has 6x dedicated UART ports with built-in inversion for peripherals (UART2 is used for Bluetooth telemetry), along with a full MicroSD Card slot for virtually unlimited Blackbox data logging. Dual plug-and-play 4in1 ESC connectors, allowing easy plug-and-play support for x8 Octocopter configuration and keeping it simple and clean. The integrated BetaFlight OSD makes it easy to display important information on your FPV display like battery voltage, flight time, warnings, RSSI, smart audio features and more. It is also ready for autonomous flight with the on-board barometer. There are LED & buzzer pad, I2C pad (SDA & SCL) for external GPS/Magnetometers"),(0,n.kt)("h2",{id:"benefits-of-kakuteh7-compared-to-kakutef7"},"Benefits of KakuteH7 Compared to KakuteF7"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2022H7 is a faster processor (400Mhz vs 216MHz F7), the faster speed H7 processor allows for faster looptime")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2022H7 offers Bluetooth onboard, given ability to configure with connected to pc")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2022H7 offers more UART\u2019s with built-in hardware inversion")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2022H7 has superscalar pipeline and DSP capabilities \u2013 basically that means the H7 is a even better platform for future development that allows the developers to further optimize the flight controller algorithms")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2022Onboard Baro BMP280, Support more flight mode")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2022Support SD card for Blackbox logging")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2022I2C1 Pads for external compass connection")),(0,n.kt)("h2",{id:"image"},"Image"),(0,n.kt)("p",null,"Top View\n",(0,n.kt)("img",{src:r(94162).Z,width:"166",height:"165"})),(0,n.kt)("p",null,"Bottom View\n",(0,n.kt)("img",{src:r(19427).Z,width:"167",height:"167"})),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("p",null,"\u2022 MCU - STM32H743 32-bit processor running at 480 MHz\n\u2022 IMU - MPU6000\n\u2022 Barometer - BMP280\n\u2022 OSD - AT7456E\n\u2022 Onboard Bluetooth chip - ESP32-C3\no SpeedyBee IOS & Android App Compatible\no Note: The Bluetooth onboard is set to automatically turn off when the flight controller is unlocked (arm) and turn on automatically when the flight controller is locked (disarm).\n\u2022 6x UARTs (1,2,3,4,6,7; UART2 is used for Bluetooth telemetry)\n\u2022 9x PWM Outputs (8 Motor Output, 1 LED)\n\u2022 2x JST-SH1.0_8pin port (4in1 ESCs, x8/Octocopter compatible)\n\u2022 1x JST-GH1.25_6pin port (For HD System like Caddx Vista & Air Unit)\n\u2022 Battery input voltage: 7V to 42V\n\u2022 BEC 5V 2A Cont.\n\u2022 BEC 9V 1.5A Cont.\n\u2022 Mounting - 30.5 x 30.5mm/\u03a64mm hole with \u03a63mm Grommets\n\u2022 Dimension - 35x35mm\n\u2022 Weight - 8g"),(0,n.kt)("h2",{id:"pinout-diagram"},"Pinout Diagram"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Top View"),"\n",(0,n.kt)("img",{src:r(47888).Z,width:"699",height:"502"})),(0,n.kt)("h2",{id:"target-code"},"Target Code"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"KAKUTEH7")),(0,n.kt)("h2",{id:"manufacturers-and-distributors"},"Manufacturers and Distributors"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.holybro.com"},"www.holybro.com")," (Manufacturer & Designer)"),(0,n.kt)("p",null,"Distributors:"),(0,n.kt)("h2",{id:"faq--known-issues"},"FAQ & Known Issues"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u201cBoard Align\u201d Feature Documentation")),(0,n.kt)("h2",{id:"other-resources"},"Other Resources"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Contact us at:")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2022Email: productservice@holybro.com")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2022Facebook Page: Holybro")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2022Facebook Group: Holybro Hobby Official Group")))}d.isMDXComponent=!0},19427:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/kakuteh7_bottom-74b61270b3a73a1f4f8cc6f13c3ae892.jpg"},47888:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/kakuteh7_pin_diagram-9b83fcb6dbc04e09560df2d9d7fee7b2.jpg"},94162:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/kakuteh7_top-d3966d032f9b548e854530c4063f5d2b.jpg"}}]);