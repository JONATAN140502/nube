"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[798],{9798:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var a=function(){var e=this,t=e._self._c;return t("section",{staticClass:"pc-container pb-4"},[t("div",{staticClass:"pcoded-content"},[e._m(0),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"card shadow"},[t("div",{staticClass:"card-header border-0 mb-0"},[t("div",{staticClass:"row tabs"},[t("div",{staticClass:"col-md-auto tabs-div"},[t("a",{staticClass:"btn btn-lg rounded tabs-link",class:{active:!0===e.showEscrito},attrs:{href:"javascript:void(0)"},on:{click:e.mostrarEscrito}},[e._v("Añadir Documento")])]),t("div",{staticClass:"col-md-auto tabs-div"},[t("a",{staticClass:"btn btn-lg rounded tabs-link",class:{active:!0===e.showEje},attrs:{href:"javascript:void(0)"},on:{click:e.mostrarEje}},[e._v("Añadir Archivo EJE")])])])]),t("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.showEscrito,expression:"showEscrito === true"}]},[t("div",{staticClass:"card-body py-0 my-0"},[e._m(1),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[e._v("N° Expediente")]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.expediente,expression:"expediente"}],staticClass:"form-control border-0",attrs:{type:"text",disabled:""},domProps:{value:e.expediente},on:{input:function(t){t.target.composing||(e.expediente=t.target.value)}}})])])])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[e._v("Demandante")]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.demandante,expression:"demandante"}],staticClass:"form-control border-0",attrs:{type:"text",disabled:""},domProps:{value:e.demandante},on:{input:function(t){t.target.composing||(e.demandante=t.target.value)}}})])])])])]),t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"form-group mb-0"},[t("label",{staticClass:"form-label",attrs:{for:"NumeroExpediente"}},[e._v("Seleccionar Archivo")]),t("input",{ref:"fileInput",staticClass:"form-control",class:{"has-error":e.errores.file_escrito},attrs:{type:"file",required:""},on:{change:e.onFileChange}})]),e.errores.file_escrito?e._e():t("span",{staticClass:"message"},[e._v("Archivos aceptados: word, pdf.")]),e.errores.file_escrito?t("span",{staticClass:"error-message"},[e._v("Debe cargar un archivo.")]):e._e()])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"NumeroExpediente"}},[e._v("Descripción o detalles sobre los escritos")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.escrito.descripcion,expression:"escrito.descripcion"}],staticClass:"form-control",attrs:{id:"Detalles"},domProps:{value:e.escrito.descripcion},on:{input:function(t){t.target.composing||e.$set(e.escrito,"descripcion",t.target.value)}}})])])])]),t("div",{staticClass:"card-footer border-0 pt-1"},[t("div",{staticClass:"row"},[t("div",{staticClass:"d-flex justify-content-end"},[t("button",{staticClass:"btn btn-lg mx-2 btn-secondary px-3",on:{click:e.goBack}},[t("i",{attrs:{"data-feather":"arrow-left"}}),e._v(" Volver atrás ")]),t("button",{staticClass:"btn btn-lg btn-primary px-3",on:{click:e.guardarEscrito}},[e._v(" Guardar Escrito ")])])])])]),t("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.showEje,expression:"showEje === true"}]},[0==e.dataeje.length?t("div",{staticClass:"card-body py-0 my-0"},[e._m(2),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[e._v("N° Expediente")]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.expediente,expression:"expediente"}],staticClass:"form-control border-0",attrs:{type:"text",disabled:""},domProps:{value:e.expediente},on:{input:function(t){t.target.composing||(e.expediente=t.target.value)}}})])])])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[e._v("Demandante")]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.demandante,expression:"demandante"}],staticClass:"form-control border-0",attrs:{type:"text",disabled:""},domProps:{value:e.demandante},on:{input:function(t){t.target.composing||(e.demandante=t.target.value)}}})])])])])]),t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"form-group mb-0"},[t("label",{staticClass:"form-label",attrs:{for:"NumeroExpediente"}},[e._v("Seleccionar Archivo")]),t("input",{ref:"fileInput",staticClass:"form-control",class:{"has-error":e.errores.file_eje},attrs:{type:"file",requeried:""},on:{change:e.onFileChange}})]),e.errores.file_eje?t("span",{staticClass:"error-message"},[e._v("Debe cargar un archivo.")]):t("span",{staticClass:"message"},[e._v("Archivos aceptados: word, pdf.")])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"NumeroExpediente"}},[e._v("Descripción o detalles sobre el archivo EJE")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.EJE.descripcion,expression:"EJE.descripcion"}],staticClass:"form-control",attrs:{id:"Detalles"},domProps:{value:e.EJE.descripcion},on:{input:function(t){t.target.composing||e.$set(e.EJE,"descripcion",t.target.value)}}})])])])]):t("div",{staticClass:"card-body py-0 my-0"},[e._m(3)]),t("div",{staticClass:"card-footer border-0 pt-1"},[t("div",{staticClass:"row"},[t("div",{staticClass:"d-flex justify-content-end"},[t("button",{staticClass:"btn btn-lg btn-secondary px-3 mx-2",on:{click:e.goBack}},[t("i",{attrs:{"data-feather":"arrow-left"}}),e._v(" Volver atras ")]),0==e.dataeje.length?t("button",{staticClass:"btn btn-lg btn-primary px-3",on:{click:function(t){return e.GuardarEJE()}}},[e._v("Guardar archivo EJE")]):t("router-link",{staticClass:"btn btn-success btn-lg px-5",attrs:{to:{name:"expediente/detalle",params:{id:e.EJE.exp_id}}}},[e._v(" Detalle ")])],1)])])])])])])])])},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"row mb-4"},[t("h5",{staticClass:"text-dark fw-bold"},[e._v("Añadir archivos al Expediente")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row mb-3 mt-0"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"badge bg-light-primary w-100 rounded py-3 px-4 d-flex text-start",staticStyle:{"font-size":"12px"}},[e._v(" Datos para añadir un nuevo escrito al Expediente ")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row mb-3 mt-0"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"badge bg-light-primary w-100 rounded py-3 px-4 d-flex text-start",staticStyle:{"font-size":"12px"}},[e._v(" Datos para modificar el archivo EJE del Expediente ")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row mb-3 mt-0"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"badge bg-light-primary w-100 rounded py-3",staticStyle:{"font-size":"13px"}},[e._v(" El expediente ya cuenta con un archivo EJE registrado. Puede visualizar o modificar esta información en el detalle del expediente. ")])])])}],r=(s(70560),s(44161)),o=s(63822),l=s(98164),c=s.n(l),d=(s(42492),{props:["id"],data(){return{selectedFile:null,escrito:{exp_id:"",doc_tipo:"ESCRITO",descripcion:""},EJE:{exp_id:"",doc_tipo:"EJE",descripcion:""},expediente:null,demandante:null,errores:{file_escrito:!1,file_eje:!1},showEscrito:!1,showEje:!1,archivoSeleccionado:!1,dataeje:[]}},created(){this.buscar(),this.mostrarEscrito()},mounted(){this.$nextTick((()=>{c().replace()}))},methods:{...(0,o.nv)(["get","post"]),mostrarEscrito(){this.showEscrito=!0,this.showEje=!1},mostrarEje(){this.showEscrito=!1,this.showEje=!0},onFileChange(e){this.selectedFile=e.target.files[0];const t=e.target;this.archivoSeleccionado=t.files.length>0,this.errores.file_escrito=!1,this.errores.file_eje=!1},validarFileEscrito(){return this.archivoSeleccionado?(this.errores.file_escrito=!0,!0):(this.errores.file_escrito=!1,!1)},validarFileEje(){const e=this.$refs.fileInput;return e.files&&0!==e.files.length?(this.errores.file_eje=!1,!1):(this.errores.file_eje=!0,!0)},getNombreCompleto(e){return`${e.nombres} ${e.apellido_paterno} ${e.apellido_materno}`},async buscar(){try{this.$showLoadingAlert();const e={exp_id:this.$route.params.id},t=await this.$postData("proceeding/buscarPorId",this,e);this.expediente=t.data.numero;const s=t.data.procesal[0];"NATURAL"===s.tipo_persona?this.demandante=this.getNombreCompleto(s):this.demandante=this.procesal.jur_razon_social,this.escrito.exp_id=t.data.exp_id,this.EJE.exp_id=t.data.exp_id,this.dataeje=t.eje,this.$closeLoadingAlert()}catch(e){console.log(e)}},async guardarEscrito(){if(this.archivoSeleccionado){console.info("Carga correcta del archivo escrito."),this.errores.file_escrito=!1;const t=new FormData;t.append("file",this.selectedFile);try{await r.Z.post(`${this.$store.getters.get__url}/cargar/archivo`,t,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${this.$store.getters.get__token}`},params:this.escrito}),this.selectedFile=null,this.$router.push({path:"/sisge/expediente/busqueda"})}catch(e){console.error(e)}}else console.log("Falta cargar un archivo."),this.errores.file_escrito=!0},async GuardarEJE(){if(this.archivoSeleccionado){console.info("Carga correcta del archivo eje."),this.errores.file_eje=!1;try{const e=new FormData;e.append("file",this.selectedFile),await r.Z.post(`${this.$store.getters.get__url}/cargar/archivo`,e,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+this.$store.getters.get__token},params:this.EJE}),this.selectedFile=null,this.$router.push({path:"/sisge/expediente/busqueda"})}catch(e){console.error(e)}}else console.log("Falta cargar un archivo."),this.errores.file_eje=!0},goBack(){this.$router.go(-1)}}}),n=d,p=s(1001),v=(0,p.Z)(n,a,i,!1,null,"221510e4",null),m=v.exports}}]);
//# sourceMappingURL=798.9d7437f7.js.map