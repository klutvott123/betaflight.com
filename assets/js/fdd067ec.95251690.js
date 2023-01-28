"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1988],{3905:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>m});var r=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var s=r.createContext({}),u=function(t){var e=r.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):l(l({},e),t)),o},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},d="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,a=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=u(o),c=n,m=d["".concat(s,".").concat(c)]||d[c]||h[c]||a;return o?r.createElement(m,l(l({ref:e},p),{},{components:o})):r.createElement(m,l({ref:e},p))}));function m(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=o.length,l=new Array(a);l[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[d]="string"==typeof t?t:n,l[1]=i;for(var u=2;u<a;u++)l[u]=o[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},86383:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const a={},l="NAME",i={unversionedId:"wiki/boards/MATEKF411",id:"wiki/boards/MATEKF411",title:"NAME",description:"MATEKSYS F411-MINI",source:"@site/docs/wiki/boards/MATEKF411.md",sourceDirName:"wiki/boards",slug:"/wiki/boards/MATEKF411",permalink:"/betaflight.com/docs/wiki/boards/MATEKF411",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"NAME",permalink:"/betaflight.com/docs/wiki/boards/MATEKF405"},next:{title:"Board - MATEKSYS F722-SE",permalink:"/betaflight.com/docs/wiki/boards/MATEKF722-SE"}},s={},u=[{value:"Description",id:"description",level:2},{value:"MCU, Sensors and Features",id:"mcu-sensors-and-features",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Features",id:"features",level:3},{value:"Manufacturers and Distributors",id:"manufacturers-and-distributors",level:2},{value:"Designers",id:"designers",level:2},{value:"Maintainers",id:"maintainers",level:2},{value:"FAQ &amp; Known Issues",id:"faq--known-issues",level:2},{value:"Example 5: Setup for Matek F411 mini for Tricopter in Betaflight 3.2.2 by Flashted",id:"example-5-setup-for-matek-f411-mini-for-tricopter-in-betaflight-322-by-flashted",level:4}],p={toc:u};function d(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"name"},"NAME"),(0,n.kt)("p",null,"MATEKSYS F411-MINI"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://www.mateksys.com/downloads/FC/MATEK_F411-MINI.jpg",alt:"Matek F411-MINI"})),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"F411+MPU6000, w/ BFOSD, No blackbox"),(0,n.kt)("h2",{id:"mcu-sensors-and-features"},"MCU, Sensors and Features"),(0,n.kt)("h3",{id:"hardware"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MCU: STM32F411CEU6"),(0,n.kt)("li",{parentName:"ul"},"IMU: MPU6000(SPI)"),(0,n.kt)("li",{parentName:"ul"},"OSD: BetaFlight OSD w/ AT7456E chip"),(0,n.kt)("li",{parentName:"ul"},"Compass & Baro: no"),(0,n.kt)("li",{parentName:"ul"},"VCP: Yes"),(0,n.kt)("li",{parentName:"ul"},"Hardware UARTS: 1, 2"),(0,n.kt)("li",{parentName:"ul"},"Blackbox: no"),(0,n.kt)("li",{parentName:"ul"},"PPM/UART Shared: UART2-RX"),(0,n.kt)("li",{parentName:"ul"},"Battery Voltage Sensor: Yes 1:10"),(0,n.kt)("li",{parentName:"ul"},"Currsnt Sensor: No (FCHUB-A option)"),(0,n.kt)("li",{parentName:"ul"},"Integrated Voltage Regulator: 5V/2A"),(0,n.kt)("li",{parentName:"ul"},"Brushed Motor Mosfets: No"),(0,n.kt)("li",{parentName:"ul"},"Buttons: BOOT button"),(0,n.kt)("li",{parentName:"ul"},"6 PWM / DShot outputs"),(0,n.kt)("li",{parentName:"ul"},"WS2812 Led Strip : Yes"),(0,n.kt)("li",{parentName:"ul"},"Beeper : Yes")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Built in inverter for SBUS input (UART1-RX)"),(0,n.kt)("li",{parentName:"ul"},"6x DShot outputs without conflict"),(0,n.kt)("li",{parentName:"ul"},"VCP, UART1, UART2")),(0,n.kt)("h2",{id:"manufacturers-and-distributors"},"Manufacturers and Distributors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Matek Systems",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.mateksys.com/?portfolio=f411-MINI"},"F411-MINI"))))),(0,n.kt)("h2",{id:"designers"},"Designers"),(0,n.kt)("p",null,"Matek Systems ",(0,n.kt)("a",{parentName:"p",href:"http://www.mateksys.com"},"www.mateksys.com")),(0,n.kt)("h2",{id:"maintainers"},"Maintainers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hardware: Matek Systems")),(0,n.kt)("h2",{id:"faq--known-issues"},"FAQ & Known Issues"),(0,n.kt)("p",null,"Setup Guide ",(0,n.kt)("a",{parentName:"p",href:"http://www.mateksys.com/?portfolio=f411-MINI"},"http://www.mateksys.com/?portfolio=f411-MINI")),(0,n.kt)("p",null,"Matek FC Facebook Group: ",(0,n.kt)("a",{parentName:"p",href:"https://www.facebook.com/groups/1882519175321708/"},"https://www.facebook.com/groups/1882519175321708/")),(0,n.kt)("hr",null),(0,n.kt)("h4",{id:"example-5-setup-for-matek-f411-mini-for-tricopter-in-betaflight-322-by-flashted"},"Example 5: Setup for Matek F411 mini for Tricopter in Betaflight 3.2.2 by Flashted"),(0,n.kt)("p",null,"If Firmware update is needed on F411, it is best done in the CLI."),(0,n.kt)("p",null,"I have found these instructions work with the Betaflight 3.2.2, Something has changed in the higher versions that have made changes to how the tail servo outputs, and this method does not work with Betaflight 3.4.1, or higher."),(0,n.kt)("p",null,"I have not tried between version 3.2.2 - 3.4.0 either. I am at the moment trying to figure out what has changed, and why, but, if you want to try with higher versions, try it, and try to figure it out. Betaflight 3.2.2 works with a minimum of effort to get your craft flying."),(0,n.kt)("p",null,"In the future, I want to experiment with GPS rescue for tricopter, which Betaflight 3.2.2 does not support, so I am going to go foward to version 3.4.1 which supports GPS rescue, and start there."),(0,n.kt)("p",null,"If you power down the board, press the bootloader button on the Matek F411 flight controller, and plug back in like a lot of other boards, it does not enter bootloader mode, and there is NO blinking led confirming bootloader mode, at least with my windows 10 laptop. It does not work."),(0,n.kt)("p",null,"If computer can't detect it, reinstall DFU drivers with zadig or use this ",(0,n.kt)("a",{parentName:"p",href:"https://impulserc.blob.core.windows.net/utilities/ImpulseRC_Driver_Fixer.exe"},"https://impulserc.blob.core.windows.net/utilities/ImpulseRC_Driver_Fixer.exe")),(0,n.kt)("p",null,"To enter bootloader mode in CLI:"),(0,n.kt)("p",null,"In CLI"),(0,n.kt)("p",null,"Type"),(0,n.kt)("p",null,"bl"),(0,n.kt)("p",null,"enter"),(0,n.kt)("p",null,"Then bootloader mode is enabled, and newer firmware can be flashed."),(0,n.kt)("p",null,'Do a full CLI dump, to have a reference to the original file before making ANY changes. You may need a fixed starting point in case you have to start over. You must assign it to be a tricopter "first", and then "save and reboot" it as a tricopter so that all resources, and their designations will show up in the CLI.'),(0,n.kt)("p",null,"Setup:"),(0,n.kt)("p",null,"The first servo output channel is used for tail servo\nThe first motor output channel is used for tail motor\nThe second motor output channel is used for right motor\nThe third motor output channel is used for left motor."),(0,n.kt)("p",null,"The 2 front motors face forward and (tail) rear motor / servo facing towards you."),(0,n.kt)("p",null,"On the board:"),(0,n.kt)("p",null,"Motor 1 - (rear) to motor output pin S1"),(0,n.kt)("p",null,"Motor 2 (right) to motor output pin S2"),(0,n.kt)("p",null,"Motor 3 (left) to motor output pin S3"),(0,n.kt)("p",null,"Motor 4 motor output pin S4 is free, as this is a Tricopter."),(0,n.kt)("p",null,"Motor pin 4 will not work for tail servo due to timing issue."),(0,n.kt)("p",null,"(Tail servo setup is explained below, keep reading)"),(0,n.kt)("p",null,"If you need more outputs for servos, or as I needed strobes, motor 4 (S4) can't be remapped to servo if motor 3 (S3) is assigned to a motor. If S5 is used for a servo, S6 can be remapped to a servo also. I used S5 for telemetry in Taranis."),(0,n.kt)("p",null,"You can also use RSSI pad or LED pads for servo outputs."),(0,n.kt)("p",null,"I chose to try to disable motor 4, and noticed that I lost motor 2 when I tried to calibrate the esc's due to some Betaflight strangeness. I re-asigned motor 4 back to the original assignment, and motor 2 worked again, no problems. Go figure..."),(0,n.kt)("p",null,"In the BetaFlight GUI in the Receiver Tab is a selection for how the connection to the model is setup."),(0,n.kt)("p",null,"Betaflight Defaults to AETR1234 Aileron, Elevator, Throttle, Rudder(yaw) Aux 1 2 3 4."),(0,n.kt)("p",null,"This is an accepted standard setup on Taranis."),(0,n.kt)("p",null,"In the Configuration tab:"),(0,n.kt)("p",null,"feature SERVO_TILT"),(0,n.kt)("p",null,"feature CHANNEL_FOWARDING"),(0,n.kt)("p",null,"Need to be OFF."),(0,n.kt)("p",null,"Selecting TRICOPTER sets yaw output to servo automaticly."),(0,n.kt)("p",null,"How to set the tail servo:"),(0,n.kt)("p",null,"I chose to use pin 6 in my setup for tail servo, as pin 5 in my setup is used for telemetry, as I stated earlier."),(0,n.kt)("p",null,"In the CLI:"),(0,n.kt)("p",null,"Type"),(0,n.kt)("p",null,"resource motor 6 none"),(0,n.kt)("p",null,"save"),(0,n.kt)("p",null,"Then the pin will be free."),(0,n.kt)("p",null,"Pin on board is S6, and B10 is the location of the pin."),(0,n.kt)("p",null,"Type:"),(0,n.kt)("p",null,"resource servo 1 B10."),(0,n.kt)("p",null,"save"),(0,n.kt)("p",null,"Nothing needs to be changed in the Servos tab for movement."),(0,n.kt)("p",null,"Do not draw power from the board with a servo especially on a tricopter."),(0,n.kt)("p",null,"Positive, black negative are going to a pdb 5v output."),(0,n.kt)("p",null,"The yellow or white wire, signal wire can be connected to motor pin 5, motor pin 6, 7 or 8, will work."),(0,n.kt)("p",null,"IF you want to disable the tail servo when it`s not armed, go to the CLI."),(0,n.kt)("p",null,"Type:"),(0,n.kt)("p",null,"set tri_unarmed_servo = OFF"),(0,n.kt)("p",null,"save"),(0,n.kt)("p",null,"Or if you want it on."),(0,n.kt)("p",null,"Type:"),(0,n.kt)("p",null,"set tri_unarmed_servo = ON"),(0,n.kt)("p",null,"save"),(0,n.kt)("p",null,"Now check if your servo/motor are tilting in the correct direction."),(0,n.kt)("p",null,"If you move your yaw stick to the left, the motor must tilt to the right. If not, there are 2 ways to fix this."),(0,n.kt)("p",null,"In CLI:"),(0,n.kt)("p",null,"Type"),(0,n.kt)("p",null,"Set yaw_control_direction = -1"),(0,n.kt)("p",null,"save"),(0,n.kt)("p",null,"If you quickly move your tail to the right the motor must tilt quickly to the left, and vice versa."),(0,n.kt)("p",null,"You can just reverse the yaw direction on your Tx, but it is better to do it in the GUI, so the flight controller does not have to process the data."),(0,n.kt)("p",null,"Set the endpoints in the GUI so you have 40 degrees deflection in both directions, and neutral at as level as you can get it."),(0,n.kt)("p",null,"An analog servo works as will a digital one in most cases my directions were not reversed with an analog servo, but may be with a digital."),(0,n.kt)("p",null,"Hopes this helps."),(0,n.kt)("p",null,"Cheers!!!"),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);