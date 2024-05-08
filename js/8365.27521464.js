"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[8365],{18365:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"pc-container pb-4"},[e("div",{staticClass:"pcoded-content"},[t._m(0),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12"},[e("div",{staticClass:"card shadow"},[t._m(1),e("div",{staticClass:"card-body"},[e("div",{staticClass:"table-responsive"},[e("table",{ref:"myDataTable",staticClass:"table",attrs:{id:"table"}},[t._m(2),e("tbody",t._l(t.expedientes,(function(a){return e("tr",{key:a.exp_id},[e("td",{staticClass:"col-md-2"},[e("router-link",{attrs:{to:{name:"expediente/detalle",params:{id:a.exp_id}}}},[t._v(" "+t._s(a.numero)+" ")])],1),e("td",[t._v(t._s(a.fecha_inicio))]),e("td",[t._v(t._s(t.isDemandante(a.procesal,a.multiple)))]),e("td",[t._v(t._s(t.isDemandado(a.procesal,a.multiple)))]),e("td",[t._v(t._s(a.pretencion))]),e("td",{staticClass:"text-center"},[e("span",{class:t.badgeClass(a.estado_proceso)},[t._v(" "+t._s(a.estado_proceso)+" ")])]),e("td",{staticClass:"text-center m-0 p-0"},[e("router-link",{staticClass:"badge p-2 bg-links",attrs:{to:{name:"archivos",params:{id:a.exp_id}}}},[t._v(" Registrar archivos ")])],1)])})),0)])])])])])])])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row mb-4"},[e("h5",{staticClass:"text-dark fw-bold"},[t._v("Visualizacion de expedientes")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header"},[e("h5",{staticClass:"text-secondary"},[t._v("Lista de expedientes archivados")])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("N° de Expediente")]),e("th",[t._v("Fecha de Inicio")]),e("th",[t._v("Demandante")]),e("th",[t._v("Demandado")]),e("th",[t._v("Pretensión")]),e("th",{staticClass:"text-center"},[t._v("Estado")]),e("th",{staticClass:"text-center"},[t._v("Interacciones")])])])}],r=a(90740),n=a.n(r),o=a(2637),d=a(25800),l={name:"archivados",mixins:[o.A],mounted(){this.$nextTick((()=>{n().replace()})),this.cargarExpedientes()},data(){return{expedientes:[],dataTable:null,exp:{},idExpediente:null,showModal:""}},methods:{async cargarExpedientes(){try{this.$showLoadingAlert();const t=await this.$postData("proceeding/archivados",this,{});this.expedientes=t.data,await this.$waitForDataTableDraw(this,"myDataTable"),this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"cargar expedientes")}},isDemandante(t,e){return"DEMANDANTE"===t[0].tipo_procesal?this.nombreCompleto(t,e):"UNPRG"},isDemandado(t,e){return"DEMANDADO"===t[0].tipo_procesal?this.nombreCompleto(t,e):"UNPRG"},nombreCompleto(t,e){if("1"===e)return"Demanda Colectiva";const a=t[0].tipo_persona,{apellido_paterno:s,apellido_materno:i,nombres:r,razon_social:n}=t[0];return"NATURAL"===a?`${s} ${i} ${r}`:n},badgeClass:d.U7}},c=l,p=a(81656),_=(0,p.A)(c,s,i,!1,null,"fd3e7800",null),h=_.exports},2637:function(t,e,a){var s=a(46587);e.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=s(this.$refs.myDataTable).DataTable({language:{lengthMenu:"Mostrar _MENU_ registros por página",zeroRecords:"No se encontraron resultados",info:"Mostrando _START_ a _END_ de _TOTAL_ registros",infoEmpty:"Mostrando 0 a 0 de 0 registros",infoFiltered:"(filtrado de _MAX_ registros totales)",search:"Buscar",paginate:{first:"Primero",last:"Último",next:"Siguiente",previous:"Anterior"}}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=8365.27521464.js.map