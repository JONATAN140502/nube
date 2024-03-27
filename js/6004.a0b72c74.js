"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[6004],{16004:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var i=function(){var t=this,e=t._self._c;return e("section",{staticClass:"pc-container pb-4"},[e("div",{staticClass:"pcoded-content"},[e("div",{staticClass:"row mb-4 d-flex align-items-center"},[e("div",{staticClass:"col-sm-12 col-md-6 col-xl-9"},[e("h5",[e("span",{staticClass:"text-primary"},[t._v("Personas")]),t._v(" | "),e("span",{staticClass:"text-secondary"},[t._v(" "+t._s(""===t.tipoSeleccionado?"Lista":t.tipoSeleccionado.name))])])]),e("div",{staticClass:"col-sm-12 col-md-6 col-xl-3"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.tipoSeleccionado,expression:"tipoSeleccionado"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.tipoSeleccionado=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Parte procesal")]),t._l(t.tipos,(function(a){return e("option",{domProps:{value:a}},[t._v(t._s(a.name))])}))],2)])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[t.personasFiltradas.length>0?e("div",{staticClass:"table-responsive"},[e("table",{ref:"dataTable",staticClass:"table table-hover",attrs:{id:"table","aria-describedby":"table-personas"}},[t._m(0),e("tbody",t._l(t.personasFiltradas,(function(a,i){return e("tr",{key:i},[e("td",[t._v(t._s(i+1))]),e("td",[t._v(t._s(t.documento(a)))]),e("td",[t._v(t._s(a.per_condicion))]),e("td",{staticClass:"text-truncate",staticStyle:{"max-width":"100px"}},[t._v(t._s(t.apellidoPaternoRazonSocial(a)))]),e("td",[t._v(t._s(t.apellidoMaterno(a)))]),e("td",[t._v(t._s(t.nombres(a)))]),e("td",[e("div",{staticClass:"d-flex gap-2"},[e("button",{staticClass:"btn btn-sm btn-outline-success rounded border-1",staticStyle:{"font-size":"12px"},on:{click:function(e){return t.modalHistorial(a)}}},[t._v(" Registrar Historial ")]),e("button",{staticClass:"btn btn-sm btn-outline-primary rounded border-1",staticStyle:{"font-size":"12px"},on:{click:function(e){return t.verDatos(a.per_id)}}},[t._v(" Ver datos ")])])])])})),0)])]):t._e()])])])]),e("b-modal",{attrs:{title:"Registrar historial","hide-header-close":"",centered:"",size:"md","no-close-on-backdrop":""},on:{hide:t.limpiarCampos},scopedSlots:t._u([{key:"modal-footer",fn:function({cancel:a,ok:i}){return[e("b-button",{staticClass:"btn btn-lg btn-secondary",on:{click:a}},[t._v("Cerrar")]),e("b-button",{staticClass:"btn btn-lg btn-success",on:{click:t.registrarHistorial}},[t._v("Guardar ")])]}}]),model:{value:t.modalRegistroHistorial,callback:function(e){t.modalRegistroHistorial=e},expression:"modalRegistroHistorial"}},[e("b-form",[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label",attrs:{for:"NumeroExpediente"}},[t._v("N° Expediente")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.historial.exp_id,expression:"historial.exp_id"}],staticClass:"form-control",attrs:{id:"NumeroExpediente"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.historial,"exp_id",e.target.multiple?a:a[0])}}},[e("option",{attrs:{disabled:"",selected:""},domProps:{value:null}},[t._v("--Seleccionar")]),t._l(t.expedientes,(function(a){return e("option",{domProps:{value:a.exp_id}},[t._v(t._s(a.exp_numero))])}))],2)]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[t._v("Fecha")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.historial.his_fecha_hora,expression:"historial.his_fecha_hora"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.historial.his_fecha_hora},on:{input:function(e){e.target.composing||t.$set(t.historial,"his_fecha_hora",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[t._v("Medio de Contacto")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.historial.his_medio_comuniacion,expression:"historial.his_medio_comuniacion"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.historial,"his_medio_comuniacion",e.target.multiple?a:a[0])}}},[e("option",{attrs:{disabled:"",selected:""},domProps:{value:null}},[t._v("--Seleccionar")]),t._l(t.medios,(function(a){return e("option",{domProps:{value:a.name}},[t._v(t._s(a.name))])}))],2)]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label",attrs:{for:"Detalles"}},[t._v("Detalles o Resumen de la Comunicacion")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.historial.his_detalle,expression:"historial.his_detalle"}],staticClass:"form-control",attrs:{id:"Detalles"},domProps:{value:t.historial.his_detalle},on:{input:function(e){e.target.composing||t.$set(t.historial,"his_detalle",e.target.value)}}})])])],1)],1)])},s=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("#")]),e("th",[t._v("Documento")]),e("th",[t._v("Condicion")]),e("th",[t._v("Apellido paterno /"),e("br"),t._v(" Razon social")]),e("th",[t._v("Apellido materno")]),e("th",[t._v("Nombres")]),e("th",[t._v("Interacciones")])])])}],o=(a(44114),a(90740)),l=a.n(o),r=a(72972),n=a(53621),d=a(65047),c=a(89772),u=a(47021),p=(a(59313),a(2637),a(46587)),m={name:"demandados",components:{BButton:r.P,BModal:n.i,BForm:d.Z,BFormGroup:c.a,BFormInput:u.b},mounted(){this.leer()},updated(){l().replace()},data(){return{modalRegistroHistorial:!1,personas:[],dataTable:null,tipoSeleccionado:"",tipos:[{id:1,name:"Demandante"},{id:2,name:"Demandado"},{id:3,name:"Denunciante"},{id:4,name:"Denunciado"}],historial:{per_id:null,exp_id:null,his_fecha_hora:null,his_medio_comuniacion:null,his_detalle:null},expedientes:null,medios:[{id:1,name:"Visita presencial"},{id:2,name:"Llamada telefonica"},{id:3,name:"Correo electronico"}]}},watch:{personasFiltradas:{handler:"initDataTable",immediate:!0}},computed:{personasFiltradas(){return this.tipoSeleccionado?this.personas.filter((t=>t.tipo_procesal===this.tipoSeleccionado.name)):this.personas}},methods:{documento(t){return null===t.nat_dni?t.jur_ruc:t.nat_dni},apellidoPaternoRazonSocial(t){return null!=t.nat_dni?t.nat_apellido_paterno:t.jur_razon_social},apellidoMaterno(t){return null!=t.nat_dni?t.nat_apellido_materno:"--"},nombres(t){return null!=t.nat_dni?t.nat_nombres:"--"},async modalHistorial(t){try{this.historial.per_id=t.per_id;const e={documento:this.documento(t)},a=await this.$postData("demandante/expedientes",this,e);this.expedientes=a.expedientes,this.modalRegistroHistorial=!0}catch(e){this.$handleApiError(e,"cargar expedientes de la persona")}},async registrarHistorial(){try{this.modalRegistroHistorial=!1,this.$showLoadingAlert("Guardando","Registrando historial, por favor espere...");const t=await this.$postData("history/store",this,this.historial);console.log(t)}catch(t){this.$handleApiError(t,"registrar historial")}finally{this.$closeLoadingAlert()}},verDatos(t){this.$router.push({name:"demandante/informacion",params:{id:t}})},async leer(){try{this.$showLoadingAlert();const t=await this.$getData("personas",this);this.personas=t.data,this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"leer")}},async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=p(this.$refs.dataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)},limpiarCampos(){for(let t in this.historial)this.historial.hasOwnProperty(t)&&(this.historial[t]=null)}}},h=m,_=a(81656),v=(0,_.A)(h,i,s,!1,null,null,null),b=v.exports}}]);
//# sourceMappingURL=6004.a0b72c74.js.map