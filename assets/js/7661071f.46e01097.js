"use strict";(self.webpackChunkhybrid_docs=self.webpackChunkhybrid_docs||[]).push([[9642],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),c=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,m=p["".concat(u,".").concat(d)]||p[d]||g[d]||a;return r?o.createElement(m,l(l({ref:t},i),{},{components:r})):o.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6911:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var o=r(7462),n=r(3366),a=(r(7294),r(3905));const l=["components"],s={slug:"welcome",title:"Welcome",authors:["slorber","yangshun"],tags:["facebook","hello","docusaurus"]},u=void 0,c={permalink:"/docs/blog/welcome",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md",source:"@site/blog/2021-08-26-welcome/index.md",title:"Welcome",description:"Docusaurus blogging features are powered by the blog plugin.",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"facebook",permalink:"/docs/blog/tags/facebook"},{label:"hello",permalink:"/docs/blog/tags/hello"},{label:"docusaurus",permalink:"/docs/blog/tags/docusaurus"}],readingTime:.405,hasTruncateMarker:!1,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",imageURL:"https://github.com/slorber.png",key:"slorber"},{name:"Yangshun Tay",title:"Front End Engineer @ Facebook",url:"https://github.com/yangshun",imageURL:"https://github.com/yangshun.png",key:"yangshun"}],frontMatter:{slug:"welcome",title:"Welcome",authors:["slorber","yangshun"],tags:["facebook","hello","docusaurus"]},nextItem:{title:"MDX Blog Post",permalink:"/docs/blog/mdx-blog-post"}},i={authorsImageUrls:[void 0,void 0]},p=[],g={toc:p},d="wrapper";function m(e){let{components:t}=e,s=(0,n.Z)(e,l);return(0,a.kt)(d,(0,o.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus blogging features")," are powered by the ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"."),(0,a.kt)("p",null,"Simply add Markdown files (or folders) to the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,a.kt)("p",null,"Regular blog authors can be added to ",(0,a.kt)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,a.kt)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,a.kt)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docusaurus Plushie",src:r(5125).Z,width:"1500",height:"500"})),(0,a.kt)("p",null,"The blog supports tags as well!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,a.kt)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."))}m.isMDXComponent=!0},5125:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);