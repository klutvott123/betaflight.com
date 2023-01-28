"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4987],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>N});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=m(a),k=l,N=s["".concat(o,".").concat(k)]||s[k]||u[k]||r;return a?n.createElement(N,i(i({ref:e},d),{},{components:a})):n.createElement(N,i({ref:e},d))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[s]="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},43972:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(87462),l=(a(67294),a(3905));const r={},i="DisplayPort MSP Extensions",p={unversionedId:"development/API/DisplayPort",id:"development/API/DisplayPort",title:"DisplayPort MSP Extensions",description:"Betaflight supports what is sometimes referred to as Canvas Mode whereby the OSD can send arbitrary character strings to be displayed at given screen coordinates.",source:"@site/docs/development/API/DisplayPort.mdx",sourceDirName:"development/API",slug:"/development/API/DisplayPort",permalink:"/betaflight.com/docs/development/API/DisplayPort",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"development",previous:{title:"Betaflight 4.4 cloud build API",permalink:"/betaflight.com/docs/development/API/Cloud-Build-API"},next:{title:"MSP Extensions",permalink:"/betaflight.com/docs/development/API/MSP-Extensions"}},o={},m=[{value:"DisplayPort MSP commands",id:"displayport-msp-commands",level:2},{value:"MSP_SET_OSD_CANVAS",id:"msp_set_osd_canvas",level:3},{value:"MSP_OSD_CANVAS",id:"msp_osd_canvas",level:3},{value:"MSP_DISPLAYPORT",id:"msp_displayport",level:3},{value:"DisplayPort sub-commands",id:"displayport-sub-commands",level:2},{value:"MSP_DP_HEARTBEAT",id:"msp_dp_heartbeat",level:4},{value:"MSP_DP_RELEASE",id:"msp_dp_release",level:4},{value:"MSP_DP_CLEAR_SCREEN",id:"msp_dp_clear_screen",level:4},{value:"MSP_DP_WRITE_STRING",id:"msp_dp_write_string",level:4},{value:"MSP_DP_DRAW_SCREEN",id:"msp_dp_draw_screen",level:4},{value:"MSP_DP_OPTIONS",id:"msp_dp_options",level:4},{value:"MSP_DP_SYS",id:"msp_dp_sys",level:4}],d={toc:m};function s(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"displayport-msp-extensions"},"DisplayPort MSP Extensions"),(0,l.kt)("p",null,"Betaflight supports what is sometimes referred to as Canvas Mode whereby the OSD can send arbitrary character strings to be displayed at given screen coordinates."),(0,l.kt)("h2",{id:"displayport-msp-commands"},"DisplayPort MSP commands"),(0,l.kt)("h3",{id:"msp_set_osd_canvas"},"MSP_SET_OSD_CANVAS"),(0,l.kt)("p",null,"The MSP_SET_OSD_CANVAS command is sent by the VTX, or display device, to the FC to indicate the size of the canvas available to the DisplayPort rendering when in HD mode. HD mode, as is indicated by ",(0,l.kt)("inlineCode",{parentName:"p"},"vcd_video_system = HD")," is automatically set on reception of this command."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Msg Id"),(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MSP_SET_OSD_CANVAS"),(0,l.kt)("td",{parentName:"tr",align:null},"188"),(0,l.kt)("td",{parentName:"tr",align:null},"to FC"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the canvas size")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"canvas_cols"),(0,l.kt)("td",{parentName:"tr",align:null},"uint8"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of columns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"canvas_rows"),(0,l.kt)("td",{parentName:"tr",align:null},"uint8"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of rows")))),(0,l.kt)("mermaid",{value:"sequenceDiagram\n    participant FC\n    participant VTX\n    FC->>VTX: MSP_DP_HEARTBEAT sent and detected\n    VTX->>FC: MSP_SET_OSD_CANVAS set rows/columns\n    FC->>VTX: MSP request success"}),(0,l.kt)("h3",{id:"msp_osd_canvas"},"MSP_OSD_CANVAS"),(0,l.kt)("p",null,"The MSP_OSD_CANVAS command is sent by the configurator to the FC to determine the size of the canvas available to the DisplayPort rendering when in HD mode. This is then used on the OSD tab to show the correct number of rows/columns when editing the OSD element positions."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Msg Id"),(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MSP_OSD_CANVAS"),(0,l.kt)("td",{parentName:"tr",align:null},"189"),(0,l.kt)("td",{parentName:"tr",align:null},"to FC"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the canvas size")))),(0,l.kt)("p",null,"Response is two bytes."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"canvas_cols"),(0,l.kt)("td",{parentName:"tr",align:null},"uint8"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of columns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"canvas_rows"),(0,l.kt)("td",{parentName:"tr",align:null},"uint8"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of rows")))),(0,l.kt)("mermaid",{value:"sequenceDiagram\n    participant FC\n    participant Configurator\n    participant Preview\n    Configurator->>FC: Configurator connects to FC\n    Configurator->>FC: MSP_OSD_CANVAS get rows/columns\n    Configurator->>Preview: OSD Preview pane resized"}),(0,l.kt)("h3",{id:"msp_displayport"},"MSP_DISPLAYPORT"),(0,l.kt)("p",null,"The MSP_DISPLAYPORT command is sent by the FC to the display device/VTX to perform a DisplayPort operation."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Msg Id"),(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MSP_DISPLAYPORT"),(0,l.kt)("td",{parentName:"tr",align:null},"182"),(0,l.kt)("td",{parentName:"tr",align:null},"from FC"),(0,l.kt)("td",{parentName:"tr",align:null},"DisplayPort specific commands follow")))),(0,l.kt)("p",null,"One of the following sub-commands will then follow."),(0,l.kt)("h2",{id:"displayport-sub-commands"},"DisplayPort sub-commands"),(0,l.kt)("h4",{id:"msp_dp_heartbeat"},"MSP_DP_HEARTBEAT"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Msg Id"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MSP_DP_HEARTBEAT"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Prevent OSD Slave boards from displaying a 'disconnected' status")))),(0,l.kt)("h4",{id:"msp_dp_release"},"MSP_DP_RELEASE"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Msg Id"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MSP_DP_RELEASE"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Clears the display and allows local rendering on the display device based on telemetry informtation etc.")))),(0,l.kt)("h4",{id:"msp_dp_clear_screen"},"MSP_DP_CLEAR_SCREEN"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Msg Id"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MSP_DP_CLEAR_SCREEN"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Clear the display")))),(0,l.kt)("h4",{id:"msp_dp_write_string"},"MSP_DP_WRITE_STRING"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Msg Id"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MSP_DP_WRITE_STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Write a string")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"row"),(0,l.kt)("td",{parentName:"tr",align:null},"uint8"),(0,l.kt)("td",{parentName:"tr",align:null},"Row on which to position the first character of the string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"column"),(0,l.kt)("td",{parentName:"tr",align:null},"uint8"),(0,l.kt)("td",{parentName:"tr",align:null},"Column on which to position the first character of the string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"attribute"),(0,l.kt)("td",{parentName:"tr",align:null},"uint8"),(0,l.kt)("td",{parentName:"tr",align:null},"Byte indicating the font to use and if the text should flash")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"uint8 x n"),(0,l.kt)("td",{parentName:"tr",align:null},"NULL terminated string of up to 30 characters in length")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"attribute")," parameter is encoded thus."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Bits"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Version"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"Must be 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DISPLAYPORT_MSP_ATTR_BLINK"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"Set to have the display device automatically blink the string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,l.kt)("td",{parentName:"tr",align:null},"2 - 5"),(0,l.kt)("td",{parentName:"tr",align:null},"Must be 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Font number"),(0,l.kt)("td",{parentName:"tr",align:null},"0 - 1"),(0,l.kt)("td",{parentName:"tr",align:null},"Selects one of four fonts, each of 256 8 bit characters")))),(0,l.kt)("h4",{id:"msp_dp_draw_screen"},"MSP_DP_DRAW_SCREEN"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Msg Id"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MSP_DP_DRAW_SCREEN"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Triggers the display of a frame after it has been cleared/rendered")))),(0,l.kt)("h4",{id:"msp_dp_options"},"MSP_DP_OPTIONS"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Msg Id"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MSP_DP_OPTIONS"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Not used by Betaflight. Used by INAV and Ardupilot to set display resolution.")))),(0,l.kt)("h4",{id:"msp_dp_sys"},"MSP_DP_SYS"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Msg Id"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MSP_DP_SYS"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"Display system element displayportSystemElement_e at given coordinates")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"row"),(0,l.kt)("td",{parentName:"tr",align:null},"uint8"),(0,l.kt)("td",{parentName:"tr",align:null},"Row on which to position the first character of the string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"column"),(0,l.kt)("td",{parentName:"tr",align:null},"uint8"),(0,l.kt)("td",{parentName:"tr",align:null},"Column on which to position the first character of the string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"system_element"),(0,l.kt)("td",{parentName:"tr",align:null},"uint8"),(0,l.kt)("td",{parentName:"tr",align:null},"System element to be rendered by the VTX/goggle/display device")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"system_element")," will be one of the following as defined by ",(0,l.kt)("inlineCode",{parentName:"p"},"displayPortSystemElement_e "),". Once one MSP_DP_SYS sub-command has been received by the VTX/goggle/display device then the default system elements should no longer be displayed in their default locations, but only explicitly as directed by this command. In this way, the default behaviour is as before, but as soon as any system element is explicitly positioned these OSD elements behave just like any other and can be called up is specific locations by any given OSD profile."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// System elements rendered by VTX or Goggles\ntypedef enum {\n    DISPLAYPORT_SYS_GOGGLE_VOLTAGE = 0,\n    DISPLAYPORT_SYS_VTX_VOLTAGE = 1,\n    DISPLAYPORT_SYS_BITRATE = 2,\n    DISPLAYPORT_SYS_DELAY = 3,\n    DISPLAYPORT_SYS_DISTANCE = 4,\n    DISPLAYPORT_SYS_LQ = 5,\n    DISPLAYPORT_SYS_GOGGLE_DVR = 6,\n    DISPLAYPORT_SYS_VTX_DVR = 7,\n    DISPLAYPORT_SYS_WARNINGS = 8,\n    DISPLAYPORT_SYS_VTX_TEMP = 9,\n    DISPLAYPORT_SYS_FAN_SPEED = 10,\n    DISPLAYPORT_SYS_COUNT,\n} displayPortSystemElement_e;\n")))}s.isMDXComponent=!0}}]);