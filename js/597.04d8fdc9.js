"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[597],{46597:function(s,r,e){e.r(r),e.d(r,{default:function(){return c}});var o=function(){var s=this,r=s._self._c;return r("div",{staticClass:"auth-wrapper"},[r("Loader",{directives:[{name:"show",rawName:"v-show",value:s.loader,expression:"loader"}]}),r("div",{staticClass:"auth-content"},[r("div",{staticClass:"card rounded"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"text-center"},[r("img",{staticClass:"img-fluid mb-4",attrs:{src:e(4979),alt:""}}),r("span",{directives:[{name:"show",rawName:"v-show",value:s.showUserError,expression:"showUserError"}],staticClass:"error-message"},[s._v(s._s(s.userErrorMessage))])]),r("form",{on:{submit:function(r){return r.preventDefault(),s.loginSend.apply(null,arguments)}}},[r("div",{staticClass:"form-group mb-3"},[r("label",{staticClass:"form-label text-left fw-bold"},[s._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:s.login.login,expression:"login.login"}],ref:"emailInput",staticClass:"form-control",class:{"has-error":s.errores.login},attrs:{type:"text",placeholder:"guest@gmail.com"},domProps:{value:s.login.login},on:{input:[function(r){r.target.composing||s.$set(s.login,"login",r.target.value)},function(r){s.errores.login=!1}]}}),s.errores.login?r("span",{staticClass:"error-message"},[s._v(s._s(s.mensajes.email))]):s._e()]),r("div",{staticClass:"form-group mb-3"},[r("label",{staticClass:"form-label justify-content-end fw-bold"},[s._v("Contraseña")]),r("input",{directives:[{name:"model",rawName:"v-model",value:s.login.password,expression:"login.password"}],staticClass:"form-control",class:{"has-error":s.errores.password},attrs:{type:"password",placeholder:"Contraseña"},domProps:{value:s.login.password},on:{input:[function(r){r.target.composing||s.$set(s.login,"password",r.target.value)},function(r){s.errores.password=!1}],keyup:function(r){return!r.type.indexOf("key")&&s._k(r.keyCode,"enter",13,r.key,"Enter")?null:s.loginSend.apply(null,arguments)}}}),s.errores.password?r("span",{staticClass:"error-message"},[s._v("Ingrese una contraseña.")]):s._e()]),r("div",{staticClass:"text-center pt-3"},[r("button",{staticClass:"btn btn-lg btn-primary mb-4 w-100 fw-bold rounded-pill",on:{click:s.loginSend}},[s._v("Iniciar Sesión")])])])])])])])])],1)},t=[],a=(e(57658),e(14329)),i=e(63822),l=(e(42492),{name:"Login",components:{Loader:a.Z},data(){return{login:{login:null,password:null},errores:{login:!1,password:!1},mensajes:{email:null},url:"",showUserError:!1,showOtherError:!1,userErrorMessage:"",otherErrorMessage:"",loader:!1}},created(){this.url=this.$store.getters.get__url},methods:{...(0,i.nv)(["get","post"]),validateEmail(s){const r=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;return r.test(s)},validarCorreo(){this.login.login?this.validateEmail(this.login.login)?(this.errores.login=!1,this.mensajes.email=null):(this.errores.login=!0,this.mensajes.email="Ingrese un email válido."):(this.errores.login=!0,this.mensajes.email="Ingrese un email.")},validarCampo(s,r){null===this.login[s]||""===this.login[s]?this.errores[r]=!0:this.errores[r]=!1},validarUser(){this.validarCampo("login","login"),null===this.login.login||""===this.login.login?(this.errores.login=!0,this.mensajes.email="Ingrese un email."):this.validarCorreo()},validarPassword(){this.validarCampo("password","password")},validarCampos(){return this.validarUser(),this.validarPassword(),!Object.values(this.errores).some((s=>s))},loginSend:async function(){if(this.validarCampos())try{const s=await this.post({url:`${this.url}/user/login`,params:this.login});200===s.state?(console.log(s),this.showUserError=!1,this.showOtherError=!1,this.userErrorMessage="",this.otherErrorMessage="","ABOGADO"==s.user.usu_rol&&this.$store.commit("mt_set_aboid",s.user.abo_id),this.$store.commit("mt_set_user",s.user),this.$router.push({path:"/sisge"})):(this.showUserError=!0,this.showOtherError=!1,this.userErrorMessage="Usuario o contraseña incorrectos.",console.log(this.userErrorMessage))}catch(s){this.showUserError=!1,this.showOtherError=!0,this.otherErrorMessage=`Error al iniciar sesión: ${s.message}`,console.log(this.otherErrorMessage)}else console.log("error")}},mounted(){this.$refs.emailInput.focus()}}),n=l,u=e(1001),g=(0,u.Z)(n,o,t,!1,null,"00f9816c",null),c=g.exports},4979:function(s,r,e){s.exports=e.p+"img/logo-unprg.ea335e00.png"}}]);
//# sourceMappingURL=597.04d8fdc9.js.map