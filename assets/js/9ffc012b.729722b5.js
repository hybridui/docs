/*! For license information please see 9ffc012b.729722b5.js.LICENSE.txt */
"use strict";(self.webpackChunkhybrid_docs=self.webpackChunkhybrid_docs||[]).push([[2946],{7573:(t,e,n)=>{n.r(e),n.d(e,{ColorPicket:()=>$,DefaultColor:()=>B,InputPicket:()=>O,TextInputBasicExample:()=>D,TextInputSizeExample:()=>R,assets:()=>_,contentTitle:()=>S,default:()=>V,frontMatter:()=>z,metadata:()=>P,toc:()=>j});var r=n(7462),o=n(3366),a=n(7294),l=n.t(a,2),i=n(3905),p=n(4866),s=n(5162),d=n(3265),u=n(5798),c=function(t,e,n,r){var o,a=arguments.length,l=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(a<3?o(l):a>3?o(e,n,l):o(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l};let y=class extends d.oi{render(){return d.dy`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      />

      <i class="fa fa-${this.name}"></i>
    `}};c([(0,u.Cb)({type:String})],y.prototype,"name",void 0),y=c([(0,u.Mo)("hy-icon")],y);n(9164);const m=[d.iv`
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
    color: var(--hybrid-input-container-border-color, rgba(0, 0, 0, 0.88));
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
`,d.iv`
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
`,d.iv``];var h=n(3692);const k=1;class x{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const b=(f=class extends x{constructor(t){var e;if(super(t),t.type!==k||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var n,r;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(n=this.st)||void 0===n?void 0:n.has(t))&&this.nt.add(t);return this.render(e)}const o=t.element.classList;this.nt.forEach((t=>{t in e||(o.remove(t),this.nt.delete(t))}));for(const a in e){const t=!!e[a];t===this.nt.has(a)||(null===(r=this.st)||void 0===r?void 0:r.has(a))||(t?(o.add(a),this.nt.add(a)):(o.remove(a),this.nt.delete(a)))}return h.Jb}},(...t)=>({_$litDirective$:f,values:t}));var f,g=function(t,e,n,r){var o,a=arguments.length,l=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(a<3?o(l):a>3?o(e,n,l):o(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l};let v=class extends d.oi{constructor(){super(...arguments),this.disabled=!1,this.spanClasses={inputfocuced:!1},this.slottedClasses={prefixed:!1,suffixed:!1}}firstUpdated(){for(const t of this._postItems)t.setAttribute("usedas","post");for(const t of this._preItems)t.setAttribute("usedas","pre");this.slottedClasses=Object.assign(Object.assign({},this.slottedClasses),{prefixed:!!this._prefixItems.length,post:!!this._postItems.length,pre:!!this._preItems.length})}focusHandler(t){this.spanClasses=Object.assign(Object.assign({},this.spanClasses),{inputfocuced:!0})}blurHandler(t){this.spanClasses=Object.assign(Object.assign({},this.spanClasses),{inputfocuced:!1})}render(){var t;return d.dy`
      <slot name="pre"></slot>
      <span
        class="${b(Object.assign(Object.assign({},this.spanClasses),this.slottedClasses))}"
        data-size=${this.size?this.size:d.Ld}
      >
        <slot name="prefix"></slot>
        <input
          @focus=${t=>this.focusHandler(t)}
          @blur=${this.blurHandler}
          ?autofocus=${this.autofocus}
          placeholder=${null!==(t=this.placeholder)&&void 0!==t?t:d.Ld}
        />
        <slot name="suffix"></slot>
      </span>
      <slot name="post"></slot>
    `}};v.styles=m,g([(0,u.Cb)({type:Boolean})],v.prototype,"disabled",void 0),g([(0,u.Cb)({type:String})],v.prototype,"alt",void 0),g([(0,u.Cb)({type:String})],v.prototype,"size",void 0),g([(0,u.Cb)({type:String})],v.prototype,"autocomplete",void 0),g([(0,u.Cb)({type:String})],v.prototype,"placeholder",void 0),g([(0,u.NH)({slot:"prefix",flatten:!0})],v.prototype,"_prefixItems",void 0),g([(0,u.NH)({slot:"post",selector:"hy-button"})],v.prototype,"_postItems",void 0),g([(0,u.NH)({slot:"pre",selector:"hy-button"})],v.prototype,"_preItems",void 0),g([(0,u.SB)()],v.prototype,"spanClasses",void 0),g([(0,u.SB)()],v.prototype,"slottedClasses",void 0),v=g([(0,u.Mo)("hy-input")],v);var T=n(780),I=n(1943);const H=(0,I.L)({tagName:"hy-input",elementClass:v,react:l}),C=(0,I.L)({tagName:"hy-icon",elementClass:y,react:l});var N=n(3992);const w=["components"],z={sidebar_position:3},S="Input",P={unversionedId:"components/inputs",id:"components/inputs",title:"Input",description:"The text field is a basic interface element that is commonly used to receive user input.",source:"@site/docs/components/inputs.mdx",sourceDirName:"components",slug:"/components/inputs",permalink:"/docs/docs/components/inputs",draft:!1,editUrl:"https://github.com/hybridui/docs/tree/main/docs/components/inputs.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/docs/docs/components/buttons"},next:{title:"Calendar",permalink:"/docs/docs/components/calendar"}},_={},j=[{value:"How to use it",id:"how-to-use-it",level:2},{value:"When To Use",id:"when-to-use",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Size",id:"size",level:3},{value:"Suffix/Pefix",id:"suffixpefix",level:3},{value:"Post/Pre",id:"postpre",level:3}],B=t=>{let{color:e}=t;return(0,i.kt)(a.Fragment,null,(0,i.kt)("div",{style:{display:"inline-block",verticalAlign:"super",marginRight:"5px"}},e),(0,i.kt)("div",{style:{height:"35px",width:"75px",backgroundColor:e,margin:"-1 auto ",display:"inline-block"}}))},$=t=>{let{children:e,color:n,cssVariableName:r}=t;const[o,l]=(0,a.useState)(n),[p,s]=(0,a.useState)(!1);return(0,i.kt)(a.Fragment,null,(0,i.kt)("div",{style:{height:"35px",width:"35px",backgroundColor:o,cursor:"pointer ",margin:"0 auto 20px"},onClick:()=>{s(!p)}}),p&&(0,i.kt)(T.if,{color:o,onChangeComplete:t=>{l(t.hex),document.documentElement.style.setProperty(r,t.hex)},mdxType:"BlockPicker"}))},O=t=>{let{children:e,value:n,cssVariableName:r,unit:o}=t;const[l,p]=(0,a.useState)(n),[s,d]=(0,a.useState)(!1);return(0,i.kt)(a.Fragment,null,(0,i.kt)("input",{type:"number",style:{width:"60px",display:"inline-block"},onChange:t=>{p(t.target.value),document.documentElement.style.setProperty(r,`${t.target.value}${o}`)},value:l}),(0,i.kt)("div",null,o))},D=t=>{let{children:e,color:n}=t;return(0,i.kt)(a.Fragment,null,(0,i.kt)(H,{placeholder:"Basic text field",mdxType:"HyInput"}),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"text placeholder",size:"large",mdxType:"HyInput"},(0,i.kt)("span",{slot:"prefix"},(0,i.kt)(C,{name:"user",mdxType:"HyIcon"}))),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"text placeholder",mdxType:"HyInput"},(0,i.kt)("span",{slot:"prefix"},(0,i.kt)(C,{name:"user",mdxType:"HyIcon"}))),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"text placeholder",size:"small",mdxType:"HyInput"},(0,i.kt)("span",{slot:"prefix"},(0,i.kt)(C,{name:"user",mdxType:"HyIcon"}))),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"text placeholder",size:"small",mdxType:"HyInput"},(0,i.kt)("span",{slot:"suffix"},(0,i.kt)(C,{name:"check",mdxType:"HyIcon"}))),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"text placeholder",size:"small",mdxType:"HyInput"},(0,i.kt)("span",{slot:"suffix"},(0,i.kt)(C,{name:"times-circle",mdxType:"HyIcon"}))),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"text placeholder",mdxType:"HyInput"},(0,i.kt)("span",{slot:"prefix"},(0,i.kt)(C,{name:"user",mdxType:"HyIcon"})),(0,i.kt)("span",{slot:"suffix"},(0,i.kt)(C,{name:"times-circle",mdxType:"HyIcon"}))),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"text placeholder",mdxType:"HyInput"},(0,i.kt)("span",{slot:"prefix"},(0,i.kt)(C,{name:"user",mdxType:"HyIcon"})),(0,i.kt)("span",{slot:"suffix"},(0,i.kt)(C,{name:"spinner",mdxType:"HyIcon"}))),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"text placeholder",mdxType:"HyInput"},(0,i.kt)("span",{slot:"suffix"},(0,i.kt)(C,{name:"copy",mdxType:"HyIcon"}))),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"text placeholder",mdxType:"HyInput"},(0,i.kt)("span",{slot:"post"},(0,i.kt)(C,{name:"copy",mdxType:"HyIcon"}))))},R=t=>{let{children:e,color:n}=t;return(0,i.kt)(a.Fragment,null,(0,i.kt)(H,{placeholder:"Basic text field",mdxType:"HyInput"}),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"text placeholder",size:"large",mdxType:"HyInput"},(0,i.kt)("span",{slot:"prefix"},(0,i.kt)(C,{name:"user",mdxType:"HyIcon"}))),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"text placeholder",mdxType:"HyInput"},(0,i.kt)("span",{slot:"prefix"},(0,i.kt)(C,{name:"user",mdxType:"HyIcon"}))),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"text placeholder",size:"small",mdxType:"HyInput"},(0,i.kt)("span",{slot:"prefix"},(0,i.kt)(C,{name:"user",mdxType:"HyIcon"}))),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"text placeholder",size:"small",mdxType:"HyInput"},(0,i.kt)("span",{slot:"suffix"},(0,i.kt)(C,{name:"check",mdxType:"HyIcon"}))),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"text placeholder",size:"small",mdxType:"HyInput"},(0,i.kt)("span",{slot:"suffix"},(0,i.kt)(C,{name:"times-circle",mdxType:"HyIcon"}))),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"text placeholder",mdxType:"HyInput"},(0,i.kt)("span",{slot:"prefix"},(0,i.kt)(C,{name:"user",mdxType:"HyIcon"})),(0,i.kt)("span",{slot:"suffix"},(0,i.kt)(C,{name:"times-circle",mdxType:"HyIcon"}))),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"text placeholder",mdxType:"HyInput"},(0,i.kt)("span",{slot:"prefix"},(0,i.kt)(C,{name:"user",mdxType:"HyIcon"})),(0,i.kt)("span",{slot:"suffix"},(0,i.kt)(C,{name:"spinner",mdxType:"HyIcon"}))),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"text placeholder",mdxType:"HyInput"},(0,i.kt)("span",{slot:"suffix"},(0,i.kt)(C,{name:"copy",mdxType:"HyIcon"}))),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"text placeholder",mdxType:"HyInput"},(0,i.kt)("span",{slot:"post"},(0,i.kt)(C,{name:"copy",mdxType:"HyIcon"}))))},A={toc:j,DefaultColor:B,ColorPicket:$,InputPicket:O,TextInputBasicExample:D,TextInputSizeExample:R},M="wrapper";function V(t){let{components:e}=t,n=(0,o.Z)(t,w);return(0,i.kt)(M,(0,r.Z)({},A,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"input"},"Input"),(0,i.kt)("p",null,"The text field is a basic interface element that is commonly used to receive user input.\nInput can be provided or modified using either a keyboard or a mouse."),(0,i.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,i.kt)(p.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @hybridui/input\n"))),(0,i.kt)(s.Z,{value:"uarn",label:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @hybridui/input\n")))),(0,i.kt)("h2",{id:"when-to-use"},"When To Use"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Input from the user is required in the form field."),(0,i.kt)("li",{parentName:"ul"},"A search input is required")),(0,i.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,i.kt)(H,{placeholder:"Basic text field",mdxType:"HyInput"}),(0,i.kt)("details",{style:{backgroundColor:"transparent",border:"none"}},(0,i.kt)("summary",null,"CSS Varibale"),"#### Default",(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--hybrid-input-container-background-color"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(B,{color:"#fff",mdxType:"DefaultColor"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)($,{color:"#fff",cssVariableName:"--hybrid-input-container-background-color",mdxType:"ColorPicket"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--hybrid-input-container-border-color"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(B,{color:"#d9d9d9",mdxType:"DefaultColor"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)($,{color:"#d9d9d9",cssVariableName:"--hybrid-input-container-border-color",mdxType:"ColorPicket"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--hybrid-input-hover-container-border-color"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(B,{color:"#1277e1",mdxType:"DefaultColor"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)($,{color:"#1277e1",cssVariableName:"--hybrid-input-hover-container-border-color",mdxType:"ColorPicket"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--hybrid-input-hover-container-background-color"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(B,{color:"#fff",mdxType:"DefaultColor"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)($,{color:"#fff",cssVariableName:"--hybrid-input-hover-container-background-color",mdxType:"ColorPicket"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--hybrid-input-container-font-size"),(0,i.kt)("td",{parentName:"tr",align:null},"14px"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(O,{value:"14",unit:"px",cssVariableName:"--hybrid-input-container-font-size",mdxType:"InputPicket"})))))),(0,i.kt)("h3",{id:"size"},"Size"),(0,i.kt)(H,{placeholder:"Small input field",size:"small",mdxType:"HyInput"}),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"Default input field",mdxType:"HyInput"}),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"Large input field",size:"large",mdxType:"HyInput"}),(0,i.kt)("h3",{id:"suffixpefix"},"Suffix/Pefix"),(0,i.kt)(H,{placeholder:"Input with prefix",mdxType:"HyInput"},(0,i.kt)(C,{slot:"prefix",name:"user",mdxType:"HyIcon"})),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"Input with suffix (clear icon)",mdxType:"HyInput"},(0,i.kt)(C,{slot:"suffix",name:"times-circle",mdxType:"HyIcon"})),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"Input with suffix (copy icon)",mdxType:"HyInput"},(0,i.kt)(C,{name:"copy",slot:"suffix",mdxType:"HyIcon"})),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"Input with suffix (loading icon)",mdxType:"HyInput"},(0,i.kt)(C,{slot:"suffix",name:"spinner",mdxType:"HyIcon"})),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"Input with suffix and prefix ",mdxType:"HyInput"},(0,i.kt)(C,{slot:"suffix",name:"times-circle",mdxType:"HyIcon"}),(0,i.kt)(C,{slot:"prefix",name:"user",mdxType:"HyIcon"})),(0,i.kt)("h3",{id:"postpre"},"Post/Pre"),(0,i.kt)(H,{placeholder:"Search ",mdxType:"HyInput"},(0,i.kt)(N.R,{slot:"post",icon:"search",mdxType:"HyButton"})),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"Search ",mdxType:"HyInput"},(0,i.kt)(N.R,{slot:"post",icon:"search",mdxType:"HyButton"}),(0,i.kt)(C,{slot:"suffix",name:"spinner",mdxType:"HyIcon"})),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"Search ",mdxType:"HyInput"},(0,i.kt)(C,{slot:"prefix",name:"spinner",mdxType:"HyIcon"}),(0,i.kt)(N.R,{slot:"post",type:"primary",mdxType:"HyButton"},"search")),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"Search ",mdxType:"HyInput"},(0,i.kt)(N.R,{slot:"post",type:"primary",mdxType:"HyButton"},"search")),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"Search ",mdxType:"HyInput"},(0,i.kt)(N.R,{slot:"post",type:"primary",danger:!0,icon:"times-circle",mdxType:"HyButton"})),(0,i.kt)("br",null),(0,i.kt)(H,{placeholder:"www.google.com ",mdxType:"HyInput"},(0,i.kt)(N.R,{slot:"pre",mdxType:"HyButton"},"Https"),(0,i.kt)(N.R,{slot:"post",mdxType:"HyButton"},".com")))}V.isMDXComponent=!0}}]);