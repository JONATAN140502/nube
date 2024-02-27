"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[640],{85640:function(t,a,s){s.r(a),s.d(a,{default:function(){return N}});var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"pc-container pb-4"},[a("div",{staticClass:"pcoded-content"},[a("div",{staticClass:"row mb-4"},[a("h5",{},[a("button",{staticClass:"btn btn-sm mr-2 btn-secondary",on:{click:t.goBack}},[a("i",{attrs:{"data-feather":"arrow-left"}})]),a("span",{staticClass:"text-primary"},[t._v("Expediente administrativo")]),t._v(" | "),a("span",{staticClass:"text-secondary"},[t._v(" "+t._s(t.trade.tra_number))])])]),a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col-md-2"},[a("button",{staticClass:"btn btn-outline-primary w-100",class:{"btn-primary text-white":"1"===t.isVista},attrs:{type:"button"},on:{click:function(a){return t.selectVista("1")}}},[t._v(" Datos ")])]),a("div",{staticClass:"col-md-2"},[a("button",{staticClass:"btn btn-outline-primary w-100",class:{"btn-primary text-white":"2"===t.isVista},attrs:{type:"button"},on:{click:function(a){return t.selectVista("2")}}},[t._v(" Archivos ")])]),a("div",{staticClass:"col-md-2"},[a("button",{staticClass:"btn btn-outline-primary w-100",class:{"btn-primary text-white":"3"===t.isVista},attrs:{type:"button"},on:{click:function(a){return t.selectVista("3")}}},[t._v(" Historial ")])]),a("div",{staticClass:"col-md-2"},[a("button",{staticClass:"btn btn-outline-primary w-100",attrs:{type:"button"},on:{click:function(a){return t.redirectActualizar()}}},[t._v("Actualizar")])])]),"1"===t.isVista?a("General",{attrs:{id:t.trade.tra_ide}}):"2"===t.isVista?a("Archivos",{attrs:{id:t.trade.tra_ide}}):"3"===t.isVista?a("Historial",{attrs:{id:t.trade.tra_ide}}):t._e()],1)])},e=[],r=(s(44114),s(38280)),l=s(98355),c=s(90740),o=s.n(c),d=(s(36941),function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"card"},[t._m(0),t.trade&&t.trade.tra_id?a("div",[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row py-2"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-5 col-sm-4 fw-bold"},[t._v(" Expediente N° ")]),a("div",{staticClass:"col-xl-7 col-sm-8 fw-bold"},[t._v(" : "+t._s(t.trade.tra_number)+" ")])])])]),a("div",{staticClass:"row py-2"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-5 col-sm-4"},[t._v(" Nombre ")]),a("div",{staticClass:"col-xl-7 col-sm-8"},[t._v(" : "+t._s(t.trade.tra_name)+" ")])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-5 col-sm-4"},[t._v(" Asunto ")]),a("div",{staticClass:"col-xl-7 col-sm-8"},[t._v(" : "+t._s(t.trade.tra_matter)+" ")])])])]),a("div",{staticClass:"row py-2"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-5 col-sm-4"},[t._v(" Fecha de llegada ")]),a("div",{staticClass:"col-xl-7 col-sm-8"},[t._v(" : "+t._s(t.trade.tra_arrival_date)+" ")])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-5 col-sm-4"},[t._v(" Oficina de origen ")]),a("div",{staticClass:"col-xl-7 col-sm-8"},[t._v(" : "+t._s(t.trade.area.are_name)+" ")])])])]),a("div",{staticClass:"row py-2"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-5 col-sm-4"},[t._v(" Estado ")]),"P"===t.trade.tra_state_law?a("div",{staticClass:"col-xl-7 col-sm-8"},[t._v(" : Pendiente ")]):a("div",{staticClass:"col-xl-7 col-sm-8"},[t._v(" : Finalizado ")])])]),t._m(1)]),a("div",{staticClass:"row py-2"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-5 col-sm-4"},[t._v(" Expediente de recepción ")]),null!=t.trade.tra_number_ext?a("div",{staticClass:"col-xl-7 col-sm-8"},[t._v(" : "+t._s(t.trade.tra_number_ext)+" ")]):a("div",{staticClass:"col-xl-7 col-sm-8"},[t._v(" : No se registro ")])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-5 col-sm-4"},[t._v(" Oficio de recepción ")]),null!=t.trade.tra_doc_recep?a("div",{staticClass:"col-xl-7 col-sm-8"},[t._v(" : "+t._s(t.trade.tra_doc_recep)+" ")]):a("div",{staticClass:"col-xl-7 col-sm-8"},[t._v(" : No se registró ")])])])])])]):t._e()])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"card"},[t._m(2),a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{ref:"myDataTable",staticClass:"table table-hover",attrs:{id:"table"}},[t._m(3),a("tbody",t._l(t.trade.persons,(function(s){return a("tr",{key:s.per_id},[a("td",[t._v(t._s(s.nat_dni))]),a("td",[t._v(t._s(s.nat_nombres))]),a("td",[t._v(t._s(s.nat_correo||"---"))]),a("td",[t._v(t._s(s.nat_telefono||"---"))])])})),0)])])])])])])])}),n=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-header"},[a("h5",{staticClass:"card-title"},[t._v("Datos Generales")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-5 col-sm-4"},[t._v(" Estado ")]),a("div",{staticClass:"col-xl-7 col-sm-8"},[t._v(" : DATA ")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-header"},[a("h5",{staticClass:"card-title"},[t._v("Responsables")])])},function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",[t._v("DNI")]),a("th",[t._v("Nombres")]),a("th",[t._v("Correo")]),a("th",[t._v("Teléfono")])])])}],v=s(2637),_=s(49148),h=s.n(_),u={mixins:[v.A],data(){return{dataTable:null,trade:null,persons:[],formattedDate:"",id:""}},mounted(){this.$nextTick((()=>{o().replace()})),this.cargarDetallesOficio()},created(){this.sector=this.$store.getters.get__sector,this.id=this.$route.params.id},methods:{async cargarDetallesOficio(){try{const t=await this.$getData(`trade/${this.id}`,this);this.trade=t.trade,await this.$waitForDataTableDraw(this,"myDataTable"),this.formatDate(),this.initDataTable(),this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"cargar detalles del expediente administrativo ",this.id)}},formatDate(){this.formattedDate=h()(this.trade.tra_arrival_date).format("DD MMM YYYY")},goBack(){this.$router.go(-1)}}},m=u,C=s(81656),b=(0,C.A)(m,d,n,!1,null,null,null),f=b.exports,p=function(){var t=this;t._self._c;return t._m(0)},x=[function(){var t=this,a=t._self._c;return a("div",[a("h1",[t._v("Archivos")])])}],w={name:"ArchivosOficio"},y=w,D=(0,C.A)(y,p,x,!1,null,null,null),g=D.exports,$=function(){var t=this,a=t._self._c;return a("div",{staticClass:"card feed-card"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{ref:"myDataTable",staticClass:"table table-hover",attrs:{id:"table"}},[t._m(1),a("tbody",t._l(t.trade.persons,(function(s){return a("tr",{key:s.per_id},[a("td",[t._v(t._s(s.nat_dni))]),a("td",[t._v(t._s(s.nat_nombres))]),a("td",[t._v(t._s(s.nat_correo||"---"))]),a("td",[t._v(t._s(s.nat_telefono||"---"))])])})),0)])])])])])])])},T=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-header"},[a("h5",{staticClass:"card-title"},[t._v("Observaciones")])])},function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Descripción")]),a("th",[t._v("Fecha")]),a("th",[t._v("Opciones")])])])}],A={mixins:[v.A],data(){return{dataTable:null,trade:null,persons:[],formattedDate:"",id:""}},mounted(){this.$nextTick((()=>{o().replace()})),this.cargarDetallesOficio()},created(){this.sector=this.$store.getters.get__sector,this.id=this.$route.params.id},methods:{async cargarDetallesOficio(){try{const t=await this.$getData(`trade/${this.id}`,this);this.trade=t.trade,await this.$waitForDataTableDraw(this,"myDataTable"),this.formatDate(),this.initDataTable(),this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"cargar detalles del expediente administrativo ",this.id)}},formatDate(){this.formattedDate=h()(this.trade.tra_arrival_date).format("DD MMM YYYY")},goBack(){this.$router.go(-1)}}},k=A,O=(0,C.A)(k,$,T,!1,null,null,null),V=O.exports,E={name:"DetallesOficio",props:["id"],components:{General:f,Archivos:g,Historial:V},data(){return{isVista:"1",dataTable:null,trade:null}},mounted(){this.cargarDetallesOficio(),this.$nextTick((()=>{o().replace()}))},methods:{...(0,r.i0)(["get","post"]),selectVista(t){this.isVista=t},async cargarDetallesOficio(){try{this.$showLoadingAlert();const t=await l.A.get(`${this.$store.getters.get__url}/trade/${this.id}`,{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});this.trade=t.data.trade,this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"cargar detalles del expediente administrativo",this.id)}},goBack(){this.$router.push({path:"/oficio/buscar"})}}},Y=E,M=(0,C.A)(Y,i,e,!1,null,"7a6c5e9a",null),N=M.exports},2637:function(t,a,s){var i=s(46587);a.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=i(this.$refs.myDataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=640.fcd8e873.js.map