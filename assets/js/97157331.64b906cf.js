"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={},i="Configuration Format",l={unversionedId:"development/development/Configuration Format",id:"development/development/Configuration Format",title:"Configuration Format",description:"The configuration format and external protocol use some of the same concepts",source:"@site/docs/development/development/Configuration Format.md",sourceDirName:"development/development",slug:"/development/development/Configuration Format",permalink:"/betaflight.com/docs/development/development/Configuration Format",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"development",previous:{title:"General",permalink:"/betaflight.com/docs/development/development/CodingStyle"},next:{title:"Configuration",permalink:"/betaflight.com/docs/development/development/Configuration Storage"}},s={},d=[{value:"Initialiion function.",id:"initialiion-function",level:2},{value:"Upgrading",id:"upgrading",level:2},{value:"Downgrading",id:"downgrading",level:2},{value:"Incompatible changes",id:"incompatible-changes",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration-format"},"Configuration Format"),(0,o.kt)("p",null,"The configuration format and external protocol use some of the same concepts\nas SAE J1939. A parameter group (PG) is a set of parameters belonging\nto the same topic and are stored and sent together. A parameter group\ninstance has a unique parameter group number (PGN). Each parameter\nalso has a suspect parameter number (SPN) which can be used to get or\nset a parameter directly."),(0,o.kt)("p",null,"When used as on-wire formats structures should be packed to give the\nsame in storage, in memory, and on-wire format. However care must be taken\nover memory alignment issues when packing structures."),(0,o.kt)("p",null,"The PGs can be defined on a system-wide basis on a profile specific basis.\nprofiles can be activated on the fly."),(0,o.kt)("p",null,"The storage consists of a header, zero or more PGs, a footer and a checksum.\nTo keep the RAM usage low, the parameters are written directly to flash\nwhich means that things that are only known at the end, such as the\nsize are stored in the footer. The checksum is written after the footer."),(0,o.kt)("p",null,"The header holds:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The format number. This is bumped on incompatible changes.")),(0,o.kt)("p",null,"Each stored PG holds:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The size of this record"),(0,o.kt)("li",{parentName:"ul"},"The PGN"),(0,o.kt)("li",{parentName:"ul"},"Version number"),(0,o.kt)("li",{parentName:"ul"},"Profile number"),(0,o.kt)("li",{parentName:"ul"},"Flags"),(0,o.kt)("li",{parentName:"ul"},"The record format. This is bumped on incompatible changes."),(0,o.kt)("li",{parentName:"ul"},"The PG data")),(0,o.kt)("p",null,"The footer holds:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A zero to mark the end of data")),(0,o.kt)("p",null,"The checksum is based on the header, PGs, and footer."),(0,o.kt)("p",null,"The PG registrations hold similar but not identical information (e.g. the profile\nnumber is not known until it is stored)."),(0,o.kt)("h2",{id:"initialiion-function"},"Initialiion function."),(0,o.kt)("p",null,"All fields are reset to 0 upon initialisation and then if a reset function is\ndefined for the group then initial settings can be defined by the system."),(0,o.kt)("h2",{id:"upgrading"},"Upgrading"),(0,o.kt)("p",null,"Upgrades are done at the PG level and are detected by a difference in\nsize or version. New fields can be added to the end of the parameter group.\nThe reset and initialisation function is called before upgrading so new\nfields will first be reset to 0 and then initialised by the system if defined."),(0,o.kt)("p",null,"Note: Currently the code does not check the version field."),(0,o.kt)("h2",{id:"downgrading"},"Downgrading"),(0,o.kt)("p",null,"Downgrades are done at the PG level. Any trailing, unrecognised\nfields will be silently dropped on load. Saving the config back to\nflash will discard these unrecognised fields."),(0,o.kt)("h2",{id:"incompatible-changes"},"Incompatible changes"),(0,o.kt)("p",null,"An incompatible change is where a field is inserted, deleted from the\nmiddle, reordered, resized (including changing the size of a contained array),\nor has the meaning changed. Such changes should be handled by bumping the\nPG version field or allocating a new PGN."))}u.isMDXComponent=!0}}]);