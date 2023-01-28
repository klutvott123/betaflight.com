"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,c=d["".concat(s,".").concat(h)]||d[h]||m[h]||a;return n?o.createElement(c,l(l({ref:t},u),{},{components:n})):o.createElement(c,l({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},69780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={},l="Installing the Linux subsystem",r={unversionedId:"development/development/Building-Betaflight-on-Windows,-the-Linux-subsystem-way",id:"development/development/Building-Betaflight-on-Windows,-the-Linux-subsystem-way",title:"Installing the Linux subsystem",description:"Your PC must be running a 64-bit version of Windows 10 Anniversary Update or later (build 1607+).",source:"@site/docs/development/development/Building-Betaflight-on-Windows,-the-Linux-subsystem-way.md",sourceDirName:"development/development",slug:"/development/development/Building-Betaflight-on-Windows,-the-Linux-subsystem-way",permalink:"/betaflight.com/docs/development/development/Building-Betaflight-on-Windows,-the-Linux-subsystem-way",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"development",previous:{title:"Building in windows",permalink:"/betaflight.com/docs/development/development/Building in Windows"},next:{title:"General",permalink:"/betaflight.com/docs/development/development/CodingStyle"}},s={},p=[],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installing-the-linux-subsystem"},"Installing the Linux subsystem"),(0,i.kt)("p",null,"Your PC must be running a 64-bit version of Windows 10 Anniversary Update or later (build 1607+)."),(0,i.kt)("p",null,"You will need to restart your PC at least once, so be mentally prepared for that."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=OQIYEPe6DWY"},"Listening to Kraftwerk")," is known to increase the success rate of this process."),(0,i.kt)("p",null,"First, install the Linux subsystem from this great guide (from which I stole the first sentence): ",(0,i.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/commandline/wsl/install-win10"},"https://msdn.microsoft.com/en-us/commandline/wsl/install-win10")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note for absolute newbs regarding ",(0,i.kt)("strong",{parentName:"em"},"Ubuntu"))," (maybe applies to others, but IDK), when prompted to enter a new UNIX user, be sure to use only lower case. The user name is compared to a regular expression that only allows lower case, but not upper."),(0,i.kt)("p",null,"It should look like this:\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/uj0QPQY.jpg",alt:"Imgur"})),(0,i.kt)("p",null,"If you don't see this screen, open a Windows command prompt and enter ",(0,i.kt)("inlineCode",{parentName:"p"},"bash"),"."),(0,i.kt)("p",null,"Note the Ubuntu app installer can pin shortcuts to the Start Menu, or the Task Bar. I tried opening these and I did not get the above screenshot; it was missing the path (/mnt/c/Users/username$), and only showed my username@desktop. Running ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," from Windows CMD included the expected path."),(0,i.kt)("h1",{id:"configuring-the-linux-subsystem"},"Configuring the Linux subsystem"),(0,i.kt)("p",null,"You will have to install a few Linux packages."),(0,i.kt)("p",null,"First, the basics. We need Python and Curl. To install those, enter"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt install python curl -y")),(0,i.kt)("p",null,"You can install multiple packages at once. The -Y option says yes to all questions during installation."),(0,i.kt)("p",null,"So far so good, eh?"),(0,i.kt)("h1",{id:"cloning-betaflight"},"Cloning betaflight"),(0,i.kt)("p",null,"If you already have the repository cloned to your computer and do not wish to use git, you can skip this step."),(0,i.kt)("p",null,"To install git, enter:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt install git")),(0,i.kt)("p",null,"Once that's done, navigate to the folder you want to have the repository cloned to. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"cd [folder name]")," to enter a folder, ",(0,i.kt)("inlineCode",{parentName:"p"},"cd ..")," to go up a folder and ",(0,i.kt)("inlineCode",{parentName:"p"},"ls")," to see the current folder's contents. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"mkdir [foldername]")," to create a new folder."),(0,i.kt)("p",null,"Once that's done, enter ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://www.github.com/betaflight/betaflight [foldername]")," (be sure to have your GitHub login info ready). This will create a new folder within the folder you are in with the name you specified and clone (=download) the Betaflight repo into it."),(0,i.kt)("h1",{id:"building-betaflight"},"Building Betaflight"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The file system mapping of WSL is still somewhat experimental, and currently all files on the local disk are mounted into ",(0,i.kt)("inlineCode",{parentName:"p"},"/mnt/c")," on the linux side. They are accessible, but they are mounted with ",(0,i.kt)("inlineCode",{parentName:"p"},"root:root")," permissions. This causes permissioning issues with a lot of things, and amongst them is that it leads to errors when trying to build Betaflight from a repository that was cloned onto the local disk under Windows. Rather than doing this, create a fresh clone in linux under ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/\\<username\\>"),", and build from there."),(0,i.kt)("p",null,"To build Betaflight, you have two things left to install. Enter the folder you cloned the Betaflight repo into. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ls")," command should output something like this:\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/Kd65LfN.jpg",alt:"Imgur"}),"\nIf it doesn't match, you are in the wrong folder. Use the Windows file manager to help if you are lost."),(0,i.kt)("p",null,"If you are missing a few folders, don't worry, we are going to solve that right now."),(0,i.kt)("p",null,"First, enter ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt install build-essential"),". This is the package that will actually build Betaflight. Then, enter ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo make arm_sdk_install"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"UPDATE/NOTE:")," Using ",(0,i.kt)("strong",{parentName:"p"},"Ubuntu"),", I had to run ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt-get update")," which installed a few updates, ",(0,i.kt)("em",{parentName:"p"},"prior to")," running ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt install build-essential"),". Without the updates, ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt install build-essential")," only produced 404 errors."),(0,i.kt)("p",null,"Once that is done, your system is ready to spit out those sweet hex files."),(0,i.kt)("p",null,"Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"make <targetname>")," to build Betaflight for your chosen board. For example ",(0,i.kt)("inlineCode",{parentName:"p"},"make BETAFLIGHTF3")," or even ",(0,i.kt)("inlineCode",{parentName:"p"},"make BETAFLIGHTF3 BETAFLIGHTF4")," for multiple targets. ",(0,i.kt)("inlineCode",{parentName:"p"},"make help")," is also your friend.\nAlternatively, you can try ",(0,i.kt)("inlineCode",{parentName:"p"},"make all")," if you have some spare time."),(0,i.kt)("p",null,"The hex files will be in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/obj")," folder of the betaflight folder"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TIP:")," To find your board (and how it should be referenced from the ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," command), see here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/betaflight/betaflight/tree/master/src/main/target"},"https://github.com/betaflight/betaflight/tree/master/src/main/target")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"UPDATE/NOTE 2:")," In order to run ",(0,i.kt)("inlineCode",{parentName:"p"},"make test")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"make junittest")," you will have to install clang (version 10). If you type ",(0,i.kt)("inlineCode",{parentName:"p"},"which clang-10")," in console and get no output, it's not installed. In order to install enter ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt-get install clang-10"),". Additionally, you may need to run ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt-get install libblocksruntime-dev")," to install a missing library for linking."),(0,i.kt)("h1",{id:"optional-items"},"Optional items"),(0,i.kt)("p",null,"If you do not like the default Windows console, you can always install for example ",(0,i.kt)("inlineCode",{parentName:"p"},"xterm"),". This will however also require an X-server running in the Windows host environment. Get it here: ",(0,i.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/xming/"},"https://sourceforge.net/projects/xming/")),(0,i.kt)("p",null,"Then do the following in the Linux subsystem:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$ sudo apt install xterm"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"$ sudo apt-get install dbus-x11"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"$ sudo dbus-uuidgen --ensure"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"$ xterm --display :0.0 &")),(0,i.kt)("h1",{id:"root-file-system-location"},"Root file system location"),(0,i.kt)("p",null,"The root file system for the Linux Subsystem is available from Windows here:\n",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Users\\\\<username\\>\\AppData\\Local\\Packages\\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\\LocalState\\rootfs")),(0,i.kt)("p",null,"In earlier iterations of Windows Subsystem for Linux, the Ubuntu file system was at %localappdata%\\Lxss (e.g., C:\\Users","\\","<username",">","\\AppData\\Local\\Lxss But it has now moved to the location mentioned above. Beware there are still a lot of incorrect information about this floating around. Even on MS own site."),(0,i.kt)("p",null,"Under normal circumstances, avoid doing anything in these folder as much as possible, it might mess up the Linux subsystem."),(0,i.kt)("h1",{id:"compiling-unit-tests"},"Compiling unit tests"),(0,i.kt)("p",null,"To compile unit tests, you need to install two additional packages:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$ sudo apt-get install clang"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"$ sudo apt-get install libblocksruntime-dev")),(0,i.kt)("p",null,"Then run the following command to compile all unit tests:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$ make test")),(0,i.kt)("p",null,"You can also compile them individually as well. For more usage information run this command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$ cd ./src/test && make help")))}d.isMDXComponent=!0}}]);