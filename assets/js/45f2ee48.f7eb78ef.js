"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,k=m["".concat(l,".").concat(u)]||m[u]||s[u]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[m]="string"==typeof e?e:i,o[1]=d;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={},o="Barometer Configuration",d={unversionedId:"wiki/archive/Barometer-Configuration",id:"wiki/archive/Barometer-Configuration",title:"Barometer Configuration",description:"With 3.2, barometer driver was converted to be fully configurable / reconfigurable.",source:"@site/docs/wiki/archive/Barometer-Configuration.md",sourceDirName:"wiki/archive",slug:"/wiki/archive/Barometer-Configuration",permalink:"/betaflight.com/docs/wiki/archive/Barometer-Configuration",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"Arming Sequence & Safety",permalink:"/betaflight.com/docs/wiki/archive/Arming-Sequence-And-Safety"},next:{title:"CLI Command Line Reference",permalink:"/betaflight.com/docs/wiki/archive/Betaflight-4.0-CLI-commands-_Work-in-progress"}},l={},p=[{value:"Barometer configuration with CLI",id:"barometer-configuration-with-cli",level:3},{value:"Target definition changes",id:"target-definition-changes",level:3},{value:"<code>USE_BARO_xxx</code> and <code>USE_BARO_SPI_xxx</code> are now independent.",id:"use_baro_xxx-and-use_baro_spi_xxx-are-now-independent",level:4},{value:"Default device determination (compile time)",id:"default-device-determination-compile-time",level:4},{value:"Overriding default configuration",id:"overriding-default-configuration",level:4}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"barometer-configuration"},"Barometer Configuration"),(0,i.kt)("p",null,"With 3.2, barometer driver was converted to be fully configurable / reconfigurable."),(0,i.kt)("p",null,"As a side effect, how related definitions in target.h are interpreted has been changed in large. Measures to keep backward compatibility has been taken, but there might be cases in which working setups with barometer fail to work with 3.2."),(0,i.kt)("p",null,"This page explains CLI variables/command to configure barometers at runtime to bring barometers back in the working state, as well as changes in default configuration determination for target maintainers."),(0,i.kt)("h3",{id:"barometer-configuration-with-cli"},"Barometer configuration with CLI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Barometer related CLI variables")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Range"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"baro_bustype")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NONE"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"I2C"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"SPI")),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies a type of bus a selected barometer device is connected.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"baro_i2c_device")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0")," ~ Max I2C bus ordinate for MCU type (1 origin, same as ",(0,i.kt)("inlineCode",{parentName:"td"},"x")," in ",(0,i.kt)("inlineCode",{parentName:"td"},"I2Cx")," expression in ",(0,i.kt)("inlineCode",{parentName:"td"},"target.h"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies a bus ordinate of the I2C bus the device is connected when ",(0,i.kt)("inlineCode",{parentName:"td"},"baro_bustype")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"I2C"),". ",(0,i.kt)("inlineCode",{parentName:"td"},"0"),' meanns "none".')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"baro_i2c_address")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0")," ~ ",(0,i.kt)("inlineCode",{parentName:"td"},"119")," (0x77)"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies an I2C address of the device in 7-bit representation. ",(0,i.kt)("inlineCode",{parentName:"td"},"0"),' is a special value to specify "',(0,i.kt)("em",{parentName:"td"},"driver default address"),'". Values ',(0,i.kt)("inlineCode",{parentName:"td"},"1"),"~",(0,i.kt)("inlineCode",{parentName:"td"},"7")," are invalid and behavior is unpredictable.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"baro_spi_device")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0")," ~ Max SPI bus ordinate for MCU type (1 origin, same as ",(0,i.kt)("inlineCode",{parentName:"td"},"x")," in ",(0,i.kt)("inlineCode",{parentName:"td"},"SPIx")," expression in ",(0,i.kt)("inlineCode",{parentName:"td"},"target.h"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies a bus ordinate of the SPI bus the device is connected when ",(0,i.kt)("inlineCode",{parentName:"td"},"baro_bustype")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"SPI"),". ",(0,i.kt)("inlineCode",{parentName:"td"},"0"),' means "none".')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"baro_hardware")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NONE"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"AUTO"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"BMP280"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"MS5611"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"BMP085")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NONE")," = Barometer support disabled. ",(0,i.kt)("inlineCode",{parentName:"td"},"AUTO")," = Firmware will determine device to use under pre-defined rule. ",(0,i.kt)("inlineCode",{parentName:"td"},"BMP280"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"MS5611")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"BMP085")," = Explicitly specifies device to use.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the device is SPI connected, CS (Chip Select) pin can be specified with the ",(0,i.kt)("inlineCode",{parentName:"li"},"resource")," CLI command")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Resource name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"BARO_CS")),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies CS (Chip Select) pin to enable the SPI connected barometer device.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Note that not all combination of bus type and devices are built-in for a particular target.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A combination of ",(0,i.kt)("inlineCode",{parentName:"p"},"baro_hardware = AUTO"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"baro_bustype = I2C")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"baro_i2c_address = 0")," will cause all built-in I2C devices types to be scanned on the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"baro_i2c_device"),", in the order of ",(0,i.kt)("inlineCode",{parentName:"p"},"BMP280"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MS5611")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"BMP085"),"."))),(0,i.kt)("h3",{id:"target-definition-changes"},"Target definition changes"),(0,i.kt)("p",null,"This section is intended for target maintainers and developers."),(0,i.kt)("h4",{id:"use_baro_xxx-and-use_baro_spi_xxx-are-now-independent"},(0,i.kt)("inlineCode",{parentName:"h4"},"USE_BARO_xxx")," and ",(0,i.kt)("inlineCode",{parentName:"h4"},"USE_BARO_SPI_xxx")," are now independent."),(0,i.kt)("p",null,"Prior to 3.2, to configure a device ",(0,i.kt)("inlineCode",{parentName:"p"},"xxx")," on SPI required both ",(0,i.kt)("inlineCode",{parentName:"p"},"USE_BARO_xxx")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"USE_BARO_SPI_xxx")," defined (and this combination disabled I2C support for the device ",(0,i.kt)("inlineCode",{parentName:"p"},"xxx"),"). With 3.2, this dependency/relationship has been removed. ",(0,i.kt)("inlineCode",{parentName:"p"},"USE_BARO_xxx")," configures an I2C variant of the ",(0,i.kt)("inlineCode",{parentName:"p"},"xxx")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"USE_BARO_SPI_xxx")," configures an SPI variant of ",(0,i.kt)("inlineCode",{parentName:"p"},"xxx"),". If both specified, both I2C and SPI variants are configured."),(0,i.kt)("p",null,"Right now, as inherited from 3.1.7, targets that use SPI connected barometer defines both ",(0,i.kt)("inlineCode",{parentName:"p"},"USE_BARO_xxx")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"USE_BARO_SPI_xxx"),", so they are configured for both I2C and SPI variants, in which case, a run time selection will be the SPI variant as explained next."),(0,i.kt)("h4",{id:"default-device-determination-compile-time"},"Default device determination (compile time)"),(0,i.kt)("p",null,"When a single barometer device is configured in the target definition, then the device will be the default device."),(0,i.kt)("p",null,"When multiple barometer devices are configured in the target definition, then the following rule are applied sequentially to determine the default device."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In an order of pre-defined precedence: BMP280, MS5611 then BMP085; the order was decided based on popularity."),(0,i.kt)("li",{parentName:"ol"},"When both I2C and SPI variants are configured, then SPI is selected; it is assumed that the SPI variant is more likely to be onboard."),(0,i.kt)("li",{parentName:"ol"},"Note that when ",(0,i.kt)("inlineCode",{parentName:"li"},"baro_bustype = I2C")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"baro_i2c_address = 0")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"baro_hardware = AUTO"),", then I2C devices on specified I2C bus will be scanned in the order of precedence described in 1 (this is a run time behavior).")),(0,i.kt)("h4",{id:"overriding-default-configuration"},"Overriding default configuration"),(0,i.kt)("p",null,"If above rule does not bring intended default configuration, macro names ",(0,i.kt)("inlineCode",{parentName:"p"},"DEFAULT_BARO_bbb_xxx")," can be used to override the rule. See beginning of the ",(0,i.kt)("inlineCode",{parentName:"p"},"sensors/barometer.c")," for specific macro names."))}m.isMDXComponent=!0}}]);