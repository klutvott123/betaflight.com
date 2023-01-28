"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8258],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},p="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=u(n),m=l,g=p["".concat(o,".").concat(m)]||p[m]||h[m]||i;return n?a.createElement(g,r(r({ref:e},d),{},{components:n})):a.createElement(g,r({ref:e},d))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[p]="string"==typeof t?t:l,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70001:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const i={},r="In-flight Adjustments",s={unversionedId:"development/Inflight Adjustments",id:"development/Inflight Adjustments",title:"In-flight Adjustments",description:"With Cleanflight it's possible to make adjustments to various settings by using AUX channels from your transmitter while the aircraft is flying.",source:"@site/docs/development/Inflight Adjustments.md",sourceDirName:"development",slug:"/development/Inflight Adjustments",permalink:"/betaflight.com/docs/development/Inflight Adjustments",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"development",previous:{title:"G-Tune instructions.",permalink:"/betaflight.com/docs/development/Gtune"},next:{title:"Installation",permalink:"/betaflight.com/docs/development/Installation"}},o={},u=[{value:"Warning",id:"warning",level:2},{value:"Recommendations",id:"recommendations",level:2},{value:"Overview",id:"overview",level:2},{value:"Increment/Decrement mode",id:"incrementdecrement-mode",level:3},{value:"Adjustment switches",id:"adjustment-switches",level:4},{value:"Absolute mode",id:"absolute-mode",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Adjustment functions",id:"adjustment-functions",level:3},{value:"Examples",id:"examples",level:2},{value:"Example 1 - 3 Position switch used to adjust pitch/roll rate",id:"example-1---3-position-switch-used-to-adjust-pitchroll-rate",level:3},{value:"Example 2 - 2 Position switch used to enable adjustment of RC rate via a 3 position switch",id:"example-2---2-position-switch-used-to-enable-adjustment-of-rc-rate-via-a-3-position-switch",level:3},{value:"Example 3 - 6 Position switch used to select PID tuning adjustments via a 3 position switch",id:"example-3---6-position-switch-used-to-select-pid-tuning-adjustments-via-a-3-position-switch",level:3},{value:"Example 4 - Use a single 3 position switch to change between 3 different rate profiles",id:"example-4---use-a-single-3-position-switch-to-change-between-3-different-rate-profiles",level:3},{value:"Example 5 - Use a single switch to enable absolute setting of Roll/Pitch P terms from two pots",id:"example-5---use-a-single-switch-to-enable-absolute-setting-of-rollpitch-p-terms-from-two-pots",level:3},{value:"Example 6 - Use a single switch to enable absolute setting of Roll/Pitch P/I/D terms from three pots, selected using a single switch",id:"example-6---use-a-single-switch-to-enable-absolute-setting-of-rollpitch-pid-terms-from-three-pots-selected-using-a-single-switch",level:3},{value:"Configurator examples",id:"configurator-examples",level:3}],d={toc:u};function p(t){let{components:e,...i}=t;return(0,l.kt)("wrapper",(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"in-flight-adjustments"},"In-flight Adjustments"),(0,l.kt)("p",null,"With Cleanflight it's possible to make adjustments to various settings by using AUX channels from your transmitter while the aircraft is flying."),(0,l.kt)("h2",{id:"warning"},"Warning"),(0,l.kt)("p",null,"Changing settings during flight can make your aircraft unstable and crash if you are not careful."),(0,l.kt)("h2",{id:"recommendations"},"Recommendations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Always make adjustments while flying in a large open area."),(0,l.kt)("li",{parentName:"ul"},"Make small adjustments and fly carefully to test your adjustment."),(0,l.kt)("li",{parentName:"ul"},"Give yourself enough flying space and time to adjust to how your changes affect the behaviour of the aircraft."),(0,l.kt)("li",{parentName:"ul"},"Remember to set adjustment channel switches/pots to the center position before powering on your TX and your aircraft."),(0,l.kt)("li",{parentName:"ul"},"If possible configure switch warnings on your transmitter for dedicated adjustment switches."),(0,l.kt)("li",{parentName:"ul"},"A momentary 3 position switch is the best choice of switch for this - i.e. one that re-centers itself when you let go of it.")),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"There are two modes of operation. The first supports adjusting settings by incrementing/decrementing them through use of an aux channel, typically a three position switch, where the middle position makes no change, and the other positions either increment or decrement the selected setting."),(0,l.kt)("p",null,"The other mode is Absolute mode where a pot (knob/slider) may be directly mapped and changes the selected setting to a value based on a center value, corresponding to mid-postion on the pot and a range of \xb1 adjustment at the min/max positions of the pot."),(0,l.kt)("p",null,"Both modes utilise two channels to make an adjustment."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Channel"),(0,l.kt)("th",{parentName:"tr",align:null},"Use"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Range"),(0,l.kt)("td",{parentName:"tr",align:null},"This channel is used to enable an adjustment. When the channel is set to fall withing the specified range, then the corresponding adjustment is enabled. This is similar to mode setting where a given mode is enabled when a channel is within a lower and upper range.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Adjustment"),(0,l.kt)("td",{parentName:"tr",align:null},"This channel is used to control the change to the specified setting")))),(0,l.kt)("p",null,"Settings are not saved automatically, connect a GUI, refresh and save or save using stick position when disarmed.\nPowering off without saving will discard the adjustments."),(0,l.kt)("p",null,"Settings can be saved when disarmed using stick positions: Throttle Low, Yaw Left, Pitch Low, Roll Right."),(0,l.kt)("h3",{id:"incrementdecrement-mode"},"Increment/Decrement mode"),(0,l.kt)("p",null,"Up to 4 RX channels can be used to make different adjustments at the same time."),(0,l.kt)("p",null,"The adjustment the Adjustment Channel makes is controlled by the Range Channel."),(0,l.kt)("p",null,"The available adjustments are listed in ",(0,l.kt)("a",{parentName:"p",href:"#adjustment-functions"},"this table"),"."),(0,l.kt)("p",null,"Example scenarios:\nUp to 4 3-position switches or pots can be used to adjust 4 different settings at the same time.\nA single 2/3/4/5/6/x position switch can be used to make one 3 position switch adjust one setting at a time."),(0,l.kt)("p",null,"Any combination of switches and pots can be used. So you could have 6 POS switch."),(0,l.kt)("h4",{id:"adjustment-switches"},"Adjustment switches"),(0,l.kt)("p",null,"The Adjustment switch is associated with the Adjustment Channel. The switch can be a ON-OFF-ON, POT or momentary ON-OFF-ON switch. The latter is recommended."),(0,l.kt)("p",null,"When the switch is returned to the center position the value will not be increased/decreased."),(0,l.kt)("p",null,"Each time you can press the switch high/low and then return it to the middle the value will change at least once, you do not have to wait before pressing the switch again if you want to increase/decrease at a faster rate. While the adjustment switch held is high/low, the adjustment function applies and increases/decreases the value being adjusted twice a second and the flight controller will beep shorter/longer, respectively. The system works similar to how a keyboard repeat delay works."),(0,l.kt)("p",null,"Hint: With OpenTX transmitters you can combine two momentary OFF-ON switches to control a single channel. You could make it so that a momentary switch on the left of your transmitter decreases the value and a momentary switch on the right increases the value. Experiment with your mixer!"),(0,l.kt)("h3",{id:"absolute-mode"},"Absolute mode"),(0,l.kt)("p",null,"The adjustment is made where the Adjustment Channel is an Aux channel connected to a pot (knob/slider). This provides an easier approach than using the Increment/Decrement mode as it is easier to keep track of the setting."),(0,l.kt)("p",null,"Note that if the same pot is used as the Adjustment Channel to make multiple adjustments, there is a risk of a jump in values of the second setting when switching from the first if the pot is not centered. To avoid this it is recommended that if adjusting two different settings using the same pot, a three position switch be used for the Range Channel, with neither setting associated with the middle position."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"The CLI command ",(0,l.kt)("inlineCode",{parentName:"p"},"adjrange")," is used to configure adjustment ranges."),(0,l.kt)("p",null,"12 adjustment ranges can be defined."),(0,l.kt)("p",null,"Show the current ranges using:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"adjrange")),(0,l.kt)("p",null,"Configure a range using:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"adjrange <index> 0 <range channel> <range start> <range end> <adjustment function> <adjustment channel>")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Index"),(0,l.kt)("td",{parentName:"tr",align:null},"0 - 29"),(0,l.kt)("td",{parentName:"tr",align:null},"Select the adjustment range to configure")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Used as slot before Betaflight 4.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Range Channel"),(0,l.kt)("td",{parentName:"tr",align:null},"0 based index, AUX1 = 0, AUX2 = 1"),(0,l.kt)("td",{parentName:"tr",align:null},"The AUX channel to use to select an adjustment for a switch/pot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Range Start"),(0,l.kt)("td",{parentName:"tr",align:null},"900 - 2100. Steps of 25, e.g. 900, 925, 950..."),(0,l.kt)("td",{parentName:"tr",align:null},"Start of range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Range End"),(0,l.kt)("td",{parentName:"tr",align:null},"900 - 2100"),(0,l.kt)("td",{parentName:"tr",align:null},"End of range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Adjustment function"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#adjustment-functions"},"Adjustment functions table"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Adjustment channel"),(0,l.kt)("td",{parentName:"tr",align:null},"0 based index, AUX1 = 0, AUX2 = 1"),(0,l.kt)("td",{parentName:"tr",align:null},"The channel that is controlled by a 3 Position switch/Pot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Center Value"),(0,l.kt)("td",{parentName:"tr",align:null},"If this is non-zero then Absolute Mode is used for this range otherwise Increment/Decrement Mode is used. In Absolute Mode this value is the value which will be assigned to the setting when the Adjustment Channel is set to mid-position."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Scale Value"),(0,l.kt)("td",{parentName:"tr",align:null},"This specifies the amount that will be subtracted/added to the center value when the Adjustment Channel is at min/max respectively."),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Range Start/End values should match the values sent by your receiver."),(0,l.kt)("p",null,"The Range Channel and the Adjustment Channel can be the same channel. This is useful when you want a single 3 Position switch to be dedicated\nto a single adjustment function regardless of other switch positions."),(0,l.kt)("p",null,"The adjustment function is applied to the adjustment channel when range channel is between the range values.\nThe adjustment is made when the adjustment channel is in the high or low position. high = mid_rc + 200, low = mid_rc - 200. by default this is 1700 and 1300 respectively."),(0,l.kt)("h3",{id:"adjustment-functions"},"Adjustment functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Adjustment"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"RC RATE"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"RC_EXPO"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"THROTTLE_EXPO"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"PITCH_ROLL_RATE"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"YAW_RATE"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"PITCH_ROLL_P"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"PITCH_ROLL_I"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"PITCH_ROLL_D"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"YAW_P"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"YAW_I"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"YAW_D"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"RATE_PROFILE"),(0,l.kt)("td",{parentName:"tr",align:null},"Switch between 3 or 6 rate profiles (uses ",(0,l.kt)("inlineCode",{parentName:"td"},"rate_6pos_switch")," setting)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"PITCH_RATE"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"ROLL_RATE"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"PITCH_P"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"PITCH_I"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"17"),(0,l.kt)("td",{parentName:"tr",align:null},"PITCH_D"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"18"),(0,l.kt)("td",{parentName:"tr",align:null},"ROLL_P"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"19"),(0,l.kt)("td",{parentName:"tr",align:null},"ROLL_I"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"ROLL_D"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"21"),(0,l.kt)("td",{parentName:"tr",align:null},"RC_RATE_YAW"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"22"),(0,l.kt)("td",{parentName:"tr",align:null},"PITCH_ROLL_F"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"23"),(0,l.kt)("td",{parentName:"tr",align:null},"FEEDFORWARD_TRANSITION"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"24"),(0,l.kt)("td",{parentName:"tr",align:null},"HORIZON_STRENGTH"),(0,l.kt)("td",{parentName:"tr",align:null},"Select the horizon strength")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"25"),(0,l.kt)("td",{parentName:"tr",align:null},"PID_AUDIO"),(0,l.kt)("td",{parentName:"tr",align:null},"Select the PID value to be turned into tones")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"26"),(0,l.kt)("td",{parentName:"tr",align:null},"PITCH_F"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"27"),(0,l.kt)("td",{parentName:"tr",align:null},"ROLL_F"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"28"),(0,l.kt)("td",{parentName:"tr",align:null},"YAW_F"),(0,l.kt)("td",{parentName:"tr",align:null},"Step / absolute setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"29"),(0,l.kt)("td",{parentName:"tr",align:null},"OSD_PROFILE"),(0,l.kt)("td",{parentName:"tr",align:null},"Switch between 3 OSD profiles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null},"LED_PROFILE"),(0,l.kt)("td",{parentName:"tr",align:null},"Switch between the RACE / BEACON / STATUS LED strip profiles")))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"example-1---3-position-switch-used-to-adjust-pitchroll-rate"},"Example 1 - 3 Position switch used to adjust pitch/roll rate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"adjrange 0 0 3 900 2100 4 3 0 0\n")),(0,l.kt)("p",null,"explained:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"configure adjrange 0 so that when aux4\n(3) in the range 900-2100 then use adjustment 4 (pitch/roll rate) when aux 4 (3)\nis in the appropriate position."),(0,l.kt)("li",{parentName:"ul"},"note that Center/Scale values are both zero, so this range will use increment/decrement mode.")),(0,l.kt)("h3",{id:"example-2---2-position-switch-used-to-enable-adjustment-of-rc-rate-via-a-3-position-switch"},"Example 2 - 2 Position switch used to enable adjustment of RC rate via a 3 position switch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"adjrange 1 0 0 900 1700 0 2 0 0\nadjrange 2 0 0 1700 2100 1 2 0 0\n")),(0,l.kt)("p",null,"explained:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"configure adjrange 1 so that when aux1\n(0) in the range 900-1700 then do nothing (0) when aux 3 (2) is in any\nposition."),(0,l.kt)("li",{parentName:"ul"},"configure adjrange 2 so that when aux1\n(0) in the range 1700-2100 then use adjustment rc rate (1) when aux 3\n(2) is in the appropriate position."),(0,l.kt)("li",{parentName:"ul"},"note that Center/Scale values are both zero, so this range will use increment/decrement mode.")),(0,l.kt)("p",null,"Without the entire range of aux1 being defined there is nothing that\nwould stop aux 3 adjusting the pitch/roll rate once aux 1 wasn't in the higher\nrange."),(0,l.kt)("h3",{id:"example-3---6-position-switch-used-to-select-pid-tuning-adjustments-via-a-3-position-switch"},"Example 3 - 6 Position switch used to select PID tuning adjustments via a 3 position switch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"adjrange 3 0 1 900 1150 6 3 0 0\nadjrange 4 0 1 1150 1300 7 3 0 0\nadjrange 5 0 1 1300 1500 8 3 0 0\nadjrange 6 0 1 1500 1700 9 3 0 0\nadjrange 7 0 1 1700 1850 10 3 0 0\nadjrange 8 0 1 1850 2100 11 3 0 0\n")),(0,l.kt)("p",null,"explained:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"configure adjrange 3 so that when aux2\n(1) in the range 900-1150 then use adjustment Pitch/Roll P (6) when aux 4\n(3) is in the appropriate position."),(0,l.kt)("li",{parentName:"ul"},"configure adjrange 4 so that when aux2\n(1) in the range 1150-1300 then use adjustment Pitch/Roll I (7) when aux 4\n(3) is in the appropriate position."),(0,l.kt)("li",{parentName:"ul"},"configure adjrange 5 so that when aux2\n(1) in the range 1300-1500 then use adjustment Pitch/Roll D (8) when aux 4\n(3) is in the appropriate position."),(0,l.kt)("li",{parentName:"ul"},"configure adjrange 6 so that when aux2\n(1) in the range 1500-1700 then use adjustment Yaw P (9) when aux 4\n(3) is in the appropriate position."),(0,l.kt)("li",{parentName:"ul"},"configure adjrange 7 so that when aux2\n(1) in the range 1700-1850 then use adjustment Yaw I (10) when aux 4\n(3) is in the appropriate position."),(0,l.kt)("li",{parentName:"ul"},"configure adjrange 8 so that when aux2\n(1) in the range 1850-2100 then use adjustment Yaw D (11) when aux 4\n(3) is in the appropriate position."),(0,l.kt)("li",{parentName:"ul"},"note that Center/Scale values are both zero, so this range will use increment/decrement mode.")),(0,l.kt)("h3",{id:"example-4---use-a-single-3-position-switch-to-change-between-3-different-rate-profiles"},"Example 4 - Use a single 3 position switch to change between 3 different rate profiles"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"adjrange 11 0 3 900 2100 12 3 0 0\n")),(0,l.kt)("p",null,"explained:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"configure adjrange 11 so that when aux4\n(3) in the range 900-2100 then use adjustment Rate Profile (12) when aux 4\n(3) is in the appropriate position."),(0,l.kt)("li",{parentName:"ul"},"note that Center/Scale values are both zero, so this range will use increment/decrement mode.")),(0,l.kt)("p",null,"When the switch is low, rate profile 0 is selected.\nWhen the switch is medium, rate profile 1 is selected.\nWhen the switch is high, rate profile 2 is selected."),(0,l.kt)("h3",{id:"example-5---use-a-single-switch-to-enable-absolute-setting-of-rollpitch-p-terms-from-two-pots"},"Example 5 - Use a single switch to enable absolute setting of Roll/Pitch P terms from two pots"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"adjrange 0 0 4 1450 1550 18 0 40 10\nadjrange 1 0 4 1450 1550 15 1 58 20\n")),(0,l.kt)("p",null,"explained:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"note that Center value is non-zero, so this range will use absolute mode."),(0,l.kt)("li",{parentName:"ul"},"configure adjrange 0 so that when aux5 (3) in the range 1450-1550 then use aux 1 (0) to adjust Roll P Adjustment (18) such that the value will be 40 with the pot centered and 30/50 at min/max."),(0,l.kt)("li",{parentName:"ul"},"configure adjrange 1 so that when aux5 (3) in the range 1450-1550 then use aux 2 (0) to adjust Pitch P Adjustment (15) such that the value will be 58 with the pot centered and 38/78 at min/max.")),(0,l.kt)("h3",{id:"example-6---use-a-single-switch-to-enable-absolute-setting-of-rollpitch-pid-terms-from-three-pots-selected-using-a-single-switch"},"Example 6 - Use a single switch to enable absolute setting of Roll/Pitch P/I/D terms from three pots, selected using a single switch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"adjrange 0 0 4 950 1050 18 0 40 20\nadjrange 1 0 4 950 1050 19 1 107 53\nadjrange 2 0 4 950 1050 20 2 76 38\nadjrange 3 0 4 1950 2050 15 0 63 16\nadjrange 4 0 4 1950 2050 16 1 138 69\nadjrange 5 0 4 1950 2050 17 2 66 33\n")),(0,l.kt)("p",null,"explained:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"note that Center value is non-zero, so this range will use absolute mode.")),(0,l.kt)("p",null,"This assigns pots aux 1, aux 2, and aux 3 respectively to control P, I and D settings with the pots at mid-position giving the default P/I/D values and providing a range of adjustment of +/- 50%. When the aux 5 switch is in one end position then roll P/I/D will be adjusted and when the aux 5 switch is in the other end position, pitch P/I/D will be adjusted. In the aux 5 switch middle position nether will be adjusted. Thus one could center the pots, select roll on aux 5 and then adjust the P/I/D values in flight. Then land, move the aux 5 switch to center, center the pots, select pitch on the switch and then again adjust P/I/D in flight."),(0,l.kt)("h3",{id:"configurator-examples"},"Configurator examples"),(0,l.kt)("p",null,"Note that the configurator does not currently support the Center/Scale values, however it may still be used to setup the ranges and then the CLI may be used to set the Center/Scale values."),(0,l.kt)("p",null,"The following 5 images show valid configurations. In all cases the entire usable range for the Range Channel is used."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Configurator example 1",src:n(95147).Z,width:"1024",height:"81"})),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Configurator example 2",src:n(60806).Z,width:"1024",height:"79"})),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Configurator example 3",src:n(78519).Z,width:"1024",height:"282"})),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Configurator example 4",src:n(4284).Z,width:"1030",height:"481"})),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Configurator example 5",src:n(39460).Z,width:"1024",height:"161"})),(0,l.kt)("p",null,"The following examples shows ",(0,l.kt)("strong",{parentName:"p"},"incorrect")," configurations - the entire usable range for the Range Channel is not used in both cases."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Configurator example 6",src:n(60280).Z,width:"1024",height:"161"}),"\n",(0,l.kt)("img",{alt:"Configurator example 7",src:n(66992).Z,width:"1024",height:"240"})),(0,l.kt)("p",null,"In the following example, the incorrect configuraton (above) has been corrected by adding a range that makes 'No changes'."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Configurator example 7",src:n(7301).Z,width:"1024",height:"236"})))}p.isMDXComponent=!0},60280:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/adjustments-incorrect-config-1-de9951a9117f098062f5ca54ee039000.png"},7301:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/adjustments-incorrect-config-2-corrected-c20cc741aa7fe1613c90e8dca216e512.png"},66992:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/adjustments-incorrect-config-2-d993701a91fbd107c86b64d4b31b96bb.png"},4284:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/adjustments-pid-via-6pos-and-3pos-4941db264e5b9841bc38ef08edea48c5.png"},78519:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/adjustments-pid-via-two-3pos-0602923d4e254ebcb0183c8d473e78c6.png"},60806:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/adjustments-pitch-and-roll-rate-adjustment-via-3pos-23aeb38d5d06f99fac654f3b6425f1db.png"},95147:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/adjustments-rate-profile-selection-via-3pos-5796014226f83baac52a8d2e2592f6a9.png"},39460:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/adjustments-rates-via-a-2pos-and-3pos-fe2eebdd145d9b51c461ec9cfb89013c.png"}}]);