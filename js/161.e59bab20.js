"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[161],{69161:function(t,s,a){a.r(s),a.d(s,{default:function(){return m}});var e=function(){var t=this,s=t._self._c;return s("section",{staticClass:"pc-container pb-4 px-4"},[s("div",{staticClass:"pcoded-content"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header py-3"},[s("div",{staticClass:"d-flex align-items-center"},[s("h5",[t._v("Lista de Distritos Judiciales")]),s("button",{staticClass:"btn btn-success btn-sm px-4 ml-auto rounded-1",on:{click:t.mostrarModal}},[t._v(" Nuevo ")])])]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table",attrs:{id:"miTabla1"}},[t._m(0),s("tbody",t._l(t.djudiciales,(function(a,e){return s("tr",{key:a.judis_id},[t._m(1,!0),s("td",[t._v(t._s(a.judis_nombre))]),s("td",{staticClass:"text-center"},[s("a",{staticClass:"text-primary px-2 py-1 btn-lg mx-1",attrs:{href:"javascript:void(0)"},on:{click:function(s){return t.editar(a.judis_id)}}},[t._m(2,!0)]),s("a",{staticClass:"px-2 py-1 btn-lg text-danger",attrs:{href:"javascript:void(0)"},on:{click:function(s){return t.borrar(a.judis_id)}}},[t._m(3,!0)])])])})),0)])])])]),t.showModal?s("div",{staticClass:"modal",on:{click:t.cerrarModal}},[s("div",{staticClass:"modal-content card border-0",on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"card-header d-flex justify-content-center"},[s("h5",{staticClass:"text-center mb-0"},[t._v(" "+t._s(t.djudicial.judis_id?"Actualizar Distrito Judicial":"Registro de nuevo Distrito Judicial")+" ")])]),s("div",{staticClass:"card-body mb-0 pb-0"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label"},[t._v("Nombre")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.djudicial.judis_nombre,expression:"djudicial.judis_nombre"}],staticClass:"form-control",class:{"has-error":t.errores.judis_nombre},domProps:{value:t.djudicial.judis_nombre},on:{input:[function(s){s.target.composing||t.$set(t.djudicial,"judis_nombre",s.target.value)},t.validarCampos],keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.guardar.apply(null,arguments)}}}),t.errores.judis_nombre?s("span",{staticClass:"error-message"},[t._v("Ingrese un nombre de distrito judicial.")]):t._e()])])])]),s("div",{staticClass:"card-footer border-0 mt-0 pt-0"},[s("div",{staticClass:"d-flex justify-content-end"},[s("button",{staticClass:"btn btn-secondary btn-lg px-4 mx-2 rounded",on:{click:t.cerrarModal}},[t._v("Cerrar")]),s("button",{staticClass:"btn btn-primary btn-lg px-4 rounded",on:{click:t.guardar}},[t._v(" "+t._s(t.djudicial.judis_id?"Actualizar":"Guardar")+" ")])])])])]):t._e()])])},i=[function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{staticClass:"text-center pl-4 col-lg-2 col-sm-1"},[t._v("#")]),s("th",[t._v("Nombre")]),s("th",{staticClass:"text-center pl-4 col-lg-3 col-sm-1"},[t._v("Opciones")])])])},function(){var t=this,s=t._self._c;return s("td",{staticClass:"text-center py-2 my-0"},[s("input",{staticClass:"form-check-input me-1",attrs:{type:"checkbox",value:""}})])},function(){var t=this,s=t._self._c;return s("span",{},[s("i",{attrs:{"data-feather":"edit"}})])},function(){var t=this,s=t._self._c;return s("span",[s("i",{attrs:{"data-feather":"trash"}})])}],r=a(98164),o=a.n(r),d=a(77387),l=a.n(d),c=(a(50563),a(63822)),n={name:"DistritosJudiciales",mounted(){this.leer()},updated(){o().replace()},data(){return{dataTable:null,showModal:!1,djudiciales:[],djudicial:{judis_id:"",judis_nombre:""},errores:{judis_nombre:!1,djudicial:!1}}},methods:{...(0,c.nv)(["get","post"]),validarCampos(){const t=["judis_nombre"];return t.forEach((t=>this.errores[t]=""===this.djudicial[t])),!Object.values(this.errores).some((t=>t))},async leer(){try{const t=await this.get({url:this.$store.getters.get__url+"/judicialdistrict",token:this.$store.getters.get__token});this.djudiciales=t.data,this.initDataTable()}catch(t){console.error(t)}},async crear(){if(this.validarCampos())try{const t=await this.post({url:`${this.$store.getters.get__url}/judicialdistrict/store`,token:this.$store.getters.get__token,params:{judis_nombre:this.djudicial.judis_nombre}});0===t.state?(await this.leer(),this.showModal=!1,this.djudicial.judis_nombre=""):console.error("Error en la respuesta del servidor:",t.message)}catch(t){console.error("Error en la solicitud:",t)}else console.error("Falta completar los campos del registro.")},async actualizar(t){if(this.validarCampos())try{const s=await this.post({url:this.$store.getters.get__url+"/judicialdistrict/update",token:this.$store.getters.get__token,params:{judis_id:t,judis_nombre:this.djudicial.judis_nombre}});0==s.state?(await this.leer(),this.showModal=!1):console.log("error")}catch(s){console.error(s)}else console.error("Falta completar los campos del registro.")},async borrar(t){try{const s=await this.post({url:this.$store.getters.get__url+"/judicialdistrict/destroy",token:this.$store.getters.get__token,params:{judis_id:t}});0==s.state?await this.leer():console.log("error")}catch(s){console.error(s)}},editar(t){const s=this.djudiciales.find((s=>s.judis_id===t));s?(this.djudicial={...s},this.showModal=!0):console.error("Juzgado no encontrado")},guardar(){try{this.djudicial.judis_id?this.actualizar(this.djudicial.judis_id):this.crear()}catch(t){console.error(t)}},initDataTable(){this.dataTable&&this.dataTable.destroy(),this.$nextTick((()=>{this.dataTable=l()("#miTabla1").DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}}),o().replace()}))},mostrarModal(){this.showModal=!0},cerrarModal(){this.showModal=!1,this.errores.judis_nombre=!1,this.djudicial.judis_id="",this.djudicial.judis_nombre=""}}},u=n,h=a(1001),_=(0,h.Z)(u,e,i,!1,null,"4b1f68a0",null),m=_.exports}}]);
//# sourceMappingURL=161.e59bab20.js.map