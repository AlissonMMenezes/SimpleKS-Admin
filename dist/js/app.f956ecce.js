(function(t){function e(e){for(var a,r,l=e[0],i=e[1],c=e[2],p=0,f=[];p<l.length;p++)r=l[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1e92":function(t,e,n){"use strict";n("b6f2")},"3a26":function(t,e,n){},"3ffb":function(t,e,n){"use strict";n("3a26")},"4bc3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],r={name:"App"},l=r,i=n("2877"),c=Object(i["a"])(l,o,s,!1,null,null,null),u=c.exports,p=n("5f5b"),f=n("b1e0"),d=n("bc3a"),m=n.n(d),b=n("8c4f"),v=n("2f62"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Headers"),n("b-container",{staticClass:"bv-example-row",attrs:{fluid:""}},[n("b-row",{},[n("b-col",{attrs:{col:"",md:"2"}},[n("Sidebar")],1),n("b-col",{attrs:{col:"",md:"10"}},[n("router-view")],1)],1)],1)],1)},g=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",[t._v("Alisson Machado")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}})],1)],1)},w=[],y=(n("f9e3"),n("2dd8"),{name:"Headers"}),x=y,S=Object(i["a"])(x,_,w,!1,null,null,null),k=S.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-3 py-2"},[n("nav",{staticClass:"mb-3"},[n("b-nav",{attrs:{vertical:""}},[n("router-link",{attrs:{to:"/",tag:"b-nav-item"}},[t._v("Home")]),n("router-link",{attrs:{to:"/posts",tag:"b-nav-item"}},[t._v("Posts")]),n("router-link",{attrs:{to:"/pages",tag:"b-nav-item"}},[t._v("Pages")]),n("router-link",{attrs:{to:"/comments",tag:"b-nav-item"}},[t._v("Comments")]),n("router-link",{attrs:{to:"/subscribers",tag:"b-nav-item"}},[t._v("Subscribers")]),n("router-link",{attrs:{to:"/themes",tag:"b-nav-item"}},[t._v("Themes")]),n("router-link",{attrs:{to:"/users",tag:"b-nav-item"}},[t._v("Users")]),n("router-link",{attrs:{to:"/settings",tag:"b-nav-item"}},[t._v("Settings")])],1)],1)])},C=[],O={name:"Sidebar"},P=O,$=Object(i["a"])(P,j,C,!1,null,null,null),E=$.exports,T={name:"Homepage",components:{Headers:k,Sidebar:E}},H=T,N=(n("c8e8"),Object(i["a"])(H,h,g,!1,null,"1b4a2620",null)),L=N.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"10px"}},[n("b-button",{attrs:{href:"/post/new",variant:"outline-primary"}},[t._v("New Post")]),n("b-table",{staticStyle:{"margin-top":"10px"},attrs:{striped:"",hover:"",items:t.info.posts,fields:t.fields},scopedSlots:t._u([{key:"cell(title)",fn:function(e){return[n("router-link",{attrs:{to:"/"+e.item.post_name+"/edit"}},[t._v(" "+t._s(e.item.title)+" ")])]}}])})],1)},z=[],A={data:function(){return{fields:["title","author","categories","comments","date"],info:[]}},mounted:function(){var t=this;m.a.get("/posts").then((function(e){return t.info=e.data}))}},U=A,D=Object(i["a"])(U,M,z,!1,null,null,null),J=D.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"10px"}},[n("b-button",{attrs:{href:"/page/new",variant:"outline-primary"}},[t._v("New Page")]),n("b-table",{attrs:{striped:"",hover:"",items:t.info.pages,fields:t.fields},scopedSlots:t._u([{key:"cell(name)",fn:function(e){return[n("router-link",{attrs:{to:"/"+e.item.post_name+"/edit"}},[t._v(" "+t._s(e.item.title)+" ")])]}}])})],1)},I=[],R={data:function(){return{fields:["name","author"],info:[]}},mounted:function(){var t=this;m.a.get("/pages").then((function(e){return t.info=e.data}))}},q=R,F=Object(i["a"])(q,B,I,!1,null,null,null),G=F.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"post excerpt",staticStyle:{"padding-top":"20px"}},[n("b-container",{attrs:{fluid:""}},[n("input",{ref:"post-name",attrs:{type:"hidden"},domProps:{value:t.info.post_name}}),n("input",{ref:"post-type",attrs:{type:"hidden"},domProps:{value:t.info.post_type}}),n("b-row",[n("b-col",{attrs:{sm:"10"}},[n("b-form-textarea",{attrs:{size:"lg",placeholder:"Small textarea",value:t.info.title},model:{value:t.info.title,callback:function(e){t.$set(t.info,"title",e)},expression:"info.title"}})],1)],1),n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{sm:"10"}},[n("b-form-textarea",{staticClass:"editor-area",attrs:{size:"lg",placeholder:"Large textarea",rows:"35",value:t.info.content},model:{value:t.info.content,callback:function(e){t.$set(t.info,"content",e)},expression:"info.content"}})],1)],1),n("b-row",{staticClass:"mt-2"},[n("b-button",{staticStyle:{"margin-left":"20px"},attrs:{variant:"success"},on:{click:t.savePost}},[t._v("Publish")]),n("b-button",{staticStyle:{"margin-left":"20px"},attrs:{variant:"warning"}},[t._v("Save Draft")]),n("b-button",{staticStyle:{"margin-left":"20px"},attrs:{variant:"danger"}},[t._v("Delete")])],1)],1)],1)},Q=[],V=(n("ac1f"),n("1276"),{name:"Post",data:function(){return console.log("===>"+window.location.pathname.split("/")[1]),{info:{title:"New Title",content:"New Content",post_type:window.location.pathname.split("/")[1]}}},mounted:function(){var t=this;console.log(window.location.pathname.split("/")[1]),m.a.get("/posts/"+window.location.pathname.split("/")[1]).then((function(e){e.data?t.info=e.data:("page"==window.location.pathname.split("/")[1]?(console.log("New page"),t.info.post_type="page"):(console.log("New Post"),t.info.post_type="post"),t.info.title="New Title",t.info.content="New Content")}))},methods:{savePost:function(t){console.log(t);var e=this.info.title,n=this.info.content,a=this.info.post_name,o=this.info.post_type;console.log(e),console.log(a),a?m.a.put("/posts/"+a,{Title:e,Content:n,Post_Name:a,Post_Type:o},{headers:{"Content-Type":"application/json"}}).then((function(t){console.log(t),alert(t.data.content)})):m.a.post("/posts",{Title:e,Content:n,Post_Type:o},{headers:{"Content-Type":"application/json"}}).then((function(t){console.log(t),alert(t.data.content)}))}}}),W=V,X=(n("3ffb"),Object(i["a"])(W,K,Q,!1,null,"3d029a27",null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("article",{staticClass:"post excerpt"},[n("h2",{staticClass:"title"},[t._v("test")]),n("span",{staticClass:"post-content"},[t._v(" here will be the homepage ")])])])}],et={name:"Homepage"},nt=et,at=(n("7bd2"),Object(i["a"])(nt,Z,tt,!1,null,"fc0b16b8",null)),ot=at.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"post excerpt",staticStyle:{"padding-top":"20px"}},[t._v(" Under construction ")])},rt=[],lt={name:"Themes"},it=lt,ct=(n("da90"),Object(i["a"])(it,st,rt,!1,null,"77bcfb0d",null)),ut=ct.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"post excerpt",staticStyle:{"padding-top":"20px"}},[t._v(" Here you will see the comments ")])},ft=[],dt={name:"Comments"},mt=dt,bt=(n("1e92"),Object(i["a"])(mt,pt,ft,!1,null,"0b22c255",null)),vt=bt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"post excerpt",staticStyle:{"padding-top":"20px"}},[t._v(" Here you will see your subscribers ")])},gt=[],_t={name:"Themes"},wt=_t,yt=(n("818d"),Object(i["a"])(wt,ht,gt,!1,null,"63e5042d",null)),xt=yt.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"post excerpt",staticStyle:{"padding-top":"20px"}},[t._v(" Here you will see the users ")])},kt=[],jt={name:"Themes"},Ct=jt,Ot=(n("e5b0"),Object(i["a"])(Ct,St,kt,!1,null,"13d3a961",null)),Pt=Ot.exports,$t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("article",{staticClass:"post excerpt"},[n("h2",{staticClass:"title"},[t._v("test")]),n("span",{staticClass:"post-content"},[t._v(" here will be the homepage ")])])])}],Tt={name:"Home"},Ht=Tt,Nt=Object(i["a"])(Ht,$t,Et,!1,null,null,null),Lt=Nt.exports,Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-container",{staticStyle:{"margin-top":"10%"}},[n("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Login","label-for":"input-default"}},[n("b-form-input",{attrs:{placeholder:"type your username",id:"input-default"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),n("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Password","label-for":"input-default"}},[n("b-form-input",{attrs:{placeholder:"type your password",id:"input-default"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("b-button",{attrs:{variant:"success"},on:{click:function(e){return t.sendLogin()}}},[t._v("Login")])],1)],1)},zt=[],At={name:"Login",data:function(){return{username:"",password:""}},methods:{sendLogin:function(){console.log(this.username),m.a.post("/login",{username:this.username,password:this.password}).then((function(t){localStorage.user=t.data.token,window.location.href="/"})).catch((function(t){console.log(t.response.statusText),alert(t.response.statusText)}))}}},Ut=At,Dt=Object(i["a"])(Ut,Mt,zt,!1,null,null,null),Jt=Dt.exports;a["default"].use(p["a"]),a["default"].use(f["a"]),a["default"].use(b["a"]),a["default"].use(v["a"]),a["default"].config.productionTip=!1,a["default"].prototype.$http=m.a,m.a.defaults.baseURL="https://simpleks-backend-7mw5ckgsna-uc.a.run.app";var Bt=[{path:"/login",component:Jt},{path:"/",component:L,children:[{path:"",component:Lt},{path:"/posts",component:J},{path:"/pages",component:G},{path:"/:post_name/edit",component:Y},{path:"/post/new",component:Y},{path:"/page/new",component:Y},{path:"/themes",component:ut},{path:"/comments",component:vt},{path:"/subscribers",component:xt},{path:"/users",component:Pt},{path:"/settings",component:ot}]}],It=new b["a"]({mode:"history",routes:Bt});It.beforeEach((function(t,e,n){null==localStorage.getItem("user")&&"/login"!=t.path?n({path:"/login"}):(m.a.defaults.headers.common["Authorization"]="Bearer ".concat(localStorage.user),n())})),new a["default"]({router:It,render:function(t){return t(u)}}).$mount("#app")},"7bd2":function(t,e,n){"use strict";n("4bc3")},"818d":function(t,e,n){"use strict";n("9e3d")},"88e1":function(t,e,n){},"9e3d":function(t,e,n){},b4a4:function(t,e,n){},b6f2:function(t,e,n){},c8e8:function(t,e,n){"use strict";n("88e1")},d3e2:function(t,e,n){},da90:function(t,e,n){"use strict";n("d3e2")},e5b0:function(t,e,n){"use strict";n("b4a4")}});
//# sourceMappingURL=app.f956ecce.js.map