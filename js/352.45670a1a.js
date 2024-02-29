"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[352],{68352:function(a,t,s){s.r(t),s.d(t,{default:function(){return h}});var e=function(){var a=this,t=a._self._c;return t("section",{staticClass:"pc-container pb-4 px-4"},[t("div",{staticClass:"pcoded-content"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header py-3"},[t("div",{staticClass:"d-flex align-items-center"},[t("h5",[a._v("Lista de Especialidades")]),t("button",{staticClass:"btn btn-success btn-sm px-4 ml-auto rounded-1",on:{click:a.mostrarModal}},[a._v(" Nuevo ")])])]),t("div",{staticClass:"card-body"},[t("div",{staticClass:"table-responsive"},[t("table",{ref:"myDataTable",staticClass:"table table-bordered",attrs:{id:"table"}},[a._m(0),t("tbody",a._l(a.especialidades,(function(s,e){return t("tr",{key:e},[a._m(1,!0),t("td",[a._v(a._s(s.esp_nombre))]),t("td",{staticClass:"text-center"},[t("a",{staticClass:"text-primary px-2 py-1 btn-lg mx-1",attrs:{href:"javascript:void(0)"},on:{click:function(t){return a.editar(s.esp_id)}}},[a._m(2,!0)]),t("a",{staticClass:"px-2 py-1 btn-lg text-danger",attrs:{href:"javascript:void(0)"},on:{click:function(t){return a.borrar(s.esp_id)}}},[a._m(3,!0)])])])})),0)])])])]),a.showModal?t("div",{staticClass:"modal",on:{click:a.cerrarModal}},[t("div",{staticClass:"modal-content card border-0",on:{click:function(a){a.stopPropagation()}}},[t("div",{staticClass:"card-header"},[t("h5",{staticClass:"text-center"},[a._v(" "+a._s(a.especialidad.esp_id?"Actualizar especialidad":"Registar Nueva especialidad")+" ")])]),t("div",{staticClass:"card-body mb-0 pb-0"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Nombre")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.especialidad.esp_nombre,expression:"especialidad.esp_nombre"}],staticClass:"form-control",class:{"has-error":a.errores.esp_nombre},domProps:{value:a.especialidad.esp_nombre},on:{input:[function(t){t.target.composing||a.$set(a.especialidad,"esp_nombre",t.target.value)},function(t){return a.validarCampo("esp_nombre")}],keyup:function(t){return!t.type.indexOf("key")&&a._k(t.keyCode,"enter",13,t.key,"Enter")?null:a.guardar.apply(null,arguments)}}}),a.errores.esp_nombre?t("span",{staticClass:"error-message"},[a._v("Ingrese un nombre de Especialidad.")]):a._e()])])])]),t("div",{staticClass:"card-footer border-0 mt-0 pt-0"},[t("div",{staticClass:"d-flex justify-content-end"},[t("button",{staticClass:"btn btn-secondary btn-lg px-4 mx-2 rounded",on:{click:a.cerrarModal}},[a._v("Cerrar")]),t("button",{staticClass:"btn btn-primary btn-lg px-4 rounded",on:{click:a.guardar}},[a.isLoading?t("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t("span",[a._v(a._s(a.especialidad.esp_id?"Actualizar":"Guardar"))])])])])])]):a._e()])])},i=[function(){var a=this,t=a._self._c;return t("thead",[t("tr",[t("th",{staticClass:"text-center pl-4 col-lg-2 col-sm-1"},[a._v("#")]),t("th",[a._v("Nombre")]),t("th",{staticClass:"text-center"},[a._v("Opciones")])])])},function(){var a=this,t=a._self._c;return t("td",{staticClass:"text-center py-2 my-0"},[t("input",{staticClass:"form-check-input me-1",attrs:{type:"checkbox",value:""}})])},function(){var a=this,t=a._self._c;return t("span",{},[t("i",{attrs:{"data-feather":"edit"}})])},function(){var a=this,t=a._self._c;return t("span",[t("i",{attrs:{"data-feather":"trash"}})])}],r=s(59911),l=s.n(r),d=s(2637),n={name:"djudiciales",mixins:[d.A],mounted(){this.leer()},updated(){l().replace()},data(){return{dataTable:null,showModal:!1,especialidades:[],especialidad:{esp_id:"",esp_nombre:""},errores:{esp_nombre:!1},isLoading:!1,editingIndex:null}},methods:{validarCampo(a){this.errores[a]=""===this.especialidad[a]},validarCampos(){return Object.keys(this.errores).forEach((a=>{this.validarCampo(a,a)})),!Object.values(this.errores).some((a=>a))},async leer(){try{this.$showLoadingAlert();const a=await this.$getData("specialty",this);this.especialidades=a.data,this.initDataTable(),this.$closeLoadingAlert()}catch(a){this.$handleApiError(a,"cargar distritos judiciales")}},async actualizarTable(){try{const a=await this.$getData("specialty",this);this.especialidades=a.data,this.initDataTable()}catch(a){this.$handleApiError(a,"cargar especialidades")}},async crear(){if(!this.validarCampos())return;this.isLoading=!0;const a={esp_nombre:this.especialidad.esp_nombre},t=await this.$postData("specialty/store",this,a);0===t.state&&(await this.actualizarTable(),this.isLoading=!1,this.cerrarModal())},async actualizar(a){if(this.validarCampos())try{this.isLoading=!0;const t={esp_id:a,esp_nombre:this.especialidad.esp_nombre},s=await this.$postData("specialty/update",this,t);0===s.state&&(await this.actualizarTable(),this.isLoading=!1,this.cerrarModal())}catch(t){this.$handleApiError(t,"actualizar especialidad")}},async borrar(a){this.$warningAlertWithCancel("Confirmar Eliminación","¿Estás seguro de que deseas eliminar esta Especialidad?",(async()=>{try{this.$showLoadingAlert("Eliminando","");const t={esp_id:a},s=await this.$postData("specialty/destroy",this,t);0===s.state&&(await this.actualizarTable(),this.$closeLoadingAlert())}catch(t){this.$handleApiError(t,t.message),this.$closeLoadingAlert()}}),(()=>{console.info("Cancelado")}))},editar(a){const t=this.especialidades.find((t=>t.esp_id===a));t?(this.especialidad={...t},this.showModal=!0):console.error("especialidad no encontrada")},guardar(){try{this.especialidad.esp_id?this.actualizar(this.especialidad.esp_id):this.crear()}catch(a){console.error(a)}},initDataTable(){this.dataTable&&this.dataTable.destroy(),this.$nextTick((()=>{this.dataTable=$("#table").DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}}),l().replace()}))},mostrarModal(){this.showModal=!0},cerrarModal(){this.showModal=!1,this.errores.esp_nombre=!1,this.especialidad.esp_id="",this.especialidad.esp_nombre=""}}},c=n,o=s(81656),p=(0,o.A)(c,e,i,!1,null,"be3cbc7c",null),h=p.exports},2637:function(a,t){t.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=$(this.$refs.myDataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=352.45670a1a.js.map