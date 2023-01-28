"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2057],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},h=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),f=s(r),u=o,m=f["".concat(c,".").concat(u)]||f[u]||p[u]||i;return r?n.createElement(m,a(a({ref:t},h),{},{components:r})):n.createElement(m,a({ref:t},h))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},34065:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={},a="Flight Controller Gyro Orientation",l={unversionedId:"wiki/archive/Flight-Controller-Gyro-Orientation",id:"wiki/archive/Flight-Controller-Gyro-Orientation",title:"Flight Controller Gyro Orientation",description:"There are tons of videos available on the internet how to align a flight controller (FC) to a model aircraft frame, e.g. Flight Controller Orientation Settings in BetaFlight from Cyclone FPV",source:"@site/docs/wiki/archive/Flight-Controller-Gyro-Orientation.md",sourceDirName:"wiki/archive",slug:"/wiki/archive/Flight-Controller-Gyro-Orientation",permalink:"/betaflight.com/docs/wiki/archive/Flight-Controller-Gyro-Orientation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"Feed Forward 2.0",permalink:"/betaflight.com/docs/wiki/archive/Feed-Forward-2.0"},next:{title:"Flight Controller Orientation",permalink:"/betaflight.com/docs/wiki/archive/Flight-Controller-Orientation"}},c={},s=[],h={toc:s};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flight-controller-gyro-orientation"},"Flight Controller Gyro Orientation"),(0,o.kt)("p",null,"There are tons of videos available on the internet how to align a flight controller (FC) to a model aircraft frame, e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/W-a7qCkV8SE"},"Flight Controller Orientation Settings in BetaFlight from Cyclone FPV")),(0,o.kt)("p",null,"Usually, the gyro orientation on the FC is ink-marked by an arrow pointing forward."),(0,o.kt)("p",null,"In rare cases or due to space limitations, the flight controller needs to be positioned on the frame in awkward alignment, i.e. pivoted around multiple axes, NOT lining up with the main axes of the frame anymore."),(0,o.kt)("p",null,'The FC firmware NEEDS to know how the FC axes are oriented with respect to the frame axes, otherwise the PID controller will misinterpret flight attitude and corrective actions. To keep all controls working as usual, you need to set "Gyro Offset" values in Betaflight Configurator. These offsets will tell the FC how to rotate the frame around multiple axes to fall in line with the alignment of the FC.'),(0,o.kt)("p",null,"It is important to note that there is a sequence of so-called Euler angles (axes of rotation in space, perpendicular to each other) for board/gyro alignment: yaw-pitch-roll"),(0,o.kt)("p",null,"Assuming that the board alignment is in the usual yaw roll pitch euler angles parametrization (R = RzRyRx) you actually have to think in the inverse transform R' = (Rz",(0,o.kt)("em",{parentName:"p"},"Ry"),"Rx)' = Rx'",(0,o.kt)("em",{parentName:"p"},"Ry'"),"Rz' to obtain the Gyro Offset angles to enter into Betaflight Configurator."),(0,o.kt)("p",null,"Here we have to think how to rotate the frame so that the frame is oriented like the flight controller in the following order:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"rotate the frame around z-axis (yaw)"),(0,o.kt)("li",{parentName:"ul"},"rotate the already yawed frame around y-axis (pitch)"),(0,o.kt)("li",{parentName:"ul"},"rotate the already yawed and pitched frame around x-axis (roll)")),(0,o.kt)("p",null,"After determining these 3 correction angles needed to rotate the frame into the FC alignment, the values for yaw, pitch and roll can be entered into the respective fields for Gyro Offset in Betaflight Configurator."))}f.isMDXComponent=!0}}]);