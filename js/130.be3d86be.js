"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[130],{23130:function(a,t,o){o.r(t),o.d(t,{default:function(){return b}});var e=function(){var a=this,t=a._self._c;return t("section",{staticClass:"pc-container"},[t("div",{staticClass:"pcoded-content pt-2 pb-4"},[a._m(0),t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-12"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"d-flex align-items-center"},[t("h5",{staticClass:"text-secondary"},[a._v("Lista de Abogados")]),t("button",{staticClass:"btn btn-primary btn-lg ml-auto rounded",on:{click:a.mostrarModal}},[a._v(" Registrar Nuevo Abogado ")])])]),t("div",{staticClass:"card-body"},[t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table",attrs:{id:"miTabla1"}},[a._m(1),t("tbody",a._l(a.abogados,(function(o,e){return t("tr",{key:e},[t("td",[a._v(a._s(o.nat_dni))]),t("td",[a._v(a._s(o.nat_nombres))]),t("td",[a._v(a._s(a.nombreCompleto(o)))]),t("td",[a._v(a._s(o.nat_telefono))]),t("td",[a._v(a._s(o.nat_correo))]),t("td",[t("a",{staticClass:"text-primary px-2 py-1 btn-lg mx-1",attrs:{href:"javascript:void(0)"},on:{click:function(t){return a.editar(o.abo_id)}}},[a._m(2,!0)]),t("a",{staticClass:"px-2 py-1 btn-lg text-danger",attrs:{href:"javascript:void(0)"},on:{click:function(t){return a.eliminar(o.abo_id)}}},[a._m(3,!0)])])])})),0)])])])])])]),a.showModal?t("div",{staticClass:"modal",on:{click:a.cerrarModal}},[t("div",{staticClass:"modal-content card border-0",on:{click:function(a){a.stopPropagation()}}},[t("div",{staticClass:"card-header bg-primary py-2"},[t("p",{staticClass:"fs-5 text-white text-center fw-bold",staticStyle:{"margin-top":"10px !important"}},[a._v(" "+a._s(a.abogado.abo_id?"Editar Abogado":"Registrar Nuevo Abogado"))])]),t("div",{staticClass:"card-body pb-0 px-4"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("DNI")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.abogado.nat_dni,expression:"abogado.nat_dni"}],staticClass:"form-control",class:{"has-error":a.errores.nat_dni},domProps:{value:a.abogado.nat_dni},on:{input:[function(t){t.target.composing||a.$set(a.abogado,"nat_dni",t.target.value)},function(t){a.errores.nat_dni=!1}],blur:a.validarDni}}),a.errores.nat_dni?t("span",{staticClass:"error-message"},[a._v("Complete este campo para continuar.")]):a._e()])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Apellido Paterno")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.abogado.nat_apellido_paterno,expression:"abogado.nat_apellido_paterno"}],staticClass:"form-control",class:{"has-error":a.errores.nat_apellido_paterno},domProps:{value:a.abogado.nat_apellido_paterno},on:{input:[function(t){t.target.composing||a.$set(a.abogado,"nat_apellido_paterno",t.target.value)},function(t){a.errores.nat_apellido_paterno=!1}],blur:a.validarAPaterno}}),a.errores.nat_apellido_paterno?t("span",{staticClass:"error-message"},[a._v("Complete este campo para continuar.")]):a._e()])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Apellido Materno")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.abogado.nat_apellido_materno,expression:"abogado.nat_apellido_materno"}],staticClass:"form-control",class:{"has-error":a.errores.nat_apellido_materno},domProps:{value:a.abogado.nat_apellido_materno},on:{input:[function(t){t.target.composing||a.$set(a.abogado,"nat_apellido_materno",t.target.value)},function(t){a.errores.nat_apellido_materno=!1}],blur:a.validarAMaterno}}),a.errores.nat_apellido_materno?t("span",{staticClass:"error-message"},[a._v("Complete este campo para continuar.")]):a._e()])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Nombres")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.abogado.nat_nombres,expression:"abogado.nat_nombres"}],staticClass:"form-control",class:{"has-error":a.errores.nat_nombres},domProps:{value:a.abogado.nat_nombres},on:{input:[function(t){t.target.composing||a.$set(a.abogado,"nat_nombres",t.target.value)},function(t){a.errores.nat_nombres=!1}],blur:a.validarNombres}}),a.errores.nat_nombres?t("span",{staticClass:"error-message"},[a._v("Complete este campo para continuar.")]):a._e()])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.abogado.nat_correo,expression:"abogado.nat_correo"}],staticClass:"form-control",domProps:{value:a.abogado.nat_correo},on:{input:function(t){t.target.composing||a.$set(a.abogado,"nat_correo",t.target.value)}}})])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Telefono")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.abogado.nat_telefono,expression:"abogado.nat_telefono"}],staticClass:"form-control",domProps:{value:a.abogado.nat_telefono},on:{input:function(t){t.target.composing||a.$set(a.abogado,"nat_telefono",t.target.value)}}})])])])]),t("div",{staticClass:"card-footer"},[t("div",{staticClass:"d-flex"},[t("button",{staticClass:"btn btn-secondary btn-lg mr-auto px-5 rounded",on:{click:a.cerrarModal}},[a._v("Cerrar")]),t("button",{staticClass:"btn btn-primary btn-lg ml-auto rounded px-5",on:{click:a.guardar}},[a._v(" "+a._s(a.abogado.abo_id?"Actualizar":"Guardar")+" ")])])])])]):a._e()])])},r=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"row py-3"},[t("h5",{staticClass:"text-dark fw-bold"},[a._v("Equipo UNPRG")])])},function(){var a=this,t=a._self._c;return t("thead",[t("tr",[t("th",[a._v("Documento")]),t("th",[a._v("Nombres")]),t("th",[a._v("Apellidos")]),t("th",[a._v("Telefono")]),t("th",[a._v("Email")]),t("th",[a._v("Opciones")])])])},function(){var a=this,t=a._self._c;return t("span",{},[t("i",{attrs:{"data-feather":"edit"}})])},function(){var a=this,t=a._self._c;return t("span",{},[t("i",{attrs:{"data-feather":"trash"}})])}],s=o(63822),i=o(98164),l=o.n(i),n=o(77387),d=o.n(n),c=(o(50563),o(22619),{name:"abogado",data(){return{abogados:[],modalVisible:!1,dataTable:null,showModal:!1,abogado:{nat_dni:"",nat_apellido_paterno:"",nat_apellido_materno:"",nat_nombres:"",nat_telefono:"",nat_correo:""},errores:{nat_dni:"",nat_apellido_paterno:"",nat_apellido_materno:"",nat_nombres:"",nat_telefono:"",nat_correo:""}}},mounted(){this.$nextTick((()=>{l().replace(),this.initDataTable()}))},created(){this.leer()},methods:{...(0,s.nv)(["get","post"]),limpiarCampos(){for(let a in this.abogado)this.abogado.hasOwnProperty(a)&&(this.abogado[a]="");console.log("campos limpiados")},limpiarErrores(){for(let a in this.errores)this.errores.hasOwnProperty(a)&&(this.errores[a]="");console.log("errores limpiados")},mostrarModal(){this.showModal=!0},cerrarModal(){this.showModal=!1,this.limpiarCampos(),this.limpiarErrores()},nombreCompleto(a){return`${a.nat_apellido_paterno} ${a.nat_apellido_materno}`},validarCampo(a,t){""===this.abogado[a]?this.errores[t]=!0:this.errores[t]=!1},validarDni(){this.validarCampo("nat_dni","nat_dni")},validarAPaterno(){this.validarCampo("nat_apellido_paterno","nat_apellido_paterno")},validarAMaterno(){this.validarCampo("nat_apellido_materno","nat_apellido_materno")},validarNombres(){this.validarCampo("nat_nombres","nat_nombres")},validarCampos(){return this.validarDni(),this.validarAPaterno(),this.validarAMaterno(),this.validarNombres(),!Object.values(this.errores).some((a=>a))},async crear(){if(this.validarCampos())try{const a=await this.post({url:`${this.$store.getters.get__url}/lawyer/registrar`,token:this.$store.getters.get__token,params:this.abogado});0===a.state?(this.showModal=!1,this.limpiarCampos(),this.leer()):console.error("Error en la respuesta del servidor:",a)}catch(a){console.error("Error en la solicitud:",a)}else console.log("Error en la validación de campos")},async leer(){try{const a=await this.get({url:this.$store.getters.get__url+"/lawyer",token:this.$store.getters.get__token});this.abogados=a.data,this.actualizarTabla()}catch(a){console.error("Error al intentar obtener los datos",a)}},async actualizar(){if(this.validarCampos())try{const a=await this.post({url:`${this.$store.getters.get__url}/lawyer/update`,token:this.$store.getters.get__token,params:this.abogado});0===a.state?(this.limpiarCampos(),this.leer(),this.showModal=!1):console.error("Error en la respuesta del servidor:",a)}catch(a){console.error("Error en la solicitud:",a)}else console.log("Error en la validación de campos")},async eliminar(a){if(confirm("¿Estás seguro de que deseas eliminar a este abogado?"))try{const t=await this.post({url:`${this.$store.getters.get__url}/lawyer/eliminar/${a}`,token:this.$store.getters.get__token});if(0===t.state){const t=this.abogados.findIndex((t=>t.abo_id===a));-1!==t&&this.abogados.splice(t,1)}else console.error("Error al eliminar el abogado.")}catch(t){console.error("Error al eliminar el abogado.",t)}},editar(a){try{const t=this.abogados.find((t=>t.abo_id===a));t?(this.abogado={...t},this.showModal=!0):console.error("Abogado no ENCONTRADO")}catch(t){console.error(t)}},guardar(){try{this.abogado.abo_id?(this.actualizar(this.abogado.abo_id),console.info("actualizar")):(this.crear(),console.info("crear"))}catch(a){console.error(a)}},initDataTable(){this.$nextTick((()=>{this.dataTable=d()("#miTabla1").DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}}),l().replace()}))},actualizarTabla(){this.dataTable&&this.dataTable.destroy(),this.$nextTick((()=>{this.initDataTable()}))}}}),m=c,p=o(1001),_=(0,p.Z)(m,e,r,!1,null,"418815e4",null),b=_.exports}}]);
//# sourceMappingURL=130.be3d86be.js.map