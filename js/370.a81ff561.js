"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[370],{37370:function(t,a,e){e.r(a),e.d(a,{default:function(){return p}});var s=function(){var t=this,a=t._self._c;return a("section",{staticClass:"pc-container pb-4"},[a("div",{staticClass:"pcoded-content"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card shadow"},[t._m(1),a("div",{staticClass:"card-body pb-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"NumeroExpediente"}},[t._v("N° Expediente")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.historial.exp_id,expression:"historial.exp_id"}],staticClass:"form-control",attrs:{id:"NumeroExpediente"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.historial,"exp_id",a.target.multiple?e:e[0])}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("--Seleccionar")]),t._l(t.expedientes,(function(e){return a("option",{domProps:{value:e.exp_id}},[t._v(" "+t._s(e.exp_numero)+" ")])}))],2)])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Demandante")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.demandante,expression:"demandante"}],staticClass:"form-control border-0",attrs:{type:"text",disabled:""},domProps:{value:t.demandante},on:{input:function(a){a.target.composing||(t.demandante=a.target.value)}}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Fecha")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.historial.his_fecha_hora,expression:"historial.his_fecha_hora"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.historial.his_fecha_hora},on:{input:function(a){a.target.composing||t.$set(t.historial,"his_fecha_hora",a.target.value)}}})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Medio de Contacto")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.historial.his_medio_comuniacion,expression:"historial.his_medio_comuniacion"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.historial,"his_medio_comuniacion",a.target.multiple?e:e[0])}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("--Seleccionar")]),a("option",{attrs:{value:"Visita Presencial"}},[t._v("Presencial")]),a("option",{attrs:{value:"Llamada Telefonica"}},[t._v("Llamada telefonica")]),a("option",{attrs:{value:"Correo Electronico"}},[t._v("Correo Electronico")])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"Detalles"}},[t._v("Detalles o Resumen de la Comunicacion")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.historial.his_detalle,expression:"historial.his_detalle"}],staticClass:"form-control",attrs:{id:"Detalles"},domProps:{value:t.historial.his_detalle},on:{input:function(a){a.target.composing||t.$set(t.historial,"his_detalle",a.target.value)}}})])])]),a("div",{staticClass:"card-footer border-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"d-flex justify-content-end"},[t.mostrarMensajeError?a("div",{staticClass:"text-danger mt-3"},[t._v(" Complete todos los campos. ")]):t._e(),a("button",{staticClass:"btn btn-lg btn-secondary mx-2 px-3",on:{click:t.goBack}},[a("i",{attrs:{"data-feather":"arrow-left"}}),t._v(" Volver atras ")]),a("button",{staticClass:"btn btn-lg btn-primary px-4",on:{click:t.guardar}},[t.isLoading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):a("span",[t._v("Guardar")])])])])])])])])])])},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"row mb-4"},[a("h5",{staticClass:"text-dark fw-bold"},[t._v("Registrar Historial")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-header"},[a("h5",[t._v("Datos de registro")])])}],o=(e(44114),e(38280)),r=e(90740),l=e.n(r),n={name:"historial",props:["doc"],data(){return{historial:{per_id:"",exp_id:"",his_fecha_hora:"",his_medio_comuniacion:"",his_detalle:""},expedientes:[],demandante:null,mostrarError:!1,mostrarMensajeError:!1,isLoading:!1}},created(){this.buscar()},mounted(){this.$nextTick((()=>{l().replace()}))},methods:{...(0,o.i0)(["get","post"]),async buscar(){try{this.$showLoadingAlert();const t=await this.$axios.post(`${this.$store.getters.get__url}/demandante/expedientes`,{documento:this.$route.params.doc},{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});this.expedientes=t.data.expedientes,this.expedientes.length>0&&(this.historial.exp_id=this.expedientes[0].exp_id),"NATURAL"===t.data.tipo_persona?this.demandante=`${t.data.persona.nat_nombres} ${t.data.persona.nat_apellido_paterno} ${t.data.persona.nat_apellido_materno} `:this.demandante=t.data.persona.jur_razon_social,this.historial.per_id=t.data.persona.per_id,this.$closeLoadingAlert()}catch(t){console.error("Error al cargar los detalles del expediente:",t)}},validarCampos(){return""!==this.historial.his_fecha_hora&&""!==this.historial.his_medio_comuniacion},async guardar(){if(this.isLoading=!0,!this.validarCampos())return this.isLoading=!1,console.log("complete los campos");try{const t=await this.$axios.post(`${this.$store.getters.get__url}/history/store`,this.historial,{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});0===t.data.state&&this.$router.push({path:"/sisge/demandantes"})}catch(t){console.error("Error al guardar datos:",t)}this.isLoading=!1},goBack(){this.$router.go(-1)}}},d=n,c=e(81656),h=(0,c.A)(d,s,i,!1,null,"6d5347b4",null),p=h.exports}}]);
//# sourceMappingURL=370.a81ff561.js.map