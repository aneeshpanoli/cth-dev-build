(this.webpackJsonpcivictechhub=this.webpackJsonpcivictechhub||[]).push([[13],{1064:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var r=a(29),n=a(7),l=a(9),i=a(75),o=a(0),c=a.n(o),s=a(147),m=a(28),u=a(238),f=a(395),d=a(18),p=a(13),b=a(58),h=a(249),v=a.n(h),E=a(772),j=a.n(E),g=a(273);function O(){var e=Object(m.f)(),t=Object(u.a)(),a=Object(f.a)(),o=a.selectedProject,h=a.authData,E=c.a.useState({proof:"",email:""}),O=Object(l.a)(E,2),w=O[0],y=O[1],_=c.a.useState({proof:"",email:""}),x=Object(l.a)(_,2),C=x[0],k=x[1],A=function(e,t){k(Object(n.a)(Object(n.a)({},C),{},Object(r.a)({},t,e.target.value)))};c.a.useEffect((function(){o&&o._source.owners?Object(d.f)(h,"id",o._source.owners,t,p.f):t(Object(p.f)(null))}),[]);var q=function(){var a={status:"projectclaimsubmit",index:o._index,id:o._id,title:o._source.title,email:h.user.email,firstName:h.user.firstName,q:{doc:{claimed:h.user.id,claimedAt:new Date,proof:[C.proof,C.email,h._source.firstName]}}},r=new FormData;r.append("params",JSON.stringify(a));var n=Object(b.c)(o._id,o._source.title.replace(/-/g," "));Object(d.q)(r,h.key,e,o._source.title,(function(){return Object(d.l)(n,t,p.j,e)}))};return c.a.createElement(i.a,{container:!0,alignItems:"center",spacing:3},c.a.createElement(i.a,{item:!0,xs:12,sm:12,md:12},c.a.createElement("h4",{style:{marginTop:"2rem",textAlign:"center"}},"Claim Project"),c.a.createElement("hr",null)),c.a.createElement(i.a,{item:!0,xs:12,sm:12,md:12},c.a.createElement("h6",{style:{margin:"0 auto"}},"Please tell us how we can verify your ownership (Include links, and other relevent infomation). Also, include a valid email address for our staff to contact you.")),c.a.createElement(i.a,{item:!0,xs:12,sm:12,md:12},c.a.createElement("form",{noValidate:!0,autoComplete:"off"},c.a.createElement(g.a,{id:"claim",label:w.proof?w.proof:"Proof of ownership",required:!0,multiline:!0,fullWidth:!0,rows:4,defaultValue:"",onChange:function(e){return A(e,"proof")}}),c.a.createElement(g.a,{required:!0,fullWidth:!0,id:"email",label:w.email?w.email:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return A(e,"email")}}))),c.a.createElement(i.a,{item:!0,xs:12,sm:12,md:12},c.a.createElement(s.a,{startIcon:c.a.createElement(j.a,null),disableElevation:!0,size:"small",color:"primary",variant:"outlined",style:{textTransform:"none",borderRadius:25},onClick:function(){e.goBack()}}," ","Cancel claim"),c.a.createElement(s.a,{startIcon:c.a.createElement(v.a,null),disableElevation:!0,size:"small",color:"default",variant:"contained",style:{textTransform:"none",borderRadius:25,marginLeft:"1rem"},onClick:function(){if(h&&h.user){var t=function(){var e={};return C.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(C.email)||(e.email="Invalid email address"):e.email="Required",C.proof?C.proof.length<60&&(e.proof="Proof of ownership should be atleast 60 characters long"):e.proof="Required",y(e),e}();if(0===Object.keys(t).length)return void q();console.log("errors")}else e.push("/sign-in")}}," ","Submit claim")),c.a.createElement(i.a,{item:!0,xs:12,sm:12,md:12},c.a.createElement("h1",null," ")))}},772:function(e,t,a){"use strict";var r=a(10);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),l=(0,r(a(16)).default)(n.default.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");t.default=l}}]);
//# sourceMappingURL=13.6b4a1756.chunk.js.map