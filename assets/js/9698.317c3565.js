/*! For license information please see 9698.317c3565.js.LICENSE.txt */
"use strict";(self.webpackChunkhybrid_docs=self.webpackChunkhybrid_docs||[]).push([[9698],{2469:(t,e,r)=>{r.d(e,{l:()=>u});var o=r(3265),i=r(2877);const n="",s=o.iv`
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
</style>`;var h=function(t,e,r,o){var i,n=arguments.length,s=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,r,s):i(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let u=class extends o.oi{constructor(){super(...arguments),this.disabled=!1,this.loading=!1,this.display=n,this.block=!1,this.size=n,this.danger=!1,this.type="default",this.shape=n,this.icon=n,this.link=n,this.target=n,this.hasSlot=!1}firstUpdated(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#slot");0===(null==e?void 0:e.assignedNodes()).length||requestAnimationFrame((()=>{this.hasSlot=!0,this.requestUpdate()}))}render(){return o.dy`
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
        ${"circle"===this.shape?"button-rounded":n}
      ${this.hasSlot?n:"icon-only"}
      "
      >
        ${this.icon&&o.dy` <hy-icon name=${this.icon}></hy-icon>`}
        <slot id="slot"></slot>
      </button>
    `}};u.styles=d,h([(0,i.Cb)({type:Boolean})],u.prototype,"disabled",void 0),h([(0,i.Cb)({type:Boolean})],u.prototype,"loading",void 0),h([(0,i.Cb)({type:String})],u.prototype,"display",void 0),h([(0,i.Cb)({type:Boolean})],u.prototype,"block",void 0),h([(0,i.Cb)({type:String})],u.prototype,"size",void 0),h([(0,i.Cb)({type:Boolean})],u.prototype,"danger",void 0),h([(0,i.Cb)({type:String})],u.prototype,"type",void 0),h([(0,i.Cb)({type:String})],u.prototype,"shape",void 0),h([(0,i.Cb)({type:String})],u.prototype,"icon",void 0),h([(0,i.Cb)({reflect:!0})],u.prototype,"usedas",void 0),h([(0,i.Cb)({type:String})],u.prototype,"link",void 0),h([(0,i.Cb)({type:String})],u.prototype,"target",void 0),h([(0,i.SB)()],u.prototype,"hasSlot",void 0),u=h([(0,i.Mo)("hy-button")],u)},3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>b});var o=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,o,i=function(t,e){if(null==t)return{};var r,o,i={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=o.createContext({}),d=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},c=function(t){var e=d(t.components);return o.createElement(l.Provider,{value:e},t.children)},h="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var r=t.components,i=t.mdxType,n=t.originalType,l=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),h=d(r),p=i,b=h["".concat(l,".").concat(p)]||h[p]||u[p]||n;return r?o.createElement(b,s(s({ref:e},c),{},{components:r})):o.createElement(b,s({ref:e},c))}));function b(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=r.length,s=new Array(n);s[0]=p;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a[h]="string"==typeof t?t:i,s[1]=a;for(var d=2;d<n;d++)s[d]=r[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1943:(t,e,r)=>{r.d(e,{L:()=>s});const o=new Set(["children","localName","ref","style","className"]),i=new WeakMap,n=(t,e,r,o,n)=>{const s=null==n?void 0:n[e];void 0===s||r===o?null==r&&e in HTMLElement.prototype?t.removeAttribute(e):t[e]=r:((t,e,r)=>{let o=i.get(t);void 0===o&&i.set(t,o=new Map);let n=o.get(e);void 0!==r?void 0===n?(o.set(e,n={handleEvent:r}),t.addEventListener(e,n)):n.handleEvent=r:void 0!==n&&(o.delete(e),t.removeEventListener(e,n))})(t,s,r)};function s(t=window.React,e,r,i,s){let a,l,d;if(void 0===e){const e=t;({tagName:l,elementClass:d,events:i,displayName:s}=e),a=e.react}else a=t,d=r,l=e;const c=a.Component,h=a.createElement,u=new Set(Object.keys(null!=i?i:{}));class p extends c{constructor(){super(...arguments),this.o=null}t(t){if(null!==this.o)for(const e in this.i)n(this.o,e,this.props[e],t?t[e]:void 0,i)}componentDidMount(){this.t()}componentDidUpdate(t){this.t(t)}render(){const{_$Gl:t,...e}=this.props;this.h!==t&&(this.u=e=>{null!==t&&((t,e)=>{"function"==typeof t?t(e):t.current=e})(t,e),this.o=e,this.h=t}),this.i={};const r={ref:this.u};for(const[i,n]of Object.entries(e))o.has(i)?r["className"===i?"class":i]=n:u.has(i)||i in d.prototype?this.i[i]=n:r[i]=n;return h(l,r)}}p.displayName=null!=s?s:d.name;const b=a.forwardRef(((t,e)=>h(p,{...t,_$Gl:e},null==t?void 0:t.children)));return b.displayName=p.displayName,b}},3692:(t,e,r)=>{var o;r.d(e,{Jb:()=>S,Ld:()=>w,dy:()=>E,sY:()=>D});const i=window,n=i.trustedTypes,s=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,a=`lit$${(Math.random()+"").slice(9)}$`,l="?"+a,d=`<${l}>`,c=document,h=(t="")=>c.createComment(t),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,b=t=>p(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y=/-->/g,f=/>/g,g=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),m=/'/g,$=/"/g,_=/^(?:script|style|textarea|title)$/i,A=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),E=A(1),S=(A(2),Symbol.for("lit-noChange")),w=Symbol.for("lit-nothing"),x=new WeakMap,k=c.createTreeWalker(c,129,null,!1),C=(t,e)=>{const r=t.length-1,o=[];let i,n=2===e?"<svg>":"",l=v;for(let s=0;s<r;s++){const e=t[s];let r,c,h=-1,u=0;for(;u<e.length&&(l.lastIndex=u,c=l.exec(e),null!==c);)u=l.lastIndex,l===v?"!--"===c[1]?l=y:void 0!==c[1]?l=f:void 0!==c[2]?(_.test(c[2])&&(i=RegExp("</"+c[2],"g")),l=g):void 0!==c[3]&&(l=g):l===g?">"===c[0]?(l=null!=i?i:v,h=-1):void 0===c[1]?h=-2:(h=l.lastIndex-c[2].length,r=c[1],l=void 0===c[3]?g:'"'===c[3]?$:m):l===$||l===m?l=g:l===y||l===f?l=v:(l=g,i=void 0);const p=l===g&&t[s+1].startsWith("/>")?" ":"";n+=l===v?e+d:h>=0?(o.push(r),e.slice(0,h)+"$lit$"+e.slice(h)+a+p):e+a+(-2===h?(o.push(void 0),s):p)}const c=n+(t[r]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==s?s.createHTML(c):c,o]};class O{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let i=0,s=0;const d=t.length-1,c=this.parts,[u,p]=C(t,e);if(this.el=O.createElement(u,r),k.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=k.nextNode())&&c.length<d;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(a)){const r=p[s++];if(t.push(e),void 0!==r){const t=o.getAttribute(r.toLowerCase()+"$lit$").split(a),e=/([.?@])?(.*)/.exec(r);c.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?H:"?"===e[1]?j:"@"===e[1]?M:T})}else c.push({type:6,index:i})}for(const e of t)o.removeAttribute(e)}if(_.test(o.tagName)){const t=o.textContent.split(a),e=t.length-1;if(e>0){o.textContent=n?n.emptyScript:"";for(let r=0;r<e;r++)o.append(t[r],h()),k.nextNode(),c.push({type:2,index:++i});o.append(t[e],h())}}}else if(8===o.nodeType)if(o.data===l)c.push({type:2,index:i});else{let t=-1;for(;-1!==(t=o.data.indexOf(a,t+1));)c.push({type:7,index:i}),t+=a.length-1}i++}}static createElement(t,e){const r=c.createElement("template");return r.innerHTML=t,r}}function P(t,e,r=t,o){var i,n,s,a;if(e===S)return e;let l=void 0!==o?null===(i=r._$Co)||void 0===i?void 0:i[o]:r._$Cl;const d=u(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,r,o)),void 0!==o?(null!==(s=(a=r)._$Co)&&void 0!==s?s:a._$Co=[])[o]=l:r._$Cl=l),void 0!==l&&(e=P(t,l._$AS(t,e.values),l,o)),e}class N{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:r},parts:o}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:c).importNode(r,!0);k.currentNode=i;let n=k.nextNode(),s=0,a=0,l=o[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new U(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new z(n,this,t)),this.u.push(e),l=o[++a]}s!==(null==l?void 0:l.index)&&(n=k.nextNode(),s++)}return i}p(t){let e=0;for(const r of this.u)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class U{constructor(t,e,r,o){var i;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cm=null===(i=null==o?void 0:o.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),u(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==S&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):b(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==w&&u(this._$AH)?this._$AA.nextSibling.data=t:this.T(c.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=O.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.p(r);else{const t=new N(i,this),e=t.v(this.options);t.p(r),this.T(e),this._$AH=t}}_$AC(t){let e=x.get(t.strings);return void 0===e&&x.set(t.strings,e=new O(t)),e}k(t){p(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const i of t)o===e.length?e.push(r=new U(this.O(h()),this.O(h()),this,this.options)):r=e[o],r._$AI(i),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class T{constructor(t,e,r,o,i){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,o){const i=this.strings;let n=!1;if(void 0===i)t=P(this,t,e,0),n=!u(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{const o=t;let s,a;for(t=i[0],s=0;s<i.length-1;s++)a=P(this,o[r+s],e,s),a===S&&(a=this._$AH[s]),n||(n=!u(a)||a!==this._$AH[s]),a===w?t=w:t!==w&&(t+=(null!=a?a:"")+i[s+1]),this._$AH[s]=a}n&&!o&&this.j(t)}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===w?void 0:t}}const R=n?n.emptyScript:"";class j extends T{constructor(){super(...arguments),this.type=4}j(t){t&&t!==w?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name)}}class M extends T{constructor(t,e,r,o,i){super(t,e,r,o,i),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=P(this,t,e,0))&&void 0!==r?r:w)===S)return;const o=this._$AH,i=t===w&&o!==w||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==w&&(o===w||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const L=i.litHtmlPolyfillSupport;null==L||L(O,U),(null!==(o=i.litHtmlVersions)&&void 0!==o?o:i.litHtmlVersions=[]).push("2.6.1");const D=(t,e,r)=>{var o,i;const n=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:e;let s=n._$litPart$;if(void 0===s){const t=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:null;n._$litPart$=s=new U(e.insertBefore(h(),t),t,void 0,null!=r?r:{})}return s._$AI(t),s}},2877:(t,e,r)=>{r.d(e,{Mo:()=>o,Cb:()=>n,IO:()=>l,NH:()=>h,SB:()=>s});const o=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:r,elements:o}=e;return{kind:r,elements:o,finisher(e){customElements.define(t,e)}}})(t,e),i=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function n(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):i(t,e)}function s(t){return n({...t,state:!0})}const a=({finisher:t,descriptor:e})=>(r,o)=>{var i;if(void 0===o){const o=null!==(i=r.originalKey)&&void 0!==i?i:r.key,n=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(r.key)}:{...r,key:o};return null!=t&&(n.finisher=function(e){t(e,o)}),n}{const i=r.constructor;void 0!==e&&Object.defineProperty(r,o,e(o)),null==t||t(i,o)}};function l(t,e){return a({descriptor:r=>{const o={get(){var e,r;return null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof r?Symbol():"__"+r;o.get=function(){var r,o;return void 0===this[e]&&(this[e]=null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(t))&&void 0!==o?o:null),this[e]}}return o}})}var d;const c=null!=(null===(d=window.HTMLSlotElement)||void 0===d?void 0:d.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function h(t){const{slot:e,selector:r}=null!=t?t:{};return a({descriptor:o=>({get(){var o;const i="slot"+(e?`[name=${e}]`:":not([name])"),n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i),s=null!=n?c(n,t):[];return r?s.filter((t=>t.matches(r))):s},enumerable:!0,configurable:!0})})}},3265:(t,e,r)=>{r.d(e,{oi:()=>A,iv:()=>l,dy:()=>_.dy,Ld:()=>_.Ld});const o=window,i=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;class a{constructor(t,e,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(e,t))}return t}toString(){return this.cssText}}const l=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1]),t[0]);return new a(r,t,n)},d=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;var c;const h=window,u=h.trustedTypes,p=u?u.emptyScript:"",b=h.reactiveElementPolyfillSupport,v={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},y=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y};class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const o=this._$Ep(r,e);void 0!==o&&(this._$Ev.set(o,r),t.push(o))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(o){const i=this[t];this[e]=o,this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Ep(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{i?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const r=document.createElement("style"),i=o.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=e.cssText,t.appendChild(r)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=f){var o;const i=this.constructor._$Ep(t,r);if(void 0!==i&&!0===r.reflect){const n=(void 0!==(null===(o=r.converter)||void 0===o?void 0:o.toAttribute)?r.converter:v).toAttribute(e,r.type);this._$El=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$El=null}}_$AK(t,e){var r;const o=this.constructor,i=o._$Ev.get(t);if(void 0!==i&&this._$El!==i){const t=o.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(r=t.converter)||void 0===r?void 0:r.fromAttribute)?t.converter:v;this._$El=i,this[i]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,r){let o=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||y)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==b||b({ReactiveElement:g}),(null!==(c=h.reactiveElementVersions)&&void 0!==c?c:h.reactiveElementVersions=[]).push("1.6.1");var m,$,_=r(3692);class A extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,_.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return _.Jb}}A.finalized=!0,A._$litElement$=!0,null===(m=globalThis.litElementHydrateSupport)||void 0===m||m.call(globalThis,{LitElement:A});const E=globalThis.litElementPolyfillSupport;null==E||E({LitElement:A});(null!==($=globalThis.litElementVersions)&&void 0!==$?$:globalThis.litElementVersions=[]).push("3.2.2")}}]);