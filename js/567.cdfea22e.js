"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[567],{79567:function(t,a,e){e.r(a),e.d(a,{default:function(){return p}});var s=function(){var t=this,a=t._self._c;return a("section",{staticClass:"pc-container pb-4 px-4"},[a("div",{staticClass:"pcoded-content"},[a("div",{staticClass:"card shadow"},[t._m(0),a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{ref:"myDataTable",staticClass:"table",attrs:{id:"table"}},[t._m(1),a("tbody",t._l(t.expedientes,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"text-center py-2"},[t._v(" "+t._s(s+1)+" ")]),a("td",[t._v(t._s(e.exp_numero))]),a("td",{staticClass:"text-center"},[a("a",{staticClass:"px-2 py-1 btn-lg text-danger",attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.borrar(e.exp_id)}}},[t._m(2,!0)])])])})),0)])])])])])])},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-header py-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("h5",[t._v("Expedientes")])])])},function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",{staticClass:"text-center pl-4 col-lg-2 col-sm-1"},[t._v("N°")]),a("th",[t._v("Número")]),a("th",{staticClass:"text-center pl-4 col-lg-2 col-sm-1"},[t._v("#")])])])},function(){var t=this,a=t._self._c;return a("span",[a("i",{attrs:{"data-feather":"trash"}})])}],n=e(98164),l=e.n(n),r=e(67324),c={name:"eliminar-exp",mixins:[r.Z],mounted(){this.leer()},updated(){l().replace()},data(){return{dataTable:null,showModal:!1,expedientes:[],isLoading:!1}},methods:{async leer(){try{this.$showLoadingAlert();const t=await this.$getData("proceeding/delete/list",this);this.expedientes=t.data,this.initDataTable(),this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"cargar exps")}},async actualizarTable(){try{const t=await this.$getData("proceeding/delete/list",this);this.materias=t.data,this.initDataTable()}catch(t){this.$handleApiError(t,"cargar exps")}},async borrar(t){this.$warningAlertWithCancel("Confirmar Eliminación","¿Estás seguro de que deseas eliminar este Expediente?",(async()=>{try{this.$showLoadingAlert("Eliminando","");const a={exp_id:t},e=await this.$postData("proceeding/destroy",this,a);0===e.state&&(await this.leer(),this.$closeLoadingAlert())}catch(a){this.$handleApiError(a,a.message),this.$closeLoadingAlert()}}),(()=>{console.info("Cancelado")}))},initDataTable(){this.dataTable&&this.dataTable.destroy(),this.$nextTick((()=>{this.dataTable=$("#table").DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}}),l().replace()}))}}},d=c,o=e(1001),h=(0,o.Z)(d,s,i,!1,null,"1fc5735a",null),p=h.exports},67324:function(t,a){a.Z={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=$(this.$refs.myDataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=567.cdfea22e.js.map