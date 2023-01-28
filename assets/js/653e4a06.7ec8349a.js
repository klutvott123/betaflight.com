"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2250],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),u=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=u(t.components);return r.createElement(m.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),d=u(n),c=a,k=d["".concat(m,".").concat(c)]||d[c]||s[c]||l;return n?r.createElement(k,i(i({ref:e},o),{},{components:n})):r.createElement(k,i({ref:e},o))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[d]="string"==typeof t?t:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38862:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={},i="Units",p={unversionedId:"development/Units",id:"development/Units",title:"Units",description:"This document describes the current variables used to configure specific elements depending on the measurement unit applied.",source:"@site/docs/development/Units.md",sourceDirName:"development",slug:"/development/Units",permalink:"/betaflight.com/docs/development/Units",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"development",previous:{title:"USB Flashing",permalink:"/betaflight.com/docs/development/USB Flashing"},next:{title:"VTX",permalink:"/betaflight.com/docs/development/VTX"}},m={},u=[{value:"Units",id:"units-1",level:3},{value:"Affected OSD Elements",id:"affected-osd-elements",level:3},{value:"Affected FrSky Hub Telemetry Elements",id:"affected-frsky-hub-telemetry-elements",level:3}],o={toc:u};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"units"},"Units"),(0,a.kt)("p",null,"This document describes the current variables used to configure specific elements depending on the measurement unit applied."),(0,a.kt)("h3",{id:"units-1"},"Units"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Unit"),(0,a.kt)("th",{parentName:"tr",align:null},"Speed"),(0,a.kt)("th",{parentName:"tr",align:null},"Distance"),(0,a.kt)("th",{parentName:"tr",align:null},"Temperature"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Imperial"),(0,a.kt)("td",{parentName:"tr",align:null},"MPH"),(0,a.kt)("td",{parentName:"tr",align:null},"Miles"),(0,a.kt)("td",{parentName:"tr",align:null},"Fahrenheit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Metric"),(0,a.kt)("td",{parentName:"tr",align:null},"KPH"),(0,a.kt)("td",{parentName:"tr",align:null},"KM"),(0,a.kt)("td",{parentName:"tr",align:null},"Celcius")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"British"),(0,a.kt)("td",{parentName:"tr",align:null},"MPH"),(0,a.kt)("td",{parentName:"tr",align:null},"KM"),(0,a.kt)("td",{parentName:"tr",align:null},"Celcius")))),(0,a.kt)("h3",{id:"affected-osd-elements"},"Affected OSD Elements"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"OSD Element"),(0,a.kt)("th",{parentName:"tr",align:null},"Imperial"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric"),(0,a.kt)("th",{parentName:"tr",align:null},"British"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Altitude"),(0,a.kt)("td",{parentName:"tr",align:null},"Feet"),(0,a.kt)("td",{parentName:"tr",align:null},"Metre"),(0,a.kt)("td",{parentName:"tr",align:null},"Metre")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GPS Speed"),(0,a.kt)("td",{parentName:"tr",align:null},"MPH"),(0,a.kt)("td",{parentName:"tr",align:null},"KPH"),(0,a.kt)("td",{parentName:"tr",align:null},"MPH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Home Distance"),(0,a.kt)("td",{parentName:"tr",align:null},"Feet"),(0,a.kt)("td",{parentName:"tr",align:null},"Metre"),(0,a.kt)("td",{parentName:"tr",align:null},"Metre")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Numerical Vario"),(0,a.kt)("td",{parentName:"tr",align:null},"FTPS"),(0,a.kt)("td",{parentName:"tr",align:null},"MPS"),(0,a.kt)("td",{parentName:"tr",align:null},"MPS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Flight Distance"),(0,a.kt)("td",{parentName:"tr",align:null},"Feet"),(0,a.kt)("td",{parentName:"tr",align:null},"Metre"),(0,a.kt)("td",{parentName:"tr",align:null},"Metre")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OSD Efficiency"),(0,a.kt)("td",{parentName:"tr",align:null},"Miles"),(0,a.kt)("td",{parentName:"tr",align:null},"KM"),(0,a.kt)("td",{parentName:"tr",align:null},"KM")))),(0,a.kt)("p",null,"Note: Configuration is done in cli with ",(0,a.kt)("inlineCode",{parentName:"p"},"set osd_units = <UNIT>")," or in the OSD tab in the Betaflight Configurator. For example ",(0,a.kt)("inlineCode",{parentName:"p"},"set osd_units = BRITISH")),(0,a.kt)("h3",{id:"affected-frsky-hub-telemetry-elements"},"Affected FrSky Hub Telemetry Elements"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Element"),(0,a.kt)("th",{parentName:"tr",align:null},"Imperial"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric"),(0,a.kt)("th",{parentName:"tr",align:null},"British"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HDOP"),(0,a.kt)("td",{parentName:"tr",align:null},"Fahrenheit"),(0,a.kt)("td",{parentName:"tr",align:null},"Celcius"),(0,a.kt)("td",{parentName:"tr",align:null},"Celcius")))),(0,a.kt)("p",null,"The FrSky hub telemetry setting can be changed in cli by ",(0,a.kt)("inlineCode",{parentName:"p"},"set frsky_unit = <UNIT>"),".\nFor example ",(0,a.kt)("inlineCode",{parentName:"p"},"set frsky_unit = METRIC")))}d.isMDXComponent=!0}}]);