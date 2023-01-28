"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3243],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=u(a),p=o,m=d["".concat(s,".").concat(p)]||d[p]||c[p]||n;return a?i.createElement(m,r(r({ref:t},h),{},{components:a})):i.createElement(m,r({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<n;u++)r[u]=a[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},14478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var i=a(87462),o=(a(67294),a(3905));const n={},r="GPS Rescue before V4.1",l={unversionedId:"wiki/archive/GPS-Rescue-Mode",id:"wiki/archive/GPS-Rescue-Mode",title:"GPS Rescue before V4.1",description:"WHAT THIS IS:",source:"@site/docs/wiki/archive/GPS-Rescue-Mode.md",sourceDirName:"wiki/archive",slug:"/wiki/archive/GPS-Rescue-Mode",permalink:"/betaflight.com/docs/wiki/archive/GPS-Rescue-Mode",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"GPS Rescue 4.1 to 4.3",permalink:"/betaflight.com/docs/wiki/archive/GPS-Rescue-Mode-v4-1-to-v4-3"},next:{title:"GPS Rescue 4.4",permalink:"/betaflight.com/docs/wiki/archive/GPS-Rescue-v4-4"}},s={},u=[{value:"Go to the Betaflight Modes tab and add a switch for GPS Rescue Mode. Verify that the mode actually gets activated (of course no props).",id:"go-to-the-betaflight-modes-tab-and-add-a-switch-for-gps-rescue-mode-verify-that-the-mode-actually-gets-activated-of-course-no-props",level:3},{value:"At this point you are ready to test Rescue Mode.",id:"at-this-point-you-are-ready-to-test-rescue-mode",level:3},{value:"We suggest the following procedure:",id:"we-suggest-the-following-procedure",level:2},{value:"VERY IMPORTANT: if your arrow does not point towards home, <strong>DO NOT</strong> activate GPS Rescue. Your quad will try to fly in the direction of the arrow if you do.",id:"very-important-if-your-arrow-does-not-point-towards-home-do-not-activate-gps-rescue-your-quad-will-try-to-fly-in-the-direction-of-the-arrow-if-you-do",level:3},{value:"IMPORTANT: be ready to deactivate the mode and take back control if your quad does not point towards you and starts making its way home.",id:"important-be-ready-to-deactivate-the-mode-and-take-back-control-if-your-quad-does-not-point-towards-you-and-starts-making-its-way-home",level:3},{value:"DEALING WITH FAILURES / SANITY CHECKS (VERY IMPORTANT):",id:"dealing-with-failures--sanity-checks-very-important",level:2},{value:"Arm without a GPS Fix",id:"arm-without-a-gps-fix",level:2},{value:"Rescue not available",id:"rescue-not-available",level:2},{value:"Common pitfalls",id:"common-pitfalls",level:2},{value:"Common pitfalls for old versions",id:"common-pitfalls-for-old-versions",level:3},{value:"Version History",id:"version-history",level:2}],h={toc:u};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gps-rescue-before-v41"},"GPS Rescue before V4.1"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WHAT THIS IS:")),(0,o.kt)("p",null,"GPS Rescue Mode is intended to bring your quad back autonomously in case of an emergency such as loss of video or radio link. ",(0,o.kt)("strong",{parentName:"p"},"The only purpose is to bring the quad back into range so you can retake control as soon as possible.")," It is not meant to be a reliable Return to Home mode. Keep this in mind, and (other than for initial testing) only activate it to avoid losing your quad. In order to increase the probability of GPS Rescue's successful operation, please read this document and configure your system as best as possible for your particular environment and flying style."),(0,o.kt)("h1",{id:"what-this-is-not"},(0,o.kt)("strong",{parentName:"h1"},"WHAT THIS IS NOT:")),(0,o.kt)("p",null,'GPS Rescue is not a full "Return To Home" (RTH) function. It is not meant to be a tool to autonomously fly your quad home and you should not try and use it this way. It has no ability to auto-land and will intentionally "soft-crash" when it approaches the home point. Its entire purpose is to return the quad closer to home ',(0,o.kt)("strong",{parentName:"p"},"so the pilot can resume control")," in the event of signal loss. The pilot should resume control as soon as possible and not rely on GPS Rescue to fly home."),(0,o.kt)("h1",{id:"requirements"},(0,o.kt)("strong",{parentName:"h1"},"REQUIREMENTS")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GPS is required. The recommended models are Ublox m8n variants. This has been tested with 18x18mm m8n units, the Beitian BN 880 and other similar models."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Accelerometer must be enabled and properly calibrated"),", Rescue Mode needs it to keep the quad leveled."),(0,o.kt)("li",{parentName:"ul"},"Barometer is optional but recommended. We have tested with both on-board and external (i2c) units."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"This mode does not require a compass but will use one if available.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"3D mode is not supported.")," If you have the 3D feature enabled GPS Rescue will be disabled.")),(0,o.kt)("h1",{id:"disclaimer"},(0,o.kt)("strong",{parentName:"h1"},"DISCLAIMER"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This is an experimental feature."),(0,o.kt)("li",{parentName:"ul"},"Use with extreme caution."),(0,o.kt)("li",{parentName:"ul"},"This documentation WILL change so check this page often."),(0,o.kt)("li",{parentName:"ul"},"Unless stated otherwise, this documentation refers to the last stable release (currently BF4.0)"),(0,o.kt)("li",{parentName:"ul"},"If you plan on using this as a failsafe method you should ABSOLUTELY enable sanity checks!")),(0,o.kt)("h1",{id:"prerequisite"},"PREREQUISITE:"),(0,o.kt)("p",null,'Before configuring or testing GPS Rescue, you must calibrate the accelerometer and ensure that angle mode works properly. Set up the "ANGLE" flight mode and test in flight to ensure that the craft self-levels and behaves normally. If the craft does not properly level then recalibrate the accelerometer and test again. GPS Rescue uses angle mode so if this is not working properly GPS Rescue will be unable to recover the craft and may cause it to fly in the wrong direction.'),(0,o.kt)("h1",{id:"setting-up-gps-rescue"},"Setting up GPS Rescue"),(0,o.kt)("p",null,"In order to set up GPS Rescue on your quad, it is highly recommended that you follow the complete setup procedure from scratch. This procedure is meant for practicing in a controlled environment and fully understanding the behaviour and limitations of GPS Rescue. Using GPS Rescue out of the box (copying someone else's configuration) will diminish the chances of success."),(0,o.kt)("h3",{id:"go-to-the-betaflight-modes-tab-and-add-a-switch-for-gps-rescue-mode-verify-that-the-mode-actually-gets-activated-of-course-no-props"},"Go to the Betaflight Modes tab and add a switch for GPS Rescue Mode. Verify that the mode actually gets activated (of course no props)."),(0,o.kt)("p",null,"Then configure the following parameters in the cli:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"set gps_rescue_initial_alt=[number] (default is 50)")),(0,o.kt)("p",null,"This is the most important parameter. When Rescue Mode is activated, your quad will point home and try to climb to a safe altitude relative to your takeoff point. This altitude will either be this parameter, or the maximum altitude recorded during flight +15m, whichever is highest. I personally like to make it 70 or 80 meters."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"set gps_rescue_ground_speed=[number] (default is 2000)")),(0,o.kt)("p",null,"This is the speed at which your quad will try to come back, in centimeters per second. I like 1500 (about 35 mph), but this setting depends on how and where you fly."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"set gps_rescue_angle=[number] (default is 32)")),(0,o.kt)("p",null,"This is the maximum allowed tilt angle for your quad when coming home. This setting may prevent it to reaching full speed, so you may have to experiment with it if you change the defaults. Note that the higher the angle, the harder it will be for the altitude controller to keep a stable altitude. When there is a chance of returning into head winds I like to set this parameter to 45 degrees."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"set gps_rescue_descent_dist =[number] (default is 200)")),(0,o.kt)("p",null,"This is the distance, in meters, at which your quad will start descending towards home."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"set gps_rescue_ascend_rate = [number] (default is 500)")," (added in betaflight 4.1)"),(0,o.kt)("p",null,"This is the vertical speed at which your quad will climb, espressed in centimeters for second"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"set gps_rescue_descend_rate = [number] (default is 150)")," (added in betaflight 4.1)"),(0,o.kt)("p",null,"This is the vertical speed at which your quad will descend, espressed in centimeters for second"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gps_rescue_throttle_min")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"gps_rescue_throttle_max")," in betaflight 4.1 only limit the escursion of the the new pid controller(",(0,o.kt)("a",{parentName:"p",href:"https://github.com/betaflight/betaflight/pull/8015"},"https://github.com/betaflight/betaflight/pull/8015"),")"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gps_rescue_alt_mode = [MAX_ALT, FIXED_ALT, CURRENT_ALT]")," (added in betaflight 4.1)"),(0,o.kt)("p",null,"now we can set the altitude of gps rescue"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MAX_ALT")," is the old setting, the altitude will be ",(0,o.kt)("inlineCode",{parentName:"p"},"gps_rescue_initial_alt"),", or the maximum altitude recorded during flight +15m"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FIXED_ALT"),", the quad will always try to return to the height set (",(0,o.kt)("inlineCode",{parentName:"p"},"gps_rescue_initial_alt"),")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CURRENT_ALT"),", the quad will return maintaining the readed altitude during the rescue activation (not suggested)"),(0,o.kt)("h3",{id:"at-this-point-you-are-ready-to-test-rescue-mode"},"At this point you are ready to test Rescue Mode."),(0,o.kt)("p",null,"Wait for your gps to get a good fix.\nBy default your quad will not arm if you have less than ",(0,o.kt)("inlineCode",{parentName:"p"},"gps_rescue_min_sats")," (default is 8) satellites."),(0,o.kt)("h2",{id:"we-suggest-the-following-procedure"},"We suggest the following procedure:"),(0,o.kt)("p",null,"Fly in a straight line for at least 100 meters past your descent distance. For example, if your descent distance setting is 150 meters, fly to 250 meters. As you keep flying in a straight line, the home arrow should adjust to point towards home."),(0,o.kt)("h3",{id:"very-important-if-your-arrow-does-not-point-towards-home-do-not-activate-gps-rescue-your-quad-will-try-to-fly-in-the-direction-of-the-arrow-if-you-do"},"VERY IMPORTANT: if your arrow does not point towards home, ",(0,o.kt)("strong",{parentName:"h3"},"DO NOT")," activate GPS Rescue. Your quad will try to fly in the direction of the arrow if you do."),(0,o.kt)("p",null,"Activate GPS Rescue."),(0,o.kt)("h3",{id:"important-be-ready-to-deactivate-the-mode-and-take-back-control-if-your-quad-does-not-point-towards-you-and-starts-making-its-way-home"},"IMPORTANT: be ready to deactivate the mode and take back control if your quad does not point towards you and starts making its way home."),(0,o.kt)("p",null,"If everything goes well, your quad will come back towards you and start descending. Do not let it get too close to the ground or to yourself because the landing functionality is not included in current builds. Your quad may just crash near you or overshoot you."),(0,o.kt)("p",null,"You may have noticed that the quad had a hard time keeping a stable altitude. Sometimes this happens when the GPS altitude reading is unstable, so the controller is aiming for a moving target. If you had a very stable altitude reading and the quad still could not stabilize within ten meters of your desired target altitude, you may have to adjust the altitude throttle PID gains. These are the parameters:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gps_rescue_throttle_P"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"gps_rescue_throttle_I "),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"gps_rescue_throttle_D")),(0,o.kt)("p",null,"We do not expect that most people will have to fine tune the navigation speed gains, but just in case the PID gains are:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gps_rescue_velocity_P = 80"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"gps_rescue_velocity_I = 10"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"gps_rescue_velocity_D = 20")),(0,o.kt)("p",null,"After your quad reliably returns home once, you may want to test it at progressively larger distances and directions. When you have a reasonable level of trust in the feature, you may want to set your failsafe to GPS_RESCUE:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"set failsafe_procedure = GPS-RESCUE")),(0,o.kt)("p",null,"With this setting, GPS Rescue will activate in the event of a failsafe."),(0,o.kt)("p",null,"v4.0.x notes - However, it will return control to the user as soon as the radio link comes back. During this time the user should either activate Rescue Mode manually on the radio, just so that there cannot be an unexpected transition to manual control, or be ready to take over control at any moment. Our recommended approach is the first one, which requires having Rescue Mode on a switch if you want to use it for failsafe as well."),(0,o.kt)("p",null,"v4.1 and beyond - After the RC link is restored, Betaflight now requires that any combination of roll/pitch/yaw inputs be moved beyond the ",(0,o.kt)("inlineCode",{parentName:"p"},"failsafe_stick_threshold")," percentage value before failsafe will be exited and control returned to the pilot. The default for this setting is 30 which means you need to move roll, pitch, or yaw at least 30% off center before it will cancel Failsafe and return control. You may choose to reduce that setting value if you need a less abrupt transition from failsafe to full control."),(0,o.kt)("p",null,"Additionally the failsafe procedure can be activated in the Failsafe tab of the configurator, or by using the OSD menus (",(0,o.kt)("inlineCode",{parentName:"p"},"FEATURES > FAILSAFE"),"). The OSD menus setting is also convenient to disable GPS Rescue on failsafe in the field if you are flying in restricted or limited airspace (like indoors or among trees). Be sure to reenable when appropriate."),(0,o.kt)("h2",{id:"dealing-with-failures--sanity-checks-very-important"},"DEALING WITH FAILURES / SANITY CHECKS (VERY IMPORTANT):"),(0,o.kt)("p",null,"If you're using rescue mode in a supervised fashion (as a switch only with video), or in a place with no danger to surroundings (over water, etc), sanity checks are entirely optional. If you plan on setting this as a failsafe (and most of the time even if you do not) you should highly consider enabling these."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"set gps_rescue_sanity_checks = RESCUE_SANITY_ON")),(0,o.kt)("p",null,"You can also set this to ",(0,o.kt)("inlineCode",{parentName:"p"},"RESCUE_SANITY_FS_ONLY")," if you want it to only matter in a failsafe (unsupervised) condition."),(0,o.kt)("p",null,"Sanity checks will ensure that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GPS receiver is still connected to the FC"),(0,o.kt)("li",{parentName:"ul"},"GPS receiver is sending a valid GPS Fix"),(0,o.kt)("li",{parentName:"ul"},"Quad has not experienced a big shake (probably due to a crash)"),(0,o.kt)("li",{parentName:"ul"},"Number of Sats is equal or above gps_min_sats"),(0,o.kt)("li",{parentName:"ul"},"Quad gets closer to the home point after reaching initial altitude")),(0,o.kt)("p",null,"If any of the conditions is not met, the Rescue operation will be aborted, meaning the quad will be dropped. However, the last two conditions have a few seconds of tolerance before getting triggered. Also, if the quad is not getting closer and a magnetometer is being used, Rescue will attempt to use GPS orientation as a second chance, but if a flyaway is still detected, the operation will be definitely aborted."),(0,o.kt)("h2",{id:"arm-without-a-gps-fix"},"Arm without a GPS Fix"),(0,o.kt)("p",null,"By default, Betaflight will not let arm without a GPS Fix if you have GPS Rescue configured in a switch or as a failsafe procedure. Sometimes you might want to fly without a GPS Fix (maybe you're in a zone with poor coverage, or want to do a quick reconnaissance flight meanwhile sats are acquired) at the expense of GPS Rescue being deactivated. You can achieve this by setting:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"set gps_rescue_allow_arming_without_fix = ON")),(0,o.kt)("p",null,"With this value, you can take off without a GPS Fix, but ",(0,o.kt)("strong",{parentName:"p"},"the GPS Rescue will not be available during the flight"),". A warning (RESCUE OFF) will appear in the OSD to make you aware of that.\nIf a proper number of satellites are acquired while flying, to enable GPS Rescue you must land, disarm and arm again."),(0,o.kt)("h2",{id:"rescue-not-available"},"Rescue not available"),(0,o.kt)("p",null,"If GPS Rescue is mapped to a switch and/or set as a failsafe procedure, a minimum set of conditions will be continuously checked (GPS receiver connected, valid GPS fix, min sats). In the event of any condition not being met, a warning (RESCUE N/A) will be shown on the OSD. This is only a warning, if Rescue is activated while the warning is on screen, a grace period will still be taken into account for the sanity checks. This warning is shown regardless of the sanity checks being enabled."),(0,o.kt)("h2",{id:"common-pitfalls"},"Common pitfalls"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensure that you are flying further than the minimum distance to home (100m by default) before testing GPS Rescue. The minimum distance can be set in the CLI using ",(0,o.kt)("inlineCode",{parentName:"li"},"set gps_rescue_min_dth = <meters>"),". At distances less than this, GPS rescue will cause the quad to drop."),(0,o.kt)("li",{parentName:"ul"},"In some particular setups, the accelerometer can drift over time and this can avoid GPS Rescue to work properly. This can be checked by flying for a long time and then activating angle mode, if the quad does not get to a nearly perfect stable orientation please do not use GPS Rescue on this quad."),(0,o.kt)("li",{parentName:"ul"},"some GPS units need configuration with U-Center to work. Use ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=8FIi_xuH4Vo"},"this video")," by Painless360 for setup."),(0,o.kt)("li",{parentName:"ul"},"GPS Rescue is still actively maintained/developed, so if you're not using the last stable Betaflight release, chances are you could hit a known issue. Please be sure to use the last stable release (currently 4.0)."),(0,o.kt)("li",{parentName:"ul"},"GPS Rescue is not and will never be completely reliable, so it should never be used as the only recovery measure. Showing lat/lon GPS Coordinates on the OSD (and recording the flight with a DVR), logging the telemetry (including GPS coordinates) in the Radio TX or using an autonomous beeper are some measures that should be in place even before testing GPS Rescue.")),(0,o.kt)("h3",{id:"common-pitfalls-for-old-versions"},"Common pitfalls for old versions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For Betaflight versions prior to 4.0, it's highly encouraged to enable Air Mode, and optionally to finetune failsafe Stage1 settings, as a workaround for the crash detection issue immediately after activating Rescue Mode. Basically, ensure your settings will avoid the quad to be free-falling when entering into Stage2."),(0,o.kt)("li",{parentName:"ul"},"When changing failsafe parameters with Betaflight Configurator 10.4 or lower, the failsafe procedure will be silently reset. Ensure that you set the failsafe procedure manually on CLI after saving modifications on the failsafe tab."),(0,o.kt)("li",{parentName:"ul"},"Every time the quad is armed, the home point is updated. Prior to BF 4.0, home point was updated on disarm but could be missed if switching rapidly. Best practice for launching in all versions is to arm, wait a few seconds until home point shows up in osd with 0 distance, and then start flying. Otherwise, disarm, wait a few seconds and repeat. Since Betaflight 4.0 you can use this cli command ",(0,o.kt)("inlineCode",{parentName:"li"},"set gps_set_home_point_once = ON")," in this way only the first arm after the battery is connected will be used as home point."),(0,o.kt)("li",{parentName:"ul"},'If you\'re using Crossfire, make sure to configure the Failsafe parameter as "Cut" on your "CROSSFIRE RX" menu.')),(0,o.kt)("h2",{id:"version-history"},"Version History"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Betaflight 4.1")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When GPS Rescue is engaged after a Failsafe, use sticks to recover control (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/betaflight/betaflight/pull/7936"},"https://github.com/betaflight/betaflight/pull/7936"),")")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Betaflight 4.0")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Prevent crash detection immediately after entering GPS Rescue mode (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/betaflight/betaflight/pull/7034"},"https://github.com/betaflight/betaflight/pull/7034"),")"),(0,o.kt)("li",{parentName:"ul"},"Allow minimum distance to home to be configurable (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/betaflight/betaflight/pull/6404"},"https://github.com/betaflight/betaflight/pull/6404"),")"),(0,o.kt)("li",{parentName:"ul"},"Fixed a problem with Sanity Check misreporting STALLED/FLYAWAY during the initial phase (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/betaflight/betaflight/pull/7254"},"https://github.com/betaflight/betaflight/pull/7254"),")"),(0,o.kt)("li",{parentName:"ul"},"Added warning indication for GPS Rescue unreliable (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/betaflight/betaflight/pull/7256"},"https://github.com/betaflight/betaflight/pull/7256"),")"),(0,o.kt)("li",{parentName:"ul"},"Added explicit parameter for arming without fix or low sats: gps_rescue_allow_arming_without_fix (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/betaflight/betaflight/pull/7320"},"https://github.com/betaflight/betaflight/pull/7320"),")")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Betaflight 3.5.5")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed a problem with Sanity Check misreporting STALLED during the initial phase (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/betaflight/betaflight/pull/7254"},"https://github.com/betaflight/betaflight/pull/7254"),")")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Betaflight 3.5.3")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed problem with MOTOR_STOP and auto-disarm activating when GPS Rescue is active (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/betaflight/betaflight/pull/6979)"},"https://github.com/betaflight/betaflight/pull/6979)"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Betaflight 3.5")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GPS Rescue activated on failsafe will check the quad to be at least 100m away from home, regardless of the Sanity check setting. If it's closer, it will drop. Non-failsafe activated GPS Rescue works as in 3.4.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Betaflight 3.4")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Sanity check includes a test for the quad to be farther away than 100m from target home for the Rescue mode to be activated. When Sanity check is enabled, if GPS Rescue is activated (either manually or by failsafe) when the quad is closer than 100m from home, it will drop.")))}d.isMDXComponent=!0}}]);