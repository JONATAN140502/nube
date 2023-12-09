"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[713],{53713:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"pc-container mb-4"},[e("div",{staticClass:"pcoded-content"},[e("div",{staticClass:"page-header"},[e("div",{staticClass:"page-block"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-md-12"},[t._m(0),e("ul",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:"/sisge"}},[t._v("Inicio")])],1),e("li",{staticClass:"breadcrumb-item"},[t._v("Registrar nuevo historial")])])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card shadow"},[t._m(1),e("div",{staticClass:"card-body pb-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label",attrs:{for:"NumeroExpediente"}},[t._v("N° Expediente")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.historial.exp_id,expression:"historial.exp_id"}],staticClass:"form-control",attrs:{id:"NumeroExpediente"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.historial,"exp_id",e.target.multiple?a:a[0])}}},t._l(t.expedientes,(function(a){return e("option",{domProps:{value:a.exp_id}},[t._v(" "+t._s(a.exp_numero)+" ")])})),0)])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[t._v("Demandante")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.demandante,expression:"demandante"}],staticClass:"form-control border-0",attrs:{type:"text",disabled:""},domProps:{value:t.demandante},on:{input:function(e){e.target.composing||(t.demandante=e.target.value)}}})])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[t._v("Fecha")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.historial.his_fecha_hora,expression:"historial.his_fecha_hora"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.historial.his_fecha_hora},on:{input:function(e){e.target.composing||t.$set(t.historial,"his_fecha_hora",e.target.value)}}})])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[t._v("Medio de Contacto")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.historial.his_medio_comuniacion,expression:"historial.his_medio_comuniacion"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.historial,"his_medio_comuniacion",e.target.multiple?a:a[0])}}},[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("--Seleccionar")]),e("option",{attrs:{value:"Visita Presencial"}},[t._v("Presencial")]),e("option",{attrs:{value:"Llamada Telefonica"}},[t._v("Llamada telefonica")]),e("option",{attrs:{value:"Correo Electronico"}},[t._v("Correo Electronico")])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label",attrs:{for:"Detalles"}},[t._v("Detalles o Resumen de la Comunicacion")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.historial.his_detalle,expression:"historial.his_detalle"}],staticClass:"form-control",attrs:{id:"Detalles"},domProps:{value:t.historial.his_detalle},on:{input:function(e){e.target.composing||t.$set(t.historial,"his_detalle",e.target.value)}}})])])]),e("div",{staticClass:"card-footer border-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"d-flex"},[t.mostrarMensajeError?e("div",{staticClass:"text-danger mt-3"},[t._v(" Complete todos los campos. ")]):t._e(),e("button",{staticClass:"btn btn-lg btn-secondary px-3",on:{click:t.goBack}},[e("i",{attrs:{"data-feather":"arrow-left"}}),t._v(" Volver atras ")]),e("button",{staticClass:"btn btn-lg btn-primary ml-auto px-3",on:{click:t.guardar}},[e("i",{attrs:{"data-feather":"save"}}),t._v(" Guardar")])])])])])])])])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-header-title"},[e("h5",{staticClass:"m-b-10"},[t._v("Historial")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header"},[e("h5",[t._v("Registro de interaccion con el demandado")])])}],o=(a(57658),a(63822)),r=a(98164),l=a.n(r),n={name:"historial",props:["doc"],data(){return{historial:{per_id:"",exp_id:"",his_fecha_hora:"",his_medio_comuniacion:"",his_detalle:""},expedientes:[],demandante:null,mostrarError:!1,mostrarMensajeError:!1}},created(){this.buscar()},mounted(){this.$nextTick((()=>{l().replace()}))},methods:{...(0,o.nv)(["get","post"]),async buscar(){console.log("demandado->",this.$route.params.doc);try{const t=await this.post({url:this.$store.getters.get__url+"/demandado/expedientes",token:this.$store.getters.get__token,params:{documento:this.$route.params.doc}});console.log(t),this.expedientes=t.expedientes,this.expedientes.length>0&&(this.historial.exp_id=this.expedientes[0].exp_id),"natural"===t.tipo_persona?this.demandante=`${t.persona.nat_apellido_paterno} ${t.persona.nat_apellido_materno} ${t.persona.nat_nombres}`:this.demandante=t.persona.jur_razon_social,this.historial.per_id=t.persona.per_id}catch(t){console.error("Error al cargar los detalles del expediente:",t)}},guardar(){console.log(this.historial),this.post({url:this.$store.getters.get__url+"/history/store",token:this.$store.getters.get__token,params:this.historial}).then((t=>{0==t.state?(console.log(t),this.$router.push({path:"/sisge/historial/lista"})):(console.log(this.historial),console.log(t.exception),alert("Datos  no Registrados"))})).catch((t=>{}))},goBack(){this.$router.go(-1)}}},c=n,d=a(1001),m=(0,d.Z)(c,s,i,!1,null,"dc88172a",null),u=m.exports}}]);
//# sourceMappingURL=713.7113fcbd.js.map