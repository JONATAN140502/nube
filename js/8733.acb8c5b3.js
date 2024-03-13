"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[8733],{88733:function(t,a,i){i.r(a),i.d(a,{default:function(){return b}});var s=function(){var t=this,a=t._self._c;return a("section",{staticClass:"pc-container pb-4 px-4"},[a("div",{staticClass:"pcoded-content"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header py-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("h5",[t._v("Lista de Distritos Judiciales")]),a("button",{staticClass:"btn btn-success btn-sm px-4 ml-auto rounded-1",on:{click:t.mostrarModal}},[t._v(" Nuevo ")])])]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{ref:"myDataTable",staticClass:"table",attrs:{id:"table"}},[t._m(0),a("tbody",t._l(t.djudiciales,(function(i,s){return a("tr",{key:i.judis_id},[t._m(1,!0),a("td",[t._v(t._s(i.judis_nombre))]),a("td",{staticClass:"text-center"},[a("a",{staticClass:"text-primary px-2 py-1 btn-lg mx-1",attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.editar(i.judis_id)}}},[t._m(2,!0)]),a("a",{staticClass:"px-2 py-1 btn-lg text-danger",attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.borrar(i.judis_id)}}},[t._m(3,!0)])])])})),0)])])])]),t.showModal?a("div",{staticClass:"modal",on:{click:t.cerrarModal}},[a("div",{staticClass:"modal-content card border-0",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"card-header d-flex justify-content-center"},[a("h5",{staticClass:"text-center mb-0"},[t._v(" "+t._s(t.djudicial.judis_id?"Actualizar Distrito Judicial":"Registro de nuevo Distrito Judicial")+" ")])]),a("div",{staticClass:"card-body mb-0 pb-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Nombre")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.djudicial.judis_nombre,expression:"djudicial.judis_nombre"}],staticClass:"form-control",class:{"has-error":t.errores.judis_nombre},domProps:{value:t.djudicial.judis_nombre},on:{input:[function(a){a.target.composing||t.$set(t.djudicial,"judis_nombre",a.target.value)},t.validarCampos],keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.guardar.apply(null,arguments)}}}),t.errores.judis_nombre?a("span",{staticClass:"error-message"},[t._v("Ingrese un nombre de distrito judicial.")]):t._e()])])])]),a("div",{staticClass:"card-footer border-0 mt-0 pt-0"},[a("div",{staticClass:"d-flex justify-content-end"},[a("button",{staticClass:"btn btn-secondary btn-lg px-4 mx-2 rounded",on:{click:t.cerrarModal}},[t._v("Cerrar")]),a("button",{staticClass:"btn btn-primary btn-lg px-4 rounded",on:{click:t.guardar}},[t.isLoading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):a("span",[t._v(t._s(t.djudicial.judis_id?"Actualizar":"Guardar"))])])])])])]):t._e()])])},e=[function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",{staticClass:"text-center pl-4 col-lg-2 col-sm-1"},[t._v("#")]),a("th",[t._v("Nombre")]),a("th",{staticClass:"text-center pl-4 col-lg-3 col-sm-1"},[t._v("Opciones")])])])},function(){var t=this,a=t._self._c;return a("td",{staticClass:"text-center py-2 my-0"},[a("input",{staticClass:"form-check-input me-1",attrs:{type:"checkbox",value:""}})])},function(){var t=this,a=t._self._c;return a("span",{},[a("i",{attrs:{"data-feather":"edit"}})])},function(){var t=this,a=t._self._c;return a("span",[a("i",{attrs:{"data-feather":"trash"}})])}],r=i(90740),d=i.n(r),l=i(2637),c=i(46587),n={name:"distritosJudiciales",mixins:[l.A],mounted(){this.leer()},updated(){d().replace()},data(){return{dataTable:null,showModal:!1,djudiciales:[],djudicial:{judis_id:"",judis_nombre:""},errores:{judis_nombre:!1,djudicial:!1},isLoading:!1,editingIndex:null}},methods:{validarCampos(){const t=["judis_nombre"];return t.forEach((t=>this.errores[t]=""===this.djudicial[t])),!Object.values(this.errores).some((t=>t))},async leer(){try{this.$showLoadingAlert();const t=await this.$getData("judicialdistrict",this);this.djudiciales=t.data,this.initDataTable(),this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"cargar distritos judiciales")}},async actualizarTable(){try{const t=await this.$getData("judicialdistrict",this);this.djudiciales=t.data,this.initDataTable()}catch(t){this.$handleApiError(t,"cargar distritos judiciales")}},async crear(){if(this.validarCampos())try{this.isLoading=!0;const t={judis_nombre:this.djudicial.judis_nombre},a=await this.$postData("judicialdistrict/store",this,t);"success"===a.state&&(await this.actualizarTable(),this.isLoading=!1,this.cerrarModal())}catch(t){this.$handleApiError(t,"crear distrito judicial")}},async actualizar(t){if(this.validarCampos())try{this.isLoading=!0;const a={judis_id:t,judis_nombre:this.djudicial.judis_nombre},i=await this.$putData("judicialdistrict/update",this,a),s=i.data;if("success"===i.state){const t=this.djudiciales.findIndex((t=>t.judis_id===this.djudicial.judis_id));-1!==t&&this.$set(this.djudiciales,t,s),this.isLoading=!1,this.cerrarModal()}}catch(a){this.$handleApiError(a,"actualizar distrito judicial")}},async borrar(t){this.$warningAlertWithCancel("Confirmar Eliminación","¿Estás seguro de que deseas eliminar este Distrito Judicial?",(async()=>{try{this.$showLoadingAlert("Eliminando","");const a={judis_id:t},i=await this.$deleteData("judicialdistrict/destroy",this,a);"success"===i.state&&(await this.actualizarTable(),this.$closeLoadingAlert())}catch(a){this.$closeLoadingAlert(),this.$handleApiError(a,a.message)}}),(()=>{console.log("Eliminar abogado cancelado")}))},editar(t){const a=this.djudiciales.find((a=>a.judis_id===t));a?(this.djudicial={...a},this.showModal=!0):console.error("Juzgado no encontrado")},guardar(){try{this.djudicial.judis_id?this.actualizar(this.djudicial.judis_id):this.crear()}catch(t){console.error(t)}},initDataTable(){this.dataTable&&this.dataTable.destroy(),this.$nextTick((()=>{this.dataTable=c("#table").DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}}),d().replace()}))},mostrarModal(){this.showModal=!0},cerrarModal(){this.showModal=!1,this.errores.judis_nombre=!1,this.djudicial.judis_id="",this.djudicial.judis_nombre=""}}},o=n,u=i(81656),h=(0,u.A)(o,s,e,!1,null,"72249e7f",null),b=h.exports},2637:function(t,a,i){var s=i(46587);a.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=s(this.$refs.myDataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=8733.acb8c5b3.js.map