"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[953],{45953:function(a,t,s){s.r(t),s.d(t,{default:function(){return h}});var e=function(){var a=this,t=a._self._c;return t("section",{staticClass:"pc-container pb-4"},[t("div",{staticClass:"pcoded-content"},[a._m(0),t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-12"},[t("div",{staticClass:"card shadow"},[a._m(1),t("div",{staticClass:"card-body"},[t("div",{staticClass:"table-responsive"},[t("table",{ref:"myDataTable",staticClass:"table",attrs:{id:"table"}},[a._m(2),t("tbody",a._l(a.trades,(function(s){return t("tr",{key:s.tra_id},[t("td",[t("router-link",{attrs:{to:{name:"oficio/detalle",params:{id:s.tra_id}}}},[a._v(" "+a._s(s.tra_number)+" ")])],1),t("td",[a._v(a._s(s.tra_matter))]),t("td",[a._v(a._s(s.tra_arrival_date))]),s.assistant?t("td",[a._v(a._s(s.assistant.persona.nat_nombres))]):a._e(),s.lawyer?t("td",[a._v(a._s(s.lawyer.persona.nat_nombres))]):a._e(),t("td",[a._v(a._s(s.tra_type_person))]),t("td",[a._v(a._s(s.area.are_name))]),t("td",{staticClass:"pr-5"},[a._v(" Hola ")])])})),0)])])])])])])])])},r=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"row mb-4"},[t("h5",{staticClass:"text-dark fw-bold"},[a._v("Busqueda de expedientes administrativos")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"card-header"},[t("h5",{staticClass:"text-secondary"},[a._v("Lista de expedientes")])])},function(){var a=this,t=a._self._c;return t("thead",[t("tr",[t("th",[a._v("N° de expediente")]),t("th",[a._v("Asunto")]),t("th",[a._v("Fecha de llegada")]),t("th",[a._v("Responsable")]),t("th",[a._v("Cargo")]),t("th",[a._v("Area")]),t("th",[a._v("Estado")])])])}],i=s(90740),d=s.n(i),l=s(2637),n=(s(25800),{name:"Buscar",mixins:[l.A],mounted(){this.$nextTick((()=>{d().replace()})),this.cargarTrades()},data(){return{trades:[],dataTable:null,exp:{},idTrade:null,showModal:""}},methods:{async cargarTrades(){try{this.$showLoadingAlert();const a=await this.$getData("trade",this);this.trades=a.data,await this.$waitForDataTableDraw(this,"myDataTable"),this.$closeLoadingAlert()}catch(a){this.$handleApiError(a,"cargar oficios")}}}}),c=n,o=s(81656),_=(0,o.A)(c,e,r,!1,null,"2f9dcc41",null),h=_.exports},2637:function(a,t,s){var e=s(46587);t.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=e(this.$refs.myDataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=953.e573074f.js.map