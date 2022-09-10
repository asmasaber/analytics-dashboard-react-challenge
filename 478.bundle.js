"use strict";(self.webpackChunkanalytics_dashboard_react_challenge=self.webpackChunkanalytics_dashboard_react_challenge||[]).push([[478],{4478:(e,t,o)=>{o.r(t),o.d(t,{default:()=>ie});var n=o(8152),r=o(7294),i=o(6974),s=o(8003),a=o(5401),l=o(8720),c=o(7462),p=o(3366),m=o(6010),u=o(6622),Z=o(4780),d=o(1719),f=o(8884);const v=r.createContext({});var x=o(4867),h=o(1588);function g(e){return(0,x.Z)("MuiTimeline",e)}(0,h.Z)("MuiTimeline",["root","positionLeft","positionRight","positionAlternate"]);var C=o(5893);const w=["position","className"],y=(0,d.ZP)("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.position&&t[`position${(0,u.Z)(o.position)}`]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),T=r.forwardRef((function(e,t){const o=(0,f.Z)({props:e,name:"MuiTimeline"}),{position:n="right",className:r}=o,i=(0,p.Z)(o,w),s=(0,c.Z)({},o,{position:n}),a=(e=>{const{position:t,classes:o}=e,n={root:["root",t&&`position${(0,u.Z)(t)}`]};return(0,Z.Z)(n,g,o)})(s);return(0,C.jsx)(v.Provider,{value:{position:n},children:(0,C.jsx)(y,(0,c.Z)({className:(0,m.Z)(a.root,r),ownerState:s,ref:t},i))})}));var E=o(3693);function S(e){return(0,x.Z)("MuiTimelineContent",e)}const M=(0,h.Z)("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate"]);function R(e){return(0,x.Z)("MuiTimelineOppositeContent",e)}const b=(0,h.Z)("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate"]);function N(e){return(0,x.Z)("MuiTimelineItem",e)}(0,h.Z)("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","missingOppositeContent"]);const P=["position","className"],$=(0,d.ZP)("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${(0,u.Z)(o.position)}`]]}})((({ownerState:e})=>(0,c.Z)({listStyle:"none",display:"flex",position:"relative",minHeight:70},"left"===e.position&&{flexDirection:"row-reverse"},"alternate"===e.position&&{"&:nth-of-type(even)":{flexDirection:"row-reverse",[`& .${M.root}`]:{textAlign:"right"},[`& .${b.root}`]:{textAlign:"left"}}},!e.hasOppositeContent&&{"&:before":{content:'""',flex:1,padding:"6px 16px"}}))),O=r.forwardRef((function(e,t){const o=(0,f.Z)({props:e,name:"MuiTimelineItem"}),{position:n,className:i}=o,s=(0,p.Z)(o,P),{position:a}=r.useContext(v);let l=!1;r.Children.forEach(o.children,(e=>{(0,E.Z)(e,["TimelineOppositeContent"])&&(l=!0)}));const d=(0,c.Z)({},o,{position:n||a||"right",hasOppositeContent:l}),x=(e=>{const{position:t,classes:o,hasOppositeContent:n}=e,r={root:["root",`position${(0,u.Z)(t)}`,!n&&"missingOppositeContent"]};return(0,Z.Z)(r,N,o)})(d);return(0,C.jsx)(v.Provider,{value:{position:d.position},children:(0,C.jsx)($,(0,c.Z)({className:(0,m.Z)(x.root,i),ownerState:d,ref:t},s))})}));function D(e){return(0,x.Z)("MuiTimelineSeparator",e)}(0,h.Z)("MuiTimelineSeparator",["root"]);const A=["className"],j=(0,d.ZP)("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),k=r.forwardRef((function(e,t){const o=(0,f.Z)({props:e,name:"MuiTimelineSeparator"}),{className:n}=o,r=(0,p.Z)(o,A),i=o,s=(e=>{const{classes:t}=e;return(0,Z.Z)({root:["root"]},D,t)})(i);return(0,C.jsx)(j,(0,c.Z)({className:(0,m.Z)(s.root,n),ownerState:i,ref:t},r))}));function I(e){return(0,x.Z)("MuiTimelineConnector",e)}(0,h.Z)("MuiTimelineConnector",["root"]);const L=["className"],_=(0,d.ZP)("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({width:2,backgroundColor:(e.vars||e).palette.grey[400],flexGrow:1}))),G=r.forwardRef((function(e,t){const o=(0,f.Z)({props:e,name:"MuiTimelineConnector"}),{className:n}=o,r=(0,p.Z)(o,L),i=o,s=(e=>{const{classes:t}=e;return(0,Z.Z)({root:["root"]},I,t)})(i);return(0,C.jsx)(_,(0,c.Z)({className:(0,m.Z)(s.root,n),ownerState:i,ref:t},r))}));var U=o(1647);const W=["className"],F=(0,d.ZP)(U.Z,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${(0,u.Z)(o.position)}`]]}})((({ownerState:e})=>(0,c.Z)({flex:1,padding:"6px 16px",textAlign:"left"},"left"===e.position&&{textAlign:"right"}))),H=r.forwardRef((function(e,t){const o=(0,f.Z)({props:e,name:"MuiTimelineContent"}),{className:n}=o,i=(0,p.Z)(o,W),{position:s}=r.useContext(v),a=(0,c.Z)({},o,{position:s||"right"}),l=(e=>{const{position:t,classes:o}=e,n={root:["root",`position${(0,u.Z)(t)}`]};return(0,Z.Z)(n,S,o)})(a);return(0,C.jsx)(F,(0,c.Z)({component:"div",className:(0,m.Z)(l.root,n),ownerState:a,ref:t},i))}));function q(e){return(0,x.Z)("MuiTimelineDot",e)}(0,h.Z)("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const z=["className","color","variant"],B=(0,d.ZP)("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t["inherit"!==o.color&&`${o.variant}${(0,u.Z)(o.color)}`],t[o.variant]]}})((({ownerState:e,theme:t})=>(0,c.Z)({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(t.vars||t).shadows[1],margin:"11.5px 0"},"filled"===e.variant&&(0,c.Z)({borderColor:"transparent"},"inherit"!==e.color&&(0,c.Z)({},"grey"===e.color?{color:(t.vars||t).palette.grey[50],backgroundColor:(t.vars||t).palette.grey[400]}:{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main})),"outlined"===e.variant&&(0,c.Z)({boxShadow:"none",backgroundColor:"transparent"},"inherit"!==e.color&&(0,c.Z)({},"grey"===e.color?{borderColor:(t.vars||t).palette.grey[400]}:{borderColor:(t.vars||t).palette[e.color].main}))))),J=r.forwardRef((function(e,t){const o=(0,f.Z)({props:e,name:"MuiTimelineDot"}),{className:n,color:r="grey",variant:i="filled"}=o,s=(0,p.Z)(o,z),a=(0,c.Z)({},o,{color:r,variant:i}),l=(e=>{const{color:t,variant:o,classes:n}=e,r={root:["root",o,"inherit"!==t&&`${o}${(0,u.Z)(t)}`]};return(0,Z.Z)(r,q,n)})(a);return(0,C.jsx)(B,(0,c.Z)({className:(0,m.Z)(l.root,n),ownerState:a,ref:t},s))})),K=["className"],Q=(0,d.ZP)(U.Z,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${(0,u.Z)(o.position)}`]]}})((({ownerState:e})=>(0,c.Z)({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},"left"===e.position&&{textAlign:"left"}))),V=r.forwardRef((function(e,t){const o=(0,f.Z)({props:e,name:"MuiTimelineOppositeContent"}),{className:n}=o,i=(0,p.Z)(o,K),{position:s}=r.useContext(v),a=(0,c.Z)({},o,{position:s||"left"}),l=(e=>{const{position:t,classes:o}=e,n={root:["root",`position${(0,u.Z)(t)}`]};return(0,Z.Z)(n,R,o)})(a);return(0,C.jsx)(Q,(0,c.Z)({component:"div",className:(0,m.Z)(l.root,n),ownerState:a,ref:t},i))}));V.muiName="TimelineOppositeContent";const X=V,Y=function(e){var t=e.nodes;return r.createElement(T,{position:"alternate"},t&&t.map((function(e){return r.createElement(O,{key:e.content},r.createElement(H,{sx:{px:2}},r.createElement(U.Z,{component:"span"},e.content),r.createElement(U.Z,{variant:"h6"},e.desc)),r.createElement(k,null,r.createElement(J,{color:"primary",variant:"outlined"}),r.createElement(G,null)),r.createElement(X,null))})))};var ee=o(5722),te=o(30),oe=o(9144),ne=function(e){var t=e.label,o=e.value;return r.createElement(r.Fragment,null,r.createElement(oe.Z,{sx:{display:"flex",alignItems:"baseline"}},r.createElement(U.Z,{component:"span",variant:"h6"},"".concat(t,": ")),r.createElement(U.Z,{component:"span",variant:"body1",color:"text.secondary",sx:{px:1}},o)))};const re=function(){var e,t=(0,i.UO)().shcoolName,o=(0,s.C)((function(e){return e.schoolLesson})),n=o.filteredData.schools,a=o.filters,l=a.country,c=a.camp,p=null===(e=n[t])||void 0===e?void 0:e.total;return r.createElement(te.ZP,{item:!0,sm:4,md:7},r.createElement(ee.Z,{sx:{px:4,py:8,display:"flex",flexDirection:"column",height:"100%"}},r.createElement(oe.Z,{spacing:2,sx:{px:4}},r.createElement(ne,{label:"Shcool",value:t}),r.createElement(ne,{label:"Country",value:l}),r.createElement(ne,{label:"Camp",value:c}),r.createElement(ne,{label:"Lessons",value:p}))))},ie=function(){var e,t=(0,i.UO)().shcoolName,o=(0,r.useState)([]),c=(0,n.Z)(o,2),p=c[0],m=c[1],u=null===(e=(0,s.C)((function(e){return e.schoolLesson})).filteredData.schools[t])||void 0===e?void 0:e.months;return(0,r.useEffect)((function(){var e=[];for(var t in u)u[t]&&e.push({content:t,desc:u[t]});m(e)}),[u]),r.createElement(a.Z,{component:"main",maxWidth:"md",sx:{mt:4,mb:4,alignContent:"center"}},r.createElement(te.ZP,{container:!0},r.createElement(re,null),r.createElement(te.ZP,{item:!0,xs:12,sm:8,md:5},r.createElement(ee.Z,{sx:{p:2,display:"flex",flexDirection:"column",height:"100%"}},r.createElement(l.Z,{sx:{my:8,mx:4,alignItems:"center"}},p&&r.createElement(Y,{nodes:p}))))))}}}]);