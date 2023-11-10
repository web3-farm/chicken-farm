(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[836,517],{5553:function(e,t,n){"use strict";n.r(t),n.d(t,{commify:function(){return x},formatEther:function(){return M},formatUnits:function(){return A},parseEther:function(){return k},parseUnits:function(){return _}});var i=n(6441),a=n(1581),r=n(8794),s=n(2593);let u=new a.Logger(r.i),o={},d=s.O$.from(0),p=s.O$.from(-1);function l(e,t,n,i){let r={fault:t,operation:n};return void 0!==i&&(r.value=i),u.throwError(e,a.Logger.errors.NUMERIC_FAULT,r)}let y="0";for(;y.length<256;)y+=y;function m(e){if("number"!=typeof e)try{e=s.O$.from(e).toNumber()}catch(e){}return"number"==typeof e&&e>=0&&e<=256&&!(e%1)?"1"+y.substring(0,e):u.throwArgumentError("invalid decimal size","decimals",e)}function f(e,t){null==t&&(t=0);let n=m(t);e=s.O$.from(e);let i=e.lt(d);i&&(e=e.mul(p));let a=e.mod(n).toString();for(;a.length<n.length-1;)a="0"+a;a=a.match(/^([0-9]*[1-9]|0)(0*)/)[1];let r=e.div(n).toString();return e=1===n.length?r:r+"."+a,i&&(e="-"+e),e}function c(e,t){null==t&&(t=0);let n=m(t);"string"==typeof e&&e.match(/^-?[0-9.]+$/)||u.throwArgumentError("invalid decimal value","value",e);let i="-"===e.substring(0,1);i&&(e=e.substring(1)),"."===e&&u.throwArgumentError("missing value","value",e);let a=e.split(".");a.length>2&&u.throwArgumentError("too many decimal points","value",e);let r=a[0],o=a[1];for(r||(r="0"),o||(o="0");"0"===o[o.length-1];)o=o.substring(0,o.length-1);for(o.length>n.length-1&&l("fractional component exceeds decimals","underflow","parseFixed"),""===o&&(o="0");o.length<n.length-1;)o+="0";let d=s.O$.from(r),y=s.O$.from(o),f=d.mul(n).add(y);return i&&(f=f.mul(p)),f}class T{constructor(e,t,n,i){e!==o&&u.throwError("cannot use FixedFormat constructor; use FixedFormat.from",a.Logger.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=t,this.width=n,this.decimals=i,this.name=(t?"":"u")+"fixed"+String(n)+"x"+String(i),this._multiplier=m(i),Object.freeze(this)}static from(e){if(e instanceof T)return e;"number"==typeof e&&(e=`fixed128x${e}`);let t=!0,n=128,i=18;if("string"==typeof e){if("fixed"===e);else if("ufixed"===e)t=!1;else{let a=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);a||u.throwArgumentError("invalid fixed format","format",e),t="u"!==a[1],n=parseInt(a[2]),i=parseInt(a[3])}}else if(e){let a=(t,n,i)=>null==e[t]?i:(typeof e[t]!==n&&u.throwArgumentError("invalid fixed format ("+t+" not "+n+")","format."+t,e[t]),e[t]);t=a("signed","boolean",t),n=a("width","number",n),i=a("decimals","number",i)}return n%8&&u.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",n),i>80&&u.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",i),new T(o,t,n,i)}}class h{constructor(e,t,n,i){e!==o&&u.throwError("cannot use FixedNumber constructor; use FixedNumber.from",a.Logger.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=i,this._hex=t,this._value=n,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(e){this.format.name!==e.format.name&&u.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",e)}addUnsafe(e){this._checkFormat(e);let t=c(this._value,this.format.decimals),n=c(e._value,e.format.decimals);return h.fromValue(t.add(n),this.format.decimals,this.format)}subUnsafe(e){this._checkFormat(e);let t=c(this._value,this.format.decimals),n=c(e._value,e.format.decimals);return h.fromValue(t.sub(n),this.format.decimals,this.format)}mulUnsafe(e){this._checkFormat(e);let t=c(this._value,this.format.decimals),n=c(e._value,e.format.decimals);return h.fromValue(t.mul(n).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(e){this._checkFormat(e);let t=c(this._value,this.format.decimals),n=c(e._value,e.format.decimals);return h.fromValue(t.mul(this.format._multiplier).div(n),this.format.decimals,this.format)}floor(){let e=this.toString().split(".");1===e.length&&e.push("0");let t=h.from(e[0],this.format),n=!e[1].match(/^(0*)$/);return this.isNegative()&&n&&(t=t.subUnsafe(g.toFormat(t.format))),t}ceiling(){let e=this.toString().split(".");1===e.length&&e.push("0");let t=h.from(e[0],this.format),n=!e[1].match(/^(0*)$/);return!this.isNegative()&&n&&(t=t.addUnsafe(g.toFormat(t.format))),t}round(e){null==e&&(e=0);let t=this.toString().split(".");if(1===t.length&&t.push("0"),(e<0||e>80||e%1)&&u.throwArgumentError("invalid decimal count","decimals",e),t[1].length<=e)return this;let n=h.from("1"+y.substring(0,e),this.format),i=b.toFormat(this.format);return this.mulUnsafe(n).addUnsafe(i).floor().divUnsafe(n)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(e){if(null==e)return this._hex;e%8&&u.throwArgumentError("invalid byte width","width",e);let t=s.O$.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();return(0,i.hexZeroPad)(t,e/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return h.fromString(this._value,e)}static fromValue(e,t,n){return null!=n||null==t||(0,s.Zm)(t)||(n=t,t=null),null==t&&(t=0),null==n&&(n="fixed"),h.fromString(f(e,t),T.from(n))}static fromString(e,t){null==t&&(t="fixed");let n=T.from(t),a=c(e,n.decimals);!n.signed&&a.lt(d)&&l("unsigned value cannot be negative","overflow","value",e);let r=null;n.signed?r=a.toTwos(n.width).toHexString():(r=a.toHexString(),r=(0,i.hexZeroPad)(r,n.width/8));let s=f(a,n.decimals);return new h(o,r,s,n)}static fromBytes(e,t){null==t&&(t="fixed");let n=T.from(t);if((0,i.arrayify)(e).length>n.width/8)throw Error("overflow");let a=s.O$.from(e);n.signed&&(a=a.fromTwos(n.width));let r=a.toTwos((n.signed?0:1)+n.width).toHexString(),u=f(a,n.decimals);return new h(o,r,u,n)}static from(e,t){if("string"==typeof e)return h.fromString(e,t);if((0,i.isBytes)(e))return h.fromBytes(e,t);try{return h.fromValue(e,0,t)}catch(e){if(e.code!==a.Logger.errors.INVALID_ARGUMENT)throw e}return u.throwArgumentError("invalid FixedNumber value","value",e)}static isFixedNumber(e){return!!(e&&e._isFixedNumber)}}let g=h.from(1),b=h.from("0.5"),v=new a.Logger("units/5.7.0"),w=["wei","kwei","mwei","gwei","szabo","finney","ether"];function x(e){let t=String(e).split(".");(t.length>2||!t[0].match(/^-?[0-9]*$/)||t[1]&&!t[1].match(/^[0-9]*$/)||"."===e||"-."===e)&&v.throwArgumentError("invalid value","value",e);let n=t[0],i="";for("-"===n.substring(0,1)&&(i="-",n=n.substring(1));"0"===n.substring(0,1);)n=n.substring(1);""===n&&(n="0");let a="";for(2===t.length&&(a="."+(t[1]||"0"));a.length>2&&"0"===a[a.length-1];)a=a.substring(0,a.length-1);let r=[];for(;n.length;){if(n.length<=3){r.unshift(n);break}{let e=n.length-3;r.unshift(n.substring(e)),n=n.substring(0,e)}}return i+r.join(",")+a}function A(e,t){if("string"==typeof t){let e=w.indexOf(t);-1!==e&&(t=3*e)}return f(e,null!=t?t:18)}function _(e,t){if("string"!=typeof e&&v.throwArgumentError("value must be a string","value",e),"string"==typeof t){let e=w.indexOf(t);-1!==e&&(t=3*e)}return c(e,null!=t?t:18)}function M(e){return A(e,18)}function k(e){return _(e,18)}},6242:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var i=n(7462),a=n(3366),r=n(7294),s=n(3961),u=n(5463),o=n(948),d=n(1657),p=n(629),l=n(5154),y=n(2104);function m(e){return(0,y.Z)("MuiCard",e)}(0,l.Z)("MuiCard",["root"]);var f=n(5893);let c=["className","raised"],T=e=>{let{classes:t}=e;return(0,u.Z)({root:["root"]},m,t)},h=(0,o.ZP)(p.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),g=r.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiCard"}),{className:r,raised:u=!1}=n,o=(0,a.Z)(n,c),p=(0,i.Z)({},n,{raised:u}),l=T(p);return(0,f.jsx)(h,(0,i.Z)({className:(0,s.Z)(l.root,r),elevation:u?8:void 0,ref:t,ownerState:p},o))});var b=g},4267:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var i=n(7462),a=n(3366),r=n(7294),s=n(3961),u=n(5463),o=n(948),d=n(1657),p=n(5154),l=n(2104);function y(e){return(0,l.Z)("MuiCardContent",e)}(0,p.Z)("MuiCardContent",["root"]);var m=n(5893);let f=["className","component"],c=e=>{let{classes:t}=e;return(0,u.Z)({root:["root"]},y,t)},T=(0,o.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),h=r.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:r,component:u="div"}=n,o=(0,a.Z)(n,f),p=(0,i.Z)({},n,{component:u}),l=c(p);return(0,m.jsx)(T,(0,i.Z)({as:u,className:(0,s.Z)(l.root,r),ownerState:p,ref:t},o))});var g=h},7932:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var i=n(3366),a=n(7462),r=n(7294),s=n(3961),u=n(7115),o=n(2104),d=n(5463),p=n(5815),l=n(9852);let y=(0,l.ZP)();var m=n(6567),f=n(5893);let c=["className","component","disableGutters","fixed","maxWidth","classes"],T=(0,m.Z)(),h=y("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`maxWidth${(0,u.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),g=e=>(0,p.Z)({props:e,name:"MuiContainer",defaultTheme:T}),b=(e,t)=>{let n=e=>(0,o.Z)(t,e),{classes:i,fixed:a,disableGutters:r,maxWidth:s}=e,p={root:["root",s&&`maxWidth${(0,u.Z)(String(s))}`,a&&"fixed",r&&"disableGutters"]};return(0,d.Z)(p,n,i)};var v=n(8216),w=n(948),x=n(1657);let A=function(e={}){let{createStyledComponent:t=h,useThemeProps:n=g,componentName:u="MuiContainer"}=e,o=t(({theme:e,ownerState:t})=>(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,n)=>{let i=e.breakpoints.values[n];return 0!==i&&(t[e.breakpoints.up(n)]={maxWidth:`${i}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,a.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})),d=r.forwardRef(function(e,t){let r=n(e),{className:d,component:p="div",disableGutters:l=!1,fixed:y=!1,maxWidth:m="lg"}=r,T=(0,i.Z)(r,c),h=(0,a.Z)({},r,{component:p,disableGutters:l,fixed:y,maxWidth:m}),g=b(h,u);return(0,f.jsx)(o,(0,a.Z)({as:p,ownerState:h,className:(0,s.Z)(g.root,d),ref:t},T))});return d}({createStyledComponent:(0,w.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`maxWidth${(0,v.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,x.Z)({props:e,name:"MuiContainer"})});var _=A},7808:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auction",function(){return n(4148)}])},4148:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var i=n(5893),a=n(4146),r=n(7294),s=n(5553),u=n(1163),o=n(7372),d=n(6242),p=n(4267),l=n(5861),y=n(8617);let{useProvider:m}=o.P,f=(e,t)=>{if(e.length<=t)return e;let n=t-3;return e.substring(0,Math.ceil(n/2))+"..."+e.substring(e.length-Math.floor(n/2))};function c(e){let{nftAddress:t,tokenId:n}=e,o=(0,u.useRouter)(),c=m(),[T,h]=(0,r.useState)(""),[g,b]=(0,r.useState)(""),[v,w]=(0,r.useState)(""),[x,A]=(0,r.useState)(""),[_,M]=(0,r.useState)(0),[k,C]=(0,r.useState)(!0);async function I(){if(C(!0),console.log("Updating UI..."),console.log("provider",c),console.log("nftAddress",t),console.log("tokenId",n),!c)return;let e=new a.CH(y.L,y.M,c),i=await e.getTemporaryHighestBid(t,n);console.log("temporaryHighestBid",i),M(i),C(!1)}(0,r.useEffect)(()=>{c&&I()},[c]);let S=f(g||"",15),N=()=>{o.push("/auction/".concat(t,"/").concat(n))};return(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:k?(0,i.jsx)("div",{children:"Loading...2"}):(0,i.jsx)(d.Z,{style:{cursor:"pointer"},onClick:N,children:(0,i.jsxs)(p.Z,{children:[(0,i.jsxs)(l.Z,{gutterBottom:!0,variant:"h5",component:"div",children:["#",n]}),(0,i.jsxs)(l.Z,{variant:"body2",color:"text.secondary",className:"italic text-sm",children:["Owned by ",S]}),(0,i.jsxs)(l.Z,{variant:"h6",color:"text.primary",className:"font-bold",children:[s.formatUnits(_,"ether")," SMR"]})]})})})})}var T=n(139),h=n(7932),g=n(9008),b=n.n(g),v=n(1378),w=n(1664),x=n.n(w);let{useChainId:A,useAccounts:_,useIsActivating:M,useIsActive:k,useProvider:C,useENSNames:I}=o.P;function S(){let e=C(),[t,n]=(0,r.useState)([]),[s,u]=(0,r.useState)(!0),o=async()=>{if(u(!0),!e)return;console.log("fetchAuctions");let t=new a.CH(y.L,y.M,e),i=await t.getActiveAuctions();return console.log("auctions1",i),u(!1),n(i=(i=i.filter(e=>"0"!==e)).reverse()),""};return(0,r.useEffect)(()=>{e&&(console.log("sdsd"),o())},[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b(),{children:(0,i.jsx)("title",{children:"Auctions"})}),(0,i.jsx)(T.Z,{children:(0,i.jsx)(h.Z,{maxWidth:"md",children:(0,i.jsxs)("div",{className:"container mx-auto",children:[(0,i.jsx)("h1",{className:"py-4 px-4 font-bold text-2xl",children:"These are the auctions currently ongoing"}),(0,i.jsx)(x(),{href:"/auction/create",children:"Create Auction"}),(0,i.jsx)("div",{className:"flex flex-wrap",children:e?s?(0,i.jsx)("div",{children:"Loading..."}):t.map(e=>(console.log("auction123",e),(0,i.jsx)(c,{nftAddress:v.L,tokenId:Number(e)}))):(0,i.jsx)("div",{children:"Hey Mate! Maybe Try connecting your metamask?"})})]})})})]})}},9008:function(e,t,n){e.exports=n(2636)},1378:function(e){"use strict";e.exports=JSON.parse('{"M":[{"inputs":[{"internalType":"address","name":"_eggsToken","type":"address"},{"internalType":"address payable","name":"_marketingTreasury","type":"address"},{"internalType":"address payable","name":"_developmentTreasury","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ChickenCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ChickenDied","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"EggHatched","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"EggMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"EggsOwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"nextCycleTimestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardAmount","type":"uint256"}],"name":"NewCycleStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CREATION_COST","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"aliveChickens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"chickenIndices","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"chickens","outputs":[{"internalType":"uint256","name":"attackPower","type":"uint256"},{"internalType":"uint256","name":"defensePower","type":"uint256"},{"internalType":"uint256","name":"intelligencePoints","type":"uint256"},{"internalType":"uint256","name":"speed","type":"uint256"},{"internalType":"uint256","name":"birthTime","type":"uint256"},{"internalType":"uint256","name":"nextEggMintedTime","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"bool","name":"isDead","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"createChicken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"cycleDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"developmentTreasury","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eggMintLockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eggsToken","outputs":[{"internalType":"contract EGGS","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getChickenDetails","outputs":[{"internalType":"uint256","name":"attackPower","type":"uint256"},{"internalType":"uint256","name":"defensePower","type":"uint256"},{"internalType":"uint256","name":"intelligencePoints","type":"uint256"},{"internalType":"uint256","name":"speed","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"nextEggMintedTime","type":"uint256"},{"internalType":"uint256","name":"birthTime","type":"uint256"},{"internalType":"bool","name":"isDead","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"hatchEgg","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingTreasury","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"mintEgg","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextCycleTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_developmentTreasury","type":"address"}],"name":"setDevelopmentTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_marketingTreasury","type":"address"}],"name":"setMarketingTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startNewCycle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAliveChickens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferEggsOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawRewards","outputs":[],"stateMutability":"nonpayable","type":"function"}],"L":"0x061c974971fb3BE30F43e6c4425E1EEA35eD2113"}')},8617:function(e){"use strict";e.exports=JSON.parse('{"M":[{"inputs":[],"name":"Auction__AuctionDontHaveBids","type":"error"},{"inputs":[],"name":"Auction__AuctionHasEnded","type":"error"},{"inputs":[],"name":"Auction__AuctionHaveBids","type":"error"},{"inputs":[],"name":"Auction__AuctionNotEndedYet","type":"error"},{"inputs":[],"name":"Auction__NotAuctionNftSeller","type":"error"},{"inputs":[],"name":"Auction__NotAuctionWinner","type":"error"},{"inputs":[],"name":"Auction__NotNftOwner","type":"error"},{"inputs":[],"name":"Auction__SendMoreToMakeBid","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftAdress","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftSellerAdress","type":"address"},{"indexed":false,"internalType":"uint256","name":"minprice","type":"uint256"},{"indexed":false,"internalType":"uint32","name":"interval","type":"uint32"}],"name":"AuctionInitialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftAdress","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"bidMakerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"BidMade","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftAdress","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftsellerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"winningBid","type":"uint256"}],"name":"ReceiveWinningBidAfterAuction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftAdress","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftWinnerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"finalPrice","type":"uint256"}],"name":"WinNftAfterAuction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftAdress","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftsellerAddress","type":"address"}],"name":"WithdrawNftAfterAuctionUnsuccesful","type":"event"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_minPrice","type":"uint256"},{"internalType":"uint32","name":"interval","type":"uint32"}],"name":"InitializeAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"activeAuctions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getActiveAuctions","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address","name":"sender","type":"address"}],"name":"getAmountFundedByAnAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBeginningPriceOfTheNft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address","name":"sender","type":"address"}],"name":"getBidOfAnAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getCurrentWinner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getIntervalOfNftAuction","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getSellerOfTheNft","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getSpecificAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getStartingTimeOfAuction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getStateOfAuction","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getTemporaryHighestBid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"makeBid","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"nftContractAuctions","outputs":[{"internalType":"uint32","name":"i_interval","type":"uint32"},{"internalType":"uint256","name":"minPrice","type":"uint256"},{"internalType":"uint256","name":"s_lastTimeStamp","type":"uint256"},{"internalType":"uint256","name":"temporaryHighestBid","type":"uint256"},{"internalType":"address payable","name":"currentWinner","type":"address"},{"internalType":"address","name":"nftSeller","type":"address"},{"internalType":"bool","name":"auctionStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"receiveNft","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"withdrawNft","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"withdrawWinningBid","outputs":[],"stateMutability":"nonpayable","type":"function"}],"L":"0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"}')}},function(e){e.O(0,[881,139,146,380,774,888,179],function(){return e(e.s=7808)}),_N_E=e.O()}]);