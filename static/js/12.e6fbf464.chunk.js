(this.webpackJsonpcivictechhub=this.webpackJsonpcivictechhub||[]).push([[12],{1068:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return xe}));var r=a(9),n=a(395),l=a(238),c=a(0),i=a.n(c),o=a(58),s=a(28),u=a(18),m=a(13),d=a(775),b=a(697),p=a(121),h=a(122),f=a(75),E=a(811),g=a(776),j=a(391),v=a(70),y=(a(159),a(92),a(191)),O=(a(94),a(99)),x=a(782),k=a.n(x),w=a(732),N=a.n(w),C=a(783),T=a.n(C),_=a(187),W=a(754),S=Object(p.a)((function(e){return{root:{minWidth:"100%",border:"1px solid #E8E8E8",borderRadius:15},media:{maxHeight:"auto",maxWidth:"100%",minHeight:"5rem",minWidth:"5rem",objectFit:"cover",borderRadius:5},avatar:{backgroundColor:"transparent",width:"1.4rem",height:"1.4rem"},overlay:{position:"absolute",top:"56.25%",left:"1.2rem",color:"black",backgroundColor:"transparent"},header:{backgroundColor:e.palette.primary.main,color:"white",height:"0.2rem"},button:{borderRadius:20,backgroundColor:e.palette.secondary.main,textTransform:"none",position:"absolute",left:"62%",textAlign:"middle",transform:"translateX(-50%)",width:"8rem"},chipGrey:{backgroundColor:"silver"},chipGreen:{backgroundColor:e.palette.safe},chipRed:{backgroundColor:e.palette.danger},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"}}}));function P(e){var t=Object(s.f)(),a=Object(l.a)(),o=S(),u=Object(c.useState)(!0),d=Object(r.a)(u,1)[0],b=Object(c.useState)(!1),p=Object(r.a)(b,2),h=p[0],E=p[1],g=i.a.useState([]),O=Object(r.a)(g,2),x=(O[0],O[1]),w=i.a.useState([]),C=Object(r.a)(w,2),P=(C[0],C[1]);Object(n.a)().authData;i.a.useEffect((function(){e.r&&e.r._source.downvotes&&P(e.r._source.downvotes),e.r&&e.r._source.upvotes&&x(e.r._source.upvotes)}),[e]);var D=i.a.createElement("span",{className:o.bullet},"\u2022");return i.a.createElement(j.a,{timeout:600,in:d,key:e.r._id,style:{transitionDelay:d?"300ms":"0ms"}},i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{item:!0,md:12,sm:12,xs:12,align:"left",noW:!0},i.a.createElement(f.a,{item:!0,xs:12},i.a.createElement(N.a,{style:{marginRight:"1rem"}}),i.a.createElement(y.a,{onMouseMove:function(){return E(!0)},onMouseDown:function(){return E(!1)},onMouseUp:function(){var r;(r=e.r)&&!h&&(a(Object(m.i)(r)),t.push("/"+r._source.projectTitle.replace(/\s+/g,"-")+"/"+r._source.title.replace(/\s+/g,"-")+"/"+r._id))},style:{textDecoration:"none",cursor:"pointer"}},i.a.createElement(v.a,{component:"span",style:{fontWeight:700,fontSize:"1.2rem"}},e.r._source.title," ",D," ",i.a.createElement(v.a,{variant:"body2",component:"span"},e.r._source.category?e.r._source.category:null))),i.a.createElement(v.a,{style:{marginLeft:"2.5rem"}},e.r._source.subtitle?e.r._source.subtitle:null),i.a.createElement(_.a,{size:"small",style:{marginLeft:"1rem",color:"silver"}},i.a.createElement(k.a,null)),i.a.createElement(_.a,{size:"small",style:{marginLeft:"auto 1.5rem",color:"silver"}},i.a.createElement(T.a,null)),i.a.createElement(W.a,{selectedProject:e.r,style:{marginLeft:"auto 1.5rem",color:"silver"}}))),i.a.createElement(f.a,{item:!0,xs:12},i.a.createElement("hr",null))))}var D=a(755),R=a.n(D),L=a(26),A=a(693),I=a(1065),q=a(1061),M=a(696),F=a(734),H=a.n(F),z=a(756),B=a(757),U=a(758),J=a(7),G=a(29),V=a(50),Y=a(147),K=a(273),X=a(247),Q=a.n(X),Z=a(705),$=a(110),ee=a(248),te=a(250),ae=a(133),re=a.n(ae),ne=Object(p.a)((function(e){return{chipRoot:{display:"flex",justifyContent:"flex-start",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0},chip:{margin:e.spacing(.5),variant:"outlined",height:"1.5rem",color:e.palette.primary.main,border:"1px solid"},paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3),marginBottom:e.spacing(3)},submit:{margin:e.spacing(3,1,2),maxWidth:"8rem"},error:{color:"red"},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function le(e){var t=i.a.useState({}),a=Object(r.a)(t,2),c=a[0],o=a[1],d=Object(s.f)(),b=ne(),p=Object(n.a)().authData;i.a.useEffect((function(){p.user||d.push("/")}));var h=Object(l.a)(),E=i.a.useState(!1),g=Object(r.a)(E,2),j=g[0],y=g[1],x=i.a.useState(null),k=Object(r.a)(x,2),w=k[0],N=k[1],C=i.a.useState(null),T=Object(r.a)(C,2),_=T[0],W=T[1],S=i.a.useState(null),P=Object(r.a)(S,2),D=P[0],R=P[1],L=i.a.useState({builtWith:[],category:"",country:"",createdAt:new Date,storyText:"",subtitle:"",owners:p&&p.user?p.user.id:"",video:"",hackathons:[],updatedAt:new Date,links:[],keywords:[],title:"",roles:[],projectId:e.selectedProject._id,projectTitle:e.selectedProject._source.title,rewards:"",crisis:"",language:"",approved:"no",completed:"no",claimed:"yes"}),A=Object(r.a)(L,2),I=A[0],q=A[1],M=function(e,t){var a=Object(V.a)(I[t]).filter((function(t){return t!==e}));q(Object.assign({},I,Object(G.a)({},t,a)))},F=function(e){var t=Object(V.a)(I.roles).filter((function(t){return t!==e}));q(Object.assign({},I,{roles:t}))},H=function(e,t){q(Object(J.a)(Object(J.a)({},I),{},Object(G.a)({},t,e.target.value)))},z=function(e,t){q(Object(J.a)(Object(J.a)({},I),{},Object(G.a)({},e,t)))};i.a.useEffect((function(){o(function(e){var t={};if(e.title?e.title.length<4?t.title="The title should be atleast 4 characters long":e.title.length>60?t.title="The title should be less than 60 characters":/[*._%+-?]+/i.test(e.title)&&(t.title="Invalid characters in the title*"):t.title="Required",e.subtitle?e.subtitle.length<60&&(t.subtitle="The description should be atleast 60 characters long"):t.subtitle="Required",e.storyText?e.storyText.length<60&&(t.storyText="The description should be atleast 60 characters long"):t.storyText="Required",e.category||(t.category="Required"),0!==e.roles.length&&e.roles||(t.roles="Required"),e.links&&e.links.length>0)try{new URL(e.links.slice(-1))}catch(a){t.links="Not a valid url"}return 0!==e.keywords.length&&e.keywords||(t.keywords="Required"),0!==e.builtWith.length&&e.builtWith||(t.builtWith="Required"),e.image||(t.image="Required"),t}(Object(J.a)(Object(J.a)({},I),{},{image:!!w}))),R(B(I))}),[I,w]);var B=function(e){return i.a.createElement("div",{className:b.chipRoot},e.roles.map((function(e,t){return i.a.createElement("li",{key:t},i.a.createElement(O.a,{label:e,onDelete:function(){return F(e)},onClick:function(){return F(e)},className:b.chip}))})))};return i.a.createElement(i.a.Fragment,null,j?i.a.createElement("div",null,i.a.createElement("div",{style:{width:"100%",height:"3rem",textAlign:"center",backgroundColor:"#061F71",color:"white"}},i.a.createElement("h3",null,"Thank you!")),i.a.createElement("h5",{style:{fontWeight:400}},"Your Microtask has been submitted.")):i.a.createElement("div",{className:b.paper},i.a.createElement(v.a,{component:"h1",variant:"h5"},"Create A Microtask"),i.a.createElement("form",{className:b.form,noValidate:!0,onSubmit:function(e){return e.preventDefault(),!1}},i.a.createElement(f.a,{container:!0,spacing:2},i.a.createElement(f.a,{item:!0,xs:12},c.title?i.a.createElement("sup",{className:b.error},c.title):i.a.createElement("sup",{className:b.error},""),i.a.createElement(K.a,{variant:"standard",required:!0,fullWidth:!0,multiline:!0,id:"title",label:"Microtask title",name:"title",autoComplete:"none",onChange:function(e){return H(e,"title")},value:I.title})),i.a.createElement(f.a,{item:!0,xs:12},c.image?i.a.createElement("sup",{className:b.error},c.image):i.a.createElement("sup",{className:b.error},""),i.a.createElement(ee.a,{onSave:function(e){W(e[0].file),console.log(e[0].file.path);var t=new FileReader;t.onloadend=function(){N(t.result),console.log(w)},t.readAsDataURL(e[0].file)},acceptedFiles:["image/jpeg","image/png","image/bmp"]}),w?i.a.createElement(f.a,{item:!0,xs:12},i.a.createElement("img",{src:w,alt:"title-image",style:{maxHeight:"400px",marginTop:"1rem",maxWidth:"100%"}})):null),i.a.createElement(f.a,{item:!0,xs:12},c.subtitle?i.a.createElement("sup",{className:b.error},c.subtitle):i.a.createElement("sup",{className:b.error},""),i.a.createElement(K.a,{variant:"standard",required:!0,fullWidth:!0,id:"subtitle",label:"Subtitle",name:"subtitle",onChange:function(e){return H(e,"subtitle")},value:I.subtitle})),i.a.createElement(f.a,{item:!0,xs:12},c.storyText?i.a.createElement("sup",{className:b.error},c.storyText):i.a.createElement("sup",{className:b.error},""),i.a.createElement("div",{style:{borderBottom:"1px solid grey",minHeight:"4rem"}},i.a.createElement(Q.a,{label:"Description *",id:"storyText",name:"storyText",controls:["bold","italic","underline","bulletList","quote","code","link"],toolbarButtonSize:"small",onChange:function(e){return z("storyText",Object(te.a)({styleToHTML:function(e){if("BOLD"===e)return i.a.createElement("span",{style:{color:"blue"}})},blockToHTML:function(e){if("code-block"===e.type)return i.a.createElement("code",null)},entityToHTML:function(e,t){try{new URL(e.data.url)}catch(a){return t+" ("+e.data.url+")"}return"LINK"===e.type?i.a.createElement("a",{href:e.data.url,target:"_blank"},t):t}})(e.getCurrentContent()))}}))),i.a.createElement(f.a,{item:!0,xs:12},c.category?i.a.createElement("sup",{className:b.error},c.category):i.a.createElement("sup",{className:b.error},""),i.a.createElement(Z.a,{id:"combo-box-demo",options:$.a,getOptionLabel:function(e){return e.category},fullWidth:!0,onChange:function(e,t){z("category",t?t.category:"")},renderInput:function(e){return i.a.createElement(K.a,Object.assign({},e,{label:"Category",variant:"standard"}))}})),i.a.createElement(f.a,{item:!0,xs:12},c.roles?i.a.createElement("sup",{className:b.error},c.roles):i.a.createElement("sup",{className:b.error},""),D,i.a.createElement(Z.a,{id:"role",options:$.c,getOptionLabel:function(e){return e.role},fullWidth:!0,onChange:function(e,t){z("roles",t&&!I.roles.includes(t.role)?Object(V.a)(I.roles).concat([t.role]):Object(V.a)(I.roles))},renderInput:function(e){return i.a.createElement(K.a,Object.assign({},e,{label:"Skills needed*",variant:"standard"}))}})),i.a.createElement(f.a,{item:!0,xs:12},c.links?i.a.createElement("sup",{className:b.error},c.links):i.a.createElement("sup",{className:b.error},""),i.a.createElement(re.a,{value:I.links,classes:{chip:b.chip},fullWidth:!0,label:"Important links (press enter to add more than one link)",onAdd:function(e){z("links",Object(V.a)(I.links).concat([e]))},onDelete:function(e,t){return M(e,"links")}})),i.a.createElement(f.a,{item:!0,xs:12},c.builtWith?i.a.createElement("sup",{className:b.error},c.builtWith):i.a.createElement("sup",{className:b.error},""),i.a.createElement(re.a,{classes:{chip:b.chip},value:I.builtWith,fullWidth:!0,label:"Technology (press enter to add more than one technologies)",onAdd:function(e){z("builtWith",Object(V.a)(I.builtWith).concat([e]))},onDelete:function(e,t){return M(e,"builtWith")}})),i.a.createElement(f.a,{item:!0,xs:12},c.keywords?i.a.createElement("sup",{className:b.error},c.keywords):i.a.createElement("sup",{className:b.error},""),i.a.createElement(re.a,{classes:{chip:b.chip},value:I.keywords,fullWidth:!0,label:"Tags (press enter to add more than one keyword)",onAdd:function(e){z("keywords",Object(V.a)(I.keywords).concat([e]))},onDelete:function(e,t){return M(e,"keywords")}})),i.a.createElement(f.a,{item:!0,xs:12},c.video?i.a.createElement("sup",{className:b.error},c.video):i.a.createElement("sup",{className:b.error},""),i.a.createElement(K.a,{variant:"standard",fullWidth:!0,name:"videourl",label:"Video url",type:"text",id:"videoUrl",autoComplete:"current-password",onChange:function(e){return H(e,"video")},value:I.videoUrl}))),i.a.createElement(Y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:b.submit,onClick:e.openForm},"Cancel"),p.error?i.a.createElement("sub",{className:b.error},p.error):null,i.a.createElement(Y.a,{onClick:function(){if(console.log(c),0!==!Object.keys(c).length){console.log("submitting data");var e={status:"microtasknew",index:"microtasks",q:I},t=new FormData;t.append("params",JSON.stringify(e)),t.append("image",_,_.path);Object(u.j)(t,p.key,d,I.title,(function(e){return h(Object(m.e)(e))})),y(!0)}else console.log("not submitting")},fullWidth:!0,variant:"contained",disabled:!!Object.keys(c)[0],color:"primary",className:b.submit},"Submit"),i.a.createElement(f.a,{container:!0,justify:"flex-end"},i.a.createElement(f.a,{item:!0})))))}var ce=a(628),ie=a(735),oe=a.n(ie);function se(e){var t=e.children,a=e.value,r=e.index,n=Object(g.a)(e,["children","value","index"]);return i.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==r,id:"full-width-tabpanel-".concat(r),"aria-labelledby":"full-width-tab-".concat(r)},n),a===r&&i.a.createElement(M.a,{p:3},i.a.createElement(v.a,{component:"div"},t)))}function ue(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var me=Object(p.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:"100%"},tabPanel:{backgroundColor:"white"}}}));function de(e){var t=me(),a=Object(L.a)(),l=i.a.useState(0),c=Object(r.a)(l,2),o=c[0],u=c[1],m=Object(n.a)(),d=m.authData,p=m.microtaskList,h=i.a.useState(!1),E=Object(r.a)(h,2),g=E[0],j=E[1],y=Object(s.f)(),O=function(){d.isAuthenticated?j(!g):y.push("/sign-in")};return i.a.createElement("div",{className:t.root},i.a.createElement(A.a,{position:"static",color:"default"},i.a.createElement(I.a,{value:o,onChange:function(e,t){u(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example"},i.a.createElement(q.a,Object.assign({label:"Microtasks"},ue(0))),i.a.createElement(q.a,Object.assign({label:"Details"},ue(1))))),i.a.createElement(R.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:o,onChangeIndex:function(e){u(e)}},i.a.createElement(se,{value:o,index:0,dir:a.direction,className:t.tabPanel},i.a.createElement(b.a,null,i.a.createElement("h4",{style:{margin:"0 auto",textAlign:"left"}},"Project Tasks"),i.a.createElement("hr",null),i.a.createElement(f.a,{container:!0,spacing:1},i.a.createElement(f.a,{item:!0,sm:12,md:12,xs:12},i.a.createElement(oe.a,{style:{marginRight:"0.6rem"}}),i.a.createElement(Y.a,{onClick:O,variant:"text",style:{textTransform:"none",fontWeight:700,fontSize:"1.2rem"}},"  ","New Task")),i.a.createElement(ce.a,{in:g,timeout:"auto",unmountOnExit:!0},i.a.createElement(f.a,{item:!0,sm:12,md:12,xs:12},i.a.createElement(le,{openForm:O,selectedProject:e.selectedProject}))),i.a.createElement(f.a,{item:!0,sm:12,md:12,xs:12},p&&p[0]&&p.map((function(e,t){return i.a.createElement(P,{key:t,r:e})})))))),i.a.createElement(se,{value:o,index:1,dir:a.direction,className:t.tabPanel},e.selectedProject?i.a.createElement(b.a,null,i.a.createElement(f.a,{container:!0},i.a.createElement(f.a,{item:!0,md:12,sm:12,xs:12},i.a.createElement("h4",{style:{margin:"0 auto",textAlign:"left"}},"Project details"),i.a.createElement("hr",null),i.a.createElement(v.a,{variant:"body1"},H()(e.selectedProject?e.selectedProject._source.storyText:null))),i.a.createElement(f.a,{item:!0,sm:12,md:12,xs:12},i.a.createElement("h2",null,"Resources")),i.a.createElement(f.a,{item:!0,sm:12,md:6,xs:12},i.a.createElement(B.a,{selectedProject:e.selectedProject})),i.a.createElement(f.a,{item:!0,sm:12,md:6,xs:12},i.a.createElement(z.a,{selectedProject:e.selectedProject}),i.a.createElement(U.a,{selectedProject:e.selectedProject})))):null)))}var be=a(759),pe=a(768),he=a(95),fe=a.n(he),Ee=a(627),ge=a(694),je=a(244),ve=a.n(je),ye=a(72),Oe=Object(p.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),color:e.palette.text.secondary},appBar:{top:"auto",bottom:0}}}));function xe(){var e=Oe(),t=Object(s.f)(),a=Object(c.useRef)(null),p=i.a.useState(!1),g=Object(r.a)(p,2),j=g[0],v=g[1],y=i.a.useState(),O=Object(r.a)(y,2),x=O[0],k=O[1],w=i.a.useState(),N=Object(r.a)(w,2),C=(N[0],N[1]),T=i.a.useState(!0),W=Object(r.a)(T,2),S=W[0],P=W[1],D=Object(n.a)(),R=D.selectedProject,L=D.authData,I=D.microtaskList,q=Object(s.g)(),F=Object(l.a)();Object(c.useEffect)((function(){if(!R||R._source.projectTitle)!function(e,a,r){var n=Object(o.c)(e,a,r);Object(u.l)(n,F,m.j,t)}(q.id,q.name.replace(/-/g," "),"projects");else{var e=Object(o.d)(R._id,"microtasks");Object(u.o)(e,F,m.e),L&&L.user&&function(){var e={index:"activity",q:{categoryName:"project",activity:"visited",docId:R._id,title:R._source.title,userId:L.user.id,username:L.user.username,createdAt:new Date}},t=new FormData;t.append("params",JSON.stringify(e)),Object(u.c)(t,L.key,null)}()}k(R),P(L._source&&R&&R._source.upvotes?!R._source.upvotes.includes(L._source.id)&&!R._source.downvotes.includes(L._source.id):null)}),[R]);var H=fe()((function(){a&&a.current&&S&&a.current.getBoundingClientRect().top<1*window.innerHeight/2&&(L.isAuthenticated,v(!0))}),100);return i.a.useEffect((function(){return window.addEventListener("scroll",H),function(){window.removeEventListener("scroll",H)}}),[]),Object(c.useEffect)((function(){C(I)}),[I]),i.a.createElement(M.a,null,i.a.createElement(ye.a,{title:x?x._source.title+" - CivicTechHub":null,description:x?x._source.subtitle:null,image:x?x._source.image:null}),x?i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{selectedProject:x}),i.a.createElement(de,{selectedProject:x}),i.a.createElement(b.a,null,i.a.createElement(f.a,{container:!0,spacing:2},i.a.createElement(f.a,{item:!0,sm:12,xs:12,ref:a},i.a.createElement(h.a,{className:e.paper},i.a.createElement("h4",null,"Comments"),i.a.createElement(E.a,null),q.id?i.a.createElement(i.a.Fragment,null,i.a.createElement(pe.a,{projectId:q.id}),i.a.createElement(E.a,null)):null,L.isAuthenticated&&q.id?i.a.createElement(be.a,{projectId:q.id}):i.a.createElement("h5",null,"Please ",i.a.createElement(Y.a,{href:"/sign-in"},"sign in ")," to post comments")))))):null,S?i.a.createElement(Ee.a,{in:j,direction:"up"},i.a.createElement(A.a,{position:"fixed",color:"secondary",className:e.appBar},i.a.createElement(ge.a,null,i.a.createElement(b.a,null,i.a.createElement(f.a,{container:!0,spacing:2},i.a.createElement(f.a,{item:!0,sm:6,md:6,xs:12},i.a.createElement("h3",null,"Do you like this project? ")),i.a.createElement(f.a,{item:!0,sm:6,md:6,xs:12},"Your feedback will help us to identify the most promising projects. Thank you!"))),i.a.createElement(_.a,{onClick:function(){v(!1)}},i.a.createElement(ve.a,null))))):null)}},735:function(e,t,a){"use strict";var r=a(10);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),l=(0,r(a(16)).default)(n.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddOutlined");t.default=l}}]);
//# sourceMappingURL=12.e6fbf464.chunk.js.map