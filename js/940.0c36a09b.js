"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[940],{4559:function(t,s,a){a.r(s),a.d(s,{default:function(){return U}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"pc-container pb-4"},[s("div",{staticClass:"pcoded-content"},[s(t.mostrarOpcionAdmin?"CardPanelAdmin":"CardPanelUser",{tag:"component"}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-12 col-md-12"},[s("div",{staticClass:"card shadow rounded"},[s("div",{staticClass:"card-header border-0"},[t.mostrarOpcionAdmin?s("h6",{staticClass:"text-secondary p-0 m-0"},[t._v("Últimos cinco expedientes registrados en el sistema ")]):t._e(),t.mostrarOpcionAdmin?t._e():s("h6",{staticClass:"text-secondary p-0 m-0"},[t._v("Últimos expedientes asignados")])]),s("div",{staticClass:"card-body mx-0 px-0 mt-0 pt-0"},[s("div",{staticClass:"table-responsive"},["ADMIN"===t.user.usu_rol||"SECRETARIA"===t.user.usu_rol?s("TablePanelAdmin"):t._e(),"ABOGADO"===t.user.usu_rol||"ASISTENTE"===t.user.usu_rol?s("TablePanelUser"):t._e()],1)])])])])],1)])},r=[],i=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"row pt-2 pb-3"},[s("div",{staticClass:"col-md-12"},["ASISTENTE"===t.userRole?s("h5",[t._v("Bienvenido! Asistente")]):t._e(),"ABOGADO"===t.userRole?s("h5",[t._v("Bienvenido! Abogado")]):t._e(),s("p",[t._v("A continuacion se muestra un resumen de sus actividades.")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card shadow"},[s("div",{staticClass:"card-body mr-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"d-flex"},[t._m(0),s("p",{staticClass:"text-dark"},[t._v("Tiene "),s("span",{staticClass:"fw-bold"},[t._v(t._s(t.trades.length))]),t._v(" oficios asignados")]),t._m(1)])]),t._m(2)])])])])])},l=[function(){var t=this,s=t._self._c;return s("span",{staticClass:"pc-micon text-primary px-2"},[s("i",{attrs:{"data-feather":"layers"}})])},function(){var t=this,s=t._self._c;return s("a",{staticClass:"px-2 ml-auto",attrs:{href:"#"}},[t._v(" Ver mas detalles "),s("i",{staticClass:"arrow-icon",attrs:{"data-feather":"arrow-right-circle"}})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"row"},[s("div",{staticClass:"d-flex"},[s("span",{staticClass:"pc-micon text-primary px-2"},[s("i",{attrs:{"data-feather":"bell"}})]),s("p",{staticClass:"text-dark"},[t._v("Tiene "),s("span",{staticClass:"fw-bold"},[t._v("DATA")]),t._v(" oficios con respuesta.")]),s("a",{staticClass:"px-2 ml-auto",attrs:{href:"#"}},[t._v(" Ver mas detalles "),s("i",{staticClass:"arrow-icon",attrs:{"data-feather":"arrow-right-circle"}})])])])}],d=a(59911),o=a.n(d),n={name:"CardPanelUser",created(){this.listTrades()},data(){return{trades:[]}},mounted(){this.$nextTick((()=>{o().replace()}))},computed:{userName(){return this.$store.getters.get__user.name},userRole(){return this.$store.getters.get__user.usu_rol},userAbogado(){return this.$store.getters.get__aboid}},methods:{async listTrades(){try{var t,s;"ABOGADO"===this.$store.getters.get__user.usu_rol&&(s={abo_id:this.$store.getters.get__user.abo_id},console.log("entro por abogado"),t=await this.$postData("lawyer/listTrades",this,s)),"ASISTENTE"===this.$store.getters.get__user.usu_rol&&(s={ass_id:this.$store.getters.get__user.ass_id},console.log("Usuario ASISTENTE:",this.$store.getters.get__user),console.log("entro por asistente"),t=await this.$postData("assistant/listTrades",this,s)),this.trades=t.data}catch(a){this.$handleApiError(a,"listar trades")}}}},c=n,_=a(81656),h=(0,_.A)(c,i,l,!1,null,"700c16e9",null),u=h.exports,v=function(){var t=this,s=t._self._c;return s("section",[s("div",{staticClass:"row align-items-start"},[s("div",{staticClass:"col"},[s("a",{attrs:{href:"javascript:void(0)"},on:{click:t.tradeTotal}},[s("div",{staticClass:"card bg-primary tarjet"},[s("div",{staticClass:"card-body py-3"},[t._m(0),s("div",{staticClass:"row"},[s("div",{staticClass:"d-flex"},[s("h3",{staticClass:"m-b-0 text-white"},[t._v(t._s(t.trades.length))]),s("i",{staticClass:"text-white ml-auto",staticStyle:{"margin-top":"6px"},attrs:{"data-feather":"chevron-right"}})])])])])])]),s("div",{staticClass:"col"},[s("a",{attrs:{href:"javascript:void(0)"},on:{click:t.tradePendiente}},[s("div",{staticClass:"card bg-primary tarjet"},[s("div",{staticClass:"card-body py-3"},[t._m(1),s("div",{staticClass:"row"},[s("div",{staticClass:"d-flex"},[s("h3",{staticClass:"m-b-0 text-white"},[t._v(t._s(t.numbertradesPend))]),s("i",{staticClass:"text-white ml-auto",staticStyle:{"margin-top":"6px"},attrs:{"data-feather":"chevron-right"}})])])])])])]),s("div",{staticClass:"col"},[s("a",{attrs:{href:"javascript:void(0)"},on:{click:t.tradeInfAdi}},[s("div",{staticClass:"card bg-primary tarjet"},[s("div",{staticClass:"card-body py-3"},[t._m(2),s("div",{staticClass:"row"},[s("div",{staticClass:"d-flex -3"},[s("h3",{staticClass:"m-b-0 text-white"},[t._v(t._s(t.numbertradesInfAdi))]),s("i",{staticClass:"text-white ml-auto",staticStyle:{"margin-top":"6px"},attrs:{"data-feather":"chevron-right"}})])])])])])]),s("div",{staticClass:"col"},[s("a",{attrs:{href:"javascript:void(0)"},on:{click:t.tradeInfAdi}},[s("div",{staticClass:"card bg-primary tarjet"},[s("div",{staticClass:"card-body py-3"},[t._m(3),s("div",{staticClass:"row"},[s("div",{staticClass:"d-flex -3"},[s("h3",{staticClass:"m-b-0 text-white"},[t._v(t._s(t.numbertradesFin))]),s("i",{staticClass:"text-white ml-auto",staticStyle:{"margin-top":"6px"},attrs:{"data-feather":"chevron-right"}})])])])])])]),s("div",{staticClass:"col"},[s("a",{attrs:{href:"javascript:void(0)"},on:{click:t.tradeRevInmediata}},[s("div",{staticClass:"card bg-danger tarjet"},[s("div",{staticClass:"card-body py-3"},[t._m(4),s("div",{staticClass:"row"},[s("div",{staticClass:"d-flex"},[s("h3",{staticClass:"m-b-0 text-white"},[t._v(t._s(t.numbertradesTradios))]),s("i",{staticClass:"text-white ml-auto",staticStyle:{"margin-top":"6px"},attrs:{"data-feather":"chevron-right"}})])])])])])])])])},p=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"row"},[s("div",{staticClass:"d-flex"},[s("i",{staticClass:"text-white",attrs:{"data-feather":"file"}}),s("p",{staticClass:"text-white fw-bold ml-1",staticStyle:{"font-size":"12px","margin-top":"3px"}},[t._v("Documentos recibidos")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"row"},[s("div",{staticClass:"d-flex"},[s("i",{staticClass:"text-white",attrs:{"data-feather":"file"}}),s("p",{staticClass:"text-white fw-bold ml-1",staticStyle:{"font-size":"12px","margin-top":"3px"}},[t._v("Documentos derivados")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"row"},[s("div",{staticClass:"d-flex"},[s("i",{staticClass:"text-white",attrs:{"data-feather":"file"}}),s("p",{staticClass:"text-white fw-bold ml-1",staticStyle:{"font-size":"12px","margin-top":"3px"}},[t._v("Doc. derivados para inf.")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"row"},[s("div",{staticClass:"d-flex"},[s("i",{staticClass:"text-white",attrs:{"data-feather":"file"}}),s("p",{staticClass:"text-white fw-bold ml-1",staticStyle:{"font-size":"12px","margin-top":"3px"}},[t._v("Documentos atendidos")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"row"},[s("div",{staticClass:"d-flex"},[s("i",{staticClass:"text-white",attrs:{"data-feather":"file"}}),s("p",{staticClass:"text-white fw-bold ml-1",staticStyle:{"font-size":"12px","margin-top":"3px"}},[t._v("Documentos pendientes")])])])}],m=(a(44114),a(34061)),f={name:"CardPanelAdmin",created(){this.listTrades()},mounted(){this.$nextTick((()=>{o().replace()}))},data(){return{trades:[],numbertradesPend:0,numbertradesInfAdi:0,numbertradesFin:0,numbertradesTradios:0}},methods:{async listTrades(){try{const t=await(0,m.bQ)("trade",this);this.trades=t.data;const s=this.trades.filter((t=>"P"===t.tra_state_law));this.numbertradesPend=s.length;const a=this.trades.filter((t=>"F"===t.tra_state_law));this.numbertradesFin=a.length;const e=this.trades.filter((t=>"V"===t.tra_state_mp));this.numbertradesInfAdi=e.length;const r=new Date,i=this.trades.filter((t=>{const s=new Date(t.tra_arrival_date),a=Math.floor((r-s)/864e5);return a>15}));this.numbertradesTradios=i.length}catch(t){this.$handleApiError(t,"listar trades")}},tradeTotal(){this.$router.push({name:"trade/lista",params:{tipo_tra:""}})},tradePendiente(){this.$router.push({name:"trade/lista",params:{tipo_tra:"pendiente"}})},tradeInfAdi(){this.$router.push({name:"trade/lista",params:{tipo_tra:"infoAdi"}})},tradeTerminado(){this.$router.push({name:"trade/lista",params:{tipo_tra:"terminado"}})},tradeRevInmediata(){this.$router.push({name:"trade/lista",params:{tipo_tra:"revInmediata"}})}}},C=f,g=(0,_.A)(C,v,p,!1,null,"f4af6838",null),b=g.exports,x=function(){var t=this,s=t._self._c;return s("table",{staticClass:"table",attrs:{"aria-describedby":"table-home"}},[t._m(0),s("tbody",t._l(t.last5Trades,(function(a){return s("tr",{key:a.tra_id},[s("td",{staticClass:"pl-4"},[s("router-link",{attrs:{to:"#"}},[t._v(" "+t._s(a.tra_number)+" ")])],1),s("td",[t._v(t._s(a.tra_matter))]),s("td",[t._v(t._s(a.tra_arrival_date))]),a.assistant?s("td",[t._v(t._s(a.assistant.persona.nat_nombres))]):t._e(),a.lawyer?s("td",[t._v(t._s(a.lawyer.persona.nat_nombres))]):t._e(),s("td",[t._v(t._s(a.tra_type_person))]),s("td",[t._v(t._s(a.area.are_name))]),"P"===a.tra_state_law?s("td",{staticClass:"pr-5"},[s("span",{class:t.badgeClassOficio(a.tra_state_law)},[t._v(" Pendiente ")])]):t._e(),"F"===a.tra_state_law?s("td",{staticClass:"pr-5"},[s("span",{class:t.badgeClassOficio(a.tra_state_law)},[t._v(" Terminado ")])]):t._e()])})),0)])},w=[function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{staticClass:"pl-4"},[t._v("N° de Expediente")]),s("th",[t._v("Asunto")]),s("th",[t._v("Fecha de llegada")]),s("th",[t._v("Responsable")]),s("th",[t._v("Cargo")]),s("th",[t._v("Area")]),s("th",[t._v("Estado")])])])}],A=a(25800),y={name:"TablePanelAdmin",created(){this.listTrades()},data(){return{trades:[]}},computed:{last5Trades(){return this.trades.slice(-5)}},mounted(){this.$nextTick((()=>{o().replace()}))},methods:{async listTrades(){try{this.$showLoadingAlert();const t=await(0,m.bQ)("trade",this);this.trades=t.data}catch(t){this.$handleApiError(t,"listar trades")}finally{this.$closeLoadingAlert()}},badgeClassOficio:A.H1}},T=y,$=(0,_.A)(T,x,w,!1,null,"04e17d83",null),S=$.exports,E=function(){var t=this,s=t._self._c;return s("div",[s("table",{staticClass:"table",attrs:{"aria-describedby":"table-home"}},[t._m(0),0!=t.trades.length?s("tbody",t._l(t.last5Trades,(function(a){return s("tr",{key:a.tra_id},[s("td",{staticClass:"pl-4"},[s("router-link",{attrs:{to:"#"}},[t._v(" "+t._s(a.tra_number)+" ")])],1),s("td",[t._v(t._s(a.tra_matter))]),s("td",[t._v(t._s(a.tra_arrival_date))]),s("td",[t._v(t._s(a.area.are_name))]),s("td",{staticClass:"pr-5"},[t._v(" Hola ")])])})),0):t._e()]),0===t.trades.length?s("div",[s("p",{staticClass:"text-center"},[t._v("No se han asignado oficios por ahora")])]):t._e()])},P=[function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{staticClass:"pl-4"},[t._v("N° de Oficio")]),s("th",[t._v("Asunto")]),s("th",[t._v("Fecha de llegada")]),s("th",[t._v("Area")]),s("th",[t._v("Estado")])])])}],k={name:"TablePanelUser",created(){this.listTrades()},data(){return{trades:[]}},computed:{last5Trades(){return this.trades.slice(-5)}},mounted(){this.$nextTick((()=>{o().replace()}))},methods:{async listTrades(){try{var t,s;"ABOGADO"===this.$store.getters.get__user.usu_rol&&(s={abo_id:this.$store.getters.get__user.abo_id},console.log("entro por abogado"),t=await this.$postData("lawyer/listTrades",this,s)),"ASISTENTE"===this.$store.getters.get__user.usu_rol&&(s={ass_id:this.$store.getters.get__user.ass_id},console.log("Usuario ASISTENTE:",this.$store.getters.get__user),console.log("entro por asistente"),t=await this.$postData("assistant/listTrades",this,s)),this.trades=t.data}catch(a){this.$handleApiError(a,"listar trades")}}}},I=k,D=(0,_.A)(I,E,P,!1,null,"465efb81",null),O=D.exports,N={name:"Panel",components:{CardPanelUser:u,CardPanelAdmin:b,TablePanelAdmin:S,TablePanelUser:O},created(){this.getUser()},data(){return{user:[]}},computed:{rol(){return this.$store.getters.get__user.usu_rol},mostrarOpcionAdmin(){return"ADMIN"===this.rol||"SECRETARIA"===this.rol}},mounted(){this.$nextTick((()=>{o().replace()}))},methods:{async getUser(){this.user=this.$store.getters.get__user,console.log(this.user)}}},j=N,R=(0,_.A)(j,e,r,!1,null,"5716b978",null),U=R.exports}}]);
//# sourceMappingURL=940.0c36a09b.js.map