"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[542],{22542:function(t,e,s){s.r(e),s.d(e,{default:function(){return E}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pc-container pb-4"},[e("div",{staticClass:"pcoded-content"},[e(t.mostrarOpcionAdmin?"CardHomeAdmin":"CardHomeUser",{tag:"component"}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12"},[e("div",{staticClass:"card shadow rounded"},[t._m(0),e("div",{staticClass:"card-body mx-0 px-0 mt-0 pt-0"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table"},[t._m(1),e("tbody",t._l(t.expedientes,(function(s){return e("tr",{key:s.exp_id},[e("td",{staticClass:"pl-4"},[e("router-link",{attrs:{to:{name:"expediente/detalle",params:{id:s.exp_id}}}},[t._v(" "+t._s(s.numero)+" ")])],1),e("td",[t._v(t._s(s.fecha_inicio))]),e("td",[t._v(t._s(t.isDemandante(s.procesal,s.multiple)))]),e("td",[t._v(t._s(t.isDemandado(s.procesal,s.multiple)))]),e("td",[t._v(t._s(s.pretencion))]),e("td",[t._v(t._s(s.materia))]),e("td",{staticClass:"pr-5"},[e("span",{class:t.badgeClass(s.estado_proceso)},[t._v(" "+t._s(s.estado_proceso)+" ")])])])})),0)])])])])])])],1)])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header border-0"},[e("h6",{staticClass:"text-secondary p-0 m-0"},[t._v("Últimos cinco expedientes registrados en el sistema")])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"pl-4"},[t._v("N° de Expediente")]),e("th",[t._v("Fecha de Inicio")]),e("th",[t._v("Demandante")]),e("th",[t._v("Demandado")]),e("th",[t._v("Pretensión")]),e("th",[t._v("Materia")]),e("th",[t._v("Estado")])])])}],r=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row pt-2 pb-3"},[e("div",{staticClass:"col-md-12"},[e("h5",[t._v("Bienvenido! "+t._s(t.userName))]),e("p",[t._v("A continuacion se muestra un resumen de sus actividades.")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card shadow"},[e("div",{staticClass:"card-body mr-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"d-flex"},[t._m(0),e("p",{staticClass:"text-dark"},[t._v("Tiene "),e("span",{staticClass:"fw-bold"},[t._v(t._s(t.numeroExpedientes))]),t._v(" Expedientes asignados")]),t._m(1)])]),e("div",{staticClass:"row"},[e("div",{staticClass:"d-flex"},[t._m(2),e("p",{staticClass:"text-dark"},[t._v("Tiene "),e("span",{staticClass:"fw-bold"},[t._v(t._s(t.numeroAlertas))]),t._v(" Alertas pendientes.")]),t._m(3)])])])])])])])},n=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"pc-micon text-primary px-2"},[e("i",{attrs:{"data-feather":"layers"}})])},function(){var t=this,e=t._self._c;return e("a",{staticClass:"px-2 ml-auto",attrs:{href:"#"}},[t._v(" Ver mas detalles "),e("i",{staticClass:"arrow-icon",attrs:{"data-feather":"arrow-right-circle"}})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"pc-micon text-primary px-2"},[e("i",{attrs:{"data-feather":"bell"}})])},function(){var t=this,e=t._self._c;return e("a",{staticClass:"px-2 ml-auto",attrs:{href:"#"}},[t._v(" Ver mas detalles "),e("i",{staticClass:"arrow-icon",attrs:{"data-feather":"arrow-right-circle"}})])}],o=s(44161),l=s(98164),c=s.n(l),d={name:"CardHomeUser",data(){return{expedientesAsinados:[],alertas:[],audiencias:[],numeroExpedientes:0,numeroAlertas:0,numeroAudiencias:0}},computed:{userName(){return this.$store.getters.get__user.name},userRole(){return this.$store.getters.get__user.usu_rol},userAbogado(){return this.$store.getters.get__aboid}},mounted(){this.$nextTick((()=>{c().replace()})),this.listExpedientes(),this.listAlertas()},methods:{async listExpedientes(){try{const t=await o.Z.post(`${this.$store.getters.get__url}/lawyer/expedientes`,{abo_id:this.userAbogado},{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});this.expedientesAsinados=t.data,this.numeroExpedientes=this.expedientesAsinados.length,console.log("expedientes_asignados",t)}catch(t){console.log(t)}},async listAlertas(){try{const t=await o.Z.post(`${this.$store.getters.get__url}/lawyer/alertas`,{abo_id:this.userAbogado},{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});0===t.state&&t.data?(this.alertas=t.data,this.numeroAlertas=this.alertas.length,console.log("alertas",t)):console.error("Error en la respuesta del servidor:",t)}catch(t){console.error("Error en la solicitud:",t)}},async listAudiencias(){try{const t=await o.Z.post(`${this.$store.getters.get__url}/lawyer/audiencias`,{abo_id:this.userAbogado},{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});this.audiencias=t.data,this.numeroAudiencias=this.audiencias.length,console.log("audiencias",t)}catch(t){console.log(t)}}}},p=d,h=s(1001),m=(0,h.Z)(p,r,n,!1,null,"b6ca6c64",null),u=m.exports,_=function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-3 col-sm-12 col-md-6"},[e("a",{attrs:{href:"javascript:void(0)"},on:{click:t.expedienteTotal}},[e("div",{staticClass:"card bg-primary tarjet"},[e("div",{staticClass:"card-body py-3"},[t._m(0),e("div",{staticClass:"row"},[e("div",{staticClass:"d-flex"},[e("h3",{staticClass:"m-b-0 text-white"},[t._v(t._s(t.numberOfExpedientes))]),e("i",{staticClass:"text-white ml-auto",staticStyle:{"margin-top":"6px"},attrs:{"data-feather":"chevron-right"}})])])])])])]),e("div",{staticClass:"col-xl-3 col-sm-6"},[e("a",{attrs:{href:"javascript:void(0)"},on:{click:t.expedienteTramite}},[e("div",{staticClass:"card bg-primary tarjet"},[e("div",{staticClass:"card-body py-3"},[t._m(1),e("div",{staticClass:"row"},[e("div",{staticClass:"d-flex"},[e("h3",{staticClass:"m-b-0 text-white"},[t._v(t._s(t.expedientesEnProceso))]),e("i",{staticClass:"text-white ml-auto",staticStyle:{"margin-top":"6px"},attrs:{"data-feather":"chevron-right"}})])])])])])]),e("div",{staticClass:"col-xl-3 col-sm-6"},[e("a",{attrs:{href:"javascript:void(0)"},on:{click:t.expedienteEjecucion}},[e("div",{staticClass:"card bg-primary tarjet"},[e("div",{staticClass:"card-body py-3"},[t._m(2),e("div",{staticClass:"row"},[e("div",{staticClass:"d-flex"},[e("h3",{staticClass:"m-b-0 text-white"},[t._v(t._s(t.expedientesEnEjecucion))]),e("i",{staticClass:"text-white ml-auto",staticStyle:{"margin-top":"6px"},attrs:{"data-feather":"chevron-right"}})])])])])])]),e("div",{staticClass:"col-xl-3 col-sm-6"},[e("router-link",{attrs:{to:"/sisge/demandantes"}},[e("div",{staticClass:"card bg-primary tarjet"},[e("div",{staticClass:"card-body py-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"d-flex"},[e("i",{staticClass:"text-white",attrs:{"data-feather":"users"}}),e("p",{staticClass:"text-white fw-bold ml-1",staticStyle:{"font-size":"12px","margin-top":"3px"}},[t._v("Demandantes ")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"d-flex"},[e("h3",{staticClass:"m-b-0 text-white"},[t._v(t._s(t.numberOfDemandantes))]),e("i",{staticClass:"text-white ml-auto",staticStyle:{"margin-top":"6px"},attrs:{"data-feather":"chevron-right"}})])])])])])],1)])])},v=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"d-flex"},[e("i",{staticClass:"text-white",attrs:{"data-feather":"briefcase"}}),e("p",{staticClass:"text-white fw-bold ml-1",staticStyle:{"font-size":"12px","margin-top":"3px"}},[t._v("Total de Expedientes")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"d-flex"},[e("i",{staticClass:"text-white",attrs:{"data-feather":"file-text"}}),e("p",{staticClass:"text-white fw-bold ml-1",staticStyle:{"font-size":"12px","margin-top":"3px"}},[t._v("Expedientes en Tramite")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"d-flex"},[e("i",{staticClass:"text-white",attrs:{"data-feather":"file"}}),e("p",{staticClass:"text-white fw-bold ml-1",staticStyle:{"font-size":"12px","margin-top":"3px"}},[t._v("Expedientes en Ejecucion")])])])}],x=(s(57658),{name:"CardHomeAdmin",data(){return{numberOfExpedientes:0,expedientesEnProceso:0,expedientesEnEjecucion:0,numberOfDemandantes:0}},mounted(){this.fetchDataAdmin(),this.$nextTick((()=>{c().replace()}))},methods:{async fetchDataAdmin(){try{const t=`${this.$store.getters.get__url}/reportes/inicio`,e=this.$store.getters.get__token,s=await o.Z.post(t,{},{headers:{Authorization:`Bearer ${e}`}}),a=s.data;this.numberOfExpedientes=a.exptotal,this.expedientesEnProceso=a.exptramite,this.expedientesEnEjecucion=a.expejecucion,this.numberOfDemandantes=a.demandante}catch(t){console.error(t)}},expedienteTotal(){this.$router.push({name:"expediente/lista",params:{tipo_exp:""}})},expedienteTramite(){this.$router.push({name:"expediente/lista",params:{tipo_exp:"En Tramite"}})},expedienteEjecucion(){this.$router.push({name:"expediente/lista",params:{tipo_exp:"En Ejecucion"}})}}}),C=x,f=(0,h.Z)(C,_,v,!1,null,"104756f2",null),g=f.exports,b=s(22648),w={name:"dashboard",components:{CardHomeUser:u,CardHomeAdmin:g},data(){return{expedientes:[]}},computed:{rol(){return this.$store.getters.get__user.usu_rol},mostrarOpcionAdmin(){return"ADMIN"===this.rol}},mounted(){this.cargarExpedientes(),this.$nextTick((()=>{c().replace()}))},methods:{async cargarExpedientes(){try{this.$showLoadingAlert(),this.expedientes=(await this.$postData("proceeding/take",this)).data}catch(t){this.$handleApiError(t,"leer")}finally{this.$closeLoadingAlert()}},isDemandante(t,e){return"DEMANDANTE"===t[0].tipo_procesal?this.nombreCompleto(t,e):"UNPRG"},isDemandado(t,e){return"DEMANDADO"===t[0].tipo_procesal?this.nombreCompleto(t,e):"UNPRG"},nombreCompleto(t,e){if("1"===e)return"Demanda Colectiva";const s=t[0].tipo_persona,{apellido_paterno:a,apellido_materno:i,nombres:r,razon_social:n}=t[0];return"NATURAL"===s?`${a} ${i} ${r}`:n},badgeClass:b.VJ}},y=w,A=(0,h.Z)(y,a,i,!1,null,"83ca53b8",null),E=A.exports}}]);
//# sourceMappingURL=542.7446eef0.js.map