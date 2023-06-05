/*! For license information please see 1068.06126517.js.LICENSE.txt */
"use strict";(self.webpackChunkhybrid_docs=self.webpackChunkhybrid_docs||[]).push([[1068],{2469:(t,e,r)=>{r.d(e,{l:()=>h});var o=r(3265),n=r(2877);const i="",s=o.iv`
  button {
    display: inline-block;
    user-select: none;
    padding-top: var(--hybrid-button-padding-y, 0.5rem);
    padding-bottom: var(--hybrid-button-padding-x, 0.5rem);
    padding-right: var(--hybrid-button-padding-r, 0.8rem);
    padding-left: var(--hybrid-button-padding-l, 0.8rem);
    border-radius: var(--hybrid-button-border-radius, 0.25rem);
    border-width: var(--hybrid-button-border-width, 1px);
    border-color: var(--hybrid-button-border-color, #d0d0d0);
    background-color: var(--hybrid-button-background-color, #f9f9f9);
    border-style: solid;
    color: var(--hybrid-button-text-color, #393939);
    font-size: var(--hybrid-button-font-size, 0.8rem);
    font-weight: var(--hybrid-button-font-weight, normal);
    text-transform: var(--hybrid-button-text-transform, none);
  }

  button:hover:not(:disabled) {
    cursor: pointer;
    border-color: var(--hybrid-button-hover-border-color, #1677ff);
    color: var(--hybrid-button-hover-color, #1677ff);
  }

  button:active:not(:disabled) {
    outline: none;
    border-color: var(--hybrid-button-active-border-color, #1661b1);
    color: var(--hybrid-button-active-color, #184d86);
  }

  button[data-display='block'] {
    width: 100%;
  }

  button[data-size='small'] {
    padding-top: var(--hybrid-small-button-padding-y, 0.3rem);
    padding-bottom: var(--hybrid-small-button-padding-y, 0.3rem);
    padding-right: var(--hybrid-small-button-padding-x, 0.6rem);
    padding-left: var(--hybrid-small-button-padding-x, 0.6rem);
  }

  button[data-size='large'] {
    padding-top: var(--hybrid-small-button-padding-y, 0.6rem);
    padding-bottom: var(--hybrid-small-button-padding-y, 0.6rem);
    padding-right: var(--hybrid-small-button-padding-x, 0.9rem);
    padding-left: var(--hybrid-small-button-padding-x, 0.9rem);
    font-size: var(--hybrid-small-button-font-size, 0.9rem);
  }

  button[data-state='loading'] {
    opacity: 0.5;
  }

  :host {
    user-select: none;
    -webkit-user-select: none;
  }
`,a=o.iv`
  button[data-danger] {
    border-color: var(--hybrid-button-border-color, #ff4a00);
    color: var(--hybrid-button-danger-text-color, #ffffff);
  }

  button[data-danger]:not([data-type='primary']):not(:disabled) {
    color: var(--hybrid-button-danger-text-color, #ff4a00);
    border-color: var(--hybrid-button-danger-border-color, #ff4a00);
  }

  button[data-danger]:not([data-type='primary']):hover:not(:disabled) {
    color: var(--hybrid-button-danger-hover-text-color, #ff4a00);
    border-color: var(--hybrid-button-danger-hover-border-color, #ff4a00);
    opacity: 0.9;
  }

  button[data-danger]:not([data-type='primary']):active:not(:disabled) {
    color: var(--hybrid-button-danger-active-text-color, #ff4a00);
    border-color: var(--hybrid-button-danger-active-border-color, #ff4a00);
    opacity: 1;
  }

  button[data-danger][data-type='primary']:not(:disabled) {
    color: var(--hybrid-button-danger-text-color, #ffffff);
    background-color: var(
      --hybrid-primary-button-danger-background-color,
      #ff4a00
    );
    border-color: var(--hybrid-primary-button-danger-border-color, #ff4a00);
  }

  button[data-danger][data-type='primary']:hover:not(:disabled) {
    color: var(--hybrid-button-danger-text-color, #ffffff);
    background-color: var(
      --hybrid-primary-button-danger-hover-background-color,
      #ff4a00
    );
    border-color: var(
      --hybrid-primary-button-danger-hover-border-color,
      #ff4a00
    );
    opacity: 0.9;
  }

  button[data-danger][data-type='primary']:active:not(:disabled) {
    color: var(--hybrid-button-danger-text-color, #ffffff);
    background-color: var(
      --hybrid-primary-button-danger-hover-background-color,
      #ff4a00
    );
    border-color: var(
      --hybrid-primary-button-danger-hover-border-color,
      #ff4a00
    );
    opacity: 1;
  }
`,l=o.iv`
  button:disabled {
    cursor: auto;
    background-color: var(--hybrid-button-disabled-background-color, #ccc);
    color: var(--hybrid-button-disabled-text-color, #999);
    border-color: var(--hybrid-button-disabled-border-color, #bbb);
  }
  button:focus {
    outline: none;
    box-shadow: none;
  }
  button:active:not(:disabled) {
    outline: none;
    border-color: #aaa;
    box-shadow: none;
  }

  button:disabled:hover {
    cursor: not-allowed;
  }
`,d=[s,a,o.iv`
  button[data-type='primary'] {
    border-color: var(--hybrid-button-primary-border-color, #1277e1);
    background-color: var(--hybrid-button-primary-background-color, #1277e1);
    color: var(--hybrid-button-primary-text-color, #ffffff);
  }

  button[data-type='primary']:hover:not(:disabled) {
    cursor: pointer;
    background-color: var(
      --hybrid-button-primary-hover-background-color,
      #0a70ff
    );
    border-color: var(--hybrid-button-primary-hover-border-color, #1677ff);
    color: var(--hybrid-button-primary-text-color, #ffffff);
  }
  button[data-type='primary']:active:not(:disabled) {
    cursor: pointer;
    background-color: var(
      --hybrid-button-primary-active-background-color,
      #0559cf
    );
    border-color: var(--hybrid-button-primary-active-border-color, #1677ff);
  }
`,o.iv`
  button[data-type='dashed'] {
    border-style: dashed;
  }

  button[data-type='dashed']:hover:not(:disabled) {
    cursor: pointer;

    border-color: var(--hybrid-button-dashed-hover-border-color, #1677ff);
    color: var(--hybrid-button-dashed-hover-text-color, #1677ff);
  }
  button[data-type='dashed']:active:not(:disabled) {
    cursor: pointer;
    border-color: var(--hybrid-button-dashed-active-border-color, #1677ff);
  }
`,o.iv`
  button[data-type='text'] {
    border: none;
  }
  button[data-type='text']:hover:not(:disabled) {
    cursor: pointer;

    background-color: var(--hybrid-button-text-hover-background-color, #e1e1e1);
  }
  button[data-type='text']:active:not(:disabled) {
    cursor: pointer;
    background-color: var(
      --hybrid-button-text-active-background-color,
      #c1c1c1
    );
  }
  button[data-type='text'] {
    border-style: text;
  }

  button[data-type='text']:hover:not(:disabled) {
    cursor: pointer;
  }
`,o.iv`
  button[data-type='link'] {
    border: none;
    color: var(--hybrid-button-link-text-color, #1677ff);
    background-color: transparent;
  }
  button[data-type='link']:hover:not(:disabled) {
    cursor: pointer;
    color: var(--hybrid-button-link-hover-text-color, #4a96ff);
  }
  button[data-type='link']:active:not(:disabled) {
    cursor: pointer;
    color: var(--hybrid-button-link-active-text-color, #0862df);
  }
`,o.iv`
  .icon-only {
    width: 32px;
    padding-left: 0.6rem;
  }
  .icon-only[data-size='large'] {
    width: 42px;
    padding-left: 0.9rem;
  }

  .button-rounded {
    border-radius: 50%;
  }
`,l,o.iv`
  button[data-usedas='post'] {
    border-radius: var(
      --hybrid-button-usedas-post-border-radius,
      0 0.3rem 0.3rem 0
    );
    height: 100%;
  }
  button[data-usedas='pre'] {
    border-radius: var(
      --hybrid-button-usedas-post-border-radius,
      0.3rem 0 0 0.3rem
    );
    height: 100%;
  }
`,o.iv``],c=o.dy`<style>
  :host {
    width: 100%;
  }
</style>`;var u=function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};let h=class extends o.oi{constructor(){super(...arguments),this.disabled=!1,this.loading=!1,this.display=i,this.block=!1,this.size=i,this.danger=!1,this.type="default",this.shape=i,this.icon=i,this.link=i,this.target=i,this.hasSlot=!1}firstUpdated(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#slot");0===(null==e?void 0:e.assignedNodes()).length||requestAnimationFrame((()=>{this.hasSlot=!0,this.requestUpdate()}))}render(){return o.dy`
      ${this.block?c:o.Ld}
      <button
        part="container"
        ?disabled="${this.disabled}"
        ?autofocus=${this.autofocus}
        data-type="${this.type}"
        data-usedas="${this.usedas}"
        data-display=${this.block?"block":o.Ld}
        data-size=${this.size?this.size:o.Ld}
        data-state="${this.loading?"loading":o.Ld}"
        ?data-danger="${this.danger}"
        class="
        ${"circle"===this.shape?"button-rounded":i}
      ${this.hasSlot?i:"icon-only"}
      "
      >
        ${this.icon&&o.dy` <hy-icon name=${this.icon}></hy-icon>`}
        <slot id="slot"></slot>
      </button>
    `}};h.styles=d,u([(0,n.Cb)({type:Boolean})],h.prototype,"disabled",void 0),u([(0,n.Cb)({type:Boolean})],h.prototype,"loading",void 0),u([(0,n.Cb)({type:String})],h.prototype,"display",void 0),u([(0,n.Cb)({type:Boolean})],h.prototype,"block",void 0),u([(0,n.Cb)({type:String})],h.prototype,"size",void 0),u([(0,n.Cb)({type:Boolean})],h.prototype,"danger",void 0),u([(0,n.Cb)({type:String})],h.prototype,"type",void 0),u([(0,n.Cb)({type:String})],h.prototype,"shape",void 0),u([(0,n.Cb)({type:String})],h.prototype,"icon",void 0),u([(0,n.Cb)({reflect:!0})],h.prototype,"usedas",void 0),u([(0,n.Cb)({type:String})],h.prototype,"link",void 0),u([(0,n.Cb)({type:String})],h.prototype,"target",void 0),u([(0,n.SB)()],h.prototype,"hasSlot",void 0),h=u([(0,n.Mo)("hy-button")],h)},9164:(t,e,r)=>{r(2469)},3992:(t,e,r)=>{var o;r.d(e,{R:()=>a});var n=r(1943),i=r(7294),s=r(2469);const a=(0,n.L)({tagName:"hy-button",elementClass:s.l,react:o||(o=r.t(i,2)),events:{click:"click"}})},3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>b});var o=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=o.createContext({}),d=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},c=function(t){var e=d(t.components);return o.createElement(l.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),u=d(r),p=n,b=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return r?o.createElement(b,s(s({ref:e},c),{},{components:r})):o.createElement(b,s({ref:e},c))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,s=new Array(i);s[0]=p;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a[u]="string"==typeof t?t:n,s[1]=a;for(var d=2;d<i;d++)s[d]=r[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(t,e,r)=>{r.d(e,{Z:()=>s});var o=r(7294),n=r(6010);const i={tabItem:"tabItem_Ymn6"};function s(t){let{children:e,hidden:r,className:s}=t;return o.createElement("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,s),hidden:r},e)}},4866:(t,e,r)=>{r.d(e,{Z:()=>_});var o=r(7462),n=r(7294),i=r(6010),s=r(2466),a=r(6550),l=r(1980),d=r(7392),c=r(12);function u(t){return function(t){return n.Children.map(t,(t=>{if((0,n.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(t).map((t=>{let{props:{value:e,label:r,attributes:o,default:n}}=t;return{value:e,label:r,attributes:o,default:n}}))}function h(t){const{values:e,children:r}=t;return(0,n.useMemo)((()=>{const t=null!=e?e:u(r);return function(t){const e=(0,d.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,r])}function p(t){let{value:e,tabValues:r}=t;return r.some((t=>t.value===e))}function b(t){let{queryString:e=!1,groupId:r}=t;const o=(0,a.k6)(),i=function(t){let{queryString:e=!1,groupId:r}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r});return[(0,l._X)(i),(0,n.useCallback)((t=>{if(!i)return;const e=new URLSearchParams(o.location.search);e.set(i,t),o.replace(Object.assign({},o.location,{search:e.toString()}))}),[i,o])]}function v(t){const{defaultValue:e,queryString:r=!1,groupId:o}=t,i=h(t),[s,a]=(0,n.useState)((()=>function(t){var e;let{defaultValue:r,tabValues:o}=t;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${o.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=null!=(e=o.find((t=>t.default)))?e:o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:i}))),[l,d]=b({queryString:r,groupId:o}),[u,v]=function(t){let{groupId:e}=t;const r=function(t){return t?`docusaurus.tab.${t}`:null}(e),[o,i]=(0,c.Nk)(r);return[o,(0,n.useCallback)((t=>{r&&i.set(t)}),[r,i])]}({groupId:o}),f=(()=>{const t=null!=l?l:u;return p({value:t,tabValues:i})?t:null})();(0,n.useLayoutEffect)((()=>{f&&a(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((t=>{if(!p({value:t,tabValues:i}))throw new Error(`Can't select invalid tab value=${t}`);a(t),d(t),v(t)}),[d,v,i]),tabValues:i}}var f=r(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function m(t){let{className:e,block:r,selectedValue:a,selectValue:l,tabValues:d}=t;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),h=t=>{const e=t.currentTarget,r=c.indexOf(e),o=d[r].value;o!==a&&(u(e),l(o))},p=t=>{var e;let r=null;switch(t.key){case"Enter":h(t);break;case"ArrowRight":{var o;const e=c.indexOf(t.currentTarget)+1;r=null!=(o=c[e])?o:c[0];break}case"ArrowLeft":{var n;const e=c.indexOf(t.currentTarget)-1;r=null!=(n=c[e])?n:c[c.length-1];break}}null==(e=r)||e.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},e)},d.map((t=>{let{value:e,label:r,attributes:s}=t;return n.createElement("li",(0,o.Z)({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,key:e,ref:t=>c.push(t),onKeyDown:p,onClick:h},s,{className:(0,i.Z)("tabs__item",y.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===e})}),null!=r?r:e)})))}function g(t){let{lazy:e,children:r,selectedValue:o}=t;if(r=Array.isArray(r)?r:[r],e){const t=r.find((t=>t.props.value===o));return t?(0,n.cloneElement)(t,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==o}))))}function $(t){const e=v(t);return n.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},n.createElement(m,(0,o.Z)({},t,e)),n.createElement(g,(0,o.Z)({},t,e)))}function _(t){const e=(0,f.Z)();return n.createElement($,(0,o.Z)({key:String(e)},t))}},1943:(t,e,r)=>{r.d(e,{L:()=>s});const o=new Set(["children","localName","ref","style","className"]),n=new WeakMap,i=(t,e,r,o,i)=>{const s=null==i?void 0:i[e];void 0===s||r===o?null==r&&e in HTMLElement.prototype?t.removeAttribute(e):t[e]=r:((t,e,r)=>{let o=n.get(t);void 0===o&&n.set(t,o=new Map);let i=o.get(e);void 0!==r?void 0===i?(o.set(e,i={handleEvent:r}),t.addEventListener(e,i)):i.handleEvent=r:void 0!==i&&(o.delete(e),t.removeEventListener(e,i))})(t,s,r)};function s(t=window.React,e,r,n,s){let a,l,d;if(void 0===e){const e=t;({tagName:l,elementClass:d,events:n,displayName:s}=e),a=e.react}else a=t,d=r,l=e;const c=a.Component,u=a.createElement,h=new Set(Object.keys(null!=n?n:{}));class p extends c{constructor(){super(...arguments),this.o=null}t(t){if(null!==this.o)for(const e in this.i)i(this.o,e,this.props[e],t?t[e]:void 0,n)}componentDidMount(){this.t()}componentDidUpdate(t){this.t(t)}render(){const{_$Gl:t,...e}=this.props;this.h!==t&&(this.u=e=>{null!==t&&((t,e)=>{"function"==typeof t?t(e):t.current=e})(t,e),this.o=e,this.h=t}),this.i={};const r={ref:this.u};for(const[n,i]of Object.entries(e))o.has(n)?r["className"===n?"class":n]=i:h.has(n)||n in d.prototype?this.i[n]=i:r[n]=i;return u(l,r)}}p.displayName=null!=s?s:d.name;const b=a.forwardRef(((t,e)=>u(p,{...t,_$Gl:e},null==t?void 0:t.children)));return b.displayName=p.displayName,b}},3692:(t,e,r)=>{var o;r.d(e,{Jb:()=>S,Ld:()=>w,dy:()=>E,sY:()=>z});const n=window,i=n.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,a=`lit$${(Math.random()+"").slice(9)}$`,l="?"+a,d=`<${l}>`,c=document,u=(t="")=>c.createComment(t),h=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,b=t=>p(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,y=/>/g,m=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),g=/'/g,$=/"/g,_=/^(?:script|style|textarea|title)$/i,A=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),E=A(1),S=(A(2),Symbol.for("lit-noChange")),w=Symbol.for("lit-nothing"),k=new WeakMap,x=c.createTreeWalker(c,129,null,!1),C=(t,e)=>{const r=t.length-1,o=[];let n,i=2===e?"<svg>":"",l=v;for(let s=0;s<r;s++){const e=t[s];let r,c,u=-1,h=0;for(;h<e.length&&(l.lastIndex=h,c=l.exec(e),null!==c);)h=l.lastIndex,l===v?"!--"===c[1]?l=f:void 0!==c[1]?l=y:void 0!==c[2]?(_.test(c[2])&&(n=RegExp("</"+c[2],"g")),l=m):void 0!==c[3]&&(l=m):l===m?">"===c[0]?(l=null!=n?n:v,u=-1):void 0===c[1]?u=-2:(u=l.lastIndex-c[2].length,r=c[1],l=void 0===c[3]?m:'"'===c[3]?$:g):l===$||l===g?l=m:l===f||l===y?l=v:(l=m,n=void 0);const p=l===m&&t[s+1].startsWith("/>")?" ":"";i+=l===v?e+d:u>=0?(o.push(r),e.slice(0,u)+"$lit$"+e.slice(u)+a+p):e+a+(-2===u?(o.push(void 0),s):p)}const c=i+(t[r]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==s?s.createHTML(c):c,o]};class O{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let n=0,s=0;const d=t.length-1,c=this.parts,[h,p]=C(t,e);if(this.el=O.createElement(h,r),x.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=x.nextNode())&&c.length<d;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(a)){const r=p[s++];if(t.push(e),void 0!==r){const t=o.getAttribute(r.toLowerCase()+"$lit$").split(a),e=/([.?@])?(.*)/.exec(r);c.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?R:"?"===e[1]?H:"@"===e[1]?L:U})}else c.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(_.test(o.tagName)){const t=o.textContent.split(a),e=t.length-1;if(e>0){o.textContent=i?i.emptyScript:"";for(let r=0;r<e;r++)o.append(t[r],u()),x.nextNode(),c.push({type:2,index:++n});o.append(t[e],u())}}}else if(8===o.nodeType)if(o.data===l)c.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(a,t+1));)c.push({type:7,index:n}),t+=a.length-1}n++}}static createElement(t,e){const r=c.createElement("template");return r.innerHTML=t,r}}function N(t,e,r=t,o){var n,i,s,a;if(e===S)return e;let l=void 0!==o?null===(n=r._$Co)||void 0===n?void 0:n[o]:r._$Cl;const d=h(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,r,o)),void 0!==o?(null!==(s=(a=r)._$Co)&&void 0!==s?s:a._$Co=[])[o]=l:r._$Cl=l),void 0!==l&&(e=N(t,l._$AS(t,e.values),l,o)),e}class P{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:r},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:c).importNode(r,!0);x.currentNode=n;let i=x.nextNode(),s=0,a=0,l=o[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new T(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new M(i,this,t)),this.u.push(e),l=o[++a]}s!==(null==l?void 0:l.index)&&(i=x.nextNode(),s++)}return n}p(t){let e=0;for(const r of this.u)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class T{constructor(t,e,r,o){var n;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cm=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),h(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==S&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):b(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==w&&h(this._$AH)?this._$AA.nextSibling.data=t:this.T(c.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=O.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(r);else{const t=new P(n,this),e=t.v(this.options);t.p(r),this.T(e),this._$AH=t}}_$AC(t){let e=k.get(t.strings);return void 0===e&&k.set(t.strings,e=new O(t)),e}k(t){p(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const n of t)o===e.length?e.push(r=new T(this.O(u()),this.O(u()),this,this.options)):r=e[o],r._$AI(n),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class U{constructor(t,e,r,o,n){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,o){const n=this.strings;let i=!1;if(void 0===n)t=N(this,t,e,0),i=!h(t)||t!==this._$AH&&t!==S,i&&(this._$AH=t);else{const o=t;let s,a;for(t=n[0],s=0;s<n.length-1;s++)a=N(this,o[r+s],e,s),a===S&&(a=this._$AH[s]),i||(i=!h(a)||a!==this._$AH[s]),a===w?t=w:t!==w&&(t+=(null!=a?a:"")+n[s+1]),this._$AH[s]=a}i&&!o&&this.j(t)}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class R extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===w?void 0:t}}const j=i?i.emptyScript:"";class H extends U{constructor(){super(...arguments),this.type=4}j(t){t&&t!==w?this.element.setAttribute(this.name,j):this.element.removeAttribute(this.name)}}class L extends U{constructor(t,e,r,o,n){super(t,e,r,o,n),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=N(this,t,e,0))&&void 0!==r?r:w)===S)return;const o=this._$AH,n=t===w&&o!==w||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==w&&(o===w||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class M{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const I=n.litHtmlPolyfillSupport;null==I||I(O,T),(null!==(o=n.litHtmlVersions)&&void 0!==o?o:n.litHtmlVersions=[]).push("2.6.1");const z=(t,e,r)=>{var o,n;const i=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:e;let s=i._$litPart$;if(void 0===s){const t=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:null;i._$litPart$=s=new T(e.insertBefore(u(),t),t,void 0,null!=r?r:{})}return s._$AI(t),s}},2877:(t,e,r)=>{r.d(e,{Mo:()=>o,Cb:()=>i,IO:()=>l,NH:()=>u,SB:()=>s});const o=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:r,elements:o}=e;return{kind:r,elements:o,finisher(e){customElements.define(t,e)}}})(t,e),n=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function i(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):n(t,e)}function s(t){return i({...t,state:!0})}const a=({finisher:t,descriptor:e})=>(r,o)=>{var n;if(void 0===o){const o=null!==(n=r.originalKey)&&void 0!==n?n:r.key,i=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(r.key)}:{...r,key:o};return null!=t&&(i.finisher=function(e){t(e,o)}),i}{const n=r.constructor;void 0!==e&&Object.defineProperty(r,o,e(o)),null==t||t(n,o)}};function l(t,e){return a({descriptor:r=>{const o={get(){var e,r;return null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof r?Symbol():"__"+r;o.get=function(){var r,o;return void 0===this[e]&&(this[e]=null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(t))&&void 0!==o?o:null),this[e]}}return o}})}var d;const c=null!=(null===(d=window.HTMLSlotElement)||void 0===d?void 0:d.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function u(t){const{slot:e,selector:r}=null!=t?t:{};return a({descriptor:o=>({get(){var o;const n="slot"+(e?`[name=${e}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(n),s=null!=i?c(i,t):[];return r?s.filter((t=>t.matches(r))):s},enumerable:!0,configurable:!0})})}},3265:(t,e,r)=>{r.d(e,{oi:()=>A,iv:()=>l,dy:()=>_.dy,Ld:()=>_.Ld});const o=window,n=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class a{constructor(t,e,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(e,t))}return t}toString(){return this.cssText}}const l=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1]),t[0]);return new a(r,t,i)},d=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var c;const u=window,h=u.trustedTypes,p=h?h.emptyScript:"",b=u.reactiveElementPolyfillSupport,v={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},f=(t,e)=>e!==t&&(e==e||t==t),y={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:f};class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const o=this._$Ep(r,e);void 0!==o&&(this._$Ev.set(o,r),t.push(o))})),t}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||y}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Ep(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{n?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const r=document.createElement("style"),n=o.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=e.cssText,t.appendChild(r)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=y){var o;const n=this.constructor._$Ep(t,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==(null===(o=r.converter)||void 0===o?void 0:o.toAttribute)?r.converter:v).toAttribute(e,r.type);this._$El=t,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$El=null}}_$AK(t,e){var r;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(r=t.converter)||void 0===r?void 0:r.fromAttribute)?t.converter:v;this._$El=n,this[n]=i.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,r){let o=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==b||b({ReactiveElement:m}),(null!==(c=u.reactiveElementVersions)&&void 0!==c?c:u.reactiveElementVersions=[]).push("1.6.1");var g,$,_=r(3692);class A extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,_.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return _.Jb}}A.finalized=!0,A._$litElement$=!0,null===(g=globalThis.litElementHydrateSupport)||void 0===g||g.call(globalThis,{LitElement:A});const E=globalThis.litElementPolyfillSupport;null==E||E({LitElement:A});(null!==($=globalThis.litElementVersions)&&void 0!==$?$:globalThis.litElementVersions=[]).push("3.2.2")}}]);