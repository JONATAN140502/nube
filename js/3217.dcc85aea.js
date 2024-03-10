"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[3217],{73217:function(a,e,t){t.r(e),t.d(e,{default:function(){return g}});var o=function(){var a=this,e=a._self._c;return e("section",{staticClass:"pc-container pb-4"},[e("div",{staticClass:"pcoded-content"},[e("div",{staticClass:"row mb-4"},[e("div",{staticClass:"d-flex"},[a._m(0),e("button",{staticClass:"btn btn-primary btn-sm ml-auto rounded ml-auto",staticStyle:{"font-size":"12px"},on:{click:a.mostrarModal}},[a._v(" Registrar Nuevo Integrante ")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"table-responsive"},[e("table",{ref:"dataTable",staticClass:"table",attrs:{id:"table","aria-describedby":"tabla-equipo"}},[a._m(1),e("tbody",a._l(a.personas,(function(t,o){return e("tr",{key:o},[e("td",[a._v(a._s(o+1))]),e("td",[a._v(a._s(t.nat_dni))]),e("td",[a._v(a._s(t.nat_nombres))]),e("td",[a._v(a._s(a.apellidos(t)))]),e("td",[a._v(a._s(t.nat_telefono))]),e("td",[a._v(a._s(t.nat_correo))]),e("td",[11!=t.abo_id?e("div",{staticClass:"d-flex gap-2"},[e("a",{staticClass:"btn btn-sm btn-primary rounded",attrs:{href:"javascript:void(0)"},on:{click:function(e){return a.editar(t.abo_id)}}},[a._m(2,!0)]),e("a",{staticClass:"btn btn-sm btn-danger rounded",attrs:{href:"javascript:void(0)"},on:{click:function(e){return a.eliminar(t.abo_id)}}},[a._m(3,!0)])]):e("div",{staticClass:"d-grid gap-2 d-md-block"},[a._v(" Abogado Temporal ")])])])})),0)])])])])])]),e("b-modal",{attrs:{title:"Nuevo Integrante del Equipo","hide-header-close":"",centered:"",size:"md"},scopedSlots:a._u([{key:"modal-footer",fn:function({cancel:t,ok:o}){return[e("b-button",{staticClass:"btn btn-lg btn-secondary",on:{click:t}},[a._v("Cerrar")]),e("b-button",{staticClass:"btn btn-lg btn-success",on:{click:a.crear}},[a._v("Guardar ")])]}}]),model:{value:a.mostrar,callback:function(e){a.mostrar=e},expression:"mostrar"}},[e("b-form",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("DNI")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.equipo.nat_dni,expression:"equipo.nat_dni"}],staticClass:"form-control",class:{"has-error":a.errores.nat_dni},attrs:{maxlength:"8"},domProps:{value:a.equipo.nat_dni},on:{input:[function(e){e.target.composing||a.$set(a.equipo,"nat_dni",e.target.value)},function(e){return a.validarCampo("nat_dni")}],keypress:a.validarNumeros}}),a.errores.nat_dni?e("span",{staticClass:"error-message"},[a._v("Complete este campo para continuar.")]):a._e()])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("Apellido Paterno")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.equipo.nat_apellido_paterno,expression:"equipo.nat_apellido_paterno"}],staticClass:"form-control",class:{"has-error":a.errores.nat_apellido_paterno},domProps:{value:a.equipo.nat_apellido_paterno},on:{input:[function(e){e.target.composing||a.$set(a.equipo,"nat_apellido_paterno",e.target.value)},function(e){return a.validarCampo("nat_apellido_paterno")}]}}),a.errores.nat_apellido_paterno?e("span",{staticClass:"error-message"},[a._v("Complete este campo para continuar.")]):a._e()])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("Apellido Materno")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.equipo.nat_apellido_materno,expression:"equipo.nat_apellido_materno"}],staticClass:"form-control",class:{"has-error":a.errores.nat_apellido_materno},domProps:{value:a.equipo.nat_apellido_materno},on:{input:[function(e){e.target.composing||a.$set(a.equipo,"nat_apellido_materno",e.target.value)},function(e){return a.validarCampo("nat_apellido_materno")}]}}),a.errores.nat_apellido_materno?e("span",{staticClass:"error-message"},[a._v("Complete este campo para continuar.")]):a._e()])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("Nombres")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.equipo.nat_nombres,expression:"equipo.nat_nombres"}],staticClass:"form-control",class:{"has-error":a.errores.nat_nombres},domProps:{value:a.equipo.nat_nombres},on:{input:[function(e){e.target.composing||a.$set(a.equipo,"nat_nombres",e.target.value)},function(e){return a.validarCampo("nat_nombres")}]}}),a.errores.nat_nombres?e("span",{staticClass:"error-message"},[a._v("Complete este campo para continuar.")]):a._e()])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("Telefono")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.equipo.nat_telefono,expression:"equipo.nat_telefono"}],staticClass:"form-control",domProps:{value:a.equipo.nat_telefono},on:{keypress:a.validarNumeros,input:function(e){e.target.composing||a.$set(a.equipo,"nat_telefono",e.target.value)}}})])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("Rol")]),e("select",{directives:[{name:"model",rawName:"v-model",value:a.equipo.per_condicion,expression:"equipo.per_condicion"}],staticClass:"form-control",on:{change:[function(e){var t=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){var e="_value"in a?a._value:a.value;return e}));a.$set(a.equipo,"per_condicion",e.target.multiple?t:t[0])},function(e){return a.validarCampo("rol_id")}]}},[e("option",{attrs:{value:""}},[a._v("Seleccione...")]),a._l(a.roles,(function(t,o){return e("option",{key:o,domProps:{value:t.name}},[a._v(" "+a._s(t.name)+" ")])}))],2)])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("Correo")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.equipo.nat_correo,expression:"equipo.nat_correo"}],staticClass:"form-control",domProps:{value:a.equipo.nat_correo},on:{input:[function(e){e.target.composing||a.$set(a.equipo,"nat_correo",e.target.value)},a.validarCorreo]}}),a.correoValido?a._e():e("span",{staticClass:"error-message"},[a._v("Correo electrónico no válido")])])])])])],1),e("b-modal",{attrs:{title:"Actualizar datos","hide-header-close":"",centered:"",size:"md"},scopedSlots:a._u([{key:"modal-footer",fn:function({cancel:t,ok:o}){return[e("b-button",{staticClass:"btn btn-lg btn-secondary",on:{click:t}},[a._v("Cerrar")]),e("b-button",{staticClass:"btn btn-lg btn-success",on:{click:a.actualizar}},[a._v("Guardar ")])]}}]),model:{value:a.editarModal,callback:function(e){a.editarModal=e},expression:"editarModal"}},[e("b-form",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("DNI")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.equipo.nat_dni,expression:"equipo.nat_dni"}],staticClass:"form-control",class:{"has-error":a.errores.nat_dni},attrs:{maxlength:"8"},domProps:{value:a.equipo.nat_dni},on:{input:[function(e){e.target.composing||a.$set(a.equipo,"nat_dni",e.target.value)},function(e){return a.validarCampo("nat_dni")}],keypress:a.validarNumeros}}),a.errores.nat_dni?e("span",{staticClass:"error-message"},[a._v("Complete este campo para continuar.")]):a._e()])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("Apellido Paterno")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.equipo.nat_apellido_paterno,expression:"equipo.nat_apellido_paterno"}],staticClass:"form-control",class:{"has-error":a.errores.nat_apellido_paterno},domProps:{value:a.equipo.nat_apellido_paterno},on:{input:[function(e){e.target.composing||a.$set(a.equipo,"nat_apellido_paterno",e.target.value)},function(e){return a.validarCampo("nat_apellido_paterno")}]}}),a.errores.nat_apellido_paterno?e("span",{staticClass:"error-message"},[a._v("Complete este campo para continuar.")]):a._e()])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("Apellido Materno")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.equipo.nat_apellido_materno,expression:"equipo.nat_apellido_materno"}],staticClass:"form-control",class:{"has-error":a.errores.nat_apellido_materno},domProps:{value:a.equipo.nat_apellido_materno},on:{input:[function(e){e.target.composing||a.$set(a.equipo,"nat_apellido_materno",e.target.value)},function(e){return a.validarCampo("nat_apellido_materno")}]}}),a.errores.nat_apellido_materno?e("span",{staticClass:"error-message"},[a._v("Complete este campo para continuar.")]):a._e()])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("Nombres")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.equipo.nat_nombres,expression:"equipo.nat_nombres"}],staticClass:"form-control",class:{"has-error":a.errores.nat_nombres},domProps:{value:a.equipo.nat_nombres},on:{input:[function(e){e.target.composing||a.$set(a.equipo,"nat_nombres",e.target.value)},function(e){return a.validarCampo("nat_nombres")}]}}),a.errores.nat_nombres?e("span",{staticClass:"error-message"},[a._v("Complete este campo para continuar.")]):a._e()])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("Telefono")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.equipo.nat_telefono,expression:"equipo.nat_telefono"}],staticClass:"form-control",domProps:{value:a.equipo.nat_telefono},on:{keypress:a.validarNumeros,input:function(e){e.target.composing||a.$set(a.equipo,"nat_telefono",e.target.value)}}})])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("Rol")]),e("select",{directives:[{name:"model",rawName:"v-model",value:a.equipo.per_condicion,expression:"equipo.per_condicion"}],staticClass:"form-control",on:{change:[function(e){var t=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){var e="_value"in a?a._value:a.value;return e}));a.$set(a.equipo,"per_condicion",e.target.multiple?t:t[0])},function(e){return a.validarCampo("rol_id")}]}},[e("option",{attrs:{value:""}},[a._v("Seleccione...")]),a._l(a.roles,(function(t,o){return e("option",{key:o,domProps:{value:t.name}},[a._v(" "+a._s(t.name)+" ")])}))],2)])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("Correo")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.equipo.nat_correo,expression:"equipo.nat_correo"}],staticClass:"form-control",domProps:{value:a.equipo.nat_correo},on:{input:[function(e){e.target.composing||a.$set(a.equipo,"nat_correo",e.target.value)},a.validarCorreo]}}),a.correoValido?a._e():e("span",{staticClass:"error-message"},[a._v("Correo electrónico no válido")])])])])])],1)],1)])},s=[function(){var a=this,e=a._self._c;return e("h5",[e("span",{staticClass:"text-primary"},[a._v("Equipo UNPRG")])])},function(){var a=this,e=a._self._c;return e("thead",[e("tr",[e("th",[a._v("#")]),e("th",[a._v("Documento")]),e("th",[a._v("Nombres")]),e("th",[a._v("Apellidos")]),e("th",[a._v("Telefono")]),e("th",[a._v("Email")]),e("th",[a._v("Opciones")])])])},function(){var a=this,e=a._self._c;return e("span",{staticStyle:{"font-size":"12px"}},[e("i",{attrs:{"data-feather":"edit"}})])},function(){var a=this,e=a._self._c;return e("span",{staticStyle:{"font-size":"12px"}},[e("i",{attrs:{"data-feather":"trash"}})])}],r=t(99174),i=t(20282),n=t(66704),l=t(48730),c=t(80744),d=t(15261),p=(t(59313),t(59911)),u=t.n(p),m=(t(2637),{name:"abogado",components:{BButton:r.P,BModal:i.i,BForm:n.Z,BFormGroup:l.a,BFormInput:c.b,ValidationObserver:d.Ce,ValidationProvider:d.LW},mounted(){this.leer()},updated(){u().replace()},data(){return{correo:"",mostrar:!1,editarModal:!1,personas:null,abogados:[],modalVisible:!1,dataTable:null,showModal:!1,equipo:{nat_dni:"",nat_apellido_paterno:"",nat_apellido_materno:"",nat_nombres:"",nat_telefono:"",nat_correo:"",per_condicion:"",abo_id:""},errores:{nat_dni:!1,nat_apellido_paterno:!1,nat_apellido_materno:!1,nat_nombres:!1},isLoading:!1,correoValido:!0,mensajedni:null,mensajecorreo:null,roles:[{id:1,name:"Abogado"}]}},methods:{limpiarCampos(){for(let a in this.abogado)this.abogado.hasOwnProperty(a)&&(this.abogado[a]="")},limpiarErrores(){for(let a in this.errores)this.errores.hasOwnProperty(a)&&(this.errores[a]="")},validarNumeros(a){const e=a.which?a.which:a.keyCode;(e<48||e>57)&&a.preventDefault()},validarCampo(a){this.errores[a]=""===this.equipo[a]},validarCorreo(){const a=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;this.correoValido=a.test(this.equipo.nat_correo)},validarCampos(){return Object.keys(this.errores).forEach((a=>{this.validarCampo(a,a)})),!Object.values(this.errores).some((a=>a))},mostrarModal(){this.mostrar=!0},cerrarModal(){this.mostrar=!1},apellidos(a){return`${a.nat_apellido_paterno} ${a.nat_apellido_materno}`},rolUser(a){return"Bolsa"===a.per_condicion?"Bolsa de Trabajo":a.per_condicion},async crear(){if(this.validarCampos())try{this.isLoading=!0;const a=await this.$postData("personas/crearIntegrante",this,this.equipo);console.log(a.data),this.initDataTable(),0===a.state?(this.leer(),this.cerrarModal(),this.isLoading=!1):1===a.data.state&&(this.isLoading=!1)}catch(a){const e=a.response.data.message;console.log(e),this.isLoading=!1}else console.log("Error en la validación de campos"),this.isLoading=!1},async leer(){try{this.$showLoadingAlert();const a=await this.$postData("personas/equipo",this);console.log(a.data),this.personas=a.data,this.initDataTable(),this.$closeLoadingAlert()}catch(a){this.$handleApiError(a,"leer abogados")}},async actualizar(){if(this.validarCampos())try{this.isLoading=!0;const a=await this.$axios.post(`${this.$store.getters.get__url}/lawyer/update`,this.equipo,{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});0===a.data.state?(this.limpiarCampos(),this.leer(),this.editarModal=!1):(console.error("Error en la respuesta del servidor:",a.data),this.isLoading=!1)}catch(a){console.error("Error en la solicitud:",a.message),this.isLoading=!1}finally{this.isLoading=!1}else console.log("Error en la validación de campos")},async eliminar(a){this.$warningAlertWithCancel("Confirmar Eliminación","¿Estás seguro de que deseas eliminar a este abogado?",(async()=>{try{this.$showLoadingAlert("Eliminando","");const e=await this.$axios.post(`${this.$store.getters.get__url}/lawyer/delete/${a}`,this.abogado,{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});204===e.status?(this.$closeLoadingAlert(),this.leer()):(this.$closeLoadingAlert(),this.$warnignAlert("","Error al eliminar el abogado: Respuesta inesperada del servidor."))}catch(e){this.$closeLoadingAlert(),this.$warnignAlert("",`Error al realizar la solicitud: ${e.message}`)}}),(()=>{console.log("Eliminar abogado cancelado")}))},editar(a){try{const e=this.personas.find((e=>e.abo_id===a));e?(this.equipo={...e},this.editarModal=!0):console.error("Abogado no ENCONTRADO")}catch(e){console.error(e)}},guardar(){this.cerrarModal(),console.info("guardando datos...");try{this.abogado.abo_id?this.actualizar(this.abogado.abo_id):this.crear()}catch(a){console.error(a)}},async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=$(this.$refs.dataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}}),await new Promise((a=>{$(this.$refs.dataTable).on("draw.dt",(()=>{a()}))}))},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}}}),_=m,v=t(81656),b=(0,v.A)(_,o,s,!1,null,"456aaec4",null),g=b.exports}}]);
//# sourceMappingURL=3217.dcc85aea.js.map