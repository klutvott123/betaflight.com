"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1260],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},p="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=d(n),h=r,c=p["".concat(s,".").concat(h)]||p[h]||g[h]||i;return n?a.createElement(c,l(l({ref:e},u),{},{components:n})):a.createElement(c,l({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},78614:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={},l="Freestyle Tuning Principles",o={unversionedId:"wiki/archive/Freestyle-Tuning-Principles",id:"wiki/archive/Freestyle-Tuning-Principles",title:"Freestyle Tuning Principles",description:"This is a work in progress and not a final document.",source:"@site/docs/wiki/archive/Freestyle-Tuning-Principles.md",sourceDirName:"wiki/archive",slug:"/wiki/archive/Freestyle-Tuning-Principles",permalink:"/betaflight.com/docs/wiki/archive/Freestyle-Tuning-Principles",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"FrSky FPORT Protocol",permalink:"/betaflight.com/docs/wiki/archive/FrSky-FPort-Protocol"},next:{title:"GPS Rescue 4.1 to 4.3",permalink:"/betaflight.com/docs/wiki/archive/GPS-Rescue-Mode-v4-1-to-v4-3"}},s={},d=[{value:"This is a work in progress and not a final document.",id:"this-is-a-work-in-progress-and-not-a-final-document",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Principles and Attributes",id:"principles-and-attributes",level:2},{value:"Betaflight Tune",id:"betaflight-tune",level:2},{value:"VBat Sag Compensation",id:"vbat-sag-compensation",level:3},{value:"Suggested setting: values for a 5&quot;",id:"suggested-setting-values-for-a-5",level:4},{value:"\ud83d\udca1 Advanced Considerations",id:"-advanced-considerations",level:4},{value:"PID",id:"pid",level:2},{value:"Suggested settings: values for a 5&quot;",id:"suggested-settings-values-for-a-5",level:3},{value:"\ud83d\udca1 Advanced Considerations",id:"-advanced-considerations-1",level:3},{value:"Feed Forward",id:"feed-forward",level:2},{value:"Suggested setting: values for a 5&quot;",id:"suggested-setting-values-for-a-5-1",level:3},{value:"D Min",id:"d-min",level:2},{value:"Suggested setting: off",id:"suggested-setting-off",level:3},{value:"TPA",id:"tpa",level:2},{value:"Suggested setting: values for a 5&quot;",id:"suggested-setting-values-for-a-5-2",level:3},{value:"Thrust Linear",id:"thrust-linear",level:2},{value:"I term relax and iterm_windup",id:"i-term-relax-and-iterm_windup",level:2},{value:"Suggested setting: values for a 5&quot;",id:"suggested-setting-values-for-a-5-3",level:3},{value:"Anti gravity",id:"anti-gravity",level:2},{value:"Suggested setting: values for a 5&quot;",id:"suggested-setting-values-for-a-5-4",level:3},{value:"Motor Idle Throttle Value, Dynamic Idle Value &amp; Thrust Linear",id:"motor-idle-throttle-value-dynamic-idle-value--thrust-linear",level:2},{value:"Suggested setting: values for a 5&quot;",id:"suggested-setting-values-for-a-5-5",level:3},{value:"RC smoothing",id:"rc-smoothing",level:2},{value:"Suggested setting:",id:"suggested-setting",level:3},{value:"PWM Frequency",id:"pwm-frequency",level:2},{value:"Suggested setting: values for a 5&quot;",id:"suggested-setting-values-for-a-5-6",level:3},{value:"\ud83d\udca1 Advanced Considerations",id:"-advanced-considerations-2",level:3}],u={toc:d};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"freestyle-tuning-principles"},"Freestyle Tuning Principles"),(0,r.kt)("h2",{id:"this-is-a-work-in-progress-and-not-a-final-document"},"This is a work in progress and not a final document."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Authors: Elia Palme, Daniel Appel, Hugo Chiang(DusKing1), Mark Spatz and co.")),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"Provide easy and simple guidelines to set-up Betaflight for freestyle."),(0,r.kt)("p",null,"While Betaflight benefits from a large and vivid developers community\nwith frequent updates and new features releases, it has often been\ncriticized by freestyle pilots for being too complicated to use and hard\nto keep up with."),(0,r.kt)("p",null,"This guide aims to provide simple guiding principles and tune\nsuggestions to make the best out of Betaflight for freestyle purposes."),(0,r.kt)("p",null,"Note: before editing this guide consider discussing changes on the original ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1ki5_OdsD6xIo6t1pZLV04wH0uaplabWEtOenDJmnYX4"},"document"),"."),(0,r.kt)("h2",{id:"principles-and-attributes"},"Principles and Attributes"),(0,r.kt)("p",null,"Freestyle is mainly about the footage of a smooth and precise acrobatic\nflight."),(0,r.kt)("p",null,"To achieve such goals a freestyle quad should be tuned with the\nfollowing principles in mind:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Optimized for smoothness over low latency and sharp control.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Freestyle pilots tend to prefer a smoother and "looser"\nquad over an extremely reactive (brain reading feeling) one. Mainly\nbecause it helps to smooth out micro correction and makes the footage\nlook more organic and fluid.')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Optimized to behave predictively and with consistency.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Consistency helps pilots to build muscle memory and get a feel of the\nquad, hence gain confidence and precision. One among the best pilots,\nMr. Steel is known for running the same setup for several years and he\nvery rarely makes changes to it.")),(0,r.kt)("p",null,"With the above principles in mind we can distill three attributes we\nshould optimize for:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Consistency")),(0,r.kt)("td",{parentName:"tr",align:null},"Consistency is the ability of the craft to behave based in a consistent and predictable manner given the provided stick inputs. The more predictable is the quad behaving the more ",(0,r.kt)("strong",{parentName:"td"},"precision and confidence the pilot will gain"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attitude Hold")),(0,r.kt)("td",{parentName:"tr",align:null},"Attitude hold is the ability of the craft to keep it\u2019s trajectory and behave as expected. A quadcopter with good attitude resists changes in orientation from outside forces, and responds only to user stick inputs. These outside forces can include wind, propwash, vibrations, and other forces. Attitude provides ",(0,r.kt)("strong",{parentName:"td"},"smoothness"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Responsiveness")),(0,r.kt)("td",{parentName:"tr",align:null},"Responsiveness is the ability of the craft to track setpoint (stick inputs) as close as possible. A responsive quad has very ",(0,r.kt)("strong",{parentName:"td"},"low latency and feels connected"),".")))),(0,r.kt)("p",null,"In theory all three attributes are equally important in practice an\nincrease of responsiveness might affect the pilot ability to fly\nsmoothly and consistently."),(0,r.kt)("p",null,"Therefore it is advised to compromise on responsiveness to keep the\nquad behaving in a predictive and consistent manner"),(0,r.kt)("h2",{id:"betaflight-tune"},"Betaflight Tune"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important note:"),' the suggested tuning values are intended for a typical 5" setup either 6S with ',"[1600 to 1800]"," KV motors or 4S with ","[2400-2600]"," KV motors."),(0,r.kt)("h3",{id:"vbat-sag-compensation"},"VBat Sag Compensation"),(0,r.kt)("p",null,"This feature aims to provide motor response consistency across the\nentire flight (",(0,r.kt)("a",{parentName:"p",href:"/betaflight.com/docs/wiki/tuning/4.2-Tuning-Notes#dynamic-battery-sag-compensation"},"BF doc ref"),").\nBy enabling VBat Sag Compensation the craft will fly more consistently\nand predictively."),(0,r.kt)("p",null,"If you plan to use this feature it's crucial to enable it before\nperforming the PID tuning."),(0,r.kt)("h4",{id:"suggested-setting-values-for-a-5"},'Suggested setting: values for a 5"'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"VBat Sag Period (vbat_sag_lpf_period)")),(0,r.kt)("td",{parentName:"tr",align:null},"200 (20 second)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"VBat compensation")),(0,r.kt)("td",{parentName:"tr",align:null},"40-70")))),(0,r.kt)("h4",{id:"-advanced-considerations"},"\ud83d\udca1 Advanced Considerations"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to expand!"),"VBatSagCompensation works by adjusting the overall motor outputs depending on battery voltage.  Using higher values of VBatSagCompensation, such as 100, will attempt to completely eliminate reduction in power from battery response down to the 3.3V/cell threshold.  This will reduce opportunities for a pilot to perceive battery sag .While a very consistent response for the same throttle inputs from the start of a flight towards the end of the flight is great, the inherent risk with this approach is that flight performance will go from nominal to battery dropping below 3.0V/cell very quickly if all the battery capacity is used.  For this reason, many pilots would prefer to run lower  values if they are accustomed to using the battery sag response to gauge when it is prudent to land.",(0,r.kt)("p",null,"Due to the chemistry of Lithium Polymer batteries, operating them below 3.0V/cell results in plating lithium onto the anode, which permanently reduces both the capacity and to to a peak discharge capability of the battery. This is to be avoided if at all possible.")),(0,r.kt)("h2",{id:"pid"},"PID"),(0,r.kt)("p",null,"PID are at the core of a quad tuning, with PID tuning we can achieve a\ngood quadcopter attitude."),(0,r.kt)("p",null,"D is the most important PID term to achieve smooth flying, D helps to\nminimize propwash as well as dampening any quads movement. Freestyle\nquads tend to use higher D gains."),(0,r.kt)("p",null,"To counterbalance a higher than usual D gain P needs to be increased as\nwell."),(0,r.kt)("p",null,"A simple approach to tune P and D is to set a desired D gain (e.g. 45)\nand slowly increase P as high as possible without producing any bounce\nback on flips and rolls (see ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=qK5APBg76AU"},"UAV Tech video"),")."),(0,r.kt)("p",null,"The I term is generally good enough on default, however if the quad\nfeels sloppy increasing the gain could improve the overall attitude."),(0,r.kt)("h3",{id:"suggested-settings-values-for-a-5"},'Suggested settings: values for a 5"'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"P")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"I")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"D")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Roll")),(0,r.kt)("td",{parentName:"tr",align:null},"60-70"),(0,r.kt)("td",{parentName:"tr",align:null},"90-100"),(0,r.kt)("td",{parentName:"tr",align:null},"40-50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Pitch")),(0,r.kt)("td",{parentName:"tr",align:null},"60-70"),(0,r.kt)("td",{parentName:"tr",align:null},"90-100"),(0,r.kt)("td",{parentName:"tr",align:null},"40-50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yaw")),(0,r.kt)("td",{parentName:"tr",align:null},"30-40"),(0,r.kt)("td",{parentName:"tr",align:null},"90-100"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("h3",{id:"-advanced-considerations-1"},"\ud83d\udca1 Advanced Considerations"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to expand!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Equal setpoint tracking latency across axes")),(0,r.kt)("p",null,"To further improve consistency it's important to properly tune all axes\n(Roll, Pitch and Yaw) this will ensure that the setpoint tracking\nlatency is equal for each axe.\nYaw can tolerate some additional tracking latency, just because of how differently it produces torque about the yaw axis. This is likely a very minor note, but why increasing Yaw P values can very frequently improve performance, particularly with larger frames or other designs that have more frame mass farther from the CG."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Motor max out")),(0,r.kt)("p",null,"Another big factor for consistency is that when the craft is commanded\nto make a move, the motors should not max out. If that happens you'll\nget completely different responsiveness, and somewhat unpredictably.\nThis is again a key factor in consistency: having enough power and\nauthority on all axes.")),(0,r.kt)("h2",{id:"feed-forward"},"Feed Forward"),(0,r.kt)("p",null,"Feed Forward is used to help the quad copter tracking the setpoint\n(stick inputs) closer. In other words it reduces the latency between\nstick movement and quadcopter movement."),(0,r.kt)("p",null,"Feed Forward is intended to increase responsiveness by more directly applying stick inputs into the mixer ahead of other PID inputs, reducing the need for the PID controller to respond to setpoint error in order to respond to inputs\nFeed Forward is great to increase responsiveness by anticipating a soon expected PID error based on stick movement."),(0,r.kt)("h3",{id:"suggested-setting-values-for-a-5-1"},'Suggested setting: values for a 5"'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Feed Forward Transition")),(0,r.kt)("td",{parentName:"tr",align:null},"0.9-1")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Feed Forward")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Roll")),(0,r.kt)("td",{parentName:"tr",align:null},"90-100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Pitch")),(0,r.kt)("td",{parentName:"tr",align:null},"90-100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yaw")),(0,r.kt)("td",{parentName:"tr",align:null},"90-100")))),(0,r.kt)("h2",{id:"d-min"},"D Min"),(0,r.kt)("p",null,"D Min allows to run higher D gain on not so clean builds by dynamically\nincreasing D on sharp moves.It has been introduced to run cooler motors,\nand have faster stick responsiveness."),(0,r.kt)("p",null,"D Min can negatively affect consistency as D is no longer constant but\nvaries depending on how quick the move is. Also, running a lower D\nduring shallow flight will reduce smoothness."),(0,r.kt)("h3",{id:"suggested-setting-off"},"Suggested setting: off"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If your quad allows it (clean build with low noise) disabling D Min\nincreases the quad flight consistency by keeping D constant and at a\ngenerally higher value.")),(0,r.kt)("h2",{id:"tpa"},"TPA"),(0,r.kt)("p",null,"TPA lowers the D and P gain after a certain throttle threshold. It has\nbeen introduced to address fast oscillations induced by high throttle\nmotor noises on quads running high PID gains."),(0,r.kt)("p",null,"Similar to D Min this settings could negatively affect consistency\nleading to an increase of rotation rate when more throttle applied\n",(0,r.kt)("a",{parentName:"p",href:"../../development/PID%20tuning#tpa-and-tpa-breakpoint"},"BF doc ref")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Increasing the default breakpoint value allows to keep D constant also\naround mid throttle .")),(0,r.kt)("h3",{id:"suggested-setting-values-for-a-5-2"},'Suggested setting: values for a 5"'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Rate")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Breakpoint")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"TPA")),(0,r.kt)("td",{parentName:"tr",align:null},"0.40-0.50"),(0,r.kt)("td",{parentName:"tr",align:null},"1600- 1750")))),(0,r.kt)("p",null,"Lower rate and higher breakpoint will increase consistency but\neventually introduce oscillations, carefully tune the settings to\nminimize the impact of TPA while avoiding oscillations."),(0,r.kt)("h2",{id:"thrust-linear"},"Thrust Linear"),(0,r.kt)("p",null,"If a unusually large TPA is required to avoid high-throttle oscillations whilst good performance is observed at low and mid throttle then consider reducing TPA and employing thrust_linear. Thrust linearization is designed to account for situations where a linear throttle input produces an exponential throttle output. This can happen on builds which fall outside of the normal power/weight ratio. In these cases thrust_linear can be used to PID boost response at low throttle and reduce PID response at high throttle."),(0,r.kt)("p",null,"thrust_linear defaults to 0. If you experience oscillations which TPA cannot sufficiently correct then thrust_linear is a good next step."),(0,r.kt)("p",null,"Because thrust_linear will boost PID response at low throttle the master PID values should be reduced one or two notches on the slider before introducing thrust_linear.\nSet thrust_linear initially at a value around 25 and then increase in increments of 5 whilst observing the effect on high-throttle oscillations."),(0,r.kt)("h2",{id:"i-term-relax-and-iterm_windup"},"I term relax and iterm_windup"),(0,r.kt)("p",null,"I term relax aims to inhibit I during fast manoeuvres by preventing it\nfrom further accumulating avoiding I term induced bounce back on flips\nand rolls (",(0,r.kt)("a",{parentName:"p",href:"I-Term-Relax-Explained"},"BF doc ref"),")."),(0,r.kt)("h3",{id:"suggested-setting-values-for-a-5-3"},'Suggested setting: values for a 5"'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Axes")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Cutoff")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Iterm Relax")),(0,r.kt)("td",{parentName:"tr",align:null},"RP (Increment only)"),(0,r.kt)("td",{parentName:"tr",align:null},"Setpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"7-12")))),(0,r.kt)("h2",{id:"anti-gravity"},"Anti gravity"),(0,r.kt)("p",null,"Anti Gravity boosts the I term when fast throttle changes are detected.\nIt has been introduced to mitigate the craft nose tilt on throttle\nchanges (",(0,r.kt)("a",{parentName:"p",href:"PID-Tuning-Guide#antigravity"},"BF doc ref"),")."),(0,r.kt)("p",null,"Anti gravity helps to increase smoothness and hold the attitude on\nmaneuvers with fast throttle changes like boosts, powerloops, etc."),(0,r.kt)("h3",{id:"suggested-setting-values-for-a-5-4"},'Suggested setting: values for a 5"'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Gain")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Anti gravity")),(0,r.kt)("td",{parentName:"tr",align:null},"3.5 - 5")))),(0,r.kt)("h2",{id:"motor-idle-throttle-value-dynamic-idle-value--thrust-linear"},"Motor Idle Throttle Value, Dynamic Idle Value & Thrust Linear"),(0,r.kt)("p",null,"Lower than default Motor Idle Throttle Value allows for greater hang\ntime and cleaner dives. However it comes at the cost of a weaker\nattitude hold at zero throttle and increased risk of de-sync."),(0,r.kt)("p",null,"Dynamic Idle Value and Thrust Linear will help to mitigate those\ncollateral effects."),(0,r.kt)("p",null,"Dynamic Idle Value allows to define minimum motor RPM, if set at a\nreasonable amount it avoids de-sync due to too low motor RPM."),(0,r.kt)("p",null,"Thrust Linear helps to boost the PID gains low throttle helping to offset reduced motor responsiveness in low RPM operation compared to higher RPM responsiveness of motors. This can have some interactions with D gains at higher throttle values, which may require use of higher TPA_rate to offset."),(0,r.kt)("h3",{id:"suggested-setting-values-for-a-5-5"},'Suggested setting: values for a 5"'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Motor Idle Throttle Value")),(0,r.kt)("td",{parentName:"tr",align:null},"3% - 4%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Dynamic Idle")),(0,r.kt)("td",{parentName:"tr",align:null},"Needs to be computed according to ",(0,r.kt)("a",{parentName:"td",href:"Tuning-Dynamic-Idle#setup---enabling-dynamic-idle"},"doc"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Thrust Linear")),(0,r.kt)("td",{parentName:"tr",align:null},"20-25")))),(0,r.kt)("h2",{id:"rc-smoothing"},"RC smoothing"),(0,r.kt)("p",null,"Higher than default RC smoothing helps reducing stick input gliches caused by noise in the RC link."),(0,r.kt)("h3",{id:"suggested-setting"},"Suggested setting:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"RC smoothing")),(0,r.kt)("td",{parentName:"tr",align:null},"20")))),(0,r.kt)("h1",{id:"betaflight-filtering"},"Betaflight Filtering"),(0,r.kt)("p",null,"Generally speaking the less the better as filtering introduces latency, for freestyling a more conservative approach with enough amount of filtering is advised.\nNot enough filtering can negatively affect smoothness and in some cases even burn motors."),(0,r.kt)("p",null,"Via incremental tuning effort try minimizing Gyro LPF filtering (biggest drain on phase delay that makes propwash response poor) followed by minimizing how much delay is coming from dynamic notch filtering (ideally single notch with smaller DFT bins - W=0, Q=250, MinHz 105, MaxHz 465)."),(0,r.kt)("p",null,"Lastly, try reducing the D-term filtering, slider values up to 1.4 range, still attenuates most D_term noise very well but reduces phase latency."),(0,r.kt)("h1",{id:"esc-settings"},"ESC Settings"),(0,r.kt)("h2",{id:"pwm-frequency"},"PWM Frequency"),(0,r.kt)("p",null,"Increasing PWM frequency helps to run smoother motors, and provide greater control at the cost of losing some thrust."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Warning:")," Increasing PWM frequency can introduce wobbles at zero or low throttle. Such undesired effect can be mitigated by increasing Thrust Linear or Dynamic Idle values.")),(0,r.kt)("h3",{id:"suggested-setting-values-for-a-5-6"},'Suggested setting: values for a 5"'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"PWM Frequency")),(0,r.kt)("td",{parentName:"tr",align:null},"48kHz - 96kHz or use Variable PWM Frequency")))),(0,r.kt)("h3",{id:"-advanced-considerations-2"},"\ud83d\udca1 Advanced Considerations"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to expand!"),"Increasing PWM frequency tends to result in smoother running motors and may mitigate issues with aliasing that results in some mid-throttle oscillations, however higher PWM frequencies have downside. As the PWM frequency increases, the PWM resolution is bound to decrease, and depending on ESC deadtime required in switching, lower throttle responsiveness may also be reduced."))}p.isMDXComponent=!0}}]);