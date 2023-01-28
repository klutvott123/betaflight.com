"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=d(n),c=o,m=h["".concat(s,".").concat(c)]||h[c]||p[c]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={},i="Betaflight 3.5 Tuning Notes",l={unversionedId:"wiki/tuning/3.5-tuning-notes",id:"wiki/tuning/3.5-tuning-notes",title:"Betaflight 3.5 Tuning Notes",description:"- a new Feed Forward PID system",source:"@site/docs/wiki/tuning/3.5-tuning-notes.md",sourceDirName:"wiki/tuning",slug:"/wiki/tuning/3.5-tuning-notes",permalink:"/betaflight.com/docs/wiki/tuning/3.5-tuning-notes",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"Tuning Notes",permalink:"/betaflight.com/docs/category/tuning-notes"},next:{title:"Betaflight 4.0 Tuning Notes",permalink:"/betaflight.com/docs/wiki/tuning/4.0-Tuning-Notes"}},s={},d=[{value:"Can I just update and go fly?",id:"can-i-just-update-and-go-fly",level:2},{value:"Feed Forward on Yaw",id:"feed-forward-on-yaw",level:2},{value:"Tuning the dynamic filter - for clean quads",id:"tuning-the-dynamic-filter---for-clean-quads",level:2},{value:"More detail about Feed Forward in 3.5",id:"more-detail-about-feed-forward-in-35",level:2}],u={toc:d};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"betaflight-35-tuning-notes"},"Betaflight 3.5 Tuning Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"3.5-tuning-notes#hello-feed-forward"},"a new Feed Forward PID system")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"3.5-tuning-notes#smoother-anti_gravity"},"Anti Gravity improvements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"3.5-tuning-notes#tuning-the-dynamic-filter---for-clean-quads"},"Dynamic Notch filter optimisation options")),(0,o.kt)("li",{parentName:"ul"},"bug fixes and optimisations")),(0,o.kt)("p",null,"In practical terms these changes should:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"3.5-tuning-notes#feed-forward-on-yaw"},"significantly improve yaw performance")," and make tuning easier"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"3.5-tuning-notes#smoother-anti_gravity"},"improve nose up/down wobble when changing throttle quickly")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"3.5-tuning-notes#dynamic-notch-filter-tuning"},"allow more focused noise reception, and/or less delay")," especially on clean quads.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.5 RC1 is experimental.")," Please confirm all PID changes in the CLI before flying. Full configurator, Lua, Blackbox and OSD support will happen but won't be there yet."),(0,o.kt)("p",null,"Configurator 10.4 and Log Viewer 3.2 or higher will be available soon for use with 3.5."),(0,o.kt)("h2",{id:"can-i-just-update-and-go-fly"},"Can I just update and go fly?"),(0,o.kt)("p",null,"Yes, especially if moving from defaults... but:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are updating from pre-3.4, please read the ",(0,o.kt)("a",{parentName:"p",href:"../archive/Tuning-Tips-for-Betaflight-3.4"},"Betaflight 3.4 Tuning Notes")," because they apply to 3.5 also.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you had customised D weight and transition, your sensitivity to quick stick inputs may be different. You may need to modify the new Feed Forward and Feed Forward Transition values to reflect your old settings.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The new Anti Gravity code defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"SMOOTH"),", and should be better than before, but if you hate it, you can go back to the old ",(0,o.kt)("inlineCode",{parentName:"p"},"STEP")," method.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You will get slightly better dynamic notch functionality than before, but to really improve things on cleaner quads, the settings should be modified from defaults.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"D weight settings, including changes via OSD or Lua, will be ignored."))),(0,o.kt)("h1",{id:"goodbye-d-setpoint-weight"},"Goodbye D Setpoint Weight:"),(0,o.kt)("h1",{id:"hello-feed-forward"},"Hello Feed Forward!"),(0,o.kt)("p",null,"This is perhaps the biggest change in recent years: ",(0,o.kt)("strong",{parentName:"p"},"No more D Setpoint Weight"),"."),(0,o.kt)("p",null,"Feed Forward now takes over the role of D setpoint weight, and can be configured independently for each axis (pitch, roll and yaw)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"set f_pitch = 60,\nset f_roll = 60,\nset f_yaw = 60,\nAllowed range: 0 - 2000\n")),(0,o.kt)("p",null,"The default values (60) for FF are comparable to the previous 3.4 defaults."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE: Your old D weight settings will be lost, in each PID profile, on updating from previous versions"),"."),(0,o.kt)("p",null,"To start using 3.5 with exactly the same Feed Forward behaviour as you had with the old D weight method, calculate FF as ",(0,o.kt)("inlineCode",{parentName:"p"},"(D/26)*D_Weight"),", where D is your PID 'D' value, and D_Weight is 100 times your D_Weight slider value, or your exact dterm_setpoint_weight value from the CLI. For example, if your D was 26, and your D weight slider was 1.0, the equivalent FF would be 100. If your D was 52, and D weight was 100, an FF of 200 would fly the same on that axis. Yaw FF is covered further down."),(0,o.kt)("p",null,"You may have to update your transition value manually also, but the units, and behaviour, are the same."),(0,o.kt)("p",null,"Feed Forward provides 'dynamic stick boost' or 'dynamic stick responsiveness'. It pushes the quad quicker into turns when the sticks are moved quickly. With Feed Forward, the faster the sticks are moved, the bigger the push. And it doesn't wait for any error to develop, the response is instantaneous."),(0,o.kt)("p",null,"The Feed Forward effect is attenuated around centre sticks by the transition parameter, so the quad can be made more damped (less twitchy) around centre for freestyle type flying by setting transition to 0.5 or 0.1 as usual, but for racing and for direct responses it's best to leave transition at 0."),(0,o.kt)("p",null,"Zero Feed Forward allows D to dampen the quad all the time, even when the quad is instructed to turn quickly. Too much Feed Forward may make the quad too twitchy, and may cause overshoot."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The default FF values of 60 are 'mid-range' values.")),(0,o.kt)("p",null,"Typically an FF value around 100 is a reasonable amount for a responsive race oriented quad."),(0,o.kt)("p",null,"Overall responsiveness to stick input depends on both P and FF. It is no longer necessary, or desirable, to keep increasing P to improve transient stick responsiveness. Adding FF is a much better way to achieve stick responsiveness than adding P."),(0,o.kt)("h2",{id:"feed-forward-on-yaw"},"Feed Forward on Yaw"),(0,o.kt)("p",null,"Yaw performance has historically been weaker than pitch and roll, leading people to run high levels of yaw P, leading to noise and wobble on yaw, overshoot and bounce back."),(0,o.kt)("p",null,"Not any more! ",(0,o.kt)("strong",{parentName:"p"},"In 3.5, yaw will typically be just as responsive and precise as pitch and roll.")),(0,o.kt)("p",null,"At least 50 of FF on yaw is recommended on all quads. The default is 60."),(0,o.kt)("p",null,"P should not need to be more than 40-60 for great yaw responsiveness, in fact lower P reduces yaw noise and bounce back."),(0,o.kt)("p",null,"Really high yaw I works great on most quads, and (strangely enough) actually reduces bounce back, when combined with yaw feed forward."),(0,o.kt)("p",null,"With those changes, yaw responsiveness will be as good, or better, than pitch and roll. With Feed Forward and high I on yaw, bounce back will be minimal, and there is no need to run iTerm_Relax on these settings."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," Yaw D is experimental. For normal quads, do not add any D to yaw, or you'll likely get mad yaw oscillation.")," Yaw D ",(0,o.kt)("em",{parentName:"p"},"may")," be useful for tricopters."),(0,o.kt)("p",null,"These are the yaw related values I'd personally recommend for a typical quad:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"set iterm_relax = RP\nset p_yaw = 40\nset i_yaw = 120\nset d_yaw = 0\nset f_yaw = 100\n")),(0,o.kt)("h1",{id:"smoother-anti_gravity"},"Smoother Anti_Gravity"),(0,o.kt)("p",null,"Quadcopters, particularly battery on the bottom designs where the centre of gravity is below the centre of thrust, or those where increasing airflow would tend to rotate the quad backwards, need to accumulate I as forward speed increases to maintain the set pitch angle. When the throttle is moved up and down quickly in forward flight, these kinds of quads may pitch their nose up and down. Anti-Gravity is the Betaflight function that helps I adapt more quickly to the new value required after a quick change in airspeed."),(0,o.kt)("p",null,"Before 3.5, Anti_Gravity used an 'all or none' method. Each time a new throttle value arrived, if that step change in throttle exceeded the threshold value, I was multiplied by the Anti_Gravity_Gain amount. But if the next step was just less than the threshold, nothing would happen."),(0,o.kt)("p",null,"Because the time intervals between RC steps vary significantly from radio to radio, the throttle change amount per step could change a lot. Hence it was a bit of a lottery as to whether or not the anti-gravity effect actually worked or not."),(0,o.kt)("p",null,"The new default ",(0,o.kt)("inlineCode",{parentName:"p"},"set anti_gravity_mode = SMOOTH")," mode increases I in smooth proportion to the rate of change of throttle. There are no sudden steps and no threshold values to worry about - the old threshold is ignored."),(0,o.kt)("p",null,"The overall strength of the effect can be altered by increasing or decreasing the anti_gravity_gain parameter. Your old values should be a good starting point, but the default of 5000 is recommended."),(0,o.kt)("p",null,"Note: When chopping throttle hard to zero, inflow to the props can get reversed, causing marked pitch and roll instability, so don't expect the quad to stay rock solid under those conditions."),(0,o.kt)("p",null,"The old method can be selected by choosing ",(0,o.kt)("inlineCode",{parentName:"p"},"set anti_gravity_mode = STEP"),"."),(0,o.kt)("h1",{id:"dynamic-notch-filter-tuning"},"Dynamic Notch Filter tuning"),(0,o.kt)("p",null,"The Dynamic Notch has been a vital factor in effective noise management."),(0,o.kt)("p",null,"3.5 improves the algorithms and allows tuning via the CLI. Appropriate changes can, on many setups, result in less delay and/or even better noise control."),(0,o.kt)("p",null,"Using the defaults preserves the old behaviour."),(0,o.kt)("p",null,"Quadcopters with relatively stiff frames, good motors and new props typically have a clean noise profile, apart from one noise peak that increases as the motor noise goes up."),(0,o.kt)("p",null,"On these quads, the old dynamic notch code tended to go too low during high throttle periods, adding significantly to delay without removing the noise."),(0,o.kt)("p",null,"For noisy quads, the old dynamic notch ended up staying tightly in a range between 200 and 300Hz, acting more like a fixed notch."),(0,o.kt)("p",null,"The code was changed to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"operate on post-filter, post-notch input data, so that if you added a notch, the dynamic would not end up on the same point"),(0,o.kt)("li",{parentName:"ul"},"ignore low frequency inputs that sometimes pushed it too low"),(0,o.kt)("li",{parentName:"ul"},"better track peaks"),(0,o.kt)("li",{parentName:"ul"},"go up to the highest value if there was no peak, to minimise delay"),(0,o.kt)("li",{parentName:"ul"},"allow the user to configure the quality factor so that it could to track a wider range of input data"),(0,o.kt)("li",{parentName:"ul"},"allow the user to set how wide the notch would be, narrower causing less delay.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IMPORTANT NOTE: Noisy quads with warm motors should be left at the defaults.")),(0,o.kt)("h2",{id:"tuning-the-dynamic-filter---for-clean-quads"},"Tuning the dynamic filter - for clean quads"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dyn_notch_quality")," is the CLI value that sets how widely the notch filter is allowed to move. Technically, this sets the Q factor of the input bandpass filter."),(0,o.kt)("p",null,"The old dynamic notch Q factor, and the current default, was 70. This restricted the range of movement of the dynamic to relatively narrow band, typically between 240 and 300 Hz. Setting dyn_notch_quality to 5 opens the bandwidth up to a range between 150 and 600Hz. This works really well on clean quads with a dominant well defined motor speed related peak that runs up to 600Hz."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dyn_notch_width_percent")," sets how wide the dynamic notch will be. If set to 20, the notch will be +/- 20% of center frequency. If the algorithm would have set centre frequency to 300, a 20% wide notch would cover the range 240 to 360."),(0,o.kt)("p",null,"The current default is 50%, which is about how wide the old dynamic filter was. Given the typical centre values of the old filter, this resulted in a wide notch, which caused meaningful additional delay."),(0,o.kt)("p",null,"On clean quads, the dynamic can be narrowed to say 20% and still work really well."),(0,o.kt)("p",null,"For medium clean quads, try:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"set dyn_notch_quality = 15\nset dyn_notch_width_percent = 30\n")),(0,o.kt)("p",null,"For really clean quads, try:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"set dyn_notch_quality = 5\nset dyn_notch_width_percent = 20\n")),(0,o.kt)("p",null,"To see what the centre frequency of the notch is doing on each axis in blackbox, and log raw gyro:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"set debug_mode = FFT_FREQ\n")),(0,o.kt)("h2",{id:"more-detail-about-feed-forward-in-35"},"More detail about Feed Forward in 3.5"),(0,o.kt)("p",null,"Prior to 3.5, the feed forward factor was included within the D calculation, and increased whenever you added D."),(0,o.kt)("p",null,"The old D weight approach was undesirable for the following reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Conceptually, it was confusing. We were linking a factor that improved stick responsiveness to a factor that was supposed to dampen reactions. There were good reasons for this, but it sure complicated things.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Previously, when adding D to tune out wobble after quick stick inputs, there was a simultaneous increase in turn rate, so it was not possible to 'just add more D'. Now, when adding more D, all you get is... more D. So D can be tuned in the classical method of adding it to control P wobble much more easily.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Previously, any change in D would change how much feed forward or stick responsiveness you got. Now they are entirely independent."))),(0,o.kt)("p",null,"We can now plot the Feed Forward and D elements independently in the Blackbox Log Viewer, showing exactly what D does, and how much D and FF contribute, independently, to pidSum. This simplifies blackbox-assisted tuning."),(0,o.kt)("p",null,"Feed Forward requires RC smoothing to be enabled (the Filter method is best). Without RC smoothing, Feed Forward will generate spikes in the motor traces and to prevent this the firmware will disable Feed Forward on any channels not smoothed. So the default has been changed to enable smoothing on all channels (",(0,o.kt)("inlineCode",{parentName:"p"},"rc_interp_ch = RPYT"),")."))}h.isMDXComponent=!0}}]);