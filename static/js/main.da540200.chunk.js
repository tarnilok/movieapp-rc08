(this["webpackJsonpmovieapp-rc08"]=this["webpackJsonpmovieapp-rc08"]||[]).push([[0],{34:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(26),r=a.n(c),i=(a(34),a(17)),o=a(5),l=a(29),u=a(10),j=a(19),b=a.n(j),d=a(23),m=a(14),h=(a(36),a(45),m.a.initializeApp({apiKey:"AIzaSyBwZP3EN2NgVl82wTM167Al1ZjLJdHgsPM",authDomain:"movieapp-d25a3.firebaseapp.com",projectId:"movieapp-d25a3",storageBucket:"movieapp-d25a3.appspot.com",messagingSenderId:"1071944530466",appId:"1:1071944530466:web:611777a5480f619399687b",measurementId:"G-B5PVNVHHP5"}),function(){var e=Object(d.a)(b.a.mark((function e(t,a,s){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.auth().createUserWithEmailAndPassword(t,a).then((function(e){})).catch((function(e){}));case 3:return n=m.a.auth().currentUser,e.next=6,n.updateProfile({displayName:s});case 6:alert(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("There exists an account with this email. Please login with your password or continue with Google!");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a,s){return e.apply(this,arguments)}}()),p=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.a.auth().onAuthStateChanged((function(e){t(e||null)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=new m.a.auth.GoogleAuthProvider;e.setCustomParameters({prompt:"select_account"}),m.a.auth().signInWithPopup(e)},O=a(1),v=Object(s.createContext)();var x=function(e){var t=Object(s.useState)(),a=Object(u.a)(t,2),n=a[0],c=a[1];return console.log("\ud83d\ude80 ~ file: AuthContext.js ~ line 10 ~ AuthContextProvider ~ currentUser",n),Object(s.useEffect)((function(){p(c)}),[]),Object(O.jsx)(v.Provider,{value:{currentUser:n},children:e.children})},g=function(e){var t,a=e.title,n=e.poster_path,c=e.overview,r=e.vote_average,i=Object(s.useContext)(v).currentUser;return Object(O.jsxs)("div",{className:"movie",children:[Object(O.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w1280"+n:"https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",alt:a}),Object(O.jsxs)("div",{className:"movie-info",children:[Object(O.jsx)("h3",{children:a}),i&&Object(O.jsx)("span",{className:"tag ".concat((t=r,t>=8?"green":t>=6?"orange":"red")),children:r})]}),Object(O.jsxs)("div",{className:"movie-over",children:[Object(O.jsx)("h2",{children:"Overview:"}),Object(O.jsx)("p",{children:c})]})]})};var y=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),r=Object(u.a)(c,2),i=r[0],o=r[1],j=Object(s.useContext)(v).currentUser;Object(s.useEffect)((function(){b("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aa0e656c3de553c0cffeac1d2bb2f687&page=1")}),[]);var b=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){n(e.results)}))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("form",{className:"search",onSubmit:function(e){e.preventDefault(),i&&j?(b("https://api.themoviedb.org/3/search/movie?&api_key=aa0e656c3de553c0cffeac1d2bb2f687&query="+i),o("")):alert("Please login to search a movie!")},children:Object(O.jsx)("input",{className:"search-input",type:"search",placeholder:"Search a movie",onChange:function(e){o(e.target.value)}})}),Object(O.jsx)("div",{className:"movie-container",children:a.length>0&&a.map((function(e){return Object(O.jsx)(g,Object(l.a)({},e),e.id)}))})]})},w=function(){var e=Object(o.f)(),t=Object(s.useState)(""),a=Object(u.a)(t,2),n=a[0],c=a[1],r=Object(s.useState)(""),i=Object(u.a)(r,2),l=i[0],j=i[1],b=Object(s.useState)(""),d=Object(u.a)(b,2),m=d[0],p=d[1],v=Object(s.useState)(""),x=Object(u.a)(v,2),g=x[0],y=x[1];return Object(O.jsxs)("div",{className:"register",children:[Object(O.jsx)("div",{className:"form-image",children:Object(O.jsx)("img",{src:"https://picsum.photos/1200/900",alt:"sample-movie"})}),Object(O.jsxs)("div",{className:"register-form",children:[Object(O.jsx)("h1",{className:"form-title display-3",children:"Register"}),Object(O.jsxs)("form",{id:"register",children:[Object(O.jsxs)("div",{class:"mb-3",children:[Object(O.jsx)("label",{for:"first-name",class:"form-label display-4",children:"First Name"}),Object(O.jsx)("input",{type:"text",class:"form-control",id:"first-name",placeholder:"Enter your first name...",onChange:function(e){return c(e.target.value)}})]}),Object(O.jsxs)("div",{class:"mb-3",children:[Object(O.jsx)("label",{for:"last-name",class:"form-label display-4",children:"Last Name"}),Object(O.jsx)("input",{type:"text",class:"form-control",id:"last-name",placeholder:"Enter your last name...",onChange:function(e){return j(e.target.value)}})]}),Object(O.jsxs)("div",{class:"mb-3",children:[Object(O.jsx)("label",{for:"email",class:"form-label display-4",children:"Email"}),Object(O.jsx)("input",{type:"email",class:"form-control",id:"email",placeholder:"Enter your email address...",onChange:function(e){return p(e.target.value)}})]}),Object(O.jsxs)("div",{class:"mb-3",children:[Object(O.jsx)("label",{for:"password",class:"form-label display-4",children:"Password"}),Object(O.jsx)("input",{type:"password",class:"form-control",id:"password",placeholder:"Enter your password...",onChange:function(e){return y(e.target.value)}})]}),Object(O.jsx)("input",{type:"button",class:"btn btn-primary form-control",value:"Register",onClick:function(){var t={firstName:n,lastName:l,email:m,password:g},a="".concat(n," ").concat(l);h(t.email,t.password,a),e.push("/")}})]}),Object(O.jsx)("button",{class:"btn btn-primary form-control",onClick:function(){f(),e.push("/")},children:"Continue with Google"})]})]})},N=function(){var e=Object(o.f)(),t=Object(s.useState)(""),a=Object(u.a)(t,2),n=a[0],c=a[1],r=Object(s.useState)(""),i=Object(u.a)(r,2),l=i[0],j=i[1];return Object(O.jsxs)("div",{className:"register",children:[Object(O.jsx)("div",{className:"form-image",children:Object(O.jsx)("img",{src:"https://picsum.photos/1200/900",alt:"sample-movie"})}),Object(O.jsxs)("div",{className:"register-form",children:[Object(O.jsx)("h1",{className:"form-title display-3",children:"Login"}),Object(O.jsxs)("form",{id:"login",children:[Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{for:"email",className:"form-label display-4",children:"Email"}),Object(O.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter your email address...",onChange:function(e){return c(e.target.value)}})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{for:"password",className:"form-label display-4",children:"Password"}),Object(O.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter your password...",onChange:function(e){return j(e.target.value)}}),Object(O.jsx)("div",{classNameName:"link",onClick:function(){return function(e){m.a.auth().sendPasswordResetEmail(e),alert("Please check your mail box!")}(n)},children:"Forgot password?"})]}),Object(O.jsx)("input",{type:"button",className:"btn btn-primary form-control",value:"Login",onClick:function(){var t={email:n,password:l};!function(e,t){m.a.auth().signInWithEmailAndPassword(e,t).then((function(e){})).catch((function(e){alert("The password is invalid or the user does not have a password!")}))}(t.email,t.password),e.push("/")}})]}),Object(O.jsx)("button",{className:"btn btn-primary form-control",onClick:function(){f(),e.push("/")},children:"Continue with Google"})]})]})},C=function(){var e=Object(o.f)(),t=Object(s.useContext)(v).currentUser;return Object(O.jsx)("div",{children:Object(O.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(O.jsxs)("div",{className:"container-fluid",children:[Object(O.jsx)("a",{className:"navbar-brand",href:"/",style:{color:"white"},children:"React Movie App"}),Object(O.jsxs)("div",{className:"buttons",children:[t?Object(O.jsx)("h3",{children:t.displayName}):Object(O.jsx)("button",{type:"button",className:"ms-2 btn btn-outline-light",onClick:function(){return e.push("/login")},children:"Login"}),t?Object(O.jsx)("button",{type:"button",className:"ms-2 btn btn-outline-light",onClick:function(){m.a.auth().signOut()},children:"Logout"}):Object(O.jsx)("button",{type:"button",className:"ms-2 btn btn-outline-light",onClick:function(){return e.push("/register")},children:"Register"})]})]})})})},k=function(){return Object(O.jsxs)(i.a,{children:[Object(O.jsx)(C,{}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/register",component:w}),Object(O.jsx)(o.a,{path:"/login",component:N}),Object(O.jsx)(o.a,{path:"/",component:y})]})]})};var P=function(){return Object(O.jsx)(x,{children:Object(O.jsx)(k,{})})};r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.da540200.chunk.js.map