"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[340],{80959:function(e,s,r){r.r(s),r.d(s,{default:function(){return c}});var t=function(){var e=this,s=e._self._c;return s("div",{staticClass:"auth-wrapper pb-0"},[s("div",{staticClass:"auth-content"},[s("div",{staticClass:"card rounded"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"text-center"},[s("img",{staticClass:"img-fluid mb-4",attrs:{src:r(93763),alt:"Logo"}}),s("h6",{staticClass:"pb-3 text-secondary"},[e._v("Sistema de Gestión de Expedientes")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.showUserError,expression:"showUserError"}],staticClass:"text-danger"},[e._v(e._s(e.userErrorMessage))])]),s("form",{on:{submit:function(s){return s.preventDefault(),e.authenticateUser.apply(null,arguments)}}},[s("div",{staticClass:"form-group mb-3"},[s("label",{staticClass:"form-label text-left"},[e._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.credenciales.login,expression:"credenciales.login"}],ref:"emailInput",staticClass:"form-control text-secondary",class:{"has-error":e.errores.login},attrs:{type:"text"},domProps:{value:e.credenciales.login},on:{input:[function(s){s.target.composing||e.$set(e.credenciales,"login",s.target.value)},function(s){return e.validarCampo("login")}]}}),e.errores.login?s("span",{staticClass:"text-danger"},[e._v("Ingrese un email.")]):e._e()]),s("div",{staticClass:"form-group mb-4"},[s("label",{staticClass:"form-label text-left"},[e._v("Contraseña")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.credenciales.password,expression:"credenciales.password"}],staticClass:"form-control text-secondary",class:{"has-error":e.errores.password},attrs:{type:"password"},domProps:{value:e.credenciales.password},on:{input:[function(s){s.target.composing||e.$set(e.credenciales,"password",s.target.value)},function(s){return e.validarCampo("password")}],keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.authenticateUser.apply(null,arguments)}}}),e.errores.password?s("span",{staticClass:"text-danger"},[e._v("Ingrese una contraseña.")]):e._e()]),s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-lg btn-primary w-100 fw-bold rounded",attrs:{type:"submit"}},[e.isLoading?s("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):s("span",[e._v("Iniciar Sesión")])])])])])])])])])])},a=[],i=(r(44114),{name:"Login",data(){return{credenciales:{login:"",password:""},errores:{login:!1,password:!1},showUserError:!1,userErrorMessage:"",isLoading:!1}},created(){this.url=this.$store.getters.get__url},mounted(){this.$refs.emailInput.focus()},methods:{validarCampo(e){this.errores[e]=""===this.credenciales[e]},validarCampos(){return Object.keys(this.errores).forEach((e=>{this.validarCampo(e,e)})),!Object.values(this.errores).some((e=>e))},async authenticateUser(){if(this.isLoading=!0,this.validateFields())try{const e=await this.$axios.post(`${this.url}/user/login`,this.credenciales);200===e.data.state?this.handleSuccessfulLogin(e.data.user):this.handleFailedLogin("Usuario o contraseña incorrectos.")}catch(e){this.handleFailedLogin(`Error al iniciar sesión: ${e.message}`)}this.isLoading=!1},validateFields(){return Object.keys(this.errores).forEach((e=>{this.errores[e]=""===this.credenciales[e]})),!Object.values(this.errores).some((e=>e))},handleSuccessfulLogin(e){this.showUserError=!1,this.userErrorMessage="",this.$store.commit("mt_set_user",e),this.$router.push({path:"/home"})},handleFailedLogin(e){this.showUserError=!0,this.userErrorMessage=e}}}),o=i,n=r(81656),l=(0,n.A)(o,t,a,!1,null,"fa1f90ae",null),c=l.exports},93763:function(e,s,r){e.exports=r.p+"img/logo-unprg.ea335e00.png"}}]);
//# sourceMappingURL=340.a17bdc2d.js.map