"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[6799],{26799:function(a,t,s){s.r(t),s.d(t,{default:function(){return u}});var e=function(){var a=this,t=a._self._c;return t("section",{staticClass:"pc-container pb-4"},[t("div",{staticClass:"pcoded-content"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-12"},[t("div",{staticClass:"card shadow"},[a._m(0),t("div",{staticClass:"card-body"},[t("div",{staticClass:"table-responsive"},[t("table",{ref:"myDataTable",staticClass:"table",attrs:{id:"table"}},[a._m(1),t("tbody",a._l(a.trades,(function(s){return t("tr",{key:s.tra_id},[t("td",[t("router-link",{attrs:{to:{name:"oficio/detalle",params:{id:s.tra_id}}}},[a._v(" "+a._s(s.tra_number)+" ")])],1),t("td",[a._v(a._s(s.tra_matter))]),t("td",[a._v(a._s(s.tra_arrival_date))]),t("td",[a._v(a._s(s.area.are_name))]),"P"===s.tra_state_law?t("td",{staticClass:"pr-5"},[t("span",{class:a.badgeClassOficio(s.tra_state_law)},[a._v(" Pendiente ")])]):a._e(),"F"===s.tra_state_law?t("td",{staticClass:"pr-5"},[t("span",{class:a.badgeClassOficio(s.tra_state_law)},[a._v(" Terminado ")])]):a._e()])})),0)])])])])])])])])},i=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"card-header"},[t("h5",{staticClass:"text-secondary"},[a._v("Expedientes administrativos asignados")])])},function(){var a=this,t=a._self._c;return t("thead",[t("tr",[t("th",[a._v("N° de Oficio")]),t("th",[a._v("Asunto")]),t("th",[a._v("Fecha de llegada")]),t("th",[a._v("Area")]),t("th",[a._v("Estado")])])])}],r=s(25800),l=s(59911),o=s.n(l),d=s(2637),n={name:"AsignadosAbogado",mixins:[d.A],mounted(){this.$nextTick((()=>{o().replace()})),this.cargarTrades()},data(){return{trades:[],dataTable:null,exp:{},idTrade:null,showModal:""}},methods:{async cargarTrades(){try{var a,t;this.$showLoadingAlert(),"ABOGADO"===this.$store.getters.get__user.usu_rol&&(t={abo_id:this.$store.getters.get__user.abo_id},console.log("entro por abogado"),a=await this.$postData("lawyer/listTrades",this,t)),"ASISTENTE"===this.$store.getters.get__user.usu_rol&&(t={ass_id:this.$store.getters.get__user.ass_id},console.log("Usuario ASISTENTE:",this.$store.getters.get__user),console.log("entro por asistente"),a=await this.$postData("assistant/listTrades",this,t)),this.trades=a.data,await this.$waitForDataTableDraw(this,"myDataTable"),this.$closeLoadingAlert()}catch(s){this.$handleApiError(s,"cargar oficios asignados")}},badgeClassOficio:r.H1}},c=n,_=s(81656),h=(0,_.A)(c,e,i,!1,null,"2a9c5bb7",null),u=h.exports},2637:function(a,t){t.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=$(this.$refs.myDataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=6799.b09f8f02.js.map