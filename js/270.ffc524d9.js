"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[270],{47270:function(a,t,e){e.r(t),e.d(t,{default:function(){return v}});var s=function(){var a=this,t=a._self._c;return t("section",{staticClass:"pc-container pb-4"},[t("div",{staticClass:"pcoded-content"},[a._m(0),t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-12"},[t("div",{staticClass:"card shadow"},[a._m(1),t("div",{staticClass:"card-body"},[t("div",{staticClass:"table-responsive"},[t("table",{ref:"myDataTable",staticClass:"table",attrs:{id:"table"}},[a._m(2),t("tbody",a._l(a.audiencias,(function(e,s){return t("tr",{key:s},[t("td",[t("router-link",{attrs:{to:{name:"expediente/detalle",params:{id:e.exp_id}}}},[a._v(a._s(e.exp_numero))])],1),"DEMANDANTE"===e.tipo_procesal?t("td",["NATURAL"===e.tipo_persona?t("router-link",{attrs:{to:{name:"demandante/informacion",params:{doc:e.nat_dni}}}},[a._v(a._s(a.getProcesal(e)))]):t("span",[a._v(a._s(e.jur_razon_social))])],1):a._e(),t("td",[a._v("UNPRG")]),"DEMANDADO"===e.tipo_procesal?t("td",["NATURAL"===e.tipo_persona?t("router-link",{attrs:{to:{name:"demandante/informacion",params:{doc:e.nat_dni}}}},[a._v(a._s(a.getProcesal(e)))]):t("span",[a._v(a._s(e.jur_razon_social))])],1):a._e(),t("td",[a._v(a._s(e.aud_hora))]),t("td",[a._v(a._s(e.aud_fecha))]),t("td",[a._v(a._s(e.aud_lugar))])])})),0)])])])])])])])])},i=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"row mb-4"},[t("h5",{staticClass:"text-dark fw-bold"},[a._v("Agenda / Audiencias")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"card-header"},[t("h5",{staticClass:"text-secondary"},[a._v("Lista de Audiencias")])])},function(){var a=this,t=a._self._c;return t("thead",[t("tr",[t("th",{staticClass:"col-md-2"},[a._v("N° de Expediente")]),t("th",{staticClass:"col-md-2"},[a._v("Demandante")]),t("th",{staticClass:"col-md-1"},[a._v("Demandado")]),t("th",{staticClass:"col-md-1"},[a._v("Hora")]),t("th",{staticClass:"col-md-2"},[a._v("Fecha")]),t("th",[a._v("Lugar")])])])}],n=(e(36941),e(90740)),r=e.n(n),l=e(98355),d=e(11530),o=e(25800),c=e(2637),_={name:"audiencias",mixins:[c.A],data(){return{audiencias:[],dataTable:null}},mounted(){this.leer()},updated(){r().replace()},methods:{async leer(){try{(0,d.gA)();const a={Authorization:`Bearer ${this.$store.getters.get__token}`},t=await l.A.get(`${this.$store.getters.get__url}/audiences`,{headers:a});if(!t.data)throw(0,d.B)(),new Error("Error al obtener audiencias desde la API");this.audiencias=t.data.data,console.log(t),await(0,o.Rx)(this,"myDataTable"),(0,d.B)()}catch(a){(0,o.hS)(a,"leer")}},getProcesal(a){return`${a.nat_nombres} ${a.nat_apellido_paterno} ${a.nat_apellido_materno}`}}},u=_,h=e(81656),m=(0,h.A)(u,s,i,!1,null,"1bbceba9",null),v=m.exports},2637:function(a,t,e){var s=e(46587);t.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=s(this.$refs.myDataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=270.ffc524d9.js.map