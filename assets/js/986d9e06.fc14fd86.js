"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},l="Building Manual.",o={unversionedId:"development/development/Building Manual",id:"development/development/Building Manual",title:"Building Manual.",description:"The manual PDF file is generated by concatenating relevant markdown files and by transforming the result using Gimli to obtain the final PDF file. This steps are handled automatically by the build_docs.sh script located in the root of the repository next to the Makefile.",source:"@site/docs/development/development/Building Manual.md",sourceDirName:"development/development",slug:"/development/development/Building Manual",permalink:"/betaflight.com/docs/development/development/Building Manual",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"development",previous:{title:"Blackbox logging internals",permalink:"/betaflight.com/docs/development/development/Blackbox Internals"},next:{title:"Building in Arch Linux",permalink:"/betaflight.com/docs/development/development/Building in Arch Linux"}},u={},s=[{value:"Requirements &amp; Installation",id:"requirements--installation",level:2},{value:"Configuration",id:"configuration",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-manual"},"Building Manual."),(0,a.kt)("p",null,"The manual PDF file is generated by concatenating relevant markdown files and by transforming the result using Gimli to obtain the final PDF file. This steps are handled automatically by the ",(0,a.kt)("inlineCode",{parentName:"p"},"build_docs.sh")," script located in the root of the repository next to the Makefile."),(0,a.kt)("h2",{id:"requirements--installation"},"Requirements & Installation"),(0,a.kt)("p",null,"The PDF manual generation uses the Gimli for the conversion. It can be installed via ruby gems. On Debian based systems the installation steps are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    sudo apt-get install ruby1.9.1 ruby1.9.1-dev rubygems zlib1g-dev wkhtmltopdf libxml2-dev libxslt-dev\n    sudo gem1.9.1 install gimli\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"All markdown files need to be registered in the ",(0,a.kt)("inlineCode",{parentName:"p"},"build_manual.sh")," file individually by modifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"doc_files")," variable / array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"doc_files=( 'Configuration.md'\n    'Board - CC3D.md'\n    '...'\n    '...'\n)\n")))}c.isMDXComponent=!0}}]);