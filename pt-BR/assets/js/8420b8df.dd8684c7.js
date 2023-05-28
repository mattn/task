"use strict";(self.webpackChunktaskfile_dev=self.webpackChunktaskfile_dev||[]).push([[385],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9378:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905));const o={slug:"/faq/",sidebar_position:6},i="Perguntas frequentes",l={unversionedId:"faq",id:"faq",title:"Perguntas frequentes",description:"This page contains a list of frequently asked questions about Task.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/faq.md",sourceDirName:".",slug:"/faq/",permalink:"/pt-BR/faq/",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/faq/",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Integrations",permalink:"/pt-BR/integrations/"},next:{title:"Guia de estilo",permalink:"/pt-BR/styleguide/"}},s={},u=[{value:"Why won&#39;t my task update my shell environment?",id:"why-wont-my-task-update-my-shell-environment",level:2},{value:"&#39;x&#39; builtin command doesn&#39;t work on Windows",id:"x-builtin-command-doesnt-work-on-windows",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"perguntas-frequentes"},"Perguntas frequentes"),(0,a.kt)("p",null,"This page contains a list of frequently asked questions about Task."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#why-wont-my-task-update-my-shell-environment"},"Why won't my task update my shell environment?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#x-builtin-command-doesnt-work-on-windows"},"'x' builtin command doesn't work on Windows"))),(0,a.kt)("h2",{id:"why-wont-my-task-update-my-shell-environment"},"Why won't my task update my shell environment?"),(0,a.kt)("p",null,"This is a limitation of how shells work. Task runs as a subprocess of your current shell, so it can't change the environment of the shell that started it. This limitation is shared by other task runners and build tools too."),(0,a.kt)("p",null,"A common way to work around this is to create a task that will generate output that can be parsed by your shell. For example, to set an environment variable on your shell you can write a task like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'my-shell-env:\n  cmds:\n    - echo "export FOO=foo"\n    - echo "export BAR=bar"\n')),(0,a.kt)("p",null,"Now run ",(0,a.kt)("inlineCode",{parentName:"p"},"eval $(task my-shell-env)")," and the variables ",(0,a.kt)("inlineCode",{parentName:"p"},"$FOO")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"$BAR")," will be available in your shell."),(0,a.kt)("h2",{id:"x-builtin-command-doesnt-work-on-windows"},"'x' builtin command doesn't work on Windows"),(0,a.kt)("p",null,"The default shell on Windows (",(0,a.kt)("inlineCode",{parentName:"p"},"cmd")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"powershell"),") do not have commands like ",(0,a.kt)("inlineCode",{parentName:"p"},"rm")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"cp")," available as builtins. This means that these commands won't work. If you want to make your Taskfile fully cross-platform, you'll need to work around this limitation using one of the following methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"{{OS}}")," function to run an OS-specific script."),(0,a.kt)("li",{parentName:"ul"},"Use something like ",(0,a.kt)("inlineCode",{parentName:"li"},'{{if eq OS "windows"}}powershell {{end}}<my_cmd>')," to detect windows and run the command in Powershell directly."),(0,a.kt)("li",{parentName:"ul"},"Use a shell on Windows that supports these commands as builtins, such as ",(0,a.kt)("a",{parentName:"li",href:"https://gitforwindows.org/"},"Git Bash")," or ",(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/windows/wsl/install"},"WSL"),".")),(0,a.kt)("p",null,"We want to make improvements to this part of Task and the issues below track this work. Constructive comments and contributions are very welcome!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-task/task/issues/197"},"#197")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mvdan/sh/issues/93"},"mvdan/sh#93")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mvdan/sh/issues/97"},"mvdan/sh#97"))))}m.isMDXComponent=!0}}]);