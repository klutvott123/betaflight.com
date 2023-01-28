"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),c=r,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||a;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const a={},o="Development",l={unversionedId:"development/development/Development",id:"development/development/Development",title:"Development",description:"This document is primarily for developers.",source:"@site/docs/development/development/Development.md",sourceDirName:"development/development",slug:"/development/development/",permalink:"/betaflight.com/docs/development/development/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"development",previous:{title:"VTX",permalink:"/betaflight.com/docs/development/VTX"},next:{title:"Atomic Barrier implementation",permalink:"/betaflight.com/docs/development/development/Atomic Barrier"}},s={},d=[{value:"General principles",id:"general-principles",level:2},{value:"Unit testing",id:"unit-testing",level:2},{value:"Running the tests.",id:"running-the-tests",level:3},{value:"Using git and github",id:"using-git-and-github",level:2},{value:"Providing Test Targets for Pull Requests",id:"providing-test-targets-for-pull-requests",level:3},{value:"IDEs and .gitignore",id:"ides-and-gitignore",level:3},{value:"Custom Defaults - for developers",id:"custom-defaults---for-developers",level:3}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"development"},"Development"),(0,r.kt)("p",null,"This document is primarily for developers.\nIf you plan to contribute to Betaflight by opening a pull request for a bugfix or feature, please read the following text carefully before you start. This will help you in submitting your contribution in a form that has a good chance of being accepted. Please also read up on the ",(0,r.kt)("a",{parentName:"p",href:"/betaflight.com/docs/development/development/CodingStyle"},"coding style"),"."),(0,r.kt)("h2",{id:"general-principles"},"General principles"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Name everything well."),(0,r.kt)("li",{parentName:"ol"},"Strike a balance between simplicity and not-repeating code."),(0,r.kt)("li",{parentName:"ol"},"Methods that start with the word 'find' can return a null, methods that start with 'get' should not."),(0,r.kt)("li",{parentName:"ol"},"Keep methods short - it makes it easier to test."),(0,r.kt)("li",{parentName:"ol"},"Don't be afraid of moving code to a new file - it helps to reduce test dependencies."),(0,r.kt)("li",{parentName:"ol"},"Avoid noise-words in variable names, like 'data' or 'info'. Think about what you're naming and name it well. Don't be afraid to rename anything."),(0,r.kt)("li",{parentName:"ol"},"Avoid comments that describe what the code is doing, the code should describe itself. Comments are useful however for big-picture purposes and to document content of variables."),(0,r.kt)("li",{parentName:"ol"},"If you need to document a variable do it at the declaration, don't copy the comment to the ",(0,r.kt)("inlineCode",{parentName:"li"},"extern")," usage since it will lead to comment rot."),(0,r.kt)("li",{parentName:"ol"},"Seek advice from other developers - know you can always learn more."),(0,r.kt)("li",{parentName:"ol"},"Be professional - attempts at humor or slating existing code in the codebase itself is not helpful when you have to change/fix it."),(0,r.kt)("li",{parentName:"ol"},"Know that there's always more than one way to do something and that code is never final - but it does have to work.")),(0,r.kt)("p",null,"It is also advised to read about clean code, here are some useful links:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://cleancoders.com/"},"http://cleancoders.com/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/SOLID_%28object-oriented_design%29"},"http://en.wikipedia.org/wiki/SOLID_%28object-oriented_design%29")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Code_smell"},"http://en.wikipedia.org/wiki/Code_smell")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Code_refactoring"},"http://en.wikipedia.org/wiki/Code_refactoring")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.amazon.co.uk/Working-Effectively-Legacy-Robert-Martin/dp/0131177052"},"http://www.amazon.co.uk/Working-Effectively-Legacy-Robert-Martin/dp/0131177052"))),(0,r.kt)("h2",{id:"unit-testing"},"Unit testing"),(0,r.kt)("p",null,"Ideally, there should be tests for any new code. However, since this is a legacy codebase which was not designed to be tested this might be a bit difficult."),(0,r.kt)("p",null,"If you want to make changes and want to make sure it's tested then focus on the minimal set of changes required to add a test."),(0,r.kt)("p",null,"Tests currently live in the ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," folder and they use the google test framework.\nThe tests are compiled and run natively on your development machine and not on the target platform.\nThis allows you to develop tests and code and actually execute it to make sure it works without needing a development board or simulator."),(0,r.kt)("p",null,"This project could really do with some functional tests which test the behaviour of the application."),(0,r.kt)("p",null,"All pull requests to add/improve the testability of the code or testing methods are highly sought!"),(0,r.kt)("p",null,"Note: Tests are written in C++ and linked with with firmware's C code. All code is also instrumented using gcov to make test coverage analysis possible."),(0,r.kt)("h3",{id:"running-the-tests"},"Running the tests."),(0,r.kt)("p",null,"The tests and test build system is very simple and based off the googletest example files, it will be improved in due course. From the root folder of the project simply do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"make test\n")),(0,r.kt)("p",null,"You can also do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"make junittest\n")),(0,r.kt)("p",null,"This will build a set of executable files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"obj/test")," folder, one for each ",(0,r.kt)("inlineCode",{parentName:"p"},"*_unittest.cc")," file.\nIt will stop after first compile/build error. If you want it to continue with the next test module you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"make -k test"),"."),(0,r.kt)("p",null,'After they have been executed by the make invocation, you can still run them on the command line to execute the tests and to see the test report. Test reports will also be produced in form of junit XML files, if tests are built and run with the "junittest" goal. Junit report files are saved in obj/test directory and has the following naming pattern test_name_results.xml, for example: obj/test/battery_unittest_results.xml'),(0,r.kt)("p",null,"You can also step-debug the tests in eclipse and you can use the GoogleTest test runner to make building and re-running the tests simple."),(0,r.kt)("p",null,"The tests are currently always compiled with debugging information enabled, there may be additional warnings, if you see any warnings please attempt to fix them and submit pull requests with the fixes."),(0,r.kt)("p",null,"Tests are verified and working with GCC 4.9.3"),(0,r.kt)("h2",{id:"using-git-and-github"},"Using git and github"),(0,r.kt)("p",null,"Ensure you understand the github workflow: ",(0,r.kt)("a",{parentName:"p",href:"https://guides.github.com/introduction/flow/index.html"},"https://guides.github.com/introduction/flow/index.html")),(0,r.kt)("p",null,"Please keep pull requests focused on one thing only, since this makes it easier to merge and test in a timely manner."),(0,r.kt)("p",null,"If you need help with pull requests there are guides on github here:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.github.com/articles/creating-a-pull-request/"},"https://help.github.com/articles/creating-a-pull-request/")),(0,r.kt)("p",null,"The main flow for a contributing is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to github, go to the betaflight repository and press ",(0,r.kt)("inlineCode",{parentName:"li"},"fork"),";"),(0,r.kt)("li",{parentName:"ol"},"Then using the command line/terminal on your computer: ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone <url to YOUR fork>"),";"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"cd betaflight"),";"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git checkout master"),";"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git checkout -b my-new-code"),";"),(0,r.kt)("li",{parentName:"ol"},"Make changes;"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git add <files that have changed>"),";"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git commit"),";"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git push origin my-new-code"),";"),(0,r.kt)("li",{parentName:"ol"},"Create pull request using github UI to merge your changes from your new branch into ",(0,r.kt)("inlineCode",{parentName:"li"},"betaflight/master"),";"),(0,r.kt)("li",{parentName:"ol"},"Repeat from step 4 for new other changes.")),(0,r.kt)("p",null,"The primary thing to remember is that separate pull requests should be created for separate branches. Never create a pull request from your ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch."),(0,r.kt)("p",null,"Once you have created the PR,\nevery new commit/push in your branch will propagate from your fork into the PR in the main github/betaflight repo.\nCheckout another branch first if you want something else."),(0,r.kt)("p",null,"Push will often fail if you edit or squash commits in a branch already pushed. Never do such things after creating the PR."),(0,r.kt)("p",null,"Later, you can get the changes from the betaflight repo into your ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch by adding betaflight as a git remote and merging from it as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git remote add betaflight https://github.com/betaflight/betaflight.git")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git checkout master")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git fetch betaflight")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git merge betaflight/master")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git push origin master")," is an optional step that will update your fork on github")),(0,r.kt)("p",null,"You can also perform the git commands using the git client inside Eclipse. Refer to the Eclipse git manual."),(0,r.kt)("h3",{id:"providing-test-targets-for-pull-requests"},"Providing Test Targets for Pull Requests"),(0,r.kt)("p",null,"If you open a pull request for the betaflight repository that contains a change that can be tested by other users, please build a set of test firmware files for all Unified Targets and attach them to the pull request. The required firmware files can be built in zipped form ready for upload to GitHub with ",(0,r.kt)("inlineCode",{parentName:"p"},"make unified_zip"),". When attaching test firmware files, you can point users to this video for instructions on how to install the test firmware: ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/I1uN9CN30gw"},"https://youtu.be/I1uN9CN30gw")),(0,r.kt)("p",null,"Example of a pull request with test firmware attached:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pull request with test targets",src:n(84317).Z,width:"557",height:"222"})),(0,r.kt)("h3",{id:"ides-and-gitignore"},"IDEs and .gitignore"),(0,r.kt)("p",null,"The projects ",(0,r.kt)("a",{parentName:"p",href:"/.gitignore"},".gitignore")," already ignores certain artifacts from some IDEs, but if you'd like to use something else, you can set up git to ignore the necessary files at a global level (all git projects on the computer)"),(0,r.kt)("p",null,"It is always good to check that you haven't done this already: ",(0,r.kt)("inlineCode",{parentName:"p"},"git config --global --get core.excludesfile")),(0,r.kt)("p",null,"For Linux/BSD/OSX: ",(0,r.kt)("inlineCode",{parentName:"p"},"git config --global core.excludesfile '~/.gitignore'")),(0,r.kt)("p",null,"For Windows: ",(0,r.kt)("inlineCode",{parentName:"p"},"git config --global core.excludesfile '%USERPROFILE%\\.gitignore'")),(0,r.kt)("p",null,"When you ",(0,r.kt)("inlineCode",{parentName:"p"},"git config --global --get core.excludesfile")," a second time, you should get a file location back."),(0,r.kt)("h3",{id:"custom-defaults---for-developers"},"Custom Defaults - for developers"),(0,r.kt)("p",null,'As all targets are now MCU based (and cloud built), this poses a problem for developers in flashing and running a fully baked "hex" using the standard debugger. The board scratch space (located at the /src/main/board directory) allows developers to setup their environment like they were running a fully baked unified target.'),(0,r.kt)("p",null,"Once setup, you can simply execute make with ",(0,r.kt)("inlineCode",{parentName:"p"},"make BOARD=BETAFLIGHTF7")," where BETAFLIGHTF7 is the sub directory name under /src/main/board i.e. /src/main/board/BETAFLIGHTF7."),(0,r.kt)("p",null,"For example if you were developing and you had the BETAFLIGHTF7 target:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the directory /src/main/board/BETAFLIGHTF7")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create files, ",(0,r.kt)("inlineCode",{parentName:"p"},"board.c"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"board.h"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"board.mk")," in the directory created (in #1 above).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"board.c")," is where you will insert the custom defaults so they are baked into the board already (and do not need to be loaded separately). This is great for debugging as they will already be present in the flash. So the ",(0,r.kt)("inlineCode",{parentName:"p"},"board.c")," for BETAFLIGHTF7 is:"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"board.c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#include "board.h"\n\nconst char __attribute__ ((section(".custom_defaults"), used, aligned(4))) customDefaults[] =\n    "# Betaflight\\n"\n    "board_name BETAFLIGHTF7\\n"\n    "manufacturer_id FPVM\\n"\n    "resource BEEPER 1 D15\\n",\n    "resource MOTOR 1 B00\\n",\n    "resource MOTOR 2 B01\\n",\n    "resource MOTOR 3 E09\\n",\n    "resource MOTOR 4 E11\\n",\n    "resource PPM 1 A03\\n",\n    "resource SONAR_TRIGGER 1 B10\\n",\n    "resource SONAR_ECHO 1 B11\\n",\n    "resource LED_STRIP 1 D12\\n",\n    "resource SERIAL_TX 1 A09\\n",\n    "resource SERIAL_TX 2 A02\\n",\n    "resource SERIAL_TX 3 B10\\n",\n    "resource SERIAL_TX 6 C06\\n",\n    "resource SERIAL_RX 1 A10\\n",\n    "resource SERIAL_RX 2 A03\\n",\n    "resource SERIAL_RX 3 B11\\n",\n    "resource SERIAL_RX 6 C07\\n",\n    "resource LED 1 E00\\n",\n    "resource SPI_SCK 1 A05\\n",\n    "resource SPI_SCK 2 B13\\n",\n    "resource SPI_SCK 3 C10\\n",\n    "resource SPI_SCK 4 E02\\n",\n    "resource SPI_MISO 1 A06\\n",\n    "resource SPI_MISO 2 B14\\n",\n    "resource SPI_MISO 3 C11\\n",\n    "resource SPI_MISO 4 E05\\n",\n    "resource SPI_MOSI 1 A07\\n",\n    "resource SPI_MOSI 2 B15\\n",\n    "resource SPI_MOSI 3 C12\\n",\n    "resource SPI_MOSI 4 E06\\n",\n    "resource CAMERA_CONTROL 1 C08\\n",\n    "resource ADC_BATT 1 C03\\n",\n    "resource ADC_RSSI 1 C05\\n",\n    "resource ADC_CURR 1 C02\\n",\n    "resource BARO_CS 1 A01\\n",\n    "resource FLASH_CS 1 E04\\n",\n    "resource OSD_CS 1 B12\\n",\n    "resource GYRO_EXTI 1 D00\\n",\n    "resource GYRO_EXTI 2 E08\\n",\n    "resource GYRO_CS 1 A04\\n",\n    "resource GYRO_CS 2 A15\\n",\n    "resource USB_DETECT 1 C04\\n",\n    "timer C08 AF3\\n",\n    "timer E13 AF1\\n",\n    "timer B00 AF2\\n",\n    "timer B01 AF2\\n",\n    "timer E09 AF1\\n",\n    "timer E11 AF1\\n",\n    "timer D12 AF2\\n",\n    "timer B10 AF1\\n",\n    "timer B11 AF1\\n",\n    "timer C06 AF3\\n",\n    "timer C07 AF3\\n",\n    "timer A03 AF1\\n",\n    "timer A02 AF3\\n",\n    "dma ADC 1 1\\n",\n    "dma pin C08 1\\n",\n    "dma pin E13 1\\n",\n    "dma pin B00 0\\n",\n    "dma pin B01 0\\n",\n    "dma pin E09 2\\n",\n    "dma pin E11 1\\n",\n    "dma pin D12 0\\n",\n    "dma pin B10 0\\n",\n    "dma pin B11 0\\n",\n    "dma pin C06 0\\n",\n    "dma pin C07 1\\n",\n    "dma pin A03 0\\n",\n    "feature OSD\\n",\n    "set mag_bustype = I2C\\n",\n    "set mag_i2c_device = 2\\n",\n    "set baro_spi_device = 1\\n",\n    "set blackbox_device = SPIFLASH\\n",\n    "set current_meter = ADC\\n",\n    "set battery_meter = ADC\\n",\n    "set beeper_inversion = ON\\n",\n    "set beeper_od = OFF\\n",\n    "set max7456_spi_bus = 2\\n",\n    "set dashboard_i2c_bus = 2\\n",\n    "set flash_spi_bus = 4\\n",\n    "set gyro_1_bustype = SPI\\n",\n    "set gyro_1_spibus = 1\\n",\n    "set gyro_1_sensor_align = CW90\\n",\n    "set gyro_1_align_yaw = 900\\n",\n    "set gyro_2_spibus = 3\\n",\n    "set gyro_2_sensor_align = CW270\\n",\n    "set gyro_2_align_yaw = 2700\\n"\n    "\\0";\n')),(0,r.kt)("p",null,'NOTE: When wanting to do this for other boards, the contents is replaced with everything you need for the custom defaults configuration you want to "bake" into the board when flashed. You can get this from the unified targets repository if needed. DO NOT forget the firstline ',(0,r.kt)("inlineCode",{parentName:"p"},"# Betaflight\\n"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"\\0")," terminator (one at the very end of the list), and the ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n")," line termination (one at the end of each line) need to be added."),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"board.h")," allows for any defines that you are working on as developers rather than specify via command line in EXTRA_FLAGS (as the cloud build system does). Therefore for ",(0,r.kt)("inlineCode",{parentName:"li"},"board.h")," for the BETAFLIGHTF7 insert the following:")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"board.h")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#define USE_GYRO_SPI_MPU6000\n#define USE_ACC_SPI_MPU6000\n#define USE_GYRO_SPI_MPU6500\n#define USE_ACC_SPI_MPU6500\n#define USE_MAX7456\n#define USE_DSHOT\n#define USE_SERIALRX\n#define USE_SERIALRX_CRSF\n#define USE_SERIALRX_GHST\n#define USE_SERIALRX_SBUS\n#define USE_TELEMETRY\n#define USE_FLASH\n#define USE_OSD\n#define USE_VTX\n#define USE_TELEMETRY_CRSF\n#define USE_TELEMETRY_GHST\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"board.mk")," allows for any additional source files, and to specify the target. The minimum requirement is the target (unless you specify this on the command line for make). So the contents of ",(0,r.kt)("inlineCode",{parentName:"li"},"board.mk")," for BETAFLIGHTF7 is as follows:")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"board.mk")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"TARGET := STM32F7X2\n\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"You should now be able to successfully make a debuggable version of Betaflight for the BETAFLIGHTF7 board, using the command line: ",(0,r.kt)("inlineCode",{parentName:"li"},"make BOARD=BETAFLIGHTF7"),". Other command line options all remain valid also. e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},'make BOARD=BETAFLIGHTF7 TARGET=STM32F7X2 EXTRA_FLAGS="-DUSE_BATTERY_CONTINUE"'),".")),(0,r.kt)("p",null,"NOTE: The ",(0,r.kt)("strong",{parentName:"p"},"/src/main/board"),' directory is GIT IGNORED. This is because it is a developers scratch space for this very purpose, so code you include will not be picked up for committing. You can create as many board "profiles" as you like in this directory.'))}p.isMDXComponent=!0},84317:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pull_request_test_targets-87994d86ab0b258cef38e860c76f59d2.png"}}]);