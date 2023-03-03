"use strict";(self.webpackChunkhybrid_docs=self.webpackChunkhybrid_docs||[]).push([[6103],{5203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(7294),l=n(6010),r=n(1944),o=n(5281),i=n(9460),s=n(9058),c=n(390),m=n(7462),d=n(5999),u=n(2244);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(u.Z,(0,m.Z)({},n,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(u.Z,(0,m.Z)({},t,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function v(){var e;const{assets:t,metadata:n}=(0,i.C)(),{title:l,description:o,date:s,tags:c,authors:m,frontMatter:d}=n,{keywords:u}=d,g=null!=(e=t.image)?e:d.image;return a.createElement(r.d,{title:l,description:o,keywords:u,image:g},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:s}),m.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var f=n(9407);function p(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:r}=(0,i.C)(),{nextItem:o,prevItem:m,frontMatter:d}=l,{hide_table_of_contents:u,toc_min_heading_level:v,toc_max_heading_level:p}=d;return a.createElement(s.Z,{sidebar:t,toc:!u&&r.length>0?a.createElement(f.Z,{toc:r,minHeadingLevel:v,maxHeadingLevel:p}):void 0},a.createElement(c.Z,null,n),(o||m)&&a.createElement(g,{nextItem:o,prevItem:m}))}function h(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(v,null),a.createElement(p,{sidebar:e.sidebar},a.createElement(t,null))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),l=n(3366),r=n(7294),o=n(6010),i=n(3743);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},c=["className"],m="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){let{className:t}=e,n=(0,l.Z)(e,c);return r.createElement("div",{className:(0,o.Z)(s.tableOfContents,"thin-scrollbar",t)},r.createElement(i.Z,(0,a.Z)({},n,{linkClassName:m,linkActiveClassName:d})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),l=n(3366),r=n(7294),o=n(6668);const i=["parentIndex"];function s(e){const t=e.map((e=>Object.assign({},e,{parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n}=e,r=(0,l.Z)(e,i);n>=0?t[n].children.push(r):a.push(r)})),a}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function m(e){const t=e.getBoundingClientRect();return t.top===t.bottom?m(e.parentNode):t}function d(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>m(e).top>=a));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function u(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function g(e){const t=(0,r.useRef)(void 0),n=u();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=d(i,{anchorTopOffset:n.current}),c=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function v(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?r.createElement("ul",{className:l?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(v,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const f=r.memo(v),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:d,maxHeadingLevel:u}=e,v=(0,l.Z)(e,p);const h=(0,o.L)(),b=null!=d?d:h.tableOfContents.minHeadingLevel,L=null!=u?u:h.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>c({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:b,maxHeadingLevel:L});return g((0,r.useMemo)((()=>{if(i&&m)return{linkClassName:i,linkActiveClassName:m,minHeadingLevel:b,maxHeadingLevel:L}}),[i,m,b,L])),r.createElement(f,(0,a.Z)({toc:E,className:n,linkClassName:i},v))}}}]);