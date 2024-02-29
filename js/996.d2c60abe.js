"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[996],{59996:function(t,a,e){e.r(a),e.d(a,{default:function(){return h}});var s=function(){var t=this,a=t._self._c;return a("section",{staticClass:"pc-container pb-4"},[a("div",{staticClass:"pcoded-content"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12"},[a("div",{staticClass:"card shadow"},[t._m(1),a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{ref:"myDataTable",staticClass:"table",attrs:{id:"table"}},[t._m(2),a("tbody",t._l(t.personas,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(e.documento))]),a("td",[t._v(t._s(e.nombre))]),a("td",{staticClass:"text-center py-2"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"tooltip-container"},[a("router-link",{staticClass:"tooltip-trigger",attrs:{to:{name:"demandante/historial/nuevo",params:{doc:e.documento}}}},[a("i",{attrs:{"data-feather":"edit"}})]),a("div",{staticClass:"custom-tooltip"},[t._v("Registrar historial")])],1),a("div",{staticClass:"tooltip-container"},[a("router-link",{staticClass:"tooltip-trigger",attrs:{to:{name:"demandante/informacion",params:{doc:e.id}}}},[a("i",{attrs:{"data-feather":"file-text"}})]),a("div",{staticClass:"custom-tooltip"},[t._v("Datos del demandante")])],1),a("a",{staticClass:"btn btn-danger py-1 px-2 mx-2",attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.editarDni(e.id)}}},[a("i",{attrs:{"data-feather":"credit-card"}})])])])])})),0)])])])]),t.showModal?a("div",{staticClass:"modal",on:{click:t.cerrarModal}},[a("div",{staticClass:"modal-content card border-0",on:{click:function(t){t.stopPropagation()}}},[t._m(3),a("div",{staticClass:"card-body mb-0 pb-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Dni")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.demandante.nat_dni,expression:"demandante.nat_dni"}],staticClass:"form-control",domProps:{value:t.demandante.nat_dni},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.actualizarDni(t.demandante.per_id)},input:function(a){a.target.composing||t.$set(t.demandante,"nat_dni",a.target.value)}}})])])])]),a("div",{staticClass:"card-footer border-0 mt-0 pt-0"},[a("div",{staticClass:"d-flex justify-content-end"},[a("button",{staticClass:"btn btn-secondary btn-lg px-4 mx-2 rounded",on:{click:t.cerrarModal}},[t._v("Cancelar")]),a("button",{staticClass:"btn btn-primary btn-lg px-4 rounded",on:{click:function(a){return t.actualizarDni(t.demandante.per_id)}}},[t.isLoading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):a("span",[t._v("Guardar")])])])])])]):t._e()])])])])},n=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"row mb-4"},[a("h5",{staticClass:"text-dark fw-bold"},[t._v("Partes Procesales")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-header"},[a("h5",{staticClass:"text-secondary"},[t._v("Lista de Demandantes")])])},function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",[t._v("DNI/RUC")]),a("th",[t._v("Nombre / Razon Social")]),a("th",[t._v("Interacciones")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-header"},[a("h5",{staticClass:"text-center"},[t._v("Editar DNI")])])}],i=e(59911),r=e.n(i),d=e(2637),o={name:"demandantes",mixins:[d.A],mounted(){this.leer()},updated(){r().replace()},data(){return{demandantes:[],demandante:{per_id:"",nat_dni:""},dataTable:null,isLoading:!1,editingIndex:null,showModal:!1}},computed:{personas(){const t=new Map;return this.demandantes.forEach((a=>{const e=null==a.nat_dni?a.jur_ruc:a.nat_dni;t.has(e)||t.set(e,{documento:e,id:a.per_id,nombre:null===a.jur_ruc?`${a.nat_nombres} ${a.nat_apellido_paterno} ${a.nat_apellido_materno}`:a.jur_razon_social,telefono:null===a.jur_ruc?a.nat_telefono:a.jur_telefono,correo:null===a.jur_ruc?a.nat_correo:a.jur_correo})})),Array.from(t.values())}},methods:{async leer(){try{this.$showLoadingAlert();const t=await this.$postData("demandante",this,{tipo_procesal:"DEMANDANTE"});this.demandantes=t.data,await this.$waitForDataTableDraw(this,"myDataTable"),this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"leer demandantes")}},editarDni(t){const a=this.demandantes.find((a=>a.per_id===t));a?(this.demandante={...a},this.showModal=!0):console.log("DNI no encontrada")},async actualizarDni(t){try{this.isLoading=!0;const a={per_id:t,newDni:this.demandante.nat_dni},e=await this.$postData("demandante/updateDni",this,a);"success"===e.state&&(this.isLoading=!1,this.cerrarModal(),this.leer())}catch(a){this.$handleApiError(a,"actualizar dni")}},mostrarModal(){this.showModal=!0},cerrarModal(){this.showModal=!1,this.demandante.per_id="",this.demandante.nat_id=""}}},l=o,c=e(81656),u=(0,c.A)(l,s,n,!1,null,"5fbec69f",null),h=u.exports},2637:function(t,a){a.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=$(this.$refs.myDataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=996.d2c60abe.js.map