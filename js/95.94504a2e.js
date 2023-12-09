"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[95],{69095:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pc-container"},[e("div",{staticClass:"pcoded-content pt-2 pb-4"},[t._m(0),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"card shadow"},[e("div",{staticClass:"card-header py-3"},[e("div",{staticClass:"row d-flex align-items-center"},[t._m(1),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"d-flex justify-content-end"},[e("button",{staticClass:"btn btn-lg btn-secondary px-3 mx-2 rounded",on:{click:t.goBack}},[e("i",{attrs:{"data-feather":"arrow-left"}}),t._v(" Volver atrás ")]),t.expediente.exp_id?e("router-link",{staticClass:"btn btn-primary btn-lg rounded",attrs:{to:{name:"expediente/actualizacion",params:{id:t.expediente.exp_id}}}},[t._v(" Actualizar datos ")]):t._e()],1)])])]),e("div",{staticClass:"card-body"},[e("div",[e("div",{staticClass:"row py-2"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5 fw-bold"},[t._v(" Expediente N° ")]),e("div",{staticClass:"col-md-7 fw-bold"},[t._v(" : "+t._s(t.expediente.exp_numero)+" ")])])])]),e("div",{staticClass:"row py-2"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5"},[t._v(" Organo Juridisccional ")]),e("div",{staticClass:"col-md-7"},[t._v(" : "+t._s(t.expediente.nombre_juzgado)+" ")])])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5"},[t._v(" Distrito Judicial ")]),e("div",{staticClass:"col-md-7"},[t._v(" : "+t._s(t.judicial.distrito_judicial)+" ")])])])]),e("div",{staticClass:"row py-2"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5"},[t._v(" Fecha de Inicio ")]),e("div",{staticClass:"col-md-7"},[t._v(" : "+t._s(t.expediente.exp_fecha_inicio)+" ")])])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5"},[t._v(" Especialidad ")]),e("div",{staticClass:"col-md-7"},[t._v(" : "+t._s(t.judicial.especialidad)+" ")])])])]),e("div",{staticClass:"row py-2"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5"},[t._v(" Materia ")]),e("div",{staticClass:"col-md-7"},[t._v(" : "+t._s(t.expediente.nombre_materia)+" ")])])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5"},[t._v(" Estado ")]),e("div",{staticClass:"col-md-7"},[t._v(" : "+t._s(t.expediente.exp_estado_proceso)+" ")])])])])])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"card shadow"},[t._m(2),e("div",{staticClass:"card-body pt-0"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table"},[t._m(3),e("tbody",["demandante"==t.procesal?e("tr",[e("td",[t._v("Demandante")]),e("td",[t._v(t._s("Natural"===t.expediente.tipo_persona?"Natural":"Jurídico"))]),e("td",[t._v(t._s("Natural"===t.expediente.tipo_persona?t.expediente.nat_apellido_paterno:t.expediente.jur_ruc))]),e("td",[t._v(t._s("Natural"===t.expediente.tipo_persona?t.expediente.nat_apellido_materno:t.expediente.jur_telefono))]),e("td",[t._v(t._s("Natural"===t.expediente.tipo_persona?t.expediente.nat_nombres:t.expediente.jur_razon_social))])]):t._e(),e("tr",[e("td",[t._v("Demandado")]),e("td",[t._v(t._s("demandante"===t.procesal?"Jurídica":"Natural"))]),e("td",[t._v(t._s("demandante"===t.procesal?"UNPRG":"Natural"===t.expediente.tipo_persona?t.expediente.nat_apellido_paterno:t.expediente.jur_ruc))]),e("td",[t._v(t._s("demandante"===t.procesal||"Natural"===t.expediente.tipo_persona?"-":t.expediente.jur_telefono))]),e("td",[t._v(t._s("demandante"===t.procesal||"Natural"===t.expediente.tipo_persona?"-":t.expediente.jur_razon_social))])])])])])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"card shadow"},[t._m(4),e("div",{staticClass:"card-body"},[0===t.ejes.length?e("div",[e("p",{staticClass:"text-muted"},[t._v("Actualmente no hay archivos disponibles para este expediente.")])]):t._e(),t._l(t.ejes,(function(a){return e("div",{key:a.doc_id,staticClass:"row"},[e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"form-group d-grid"},[e("label",{staticClass:"form-label"},[t._v("Ultima actualizacion")]),e("input",{staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.formatFecha(a.created_at)}})])]),e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"form-group d-grid"},[e("label",{staticClass:"form-label"},[t._v("Descripcion o detalles")]),e("input",{staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.doc_desciprcion}})])]),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group d-grid"},[e("label",{staticClass:"form-label"},[t._v("Archivo")]),e("button",{staticClass:"btn btn-primary rounded",attrs:{title:a.doc_nombre},on:{click:function(e){return t.traerarchivo(a.doc_ruta_archivo)}}},[t._v("Descargar ")])])]),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group d-grid"},[e("label",{staticClass:"form-label"},[t._v("Actualizar archivo")]),e("button",{staticClass:"btn btn-success rounded btn-lg",on:{click:function(e){return t.mostrarModal(a.doc_ruta_archivo)}}},[t._v("Actualizar")])])])])}))],2)]),t.showModal?e("div",{staticClass:"modal",on:{click:t.cerrarModal}},[e("div",{staticClass:"modal-content border-0",on:{click:function(t){t.stopPropagation()}}},[t._m(5),e("div",{staticClass:"modal-body px-4"},[e("div",{staticClass:"row mb-3"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group mb-0"},[e("label",{staticClass:"form-label",attrs:{for:"NumeroExpediente"}},[t._v("Seleccionar Archivo")]),e("input",{ref:"fileInput",staticClass:"form-control",attrs:{type:"file",requeried:""},on:{change:t.onFileChange}})])])]),e("div",{staticClass:"row mb-3"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label",attrs:{for:"NumeroExpediente"}},[t._v("Descripción o detalles sobre el archivo EJE")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.EJE.descripcion,expression:"EJE.descripcion"}],staticClass:"form-control",attrs:{id:"Detalles"},domProps:{value:t.EJE.descripcion},on:{input:function(e){e.target.composing||t.$set(t.EJE,"descripcion",e.target.value)}}})])])]),e("div",{staticClass:"row mb-3"},[e("div",{staticClass:"d-flex justify-content-end"},[e("button",{staticClass:"btn btn-secondary btn-lg mx-2 px-5 rounded",on:{click:t.cerrarModal}},[t._v("Cerrar")]),e("button",{staticClass:"btn btn-primary btn-lg px-5 rounded",on:{click:function(e){return t.editarEje()}}},[t._v(" Guardar ")])])])])])]):t._e(),e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"card shadow"},[t._m(6),e("div",{staticClass:"card-body"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table",attrs:{id:"table-escritos"}},[t._m(7),e("tbody",t._l(t.escritos,(function(a,s){return e("tr",{key:s},[e("td",[t._v(t._s(t.formatFecha(a.created_at)))]),e("td",[t._v(t._s(a.doc_desciprcion))]),e("td",[t._v(t._s(a.doc_nombre))]),e("td",[e("button",{staticClass:"btn btn-success rounded btn-lg py-1",staticStyle:{"font-size":"12px"},on:{click:function(e){return t.traerarchivo(a.doc_ruta_archivo)}}},[t._v(" Descargar ")])])])})),0)])])])])])])])])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row py-3"},[e("h5",{staticClass:"text-dark fw-bold"},[t._v("Detalle del Expediente")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-6"},[e("h5",{staticClass:"text-secondary"},[t._v("Datos Generales")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header border-0"},[e("h5",{staticClass:"text-secondary"},[t._v("Partes Procesales")])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("Parte")]),e("th",[t._v("Tipo de Persona")]),e("th",[t._v("Apellido Paterno / Razon Social")]),e("th",[t._v("Apellido Materno")]),e("th",[t._v("Nombres")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header"},[e("h6",{staticClass:"text-secondary"},[t._v("ARCHIVO EJE DEL EXPEDIENTE")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header d-flex justify-content-center pb-2"},[e("p",{staticClass:"text-dark fw-bold text-center"},[t._v("ACTUALIZACION DEL ARCHIVO EJE")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header"},[e("h5",[t._v("Escritos presentados")])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("Fecha de presentacion")]),e("th",[t._v("Detalles")]),e("th",[t._v("Nombre de archivo")]),e("th",[t._v("Archivo")])])])}],r=(a(46229),a(17330),a(62062),a(63822)),o=a(44161),c=a(98164),l=a.n(c),d=(a(50563),{props:["id"],data(){return{dataTable:null,selectedFile:null,showModal:!1,expediente:{},escritos:[],ejes:[],judicial:{},sector:"",procesal:"",EJE:{name:"",exp_id:"",doc_tipo:"EJE",descripcion:""},archivoSeleccionado:!1}},mounted(){this.$nextTick((()=>{l().replace()}))},async created(){this.sector=this.$store.getters.get__sector,this.cargarDetallesExpediente(),this.dataTable=null},methods:{...(0,r.nv)(["get","post"]),mostrarModal(){this.showModal=!0},cerrarModal(){this.showModal=!1,this.limpiarCampos(),this.limpiarErrores()},async cargarDetallesExpediente(){try{const t=await this.get({url:`${this.$store.getters.get__url}/proceeding/${this.id}`,token:this.$store.getters.get__token});this.expediente=t.data,this.escritos=t.escritos,console.log(this.escritos),this.ejes=t.eje,this.procesal=t.procesal,this.judicial=t.judicial,this.EJE.exp_id=t.data.exp_id,this.initDataTable(),console.log(this.EJE.exp_id),l().replace()}catch(t){console.error("Error al cargar los detalles del expediente:",t)}},formatFecha(t){const e=new Date(t),a={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};return e.toLocaleDateString("es-ES",a)},traerarchivo:function(t){o.Z.get(this.$store.getters.get__url+"/traer/archivo",{responseType:"blob",headers:{Authorization:"Bearer "+this.$store.getters.get__token},params:{nombre:t}}).then((t=>{const e=new Blob([t.data],{type:t.headers["content-type"]}),a=window.URL.createObjectURL(e);window.open(a,"_blank"),window.URL.revokeObjectURL(a)})).catch((t=>{console.error("Error al abrir el archivo",t)}))},goBack(){this.$router.go(-1)},async editarEje(){if(this.archivoSeleccionado)try{const t=new FormData;t.append("file",this.selectedFile),await o.Z.post(`${this.$store.getters.get__url}/cargar/archivo/eje`,t,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+this.$store.getters.get__token},params:this.EJE}),console.info("Carga correcta del archivo eje."),this.selectedFile=null,this.modalVisible=!1,this.cargarDetallesExpediente()}catch(t){console.error(t)}else console.log("Falta cargar un archivo.")},onFileChange(t){this.selectedFile=t.target.files[0];const e=t.target;this.archivoSeleccionado=e.files.length>0},initDataTable(){this.$nextTick((()=>{this.dataTable&&this.dataTable.destroy(),this.dataTable=$("#table-escritos").DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}}),l().replace()}))}},beforeDestroy(){this.dataTable&&this.dataTable.destroy()}}),n=d,v=a(1001),_=(0,v.Z)(n,s,i,!1,null,"1c18ce3e",null),p=_.exports}}]);
//# sourceMappingURL=95.94504a2e.js.map