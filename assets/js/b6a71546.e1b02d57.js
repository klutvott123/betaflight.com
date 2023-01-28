"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7999],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15554:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={},l=void 0,s={unversionedId:"wiki/boards/CLRACINGF7",id:"wiki/boards/CLRACINGF7",title:"CLRACINGF7",description:"MCU: STM32F722RE",source:"@site/docs/wiki/boards/CLRACINGF7.md",sourceDirName:"wiki/boards",slug:"/wiki/boards/CLRACINGF7",permalink:"/betaflight.com/docs/wiki/boards/CLRACINGF7",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"CL_RACING AIO F4 Flight controller",permalink:"/betaflight.com/docs/wiki/boards/CLRACINGF4"},next:{title:"Board - TBS Colibri RACE",permalink:"/betaflight.com/docs/wiki/boards/COLIBRIRACE"}},o={},u=[{value:"CONTENT MIGRATED FROM SAME FILE IN ANOTHER FOLDER",id:"content-migrated-from-same-file-in-another-folder",level:2},{value:"Description",id:"description",level:2},{value:"MCU, Sensors and Features",id:"mcu-sensors-and-features",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Features",id:"features",level:3},{value:"Manufacturers and Distributors",id:"manufacturers-and-distributors",level:2},{value:"Designers",id:"designers",level:2},{value:"Maintainers",id:"maintainers",level:2},{value:"Similar Targets",id:"similar-targets",level:2},{value:"Variants",id:"variants",level:2},{value:"FAQ &amp; Known Issues",id:"faq--known-issues",level:2},{value:"Other Resources",id:"other-resources",level:2},{value:"Image",id:"image",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"MCU: STM32F722RE\nIMU: ICM-20602\nIMU Interrupt: yes\nBARO: NO\nVCP: YES\nHardware UARTS: 6 uarts\nOSD: uses a AB7456 chip\nBlackbox: flash Chip\nPPM/UART NOT Shared: YES\nBattery Voltage Sensor: 10:1\nCurrent sensor: from 4 in 1 socket\nIntegrated Voltage Regulator: 1.5A 5v/v1 2A 5v/v2"),(0,n.kt)("h2",{id:"content-migrated-from-same-file-in-another-folder"},"CONTENT MIGRATED FROM SAME FILE IN ANOTHER FOLDER"),(0,n.kt)("p",null,"CLRACINGF7"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("h2",{id:"mcu-sensors-and-features"},"MCU, Sensors and Features"),(0,n.kt)("h3",{id:"hardware"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MCU: STM32F722RE"),(0,n.kt)("li",{parentName:"ul"},"IMU: MPU-6000"),(0,n.kt)("li",{parentName:"ul"},"IMU Interrupt: YES"),(0,n.kt)("li",{parentName:"ul"},"BARO: NO"),(0,n.kt)("li",{parentName:"ul"},"VCP: YES"),(0,n.kt)("li",{parentName:"ul"},"Hardware UARTS:"),(0,n.kt)("li",{parentName:"ul"},"OSD: uses a AT7456 chip"),(0,n.kt)("li",{parentName:"ul"},"Blackbox: SD Card"),(0,n.kt)("li",{parentName:"ul"},"PPM/UART NOT Shared: YES"),(0,n.kt)("li",{parentName:"ul"},"Battery Voltage Sensor: 10:1"),(0,n.kt)("li",{parentName:"ul"},"Current sensor: 0.5 mOhm, 250 Current scale in the setting"),(0,n.kt)("li",{parentName:"ul"},"Integrated Voltage Regulator: 1.2 A 5v"),(0,n.kt)("li",{parentName:"ul"},"120A Current sensing PDB and 150A burst current for 10S on the current sensing Resistor"),(0,n.kt)("li",{parentName:"ul"},"Sbus/Sat/etc (UART 6)"),(0,n.kt)("li",{parentName:"ul"},"Telemetry ( UART 1 )")),(0,n.kt)("h3",{id:"software"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Firmware target: CLRACINGF7")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"betaflight osd"),(0,n.kt)("li",{parentName:"ul"},"build in PDB"),(0,n.kt)("li",{parentName:"ul"},"build in Filter for camera and VTX")),(0,n.kt)("h2",{id:"manufacturers-and-distributors"},"Manufacturers and Distributors"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.clrpowered.com"},"www.clrpowered.com")),(0,n.kt)("h2",{id:"designers"},"Designers"),(0,n.kt)("p",null,"bnn1044"),(0,n.kt)("h2",{id:"maintainers"},"Maintainers"),(0,n.kt)("p",null,"bnn1044"),(0,n.kt)("h2",{id:"similar-targets"},"Similar Targets"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(add links board descriptions here that are similar in features or function, but have a separate target)")),(0,n.kt)("h2",{id:"variants"},"Variants"),(0,n.kt)("p",null,"Differences:"),(0,n.kt)("h2",{id:"faq--known-issues"},"FAQ & Known Issues"),(0,n.kt)("h2",{id:"other-resources"},"Other Resources"),(0,n.kt)("p",null,"Setup Guides:"),(0,n.kt)("h2",{id:"image"},"Image"))}d.isMDXComponent=!0}}]);