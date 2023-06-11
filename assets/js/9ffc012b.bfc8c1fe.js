/*! For license information please see 9ffc012b.bfc8c1fe.js.LICENSE.txt */
"use strict";(self.webpackChunkhybrid_docs=self.webpackChunkhybrid_docs||[]).push([[2946],{1884:(t,e,n)=>{n.d(e,{K:()=>l});var r=n(3265),o=n(2877),a=function(t,e,n,r){var o,a=arguments.length,l=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(a<3?o(l):a>3?o(e,n,l):o(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l};let l=class extends r.oi{render(){return r.dy`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      />

      <i class="fa fa-${this.name}"></i>
    `}};a([(0,o.Cb)({type:String})],l.prototype,"name",void 0),l=a([(0,o.Mo)("hy-icon")],l)},368:(t,e,n)=>{n(1884)},3430:(t,e,n)=>{var r;n.d(e,{o:()=>i});var o=n(1943),a=n(7294),l=n(1884);const i=(0,o.L)({tagName:"hy-icon",elementClass:l.K,react:r||(r=n.t(a,2))})},3658:(t,e,n)=>{n(1865)},1865:(t,e,n)=>{n.d(e,{N:()=>p});var r=n(3265),o=n(2877);const a=[r.iv`
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
`,r.iv`
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
`,r.iv``];var l,i=n(8536),s=function(t,e,n,r){var o,a=arguments.length,l=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(a<3?o(l):a>3?o(e,n,l):o(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l};!function(t){t.EMAIL="email",t.PASSWORD="password",t.TEL="tel",t.TEXT="text",t.URL="url"}(l||(l={}));let p=class extends r.oi{constructor(){super(...arguments),this.disabled=!1,this.value="",this.type=l.TEXT,this.spanClasses={inputfocuced:!1},this.slottedClasses={prefixed:!1,suffixed:!1}}firstUpdated(){for(const t of this._postItems)t.setAttribute("usedas","post");for(const t of this._preItems)t.setAttribute("usedas","pre");this.slottedClasses=Object.assign(Object.assign({},this.slottedClasses),{prefixed:!!this._prefixItems.length,post:!!this._postItems.length,pre:!!this._preItems.length}),this.performUpdate()}focusHandler(t){this.spanClasses=Object.assign(Object.assign({},this.spanClasses),{inputfocuced:!0})}blurHandler(t){this.spanClasses=Object.assign(Object.assign({},this.spanClasses),{inputfocuced:!1})}updated(t){super.updated(t),t.has("value")&&this.requestUpdate()}render(){var t,e;return r.dy`
      <slot name="pre"></slot>
      <span
        class="${(0,i.$)(Object.assign(Object.assign({},this.spanClasses),this.slottedClasses))}"
        data-size=${this.size?this.size:r.Ld}
      >
        <slot name="prefix"></slot>
        <input
          .placeholder="${null!==(t=this.palceholder)&&void 0!==t?t:r.Ld}"
          .value="${this.value}"
          type="${this.type}"
          @input=${t=>{this.dispatchEvent(new CustomEvent("valueChange",{detail:t.target}))}}
          @focus=${t=>this.focusHandler(t)}
          @blur=${this.blurHandler}
          ?autofocus=${this.autofocus}
          placeholder=${null!==(e=this.placeholder)&&void 0!==e?e:r.Ld}
        />
        <slot name="suffix"></slot>
      </span>
      <slot name="post"></slot>
    `}};p.styles=a,s([(0,o.Cb)({type:Boolean})],p.prototype,"disabled",void 0),s([(0,o.Cb)({type:String})],p.prototype,"palceholder",void 0),s([(0,o.Cb)({type:String})],p.prototype,"alt",void 0),s([(0,o.Cb)({type:String})],p.prototype,"value",void 0),s([(0,o.Cb)({type:String})],p.prototype,"size",void 0),s([(0,o.Cb)({type:String})],p.prototype,"autocomplete",void 0),s([(0,o.Cb)({reflect:!0})],p.prototype,"type",void 0),s([(0,o.Cb)({type:String})],p.prototype,"placeholder",void 0),s([(0,o.NH)({slot:"prefix",flatten:!0})],p.prototype,"_prefixItems",void 0),s([(0,o.NH)({slot:"post",selector:"hy-button"})],p.prototype,"_postItems",void 0),s([(0,o.NH)({slot:"pre",selector:"hy-button"})],p.prototype,"_preItems",void 0),s([(0,o.SB)()],p.prototype,"spanClasses",void 0),s([(0,o.SB)()],p.prototype,"slottedClasses",void 0),p=s([(0,o.Mo)("hy-input")],p)},8688:(t,e,n)=>{var r;n.d(e,{s:()=>i});var o=n(1943),a=n(7294),l=n(1865);const i=(0,o.L)({tagName:"hy-input",elementClass:l.N,react:r||(r=n.t(a,2)),events:{valueChange:"valueChange"}})},2222:(t,e,n)=>{n.r(e),n.d(e,{ColorPicket:()=>g,DefaultColor:()=>f,InputPicket:()=>v,TextInputBasicExample:()=>T,TextInputSizeExample:()=>I,assets:()=>x,contentTitle:()=>h,default:()=>N,frontMatter:()=>m,metadata:()=>k,toc:()=>b});var r=n(7462),o=n(3366),a=n(7294),l=n(3905),i=n(4866),s=n(5162),p=(n(368),n(9164),n(3658),n(780)),d=n(8688),u=n(3430),c=n(3992);const y=["components"],m={sidebar_position:3},h="Input",k={unversionedId:"components/inputs",id:"components/inputs",title:"Input",description:"The text field is a basic interface element that is commonly used to receive user input.",source:"@site/docs/components/inputs.mdx",sourceDirName:"components",slug:"/components/inputs",permalink:"/docs/docs/components/inputs",draft:!1,editUrl:"https://github.com/hybridui/docs/tree/main/docs/components/inputs.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/docs/docs/components/buttons"},next:{title:"Calendar",permalink:"/docs/docs/components/calendar"}},x={},b=[{value:"How to use it",id:"how-to-use-it",level:2},{value:"When To Use",id:"when-to-use",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Size",id:"size",level:3},{value:"Suffix/Pefix",id:"suffixpefix",level:3},{value:"Post/Pre",id:"postpre",level:3}],f=t=>{let{color:e}=t;return(0,l.kt)(a.Fragment,null,(0,l.kt)("div",{style:{display:"inline-block",verticalAlign:"super",marginRight:"5px"}},e),(0,l.kt)("div",{style:{height:"35px",width:"75px",backgroundColor:e,margin:"-1 auto ",display:"inline-block"}}))},g=t=>{let{children:e,color:n,cssVariableName:r}=t;const[o,i]=(0,a.useState)(n),[s,d]=(0,a.useState)(!1);return(0,l.kt)(a.Fragment,null,(0,l.kt)("div",{style:{height:"35px",width:"35px",backgroundColor:o,cursor:"pointer ",margin:"0 auto 20px"},onClick:()=>{d(!s)}}),s&&(0,l.kt)(p.if,{color:o,onChangeComplete:t=>{i(t.hex),document.documentElement.style.setProperty(r,t.hex)},mdxType:"BlockPicker"}))},v=t=>{let{children:e,value:n,cssVariableName:r,unit:o}=t;const[i,s]=(0,a.useState)(n),[p,d]=(0,a.useState)(!1);return(0,l.kt)(a.Fragment,null,(0,l.kt)("input",{type:"number",style:{width:"60px",display:"inline-block"},onChange:t=>{s(t.target.value),document.documentElement.style.setProperty(r,`${t.target.value}${o}`)},value:i}),(0,l.kt)("div",null,o))},T=t=>{let{children:e,color:n}=t;return(0,l.kt)(a.Fragment,null,(0,l.kt)(d.s,{placeholder:"Basic text field",mdxType:"HyInput"}),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"text placeholder",size:"large",mdxType:"HyInput"},(0,l.kt)("span",{slot:"prefix"},(0,l.kt)(u.o,{name:"user",mdxType:"HyIcon"}))),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"text placeholder",mdxType:"HyInput"},(0,l.kt)("span",{slot:"prefix"},(0,l.kt)(u.o,{name:"user",mdxType:"HyIcon"}))),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"text placeholder",size:"small",mdxType:"HyInput"},(0,l.kt)("span",{slot:"prefix"},(0,l.kt)(u.o,{name:"user",mdxType:"HyIcon"}))),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"text placeholder",size:"small",mdxType:"HyInput"},(0,l.kt)("span",{slot:"suffix"},(0,l.kt)(u.o,{name:"check",mdxType:"HyIcon"}))),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"text placeholder",size:"small",mdxType:"HyInput"},(0,l.kt)("span",{slot:"suffix"},(0,l.kt)(u.o,{name:"times-circle",mdxType:"HyIcon"}))),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"text placeholder",mdxType:"HyInput"},(0,l.kt)("span",{slot:"prefix"},(0,l.kt)(u.o,{name:"user",mdxType:"HyIcon"})),(0,l.kt)("span",{slot:"suffix"},(0,l.kt)(u.o,{name:"times-circle",mdxType:"HyIcon"}))),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"text placeholder",mdxType:"HyInput"},(0,l.kt)("span",{slot:"prefix"},(0,l.kt)(u.o,{name:"user",mdxType:"HyIcon"})),(0,l.kt)("span",{slot:"suffix"},(0,l.kt)(u.o,{name:"spinner",mdxType:"HyIcon"}))),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"text placeholder",mdxType:"HyInput"},(0,l.kt)("span",{slot:"suffix"},(0,l.kt)(u.o,{name:"copy",mdxType:"HyIcon"}))),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"text placeholder",mdxType:"HyInput"},(0,l.kt)("span",{slot:"post"},(0,l.kt)(u.o,{name:"copy",mdxType:"HyIcon"}))))},I=t=>{let{children:e,color:n}=t;return(0,l.kt)(a.Fragment,null,(0,l.kt)(d.s,{placeholder:"Basic text field",mdxType:"HyInput"}),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"text placeholder",size:"large",mdxType:"HyInput"},(0,l.kt)("span",{slot:"prefix"},(0,l.kt)(u.o,{name:"user",mdxType:"HyIcon"}))),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"text placeholder",mdxType:"HyInput"},(0,l.kt)("span",{slot:"prefix"},(0,l.kt)(u.o,{name:"user",mdxType:"HyIcon"}))),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"text placeholder",size:"small",mdxType:"HyInput"},(0,l.kt)("span",{slot:"prefix"},(0,l.kt)(u.o,{name:"user",mdxType:"HyIcon"}))),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"text placeholder",size:"small",mdxType:"HyInput"},(0,l.kt)("span",{slot:"suffix"},(0,l.kt)(u.o,{name:"check",mdxType:"HyIcon"}))),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"text placeholder",size:"small",mdxType:"HyInput"},(0,l.kt)("span",{slot:"suffix"},(0,l.kt)(u.o,{name:"times-circle",mdxType:"HyIcon"}))),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"text placeholder",mdxType:"HyInput"},(0,l.kt)("span",{slot:"prefix"},(0,l.kt)(u.o,{name:"user",mdxType:"HyIcon"})),(0,l.kt)("span",{slot:"suffix"},(0,l.kt)(u.o,{name:"times-circle",mdxType:"HyIcon"}))),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"text placeholder",mdxType:"HyInput"},(0,l.kt)("span",{slot:"prefix"},(0,l.kt)(u.o,{name:"user",mdxType:"HyIcon"})),(0,l.kt)("span",{slot:"suffix"},(0,l.kt)(u.o,{name:"spinner",mdxType:"HyIcon"}))),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"text placeholder",mdxType:"HyInput"},(0,l.kt)("span",{slot:"suffix"},(0,l.kt)(u.o,{name:"copy",mdxType:"HyIcon"}))),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"text placeholder",mdxType:"HyInput"},(0,l.kt)("span",{slot:"post"},(0,l.kt)(u.o,{name:"copy",mdxType:"HyIcon"}))))},H={toc:b,DefaultColor:f,ColorPicket:g,InputPicket:v,TextInputBasicExample:T,TextInputSizeExample:I},C="wrapper";function N(t){let{components:e}=t,n=(0,o.Z)(t,y);return(0,l.kt)(C,(0,r.Z)({},H,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"input"},"Input"),(0,l.kt)("p",null,"The text field is a basic interface element that is commonly used to receive user input.\nInput can be provided or modified using either a keyboard or a mouse."),(0,l.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @hybridui/input\n"))),(0,l.kt)(s.Z,{value:"uarn",label:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @hybridui/input\n")))),(0,l.kt)("h2",{id:"when-to-use"},"When To Use"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Input from the user is required in the form field."),(0,l.kt)("li",{parentName:"ul"},"A search input is required")),(0,l.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,l.kt)(d.s,{placeholder:"Basic text field",mdxType:"HyInput"}),(0,l.kt)("details",{style:{backgroundColor:"transparent",border:"none"}},(0,l.kt)("summary",null,"CSS Varibale"),"#### Default",(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--hybrid-input-container-background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(f,{color:"#fff",mdxType:"DefaultColor"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(g,{color:"#fff",cssVariableName:"--hybrid-input-container-background-color",mdxType:"ColorPicket"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--hybrid-input-container-border-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(f,{color:"#d9d9d9",mdxType:"DefaultColor"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(g,{color:"#d9d9d9",cssVariableName:"--hybrid-input-container-border-color",mdxType:"ColorPicket"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--hybrid-input-hover-container-border-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(f,{color:"#1277e1",mdxType:"DefaultColor"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(g,{color:"#1277e1",cssVariableName:"--hybrid-input-hover-container-border-color",mdxType:"ColorPicket"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--hybrid-input-hover-container-background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(f,{color:"#fff",mdxType:"DefaultColor"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(g,{color:"#fff",cssVariableName:"--hybrid-input-hover-container-background-color",mdxType:"ColorPicket"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--hybrid-input-container-font-size"),(0,l.kt)("td",{parentName:"tr",align:null},"14px"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(v,{value:"14",unit:"px",cssVariableName:"--hybrid-input-container-font-size",mdxType:"InputPicket"})))))),(0,l.kt)("h3",{id:"size"},"Size"),(0,l.kt)(d.s,{placeholder:"Small input field",size:"small",mdxType:"HyInput"}),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"Default input field",mdxType:"HyInput"}),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"Large input field",size:"large",mdxType:"HyInput"}),(0,l.kt)("h3",{id:"suffixpefix"},"Suffix/Pefix"),(0,l.kt)(d.s,{placeholder:"Input with prefix",mdxType:"HyInput"},(0,l.kt)(u.o,{slot:"prefix",name:"user",mdxType:"HyIcon"})),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"Input with suffix (clear icon)",mdxType:"HyInput"},(0,l.kt)(u.o,{slot:"suffix",name:"times-circle",mdxType:"HyIcon"})),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"Input with suffix (copy icon)",mdxType:"HyInput"},(0,l.kt)(u.o,{name:"copy",slot:"suffix",mdxType:"HyIcon"})),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"Input with suffix (loading icon)",mdxType:"HyInput"},(0,l.kt)(u.o,{slot:"suffix",name:"spinner",mdxType:"HyIcon"})),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"Input with suffix and prefix ",mdxType:"HyInput"},(0,l.kt)(u.o,{slot:"suffix",name:"times-circle",mdxType:"HyIcon"}),(0,l.kt)(u.o,{slot:"prefix",name:"user",mdxType:"HyIcon"})),(0,l.kt)("h3",{id:"postpre"},"Post/Pre"),(0,l.kt)(d.s,{placeholder:"Search ",mdxType:"HyInput"},(0,l.kt)(c.R,{slot:"post",icon:"search",mdxType:"HyButton"})),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"Search ",mdxType:"HyInput"},(0,l.kt)(c.R,{slot:"post",icon:"search",mdxType:"HyButton"}),(0,l.kt)(u.o,{slot:"suffix",name:"spinner",mdxType:"HyIcon"})),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"Search ",mdxType:"HyInput"},(0,l.kt)(u.o,{slot:"prefix",name:"spinner",mdxType:"HyIcon"}),(0,l.kt)(c.R,{slot:"post",type:"primary",mdxType:"HyButton"},"search")),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"Search ",mdxType:"HyInput"},(0,l.kt)(c.R,{slot:"post",type:"primary",mdxType:"HyButton"},"search")),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"Search ",mdxType:"HyInput"},(0,l.kt)(c.R,{slot:"post",type:"primary",danger:!0,icon:"times-circle",mdxType:"HyButton"})),(0,l.kt)("br",null),(0,l.kt)(d.s,{placeholder:"www.google.com ",mdxType:"HyInput"},(0,l.kt)(c.R,{slot:"pre",mdxType:"HyButton"},"Https"),(0,l.kt)(c.R,{slot:"post",mdxType:"HyButton"},".com")))}N.isMDXComponent=!0},875:(t,e,n)=>{n.d(e,{XM:()=>o,Xe:()=>a,pX:()=>r});const r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=t=>(...e)=>({_$litDirective$:t,values:e});class a{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},8536:(t,e,n)=>{n.d(e,{$:()=>a});var r=n(3692),o=n(875);const a=(0,o.XM)(class extends o.Xe{constructor(t){var e;if(super(t),t.type!==o.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var n,o;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(n=this.st)||void 0===n?void 0:n.has(t))&&this.nt.add(t);return this.render(e)}const a=t.element.classList;this.nt.forEach((t=>{t in e||(a.remove(t),this.nt.delete(t))}));for(const r in e){const t=!!e[r];t===this.nt.has(r)||(null===(o=this.st)||void 0===o?void 0:o.has(r))||(t?(a.add(r),this.nt.add(r)):(a.remove(r),this.nt.delete(r)))}return r.Jb}})}}]);