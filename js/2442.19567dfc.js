"use strict";(self["webpackChunksisge"]=self["webpackChunksisge"]||[]).push([[2442],{72442:function(a,e,t){t.r(e),t.d(e,{default:function(){return m}});var r=function(){var a=this,e=a._self._c;return e("section",{staticClass:"pc-container pb-4"},[e("div",{staticClass:"pcoded-content"},[e("div",{staticClass:"row mb-4"},[e("div",{staticClass:"col-xl-12"},[e("h5",{staticClass:"text-dark fw-bold"},[e("button",{staticClass:"btn btn-sm mr-2 btn-primary",on:{click:a.goBack}},[e("i",{attrs:{"data-feather":"arrow-left"}})]),a._v("Registro de Nuevo Expediente ")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card shadow rounded"},[a._m(0),e("div",{staticClass:"card-body mb-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("N° de Expediente")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.tra_number,expression:"datosgenerales.tra_number"}],staticClass:"form-control",class:{"has-error":a.errores.tra_number},attrs:{type:"text",placeholder:"0001-2024-OAJ"},domProps:{value:a.datosgenerales.tra_number},on:{input:[function(e){e.target.composing||a.$set(a.datosgenerales,"tra_number",e.target.value)},function(e){return a.validarCampo("tra_number")}]}}),a.errores.tra_number?e("span",{staticClass:"error-message"},[a._v("Ingrese un numero de expediente.")]):a._e()])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("Fecha de llegada")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.tra_arrival_date,expression:"datosgenerales.tra_arrival_date"}],staticClass:"form-control",class:{"has-error":a.errores.tra_arrival_date},attrs:{type:"date"},domProps:{value:a.datosgenerales.tra_arrival_date},on:{input:[function(e){e.target.composing||a.$set(a.datosgenerales,"tra_arrival_date",e.target.value)},function(e){return a.validarCampo("tra_arrival_date")}]}}),a.errores.tra_arrival_date?e("span",{staticClass:"error-message"},[a._v("Ingrese una fecha de llegada.")]):a._e()])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("Oficina de origen")]),e("select",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.tra_area,expression:"datosgenerales.tra_area"}],staticClass:"form-control",class:{"has-error":a.errores.tra_area},on:{change:[function(e){var t=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){var e="_value"in a?a._value:a.value;return e}));a.$set(a.datosgenerales,"tra_area",e.target.multiple?t:t[0])},function(e){return a.validarCampo("tra_area")}]}},[e("option",{staticClass:"py-5",attrs:{value:"",disabled:"",selected:""}},[a._v("-- Seleccione una opción ")]),a._l(a.areas,(function(t){return e("option",{key:t.are_id,staticClass:"py-3",domProps:{value:t.are_id}},[a._v(" "+a._s(t.are_name)+" ")])}))],2),a.errores.tra_area?e("span",{staticClass:"error-message"},[a._v("Seleccione una Ocifina de origen.")]):a._e()])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v(" Responsable ")]),e("select",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.tra_abogado,expression:"datosgenerales.tra_abogado"}],staticClass:"form-control",on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){var e="_value"in a?a._value:a.value;return e}));a.$set(a.datosgenerales,"tra_abogado",e.target.multiple?t:t[0])}}},[e("option",{staticClass:"py-5",attrs:{value:"",disabled:"",selected:""}},[a._v("-- Seleccione una opción ")]),a._l(a.abogados,(function(t,r){return e("option",{key:r,staticClass:"py-3",domProps:{value:t.abo_id}},[a._v(" "+a._s(t.nat_nombres)+" "+a._s(t.nat_apellido_paterno)+" "+a._s(t.nat_apellido_materno)+" ")])}))],2)])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("Expediente de recepción (opcional)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.tra_exp_ext,expression:"datosgenerales.tra_exp_ext"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.datosgenerales.tra_exp_ext},on:{input:function(e){e.target.composing||a.$set(a.datosgenerales,"tra_exp_ext",e.target.value)}}})])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("Documento de recepción (opcional)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.tra_doc_recep,expression:"datosgenerales.tra_doc_recep"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.datosgenerales.tra_doc_recep},on:{input:function(e){e.target.composing||a.$set(a.datosgenerales,"tra_doc_recep",e.target.value)}}})])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("Asunto")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.tra_matter,expression:"datosgenerales.tra_matter"}],staticClass:"form-control",class:{"has-error":a.errores.tra_matter},attrs:{type:"text"},domProps:{value:a.datosgenerales.tra_matter},on:{input:[function(e){e.target.composing||a.$set(a.datosgenerales,"tra_matter",e.target.value)},function(e){return a.validarCampo("tra_matter")}]}}),a.errores.tra_matter?e("span",{staticClass:"error-message"},[a._v("Ingrese un asunto de oficio")]):a._e()])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[a._v("Información adicional:")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.tra_name,expression:"datosgenerales.tra_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.datosgenerales.tra_name},on:{input:function(e){e.target.composing||a.$set(a.datosgenerales,"tra_name",e.target.value)}}})])])]),e("div",{staticClass:"row py-3"},[e("div",{staticClass:"col-md-12 d-flex justify-content-end"},[e("button",{staticClass:"btn btn-primary btn-lg rounded",attrs:{type:"button"},on:{click:a.guardar}},[a._v(" Guardar "),e("i",{attrs:{"data-feather":"arrow-right"}})])])])])])])])])])},s=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"card-header"},[e("div",{staticClass:"row d-flex align-items-center"},[e("div",{staticClass:"col-lg-6 col-md-auto col-sm-12"},[e("h5",[a._v("Datos Generales")])])])])}],o=(t(44114),t(90740)),l=t.n(o),i=t(34061),n=(t(11530),t(4874),{name:"RegistroGeneral",props:{exp:{}},data(){return{trade:null}},created(){this.listarAreas(),this.listarAbogados()},mounted(){this.$nextTick((()=>{l().replace()}))},data(){return{areas:[],abogados:[],tra_person:!1,datosgenerales:{tra_number:"",tra_name:"",tra_exp_ext:"",tra_doc_recep:"",tra_area:"",tra_matter:"",tra_arrival_date:this.getCurrentDate(),tra_state_law:"P",tra_abogado:"",anio:(new Date).getFullYear()},errores:{tra_number:!1,tra_area:!1,tra_matter:!1,tra_arrival_date:!1}}},methods:{async listarAreas(){this.$showLoadingAlert();try{const a=await this.$getData("trade/nextTraNumber",this);this.datosgenerales.tra_number=a.nextTraNumber;const e=await(0,i.bQ)("area",this);this.areas=e.data}catch(a){this.$handleApiError(a,"listar areas")}},async listarAbogados(){try{const a=await(0,i.bQ)("lawyer",this);this.abogados=a.data}catch(a){this.$handleApiError(a,"listar abogados")}finally{this.$closeLoadingAlert()}},async guardar(){if(this.validarCampos()){const e=await this.$getData("trade/nextTraNumber",this);this.datosgenerales.tra_number=e.nextTraNumber;const t=this.areas.find((a=>a.are_id===this.datosgenerales.tra_area));""===this.datosgenerales.tra_abogado&&(this.datosgenerales.tra_abogado=null);try{this.loader=!0;const a={tra_number:this.datosgenerales.tra_number,tra_name:this.datosgenerales.tra_name,tra_exp_ext:this.datosgenerales.tra_exp_ext,tra_doc_recep:this.datosgenerales.tra_doc_recep,tra_matter:this.datosgenerales.tra_matter,tra_arrival_date:this.datosgenerales.tra_arrival_date,tra_state_law:this.datosgenerales.tra_state_law,tra_ubication:t.are_name,tra_are_id:this.datosgenerales.tra_area,tra_abo_id:this.datosgenerales.tra_abogado,anio:this.datosgenerales.anio},e=await this.$postData("trade/create",this,a);"success"===e.state&&(this.trade=e.data,this.$router.push({name:"oficio/detalle",params:{id:this.trade.tra_id}}),this.loader=!1)}catch(a){console.error("Error en la función guardar:",a),a.response?console.error("Respuesta del servidor:",a.response.data):a.message&&console.error("Mensaje de error:",a.message),this.$handleApiError(a,"crear oficio")}}else console.log("error")},getCurrentDate(){return(new Date).toISOString().split("T")[0]},validarCampo(a){this.errores[a]=""===this.datosgenerales[a]},validarCampos(){return Object.keys(this.errores).forEach((a=>{this.validarCampo(a,a)})),!Object.values(this.errores).some((a=>a))},goBack(){"ABOGADO"===this.$store.getters.get__user.usu_rol?this.$router.push({path:"/oficio/asignados"}):this.$router.go(-1)}}}),d=n,c=t(81656),_=(0,c.A)(d,r,s,!1,null,"30897f6f",null),m=_.exports}}]);
//# sourceMappingURL=2442.19567dfc.js.map