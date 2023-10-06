(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{5553:function(e,t,r){"use strict";r.r(t),r.d(t,{commify:function(){return j},formatEther:function(){return C},formatUnits:function(){return k},parseEther:function(){return N},parseUnits:function(){return E}});var i=r(6441),n=r(1581),o=r(8794),l=r(2593);let a=new n.Logger(o.i),s={},u=l.O$.from(0),c=l.O$.from(-1);function d(e,t,r,i){let o={fault:t,operation:r};return void 0!==i&&(o.value=i),a.throwError(e,n.Logger.errors.NUMERIC_FAULT,o)}let m="0";for(;m.length<256;)m+=m;function h(e){if("number"!=typeof e)try{e=l.O$.from(e).toNumber()}catch(e){}return"number"==typeof e&&e>=0&&e<=256&&!(e%1)?"1"+m.substring(0,e):a.throwArgumentError("invalid decimal size","decimals",e)}function f(e,t){null==t&&(t=0);let r=h(t);e=l.O$.from(e);let i=e.lt(u);i&&(e=e.mul(c));let n=e.mod(r).toString();for(;n.length<r.length-1;)n="0"+n;n=n.match(/^([0-9]*[1-9]|0)(0*)/)[1];let o=e.div(r).toString();return e=1===r.length?o:o+"."+n,i&&(e="-"+e),e}function g(e,t){null==t&&(t=0);let r=h(t);"string"==typeof e&&e.match(/^-?[0-9.]+$/)||a.throwArgumentError("invalid decimal value","value",e);let i="-"===e.substring(0,1);i&&(e=e.substring(1)),"."===e&&a.throwArgumentError("missing value","value",e);let n=e.split(".");n.length>2&&a.throwArgumentError("too many decimal points","value",e);let o=n[0],s=n[1];for(o||(o="0"),s||(s="0");"0"===s[s.length-1];)s=s.substring(0,s.length-1);for(s.length>r.length-1&&d("fractional component exceeds decimals","underflow","parseFixed"),""===s&&(s="0");s.length<r.length-1;)s+="0";let u=l.O$.from(o),m=l.O$.from(s),f=u.mul(r).add(m);return i&&(f=f.mul(c)),f}class x{constructor(e,t,r,i){e!==s&&a.throwError("cannot use FixedFormat constructor; use FixedFormat.from",n.Logger.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=t,this.width=r,this.decimals=i,this.name=(t?"":"u")+"fixed"+String(r)+"x"+String(i),this._multiplier=h(i),Object.freeze(this)}static from(e){if(e instanceof x)return e;"number"==typeof e&&(e=`fixed128x${e}`);let t=!0,r=128,i=18;if("string"==typeof e){if("fixed"===e);else if("ufixed"===e)t=!1;else{let n=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);n||a.throwArgumentError("invalid fixed format","format",e),t="u"!==n[1],r=parseInt(n[2]),i=parseInt(n[3])}}else if(e){let n=(t,r,i)=>null==e[t]?i:(typeof e[t]!==r&&a.throwArgumentError("invalid fixed format ("+t+" not "+r+")","format."+t,e[t]),e[t]);t=n("signed","boolean",t),r=n("width","number",r),i=n("decimals","number",i)}return r%8&&a.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",r),i>80&&a.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",i),new x(s,t,r,i)}}class p{constructor(e,t,r,i){e!==s&&a.throwError("cannot use FixedNumber constructor; use FixedNumber.from",n.Logger.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=i,this._hex=t,this._value=r,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(e){this.format.name!==e.format.name&&a.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",e)}addUnsafe(e){this._checkFormat(e);let t=g(this._value,this.format.decimals),r=g(e._value,e.format.decimals);return p.fromValue(t.add(r),this.format.decimals,this.format)}subUnsafe(e){this._checkFormat(e);let t=g(this._value,this.format.decimals),r=g(e._value,e.format.decimals);return p.fromValue(t.sub(r),this.format.decimals,this.format)}mulUnsafe(e){this._checkFormat(e);let t=g(this._value,this.format.decimals),r=g(e._value,e.format.decimals);return p.fromValue(t.mul(r).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(e){this._checkFormat(e);let t=g(this._value,this.format.decimals),r=g(e._value,e.format.decimals);return p.fromValue(t.mul(this.format._multiplier).div(r),this.format.decimals,this.format)}floor(){let e=this.toString().split(".");1===e.length&&e.push("0");let t=p.from(e[0],this.format),r=!e[1].match(/^(0*)$/);return this.isNegative()&&r&&(t=t.subUnsafe(v.toFormat(t.format))),t}ceiling(){let e=this.toString().split(".");1===e.length&&e.push("0");let t=p.from(e[0],this.format),r=!e[1].match(/^(0*)$/);return!this.isNegative()&&r&&(t=t.addUnsafe(v.toFormat(t.format))),t}round(e){null==e&&(e=0);let t=this.toString().split(".");if(1===t.length&&t.push("0"),(e<0||e>80||e%1)&&a.throwArgumentError("invalid decimal count","decimals",e),t[1].length<=e)return this;let r=p.from("1"+m.substring(0,e),this.format),i=b.toFormat(this.format);return this.mulUnsafe(r).addUnsafe(i).floor().divUnsafe(r)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(e){if(null==e)return this._hex;e%8&&a.throwArgumentError("invalid byte width","width",e);let t=l.O$.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();return(0,i.hexZeroPad)(t,e/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return p.fromString(this._value,e)}static fromValue(e,t,r){return null!=r||null==t||(0,l.Zm)(t)||(r=t,t=null),null==t&&(t=0),null==r&&(r="fixed"),p.fromString(f(e,t),x.from(r))}static fromString(e,t){null==t&&(t="fixed");let r=x.from(t),n=g(e,r.decimals);!r.signed&&n.lt(u)&&d("unsigned value cannot be negative","overflow","value",e);let o=null;r.signed?o=n.toTwos(r.width).toHexString():(o=n.toHexString(),o=(0,i.hexZeroPad)(o,r.width/8));let l=f(n,r.decimals);return new p(s,o,l,r)}static fromBytes(e,t){null==t&&(t="fixed");let r=x.from(t);if((0,i.arrayify)(e).length>r.width/8)throw Error("overflow");let n=l.O$.from(e);r.signed&&(n=n.fromTwos(r.width));let o=n.toTwos((r.signed?0:1)+r.width).toHexString(),a=f(n,r.decimals);return new p(s,o,a,r)}static from(e,t){if("string"==typeof e)return p.fromString(e,t);if((0,i.isBytes)(e))return p.fromBytes(e,t);try{return p.fromValue(e,0,t)}catch(e){if(e.code!==n.Logger.errors.INVALID_ARGUMENT)throw e}return a.throwArgumentError("invalid FixedNumber value","value",e)}static isFixedNumber(e){return!!(e&&e._isFixedNumber)}}let v=p.from(1),b=p.from("0.5"),y=new n.Logger("units/5.7.0"),w=["wei","kwei","mwei","gwei","szabo","finney","ether"];function j(e){let t=String(e).split(".");(t.length>2||!t[0].match(/^-?[0-9]*$/)||t[1]&&!t[1].match(/^[0-9]*$/)||"."===e||"-."===e)&&y.throwArgumentError("invalid value","value",e);let r=t[0],i="";for("-"===r.substring(0,1)&&(i="-",r=r.substring(1));"0"===r.substring(0,1);)r=r.substring(1);""===r&&(r="0");let n="";for(2===t.length&&(n="."+(t[1]||"0"));n.length>2&&"0"===n[n.length-1];)n=n.substring(0,n.length-1);let o=[];for(;r.length;){if(r.length<=3){o.unshift(r);break}{let e=r.length-3;o.unshift(r.substring(e)),r=r.substring(0,e)}}return i+o.join(",")+n}function k(e,t){if("string"==typeof t){let e=w.indexOf(t);-1!==e&&(t=3*e)}return f(e,null!=t?t:18)}function E(e,t){if("string"!=typeof e&&y.throwArgumentError("value must be a string","value",e),"string"==typeof t){let e=w.indexOf(t);-1!==e&&(t=3*e)}return g(e,null!=t?t:18)}function C(e){return k(e,18)}function N(e){return E(e,18)}},7932:function(e,t,r){"use strict";r.d(t,{Z:function(){return E}});var i=r(3366),n=r(7462),o=r(7294),l=r(3961),a=r(7115),s=r(2104),u=r(5463),c=r(5815),d=r(9852);let m=(0,d.ZP)();var h=r(6567),f=r(5893);let g=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,h.Z)(),p=m("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,a.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),v=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:x}),b=(e,t)=>{let r=e=>(0,s.Z)(t,e),{classes:i,fixed:n,disableGutters:o,maxWidth:l}=e,c={root:["root",l&&`maxWidth${(0,a.Z)(String(l))}`,n&&"fixed",o&&"disableGutters"]};return(0,u.Z)(c,r,i)};var y=r(8216),w=r(948),j=r(1657);let k=function(e={}){let{createStyledComponent:t=p,useThemeProps:r=v,componentName:a="MuiContainer"}=e,s=t(({theme:e,ownerState:t})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,r)=>{let i=e.breakpoints.values[r];return 0!==i&&(t[e.breakpoints.up(r)]={maxWidth:`${i}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,n.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})),u=o.forwardRef(function(e,t){let o=r(e),{className:u,component:c="div",disableGutters:d=!1,fixed:m=!1,maxWidth:h="lg"}=o,x=(0,i.Z)(o,g),p=(0,n.Z)({},o,{component:c,disableGutters:d,fixed:m,maxWidth:h}),v=b(p,a);return(0,f.jsx)(s,(0,n.Z)({as:c,ownerState:p,className:(0,l.Z)(v.root,u),ref:t},x))});return u}({createStyledComponent:(0,w.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,y.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,j.Z)({props:e,name:"MuiContainer"})});var E=k},6896:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return r(6692)}])},3293:function(e,t,r){"use strict";r.d(t,{RP:function(){return a},ns:function(){return m},zG:function(){return d}});var i=r(3454);let n={name:"Ether",symbol:"ETH",decimals:18},o={name:"Matic",symbol:"MATIC",decimals:18},l={name:"Celo",symbol:"CELO",decimals:18};function a(e){let t=d[e];return t.nativeCurrency?{chainId:e,chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:t.urls,blockExplorerUrls:t.blockExplorerUrls}:e}let s=e=>i.env.infuraKey?"https://".concat(e,".infura.io/v3/").concat(i.env.infuraKey):void 0,u={0:{urls:["https://localhost:8545"].filter(Boolean),name:"Local"},1:{urls:[s("mainnet"),i.env.alchemyKey?"https://".concat("eth-mainnet",".alchemyapi.io/v2/").concat(i.env.alchemyKey):void 0,"https://cloudflare-eth.com"].filter(Boolean),name:"Mainnet"},10:{urls:[s("optimism-mainnet"),"https://mainnet.optimism.io"].filter(Boolean),name:"Optimism",nativeCurrency:n,blockExplorerUrls:["https://optimistic.etherscan.io"]},42161:{urls:[s("arbitrum-mainnet"),"https://arb1.arbitrum.io/rpc"].filter(Boolean),name:"Arbitrum One",nativeCurrency:n,blockExplorerUrls:["https://arbiscan.io"]},137:{urls:[s("polygon-mainnet"),"https://polygon-rpc.com"].filter(Boolean),name:"Polygon Mainnet",nativeCurrency:o,blockExplorerUrls:["https://polygonscan.com"]},42220:{urls:["https://forno.celo.org"],name:"Celo",nativeCurrency:l,blockExplorerUrls:["https://explorer.celo.org"]}},c={5:{urls:[s("goerli")].filter(Boolean),name:"G\xf6rli"},420:{urls:[s("optimism-goerli"),"https://goerli.optimism.io"].filter(Boolean),name:"Optimism Goerli",nativeCurrency:n,blockExplorerUrls:["https://goerli-explorer.optimism.io"]},421613:{urls:[s("arbitrum-goerli"),"https://goerli-rollup.arbitrum.io/rpc"].filter(Boolean),name:"Arbitrum Goerli",nativeCurrency:n,blockExplorerUrls:["https://testnet.arbiscan.io"]},80001:{urls:[s("polygon-mumbai")].filter(e=>e),name:"Polygon Mumbai",nativeCurrency:o,blockExplorerUrls:["https://mumbai.polygonscan.com"]},44787:{urls:["https://alfajores-forno.celo-testnet.org"],name:"Celo Alfajores",nativeCurrency:l,blockExplorerUrls:["https://alfajores-blockscout.celo-testnet.org"]}},d={...u,...c},m=Object.keys(d).reduce((e,t)=>{let r=d[Number(t)].urls;return r.length&&(e[Number(t)]=r),e},{})},7372:function(e,t,r){"use strict";r.d(t,{O:function(){return o},P:function(){return l}});var i=r(7985),n=r(4299);let[o,l]=(0,i.initializeConnector)(e=>new n.MetaMask({actions:e}))},9632:function(e,t,r){"use strict";r.d(t,{L:function(){return l},P:function(){return a}});var i=r(7985),n=r(8043),o=r(3293);let[l,a]=(0,i.initializeConnector)(e=>new n.Network({actions:e,urlMap:o.ns}))},2557:function(e,t,r){"use strict";r.d(t,{o:function(){return o}});var i=r(4299),n=r(8043);function o(e){return e instanceof i.MetaMask?"MetaMask":e instanceof n.Network?"Network":"Unknown"}},4001:function(e,t,r){"use strict";r.d(t,{Z:function(){return J}});var i=r(5893),n=r(4735),o=r.n(n),l=r(7294),a=r(6822),s=r(6720),u=r(2293),c=r(155),d=r(7969),m=r(9750),h=r(9417);let f=e=>{let{children:t,onClick:r}=e;return(0,i.jsx)(h.Z,{size:"small",variant:"contained",color:"primary",onClick:r,sx:{"&.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary":{borderRadius:"50px",maxWidth:"auto",minWidth:"auto",width:40,height:40,display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"black !important",borderWidth:1,borderStyle:"solid",borderColor:"rgba(0,0,0,0.5)","&:hover":{bgcolor:"primary.main",cursor:"pointer"}}},children:(0,i.jsx)(a.Z,{sx:{height:20,width:20,"& svg":{color:"common.white",height:"inherit",width:"inherit"}},children:t})})};var g=r(5861),x=r(1664),p=r.n(x),v=r(1163);let b=e=>{let{label:t,href:r}=e,{pathname:n}=(0,v.useRouter)();return(0,i.jsx)(p(),{href:r,children:(0,i.jsx)(a.Z,{...e,sx:y.root,className:n===r?"active":"",children:(0,i.jsx)(g.Z,{sx:{fontSize:16,fontWeight:"600"},children:t})})})},y={root:{minWidth:"100px",height:"42px",px:5,display:"flex",fontSize:"14px",justifyContent:"center",alignItems:"center",bgcolor:"transparent",color:"rgba(255,255,255,1)",borderRadius:"8px","&.active":{bgcolor:"rgba(255,255,255,1)",color:"black"},"&:hover":{cursor:"pointer",bgcolor:"primary.main",color:"background.paper"}}},w=[{label:"Home",href:"/"},{label:"Farm",href:"/farm"},{label:"Treasury",href:"/treasury"},{label:"Info",href:"/info"}],j=[...w,{label:"Profile",href:"/profile"}],k=()=>{let[e,t]=l.useState(null),r=!!e,n=e=>{t(e.currentTarget)},o=()=>{t(null)};return(0,i.jsxs)(a.Z,{sx:{display:{xs:"block",md:"none"}},children:[(0,i.jsx)(a.Z,{children:(0,i.jsx)(f,{"aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:n,children:(0,i.jsx)(m.Z,{})})}),(0,i.jsx)(d.Z,{id:"mobile-menu",anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,open:r,onClose:o,sx:{"& .MuiPaper-root":{p:2,py:2,bgcolor:"rgb(0,0,0,0.5)",backdropFilter:"blur(8px)",borderStyle:"solid",borderColor:"rgba(0,0,0,0.5)",borderWidth:2,boxSizing:"border-box",borderRadius:"8px"},"& .MuiList-root":{p:0}},children:j.map(e=>(0,l.createElement)(b,{...e,key:e.label},e.label))})]})};var E=r(1324);let C=()=>(0,i.jsx)(a.Z,{sx:N.root,children:(0,i.jsx)(a.Z,{sx:N.box,children:w.map(e=>(0,l.createElement)(b,{...e,key:e.label}))})}),N={root:{position:"fixed",top:7,left:"50%",transform:"translateX(-50%)",display:{xs:"none",md:"block"},bgcolor:"rgba(0,0,0,0.25)",borderWidth:1,borderStyle:"solid",borderColor:"rgba(0,0,0,0.5)",p:"4px",borderRadius:"12px",height:51,transition:E.pB[120],"&:hover":{bgcolor:"rgba(0,0,0,0.5)"}},box:{display:"flex",borderRadius:"6px",overflow:"hidden",height:42}};var S=r(7372);let{useChainId:F,useAccounts:A,useIsActivating:_,useIsActive:Z,useProvider:O,useENSNames:P}=S.P,I=()=>{Z();let e=_(),[t,r]=(0,l.useState)(void 0);(0,l.useEffect)(()=>{S.O.connectEagerly().catch(()=>{console.debug("Failed to connect eagerly to metamask")})},[]);let n=(0,l.useCallback)(async e=>{try{await S.O.activate(),r(void 0)}catch(e){r(e)}},[S.O,r]);return(0,i.jsx)("button",{onClick:()=>n(0),disabled:e,children:t?"Try again?":"Connect"})},{useChainId:U,useAccounts:R,useIsActivating:M,useIsActive:T,useProvider:W,useENSNames:B}=S.P,$=()=>{let[e,t]=l.useState([]),r=R();console.log("accounts",r);let n=r?r[0]:"",o=n?n.slice(0,5)+"..."+n.slice(n.length-3):null;return(0,i.jsx)(a.Z,{sx:{display:{xs:"none",md:"block"}},children:n?(0,i.jsx)(p(),{href:"/profile",children:(0,i.jsx)(a.Z,{sx:{cursor:"pointer",color:"white"},children:o})}):(0,i.jsx)(I,{})})},z=e=>{let{identity:t=!0}=e;return(0,i.jsx)(u.Z,{sx:D.root,children:(0,i.jsxs)(c.Z,{sx:D.toolbar,children:[(0,i.jsx)("span",{}),(0,i.jsx)(C,{}),t&&(0,i.jsx)($,{}),(0,i.jsx)(k,{})]})})},D={root:{position:"fixed",zIndex:11,top:{xs:16,md:24},left:{xs:16,md:24},width:{xs:"calc(100% - 32px)",md:"calc(100% - 48px)"},display:"flex",alignItems:"center",flexShrink:1,boxSizing:"border-box",background:"rgba(0,0,0,0.5)",backdropFilter:"blur(8px)",boxShadow:"none",borderStyle:"solid",borderColor:"rgba(0,0,0,0.5)",borderRadius:"8px"},toolbar:{width:"100%",display:"flex",justifyContent:"space-between"}};var L=r(7985),G=r(9632),H=r(2557);let V=[[S.O,S.P],[G.L,G.P]];function K(){let{connector:e}=(0,L.useWeb3React)();return console.log("Priority Connector is: ".concat((0,H.o)(e))),null}function X(){return(0,i.jsx)(L.Web3ReactProvider,{connectors:V,children:(0,i.jsx)(K,{})})}let Y=e=>{let{children:t,hero:r}=e;return(0,v.useRouter)(),(0,i.jsxs)("main",{className:o().className,children:[(0,i.jsx)(X,{}),(0,i.jsxs)(a.Z,{sx:q,className:r?"hero":"",children:[(0,i.jsx)(s.ZP,{}),(0,i.jsx)(z,{}),r,t]})]})},q={pb:"120px",pt:"140px","&.hero":{pt:0}};var J=Y},6692:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return D}});var i=r(5893),n=r(7294),o=r(9008),l=r.n(o),a=r(7932),s=r(5861),u=r(4001),c=r(7372),d=r(2557),m=r(5553);function h(e){var t;let{accounts:r,provider:o,ENSNames:l}=e,a=function(e,t){let[r,i]=(0,n.useState)();return(0,n.useEffect)(()=>{if(e&&(null==t?void 0:t.length)){let r=!1;return Promise.all(t.map(t=>e.getBalance(t))).then(e=>{r||i(e)}),()=>{r=!0,i(void 0)}}},[e,t]),r}(o,r);return void 0===r?null:(0,i.jsxs)("div",{children:["Accounts:"," ",(0,i.jsx)("b",{children:0===r.length?"None":null==r?void 0:r.map((e,r)=>(0,i.jsxs)("ul",{style:{margin:0,overflow:"hidden",textOverflow:"ellipsis"},children:[null!==(t=null==l?void 0:l[r])&&void 0!==t?t:e,(null==a?void 0:a[r])?" (Ξ".concat((0,m.formatEther)(a[r]),")"):null]},e))})]})}var f=r(3293);function g(e){var t;let{chainId:r}=e;if(void 0===r)return null;let n=r?null===(t=f.zG[r])||void 0===t?void 0:t.name:void 0;return n?(0,i.jsxs)("div",{children:["Chain:"," ",(0,i.jsxs)("b",{children:[n," (",r,")"]})]}):(0,i.jsxs)("div",{children:["Chain Id: ",(0,i.jsx)("b",{children:r})]})}var x=r(8043);function p(e){var t;let{activeChainId:r,switchChain:n,chainIds:o}=e;return(0,i.jsxs)("select",{value:r,onChange:e=>{n(Number(e.target.value))},disabled:void 0===n,children:[(0,i.jsx)("option",{hidden:!0,disabled:!0,children:"Select chain"}),(0,i.jsx)("option",{value:-1,children:"Default"}),o.map(e=>{var r;return(0,i.jsx)("option",{value:e,children:null!==(t=null===(r=f.zG[e])||void 0===r?void 0:r.name)&&void 0!==t?t:e},e)})]})}function v(e){let{connector:t,activeChainId:r,chainIds:o=Object.keys(f.zG).map(Number)||[],isActivating:l,isActive:a,error:s,setError:u}=e,[c,d]=(0,n.useState)(0);(0,n.useEffect)(()=>{r&&(!c||-1===c)&&d(r)},[c,r]);let m=(0,n.useCallback)(async e=>{d(e);try{if(e===r||-1===e&&void 0!==r){u(void 0);return}-1===e?await t.activate():t instanceof x.Network?await t.activate(e):await t.activate((0,f.RP)(e)),u(void 0)}catch(e){u(e)}},[t,r,u]);return(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(p,{activeChainId:c,switchChain:m,chainIds:o}),(0,i.jsx)("div",{style:{marginBottom:"1rem"}}),a?s?(0,i.jsx)("button",{onClick:()=>m(c),children:"Try again?"}):(0,i.jsx)("button",{onClick:()=>{(null==t?void 0:t.deactivate)?t.deactivate():t.resetState(),d(0)},children:"Disconnect"}):(0,i.jsx)("button",{onClick:()=>m(c),disabled:l||!c,children:s?"Try again?":"Connect"})]})}function b(e){var t;let{isActivating:r,isActive:n,error:o}=e;return(0,i.jsx)("div",{children:o?(0,i.jsxs)(i.Fragment,{children:["\uD83D\uDD34 ",null!==(t=o.name)&&void 0!==t?t:"Error",o.message?": ".concat(o.message):null]}):r?(0,i.jsx)(i.Fragment,{children:"\uD83D\uDFE1 Connecting"}):n?(0,i.jsx)(i.Fragment,{children:"\uD83D\uDFE2 Connected"}):(0,i.jsx)(i.Fragment,{children:"⚪️ Disconnected"})})}function y(e){let{connector:t,activeChainId:r,chainIds:n,isActivating:o,isActive:l,error:a,setError:s,ENSNames:u,accounts:c,provider:m}=e;return(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"20rem",padding:"1rem",margin:"1rem",overflow:"auto",border:"1px solid",borderRadius:"1rem"},children:[(0,i.jsx)("b",{children:(0,d.o)(t)}),(0,i.jsx)("div",{style:{marginBottom:"1rem"},children:(0,i.jsx)(b,{isActivating:o,isActive:l,error:a})}),(0,i.jsx)(g,{chainId:r}),(0,i.jsx)("div",{style:{marginBottom:"1rem"},children:(0,i.jsx)(h,{accounts:c,provider:m,ENSNames:u})}),(0,i.jsx)(v,{connector:t,activeChainId:r,chainIds:n,isActivating:o,isActive:l,error:a,setError:s})]})}let{useChainId:w,useAccounts:j,useIsActivating:k,useIsActive:E,useProvider:C,useENSNames:N}=c.P;function S(){let e=w(),t=j(),r=k(),o=E(),l=C(),a=N(l),[s,u]=(0,n.useState)(void 0);return(0,n.useEffect)(()=>{c.O.connectEagerly().catch(()=>{console.debug("Failed to connect eagerly to metamask")})},[]),(0,i.jsx)(y,{connector:c.O,activeChainId:e,isActivating:r,isActive:o,error:s,setError:u,accounts:t,provider:l,ENSNames:a})}var F=r(9632);let{useChainId:A,useAccounts:_,useIsActivating:Z,useIsActive:O,useProvider:P,useENSNames:I}=F.P,U=Object.keys(f.ns).map(Number);function R(){let e=A(),t=_(),r=Z(),o=O(),l=P(),a=I(l),[s,u]=(0,n.useState)(void 0);return(0,n.useEffect)(()=>{F.L.activate().catch(()=>{console.debug("Failed to connect to network")})},[]),(0,i.jsx)(y,{connector:F.L,activeChainId:e,chainIds:U,isActivating:r,isActive:o,error:s,setError:u,accounts:t,provider:l,ENSNames:a})}let{useChainId:M,useAccounts:T,useIsActivating:W,useIsActive:B,useProvider:$,useENSNames:z}=c.P;function D(){let e=T();console.log("accounts",e);let t=B();return console.log("isActive",t),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l(),{children:[(0,i.jsx)("title",{children:"Profile"}),(0,i.jsx)("meta",{name:"description",content:"Your IOTABOTS and other NFTs"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(u.Z,{children:(0,i.jsxs)(a.Z,{maxWidth:"md",children:[(0,i.jsx)(s.Z,{variant:"h1",gutterBottom:!0,children:"Profile"}),(0,i.jsx)(s.Z,{variant:"h3",gutterBottom:!0,children:"Network Settings"}),(0,i.jsxs)("div",{style:{display:"flex",flexFlow:"wrap",fontFamily:"sans-serif"},children:[(0,i.jsx)(S,{}),(0,i.jsx)(R,{})]})]})})]})}},9008:function(e,t,r){e.exports=r(2636)},6601:function(){}},function(e){e.O(0,[881,364,774,888,179],function(){return e(e.s=6896)}),_N_E=e.O()}]);