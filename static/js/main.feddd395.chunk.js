(this["webpackJsonpago-info"]=this["webpackJsonpago-info"]||[]).push([[0],{151:function(e,t,n){},152:function(e,t,n){},164:function(e,t,n){},292:function(e,t,n){},299:function(e,t,n){},300:function(e,t,n){},301:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n(0),a=n.n(c),o=n(30),i=n.n(o),s=(n(151),n(10)),l=n(13),u=n(19),j=n(18),b=(n(152),n(53)),h=n(32),O=(n(153),n(136)),d=(n(110),n(87)),m=(n(156),n(145)),p=(n(302),n(62)),f=(n(161),n(107)),y=(n(94),n(56)),g=(n(164),n.p+"static/media/logo.8ca7528f.ico"),x=n(304),v=n(305),k=n(102),S=n.n(k),_=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,null,[{key:"get",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e._request2(t,n,"get")}},{key:"post",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e._request2(t,n,"post")}},{key:"request",value:function(e,t,n){return new Promise((function(r,c){("get"===n?S.a.get(e,t):S.a.post(e,t)).then((function(e){r(e)})).catch((function(e){y.b.error("\u8bf7\u6c42\u51fa\u9519\u4e86\uff1a"+e.message)}))}))}},{key:"_request2",value:function(t,n,r){return new Promise((function(r,c){try{setTimeout((function(){"/login"===t&&e._check(n)?r({data:{status:0,message:"\u6210\u529f",name:n.username}}):r({data:{status:-1,message:"\u7528\u6237\u540d\u5bc6\u7801\u9519\u8bef\uff01"}})}),3e3)}catch(a){y.b.error("\u8bf7\u6c42\u51fa\u9519\u4e86\uff1a"+a.message)}}))}},{key:"_check",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e&&"admin1234"===e.username&&"12#$"===e.password}}]),e}();function A(e,t){return _.post("/login",{username:e,password:t})}var U=function e(){Object(s.a)(this,e)};U.BASE_URL="/ago-info",U.USER_KEY="user_key";var E=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,null,[{key:"user",get:function(){return this._user},set:function(e){this._user=e}}]),e}();E._user={name:"Jerry"};var C=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,null,[{key:"saveUser",value:function(e){localStorage.setItem(U.USER_KEY,JSON.stringify(e))}},{key:"getUser",value:function(){return JSON.parse(localStorage.getItem(U.USER_KEY)||"{}")}},{key:"removeUser",value:function(){localStorage.removeItem(U.USER_KEY)}},{key:"clear",value:function(){localStorage.clear()}}]),e}(),L=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={loading:!1},e.onFinish=function(t){console.log("Received values of form: ",t),e.setState({loading:!0}),A(t.username,t.password).then((function(t){console.log("\u54cd\u5e94\u7ed3\u679c",t);var n=t.data;0===n.status?(y.b.success("\u767b\u5f55\u6210\u529f"),E.user={name:n.name},C.saveUser({name:n.name}),e.props.history.replace(U.BASE_URL),console.log(E.user)):y.b.error(n.message),e.setState({loading:!1})}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=E.user;return e&&e.name?Object(r.jsx)(h.a,{to:U.BASE_URL}):Object(r.jsxs)("div",{className:"login",children:[Object(r.jsxs)("header",{className:"login-header",children:[Object(r.jsx)("img",{src:g,alt:"logo"}),Object(r.jsx)("h1",{children:"AGO - \u6570\u636e\u7cfb\u7edf"})]}),Object(r.jsx)("section",{className:"login-content",children:Object(r.jsxs)(O.a,{tip:"Loading...",size:"large",spinning:this.state.loading,children:[Object(r.jsx)("h2",{children:"\u7528\u6237\u767b\u5f55"}),Object(r.jsxs)(p.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:this.onFinish,children:[Object(r.jsx)(p.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"},{min:6,message:"\u7528\u6237\u540d\u6700\u5c116\u4f4d"},{max:12,message:"\u7528\u6237\u540d\u6700\u591a12\u4f4d"},{pattern:/^[a-zA-Z0-9_]+$/,message:"\u7528\u6237\u540d\u5fc5\u987b\u7531\u82f1\u6587\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u7ec4\u6210"}],children:Object(r.jsx)(f.a,{prefix:Object(r.jsx)(x.a,{className:"site-form-item-icon",style:{color:"rgba(0,0,0,0.25"}}),type:"text",placeholder:"Username"})}),Object(r.jsx)(p.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(r.jsx)(f.a.Password,{prefix:Object(r.jsx)(v.a,{className:"site-form-item-icon",style:{color:"rgba(0,0,0,0.25"}}),type:"password",placeholder:"Password"})}),Object(r.jsxs)(p.a.Item,{children:[Object(r.jsx)(p.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(r.jsx)(m.a,{children:"Remember me"})}),Object(r.jsx)("a",{className:"login-form-forgot",href:"",children:"Forgot password"})]}),Object(r.jsxs)(p.a.Item,{children:[Object(r.jsx)(d.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"}),"Or ",Object(r.jsx)("a",{href:"",children:"register now!"})]})]})]})})]})}}]),n}(c.Component),R=(n(288),n(69)),B=(n(290),n(91)),N=(n(292),n(306)),w=n(307),P=n(308),I=n(309),F=[{title:"\u9996\u9875",key:"/home",icon:Object(r.jsx)(N.a,{})},{title:"\u6d3b\u52a8\u4fe1\u606f",key:"/role",icon:Object(r.jsx)(w.a,{})},{title:"\u6e38\u620f\u653b\u7565",key:"/strategy",icon:Object(r.jsx)(P.a,{}),children:[{title:"\u65b0\u624b\u653b\u7565",key:"/user",icon:null},{title:"\u8fdb\u9636\u653b\u7565",key:"/product",icon:null},{title:"\u804c\u4e1a\u89c4\u5212",key:"/category",icon:null}]},{title:"\u6570\u636e\u5b9e\u4f53",key:"/entity",icon:Object(r.jsx)(I.a,{}),children:[{title:"NPC",key:"/chartBar",icon:null},{title:"\u602a\u7269",key:"/chartLine",icon:null},{title:"\u5ba0\u7269",key:"/chartPie",icon:null},{title:"\u88c5\u5907",key:"/12",icon:null},{title:"\u804c\u4e1a-\u6280\u80fd",key:"/13",icon:null},{title:"Submenu",key:"/sub3",icon:null,children:[{title:"Option 11",key:"/14",icon:null},{title:"Option 12",key:"/15",icon:null}]}]}],K=B.a.SubMenu,q=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).getMenuNodes=function(t,n){return n.map((function(n){return n.children?Object(r.jsx)(K,{icon:n.icon,title:n.title,children:e.getMenuNodes(n.key,n.children)},n.key):(e.path.endsWith(n.key)&&(e.openKey=t,console.log(n.key+" | "+e.path+" | "+e.openKeys)),Object(r.jsx)(B.a.Item,{icon:n.icon,children:Object(r.jsx)(b.b,{to:U.BASE_URL+n.key,children:n.title})},n.key))}))},e}return Object(l.a)(n,[{key:"UNSAFE_componentWillMount",value:function(){this.path=this.props.location.pathname,this.menuNodes=this.getMenuNodes(U.BASE_URL,F)}},{key:"render",value:function(){var e=this.props.location.pathname;this.openKey;return Object(r.jsxs)("div",{className:"left-nav",children:[Object(r.jsxs)(b.b,{to:U.BASE_URL,className:"left-nav-header",children:[Object(r.jsx)("img",{src:g,alt:"logo"}),Object(r.jsx)("h1",{children:"AGO - Info"})]}),Object(r.jsx)(B.a,{defaultSelectedKeys:e,selectedKeys:e,defaultOpenKeys:["/strategy","/entity"],mode:"inline",theme:"dark",children:this.menuNodes})]})}}]),n}(c.Component),M=Object(h.g)(q),J=(n(299),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"header",children:"Header"})}}]),n}(c.Component)),T=n(310),Y=n(311),H=n(312),z=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:"Home"})}}]),n}(c.Component),G=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:"Category"})}}]),n}(c.Component),Q=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:"Product"})}}]),n}(c.Component),W=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:"Role"})}}]),n}(c.Component),$=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:"User"})}}]),n}(c.Component),D=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:"ChartLine"})}}]),n}(c.Component),V=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:"ChartBar"})}}]),n}(c.Component),Z=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:"ChartPie"})}}]),n}(c.Component),X=(n(300),R.a.Footer),ee=R.a.Sider,te=R.a.Content,ne=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=E.user;return e&&e.name&&""!==e.name?Object(r.jsxs)(R.a,{className:"admin",children:[Object(r.jsx)(ee,{children:Object(r.jsx)(M,{})}),Object(r.jsxs)(R.a,{children:[Object(r.jsx)(J,{children:"Header"}),Object(r.jsx)(te,{style:{backgroundColor:"white"},children:Object(r.jsxs)(h.d,{children:[Object(r.jsx)(h.b,{path:U.BASE_URL+"/home",component:z}),Object(r.jsx)(h.b,{path:U.BASE_URL+"/category",component:G}),Object(r.jsx)(h.b,{path:U.BASE_URL+"/product",component:Q}),Object(r.jsx)(h.b,{path:U.BASE_URL+"/role",component:W}),Object(r.jsx)(h.b,{path:U.BASE_URL+"/user",component:$}),Object(r.jsx)(h.b,{path:U.BASE_URL+"/chartBar",component:V}),Object(r.jsx)(h.b,{path:U.BASE_URL+"/chartLine",component:D}),Object(r.jsx)(h.b,{path:U.BASE_URL+"/chartPie",component:Z}),Object(r.jsx)(h.a,{to:U.BASE_URL+"/home"})]})}),Object(r.jsxs)(X,{style:{textAlign:"center",color:"#ACACAC"},children:["\xa92020 A Lion. All rights reserved.\xa0\xa0\xa0\xa0",Object(r.jsx)("a",{href:"https://github.com/AlionSSS/ago-info",target:"_blank",rel:"noreferrer",children:Object(r.jsx)(T.a,{})}),"\xa0\xa0\xa0\xa0",Object(r.jsx)("a",{href:"mailto:alionsss@outlook.com",rel:"nofollow",children:Object(r.jsx)(Y.a,{})}),"\xa0\xa0\xa0\xa0",Object(r.jsx)("a",{onClick:function(){return y.b.info("QQ: 444066154")},children:Object(r.jsx)(H.a,{})})]})]})]}):Object(r.jsx)(h.a,{to:U.BASE_URL+"/login"})}}]),n}(c.Component),re=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(b.a,{children:Object(r.jsxs)(h.d,{children:[Object(r.jsx)(h.b,{path:U.BASE_URL+"/login",component:L}),Object(r.jsx)(h.b,{path:U.BASE_URL,component:ne}),Object(r.jsx)(h.a,{to:U.BASE_URL})]})})}}]),n}(c.Component),ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,313)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))},ae=C.getUser();E.user=ae,i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(re,{})}),document.getElementById("root")),ce()}},[[301,1,2]]]);
//# sourceMappingURL=main.feddd395.chunk.js.map