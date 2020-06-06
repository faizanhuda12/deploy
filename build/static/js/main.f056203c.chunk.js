(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(20),c=a.n(o),r=(a(29),a(1)),i=a(9),s=a(2),u=a(3),m=a.n(u),d=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(""),a=Object(r.a)(t,2),o=a[0],c=a[1],u=Object(n.useState)([]),d=Object(r.a)(u,2),p=d[0],f=d[1],h=Object(n.useContext)(S),g=h.state,E=h.dispatch,b=Object(i.f)();Object(n.useEffect)((function(){m.a.Modal.init(e.current)}),[]);return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper white"},l.a.createElement(s.b,{to:g?"/":"/signin",className:"brand-logo left"},"Hollowgram"),l.a.createElement("ul",{id:"nav-mobile",className:"right"},g?[l.a.createElement("li",{key:"1"},l.a.createElement("i",{"data-target":"modal1",className:"large material-icons modal-trigger",style:{color:"black"}},"search")),l.a.createElement("li",{key:"2"},l.a.createElement(s.b,{to:"/profile"},"Profile")),l.a.createElement("li",{key:"3"},l.a.createElement(s.b,{to:"/create"},"Create Post")),l.a.createElement("li",{key:"4"},l.a.createElement(s.b,{to:"/myfollowingpost"},"My following Posts")),l.a.createElement("li",{key:"5"},l.a.createElement("button",{className:"btn #c62828 red darken-3",onClick:function(){localStorage.clear(),E({type:"CLEAR"}),b.push("/signin")}},"Logout"))]:[l.a.createElement("li",{key:"6"},l.a.createElement(s.b,{to:"/signin"},"Signin")),l.a.createElement("li",{key:"7"},l.a.createElement(s.b,{to:"/signup"},"Signup"))])),l.a.createElement("div",{id:"modal1",class:"modal",ref:e,style:{color:"black"}},l.a.createElement("div",{className:"modal-content"},l.a.createElement("input",{type:"text",placeholder:"search users",value:o,onChange:function(e){return t=e.target.value,c(t),void fetch("/search-users",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t})}).then((function(e){return e.json()})).then((function(e){f(e.user)}));var t}}),l.a.createElement("ul",{className:"collection"},p.map((function(t){return l.a.createElement(s.b,{to:t._id!==g._id?"/profile/"+t._id:"/profile",onClick:function(){m.a.Modal.getInstance(e.current).close(),c("")}},l.a.createElement("li",{className:"collection-item"},t.email))})))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{className:"modal-close waves-effect waves-green btn-flat",onClick:function(){return c("")}},"close"))))},p=(a(34),function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useContext)(S),i=c.state;c.dispatch;Object(n.useEffect)((function(){fetch("/allpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),o(e.posts)}))}),[]);return l.a.createElement("div",{className:"home"},a.map((function(e){return l.a.createElement("div",{className:"card home-card",key:e._id},l.a.createElement("h5",{style:{padding:"5px"}},l.a.createElement(s.b,{to:e.postedBy._id!==i._id?"/profile/"+e.postedBy._id:"/profile"},e.postedBy.name)," ",e.postedBy._id==i._id&&l.a.createElement("i",{className:"material-icons",style:{float:"right"},onClick:function(){return t=e._id,void fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.filter((function(t){return t._id!==e._id}));o(t)}));var t}},"delete")),l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{src:e.photo})),l.a.createElement("div",{className:"card-content"},l.a.createElement("i",{className:"material-icons",style:{color:"red"}},"favorite"),e.likes.includes(i._id)?l.a.createElement("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=a.map((function(t){return t._id==e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))}},"thumb_down"):l.a.createElement("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=a.map((function(t){return t._id==e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))}},"thumb_up"),l.a.createElement("h6",null,e.likes.length," likes"),l.a.createElement("h6",null,e.title),l.a.createElement("p",null,e.body),e.comments.map((function(e){return l.a.createElement("h6",{key:e._id},l.a.createElement("span",{style:{fontWeight:"500"}},e.postedBy.name)," ",e.text)})),l.a.createElement("form",{onSubmit:function(t){var n,l;t.preventDefault(),n=t.target[0].value,l=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:l,text:n})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.map((function(t){return t._id==e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))}},l.a.createElement("input",{type:"text",placeholder:"add a comment"}))))})))}),f=function(){var e=Object(n.useContext)(S),t=(e.state,e.dispatch),a=Object(i.f)(),o=Object(n.useState)(""),c=Object(r.a)(o,2),u=c[0],d=c[1],p=Object(n.useState)(""),f=Object(r.a)(p,2),h=f[0],g=f[1];return l.a.createElement("div",{className:"mycard"},l.a.createElement("div",{className:"card auth-card input-field"},l.a.createElement("h2",null,"Hollowgram"),l.a.createElement("input",{type:"text",placeholder:"email",value:h,onChange:function(e){return g(e.target.value)}}),l.a.createElement("input",{type:"password",placeholder:"password",value:u,onChange:function(e){return d(e.target.value)}}),l.a.createElement("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(h)?fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:u,email:h})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?m.a.toast({html:e.error,classes:"#c62828 red darken-3"}):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),m.a.toast({html:"signedin success",classes:"#43a047 green darken-1"}),a.push("/"))})).catch((function(e){console.log(e)})):m.a.toast({html:"invalid email",classes:"#c62828 red darken-3"})}},"Login"),l.a.createElement("h5",null,l.a.createElement(s.b,{to:"/signup"},"Dont have an account ?")),l.a.createElement("h6",null,l.a.createElement(s.b,{to:"/reset"},"Forgot password ?"))))},h=a(5),g=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useContext)(S),i=c.state,s=c.dispatch,u=Object(n.useState)(""),m=Object(r.a)(u,2),d=m[0],p=m[1];Object(n.useEffect)((function(){fetch("/mypost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),o(e.mypost)}))}),[]),Object(n.useEffect)((function(){if(d){var e=new FormData;e.append("file",d),e.append("upload_preset","insta-clone"),e.append("cloud_name","shola1"),fetch("https://api.cloudinary.com/v1_1/shola1/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){fetch("/updatepic",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({pic:e.url})}).then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.setItem("user",JSON.stringify(Object(h.a)(Object(h.a)({},i),{},{pic:e.pic}))),s({type:"UPDATEPIC",payload:e.pic})}))})).catch((function(e){console.log(e)}))}}),[d]);return l.a.createElement("div",{style:{maxWidth:"550px",margin:"0px auto"}},l.a.createElement("div",{style:{margin:"18px 0px",borderBottom:"1px solid grey"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},l.a.createElement("div",null,l.a.createElement("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:i?i.pic:"loading"})),l.a.createElement("div",null,l.a.createElement("h4",null,i?i.name:"loading"),l.a.createElement("h5",null,i?i.email:"loading"),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"}},l.a.createElement("h6",null,a.length," posts"),l.a.createElement("h6",null,i?i.followers.length:"0"," followers"),l.a.createElement("h6",null,i?i.following.length:"0"," following")))),l.a.createElement("div",{className:"file-field input-field",style:{margin:"10px"}},l.a.createElement("div",{className:"btn #64b5f6 blue darken-1"},l.a.createElement("span",null,"Update pic"),l.a.createElement("input",{type:"file",onChange:function(e){return t=e.target.files[0],void p(t);var t}})),l.a.createElement("div",{className:"file-path-wrapper"},l.a.createElement("input",{className:"file-path validate",type:"text"})))),l.a.createElement("div",{className:"gallery"},a.map((function(e){return l.a.createElement("img",{key:e._id,className:"item",src:e.photo,alt:e.title})}))))},E=function(){var e=Object(i.f)(),t=Object(n.useState)(""),a=Object(r.a)(t,2),o=a[0],c=a[1],u=Object(n.useState)(""),d=Object(r.a)(u,2),p=d[0],f=d[1],h=Object(n.useState)(""),g=Object(r.a)(h,2),E=g[0],b=g[1],y=Object(n.useState)(""),v=Object(r.a)(y,2),j=v[0],w=v[1],O=Object(n.useState)(void 0),N=Object(r.a)(O,2),S=N[0],k=N[1];Object(n.useEffect)((function(){S&&C()}),[S]);var C=function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(E)?fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,password:p,email:E,pic:S})}).then((function(e){return e.json()})).then((function(t){t.error?m.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(m.a.toast({html:t.message,classes:"#43a047 green darken-1"}),e.push("/signin"))})).catch((function(e){console.log(e)})):m.a.toast({html:"invalid email",classes:"#c62828 red darken-3"})},x=function(){j?function(){var e=new FormData;e.append("file",j),e.append("upload_preset","insta-clone"),e.append("cloud_name","shola1"),fetch("https://api.cloudinary.com/v1_1/shola1/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){k(e.url)})).catch((function(e){console.log(e)}))}():C()};return l.a.createElement("div",{className:"mycard"},l.a.createElement("div",{className:"card auth-card input-field"},l.a.createElement("h2",null,"Hollowgram"),l.a.createElement("input",{type:"text",placeholder:"name",value:o,onChange:function(e){return c(e.target.value)}}),l.a.createElement("input",{type:"text",placeholder:"email",value:E,onChange:function(e){return b(e.target.value)}}),l.a.createElement("input",{type:"password",placeholder:"password",value:p,onChange:function(e){return f(e.target.value)}}),l.a.createElement("div",{className:"file-field input-field"},l.a.createElement("div",{className:"btn #64b5f6 blue darken-1"},l.a.createElement("span",null,"Upload pic"),l.a.createElement("input",{type:"file",onChange:function(e){return w(e.target.files[0])}})),l.a.createElement("div",{className:"file-path-wrapper"},l.a.createElement("input",{className:"file-path validate",type:"text"}))),l.a.createElement("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){return x()}},"SignUP"),l.a.createElement("h5",null,l.a.createElement(s.b,{to:"/signin"},"Already have an account ?"))))},b=function(){var e=Object(i.f)(),t=Object(n.useState)(""),a=Object(r.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(""),u=Object(r.a)(s,2),d=u[0],p=u[1],f=Object(n.useState)(""),h=Object(r.a)(f,2),g=h[0],E=h[1],b=Object(n.useState)(""),y=Object(r.a)(b,2),v=y[0],j=y[1];Object(n.useEffect)((function(){v&&fetch("/createpost",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({title:o,body:d,pic:v})}).then((function(e){return e.json()})).then((function(t){t.error?m.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(m.a.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"}),e.push("/"))})).catch((function(e){console.log(e)}))}),[v]);return l.a.createElement("div",{className:"card input-filed",style:{margin:"30px auto",maxWidth:"500px",padding:"20px",textAlign:"center"}},l.a.createElement("input",{type:"text",placeholder:"title",value:o,onChange:function(e){return c(e.target.value)}}),l.a.createElement("input",{type:"text",placeholder:"body",value:d,onChange:function(e){return p(e.target.value)}}),l.a.createElement("div",{className:"file-field input-field"},l.a.createElement("div",{className:"btn #64b5f6 blue darken-1"},l.a.createElement("span",null,"Uplaod Image"),l.a.createElement("input",{type:"file",onChange:function(e){return E(e.target.files[0])}})),l.a.createElement("div",{className:"file-path-wrapper"},l.a.createElement("input",{className:"file-path validate",type:"text"}))),l.a.createElement("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){return function(){var e=new FormData;e.append("file",g),e.append("upload_preset","insta-clone"),e.append("cloud_name","shola1"),fetch("https://api.cloudinary.com/v1_1/shola1/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){j(e.url)})).catch((function(e){console.log(e)}))}()}},"Submit post"))},y=function(e,t){return"USER"===t.type?t.payload:"CLEAR"===t.type?null:"UPDATE"===t.type?Object(h.a)(Object(h.a)({},e),{},{followers:t.payload.followers,following:t.payload.following}):"UPDATEPIC"===t.type?Object(h.a)(Object(h.a)({},e),{},{pic:t.payload}):e},v=a(23),j=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useContext)(S),s=c.state,u=c.dispatch,m=Object(i.g)().userid,d=Object(n.useState)(!s||!s.following),p=Object(r.a)(d,2),f=p[0],g=p[1];Object(n.useEffect)((function(){fetch("/user/".concat(m),{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){o(e)}))}),[]);return l.a.createElement(l.a.Fragment,null,a?l.a.createElement("div",{style:{maxWidth:"550px",margin:"0px auto"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"}},l.a.createElement("div",null,l.a.createElement("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:a.user.pic})),l.a.createElement("div",null,l.a.createElement("h4",null,a.user.name),l.a.createElement("h5",null,a.user.email),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"}},l.a.createElement("h6",null,a.posts.length," posts"),l.a.createElement("h6",null,a.user.followers.length," followers"),l.a.createElement("h6",null,a.user.following.length," following")),f?l.a.createElement("button",{style:{margin:"10px"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("/follow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({followId:m})}).then((function(e){return e.json()})).then((function(e){u({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),o((function(t){return Object(h.a)(Object(h.a)({},t),{},{user:Object(h.a)(Object(h.a)({},t.user),{},{followers:[].concat(Object(v.a)(t.user.followers),[e._id])})})})),g(!1)}))}},"Follow"):l.a.createElement("button",{style:{margin:"10px"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("/unfollow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({unfollowId:m})}).then((function(e){return e.json()})).then((function(e){u({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),o((function(t){var a=t.user.followers.filter((function(t){return t!=e._id}));return Object(h.a)(Object(h.a)({},t),{},{user:Object(h.a)(Object(h.a)({},t.user),{},{followers:a})})})),g(!0)}))}},"UnFollow"))),l.a.createElement("div",{className:"gallery"},a.posts.map((function(e){return l.a.createElement("img",{key:e._id,className:"item",src:e.photo,alt:e.title})})))):l.a.createElement("h2",null,"loading...!"))},w=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useContext)(S),i=c.state;c.dispatch;Object(n.useEffect)((function(){fetch("/getsubpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),o(e.posts)}))}),[]);return l.a.createElement("div",{className:"home"},a.map((function(e){return l.a.createElement("div",{className:"card home-card",key:e._id},l.a.createElement("h5",{style:{padding:"5px"}},l.a.createElement(s.b,{to:e.postedBy._id!==i._id?"/profile/"+e.postedBy._id:"/profile"},e.postedBy.name)," ",e.postedBy._id==i._id&&l.a.createElement("i",{className:"material-icons",style:{float:"right"},onClick:function(){return t=e._id,void fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.filter((function(t){return t._id!==e._id}));o(t)}));var t}},"delete")),l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{src:e.photo})),l.a.createElement("div",{className:"card-content"},l.a.createElement("i",{className:"material-icons",style:{color:"red"}},"favorite"),e.likes.includes(i._id)?l.a.createElement("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=a.map((function(t){return t._id===e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))}},"thumb_down"):l.a.createElement("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=a.map((function(t){return t._id===e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))}},"thumb_up"),l.a.createElement("h6",null,e.likes.length," likes"),l.a.createElement("h6",null,e.title),l.a.createElement("p",null,e.body),e.comments.map((function(e){return l.a.createElement("h6",{key:e._id},l.a.createElement("span",{style:{fontWeight:"500"}},e.postedBy.name)," ",e.text)})),l.a.createElement("form",{onSubmit:function(t){var n,l;t.preventDefault(),n=t.target[0].value,l=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:l,text:n})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.map((function(t){return t._id===e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))}},l.a.createElement("input",{type:"text",placeholder:"add a comment"}))))})))},O=function(){var e=Object(i.f)(),t=Object(n.useState)(""),a=Object(r.a)(t,2),o=a[0],c=a[1];return l.a.createElement("div",{className:"mycard"},l.a.createElement("div",{className:"card auth-card input-field"},l.a.createElement("h2",null,"Hollowgram"),l.a.createElement("input",{type:"text",placeholder:"email",value:o,onChange:function(e){return c(e.target.value)}}),l.a.createElement("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(o)?fetch("/reset-password",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o})}).then((function(e){return e.json()})).then((function(t){t.error?m.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(m.a.toast({html:t.message,classes:"#43a047 green darken-1"}),e.push("/signin"))})).catch((function(e){console.log(e)})):m.a.toast({html:"invalid email",classes:"#c62828 red darken-3"})}},"reset password")))},N=function(){var e=Object(i.f)(),t=Object(n.useState)(""),a=Object(r.a)(t,2),o=a[0],c=a[1],s=Object(i.g)().token;console.log(s);return l.a.createElement("div",{className:"mycard"},l.a.createElement("div",{className:"card auth-card input-field"},l.a.createElement("h2",null,"Instagram"),l.a.createElement("input",{type:"password",placeholder:"enter a new password",value:o,onChange:function(e){return c(e.target.value)}}),l.a.createElement("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("/new-password",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:o,token:s})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.error?m.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(m.a.toast({html:t.message,classes:"#43a047 green darken-1"}),e.push("/signin"))})).catch((function(e){console.log(e)}))}},"Update password")))},S=Object(n.createContext)(),k=function(){var e=Object(i.f)(),t=Object(n.useContext)(S),a=(t.state,t.dispatch);return Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t?a({type:"USER",payload:t}):e.location.pathname.startsWith("/reset")||e.push("/signin")}),[]),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(p,null)),l.a.createElement(i.a,{path:"/signin"},l.a.createElement(f,null)),l.a.createElement(i.a,{path:"/signup"},l.a.createElement(E,null)),l.a.createElement(i.a,{exact:!0,path:"/profile"},l.a.createElement(g,null)),l.a.createElement(i.a,{path:"/create"},l.a.createElement(b,null)),l.a.createElement(i.a,{path:"/profile/:userid"},l.a.createElement(j,null)),l.a.createElement(i.a,{path:"/myfollowingpost"},l.a.createElement(w,null)),l.a.createElement(i.a,{exact:!0,path:"/reset"},l.a.createElement(O,null)),l.a.createElement(i.a,{path:"/reset/:token"},l.a.createElement(N,null)))};var C=function(){var e=Object(n.useReducer)(y,null),t=Object(r.a)(e,2),a=t[0],o=t[1];return l.a.createElement(S.Provider,{value:{state:a,dispatch:o}},l.a.createElement(s.a,null,l.a.createElement(d,null),l.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.f056203c.chunk.js.map