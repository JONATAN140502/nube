"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[455],{17455:function(t,a,e){e.r(a),e.d(a,{default:function(){return v}});var s=function(){var t=this,a=t._self._c;return a("section",{staticClass:"pc-container pb-4"},[a("div",{staticClass:"pcoded-content"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12"},[a("div",{staticClass:"card shadow"},[t._m(1),a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{ref:"myDataTable",staticClass:"table",attrs:{id:"table","aria-describedby":"table-alertas"}},[t._m(2),a("tbody",t._l(t.alertas,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"col-md-2"},[a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.navegarAExpediente(e.ale_exp_id)}}},[t._v(" "+t._s(e.ale_expediente)+" ")])]),a("td",{staticClass:"col-md-2"},[t._v(t._s(e.fecha))]),a("td",{staticClass:"col-md-5"},[t._v(t._s(e.ale_descripcion))]),t._m(3,!0)])})),0)])])])])])])])])},r=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"row mb-4"},[a("h5",{staticClass:"text-dark fw-bold"},[t._v("Agenda /Tareas")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-header"},[a("h5",{staticClass:"text-secondary"},[t._v("Lista de Tareas")])])},function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",[t._v("N° de Expediente")]),a("th",[t._v("Fecha de Vencimiento")]),a("th",[t._v("Descripcion")]),a("th",[t._v("Acciones")])])])},function(){var t=this,a=t._self._c;return a("td",{staticClass:"col-md-3"},[a("button",{staticClass:"btn btn-sm btn-primary mx-2",attrs:{type:"button"}},[t._v("Editar")]),a("button",{staticClass:"btn btn-sm btn-danger mx-2",attrs:{type:"button"}},[t._v("Eliminar")])])}],i=(e(44114),e(1972),e(59911)),l=e.n(i),n=e(91250),o=e(11530),d=e(25800),c=e(2637),h={name:"alertas",mixins:[c.A],data(){return{alertas:[],dataTable:null}},mounted(){this.leer()},updated(){l().replace()},methods:{async leer(){if("ADMIN"==this.$store.getters.get__user.usu_rol)try{(0,o.gA)();const t={Authorization:`Bearer ${this.$store.getters.get__token}`},a=await n.A.get(`${this.$store.getters.get__url}/alerta`,{headers:t});if(console.log(a),!a.data)throw(0,o.B)(),new Error("Error al obtener alertas desde la API");this.alertas=a.data.data,await(0,d.Rx)(this,"myDataTable"),(0,o.B)()}catch(t){(0,d.hS)(t,"leer")}else try{this.$showLoadingAlert();const t={abo_id:this.$store.getters.get__aboid};console.log(t);const a=await this.$postData("lawyer/alertas",this,t);if(console.log(a.data),!a.data)throw new Error("Error al obtener alertas desde la API");this.alertas=a.data,await this.$waitForDataTableDraw(this,"myDataTable"),this.$closeLoadingAlert()}catch(t){this.$closeLoadingAlert(),this.$handleApiError(t,"listaralerts")}},navegarAExpediente(t){this.$router.push({name:"expediente/detalle",params:{id:t}})}}},b=h,u=e(81656),_=(0,u.A)(b,s,r,!1,null,"04ced5cb",null),v=_.exports},2637:function(t,a){a.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=$(this.$refs.myDataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=455.4aa40c4f.js.map