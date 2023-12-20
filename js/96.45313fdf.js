"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[96],{5096:function(t,a,e){e.r(a),e.d(a,{default:function(){return h}});var s=function(){var t=this,a=t._self._c;return a("section",{staticClass:"pc-container pb-4"},[a("div",{staticClass:"pcoded-content"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12"},[a("div",{staticClass:"card shadow"},[t._m(1),a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{ref:"myDataTable",staticClass:"table",attrs:{id:"table"}},[t._m(2),a("tbody",t._l(t.personas,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(e.documento))]),a("td",[t._v(t._s(e.nombre))]),a("td",[t._v(t._s(e.telefono))]),a("td",[t._v(t._s(e.correo))]),a("td",{staticClass:"text-center py-2"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"tooltip-container"},[a("router-link",{staticClass:"tooltip-trigger",attrs:{to:{name:"historial/registro-demandante",params:{doc:e.documento}}}},[a("i",{attrs:{"data-feather":"edit"}})]),a("div",{staticClass:"custom-tooltip"},[t._v("Registrar historial")])],1),a("div",{staticClass:"tooltip-container"},[a("router-link",{staticClass:"tooltip-trigger",attrs:{to:{name:"demandante/informacion",params:{doc:e.documento}}}},[a("i",{attrs:{"data-feather":"file-text"}})]),a("div",{staticClass:"custom-tooltip"},[t._v("Datos del demandante")])],1)])])])})),0)])])])])])])])])},n=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"row mb-4"},[a("h5",{staticClass:"text-dark fw-bold"},[t._v("Partes Procesales")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-header"},[a("h5",{staticClass:"text-secondary"},[t._v("Lista de Demandantes")])])},function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",[t._v("Documento")]),a("th",[t._v("Nombre / Razon Social")]),a("th",[t._v("Telefono")]),a("th",[t._v("Email")]),a("th",{staticClass:"text-center"},[t._v("Interacciones")])])])}],r=e(98164),i=e.n(r),o=e(67324),l={name:"demandantes",mixins:[o.Z],mounted(){this.leer()},updated(){i().replace()},data(){return{demandantes:[],dataTable:null}},computed:{personas(){const t=new Map;return this.demandantes.forEach((a=>{const e=null==a.nat_dni?a.jur_ruc:a.nat_dni;t.has(e)||t.set(e,{documento:e,nombre:null===a.jur_ruc?`${a.nat_apellido_paterno} ${a.nat_apellido_materno} ${a.nat_nombres}`:a.jur_razon_social,telefono:null===a.jur_ruc?a.nat_telefono:a.jur_telefono,correo:null===a.jur_ruc?a.nat_correo:a.jur_correo})})),Array.from(t.values())}},methods:{async leer(){try{this.$showLoadingAlert();const t=await this.$getData("demandante",this);this.demandantes=t.data,await this.$waitForDataTableDraw(this,"myDataTable"),this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"leer demandantes")}}}},d=l,c=e(1001),u=(0,c.Z)(d,s,n,!1,null,"59bb4094",null),h=u.exports},67324:function(t,a){a.Z={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=$(this.$refs.myDataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=96.45313fdf.js.map