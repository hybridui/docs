/*! For license information please see 1a63ac3d.d239015d.js.LICENSE.txt */
"use strict";(self.webpackChunkhybrid_docs=self.webpackChunkhybrid_docs||[]).push([[1651],{1884:(e,t,a)=>{a.d(t,{K:()=>l});var i=a(3265),n=a(2877),r=function(e,t,a,i){var n,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,i);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(l=(r<3?n(l):r>3?n(t,a,l):n(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l};let l=class extends i.oi{render(){return i.dy`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      />

      <i class="fa fa-${this.name}"></i>
    `}};r([(0,n.Cb)({type:String})],l.prototype,"name",void 0),l=r([(0,n.Mo)("hy-icon")],l)},368:(e,t,a)=>{a(1884)},7293:(e,t,a)=>{a.r(t),a.d(t,{InteractiveTabExample:()=>D,SimpleTabExample:()=>A,assets:()=>E,contentTitle:()=>x,default:()=>R,frontMatter:()=>f,metadata:()=>k,swapElements:()=>w,toc:()=>C});var i=a(7462),n=a(3366),r=a(7294),l=a.t(r,2),o=a(3905),d=a(1943),s=a(3265),b=a(2877);const c=s.iv`
  .tab-labels,
  .tabs-container {
    display: flex;
  }

  .tabs-container {
    box-shadow: var(--hybrid-tabs-container-box-shadow, none);
  }

  .dragging-start {
    border: var(--hybrid-tabs-dragging-start-border, 1px dashed black);
  }
  .dragging-enter {
    background-color: var(--hybrid-tabs-dragging-enter-background-color, #1661b1);
  }
  .vertical-align > .tab-content {
    border: var(--hybrid-tabs-va-enter-border, none);
    border-left: var(--hybrid-tabs-va-enter-border-left, 1px solid #ccc);
  }
  .vertical-align.right-align > .tab-content {
    border: var(--hybrid-tabs-va-ra-border, none);
    border-right: var(--hybrid-tabs-va-ra-border-right, 1px solid #ccc);
  }

  .tab-label {
    cursor: var(--hybrid-tabs-label-cursor, pointer);
    padding: var(--hybrid-tabs-label-padding, 7px 7px 5px 7px);
    border-bottom: var(--hybrid-tabs-label-border-bottom, 2px solid transparent);
    transition: var(--hybrid-tabs-label-transition, border-color 0.1s ease);
    user-select: var(--hybrid-tabs-label-user-select, none);
  }

  .tab-label:hover {
    color: var(--hybrid-tabs-label-hover-color, #1661b1);
  }

  .tab-label.active {
    color: var(--hybrid-tabs-label-active-hover-color, #006afe);
  }

  .tab-content {
    padding: var(--hybrid-tabs-content-padding, 10px);
    flex-grow: var(--hybrid-tabs-content-padding, 1);
    background-color: var(--hybrid-tabs-content-background-color, #fff);
    border-top: var(--hybrid-tabs-content-background-color, 1px solid #ccc);
  }
  .right-align > .tab-labels {
    flex-direction: var(--hybrid-tabs-right-align-labels-flex-direction, row-reverse);
    align-self: var(--hybrid-tabs-right-align-labels-align-self, end);
  }

  .center-align > .tab-labels {
    align-self: var(--hybrid-tabs-center-align-labels-align-self, center);
  }
  .vertical-align {
    flex-direction: var(--hybrid-tabs-vertical-align-flex-direction, row);
  }
  .horizontal-align {
    flex-direction: var(--hybrid-tabs-halign-flex-direction, column);
  }

  .vertical-align.right-align {
    flex-direction: var(--hybrid-tabs-valign-right-align-flex-direction, row-reverse);
  }

  .tab-label:hover,
  .tab-label.active {
    border-bottom: var(--hybrid-tabs-label-active-border-bottom, 2px solid transparent);
    border-color: var(--hybrid-tabs-label-active-border-color, rgb(0, 106, 254));
  }

  .tab-label.active {
    color: var(--hybrid-tabs-label-active-hover-color, #006afe);
  }

  .vertical-align .tab-label {
    border: var(--hybrid-tabs-vertical-align-label-border, #006afe);
    border-right: var(--hybrid-tabs-vertical-align-label-border-right, 2px solid transparent);
  }

  .vertical-align.right-align .tab-label {
    border: var(--hybrid-tabs-valign-ralign-label-border, none);
    border-left: var(--hybrid-tabs-valign-ralign-label-border-left, 2px solid transparent);
  }

  .vertical-align .tab-label:hover,
  .vertical-align .tab-label.active {
    border: var(--hybrid-tabs-vertical-align-label-border-active, none);
    border-right: var(--hybrid-tabs-vertical-align-label-border-right-active, 2px solid transparent);
    border-color: var(--hybrid-tabs-vertical-align-label-border-color-active, rgb(0, 106, 254));
  }
  .vertical-align.right-align .tab-label:hover,
  .vertical-align.right-align .tab-label.active {
    border: var(--hybrid-tabs-valign-ralign-label-border-active, none);
    border-left: var(--hybrid-tabs-valign-ralign-label-border-left-active, 2px solid transparent);
    border-color: var(--hybrid-tabs-valign-ralign-label-border-color-active, rgb(0, 106, 254));
  }

  .close-icon {
    font-size: var(--hybrid-tabs-add-icon-font-size, 13px);
  }

  .add-tab-label {
    font-size: var(--hybrid-tabs-add-label-font-size, 13px);
    text-align: var(--hybrid-tabs-add-label-text-align, center);
  }
  .dragging {
    border: var(--hybrid-tabs-dragging-border, 1px dashed gray) !important;
    opacity: 0.8;
    color: #464646 !important;
  }
`;var v,h,g=a(8536);!function(e){e.Horizontal="horizontal",e.Vertical="vertical"}(v||(v={})),function(e){e.removeTab="removeTab",e.tabEdited="tabEdited",e.tabTilteClick="tabTilteClick",e.tabOrderChange="tabOrderChange",e.addTab="addTab"}(h||(h={}));var p=function(e,t,a,i){var n,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,i);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(l=(r<3?n(l):r>3?n(t,a,l):n(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l};class u extends s.oi{constructor(){super(),this.activeTab=0,this.orientation=v.Horizontal}render(){return s.dy`
      <div
        class=${(0,g.$)({"tabs-container":!0,"vertical-align":this.orientation===v.Vertical,"horizontal-align":this.orientation===v.Horizontal,"right-align":"right"===this.tabsAlign,"left-align":"left"===this.tabsAlign,"center-align":"center"===this.tabsAlign})}
      >
        <div
          class="tab-labels"
          style="flex-direction: ${this.orientation===v.Vertical?"column":"row"}"
        >
          <div></div>

          ${this.renderTabs()}
          <div></div>
        </div>
        <div class="tab-content">${this.renderActiveTab()}</div>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.observeChildrenChanges(),this.addEventListener("dragover",this.handleDragOver)}observeChildrenChanges(){new MutationObserver((()=>{this.requestUpdate()})).observe(this,{childList:!0})}handleDragStart(e){e.dataTransfer.setData("text/plain",e.currentTarget.dataset.index),e.dataTransfer.effectAllowed="move",e.target.closest(".tab-label").classList.add("dragging-start")}handleDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}handleDragEnter(e){e.preventDefault(),e.currentTarget.contains(e.relatedTarget)||e.currentTarget.classList.add("dragging")}handleDragLeave(e){e.preventDefault(),e.currentTarget.contains(e.relatedTarget)||e.currentTarget.classList.contains("dragging")&&e.currentTarget.classList.remove("dragging")}handleDrop(e){var t,a;e.preventDefault();const i=e.dataTransfer.getData("text/plain"),n=e.currentTarget.dataset.index;if(i!==n){const e=Array.from(this.children),t=e[i],a=e[n];this.dispatchEvent(new CustomEvent(h.tabOrderChange,{detail:{sourceTab:t,targetTab:a,sourceIndex:parseInt(i),targetIndex:parseInt(n)}}))}null===(t=this.shadowRoot.querySelector(".dragging"))||void 0===t||t.classList.remove("dragging"),e.target.classList.remove("dragging"),null===(a=this.shadowRoot.querySelector(".dragging-start"))||void 0===a||a.classList.remove("dragging-start")}renderTabs(){var e,t,a,i;const n=[],r=[...this.children];for(let l=0;l<r.length;l++){const i=s.dy`
        <div
          data-index=${l}
          draggable=${null===(e=this.editable)||void 0===e?void 0:e.canMove}
          @dragenter=${this.handleDragEnter}
          @dragleave=${this.handleDragLeave}
          @dragstart=${e=>this.handleDragStart(e)}
          @drop=${e=>this.handleDrop(e)}
          class=${l===this.activeTab?"tab-label active":"tab-label"}
          @click=${e=>this.setActiveTab(l,r[l],e)}
        >
          <span
            contenteditable=${!!(null===(t=this.editable)||void 0===t?void 0:t.canEditTabTitle)||s.Ld}
            @blur=${e=>{var t;this.dispatchEvent(new CustomEvent(h.tabEdited,{detail:{tab:{label:null===(t=e.target)||void 0===t?void 0:t.textContent,index:l}}}))}}
            >${r[l].getAttribute("label")}</span
          >
          ${(null===(a=this.editable)||void 0===a?void 0:a.canDeleteTab)?s.dy`<hy-icon
                @click=${()=>{this.dispatchEvent(new CustomEvent(h.removeTab,{detail:{index:l}}))}}
                name="window-close"
                class="close-icon"
              ></hy-icon>`:""}
        </div>
      `;n.push(i)}if(null===(i=this.editable)||void 0===i?void 0:i.canAddTab){const e=s.dy`
        <div
          class="tab-label add-tab-label"
          @click=${()=>{this.dispatchEvent(new CustomEvent(h.addTab))}}
        >
          <hy-icon name="plus"></hy-icon>
        </div>
      `;n.push(e)}return n}updated(e){super.updated(e),this.children[this.activeTab]||(this.children[this.activeTab-1]?this.activeTab--:this.activeTab++)}renderActiveTab(){const e=[...this.children];return e.length>0&&this.activeTab>=0&&this.activeTab<e.length?e[this.activeTab].cloneNode(!0):s.dy``}setActiveTab(e,t,a){a.preventDefault(),this.activeTab=e,t.dispatchEvent(new CustomEvent(h.tabTilteClick,{detail:a}))}}u.styles=c,p([(0,b.Cb)({type:Number})],u.prototype,"activeTab",void 0),p([(0,b.Cb)({type:String})],u.prototype,"orientation",void 0),p([(0,b.Cb)({type:String})],u.prototype,"tabsAlign",void 0),p([(0,b.Cb)({type:Object})],u.prototype,"editable",void 0),customElements.define("hy-tabs",u);const m=(0,d.L)({tagName:"hy-tabs",elementClass:u,react:l,events:{removeTab:"removeTab",tabEdited:"tabEdited",tabTilteClick:"tabTilteClick",tabOrderChange:"tabOrderChange",addTab:"addTab"}});a(368);var y=a(3992);const T=["components"],f={sidebar_orientation:7},x="Tabs",k={unversionedId:"components/tabs",id:"components/tabs",title:"Tabs",description:"When To Use",source:"@site/docs/components/tabs.mdx",sourceDirName:"components",slug:"/components/tabs",permalink:"/docs/docs/components/tabs",draft:!1,editUrl:"https://github.com/hybridui/docs/tree/main/docs/components/tabs.mdx",tags:[],version:"current",frontMatter:{sidebar_orientation:7},sidebar:"tutorialSidebar",previous:{title:"Calendar",permalink:"/docs/docs/components/calendar"},next:{title:"Dropdown",permalink:"/docs/docs/components/dropdown"}},E={},C=[{value:"When To Use",id:"when-to-use",level:3},{value:"Basic",id:"basic",level:3},{value:"Orientation",id:"orientation",level:3},{value:"Alignement",id:"alignement",level:3},{value:"Left",id:"left",level:4},{value:"Center",id:"center",level:4},{value:"Right",id:"right",level:4},{value:"Vertical Right",id:"vertical-right",level:4},{value:"Dynmaic tabs",id:"dynmaic-tabs",level:3},{value:"Editing tabs",id:"editing-tabs",level:3},{value:"Tab order",id:"tab-order",level:3},{value:"Interactive complete example",id:"interactive-complete-example",level:3}],w=(e,t,a)=>{const i=e[t];return e[t]=e[a],e[a]=i,e},A=e=>{let{children:t,orientation:a="horizontal",tabsAlign:i="",editable:n={canDeleteTab:!1,canEditTabTitle:!1,canAddTab:!1,canMove:!1}}=e;const[l,d]=(0,r.useState)([{label:"Tab 1",content:"Content for Tab 1"},{label:"Tab 2",content:"Content for Tab 2"},{label:"Tab 3",content:(0,o.kt)("strong",null," bold content for Tab 3")},{label:"Tab 4",content:"Content for Tab 4"}]),[s,b]=(0,r.useState)(0);return(0,o.kt)(r.Fragment,null,(0,o.kt)(m,{activeTab:s,tabOrderChange:function(e){d([...w(l,e.detail.sourceIndex,e.detail.targetIndex)]),b(e.detail.targetIndex)},removeTab:function(e){l.splice(e.detail.index,1),d([...l])},editable:n,tabsAlign:i,orientation:a,addTab:function(e){console.log(e),d([...l,{label:"Tab "+(l.length+1),content:`Content for Tab ${l.length+1}`}])},mdxType:"HyTabsComponent"},l.map((function(e,t){return(0,o.kt)("div",{key:t,label:e.label},e.content)}))))},D=e=>{let{}=e;const[t,a]=(0,r.useState)(!1),[i,n]=(0,r.useState)(!1),[l,d]=(0,r.useState)(!1),[s,b]=(0,r.useState)(!1),[c,v]=(0,r.useState)("left"),[h,g]=(0,r.useState)("horizontal");return(0,o.kt)(r.Fragment,null,(0,o.kt)(y.R,{type:t?"primary":"",onClick:()=>{a(!t)},mdxType:"HyButton"},t?"Disable":"Enable"," editing"),(0,o.kt)(y.R,{type:i?"primary":"",onClick:()=>{n(!i)},mdxType:"HyButton"},i?"Disable":"Enable"," closing"),(0,o.kt)(y.R,{type:l?"primary":"",onClick:()=>{d(!l)},mdxType:"HyButton"},l?"Disable":"Enable"," Adding"),(0,o.kt)(y.R,{type:s?"primary":"",onClick:()=>{b(!s)},mdxType:"HyButton"},s?"Disable":"Enable"," Moving"),(0,o.kt)(y.R,{onClick:()=>{v("left"==c?"right":"left")},mdxType:"HyButton"},"left"==c?"Left":"Right"," align"),(0,o.kt)(y.R,{onClick:()=>{g("horizontal"==h?"vertical":"horizontal")},mdxType:"HyButton"},"horizontal"==h?"Horizontal":"Vertical"," align"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)(A,{tabsAlign:c,orientation:h,editable:{canDeleteTab:i,canEditTabTitle:t,canAddTab:l,canMove:s},mdxType:"SimpleTabExample"}))},S={toc:C,swapElements:w,SimpleTabExample:A,InteractiveTabExample:D},$="wrapper";function R(e){let{components:t}=e,a=(0,n.Z)(e,T);return(0,o.kt)($,(0,i.Z)({},S,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tabs"},"Tabs"),(0,o.kt)("h3",{id:"when-to-use"},"When To Use"),(0,o.kt)("p",null,"Tabs provide a convenient way to transition effortlessly between various views."),(0,o.kt)("h3",{id:"basic"},"Basic"),(0,o.kt)(A,{mdxType:"SimpleTabExample"}," "),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"orientation"},"Orientation"),(0,o.kt)("p",null,"Unleash the power of tab components by exploring different orientations, enabling seamless navigation in both vertical and horizontal layouts for enhanced user experience."),(0,o.kt)(A,{orientation:"vertical",mdxType:"SimpleTabExample"}," "),(0,o.kt)("h3",{id:"alignement"},"Alignement"),(0,o.kt)("h4",{id:"left"},"Left"),(0,o.kt)("p",null,"Unlock the versatility of tab components with flexible alignment options, allowing you to perfectly position and organize your tabs, ensuring a visually appealing and user-friendly interface."),(0,o.kt)("br",null),(0,o.kt)(A,{mdxType:"SimpleTabExample"}," "),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"center"},"Center"),(0,o.kt)(A,{tabsAlign:"center",mdxType:"SimpleTabExample"}," "),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"right"},"Right"),(0,o.kt)(A,{tabsAlign:"right",mdxType:"SimpleTabExample"}," "),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"vertical-right"},"Vertical Right"),(0,o.kt)("p",null,"You have the flexibility to combine Alignment and Orientation, empowering you to create tab components that offer seamless navigation while perfectly organizing content in your desired layout."),(0,o.kt)("br",null),(0,o.kt)(A,{tabsAlign:"right",orientation:"vertical",mdxType:"SimpleTabExample"}),(0,o.kt)("h3",{id:"dynmaic-tabs"},"Dynmaic tabs"),(0,o.kt)("p",null,"Gain the ability to effortlessly add and close tabs within your tab components, offering dynamic content management and enabling a customizable and interactive user experience."),(0,o.kt)(A,{editable:{canDeleteTab:!0,canEditTabTitle:!1,canAddTab:!0,canMove:!1},mdxType:"SimpleTabExample"}),(0,o.kt)("h3",{id:"editing-tabs"},"Editing tabs"),(0,o.kt)("p",null,"You also have the option to modify the labels of tabs, granting you the ability to customize and personalize the displayed label text within your tab components."),(0,o.kt)(A,{editable:{canDeleteTab:!1,canEditTabTitle:!0,canAddTab:!1,canMove:!1},mdxType:"SimpleTabExample"}),(0,o.kt)("h3",{id:"tab-order"},"Tab order"),(0,o.kt)("p",null,"By simply dragging the tab labels, you can easily rearrange the order of tabs within your tab components, providing a convenient way to customize the sequence and organization of your content."),(0,o.kt)(A,{editable:{canDeleteTab:!1,canEditTabTitle:!1,canAddTab:!1,canMove:!0},mdxType:"SimpleTabExample"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Enabling Simultaneous Label Editing and Reordering May Result in Unexpected Outcomes")),(0,o.kt)("h3",{id:"interactive-complete-example"},"Interactive complete example"),(0,o.kt)(D,{mdxType:"InteractiveTabExample"}," "))}R.isMDXComponent=!0},875:(e,t,a)=>{a.d(t,{XM:()=>n,Xe:()=>r,pX:()=>i});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>(...t)=>({_$litDirective$:e,values:t});class r{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this._$Ct=e,this._$AM=t,this._$Ci=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},8536:(e,t,a)=>{a.d(t,{$:()=>r});var i=a(3692),n=a(875);const r=(0,n.XM)(class extends n.Xe{constructor(e){var t;if(super(e),e.type!==n.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var a,n;if(void 0===this.nt){this.nt=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(a=this.st)||void 0===a?void 0:a.has(e))&&this.nt.add(e);return this.render(t)}const r=e.element.classList;this.nt.forEach((e=>{e in t||(r.remove(e),this.nt.delete(e))}));for(const i in t){const e=!!t[i];e===this.nt.has(i)||(null===(n=this.st)||void 0===n?void 0:n.has(i))||(e?(r.add(i),this.nt.add(i)):(r.remove(i),this.nt.delete(i)))}return i.Jb}})}}]);