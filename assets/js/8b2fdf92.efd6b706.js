/*! For license information please see 8b2fdf92.efd6b706.js.LICENSE.txt */
"use strict";(self.webpackChunkhybrid_docs=self.webpackChunkhybrid_docs||[]).push([[3096],{1884:(e,t,o)=>{o.d(t,{K:()=>s});var i=o(3265),n=o(2877),r=function(e,t,o,i){var n,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(r<3?n(s):r>3?n(t,o,s):n(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends i.oi{render(){return i.dy`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      />

      <i class="fa fa-${this.name}"></i>
    `}};r([(0,n.Cb)({type:String})],s.prototype,"name",void 0),s=r([(0,n.Mo)("hy-icon")],s)},368:(e,t,o)=>{o(1884)},3430:(e,t,o)=>{var i;o.d(t,{o:()=>l});var n=o(1943),r=o(7294),s=o(1884);const l=(0,n.L)({tagName:"hy-icon",elementClass:s.K,react:i||(i=o.t(r,2))})},3658:(e,t,o)=>{o(1865)},1865:(e,t,o)=>{o.d(t,{N:()=>a});var i=o(3265),n=o(2877);const r=[i.iv`
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
`,i.iv``];var s,l=o(8536),d=function(e,t,o,i){var n,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(r<3?n(s):r>3?n(t,o,s):n(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};!function(e){e.EMAIL="email",e.PASSWORD="password",e.TEL="tel",e.TEXT="text",e.URL="url"}(s||(s={}));let a=class extends i.oi{constructor(){super(...arguments),this.disabled=!1,this.value="",this.type=s.TEXT,this.spanClasses={inputfocuced:!1},this.slottedClasses={prefixed:!1,suffixed:!1}}firstUpdated(){for(const e of this._postItems)e.setAttribute("usedas","post");for(const e of this._preItems)e.setAttribute("usedas","pre");this.slottedClasses=Object.assign(Object.assign({},this.slottedClasses),{prefixed:!!this._prefixItems.length,post:!!this._postItems.length,pre:!!this._preItems.length}),this.performUpdate()}focusHandler(e){this.spanClasses=Object.assign(Object.assign({},this.spanClasses),{inputfocuced:!0})}blurHandler(e){this.spanClasses=Object.assign(Object.assign({},this.spanClasses),{inputfocuced:!1})}updated(e){super.updated(e),e.has("value")&&this.requestUpdate()}render(){var e,t;return i.dy`
      <slot name="pre"></slot>
      <span
        class="${(0,l.$)(Object.assign(Object.assign({},this.spanClasses),this.slottedClasses))}"
        data-size=${this.size?this.size:i.Ld}
      >
        <slot name="prefix"></slot>
        <input
          .placeholder="${null!==(e=this.palceholder)&&void 0!==e?e:i.Ld}"
          .value="${this.value}"
          type="${this.type}"
          @input=${e=>{this.dispatchEvent(new CustomEvent("valueChange",{detail:e.target}))}}
          @focus=${e=>this.focusHandler(e)}
          @blur=${this.blurHandler}
          ?autofocus=${this.autofocus}
          placeholder=${null!==(t=this.placeholder)&&void 0!==t?t:i.Ld}
        />
        <slot name="suffix"></slot>
      </span>
      <slot name="post"></slot>
    `}};a.styles=r,d([(0,n.Cb)({type:Boolean})],a.prototype,"disabled",void 0),d([(0,n.Cb)({type:String})],a.prototype,"palceholder",void 0),d([(0,n.Cb)({type:String})],a.prototype,"alt",void 0),d([(0,n.Cb)({type:String})],a.prototype,"value",void 0),d([(0,n.Cb)({type:String})],a.prototype,"size",void 0),d([(0,n.Cb)({type:String})],a.prototype,"autocomplete",void 0),d([(0,n.Cb)({reflect:!0})],a.prototype,"type",void 0),d([(0,n.Cb)({type:String})],a.prototype,"placeholder",void 0),d([(0,n.NH)({slot:"prefix",flatten:!0})],a.prototype,"_prefixItems",void 0),d([(0,n.NH)({slot:"post",selector:"hy-button"})],a.prototype,"_postItems",void 0),d([(0,n.NH)({slot:"pre",selector:"hy-button"})],a.prototype,"_preItems",void 0),d([(0,n.SB)()],a.prototype,"spanClasses",void 0),d([(0,n.SB)()],a.prototype,"slottedClasses",void 0),a=d([(0,n.Mo)("hy-input")],a)},8688:(e,t,o)=>{var i;o.d(t,{s:()=>l});var n=o(1943),r=o(7294),s=o(1865);const l=(0,n.L)({tagName:"hy-input",elementClass:s.N,react:i||(i=o.t(r,2)),events:{valueChange:"valueChange"}})},3483:(e,t,o)=>{o.r(t),o.d(t,{BasicDropdowClick:()=>U,BasicDropdowCustomTemplate:()=>W,BasicDropdowDiverder:()=>F,BasicDropdowGroup:()=>X,BasicDropdowGroupMixed:()=>G,BasicDropdowHover:()=>N,BasicDropdowHoverCascading:()=>P,ContextDropdown:()=>Y,SearchInDropdown:()=>z,assets:()=>L,contentTitle:()=>I,default:()=>Z,frontMatter:()=>H,metadata:()=>E,toc:()=>j});var i=o(7462),n=o(3366),r=o(7294),s=o.t(r,2),l=o(3905),d=(o(4866),o(5162),o(368),o(9164),o(3658),o(3265)),a=o(2877),p=o(3692);const{I:c}=p.Al;var h=o(875);const u=(e,t)=>{var o,i;const n=e._$AN;if(void 0===n)return!1;for(const r of n)null===(i=(o=r)._$AO)||void 0===i||i.call(o,t,!1),u(r,t);return!0},b=e=>{let t,o;do{if(void 0===(t=e._$AM))break;o=t._$AN,o.delete(e),e=t}while(0===(null==o?void 0:o.size))},v=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(void 0===o)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),m(t)}};function g(e){void 0!==this._$AN?(b(this),this._$AM=e,v(this)):this._$AM=e}function y(e,t=!1,o=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(i))for(let r=o;r<i.length;r++)u(i[r],!1),b(i[r]);else null!=i&&(u(i,!1),b(i));else u(this,e)}const m=e=>{var t,o,i,n;e.type==h.pX.CHILD&&(null!==(t=(i=e)._$AP)&&void 0!==t||(i._$AP=y),null!==(o=(n=e)._$AQ)&&void 0!==o||(n._$AQ=g))};class f extends h.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),v(this),this.isConnected=e._$AU}_$AO(e,t=!0){var o,i;e!==this.isConnected&&(this.isConnected=e,e?null===(o=this.reconnected)||void 0===o||o.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),t&&(u(this,e),b(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const w=()=>new x;class x{}const k=new WeakMap,C=(0,h.XM)(class extends f{render(e){return p.Ld}update(e,[t]){var o;const i=t!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.dt=null===(o=e.options)||void 0===o?void 0:o.host,this.rt(this.ct=e.element)),p.Ld}rt(e){var t;if("function"==typeof this.Y){const o=null!==(t=this.dt)&&void 0!==t?t:globalThis;let i=k.get(o);void 0===i&&(i=new WeakMap,k.set(o,i)),void 0!==i.get(this.Y)&&this.Y.call(this.dt,void 0),i.set(this.Y,e),void 0!==e&&this.Y.call(this.dt,e)}else this.Y.value=e}get lt(){var e,t,o;return"function"==typeof this.Y?null===(t=k.get(null!==(e=this.dt)&&void 0!==e?e:globalThis))||void 0===t?void 0:t.get(this.Y):null===(o=this.Y)||void 0===o?void 0:o.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var $,D;!function(e){e.GROUP="group",e.DIVIDER="divider"}($||($={})),function(e){e.Click="click",e.Hover="hover",e.ContextMenu="context-menu"}(D||(D={}));const S=[d.iv`
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    min-width: var(--hybrid-dropdown-min-width, 180px);
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

  .dropdown-content ul li:not(.group-element):hover {
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
  .arrow-container {
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
  .dropdown-content ul li.divider {
    height: 1px;
    padding: 0px;
    margin: 0px;
    background-color: rgb(219 219 219);
  }

  .dropdown-content ul .group-element {
    padding: 7px 0 0 0;
  }

  .dropdown-content ul li span.group-label {
    color: #555555d4;
    font-weight: 700;
    margin: 15px;
  }
  .nested-group > div.block {
    padding: 0%;
    margin: 0%;
    box-shadow: none;
  }
  .nested-group > div.block > li {
    padding-left: 25px;
  }
`];var O=o(8536);var T=function(e,t,o,i){var n,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(r<3?n(s):r>3?n(t,o,s):n(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class _ extends d.oi{constructor(){super(),this.options=[],this.open=!1,this.placeholder="",this.search="",this.trigger="click",this.positioningStyle="",this.boundery={right:!1},this.showChildrenMap=new Map,this.selectedElementMap=new Map,this.hasSlotLabel=!1,this.dropdownContentRef=w(),this.dropdownInitiatorRef=w(),this.addEventListener("contextmenu",this.handleContextMenu)}handleContextMenu(e){this.trigger===D.ContextMenu&&(e.preventDefault(),this.open=!0,setTimeout((()=>{const t=this.shadowRoot.querySelector(".dropdown-content");null!==t&&(t.style.left=`${e.clientX}px`,t.style.top=`${e.clientY}px`,t.style.position="fixed"),this.requestUpdate()})))}firstUpdated(){this.hasSlotLabel=!!this._prefixItems.length,this.performUpdate()}render(){return d.dy`
      <div class="dropdown">
        ${this.renderDropDownIntiator()} ${this.open&&this.renderDropdowContent()||d.Ld}
      </div>
    `}getRandomId(){return`id-${Math.random().toString(36).substr(2,9)}`}renderDropDownIntiator(){const e=this.hasSlotLabel,t=Boolean(this.selected),o=this.trigger===D.Click,i=this.trigger===D.Hover;return d.dy`
      <span ${C(this.dropdownInitiatorRef)} class="initiator">
        <slot
          name="label"
          @click="${()=>o&&this.toggleDropdown()}"
          @mouseover="${()=>i&&this.showDropdown()}"
        ></slot>
        ${e?"":d.dy`
              <button
                class="dropbtn"
                @click="${()=>o&&this.toggleDropdown()}"
                @mouseover="${()=>i&&this.showDropdown()}"
              >
                ${t?this.selected.label:this.placeholder}
              </button>
            `}
      </span>
    `}renderDropdowContent(){var e;return d.dy`
      <div class="dropdown-content show" ${C(this.dropdownContentRef)}>
        <ul>
          ${null===(e=this.options)||void 0===e?void 0:e.map((e=>this.renderOption(e)))}
        </ul>
      </div>
    `}renderOption(e){const t=w(),o=w(),i=this.showChildrenMap.get(e)||!1,n=this.getRandomId();return e.type===$.DIVIDER?this.renderDividerOption():this.renderRegularOption(e,t,o,i,n)}renderDividerOption(){return d.dy`<li class="divider"></li>`}renderRegularOption(e,t,o,i,n){var r;const s=Boolean(e===this.selected||this.selectedElementMap.get(e)),l=e.type===$.GROUP,a=e.children&&e.children.length>0,p=e.type!==$.GROUP;return d.dy`
      <li
        id="${n}"
        ${C(o)}
        @click="${t=>this.handleOptionClick(e,t)}"
        class=${(0,O.$)({selected:s,"group-element":l})}
        @mouseover="${()=>{this.showChildrenMap.set(e,!0),this.requestUpdate()}}"
        @mouseleave="${()=>{this.showChildrenMap.set(e,!1),this.requestUpdate()}}"
      >
        <span class=${(0,O.$)({"group-label":l})}
          >${d.dy`${e.template?e.template(e):e.label}`}
          ${(null===(r=this.searchedELement)||void 0===r?void 0:r.label)===e.label?d.dy`<span class="arrow arrow-container">
                <hy-icon name="arrow-left"></hy-icon>
              </span>`:""}
        </span>
        ${a?d.dy`
              ${p?(c=this.boundery,d.dy` <hy-icon
    style="z-index:0"
    name="caret-right"
    class="has-childrens ${c.right?"carret-boundery-right":""}"
  ></hy-icon>`):""}
              <ul
                ${C(t)}
                class=${(0,O.$)({"nested-search":i,nested:e.type!==$.GROUP,"nested-group":l})}
                style="${this.positioningStyle}; ${this.updateNestedMenuPosition(n)}"
              >
                <div class="block">${e.children.map((e=>this.renderOption(e)))}</div>
              </ul>
            `:""}
      </li>
    `;var c}handleOptionClick(e,t){e.template?t.stopPropagation():this.handleSelect(e,t)}updateNestedMenuPosition(e){requestAnimationFrame((()=>{const t=this.shadowRoot.getElementById(`${e}`),o=null==t?void 0:t.querySelector("ul.nested");o&&(o.style.marginTop=`${null==t?void 0:t.offsetTop}px`),this.adjustDropdownPosition()})),this.requestUpdate()}updated(e){super.updated(e),e.has("search")&&this.search&&(this.searching(),this.open||(this.open=!0))}searching(){this.options;const e=[];this.recursivesearch(e,this.options,this.search),this.showChildrenMap=new Map,this.selectedElementMap=new Map,this.searchedELement=void 0;for(const t of e)this.showChildrenMap.set(t,!0),this.selectedElementMap.set(t,!0),this.searchedELement=t}recursivesearch(e,t,o){for(const i of t){if(i.label.toLowerCase().includes(o))return void e.push(i);if(i.children){if(e.push(i),this.recursivesearch(e,i.children,o),!e.length||e[e.length-1]!==i)return;e.pop()}}}handleSelect(e,t){t&&t.stopPropagation(),this.selected=e,this.open=!1;const o=new CustomEvent("change",{detail:{value:this.selected},bubbles:!0,composed:!0});this.dispatchEvent(o)}toggleDropdown(){this.open=!this.open}showDropdown(){this.open=!0}adjustDropdownPosition(){this.getDistanceFromRight(this.dropdownContentRef.value);this.getDistanceFromRight(this.dropdownContentRef.value)<this.dropdownContentRef.value.offsetWidth&&(this.dropdownContentRef.value.style.marginLeft="-"+(this.dropdownContentRef.value.offsetWidth-this.dropdownInitiatorRef.value.offsetWidth)+"px",this.positioningStyle=`margin-left: -${2*this.dropdownContentRef.value.offsetWidth}px`,this.boundery.right=!0)}onClickOutside(e){e.composedPath().includes(this)||(this.open=!1)}getDistanceFromRight(e){const t=e.getBoundingClientRect();return Math.max(0,window.innerWidth-t.right)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.onClickOutside.bind(this))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.onClickOutside.bind(this))}}_.styles=S,T([(0,a.Cb)({type:Array})],_.prototype,"options",void 0),T([(0,a.Cb)({type:Object})],_.prototype,"selected",void 0),T([(0,a.Cb)({type:Boolean})],_.prototype,"open",void 0),T([(0,a.Cb)({type:String})],_.prototype,"placeholder",void 0),T([(0,a.Cb)({type:String})],_.prototype,"search",void 0),T([(0,a.Cb)({type:String})],_.prototype,"trigger",void 0),T([(0,a.SB)()],_.prototype,"positioningStyle",void 0),T([(0,a.SB)()],_.prototype,"boundery",void 0),T([(0,a.SB)()],_.prototype,"searchedELement",void 0),T([(0,a.SB)()],_.prototype,"showChildrenMap",void 0),T([(0,a.NH)({slot:"label",flatten:!0})],_.prototype,"_prefixItems",void 0),T([(0,a.SB)()],_.prototype,"hasSlotLabel",void 0),customElements.define("hy-dropdown",_);o(780);var M=o(8688),R=(o(3430),o(3992));const B=(0,o(1943).L)({tagName:"hy-dropdown",elementClass:_,react:s,events:{}}),A=["components"],H={sidebar_position:5},I="Dropdown",E={unversionedId:"components/dropdown",id:"components/dropdown",title:"Dropdown",description:"When To Use",source:"@site/docs/components/dropdown.mdx",sourceDirName:"components",slug:"/components/dropdown",permalink:"/docs/docs/components/dropdown",draft:!1,editUrl:"https://github.com/hybridui/docs/tree/main/docs/components/dropdown.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Tabs",permalink:"/docs/docs/components/tabs"},next:{title:"Icons",permalink:"/docs/docs/components/icons"}},L={},j=[{value:"When To Use",id:"when-to-use",level:3},{value:"Basic",id:"basic",level:3},{value:"Divider",id:"divider",level:3},{value:"Multi-level",id:"multi-level",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Search mode (MacOS like)",id:"search-mode-macos-like",level:3},{value:"Context Menu",id:"context-menu",level:3},{value:"Group",id:"group",level:3},{value:"Custom template",id:"custom-template",level:3}],N=e=>{let{children:t,color:o}=e;return(0,l.kt)(r.Fragment,null,(0,l.kt)(B,{placeholder:"Select an option",options:[{label:"Option 1"},{label:"Option 2"},{label:"Option 3"}],trigger:"hover",mdxType:"HyDropdown"},(0,l.kt)(R.R,{slot:"label",type:"link",icon:"angle-down",mdxType:"HyButton"},"Hover me")))},P=e=>{let{children:t,color:o}=e;return(0,l.kt)(r.Fragment,null,(0,l.kt)(B,{placeholder:"Select an option",options:[{label:"Option 1",children:[{label:"Sub-option 1"},{label:"Sub-option 2",children:[{label:"Sub-sub-option 10"}]}]},{label:"Option 2"},{label:"Option 3",children:[{label:"Sub-option 3"}]}],trigger:"hover",mdxType:"HyDropdown"},(0,l.kt)(R.R,{slot:"label",type:"link",icon:"angle-down",mdxType:"HyButton"},"Hover me")))},U=e=>{let{children:t,color:o}=e;return(0,l.kt)(r.Fragment,null,(0,l.kt)(B,{placeholder:"Select an option",options:[{label:"Option 1",children:[{label:"Sub-option 1"},{label:"Sub-option 2",children:[{label:"Sub-sub-option 10"}]}]},{label:"Option 2"},{label:"Option 3",children:[{label:"Sub-option 3"}]}],mdxType:"HyDropdown"},(0,l.kt)(R.R,{slot:"label",mdxType:"HyButton"},"Click me")))},z=e=>{let{children:t,color:o}=e;const[i,n]=(0,r.useState)(),s=[{label:"New",children:[{label:"Folder"},{label:"File",children:[{label:"From disk"},{label:"From Onedrine"}]}]},{label:"Open",children:[{label:"Recent",children:[...[1,2,3,4,5,6,7].map((e=>({label:"App "+e})))]}]},{label:"Close project"}];return(0,l.kt)(r.Fragment,null,(0,l.kt)(B,{search:i,placeholder:"Select an option",options:s,mdxType:"HyDropdown"},i,(0,l.kt)(M.s,{placeholder:"Type to search",slot:"label",icon:"ellipsis-v",valueChange:function(e){n(e.detail.value)},mdxType:"HyInput"},(0,l.kt)("span",{slot:"suffix"},(0,l.kt)("hy-icon",{name:"times-circle",click:function(){n("")}})," "))))},Y=e=>{let{children:t,color:o}=e;return(0,l.kt)(r.Fragment,null,(0,l.kt)(B,{placeholder:"Select an option",options:[{label:"Save"},{label:"Print"},{label:"Delete"}],trigger:"context-menu",mdxType:"HyDropdown"},(0,l.kt)("div",{slot:"label",style:{color:"white",background:"gray",height:"200px",width:"400px",textAlign:"center",lineHeight:"200px"}},"Right Click on here")))},F=e=>{let{children:t,color:o}=e;return(0,l.kt)(r.Fragment,null,(0,l.kt)(B,{placeholder:"Select an option",options:[{label:"Option 1"},{type:"divider"},{label:"Option 2"},{label:"Option 3"},{label:"Option 4"},{type:"divider"},{label:"Option 5"}],trigger:"hover",mdxType:"HyDropdown"},(0,l.kt)(R.R,{slot:"label",type:"link",icon:"angle-down",mdxType:"HyButton"},"Hover me")))},X=e=>{let{children:t,color:o}=e;return(0,l.kt)(r.Fragment,null,(0,l.kt)(B,{placeholder:"Select an option",options:[{label:"Option 1",type:"group",children:[{label:"Sub-option 1"},{label:"Sub-option 2"}]},{type:"divider"},{label:"Option 2"},{label:"Option 3",children:[{label:"Sub-option 3"}]}],trigger:"hover",mdxType:"HyDropdown"},(0,l.kt)(R.R,{slot:"label",type:"link",icon:"angle-down",mdxType:"HyButton"},"Hover me")))},G=e=>{let{children:t,color:o}=e;return(0,l.kt)(r.Fragment,null,(0,l.kt)(B,{placeholder:"Select an option",options:[{label:"Option 1",type:"group",children:[{label:"Sub-option 1"},{label:"Sub-option 2",children:[{label:"Sub-sub-option 10"}]}]},{type:"divider"},{label:"Option 2"},{label:"Option 3",children:[{label:"Sub-option 3"}]}],trigger:"hover",mdxType:"HyDropdown"},(0,l.kt)(R.R,{slot:"label",type:"link",icon:"angle-down",mdxType:"HyButton"},"Hover me")))},W=e=>{let{children:t,color:o}=e;const i=e=>{e.preventDefault(),alert("clicked")},n=[{label:"Option 1",template:function(e){return d.dy`<div style="display: flex"><hy-input style="width: 80%; text: red !important" value="${e.label} "> </hy-input><hy-button style="width: 19%" @click=${i} > ok</hy-button></span> </div>`}},{label:"Option 2"},{label:"Option 3"}];return(0,l.kt)(r.Fragment,null,(0,l.kt)(B,{placeholder:"Select an option",options:n,trigger:"hover",mdxType:"HyDropdown"},(0,l.kt)(R.R,{slot:"label",type:"link",icon:"angle-down",mdxType:"HyButton"},"Hover me")))},q={toc:j,BasicDropdowHover:N,BasicDropdowHoverCascading:P,BasicDropdowClick:U,SearchInDropdown:z,ContextDropdown:Y,BasicDropdowDiverder:F,BasicDropdowGroup:X,BasicDropdowGroupMixed:G,BasicDropdowCustomTemplate:W},V="wrapper";function Z(e){let{components:t}=e,o=(0,n.Z)(e,A);return(0,l.kt)(V,(0,i.Z)({},q,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"dropdown"},"Dropdown"),(0,l.kt)("h3",{id:"when-to-use"},"When To Use"),(0,l.kt)("p",null,"When faced with multiple choices, you have the option to enclose them within a Dropdown. By either hovering over or clicking on the trigger, a menu will appear, presenting a list of options for you to select from and carry out the corresponding action."),(0,l.kt)("h3",{id:"basic"},"Basic"),(0,l.kt)("p",null,"The simplest form of a dropdown menu."),(0,l.kt)(N,{mdxType:"BasicDropdowHover"}),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"divider"},"Divider"),(0,l.kt)("p",null,"Add devider between option."),(0,l.kt)(F,{mdxType:"BasicDropdowDiverder"}),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"multi-level"},"Multi-level"),(0,l.kt)("p",null,"Cascading dropdown menu."),(0,l.kt)(P,{mdxType:"BasicDropdowHoverCascading"}),(0,l.kt)("h3",{id:"triggers"},"Triggers"),(0,l.kt)("p",null,"The default trigger mode is ",(0,l.kt)("inlineCode",{parentName:"p"},"hover"),", it can be changed to ",(0,l.kt)("inlineCode",{parentName:"p"},"click"),"."),(0,l.kt)(U,{mdxType:"BasicDropdowClick"}," "),(0,l.kt)("h3",{id:"search-mode-macos-like"},"Search mode (MacOS like)"),(0,l.kt)("p",null,"This feature can be beneficial when utilizing a dropdown menu with an excessive number of options."),(0,l.kt)(z,{mdxType:"SearchInDropdown"}," "),(0,l.kt)("h3",{id:"context-menu"},"Context Menu"),(0,l.kt)(Y,{mdxType:"ContextDropdown"}),(0,l.kt)("h3",{id:"group"},"Group"),(0,l.kt)("p",null,"You have the ability to organize the options by placing them within a group."),(0,l.kt)(X,{mdxType:"BasicDropdowGroup"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"You have the option to group items and maintain a menu style for nested options."),(0,l.kt)(G,{mdxType:"BasicDropdowGroupMixed"}),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"custom-template"},"Custom template"),(0,l.kt)("p",null,"You have the flexibility to utilize a custom template for each option or specify a template for individual options.\nThe template employs the lit-html package, making it compatible with any framework or library for its usage."),(0,l.kt)(W,{mdxType:"BasicDropdowCustomTemplate"}," "))}Z.isMDXComponent=!0},875:(e,t,o)=>{o.d(t,{XM:()=>n,Xe:()=>r,pX:()=>i});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>(...t)=>({_$litDirective$:e,values:t});class r{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},8536:(e,t,o)=>{o.d(t,{$:()=>r});var i=o(3692),n=o(875);const r=(0,n.XM)(class extends n.Xe{constructor(e){var t;if(super(e),e.type!==n.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var o,n;if(void 0===this.nt){this.nt=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(o=this.st)||void 0===o?void 0:o.has(e))&&this.nt.add(e);return this.render(t)}const r=e.element.classList;this.nt.forEach((e=>{e in t||(r.remove(e),this.nt.delete(e))}));for(const i in t){const e=!!t[i];e===this.nt.has(i)||(null===(n=this.st)||void 0===n?void 0:n.has(i))||(e?(r.add(i),this.nt.add(i)):(r.remove(i),this.nt.delete(i)))}return i.Jb}})}}]);