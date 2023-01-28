"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1276],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={},o="Acro Trainer",l={unversionedId:"wiki/archive/Acro-Trainer",id:"wiki/archive/Acro-Trainer",title:"Acro Trainer",description:"Adds a new angle limiting mode for pilots who are learning to fly in acro mode. Primarily targeted at new LOS acro pilots, but can be used with FPV as well.",source:"@site/docs/wiki/archive/Acro-Trainer.md",sourceDirName:"wiki/archive",slug:"/wiki/archive/Acro-Trainer",permalink:"/betaflight.com/docs/wiki/archive/Acro-Trainer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"3D Setup",permalink:"/betaflight.com/docs/wiki/archive/3D-Setup"},next:{title:"Arming Sequence & Safety",permalink:"/betaflight.com/docs/wiki/archive/Arming-Sequence-And-Safety"}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"acro-trainer"},"Acro Trainer"),(0,i.kt)("p",null,"Adds a new angle limiting mode for pilots who are learning to fly in acro mode. Primarily targeted at new LOS acro pilots, but can be used with FPV as well."),(0,i.kt)("p",null,'The feature is activated with a new mode named "ACRO TRAINER". When the feature is active, the craft will fly in normal acro mode but will limit roll/pitch axes so that they don\'t exceed the configured angle limit. New pilots can start with a small angle limit and progressively increase as their skills improve.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The accelerometer must be enabled for the feature to be configured and function.")),(0,i.kt)("p",null,"Also the feature will only be active while in acro flight and will disable if ANGLE or HORIZON modes are selected."),(0,i.kt)("p",null,'For most users all they need to do is simply configure the new mode to be active as desired on the "Modes" tab in the configurator and configure the desired angle limit in the cli.'),(0,i.kt)("p",null,"Configuration parameters:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"acro_trainer_angle_limit"),": (range 10-80) Angle limit in degrees."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"acro_trainer_lookahead_ms"),': (range 10-200) Time in milliseconds that the logic will "look ahead" to help minimize overshoot and bounce-back if the limit is approached at high gyro rates. The default value of 50 should be good for most users. For low powered or unresponsive craft (micros or brushed) it may be helpful to increase this setting if you\'re seeing substantial overshoot.'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"acro_trainer_debug_axis"),": (ROLL, PITCH) The axis that will log information if debugging is active."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"acro_trainer_gain"),": (range 25-255) The angle limiting strength. Higher numbers can reduce overshoot, but can also lead to oscillation around the angle limit. The default value of 75 seems to work well for most situations."),(0,i.kt)("p",null,"To enable debugging:\n",(0,i.kt)("inlineCode",{parentName:"p"},"set debug_mode = ACRO_TRAINER")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"debug(0) - Current angle"),(0,i.kt)("li",{parentName:"ul"},"debug(1) - The internal logic state"),(0,i.kt)("li",{parentName:"ul"},"debug(2) - Modified setpoint"),(0,i.kt)("li",{parentName:"ul"},"debug(3) - Projected angle based gyro rate and look-ahead period")),(0,i.kt)("p",null,"Note that there are no changes to the functioning or calculations in the PID controller. This feature simply intercepts the pilot input on the roll and pitch axes and adjusts to prevent exceeding the configured angle limit."))}p.isMDXComponent=!0}}]);