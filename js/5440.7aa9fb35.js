"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[5440],{35440:function(t,a,e){e.r(a),e.d(a,{default:function(){return b}});var s=function(){var t=this,a=t._self._c;return a("section",{staticClass:"pc-container pb-4 px-4"},[a("div",{staticClass:"pcoded-content"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header py-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("h5",[t._v("Lista de Pretensiones")]),a("button",{staticClass:"btn btn-success btn-sm px-4 ml-auto rounded-1",on:{click:t.mostrarModal}},[t._v(" Nuevo ")])])]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{ref:"myDataTable",staticClass:"table table-bordered",attrs:{id:"table"}},[t._m(0),a("tbody",t._l(t.pretensiones,(function(e,s){return 1==e.type_id?a("tr",{key:s},[t._m(1,!0),a("td",[t._v(t._s(e.pre_nombre))]),a("td",{staticClass:"text-center"},[a("a",{staticClass:"text-primary px-2 py-1 btn-lg mx-1",attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.editar(e.pre_id)}}},[t._m(2,!0)]),a("a",{staticClass:"px-2 py-1 btn-lg text-danger",attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.borrar(e.pre_id)}}},[t._m(3,!0)])])]):t._e()})),0)])])])]),t.modalVisible?a("div",{staticClass:"modal",on:{click:t.cerrarModal}},[a("div",{staticClass:"modal-content card border-0",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"card-header"},[a("h5",{staticClass:"text-center"},[t._v(" "+t._s(t.pretension.pre_id?"Actualizar Pretensión":"Registro de nueva Pretensión ")+" ")])]),a("div",{staticClass:"card-body mb-0 pb-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Nombre")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pretension.pre_nombre,expression:"pretension.pre_nombre"}],staticClass:"form-control",class:{"has-error":t.errores.pre_nombre},domProps:{value:t.pretension.pre_nombre},on:{input:[function(a){a.target.composing||t.$set(t.pretension,"pre_nombre",a.target.value)},function(a){return t.validarCampo("pre_nombre")}],keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.guardar.apply(null,arguments)}}}),t.errores.pre_nombre?a("span",{staticClass:"error-message"},[t._v("Ingrese un nombre de Pretensión.")]):t._e()])])])]),a("div",{staticClass:"card-footer border-0 mt-0 pt-0"},[a("div",{staticClass:"d-flex justify-content-end"},[a("button",{staticClass:"btn btn-secondary btn-lg px-4 mx-2 rounded",on:{click:t.cerrarModal}},[t._v("Cerrar")]),a("button",{staticClass:"btn btn-primary btn-lg px-4 rounded",on:{click:t.guardar}},[t.isLoading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):a("span",[t._v(t._s(t.pretension.pre_id?"Actualizar":"Guardar"))])])])])])]):t._e()])])},r=[function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",{staticClass:"text-center pl-4 col-lg-2 col-sm-1"},[t._v("#")]),a("th",[t._v("Nombre")]),a("th",{staticClass:"text-center"},[t._v("Opciones")])])])},function(){var t=this,a=t._self._c;return a("td",{staticClass:"text-center py-2 my-0"},[a("input",{staticClass:"form-check-input me-1",attrs:{type:"checkbox",value:""}})])},function(){var t=this,a=t._self._c;return a("span",{},[a("i",{attrs:{"data-feather":"edit"}})])},function(){var t=this,a=t._self._c;return a("span",[a("i",{attrs:{"data-feather":"trash"}})])}],i=e(90740),n=e.n(i),o=e(2637),l=e(46587),c={name:"pretensiones",mixins:[o.A],mounted(){this.leer()},updated(){n().replace()},data(){return{dataTable:null,modalVisible:!1,pretensiones:[],pretension:{pre_id:"",pre_nombre:""},errores:{pre_nombre:!1},isLoading:!1}},methods:{validarCampo(t){this.errores[t]=""===this.pretension[t]},validarCampos(){return Object.keys(this.errores).forEach((t=>{this.validarCampo(t,t)})),!Object.values(this.errores).some((t=>t))},editar(t){try{const a=this.pretensiones.find((a=>a.pre_id===t));a?(this.pretension={...a},this.modalVisible=!0):console.log("Pretension no encontrada")}catch(a){console.error(a)}},async leer(){try{this.$showLoadingAlert();const t=await this.$getData("claim",this);this.pretensiones=t.data,this.initDataTable(),this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"cargar pretensiones")}},async actualizarTable(){try{const t=await this.$getData("claim",this);this.pretensiones=t.data,this.initDataTable()}catch(t){this.$handleApiError(t,"cargar pretensiones")}},async crear(){if(!this.validarCampos())return;this.isLoading=!0;const t={pre_nombre:this.pretension.pre_nombre,tipo:1},a=await this.$postData("claim/store",this,t);0===a.state&&(await this.actualizarTable(),this.isLoading=!1,this.cerrarModal())},async actualizar(t){if(this.validarCampos())try{this.isLoading=!0;const a={pre_id:t,pre_nombre:this.pretension.pre_nombre},e=await this.$postData("claim/update",this,a);0===e.state&&(await this.actualizarTable(),this.isLoading=!1,this.cerrarModal())}catch(a){this.$handleApiError(a,"actualizar pretension")}},async borrar(t){this.$warningAlertWithCancel("Confirmar Eliminación","¿Estás seguro de que deseas eliminar esta Pretension?",(async()=>{try{this.$showLoadingAlert("Eliminando","");const a={pre_id:t},e=await this.$postData("claim/destroy",this,a);0===e.state&&(await this.actualizarTable(),this.$closeLoadingAlert())}catch(a){this.$handleApiError(a,a.message),this.$closeLoadingAlert()}}),(()=>{console.info("Cancelado")}))},guardar(){try{this.pretension.pre_id?this.actualizar(this.pretension.pre_id):this.crear()}catch(t){console.error(t)}},initDataTable(){this.dataTable&&this.dataTable.destroy(),this.$nextTick((()=>{this.dataTable=l("#table").DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}}),n().replace()}))},mostrarModal(){this.modalVisible=!0},cerrarModal(){this.modalVisible=!1,this.errores.pre_nombre=!1,this.pretension.pre_id="",this.pretension.pre_nombre=""}}},d=c,p=e(81656),h=(0,p.A)(d,s,r,!1,null,"98d6e9b2",null),b=h.exports},2637:function(t,a,e){var s=e(46587);a.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=s(this.$refs.myDataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=5440.7aa9fb35.js.map