"use strict";(self["webpackChunksisge"]=self["webpackChunksisge"]||[]).push([[3687],{3687:function(a,t,e){e.r(t),e.d(t,{default:function(){return F}});var r=function(){var a=this,t=a._self._c;return null!=a.trade?t("div",{staticClass:"pc-container pb-4"},[t("div",{staticClass:"page-header"},[t("div",{staticClass:"page-block"},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"page-header-title"},[t("h5",{staticClass:"m-b-10"},[t("button",{staticClass:"btn btn-sm mr-2 btn-primary",on:{click:a.goBack}},[t("i",{attrs:{"data-feather":"arrow-left"}})]),a._v(" EXPEDIENTE ADMINISTRATIVO: "+a._s(a.trade?a.trade.tra_number:"---")+" ")])]),t("ul",{staticClass:"breadcrumb"},[t("li",{staticClass:"breadcrumb-item"},[t("button",{staticClass:"btn rounded border py-1 px-4 btn-outline-primary",class:{"btn-primary text-white":"1"===a.isVista},on:{click:function(t){return a.selectVista("1")}}},[a._v(" DATOS")])]),t("li",{staticClass:"breadcrumb-item"},[t("button",{staticClass:"btn rounded border py-1 px-4 btn-outline-primary",class:{"btn-primary text-white":"2"===a.isVista},on:{click:function(t){return a.selectVista("2")}}},[a._v(" ARCHIVOS")])]),t("li",{staticClass:"breadcrumb-item"},[t("button",{staticClass:"btn rounded border py-1 px-4 btn-outline-primary",class:{"btn-primary text-white":"3"===a.isVista},on:{click:function(t){return a.selectVista("3")}}},[a._v(" ACTUALIZAR")])])])])])])]),t("div",{staticClass:"pcoded-content"},[a.trade?t("div",["1"===a.isVista?t("General",{attrs:{id:a.trade.tra_id}}):"2"===a.isVista?t("Archivos",{attrs:{id:a.trade.tra_id}}):"3"===a.isVista?t("Actualizar",{attrs:{id:a.trade.tra_id}}):a._e()],1):a._e()])]):a._e()},s=[],i=(e(44114),e(38280)),o=e(98355),l=e(90740),n=e.n(l),d=function(){var a=this,t=a._self._c;return t("div",[t("div",{staticClass:"row d-flex align-items-start"},[t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"card support-bar overflow-hidden"},[null!=a.trade?t("div",{staticClass:"card-body pb-0"},["P"===a.trade.tra_state_law?t("label",{staticClass:"badge bg-light-warning mb-2 fs-6"},[a._v("EXPEDIENTE PENDIENTE")]):a._e(),"F"===a.trade.tra_state_law?t("label",{staticClass:"badge bg-light-success mb-2 fs-6"},[a._v("EXPEDIENTE ATENDIDO")]):a._e(),t("h2",{staticClass:"m-0"},[a._v(a._s(a.trade.tra_number))]),t("span",{staticClass:"text-primary"},[a._v(a._s(a.trade.tra_name))]),t("p",{staticClass:"mb-3 mt-3"},[a._v(a._s(a.trade.tra_matter))]),t("div",{staticClass:"col-lg-12 mb-2"},[t("div",{staticClass:"d-flex align-items-center p-2 bg-light rounded"},[a._m(0),t("div",{staticClass:"px-2"},[t("span",{staticClass:"fw-bold"},[a._v("Área de origen:")]),a._v(" "+a._s(a.trade.area.are_name))])])]),a._m(1),null!=a.trade.tra_exp_ext?t("div",{staticClass:"col-lg-12 mb-2"},[t("div",{staticClass:"d-flex align-items-center p-2 rounded"},[t("div",{staticClass:"px-2"},[t("span",{staticClass:"fw-bold"}),a._v(" "+a._s(a.trade.tra_exp_ext))])])]):a._e(),null!=a.trade.tra_doc_recep?t("div",{staticClass:"col-lg-12 mb-2"},[t("div",{staticClass:"d-flex align-items-center p-2 rounded"},[t("div",{staticClass:"px-2"},[t("span",{staticClass:"fw-bold"}),a._v(" "+a._s(a.trade.tra_doc_recep))])])]):a._e()]):a._e(),t("hr",{staticClass:"mb-0"}),null!=a.trade?t("div",{staticClass:"card-footer border-0"},[t("div",{staticClass:"row text-center"},[t("div",{staticClass:"col"},[t("h4",{staticClass:"m-0"},[a._v(a._s(a.formatDate(a.trade.tra_arrival_date)))])])])]):a._e()])]),null!=a.trade?t("div",{staticClass:"col-md-4"},[null!=a.trade.report?t("div",{staticClass:"card support-bar overflow-hidden"},[null!=a.trade?t("div",{staticClass:"card-body pb-4"},[t("label",{staticClass:"badge bg-light-primary mb-2 fs-6"},[a._v("REPORTE")]),t("div",{staticClass:"col-lg-12 mb-2"},[t("div",{staticClass:"d-flex align-items-center p-2 bg-light rounded"},[a._m(2),t("div",{staticClass:"px-2"},[t("span",{staticClass:"fw-bold"},[a._v("Oficio:")]),a._v(" "+a._s(a.trade.report.rep_oficio)+" ")])])]),t("div",{staticClass:"col-lg-12 mb-2"},[t("div",{staticClass:"d-flex align-items-center p-2 bg-light rounded"},[a._m(3),t("div",{staticClass:"px-2"},[t("span",{staticClass:"fw-bold"},[a._v("Informe:")]),a._v(" "+a._s(a.trade.report.rep_informe)+" ")])])]),t("div",{staticClass:"col-lg-12 mb-2"},[t("div",{staticClass:"d-flex align-items-center p-2 bg-light rounded"},[a._m(4),t("div",{staticClass:"px-2"},[t("span",{staticClass:"fw-bold"},[a._v("Derivado a:")]),a._v(" "+a._s(a.trade.report.area.are_name))])])]),t("div",{staticClass:"col-lg-12 mb-2"},[t("div",{staticClass:"d-flex align-items-center p-2 bg-light rounded"},[a._m(5),t("div",{staticClass:"px-2"},[t("span",{staticClass:"fw-bold"},[a._v("Fecha:")]),a._v(" "+a._s(a.formatDate(a.trade.report.created)))])])])]):a._e()]):t("div",{staticClass:"card support-bar overflow-hidden"},[null!=a.trade?t("div",{staticClass:"card-body pb-4"},[t("label",{staticClass:"badge bg-light-primary mb-4 fs-6"},[a._v("REGISTRAR REPORTE")]),t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("N° Oficio")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.rep_oficio,expression:"datosgenerales.rep_oficio"}],staticClass:"form-control",class:{"has-error":a.errores.rep_oficio},attrs:{type:"text"},domProps:{value:a.datosgenerales.rep_oficio},on:{input:[function(t){t.target.composing||a.$set(a.datosgenerales,"rep_oficio",t.target.value)},function(t){return a.validarCampo("rep_oficio")}]}}),a.errores.rep_oficio?t("span",{staticClass:"error-message"},[a._v("Ingrese el número de oficio")]):a._e()]),t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("N° Informe")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.rep_informe,expression:"datosgenerales.rep_informe"}],staticClass:"form-control",class:{"has-error":a.errores.rep_informe},attrs:{type:"text"},domProps:{value:a.datosgenerales.rep_informe},on:{input:[function(t){t.target.composing||a.$set(a.datosgenerales,"rep_informe",t.target.value)},function(t){return a.validarCampo("rep_informe")}]}}),a.errores.rep_informe?t("span",{staticClass:"error-message"},[a._v("Ingrese el número de informe")]):a._e()]),t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Derivar a la oficina:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.rep_area,expression:"datosgenerales.rep_area"}],staticClass:"form-control",class:{"has-error":a.errores.rep_area},on:{change:[function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){var t="_value"in a?a._value:a.value;return t}));a.$set(a.datosgenerales,"rep_area",t.target.multiple?e:e[0])},function(t){return a.validarCampo("rep_area")}]}},[t("option",{staticClass:"py-5",attrs:{value:"",disabled:"",selected:""}},[a._v("-- Seleccione una opción ")]),a._l(a.areas,(function(e){return t("option",{key:e.are_id,staticClass:"py-3",domProps:{value:e.are_id}},[a._v(" "+a._s(e.are_name)+" ")])}))],2),a.errores.rep_area?t("span",{staticClass:"error-message"},[a._v("Seleccione una Ocifina.")]):a._e()]),t("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button"},on:{click:a.registrar}},[a._v("REGISTRAR")])]):a._e()])]):a._e(),null!=a.trade?t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"card feed-card"},[a._m(6),t("div",{staticClass:"card-body py-3"},[null!==a.trade.lawyer?t("div",{staticClass:"mb-3"},[a._m(7),a._v(" "+a._s(a.trade.lawyer.persona.nat_nombres)+" "+a._s(a.trade.lawyer.persona.nat_apellido_paterno)+" "+a._s(a.trade.lawyer.persona.nat_apellido_materno)+" ")]):a._e(),null!==a.trade.lawyer?t("div",{staticClass:"mb-3"},[a._m(8),t("span",[a._v(" Se derivó el día: "+a._s(a.trade.tra_der_date))])]):a._e(),null===a.trade.lawyer?t("div",{staticClass:"mb-3"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Asignar:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:a.datosAbogado.tra_abogado,expression:"datosAbogado.tra_abogado"}],staticClass:"form-control",class:{"has-error":a.errorAbogado.tra_abogado},on:{change:[function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){var t="_value"in a?a._value:a.value;return t}));a.$set(a.datosAbogado,"tra_abogado",t.target.multiple?e:e[0])},function(t){return a.validarCampoAbogado("tra_abogado")}]}},[t("option",{staticClass:"py-5",attrs:{value:"",disabled:"",selected:""}},[a._v("-- Seleccione una opción ")]),a._l(a.abogados,(function(e,r){return t("option",{key:r,staticClass:"py-3",domProps:{value:e.abo_id}},[a._v(" "+a._s(e.nat_nombres)+" "+a._s(e.nat_apellido_paterno)+" "+a._s(e.nat_apellido_materno)+" ")])}))],2),a.errorAbogado.tra_abogado?t("span",{staticClass:"error-message"},[a._v("Asigne un abogado")]):a._e()]),t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Fecha de llegada")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.datosAbogado.tra_der_date,expression:"datosAbogado.tra_der_date"}],staticClass:"form-control",class:{"has-error":a.errorAbogado.tra_der_date},attrs:{type:"date"},domProps:{value:a.datosAbogado.tra_der_date},on:{input:[function(t){t.target.composing||a.$set(a.datosAbogado,"tra_der_date",t.target.value)},function(t){return a.validarCampoAbogado("tra_der_date")}]}}),a.errorAbogado.tra_der_date?t("span",{staticClass:"error-message"},[a._v("Ingrese una fecha")]):a._e()]),t("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button"},on:{click:a.registrarAbogado}},[a._v("REGISTRAR")])]):a._e()])]),t("div",{staticClass:"card feed-card"},[a._m(9),t("div",{staticClass:"card-body py-3"},[null===a.trade.report?t("div",{staticClass:"row rounded"},[t("span",[a._v("El expediente lleva sin atención "),t("label",{staticClass:"badge bg-light-danger mb-4 fs-6"},[a._v(a._s(a.dias)+" días")])])]):a._e(),null!==a.trade.report?t("div",{staticClass:"row rounded"},[t("span",[a._v("El expediente a sido atendido")])]):a._e()])])]):a._e()])])},c=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"d-flex align-items-center justify-content-center bg-primary rounded-pill p-2 text-white"},[t("i",{attrs:{"data-feather":"file-text"}})])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"col-lg-12 mb-2"},[t("div",{staticClass:"d-flex align-items-center p-2 bg-light rounded"},[t("div",{staticClass:"d-flex align-items-center justify-content-center bg-primary rounded-pill p-2 text-white"},[t("i",{attrs:{"data-feather":"file-text"}})]),t("div",{staticClass:"px-2"},[t("span",{staticClass:"fw-bold"},[a._v("Referencias")])])])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"d-flex align-items-center justify-content-center bg-primary rounded-pill p-2 text-white"},[t("i",{attrs:{"data-feather":"file-text"}})])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"d-flex align-items-center justify-content-center bg-primary rounded-pill p-2 text-white"},[t("i",{attrs:{"data-feather":"file-text"}})])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"d-flex align-items-center justify-content-center bg-primary rounded-pill p-2 text-white"},[t("i",{attrs:{"data-feather":"file-text"}})])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"d-flex align-items-center justify-content-center bg-primary rounded-pill p-2 text-white"},[t("i",{attrs:{"data-feather":"file-text"}})])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"card-header py-3"},[t("span",{staticClass:"fw-bold"},[a._v("RESPONSABLE")])])},function(){var a=this,t=a._self._c;return t("i",{staticClass:"material-icons-two-tone text-primary"},[t("span",{staticClass:"material-symbols-outlined"},[a._v(" gavel ")])])},function(){var a=this,t=a._self._c;return t("i",{staticClass:"material-icons-two-tone text-primary"},[t("span",{staticClass:"material-symbols-outlined"},[a._v(" history ")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"card-header py-3"},[t("span",{staticClass:"fw-bold"},[a._v("DIAS DE RETRASO")])])}],_=e(2637),p=e(34061),u=e(49148),m=e.n(u),v={mixins:[_.A],data(){return{dias:"",areas:[],abogados:[],dataTable:null,trade:null,persons:[],formattedDate:"",id:"",datosAbogado:{tra_abogado:"",tra_der_date:this.getCurrentDate()},datosgenerales:{rep_informe:"",rep_oficio:"",rep_area:"",rep_anio:(new Date).getFullYear()},errorAbogado:{tra_abogado:!1,tra_der_date:!1},errores:{rep_informe:!1,rep_oficio:!1,rep_area:!1}}},created(){this.sector=this.$store.getters.get__sector,this.id=this.$route.params.id,this.cargarDetallesOficio(),this.listarAbogados(),this.listarAreas()},mounted(){this.$nextTick((()=>{n().replace()}))},methods:{async cargarDetallesOficio(){try{this.$showLoadingAlert();const a=await this.$getData("report/getNextRepNumber",this);this.datosgenerales.rep_oficio=a.nextRepNumber;const t=await this.$getData(`trade/${this.id}`,this);this.trade=t.trade,this.dias=this.diasRetraso(this.trade.tra_arrival_date)}catch(error){this.$handleApiError(error,"cargar detalles del expediente administrativo ",this.id)}},async listarAbogados(){try{const a=await(0,p.bQ)("lawyer",this);this.abogados=a.data}catch(error){this.$handleApiError(error,"listar abogados")}},async listarAreas(){try{const a=await(0,p.bQ)("area",this);this.areas=a.data}catch(error){this.$handleApiError(error,"listar areas")}finally{this.$closeLoadingAlert()}},async registrar(){if(this.validarCampos())try{const a=await this.$getData("report/getNextRepNumber",this);this.datosgenerales.rep_oficio=a.nextRepNumber,this.loader=!0;const t={rep_oficio:this.datosgenerales.rep_oficio,rep_informe:this.datosgenerales.rep_informe,rep_tra_id:this.trade.tra_id,rep_are_id:this.datosgenerales.rep_area,rep_anio:this.datosgenerales.rep_anio},e=await this.$postData("report/create",this,t);"success"===e.state&&window.location.reload()}catch(error){console.error("Error en la función registrar:",error),error.response?console.error("Respuesta del servidor:",error.response.data):error.message&&console.error("Mensaje de error:",error.message),this.$handleApiError(error,"crear informe")}else console.log("error")},async registrarAbogado(){if(this.validarCamposAbogado())try{this.loader=!0;const a={tra_id:this.trade.tra_id,tra_abogado:this.datosAbogado.tra_abogado,tra_der_date:this.datosAbogado.tra_der_date},t=await this.$postData("trade/derivar",this,a);"success"===t.state&&window.location.reload()}catch(error){console.error("Error en la función registrar abogado:",error),error.response?console.error("Respuesta del servidor:",error.response.data):error.message&&console.error("Mensaje de error:",error.message),this.$handleApiError(error,"registrar abogado")}else console.log("error")},diasRetraso(a){var t=new Date(a),e=new Date,r=e-t,s=Math.floor(r/864e5);return s},getIniciales(){const a=this.trade.lawyer.persona.nat_nombres+" "+this.trade.lawyer.persona.nat_apellido_paterno+" "+this.trade.lawyer.persona.nat_apellido_materno,t=a.split(" ");let e="";t.forEach((a=>{a.length>0&&(e+=a.charAt(0).toUpperCase())}));var r=new Date,s=r.getFullYear();return s+"-UNPRG-OAJ-"+e},getCurrentDate(){return(new Date).toISOString().split("T")[0]},validarCampo(a){this.errores[a]=""===this.datosgenerales[a]},validarCampoAbogado(a){this.errorAbogado[a]=""===this.datosAbogado[a]},validarCampos(){return Object.keys(this.errores).forEach((a=>{this.validarCampo(a,a)})),!Object.values(this.errores).some((a=>a))},validarCamposAbogado(){return Object.keys(this.errorAbogado).forEach((a=>{this.validarCampoAbogado(a,a)})),!Object.values(this.errorAbogado).some((a=>a))},formatDate(a){return m().locale("es"),m()(a).format("DD MMM YYYY")},goBack(){this.$router.go(-1)}}},g=v,h=e(81656),f=(0,h.A)(g,d,c,!1,null,"4250a664",null),b=f.exports,C=function(){var a=this,t=a._self._c;return null!==a.trade?t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-12"},[t("div",{staticClass:"card"},[a._m(0),t("div",{staticClass:"card-body"},[null===a.trade.report.rep_pdf_oficio?t("div",[t("p",{staticClass:"text-muted"},[a._v("Actualmente no hay un archivo para este expediente. "),t("a",{staticClass:"text-primary",attrs:{href:"javascript:void(0)"},on:{click:function(t){return a.abrirModal(1)}}},[a._v("Haga click para cargar el expediente.")])])]):t("div",{staticClass:"row"},[a._m(1)])]),1===a.showModal?t("div",{staticClass:"modal",on:{click:a.cerrarModal}},[t("div",{staticClass:"modal-content",on:{click:function(a){a.stopPropagation()}}},[a._m(2),t("div",{staticClass:"modal-body"},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"NumeroExpediente"}},[a._v("Seleccionar Archivo")]),t("input",{ref:"fileInput",staticClass:"form-control",attrs:{type:"file",requeried:""},on:{change:a.onFileChange}})])]),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.cerrarModal()}}},[a._v("Cerrar")]),t("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return a.guardarArchivo()}}},[a._v("Guardar")])])])]):a._e()])]),t("div",{staticClass:"col-sm-12"},[t("div",{staticClass:"card"},[a._m(3),t("div",{staticClass:"card-body"},[null===a.trade.report.rep_pdf_informe?t("div",[t("p",{staticClass:"text-muted"},[a._v("Actualmente no hay un archivo para este expediente. "),t("a",{staticClass:"text-primary",attrs:{href:"javascript:void(0)"},on:{click:function(t){return a.abrirModal(2)}}},[a._v("Haga click para cargar el informe.")])])]):t("div",{staticClass:"row"},[a._m(4)])])])]),2===a.showModal?t("div",{staticClass:"modal",on:{click:a.cerrarModal}},[t("div",{staticClass:"modal-content",on:{click:function(a){a.stopPropagation()}}},[a._m(5),t("div",{staticClass:"modal-body"},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"NumeroExpediente"}},[a._v("Seleccionar Archivo")]),t("input",{ref:"fileInput",staticClass:"form-control",attrs:{type:"file",requeried:""},on:{change:a.onFileChange}})])]),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.cerrarModal()}}},[a._v("Cerrar")]),t("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return a.guardarArchivo()}}},[a._v("Guardar")])])])]):a._e()]):a._e()},y=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"card-header"},[t("h5",[a._v("CARGAR OFICIO")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"col-md-3"},[t("label",{staticClass:"form-label"},[a._v("Se cargo")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title"},[a._v("Nuevo Archivo EXPEDIENTE")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"card-header"},[t("h5",[a._v("CARGAR INFORME")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"col-md-3"},[t("label",{staticClass:"form-label"},[a._v("Se cargo")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title"},[a._v("Nuevo Archivo REPORTE")])])}],x=(e(46587),{name:"ArchivosOficio",data(){return{trade:null,showModal:0,number:"",doc_tipo:"",archivo:{id:"",number:"",doc_tipo:""},id:""}},mounted(){this.$nextTick((()=>{n().replace()})),this.cargarDetallesOficio()},async created(){this.id=this.$route.params.id},methods:{async cargarDetallesOficio(){this.$showLoadingAlert();try{const a=await this.$getData(`trade/${this.id}`,this);this.trade=a.trade}catch(error){this.$handleApiError(error,"cargar detalles del expediente administrativo ",this.id)}finally{this.$closeLoadingAlert()}},async guardarArchivo(){if(this.selectedFile)try{this.$showLoadingAlert();const a=new FormData;a.append("file",this.selectedFile),this.archivo.id=this.trade.report.rep_id,1===this.showModal?(this.archivo.number=this.trade.report.rep_oficio,this.archivo.doc_tipo="OIFICIOS"):(this.archivo.number=this.trade.report.rep_informe,this.archivo.doc_tipo="INFORMES"),console.log(a),await o.A.post(`${this.$store.getters.get__url}/archivos/guardarArchivoAdm`,a,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+this.$store.getters.get__token},params:this.archivo}),this.selectedFile=null,this.archivo.doc_tipo="",this.showModal=0,this.$closeLoadingAlert(),this.cargarDetallesExpediente()}catch(error){console.error(error)}else this.$handleApiError(error,"guardar expediente")},abrirModal(a){this.showModal=a},cerrarModal(){this.showModal=0},goBack(){this.$router.go(-1)},onFileChange(a){this.selectedFile=a.target.files[0];const t=a.target;this.archivoSeleccionado=t.files.length>0}}}),A=x,w=(0,h.A)(A,C,y,!1,null,"05c5596a",null),$=w.exports,E=function(){var a=this,t=a._self._c;return t("div",[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"card shadow rounded"},[t("div",{staticClass:"card-body mb-0"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("N° de Expediente")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.tra_number,expression:"datosgenerales.tra_number"}],staticClass:"form-control",class:{"has-error":a.errores.tra_number},attrs:{type:"text",placeholder:"0001-2024-OAJ",disabled:""},domProps:{value:a.datosgenerales.tra_number},on:{input:[function(t){t.target.composing||a.$set(a.datosgenerales,"tra_number",t.target.value)},function(t){return a.validarCampo("tra_number")}]}}),a.errores.tra_number?t("span",{staticClass:"error-message"},[a._v("Ingrese un numero de expediente.")]):a._e()])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Fecha de llegada")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.tra_arrival_date,expression:"datosgenerales.tra_arrival_date"}],staticClass:"form-control",class:{"has-error":a.errores.tra_arrival_date},attrs:{type:"date"},domProps:{value:a.datosgenerales.tra_arrival_date},on:{input:[function(t){t.target.composing||a.$set(a.datosgenerales,"tra_arrival_date",t.target.value)},function(t){return a.validarCampo("tra_arrival_date")}]}}),a.errores.tra_arrival_date?t("span",{staticClass:"error-message"},[a._v("Ingrese una fecha de llegada.")]):a._e()])])]),t("div",{staticClass:"row"}),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Oficina de origen")]),t("select",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.tra_area,expression:"datosgenerales.tra_area"}],staticClass:"form-control",class:{"has-error":a.errores.tra_area},on:{change:[function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){var t="_value"in a?a._value:a.value;return t}));a.$set(a.datosgenerales,"tra_area",t.target.multiple?e:e[0])},function(t){return a.validarCampo("tra_area")}]}},[t("option",{staticClass:"py-5",attrs:{value:"",disabled:"",selected:""}},[a._v("-- Seleccione una opción ")]),a._l(a.areas,(function(e){return t("option",{key:e.are_id,staticClass:"py-3",domProps:{value:e.are_id}},[a._v(" "+a._s(e.are_name)+" ")])}))],2),a.errores.tra_area?t("span",{staticClass:"error-message"},[a._v("Seleccione una Ocifina de origen.")]):a._e()])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v(" Responsable ")]),t("select",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.tra_abogado,expression:"datosgenerales.tra_abogado"}],staticClass:"form-control",class:{"has-error":a.errores.tra_abogado},on:{change:[function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){var t="_value"in a?a._value:a.value;return t}));a.$set(a.datosgenerales,"tra_abogado",t.target.multiple?e:e[0])},function(t){return a.validarCampo("tra_abogado")}]}},[t("option",{staticClass:"py-5",attrs:{value:"",disabled:"",selected:""}},[a._v("-- Seleccione una opción ")]),a._l(a.abogados,(function(e,r){return t("option",{key:r,staticClass:"py-3",domProps:{value:e.abo_id}},[a._v(" "+a._s(e.nat_nombres)+" "+a._s(e.nat_apellido_paterno)+" "+a._s(e.nat_apellido_materno)+" ")])}))],2),a.errores.tra_abogado?t("span",{staticClass:"error-message"},[a._v("Asigne un abogado")]):a._e()])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Expediente de recepción (opcional)")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.tra_exp_ext,expression:"datosgenerales.tra_exp_ext"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.datosgenerales.tra_exp_ext},on:{input:function(t){t.target.composing||a.$set(a.datosgenerales,"tra_exp_ext",t.target.value)}}})])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Documento de recepción (opcional)")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.tra_doc_recep,expression:"datosgenerales.tra_doc_recep"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.datosgenerales.tra_doc_recep},on:{input:function(t){t.target.composing||a.$set(a.datosgenerales,"tra_doc_recep",t.target.value)}}})])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Asunto")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.tra_matter,expression:"datosgenerales.tra_matter"}],staticClass:"form-control",class:{"has-error":a.errores.tra_matter},attrs:{type:"text"},domProps:{value:a.datosgenerales.tra_matter},on:{input:[function(t){t.target.composing||a.$set(a.datosgenerales,"tra_matter",t.target.value)},function(t){return a.validarCampo("tra_matter")}]}}),a.errores.tra_matter?t("span",{staticClass:"error-message"},[a._v("Ingrese un asunto de oficio")]):a._e()])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Información adicional")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:a.datosgenerales.tra_name,expression:"datosgenerales.tra_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.datosgenerales.tra_name},on:{input:function(t){t.target.composing||a.$set(a.datosgenerales,"tra_name",t.target.value)}}})])])]),t("div",{staticClass:"row py-3"},[t("div",{staticClass:"col-md-12 d-flex justify-content-end"},[t("button",{staticClass:"btn btn-primary btn-lg rounded",attrs:{type:"button"},on:{click:a.actualizar}},[t("i",{attrs:{"data-feather":"edit"}}),a._v(" Actualizar ")])])])])])])])])},D=[],O=(e(11530),e(4874)),k=e.n(O),N={name:"Actualizar",props:{exp:{}},data(){return{trade:null,areas:[],abogados:[],tra_person:!1,datosgenerales:{tra_number:"",tra_name:"",tra_exp_ext:"",tra_doc_recep:"",tra_area:"",tra_matter:"",tra_arrival_date:"",tra_state_law:"P",tra_abogado:"",anio:(new Date).getFullYear()},errores:{tra_number:!1,tra_area:!1,tra_matter:!1,tra_arrival_date:!1,tra_abogado:!1}}},created(){this.id=this.$route.params.id,this.cargarOficio(),this.listarAreas(),this.listarAbogados()},mounted(){this.$nextTick((()=>{n().replace()}))},methods:{async cargarOficio(){this.$showLoadingAlert();try{const a=await this.$getData(`trade/${this.id}`,this);this.trade=a.trade,this.datosgenerales.tra_number=this.trade.tra_number,this.datosgenerales.tra_name=this.trade.tra_name,this.datosgenerales.tra_matter=this.trade.tra_matter,this.datosgenerales.tra_arrival_date=this.trade.tra_arrival_date,this.datosgenerales.tra_abogado=this.trade.tra_abo_id,this.datosgenerales.tra_area=this.trade.tra_are_id,this.datosgenerales.tra_type_ref=this.trade.tra_type_id,this.datosgenerales.tra_exp_ext=this.trade.tra_exp_ext,this.datosgenerales.tra_doc_recep=this.trade.tra_doc_recep}catch(error){this.$handleApiError(error,"cargar detalles del expediente administrativo ",this.id)}},async listarAreas(){try{const a=await(0,p.bQ)("area",this);this.areas=a.data}catch(error){this.$handleApiError(error,"listar areas")}},async listarAbogados(){try{const a=await(0,p.bQ)("lawyer",this);this.abogados=a.data}catch(error){this.$handleApiError(error,"listar abogados")}finally{this.$closeLoadingAlert()}},async actualizar(){if(this.validarCampos()){const a=this.areas.find((a=>a.are_id===this.datosgenerales.tra_area));try{this.loader=!0;const t={tra_id:this.id,tra_name:this.datosgenerales.tra_name,tra_exp_ext:this.datosgenerales.tra_exp_ext,tra_doc_recep:this.datosgenerales.tra_doc_recep,tra_matter:this.datosgenerales.tra_matter,tra_arrival_date:this.datosgenerales.tra_arrival_date,tra_ubication:a.are_name,tra_type_id:this.datosgenerales.tra_type_ref,tra_are_id:this.datosgenerales.tra_area,tra_abo_id:this.datosgenerales.tra_abogado},e=await this.$putData("trade/update",this,t);"success"===e.state&&(k().fire({title:"Actualización Correcta",text:"Datos Actualizados Correctamente",icon:"success",timer:7e3,showConfirmButton:!1}),this.trade=e.data,this.loader=!1,setTimeout((()=>{window.location.reload()}),1500))}catch(error){console.error("Error en la función actualizar:",error),error.response?console.error("Respuesta del servidor:",error.response.data):error.message&&console.error("Mensaje de error:",error.message),this.$handleApiError(error,"crear oficio")}}else console.log("error")},validarCampo(a){this.errores[a]=""===this.datosgenerales[a]},validarCampos(){return Object.keys(this.errores).forEach((a=>{this.validarCampo(a,a)})),!Object.values(this.errores).some((a=>a))},goBack(){"ABOGADO"===this.$store.getters.get__user.usu_rol?this.$router.push({path:"/oficio/asignados"}):this.$router.go(-1)}}},R=N,T=(0,h.A)(R,E,D,!1,null,"5d5b670f",null),I=T.exports,M={name:"DetallesOficio",props:["id"],components:{General:b,Archivos:$,Actualizar:I},data(){return{isVista:"1",dataTable:null,trade:null}},computed:{rol(){return this.$store.getters.get__user.usu_rol}},mounted(){this.$nextTick((()=>{n().replace()})),this.cargarDetallesOficio()},methods:{...(0,i.i0)(["get","post"]),selectVista(a){this.isVista=a},showOption(...a){return a.includes(this.rol)},async cargarDetallesOficio(){try{const a=await o.A.get(`${this.$store.getters.get__url}/trade/${this.id}`,{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});this.trade=a.data.trade}catch(error){this.$handleApiError(error,"cargar detalles del expediente administrativo",this.id)}},goBack(){"ABOGADO"===this.$store.getters.get__user.usu_rol?this.$router.push({path:"/oficio/asignados"}):this.$router.go(-1)}}},P=M,S=(0,h.A)(P,r,s,!1,null,"5791d9bb",null),F=S.exports},2637:function(a,t,e){var r=e(46587);t.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=r(this.$refs.myDataTable).DataTable({language:{lengthMenu:"Mostrar _MENU_ registros por página",zeroRecords:"No se encontraron resultados",info:"Mostrando _START_ a _END_ de _TOTAL_ registros",infoEmpty:"Mostrando 0 a 0 de 0 registros",infoFiltered:"(filtrado de _MAX_ registros totales)",search:"Buscar",paginate:{first:"Primero",last:"Último",next:"Siguiente",previous:"Anterior"}}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=3687.f7df9448.js.map