"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[4263],{14263:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"content-header"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row mb-2"},[t._m(0),a("div",{staticClass:"col-sm-6"},[a("ol",{staticClass:"breadcrumb float-sm-right"},[a("router-link",{staticClass:"breadcrumb-item",attrs:{to:"/adminlte"}},[t._v("Inicio")])],1)])])])]),a("section",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[t._m(1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card"},[t._m(2),a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{ref:"myDataTable",staticClass:"table table-hover",attrs:{id:"table","aria-describedby":"tablaHomeAdmin"}},[t._m(3),a("tbody",t._l(t.actions,(function(s,i){return a("tr",{key:i},[a("td",[t._v(t._s(i+1))]),a("td",[t._v(t._s(t.accion(s)))]),a("td",[t._v(t._s(t.formatFecha(s.created_at)))]),a("td",[t._v(t._s(s.user.name))])])})),0)])])]),t._m(4)])])])])])])},e=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-sm-6"},[a("h1",{staticClass:"m-0"},[t._v("Sistema de Gestion de Expedientes Legales")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6 col-md-3"},[a("div",{staticClass:"info-box"},[a("span",{staticClass:"info-box-icon bg-info elevation-1"},[a("i",{staticClass:"fa-solid fa-bell"})]),a("div",{staticClass:"info-box-content"},[a("span",{staticClass:"info-box-text"},[t._v("Alertas")]),a("span",{staticClass:"info-box-number"},[t._v("10")])])])]),a("div",{staticClass:"col-12 col-sm-6 col-md-3"},[a("div",{staticClass:"info-box mb-3"},[a("span",{staticClass:"info-box-icon bg-danger elevation-1"},[a("i",{staticClass:"fa-solid fa-gavel"})]),a("div",{staticClass:"info-box-content"},[a("span",{staticClass:"info-box-text"},[t._v("Audiencias")]),a("span",{staticClass:"info-box-number"},[t._v("5")])])])]),a("div",{staticClass:"clearfix hidden-md-up"}),a("div",{staticClass:"col-12 col-sm-6 col-md-3"},[a("div",{staticClass:"info-box mb-3"},[a("span",{staticClass:"info-box-icon bg-success elevation-1"},[a("i",{staticClass:"fa-solid fa-calendar-days"})]),a("div",{staticClass:"info-box-content"},[a("span",{staticClass:"info-box-text"},[t._v("Calendario")]),a("span",{staticClass:"info-box-number"},[t._v("Actividades")])])])]),a("div",{staticClass:"col-12 col-sm-6 col-md-3"},[a("div",{staticClass:"info-box mb-3"},[a("span",{staticClass:"info-box-icon bg-warning elevation-1"},[a("i",{staticClass:"fa-solid fa-layer-group text-white"})]),a("div",{staticClass:"info-box-content"},[a("span",{staticClass:"info-box-text"},[t._v("Expedientes")]),a("span",{staticClass:"info-box-number"},[t._v("2,000")])])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-header border-transparent"},[a("h3",{staticClass:"card-title"},[t._v("Ultimas acciones realizadas")]),a("div",{staticClass:"card-tools"},[a("button",{staticClass:"btn btn-tool",attrs:{type:"button","data-card-widget":"collapse"}},[a("i",{staticClass:"fas fa-minus"})])])])},function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Accion realizada")]),a("th",[t._v("Hora y fecha")]),a("th",[t._v("Usuario")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-footer clearfix"},[a("a",{staticClass:"btn btn-sm btn-secondary float-right",attrs:{href:"javascript:void(0)"}},[t._v("Ver todas las acciones")])])}],n=s(2637),c={name:"admin",mixins:[n.A],data(){return{actions:"",counts:[]}},mounted(){this.fecthActions()},methods:{async fecthActions(){try{this.$showLoadingAlert(),this.actions=(await this.$postData("reportes/inicioadmin",this)).data,this.counts=(await this.$postData("reportes/inicioadmin",this)).count,await this.$waitForDataTableDraw(this,"myDataTable")}catch(t){this.$handleApiError(t,"leer")}finally{this.$closeLoadingAlert()}},accion(t){return"Revisó el Expediente"==t.accion?`${this.formatAccion(t.accion)} : ${t.exp.exp_numero}`:this.formatAccion(t.accion)},formatAccion(t){return t&&"string"===typeof t?t.charAt(0).toUpperCase()+t.slice(1).toLowerCase():t},formatFecha(t){const a=new Date(t),s={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};return a.toLocaleDateString("es-ES",s)}}},o=c,l=s(81656),r=(0,l.A)(o,i,e,!1,null,null,null),d=r.exports},2637:function(t,a,s){var i=s(46587);a.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=i(this.$refs.myDataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=4263.4f42e14b.js.map