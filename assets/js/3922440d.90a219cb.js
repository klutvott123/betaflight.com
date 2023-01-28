"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=d(n),u=o,y=c["".concat(p,".").concat(u)]||c[u]||s[u]||l;return n?r.createElement(y,a(a({ref:t},m),{},{components:n})):r.createElement(y,a({ref:t},m))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<l;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const l={},a=void 0,i={unversionedId:"development/development/PID Internals",id:"development/development/PID Internals",title:"PID Internals",description:"IO variables",source:"@site/docs/development/development/PID Internals.md",sourceDirName:"development/development",slug:"/development/development/PID Internals",permalink:"/betaflight.com/docs/development/development/PID Internals",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"development",previous:{title:"Known-Build-Environment-Problems",permalink:"/betaflight.com/docs/development/development/Known-Build-Environment-Problems"},next:{title:"Parameter Group IDs",permalink:"/betaflight.com/docs/development/development/Parameter-Group-IDs"}},p={},d=[{value:"IO variables",id:"io-variables",level:3},{value:"PID controller 0, &quot;MultiWii&quot; (default)",id:"pid-controller-0-multiwii-default",level:3},{value:"Leveling term",id:"leveling-term",level:4},{value:"Gyro term",id:"gyro-term",level:4},{value:"Mode dependent mix(yaw is always from gyro)",id:"mode-dependent-mixyaw-is-always-from-gyro",level:5},{value:"Gyro stabilization",id:"gyro-stabilization",level:4}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"io-variables"},"IO variables"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gyroADC/8192*2000 = deg/s")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gyroADC/4 ~ deg/s")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rcCommand")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"<-500 - 500>")," nominal, but is scaled with ",(0,o.kt)("inlineCode",{parentName:"p"},"rcRate/100"),", max +-1250"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"inclination")," - in 0.1 degree, roll and pitch deviation from horizontal position\n",(0,o.kt)("inlineCode",{parentName:"p"},"max_angle_inclination")," - in 0.1 degree, default 50 degrees (500)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"axisPID")," - output to mixer, will be added to throttle(",(0,o.kt)("inlineCode",{parentName:"p"},"<1000-2000>"),"), output range is ",(0,o.kt)("inlineCode",{parentName:"p"},"<minthrottle, maxthrottle>")," (default ",(0,o.kt)("inlineCode",{parentName:"p"},"<1150 - 1850>"),")"),(0,o.kt)("h3",{id:"pid-controller-0-multiwii-default"},'PID controller 0, "MultiWii" (default)'),(0,o.kt)("h4",{id:"leveling-term"},"Leveling term"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"error = constrain(2*rcCommand[axis], limit +- max_angle_inclination) - inclination[axis]\nPacc = constrain(P8[PIDLEVEL]/100 * error, limit +- 5 * D8[PIDLEVEL])\nIacc = intergrate(error, limit +-10000) * I8[PIDLEVEL] / 4096\n")),(0,o.kt)("h4",{id:"gyro-term"},"Gyro term"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Pgyro = rcCommand[axis];\nerror = rcCommand[axis] * 10 * 8 / pidProfile->P8[axis] - gyroADC[axis] / 4; (conversion so that error is in deg/s ?)\nIgyro = integrate(error, limit +-16000) / 10 / 8  * I8[axis] / 100 (conversion back to mixer units ?)\n")),(0,o.kt)("p",null,"reset I term if"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"axis rotation rate > +-64deg/s"),(0,o.kt)("li",{parentName:"ul"},"axis is YAW and rcCommand>+-100")),(0,o.kt)("h5",{id:"mode-dependent-mixyaw-is-always-from-gyro"},"Mode dependent mix(yaw is always from gyro)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HORIZON - proportionally according to max deflection")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  deflection = MAX(ABS(rcCommand[PITCH]), ABS(rcCommand[ROLL])) / 500 ; limit to 0.0 .. 1.0\n  P = Pacc * (1-deflection) + Pgyro * deflection\n  I = Iacc * (1-deflection) + Igyro * deflection\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"gyro")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  P = Pgyro\n  I = Igyro\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ANGLE")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  P = Pacc\n  I = Iacc\n")),(0,o.kt)("h4",{id:"gyro-stabilization"},"Gyro stabilization"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"P -=  gyroADC[axis] / 4 * dynP8 / 10 / 8\nD = -mean(diff(gyroADC[axis] / 4), over 3 samples) * 3 * dynD8 / 32\n[equivalent to :]\nD = - (gyroADC[axis]/4 - (<3 loops old>gyroADC[axis]/4)) * dynD8 / 32\n")),(0,o.kt)("p",null,"This can be seen as sum of"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PI controller (handles rcCommand, HORIZON/ANGLE); ",(0,o.kt)("inlineCode",{parentName:"li"},"Igyro")," is only output based on gyroADC"),(0,o.kt)("li",{parentName:"ul"},"PD controller(parameters dynP8/dynD8) with zero setpoint acting on gyroADC")))}c.isMDXComponent=!0}}]);