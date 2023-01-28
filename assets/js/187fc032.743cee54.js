"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1295],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return t?n.createElement(m,o(o({ref:r},c),{},{components:t})):n.createElement(m,o({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6192:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const i={},o=void 0,l={unversionedId:"wiki/boards/RCEXPLORERF3",id:"wiki/boards/RCEXPLORERF3",title:"RCEXPLORERF3",description:"Designed with 2 things in mind; Performance and cost",source:"@site/docs/wiki/boards/RCEXPLORERF3.md",sourceDirName:"wiki/boards",slug:"/wiki/boards/RCEXPLORERF3",permalink:"/betaflight.com/docs/wiki/boards/RCEXPLORERF3",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"Board - PYRODRONEF4",permalink:"/betaflight.com/docs/wiki/boards/PYRODRONEF4"},next:{title:"REVOLT",permalink:"/betaflight.com/docs/wiki/boards/REVOLT"}},s={},u=[{value:"Description",id:"description",level:2},{value:"MCU, Sensors and Features",id:"mcu-sensors-and-features",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Features",id:"features",level:3},{value:"Hardware Designs",id:"hardware-designs",level:2},{value:"Manufacturers and Distributors",id:"manufacturers-and-distributors",level:2},{value:"Designers",id:"designers",level:2},{value:"Maintainers",id:"maintainers",level:2},{value:"Similar Targets",id:"similar-targets",level:2},{value:"Variants",id:"variants",level:2},{value:"FAQ &amp; Known Issues",id:"faq--known-issues",level:2},{value:"Other Resources",id:"other-resources",level:2}],c={toc:u};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rc-explorer-f3-fc-racing"},"RC Explorer F3 FC Racing"),(0,a.kt)("p",null,"Designed with 2 things in mind; Performance and cost"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The RCExplorer F3FC Racing is a cheap STM32F3 FC with integrated voltage regulator, voltage monitoring, current sensor input, 3 UARTS, LED port, Servo feedback/RSSI and MPU6000 gyro"),(0,a.kt)("p",null,"Target HEX name: RCEXPLORERF3"),(0,a.kt)("h2",{id:"mcu-sensors-and-features"},"MCU, Sensors and Features"),(0,a.kt)("h3",{id:"hardware"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MCU: STM32F303CC"),(0,a.kt)("li",{parentName:"ul"},"IMU: MPU6000 (SPI)"),(0,a.kt)("li",{parentName:"ul"},"IMU Interrupt: Yes"),(0,a.kt)("li",{parentName:"ul"},"BARO: No"),(0,a.kt)("li",{parentName:"ul"},"VCP: Yes"),(0,a.kt)("li",{parentName:"ul"},"Hardware UARTS: 3"),(0,a.kt)("li",{parentName:"ul"},"OSD: No"),(0,a.kt)("li",{parentName:"ul"},"Blackbox: No"),(0,a.kt)("li",{parentName:"ul"},"PPM/UART Shared: No - PWM6 is used for PPM"),(0,a.kt)("li",{parentName:"ul"},"Battery Voltage Sensor: Yes, directly connected, no wiring necessary"),(0,a.kt)("li",{parentName:"ul"},"Integrated Voltage Regulator: Yes, 6S maximum"),(0,a.kt)("li",{parentName:"ul"},"Brushed Motor Mosfets: No"),(0,a.kt)("li",{parentName:"ul"},"Buttons: 1 - DFU")),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Current Sensor: Yes, input accepts 0-3.3V"),(0,a.kt)("li",{parentName:"ul"},"BlHeli passthrough: Yes"),(0,a.kt)("li",{parentName:"ul"},"WS2811 Led Strip: Yes, on dedicated LED output"),(0,a.kt)("li",{parentName:"ul"},"Transponder: No")),(0,a.kt)("h2",{id:"hardware-designs"},"Hardware Designs"),(0,a.kt)("p",null,"Not public"),(0,a.kt)("h2",{id:"manufacturers-and-distributors"},"Manufacturers and Distributors"),(0,a.kt)("p",null,"RCExplorer.se\nAvailable here: ",(0,a.kt)("a",{parentName:"p",href:"http://rcexplorer.se/product/f3fc-racing/"},"http://rcexplorer.se/product/f3fc-racing/")),(0,a.kt)("h2",{id:"designers"},"Designers"),(0,a.kt)("p",null,"David Windest\xe5l"),(0,a.kt)("h2",{id:"maintainers"},"Maintainers"),(0,a.kt)("p",null,"Jaakko Laurikainen"),(0,a.kt)("h2",{id:"similar-targets"},"Similar Targets"),(0,a.kt)("p",null,"LUX_RACE\nSPARKY"),(0,a.kt)("h2",{id:"variants"},"Variants"),(0,a.kt)("p",null,"None known"),(0,a.kt)("h2",{id:"faq--known-issues"},"FAQ & Known Issues"),(0,a.kt)("p",null,"No known issues yet."),(0,a.kt)("p",null,"The default resource mappings on all boards are for use on a quadcopter. If you want to use the board for a tricopter, you will have to manually remap the resources so you get a resource for the tail servo. This should work for the F3FC (Rcexplorer FC)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"resource MOTOR 1 A08\nresource MOTOR 2 B00\nresource MOTOR 3 A04\nresource MOTOR 4 NONE\nresource MOTOR 5 NONE\nresource SERVO 1 A07\n")),(0,a.kt)("h2",{id:"other-resources"},"Other Resources"),(0,a.kt)("p",null,"Setup guide and such available here: ",(0,a.kt)("a",{parentName:"p",href:"http://rcexplorer.se/product/f3fc-racing/"},"http://rcexplorer.se/product/f3fc-racing/")))}p.isMDXComponent=!0}}]);