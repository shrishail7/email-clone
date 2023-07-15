"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[830],{4830:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var i=n(9439),r=n(2791),a=n(7689),o=n(4373),l=n(5372),c=n(4554),d=n(4942),s=n(3366),u=n(7462),h=n(8182),p=n(4419),v=n(2065),f=n(4036),m=n(7630),g=n(5158),x=n(2930),Z=n(2982),b=n(5878),w=n(1217);function S(e){return(0,w.Z)("PrivateSwitchBase",e)}(0,b.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var k=n(184),y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],j=(0,m.ZP)(Z.Z)((function(e){var t=e.ownerState;return(0,u.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),C=(0,m.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),R=r.forwardRef((function(e,t){var n=e.autoFocus,r=e.checked,a=e.checkedIcon,o=e.className,l=e.defaultChecked,c=e.disabled,d=e.disableFocusRipple,v=void 0!==d&&d,m=e.edge,Z=void 0!==m&&m,b=e.icon,w=e.id,R=e.inputProps,z=e.inputRef,I=e.name,P=e.onBlur,E=e.onChange,L=e.onFocus,B=e.readOnly,F=e.required,M=void 0!==F&&F,T=e.tabIndex,A=e.type,D=e.value,O=(0,s.Z)(e,y),N=(0,g.Z)({controlled:r,default:Boolean(l),name:"SwitchBase",state:"checked"}),V=(0,i.Z)(N,2),W=V[0],_=V[1],H=(0,x.Z)(),q=c;H&&"undefined"===typeof q&&(q=H.disabled);var Y="checkbox"===A||"radio"===A,G=(0,u.Z)({},e,{checked:W,disabled:q,disableFocusRipple:v,edge:Z}),U=function(e){var t=e.classes,n=e.checked,i=e.disabled,r=e.edge,a={root:["root",n&&"checked",i&&"disabled",r&&"edge".concat((0,f.Z)(r))],input:["input"]};return(0,p.Z)(a,S,t)}(G);return(0,k.jsxs)(j,(0,u.Z)({component:"span",className:(0,h.Z)(U.root,o),centerRipple:!0,focusRipple:!v,disabled:q,tabIndex:null,role:void 0,onFocus:function(e){L&&L(e),H&&H.onFocus&&H.onFocus(e)},onBlur:function(e){P&&P(e),H&&H.onBlur&&H.onBlur(e)},ownerState:G,ref:t},O,{children:[(0,k.jsx)(C,(0,u.Z)({autoFocus:n,checked:r,defaultChecked:l,className:U.input,disabled:q,id:Y?w:void 0,name:I,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;_(t),E&&E(e,t)}},readOnly:B,ref:z,required:M,ownerState:G,tabIndex:T,type:A},"checkbox"===A&&void 0===D?{}:{value:D},R)),W?a:b]}))})),z=n(9201),I=(0,z.Z)((0,k.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),P=(0,z.Z)((0,k.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),E=(0,z.Z)((0,k.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),L=n(1046);function B(e){return(0,w.Z)("MuiCheckbox",e)}var F=(0,b.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),M=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],T=(0,m.ZP)(R,{shouldForwardProp:function(e){return(0,m.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,f.Z)(n.color))]]}})((function(e){var t,n=e.theme,i=e.ownerState;return(0,u.Z)({color:(n.vars||n).palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===i.color?n.vars.palette.action.activeChannel:n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,v.Fq)("default"===i.color?n.palette.action.active:n.palette[i.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&(t={},(0,d.Z)(t,"&.".concat(F.checked,", &.").concat(F.indeterminate),{color:(n.vars||n).palette[i.color].main}),(0,d.Z)(t,"&.".concat(F.disabled),{color:(n.vars||n).palette.action.disabled}),t))})),A=(0,k.jsx)(P,{}),D=(0,k.jsx)(I,{}),O=(0,k.jsx)(E,{}),N=r.forwardRef((function(e,t){var n,i,a=(0,L.Z)({props:e,name:"MuiCheckbox"}),o=a.checkedIcon,l=void 0===o?A:o,c=a.color,d=void 0===c?"primary":c,v=a.icon,m=void 0===v?D:v,g=a.indeterminate,x=void 0!==g&&g,Z=a.indeterminateIcon,b=void 0===Z?O:Z,w=a.inputProps,S=a.size,y=void 0===S?"medium":S,j=a.className,C=(0,s.Z)(a,M),R=x?b:m,z=x?b:l,I=(0,u.Z)({},a,{color:d,indeterminate:x,size:y}),P=function(e){var t=e.classes,n=e.indeterminate,i=e.color,r={root:["root",n&&"indeterminate","color".concat((0,f.Z)(i))]},a=(0,p.Z)(r,B,t);return(0,u.Z)({},t,a)}(I);return(0,k.jsx)(T,(0,u.Z)({type:"checkbox",inputProps:(0,u.Z)({"data-indeterminate":x},w),icon:r.cloneElement(R,{fontSize:null!=(n=R.props.fontSize)?n:y}),checkedIcon:r.cloneElement(z,{fontSize:null!=(i=z.props.fontSize)?i:y}),ownerState:I,ref:t,className:(0,h.Z)(P.root,j)},C,{classes:P}))})),V=n(493),W=n(3433),_=n(890),H=(0,z.Z)((0,k.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),q=(0,z.Z)((0,k.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),Y=n(5806),G=(0,m.ZP)(c.Z)({padding:"0 0 0 10px",background:"#f2f6c6",cursor:"pointer",display:"flex",alignItems:"center","& > div":{display:"flex",width:"100%","& > p":{fontsize:14}}}),U=(0,m.ZP)(_.Z)({fontSize:"12px !important",background:"#ddd",color:"#222",padding:"0 4px",borderRadius:4,marginRight:6}),J=(0,m.ZP)(_.Z)({marginLeft:"auto",marginRight:20,fontSize:12,color:"#5F636F"}),K=function(e){var t=e.email,n=e.setStarredEmail,i=e.selectedEmails,r=e.setSelectedEmails,d=(0,o.Z)(l.Y.toggleStarredMails),s=(0,a.s0)(),u=function(){d.call({id:t._id,value:!t.starred}),n((function(e){return!e}))};return(0,k.jsxs)(G,{children:[(0,k.jsx)(N,{size:"small",checked:i.includes(t._id),onChange:function(){i.includes(t._id)?r((function(e){return e.filter((function(e){return e!==t._id}))})):r((function(e){return[].concat((0,W.Z)(e),[t._id])}))}}),t.starred?(0,k.jsx)(H,{fontSize:"small",style:{marginRight:10},onClick:function(){return u()}}):(0,k.jsx)(q,{fontSize:"small",style:{marginRight:10},onClick:function(){return u()}}),(0,k.jsxs)(c.Z,{onClick:function(){return s(Y._.view.path,{state:{email:t}})},children:[(0,k.jsxs)(_.Z,{style:{width:200},children:["To:",t.to.split("@")[0]]}),(0,k.jsx)(U,{children:"Inbox"}),(0,k.jsxs)(_.Z,{children:[t.subject," ",t.body&&"-"," ",t.body]}),(0,k.jsxs)(J,{children:[new window.Date(t.date).getDate(),"\xa0",new window.Date(t.date).toLocaleString("default",{month:"long"})]})]})]})},Q=n(4220);function X(e){return(0,w.Z)("MuiDivider",e)}(0,b.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var $=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],ee=(0,m.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,n=e.ownerState;return(0,u.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},n.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},n.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,v.Fq)(t.palette.divider,.08)},"inset"===n.variant&&{marginLeft:72},"middle"===n.variant&&"horizontal"===n.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===n.variant&&"vertical"===n.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===n.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},n.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.ownerState;return(0,u.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(function(e){var t=e.theme,n=e.ownerState;return(0,u.Z)({},n.children&&"vertical"!==n.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}})}),(function(e){var t=e.theme,n=e.ownerState;return(0,u.Z)({},n.children&&"vertical"===n.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}})}),(function(e){var t=e.ownerState;return(0,u.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),te=(0,m.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var n=e.ownerState;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,n=e.ownerState;return(0,u.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===n.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),ne=r.forwardRef((function(e,t){var n=(0,L.Z)({props:e,name:"MuiDivider"}),i=n.absolute,r=void 0!==i&&i,a=n.children,o=n.className,l=n.component,c=void 0===l?a?"div":"hr":l,d=n.flexItem,v=void 0!==d&&d,f=n.light,m=void 0!==f&&f,g=n.orientation,x=void 0===g?"horizontal":g,Z=n.role,b=void 0===Z?"hr"!==c?"separator":void 0:Z,w=n.textAlign,S=void 0===w?"center":w,y=n.variant,j=void 0===y?"fullWidth":y,C=(0,s.Z)(n,$),R=(0,u.Z)({},n,{absolute:r,component:c,flexItem:v,light:m,orientation:x,role:b,textAlign:S,variant:j}),z=function(e){var t=e.absolute,n=e.children,i=e.classes,r=e.flexItem,a=e.light,o=e.orientation,l=e.textAlign,c={root:["root",t&&"absolute",e.variant,a&&"light","vertical"===o&&"vertical",r&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,p.Z)(c,X,i)}(R);return(0,k.jsx)(ee,(0,u.Z)({as:c,className:(0,h.Z)(z.root,o),role:b,ref:t,ownerState:R},C,{children:a?(0,k.jsx)(te,{className:z.wrapper,ownerState:R,children:a}):null}))})),ie=(0,m.ZP)(c.Z)({display:"flex",flexDirection:"column",width:"100%",alignItems:"center",marginTop:50,opacity:.8}),re=(0,m.ZP)(ne)({width:"100%",marginTop:10}),ae=function(e){var t=e.message;return(0,k.jsxs)(ie,{children:[(0,k.jsx)(_.Z,{children:t.heading}),(0,k.jsx)(_.Z,{children:t.subHeading}),(0,k.jsx)(re,{})]})},oe=n(6148),le=function(){var e,t,n=(0,r.useState)(!1),d=(0,i.Z)(n,2),s=d[0],u=d[1],h=(0,r.useState)([]),p=(0,i.Z)(h,2),v=p[0],f=p[1],m=(0,a.bx)().openDrawer,g=(0,a.UO)().type,x=(0,o.Z)(l.Y.getEmailFromType),Z=(0,o.Z)(l.Y.deleteEmails),b=(0,o.Z)(l.Y.moveEmailsToBin);(0,r.useEffect)((function(){x.call({},g)}),[g,s]);return(0,k.jsxs)(c.Z,{style:m?{marginLeft:250,width:"100%"}:{width:"100%"},children:[(0,k.jsxs)(c.Z,{style:{padding:"20px 10px 0 10px",display:"flex",alignItems:"center"},children:[(0,k.jsx)(N,{size:"small",onChange:function(e){return function(e){if(e.target.checked){var t,n=null===x||void 0===x||null===(t=x.response)||void 0===t?void 0:t.map((function(e){return e._id}));f(n)}else f([])}(e)}}),(0,k.jsx)(Q.Z,{onClick:function(e){return"bin"===g?Z.call(v):b.call(v),void u((function(e){return!e}))}})]}),(0,k.jsx)(V.Z,{children:null===x||void 0===x||null===(e=x.response)||void 0===e?void 0:e.map((function(e){return(0,k.jsx)(K,{email:e,setStarredEmail:u,selectedEmails:v,setSelectedEmails:f},e.id)}))}),0===(null===x||void 0===x||null===(t=x.response)||void 0===t?void 0:t.length)&&(0,k.jsx)(ae,{message:oe.Fr[g]})]})}},4373:function(e,t,n){n.d(t,{Z:function(){return h}});var i=n(4165),r=n(5861),a=n(9439),o=n(2791),l=n(5987),c=n(1243),d=["params","urlParams"],s=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){var n,r,a=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>2?a[2]:void 0,(n=a.length>1&&void 0!==a[1]?a[1]:{}).params,n.urlParams,(0,l.Z)(n,d),e.next=5,(0,c.Z)({method:t.method,url:"".concat("","/").concat(t.endpoint,"/").concat(r),data:n});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=s,h=function(e){var t=(0,o.useState)(null),n=(0,a.Z)(t,2),l=n[0],c=n[1],d=(0,o.useState)(""),s=(0,a.Z)(d,2),h=s[0],p=s[1],v=(0,o.useState)(!1),f=(0,a.Z)(v,2),m=f[0],g=f[1],x=function(){var t=(0,r.Z)((0,i.Z)().mark((function t(n){var r,a,o=arguments;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:"",c(null),g(!0),p(""),t.prev=4,t.next=7,u(e,n,r);case 7:a=t.sent,c(a.data),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),p(t.t0.message);case 14:return t.prev=14,g(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[4,11,14,17]])})));return function(e){return t.apply(this,arguments)}}();return{call:x,response:l,error:h,isLoading:m}}},5372:function(e,t,n){n.d(t,{Y:function(){return i}});var i={saveSentEmails:{endpoint:"save",method:"POST"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},toggleStarredMails:{endpoint:"starred",method:"POST"},deleteEmails:{endpoint:"delete",method:"DELETE"},moveEmailsToBin:{endpoint:"bin",method:"POST"}}}}]);
//# sourceMappingURL=830.fc7ea696.chunk.js.map