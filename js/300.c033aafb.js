"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[300],{40300:function(t,s,o){o.r(s),o.d(s,{default:function(){return h}});var e=function(){var t=this,s=t._self._c;return s("section",{staticClass:"pc-container pb-4 px-4"},[s("div",{staticClass:"pcoded-content"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header py-3"},[s("div",{staticClass:"d-flex align-items-center"},[s("h5",[t._v("Lista de Organos Jurisdiccionales")]),s("button",{staticClass:"btn btn-success btn-sm px-4 ml-auto rounded-1",on:{click:t.mostrarModal}},[t._v(" Nuevo ")])])]),s("div",{staticClass:"card-body"},[t._m(0),s("div",{staticClass:"row mb-3"},[s("div",{staticClass:"col-md-3"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.distrito,expression:"distrito"}],staticClass:"form-control",on:{change:[function(s){var o=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.distrito=s.target.multiple?o:o[0]},function(s){return t.leer()}]}},[s("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("-- Seleccionar")]),t._l(t.distritos,(function(o){return s("option",{domProps:{value:o.judis_id}},[t._v(" "+t._s(o.judis_nombre)+" ")])}))],2)]),s("div",{staticClass:"col-md-3"},[s("button",{staticClass:"btn btn-primary btn-lg w-100",attrs:{disabled:0==t.favoritos.length},on:{click:function(s){return t.guardarfavorito()}}},[t._v(" Guardar Concurrentes ")])])]),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table",attrs:{id:"miTabla1"}},[t._m(1),s("tbody",[""==t.distrito?s("tr",{staticClass:"text-center"},[s("td",{staticClass:"py-3 text-secondary",attrs:{colspan:"4"}},[t._v("Seleccione un Distrito Judicial")])]):t._e(),t._l(t.juzgados,(function(o){return s("tr",{key:o.co_id},[s("td",{staticClass:"text-center py-2 my-0"},[t._v(" "+t._s(o.co_id)+" ")]),s("td",[t._v(t._s(o.co_nombre))]),s("td",{staticClass:"text-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:o.co_isFavorite,expression:"juzgado.co_isFavorite"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.co_isFavorite)?t._i(o.co_isFavorite,null)>-1:o.co_isFavorite},on:{change:[function(s){var e=o.co_isFavorite,a=s.target,r=!!a.checked;if(Array.isArray(e)){var i=null,c=t._i(e,i);a.checked?c<0&&t.$set(o,"co_isFavorite",e.concat([i])):c>-1&&t.$set(o,"co_isFavorite",e.slice(0,c).concat(e.slice(c+1)))}else t.$set(o,"co_isFavorite",r)},function(s){return t.marcarFavorito(o)}]}})]),s("td",{staticClass:"text-center"},[s("a",{staticClass:"text-primary px-2",attrs:{href:"javascript:void(0)"},on:{click:function(s){return t.editar(o.co_id)}}},[t._m(2,!0)]),s("a",{staticClass:"text-danger px-2",attrs:{href:"javascript:void(0)"},on:{click:function(s){return t.borrar(o.co_id)}}},[t._m(3,!0)])])])}))],2)])])])]),t.showModal?s("div",{staticClass:"modal",on:{click:t.cerrarModal}},[s("div",{staticClass:"modal-content card border-0",on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"card-header"},[s("h5",{staticClass:"text-center"},[t._v(" "+t._s(t.juzgado.co_id?"Actualizar Organo Jurisdiccional":"Registro de nuevo Organo Jurisdiccional")+" ")])]),s("div",{staticClass:"card-body mb-0 pb-4"},[s("div",{staticClass:"row mb-3"},[s("div",{staticClass:"col-md-12"},[s("label",{staticClass:"form-label"},[t._v("Distrito Judicial")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.distrito,expression:"distrito"}],staticClass:"form-control",on:{change:function(s){var o=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.distrito=s.target.multiple?o:o[0]}}},[s("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("--SELECCIONAR")]),t._l(t.distritos,(function(o){return s("option",{domProps:{value:o.judis_id}},[t._v(" "+t._s(o.judis_nombre)+" ")])}))],2)])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group mb-0"},[s("label",{staticClass:"form-label"},[t._v("Nombre")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.juzgado.co_nombre,expression:"juzgado.co_nombre"}],staticClass:"form-control",class:{"has-error":t.errores.co_nombre},domProps:{value:t.juzgado.co_nombre},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.guardar.apply(null,arguments)},blur:t.validarNombre,input:[function(s){s.target.composing||t.$set(t.juzgado,"co_nombre",s.target.value)},function(s){t.errores.co_nombre=!1}]}})]),t.errores.co_nombre?s("span",{staticClass:"error-message"},[t._v("Ingrese un nombre de un Organo Jurisdiccional.")]):t._e()])])]),s("div",{staticClass:"card-footer border-0 mt-0 pt-0"},[s("div",{staticClass:"d-flex justify-content-end"},[s("button",{staticClass:"btn btn-secondary btn-lg px-4 mx-2 rounded",on:{click:t.cerrarModal}},[t._v("Cerrar")]),s("button",{staticClass:"btn btn-primary btn-lg px-4 rounded",on:{click:t.guardar}},[t._v(" "+t._s(t.juzgado.co_id?"Actualizar":"Guardar")+" ")])])])])]):t._e()])])},a=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"row"},[s("label",{staticClass:"form-label"},[t._v("Seleccione un Distrito Judicial")])])},function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{staticClass:"text-center"},[t._v("#")]),s("th",{staticClass:"col-lg-7"},[t._v("Nombre")]),s("th",{staticClass:"text-center"},[t._v("Concurrente")]),s("th",{staticClass:"text-center"},[t._v("Opciones")])])])},function(){var t=this,s=t._self._c;return s("span",[s("i",{attrs:{"data-feather":"edit"}})])},function(){var t=this,s=t._self._c;return s("span",[s("i",{attrs:{"data-feather":"trash"}})])}],r=(o(57658),o(98164)),i=o.n(r),c=o(77387),n=o.n(c),l=(o(50563),o(22619),o(63822)),d={name:"abogado",created(){this.cargardistritos()},mounted(){this.$nextTick((()=>{i().replace()}))},data(){return{dataTable:null,showModal:!1,distrito:"",distritos:[],juzgados:[],juzgado:{co_id:"",co_nombre:"",favorito:!1},errores:{co_nombre:!1},favoritos:[]}},methods:{...(0,l.nv)(["get","post"]),marcarFavorito(t){const s=this.favoritos.findIndex((s=>s===t.co_id));console.log(s),1==t.co_isFavorite?-1==s&&this.favoritos.push(t.co_id):-1!=s&&this.favoritos.splice(s,1),console.log(this.favoritos)},validarCampo(t,s){""==this.juzgado[t]?this.errores[s]=!0:this.errores[s]=!1},guardarfavorito(){this.post({url:this.$store.getters.get__url+"/juzgado/favorite",token:this.$store.getters.get__token,params:{favoritos:this.favoritos}}).then((t=>{0==t.state&&(this.favoritos=[],this.leer())})).catch((t=>{}))},cargardistritos(){this.get({url:this.$store.getters.get__url+"/judicialdistrict",token:this.$store.getters.get__token,params:{}}).then((t=>{console.log(t),this.distritos=t.data,this.distrito.judis_id=distritos[16].judis_id})).catch((t=>{}))},validarNombre(){this.juzgado.co_nombre=this.juzgado.co_nombre,this.validarCampo("co_nombre","co_nombre")},validarCampos(){return this.validarNombre(),!Object.values(this.errores).some((t=>t))},async leer(){try{const t=await this.post({url:this.$store.getters.get__url+"/juzgado",token:this.$store.getters.get__token,params:{judis_id:this.distrito}});if(console.log(t),0==t.state){if(this.favoritos=[],t.data.length>0)for(let s=0;s<t.data.length;s++)this.marcarFavorito(t.data[s]);this.juzgados=t.data,this.initDataTable()}else console.log("error")}catch(t){console.error(t)}},async crear(){if(this.validarCampos())try{const t=await this.post({url:this.$store.getters.get__url+"/juzgado/store",token:this.$store.getters.get__token,params:{judis_id:this.distrito,co_nombre:this.juzgado.co_nombre}});0==t.state?(this.leer(),this.juzgado={co_id:"",co_nombre:""},this.showModal=!1):console.log("error")}catch(t){console.error(t)}else console.error("Error en la validacion de los campos de registro.")},async actualizar(t){if(this.validarCampos())try{const s=await this.post({url:this.$store.getters.get__url+"/juzgado/update",token:this.$store.getters.get__token,params:{judis_id:this.distrito,co_id:t,co_nombre:this.juzgado.co_nombre}});0===s.state?(this.showModal=!1,this.juzgado={co_id:"",co_nombre:""},await this.leer()):console.error("Error en la respuesta del servidor",s)}catch(s){}else console.error("Error en la validacion de los campos de registro.")},async borrar(t){try{console.log(t);const s=await this.post({url:this.$store.getters.get__url+"/juzgado/destroy",token:this.$store.getters.get__token,params:{co_id:t}});0===s.state?(console.log(s),this.juzgado={co_id:"",co_nombre:""},await this.leer()):console.error("Error en la respuesta del servidor",s)}catch(s){console.error("Error en la solicitud de eliminación",s)}},editar(t){try{const s=this.juzgados.find((s=>s.co_id===t));s?(this.juzgado={...s},this.showModal=!0,console.log(t)):console.error("Juzgado no encontrado")}catch(s){}},guardar(){try{this.juzgado.co_id?this.actualizar(this.juzgado.co_id):this.crear()}catch(t){console.error(t)}},initDataTable(){this.dataTable&&this.dataTable.destroy(),this.$nextTick((()=>{this.dataTable=n()("#miTabla1").DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}}),i().replace()}))},mostrarModal(){this.showModal=!0},cerrarModal(){this.showModal=!1,this.errores.co_nombre=!1,this.juzgados.co_id="",this.juzgado.co_nombre=""}}},u=d,_=o(1001),v=(0,_.Z)(u,e,a,!1,null,"22e9b5dc",null),h=v.exports}}]);
//# sourceMappingURL=300.c033aafb.js.map