"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[5839],{35839:function(t,a,s){s.r(a),s.d(a,{default:function(){return _}});var i=function(){var t=this,a=t._self._c;return a("section",{staticClass:"pc-container"},[a("div",{staticClass:"pcoded-content"},[a("div",{staticClass:"row mb-4"},[a("h5",{staticClass:"text-dark fw-bold"},[t._v(t._s(t.tipoOficio))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12"},[a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{ref:"myDataTable",staticClass:"table",attrs:{id:"tabla"}},[t._m(0),a("tbody",t._l(t.trades,(function(s){return a("tr",{key:s.tra_id},[a("td",{staticClass:"pl-4"},[a("router-link",{attrs:{to:"#"}},[t._v(" "+t._s(s.tra_number)+" ")])],1),a("td",[t._v(t._s(s.tra_matter))]),a("td",[t._v(t._s(s.tra_arrival_date))]),s.assistant?a("td",[t._v(t._s(s.assistant.persona.nat_nombres))]):t._e(),s.lawyer?a("td",[t._v(t._s(s.lawyer.persona.nat_nombres))]):t._e(),a("td",[t._v(t._s(s.tra_type_person))]),a("td",[t._v(t._s(s.area.are_name))]),a("td",{staticClass:"pr-5"},[t._v(" Hola ")])])})),0)])])])])])])])])},e=[function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",[t._v("N° de Oficio")]),a("th",[t._v("Asunto")]),a("th",[t._v("Fecha de llegada")]),a("th",[t._v("Responsable")]),a("th",[t._v("Cargo")]),a("th",[t._v("Area")]),a("th",[t._v("Estado")])])])}],r=s(59911),o=s.n(r),n=s(2637),d={name:"Buscar",props:["tipo_tra"],mixins:[n.A],mounted(){this.$nextTick((()=>{o().replace()})),this.cargarTrades()},data(){return{trades:[],dataTable:null,tipoOficio:null}},methods:{mostrarTipoTrade(){"pendiente"===this.tipo_tra?this.tipoOficio="Lista de Oficios Pendientes":"infoAdi"===this.tipo_tra?this.tipoOficio="Lista de Oficios que requieren Información Adicional":"revInmediata"===this.tipo_tra?this.tipoOficio="Lista de Oficios de Revisión Pendiente":this.tipoOficio="Lista de Oficios Totales"},async cargarTrades(){try{this.$showLoadingAlert(),this.mostrarTipoTrade();const t=await this.$getData("trade",this);if(this.trades=t.data,"pendiente"===this.tipo_tra)this.trades=this.trades.filter((t=>"P"===t.tra_state_law));else if("infoAdi"===this.tipo_tra)this.trades=this.trades.filter((t=>"V"===t.tra_state_mp));else if("revInmediata"===this.tipo_tra){const t=new Date;this.trades=this.trades.filter((a=>{const s=new Date(a.tra_arrival_date),i=Math.floor((t-s)/864e5);return i>15}))}await this.$waitForDataTableDraw(this,"myDataTable"),this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"cargar oficios")}}},watch:{tipo_tra:"cargarTrades"}},l=d,c=s(81656),h=(0,c.A)(l,i,e,!1,null,"2e1b75ff",null),_=h.exports},2637:function(t,a){a.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=$(this.$refs.myDataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=5839.488121c8.js.map