"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[42],{4373:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(4165),a=t(5861),o=t(9439),i=t(2791),s=t(5987),c=t(1243),l=["params","urlParams"],d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,o=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>2?o[2]:void 0,(t=o.length>1&&void 0!==o[1]?o[1]:{}).params,t.urlParams,(0,s.Z)(t,l),e.next=5,(0,c.Z)({method:n.method,url:"".concat("","/").concat(n.endpoint,"/").concat(a),data:t});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=d,p=function(e){var n=(0,i.useState)(null),t=(0,o.Z)(n,2),s=t[0],c=t[1],l=(0,i.useState)(""),d=(0,o.Z)(l,2),p=d[0],h=d[1],f=(0,i.useState)(!1),m=(0,o.Z)(f,2),x=m[0],Z=m[1],g=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a,o,i=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:"",c(null),Z(!0),h(""),n.prev=4,n.next=7,u(e,t,a);case 7:o=n.sent,c(o.data),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(4),h(n.t0.message);case 14:return n.prev=14,Z(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[4,11,14,17]])})));return function(e){return n.apply(this,arguments)}}();return{call:g,response:s,error:p,isLoading:x}}},2042:function(e,n,t){t.r(n),t.d(n,{default:function(){return de}});var r,a=t(9439),o=t(168),i=t(2791),s=t(7630),c=t(4395),l=t(4554),d=t(4663),u=t(6098),p=t(7607),h=t(2167),f=t(4035),m=t(4371),x=t(2155),Z=t(3512),g=t(5652),j=t(6148),v=t(184),b=(0,s.ZP)(c.Z)({background:"#F5F5F5",boxShadow:"none"}),w=(0,s.ZP)(l.Z)({background:"#EAF1FB",marginLeft:"10%",borderRadius:8,display:"flex",alignItems:"center",minWidth:690,maxWidth:720,height:50,justifyContent:"space-between",padding:"0% 1%","& > div":{width:"100%",padding:"0% 3%"}}),y=(0,s.ZP)(l.Z)({width:"100%",display:"flex",justifyContent:"end","& > svg":{marginLeft:"5%"}}),P=function(e){var n=e.toggleDrawer;return(0,v.jsx)(b,{position:"static",children:(0,v.jsxs)(d.Z,{children:[(0,v.jsx)(p.Z,{color:"action",onClick:n}),(0,v.jsx)("img",{src:j.Pv,alt:"logo",style:{width:110,marginLeft:15}}),(0,v.jsxs)(w,{children:[(0,v.jsx)(h.Z,{color:"action"}),(0,v.jsx)(u.ZP,{}),(0,v.jsx)(f.Z,{color:"action"})]}),(0,v.jsxs)(y,{children:[(0,v.jsx)(m.Z,{color:"action"}),(0,v.jsx)(x.Z,{color:"action"}),(0,v.jsx)(Z.Z,{color:"action"}),(0,v.jsx)(g.Z,{color:"action"})]})]})})},S=t(9953),C=t(6151),k=t(493),D=t(4852),E=t(4165),F=t(5861),T=t(4942),O=t(1413),R=t(9818),B=t(890),L=t(539),M=t(6739),_=t(4220),I=t(4373),W=t(5372),z={height:"90%",width:"80%",maxWidth:"100%",maxHeight:"100%",boxShadow:"none",borderRadius:"10px 10px 0 0"},A=(0,s.ZP)(l.Z)({display:"flex",justifyContent:"space-between",padding:"10px 15px",backgroundColor:"#f2f6fc","& > p":{fontSize:14,fontWeight:700}}),Y=(0,s.ZP)(l.Z)({display:"flex",flexDirection:"column",padding:"0 15px","& > div ":{fontSize:14,borderBottom:"1px solid #F5F5F5",marginTop:10}}),H=(0,s.ZP)(C.Z)({background:"#0B57D0",color:"#ffffff",fontWeight:500,textTransform:"none",borderRadius:18,width:100}),U=(0,s.ZP)(l.Z)({display:"flex",justifyContent:"space-between",padding:"20px 15px",alignItems:"center"}),G=function(e){var n=e.open,t=e.setOpenDrawer,r=(0,i.useState)({}),o=(0,a.Z)(r,2),s=o[0],c=o[1],l=(0,I.Z)(W.Y.saveSentEmails),d=(0,I.Z)(W.Y.saveDraftEmails),p={Username:"codeedu1278@yopmail.com",Password:"187C6D1381F43EC400D8F79A4EEFC271631A",Host:"smtp.elasticemail.com",Port:2525},h=function(e){c((0,O.Z)((0,O.Z)({},s),{},(0,T.Z)({},e.target.name,e.target.value)))},f=function(){var e=(0,F.Z)((0,E.Z)().mark((function e(n){var r;return(0,E.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),window.Email&&window.Email.send((0,O.Z)((0,O.Z)({},p),{},{To:s.to,From:"shrishaildolle7878@gmail.com",Subject:s.subject,Body:s.body})).then((function(e){return alert(e)})),r={to:s.to,from:"shrishaildolle7878@gmail.com",subject:s.subject,body:s.body,date:new Date,image:"",name:"Code for Interview",starred:!1,type:"sent"},l.call(r),l.error||(t(!1),c({}));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,v.jsxs)(R.Z,{open:n,PaperProps:{sx:z},children:[(0,v.jsxs)(A,{children:[(0,v.jsx)(B.Z,{children:"New Message"}),(0,v.jsx)(M.Z,{fontSize:"small",onClick:function(e){return function(e){e.preventDefault();var n={to:s.to,from:"shrishaildolle7878@gmail.com",subject:s.subject,body:s.body,date:new Date,image:"",name:"Code for Interview",starred:!1,type:"drafts"};d.call(n),d.error||(t(!1),c({}))}(e)}})]}),(0,v.jsxs)(Y,{children:[(0,v.jsx)(u.ZP,{placeholder:"Recipients",name:"to",onChange:function(e){return h(e)},value:s.to}),(0,v.jsx)(u.ZP,{placeholder:"Subject",name:"subject",onChange:function(e){return h(e)},value:s.subject})]}),(0,v.jsx)(L.Z,{multiline:!0,rows:20,sx:{"& .MuiOutlinedInput-notchedOutline":{border:"none"}},name:"body",onChange:function(e){return h(e)},value:s.body}),(0,v.jsxs)(U,{children:[(0,v.jsx)(H,{onClick:function(e){return f(e)},children:"Send"}),(0,v.jsx)(_.Z,{onClick:function(){return t(!1)}})]})]})},N=t(5806),q=t(4287),J=t(3026),K=t(2192),Q=t(3513),V=t(9825),X=t(8265),$=[{name:"inbox",title:"Inbox",icon:q.Z,path:N._.emails.path},{name:"starred",title:"Starred",icon:J.Z,path:N._.emails.path},{name:"sent",title:"Sent",icon:K.Z,path:N._.emails.path},{name:"drafts",title:"Drafts",icon:Q.Z,path:N._.emails.path},{name:"bin",title:"Bin",icon:V.Z,path:N._.emails.path},{name:"allmail",title:"All Mail",icon:X.Z,path:N._.emails.path}],ee=t(5905),ne=t(7689),te=t(1087),re=(0,s.ZP)(C.Z)({backgroundColor:"#c2e7ff",color:"#001d35",padding:16,borderRadius:16,minWidth:150,textTransform:"none"}),ae=(0,s.ZP)(l.Z)({padding:8,"& > ul":{padding:"10px 0 0 5px",fontSize:14,fontweight:500,cursor:"pointer","& > a":{textDecoration:"none",color:"inherit"}},"& > ul > a > li > svg":{marginRight:25}}),oe=function(){var e=(0,i.useState)(!1),n=(0,a.Z)(e,2),t=n[0],r=n[1],o=(0,ne.UO)().type;return(0,v.jsxs)(ae,{children:[(0,v.jsxs)(re,{onClick:function(){r(!0)},children:[(0,v.jsx)(ee.Z,{style:{marginRight:10}}),"Compose"]}),(0,v.jsx)(k.Z,{children:$.map((function(e){return(0,v.jsx)(te.OL,{to:"".concat(N._.emails.path,"/").concat(e.name),children:(0,v.jsxs)(D.ZP,{style:o===e.name.toLowerCase()?{backgroundColor:"#d3e3fd",borderRadius:"0 16px 16px 0"}:{},children:[(0,v.jsx)(e.icon,{fontSize:"small"}),e.title]})},e.name)}))}),(0,v.jsx)(G,{open:t,setOpenDrawer:r})]})},ie=(0,s.ZP)(S.ZP)({marginTop:"54px"}),se=function(e){var n=e.toggleDrawer,t=e.openDrawer;return(0,v.jsx)(ie,{anchor:"left",open:t,onClose:n,hideBackdrop:!0,ModalProps:{keepMounted:!0},variant:"persistent",sx:{"& .MuiDrawer-paper":{width:250,borderRight:"none",background:"#f5F5F5",marginTop:"64px",height:"calc(100vh - 64px)"}},children:(0,v.jsx)(oe,{})})},ce=t(2247),le=(0,s.ZP)(l.Z)(r||(r=(0,o.Z)(["\n    display: flex;\n"]))),de=function(){var e=(0,i.useState)(!0),n=(0,a.Z)(e,2),t=n[0],r=n[1],o=function(){r((function(e){return!e}))};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(P,{toggleDrawer:o}),(0,v.jsxs)(le,{children:[(0,v.jsx)(se,{toggleDrawer:o,openDrawer:t}),(0,v.jsx)(i.Suspense,{fallback:(0,v.jsx)(ce.Z,{}),children:(0,v.jsx)(ne.j3,{context:{openDrawer:t}})})]})]})}},5372:function(e,n,t){t.d(n,{Y:function(){return r}});var r={saveSentEmails:{endpoint:"save",method:"POST"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},toggleStarredMails:{endpoint:"starred",method:"POST"},deleteEmails:{endpoint:"delete",method:"DELETE"},moveEmailsToBin:{endpoint:"bin",method:"POST"}}}}]);
//# sourceMappingURL=42.74198a36.chunk.js.map