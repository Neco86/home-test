(self.webpackChunkhome=self.webpackChunkhome||[]).push([[709,353],{84848:function(M){M.exports={wrapper:"wrapper___2gabT",expend:"expend___2fZH-",menu1:"menu1___12zFg",menu2:"menu2___3ZdqH",contentWrapper:"contentWrapper___1ZjJR",content:"content___2uG_D"}},94266:function(M){M.exports={wrapper:"wrapper___2GCxI",card:"card___1tWH6",picture:"picture___1MbQw",title:"title___RUJMv",subTitle:"subTitle___26RVB"}},71866:function(M,P,e){"use strict";e.r(P),e.d(P,{DEFAULT_CONFIG:function(){return m},useConfigStyle:function(){return s},usePageInfo:function(){return p}});var W=e(2824),L=e(99427),f=e(20492),u=e(67294),j=e(76420),I=e(84848),d=e.n(I),E=e(42762),t=e(85893),m={title:"",icon:"",footer:"",pages:[],styles:{title:{},footer:{},home:{photo:{},title:{},description:{},welcome:{},content:{}},research:{title:{},card:{title:{},subtitle:{},description:{},buttons:{}}}}},o=(0,u.createContext)(m),T=f.Z.SubMenu,s=function(){var v=(0,u.useContext)(o);return v.styles},p=function(){var v,g,C=(0,u.useContext)(o),l=(v=(g=C.pages.find(function(D){return D.target===j.m8.location.pathname}))===null||g===void 0?void 0:g.info)!==null&&v!==void 0?v:{};return l};P.default=function(x){var v=x.children,g=(0,u.useState)(m),C=(0,W.Z)(g,2),l=C[0],D=C[1];(0,u.useEffect)(function(){fetch("./config.json?t=".concat(Date.now())).then(function(n){return n.json()}).then(function(n){D(n),document.title=n.title;var a=document.createElement("link");a.type="image/x-icon",a.rel="shortcut icon",a.href=n.icon,document.getElementsByTagName("head")[0].appendChild(a)})},[]);var y=(0,u.useCallback)(function(n){var a=n.key;["/","/research"].includes(a)?j.m8.push(a):a&&window.open(a,"_blank")},[]);return(0,t.jsxs)("div",{className:d().wrapper,children:[(0,t.jsxs)("header",{children:[(0,t.jsx)("a",{href:"/",children:(0,t.jsx)("h1",{style:l.styles.title,children:l.title})}),(0,t.jsx)(f.Z,{mode:"horizontal",selectedKeys:[j.m8.location.pathname],onClick:y,className:d().menu1,children:l.pages.map(function(n){var a=n.title,O=n.target;return(0,t.jsx)(f.Z.Item,{children:a},O)})}),(0,t.jsx)(f.Z,{mode:"horizontal",selectedKeys:[],onClick:y,className:d().menu2,children:(0,t.jsx)(T,{title:(0,t.jsx)(E.Z,{className:d().expend}),children:l.pages.map(function(n){var a=n.title,O=n.target;return(0,t.jsx)(f.Z.Item,{children:a},O)})})})]}),(0,t.jsx)(o.Provider,{value:l,children:(0,t.jsxs)("div",{className:d().contentWrapper,children:[(0,t.jsx)("div",{className:d().content,children:v}),(0,t.jsx)("footer",{style:l.styles.footer,children:l.footer})]})})]})}},55417:function(M,P,e){"use strict";e.r(P);var W=e(57663),L=e(27884),f=e(8870),u=e(2824),j=e(18106),I=e(50839),d=e(71866),E=e(67294),t=e(94266),m=e.n(t),o=e(85893),T=I.Z.TabPane;P.default=function(){var s=(0,d.usePageInfo)(),p=(0,d.useConfigStyle)(),x=(0,E.useMemo)(function(){var i,r=["All"];return(i=s.cards)===null||i===void 0||i.forEach(function(c){var _=c.category;_==null||_.forEach(function(h){r.includes(h)||r.push(h)})}),r},[s.cards]),v=(0,E.useState)("All"),g=(0,u.Z)(v,2),C=g[0],l=g[1],D=(0,E.useState)(document.documentElement.clientWidth),y=(0,u.Z)(D,2),n=y[0],a=y[1];(0,E.useEffect)(function(){var i=function(){a(document.documentElement.clientWidth)};return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}},[]);var O=(0,E.useCallback)(function(i){var r=n<600?1:s.cardRowCount||1,c={maxWidth:"calc(".concat(100/r,"vw - ").concat(80/r,"px - 9px)")};return s.width&&(c.width="calc(".concat(s.width/r,"px - ").concat(80/r,"px - 9px)")),i%r==0&&(c.marginLeft="40px"),(i+1)%r==0&&(c.marginRight="40px"),c},[s,n]),B=(0,E.useMemo)(function(){return s!=null&&s.width?{width:"".concat(s.width,"px")}:{}},[s]);return(0,o.jsxs)("div",{className:m().wrapper,style:B,children:[(0,o.jsx)("h2",{style:p.research.title,children:s.title}),(0,o.jsx)(I.Z,{activeKey:C,onChange:l,children:x.map(function(i){var r,c;return(0,o.jsx)(T,{tab:i,children:(r=s.cards)===null||r===void 0||(c=r.filter(function(_){var h;return i==="All"?!0:(h=_.category)===null||h===void 0?void 0:h.includes(i)}))===null||c===void 0?void 0:c.map(function(_,h){var U=_.title,b=_.subTitle,S=_.description,A=_.buttons,K=_.picture;return(0,o.jsxs)("div",{className:m().card,style:O(h),children:[(0,o.jsx)("div",{style:p.research.card.title,className:m().title,children:U}),(0,o.jsx)("div",{style:p.research.card.subTitle,className:m().subTitle,children:b}),K&&(0,o.jsx)("div",{style:(0,f.Z)((0,f.Z)({},p.research.card.picture),{},{backgroundImage:"url(".concat(K,")")}),className:m().picture}),(0,o.jsx)("p",{style:p.research.card.description,children:S}),A==null?void 0:A.map(function(R,Z){return(0,o.jsx)(L.Z,{ghost:!0,type:"primary",onClick:function(){window.open(R.target,"_blank")},style:p.research.card.buttons,children:R.title},Z)})]},h)})},i)})})]})}}}]);