"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[6967],{86967:function(t,e,a){a.r(e),a.d(e,{default:function(){return _}});var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"pc-container"},[e("div",{staticClass:"pcoded-content"},[e("div",{staticClass:"row mb-4"},[e("h5",{staticClass:"text-dark fw-bold"},[t._v(t._s(t.tipoExpediente))])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12"},[e("div",{staticClass:"card shadow"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"table-responsive"},[e("table",{ref:"myDataTable",staticClass:"table",attrs:{id:"tabla"}},[t._m(0),e("tbody",t._l(t.expedientes,(function(a){return e("tr",{key:a.exp_id},[e("td",{staticClass:"col-md-2"},[e("router-link",{attrs:{to:{name:"expediente/detalle",params:{id:a.exp_id}}}},[t._v(" "+t._s(a.numero)+" ")])],1),e("td",[t._v(t._s(a.fecha_inicio))]),e("td",[t._v(t._s(t.isDemandante(a.procesal,a.multiple)))]),e("td",[t._v(t._s(t.isDemandado(a.procesal,a.multiple)))]),e("td",[t._v(t._s(a.pretencion))]),e("td",{staticClass:"text-center"},[e("span",{class:t.badgeClass(a.estado_proceso)},[t._v(" "+t._s(a.estado_proceso)+" ")])]),e("td",{staticClass:"text-center m-0 p-0"},[e("router-link",{staticClass:"badge p-2 bg-links",attrs:{to:{name:"eventos",params:{id:a.exp_id}}}},[t._v(" Planificar eventos ")]),e("router-link",{staticClass:"badge p-2 bg-links",attrs:{to:{name:"archivos",params:{id:a.exp_id}}}},[t._v(" Registrar archivos ")])],1)])})),0)])])])])])])])])},i=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("N° de Expediente")]),e("th",[t._v("Fecha de Inicio")]),e("th",[t._v("Demandante")]),e("th",[t._v("Demandado")]),e("th",[t._v("Pretensión")]),e("th",{staticClass:"text-center"},[t._v("Estado")]),e("th",{staticClass:"text-center"},[t._v("Interacciones")])])])}],n=a(90740),o=a.n(n),r=a(2637),d=a(25800),l={name:"Buscar",props:["tipo_exp"],mixins:[r.A],mounted(){this.$nextTick((()=>{o().replace()})),this.cargarExpedientes()},data(){return{expedientes:[],dataTable:null,tipoExpediente:null}},methods:{mostrarTipoExpediente(){"En Tramite"===this.tipo_exp?this.tipoExpediente="Lista de Expedientes en Tramite":"En Ejecucion"===this.tipo_exp?this.tipoExpediente="Lista de Expedientes en Ejecucion":this.tipoExpediente="Lista de Expedientes Totales"},async cargarExpedientes(){try{this.$showLoadingAlert(),this.mostrarTipoExpediente();const t=await this.$getData("proceeding",this);this.expedientes=t.data,this.tipo_exp&&""!==this.tipo_exp.trim()&&(this.expedientes=this.expedientes.filter((t=>t.estado_proceso===this.tipo_exp))),await this.$waitForDataTableDraw(this,"myDataTable"),this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"cargar expedientes")}},isDemandante(t,e){return"DEMANDANTE"===t[0].tipo_procesal?this.nombreCompleto(t,e):"UNPRG"},isDemandado(t,e){return"DEMANDADO"===t[0].tipo_procesal?this.nombreCompleto(t,e):"UNPRG"},nombreCompleto(t,e){if("1"===e)return"Demanda Colectiva";const a=t[0].tipo_persona,{apellido_paterno:s,apellido_materno:i,nombres:n,razon_social:o}=t[0];return"NATURAL"===a?`${s} ${i} ${n}`:o},badgeClass:d.U7},watch:{tipo_exp:"cargarExpedientes"}},c=l,p=a(81656),h=(0,p.A)(c,s,i,!1,null,"6720fc8c",null),_=h.exports},2637:function(t,e,a){var s=a(46587);e.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=s(this.$refs.myDataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=6967.beb4e3ac.js.map