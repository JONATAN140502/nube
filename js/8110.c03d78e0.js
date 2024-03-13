"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[8110],{38110:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var s=function(){var e=this,t=e._self._c;return t("section",{staticClass:"pc-container pb-4"},[t("div",{staticClass:"pcoded-content"},[e._m(0),t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-12"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-body"},[t("div",{staticClass:"table-responsive"},[t("table",{ref:"dataTable",staticClass:"table table-hover m-b-0",attrs:{id:"dataTable","aria-describedby":"table-expedientes"}},[e._m(1),t("tbody",e._l(e.expedientes,(function(a,s){return t("tr",{key:s},[t("td",[e._v(e._s(s+1))]),t("td",[t("a",{staticClass:"btn-link",attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.redirectDetalle(a.exp_id)}}},[e._v(" "+e._s(a.numero)+" ")])]),t("td",[e._v(e._s(e.$formatDate(a.fecha_inicio)))]),t("td",[e._v(e._s(e.getNombreCompleto(a.procesal,a.multiple)))]),t("td",[e._v(e._s(a.materia))]),t("td",[e._v(e._s(a.pretencion))]),t("td",[e._v(e._s(e.$formatDate(a.creacion)))]),t("td",[t("span",{class:e.badgeClass(a.estado_proceso)},[e._v(" "+e._s(a.estado_proceso)+" ")])])])})),0)])])])])])])])])},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"row mb-4 d-flex align-items-center"},[t("div",{staticClass:"col-sm-12 col-md-6 col-xl-9"},[t("h5",[t("span",{staticClass:"text-primary"},[e._v("Busque de Expedientes")])])])])},function(){var e=this,t=e._self._c;return t("thead",[t("tr",[t("th",[e._v("#")]),t("th",[e._v("N° de Expediente")]),t("th",[e._v("Fecha de Inicio")]),t("th",[e._v("Parte Procesal")]),t("th",[e._v("Materia/Delito")]),t("th",[e._v("Pretensión")]),t("th",[e._v("Fecha de Registro")]),t("th",[e._v("Estado")])])])}],r=(a(44114),a(90740)),n=a.n(r),o=(a(2637),a(25800)),l=a(46587),d={name:"Buscar",data(){return{tipoSeleccionado:"",tipos:[],expedientes:[],dataTable:null}},updated(){n().replace()},mounted(){this.cargartiposExpedientes(),this.cargarExpedientes()},computed:{expedientesFiltrados(){return this.tipoSeleccionado?this.expedientes.filter((e=>e.tipo_exp===parseInt(this.tipoSeleccionado.id))):this.expedientes},id(){return this.$store.getters.get__user.abo_id}},methods:{async cargartiposExpedientes(){try{const e=await this.$getData("proceedingTypes",this);this.tipos=e,this.tipoSeleccionado=e[0]}catch(e){this.$handleApiError(e,"cargar tipos de expedientes")}},async cargarExpedientes(){try{this.$showLoadingAlert();const e={abo_id:this.id};let t=null;t=null===this.id?await this.$getData("proceeding",this):await this.$postData("lawyer/expedientes",this,e),this.expedientes=t.data,this.initDataTable(),this.$closeLoadingAlert()}catch(e){this.$handleApiError(e,"cargar expedientes")}},redirectDetalle(e){this.$router.push({name:"expediente/detalle",params:{id:e}})},getNombreCompleto(e,t){const a=e[0].tipo_procesal;return this.esDemandanteODemandado(a)?this.obtenerNombreCompleto(e,t):"UNPRG"},esDemandanteODemandado(e){return"DEMANDANTE"===e||"DEMANDADO"===e},obtenerNombreCompleto(e,t){if("1"===t)return"Demanda Colectiva";const{tipo_persona:a,apellido_paterno:s,apellido_materno:i,nombres:r,razon_social:n}=e[0];return"NATURAL"===a?`${s} ${i} ${r}`:n},badgeClass:o.U7,formatFecha(e){const t=new Date(e),a={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};return t.toLocaleDateString("es-ES",a)},formatDate(e){const t=new Date(e),a={year:"numeric",month:"short",day:"numeric"};return t.toLocaleDateString("es-ES",a)},async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=l(this.$refs.dataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}}},c=d,h=a(81656),p=(0,h.A)(c,s,i,!1,null,"acfc3290",null),u=p.exports},2637:function(e,t,a){var s=a(46587);t.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=s(this.$refs.myDataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=8110.c03d78e0.js.map