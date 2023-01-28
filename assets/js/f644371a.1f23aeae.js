"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=i.createContext({}),d=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(r.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,g=p["".concat(r,".").concat(h)]||p[h]||c[h]||l;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=h;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<l;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const l={},o="Building in windows",s={unversionedId:"development/development/Building in Windows",id:"development/development/Building in Windows",title:"Building in windows",description:"For various reasons, a custom build of Betaflight might be needed. A user might want to enable certain features that are disabled on his / her target, for example. This guide provides the basic instructions needed to build Betaflight on a Windows system. Two options are given:",source:"@site/docs/development/development/Building in Windows.md",sourceDirName:"development/development",slug:"/development/development/Building in Windows",permalink:"/betaflight.com/docs/development/development/Building in Windows",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"development",previous:{title:"Building in Ubuntu",permalink:"/betaflight.com/docs/development/development/Building in Ubuntu"},next:{title:"Installing the Linux subsystem",permalink:"/betaflight.com/docs/development/development/Building-Betaflight-on-Windows,-the-Linux-subsystem-way"}},r={},d=[{value:"Building on Windows 10 using the Linux subsystem",id:"building-on-windows-10-using-the-linux-subsystem",level:2},{value:"Building on Windows 7/8/10 using the Cygwin environment",id:"building-on-windows-7810-using-the-cygwin-environment",level:2},{value:"Installing Cygwin and required packages",id:"installing-cygwin-and-required-packages",level:3},{value:"Clone the Betaflight repository",id:"clone-the-betaflight-repository",level:3},{value:"Setup GNU ARM Toolchain",id:"setup-gnu-arm-toolchain",level:3},{value:"Scripted installation",id:"scripted-installation",level:4},{value:"Manual Installation",id:"manual-installation",level:4},{value:"Building the firmware",id:"building-the-firmware",level:4},{value:"Updating and rebuilding",id:"updating-and-rebuilding",level:3}],u={toc:d};function p(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-in-windows"},"Building in windows"),(0,a.kt)("p",null,"For various reasons, a custom build of Betaflight might be needed. A user might want to enable certain features that are disabled on his / her target, for example. This guide provides the basic instructions needed to build Betaflight on a Windows system. Two options are given:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using the Linux subsystem (Windows 10 only)"),(0,a.kt)("li",{parentName:"ul"},"Using the Cygwin environment (Windows 7/8/10)")),(0,a.kt)("h2",{id:"building-on-windows-10-using-the-linux-subsystem"},"Building on Windows 10 using the Linux subsystem"),(0,a.kt)("p",null,"A new feature in Windows 10 allows any developer to quickly and easily run an entire linux subsystem in Windows and access it via a bash terminal. This gives developers full use of the entire Linux OS and all of the great existing linux tools and programs. When Bash for Windows is up and running it feels like you sshed into a full Linux box, except the linux distro is actually running alongside Windows locally."),(0,a.kt)("p",null,"If you use Bash on Windows you can easily build Betaflight exactly as you would for Ubuntu. ",(0,a.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/commandline/wsl/install_guide"},"For instructions follow the official guide here.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/commandline/wsl/install_guide"},"https://msdn.microsoft.com/commandline/wsl/install_guide"))),(0,a.kt)("p",null,'Once you have Bash On Windows running you can follow the "Building in Ubuntu" instructions for building Betaflight.'),(0,a.kt)("h2",{id:"building-on-windows-7810-using-the-cygwin-environment"},"Building on Windows 7/8/10 using the Cygwin environment"),(0,a.kt)("p",null,"The Cygwin environment provides some functionality similar to a Linux distribution, allowing to build Betaflight in a relatively small (~1 Gb) environment within Windows."),(0,a.kt)("h3",{id:"installing-cygwin-and-required-packages"},"Installing Cygwin and required packages"),(0,a.kt)("p",null,"Download the Setup","*",".exe from ",(0,a.kt)("a",{parentName:"p",href:"https://www.cygwin.com/"},"https://www.cygwin.com/")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cygwin Installation",src:n(48813).Z,width:"1024",height:"768"})),(0,a.kt)("p",null,"Execute the downloaded Setup","*",'.exe and step through the installation wizard (no need to customize the settings here). Stop at the "Select Packages" Screen and select the following Packages\nfor Installation:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Archive/unzip"),(0,a.kt)("li",{parentName:"ul"},"Devel/git"),(0,a.kt)("li",{parentName:"ul"},"Devel/bash-completion (was git-completion, Optional)"),(0,a.kt)("li",{parentName:"ul"},"Devel/make"),(0,a.kt)("li",{parentName:"ul"},"Devel/binutils"),(0,a.kt)("li",{parentName:"ul"},"Editors/vim or Editors/nano (file editors, ",(0,a.kt)("inlineCode",{parentName:"li"},"nano")," is most straightforward while ",(0,a.kt)("inlineCode",{parentName:"li"},"vim")," offers more advanced options)"),(0,a.kt)("li",{parentName:"ul"},"Shells/mintty (should be already selected)"),(0,a.kt)("li",{parentName:"ul"},"Archive/unzip")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cygwin Installation",src:n(90106).Z,width:"1008",height:"712"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cygwin Installation",src:n(99324).Z,width:"1008",height:"712"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cygwin Installation",src:n(52248).Z,width:"1008",height:"712"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cygwin Installation",src:n(91033).Z,width:"1008",height:"712"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cygwin Installation",src:n(58689).Z,width:"1008",height:"712"})),(0,a.kt)("p",null,"Continue with the Installation and accept all autodetected dependencies."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cygwin Installation",src:n(68358).Z,width:"532",height:"393"})),(0,a.kt)("p",null,"The Cygwin environment is now installed and can be used with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cygwin-Terminal")," application."),(0,a.kt)("h3",{id:"clone-the-betaflight-repository"},"Clone the Betaflight repository"),(0,a.kt)("p",null,'Head over to the Betaflight Github page and grab the URL of the GIT Repository: "',(0,a.kt)("a",{parentName:"p",href:"https://github.com/betaflight/betaflight.git%22"},'https://github.com/betaflight/betaflight.git"')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GIT Checkout",src:n(75274).Z,width:"1016",height:"724"})),(0,a.kt)("p",null,"Open the Cygwin-Terminal, navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev")," folder and use the git command ",(0,a.kt)("inlineCode",{parentName:"p"},"git clone")," to checkout the repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /dev\ngit clone https://github.com/betaflight/betaflight.git\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GIT Checkout",src:n(46451).Z,width:"786",height:"379"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/betaflight")," folder now holds a copy of the current Betaflight source code repository."),(0,a.kt)("h3",{id:"setup-gnu-arm-toolchain"},"Setup GNU ARM Toolchain"),(0,a.kt)("p",null,"To compile the Betafligth source code for the ARM processors used on the various flight controllers, the GNU ARM Toolchain is required. Versions are important, current Betaflight (4.0.0) requires at least ",(0,a.kt)("inlineCode",{parentName:"p"},"arm-none-eabi-gcc")," version ",(0,a.kt)("inlineCode",{parentName:"p"},"7.3.1"),"."),(0,a.kt)("p",null,"The toolchain can be installed in two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using the provided ",(0,a.kt)("inlineCode",{parentName:"li"},"arm_sdk_install")," script"),(0,a.kt)("li",{parentName:"ul"},"Manual installation")),(0,a.kt)("p",null,"The provided script will install the correct version of the ARM toolchain to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/betaflight/")," directory, which will thus only be avaialble to this project. This method ensures the corerct version is installed and prevents collision with possible other projects you might have."),(0,a.kt)("p",null,"The manual installation option will install the ARM toolchain system-wide, allowing it to also be used for other projects on the system, should that be necesary."),(0,a.kt)("h4",{id:"scripted-installation"},"Scripted installation"),(0,a.kt)("p",null,"To install the ARM toolchain, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"make arm_sdk_install")," command within the ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/betaflight")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Stefan@DESKTOP-U5FUCGO /dev\n$ cd /dev/betaflight\n\nStefan@DESKTOP-U5FUCGO /dev/betaflight\n$ make arm_sdk_install\nmkdir -p tools\nmkdir -p downloads\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100   241  100   241    0     0    241      0  0:00:01 --:--:--  0:00:01  1288\n100  124M  100  124M    0     0  1965k      0  0:01:05  0:01:05 --:--:-- 2014k\n")),(0,a.kt)("p",null,"The ARM toolchain is now installed. Note the toolchain can be removed with ",(0,a.kt)("inlineCode",{parentName:"p"},"make arm_sdk_clean")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/betaflight")," directory."),(0,a.kt)("h4",{id:"manual-installation"},"Manual Installation"),(0,a.kt)("p",null,"Manual installation requires you download the Windows zip ",(0,a.kt)("inlineCode",{parentName:"p"},"7.3.1")," (7-2018-q2-update), which can be obtained here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads"},"https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads")," (7-2018-q2-update)")),(0,a.kt)("p",null,"Or via direct link:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-rm/7-2018q2/gcc-arm-none-eabi-7-2018-q2-update-win32.zip"},"https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-rm/7-2018q2/gcc-arm-none-eabi-7-2018-q2-update-win32.zip"))),(0,a.kt)("p",null,"Extract the contents of this archive to any folder of your choice, for instance ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\dev\\gcc-arm"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GNU ARM Toolchain Setup",src:n(73107).Z,width:"786",height:"593"})),(0,a.kt)("p",null,'Add the "bin" subdirectory to the PATH Windows environment variable: ',(0,a.kt)("inlineCode",{parentName:"p"},"%PATH%;C:\\dev\\gcc-arm\\bin")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GNU ARM Toolchain Setup",src:n(83959).Z,width:"786",height:"537"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GNU ARM Toolchain Setup",src:n(25308).Z,width:"922",height:"614"})),(0,a.kt)("p",null,"The ARM toolchain is now available within the Cygwin environment."),(0,a.kt)("h4",{id:"building-the-firmware"},"Building the firmware"),(0,a.kt)("p",null,"To compile your Betaflight binaries; open the Cygwin terminal, enter the Betaflight directory and build the project using the ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," command. You can append TARGET=","[HARDWARE]"," if you want to build anything other than the default NAZE target:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /dev/betaflight\nmake TARGET=NAZE\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GIT Checkout",src:n(80064).Z,width:"786",height:"379"})),(0,a.kt)("p",null,"Within few moments you should have your binary ready:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Stefan@DESKTOP-U5FUCGO /dev/betaflight\n$ cd /dev/betaflight\n\nStefan@DESKTOP-U5FUCGO /dev/betaflight\n$ make TARGET=BETAFLIGHTF3\nmake -j ./obj/betaflight_4.1.0_BETAFLIGHTF3.hex\nmake[1]: Entering directory '/dev/betaflight'\n%% startup_stm32f30x_md_gcc.S\n%% (optimised) ./src/main/startup/system_stm32f30x.c\n...\n...\n%% (optimised) ./src/main/drivers/usb_io.c\nLinking BETAFLIGHTF3\nMemory region         Used Size  Region Size  %age Used\n           FLASH:      241016 B       252 KB     93.40%\n    FLASH_CONFIG:          0 GB         4 KB      0.00%\n             RAM:       33568 B        40 KB     81.95%\n             CCM:          2 KB         8 KB     25.00%\n       MEMORY_B1:          0 GB         0 GB     -1.#J%\n   text    data     bss     dec     hex filename\n 237600    3416   32200  273216   42b40 ./obj/main/betaflight_BETAFLIGHTF3.elf\nCreating HEX ./obj/betaflight_4.1.0_BETAFLIGHTF3.hex\n")),(0,a.kt)("p",null,"Note that the final message will also inform you about flash space use"),(0,a.kt)("p",null,"You can use the Betaflight-Configurator to flash the ",(0,a.kt)("inlineCode",{parentName:"p"},"obj/betaflight_NAZE.hex")," file."),(0,a.kt)("h3",{id:"updating-and-rebuilding"},"Updating and rebuilding"),(0,a.kt)("p",null,"In order to update your local copy of the source code, navigate to the local betaflight repository and use the following steps to pull the latest changes and rebuild your version of betaflight:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /dev/betaflight\ngit reset --hard\ngit pull\nmake clean TARGET=NAZE\nmake TARGET=NAZE\n")))}p.isMDXComponent=!0},48813:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/001.cygwin_dl-7f5b069a316fcfe9c064ef4f7a506e9c.png"},90106:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/002.cygwin_setup-b45cb61b37d930128c74eebb34f52a76.png"},99324:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/003.cygwin_setup-47b9347f2c74b16e7fa154ec4d6c83e8.png"},52248:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/004.cygwin_setup-72f87b0b4082442eae2b7d8a1ed806c1.png"},91033:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/005.cygwin_setup-39f98e90802deae30ec6120266f8c476.png"},58689:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/006.cygwin_setup-c4df29ee0bb53647bf837e799bc3b189.png"},68358:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/007.cygwin_setup-6bc1e3d15a2db4aa3785a27e0548b86a.png"},73107:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/008.toolchain-e7c398e03ac989f666ca9f4e2efb2e4a.png"},83959:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/009.toolchain_path-7e60a13d70eb8c08e39df4e9dacf4ea8.png"},25308:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/010.toolchain_path-487fee94e86d49f64cc7d4440b95ee30.png"},75274:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/011.git_checkout-c1e642b4bd8bd3fdd9905ec9d15a1517.png"},46451:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/012.git_checkout-f9650a7295ee1001f95df9a44372bd63.png"},80064:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/013.compile-0293dbc99baf4b2e2869e2429d118049.png"}}]);