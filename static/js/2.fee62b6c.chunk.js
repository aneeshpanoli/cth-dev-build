(this.webpackJsonpcivictechhub=this.webpackJsonpcivictechhub||[]).push([[2],{754:function(e,t,a){"use strict";a.d(t,"a",(function(){return S}));var r=a(9),n=a(0),c=a.n(n),o=a(187),l=a(626),s=a(239),i=a(122),u=a(274),m=a.n(u),d=a(147),p=a(622),f=a(196),b=a(625),E=a(121),j=(a(781),a(395)),g=a(238),v=a(28),h=a(18),_=a(13),y=a(58),w=a(94),O=a.n(w),k=a(249),x=a.n(k),P=a(653),C=a.n(P),I=a(321),T=a.n(I),D=Object(E.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)}}}));function S(e){D();var t=c.a.useState(!1),a=Object(r.a)(t,2),n=a[0],u=a[1],E=Object(j.a)().authData,w=c.a.useState(!1),k=Object(r.a)(w,2),P=k[0],I=k[1],S=c.a.useState(!1),N=Object(r.a)(S,2),A=N[0],z=N[1],R=c.a.useState(!0),F=Object(r.a)(R,2),W=F[0],q=F[1],B=Object(g.a)(),J=Object(v.f)(),G=function(){var t={index:e.selectedProject._index,id:e.selectedProject._id},a=new FormData;a.append("params",JSON.stringify(t)),Object(h.i)("Token ".concat(E.key)).post("/d/",a).then((function(e){console.log(e.data),J.goBack()})).catch((function(e){console.log(e)}))},U=function(){var t={status:"projectapprove",index:e.selectedProject._index,id:e.selectedProject._id,q:{approved:"yes"}},a=new FormData;a.append("params",JSON.stringify(t));var r=Object(y.c)(e.selectedProject._id,e.selectedProject._source.title.replace(/-/g," "));Object(h.q)(a,E.key,J,e.selectedProject._source.title,(function(){return Object(h.l)(r,B,_.j,J)}))};c.a.useEffect((function(){window.scrollTo(0,0),I(E&&E.user&&"yes"===E._source.staff||e.selectedProject&&e.selectedProject._source.owners&&E.user&&e.selectedProject._source.owners===E.user.id),z(E&&E.user&&"yes"===E._source.staff),q(e.selectedProject&&"yes"===e.selectedProject._source.approved)}),[E,e.selectedProject]);var L=c.a.useRef(null),H=function(e){L.current&&L.current.contains(e.target)||u(!1)};function Y(e){"Tab"===e.key&&(e.preventDefault(),u(!1))}var K=c.a.useRef(n);function Y(e){"Tab"===e.key&&(e.preventDefault(),u(!1))}return c.a.useEffect((function(){!0===K.current&&!1===n&&L.current.focus(),K.current=n}),[n]),c.a.useEffect((function(){!0===K.current&&!1===n&&L.current.focus(),K.current=n}),[n]),c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{size:"small",ref:L,"aria-controls":n?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){u((function(e){return!e}))}},c.a.createElement(m.a,null)),c.a.createElement(p.a,{open:n,anchorEl:L.current,role:void 0,transition:!0},(function(e){var t=e.TransitionProps,a=e.placement;return c.a.createElement(s.a,Object.assign({},t,{style:{transformOrigin:"bottom"===a?"center top":"center bottom"}}),c.a.createElement(i.a,{style:{zIndex:999}},c.a.createElement(l.a,{onClickAway:H},c.a.createElement(b.a,{autoFocusItem:n,id:"menu-list-grow",onKeyDown:Y},P?c.a.createElement(f.a,{onClick:H,dense:!0},c.a.createElement(d.a,{color:"primary",startIcon:c.a.createElement(C.a,null),variant:"text",size:"small",onClick:function(){return J.push("/edit-project")}},"Edit")):null,A?c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{onClick:H,dense:!0},c.a.createElement(d.a,{disabled:!!W,color:"primary",startIcon:W?c.a.createElement(x.a,null):c.a.createElement(O.a,null),variant:"text",size:"small",onClick:U},W?"Approved":"Approve")),c.a.createElement(f.a,{onClick:H,dense:!0},c.a.createElement(d.a,{color:"primary",startIcon:c.a.createElement(T.a,null),variant:"text",size:"small",onClick:G},"Delete"))):null))))})))}},756:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(50),n=a(0),c=a.n(n),o=a(121),l=a(75),s=a(864),i=a.n(s),u=a(147),m=Object(o.a)((function(e){return{root:{flexGrow:1,padding:e.spacing(2),textAlign:"left",color:e.palette.text.secondary,wordWrap:"break-word",backgroundColor:e.palette.secondary.main,borderRadius:10}}}));function d(e){var t=e.selectedProject,a=m();return c.a.createElement(l.a,{item:!0,xs:12,sm:12,className:a.root},t&&t._source.links?function(){var e=Object(r.a)(t._source.links);e.push(t._source.url?t._source.url:null);var a,n=[];return e.forEach((function(e,t){try{a=new URL(e).hostname.slice(0,31),n.push(c.a.createElement(u.a,{key:t,startIcon:c.a.createElement(i.a,null),target:"_blank",size:"small",href:e,style:{margin:5}},a))}catch(r){}})),n}():"This project has no links")}},757:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),c=a(121),o=a(75),l=a(865),s=a.n(l),i=Object(c.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function u(e){var t=e.selectedProject;i();return n.a.createElement(o.a,{item:!0,xs:12,sm:12},t&&t._source.video?n.a.createElement(s.a,{width:"100%",url:t._source.video}):"This project has no videos")}},758:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(0),n=a.n(r),c=a(121),o=a(75),l=a(99),s=Object(c.a)((function(e){return{root:{flexGrow:1,padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function i(e){var t=e.selectedProject,a=s();return n.a.createElement(o.a,{item:!0,xs:12,sm:12,className:a.root},t&&t._source.builtWith&&t._source.builtWith[0]?function(){var e=[];return t._source.builtWith.forEach((function(t){e.push(n.a.createElement(l.a,{size:"small",key:t,label:t.slice(0,38),className:a.chip,style:{margin:3}}))})),e}():"No tags found")}},759:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var r=a(9),n=a(0),c=a.n(n),o=a(883),l=a.n(o),s=(a(810),a(147)),i=a(395),u=a(238),m=a(18),d=a(58),p=a(13);function f(e){var t=Object(i.a)().authData,a=Object(u.a)(),n=c.a.useState(""),o=Object(r.a)(n,2),f=o[0],b=o[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{value:f,onChange:function(e){b(e)}}),c.a.createElement(s.a,{variant:"contained",color:"secondary",style:{margin:"0.5rem"},onClick:function(){if(f&&!(f.length<9)){var r={index:"comments",q:{projectId:e.projectId,userId:t.user.id,username:t.user.username,comments:f,createdAt:new Date}},n=new FormData;n.append("params",JSON.stringify(r));var c=Object(d.d)(e.projectId,"comments");Object(m.c)(n,t.key,(function(){return Object(m.o)(c,a,p.c)})),b("")}}},"Post comment"),c.a.createElement(s.a,{variant:"contained",color:"secondary",style:{margin:"0.5rem"},onClick:function(){b("")}},"Cancel"))}},768:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var r=a(9),n=a(0),c=a.n(n),o=(a(810),a(395)),l=a(238),s=a(18),i=a(58),u=a(13),m=a(23),d=a(246),p=a(734),f=a.n(p),b=a(811),E=a(629),j=a(75),g=a(985),v=a.n(g),h=a(94),_=a.n(h),y=a(147);function w(e){var t=Object(o.a)().commentsData,a=Object(l.a)(),n=c.a.useState([]),p=Object(r.a)(n,2),g=p[0],h=p[1];return c.a.useEffect((function(){if(e.projectId){var t=Object(i.d)(e.projectId,"comments");Object(s.o)(t,a,u.c)}}),[]),c.a.useEffect((function(){h(t)}),[t]),c.a.createElement(j.a,{container:!0,spacing:0},g&&g[0]?g.map((function(e,t){return c.a.createElement(j.a,{item:!0,xs:12,key:t},c.a.createElement(j.a,{item:!0,xs:12},c.a.createElement(m.b,{to:"/@".concat(e._source.username)},e._source.username),c.a.createElement(E.a,{title:new Date(e._source.createdAt).toLocaleString("default",{dateStyle:"long",timeStyle:"long"}),placement:"top"},c.a.createElement("span",null," ","commented ",Object(d.a)(e._source.createdAt)))),c.a.createElement(b.a,{variant:"inset"}),c.a.createElement(j.a,{container:!0,spacing:0,direction:"row"},c.a.createElement(j.a,{item:!0,xs:2,md:1,sm:1},c.a.createElement(j.a,{item:!0,xs:12},c.a.createElement(y.a,{startIcon:c.a.createElement(_.a,null),size:"small"},"")),c.a.createElement(j.a,{item:!0,xs:12},c.a.createElement(y.a,{startIcon:c.a.createElement(v.a,null),size:"small"},""))),c.a.createElement(j.a,{item:!0,xs:10,md:11,sm:11},f()(e._source.comments))))})):null)}},775:function(e,t,a){"use strict";a.d(t,"a",(function(){return me}));var r=a(0),n=a.n(r),c=a(121),o=a(75),l=a(697),s=a(640),i=a(827),u=a.n(i),m=a(147),d=a(28),p=a(238),f=a(395),b=a(18),E=a(13),j=a(58),g=a(249),v=a.n(g),h=a(828),_=a.n(h),y=a(246),w=Object(c.a)((function(e){return{project:{width:e.spacing(6),height:e.spacing(6),fontWeight:700},paper:{marginRight:e.spacing(3)}}}));function O(e){var t=e.selectedProject,a=Object(d.f)(),r=Object(p.a)(),c=Object(f.a)(),l=c.otherUserData,i=c.authData,g=w();n.a.useEffect((function(){t&&t._source.owners?Object(b.f)(i,"id",t._source.owners,r,E.f):r(Object(E.f)(null))}),[]);var h=function(e,n){var c={email:t._source.proof[1],firstName:t._source.proof[2],status:e,index:t._index,id:t._id,q:n},o=new FormData;o.append("params",JSON.stringify(c));var l=Object(j.c)(t._id,t._source.title.replace(/-/g," "));Object(b.q)(o,i.key,a,t._source.title,(function(){return Object(b.l)(l,r,E.j,a)}))};return n.a.createElement(o.a,{container:!0,alignItems:"center",style:{marginBottom:"1rem"}},n.a.createElement(o.a,{item:!0,xs:3,sm:2,md:2,align:"right"},n.a.createElement(m.a,{disabled:!l,onClick:function(e){a.push("/@"+l._source.username)},style:{borderRadius:50}},n.a.createElement(s.a,{variant:"circle",color:"secondary",className:g.project,alt:l?l._source.first_name:null},l&&l._source&&l._source.avatar?n.a.createElement("img",{src:l._source.avatar,style:{position:"absolute",width:"3rem",height:"3rem",left:-4,top:5}}):null))),t&&l?n.a.createElement(o.a,{item:!0,xs:9,sm:10,md:10,align:"left"},n.a.createElement("div",{style:{fontWeight:400}},l?l._source.first_name+" "+l._source.last_name:"claim project"),n.a.createElement("div",{style:{fontWeight:400,color:"grey"}},"Last updated: "+Object(y.a)(t._source.updatedAt))):null,t&&!l?n.a.createElement(o.a,{item:!0,xs:9,sm:10,md:10,align:"left"},n.a.createElement(m.a,{disabled:"no"!==t._source.claimed,startIcon:n.a.createElement(u.a,null),disableElevation:!0,color:"primary",variant:"outlined",style:{textTransform:"none",borderRadius:25},onClick:function(){i&&i.user?a.push("/claim-project"):a.push("/sign-in")}}," ","no"!==t._source.claimed?"Claim pending":"Claim Project")):null,i&&i._source&&"yes"===i._source.staff&&!l&&"no"!==t._source.claimed?n.a.createElement(o.a,{item:!0,xs:9,sm:10,md:10,align:"left"},n.a.createElement(m.a,{startIcon:n.a.createElement(v.a,null),disableElevation:!0,size:"small",color:"primary",variant:"outlined",style:{textTransform:"none",borderRadius:25},onClick:function(){h("projectclaimapprove",{doc:{claimed:"yes",owners:t._source.claimed,claimApprovedAt:new Date,createdAt:new Date,updatedAt:new Date}})}}," ","Approve claim"),n.a.createElement(m.a,{startIcon:n.a.createElement(_.a,null),disableElevation:!0,size:"small",color:"default",variant:"contained",style:{textTransform:"none",borderRadius:25},onClick:function(){h("projectclaimreject",{doc:{claimed:"no",owners:""}})}}," ","Reject claim")):null)}var k=a(696),x=a(829),P=a.n(x),C=a(92),I=a(706),T=a(50),D=a(9),S=a(187),N=a(94),A=a.n(N),z=a(830),R=a.n(z),F=a(629),W=a(692),q=a(319),B=Object(c.a)((function(e){return{root:{flexGrow:1,paddingBottom:"1rem",color:"white"},buttonRound:{backgroundColor:"transparent",color:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.secondary.light,color:"#000"}},redButton:{color:e.palette.danger,backgroundColor:"transparent","&:hover":{backgroundColor:e.palette.secondary.light}},greenButton:{color:e.palette.safe,backgroundColor:"transparent","&:hover":{backgroundColor:e.palette.secondary.light}},buttonTup:{backgroundColor:"transparent",color:e.palette.primary.main,"&:hover":{backgroundColor:"transparent",color:e.palette.safe}},buttonTdown:{backgroundColor:"transparent",color:e.palette.primary.main,"&:hover":{backgroundColor:"transparent",color:e.palette.danger}},buttonIcon:{}}}));function J(e){var t=B(),a=Object(d.f)(),r=Object(p.a)(),c=Object(f.a)().authData,s=n.a.useState([]),i=Object(D.a)(s,2),u=i[0],j=i[1],g=n.a.useState([]),v=Object(D.a)(g,2),h=v[0],_=v[1];n.a.useEffect((function(){e.selectedProject&&e.selectedProject._source.downvotes&&_(e.selectedProject._source.downvotes),e.selectedProject&&e.selectedProject._source.upvotes&&j(e.selectedProject._source.upvotes)}),[e]);var y=function(t,a){var n={status:"projectvote",index:e.selectedProject._index,id:e.selectedProject._id,q:{doc:{upvotes:t,downvotes:a}}},o=new FormData;o.append("params",JSON.stringify(n));Object(b.q)(o,c.key,null,e.selectedProject._source.title,(function(e){return r(Object(E.j)(e))}))};return n.a.useEffect((function(){window.scrollTo(0,0)}),[]),n.a.createElement(k.a,{className:t.root},e.selectedProject?n.a.createElement(l.a,null,n.a.createElement(o.a,{container:!0},n.a.createElement(o.a,{item:!0,md:4,sm:6,xs:12,align:"center"},n.a.createElement(W.a,{color:"secondary",badgeContent:0,anchorOrigin:{horizontal:"left",vertical:"top"}},n.a.createElement(q.a,{disableElevation:!0,variant:"contained",color:"primary",orientation:"vertical",size:"small",disabled:c._source&&c._source.id===e.selectedProject._source.owners},n.a.createElement(F.a,{placement:"top",arrow:!0,title:c._source&&u.includes(c._source.id)?"You upvoted this":"Upvote"},n.a.createElement(S.a,{"aria-label":"Upvote",className:c._source&&u.includes(c._source.id)?"".concat(t.greenButton):"".concat(t.buttonTup),onClick:function(){c.isAuthenticated?u.includes(c._source.id)?y(Object(T.a)(u).filter((function(e){return e!==c._source.id})),Object(T.a)(h)):y([].concat(Object(T.a)(u),[c._source.id]),Object(T.a)(h).filter((function(e){return e!==c._source.id}))):a.push("/sign-in")}},n.a.createElement(A.a,null))),n.a.createElement(m.a,{disabled:!0,variant:"text",style:{fontWeight:700,fontSize:"1.2rem"}},e.selectedProject._source.upvotes&&e.selectedProject._source.downvotes?e.selectedProject._source.upvotes.length-e.selectedProject._source.downvotes.length:0),n.a.createElement(F.a,{arrow:!0,title:c._source&&h.includes(c._source.id)?"You downvoted this":"Downvote"},n.a.createElement(S.a,{"aria-label":"add to favorites",className:c._source&&h.includes(c._source.id)?"".concat(t.redButton):"".concat(t.buttonTdown),onClick:function(){c.isAuthenticated?h.includes(c._source.id)?y(Object(T.a)(u),Object(T.a)(h).filter((function(e){return e!==c._source.id}))):y(Object(T.a)(u).filter((function(e){return e!==c._source.id})),[].concat(Object(T.a)(h),[c._source.id])):a.push("/sign-in")}},n.a.createElement(R.a,null)))))))):null)}var G=a(276),U=a.n(G),L=a(649),H=a.n(L),Y=a(781),K=a(834),M=a.n(K),Q=a(650),V=a.n(Q),X=a(1057),Z=a(1058),$=a(1059),ee=a(1060),te=Object(c.a)((function(e){return{root:{display:"flex"},popShare:{marginRight:e.spacing(1),backgroundColor:e.palette.secondary.main,borderRadius:10,width:"12rem"},buttonRound:{backgroundColor:"transparent",color:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.secondary.light,color:"#000"}},buttonIcon:{}}}));function ae(e){var t=te();return n.a.createElement(n.a.Fragment,null,n.a.createElement(Y.a,{title:"Share via Email"},n.a.createElement(X.a,{url:window.location.href,className:t.buttonIcon,subject:e.selectedProject._source.title,body:"Hi, \nPlease check out this project from civictechhub.org",separator:". "},n.a.createElement(U.a,{color:"primary"}))),n.a.createElement(Y.a,{title:"Share on Facebook"},n.a.createElement(Z.a,{url:window.location.href,className:t.buttonIcon,quote:e.selectedProject._source.title+". "+e.selectedProject._source.subtitle},n.a.createElement(M.a,null))),n.a.createElement(Y.a,{title:"Share on Twitter"},n.a.createElement($.a,{url:window.location.href,className:t.buttonIcon},n.a.createElement(H.a,null))),n.a.createElement(Y.a,{title:"Share on Linkedin"},n.a.createElement(ee.a,{url:window.location.href,className:t.buttonIcon,source:"CivicTechHub"},n.a.createElement(V.a,null))))}var re=a(754),ne=a(70),ce=a(1070),oe=a(191),le=a(835),se=a.n(le),ie=a(391),ue=Object(c.a)((function(e){return{root:{flexGrow:1}}}));function me(e){var t=e.selectedProject,a=(ue(),Object(d.f)());return n.a.createElement(ie.a,{timeout:400,in:!0,style:{transitionDelay:"300ms"}},n.a.createElement(k.a,{className:"project-grid",style:{backgroundImage:"url("+P.a+")"}},n.a.createElement(I.a,{mdUp:!0},n.a.createElement(o.a,{item:!0,xs:12,sm:12,md:12,align:"center"},n.a.createElement("img",{alt:"hero-img",src:Object(C.a)(t._source.image),style:{width:"100%",height:"10rem",objectFit:"cover"}}))),n.a.createElement(l.a,null,n.a.createElement(o.a,{container:!0},n.a.createElement(o.a,{item:!0,xs:12,sm:7,md:7},n.a.createElement(o.a,{item:!0,xs:12,sm:12,md:12},n.a.createElement("h1",{style:{wordWrap:"break-word",marginTop:"1rem"}},function(e,t){return e&&e._source.projectTitle?n.a.createElement(ce.a,{"aria-label":"breadcrumb",separator:n.a.createElement(se.a,{fontSize:"small"})},n.a.createElement(oe.a,{color:"inherit",style:{cursor:"pointer"},onClick:function(a){a.preventDefault(),t.push("/"+e._source.projectTitle.replace(/\s+/g,"-")+"/"+e._source.projectId)}},e._source.projectTitle),n.a.createElement(ne.a,{color:"textPrimary"},e._source.title)):e&&e._source.projTitle?n.a.createElement(ce.a,{"aria-label":"breadcrumb",separator:n.a.createElement(se.a,{fontSize:"small"})},n.a.createElement(oe.a,{color:"inherit",style:{cursor:"pointer"},onClick:function(a){a.preventDefault(),t.push("/"+e._source.projTitle.replace(/\s+/g,"-")+"/"+e._source.projId)}},e._source.projTitle),n.a.createElement(oe.a,{color:"inherit",style:{cursor:"pointer"},onClick:function(a){a.preventDefault(),t.push("/"+e._source.projTitle.replace(/\s+/g,"-")+"/"+e._source.mtTitle.replace(/\s+/g,"-")+"/"+e._source.mtId)}},e._source.mtTitle),n.a.createElement(ne.a,{color:"textPrimary"},e._source.title)):e._source.title}(t,a)),n.a.createElement("hr",null)),n.a.createElement(o.a,{item:!0,xs:12,sm:12,md:12},n.a.createElement(O,{selectedProject:t}),n.a.createElement("hr",null)),n.a.createElement(o.a,{container:!0,justify:"center"},n.a.createElement(o.a,{item:!0,xs:3,sm:2,md:2,align:"left"},n.a.createElement(J,{selectedProject:t})),n.a.createElement(o.a,{item:!0,xs:9,sm:10,md:10},n.a.createElement(o.a,{container:!0},n.a.createElement(o.a,{item:!0,xs:12},n.a.createElement("h5",{style:{color:"grey"}},t?t._source.subtitle:null),n.a.createElement("hr",null)),n.a.createElement(o.a,{item:!0,xs:12,align:"right"},n.a.createElement(ae,{selectedProject:t}),n.a.createElement(re.a,{selectedProject:t})))))),n.a.createElement(I.a,{smDown:!0},n.a.createElement(o.a,{item:!0,xs:12,sm:5,md:5,align:"center"},n.a.createElement("img",{alt:"hero-img",src:Object(C.a)(t._source.image),style:{width:"100%",margin:"1rem",boxShadow:"0px 0px 5px grey"}})))))))}},781:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(629),n=a(0),c=a.n(n),o=a(121),l=Object(o.a)((function(e){return{arrow:{color:e.palette.common.black},tooltip:{backgroundColor:e.palette.common.black}}}));function s(e){var t=l();return c.a.createElement(r.a,Object.assign({arrow:!0,classes:t},e))}},829:function(e,t,a){e.exports=a.p+"static/media/project_hero.14eae6b3.svg"}}]);
//# sourceMappingURL=2.fee62b6c.chunk.js.map