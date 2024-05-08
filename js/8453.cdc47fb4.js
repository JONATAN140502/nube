"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[8453],{78453:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"pc-container pb-4 px-4"},[e("div",{staticClass:"pcoded-content"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header py-3"},[e("div",{staticClass:"d-flex align-items-center"},[e("h5",[t._v("Lista de Pretensiones")]),e("button",{staticClass:"btn btn-success btn-sm px-4 ml-auto rounded-1",on:{click:t.mostrarModal}},[t._v(" Nuevo ")])])]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"table-responsive"},[e("table",{ref:"myDataTable",staticClass:"table table-bordered",attrs:{id:"table"}},[t._m(0),e("tbody",t._l(t.pretensiones,(function(a,s){return 2==a.type_id?e("tr",{key:s},[t._m(1,!0),e("td",[t._v(t._s(a.pre_nombre))]),e("td",{staticClass:"text-center"},[e("a",{staticClass:"text-primary px-2 py-1 btn-lg mx-1",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.editar(a.pre_id)}}},[t._m(2,!0)]),e("a",{staticClass:"px-2 py-1 btn-lg text-danger",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.borrar(a.pre_id)}}},[t._m(3,!0)])])]):t._e()})),0)])])])]),t.modalVisible?e("div",{staticClass:"modal",on:{click:t.cerrarModal}},[e("div",{staticClass:"modal-content card border-0",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"card-header"},[e("h5",{staticClass:"text-center"},[t._v(" "+t._s(t.pretension.pre_id?"Actualizar Pretensión":"Registro de nueva Pretensión ")+" ")])]),e("div",{staticClass:"card-body mb-0 pb-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[t._v("Nombre")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pretension.pre_nombre,expression:"pretension.pre_nombre"}],staticClass:"form-control",class:{"has-error":t.errores.pre_nombre},domProps:{value:t.pretension.pre_nombre},on:{input:[function(e){e.target.composing||t.$set(t.pretension,"pre_nombre",e.target.value)},function(e){return t.validarCampo("pre_nombre")}],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.guardar.apply(null,arguments)}}}),t.errores.pre_nombre?e("span",{staticClass:"error-message"},[t._v("Ingrese un nombre de Pretensión.")]):t._e()])])])]),e("div",{staticClass:"card-footer border-0 mt-0 pt-0"},[e("div",{staticClass:"d-flex justify-content-end"},[e("button",{staticClass:"btn btn-secondary btn-lg px-4 mx-2 rounded",on:{click:t.cerrarModal}},[t._v("Cerrar")]),e("button",{staticClass:"btn btn-primary btn-lg px-4 rounded",on:{click:t.guardar}},[t.isLoading?e("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):e("span",[t._v(t._s(t.pretension.pre_id?"Actualizar":"Guardar"))])])])])])]):t._e()])])},r=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"text-center pl-4 col-lg-2 col-sm-1"},[t._v("#")]),e("th",[t._v("Nombre")]),e("th",{staticClass:"text-center"},[t._v("Opciones")])])])},function(){var t=this,e=t._self._c;return e("td",{staticClass:"text-center py-2 my-0"},[e("input",{staticClass:"form-check-input me-1",attrs:{type:"checkbox",value:""}})])},function(){var t=this,e=t._self._c;return e("span",{},[e("i",{attrs:{"data-feather":"edit"}})])},function(){var t=this,e=t._self._c;return e("span",[e("i",{attrs:{"data-feather":"trash"}})])}],i=a(90740),n=a.n(i),o=a(2637),l=a(46587),c={name:"pretensiones",mixins:[o.A],mounted(){this.leer()},updated(){n().replace()},data(){return{dataTable:null,modalVisible:!1,pretensiones:[],pretension:{pre_id:"",pre_nombre:""},errores:{pre_nombre:!1},isLoading:!1}},methods:{validarCampo(t){this.errores[t]=""===this.pretension[t]},validarCampos(){return Object.keys(this.errores).forEach((t=>{this.validarCampo(t,t)})),!Object.values(this.errores).some((t=>t))},editar(t){try{const e=this.pretensiones.find((e=>e.pre_id===t));e?(this.pretension={...e},this.modalVisible=!0):console.log("Pretension no encontrada")}catch(e){console.error(e)}},async leer(){try{this.$showLoadingAlert();const t=await this.$getData("claim",this);this.pretensiones=t.data,this.initDataTable(),this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"cargar pretensiones")}},async actualizarTable(){try{const t=await this.$getData("claim",this);this.pretensiones=t.data,this.initDataTable()}catch(t){this.$handleApiError(t,"cargar pretensiones")}},async crear(){if(!this.validarCampos())return;this.isLoading=!0;const t={pre_nombre:this.pretension.pre_nombre,tipo:2},e=await this.$postData("claim/store",this,t);0===e.state&&(await this.actualizarTable(),this.isLoading=!1,this.cerrarModal())},async actualizar(t){if(this.validarCampos())try{this.isLoading=!0;const e={pre_id:t,pre_nombre:this.pretension.pre_nombre},a=await this.$postData("claim/update",this,e);0===a.state&&(await this.actualizarTable(),this.isLoading=!1,this.cerrarModal())}catch(e){this.$handleApiError(e,"actualizar pretension")}},async borrar(t){this.$warningAlertWithCancel("Confirmar Eliminación","¿Estás seguro de que deseas eliminar esta Pretension?",(async()=>{try{this.$showLoadingAlert("Eliminando","");const e={pre_id:t},a=await this.$postData("claim/destroy",this,e);0===a.state&&(await this.actualizarTable(),this.$closeLoadingAlert())}catch(e){this.$handleApiError(e,e.message),this.$closeLoadingAlert()}}),(()=>{console.info("Cancelado")}))},guardar(){try{this.pretension.pre_id?this.actualizar(this.pretension.pre_id):this.crear()}catch(t){console.error(t)}},initDataTable(){this.dataTable&&this.dataTable.destroy(),this.$nextTick((()=>{this.dataTable=l("#table").DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}}),n().replace()}))},mostrarModal(){this.modalVisible=!0},cerrarModal(){this.modalVisible=!1,this.errores.pre_nombre=!1,this.pretension.pre_id="",this.pretension.pre_nombre=""}}},d=c,p=a(81656),h=(0,p.A)(d,s,r,!1,null,"27043191",null),u=h.exports},2637:function(t,e,a){var s=a(46587);e.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=s(this.$refs.myDataTable).DataTable({language:{lengthMenu:"Mostrar _MENU_ registros por página",zeroRecords:"No se encontraron resultados",info:"Mostrando _START_ a _END_ de _TOTAL_ registros",infoEmpty:"Mostrando 0 a 0 de 0 registros",infoFiltered:"(filtrado de _MAX_ registros totales)",search:"Buscar",paginate:{first:"Primero",last:"Último",next:"Siguiente",previous:"Anterior"}}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=8453.cdc47fb4.js.map