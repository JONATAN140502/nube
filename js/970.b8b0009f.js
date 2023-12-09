"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[970],{72970:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var o=function(){var e=this,t=e._self._c;return t("section",{staticClass:"pc-container"},[t("div",{staticClass:"pcoded-content pt-2 pb-4"},[e._m(0),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"card shadow"},[t("div",{staticClass:"card-body pb-2"},[e._m(1),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"NumeroExpediente"}},[e._v("N° de Expediente")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_numero,expression:"expediente.exp_numero"}],staticClass:"form-control",attrs:{type:"text",id:"NumeroExpediente",placeholder:"5670-2017-0-1708-JM-LA-01"},domProps:{value:e.expediente.exp_numero},on:{input:function(t){t.target.composing||e.$set(e.expediente,"exp_numero",t.target.value)}}})])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"FechaInicio"}},[e._v("Fecha de Inicio")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_fecha_inicio,expression:"expediente.exp_fecha_inicio"}],staticClass:"form-control",attrs:{type:"date",id:"FechaInicio"},domProps:{value:e.expediente.exp_fecha_inicio},on:{input:function(t){t.target.composing||e.$set(e.expediente,"exp_fecha_inicio",t.target.value)}}})])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"Pretencion"}},[e._v("Pretensión")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_pretencion,expression:"expediente.exp_pretencion"}],staticClass:"form-control",attrs:{id:"ControlSelectMateria"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.expediente,"exp_pretencion",t.target.multiple?a:a[0])}}},[t("option",{staticClass:"py-5",attrs:{value:"",disabled:"",selected:""}},[e._v("--SELECCIONAR")]),e._l(e.pretenciones,(function(a){return t("option",{key:a.pre_id,domProps:{value:a.pre_id}},[e._v(e._s(a.pre_nombre))])}))],2)])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"MontoPretencion"}},[e._v("Monto de Pretensión")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_monto_pretencion,expression:"expediente.exp_monto_pretencion"}],staticClass:"form-control",attrs:{type:"number",id:"MontoPretencion",placeholder:""},domProps:{value:e.expediente.exp_monto_pretencion},on:{input:function(t){t.target.composing||e.$set(e.expediente,"exp_monto_pretencion",t.target.value)}}})])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"ControlSelectMateria"}},[e._v("Materia")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_materia,expression:"expediente.exp_materia"}],staticClass:"form-control",attrs:{id:"ControlSelectMateria"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.expediente,"exp_materia",t.target.multiple?a:a[0])}}},[t("option",{staticClass:"py-5",attrs:{value:"",disabled:"",selected:""}},[e._v("--SELECCIONAR")]),e._l(e.materias,(function(a){return t("option",{key:a.mat_id,domProps:{value:a.mat_id}},[e._v(e._s(a.mat_nombre))])}))],2)])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"ControlSelectDistritoJudicial"}},[e._v("Distrito Judicial")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.juzgado.dis_id,expression:"juzgado.dis_id"}],staticClass:"form-control",attrs:{id:"ControlSelectDistritoJudicial"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.juzgado,"dis_id",t.target.multiple?a:a[0])},function(t){e.cargarinstancias(),e.cargarjuzgados()}]}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("--SELECCIONAR")]),e._l(e.distrito,(function(a){return t("option",{domProps:{value:a.judis_id}},[e._v(" "+e._s(a.judis_nombre)+" ")])}))],2)])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"ControlSelectInstancia"}},[e._v("Instancia")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.juzgado.ins_id,expression:"juzgado.ins_id"}],staticClass:"form-control",attrs:{id:"ControlSelectInstancia"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.juzgado,"ins_id",t.target.multiple?a:a[0])},e.cargarespecialidades]}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("--SELECCIONAR")]),e._l(e.instancia,(function(a){return t("option",{domProps:{value:a.ins_id}},[e._v(" "+e._s(a.ins_nombre)+" ")])}))],2)])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"ControlSelectEspecialidad"}},[e._v("Especialidad")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_especialidad,expression:"expediente.exp_especialidad"}],staticClass:"form-control",attrs:{id:"ControlSelectEspecialidad"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.expediente,"exp_especialidad",t.target.multiple?a:a[0])}}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("--SELECCIONAR")]),e._l(e.especialidad,(function(a){return t("option",{domProps:{value:a.esp_id}},[e._v(" "+e._s(a.esp_nombre)+" ")])}))],2)])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[e._v("Órgano Jurisdiccional")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_juzgado,expression:"expediente.exp_juzgado"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.expediente,"exp_juzgado",t.target.multiple?a:a[0])}}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("--SELECCIONAR")]),e._l(e.juzgados,(function(a){return t("option",{key:a.co_id,domProps:{value:a.co_id}},[e._v(" "+e._s(a.co_nombre)+" ")])}))],2)])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"departamento"}},[e._v("Estado")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_estado_proceso,expression:"expediente.exp_estado_proceso"}],staticClass:"form-control",attrs:{id:"departamento"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.expediente,"exp_estado_proceso",t.target.multiple?a:a[0])}}},[t("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("--Seleccionar")]),t("option",{attrs:{value:"EN TRAMITE"}},[e._v("En Trámite")]),t("option",{attrs:{value:"EN EJECUCION"}},[e._v("En Ejecución")]),t("option",{attrs:{value:"ARCHIVADO"}},[e._v("Archivado")])])])])]),"EN EJECUCION"==e.expediente.exp_estado_proceso||"ARCHIVADO"==e.expediente.exp_estado_proceso?t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"MontoPretencion"}},[e._v("Monto de Ejecución 1")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_monto_ejecucion1,expression:"expediente.exp_monto_ejecucion1"}],staticClass:"form-control",attrs:{type:"number",id:"MontoPretencion",placeholder:""},domProps:{value:e.expediente.exp_monto_ejecucion1},on:{input:function(t){t.target.composing||e.$set(e.expediente,"exp_monto_ejecucion1",t.target.value)}}})])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"MontoConsentido"}},[e._v("Monto de Ejecución 2")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_monto_ejecucion2,expression:"expediente.exp_monto_ejecucion2"}],staticClass:"form-control",attrs:{type:"number",id:"MontoConsentido",placeholder:""},domProps:{value:e.expediente.exp_monto_ejecucion2},on:{input:function(t){t.target.composing||e.$set(e.expediente,"exp_monto_ejecucion2",t.target.value)}}})])])]):e._e(),"EN EJECUCION"==e.expediente.exp_estado_proceso||"ARCHIVADO"==e.expediente.exp_estado_proceso?t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"Costos"}},[e._v("Interés 1")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_interes1,expression:"expediente.exp_interes1"}],staticClass:"form-control",attrs:{type:"number",id:"int1",placeholder:""},domProps:{value:e.expediente.exp_interes1},on:{input:function(t){t.target.composing||e.$set(e.expediente,"exp_interes1",t.target.value)}}})])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"MontoPretencion"}},[e._v("Interés 2")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_interes2,expression:"expediente.exp_interes2"}],staticClass:"form-control",attrs:{type:"number",id:"int2",placeholder:""},domProps:{value:e.expediente.exp_interes2},on:{input:function(t){t.target.composing||e.$set(e.expediente,"exp_interes2",t.target.value)}}})])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"MontoPretencion"}},[e._v("Costos")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_costos,expression:"expediente.exp_costos"}],staticClass:"form-control",attrs:{type:"number",id:"Costos",placeholder:""},domProps:{value:e.expediente.exp_costos},on:{input:function(t){t.target.composing||e.$set(e.expediente,"exp_costos",t.target.value)}}})])])]):e._e()])])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"card shadow"},[t("div",{staticClass:"card-body"},[e._m(2),"natural"==e.tipoper?t("div",[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"dni"}},[e._v("DNI")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.pnat.nat_dni,expression:"pnat.nat_dni"}],staticClass:"form-control",attrs:{type:"text",id:"dni",placeholder:""},domProps:{value:e.pnat.nat_dni},on:{input:function(t){t.target.composing||e.$set(e.pnat,"nat_dni",t.target.value)}}})])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"apellidoPaterno"}},[e._v("Apellido Paterno")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.pnat.nat_apellido_paterno,expression:"pnat.nat_apellido_paterno"}],staticClass:"form-control",attrs:{type:"text",id:"apellidoPaterno",placeholder:""},domProps:{value:e.pnat.nat_apellido_paterno},on:{input:function(t){t.target.composing||e.$set(e.pnat,"nat_apellido_paterno",t.target.value)}}})])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"apellidoMaterno"}},[e._v("Apellido Materno")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.pnat.nat_apellido_materno,expression:"pnat.nat_apellido_materno"}],staticClass:"form-control",attrs:{type:"text",id:"apellidoMaterno",placeholder:""},domProps:{value:e.pnat.nat_apellido_materno},on:{input:function(t){t.target.composing||e.$set(e.pnat,"nat_apellido_materno",t.target.value)}}})])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"nombres"}},[e._v("Nombres")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.pnat.nat_nombres,expression:"pnat.nat_nombres"}],staticClass:"form-control",attrs:{type:"text",id:"nombres",placeholder:""},domProps:{value:e.pnat.nat_nombres},on:{input:function(t){t.target.composing||e.$set(e.pnat,"nat_nombres",t.target.value)}}})])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"telefono"}},[e._v("Telefono")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.pnat.nat_telefono,expression:"pnat.nat_telefono"}],staticClass:"form-control",attrs:{type:"text",id:"telefono",placeholder:""},domProps:{value:e.pnat.nat_telefono},on:{input:function(t){t.target.composing||e.$set(e.pnat,"nat_telefono",t.target.value)}}})])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"email"}},[e._v("Email ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.pnat.nat_correo,expression:"pnat.nat_correo"}],staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:""},domProps:{value:e.pnat.nat_correo},on:{input:function(t){t.target.composing||e.$set(e.pnat,"nat_correo",t.target.value)}}})])])])]):t("div",[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"ruc"}},[e._v("RUC")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.pjuc.jur_ruc,expression:"pjuc.jur_ruc"}],staticClass:"form-control",attrs:{type:"text",id:"ruc",placeholder:""},domProps:{value:e.pjuc.jur_ruc},on:{input:function(t){t.target.composing||e.$set(e.pjuc,"jur_ruc",t.target.value)}}})])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"razonSocial"}},[e._v("Nombre o Razon Social")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.pjuc.jur_razon_social,expression:"pjuc.jur_razon_social"}],staticClass:"form-control",attrs:{type:"text",id:"razonSocial",placeholder:""},domProps:{value:e.pjuc.jur_razon_social},on:{input:function(t){t.target.composing||e.$set(e.pjuc,"jur_razon_social",t.target.value)}}})])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"telefono"}},[e._v("Telefono")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.pjuc.jur_telefono,expression:"pjuc.jur_telefono"}],staticClass:"form-control",attrs:{type:"text",id:"telefono",placeholder:""},domProps:{value:e.pjuc.jur_telefono},on:{input:function(t){t.target.composing||e.$set(e.pjuc,"jur_telefono",t.target.value)}}})])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"email"}},[e._v("Email ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.pjuc.jur_correo,expression:"pjuc.jur_correo"}],staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:""},domProps:{value:e.pjuc.jur_correo},on:{input:function(t){t.target.composing||e.$set(e.pjuc,"jur_correo",t.target.value)}}})])])])]),e._m(3),t("div",{staticClass:"row mt-3"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"departamento"}},[e._v("Departamento")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.direccion.dep_id,expression:"direccion.dep_id"}],staticClass:"form-control",attrs:{id:"departamento"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.direccion,"dep_id",t.target.multiple?a:a[0])},e.cargarProvincias]}},[t("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("--Seleccionar")]),e._l(e.departamentos,(function(a){return t("option",{domProps:{value:a.dep_id}},[e._v(e._s(a.dep_nombre)+" ")])}))],2)])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"provincia"}},[e._v("Provincia")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.direccion.pro_id,expression:"direccion.pro_id"}],staticClass:"form-control",attrs:{id:"provincia"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.direccion,"pro_id",t.target.multiple?a:a[0])},e.cargarDistritos]}},[t("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("--Seleccionar")]),e._l(e.provincias,(function(a){return t("option",{domProps:{value:a.pro_id}},[e._v(e._s(a.pro_nombre))])}))],2)])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"distrito"}},[e._v("Distrito")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.direccion.dis_id,expression:"direccion.dis_id"}],staticClass:"form-control",attrs:{id:"distrito"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.direccion,"dis_id",t.target.multiple?a:a[0])}}},[t("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("--Seleccionar")]),e._l(e.distritos,(function(a){return t("option",{domProps:{value:a.dis_id}},[e._v(e._s(a.dis_nombre)+" ")])}))],2)])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"calleAvenida"}},[e._v("Calle, Avenida, Mz, S/N")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.direccion.dir_calle_av,expression:"direccion.dir_calle_av"}],staticClass:"form-control",attrs:{type:"text",id:"calleAvenida",placeholder:""},domProps:{value:e.direccion.dir_calle_av},on:{input:function(t){t.target.composing||e.$set(e.direccion,"dir_calle_av",t.target.value)}}})])])]),e._m(4),t("div",{staticClass:"row mb-2"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"abogado"}},[e._v("Abogado asignado al expediente en registro")]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.abogado,expression:"abogado"}],staticClass:"form-control",attrs:{type:"text",disabled:"",name:"abogado",id:"abogado"},domProps:{value:e.abogado},on:{input:function(t){t.target.composing||(e.abogado=t.target.value)}}})])])])]),t("div",{staticClass:"row mb-2"},[t("div",{staticClass:"d-flex"},[t("button",{staticClass:"btn btn-lg btn-secondary px-3 rounded",on:{click:e.goBack}},[t("i",{attrs:{"data-feather":"arrow-left"}}),e._v(" Volver atras ")]),t("div",{staticClass:"ml-auto"},[t("Button",{staticClass:"btn btn-primary btn-lg ml-auto px-4 rounded",on:{click:function(t){return e.update()}}},[e._v("Guardar")])],1)])])])])])])])])},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"row py-3"},[t("h5",{staticClass:"text-dark fw-bold"},[e._v("Actualizacion de los datos del Expediente")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row mb-2"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"alert alert-primary py-3",attrs:{role:"alert"}},[e._v(" Informacion general ")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"alert alert-primary py-3",attrs:{role:"alert"}},[e._v(" Informacion personal del demandante ")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row my-2"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"alert alert-primary py-3",attrs:{role:"alert"}},[e._v(" Direccion ")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row mb-2"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"alert alert-primary py-3",attrs:{role:"alert"}},[e._v(" Datos del abogado ")])])])}],r=a(63822),i=a(98164),n=a.n(i),l={name:"RegistroProcesal",mounted(){this.$nextTick((()=>{n().replace()}))},props:["id"],data(){return{esPersonaNatural:!0,expediente:{exp_id:"",exp_numero:"",exp_fecha_inicio:"",exp_monto_pretencion:"",exp_pretencion:"",exp_materia:"",exp_estado_proceso:"",exp_especialidad:"",exp_juzgado:"",exp_costos:"",exp_monto_ejecucion1:"",exp_monto_ejecucion2:"",exp_interes1:"",exp_interes2:"",persona:""},distrito:[],instancia:[],especialidad:[],juzgado:{ins_id:"",dis_id:""},departamentos:[],provincias:[],distritos:[],direccion:{dir_calle_av:"",dis_id:"",pro_id:"",dep_id:""},pnat:{nat_id:"",nat_dni:"",nat_apellido_paterno:"",nat_apellido_materno:"",nat_nombres:"",nat_telefono:"",nat_correo:""},pjuc:{jur_id:"",jur_ruc:"",jur_razon_social:"",jur_telefono:"",jur_correo:"",jur_rep_legal:""},tipoper:"",procesal:"",abogado:"",juzgados:[],materias:[],pretenciones:[]}},created(){this.listarMaterias(),this.listarPretensiones(),this.cargarDistritosJudiciales(),this.cargarDepartamentos(),this.traerexpediente()},methods:{...(0,r.nv)(["get","post"]),handleError(e,t){console.error(e,t)},mostrarPersona(e){this.tipoper=e,this.esPersonaNatural="NATURAL"===e},async traerexpediente(){try{const e=await this.get({url:`${this.$store.getters.get__url}/proceeding/${this.id}/show`,token:this.$store.getters.get__token,params:{}}),t=e.proceeding,a=e.person,o=e.personData,s=e.costos;Object.assign(this.expediente,{exp_id:t.exp_id,exp_numero:t.exp_numero,exp_fecha_inicio:t.exp_fecha_inicio,exp_monto_pretencion:t.exp_monto_pretencion,exp_monto_ejecucion:t.exp_monto_ejecucion,exp_pretencion:t.exp_pretencion,exp_materia:t.exp_materia,exp_estado_proceso:t.exp_estado_proceso,exp_especialidad:t.exp_especialidad,exp_juzgado:t.exp_juzgado,persona:a.per_id,exp_monto_consentido:t.exp_monto_consentido,exp_costos:t.exp_costos,exp_intereses:t.exp_intereses}),Object.assign(this.juzgado,{dis_id:t.exp_dis_judicial,ins_id:t.exp_instancia}),this.cargarinstancias(),this.cargarjuzgados(),this.cargarespecialidades(),this.tipoper=e.tipo_persona,this.procesal=e.procesal,"natural"==this.tipoper?Object.assign(this.pnat,{nat_id:a.nat_id,nat_dni:o.nat_dni,nat_apellido_paterno:o.nat_apellido_paterno,nat_apellido_materno:o.nat_apellido_materno,nat_nombres:o.nat_nombres,nat_telefono:o.nat_telefono,nat_correo:o.nat_correo}):Object.assign(this.pjuc,{jur_id:a.jur_id,jur_ruc:o.jur_ruc,jur_razon_social:o.jur_razon_social,jur_telefono:o.jur_telefono,jur_correo:o.jur_correo,jur_rep_legal:o.jur_rep_legal}),Object.assign(this.direccion,{dep_id:a.address.dep_id,pro_id:a.address.pro_id,dis_id:a.address.dis_id,dir_calle_av:a.address.dir_calle_av}),this.cargarProvincias(),this.cargarDistritos();const r=t.abogado.persona;this.abogado=`${r.nat_apellido_paterno} ${r.nat_apellido_materno} ${r.nat_nombres}`,null!==s&&Object.assign(this.expediente,{exp_monto_ejecucion1:s.ex_ejecucion_1,exp_monto_ejecucion2:s.ex_ejecucion_2,exp_interes1:s.ex_interes_1,exp_interes2:s.ex_interes_2,exp_costos:s.ex_costos})}catch(e){this.handleError("Error al cargar expediente:",e)}},async cargarDepartamentos(){try{const e=await this.get({url:`${this.$store.getters.get__url}/department`,token:this.$store.getters.get__token,params:{}});this.departamentos=e.data,this.provincias=[],this.distritos=[]}catch(e){this.handleError("Error al cargar departamentos:",e)}},async cargarProvincias(){if(this.direccion.dep_id)try{const e=await this.post({url:`${this.$store.getters.get__url}/department/provincias`,token:this.$store.getters.get__token,params:{dep_id:this.direccion.dep_id}});this.provincias=e.data}catch(e){this.handleError("Error al cargar provincias:",e)}},async cargarDistritos(){try{const e=await this.post({url:`${this.$store.getters.get__url}/department/distritos`,token:this.$store.getters.get__token,params:{pro_id:this.direccion.pro_id}});this.distritos=e.data}catch(e){this.handleError("Error al cargar distritos:",e)}},async cargarDistritosJudiciales(){try{const e=await this.get({url:this.$store.getters.get__url+"/judicialdistrict",token:this.$store.getters.get__token,params:{}});this.distrito=e.data}catch(e){this.handleError("Error al cargar distritos",e)}},async cargarinstancias(){if(this.juzgado.dis_id)try{const e=await this.get({url:this.$store.getters.get__url+"/instance",token:this.$store.getters.get__token,params:{}});this.instancia=e.data}catch(e){this.handleError("Error al cargar instancias",e)}},async cargarespecialidades(){if(this.juzgado.ins_id)try{const e=await this.get({url:this.$store.getters.get__url+"/specialty",token:this.$store.getters.get__token,params:{}});this.especialidad=e.data}catch(e){this.handleError("Error al cargar especialidades",e)}},async update(){try{await this.post({url:`${this.$store.getters.get__url}/proceeding/update`,token:this.$store.getters.get__token,params:{expediente:this.expediente,tipoper:this.tipoper,procesal:this.procesal,direccion:this.direccion,pnat:this.pnat,pjuc:this.pjuc}}),this.$router.go(-1)}catch(e){this.handleError("Error al actualizar el expediente",e)}},async cargarjuzgados(){try{const e=await this.post({url:`${this.$store.getters.get__url}/juzgado`,token:this.$store.getters.get__token,params:{judis_id:this.juzgado.dis_id}});this.juzgados=e.data}catch(e){this.handleError("Error al cargar los juzgados",e)}},async listarMaterias(){try{const e=await this.get({url:`${this.$store.getters.get__url}/subject`,token:this.$store.getters.get__token});this.materias=e.data}catch(e){this.handleError("Error al obtener las materias",e)}},async listarPretensiones(){try{const e=await this.get({url:`${this.$store.getters.get__url}/claim`,token:this.$store.getters.get__token});this.pretenciones=e.data}catch(e){this.handleError("Error al obtener las pretensiones",e)}},goBack(){this.$router.go(-1)}}},c=l,d=a(1001),p=(0,d.Z)(c,o,s,!1,null,null,null),u=p.exports}}]);
//# sourceMappingURL=970.b8b0009f.js.map