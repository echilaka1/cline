(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{18:function(e,s,a){},29:function(e,s,a){},31:function(e,s,a){},37:function(e,s,a){"use strict";a.r(s);var t=a(0),c=a(1),r=a.n(c),i=a(19),n=a.n(i),l=(a(29),a(38)),j=a(20),o=Object(j.a)(),d=a(9),b=a(8),h=a(12),m=a.n(h),u=a(21),p=a(4),O=a(5),x=a(7),v=a(6),g=(a(31),a.p+"static/media/undraw_To_the_stars_qhyy.ea422a8f.svg"),N=a.p+"static/media/undraw_Astronaut_xko2.09c4598d.svg",f=a(22),w=a.n(f),y=function(e){Object(x.a)(a,e);var s=Object(v.a)(a);function a(){var e;Object(p.a)(this,a);for(var t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];return(e=s.call.apply(s,[this].concat(c))).state={values:{email:"",password:""},errors:{email:"",password:""},fireRedirect:!1},e.submitForm=function(){var s=Object(u.a)(m.a.mark((function s(a){return m.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(a.preventDefault(),e.setState({fireRedirect:!0}),!(e.state.errors.email.length>0&&e.state.errors.password.length>0)){s.next=4;break}return s.abrupt("return",!1);case 4:console.log(e.state);case 5:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),e.validateEmail=function(s){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(s).toLowerCase())?e.setErrors({email:""}):setTimeout((function(){return e.setErrors({email:"Email is invalid"})}),400)},e.validatePassword=function(s){s.length<7?setTimeout((function(){return e.setErrors({password:"Password must have at least 8 characters"})}),400):e.setErrors({password:""})},e.setErrors=function(s){return e.setState({errors:Object(b.a)(Object(b.a)({},e.state.errors),s)})},e.handleInputChange=function(s){"email"===s.target.name&&e.validateEmail(s.target.value),"password"===s.target.name&&e.validatePassword(s.target.value),e.setState({values:Object(b.a)(Object(b.a)({},e.state.values),{},Object(d.a)({},s.target.name,s.target.value))})},e.responseGoogle=function(s){console.log(s),console.log(s.profileObj),e.props.history.push("/Dashboard")},e}return Object(O.a)(a,[{key:"render",value:function(){var e=this,s=this.state.values.email.length>0&&this.state.values.password.length>7,a=(this.props.location.state||"/").from,c=this.state.fireRedirect;return Object(t.jsx)("div",{children:Object(t.jsx)("div",{className:"main-content",children:Object(t.jsxs)("div",{className:"rowed",children:[Object(t.jsx)("div",{className:"column left",children:Object(t.jsx)("div",{className:"parent",children:Object(t.jsxs)("div",{className:"child",children:[Object(t.jsx)("h1",{children:"Welcome to Clined App"}),Object(t.jsx)("img",{src:g,alt:"Launcher",className:"launcher"})]})})}),Object(t.jsx)("div",{className:"column right",children:Object(t.jsxs)("div",{className:"parent",children:[Object(t.jsx)("div",{className:"flag",children:Object(t.jsx)("img",{src:N,alt:"flag",className:"flag"})}),Object(t.jsxs)("div",{className:"secondchild",children:[Object(t.jsx)("h1",{children:"Sign in to continue to your account."}),Object(t.jsxs)("form",{onSubmit:this.submitForm,children:[Object(t.jsx)("label",{children:"Email address"}),Object(t.jsx)("input",{type:"email",name:"email",id:"email",value:this.state.values.email,onChange:this.handleInputChange,onBlur:function(s){return e.validateEmail(s.target.value)},title:"Email",required:!0}),Object(t.jsx)("p",{className:"error",children:this.state.errors.email}),Object(t.jsx)("label",{children:"Password"}),Object(t.jsx)("input",{type:"password",name:"password",id:"password",value:this.state.values.password,onChange:this.handleInputChange,onBlur:function(s){return e.validatePassword(s.target.value)},title:"password",required:!0}),Object(t.jsx)("p",{className:"error",children:this.state.errors.password}),Object(t.jsx)("button",{type:"submit",disabled:!s,children:"Sign In"})]}),c&&Object(t.jsx)(l.a,{to:a||"/Dashboard"}),Object(t.jsx)("h1",{className:"h1",children:"Or"}),Object(t.jsx)(w.a,{clientId:"354281134649-emb25t2l2drdv4uqtnubiakmnevqvgij.apps.googleusercontent.com",buttonText:"Sign in with Google",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"})]})]})})]})})})}}]),a}(r.a.Component),_=(a(18),a.p+"static/media/logoedtwist.1679b582.png"),k=function(e){Object(x.a)(a,e);var s=Object(v.a)(a);function a(){return Object(p.a)(this,a),s.apply(this,arguments)}return Object(O.a)(a,[{key:"render",value:function(){return Object(t.jsx)("div",{children:Object(t.jsx)("header",{className:"header",children:Object(t.jsxs)("div",{className:"Navbar",children:[Object(t.jsx)("div",{className:"Navbar__Link Navbar__Link-brand",children:Object(t.jsx)("img",{src:_,alt:"Logo",className:"home-logo"})}),Object(t.jsx)("div",{className:"Navbar__Link Navbar__Link-toggle",children:Object(t.jsx)("i",{className:"fa fa-bars"})}),Object(t.jsxs)("nav",{className:"Navbar__Items",children:[Object(t.jsx)("div",{className:"Navbar__Link",children:Object(t.jsx)("input",{type:"search",className:"nav-search",placeholder:"Generation Y"})}),Object(t.jsx)("div",{className:"Navbar__Link",children:Object(t.jsx)("span",{children:"Help"})})]}),Object(t.jsxs)("nav",{className:"Navbar__Items Navbar__Items--right",children:[Object(t.jsx)("div",{class:"Navbar__Link",children:Object(t.jsx)("span",{children:Object(t.jsx)("i",{className:"fa fa-bolt"})})}),Object(t.jsx)("div",{class:"Navbar__Link",children:Object(t.jsx)("span",{children:Object(t.jsx)("span",{class:"circular",children:Object(t.jsx)("i",{className:"fa fa-plus"})})})}),Object(t.jsx)("div",{class:"Navbar__Link",children:Object(t.jsx)("span",{children:Object(t.jsx)("span",{class:"circular black-bg",children:Object(t.jsx)("span",{class:"item",children:"F"})})})})]})]})})})}}]),a}(r.a.Component),L=a.p+"static/media/path843.b64164e9.png",T=a.p+"static/media/image834.5a820b38.png";var S=function(e){var s=e.Logo,a=e.Title,c=e.media,r=e.subTitle;return Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("div",{className:"card-main",children:[Object(t.jsxs)("label",{className:"title-top-description",children:[Object(t.jsx)("img",{src:s,alt:"logo",className:"logo"}),Object(t.jsx)("span",{className:"logo-title p",children:a})]}),c&&Object(t.jsx)("img",{src:c,alt:"media-content",className:"media-content"}),Object(t.jsxs)("div",{className:"main-card-body",children:[Object(t.jsx)("p",{className:"title-label",children:r}),Object(t.jsx)("p",{className:"p2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et tortor a nisi convallis congue eu sit amet leo. Suspendisse varius non nunc sit amet cursus. Maecenas urna urna, mollis auctor ornare nec, hendrerit vitae metus. Proin rhoncus justo et arcu tempor condimentum. Proin nec"}),Object(t.jsxs)("p",{className:"btn-hooper",children:[Object(t.jsx)("span",{className:"tablet subway-item",children:"Repost"}),Object(t.jsx)("span",{className:"tablet margin-tab",children:"Share"})]}),Object(t.jsx)("p",{className:"text-input",children:Object(t.jsxs)("label",{className:"input-flex-main",children:[Object(t.jsx)("div",{className:"abbrev",children:"F"}),Object(t.jsx)("input",{type:"text",className:"search",placeholder:"Add a comment"})]})})]})]})})},E=a.p+"static/media/eddddd.35c20fd5.PNG";var P=function(){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("div",{className:"search-bg",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-6 col-s-12",children:[Object(t.jsx)("h1",{class:"h1",children:"Search"}),Object(t.jsx)("p",{className:"p2",children:"Your homebase for all your resources"}),Object(t.jsx)("a",{href:"#",className:"btn-class",children:"Tour"}),Object(t.jsx)("a",{href:"#",className:"btn-class-two",children:"Got it"})]}),Object(t.jsx)("div",{className:"col-6 col-s-12",children:Object(t.jsx)("img",{src:E,alt:"UI wireframe"})})]})})})},A=a.p+"static/media/path8434.bfa8808f.png",C=a.p+"static/media/path858.539e8e1c.png",I=a.p+"static/media/g875.16e9bb18.png";var G=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("div",{className:"clear-float",children:[Object(t.jsx)("span",{className:"text-left",children:Object(t.jsx)("h1",{className:"h1",children:"All"})}),Object(t.jsx)("div",{children:Object(t.jsx)("span",{className:"text-right",children:Object(t.jsx)("p",{className:"p",children:"34 Results"})})})]}),Object(t.jsxs)("div",{className:"padded",children:[Object(t.jsx)("p",{className:"p2",children:"Images"}),Object(t.jsx)("p",{className:"p2",children:"Videos"})]}),Object(t.jsxs)("div",{className:"padded up",children:[Object(t.jsx)("h1",{className:"h12",children:"Sources"}),Object(t.jsxs)("p",{className:"p2",children:[Object(t.jsx)("img",{src:I,alt:"khan logo"}),"edtwist"]}),Object(t.jsxs)("p",{className:"p2",children:[Object(t.jsx)("i",{className:"fa fa-google"}),"Google"]}),Object(t.jsxs)("p",{className:"p2",children:[Object(t.jsx)("i",{className:"fa fa-youtube-play"}),"YouTube"]}),Object(t.jsxs)("p",{className:"p2",children:[Object(t.jsx)("i",{className:"fa fa-wikipedia-w"}),"Wikipedia"]}),Object(t.jsxs)("p",{className:"p2",children:[Object(t.jsx)("img",{src:A,alt:"khan logo"}),"Khan Academy"]}),Object(t.jsxs)("p",{className:"p2",children:[Object(t.jsx)("img",{src:C,alt:"khan logo"}),"New York Public Library"]})]})]})},F=a.p+"static/media/david.f445b0e7.PNG",Y=a.p+"static/media/youtube.a8d135c3.png",q=function(e){Object(x.a)(a,e);var s=Object(v.a)(a);function a(){return Object(p.a)(this,a),s.apply(this,arguments)}return Object(O.a)(a,[{key:"render",value:function(){return Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"col-3 col-s-4",children:Object(t.jsx)(G,{})}),Object(t.jsxs)("div",{className:"col-ran col-s-4",children:[Object(t.jsx)(P,{}),Object(t.jsx)(S,{Logo:T,Title:"New York Public Library",subTitle:"a Silicon Valley Adventure"})]}),Object(t.jsxs)("div",{className:"col-ran col-s-4",children:[Object(t.jsx)(S,{Logo:L,Title:"Khan Academy",subTitle:"Late night ideas"}),Object(t.jsx)(S,{Logo:Y,Title:"YouTube",subTitle:"A Better Time",media:F})]})]})}}]),a}(r.a.Component),R=function(e){Object(x.a)(a,e);var s=Object(v.a)(a);function a(){return Object(p.a)(this,a),s.apply(this,arguments)}return Object(O.a)(a,[{key:"render",value:function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)(k,{}),Object(t.jsx)(q,{})]})}}]),a}(r.a.Component);function B(){return Object(t.jsxs)(l.d,{children:[Object(t.jsx)(l.b,{exact:!0,path:"/",component:y}),Object(t.jsx)(l.b,{path:"/Dashboard",component:R})]})}function D(){return Object(t.jsx)(l.c,{history:o,children:Object(t.jsx)(B,{})})}n.a.render(Object(t.jsx)(D,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.64884a45.chunk.js.map