(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{8526:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/farm",function(){return n(1236)}])},8226:function(e,t,n){"use strict";var a=n(5893);n(7294);var i=n(6822),s=n(5861),r=n(8078);let u=e=>{let{label:t,value:n,symbol:u}=e;return(0,a.jsxs)(i.Z,{sx:p.card,children:[(0,a.jsx)(s.Z,{color:"text.secondary",fontSize:14,mt:0,children:t}),(0,a.jsxs)(i.Z,{sx:p.wrapper,children:[(0,a.jsx)(s.Z,{variant:"h6",my:0,mr:1,children:n?n.split(".")[0]:(0,a.jsx)(r.Z,{width:60})}),(0,a.jsx)(s.Z,{fontWeight:700,fontSize:12,color:"text.secondary",children:u})]})]})},p={container:{width:"100%",display:"flex",marginBottom:"30px",gap:2},card:{bgcolor:"background.paper",p:2,flex:1,borderRadius:2,boxShadow:1},wrapper:{display:"flex",alignItems:"flex-end"}};t.Z=u},1236:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var a=n(5893),i=n(7294),s=n(9008),r=n.n(s),u=n(7932),p=n(5861),l=n(6822),o=n(4001),d=n(6076),y=n(5553),c=n(9417),m=n(8456),f=n(5568),x=n(1378),b=n(8240);let T=e=>{let{provider:t,account:n}=e,[s,r]=(0,i.useState)(null),[u,o]=(0,i.useState)(""),[T,h]=(0,i.useState)(!1);(0,i.useEffect)(()=>{if(n){let e=t.getSigner(),n=new d.CH(x.L,x.M,e);r(n)}},[n]);let w=async()=>{h(!0);try{let e=t.getSigner(),n=new d.CH(b.L,b.M,e),a=await n.approve(x.L,y.fi("1"));await a.wait();let i=await s.createChicken({gasLimit:5e6,value:y.fi("10")});o("\uD83C\uDF89 Successfully minted NFT!"),await i.wait()}catch(e){o("❌ Error minting NFT: ".concat(e.message))}finally{h(!1)}};return(0,a.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,a.jsx)(l.Z,{mt:2,children:(0,a.jsx)(c.Z,{variant:"contained",color:"primary",onClick:w,startIcon:T?(0,a.jsx)(m.Z,{size:24}):(0,a.jsx)(p.Z,{children:"\uD83D\uDC14"}),children:"Mint Chicken"})}),u&&(0,a.jsx)(l.Z,{mt:2,children:u.startsWith("\uD83C\uDF89")?(0,a.jsx)(f.Z,{severity:"success",children:u}):(0,a.jsx)(f.Z,{severity:"error",children:u})})]})};var h=JSON.parse('{"Mt":[{"inputs":[{"internalType":"contract IERC721","name":"_nftToken","type":"address"},{"internalType":"contract IERC20","name":"_erc20Token","type":"address"},{"internalType":"address","name":"_daoAdmin","type":"address"},{"internalType":"uint256","name":"_tokensPerBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"NftStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"NftUnStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakeAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fromBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toBlock","type":"uint256"}],"name":"StakePayout","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rewardPerBlock","type":"uint256"}],"name":"StakeRewardUpdated","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokensPerBlock","type":"uint256"}],"name":"changeTokensPerblock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"daoAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc20Token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getCurrentStakeEarned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakeContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"getStakedNFTsByOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nftToken","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownerToStakedNFTs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"receipt","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"stakedFromBlock","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reclaimTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenId","type":"uint256[]"}],"name":"stakeNFT","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokensPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"unStakeNFT","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokensPerBlock","type":"uint256"}],"name":"updateStakingReward","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),w=n(7250),g=n(241);let v=async(e,t,n)=>{try{let a=new g.Q(e.provider),i=a.getSigner(),s=new d.CH(t,h.Mt,i),r=await s.getStakedNFTsByOwner(n),u=[];return r.forEach(e=>{let t={tokenId:e.toNumber(),url:""};u.push(t)}),u}catch(e){return console.error("Error getting staked NFTs:",e),[null]}},k=async function(e,t,n){let a=new d.CH(t,w.Mt,e);await a.supportsInterface("0x80ac58cd");let i=await a.balanceOf(n),s=[];for(let e=0;e<i.toNumber();e++){let t=await a.tokenOfOwnerByIndex(n,e),i=t.toNumber(),r={tokenId:i,url:""};s.push(r)}return s};var j={getStakedNFTs:v,loadNfts:k};n(3704);var M=n(7918),S=n(1664),Z=n.n(S),C=n(381),D=n.n(C),I=n(3029);let E=e=>{let{chicken:t,isLoading:n,provider:s}=e,[r,u]=(0,i.useState)(!1),[o,T]=(0,i.useState)(!1),[h,w]=(0,i.useState)(null),g=async()=>{u(!0);try{let e=new d.CH(x.L,x.M,s.getSigner()),n=new d.CH(b.L,b.M,s.getSigner()),a=await n.approve(x.L,y.fi("1"));await a.wait();let i=await e.hatchEgg(t.tokenId,{gasLimit:5e6});await i.wait(),u(!1),T(!0)}catch(e){u(!1),w(e.message||"An error occurred!")}};return(0,a.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",boxShadow:3,justifyContent:"center"},children:[(0,a.jsxs)(c.Z,{variant:"contained",fullWidth:!0,startIcon:n?(0,a.jsx)(m.Z,{size:24}):(0,a.jsx)(p.Z,{children:"\uD83D\uDC23"}),color:"primary",disabled:r,onClick:g,children:["Hatch Chicken",r&&(0,a.jsx)(m.Z,{size:24,sx:{ml:1}})]}),(0,a.jsx)(I.Z,{open:o,autoHideDuration:6e3,onClose:()=>T(!1),children:(0,a.jsx)(f.Z,{onClose:()=>T(!1),severity:"success",sx:{width:"100%"},children:"Congratulations! Your egg has been hatched! \uD83D\uDC23"})}),(0,a.jsx)(I.Z,{open:!!h,autoHideDuration:6e3,onClose:()=>w(null),children:(0,a.jsx)(f.Z,{onClose:()=>w(null),severity:"error",sx:{width:"100%"},children:h})})]})},F=e=>{let{chicken:t,onMintEgg:n,isLoading:s}=e,[r,u]=(0,i.useState)(!1),[o,d]=(0,i.useState)(!1),[y,f]=(0,i.useState)(null);return(0,a.jsx)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",boxShadow:3,justifyContent:"center"},children:(0,a.jsx)(c.Z,{variant:"contained",fullWidth:!0,color:"secondary",startIcon:s?(0,a.jsx)(m.Z,{size:24}):(0,a.jsx)(p.Z,{children:"\uD83E\uDD5A"}),onClick:n,children:t.isAlive?s?"Minting...":"Mint Egg":"Chicken is Dead"})})},A=e=>{let{chicken:t,onMintEgg:n,provider:i}=e,s=D()(t.nextEggMintedTime).diff(D()().unix()),r=D().duration(1e3*s).format("h [hrs], m [min], s [secs]");return(0,a.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",p:1.5,width:"200px",borderRadius:"8px",boxShadow:"0 4px 10px rgba(0,0,0,0.15)",bgcolor:"#2E2E2E"},children:[(0,a.jsx)(Z(),{href:"/chickens/".concat(t.tokenId),children:(0,a.jsx)(p.Z,{sx:{fontSize:40,cursor:"pointer"},children:"\uD83D\uDC14"})}),(0,a.jsxs)(p.Z,{fontWeight:"bold",variant:"subtitle1",children:["Chicken #",t.tokenId]}),t.isAlive?(0,a.jsx)(M.Z,{size:"small",label:"Alive",color:"success",sx:{fontWeight:"bold"}}):(0,a.jsx)(M.Z,{size:"small",label:"Dead",sx:{fontWeight:"bold"},color:"error"}),t.isAlive&&s>0?(0,a.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"},children:[(0,a.jsx)(p.Z,{variant:"caption",children:"Next action ready in"}),(0,a.jsx)(p.Z,{variant:"h6",children:r})]}):(0,a.jsxs)(l.Z,{sx:{mt:2,display:"flex",flexDirection:"column",gap:2},children:[(0,a.jsx)(F,{chicken:t,onMintEgg:n}),(0,a.jsx)(E,{chicken:t,provider:i})]})]})},N=e=>{let{provider:t,account:n}=e,[s,r]=(0,i.useState)(""),[u,o]=(0,i.useState)([]);(0,i.useEffect)(()=>{let e=async()=>{if(n){let e=await j.loadNfts(t,x.L,n),a=await y(e);o(a)}};e()},[n]);let y=async e=>{let n=new d.CH(x.L,x.M,t),a=await Promise.all(e.map(async e=>{let t=await n.getChickenDetails(e.tokenId);return{...e,isAlive:!t.isDead,nextEggMintedTime:Number(t.nextEggMintedTime)}}));return a},c=async e=>{try{let n=new d.CH(x.L,x.M,t.getSigner()),a=await n.mintEgg(e,{gasLimit:5e6});await a.wait(),r("\uD83C\uDF89 Successfully minted 1 EGG!"),y(u)}catch(e){r(m(e.message))}},m=e=>{let t="reverted with reason string '",n=e.indexOf(t),a=e.indexOf("'",n+t.length);return -1!==n?e.substring(n+t.length,a):"An error occurred"};return(0,a.jsxs)(l.Z,{sx:{maxWidth:"1200px",margin:"auto"},children:[s&&(0,a.jsx)(p.Z,{variant:"body1",sx:{mb:2},children:s}),(0,a.jsx)(l.Z,{sx:{display:"flex",flexWrap:"wrap",mt:2,mb:4,gap:2},children:n&&u.length>0?u.map(e=>(0,a.jsx)(A,{chicken:e,onMintEgg:()=>c(e.tokenId),provider:t},e.tokenId)):(0,a.jsx)(p.Z,{variant:"h6",color:"textSecondary",children:"\uD83E\uDD7A You have no chickens."})})]})};var O=n(7372),B=n(8226);let{useChainId:_,useAccounts:L,useIsActivating:H,useIsActive:W,useProvider:P,useENSNames:R}=O.P;function z(){let e=L(),[t,n]=(0,i.useState)(""),s=P(),c=W();console.log("isActive",c),(0,i.useEffect)(()=>{c&&e&&e.length>0&&(n(e[0]),j(),M())},[c,e]),(0,i.useEffect)(()=>{t&&k()},[t]);let[m,f]=(0,i.useState)(null),[h,w]=(0,i.useState)(null),[g,v]=(0,i.useState)(null);async function k(){if(!s)return;let e=new d.CH(b.L,b.M,s);try{let n=await e.balanceOf(t);n=y.dF(n),v(n)}catch(e){console.log("error",e)}}async function j(){if(!s)return;let e=new d.CH(b.L,b.M,s);try{let t=await e.totalSupply();t=y.dF(t),f(t)}catch(e){console.log("error",e)}}async function M(){if(!s)return;let e=new d.CH(x.L,x.M,s);try{let t=await e.totalAliveChickens();console.log("aliveSupply",t),console.log("aliveSupply",t),w(t.toString())}catch(e){console.log("error",e)}}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Eggspedition: The Eggciting Journey!"}),(0,a.jsx)("meta",{name:"description",content:"Embark on the ultimate eggventure in the world of web3 games."}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(o.Z,{children:(0,a.jsx)(u.Z,{maxWidth:"md",children:c?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.Z,{variant:"h1",children:"Farm "}),(0,a.jsx)(p.Z,{gutterBottom:!0,mb:2,children:"Mint your ChickenNFT get some eggs and grow your farm!"}),(0,a.jsxs)(l.Z,{sx:{display:"flex",gap:4,flexWrap:"wrap",mb:4},children:[(0,a.jsx)(B.Z,{label:"\uD83E\uDD5A Total Eggs",value:m,symbol:"EGGS"}),(0,a.jsx)(B.Z,{label:"\uD83D\uDC14 Total Alive Chickens",value:h,symbol:"Chickens"})]}),(0,a.jsx)(p.Z,{variant:"h4",gutterBottom:!0,children:"Ready to hatch your chicken in no time?"}),(0,a.jsxs)(p.Z,{gutterBottom:!0,children:["You can mint a ChickenNFT with 1 EGGS and 10 SMR. Questions? Check our ",(0,a.jsx)(Z(),{href:"info",children:"FAQ cove"}),"."]}),(0,a.jsx)(l.Z,{sx:{mt:2,mb:4},children:(0,a.jsxs)(l.Z,{sx:{display:"flex",gap:4,flexWrap:"wrap"},children:[(0,a.jsx)(B.Z,{label:"\uD83E\uDD5A Your Eggs",value:null==g?void 0:g.toString(),symbol:"EGGS"}),(0,a.jsx)(T,{provider:s,account:t})]})}),(0,a.jsx)(p.Z,{variant:"h4",gutterBottom:!0,children:"Your Chickens"}),(0,a.jsx)(N,{provider:s,account:t})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.Z,{variant:"h1",gutterBottom:!0,children:"Welcome new farmer!"}),(0,a.jsx)(p.Z,{gutterBottom:!0,children:"Please connect your wallet to continue."})]})})})]})}},8240:function(e){"use strict";e.exports=JSON.parse('{"M":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],"L":"0x8cD395eF72C8F34D1c817D6418005A83F3b3e32a"}')},7250:function(e){"use strict";e.exports=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"operator","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')}},function(e){e.O(0,[885,10,364,294,730,918,18,833,774,888,179],function(){return e(e.s=8526)}),_N_E=e.O()}]);