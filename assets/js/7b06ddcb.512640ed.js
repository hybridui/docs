/*! For license information please see 7b06ddcb.512640ed.js.LICENSE.txt */
"use strict";(self.webpackChunkhybrid_docs=self.webpackChunkhybrid_docs||[]).push([[1911],{1884:(e,a,r)=>{r.d(a,{K:()=>s});var t=r(3265),o=r(2877),i=function(e,a,r,t){var o,i=arguments.length,s=i<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,a,r,t);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(i<3?o(s):i>3?o(a,r,s):o(a,r))||s);return i>3&&s&&Object.defineProperty(a,r,s),s};let s=class extends t.oi{render(){return t.dy`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      />

      <i class="fa fa-${this.name}"></i>
    `}};i([(0,o.Cb)({type:String})],s.prototype,"name",void 0),s=i([(0,o.Mo)("hy-icon")],s)},368:(e,a,r)=>{r(1884)},3430:(e,a,r)=>{var t;r.d(a,{o:()=>n});var o=r(1943),i=r(7294),s=r(1884);const n=(0,o.L)({tagName:"hy-icon",elementClass:s.K,react:t||(t=r.t(i,2))})},3658:(e,a,r)=>{r(7472)},7472:(e,a,r)=>{r.d(a,{N:()=>p});var t=r(3265),o=r(2877);const i=[t.iv`
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
`,t.iv`
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
`,t.iv``];var s=r(3692),n=r(875);const l=(0,n.XM)(class extends n.Xe{constructor(e){var a;if(super(e),e.type!==n.pX.ATTRIBUTE||"class"!==e.name||(null===(a=e.strings)||void 0===a?void 0:a.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((a=>e[a])).join(" ")+" "}update(e,[a]){var r,t;if(void 0===this.nt){this.nt=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in a)a[e]&&!(null===(r=this.st)||void 0===r?void 0:r.has(e))&&this.nt.add(e);return this.render(a)}const o=e.element.classList;this.nt.forEach((e=>{e in a||(o.remove(e),this.nt.delete(e))}));for(const i in a){const e=!!a[i];e===this.nt.has(i)||(null===(t=this.st)||void 0===t?void 0:t.has(i))||(e?(o.add(i),this.nt.add(i)):(o.remove(i),this.nt.delete(i)))}return s.Jb}});var c,d=function(e,a,r,t){var o,i=arguments.length,s=i<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,a,r,t);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(i<3?o(s):i>3?o(a,r,s):o(a,r))||s);return i>3&&s&&Object.defineProperty(a,r,s),s};!function(e){e.EMAIL="email",e.PASSWORD="password",e.TEL="tel",e.TEXT="text",e.URL="url"}(c||(c={}));let p=class extends t.oi{constructor(){super(...arguments),this.disabled=!1,this.value="",this.type=c.TEXT,this.spanClasses={inputfocuced:!1},this.slottedClasses={prefixed:!1,suffixed:!1}}firstUpdated(){for(const e of this._postItems)e.setAttribute("usedas","post");for(const e of this._preItems)e.setAttribute("usedas","pre");this.slottedClasses=Object.assign(Object.assign({},this.slottedClasses),{prefixed:!!this._prefixItems.length,post:!!this._postItems.length,pre:!!this._preItems.length}),this.performUpdate()}focusHandler(e){this.spanClasses=Object.assign(Object.assign({},this.spanClasses),{inputfocuced:!0})}blurHandler(e){this.spanClasses=Object.assign(Object.assign({},this.spanClasses),{inputfocuced:!1})}render(){var e,a;return t.dy`
      <slot name="pre"></slot>
      <span
        class="${l(Object.assign(Object.assign({},this.spanClasses),this.slottedClasses))}"
        data-size=${this.size?this.size:t.Ld}
      >
        <slot name="prefix"></slot>
        <input
          .placeholder="${null!==(e=this.palceholder)&&void 0!==e?e:t.Ld}"
          .value="${this.value}"
          type="${this.type}"
          @input=${e=>{this.dispatchEvent(new CustomEvent("inputed",{detail:e.target}))}}
          @focus=${e=>this.focusHandler(e)}
          @blur=${this.blurHandler}
          ?autofocus=${this.autofocus}
          placeholder=${null!==(a=this.placeholder)&&void 0!==a?a:t.Ld}
        />
        <slot name="suffix"></slot>
      </span>
      <slot name="post"></slot>
    `}};p.styles=i,d([(0,o.Cb)({type:Boolean})],p.prototype,"disabled",void 0),d([(0,o.Cb)({type:String})],p.prototype,"palceholder",void 0),d([(0,o.Cb)({type:String})],p.prototype,"alt",void 0),d([(0,o.Cb)({type:String})],p.prototype,"value",void 0),d([(0,o.Cb)({type:String})],p.prototype,"size",void 0),d([(0,o.Cb)({type:String})],p.prototype,"autocomplete",void 0),d([(0,o.Cb)({reflect:!0})],p.prototype,"type",void 0),d([(0,o.Cb)({type:String})],p.prototype,"placeholder",void 0),d([(0,o.NH)({slot:"prefix",flatten:!0})],p.prototype,"_prefixItems",void 0),d([(0,o.NH)({slot:"post",selector:"hy-button"})],p.prototype,"_postItems",void 0),d([(0,o.NH)({slot:"pre",selector:"hy-button"})],p.prototype,"_preItems",void 0),d([(0,o.SB)()],p.prototype,"spanClasses",void 0),d([(0,o.SB)()],p.prototype,"slottedClasses",void 0),p=d([(0,o.Mo)("hy-input")],p)},8688:(e,a,r)=>{var t;r.d(a,{s:()=>n});var o=r(1943),i=r(7294),s=r(7472);const n=(0,o.L)({tagName:"hy-input",elementClass:s.N,react:t||(t=r.t(i,2)),events:{inputed:"inputed"}})},5886:(e,a,r)=>{r.r(a),r.d(a,{IconBrowser:()=>g,assets:()=>h,contentTitle:()=>p,default:()=>y,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var t=r(7462),o=r(3366),i=r(7294),s=r(3905),n=(r(4866),r(5162),r(368),r(9164),r(3658),r(780),r(8688)),l=r(3430);r(3992);const c=["components"],d={sidebar_position:4},p="Icons",u={unversionedId:"components/icons",id:"components/icons",title:"Icons",description:"",source:"@site/docs/components/icons.mdx",sourceDirName:"components",slug:"/components/icons",permalink:"/docs/docs/components/icons",draft:!1,editUrl:"https://github.com/hybridui/docs/tree/main/docs/components/icons.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Calendar",permalink:"/docs/docs/components/calendar"}},h={},m=[],g=e=>{let{color:a}=e;const[r,t]=(0,i.useState)("");return(0,s.kt)(i.Fragment,null,(0,s.kt)(n.s,{valueChange:e=>{t(e.detail.value)},mdxType:"HyInput"},(0,s.kt)(l.o,{name:"search",slot:"prefix",mdxType:"HyIcon"})),["ad","address-book","address-card","adjust","air-freshener","align-center","align-justify","align-left","align-right","allergies","ambulance","american-sign-language-interpreting","anchor","angle-double-down","angle-double-left","angle-double-right","angle-double-up","angle-down","angle-left","angle-right","angle-up","angry","angrycreative","angular","ankh","app-store","app-store-ios","apper","apple","apple-alt","apple-pay","archive","archway","arrow-alt-circle-down","arrow-alt-circle-left","arrow-alt-circle-right","arrow-alt-circle-up","arrow-circle-down","arrow-circle-left","arrow-circle-right","arrow-circle-up","arrow-down","arrow-left","arrow-right","arrow-up","arrows-alt","arrows-alt-h","arrows-alt-v","artstation","assistive-listening-systems","asterisk","asymmetrik","at","atlas","atlassian","atom","audible","audio-description","autoprefixer","avianex","aviato","award","aws","baby","baby-carriage","backspace","backward","bacon","bacteria","bacterium","bahai","balance-scale","balance-scale-left","balance-scale-right","ban","band-aid","bandcamp","barcode","bars","baseball-ball","basketball-ball","bath","battery-empty","battery-full","battery-half","battery-quarter","battery-three-quarters","battle-net","bed","beer","behance","behance-square","bell","bell-slash","bezier-curve","bible","bicycle","biking","bimobject","binoculars","biohazard","birthday-cake","bitbucket","bitcoin","bity","black-tie","blackberry","blender","blender-phone","blind","blog","blogger","blogger-b","bluetooth","bluetooth-b","bold","bolt","bomb","bone","bong","book","book-dead","book-medical","book-open","book-reader","bookmark","bootstrap","border-all","border-none","border-style","bowling-ball","box","box-open","box-tissue","boxes","braille","brain","bread-slice","briefcase","briefcase-medical","broadcast-tower","broom","brush","btc","buffer","bug","building","bullhorn","bullseye","burn","buromobelexperte","bus","bus-alt","business-time","buy-n-large","buysellads","calculator","calendar","calendar-alt","calendar-check","calendar-day","calendar-minus","calendar-plus","calendar-times","calendar-week","camera","camera-retro","campground","canadian-maple-leaf","candy-cane","cannabis","capsules","car","car-alt","car-battery","car-crash","car-side","caravan","caret-down","caret-left","caret-right","caret-square-down","caret-square-left","caret-square-right","caret-square-up","caret-up","carrot","cart-arrow-down","cart-plus","cash-register","cat","cc-amazon-pay","cc-amex","cc-apple-pay","cc-diners-club","cc-discover","cc-jcb","cc-mastercard","cc-paypal","cc-stripe","cc-visa","centercode","centos","certificate","chair","chalkboard","chalkboard-teacher","charging-station","chart-area","chart-bar","chart-line","chart-pie","check","check-circle","check-double","check-square","cheese","chess","chess-bishop","chess-board","chess-king","chess-knight","chess-pawn","chess-queen","chess-rook","chevron-circle-down","chevron-circle-left","chevron-circle-right","chevron-circle-up","chevron-down","chevron-left","chevron-right","chevron-up","child","chrome","chromecast","church","circle","circle-notch","city","clinic-medical","clipboard","clipboard-check","clipboard-list","clock","clone","closed-captioning","cloud","cloud-download-alt","cloud-meatball","cloud-moon","cloud-moon-rain","cloud-rain","cloud-showers-heavy","cloud-sun","cloud-sun-rain","cloud-upload-alt","cloudflare","cloudscale","cloudsmith","cloudversify","cocktail","code","code-branch","codepen","codiepie","coffee","cog","cogs","coins","columns","comment","comment-alt","comment-dollar","comment-dots","comment-medical","comment-slash","comments","comments-dollar","compact-disc","compass","compress","compress-alt","compress-arrows-alt","concierge-bell","confluence","connectdevelop","contao","cookie","cookie-bite","copy","copyright","cotton-bureau","couch","cpanel","creative-commons","creative-commons-by","creative-commons-nc","creative-commons-nc-eu","creative-commons-nc-jp","creative-commons-nd","creative-commons-pd","creative-commons-pd-alt","creative-commons-remix","creative-commons-sa","creative-commons-sampling","creative-commons-sampling-plus","creative-commons-share","creative-commons-zero","credit-card","critical-role","crop","crop-alt","cross","crosshairs","crow","crown","crutch","css3","css3-alt","cube","cubes","cut","cuttlefish","d-and-d","d-and-d-beyond","dailymotion","dashcube","database","deaf","deezer","delicious","democrat","deploydog","deskpro","desktop","dev","deviantart","dharmachakra","dhl","diagnoses","diaspora","dice","dice-d20","dice-d6","dice-five","dice-four","dice-one","dice-six","dice-three","dice-two","digg","digital-ocean","digital-tachograph","directions","discord","discourse","disease","divide","dizzy","dna","dochub","docker","dog","dollar-sign","dolly","dolly-flatbed","donate","door-closed","door-open","dot-circle","dove","download","draft2digital","drafting-compass","dragon","draw-polygon","dribbble","dribbble-square","dropbox","drum","drum-steelpan","drumstick-bite","drupal","dumbbell","dumpster","dumpster-fire","dungeon","dyalog","earlybirds","ebay","edge","edge-legacy","edit","egg","eject","elementor","ellipsis-h","ellipsis-v","ello","ember","empire","envelope","envelope-open","envelope-open-text","envelope-square","envira","equals","eraser","erlang","ethereum","ethernet","etsy","euro-sign","evernote","exchange-alt","exclamation","exclamation-circle","exclamation-triangle","expand","expand-alt","expand-arrows-alt","expeditedssl","external-link-alt","external-link-square-alt","eye","eye-dropper","eye-slash","facebook","facebook-f","facebook-messenger","facebook-square","fan","fantasy-flight-games","fast-backward","fast-forward","faucet","fax","feather","feather-alt","fedex","fedora","female","fighter-jet","figma","file","file-alt","file-archive","file-audio","file-code","file-contract","file-csv","file-download","file-excel","file-export","file-image","file-import","file-invoice","file-invoice-dollar","file-medical","file-medical-alt","file-pdf","file-powerpoint","file-prescription","file-signature","file-upload","file-video","file-word","fill","fill-drip","film","filter","fingerprint","fire","fire-alt","fire-extinguisher","firefox","firefox-browser","first-aid","first-order","first-order-alt","firstdraft","fish","fist-raised","flag","flag-checkered","flag-usa","flask","flickr","flipboard","flushed","fly","folder","folder-minus","folder-open","folder-plus","font","font-awesome","font-awesome-alt","font-awesome-flag","font-awesome-logo-full","fonticons","fonticons-fi","football-ball","fort-awesome","fort-awesome-alt","forumbee","forward","foursquare","free-code-camp","freebsd","frog","frown","frown-open","fulcrum","funnel-dollar","futbol","galactic-republic","galactic-senate","gamepad","gas-pump","gavel","gem","genderless","get-pocket","gg","gg-circle","ghost","gift","gifts","git","git-alt","git-square","github","github-alt","github-square","gitkraken","gitlab","gitter","glass-cheers","glass-martini","glass-martini-alt","glass-whiskey","glasses","glide","glide-g","globe","globe-africa","globe-americas","globe-asia","globe-europe","gofore","golf-ball","goodreads","goodreads-g","google","google-drive","google-pay","google-play","google-plus","google-plus-g","google-plus-square","google-wallet","gopuram","graduation-cap","gratipay","grav","greater-than","greater-than-equal","grimace","grin","grin-alt","grin-beam","grin-beam-sweat","grin-hearts","grin-squint","grin-squint-tears","grin-stars","grin-tears","grin-tongue","grin-tongue-squint","grin-tongue-wink","grin-wink","grip-horizontal","grip-lines","grip-lines-vertical","grip-vertical","gripfire","grunt","guilded","guitar","gulp","h-square","hacker-news","hacker-news-square","hackerrank","hamburger","hammer","hamsa","hand-holding","hand-holding-heart","hand-holding-medical","hand-holding-usd","hand-holding-water","hand-lizard","hand-middle-finger","hand-paper","hand-peace","hand-point-down","hand-point-left","hand-point-right","hand-point-up","hand-pointer","hand-rock","hand-scissors","hand-sparkles","hand-spock","hands","hands-helping","hands-wash","handshake","handshake-alt-slash","handshake-slash","hanukiah","hard-hat","hashtag","hat-cowboy","hat-cowboy-side","hat-wizard","hdd","head-side-cough","head-side-cough-slash","head-side-mask","head-side-virus","heading","headphones","headphones-alt","headset","heart","heart-broken","heartbeat","helicopter","highlighter","hiking","hippo","hips","hire-a-helper","history","hive","hockey-puck","holly-berry","home","hooli","hornbill","horse","horse-head","hospital","hospital-alt","hospital-symbol","hospital-user","hot-tub","hotdog","hotel","hotjar","hourglass","hourglass-end","hourglass-half","hourglass-start","house-damage","house-user","houzz","hryvnia","html5","hubspot","i-cursor","ice-cream","icicles","icons","id-badge","id-card","id-card-alt","ideal","igloo","image","images","imdb","inbox","indent","industry","infinity","info","info-circle","innosoft","instagram","instagram-square","instalod","intercom","internet-explorer","invision","ioxhost","italic","itch-io","itunes","itunes-note","java","jedi","jedi-order","jenkins","jira","joget","joint","joomla","journal-whills","js","js-square","jsfiddle","kaaba","kaggle","key","keybase","keyboard","keycdn","khanda","kickstarter","kickstarter-k","kiss","kiss-beam","kiss-wink-heart","kiwi-bird","korvue","landmark","language","laptop","laptop-code","laptop-house","laptop-medical","laravel","lastfm","lastfm-square","laugh","laugh-beam","laugh-squint","laugh-wink","layer-group","leaf","leanpub","lemon","less","less-than","less-than-equal","level-down-alt","level-up-alt","life-ring","lightbulb","line","link","linkedin","linkedin-in","linode","linux","lira-sign","list","list-alt","list-ol","list-ul","location-arrow","lock","lock-open","long-arrow-alt-down","long-arrow-alt-left","long-arrow-alt-right","long-arrow-alt-up","low-vision","luggage-cart","lungs","lungs-virus","lyft","magento","magic","magnet","mail-bulk","mailchimp","male","mandalorian","map","map-marked","map-marked-alt","map-marker","map-marker-alt","map-pin","map-signs","markdown","marker","mars","mars-double","mars-stroke","mars-stroke-h","mars-stroke-v","mask","mastodon","maxcdn","mdb","medal","medapps","medium","medium-m","medkit","medrt","meetup","megaport","meh","meh-blank","meh-rolling-eyes","memory","mendeley","menorah","mercury","meteor","microblog","microchip","microphone","microphone-alt","microphone-alt-slash","microphone-slash","microscope","microsoft","minus","minus-circle","minus-square","mitten","mix","mixcloud","mixer","mizuni","mobile","mobile-alt","modx","monero","money-bill","money-bill-alt","money-bill-wave","money-bill-wave-alt","money-check","money-check-alt","monument","moon","mortar-pestle","mosque","motorcycle","mountain","mouse","mouse-pointer","mug-hot","music","napster","neos","network-wired","neuter","newspaper","nimblr","node","node-js","not-equal","notes-medical","npm","ns8","nutritionix","object-group","object-ungroup","octopus-deploy","odnoklassniki","odnoklassniki-square","oil-can","old-republic","om","opencart","openid","opera","optin-monster","orcid","osi","otter","outdent","page4","pagelines","pager","paint-brush","paint-roller","palette","palfed","pallet","paper-plane","paperclip","parachute-box","paragraph","parking","passport","pastafarianism","paste","patreon","pause","pause-circle","paw","paypal","peace","pen","pen-alt","pen-fancy","pen-nib","pen-square","pencil-alt","pencil-ruler","penny-arcade","people-arrows","people-carry","pepper-hot","perbyte","percent","percentage","periscope","person-booth","phabricator","phoenix-framework","phoenix-squadron","phone","phone-alt","phone-slash","phone-square","phone-square-alt","phone-volume","photo-video","php","pied-piper","pied-piper-alt","pied-piper-hat","pied-piper-pp","pied-piper-square","piggy-bank","pills","pinterest","pinterest-p","pinterest-square","pizza-slice","place-of-worship","plane","plane-arrival","plane-departure","plane-slash","play","play-circle","playstation","plug","plus","plus-circle","plus-square","podcast","poll","poll-h","poo","poo-storm","poop","portrait","pound-sign","power-off","pray","praying-hands","prescription","prescription-bottle","prescription-bottle-alt","print","procedures","product-hunt","project-diagram","pump-medical","pump-soap","pushed","puzzle-piece","python","qq","qrcode","question","question-circle","quidditch","quinscape","quora","quote-left","quote-right","quran","r-project","radiation","radiation-alt","rainbow","random","raspberry-pi","ravelry","react","reacteurope","readme","rebel","receipt","record-vinyl","recycle","red-river","reddit","reddit-alien","reddit-square","redhat","redo","redo-alt","registered","remove-format","renren","reply","reply-all","replyd","republican","researchgate","resolving","restroom","retweet","rev","ribbon","ring","road","robot","rocket","rocketchat","rockrms","route","rss","rss-square","ruble-sign","ruler","ruler-combined","ruler-horizontal","ruler-vertical","running","rupee-sign","rust","sad-cry","sad-tear","safari","salesforce","sass","satellite","satellite-dish","save","schlix","school","screwdriver","scribd","scroll","sd-card","search","search-dollar","search-location","search-minus","search-plus","searchengin","seedling","sellcast","sellsy","server","servicestack","shapes","share","share-alt","share-alt-square","share-square","shekel-sign","shield-alt","shield-virus","ship","shipping-fast","shirtsinbulk","shoe-prints","shopify","shopping-bag","shopping-basket","shopping-cart","shopware","shower","shuttle-van","sign","sign-in-alt","sign-language","sign-out-alt","signal","signature","sim-card","simplybuilt","sink","sistrix","sitemap","sith","skating","sketch","skiing","skiing-nordic","skull","skull-crossbones","skyatlas","skype","slack","slack-hash","slash","sleigh","sliders-h","slideshare","smile","smile-beam","smile-wink","smog","smoking","smoking-ban","sms","snapchat","snapchat-ghost","snapchat-square","snowboarding","snowflake","snowman","snowplow","soap","socks","solar-panel","sort","sort-alpha-down","sort-alpha-down-alt","sort-alpha-up","sort-alpha-up-alt","sort-amount-down","sort-amount-down-alt","sort-amount-up","sort-amount-up-alt","sort-down","sort-numeric-down","sort-numeric-down-alt","sort-numeric-up","sort-numeric-up-alt","sort-up","soundcloud","sourcetree","spa","space-shuttle","speakap","speaker-deck","spell-check","spider","spinner","splotch","spotify","spray-can","square","square-full","square-root-alt","squarespace","stack-exchange","stack-overflow","stackpath","stamp","star","star-and-crescent","star-half","star-half-alt","star-of-david","star-of-life","staylinked","steam","steam-square","steam-symbol","step-backward","step-forward","stethoscope","sticker-mule","sticky-note","stop","stop-circle","stopwatch","stopwatch-20","store","store-alt","store-alt-slash","store-slash","strava","stream","street-view","strikethrough","stripe","stripe-s","stroopwafel","studiovinari","stumbleupon","stumbleupon-circle","subscript","subway","suitcase","suitcase-rolling","sun","superpowers","superscript","supple","surprise","suse","swatchbook","swift","swimmer","swimming-pool","symfony","synagogue","sync","sync-alt","syringe","table","table-tennis","tablet","tablet-alt","tablets","tachometer-alt","tag","tags","tape","tasks","taxi","teamspeak","teeth","teeth-open","telegram","telegram-plane","temperature-high","temperature-low","tencent-weibo","tenge","terminal","text-height","text-width","th","th-large","th-list","the-red-yeti","theater-masks","themeco","themeisle","thermometer","thermometer-empty","thermometer-full","thermometer-half","thermometer-quarter","thermometer-three-quarters","think-peaks","thumbs-down","thumbs-up","thumbtack","ticket-alt","tiktok","times","times-circle","tint","tint-slash","tired","toggle-off","toggle-on","toilet","toilet-paper","toilet-paper-slash","toolbox","tools","tooth","torah","torii-gate","tractor","trade-federation","trademark","traffic-light","trailer","train","tram","transgender","transgender-alt","trash","trash-alt","trash-restore","trash-restore-alt","tree","trello","tripadvisor","trophy","truck","truck-loading","truck-monster","truck-moving","truck-pickup","tshirt","tty","tumblr","tumblr-square","tv","twitch","twitter","twitter-square","typo3","uber","ubuntu","uikit","umbraco","umbrella","umbrella-beach","uncharted","underline","undo","undo-alt","uniregistry","unity","universal-access","university","unlink","unlock","unlock-alt","unsplash","untappd","upload","ups","usb","user","user-alt","user-alt-slash","user-astronaut","user-check","user-circle","user-clock","user-cog","user-edit","user-friends","user-graduate","user-injured","user-lock","user-md","user-minus","user-ninja","user-nurse","user-plus","user-secret","user-shield","user-slash","user-tag","user-tie","user-times","users","users-cog","users-slash","usps","ussunnah","utensil-spoon","utensils","vaadin","vector-square","venus","venus-double","venus-mars","vest","vest-patches","viacoin","viadeo","viadeo-square","vial","vials","viber","video","video-slash","vihara","vimeo","vimeo-square","vimeo-v","vine","virus","virus-slash","viruses","vk","vnv","voicemail","volleyball-ball","volume-down","volume-mute","volume-off","volume-up","vote-yea","vr-cardboard","vuejs","walking","wallet","warehouse","watchman-monitoring","water","wave-square","waze","weebly","weibo","weight","weight-hanging","weixin","whatsapp","whatsapp-square","wheelchair","whmcs","wifi","wikipedia-w","wind","window-close","window-maximize","window-minimize","window-restore","windows","wine-bottle","wine-glass","wine-glass-alt","wix","wizards-of-the-coast","wodu","wolf-pack-battalion","won-sign","wordpress","wordpress-simple","wpbeginner","wpexplorer","wpforms","wpressr","wrench","x-ray","xbox","xing","xing-square","y-combinator","yahoo","yammer","yandex","yandex-international","yarn","yelp","yen-sign","yin-yang","yoast","youtube","youtube-square","zhihu"].filter((function(e){return e.includes(r)})).map((function(e){return(0,s.kt)(i.Fragment,null,(0,s.kt)("div",{style:{display:"inline-block",width:"235px",textAlign:"center"}},(0,s.kt)(l.o,{style:{fontSize:"30px"},name:e,mdxType:"HyIcon"}),(0,s.kt)("div",{style:{fontSize:"13px"}},(0,s.kt)("pre",null,`<hy-icon name="${e}"></hy-icon>`))))})))},b={toc:m,IconBrowser:g},f="wrapper";function y(e){let{components:a}=e,r=(0,o.Z)(e,c);return(0,s.kt)(f,(0,t.Z)({},b,r,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"icons"},"Icons"),(0,s.kt)(g,{mdxType:"IconBrowser"}))}y.isMDXComponent=!0},875:(e,a,r)=>{r.d(a,{XM:()=>o,Xe:()=>i,pX:()=>t});const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=e=>(...a)=>({_$litDirective$:e,values:a});class i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,a,r){this._$Ct=e,this._$AM=a,this._$Ci=r}_$AS(e,a){return this.update(e,a)}update(e,a){return this.render(...a)}}}}]);