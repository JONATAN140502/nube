"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[230],{70230:function(t,s,a){a.r(s),a.d(s,{default:function(){return g}});var e=function(){var t=this,s=t._self._c;return s("section",{staticClass:"pc-container pb-4"},[s("div",{staticClass:"pcoded-content pt-4"},[s("div",{staticClass:"row mb-3 pt-0"},[s("div",{staticClass:"d-flex align-items-center"},[s("h5",{staticClass:"text-dark fw-bold"},[t._v("Detalle del Demandado")]),s("button",{staticClass:"btn btn-lg btn-secondary px-3 ml-auto",on:{click:t.goBack}},[s("i",{attrs:{"data-feather":"arrow-left"}}),t._v(" Volver atras ")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card shadow"},[t._m(0),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row px-4"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 data"},[s("div",{staticClass:"input-group"},[t._m(1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.nombreCompleto,expression:"nombreCompleto"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.nombreCompleto},on:{input:function(s){s.target.composing||(t.nombreCompleto=s.target.value)}}})])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"input-group"},[t._m(2),s("input",{directives:[{name:"model",rawName:"v-model",value:t.correo,expression:"correo"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.correo},on:{input:function(s){s.target.composing||(t.correo=s.target.value)}}})])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"input-group"},[t._m(3),s("input",{directives:[{name:"model",rawName:"v-model",value:t.telefono,expression:"telefono"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.telefono},on:{input:function(s){s.target.composing||(t.telefono=s.target.value)}}})])])]),s("div",{staticClass:"row mt-2"},[s("div",{staticClass:"col-md-4 data"},[s("div",{staticClass:"input-group"},[t._m(4),s("input",{directives:[{name:"model",rawName:"v-model",value:t.direccion.dep_nombre,expression:"direccion.dep_nombre"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.direccion.dep_nombre},on:{input:function(s){s.target.composing||t.$set(t.direccion,"dep_nombre",s.target.value)}}})])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"input-group"},[t._m(5),s("input",{directives:[{name:"model",rawName:"v-model",value:t.provinciaDistrito,expression:"provinciaDistrito"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.provinciaDistrito},on:{input:function(s){s.target.composing||(t.provinciaDistrito=s.target.value)}}})])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"input-group"},[t._m(6),s("input",{directives:[{name:"model",rawName:"v-model",value:t.direccion.dir_calle_av,expression:"direccion.dir_calle_av"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.direccion.dir_calle_av},on:{input:function(s){s.target.composing||t.$set(t.direccion,"dir_calle_av",s.target.value)}}})])])])])])])])])]),s("Historial")],1)])},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"card-header py-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col md-6"},[s("h5",{staticClass:"mt-2"},[t._v("Informacion Personal del demandado")])]),s("div",{staticClass:"col-md-6 d-flex"})])])},function(){var t=this,s=t._self._c;return s("span",{staticClass:"input-group-text"},[s("img",{attrs:{src:a(13816),alt:""}})])},function(){var t=this,s=t._self._c;return s("span",{staticClass:"input-group-text"},[s("img",{attrs:{src:a(36829),alt:""}})])},function(){var t=this,s=t._self._c;return s("span",{staticClass:"input-group-text"},[s("img",{attrs:{src:a(52064),alt:""}})])},function(){var t=this,s=t._self._c;return s("span",{staticClass:"input-group-text"},[s("img",{attrs:{src:a(92830),alt:""}})])},function(){var t=this,s=t._self._c;return s("span",{staticClass:"input-group-text"},[s("img",{attrs:{src:a(58282),alt:""}})])},function(){var t=this,s=t._self._c;return s("span",{staticClass:"input-group-text"},[s("img",{attrs:{src:a(18252),alt:""}})])}],o=a(98164),r=a.n(o),n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card shadow rounded"},[t._m(0),0===t.historiales.length?s("p",{staticClass:"text-center text-secondary py-4"},[t._v("Sin datos en el historial.")]):s("div",{staticClass:"card-body px-5 py-2"},[s("div",{staticClass:"row px-3"},[s("ul",{staticClass:"sessions"},t._l(t.historiales,(function(a){return s("li",{key:a.his_id},[s("div",{staticClass:"row"},[s("div",{staticClass:"left col-md-2"},[s("div",{staticClass:"time"},[t._v(t._s(a.his_fecha_hora))]),s("p",[t._v(t._s(a.his_medio_comuniacion))])]),s("p",{staticClass:"col-md-8"},[t._v(t._s(a.his_detalle))])])])})),0)])])])])])},c=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"card-header"},[s("h5",[t._v("Historial de Interacciones")])])}],l={name:"historial",created(){this.cargarHistorialDemandado()},data(){return{historiales:[],loading:!0}},computed:{doc(){return this.$route.params.doc}},methods:{async cargarHistorialDemandado(){try{const t=await this.$axios.get(`${this.$store.getters.get__url}/demandado/historial/${this.doc}`,{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});this.historiales=t.data.data}catch(t){this.$handleApiError(t,"cargar hisorial del demandado")}}}},d=l,p=a(1001),m=(0,p.Z)(d,n,c,!1,null,"84701c36",null),u=m.exports,v={components:{Historial:u},props:["doc"],name:"expedienteAll",created(){this.cargarDetallesdemandado()},data(){return{persona:[],direccion:[],nombreCompleto:null,provinciaDistrito:null,correo:null,telefono:null}},mounted(){this.$nextTick((()=>{r().replace()}))},methods:{async cargarDetallesdemandado(){try{this.$showLoadingAlert();const t=await this.$axios.get(`${this.$store.getters.get__url}/demandante/detalledemandante/${this.doc}`,{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});this.persona=t.data.data.persona,this.direccion=t.data.data.direccion,"NATURAL"===this.persona.tipo_persona?(this.nombreCompleto=`${this.persona.nat_nombres} ${this.persona.nat_apellido_paterno} ${this.persona.nat_apellido_materno}`,this.provinciaDistrito=`${this.direccion.pro_nombre} / ${this.direccion.dis_nombre}`,this.telefono=this.persona.nat_telefono,this.correo=this.persona.nat_correo):(this.nombreCompleto=this.persona.jur_razon_social,this.provinciaDistrito=`${this.direccion.pro_nombre} / ${this.direccion.dis_nombre}`,this.telefono=this.persona.jur_telefono,this.correo=this.persona.jur_correo),this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"cargar detalles demandado")}},goBack(){this.$router.go(-1)}}},h=v,_=(0,p.Z)(h,e,i,!1,null,"62ce425a",null),g=_.exports},18252:function(t,s,a){t.exports=a.p+"img/home-24.8f6a60d7.svg"},36829:function(t,s,a){t.exports=a.p+"img/mail.8f08d591.svg"},58282:function(t,s,a){t.exports=a.p+"img/map-pin.f6910964.svg"},92830:function(t,s,a){t.exports=a.p+"img/map.fd3e9872.svg"},52064:function(t,s,a){t.exports=a.p+"img/phone-call.bfaa423a.svg"},13816:function(t,s,a){t.exports=a.p+"img/user.26424a9c.svg"}}]);
//# sourceMappingURL=230.8316d14e.js.map