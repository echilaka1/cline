(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{28:function(e,a,s){},30:function(e,a,s){},31:function(e,a,s){},32:function(e,a,s){},33:function(e,a,s){},34:function(e,a,s){},40:function(e,a,s){"use strict";s.r(a);var t=s(0),c=s(1),r=s.n(c),n=s(17),i=s.n(n),l=(s(28),s(41)),j=s(18),o=Object(j.a)(),d=s(9),b=s(8),m=s(12),h=s.n(m),u=s(19),p=s(4),O=s(5),x=s(7),v=s(6),N=(s(30),s.p+"static/media/undraw_To_the_stars_qhyy.ea422a8f.svg"),g=s.p+"static/media/undraw_Astronaut_xko2.09c4598d.svg",f=s(20),w=s.n(f),y=function(e){Object(x.a)(s,e);var a=Object(v.a)(s);function s(){var e;Object(p.a)(this,s);for(var t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={values:{email:"",password:""},errors:{email:"",password:""}},e.submitForm=function(){var a=Object(u.a)(h.a.mark((function a(s){return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s.preventDefault(),!(e.state.errors.email.length>0&&e.state.errors.password.length>0)){a.next=3;break}return a.abrupt("return",!1);case 3:e.props.history.push("/dashboard"),window.location.reload();case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.validateEmail=function(a){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase())?e.setErrors({email:""}):setTimeout((function(){return e.setErrors({email:"Email is invalid"})}),400)},e.validatePassword=function(a){a.length<7?setTimeout((function(){return e.setErrors({password:"Password must have at least 8 characters"})}),400):e.setErrors({password:""})},e.setErrors=function(a){return e.setState({errors:Object(b.a)(Object(b.a)({},e.state.errors),a)})},e.handleInputChange=function(a){"email"===a.target.name&&e.validateEmail(a.target.value),"password"===a.target.name&&e.validatePassword(a.target.value),e.setState({values:Object(b.a)(Object(b.a)({},e.state.values),{},Object(d.a)({},a.target.name,a.target.value))})},e.responseGoogle=function(a){e.props.history.push("/dashboard"),window.location.reload()},e}return Object(O.a)(s,[{key:"render",value:function(){var e=this,a=this.state.values.email.length>0&&this.state.values.password.length>7;return Object(t.jsx)("div",{children:Object(t.jsx)("div",{className:"main-content",children:Object(t.jsxs)("div",{className:"rowed",children:[Object(t.jsx)("div",{className:"column left",children:Object(t.jsx)("div",{className:"parent",children:Object(t.jsxs)("div",{className:"child",children:[Object(t.jsx)("h1",{children:"Welcome to Clined App"}),Object(t.jsx)("img",{src:N,alt:"Launcher",className:"launcher"})]})})}),Object(t.jsx)("div",{className:"column right",children:Object(t.jsxs)("div",{className:"parent",children:[Object(t.jsx)("div",{className:"flag",children:Object(t.jsx)("img",{src:g,alt:"flag",className:"flag"})}),Object(t.jsxs)("div",{className:"secondchild",children:[Object(t.jsx)("h1",{children:"Sign in to continue to your account."}),Object(t.jsxs)("form",{onSubmit:this.submitForm,children:[Object(t.jsx)("label",{children:"Email address"}),Object(t.jsx)("input",{type:"email",name:"email",id:"email",value:this.state.values.email,onChange:this.handleInputChange,onBlur:function(a){return e.validateEmail(a.target.value)},title:"Email",required:!0}),Object(t.jsx)("p",{className:"error",children:this.state.errors.email}),Object(t.jsx)("label",{children:"Password"}),Object(t.jsx)("input",{type:"password",name:"password",id:"password",value:this.state.values.password,onChange:this.handleInputChange,onBlur:function(a){return e.validatePassword(a.target.value)},title:"password",required:!0}),Object(t.jsx)("p",{className:"error",children:this.state.errors.password}),Object(t.jsx)("button",{type:"submit",disabled:!a,children:"Sign In"})]}),Object(t.jsx)("h1",{className:"h1",children:"Or"}),Object(t.jsx)(w.a,{clientId:"354281134649-emb25t2l2drdv4uqtnubiakmnevqvgij.apps.googleusercontent.com",buttonText:"Sign in with Google",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"})]})]})})]})})})}}]),s}(r.a.Component),_=(s(31),s.p+"static/media/logoedtwist.1679b582.png"),k=function(e){Object(x.a)(s,e);var a=Object(v.a)(s);function s(){return Object(p.a)(this,s),a.apply(this,arguments)}return Object(O.a)(s,[{key:"render",value:function(){return Object(t.jsx)("div",{children:Object(t.jsx)("header",{className:"header",children:Object(t.jsxs)("div",{className:"Navbar",children:[Object(t.jsx)("div",{className:"Navbar__Link Navbar__Link-brand",children:Object(t.jsx)("img",{src:_,alt:"Logo",className:"home-logo"})}),Object(t.jsx)("div",{className:"Navbar__Link Navbar__Link-toggle",children:Object(t.jsx)("i",{className:"fa fa-bars"})}),Object(t.jsxs)("nav",{className:"Navbar__Items",children:[Object(t.jsx)("div",{className:"Navbar__Link",children:Object(t.jsx)("input",{type:"search",className:"nav-search",placeholder:"Generation Y"})}),Object(t.jsx)("div",{className:"Navbar__Link",children:Object(t.jsx)("span",{children:"Help"})})]}),Object(t.jsxs)("nav",{className:"Navbar__Items Navbar__Items--right",children:[Object(t.jsx)("div",{className:"Navbar__Link",children:Object(t.jsx)("span",{children:Object(t.jsx)("i",{className:"fa fa-bolt"})})}),Object(t.jsx)("div",{className:"Navbar__Link",children:Object(t.jsx)("span",{children:Object(t.jsx)("span",{className:"circular",children:Object(t.jsx)("i",{className:"fa fa-plus"})})})}),Object(t.jsx)("div",{className:"Navbar__Link",children:Object(t.jsx)("span",{children:Object(t.jsx)("span",{className:"circular black-bg",children:Object(t.jsx)("span",{className:"item",children:"F"})})})})]})]})})})}}]),s}(r.a.Component),L=s.p+"static/media/path843.b64164e9.png",T=s.p+"static/media/image834.5a820b38.png";s(32);var S=function(e){var a=e.Logo,s=e.Title,c=e.media,r=e.subTitle;return Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("div",{className:"card-main",children:[Object(t.jsxs)("label",{className:"title-top-description",children:[Object(t.jsx)("img",{src:a,alt:"logo",className:"logo"}),Object(t.jsx)("span",{className:"logo-title p",children:s})]}),c&&Object(t.jsx)("img",{src:c,alt:"media-content",className:"media-content"}),Object(t.jsxs)("div",{className:"main-card-body",children:[Object(t.jsx)("p",{className:"title-label",children:r}),Object(t.jsx)("p",{className:"p2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et tortor a nisi convallis congue eu sit amet leo. Suspendisse varius non nunc sit amet cursus. Maecenas urna urna, mollis auctor ornare nec, hendrerit vitae metus. Proin rhoncus justo et arcu tempor condimentum. Proin nec"}),Object(t.jsxs)("p",{className:"btn-hooper",children:[Object(t.jsx)("span",{className:"tablet subway-item",children:"Repost"}),Object(t.jsx)("span",{className:"tablet margin-tab",children:"Share"})]}),Object(t.jsx)("p",{className:"text-input",children:Object(t.jsxs)("label",{className:"input-flex-main",children:[Object(t.jsx)("span",{className:"abbrev",children:"F"}),Object(t.jsx)("input",{type:"text",className:"search",placeholder:"Add a comment"})]})})]})]})})},E=s.p+"static/media/eddddd.35c20fd5.PNG";s(33);var P=function(){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("div",{className:"search-bg",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-6 col-s-12",children:[Object(t.jsx)("h1",{className:"h1",children:"Search"}),Object(t.jsx)("p",{className:"p2",children:"Your homebase for all your resources"}),Object(t.jsx)("a",{href:"#",className:"btn-class",children:"Tour"}),Object(t.jsx)("a",{href:"#",className:"btn-class-two",children:"Got it"})]}),Object(t.jsx)("div",{className:"col-6 col-s-12",children:Object(t.jsx)("img",{src:E,alt:"UI wireframe"})})]})})})},A=s.p+"static/media/path8434.bfa8808f.png",C=s.p+"static/media/path858.539e8e1c.png",I=s.p+"static/media/g875.16e9bb18.png";s(34);var G=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("div",{className:"clear-float",children:[Object(t.jsx)("span",{className:"text-left",children:Object(t.jsx)("h1",{className:"h1",children:"All"})}),Object(t.jsx)("div",{children:Object(t.jsx)("span",{className:"text-right",children:Object(t.jsx)("p",{className:"p",children:"34 Results"})})})]}),Object(t.jsxs)("div",{className:"padded",children:[Object(t.jsx)("p",{className:"p2",children:"Images"}),Object(t.jsx)("p",{className:"p2",children:"Videos"})]}),Object(t.jsxs)("div",{className:"padded up",children:[Object(t.jsx)("h1",{className:"h12",children:"Sources"}),Object(t.jsxs)("p",{className:"p2",children:[Object(t.jsx)("img",{src:I,alt:"khan logo"}),"edtwist"]}),Object(t.jsxs)("p",{className:"p2",children:[Object(t.jsx)("i",{className:"fa fa-google"}),"Google"]}),Object(t.jsxs)("p",{className:"p2",children:[Object(t.jsx)("i",{className:"fa fa-youtube-play"}),"YouTube"]}),Object(t.jsxs)("p",{className:"p2",children:[Object(t.jsx)("i",{className:"fa fa-wikipedia-w"}),"Wikipedia"]}),Object(t.jsxs)("p",{className:"p2",children:[Object(t.jsx)("img",{src:A,alt:"khan logo"}),"Khan Academy"]}),Object(t.jsxs)("p",{className:"p2",children:[Object(t.jsx)("img",{src:C,alt:"khan logo"}),"New York Public Library"]})]})]})},F=s.p+"static/media/david.f445b0e7.PNG",Y=s.p+"static/media/youtube.a8d135c3.png",q=function(e){Object(x.a)(s,e);var a=Object(v.a)(s);function s(){return Object(p.a)(this,s),a.apply(this,arguments)}return Object(O.a)(s,[{key:"render",value:function(){return Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"col-3 col-s-4",children:Object(t.jsx)(G,{})}),Object(t.jsxs)("div",{className:"col-ran col-s-4",children:[Object(t.jsx)(P,{}),Object(t.jsx)(S,{Logo:T,Title:"New York Public Library",subTitle:"a Silicon Valley Adventure"})]}),Object(t.jsxs)("div",{className:"col-ran col-s-4",children:[Object(t.jsx)(S,{Logo:L,Title:"Khan Academy",subTitle:"Late night ideas"}),Object(t.jsx)(S,{Logo:Y,Title:"YouTube",subTitle:"A Better Time",media:F})]})]})}}]),s}(r.a.Component),B=function(e){Object(x.a)(s,e);var a=Object(v.a)(s);function s(){return Object(p.a)(this,s),a.apply(this,arguments)}return Object(O.a)(s,[{key:"render",value:function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)(k,{}),Object(t.jsx)(q,{})]})}}]),s}(r.a.Component);function z(){return Object(t.jsxs)(l.c,{children:[Object(t.jsx)(l.a,{exact:!0,path:"/",component:y}),Object(t.jsx)(l.a,{exact:!0,path:"/dashboard",component:B})]})}function J(){return Object(t.jsx)(l.b,{history:o,children:Object(t.jsx)(z,{})})}i.a.render(Object(t.jsx)(J,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d768978d.chunk.js.map