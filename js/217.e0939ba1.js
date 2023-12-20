"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[217],{12217:function(t,a,e){e.r(a),e.d(a,{default:function(){return _}});var r=function(){var t=this,a=t._self._c;return a("section",{staticClass:"pc-container pb-4 px-4"},[a("div",{staticClass:"pcoded-content"},[a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header py-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("h5",[t._v("Lista de Materias")]),a("button",{staticClass:"btn btn-success btn-sm px-4 ml-auto rounded-1",on:{click:t.mostrarModal}},[t._v(" Nuevo ")])])]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table",attrs:{id:"table"}},[t._m(0),a("tbody",[t._l(t.filteredMaterias,(function(e,r){return a("tr",{key:e.mat_id},[t._m(1,!0),a("td",[t._v(t._s(e.mat_nombre))]),a("td",{staticClass:"text-center"},[a("a",{staticClass:"text-primary px-2 py-1 mx-2",attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.editar(e.mat_id)}}},[a("i",{attrs:{"data-feather":"edit"}})]),a("a",{staticClass:"px-2 py-1 btn-lg text-danger",attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.borrar(e.mat_id)}}},[t._m(2,!0)])])])})),0===t.filteredMaterias.length?a("tr",[a("td",{staticClass:"text-center",attrs:{colspan:"3"}},[t._v("No se encontraron resultados")])]):t._e()],2)])])])])]),t.showModal?a("div",{staticClass:"modal",on:{click:t.cerrarModal}},[a("div",{staticClass:"modal-content card border-0",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"card-header"},[a("h5",{staticClass:"text-center"},[t._v(" "+t._s(t.materia.mat_id?"Actualizar Materia":"Registro de nueva Materia")+" ")])]),a("div",{staticClass:"card-body mb-0 pb-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Nombre")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.materia.mat_nombre,expression:"materia.mat_nombre"}],staticClass:"form-control",class:{"has-error":t.errores.mat_nombre},domProps:{value:t.materia.mat_nombre},on:{input:[function(a){a.target.composing||t.$set(t.materia,"mat_nombre",a.target.value)},t.validarNombre],keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.guardar.apply(null,arguments)}}}),t.errores.mat_nombre?a("span",{staticClass:"error-message"},[t._v("Ingrese un nombre de materia.")]):t._e()])])])]),a("div",{staticClass:"card-footer border-0 mt-0 pt-0"},[a("div",{staticClass:"d-flex justify-content-end"},[a("button",{staticClass:"btn btn-secondary btn-lg px-4 mx-2 rounded",on:{click:t.cerrarModal}},[t._v("Cerrar")]),a("button",{staticClass:"btn btn-primary btn-lg px-4 rounded",on:{click:t.guardar}},[t._v(" "+t._s(t.materia.mat_id?"Actualizar":"Guardar")+" ")])])])])]):t._e()])},s=[function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",{staticClass:"text-center pl-4 col-lg-2 col-sm-1"},[t._v("#")]),a("th",[t._v("Nombre")]),a("th",{staticClass:"text-center pl-4 col-lg-2 col-sm-1"},[t._v("#")])])])},function(){var t=this,a=t._self._c;return a("td",{staticClass:"text-center py-2"},[a("input",{staticClass:"form-check-input me-1",attrs:{type:"checkbox",value:""}})])},function(){var t=this,a=t._self._c;return a("span",[a("i",{attrs:{"data-feather":"trash"}})])}],i=e(98164),o=e.n(i),l=e(77387),n=e.n(l),c=(e(50563),e(22619),e(63822)),d={name:"materias",created(){this.leer()},data(){return{dataTable:null,showModal:!1,searchQuery:"",materias:[],materia:{mat_id:"",mat_nombre:""},errores:{mat_nombre:!1}}},computed:{filteredMaterias:function(){const t=this.searchQuery.toLowerCase().trim();return t?this.materias.filter((a=>a.mat_nombre.toLowerCase().includes(t))):this.materias}},updated(){o().replace()},methods:{...(0,c.nv)(["get","post"]),validarCampo(t,a){""===this.materia[t]?this.errores[a]=!0:this.errores[a]=!1},validarNombre(){this.materia.mat_nombre=this.materia.mat_nombre,this.validarCampo("mat_nombre","mat_nombre")},validarCampos(){return this.validarNombre(),!Object.values(this.errores).some((t=>t))},async leer(){try{const t=await this.get({url:this.$store.getters.get__url+"/subject",token:this.$store.getters.get__token});console.log(t),this.materias=t.data,this.initDataTable()}catch(t){console.error("Error al intentar obtener los datos",t)}},async crear(){if(this.validarCampos())try{const t=await this.post({url:`${this.$store.getters.get__url}/subject/store`,token:this.$store.getters.get__token,params:this.materia});0===t.state?(this.showModal=!1,await this.leer(),this.materia.mat_nombre=""):console.error("Error en la respuesta del servidor:",t.message)}catch(t){console.error("Error en la solicitud:",t)}else console.error("Error en la validación de los campos del formulario de registro.")},async actualizar(t){if(this.validarCampos())try{const a=await this.post({url:this.$store.getters.get__url+"/subject/update",token:this.$store.getters.get__token,params:{mat_id:t,mat_nombre:this.materia.mat_nombre}});0==a.state?(this.showModal=!1,await this.leer()):console.log("error")}catch(a){console.error(a)}else console.error("Error en la validación de los campos del formulario de registro.")},async borrar(t){try{alert("Seguro de eliminar.");const a=await this.post({url:this.$store.getters.get__url+"/subject/destroy",token:this.$store.getters.get__token,params:{mat_id:t}});0==a.state?await this.leer():console.log("error")}catch(a){console.error(a)}},editar(t){try{const a=this.materias.find((a=>a.mat_id===t));a?(this.materia={...a},this.showModal=!0):console.log("Materia no encontrada")}catch(a){console.error(a)}},guardar(){try{this.materia.mat_id?this.actualizar(this.materia.mat_id):(this.crear(),console.log("crear"))}catch(t){console.error(t)}},initDataTable(){this.dataTable&&this.dataTable.destroy(),this.$nextTick((()=>{this.dataTable=n()("#table").DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}}),o().replace()}))},mostrarModal(){this.showModal=!0},cerrarModal(){this.showModal=!1,this.errores.mat_nombre=!1,this.materia.mat_id="",this.materia.mat_nombre=""}}},m=d,h=e(1001),u=(0,h.Z)(m,r,s,!1,null,"639aa809",null),_=u.exports}}]);
//# sourceMappingURL=217.e0939ba1.js.map