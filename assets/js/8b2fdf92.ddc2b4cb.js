/*! For license information please see 8b2fdf92.ddc2b4cb.js.LICENSE.txt */
"use strict";(self.webpackChunkhybrid_docs=self.webpackChunkhybrid_docs||[]).push([[3096],{1884:(t,e,o)=>{o.d(e,{K:()=>s});var i=o(3265),n=o(2877),r=function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var d=t.length-1;d>=0;d--)(n=t[d])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};let s=class extends i.oi{render(){return i.dy`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      />

      <i class="fa fa-${this.name}"></i>
    `}};r([(0,n.Cb)({type:String})],s.prototype,"name",void 0),s=r([(0,n.Mo)("hy-icon")],s)},368:(t,e,o)=>{o(1884)},3430:(t,e,o)=>{var i;o.d(e,{o:()=>d});var n=o(1943),r=o(7294),s=o(1884);const d=(0,n.L)({tagName:"hy-icon",elementClass:s.K,react:i||(i=o.t(r,2))})},3658:(t,e,o)=>{o(7472)},7472:(t,e,o)=>{o.d(e,{N:()=>h});var i=o(3265),n=o(2877);const r=[i.iv`
  span {
    box-sizing: var(--hybrid-input-container-box-sizing, border-box);
    padding-top: var(--hybrid-input-container-padding-top, 6px);
    padding-bottom: var(--hybrid-input-container-padding-bottom, 6px);
    padding-left: var(--hybrid-input-container-padding-left, 11px);
    padding-right: var(--hybrid-input-container-padding-right, 11px);
    color: var(--hybrid-input-container-color, rgba(0, 0, 0, 0.88));
    font-size: var(--hybrid-input-container-font-size, 14px);
    line-height: var(--hybrid-input-container-line-height, 1.6);
    position: var(--hybrid-input-container-position, relative);
    display: var(--hybrid-input-container-display, inline-block);
    width: var(--hybrid-input-container-width, 100%);
    background-color: var(--hybrid-input-container-background-color, #fff);
    border-width: var(--hybrid-input-container-border-width, 1px);
    border-style: var(--hybrid-input-container-border-style, solid);
    border-color: var(--hybrid-input-container-border-color, #d9d9d9);
    border-radius: var(--hybrid-input-container-border-radius, 6px 6px 6px 6px);
    display: flex;
  }

  span.inputfocuced,
  span:hover {
    border-color: var(--hybrid-input-hover-container-border-color, #1277e1);
    background-color: var(
      --hybrid-input-hover-container-background-color,
      #fff
    );
  }

  span.inputfocuced input {
    color: var(--hybrid-input-container-border-color, rgba(0, 0, 0, 0.88));
    background-color: var(
      --hybrid-input-hover-container-background-color,
      #fff
    );
  }

  span.inputfocuced input::placeholder {
    color: var(--hybrid-input-container-border-color, rgba(0, 0, 0, 0.4));
  }

  span.prefixed input {
    border-radius: var(--hybrid-input-container-border-radius, 6px 0 0 6px);
    margin-left: 4px;
  }

  span.post {
    border-radius: var(--hybrid-input-container-border-radius, 6px 0 0 6px);
  }

  span.pre {
    border-radius: var(--hybrid-input-container-border-radius, 0 6px 6px 0);
  }
  span.post.pre {
    border-radius: 0;
  }
  span input {
    width: var(--hybrid-input-width, 100%);
    border: var(--hybrid-input-border, none);
    outline: var(--hybrid-input-outline, none);
    display: var(--hybrid-input-display, inline-block);
  }
  slot[name='suffix'],
  slot[name='prefix'],
  slot[name='post'],
  slot[name='pre']s {
    display: var(--hybrid-input-slots-display, inline-block);
  }
`,i.iv`
  span[data-size='large'] {
    padding-top: var(--hybrid-input-large-container-padding-top, 8px);
    padding-bottom: var(--hybrid-input-large-container--padding-bottom, 8px);
  }

  span[data-size='large'] slot[name='suffix'],
  span[data-size='large'] slot[name='prefix'] {
    padding-top: var(--hybrid-input-large-slots-padding-top, 8px);
    padding-bottom: var(--hybrid-input-large-slots-padding-bottom, 8px);
    padding-left: var(--hybrid-input-large-slots-padding-left, 9px);
    padding-right: var(--hybrid-input-large-slots-padding-right, 4px);
  }

  span[data-size='small'] {
    padding-top: var(--hybrid-input-small-padding-top, 0px);
    padding-bottom: var(--hybrid-input-small-padding-bottom, 0px);
  }

  span[data-size='small'],
  span[data-size='small'] slot[name='prefix'] {
    padding-top: var(--hybrid-input-small-padding-top, 4px);
    padding-bottom: var(--hybrid-input-small-padding-bottom, 4px);
    padding-left: var(--hybrid-input-small-padding-left, 5px);
    padding-right: var(--hybrid-input-small-padding-right, 2px);
  }
  :host {
    display: flex;
  }
`,i.iv``];var s=o(3692),d=o(875);const a=(0,d.XM)(class extends d.Xe{constructor(t){var e;if(super(t),t.type!==d.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var o,i;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(o=this.st)||void 0===o?void 0:o.has(t))&&this.nt.add(t);return this.render(e)}const n=t.element.classList;this.nt.forEach((t=>{t in e||(n.remove(t),this.nt.delete(t))}));for(const r in e){const t=!!e[r];t===this.nt.has(r)||(null===(i=this.st)||void 0===i?void 0:i.has(r))||(t?(n.add(r),this.nt.add(r)):(n.remove(r),this.nt.delete(r)))}return s.Jb}});var l,p=function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var d=t.length-1;d>=0;d--)(n=t[d])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};!function(t){t.EMAIL="email",t.PASSWORD="password",t.TEL="tel",t.TEXT="text",t.URL="url"}(l||(l={}));let h=class extends i.oi{constructor(){super(...arguments),this.disabled=!1,this.value="",this.type=l.TEXT,this.spanClasses={inputfocuced:!1},this.slottedClasses={prefixed:!1,suffixed:!1}}firstUpdated(){for(const t of this._postItems)t.setAttribute("usedas","post");for(const t of this._preItems)t.setAttribute("usedas","pre");this.slottedClasses=Object.assign(Object.assign({},this.slottedClasses),{prefixed:!!this._prefixItems.length,post:!!this._postItems.length,pre:!!this._preItems.length}),this.performUpdate()}focusHandler(t){this.spanClasses=Object.assign(Object.assign({},this.spanClasses),{inputfocuced:!0})}blurHandler(t){this.spanClasses=Object.assign(Object.assign({},this.spanClasses),{inputfocuced:!1})}updated(t){super.updated(t),t.has("value")&&this.requestUpdate()}render(){var t,e;return i.dy`
      <slot name="pre"></slot>
      <span
        class="${a(Object.assign(Object.assign({},this.spanClasses),this.slottedClasses))}"
        data-size=${this.size?this.size:i.Ld}
      >
        <slot name="prefix"></slot>
        <input
          .placeholder="${null!==(t=this.palceholder)&&void 0!==t?t:i.Ld}"
          .value="${this.value}"
          type="${this.type}"
          @input=${t=>{this.dispatchEvent(new CustomEvent("valueChange",{detail:t.target}))}}
          @focus=${t=>this.focusHandler(t)}
          @blur=${this.blurHandler}
          ?autofocus=${this.autofocus}
          placeholder=${null!==(e=this.placeholder)&&void 0!==e?e:i.Ld}
        />
        <slot name="suffix"></slot>
      </span>
      <slot name="post"></slot>
    `}};h.styles=r,p([(0,n.Cb)({type:Boolean})],h.prototype,"disabled",void 0),p([(0,n.Cb)({type:String})],h.prototype,"palceholder",void 0),p([(0,n.Cb)({type:String})],h.prototype,"alt",void 0),p([(0,n.Cb)({type:String})],h.prototype,"value",void 0),p([(0,n.Cb)({type:String})],h.prototype,"size",void 0),p([(0,n.Cb)({type:String})],h.prototype,"autocomplete",void 0),p([(0,n.Cb)({reflect:!0})],h.prototype,"type",void 0),p([(0,n.Cb)({type:String})],h.prototype,"placeholder",void 0),p([(0,n.NH)({slot:"prefix",flatten:!0})],h.prototype,"_prefixItems",void 0),p([(0,n.NH)({slot:"post",selector:"hy-button"})],h.prototype,"_postItems",void 0),p([(0,n.NH)({slot:"pre",selector:"hy-button"})],h.prototype,"_preItems",void 0),p([(0,n.SB)()],h.prototype,"spanClasses",void 0),p([(0,n.SB)()],h.prototype,"slottedClasses",void 0),h=p([(0,n.Mo)("hy-input")],h)},8688:(t,e,o)=>{var i;o.d(e,{s:()=>d});var n=o(1943),r=o(7294),s=o(7472);const d=(0,n.L)({tagName:"hy-input",elementClass:s.N,react:i||(i=o.t(r,2)),events:{valueChange:"valueChange"}})},7169:(t,e,o)=>{o.r(e),o.d(e,{BasicDropdow:()=>I,assets:()=>E,contentTitle:()=>T,default:()=>N,frontMatter:()=>R,metadata:()=>O,toc:()=>L});var i=o(7462),n=o(3366),r=o(7294),s=o.t(r,2),d=o(3905),a=(o(4866),o(5162),o(368),o(9164),o(3658),o(3265)),l=o(2877),p=o(3692);const{I:h}=p.Al;var c=o(875);const u=(t,e)=>{var o,i;const n=t._$AN;if(void 0===n)return!1;for(const r of n)null===(i=(o=r)._$AO)||void 0===i||i.call(o,e,!1),u(r,e);return!0},b=t=>{let e,o;do{if(void 0===(e=t._$AM))break;o=e._$AN,o.delete(t),t=e}while(0===(null==o?void 0:o.size))},v=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(void 0===o)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),f(e)}};function g(t){void 0!==this._$AN?(b(this),this._$AM=t,v(this)):this._$AM=t}function y(t,e=!1,o=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let r=o;r<i.length;r++)u(i[r],!1),b(i[r]);else null!=i&&(u(i,!1),b(i));else u(this,t)}const f=t=>{var e,o,i,n;t.type==c.pX.CHILD&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=y),null!==(o=(n=t)._$AQ)&&void 0!==o||(n._$AQ=g))};class m extends c.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),v(this),this.isConnected=t._$AU}_$AO(t,e=!0){var o,i;t!==this.isConnected&&(this.isConnected=t,t?null===(o=this.reconnected)||void 0===o||o.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),e&&(u(this,t),b(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const w=()=>new x;class x{}const $=new WeakMap,C=(0,c.XM)(class extends m{render(t){return p.Ld}update(t,[e]){var o;const i=e!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=e,this.dt=null===(o=t.options)||void 0===o?void 0:o.host,this.rt(this.ct=t.element)),p.Ld}rt(t){var e;if("function"==typeof this.Y){const o=null!==(e=this.dt)&&void 0!==e?e:globalThis;let i=$.get(o);void 0===i&&(i=new WeakMap,$.set(o,i)),void 0!==i.get(this.Y)&&this.Y.call(this.dt,void 0),i.set(this.Y,t),void 0!==t&&this.Y.call(this.dt,t)}else this.Y.value=t}get lt(){var t,e,o;return"function"==typeof this.Y?null===(e=$.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.Y):null===(o=this.Y)||void 0===o?void 0:o.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});o(1884);const k=[a.iv`
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    min-width: var(--hybrid-dropdown-min-width, 160px);
    z-index: var(--hybrid-dropdown-z-index, 400);
    box-shadow: var(
      --hybrid-dropdown-box-shadow,
      0 6px 8px 0 rgba(0, 0, 0, 0.08),
      0 3px 3px -4px rgba(0, 0, 0, 0.12),
      0 9px 9px 4px rgba(0, 0, 0, 0.05)
    );
    background-color: var(--hybrid-dropdown-background-color, #fff);
    background-clip: padding-box;
    border-radius: var(--hybrid-dropdown-border-radius, 8px);
  }
  .dropdown-content ul {
    background-color: var(--hybrid-dropdown-background-color, #fff);
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .dropdown-content ul li {
    padding: var(--hybrid-dropdown-item-padding, 12px 16px);
    cursor: var(--hybrid-dropdown-item-cursor, pointer);
  }

  .nested {
    display: none;
    position: absolute;
    left: 100%;
    width: 100%;
    top: 0;
  }
  .block {
    margin: 0px 3px;
    // ensure space between praent and childrens
    margin: var(--hybrid-dropdown-item-margin, 12px 16px);
    box-shadow: var(
      --hybrid-dropdown-item-shadow,
      0 6px 8px 0 rgba(0, 0, 0, 0.08),
      0 3px 3px -4px rgba(0, 0, 0, 0.12),
      0 9px 9px 4px rgba(0, 0, 0, 0.05)
    );
  }
  .dropdown-content ul li:hover {
    background-color: var(--hybrid-dropdown-item-hover-background-color, #ddd);
  }
  .dropdown-content ul li:hover > .nested {
    //display: block;
  }

  .nested-search {
    display: block;
  }

  .dropdown-content.show {
    display: block;
    opacity: 1;
  }

  .selected {
    background-color: var(--hybrid-dropdown-item-selected-background-color, #ddd);
  }
  .has-childrens {
    color: var(--hybrid-dropdown-chilrends-arrow-icon-color, #444444);
    margin: var(--hybrid-dropdown-chilrends-arrow-icon-margin, 0 6px 0 0);
    float: var(--hybrid-dropdown-chilrends-arrow-icon-floating, right);
  }

  .carret-boundery-right {
    transform: rotateZ(-180deg);
    float: left;
    margin-right: 20px;
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  .arrow-ccontainer {
    margin-top: 9px;
    float: right;
    margin-right: -50px;
    transform: rotateZ(-180deg);
  }
  .arrow {
    display: inline-block;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    animation: bounce 1s infinite;
  }
`];var _=function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var d=t.length-1;d>=0;d--)(n=t[d])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};class A extends a.oi{constructor(){super(),this.options=[],this.open=!1,this.placeholder="",this.search="",this.trigger="click",this.positioningStyle="",this.boundery={right:!1},this.showChildrenMap=new Map,this.selectedElementMap=new Map,this.hasSlotLabel=!1,this.dropdownContentRef=w(),this.dropdownInitiatorRef=w(),this.onItemMouseOver=(t,e)=>{var o;e.value&&(e.value.style.marginTop=(null===(o=t.value)||void 0===o?void 0:o.offsetTop)+"px")},this.addEventListener("contextmenu",this.handleRightClick)}handleRightClick(t){"context-menu"==this.trigger&&(t.preventDefault(),this.open=!0,setTimeout((()=>{const e=this.shadowRoot.querySelector(".dropdown-content");console.log(t),e.style.left=`${t.clientX}px`,e.style.top=`${t.pageY}px`,e.style.position="fixed",this.requestUpdate()})))}firstUpdated(){this.hasSlotLabel=!!this._prefixItems.length,this.performUpdate()}render(){return a.dy`
      <div class="dropdown">
        ${this.renderDropDownIntiator()} ${this.open&&this.renderDropdowContent()||a.Ld}
      </div>
    `}getRandomId(){return`id-${Math.random().toString(36).substr(2,9)}`}renderDropDownIntiator(){return a.dy`
      <span ${C(this.dropdownInitiatorRef)} class="initiator">
        <slot
          name="label"
          @click="${()=>"click"===this.trigger&&this.toggleDropdown()}"
          @mouseover="${()=>"hover"===this.trigger&&this.showDropdown()}"
        ></slot>
        ${!this.hasSlotLabel&&a.dy`<button
            class="dropbtn"
            @click="${()=>"click"===this.trigger&&this.toggleDropdown()}"
            @mouseover="${()=>"hover"===this.trigger&&this.showDropdown()}"
          >
            ${this.selected?this.selected.label:this.placeholder}
          </button>`||a.Ld}
      </span>
    `}renderDropdowContent(){var t;return a.dy`
      <div class="dropdown-content show" ${C(this.dropdownContentRef)}>
        <ul>
          ${null===(t=this.options)||void 0===t?void 0:t.map((t=>this.renderOption(t)))}
        </ul>
      </div>
    `}renderOption(t){var e;const o=w(),i=w(),n=this.showChildrenMap.get(t)||!1,r=this.getRandomId();return a.dy`
      <li
        id="${r}"
        ${C(i)}
        @click="${e=>this.handleSelect(t,e)}"
        class=${t===this.selected||this.selectedElementMap.get(t)?"selected":""}
        @mouseover="${()=>{this.showChildrenMap.set(t,!0),this.requestUpdate()}}"
        @mouseleave="${()=>{this.search||(this.showChildrenMap.set(t,!1),this.requestUpdate())}}"
      >
        ${t.label}
        ${(null===(e=this.searchedELement)||void 0===e?void 0:e.label)===t.label?a.dy`<span class="arrow arrow-ccontainer">
              <hy-icon name="arrow-left"></hy-icon>
            </span>`:""}
        ${t.children?a.dy`
              <hy-icon
                style="z-index:0"
                name="caret-right"
                class="has-childrens ${this.boundery.right?"carret-boundery-right":""}"
              ></hy-icon>
              <ul
                ${C(o)}
                class="nested ${n?"nested-search":""} "
                style="${this.positioningStyle}; ${this.calculateOffsetTop(r)}"
              >
                <div class="block">${t.children.map((t=>this.renderOption(t)))}</div>
              </ul>
            `:""}
      </li>
    `}calculateOffsetTop(t){return requestAnimationFrame((()=>{const e=this.shadowRoot.getElementById(`${t}`),o=null==e?void 0:e.querySelector("ul.nested");o&&(o.style.marginTop=`${null==e?void 0:e.offsetTop}px`),this.positionDropDown()})),this.requestUpdate(),0}updated(t){super.updated(t),t.has("search")&&this.search&&(this.searching(),this.open||(this.open=!0))}searching(){this.options;const t=[];this.recursivesearch(t,this.options,this.search),this.showChildrenMap=new Map,this.selectedElementMap=new Map;for(const e of t)this.showChildrenMap.set(e,!0),this.selectedElementMap.set(e,!0),this.searchedELement=e}recursivesearch(t,e,o){for(const i of e){if(i.label.toLowerCase().includes(o))return void t.push(i);if(i.children){if(t.push(i),this.recursivesearch(t,i.children,o),!t.length||t[t.length-1]!==i)return;t.pop()}}}handleSelect(t,e){e&&e.stopPropagation(),this.selected=t,this.open=!1;const o=new CustomEvent("change",{detail:{value:this.selected},bubbles:!0,composed:!0});this.dispatchEvent(o)}toggleDropdown(){this.open=!this.open}showDropdown(){this.open=!0}positionDropDown(){this.getDistanceFromBRight(this.dropdownContentRef.value);this.getDistanceFromBRight(this.dropdownContentRef.value)<this.dropdownContentRef.value.offsetWidth&&(this.dropdownContentRef.value.style.marginLeft="-"+(this.dropdownContentRef.value.offsetWidth-this.dropdownInitiatorRef.value.offsetWidth)+"px",this.positioningStyle=`margin-left : -${2*this.dropdownContentRef.value.offsetWidth}px`,this.boundery.right=!0)}_onClickOutside(t){t.composedPath().includes(this)||(this.open=!1)}getDistanceFromBottom(t){const e=t.getBoundingClientRect();return Math.max(0,window.innerHeight-e.bottom)}getDistanceFromBRight(t){const e=t.getBoundingClientRect();return Math.max(0,window.innerWidth-e.right)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onClickOutside.bind(this))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onClickOutside.bind(this))}}A.styles=k,_([(0,l.Cb)({type:Array})],A.prototype,"options",void 0),_([(0,l.Cb)({type:Object})],A.prototype,"selected",void 0),_([(0,l.Cb)({type:Boolean})],A.prototype,"open",void 0),_([(0,l.Cb)({type:String})],A.prototype,"placeholder",void 0),_([(0,l.Cb)({type:String})],A.prototype,"search",void 0),_([(0,l.Cb)({type:String})],A.prototype,"trigger",void 0),_([(0,l.SB)()],A.prototype,"positioningStyle",void 0),_([(0,l.SB)()],A.prototype,"boundery",void 0),_([(0,l.SB)()],A.prototype,"searchedELement",void 0),_([(0,l.SB)()],A.prototype,"showChildrenMap",void 0),_([(0,l.NH)({slot:"label",flatten:!0})],A.prototype,"_prefixItems",void 0),_([(0,l.SB)()],A.prototype,"hasSlotLabel",void 0),customElements.define("hy-dropdown",A);o(780),o(8688),o(3430);var S=o(3992);const D=(0,o(1943).L)({tagName:"hy-dropdown",elementClass:A,react:s,events:{}}),M=["components"],R={sidebar_position:5},T="Dropdown",O={unversionedId:"components/dropdown",id:"components/dropdown",title:"Dropdown",description:"When To Use",source:"@site/docs/components/dropdown.mdx",sourceDirName:"components",slug:"/components/dropdown",permalink:"/docs/docs/components/dropdown",draft:!1,editUrl:"https://github.com/hybridui/docs/tree/main/docs/components/dropdown.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Calendar",permalink:"/docs/docs/components/calendar"},next:{title:"Icons",permalink:"/docs/docs/components/icons"}},E={},L=[{value:"When To Use",id:"when-to-use",level:2},{value:"Basic",id:"basic",level:3}],I=t=>{let{children:e,color:o}=t;return(0,d.kt)(r.Fragment,null,(0,d.kt)(D,{placeholder:"Select an option",options:[{label:"Option 1",children:[{label:"Sub-option 1"},{label:"Sub-option 2",children:[{label:"Sub-sub-option 10"}]}]},{label:"Option 2"},{label:"Option 3",children:[{label:"Sub-option 3"}]}],trigger:"hover",mdxType:"HyDropdown"},(0,d.kt)(S.R,{slot:"label",type:"link",icon:"angle-down",mdxType:"HyButton"},"Hover me")))},B={toc:L,BasicDropdow:I},j="wrapper";function N(t){let{components:e}=t,o=(0,n.Z)(t,M);return(0,d.kt)(j,(0,i.Z)({},B,o,{components:e,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"dropdown"},"Dropdown"),(0,d.kt)("h2",{id:"when-to-use"},"When To Use"),(0,d.kt)("p",null,"When faced with multiple choices, you have the option to enclose them within a Dropdown. By either hovering over or clicking on the trigger, a menu will appear, presenting a list of options for you to select from and carry out the corresponding action."),(0,d.kt)("h3",{id:"basic"},"Basic"),(0,d.kt)("p",null,"The simplest form of a dropdown menu."),(0,d.kt)(I,{mdxType:"BasicDropdow"}))}N.isMDXComponent=!0},875:(t,e,o)=>{o.d(e,{XM:()=>n,Xe:()=>r,pX:()=>i});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=t=>(...e)=>({_$litDirective$:t,values:e});class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}}}]);