"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2783],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},80769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={},i="KakuteH7V2",l={unversionedId:"wiki/boards/KAKUTEH7V2",id:"wiki/boards/KAKUTEH7V2",title:"KakuteH7V2",description:"Description",source:"@site/docs/wiki/boards/KAKUTEH7V2.md",sourceDirName:"wiki/boards",slug:"/wiki/boards/KAKUTEH7V2",permalink:"/betaflight.com/docs/wiki/boards/KAKUTEH7V2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"KakuteH7",permalink:"/betaflight.com/docs/wiki/boards/KAKUTEH7"},next:{title:"KISSFC",permalink:"/betaflight.com/docs/wiki/boards/KISSFC"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Benefits of KakuteH7v2 Compared to KakuteH7",id:"benefits-of-kakuteh7v2-compared-to-kakuteh7",level:2},{value:"Image",id:"image",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Pinout Diagram",id:"pinout-diagram",level:2},{value:"Target Code",id:"target-code",level:2},{value:"Manufacturers and Distributors",id:"manufacturers-and-distributors",level:2},{value:"FAQ &amp; Known Issues",id:"faq--known-issues",level:2},{value:"Other Resources",id:"other-resources",level:2}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kakuteh7v2"},"KakuteH7V2"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"The Holybro Kakute H7 v2 Flight Controller is full of features including integrated Bluetooth, HD camera plug, dual plug-and-play 4in1 ESC ports, 9V VTX ON/OFF Pit Switch, barometer, OSD, 6x UARTs, 128MB Flash for Logging, 5V and 9V BEC, and bigger soldering pad with easy layout and much more."),(0,n.kt)("p",null,"The Kakute H7 v2 builds upon the best features of its F7 predecessor and further improves on hardware components and layout. With the additional integrated Bluetooth chip onboard, you can perform configuration and tuning wirelessly on your phone with the SpeedyBee Android & IOS App. The Kakute H7 is DJI HD ready. It has an easy plug-and-play port with an on-board 9V regulator designed to power your HD video transmitter such as the DJI/Caddx FPV Air Unit & Caddx Vista while supporting analog system."),(0,n.kt)("p",null,"It features an onboard \u201cVTX ON/OFF Pit Switch\u201d that allows you to completely power off the video transmitter using a switch on your RC transmitter. Great if you are working on your drone, waiting for the GPS to get a fix, getting ready for a race while preventing it from overheating or interfering with others flying. It has 6x dedicated UART ports with built-in inversion for peripherals (UART2 is used for Bluetooth telemetry), a 128 MB Flash for logging, Dual plug-and-play 4in1 ESC connectors, allowing easy plug-and-play support for x8 & Octocopter configuration and keeping it simple and clean.\nThe integrated BetaFlight OSD makes it easy to display important information on your FPV display like battery voltage, flight time, warnings, RSSI, smart audio features and more. It is also ready for autonomous flight with the on-board barometer. There are LED & buzzer pad, I2C pad (SDA & SCL) for external GPS/Magnetometers. The integrated BetaFlight OSD makes it easy to display important information on your FPV display like battery voltage, flight time, warnings, RSSI, smart audio features and more. It is also ready for autonomous flight with the on-board barometer. There are LED & buzzer pad, I2C pad (SDA & SCL) for external GPS/Magnetometers."),(0,n.kt)("h2",{id:"benefits-of-kakuteh7v2-compared-to-kakuteh7"},"Benefits of KakuteH7v2 Compared to KakuteH7"),(0,n.kt)("p",null,"\u2022 Onboard flash\n\u2022 VTX ON/OFF Pit Switch"),(0,n.kt)("h2",{id:"image"},"Image"),(0,n.kt)("p",null,"Top View\n",(0,n.kt)("img",{src:r(20688).Z,width:"624",height:"632"})),(0,n.kt)("p",null,"Bottom View\n",(0,n.kt)("img",{src:r(72037).Z,width:"638",height:"648"})),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("p",null,"\u2022 MCU - STM32H743 32-bit processor running at 480 MHz\n\u2022 IMU \u2013 BMI270\n\u2022 Barometer - BMP280\n\u2022 OSD - AT7456E\n\u2022 Onboard Bluetooth chip - ESP32-C3\n\u2022 Note: The Bluetooth onboard is set to automatically turn off when the flight controller is unlocked (arm) and turn on automatically when the flight controller is locked (disarm).\n\u2022 VTX ON/OFF Pit Switch \u2013 Switch can be enable using USER1 in Betaflight Mode tab. (Warning: Do not enable this pit switch if you are using DJI FPV Remote Controller)\n\u2022 6x UARTs (1,2,3,4,6,7; UART2 is used for Bluetooth telemetry)\n\u2022 9x PWM Outputs (8 Motor Output, 1 LED)\n\u2022 Battery input voltage: 2S-8S\n\u2022 BEC 5V 2A Cont.\n\u2022 BEC 9V 1.5A Cont.\n\u2022 Mounting - 30.5 x 30.5mm/\u03a64mm hole with \u03a63mm Grommets\n\u2022 Dimension - 35x35mm\n\u2022 Weight - 8g\n\u2022 2x JST-SH1.0_8pin port (4in1 ESCs, x8/Octocopter compatible)\n\u2022 1x JST-GH1.5_6pin port (For HD System like Caddx Vista, Air Unit, or other VTX)"),(0,n.kt)("h2",{id:"pinout-diagram"},"Pinout Diagram"),(0,n.kt)("p",null,"Top View\n",(0,n.kt)("img",{src:r(10409).Z,width:"720",height:"715"})),(0,n.kt)("p",null,"Pin\n",(0,n.kt)("img",{parentName:"p",src:"https://https://docs.holybro.com/fpv-flight-controller/kakute-h7-v2/pinout?raw=true",alt:null})),(0,n.kt)("h2",{id:"target-code"},"Target Code"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"KAKUTEH7V2")),(0,n.kt)("h2",{id:"manufacturers-and-distributors"},"Manufacturers and Distributors"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.holybro.com"},"www.holybro.com")," (Manufacturer & Designer)"),(0,n.kt)("p",null,"Distributors:"),(0,n.kt)("h2",{id:"faq--known-issues"},"FAQ & Known Issues"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u201cBoard Align\u201d Feature Documentation")),(0,n.kt)("h2",{id:"other-resources"},"Other Resources"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Contact us at:")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2022Email: productservice@holybro.com")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2022Facebook Page: Holybro")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\u2022Facebook Group: Holybro Hobby Official Group")))}d.isMDXComponent=!0},72037:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/kakuteh7v2_bottom-9ac473c8421b170561e2ce0743446528.jpg"},10409:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/kakuteh7v2_pinout-945957a5c3ef81c10a620b9e0b245224.jpg"},20688:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/kakuteh7v2_top-d82103419d8158f8b83dded7185b2d68.jpg"}}]);