(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9203],{134:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return n(2475)}])},9267:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var a=n(5893),i=n(4735),r=n.n(i),s=n(7294),o=n(7357),p=n(6720),l=n(2293),u=n(155),d=n(5294),y=n(9750),c=n(9417);let m=e=>{let{children:t,onClick:n}=e;return(0,a.jsx)(c.Z,{size:"small",variant:"contained",color:"primary",onClick:n,sx:{"&.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary":{borderRadius:"50px",maxWidth:"auto",minWidth:"auto",width:40,height:40,display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"black !important",borderWidth:1,borderStyle:"solid",borderColor:"rgba(0,0,0,0.5)","&:hover":{bgcolor:"primary.main",cursor:"pointer"}}},children:(0,a.jsx)(o.Z,{sx:{height:20,width:20,"& svg":{color:"common.white",height:"inherit",width:"inherit"}},children:t})})};var b=n(5861),f=n(1664),h=n.n(f),x=n(1163);let g=e=>{let{label:t,href:n}=e,{pathname:i}=(0,x.useRouter)();return(0,a.jsx)(h(),{href:n,children:(0,a.jsx)(o.Z,{...e,sx:T.root,className:i===n?"active":"",children:(0,a.jsx)(b.Z,{sx:{fontSize:16,fontWeight:"600"},children:t})})})},T={root:{minWidth:"100px",height:"42px",px:5,display:"flex",fontSize:"14px",justifyContent:"center",alignItems:"center",bgcolor:"transparent",color:"rgba(255,255,255,1)",borderRadius:"8px","&.active":{bgcolor:"rgba(255,255,255,1)",color:"black"},"&:hover":{cursor:"pointer",bgcolor:"primary.main",color:"common.white"}}},v=[{label:"Home",href:"/"},{label:"Game",href:"/game"},{label:"Info",href:"/info"}],w=[...v,{label:"Profile",href:"/profile"}],j=()=>{let[e,t]=s.useState(null),n=!!e,i=e=>{t(e.currentTarget)},r=()=>{t(null)};return(0,a.jsxs)(o.Z,{sx:{display:{xs:"block",md:"none"}},children:[(0,a.jsx)(o.Z,{children:(0,a.jsx)(m,{"aria-controls":n?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:i,children:(0,a.jsx)(y.Z,{})})}),(0,a.jsx)(d.Z,{id:"mobile-menu",anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,open:n,onClose:r,sx:{"& .MuiPaper-root":{p:2,py:2,bgcolor:"rgb(0,0,0,0.5)",backdropFilter:"blur(8px)",borderStyle:"solid",borderColor:"rgba(0,0,0,0.5)",borderWidth:2,boxSizing:"border-box",borderRadius:"8px"},"& .MuiList-root":{p:0}},children:w.map(e=>(0,s.createElement)(g,{...e,key:e.label},e.label))})]})};var k=n(1324);let M=()=>(0,a.jsx)(o.Z,{sx:Z.root,children:(0,a.jsx)(o.Z,{sx:Z.box,children:v.map(e=>(0,s.createElement)(g,{...e,key:e.label}))})}),Z={root:{position:"fixed",top:7,left:"50%",transform:"translateX(-50%)",display:{xs:"none",md:"block"},bgcolor:"rgba(0,0,0,0.25)",borderWidth:1,borderStyle:"solid",borderColor:"rgba(0,0,0,0.5)",p:"4px",borderRadius:"12px",height:51,transition:k.pB[120],"&:hover":{bgcolor:"rgba(0,0,0,0.5)"}},box:{display:"flex",borderRadius:"6px",overflow:"hidden",height:42}};var I=n(4687),C=n(5984);let S=()=>{let{account:e,library:t}=(0,I.Ge)(),[n,i]=s.useState([]);s.useEffect(()=>{},[e,t]);let r=e?e.slice(0,5)+"..."+e.slice(e.length-3):null;return(0,a.jsx)(o.Z,{sx:{display:{xs:"none",md:"block"}},children:e?(0,a.jsx)(h(),{href:"/profile",children:(0,a.jsx)(o.Z,{sx:{cursor:"pointer"},children:r})}):(0,a.jsx)(C.N,{})})},E=e=>{let{identity:t=!0}=e;return(0,a.jsx)(l.Z,{sx:D.root,children:(0,a.jsxs)(u.Z,{sx:D.toolbar,children:[(0,a.jsx)("span",{}),(0,a.jsx)(M,{}),t&&(0,a.jsx)(S,{}),(0,a.jsx)(j,{})]})})},D={root:{position:"fixed",zIndex:11,top:{xs:16,md:24},left:{xs:16,md:24},width:{xs:"calc(100% - 32px)",md:"calc(100% - 48px)"},display:"flex",alignItems:"center",flexShrink:1,boxSizing:"border-box",background:"rgba(0,0,0,0.5)",backdropFilter:"blur(8px)",boxShadow:"none",borderStyle:"solid",borderColor:"rgba(0,0,0,0.5)",borderRadius:"8px"},toolbar:{width:"100%",display:"flex",justifyContent:"space-between"}};var A=n(7837);let N=()=>{let{data:e}=function(){let{library:e}=(0,I.Ge)(),t=()=>{if(e)return e.getBlockNumber()},n=(0,A.a)({queryKey:["BlockNumber"],queryFn:t});return n}();return(0,a.jsxs)(b.Z,{color:"text.secondary",children:["Block #",e]})},F=()=>{let{library:e}=(0,I.Ge)(),[t,n]=(0,s.useState)(-1);return(0,s.useEffect)(()=>{let t=async()=>{let t=await (null==e?void 0:e.getNetwork());console.log("res",t),(null==t?void 0:t.chainId)&&n(t.chainId)};e&&t()},[e]),(0,a.jsxs)(b.Z,{children:["ShimmerEVM Testnet (",t,")"]})};var O=n(7677);let L=()=>{let{library:e}=(0,I.Ge)();return(0,a.jsxs)(o.Z,{sx:{bgcolor:"background.paper",position:"fixed",bottom:20,right:20,borderRadius:2,boxShadow:1,p:2,display:"flex",alignItems:"center"},children:[(0,a.jsxs)(o.Z,{mr:4,children:[e&&(0,a.jsx)(F,{}),e&&(0,a.jsx)(N,{})]}),(0,a.jsx)(h(),{target:"_blank",href:"https://explorer.evm.testnet.shimmer.network/",children:(0,a.jsx)(m,{children:(0,a.jsx)(O.Z,{})})})]})},B=e=>{let{children:t,hero:n}=e;return(0,x.useRouter)(),(0,a.jsx)("main",{className:r().className,children:(0,a.jsxs)(o.Z,{sx:R,className:n?"hero":"",children:[(0,a.jsx)(p.ZP,{}),(0,a.jsx)(E,{}),n,t,(0,a.jsx)(L,{})]})})},R={pb:"120px",pt:"140px","&.hero":{pt:0}};var _=B},2475:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var a=n(5893),i=n(7294),r=n(9008),s=n.n(r),o=n(3156),p=n(5861),l=n(1383),u=n(7357),d=n(9267),y=n(1438),c=n(6076),m=n(5553),b=n(4687),f=n(8456),h=n(9417),x=n(5568),g=JSON.parse('{"M":[{"inputs":[{"internalType":"address","name":"_eggsToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"birthTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"createChicken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"eggsToken","outputs":[{"internalType":"contract EGGS","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"isDead","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lastEggMintedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"mintEgg","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}],"L":"0x6e41a08DcA67c5E321d1D5A15De2cfE2Fe2C3A04"}'),T=JSON.parse('{"M":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],"L":"0xDa180214fef6d7172Dd4a3C91F5bde315D0dE5Db"}');let v=()=>{let[e,t]=(0,i.useState)(null),[n,r]=(0,i.useState)(""),[s,o]=(0,i.useState)(!1),{account:l,library:d}=(0,b.Ge)();(0,i.useEffect)(()=>{if(d&&l){let e=new y.Qg(d.provider),n=e.getSigner(),a=new c.CH(g.L,g.M,n);t(a)}},[d,l]);let v=async()=>{o(!0);try{let t=new y.Qg(d.provider),n=t.getSigner(),a=new c.CH(T.L,T.M,n),i=await a.approve(g.L,m.fi("1"));await i.wait();let s=await e.createChicken({gasLimit:5e6,value:m.fi("10")});r("\uD83C\uDF89 Successfully minted NFT!"),await s.wait()}catch(e){r("❌ Error minting NFT: ".concat(e.message))}finally{o(!1)}};return(0,a.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",p:3,borderRadius:2,boxShadow:1},children:[(0,a.jsx)(p.Z,{variant:"h4",gutterBottom:!0,children:"Ready to hatch your chicken?"}),(0,a.jsx)(u.Z,{mt:2,children:s?(0,a.jsx)(f.Z,{color:"primary"}):(0,a.jsx)(h.Z,{variant:"contained",color:"primary",size:"large",onClick:v,children:"Mint ChickenNFT"})}),n&&(0,a.jsx)(u.Z,{mt:2,children:n.startsWith("\uD83C\uDF89")?(0,a.jsx)(x.Z,{severity:"success",children:n}):(0,a.jsx)(x.Z,{severity:"error",children:n})})]})};var w=n(5800),j=n(381),k=n.n(j);n(3704);let M=e=>{let{chicken:t,onMintEgg:n,isLoading:i}=e;return(0,a.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",m:2,p:2,boxShadow:3},children:[(0,a.jsx)(p.Z,{style:{fontSize:50},children:"\uD83D\uDC14"}),(0,a.jsxs)(p.Z,{children:["Chicken #",t.tokenId]}),t.isAlive?(0,a.jsx)(p.Z,{children:"\uD83D\uDC14 Alive"}):(0,a.jsx)(p.Z,{children:"\uD83D\uDC80 Dead"}),(0,a.jsx)(h.Z,{variant:"contained",startIcon:i?(0,a.jsx)(f.Z,{size:24}):(0,a.jsx)(p.Z,{children:"\uD83E\uDD5A"}),onClick:n,disabled:!t.isAlive||i,children:t.isAlive?i?"Minting...":"Mint Egg":"Chicken is Dead"}),k()(t.nextMintTime).diff(k()().unix())>0?(0,a.jsxs)(p.Z,{children:["Next mint in:"," ",k().duration(1e3*k()(t.nextMintTime).diff(k()().unix())).format("h [hrs], m [min], s [secs]")]}):(0,a.jsx)(p.Z,{children:t.isAlive?"You can mint an egg now!":""})]})},Z=()=>{let{active:e,account:t,library:n}=(0,b.Ge)(),[r,s]=(0,i.useState)(""),[o,l]=(0,i.useState)([]),[d,m]=(0,i.useState)([]);(0,i.useEffect)(()=>{if(!t)return;let e=setInterval(()=>{d.length>0&&d.forEach(e=>{w.Z.loadNfts(n,g.L,t).then(e=>{f(e)})})},5e3);return()=>clearInterval(e)},[d,n,t]),(0,i.useEffect)(()=>{let a=async()=>{if(e&&t){let e=await w.Z.loadNfts(n,g.L,t),a=await f(e);l(a)}};a()},[e,t]);let f=async e=>{let t=new y.Qg(n.provider),a=new c.CH(g.L,g.M,t),i=await Promise.all(e.map(async e=>{let t=await a.isDead(e.tokenId),n=await a.lastEggMintedTime(e.tokenId);return{...e,isAlive:!t,lastEggMintedTime:Number(n),nextMintTime:e.lastEggMintedTime+60}}));return i},h=async e=>{try{let t=new y.Qg(n.provider),a=new c.CH(g.L,g.M,t.getSigner());await a.mintEgg(e,{gasLimit:5e6}),s("\uD83C\uDF89 Successfully minted 1 EGG!"),d.includes(e)||m(t=>[...t,e])}catch(e){s("⚠️ ".concat(e.message))}};return(0,a.jsxs)(u.Z,{sx:{display:"flex",flexWrap:"wrap",gap:2,mt:2,mb:4,alignItems:"center",justifyContent:t&&o&&o.length>0?"flex-start":"center"},children:[r&&(0,a.jsx)(p.Z,{variant:"body1",children:r}),t&&o&&o.length>0?o.map(e=>(0,a.jsx)(M,{chicken:e,onMintEgg:()=>h(e.tokenId)},e.tokenId)):(0,a.jsx)(p.Z,{variant:"h6",color:"textSecondary",children:"\uD83E\uDD7A You have no chickens."})]})};function I(){let{active:e,account:t,library:n}=(0,b.Ge)(),[r,f]=(0,i.useState)(null);async function h(){let e=new y.Qg(n.provider),t=new c.CH(T.L,T.M,e),a=await t.totalSupply();f(a=m.dF(a))}return(0,i.useEffect)(()=>{t&&n.provider&&h()},[t,n]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:"Eggspedition: The Eggciting Journey!"}),(0,a.jsx)("meta",{name:"description",content:"Embark on the ultimate eggventure in the world of web3 games."}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(d.Z,{children:(0,a.jsxs)(o.Z,{maxWidth:"md",children:[(0,a.jsx)(p.Z,{variant:"h1",children:"Your Eggspedition! "}),(0,a.jsx)(p.Z,{variant:"h5",gutterBottom:!0,children:"Dive into the eggciting multiverse, where chickens reign supreme and treasures await."}),(0,a.jsx)(l.Z,{title:"This is the total amount of eggs in the Eggspedition universe!",children:(0,a.jsxs)(u.Z,{sx:{bgcolor:"primary",borderRadius:2,boxShadow:1,overflow:"hidden",my:4,position:"relative",p:2},children:["\uD83E\uDD5A Total Eggs in the Universe: ",(0,a.jsx)("strong",{children:r})]})}),(0,a.jsx)(p.Z,{variant:"h6",gutterBottom:!0,children:"Ready for a new chicken companion?"}),(0,a.jsx)(u.Z,{sx:{bgcolor:"primary",borderRadius:2,boxShadow:1,overflow:"hidden",my:4,position:"relative",p:2},children:(0,a.jsx)(v,{})}),(0,a.jsx)(p.Z,{variant:"h6",gutterBottom:!0,children:"Your Eggspeditioner Chickens:"}),(0,a.jsx)(u.Z,{sx:{bgcolor:"primary",borderRadius:2,boxShadow:1,overflow:"hidden",my:4,position:"relative",p:2},children:(0,a.jsx)(Z,{})})]})})]})}},5800:function(e,t,n){"use strict";var a=n(6231),i=n(7250),r=n(1438),s=n(6076);let o=async(e,t,n)=>{try{let i=new r.Qg(e.provider),o=i.getSigner(),p=new s.CH(t,a.Mt,o),l=await p.getStakedNFTsByOwner(n),u=[];return l.forEach(e=>{let t={tokenId:e.toNumber(),url:""};u.push(t)}),u}catch(e){return console.error("Error getting staked NFTs:",e),[null]}},p=async function(e,t,n){let a=new r.Qg(e.provider),o=new s.CH(t,i.Mt,a);await o.supportsInterface("0x80ac58cd");let p=await o.balanceOf(n),l=[];for(let e=0;e<p.toNumber();e++){let t=await o.tokenOfOwnerByIndex(n,e),a=t.toNumber(),i={tokenId:a,url:""};l.push(i)}return l};t.Z={getStakedNFTs:o,loadNfts:p}},5984:function(e,t,n){"use strict";n.d(t,{N:function(){return h}});var a,i=n(5893),r=n(7294),s=n(4687),o=n(6036),p=n(9417),l=n(950),u=n(5254),d=n(3929);let y={97:"https://data-seed-prebsc-1-s1.binance.org:8545",1071:"https://json-rpc.evm.testnet.shimmer.network/",31337:"http://127.0.0.1:8545/"},c=new l._k({supportedChainIds:[97,1071,31337]});new u.S({urls:{97:y[97],1071:y[1071],31337:y[31337]},defaultChainId:1}),new d.zw({rpc:{1:y[1071],2:y[97],3:y[31337]},qrcode:!0});let m=()=>{let{activate:e,active:t}=(0,s.Ge)(),[n,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{c.isAuthorized().then(t=>{t?e(c,void 0,!0).catch(()=>{a(!0)}):a(!0)})},[e]),(0,r.useEffect)(()=>{!n&&t&&a(!0)},[n,t]),n},b=e=>{let{suppress:t=!1}=e,{active:n,error:a,activate:i}=(0,s.Ge)();(0,r.useEffect)(()=>{let{ethereum:e}=window;if(e&&e.on&&!n&&!a&&!t){let t=()=>{console.log("Handling 'connect' event"),i(c)},n=e=>{console.log("Handling 'chainChanged' event with payload",e),i(c)},a=e=>{console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&i(c)},r=e=>{console.log("Handling 'networkChanged' event with payload",e),i(c)};return e.on("connect",t),e.on("chainChanged",n),e.on("accountsChanged",a),e.on("networkChanged",r),()=>{e.removeListener&&(e.removeListener("connect",t),e.removeListener("chainChanged",n),e.removeListener("accountsChanged",a),e.removeListener("networkChanged",r))}}},[n,a,t,i])};(a||(a={})).Injected="Connect";let f={[a.Injected]:c},h=e=>{let t=(0,s.Ge)(),{connector:n,activate:a,error:l}=t,[u,d]=r.useState(),y=m();b({suppress:!y||!!u});let c=f.Connect;return(0,i.jsx)(p.Z,{...e,size:"large",color:e.color||"primary",variant:"contained",disabled:!y||!!u||c===n||!!l,onClick:()=>{console.log("hello world!"),d(c),a(f.Connect)},startIcon:(0,i.jsx)(o.Z,{}),children:c===u?"...":"Connect"})}},7250:function(e){"use strict";e.exports=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"operator","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')}},function(e){e.O(0,[4885,5861,7739,1262,7940,7910,755,7471,6633,6231,9774,2888,179],function(){return e(e.s=134)}),_N_E=e.O()}]);