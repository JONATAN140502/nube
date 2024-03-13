"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[3248],{93248:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var o=function(){var e=this,t=e._self._c;return t("section",{staticClass:"pc-container pb-4"},[t("div",{staticClass:"pcoded-content"},[e._m(0),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"card shadow"},[t("div",{staticClass:"card-body pb-2"},[e._m(1),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"NumeroExpediente"}},[e._v("N° de Expediente")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_numero,expression:"expediente.exp_numero"}],staticClass:"form-control",attrs:{type:"text",id:"NumeroExpediente",placeholder:"5670-2017-0-1708-JM-LA-01"},domProps:{value:e.expediente.exp_numero},on:{input:function(t){t.target.composing||e.$set(e.expediente,"exp_numero",t.target.value)}}})])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"FechaInicio"}},[e._v("Fecha de Inicio")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_fecha_inicio,expression:"expediente.exp_fecha_inicio"}],staticClass:"form-control",attrs:{type:"date",id:"FechaInicio"},domProps:{value:e.expediente.exp_fecha_inicio},on:{input:function(t){t.target.composing||e.$set(e.expediente,"exp_fecha_inicio",t.target.value)}}})])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"Pretencion"}},[e._v("Pretensión")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_pretencion,expression:"expediente.exp_pretencion"}],staticClass:"form-control",attrs:{id:"ControlSelectMateria"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.expediente,"exp_pretencion",t.target.multiple?a:a[0])}}},[t("option",{staticClass:"py-5",attrs:{value:"",disabled:"",selected:""}},[e._v("--SELECCIONAR")]),e._l(e.pretenciones,(function(a){return t("option",{key:a.pre_id,domProps:{value:a.pre_id}},[e._v(e._s(a.pre_nombre))])}))],2)])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"MontoPretencion"}},[e._v("Monto de Pretensión")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_monto_pretencion,expression:"expediente.exp_monto_pretencion"}],staticClass:"form-control",attrs:{type:"number",id:"MontoPretencion",placeholder:""},domProps:{value:e.expediente.exp_monto_pretencion},on:{input:function(t){t.target.composing||e.$set(e.expediente,"exp_monto_pretencion",t.target.value)}}})])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"ControlSelectMateria"}},[e._v("Materia")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_materia,expression:"expediente.exp_materia"}],staticClass:"form-control",attrs:{id:"ControlSelectMateria"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.expediente,"exp_materia",t.target.multiple?a:a[0])}}},[t("option",{staticClass:"py-5",attrs:{value:"",disabled:"",selected:""}},[e._v("--SELECCIONAR")]),e._l(e.materias,(function(a){return t("option",{key:a.mat_id,domProps:{value:a.mat_id}},[e._v(e._s(a.mat_nombre))])}))],2)])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"ControlSelectDistritoJudicial"}},[e._v("Distrito Judicial")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_dis_judicial,expression:"expediente.exp_dis_judicial"}],staticClass:"form-control",attrs:{id:"ControlSelectDistritoJudicial"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.expediente,"exp_dis_judicial",t.target.multiple?a:a[0])},function(t){e.cargarinstancias(),e.cargarjuzgados()}]}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("--SELECCIONAR")]),e._l(e.distrito,(function(a){return t("option",{domProps:{value:a.judis_id}},[e._v(" "+e._s(a.judis_nombre)+" ")])}))],2)])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"ControlSelectInstancia"}},[e._v("Instancia")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_instancia,expression:"expediente.exp_instancia"}],staticClass:"form-control",attrs:{id:"ControlSelectInstancia"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.expediente,"exp_instancia",t.target.multiple?a:a[0])},e.cargarespecialidades]}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("--SELECCIONAR")]),e._l(e.instancia,(function(a){return t("option",{domProps:{value:a.ins_id}},[e._v(" "+e._s(a.ins_nombre)+" ")])}))],2)])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"ControlSelectEspecialidad"}},[e._v("Especialidad")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_especialidad,expression:"expediente.exp_especialidad"}],staticClass:"form-control",attrs:{id:"ControlSelectEspecialidad"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.expediente,"exp_especialidad",t.target.multiple?a:a[0])}}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("--SELECCIONAR")]),e._l(e.especialidad,(function(a){return t("option",{domProps:{value:a.esp_id}},[e._v(" "+e._s(a.esp_nombre)+" ")])}))],2)])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[e._v("Órgano Jurisdiccional")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_juzgado,expression:"expediente.exp_juzgado"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.expediente,"exp_juzgado",t.target.multiple?a:a[0])}}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("--SELECCIONAR")]),e._l(e.juzgados,(function(a){return t("option",{key:a.co_id,domProps:{value:a.co_id}},[e._v(" "+e._s(a.co_nombre)+" ")])}))],2)])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"departamento"}},[e._v("Estado")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_estado_proceso,expression:"expediente.exp_estado_proceso"}],staticClass:"form-control",attrs:{id:"departamento"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.expediente,"exp_estado_proceso",t.target.multiple?a:a[0])}}},[t("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("--Seleccionar")]),t("option",{attrs:{value:"EN TRAMITE"}},[e._v("En Trámite")]),t("option",{attrs:{value:"EN EJECUCION"}},[e._v("En Ejecución")]),t("option",{attrs:{value:"ARCHIVADO"}},[e._v("Archivado")])])])])]),"EN EJECUCION"==e.expediente.exp_estado_proceso||"ARCHIVADO"==e.expediente.exp_estado_proceso?t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"MontoPretencion"}},[e._v("Monto de Ejecución 1")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_monto_ejecucion1,expression:"expediente.exp_monto_ejecucion1"}],staticClass:"form-control",attrs:{type:"number",id:"MontoPretencion",placeholder:""},domProps:{value:e.expediente.exp_monto_ejecucion1},on:{input:function(t){t.target.composing||e.$set(e.expediente,"exp_monto_ejecucion1",t.target.value)}}})])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"MontoConsentido"}},[e._v("Monto de Ejecución 2")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_monto_ejecucion2,expression:"expediente.exp_monto_ejecucion2"}],staticClass:"form-control",attrs:{type:"number",id:"MontoConsentido",placeholder:""},domProps:{value:e.expediente.exp_monto_ejecucion2},on:{input:function(t){t.target.composing||e.$set(e.expediente,"exp_monto_ejecucion2",t.target.value)}}})])])]):e._e(),"EN EJECUCION"==e.expediente.exp_estado_proceso||"ARCHIVADO"==e.expediente.exp_estado_proceso?t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"Costos"}},[e._v("Interés 1")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_interes1,expression:"expediente.exp_interes1"}],staticClass:"form-control",attrs:{type:"number",id:"int1",placeholder:""},domProps:{value:e.expediente.exp_interes1},on:{input:function(t){t.target.composing||e.$set(e.expediente,"exp_interes1",t.target.value)}}})])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"MontoPretencion"}},[e._v("Interés 2")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_interes2,expression:"expediente.exp_interes2"}],staticClass:"form-control",attrs:{type:"number",id:"int2",placeholder:""},domProps:{value:e.expediente.exp_interes2},on:{input:function(t){t.target.composing||e.$set(e.expediente,"exp_interes2",t.target.value)}}})])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"MontoPretencion"}},[e._v("Costos")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.expediente.exp_costos,expression:"expediente.exp_costos"}],staticClass:"form-control",attrs:{type:"number",id:"Costos",placeholder:""},domProps:{value:e.expediente.exp_costos},on:{input:function(t){t.target.composing||e.$set(e.expediente,"exp_costos",t.target.value)}}})])])]):e._e()])])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"card shadow"},[t("div",{staticClass:"card-body"},[t("div",{staticClass:"row mb-3"},[e._m(2),t("div",{staticClass:"col-md-12"},[t("button",{staticClass:"btn btn-success btn-sm rounded px-3 float-right",attrs:{type:"button"},on:{click:function(t){e.añadirprocesal()}}},[e._v(" Agregar ")])])]),t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"table-responsive"},[t("table",{ref:"myDataTable",staticClass:"table",attrs:{id:"table"}},[e._m(3),t("tbody",e._l(e.procesales,(function(a,o){return t("tr",{key:o},[t("td",[e._v(e._s(a.tipo_procesal))]),t("td",[e._v(e._s(a.tipo_persona))]),t("td",[e._v(e._s(a.per_condicion))]),t("td",[e._v(" "+e._s("NATURAL"===a.tipo_persona?`${a.nat_nombres} ${a.nat_apellido_paterno} ${a.nat_apellido_materno}`:a.jur_razon_social)+" ")]),t("td",[t("button",{staticClass:"btn btn-warning btn-sm rounded px-3 mr-1",attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.editarProcesal(o)}}},[e._v("Editar ")]),t("button",{staticClass:"btn btn-danger btn-sm rounded px-3",attrs:{type:"button"},on:{click:function(t){return e.eliminarProcesal(o)}}},[e._v("Eliminar ")])])])})),0)])])]),e.showModal?t("div",{staticClass:"modal",on:{click:e.cerrarModal}},[t("div",{staticClass:"modal-content card border-0",on:{click:function(e){e.stopPropagation()}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[e._v("Tipo de parte procesal")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.procesal.tipo_procesal,expression:"procesal.tipo_procesal"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.procesal,"tipo_procesal",t.target.multiple?a:a[0])}}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("-- Seleccione una opción")]),t("option",{attrs:{value:"DEMANDANTE"}},[e._v("Demandante")]),t("option",{attrs:{value:"DEMANDADO"}},[e._v("Demandado")])])])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[e._v("Tipo de persona")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.procesal.tipo_persona,expression:"procesal.tipo_persona"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.procesal,"tipo_persona",t.target.multiple?a:a[0])}}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("-- Seleccione una opción")]),t("option",{attrs:{value:"NATURAL"}},[e._v("Persona Natural")]),t("option",{attrs:{value:"JURIDICA"}},[e._v("Persona Juridica")])])])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[e._v("Condición de procesal")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.procesal.per_condicion,expression:"procesal.per_condicion"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.procesal,"per_condicion",t.target.multiple?a:a[0])}}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("-- Seleccione una opción")]),t("option",{attrs:{value:"DOCENTE UNIVERSITARIO",selected:""}},[e._v("Docente Universitario ")]),t("option",{attrs:{value:"ESTUDIANTE"}},[e._v("Estudiante")]),t("option",{attrs:{value:"ADMINISTRATIVO"}},[e._v("Administrativo")]),t("option",{attrs:{value:"TERCERO"}},[e._v("Tercero")])])])])]),"NATURAL"===e.procesal.tipo_persona?t("div",[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"dni"}},[e._v("DNI")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.procesal.nat_dni,expression:"procesal.nat_dni"}],staticClass:"form-control",attrs:{type:"text",id:"dni",placeholder:""},domProps:{value:e.procesal.nat_dni},on:{keyup:function(t){return e.handleKeyUp()},input:function(t){t.target.composing||e.$set(e.procesal,"nat_dni",t.target.value)}}})])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"apellidoPaterno"}},[e._v("Apellido Paterno")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.procesal.nat_apellido_paterno,expression:"procesal.nat_apellido_paterno"}],staticClass:"form-control",attrs:{type:"text",id:"apellidoPaterno",placeholder:""},domProps:{value:e.procesal.nat_apellido_paterno},on:{input:function(t){t.target.composing||e.$set(e.procesal,"nat_apellido_paterno",t.target.value)}}})])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"apellidoMaterno"}},[e._v("Apellido Materno")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.procesal.nat_apellido_materno,expression:"procesal.nat_apellido_materno"}],staticClass:"form-control",attrs:{type:"text",id:"apellidoMaterno",placeholder:""},domProps:{value:e.procesal.nat_apellido_materno},on:{input:function(t){t.target.composing||e.$set(e.procesal,"nat_apellido_materno",t.target.value)}}})])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"nombres"}},[e._v("Nombres")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.procesal.nat_nombres,expression:"procesal.nat_nombres"}],staticClass:"form-control",attrs:{type:"text",id:"nombres",placeholder:""},domProps:{value:e.procesal.nat_nombres},on:{input:function(t){t.target.composing||e.$set(e.procesal,"nat_nombres",t.target.value)}}})])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"telefono"}},[e._v("Telefono")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.procesal.nat_telefono,expression:"procesal.nat_telefono"}],staticClass:"form-control",attrs:{type:"text",id:"telefono",placeholder:""},domProps:{value:e.procesal.nat_telefono},on:{input:function(t){t.target.composing||e.$set(e.procesal,"nat_telefono",t.target.value)}}})])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"email"}},[e._v("Email ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.procesal.nat_correo,expression:"procesal.nat_correo"}],staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:""},domProps:{value:e.procesal.nat_correo},on:{input:function(t){t.target.composing||e.$set(e.procesal,"nat_correo",t.target.value)}}})])])])]):t("div",[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"ruc"}},[e._v("RUC")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.procesal.jur_ruc,expression:"procesal.jur_ruc"}],staticClass:"form-control",attrs:{type:"text",id:"ruc",placeholder:""},domProps:{value:e.procesal.jur_ruc},on:{keyup:function(t){return e.handleKeyUp()},input:function(t){t.target.composing||e.$set(e.procesal,"jur_ruc",t.target.value)}}})])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"razonSocial"}},[e._v("Nombre o Razon Social")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.procesal.jur_razon_social,expression:"procesal.jur_razon_social"}],staticClass:"form-control",attrs:{type:"text",id:"razonSocial",placeholder:""},domProps:{value:e.procesal.jur_razon_social},on:{input:function(t){t.target.composing||e.$set(e.procesal,"jur_razon_social",t.target.value)}}})])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"telefono"}},[e._v("Telefono")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.procesal.jur_telefono,expression:"procesal.jur_telefono"}],staticClass:"form-control",attrs:{type:"text",id:"telefono",placeholder:""},domProps:{value:e.procesal.jur_telefono},on:{input:function(t){t.target.composing||e.$set(e.procesal,"jur_telefono",t.target.value)}}})])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"email"}},[e._v("Email ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.procesal.jur_correo,expression:"procesal.jur_correo"}],staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:""},domProps:{value:e.procesal.jur_correo},on:{input:function(t){t.target.composing||e.$set(e.procesal,"jur_correo",t.target.value)}}})])])])]),t("div",{staticClass:"row mt-3"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"departamento"}},[e._v("Departamento")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.procesal.dep_id,expression:"procesal.dep_id"}],staticClass:"form-control",attrs:{id:"departamento"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.procesal,"dep_id",t.target.multiple?a:a[0])},e.cargarProvincias]}},[t("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("--Seleccionar")]),e._l(e.departamentos,(function(a){return t("option",{domProps:{value:a.dep_id}},[e._v(e._s(a.dep_nombre)+" ")])}))],2)])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"provincia"}},[e._v("Provincia")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.procesal.pro_id,expression:"procesal.pro_id"}],staticClass:"form-control",attrs:{id:"provincia"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.procesal,"pro_id",t.target.multiple?a:a[0])},e.cargarDistritos]}},[t("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("--Seleccionar")]),e._l(e.provincias,(function(a){return t("option",{domProps:{value:a.pro_id}},[e._v(e._s(a.pro_nombre))])}))],2)])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"distrito"}},[e._v("Distrito")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.procesal.dis_id,expression:"procesal.dis_id"}],staticClass:"form-control",attrs:{id:"distrito"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.procesal,"dis_id",t.target.multiple?a:a[0])}}},[t("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("--Seleccionar")]),e._l(e.distritos,(function(a){return t("option",{domProps:{value:a.dis_id}},[e._v(e._s(a.dis_nombre)+" ")])}))],2)])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"calleAvenida"}},[e._v("Calle, Avenida, Mz, S/N")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.procesal.dir_calle_av,expression:"procesal.dir_calle_av"}],staticClass:"form-control",attrs:{type:"text",id:"calleAvenida",placeholder:""},domProps:{value:e.procesal.dir_calle_av},on:{input:function(t){t.target.composing||e.$set(e.procesal,"dir_calle_av",t.target.value)}}})])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12 d-flex justify-content-end"},[t("button",{staticClass:"btn btn-secondary btn-lg mx-2 px-4 rounded",on:{click:e.cerrarModal}},[e._v("Cerrar")]),t("button",{staticClass:"btn btn-primary btn-lg px-4 rounded",on:{click:e.guardarProcesal}},[e._v("Guardar")])])])])]):e._e(),e._m(4),t("div",{staticClass:"row mb-2"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"abogado"}},[e._v("Abogado asignado al expediente en registro")]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.abogado,expression:"abogado"}],staticClass:"form-control",attrs:{type:"text",disabled:"",name:"abogado",id:"abogado"},domProps:{value:e.abogado},on:{input:function(t){t.target.composing||(e.abogado=t.target.value)}}})])])])]),t("div",{staticClass:"row mb-2"},[t("div",{staticClass:"d-flex justify-content-end"},[t("button",{staticClass:"btn btn-lg btn-secondary px-3 mx-2 rounded",on:{click:e.goBack}},[t("i",{attrs:{"data-feather":"arrow-left"}}),e._v(" Volver atras ")]),t("Button",{staticClass:"btn btn-primary btn-lg px-4 rounded",on:{click:function(t){return e.update()}}},[e._v("Guardar")])],1)])])])])])])])},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"row mb-4"},[t("h5",{staticClass:"text-dark fw-bold"},[e._v("Actualizacion de los datos del Expediente")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row mb-2"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"alert alert-primary text-primary",attrs:{role:"alert"}},[e._v(" Informacion general ")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"alert alert-primary text-primary",attrs:{role:"alert"}},[e._v(" Informacion de Demandantes/Demandados ")])])},function(){var e=this,t=e._self._c;return t("thead",[t("tr",[t("th",[e._v("Tipo Procesal")]),t("th",[e._v("Tipo Persona")]),t("th",[e._v("Condicion")]),t("th",[e._v("Nombre")]),t("th",[e._v("Opciones")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row mb-2"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"alert alert-primary text-primary",attrs:{role:"alert"}},[e._v(" Datos del abogado ")])])])}],r=(a(44114),a(38280)),i=a(90740),l=a.n(i),n=a(98355),c=a(4874),d=a.n(c),p={name:"RegistroProcesal",mounted(){this.$nextTick((()=>{l().replace()}))},props:["id"],data(){return{esPersonaNatural:!0,modalVisible:!1,dataTable:null,showModal:!1,expediente:{exp_id:"",exp_numero:"",exp_fecha_inicio:"",exp_monto_pretencion:"",exp_pretencion:"",exp_materia:"",exp_estado_proceso:"",exp_juzgado:"",exp_costos:"",exp_monto_ejecucion1:"",exp_monto_ejecucion2:"",exp_interes1:"",exp_interes2:"",exp_dis_judicial:"",exp_instancia:"",exp_especialidad:"",multiple:"0"},distrito:[],instancia:[],especialidad:[],departamentos:[],provincias:[],distritos:[],juzgados:[],abogado:"",materias:[],pretenciones:[],procesales:[],procesal:{proc_id:"",tipo_procesal:"",tipo_persona:"",condicion:"",per_id:"",exp_id:"",nat_dni:"",nat_apellido_paterno:"",nat_apellido_materno:"",nat_nombres:"",nat_telefono:"",nat_correo:"",jur_ruc:"",jur_razon_social:"",jur_telefono:"",jur_correo:"",jur_rep_legal:"",per_condicion:"",dir_id:"",dir_calle_av:"",dis_id:"",pro_id:"",dep_id:""},editingIndex:null}},created(){this.listarMaterias(),this.listarPretensiones(),this.cargarDistritosJudiciales(),this.cargarDepartamentos(),this.traerexpediente()},methods:{...(0,r.i0)(["get","post"]),handleKeyUp(){null===this.editingIndex&&this.filterpersona()},handleError(e,t){console.error(e,t)},cerrarModal(){this.showModal=!1,this.procesal={proc_id:"",tipo_procesal:"",tipo_persona:"",condicion:"",per_id:"",exp_id:"",nat_dni:"",nat_apellido_paterno:"",nat_apellido_materno:"",nat_nombres:"",nat_telefono:"",nat_correo:"",jur_ruc:"",jur_razon_social:"",jur_telefono:"",jur_correo:"",jur_rep_legal:"",per_condicion:"",dir_id:"",dir_calle_av:"",dis_id:"",pro_id:"",dep_id:""},this.editingIndex=null},async traerexpediente(){try{this.$showLoadingAlert();const e=await n.A.get(`${this.$store.getters.get__url}/proceeding/${this.id}/show`,{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`},params:{}});console.log(e);const t=e.data.proceeding,a=e.data.costos;this.procesales=e.data.personData,Object.assign(this.expediente,{exp_id:t.exp_id,exp_numero:t.exp_numero,exp_fecha_inicio:t.exp_fecha_inicio,exp_monto_pretencion:t.exp_monto_pretencion,exp_monto_ejecucion:t.exp_monto_ejecucion,exp_pretencion:t.exp_pretencion,exp_materia:t.exp_materia,exp_estado_proceso:t.exp_estado_proceso,exp_especialidad:t.exp_especialidad,exp_juzgado:t.exp_juzgado,exp_dis_judicial:t.exp_dis_judicial,exp_instancia:t.exp_instancia}),this.cargarinstancias(),this.cargarjuzgados(),this.cargarespecialidades();const o=t.abogado.persona;this.abogado=`${o.nat_apellido_paterno} ${o.nat_apellido_materno} ${o.nat_nombres}`,null!==a&&Object.assign(this.expediente,{exp_monto_ejecucion1:a.ex_ejecucion_1,exp_monto_ejecucion2:a.ex_ejecucion_2,exp_interes1:a.ex_interes_1,exp_interes2:a.ex_interes_2,exp_costos:a.ex_costos}),this.$closeLoadingAlert()}catch(e){this.handleError("Error al cargar expediente:",e)}},async cargarDepartamentos(){try{const e=await n.A.get(`${this.$store.getters.get__url}/department`,{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`},params:{}});this.departamentos=e.data.data,this.provincias=[],this.distritos=[]}catch(e){this.handleError("Error al cargar departamentos:",e)}},async cargarProvincias(){if(this.procesal.dep_id)try{const e=await n.A.post(`${this.$store.getters.get__url}/department/provincias`,{dep_id:this.procesal.dep_id},{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});this.provincias=e.data.data}catch(e){this.handleError("Error al cargar provincias:",e)}},async cargarDistritos(){try{const e=await n.A.post(`${this.$store.getters.get__url}/department/distritos`,{pro_id:this.procesal.pro_id},{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});this.distritos=e.data.data}catch(e){this.handleError("Error al cargar distritos:",e)}},async cargarDistritosJudiciales(){try{const e=await n.A.get(`${this.$store.getters.get__url}/judicialdistrict`,{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`},params:{}});this.distrito=e.data.data}catch(e){this.handleError("Error al cargar distritos",e)}},async cargarinstancias(){if(this.expediente.exp_dis_judicial)try{const e=await n.A.get(`${this.$store.getters.get__url}/instance`,{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`},params:{}});this.instancia=e.data.data}catch(e){this.handleError("Error al cargar instancias",e)}},async cargarespecialidades(){if(this.expediente.exp_instancia)try{const e=await n.A.get(`${this.$store.getters.get__url}/specialty`,{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`},params:{}});this.especialidad=e.data.data}catch(e){this.handleError("Error al cargar especialidades",e)}},async update(){if(0===this.procesales.length)d().fire({title:"Error",text:"Debe haber al menos un registro  de Demandante  o Demandado.",icon:"error"});else{this.procesales.length>=2&&(this.expediente.multiple="1");try{const e=await n.A.post(`${this.$store.getters.get__url}/proceeding/update`,{expediente:this.expediente,Personas:this.procesales},{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});0==e.data.state?(d().fire("Actualización Correcta","Datos Actulizados Correctamente","success"),this.$router.go(-1)):d().fire("Falló la actualización","Verifique los datos o comuniquese con el administrador del sistema","error")}catch(e){this.handleError("Error al actualizar el expediente",e)}}},async cargarjuzgados(){try{const e=await n.A.post(`${this.$store.getters.get__url}/juzgado`,{judis_id:this.expediente.exp_dis_judicial},{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});this.juzgados=e.data.data}catch(e){this.handleError("Error al cargar los juzgados",e)}},async listarMaterias(){try{const e=await n.A.get(`${this.$store.getters.get__url}/subject`,{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});this.materias=e.data.data}catch(e){this.handleError("Error al obtener las materias",e)}},async listarPretensiones(){try{const e=await n.A.get(`${this.$store.getters.get__url}/claim`,{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});this.pretenciones=e.data.data}catch(e){this.handleError("Error al obtener las pretensiones",e)}},goBack(){this.$router.go(-1)},editprocesal(e){this.showModal=!0},"añadirprocesal"(e){this.showModal=!0},editarProcesal(e){this.procesal={...this.procesales[e]},this.showModal=!0,this.editingIndex=e,this.cargarProvincias(),this.cargarDistritos()},guardarProcesal(){null!==this.editingIndex?this.$set(this.procesales,this.editingIndex,{...this.procesal}):this.procesales.push({...this.procesal}),this.editingIndex=null,this.showModal=!1,this.procesal={proc_id:"",tipo_procesal:"",tipo_persona:"",condicion:"",per_id:"",exp_id:"",nat_dni:"",nat_apellido_paterno:"",nat_apellido_materno:"",nat_nombres:"",nat_telefono:"",nat_correo:"",jur_ruc:"",jur_razon_social:"",jur_telefono:"",jur_correo:"",jur_rep_legal:"",per_condicion:"",dir_id:"",dir_calle_av:"",dis_id:"",pro_id:"",dep_id:""},this.editingIndex=null},eliminarProcesal(e){d().fire({title:"¿Estás seguro?",text:"No podrás revertir esto",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Sí, eliminarlo"}).then((t=>{t.isConfirmed&&(this.procesales.splice(e,1),d().fire("Eliminado","El elemento ha sido eliminado correctamente","success"))}))},async filterpersona(){let e;if("NATURAL"==this.procesal.tipo_persona){if(8===this.procesal.nat_dni.length){this.showModal=!1,e=d().fire({title:"Buscando",text:"Por favor espera...",showConfirmButton:!1,allowOutsideClick:!1,didOpen:()=>d().showLoading()});try{const t=await n.A.post(`${this.$store.getters.get__url}/proceeding/filterprocesal`,{doc:this.procesal.nat_dni,tipo:this.procesal.tipo_persona},{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});e&&e.close(),0==t.data.state?d().fire({title:"Datos Encontrados",text:"OK",icon:"success",showCancelButton:!1,confirmButtonColor:"#d33"}).then((e=>{e.isConfirmed&&(this.showModal=!0,this.procesal.nat_apellido_paterno=t.data.data.nat_apellido_paterno,this.procesal.nat_apellido_materno=t.data.data.nat_apellido_materno,this.procesal.nat_nombres=t.data.data.nat_nombres,this.procesal.nat_telefono=t.data.data.nat_telefono,this.procesal.nat_correo=t.data.data.nat_correo,this.procesal.dep_id=t.data.dir.dep_id,this.cargarProvincias(),this.procesal.pro_id=t.data.dir.pro_id,this.cargarDistritos(),this.procesal.dis_id=t.data.dir.dis_id,this.procesal.dir_calle_av=t.data.dir.dir_calle_av)})):d().fire({title:"Datos no  Encontrados",text:"Registre",icon:"warning",showCancelButton:!1,confirmButtonColor:"#d33"}).then((e=>{e.isConfirmed&&(this.showModal=!0,this.procesal.dir_calle_av="",this.procesal.dis_id="",this.procesal.pro_id="",this.procesal.dep_id="",this.procesal.nat_apellido_paterno="",this.procesal.nat_apellido_materno="",this.procesal.nat_nombres="",this.procesal.nat_telefono="",this.procesal.nat_correo="")}))}catch(t){d().fire({title:"Datos no  Encontrados",text:"Registre",icon:"warning",showCancelButton:!1,confirmButtonColor:"#d33"}).then((e=>{e.isConfirmed&&(this.showModal=!0,this.procesal.dir_calle_av="",this.procesal.dis_id="",this.procesal.pro_id="",this.procesal.dep_id="",this.procesal.nat_apellido_paterno="",this.procesal.nat_apellido_materno="",this.procesal.nat_nombres="",this.procesal.nat_telefono="",this.procesal.nat_correo="")}))}}}else if(11===this.procesal.jur_ruc.length){this.showModal=!1,e=d().fire({title:"Buscando",text:"Por favor espera...",showConfirmButton:!1,allowOutsideClick:!1,didOpen:()=>d().showLoading()});try{const t=await n.A.post(`${this.$store.getters.get__url}/proceeding/filterprocesal`,{doc:this.procesal.jur_ruc,tipo:this.procesal.tipo_persona},{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});e&&e.close(),0==t.data.state?d().fire({title:"Datos Encontrados",text:"OK",icon:"success",showCancelButton:!1,confirmButtonColor:"#d33"}).then((e=>{e.isConfirmed&&(this.showModal=!0,this.procesal.jur_razon_social=t.data.data.jur_razon_social,this.procesal.jur_telefono=t.data.data.jur_telefono,this.procesal.jur_correo=t.data.data.jur_correo,this.procesal.jur_rep_legal=t.data.data.jur_rep_legal,this.procesal.dep_id=t.data.dir.dep_id,this.cargarProvincias(),this.procesal.pro_id=t.data.dir.pro_id,this.cargarDistritos(),this.procesal.dis_id=t.data.dir.dis_id,this.procesal.dir_calle_av=t.data.dir.dir_calle_av)})):d().fire({title:"Datos no  Encontrados",text:"Registre",icon:"warning",showCancelButton:!1,confirmButtonColor:"#d33"}).then((e=>{e.isConfirmed&&(this.showModal=!0,this.procesal.dir_calle_av="",this.procesal.dis_id="",this.procesal.pro_id="",this.procesal.dep_id="",this.procesal.jur_razon_social="",this.procesal.jur_telefono="",this.procesal.jur_correo="",this.procesal.jur_rep_legal="")}))}catch(t){d().fire({title:"Datos no  Encontrados",text:"Registre",icon:"warning",showCancelButton:!1,confirmButtonColor:"#d33"}).then((e=>{e.isConfirmed&&(this.showModal=!0,this.procesal.dir_calle_av="",this.procesal.dis_id="",this.procesal.pro_id="",this.procesal.dep_id="",this.procesal.jur_razon_social="",this.procesal.jur_telefono="",this.procesal.jur_correo="",this.procesal.jur_rep_legal="")}))}}}}},_=p,u=a(81656),m=(0,u.A)(_,o,s,!1,null,"7e28df78",null),v=m.exports}}]);
//# sourceMappingURL=3248.4ec7f282.js.map