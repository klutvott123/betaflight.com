"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9032],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,y=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(y,a(a({ref:t},s),{},{components:r})):n.createElement(y,a({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23295:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={},a="HID Joystick Support",c={unversionedId:"wiki/archive/HID-Joystick-Support",id:"wiki/archive/HID-Joystick-Support",title:"HID Joystick Support",description:"HID joystick support is currently only available on F4 / F7 boards.",source:"@site/docs/wiki/archive/HID-Joystick-Support.md",sourceDirName:"wiki/archive",slug:"/wiki/archive/HID-Joystick-Support",permalink:"/betaflight.com/docs/wiki/archive/HID-Joystick-Support",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"Gyro and Dterm Filtering Recommendations",permalink:"/betaflight.com/docs/wiki/archive/Gyro-&-Dterm-Filtering-Recommendations"},next:{title:"Hardware Reference",permalink:"/betaflight.com/docs/wiki/archive/Hardware-Reference"}},p={},l=[],s={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hid-joystick-support"},"HID Joystick Support"),(0,o.kt)("p",null,"HID joystick support is currently only available on F4 / F7 boards."),(0,o.kt)("p",null,"To enable it, set ",(0,o.kt)("inlineCode",{parentName:"p"},"usb_hid_cdc")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," in CLI, and reboot the flight controller. It will then be recognised as a HID joystick when plugged in via USB."),(0,o.kt)("p",null,"For Windows 7, a driver needs to be installed, it can be downloaded from ",(0,o.kt)("a",{parentName:"p",href:"resources/hid_driver_windows_7.zip"},"here"),"."))}u.isMDXComponent=!0}}]);