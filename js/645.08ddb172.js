"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[645],{60645:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var s=function(){var e=this,t=e._self._c;return t("section",{staticClass:"pc-container pb-4"},[t("div",{staticClass:"pcoded-content"},[t("div",{staticClass:"row mb-4 d-flex align-items-center"},[t("div",{staticClass:"col-sm-12 col-md-6 col-xl-9"},[t("h5",[t("span",{staticClass:"text-primary"},[e._v("Busque de Expedientes")]),e._v(" | "),t("span",{staticClass:"text-secondary"},[e._v(" "+e._s(e.tipoSeleccionado.name))])])]),t("div",{staticClass:"col-sm-12 col-md-6 col-xl-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.tipoSeleccionado,expression:"tipoSeleccionado"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.tipoSeleccionado=t.target.multiple?a:a[0]}}},[t("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("Seleccionar")]),e._l(e.tipos,(function(a){return t("option",{domProps:{value:a}},[e._v(e._s(a.name))])}))],2)])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-12"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-body"},[t("div",{staticClass:"table-responsive"},[t("table",{ref:"dataTable",staticClass:"table table-hover m-b-0",attrs:{id:"table","aria-describedby":"table-expedientes"}},[e._m(0),t("tbody",e._l(e.expedientesFiltrados,(function(a,s){return t("tr",{key:s},[t("td",[e._v(e._s(s+1))]),t("td",[t("a",{staticClass:"btn-link",attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.redirectDetalle(a.exp_id)}}},[e._v(" "+e._s(a.numero)+" ")])]),t("td",[e._v(e._s(e.$formatDate(a.fecha_inicio)))]),t("td",[e._v(e._s(e.getNombreCompleto(a.procesal,a.multiple)))]),t("td",[e._v(e._s(a.materia))]),t("td",[e._v(e._s(a.pretencion))]),t("td",[e._v(e._s(e.formatFecha(a.creacion)))]),t("td",[t("span",{class:e.badgeClass(a.estado_proceso)},[e._v(" "+e._s(a.estado_proceso)+" ")])])])})),0)])])])])])])])])},i=[function(){var e=this,t=e._self._c;return t("thead",[t("tr",[t("th",[e._v("#")]),t("th",[e._v("N° de Expediente")]),t("th",[e._v("Fecha de Inicio")]),t("th",[e._v("Parte Procesal")]),t("th",[e._v("Materia/Delito")]),t("th",[e._v("Pretensión")]),t("th",[e._v("Fecha de Registro")]),t("th",[e._v("Estado")])])])}],n=(a(44114),a(59911)),o=a.n(n),r=(a(2637),a(25800)),l={name:"Buscar",data(){return{tipoSeleccionado:"",tipos:[],expedientes:[],dataTable:null}},mounted(){this.$nextTick((()=>{o().replace()})),this.cargarExpedientes(),this.cargartiposExpedientes()},watch:{expedientesFiltrados:{handler:"initDataTable",immediate:!0}},computed:{expedientesFiltrados(){return this.tipoSeleccionado?this.expedientes.filter((e=>e.tipo_exp===parseInt(this.tipoSeleccionado.id))):this.expedientes}},methods:{async cargartiposExpedientes(){try{const e=await this.$getData("proceedingTypes",this);this.tipos=e,this.tipoSeleccionado=e[0]}catch(e){this.$handleApiError(e,"cargar tipos de expedientes")}},async cargarExpedientes(){try{this.$showLoadingAlert();const e=await this.$getData("proceeding",this);this.expedientes=e.data,this.$closeLoadingAlert()}catch(e){this.$handleApiError(e,"cargar expedientes")}},redirectDetalle(e){this.$router.push({name:"expediente/detalle",params:{id:e}})},getNombreCompleto(e,t){const a=e[0].tipo_procesal;return this.esDemandanteODemandado(a)?this.obtenerNombreCompleto(e,t):"UNPRG"},esDemandanteODemandado(e){return"DEMANDANTE"===e||"DEMANDADO"===e},obtenerNombreCompleto(e,t){if("1"===t)return"Demanda Colectiva";const{tipo_persona:a,apellido_paterno:s,apellido_materno:i,nombres:n,razon_social:o}=e[0];return"NATURAL"===a?`${s} ${i} ${n}`:o},badgeClass:r.U7,formatFecha(e){const t=new Date(e),a={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};return t.toLocaleDateString("es-ES",a)},formatDate(e){const t=new Date(e),a={year:"numeric",month:"short",day:"numeric"};return t.toLocaleDateString("es-ES",a)},async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=$(this.$refs.dataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}}},c=l,d=a(81656),p=(0,d.A)(c,s,i,!1,null,"042754b8",null),h=p.exports},2637:function(e,t){t.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=$(this.$refs.myDataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=645.08ddb172.js.map