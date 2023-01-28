"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5080],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=u(a),c=n,m=p["".concat(s,".").concat(c)]||p[c]||d[c]||r;return a?o.createElement(m,i(i({ref:t},h),{},{components:a})):o.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7174:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=a(87462),n=(a(67294),a(3905));const r={},i="Getting Started",l={unversionedId:"development/Getting-Started",id:"development/Getting-Started",title:"Getting Started",description:"This is a step-by-step guide that can help a person that has never used Cleanflight before set up a flight controller and the aircraft around it for flight. Basic RC knowledge is required, though. A total beginner should first familiarize themselves with concepts and techniques of RC before using this (e.g. basic controls, soldering, transmitter operation etc). One could use RCGroups and/or the Youtube show FliteTest for this.",source:"@site/docs/development/Getting-Started.md",sourceDirName:"development",slug:"/development/Getting-Started",permalink:"/betaflight.com/docs/development/Getting-Started",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"development",previous:{title:"The FrSky SPI RX",permalink:"/betaflight.com/docs/development/FrSky-SPI-RX"},next:{title:"GPS",permalink:"/betaflight.com/docs/development/Gps"}},s={},u=[{value:"Hardware",id:"hardware",level:2},{value:"Software setup",id:"software-setup",level:2},{value:"Cleanflight Configuration",id:"cleanflight-configuration",level:2},{value:"Final testing and safety",id:"final-testing-and-safety",level:2},{value:"Using it (AKA: Flying)",id:"using-it-aka-flying",level:2},{value:"Advanced Matters",id:"advanced-matters",level:2}],h={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"This is a step-by-step guide that can help a person that has never used Cleanflight before set up a flight controller and the aircraft around it for flight. Basic RC knowledge is required, though. A total beginner should first familiarize themselves with concepts and techniques of RC before using this (e.g. basic controls, soldering, transmitter operation etc). One could use ",(0,n.kt)("a",{parentName:"p",href:"http://www.rcgroups.com/forums/index.php"},"RCGroups")," and/or ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/user/flitetest"},"the Youtube show FliteTest")," for this."),(0,n.kt)("p",null,"DISCLAIMER: This documents is a work in progress. We cannot guarantee the safety or success of your project. At this point the document is only meant to be a helping guide, not an authoritative checklist of everything you should do to be safe and successful. Always exercise common sense, critical thinking and caution."),(0,n.kt)("p",null,"Read the ",(0,n.kt)("a",{parentName:"p",href:"/betaflight.com/docs/development/Introduction"},"Introduction")," chapter for an overview of Cleanflight and how the community works."),(0,n.kt)("h2",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,"NOTE: Flight Controllers are typically equipped with accelerometers. These devices are sensitive to shocks. When the device is not yet installed to an aircraft, it has very little mass by itself. If you drop or bump the controller, a big force will be applied on its accelerometers, which could potentially damage them. Bottom line: Handle the board very carefully until it's installed on an aircraft!"),(0,n.kt)("p",null,"For an overview of the hardware Cleanflight (hereby CF) can run on, see ",(0,n.kt)("a",{parentName:"p",href:"/betaflight.com/docs/development/Boards"},"Boards.md"),". For information about specific boards, see the board specific documentation."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Assuming that you have a flight controller board (hereby FC) in hand, you should first read through the manual that it came with. You can skip the details about software setup, as we'll cover that here.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Decide how you'll connect your receiver by reading the ",(0,n.kt)("a",{parentName:"p",href:"/betaflight.com/docs/development/Rx"},"receiver")," chapter, and how many pins you need on the outputs (to connect ESCs and servos) by reading about ",(0,n.kt)("a",{parentName:"p",href:"/betaflight.com/docs/development/Mixer"},"Mixers"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you're interested in monitoring your flight battery with CF, see ",(0,n.kt)("a",{parentName:"p",href:"/betaflight.com/docs/development/Battery"},"Battery Monitoring"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You may want audible feedback from your copter so skim through ",(0,n.kt)("a",{parentName:"p",href:"/betaflight.com/docs/development/Buzzer"},"Buzzer")," and mark the pins that will be used.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Do you want your RC Receiver's RSSI to be sent to the board? ",(0,n.kt)("a",{parentName:"p",href:"/betaflight.com/docs/development/Rssi"},"The RSSI chapter")," explains how. You may or may not need to make an additional connection from your Receiver to the FC.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Would you like to try using a GPS unit to get your aircraft to Loiter or Return-To-Launch? Take a look at the ",(0,n.kt)("a",{parentName:"p",href:"/betaflight.com/docs/development/Gps"},"GPS"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You may also want to read the ",(0,n.kt)("a",{parentName:"p",href:"/betaflight.com/docs/development/Serial"},"Serial")," chapter to determine what extra devices (such as Blackbox, OSD, Telemetry) you may want to use, and how they should be connected.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Now that you know what features you are going to use, and which pins you need, you can go ahead and solder them to your board, if they are not soldered already. Soldering only the pins required for the application may save weight and contribute to a neater looking setup, but if you need to use a new feature later you may have to unmount the board from the craft and solder missing pins, so plan accordingly. Before soldering your FC please review a how-to-solder tutorial to avoid expensive mistakes, practice soldering on some scrap before soldering your FC.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are going to use ",(0,n.kt)("a",{parentName:"p",href:"/betaflight.com/docs/development/Oneshot"},"Oneshot125"),", you may need to enable that on your ESCs using a jumper or flashing them with the latest stable firmware and enable Damped Light in their settings, if it's supported. Refer to the ESCs' documentation or online discussions to determine this."))),(0,n.kt)("h2",{id:"software-setup"},"Software setup"),(0,n.kt)("p",null,"Now that your board has pins on it, you are ready to connect it to your PC and flash it with CF. Install the Chromium browser or Google Chrome to your PC, if you don't have it already, add the ",(0,n.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/cleanflight-configurator/enacoimjcgeinfnnnpajinjgmkahmfgb"},"Cleanflight Configurator")," to it, and start it."),(0,n.kt)("p",null,"Then follow these instructions for ",(0,n.kt)("a",{parentName:"p",href:"/betaflight.com/docs/development/Installation"},"Installation")," of the firmware to the FC."),(0,n.kt)("h2",{id:"cleanflight-configuration"},"Cleanflight Configuration"),(0,n.kt)("p",null,"Your FC should now be running CF, and you should be able to connect to it using the Configurator. If that is not the case, please go back to the previous sections and follow the steps carefully."),(0,n.kt)("p",null,"Now, there are two ways to ",(0,n.kt)("a",{parentName:"p",href:"/betaflight.com/docs/development/Configuration"},"configure CF"),'; via the Configurator\'s tabs (in a "graphical" way, clicking through and selecting/changing values and tickboxes) and using the ',(0,n.kt)("a",{parentName:"p",href:"/betaflight.com/docs/development/Cli"},"Command Line Interface (CLI)"),". Some settings may only be configurable using the CLI and some settings are best configured using the GUI (particularly the ports settings, which aren't documented for the CLI as they're not human friendly)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It is now a good time to setup your RC Receiver and Transmitter. Set the Tx so that it outputs at least 4 channels (Aileron, Elevator, Throttle, Rudder) but preferably more. E.g. you can set channels 5 and 6 to be controlled by 3-position switches, to be used later. Maybe set up EXPO on AIL/ELE/RUD, but you should know that it can also be done in CF's software later. If using RSSI over PPM or PWM, it's now time to configure your Rx to output it on a spare channel.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Connect the Rx to the FC, and the FC to the PC. You may need to power the Rx through a BEC (its 5V rail - observe polarity!).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On your PC, connect to the Configurator, and go to the first tab. Check that the board animation is moving properly when you move the actual board. Do an accelerometer calibration.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Configuration tab: Select your aircraft configuration (e.g. Quad X), and go through each option in the tab to check if relevant for you."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"E.g. you may want to enable ONESHOT125 for Oneshot-capable ESCs.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You may need RX_PPM if you're using an RC Receiver with PPM output etc.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If planning to use the battery measurement feature of the FC, check VBAT under Battery Voltage.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If using analog RSSI, enable that under RSSI. Do not enable this setting if using RSSI injected into the PPM stream.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Motors will spin by default when the FC is armed. If you don't like this, enable MOTOR_STOP.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Also, adjust the minimum, middle and maximum throttle according to these guidelines:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Minimum Throttle - Set this to the minimum throttle level that enables all motors to start reliably. If this is too low, some motors may not start properly after spindowns, which can cause loss of stability and control. A typical value would be 1100."),(0,n.kt)("li",{parentName:"ul"},"Middle Throttle - The throttle level for middle stick position. Many radios use 1500, but some (e.g. Futaba) may use 1520 or other values."),(0,n.kt)("li",{parentName:"ul"},"Maximum Throttle - The maximum throttle level that the ESCs should receive. A typical value would be 2000."),(0,n.kt)("li",{parentName:"ul"},'Minimum Command - This is the "idle" signal level that will be sent to the ESCs when the craft is disarmed, which should not cause the motors to spin. A typical value would be 1000.'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Finally, click Save and Reboot.")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Receiver tab:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Check that the channel inputs move according to your Tx inputs."),(0,n.kt)("li",{parentName:"ul"},"Check that the Channel map is correct along with the RSSI Channel, if you use that."),(0,n.kt)("li",{parentName:"ul"},"Verify the range of each channel goes from ~1000 to ~2000. See also ",(0,n.kt)("a",{parentName:"li",href:"/betaflight.com/docs/development/Controls"},"controls"),". and ",(0,n.kt)("inlineCode",{parentName:"li"},"rx_min_usec")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"rx_max_usec"),"."),(0,n.kt)("li",{parentName:"ul"},"You can also set EXPO here instead of your Tx."),(0,n.kt)("li",{parentName:"ul"},"Click Save!"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Modes tab: Setup the desired modes. See the ",(0,n.kt)("a",{parentName:"p",href:"/betaflight.com/docs/development/Modes"},"modes")," chapter for what each mode does, but for the beginning you mainly need HORIZON, if any.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Before finishing this section, you should calibrate the ESCs, install the FC to the frame, and connect the RSSI cable, buzzer and battery if you have chosen to use those."))),(0,n.kt)("h2",{id:"final-testing-and-safety"},"Final testing and safety"),(0,n.kt)("p",null,"It's important that you have configured CF properly, so that your aircraft does not fly away, or even worse fly into property and people! This is an important step that you should NOT postpone until after your maiden flight. Please do this now, before you head off to the flying field."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"First read the ",(0,n.kt)("a",{parentName:"li",href:"/betaflight.com/docs/development/Safety"},"safety")," section."),(0,n.kt)("li",{parentName:"ul"},"Next, learn how to arm your FC, and about other ",(0,n.kt)("a",{parentName:"li",href:"/betaflight.com/docs/development/Controls"},"controls"),"."),(0,n.kt)("li",{parentName:"ul"},"Next up, setup ",(0,n.kt)("a",{parentName:"li",href:"/betaflight.com/docs/development/Failsafe"},"Failsafe"),". Take your time, do it properly."),(0,n.kt)("li",{parentName:"ul"},"Now, on the bench, without props, test that failsafe works properly, according to the above doc."),(0,n.kt)("li",{parentName:"ul"},"Additionally, test the effect of AIL/ELE input of your Tx. Is the aircraft responding properly? Do the same for RUD input."),(0,n.kt)("li",{parentName:"ul"},"Test the direction of AIL/ELE auto correction. Raise throttle at 30% (no blades!); when you tilt the aircraft, do the motors try to compensate momentarily? This should simulate random wind forces that the FC should counteract"),(0,n.kt)("li",{parentName:"ul"},"Test the direction of AIL/ELE auto correction in HORIZON mode. With throttle at 30%, if you tilt the aircraft so that one motor is lowered towards the ground, does it spin up and stay at high RPM until you level it off again? This tests the auto-leveling direction.")),(0,n.kt)("p",null,"If one of these tests fail, do not attempt to fly, but go back to the configuration phase instead. Some channel may need reversing, or the direction of the board is wrong."),(0,n.kt)("h2",{id:"using-it-aka-flying"},"Using it (AKA: Flying)"),(0,n.kt)("p",null,"Go to the field, turn Tx on, place aircraft on the ground, connect flight battery and wait. Arm and fly. Good luck!\nIf the aircraft won't arm, count the red Warning LED flashes and find out the reason in ",(0,n.kt)("a",{parentName:"p",href:"/betaflight.com/docs/development/Controls"},"Controls"),"."),(0,n.kt)("h2",{id:"advanced-matters"},"Advanced Matters"),(0,n.kt)("p",null,"Some advanced configurations and features are documented in the following pages, but have not been touched-upon earlier:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/betaflight.com/docs/development/Profiles"},"Profiles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/betaflight.com/docs/development/PID%20tuning"},"PID tuning")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/betaflight.com/docs/development/Inflight%20Adjustments"},"In-flight Adjustments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/betaflight.com/docs/development/Blackbox"},"Blackbox logging")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/betaflight.com/docs/development/Sonar"},"Using a Sonar")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/betaflight.com/docs/development/Spektrum%20bind"},"Spektrum Bind")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/betaflight.com/docs/development/Telemetry"},"Telemetry")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/betaflight.com/docs/development/Display"},"Using a Display")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/betaflight.com/docs/development/LedStrip"},"Using a LED strip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"Migrating%20from%20baseflight.md"},"Migrating from baseflight"))))}p.isMDXComponent=!0}}]);