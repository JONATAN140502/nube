"use strict";(self["webpackChunksisge"]=self["webpackChunksisge"]||[]).push([[7322],{67322:function(e,s,r){r.r(s),r.d(s,{default:function(){return c}});var t=function(){var e=this,s=e._self._c;return s("div",{staticClass:"auth-wrapper pb-0 bg-light"},[s("div",{staticClass:"auth-content"},[s("div",{staticClass:"card"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"text-center"},[s("h1",{staticClass:"fw-bold fs-1"},[e._v("SISGE")]),s("h6",{staticClass:"pb-3 text-secondary"},[e._v("Sistema de Gestión de Expedientes")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.showUserError,expression:"showUserError"}],staticClass:"text-danger"},[e._v(e._s(e.userErrorMessage))])]),s("form",{on:{submit:function(s){return s.preventDefault(),e.authLogin.apply(null,arguments)}}},[s("div",{staticClass:"form-group mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"email"}},[e._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.credenciales.login,expression:"credenciales.login"}],ref:"emailInput",staticClass:"form-control text-secondary",class:{"has-error":e.errores.login},attrs:{type:"text",id:"email"},domProps:{value:e.credenciales.login},on:{input:[function(s){s.target.composing||e.$set(e.credenciales,"login",s.target.value)},function(s){return e.validarCampo("login")}]}}),e.errores.login?s("span",{staticClass:"text-danger"},[e._v("Ingrese un email.")]):e._e()]),s("div",{staticClass:"form-group mb-4"},[s("label",{staticClass:"form-label",attrs:{for:"password"}},[e._v("Contraseña")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.credenciales.password,expression:"credenciales.password"}],staticClass:"form-control text-secondary",class:{"has-error":e.errores.password},attrs:{type:"password",id:"password"},domProps:{value:e.credenciales.password},on:{input:[function(s){s.target.composing||e.$set(e.credenciales,"password",s.target.value)},function(s){return e.validarCampo("password")}],keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.authLogin.apply(null,arguments)}}}),e.errores.password?s("span",{staticClass:"text-danger"},[e._v("Ingrese una contraseña.")]):e._e()]),s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-primary w-100",attrs:{type:"submit"}},[e.isLoading?s("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):s("span",[e._v("Iniciar Sesión")])])])])])])])])])])},a=[],i=(r(44114),r(28082),{name:"Login",data(){return{credenciales:{login:"",password:""},errores:{login:!1,password:!1},showUserError:!1,userErrorMessage:"",isLoading:!1}},created(){this.url=this.$store.getters.get__url},mounted(){this.$refs.emailInput.focus()},methods:{validarCampo(e){this.errores[e]=""===this.credenciales[e]},validarCampos(){const e=Object.keys(this.errores);return e.forEach((e=>{this.validarCampo(e)})),e.every((e=>!this.errores[e]))},async authLogin(){if(this.isLoading=!0,this.validarCampos())try{const e=await this.$postData("user/login",this,this.credenciales);console.log(e),200===e.state?(this.$store.commit("mt_set_user",e.user),this.$router.push({path:"/home"})):this.handleFailedLogin("Usuario o contraseña incorrectos.")}catch(e){this.handleFailedLogin(`Error al iniciar sesión: ${e.message}`)}this.isLoading=!1},handleFailedLogin(e){this.showUserError=!0,this.userErrorMessage=e}}}),o=i,n=r(81656),l=(0,n.A)(o,t,a,!1,null,"819b67f2",null),c=l.exports},28082:function(e,s,r){var t=r(98355),a=r(55129);const i=t.A.create({baseURL:a.A.getters.get__url,timeout:1e4});i.interceptors.request.use((e=>{const s=a.A.getters.get__token;return s&&(e.headers.Authorization=`Bearer ${s}`),e}),(e=>Promise.reject(e))),i.interceptors.response.use((e=>e),(e=>{let s=0;const r=3,t=()=>(s++,i(e.config));return e.response&&e.response.status>=500&&s<r?t():Promise.reject(e)})),s.A=i}}]);
//# sourceMappingURL=7322.8ad0e17f.js.map