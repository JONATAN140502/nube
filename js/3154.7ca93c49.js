"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[3154,9999],{279:function(t,a,s){s.r(a),s.d(a,{default:function(){return N}});var e,i,r=function(){var t=this,a=t._self._c;return a("div",["ADMIN"===t.user_rol?a("Admin"):"ABOGADO"===t.user_rol?a("Abogado"):"SECRETARIA"===t.user_rol?a("Secretaria"):"ASISTENTE"===t.user_rol?a("Asistente"):t._e()],1)},l=[],o=function(){var t=this,a=t._self._c;return a("div",{staticClass:"pc-container pb-4"},[a("div",{staticClass:"pcoded-content p-md-9"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12 col-md-12 col-sm-12"},[a("div",{staticClass:"card"},[t._m(1),a("div",{staticClass:"card-body px-5"},[a("div",{staticClass:"table-responsive"},[a("table",{ref:"myDataTable",staticClass:"table table-hover",attrs:{id:"table","aria-describedby":"tablaHomeAdmin"}},[t._m(2),a("tbody",t._l(t.expedientes,(function(s,e){return a("tr",{key:e},[a("td",[t._v(t._s(e+1))]),a("td",[t._v(t._s(t.accion(s)))]),a("td",[t._v(t._s(s.user.name))]),a("td",[t._v(t._s(t.formatFecha(s.created_at)))])])})),0)])])])])])])])])},c=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-xl-9 col-md-12 col-sm-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3 col-md-6 col-sm-12"},[a("div",{staticClass:"card bg-primary"},[a("div",{staticClass:"card-body"},[a("h6",{staticClass:"m-b-5 text-white"},[t._v("Tareas")])])])]),a("div",{staticClass:"col-xl-3 col-md-6 col-sm-12"},[a("div",{staticClass:"card bg-primary"},[a("div",{staticClass:"card-body"},[a("h6",{staticClass:"m-b-5 text-white"},[t._v("Audiencias")])])])]),a("div",{staticClass:"col-xl-3 col-md-6 col-sm-12"},[a("div",{staticClass:"card bg-primary"},[a("div",{staticClass:"card-body"},[a("h6",{staticClass:"m-b-5 text-white"},[t._v("Calendario")])])])]),a("div",{staticClass:"col-xl-3 col-md-6 col-sm-12"},[a("div",{staticClass:"card bg-primary"},[a("div",{staticClass:"card-body"},[a("h6",{staticClass:"m-b-5 text-white"},[t._v("Expedientes")])])])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-header px-5"},[a("h5",[t._v("Modificaciones en el sistema")])])},function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Accion realizada")]),a("th",[t._v("Usuario")]),a("th",[t._v("Hora y fecha")])])])}],n=s(25800),d=s(90740),_=s.n(d),h=s(2637),u={name:"admin",mixins:[h.A],data(){return{expedientes:[]}},mounted(){this.cargarExpedientes(),this.$nextTick((()=>{_().replace()}))},methods:{async cargarExpedientes(){try{this.$showLoadingAlert(),this.expedientes=(await this.$postData("reportes/inicioadmin",this)).data,await this.$waitForDataTableDraw(this,"myDataTable")}catch(t){this.$handleApiError(t,"leer")}finally{this.$closeLoadingAlert()}},accion(t){return"Revisó el Expediente"==t.accion?`${this.formatAccion(t.accion)} : ${t.exp.exp_numero}`:this.formatAccion(t.accion)},formatAccion(t){return t&&"string"===typeof t?t.charAt(0).toUpperCase()+t.slice(1).toLowerCase():t},formatFecha(t){const a=new Date(t),s={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};return a.toLocaleDateString("es-ES",s)}}},m=u,p=s(81656),v=(0,p.A)(m,o,c,!1,null,null,null),b=v.exports,C=function(){var t=this,a=t._self._c;return a("div",{staticClass:"pc-container pb-4"},[a("div",{staticClass:"pcoded-content"},[a("div",{staticClass:"row pt-2 pb-3"},[a("div",{staticClass:"col-md-12"},[a("h5",[t._v("Bienvenido! "+t._s(t.name))]),a("p",[t._v("A continuacion se muestra un resumen de sus actividades.")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body mr-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"d-flex"},[t._m(0),a("p",{staticClass:"text-dark"},[t._v("Tiene "),a("span",{staticClass:"fw-bold"},[t._v(t._s(t.cantidad))]),t._v(" Expedientes asignados")]),a("router-link",{staticClass:"px-2 ml-auto",attrs:{to:"/expediente/busqueda"}},[t._v(" Ver más detalles "),a("i",{staticClass:"arrow-icon",attrs:{"data-feather":"arrow-right-circle"}})])],1)])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12 col-md-12"},[a("div",{staticClass:"card"},[t._m(1),a("div",{staticClass:"card-body mx-0 px-0 mt-0 pt-0"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table",attrs:{"aria-describedby":"table-home"}},[t._m(2),a("tbody",t._l(t.expedientes,(function(s){return a("tr",{key:s.exp_id},[a("td",{staticClass:"pl-4"},[a("router-link",{attrs:{to:{name:"expediente/detalle",params:{id:s.exp_id}}}},[t._v(" "+t._s(s.numero)+" ")])],1),a("td",[t._v(t._s(s.fecha_inicio))]),a("td",[t._v(t._s(t.getPersona(s.procesal,"DEMANDANTE",s.multiple))+" ")]),a("td",[t._v(t._s(t.getPersona(s.procesal,"DEMANDADO",s.multiple))+" ")]),a("td",[t._v(t._s(s.pretencion))]),a("td",[t._v(t._s(s.materia))]),a("td",{staticClass:"pr-5"},[a("span",{class:t.badgeClass(s.estado_proceso)},[t._v(" "+t._s(s.estado_proceso)+" ")])])])})),0)])])])])])])])])},x=[function(){var t=this,a=t._self._c;return a("span",{staticClass:"pc-micon text-primary px-2"},[a("i",{attrs:{"data-feather":"layers"}})])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-header border-0"},[a("h6",{staticClass:"text-secondary p-0 m-0"},[t._v("Ultimos expedientes")])])},function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",{staticClass:"pl-4"},[t._v("N° de Expediente")]),a("th",[t._v("Fecha de Inicio")]),a("th",[t._v("Demandante")]),a("th",[t._v("Demandado")]),a("th",[t._v("Pretensión")]),a("th",[t._v("Materia")]),a("th",[t._v("Estado")])])])}],f={name:"admin",data(){return{cantidad:"",numeroAlertas:"",expedientes:[]}},computed:{name(){const t=this.$store.getters.get__user.datos.nombres,a=this.$store.getters.get__user.datos.apellido_paterno,s=this.$store.getters.get__user.datos.apellido_materno;return`${t} ${a} ${s}`},id(){return this.$store.getters.get__user.abo_id}},mounted(){this.cargarExpedientes(),this.$nextTick((()=>{_().replace()}))},methods:{async cargarExpedientes(){try{this.$showLoadingAlert();const t={abo_id:this.id},a=await this.$postData("lawyer/expedientes",this,t);this.expedientes=a.data.slice(0,5),this.cantidad=a.total,this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"cargar expedientes")}},getPersona(t,a,s){const e=t[0].tipo_procesal===a;return e?this.nombreCompleto(t,s):"UNPRG"},nombreCompleto(t,a){if("1"===a)return"Demanda Colectiva";const s=t[0].tipo_persona,{apellido_paterno:e,apellido_materno:i,nombres:r,razon_social:l}=t[0];return"NATURAL"===s?`${e} ${i} ${r}`:l},badgeClass:n.U7}},g=f,y=(0,p.A)(g,C,x,!1,null,null,null),A=y.exports,w=s(50384),$={},D=(0,p.A)($,e,i,!1,null,null,null),T=D.exports,E={name:"dashboard",components:{Admin:b,Abogado:A,Secretaria:w["default"],Asistente:T},data(){return{user_rol:""}},computed:{rol(){return this.$store.getters.get__user.usu_rol}},methods:{assignRolToUserRol(){this.user_rol=this.rol}},created(){this.assignRolToUserRol()}},k=E,R=(0,p.A)(k,r,l,!1,null,null,null),N=R.exports},2637:function(t,a,s){var e=s(46587);a.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=e(this.$refs.myDataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=3154.7ca93c49.js.map