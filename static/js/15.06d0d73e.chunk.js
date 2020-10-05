(this.webpackJsonpcivictechhub=this.webpackJsonpcivictechhub||[]).push([[15],{1063:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var n=a(7),r=a(29),l=a(50),i=a(9),o=a(0),c=a.n(o),s=a(28),u=a(640),m=a(147),d=a(699),h=a(273),p=a(75),b=a(180),g=a.n(b),f=a(70),E=a(121),y=a(697),v=a(395),k=a(238),j=a(18),x=a(247),O=a.n(x),N=a(705),w=a(110),W=a(248),T=a(250),C=a(133),R=a.n(C),q=a(99),D=Object(E.a)((function(e){return{chipRoot:{display:"flex",justifyContent:"flex-start",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0},chip:{margin:e.spacing(.5),variant:"outlined",height:"1.5rem",color:e.palette.primary.main,border:"1px solid"},paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3),marginBottom:e.spacing(3)},submit:{margin:e.spacing(3,1,2),maxWidth:"8rem"},error:{color:"red"},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function L(){var e=c.a.useState({}),t=Object(i.a)(e,2),a=t[0],o=t[1],b=Object(s.f)(),E=D(),x=Object(v.a)().authData;c.a.useEffect((function(){x.user||b.push("/")}));Object(k.a)();var C=c.a.useState(!1),L=Object(i.a)(C,2),S=L[0],A=L[1],I=c.a.useState(null),U=Object(i.a)(I,2),H=U[0],B=U[1],F=c.a.useState(null),M=Object(i.a)(F,2),z=M[0],J=M[1],P=c.a.useState(null),V=Object(i.a)(P,2),_=V[0],K=V[1],Y=c.a.useState({builtWith:[],category:"",country:"",createdAt:new Date,storyText:"",subtitle:"",owners:x&&x.user?x.user.id:"",video:"",hackathons:[],updatedAt:new Date,links:[],keywords:[],title:"",roles:[],motivation:"",rewards:"",crisis:"",language:"",approved:"no",claimed:"yes"}),G=Object(i.a)(Y,2),Q=G[0],X=G[1],Z=function(e,t){var a=Object(l.a)(Q[t]).filter((function(t){return t!==e}));X(Object.assign({},Q,Object(r.a)({},t,a)))},$=function(e){var t=Object(l.a)(Q.roles).filter((function(t){return t!==e}));X(Object.assign({},Q,{roles:t}))},ee=function(e,t){X(Object(n.a)(Object(n.a)({},Q),{},Object(r.a)({},t,e.target.value)))},te=function(e,t){X(Object(n.a)(Object(n.a)({},Q),{},Object(r.a)({},e,t)))};c.a.useEffect((function(){o(function(e){var t={};if(e.title?e.title.length<4?t.title="The title should be atleast 4 characters long":e.title.length>60?t.title="The title should be less than 60 characters":/[*._%+-?]+/i.test(e.title)&&(t.title="Invalid characters in the title*"):t.title="Required",e.subtitle?e.subtitle.length<60&&(t.subtitle="The description should be atleast 60 characters long"):t.subtitle="Required",e.motivation?e.motivation.length<60&&(t.motivation="The description should be atleast 60 characters long"):t.motivation="Required",e.storyText?e.storyText.length<60&&(t.storyText="The description should be atleast 60 characters long"):t.storyText="Required",e.category||(t.category="Required"),0!==e.roles.length&&e.roles||(t.roles="Required"),e.links&&e.links.length>0)try{new URL(e.links.slice(-1))}catch(a){t.links="Not a valid url"}if(e.video)try{new URL(e.video)}catch(a){t.video="Not a valid url"}return 0!==e.keywords.length&&e.keywords||(t.keywords="Required"),0!==e.builtWith.length&&e.builtWith||(t.builtWith="Required"),e.country||(t.country="Required"),e.image||(t.image="Required"),t}(Object(n.a)(Object(n.a)({},Q),{},{image:!!H}))),K(ae(Q))}),[Q,H]);var ae=function(e){return c.a.createElement("div",{className:E.chipRoot},e.roles.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement(q.a,{label:e,onDelete:function(){return $(e)},onClick:function(){return $(e)},className:E.chip}))})))};return c.a.createElement(y.a,{component:"main",maxWidth:"md"},c.a.createElement(d.a,null),S?c.a.createElement("div",null,c.a.createElement("div",{style:{width:"100%",height:"3rem",textAlign:"center",backgroundColor:"#061F71",color:"white"}},c.a.createElement("h3",null,"Thank you!")),c.a.createElement("h5",{style:{fontWeight:400}},"Your project has been submitted.")):c.a.createElement("div",{className:E.paper},c.a.createElement(u.a,{className:E.avatar},c.a.createElement(g.a,null)),c.a.createElement(f.a,{component:"h1",variant:"h5"},"Create A Project"),c.a.createElement("form",{className:E.form,noValidate:!0,onSubmit:function(e){return e.preventDefault(),!1}},c.a.createElement(p.a,{container:!0,spacing:2},c.a.createElement(p.a,{item:!0,xs:12},a.title?c.a.createElement("sup",{className:E.error},a.title):c.a.createElement("sup",{className:E.error},""),c.a.createElement(h.a,{variant:"standard",required:!0,fullWidth:!0,multiline:!0,id:"title",label:"Project title",name:"title",autoComplete:"none",onChange:function(e){return ee(e,"title")},value:Q.title})),c.a.createElement(p.a,{item:!0,xs:12},a.image?c.a.createElement("sup",{className:E.error},a.image):c.a.createElement("sup",{className:E.error},""),c.a.createElement(W.a,{onSave:function(e){J(e[0].file),console.log(e[0].file.path);var t=new FileReader;t.onloadend=function(){B(t.result),console.log(H)},t.readAsDataURL(e[0].file)},acceptedFiles:["image/jpeg","image/png","image/bmp"]}),H?c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement("img",{src:H,alt:"title-image",style:{maxHeight:"400px",marginTop:"1rem",maxWidth:"100%"}})):null),c.a.createElement(p.a,{item:!0,xs:12},a.subtitle?c.a.createElement("sup",{className:E.error},a.subtitle):c.a.createElement("sup",{className:E.error},""),c.a.createElement(h.a,{variant:"standard",required:!0,fullWidth:!0,id:"subtitle",label:"Subtitle",name:"subtitle",onChange:function(e){return ee(e,"subtitle")},value:Q.subtitle})),c.a.createElement(p.a,{item:!0,xs:12},a.motivation?c.a.createElement("sup",{className:E.error},a.motivation):c.a.createElement("sup",{className:E.error},""),c.a.createElement(h.a,{variant:"standard",required:!0,fullWidth:!0,id:"motivation",label:"Motivation",name:"motivation",onChange:function(e){return ee(e,"motivation")},value:Q.motivation})),c.a.createElement(p.a,{item:!0,xs:12},a.storyText?c.a.createElement("sup",{className:E.error},a.storyText):c.a.createElement("sup",{className:E.error},""),c.a.createElement("div",{style:{borderBottom:"1px solid grey",minHeight:"4rem"}},c.a.createElement(O.a,{label:"Description *",id:"storyText",name:"storyText",controls:["bold","italic","underline","bulletList","quote","code","link"],toolbarButtonSize:"small",onChange:function(e){return te("storyText",Object(T.a)({styleToHTML:function(e){if("BOLD"===e)return c.a.createElement("span",{style:{color:"blue"}})},blockToHTML:function(e){if("code-block"===e.type)return c.a.createElement("code",null)},entityToHTML:function(e,t){try{new URL(e.data.url)}catch(a){return t+" ("+e.data.url+")"}return"LINK"===e.type?c.a.createElement("a",{href:e.data.url,target:"_blank"},t):t}})(e.getCurrentContent()))}}))),c.a.createElement(p.a,{item:!0,xs:12},a.category?c.a.createElement("sup",{className:E.error},a.category):c.a.createElement("sup",{className:E.error},""),c.a.createElement(N.a,{id:"combo-box-demo",options:w.a,getOptionLabel:function(e){return e.category},fullWidth:!0,onChange:function(e,t){te("category",t?t.category:"")},renderInput:function(e){return c.a.createElement(h.a,Object.assign({},e,{label:"Category",variant:"standard"}))}})),c.a.createElement(p.a,{item:!0,xs:12},a.roles?c.a.createElement("sup",{className:E.error},a.roles):c.a.createElement("sup",{className:E.error},""),_,c.a.createElement(N.a,{id:"role",options:w.c,getOptionLabel:function(e){return e.role},fullWidth:!0,onChange:function(e,t){te("roles",t&&!Q.roles.includes(t.role)?Object(l.a)(Q.roles).concat([t.role]):Object(l.a)(Q.roles))},renderInput:function(e){return c.a.createElement(h.a,Object.assign({},e,{label:"Roles needed*",variant:"standard"}))}})),c.a.createElement(p.a,{item:!0,xs:12},a.country?c.a.createElement("sup",{className:E.error},a.country):c.a.createElement("sup",{className:E.error},""),c.a.createElement(N.a,{id:"country",options:w.b,getOptionLabel:function(e){return e.label},fullWidth:!0,onChange:function(e,t){te("country",t?t.label:"")},renderInput:function(e){return c.a.createElement(h.a,Object.assign({},e,{label:"Country*",variant:"standard"}))}})),c.a.createElement(p.a,{item:!0,xs:12},a.links?c.a.createElement("sup",{className:E.error},a.links):c.a.createElement("sup",{className:E.error},""),c.a.createElement(R.a,{value:Q.links,classes:{chip:E.chip},fullWidth:!0,label:"Important links (press enter to add more than one link)",onAdd:function(e){te("links",Object(l.a)(Q.links).concat([e]))},onDelete:function(e,t){return Z(e,"links")}})),c.a.createElement(p.a,{item:!0,xs:12},a.builtWith?c.a.createElement("sup",{className:E.error},a.builtWith):c.a.createElement("sup",{className:E.error},""),c.a.createElement(R.a,{classes:{chip:E.chip},value:Q.builtWith,fullWidth:!0,label:"Technology (press enter to add more than one technologies)",onAdd:function(e){te("builtWith",Object(l.a)(Q.builtWith).concat([e]))},onDelete:function(e,t){return Z(e,"builtWith")}})),c.a.createElement(p.a,{item:!0,xs:12},a.keywords?c.a.createElement("sup",{className:E.error},a.keywords):c.a.createElement("sup",{className:E.error},""),c.a.createElement(R.a,{classes:{chip:E.chip},value:Q.keywords,fullWidth:!0,label:"Tags (press enter to add more than one keyword)",onAdd:function(e){te("keywords",Object(l.a)(Q.keywords).concat([e]))},onDelete:function(e,t){return Z(e,"keywords")}})),c.a.createElement(p.a,{item:!0,xs:12},a.video?c.a.createElement("sup",{className:E.error},a.video):c.a.createElement("sup",{className:E.error},""),c.a.createElement(h.a,{variant:"standard",fullWidth:!0,name:"videourl",label:"Video url",type:"text",id:"videoUrl",autoComplete:"current-password",onChange:function(){return ee("video")},value:Q.videoUrl})),c.a.createElement(p.a,{item:!0,xs:12},a.hackathons?c.a.createElement("sup",{className:E.error},a.hackathons):c.a.createElement("sup",{className:E.error},""),c.a.createElement(R.a,{value:Q.hackathons,fullWidth:!0,classes:{chip:E.chip},label:"Events/hackathons (press enter to add more than one events/hackathons)",onAdd:function(e){te("hackathons",Object(l.a)(Q.hackathons).concat([e]))},onDelete:function(e,t){return Z(e,"hackathons")}}))),c.a.createElement(m.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:E.submit},"Cancel"),x.error?c.a.createElement("sub",{className:E.error},x.error):null,c.a.createElement(m.a,{onClick:function(){if(console.log(a),0!==!Object.keys(a).length){console.log("submitting data");var e={status:"projectnew",index:"projectnew",q:Q},t=new FormData;t.append("params",JSON.stringify(e)),t.append("image",z,z.path),Object(j.j)(t,x.key,b,Q.title),A(!0)}else console.log("not submitting")},fullWidth:!0,variant:"contained",disabled:!!Object.keys(a)[0],color:"primary",className:E.submit},"Submit"),c.a.createElement(p.a,{container:!0,justify:"flex-end"},c.a.createElement(p.a,{item:!0})))))}}}]);
//# sourceMappingURL=15.06d0d73e.chunk.js.map