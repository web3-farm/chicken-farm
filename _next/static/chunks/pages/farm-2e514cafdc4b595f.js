(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{8526:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/farm",function(){return n(3815)}])},3815:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var a=n(5893),i=n(7294),s=n(9008),r=n.n(s),u=n(7932),o=n(5861),p=n(3372),l=n(6822),d=n(4001),y=n(6076),c=n(5553),m=n(8456),f=n(9417),x=n(5568),T=n(1378),h=n(8240);let b=e=>{let{provider:t,account:n}=e,[s,r]=(0,i.useState)(null),[u,p]=(0,i.useState)(""),[d,b]=(0,i.useState)(!1);(0,i.useEffect)(()=>{if(n){let e=t.getSigner(),n=new y.CH(T.L,T.M,e);r(n)}},[n]);let g=async()=>{b(!0);try{let e=t.getSigner(),n=new y.CH(h.L,h.M,e),a=await n.approve(T.L,c.fi("1"));await a.wait();let i=await s.createChicken({gasLimit:5e6,value:c.fi("10")});p("\uD83C\uDF89 Successfully minted NFT!"),await i.wait()}catch(e){p("❌ Error minting NFT: ".concat(e.message))}finally{b(!1)}};return(0,a.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",p:3,borderRadius:2,boxShadow:1},children:[(0,a.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"Ready to hatch your chicken?"}),(0,a.jsx)(l.Z,{mt:2,children:d?(0,a.jsx)(m.Z,{color:"primary"}):(0,a.jsx)(f.Z,{variant:"contained",color:"primary",size:"large",onClick:g,children:"Mint ChickenNFT"})}),u&&(0,a.jsx)(l.Z,{mt:2,children:u.startsWith("\uD83C\uDF89")?(0,a.jsx)(x.Z,{severity:"success",children:u}):(0,a.jsx)(x.Z,{severity:"error",children:u})})]})};var g=JSON.parse('{"Mt":[{"inputs":[{"internalType":"contract IERC721","name":"_nftToken","type":"address"},{"internalType":"contract IERC20","name":"_erc20Token","type":"address"},{"internalType":"address","name":"_daoAdmin","type":"address"},{"internalType":"uint256","name":"_tokensPerBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"NftStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"NftUnStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakeAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fromBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toBlock","type":"uint256"}],"name":"StakePayout","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rewardPerBlock","type":"uint256"}],"name":"StakeRewardUpdated","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokensPerBlock","type":"uint256"}],"name":"changeTokensPerblock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"daoAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc20Token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getCurrentStakeEarned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakeContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"getStakedNFTsByOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nftToken","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownerToStakedNFTs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"receipt","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"stakedFromBlock","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reclaimTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenId","type":"uint256[]"}],"name":"stakeNFT","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokensPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"unStakeNFT","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokensPerBlock","type":"uint256"}],"name":"updateStakingReward","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),w=n(7250),v=n(241);let k=async(e,t,n)=>{try{let a=new v.Q(e.provider),i=a.getSigner(),s=new y.CH(t,g.Mt,i),r=await s.getStakedNFTsByOwner(n),u=[];return r.forEach(e=>{let t={tokenId:e.toNumber(),url:""};u.push(t)}),u}catch(e){return console.error("Error getting staked NFTs:",e),[null]}},j=async function(e,t,n){let a=new y.CH(t,w.Mt,e);await a.supportsInterface("0x80ac58cd");let i=await a.balanceOf(n),s=[];for(let e=0;e<i.toNumber();e++){let t=await a.tokenOfOwnerByIndex(n,e),i=t.toNumber(),r={tokenId:i,url:""};s.push(r)}return s};var M={getStakedNFTs:k,loadNfts:j},S=n(381),Z=n.n(S);n(3704);var D=n(3029);let C=e=>{let{chicken:t,isLoading:n,provider:s}=e,[r,u]=(0,i.useState)(!1),[p,d]=(0,i.useState)(!1),[b,g]=(0,i.useState)(null),w=async()=>{u(!0);try{let e=new y.CH(T.L,T.M,s.getSigner()),n=new y.CH(h.L,h.M,s.getSigner()),a=await n.approve(T.L,c.fi("1"));await a.wait();let i=await e.hatchEgg(t.tokenId,{gasLimit:5e6});await i.wait(),u(!1),d(!0)}catch(e){u(!1),g(e.message||"An error occurred!")}};return(0,a.jsx)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",boxShadow:3,justifyContent:"center"},children:Z()(t.nextEggMintedTime).diff(Z()().unix())>0?(0,a.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"Your chicken is not ready to hatch!"}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"or ready to hatch an egg?"}),(0,a.jsxs)(f.Z,{variant:"contained",startIcon:n?(0,a.jsx)(m.Z,{size:24}):(0,a.jsx)(o.Z,{children:"\uD83D\uDC23"}),color:"primary",disabled:r,onClick:w,children:["Hatch Egg",r&&(0,a.jsx)(m.Z,{size:24,sx:{ml:1}})]}),(0,a.jsx)(D.Z,{open:p,autoHideDuration:6e3,onClose:()=>d(!1),children:(0,a.jsx)(x.Z,{onClose:()=>d(!1),severity:"success",sx:{width:"100%"},children:"Congratulations! Your egg has been hatched! \uD83D\uDC23"})}),(0,a.jsx)(D.Z,{open:!!b,autoHideDuration:6e3,onClose:()=>g(null),children:(0,a.jsx)(x.Z,{onClose:()=>g(null),severity:"error",sx:{width:"100%"},children:b})})]})})},E=e=>{let{chicken:t,onMintEgg:n,isLoading:s}=e,[r,u]=(0,i.useState)(!1),[p,d]=(0,i.useState)(!1),[y,c]=(0,i.useState)(null);return(0,a.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",boxShadow:3,justifyContent:"center"},children:[Z()(t.nextEggMintedTime).diff(Z()().unix())>0?(0,a.jsx)(o.Z,{children:"Your chicken is not reeady to lay an egg!"}):(0,a.jsx)(o.Z,{children:t.isAlive?"You can mint an egg now!":""}),(0,a.jsx)(f.Z,{variant:"contained",startIcon:s?(0,a.jsx)(m.Z,{size:24}):(0,a.jsx)(o.Z,{children:"\uD83E\uDD5A"}),onClick:n,disabled:!t.isAlive||s||Z()(t.nextEggMintedTime).diff(Z()().unix())>0,children:t.isAlive?s?"Minting...":"Mint Egg":"Chicken is Dead"})]})};var I=n(1664),F=n.n(I);let A=e=>{let{chicken:t,onMintEgg:n,isLoading:i,provider:s}=e;return(0,a.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",m:2,p:2,boxShadow:3},children:[(0,a.jsx)(F(),{href:"/chickens/".concat(t.tokenId),children:(0,a.jsx)(o.Z,{style:{fontSize:50},children:"\uD83D\uDC14"})}),(0,a.jsxs)(o.Z,{children:["Chicken #",t.tokenId]}),t.isAlive?(0,a.jsx)(o.Z,{children:"\uD83D\uDC14 Alive"}):(0,a.jsx)(o.Z,{children:"\uD83D\uDC80 Dead"}),Z()(t.nextEggMintedTime).diff(Z()().unix())>0?(0,a.jsxs)(o.Z,{children:["Next action in:"," ",Z().duration(1e3*Z()(t.nextEggMintedTime).diff(Z()().unix())).format("h [hrs], m [min], s [secs]")]}):(0,a.jsx)(o.Z,{children:"Your chicken is ready for egg-tion!"}),(0,a.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,a.jsx)(E,{chicken:t,onMintEgg:n,isLoading:i}),(0,a.jsx)(C,{chicken:t,isLoading:i,provider:s})]})]})},N=e=>{let{provider:t,account:n}=e,[s,r]=(0,i.useState)(""),[u,p]=(0,i.useState)([]),[d,c]=(0,i.useState)([]);(0,i.useEffect)(()=>{let e=async()=>{if(n){let e=await M.loadNfts(t,T.L,n),a=await m(e);p(a)}};e()},[n]);let m=async e=>{let n=new y.CH(T.L,T.M,t),a=await Promise.all(e.map(async e=>{let t=await n.getChickenDetails(e.tokenId);return console.log("chicken",t),{...e,isAlive:!t.isDead,nextEggMintedTime:Number(t.nextEggMintedTime)}}));return a},f=async e=>{try{let n=new y.CH(T.L,T.M,t.getSigner()),a=await n.mintEgg(e,{gasLimit:5e6});await a.wait(),r("\uD83C\uDF89 Successfully minted 1 EGG!"),d.includes(e)||c(t=>[...t,e])}catch(e){console.log(e),r(function(e){let t="reverted with reason string '";if(e.includes(t)){let n=e.indexOf(t)+t.length,a=e.indexOf("'",n);return e.substring(n,a)}return"null"}(e.message))}};return(0,a.jsxs)(l.Z,{children:[s&&(0,a.jsx)(o.Z,{variant:"body1",children:s}),(0,a.jsxs)(l.Z,{sx:{display:"flex",flexWrap:"wrap",gap:2,mt:2,mb:4,alignItems:"center",justifyContent:n&&u&&u.length>0?"flex-start":"center"},children:[(0,a.jsx)("br",{}),n&&u&&u.length>0?u.map(e=>(0,a.jsx)(A,{chicken:e,onMintEgg:()=>f(e.tokenId),provider:t},e.tokenId)):(0,a.jsx)(o.Z,{variant:"h6",color:"textSecondary",children:"\uD83E\uDD7A You have no chickens."})]})]})};var O=n(7372);let{useChainId:B,useAccounts:_,useIsActivating:L,useIsActive:R,useProvider:H,useENSNames:P}=O.P;function Y(){let e=_(),[t,n]=(0,i.useState)(""),s=H(),m=R();console.log("isActive",m),(0,i.useEffect)(()=>{m&&e&&e.length>0&&(n(e[0]),v())},[m,e]),(0,i.useEffect)(()=>{t&&w()},[t]);let[f,x]=(0,i.useState)(null),[T,g]=(0,i.useState)(null);async function w(){if(!s)return;let e=new y.CH(h.L,h.M,s);try{let n=await e.balanceOf(t);n=c.dF(n),g(n)}catch(e){console.log("error",e)}}async function v(){if(!s)return;let e=new y.CH(h.L,h.M,s);try{let t=await e.totalSupply();t=c.dF(t),x(t)}catch(e){console.log("error",e)}}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Eggspedition: The Eggciting Journey!"}),(0,a.jsx)("meta",{name:"description",content:"Embark on the ultimate eggventure in the world of web3 games."}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(d.Z,{children:(0,a.jsx)(u.Z,{maxWidth:"md",children:m?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{variant:"h1",children:"Your Eggspedition! "}),(0,a.jsx)(o.Z,{variant:"h5",gutterBottom:!0,children:"Dive into the eggciting multiverse, where chickens reign supreme and treasures await."}),(0,a.jsx)(p.Z,{title:"This is the total amount of eggs in the Eggspedition universe!",children:(0,a.jsxs)(l.Z,{sx:{bgcolor:"primary",borderRadius:2,boxShadow:1,overflow:"hidden",my:4,position:"relative",p:2},children:["\uD83E\uDD5A Total Eggs in the Universe: ",(0,a.jsx)("strong",{children:f})]})}),(0,a.jsx)(p.Z,{title:"This is your amount of eggs!",children:(0,a.jsxs)(l.Z,{sx:{bgcolor:"primary",borderRadius:2,boxShadow:1,overflow:"hidden",my:4,position:"relative",p:2},children:["\uD83E\uDD5A Your Eggs: ",(0,a.jsx)("strong",{children:T})]})}),(0,a.jsx)(o.Z,{variant:"h6",gutterBottom:!0,children:"Ready for a new chicken companion?"}),(0,a.jsxs)(l.Z,{sx:{bgcolor:"primary",borderRadius:2,boxShadow:1,overflow:"hidden",my:4,position:"relative",p:2},children:[(0,a.jsx)(b,{provider:s,account:t}),(0,a.jsxs)(o.Z,{variant:"body2",align:"center",gutterBottom:!0,children:["You can mint a ChickenNFT with 1 EGGS and 10 SMR. Questions? Check our ",(0,a.jsx)(F(),{href:"info",children:"FAQ cove"}),"."]})]}),(0,a.jsx)(o.Z,{variant:"h6",gutterBottom:!0,children:"Your Eggspeditioner Chickens:"}),(0,a.jsx)(l.Z,{sx:{bgcolor:"primary",borderRadius:2,boxShadow:1,overflow:"hidden",my:4,position:"relative",p:2},children:(0,a.jsx)(N,{provider:s,account:t})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{variant:"h3",gutterBottom:!0,children:"Welcome new farmer!"}),(0,a.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"Please connect your wallet to continue."})]})})})]})}},8240:function(e){"use strict";e.exports=JSON.parse('{"M":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],"L":"0x610178dA211FEF7D417bC0e6FeD39F05609AD788"}')},7250:function(e){"use strict";e.exports=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"operator","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')}},function(e){e.O(0,[885,10,703,294,376,18,833,774,888,179],function(){return e(e.s=8526)}),_N_E=e.O()}]);