"use strict";(self["webpackChunksisge"]=self["webpackChunksisge"]||[]).push([[2626,4473],{62626:function(t,s,a){a.r(s),a.d(s,{default:function(){return U}});var e,i,r=function(){var t=this,s=t._self._c;return s("div",["ADMIN"===t.user_rol?s("Admin"):"ABOGADO"===t.user_rol?s("Abogado"):"SECRETARIA"===t.user_rol?s("Secretaria"):"ASISTENTE"===t.user_rol?s("Asistente"):t._e()],1)},o=[],l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"pc-container"},[s("loader",{attrs:{loading:t.loading}}),s("div",{staticClass:"pcoded-content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-3 col-md-6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row align-items-center m-l-0"},[t._m(0),s("div",{staticClass:"col-auto"},[s("h6",{staticClass:"text-muted m-b-10"},[t._v("Tareas")]),s("h2",{staticClass:"m-b-0"},[t._v(t._s(t.counts.alerts))])])])])])]),s("div",{staticClass:"col-xl-3 col-md-6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row align-items-center m-l-0"},[t._m(1),s("div",{staticClass:"col-auto"},[s("h6",{staticClass:"text-muted m-b-10"},[t._v("Audiencias")]),s("h2",{staticClass:"m-b-0"},[t._v(t._s(t.counts.audiences))])])])])])]),s("div",{staticClass:"col-xl-3 col-md-6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row align-items-center m-l-0"},[t._m(2),s("div",{staticClass:"col-auto"},[s("h6",{staticClass:"text-muted m-b-10"},[t._v("Calendario")]),s("h2",{staticClass:"m-b-0"},[t._v(t._s(t.counts.audiences+t.counts.alerts))])])])])])]),s("div",{staticClass:"col-xl-3 col-md-6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row align-items-center m-l-0"},[t._m(3),s("div",{staticClass:"col-auto"},[s("h6",{staticClass:"text-muted m-b-10"},[t._v("Expedientes")]),s("h2",{staticClass:"m-b-0"},[t._v(t._s(t.counts.expTotal))])])])])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-6 col-md-12"},[s("div",{staticClass:"card feed-card"},[t._m(4),s("div",{staticClass:"feed-scroll",staticStyle:{height:"350px"}},[s("div",{staticClass:"card-body"},t._l(t.acciones,(function(a,e){return s("div",{key:e,staticClass:"row m-b-25 align-items-center"},[t._m(5,!0),s("div",{staticClass:"col"},[s("a",{attrs:{href:"javascript:void(0)"}},[s("h6",{staticClass:"m-b-5"},[t._v(t._s(t.accion(a))),s("span",{staticClass:"text-muted float-right f-14"},[t._v(t._s(a.user.name)+" : "+t._s(t.formatFecha(a.created_at)))])])])])])})),0)])])]),s("div",{staticClass:"col-xl-6 col-md-12"},[s("div",{staticClass:"card table-card"},[t._m(6),s("div",{staticClass:"pro-scroll",staticStyle:{height:"350px"}},[s("div",{staticClass:"card-body p-0"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-hover m-b-0"},[t._m(7),s("tbody",t._l(t.expedientes,(function(a,e){return s("tr",{key:e},[s("td",{staticClass:"text-muted",staticStyle:{"font-size":"11px"}},[t._v(t._s(a.exp_numero)+" ")]),s("td",{staticClass:"text-muted",staticStyle:{"font-size":"11px"}},[t._v(t._s(t.formatFecha(a.created_at))+" ")]),s("td",[s("div",[s("label",{staticClass:"badge",class:"EN TRAMITE"===a.exp_estado_proceso?"bg-light-warning":"bg-light-success",staticStyle:{"font-size":"10px","text-transform":"capitalize !important"}},[t._v(" "+t._s(a.exp_estado_proceso)+" ")])])])])})),0)])])])])])])])])],1)},n=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-auto"},[s("i",{staticClass:"fas fa-list-check f-36 text-info"})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-auto"},[s("i",{staticClass:"fas fa-gavel f-36 text-danger"})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-auto"},[s("i",{staticClass:"fas fa-calendar-days f-36 text-success"})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-auto"},[s("i",{staticClass:"fas fa-layer-group f-36 text-primary"})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"card-header"},[s("h5",[t._v("Ultimas acciones")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-auto p-r-0"},[s("i",{staticClass:"fa-solid fa-bell bg-light-primary feed-icon p-2 wid-30 hei-30"})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"card-header"},[s("h5",[t._v("Ultimos Expedientes Registrados")])])},function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{staticStyle:{"font-size":"12px"}},[t._v("Numero")]),s("th",{staticStyle:{"font-size":"12px"}},[t._v("Registro")]),s("th",{staticStyle:{"font-size":"12px"}},[t._v("Estado")])])])}],c=function(){var t=this,s=t._self._c;return t.loading?s("div",{staticClass:"loader-overlay"},[s("div",{staticClass:"loader-spinner"})]):t._e()},d=[],u={name:"Loader",props:{loading:{type:Boolean,default:!1}}},m=u,_=a(81656),v=(0,_.A)(m,c,d,!1,null,null,null),p=v.exports,h=a(90740),C=a.n(h),f=(a(28082),{name:"admin",components:{Loader:p},data(){return{acciones:[],expedientes:[],counts:[],loading:!1}},mounted(){this.cargarAcciones(),this.$nextTick((()=>{C().replace()}))},methods:{async cargarAcciones(){try{this.$showLoadingAlert();const t=await this.$postData("reportes/inicioadmin",this);this.acciones=t.audit,this.expedientes=t.proceeding,this.counts=t.count,this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"leer")}finally{this.$closeLoadingAlert()}},accion(t){return"Revisó el Expediente"==t.accion?`${this.formatAccion(t.accion)} : ${t.exp.exp_numero}`:this.formatAccion(t.accion)},formatAccion(t){return t&&"string"===typeof t?t.charAt(0).toUpperCase()+t.slice(1).toLowerCase():t},formatFecha(t){const s=new Date(t),a={year:"numeric",month:"short",day:"numeric"};return s.toLocaleDateString("es-ES",a)}}}),b=f,g=(0,_.A)(b,l,n,!1,null,null,null),x=g.exports,y=function(){var t=this,s=t._self._c;return s("div",{staticClass:"pc-container pb-4"},[s("div",{staticClass:"pcoded-content"},[s("div",{staticClass:"row pt-2 pb-3"},[s("div",{staticClass:"col-md-12"},[s("h5",[t._v("Bienvenido! "+t._s(t.name))]),s("p",[t._v("A continuacion se muestra un resumen de sus actividades.")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body mr-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"d-flex"},[t._m(0),s("p",{staticClass:"text-dark"},[t._v("Tiene "),s("span",{staticClass:"fw-bold"},[t._v(t._s(t.cantidad))]),t._v(" Expedientes asignados")]),s("router-link",{staticClass:"px-2 ml-auto",attrs:{to:"/expediente/busqueda"}},[t._v(" Ver más detalles "),s("i",{staticClass:"arrow-icon",attrs:{"data-feather":"arrow-right-circle"}})])],1)])])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-12 col-md-12"},[s("div",{staticClass:"card"},[t._m(1),s("div",{staticClass:"card-body mx-0 px-0 mt-0 pt-0"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table",attrs:{"aria-describedby":"table-home"}},[t._m(2),s("tbody",t._l(t.expedientes,(function(a){return s("tr",{key:a.exp_id},[s("td",{staticClass:"pl-4"},[s("router-link",{attrs:{to:{name:"expediente/detalle",params:{id:a.exp_id}}}},[t._v(" "+t._s(a.numero)+" ")])],1),s("td",[t._v(t._s(a.fecha_inicio))]),s("td",[t._v(t._s(t.getPersona(a.procesal,"DEMANDANTE",a.multiple))+" ")]),s("td",[t._v(t._s(t.getPersona(a.procesal,"DEMANDADO",a.multiple))+" ")]),s("td",[t._v(t._s(a.pretencion))]),s("td",[t._v(t._s(a.materia))]),s("td",{staticClass:"pr-5"},[s("span",{class:t.badgeClass(a.estado_proceso)},[t._v(" "+t._s(a.estado_proceso)+" ")])])])})),0)])])])])])])])])},E=[function(){var t=this,s=t._self._c;return s("span",{staticClass:"pc-micon text-primary px-2"},[s("i",{attrs:{"data-feather":"layers"}})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"card-header border-0"},[s("h6",{staticClass:"text-secondary p-0 m-0"},[t._v("Ultimos expedientes")])])},function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{staticClass:"pl-4"},[t._v("N° de Expediente")]),s("th",[t._v("Fecha de Inicio")]),s("th",[t._v("Demandante")]),s("th",[t._v("Demandado")]),s("th",[t._v("Pretensión")]),s("th",[t._v("Materia")]),s("th",[t._v("Estado")])])])}],A=a(25800),w={name:"admin",data(){return{cantidad:"",numeroAlertas:"",expedientes:[]}},computed:{name(){const t=this.$store.getters.get__user.datos.nombres,s=this.$store.getters.get__user.datos.apellido_paterno,a=this.$store.getters.get__user.datos.apellido_materno;return`${t} ${s} ${a}`},id(){return this.$store.getters.get__user.abo_id}},mounted(){this.cargarExpedientes(),this.$nextTick((()=>{C().replace()}))},methods:{async cargarExpedientes(){try{this.$showLoadingAlert();const t={abo_id:this.id},s=await this.$postData("lawyer/expedientes",this,t);this.expedientes=s.data.slice(0,5),this.cantidad=s.total,this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"cargar expedientes")}},getPersona(t,s,a){const e=t[0].tipo_procesal===s;return e?this.nombreCompleto(t,a):"UNPRG"},nombreCompleto(t,s){if("1"===s)return"Demanda Colectiva";const a=t[0].tipo_persona,{apellido_paterno:e,apellido_materno:i,nombres:r,razon_social:o}=t[0];return"NATURAL"===a?`${e} ${i} ${r}`:o},badgeClass:A.U7}},T=w,S=(0,_.A)(T,y,E,!1,null,null,null),P=S.exports,N=a(4473),R={},$=(0,_.A)(R,e,i,!1,null,null,null),D=$.exports,I={name:"dashboard",components:{Admin:x,Abogado:P,Secretaria:N["default"],Asistente:D},data(){return{user_rol:""}},computed:{rol(){return this.$store.getters.get__user.usu_rol}},methods:{assignRolToUserRol(){this.user_rol=this.rol}},created(){this.assignRolToUserRol()}},k=I,F=(0,_.A)(k,r,o,!1,null,null,null),U=F.exports},4473:function(t,s,a){a.r(s),a.d(s,{default:function(){return f}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"pc-container pb-4"},[s("div",{staticClass:"pcoded-content"},[s("CardPanelAdmin")],1)])},i=[],r=function(){var t=this,s=t._self._c;return s("section",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-12 col-md-12"},[t._m(0),s("div",{staticClass:"card flat-card"},[s("div",{staticClass:"row-table"},[s("div",{staticClass:"col-sm-6 py-2 card-body br"},[s("router-link",{staticClass:"text-dark",attrs:{to:"oficio/registro"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4"},[s("i",{staticClass:"material-icons-two-tone text-primary mb-1"},[t._v("note_add")])]),s("div",{staticClass:"col-sm-8"},[s("span",[t._v("REGISTRAR EXPEDIENTE")])])])])],1),s("div",{staticClass:"col-sm-6 py-2 card-body br"},[s("router-link",{staticClass:"text-dark",attrs:{to:"oficio/buscar"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4"},[s("i",{staticClass:"material-icons-two-tone text-primary mb-1"},[t._v("find_in_page")])]),s("div",{staticClass:"col-sm-8"},[s("span",[t._v("BUSCAR EXPEDIENTE")])])])])],1),s("div",{staticClass:"col-sm-6 py-2 card-body br"},[s("router-link",{staticClass:"text-dark",attrs:{to:"responsables"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4"},[s("i",{staticClass:"material-icons-two-tone text-primary mb-1"},[t._v("person")])]),s("div",{staticClass:"col-sm-8"},[s("span",[t._v("GESTIONAR EQUIPO")])])])])],1)])])])]),s("hr"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-12 col-md-12"},[t._m(1),s("div",{staticClass:"col-4 mb-2"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.anio,expression:"anio"}],staticClass:"form-control",on:{change:[function(s){var a=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.anio=s.target.multiple?a:a[0]},function(s){return t.mostrarTradesAnio()}]}},t._l(t.anios,(function(a,e){return s("option",{key:e,staticClass:"py-3",domProps:{value:a}},[t._v(" "+t._s(a)+" ")])})),0)]),s("div",{staticClass:"card flat-card"},[s("div",{staticClass:"row-table"},[s("div",{staticClass:"col-sm-6 card-body br"},[s("a",{staticClass:"text-dark",attrs:{href:"javascript:void(0)"},on:{click:t.tradeTotal}},[s("div",{staticClass:"row"},[t._m(2),s("div",{staticClass:"col-sm-8"},[s("h5",[t._v(t._s(t.numbertradesPend+t.numbertradesFin))]),s("span",[t._v("EXPEDIENTES REGISTRADOS EN EL SISTEMA")])])])])]),s("div",{staticClass:"col-sm-6 card-body br"},[s("a",{staticClass:"text-dark",attrs:{href:"javascript:void(0)"},on:{click:t.tradePendiente}},[s("div",{staticClass:"row"},[t._m(3),s("div",{staticClass:"col-sm-8"},[s("h5",[t._v(t._s(t.numbertradesPend))]),s("span",[t._v("EXPEDIENTES PENDIENTES (SIN INFORME)")])])])])]),s("div",{staticClass:"col-sm-6 card-body br"},[s("a",{staticClass:"text-dark",attrs:{href:"javascript:void(0)"},on:{click:t.tradeTerminado}},[s("div",{staticClass:"row"},[t._m(4),s("div",{staticClass:"col-sm-8"},[s("h5",[t._v(t._s(t.numbertradesFin))]),s("span",[t._v("EXPEDIENTES ATENDIDOS (CON INFORME)")])])])])])])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-12 col-md-12"},[t._m(5),s("div",{staticClass:"col-4 mb-2"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.responsable,expression:"responsable"}],staticClass:"form-control",on:{change:[function(s){var a=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.responsable=s.target.multiple?a:a[0]},function(s){return t.mostrar(s.target.value)}]}},[s("option",{staticClass:"py-5",attrs:{value:"",disabled:"",selected:""}},[t._v("-- Seleccione a alguien del equipo ")]),t._l(t.abogados,(function(a,e){return s("option",{key:e,staticClass:"py-3",domProps:{value:a.abo_id}},[t._v(" "+t._s(a.nat_nombres)+" "+t._s(a.nat_apellido_paterno)+" "+t._s(a.nat_apellido_materno)+" ")])}))],2)]),s("div",{staticClass:"card flat-card"},[""===t.responsable?s("div",{staticClass:"row-table"},[t._m(6)]):t._e(),""!==t.responsable?s("div",{staticClass:"row-table"},[null!==t.numberTotalResp?s("div",{staticClass:"col-sm-6 card-body br"},[s("div",{staticClass:"row"},[t._m(7),s("div",{staticClass:"col-sm-8"},[s("h5",[t._v(t._s(t.numberTotalResp))]),s("span",[t._v("EXPEDIENTES ASIGNADOS")])])])]):t._e(),null!==t.numbertradesPendResp?s("div",{staticClass:"col-sm-6 card-body br"},[s("div",{staticClass:"row"},[t._m(8),s("div",{staticClass:"col-sm-8"},[s("h5",[t._v(t._s(t.numbertradesPendResp))]),s("span",[t._v("EXPEDIENTES PENDIENTES")])])])]):t._e(),null!==t.numbertradesFinResp?s("div",{staticClass:"col-sm-6 card-body br"},[s("div",{staticClass:"row"},[t._m(9),s("div",{staticClass:"col-sm-8"},[s("h5",[t._v(t._s(t.numbertradesFinResp))]),s("span",[t._v("EXPEDIENTES ATENDIDOS")])])])]):t._e()]):t._e()])])])])},o=[function(){var t=this,s=t._self._c;return s("span",{staticClass:"text-primary fw-bold d-flex align-items-center"},[s("i",{staticClass:"material-icons-two-tone text-primary mb-1"},[t._v("menu")]),t._v("MENU")])},function(){var t=this,s=t._self._c;return s("span",{staticClass:"text-primary fw-bold d-flex align-items-center"},[s("i",{staticClass:"material-icons-two-tone text-primary mb-1"},[t._v("folder")]),t._v("RESUMEN DE EXPEDIENTES")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-sm-4"},[s("i",{staticClass:"material-icons-two-tone text-primary mb-1"},[t._v("computer")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-sm-4"},[s("i",{staticClass:"material-icons-two-tone text-primary mb-1"},[t._v("text_snippet")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-sm-4"},[s("i",{staticClass:"material-icons-two-tone text-primary mb-1"},[t._v("text_snippet")])])},function(){var t=this,s=t._self._c;return s("span",{staticClass:"text-primary fw-bold d-flex align-items-center"},[s("i",{staticClass:"material-icons-two-tone text-primary mb-1"},[t._v("group")]),t._v("EQUIPO 2024")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-sm-6 card-body br"},[s("span",{staticClass:"text-dark"},[t._v("Seleccione a un miembro del equipo")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-sm-4"},[s("i",{staticClass:"material-icons-two-tone text-primary mb-1"},[t._v("computer")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-sm-4"},[s("i",{staticClass:"material-icons-two-tone text-primary mb-1"},[t._v("text_snippet")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-sm-4"},[s("i",{staticClass:"material-icons-two-tone text-primary mb-1"},[t._v("text_snippet")])])}],l=(a(44114),a(90740)),n=a.n(l),c=a(34061),d={name:"CardPanelAdmin",created(){this.cargarAños(),this.listTrades(),this.listarAbogados()},mounted(){this.$nextTick((()=>{n().replace()}))},computed:{currentYear(){return(new Date).getFullYear()}},data(){return{trades:[],tradesAnio:[],abogados:[],numbertradesFin:0,numbertradesPend:0,numberTotalResp:0,numbertradesFinResp:0,numbertradesPendResp:0,responsable:"",anio:"",anios:[]}},methods:{async"cargarAños"(){this.$showLoadingAlert();const t=(new Date).getFullYear();for(let s=t;s>=2022;s--)this.anios.push(s);this.anio=this.anios[0]},async listTrades(){try{const t=await(0,c.bQ)("trade",this);this.trades=t.data;const s=this.trades.filter((t=>"F"===t.tra_state_law));this.numbertradesFin=s.length;const a=this.trades.filter((t=>"P"===t.tra_state_law));this.numbertradesPend=a.length}catch(t){this.$handleApiError(t,"listar trades")}},async listarAbogados(){try{const t=await(0,c.bQ)("lawyer",this);this.abogados=t.data}catch(t){this.$handleApiError(t,"listar abogados")}finally{this.$closeLoadingAlert()}},mostrarTradesAnio(){const t=parseInt(this.anio);this.tradesAnio=[],this.tradesAnio=this.trades.filter((s=>s.anio===t));const s=this.tradesAnio.filter((t=>"F"===t.tra_state_law));this.numbertradesFin=s.length,this.numbertradesPend=this.tradesAnio.length-this.numbertradesFin},mostrar(t){const s=parseInt(t);var a=this.trades.filter((t=>t.lawyer.abo_id===s));this.numberTotalResp=a.length;const e=a.filter((t=>"F"===t.tra_state_law));this.numbertradesFinResp=e.length;const i=a.filter((t=>"P"===t.tra_state_law));this.numbertradesPendResp=i.length},tradeTotal(){this.$router.push({name:"trade/lista",params:{tipo_tra:"",anio:this.anio.toString()}})},tradeTerminado(){this.$router.push({name:"trade/lista",params:{tipo_tra:"terminado",anio:this.anio.toString()}})},tradePendiente(){this.$router.push({name:"trade/lista",params:{tipo_tra:"pendiente",anio:this.anio.toString()}})}}},u=d,m=a(81656),_=(0,m.A)(u,r,o,!1,null,"69783c75",null),v=_.exports,p=(a(25800),{name:"Panel",components:{CardPanelAdmin:v},created(){this.getUser()},data(){return{user:[]}},computed:{rol(){return this.$store.getters.get__user.usu_rol},mostrarOpcionAdmin(){return"ADMIN"===this.rol||"SECRETARIA"===this.rol}},mounted(){this.$nextTick((()=>{n().replace()}))},methods:{async getUser(){this.$showLoadingAlert(),this.user=this.$store.getters.get__user}}}),h=p,C=(0,m.A)(h,e,i,!1,null,"73638f6e",null),f=C.exports},28082:function(t,s,a){var e=a(98355),i=a(55129);const r=e.A.create({baseURL:i.A.getters.get__url,timeout:1e4});r.interceptors.request.use((t=>{const s=i.A.getters.get__token;return s&&(t.headers.Authorization=`Bearer ${s}`),t}),(t=>Promise.reject(t))),r.interceptors.response.use((t=>t),(t=>{let s=0;const a=3,e=()=>(s++,r(t.config));return t.response&&t.response.status>=500&&s<a?e():Promise.reject(t)})),s.A=r}}]);
//# sourceMappingURL=2626.373c8912.js.map