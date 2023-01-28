"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6902],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>N});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,N=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(N,i(i({ref:t},c),{},{components:a})):r.createElement(N,i({ref:t},c))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91567:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={},i="Board - Seriously Pro SP Racing H7 NANO",l={unversionedId:"wiki/boards/SPRACINGH7NANO",id:"wiki/boards/SPRACINGH7NANO",title:"Board - Seriously Pro SP Racing H7 NANO",description:"The SPRacingH7NANO flight controller features a 400Mhz H7 CPU that runs twice as fast as the previous generation F7 boards.",source:"@site/docs/wiki/boards/SPRACINGH7NANO.md",sourceDirName:"wiki/boards",slug:"/wiki/boards/SPRACINGH7NANO",permalink:"/betaflight.com/docs/wiki/boards/SPRACINGH7NANO",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"Board - Seriously Pro SP Racing H7 EXTREME",permalink:"/betaflight.com/docs/wiki/boards/SPRACINGH7EXTREME"},next:{title:"Board - Seriously Pro SP Racing H7 ZERO",permalink:"/betaflight.com/docs/wiki/boards/SPRACINGH7ZERO"}},p={},s=[{value:"Background",id:"background",level:2},{value:"Hardware Features",id:"hardware-features",level:2},{value:"SPRacingH7NANO FC board.",id:"spracingh7nano-fc-board",level:3},{value:"Connection Diagrams",id:"connection-diagrams",level:2},{value:"Manual",id:"manual",level:2}],c={toc:s};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"board---seriously-pro-sp-racing-h7-nano"},"Board - Seriously Pro SP Racing H7 NANO"),(0,n.kt)("p",null,"The SPRacingH7NANO flight controller features a 400Mhz H7 CPU that runs twice as fast as the previous generation F7 boards.\nA fast control-loop is what you need for perfect flight performance, the H7 at 400Mhz gives you all the processing power you need."),(0,n.kt)("p",null,"The SPRacingH7NANO is features a 20x20 mounting pattern, has integrated 5V BEC and 128MB BlackBox logging and has support for\nexternal OSDs (e.g. via RunCam Camera or CrossFire/CRSF VTX's like the TBS Unify Evo OSD/VTX.)"),(0,n.kt)("p",null,"Full details available on the website, here:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://seriouslypro.com/spracingh7nano"},"http://seriouslypro.com/spracingh7nano")),(0,n.kt)("p",null,"Purchasing boards directly from SeriouslyPro / SP Racing and official retailers helps fund software development."),(0,n.kt)("p",null,"Shop here: ",(0,n.kt)("a",{parentName:"p",href:"https://shop.seriouslypro.com/sp-racing-h7-nano"},"https://shop.seriouslypro.com/sp-racing-h7-nano")),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"The SPRacingH7NANO FC is the second STM32H750 based FC to ship with Betaflight. Like the SPRacingH7EXTREME before it, it too uses\nthe External Storage (EXST) build system which allows a bootloader to load the flight-controller firmware from external flash."),(0,n.kt)("p",null,"See the EXST documentation for more details on the EXST system."),(0,n.kt)("h2",{id:"hardware-features"},"Hardware Features"),(0,n.kt)("p",null,"The SPRacingH7NANO is available in two versions, the NANO-S (solder-pads only) or NANO-E (with connectors for 4in1 ESC + RX + IO)"),(0,n.kt)("h3",{id:"spracingh7nano-fc-board"},"SPRacingH7NANO FC board."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SPRacingH7NANO CPU Side",src:a(2712).Z,width:"3364",height:"2582"}),"\n",(0,n.kt)("img",{alt:"SPRacingH7NANO NANO-E and NANO-S",src:a(80728).Z,width:"3766",height:"3027"}),"\n",(0,n.kt)("img",{alt:"SPRacingH7NANO NANO-S solder pads only",src:a(79022).Z,width:"1400",height:"1400"}),"\n",(0,n.kt)("img",{alt:"SPRacingH7NANO NANO-E with connectors",src:a(45413).Z,width:"1400",height:"1400"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"STM32H750 CPU, 400MHz inc FPU")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"128MByte 1GBit NAND flash via QuadSPI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Low-noise ICM20602 accelerometer/gyro with dedicated filtering(connected via SPI)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1.0mm thick 4-layer copper gold-plated PCB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2-6S BEC 5V Switching regulator, 1A")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"TVS protection diode (NANO-E: Fitted, NANO-S: optional extra)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Transponder circuitry (LED and code available separately)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Buzzer circuitry")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"RSSI Analog input")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"8 motor outputs (NANO-S: 8 on pads, NANO-E: 4 on 4in1 connector, 4 on pads)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1x Dual SPI + GPIO breakout onto stacking connector (NANO-E only)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"6 Serial Ports (5x TX+RX + 1x TX only bi-directional)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"3 LEDs for 5V, 3V and STATUS (Green, Blue, Red)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"26.5x26.5mm PCB with 20mm mounting hole pattern")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"4mm mounting holes for soft-mount grommets and M3 bolts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"MicroUSB socket for configuration and ESC programming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Bootable from External flash.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Supplied with 4x soft-mount grommets.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Optionally supplied with 2x JST-SH 8-way IO cables. (NANO-E only)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Optionally supplied with 2x PicoBlade 6-way IO cables. (NANO-E only)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1x solder pad for LED Strip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2x solder pad for DAC out (NANO-S only)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2x solder pad for ADC in (for 4in1 current sensor output, etc)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2x solder pads for UART8 RX/TX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2x solder pads for 5V/GND power")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2x solder pads for Buzzer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2x solder pads for TVS Diode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1x Row of pads for Motor 1-4 + Battery wires (NANO-S only)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1x Row of pads for RX connections (UART1 RX+TX, RSSI, 5V, GND, IR) (NANO-S only)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2x Rows of pads for additional IO (UART2,UART5,IR,LED-Strip,etc)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2x 8pin JST-SH socket for GND/5V/I2C/UART4/UART5 (IO port, e.g. for external GPS module)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2x 8pin JST-SH socket for GND/5V/SWD/UART3 (IO port, e.g. for debugging, etc)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1x 6pin PicoBlade socket for RX (NANO-E only)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1x 6pin PicoBlade socket for 4in1 ESC (NANO-E only)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1x solder pads for BOOT")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1x solder pads for BIND")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cleanflight and Betaflight logos - they're on there, you just have to find them")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SP Racing logo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1x Additional easter egg!"))),(0,n.kt)("h2",{id:"connection-diagrams"},"Connection Diagrams"),(0,n.kt)("p",null,"Connection diagrams can be found on the website, here:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://seriouslypro.com/spracingh7nano#diagrams"},"http://seriouslypro.com/spracingh7nano#diagrams")),(0,n.kt)("h2",{id:"manual"},"Manual"),(0,n.kt)("p",null,"The manual can be downloaded from the website, here:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://seriouslypro.com/files/SPRacingH7NANO-Manual-latest.pdf"},"http://seriouslypro.com/files/SPRacingH7NANO-Manual-latest.pdf")))}u.isMDXComponent=!0},80728:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/spracingh7nano-cpu-e-s-a570b80461a0c000e3e0e5e67ba95bca.jpg"},2712:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/spracingh7nano-cpu-7a95a3c7df3c9af19ce4bdad1d5e6a47.jpg"},45413:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/spracingh7nano-pcb-top-with-connectors-0d3d6ed638e4c0308a54c87c84e65075.jpg"},79022:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/spracingh7nano-pcb-top-171b54b808103560e5b097364877b01c.jpg"}}]);