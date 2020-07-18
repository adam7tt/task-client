(function(t){function e(e){for(var s,r,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},o=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2cfd":function(t,e,a){"use strict";var s=a("e314"),n=a.n(s);n.a},"315f":function(t,e,a){},"42d3":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("d3b7"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-nav"),a("router-view",{staticClass:"page"})],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"is-beige3"},[a("template",{slot:"brand"},[a("b-navbar-item",{staticClass:"is-size-3 custom-logo has-text-greyblue",attrs:{tag:"router-link",to:{path:"/"}}},[a("p",{staticClass:"is-size-3 custom-logo has-text-greyblue"},[t._v("Taskr")])])],1),a("template",{slot:"start"},[t.loggedIn?a("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/dashboard"}}},[t._v(" Dashboard ")]):t._e()],1),a("template",{slot:"end"},[a("b-navbar-item",{attrs:{tag:"div"}},[a("div",{staticClass:"buttons"},[t.loggedIn?a("b-button",{attrs:{type:"is-danger"},on:{click:t.logout}},[t._v(" Logout ")]):a("b-button",{attrs:{to:"/login",tag:"router-link",type:"is-greyblue"}},[t._v(" Login ")])],1)])],1)],2)},i=[],c=a("5530"),l=a("2f62"),u=Object(c["a"])({},Object(l["b"])(["loggedIn"])),d={computed:Object(c["a"])({},u),methods:{logout:function(){this.$store.dispatch("logout")}}},p=d,m=(a("bc84"),a("2877")),f=Object(m["a"])(p,r,i,!1,null,null,null),v=f.exports,h={components:{AppNav:v}},b=h,g=(a("5c0b"),Object(m["a"])(b,n,o,!1,null,null,null)),k=g.exports,_=(a("45fc"),a("8c4f")),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home centerall"},[a("div",{staticClass:"child"},[a("h1",{staticClass:"is-size-1 has-text-centered"},[t._v("Welcome to Taskr!")]),t.loggedIn?t._e():a("div",{staticClass:"has-text-centered"},[t._v(" To use this app you'll need to "),a("router-link",{attrs:{to:"/login"}},[t._v(" Login ")]),t._v(" or "),a("router-link",{attrs:{to:"/register"}},[t._v(" Register ")])],1)])])},y=[],w={computed:Object(c["a"])({},u)},T=w,x=(a("c3e1"),Object(m["a"])(T,C,y,!1,null,"a8e93f6c",null)),O=x.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container centerall"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content login"},[a("p",{staticClass:"title"},[t._v(" Don't have an account? ")]),a("p",{staticClass:"subtitle"},[a("router-link",{attrs:{to:"/register"}},[t._v(" Click here to register. ")])],1),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Email")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input is-rounded",attrs:{name:"email",type:"text",placeholder:"Email address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Password")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input is-rounded",attrs:{name:"password",type:"password",placeholder:"My password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])])]),a("footer",{staticClass:"card-footer"},[a("b-button",{attrs:{type:"is-greyblue submit",expanded:""},nativeOn:{click:function(e){return t.login(e)}}},[t._v("Login")])],1)])])])},E=[],S={data:function(){return{email:"",password:"",error:null}},methods:{login:function(){var t=this;this.$store.dispatch("login",{email:this.email,password:this.password}).then((function(){t.$router.push({name:"dashboard"})})).catch((function(e){t.error=e.response}))}}},j=S,$=(a("ef09"),Object(m["a"])(j,A,E,!1,null,"796529c6",null)),P=$.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container centerall"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content login"},[a("p",{staticClass:"title"},[t._v(" Already a member? ")]),a("p",{staticClass:"subtitle"},[a("router-link",{attrs:{to:"/login"}},[t._v(" Login here. ")])],1),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Name")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input is-rounded",attrs:{type:"text",placeholder:"Enter your name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Email")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input is-rounded",attrs:{type:"email",placeholder:"Email address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Password")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input is-rounded",attrs:{type:"password",placeholder:"My password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])])]),a("footer",{staticClass:"card-footer"},[a("b-button",{attrs:{type:"is-greyblue submit",expanded:""},nativeOn:{click:function(e){return t.register(e)}}},[t._v("Register")])],1)])])])},D=[],N=(a("b0c0"),{data:function(){return{name:"",email:"",password:"",errors:null}},methods:{register:function(){var t=this;this.$store.dispatch("register",{name:this.name,email:this.email,password:this.password}).then((function(){t.$router.push({name:"dashboard"})})).catch((function(e){t.errors=e.response.data.errors}))}}}),R=N,L=(a("2cfd"),Object(m["a"])(R,I,D,!1,null,null,null)),M=L.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",{staticClass:"is-size-1 has-text-centered"},[t._v("My Tasks")]),a("ul",t._l(t.filteredTasks,(function(e,s){return a("li",{key:s},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-1"},[a("div",{staticClass:"checkbox-container circular-container"},[a("label",{staticClass:"checkbox-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"task.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{click:function(a){return t.editTask(e)},change:function(a){var s=e.completed,n=a.target,o=!!n.checked;if(Array.isArray(s)){var r=null,i=t._i(s,r);n.checked?i<0&&t.$set(e,"completed",s.concat([r])):i>-1&&t.$set(e,"completed",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(e,"completed",o)}}}),a("span",{staticClass:"checkbox-custom circular"})])])]),a("div",{staticClass:"column is-10"},[a("p",{staticClass:"px-2",class:[e.completed?"completed":""]},[t._v(t._s(e.description))])]),a("div",{staticClass:"column is-1"},[a("b-button",{attrs:{type:"is-danger is-small",rounded:""},on:{click:function(a){return t.deleteTask(e)}}},[t._v("X")])],1)])])})),0),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-12"},[a("b-field",[a("b-input",{attrs:{id:"taskInput",type:"textarea",placeholder:"What needs to be done?",rounded:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask(e)}},model:{value:t.newTask,callback:function(e){t.newTask=e},expression:"newTask"}})],1)],1)]),a("div",{staticClass:"buttons"},[a("b-button",{attrs:{name:"completeAll"},on:{click:function(e){return t.completeAll(t.tasks)}}},[t._v("Complete All")]),a("b-button",{on:{click:function(e){return t.filterTasks("complete")}}},[t._v("Completed")]),a("b-button",{on:{click:function(e){return t.filterTasks("incomplete")}}},[t._v("Todo")]),a("b-button",{on:{click:function(e){return t.filterTasks("all")}}},[t._v("All")])],1)])},z=[],J=(a("a4d3"),a("e01a"),a("4de4"),a("c975"),a("a434"),a("b85c")),q=a("bc3a"),W=a.n(q),B={data:function(){return{newTask:"",editedTask:null,tasks:[],filteredTasks:[]}},methods:{addTask:function(){var t=this;W.a.post("https://morishita-task-app.herokuapp.com/tasks",{description:this.newTask}).then((function(e){t.tasks.push(e.data),t.newTask=""})).catch((function(t){console.log(t)}));var e=document.querySelector("#taskInput");e.textContent="asdads"},editTask:function(t){t.completed=!t.completed,W.a.patch("https://morishita-task-app.herokuapp.com/tasks/"+t._id,{description:t.description,completed:t.completed}).then((function(e){t=e.data,t.completed=e.data.completed})).catch((function(t){console.log(t)}))},filterTasks:function(t){if("complete"!==t)return this.filteredTasks="incomplete"===t?this.tasks.filter((function(t){return!1===t.completed})):this.tasks;this.filteredTasks=this.tasks.filter((function(t){return!0===t.completed}))},deleteTask:function(t){var e=this.tasks.indexOf(t);this.tasks.splice(e,1),W.a.delete("https://morishita-task-app.herokuapp.com/tasks/"+t._id).then((function(t){})).catch((function(t){console.log(t)}))},completeAll:function(t){var e,a="",s=Object(J["a"])(t);try{for(s.s();!(e=s.n()).done;)a=e.value,a.completed=!0,W.a.patch("https://morishita-task-app.herokuapp.com/tasks/"+a._id,{description:a.description,completed:a.completed}).then((function(t){a=t.data})).catch((function(t){console.log(t)}))}catch(n){s.e(n)}finally{s.f()}}},computed:{},watch:{tasks:function(t){this.tasks=t}},created:function(){var t=this;W.a.get("https://morishita-task-app.herokuapp.com/tasks").then((function(e){t.filteredTasks=e.data,t.tasks=e.data})).catch((function(t){console.error(t)}))}},X=B,F=(a("b985"),Object(m["a"])(X,U,z,!1,null,null,null)),G=F.exports;s["a"].use(_["a"]);var H=[{path:"/",name:"home",component:O},{path:"/register",name:"register",component:M},{path:"/login",name:"Login",component:P},{path:"/dashboard",name:"dashboard",component:G,meta:{requiresAuth:!0}}],K=new _["a"]({mode:"history",routes:H});K.beforeEach((function(t,e,a){var s=localStorage.getItem("user");t.matched.some((function(t){return t.meta.requiresAuth}))&&!s&&a("/"),a()}));var Q=K;s["a"].use(l["a"]);var V=new l["a"].Store({state:{user:null},mutations:{SET_USER_DATA:function(t,e){t.user=e,localStorage.setItem("user",JSON.stringify(e)),W.a.defaults.headers.common["Authorization"]="Bearer ".concat(e.token)},CLEAR_USER_DATA:function(){localStorage.removeItem("user"),location.reload()}},actions:{register:function(t,e){var a=t.commit;return W.a.post("https://morishita-task-app.herokuapp.com/users",e).then((function(t){var e=t.data;a("SET_USER_DATA",e)}))},login:function(t,e){var a=t.commit;return W.a.post("https://morishita-task-app.herokuapp.com/users/login",e).then((function(t){var e=t.data;a("SET_USER_DATA",e)}))},logout:function(t){var e=t.commit;e("CLEAR_USER_DATA")}},getters:{loggedIn:function(t){return!!t.user}}}),Y=a("289d");a("5abe");s["a"].config.productionTip=!1,s["a"].use(Y["a"]),new s["a"]({router:Q,store:V,created:function(){var t=this,e=localStorage.getItem("user");if(e){var a=JSON.parse(e);this.$store.commit("SET_USER_DATA",a)}W.a.interceptors.response.use((function(t){return t}),(function(e){return 401===e.response.status&&t.$store.dispatch("logout"),Promise.reject(e)}))},render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"9c0c":function(t,e,a){},a4e2:function(t,e,a){},b985:function(t,e,a){"use strict";var s=a("de7f"),n=a.n(s);n.a},bc84:function(t,e,a){"use strict";var s=a("42d3"),n=a.n(s);n.a},c3e1:function(t,e,a){"use strict";var s=a("315f"),n=a.n(s);n.a},de7f:function(t,e,a){},e314:function(t,e,a){},ef09:function(t,e,a){"use strict";var s=a("a4e2"),n=a.n(s);n.a}});
//# sourceMappingURL=app.95966590.js.map