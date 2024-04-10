"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[8320],{28320:function(e,a,t){t.r(a),t.d(a,{default:function(){return m}});var s=function(){var e=this,a=e._self._c;return a("section",{staticClass:"pc-container pb-4"},[a("div",{staticClass:"pcoded-content"},[a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col-xl-12"},[a("h5",{staticClass:"text-dark fw-bold"},[a("button",{staticClass:"btn btn-sm mr-2 btn-primary",on:{click:e.goBack}},[a("i",{attrs:{"data-feather":"arrow-left"}})]),e._v("Registro de Nuevo Expediente")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card shadow rounded"},[e._m(0),a("div",{staticClass:"card-body mb-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[e._v("N° de Expediente")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.datosgenerales.tra_number,expression:"datosgenerales.tra_number"}],staticClass:"form-control",class:{"has-error":e.errores.tra_number},attrs:{type:"text",placeholder:"01-2024-OAJ"},domProps:{value:e.datosgenerales.tra_number},on:{input:[function(a){a.target.composing||e.$set(e.datosgenerales,"tra_number",a.target.value)},function(a){return e.validarCampo("tra_number")}]}}),e.errores.tra_number?a("span",{staticClass:"error-message"},[e._v("Ingrese un numero de expediente.")]):e._e()])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[e._v("Nombre del Exp.")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.datosgenerales.tra_name,expression:"datosgenerales.tra_name"}],staticClass:"form-control",class:{"has-error":e.errores.tra_name},attrs:{type:"text",placeholder:"Solicitud de bolsa de trabajo"},domProps:{value:e.datosgenerales.tra_name},on:{input:[function(a){a.target.composing||e.$set(e.datosgenerales,"tra_name",a.target.value)},function(a){return e.validarCampo("tra_name")}]}}),e.errores.tra_name?a("span",{staticClass:"error-message"},[e._v("Ingrese el nombre del expediente.")]):e._e()])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[e._v("Asunto")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.datosgenerales.tra_matter,expression:"datosgenerales.tra_matter"}],staticClass:"form-control",class:{"has-error":e.errores.tra_matter},attrs:{type:"text",placeholder:"Escriba aquí ..."},domProps:{value:e.datosgenerales.tra_matter},on:{input:[function(a){a.target.composing||e.$set(e.datosgenerales,"tra_matter",a.target.value)},function(a){return e.validarCampo("tra_matter")}]}}),e.errores.tra_matter?a("span",{staticClass:"error-message"},[e._v("Ingrese un asunto de oficio")]):e._e()])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[e._v("Oficina de origen")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.datosgenerales.tra_area,expression:"datosgenerales.tra_area"}],staticClass:"form-control",class:{"has-error":e.errores.tra_area},on:{change:[function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.datosgenerales,"tra_area",a.target.multiple?t:t[0])},function(a){return e.validarCampo("tra_area")}]}},[a("option",{staticClass:"py-5",attrs:{value:"",disabled:"",selected:""}},[e._v("-- Seleccione una opción ")]),e._l(e.areas,(function(t){return a("option",{key:t.are_id,staticClass:"py-3",domProps:{value:t.are_id}},[e._v(" "+e._s(t.are_name)+" ")])}))],2),e.errores.tra_area?a("span",{staticClass:"error-message"},[e._v("Seleccione una Ocifina de origen.")]):e._e()])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[e._v("Fecha de llegada")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.datosgenerales.tra_arrival_date,expression:"datosgenerales.tra_arrival_date"}],staticClass:"form-control",class:{"has-error":e.errores.tra_arrival_date},attrs:{type:"date"},domProps:{value:e.datosgenerales.tra_arrival_date},on:{input:[function(a){a.target.composing||e.$set(e.datosgenerales,"tra_arrival_date",a.target.value)},function(a){return e.validarCampo("tra_arrival_date")}]}}),e.errores.tra_arrival_date?a("span",{staticClass:"error-message"},[e._v("Ingrese una fecha de llegada.")]):e._e()])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.datosgenerales.selectOption,expression:"datosgenerales.selectOption"}],staticClass:"form-check-input",attrs:{type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",checked:"",value:"abogado"},domProps:{checked:e._q(e.datosgenerales.selectOption,"abogado")},on:{change:function(a){return e.$set(e.datosgenerales,"selectOption","abogado")}}}),a("label",{staticClass:"form-check-label",attrs:{for:"flexRadioDefault1"}},[e._v(" Abogado")])]),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.datosgenerales.selectOption,expression:"datosgenerales.selectOption"}],staticClass:"form-check-input",attrs:{type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",value:"asistente"},domProps:{checked:e._q(e.datosgenerales.selectOption,"asistente")},on:{change:function(a){return e.$set(e.datosgenerales,"selectOption","asistente")}}}),a("label",{staticClass:"form-check-label",attrs:{for:"flexRadioDefault2"}},[e._v(" Asistente ")])])]),"abogado"===e.datosgenerales.selectOption?a("select",{directives:[{name:"model",rawName:"v-model",value:e.datosgenerales.tra_abogado,expression:"datosgenerales.tra_abogado"}],staticClass:"form-control",class:{"has-error":e.errores.tra_abogado},on:{change:[function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.datosgenerales,"tra_abogado",a.target.multiple?t:t[0])},function(a){return e.validarCampoAboAsi("tra_abogado")}]}},[a("option",{staticClass:"py-5",attrs:{value:"",disabled:"",selected:""}},[e._v("-- Seleccione una opción ")]),e._l(e.abogados,(function(t,s){return a("option",{key:s,staticClass:"py-3",domProps:{value:t.abo_id}},[e._v(" "+e._s(t.nat_nombres)+" "+e._s(t.nat_apellido_paterno)+" "+e._s(t.nat_apellido_materno)+" ")])}))],2):e._e(),e.errores.tra_abogado&&"abogado"===e.datosgenerales.selectOption?a("span",{staticClass:"error-message"},[e._v("Asigne un abogado")]):e._e(),"asistente"===e.datosgenerales.selectOption?a("select",{directives:[{name:"model",rawName:"v-model",value:e.datosgenerales.tra_asistente,expression:"datosgenerales.tra_asistente"}],staticClass:"form-control",class:{"has-error":e.errores.tra_asistente},on:{change:[function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.datosgenerales,"tra_asistente",a.target.multiple?t:t[0])},function(a){return e.validarCampoAboAsi("tra_asistente")}]}},[a("option",{staticClass:"py-5",attrs:{value:"",disabled:"",selected:""}},[e._v("-- Seleccione una opción ")]),e._l(e.asistentes,(function(t,s){return a("option",{key:s,staticClass:"py-3",domProps:{value:t.ass_id}},[e._v(" "+e._s(t.nat_nombres)+" "+e._s(t.nat_apellido_paterno)+" "+e._s(t.nat_apellido_materno)+" ")])}))],2):e._e(),e.errores.tra_asistente&&"asistente"===e.datosgenerales.selectOption?a("span",{staticClass:"error-message"},[e._v("Asigne un asistente")]):e._e()])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[e._v("Expediente de recepción (opcional)")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.datosgenerales.tra_number_ext,expression:"datosgenerales.tra_number_ext"}],staticClass:"form-control",attrs:{type:"text",placeholder:"5670-2017-0-1708-JM-LA-01"},domProps:{value:e.datosgenerales.tra_number_ext},on:{input:function(a){a.target.composing||e.$set(e.datosgenerales,"tra_number_ext",a.target.value)}}})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[e._v("Documento de recepción (opcional)")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.datosgenerales.tra_doc_recep,expression:"datosgenerales.tra_doc_recep"}],staticClass:"form-control",attrs:{type:"text",placeholder:"01-2024-OAJ"},domProps:{value:e.datosgenerales.tra_doc_recep},on:{input:function(a){a.target.composing||e.$set(e.datosgenerales,"tra_doc_recep",a.target.value)}}})])])]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[e._m(1),a("div",{staticClass:"d-flex align-items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.nuevoResponsable,expression:"nuevoResponsable"}],staticClass:"form-control",class:{"has-error":this.tra_person},attrs:{list:"datalistOptions",id:"exampleDataList",placeholder:"Buscar ..."},domProps:{value:e.nuevoResponsable},on:{change:function(a){return e.validarCampoResponsable(e.nuevoResponsable)},input:function(a){a.target.composing||(e.nuevoResponsable=a.target.value)}}}),a("datalist",{attrs:{id:"datalistOptions"}},e._l(e.persons,(function(t,s){return a("option",{key:s,attrs:{"data-id":t.nat_dni}},[e._v(" "+e._s(t.nat_dni)+": "+e._s(t.nat_nombres)+" "+e._s(t.nat_apellido_paterno)+" "+e._s(t.nat_apellido_materno)+" ")])})),0),a("button",{staticClass:"btn btn-outline-dark btn-xl rounded mx-4",attrs:{type:"button"},on:{click:function(a){return e.agregarResponsable()}}},[e._v(" Agregar ")])])])]),0===e.responsables.length?a("span",{staticClass:"error-message"},[e._v("Asigne al menos un responsable")]):e._e(),a("div",{staticClass:"row py-3"},[a("div",{staticClass:"col-md-12"},[0===e.responsables.length?a("div",{staticClass:"alert alert-light",attrs:{role:"alert"}},[e._v(" No se ha asignado ningún responsable ")]):a("div",[a("ul",{staticClass:"list-group list-group-flush"},e._l(e.responsables,(function(t,s){return a("li",{key:s,staticClass:"list-group-item"},[e._v(e._s(t))])})),0),a("button",{staticClass:"btn btn-secondary btn-lg rounded mx-4",attrs:{type:"button"},on:{click:function(a){return e.limpiarResponsable()}}},[e._v(" Limpiar ")])])])]),a("div",{staticClass:"row py-3"},[a("div",{staticClass:"col-md-12 d-flex justify-content-end"},[a("button",{staticClass:"btn btn-primary btn-lg rounded",attrs:{type:"button"},on:{click:e.guardar}},[e._v(" Guardar "),a("i",{attrs:{"data-feather":"arrow-right"}})])])])])])])])])])},r=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"card-header"},[a("div",{staticClass:"row d-flex align-items-center"},[a("div",{staticClass:"col-lg-6 col-md-auto col-sm-12"},[a("h5",[e._v("Datos Generales")])])])])},function(){var e=this,a=e._self._c;return a("label",{staticClass:"form-label",attrs:{for:"exampleDataList"}},[a("i",{staticClass:"text-black",attrs:{"data-feather":"user-plus"}}),e._v(" Asignar Responsables")])}],o=(t(44114),t(90740)),n=t.n(o),i=t(34061),l=(t(11530),t(4874)),d=t.n(l),c={name:"RegistroGeneral",props:{exp:{}},data(){return{trade:null}},created(){this.listarAreas(),this.listarAbogados(),this.listarAsistentes(),this.listarPersons()},mounted(){this.$nextTick((()=>{n().replace()}))},data(){return{areas:[],abogados:[],asistentes:[],persons:[],responsables:[],responsablesId:[],nuevoResponsable:"",persons:[],tra_person:!1,datosgenerales:{tra_number:"",tra_name:"",tra_number_ext:"",tra_doc_recep:"",tra_area:"",tra_matter:"",tra_arrival_date:"",tra_state_law:"P",tra_abogado:"",tra_asistente:"",selectOption:"abogado"},selectedFile:null,fileError:"",errores:{file:!1,tra_number:!1,tra_name:!1,tra_number_ext:!1,tra_area:!1,tra_matter:!1,tra_arrival_date:!1,tra_abogado:!1,tra_asistente:!1}}},methods:{async listarAreas(){this.$showLoadingAlert();try{const e=await(0,i.bQ)("area",this);this.areas=e.data}catch(e){this.$handleApiError(e,"listar areas")}},async listarAbogados(){try{const e=await(0,i.bQ)("lawyer",this);this.abogados=e.data}catch(e){this.$handleApiError(e,"listar abogados")}},async listarAsistentes(){try{const e=await(0,i.bQ)("assistant",this);this.asistentes=e.data}catch(e){this.$handleApiError(e,"listar asistentes")}},async listarPersons(){try{const e=await(0,i.bQ)("person",this);this.persons=e.data}catch(e){this.$handleApiError(e,"listar personas")}finally{this.$closeLoadingAlert()}},async guardar(){if(this.validarCampos()){const a=this.areas.find((e=>e.are_id===this.datosgenerales.tra_area));try{this.loader=!0;const e={tra_number:this.datosgenerales.tra_number,tra_name:this.datosgenerales.tra_name,tra_number_ext:this.datosgenerales.tra_number_ext,tra_matter:this.datosgenerales.tra_matter,tra_arrival_date:this.datosgenerales.tra_arrival_date,tra_state_mp:"F",tra_obs:"F",tra_state_law:this.datosgenerales.tra_state_law,tra_ubication:a.are_name,tra_are_id:this.datosgenerales.tra_area,tra_abo_id:this.datosgenerales.tra_abogado,tra_ass_id:this.datosgenerales.tra_asistente,responsablesId:this.responsablesId},t=await this.$postData("trade/create",this,e);"success"===t.state&&(this.trade=t.data,this.$router.push({name:"oficio/detalle",params:{id:this.trade.tra_id}}),this.loader=!1)}catch(e){console.error("Error en la función guardar:",e),e.response?console.error("Respuesta del servidor:",e.response.data):e.message&&console.error("Mensaje de error:",e.message),this.$handleApiError(e,"crear oficio")}}else console.log("error")},agregarResponsable(){if(this.tra_person=!1,""!==this.nuevoResponsable.trim()){const e=this.persons.find((e=>this.nuevoResponsable.includes(e.nat_dni)));e&&!this.responsablesId.includes(e.per_id)?(this.responsablesId.push(e.per_id),this.responsables.push(this.nuevoResponsable),this.nuevoResponsable=""):this.nuevoResponsable=""}},limpiarResponsable(){this.responsablesId=[],this.responsables=[]},onFileChange(e){this.selectedFile=e.target.files[0]},uploadFile(){if(!this.selectedFile)return void d().fire({icon:"warning",title:"",text:"Tiene que seleccionar un archivo para cargar datos."});let e;e=d().fire({title:" Cargando Datos",text:"Por favor espera...",showConfirmButton:!1,allowOutsideClick:!1,didOpen:()=>d().showLoading()});const a=new FormData;a.append("pdf",this.selectedFile),this.$axios.post(`${this.$store.getters.get__url}/excel/cargar`,a,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${this.$store.getters.get__token}`},params:this.archivo}).then((a=>{e&&e.close(),d().fire({title:"Datos Cargados Correctamente",text:`Las filas que tuvieron error  son: ${a.data.data.join(", ")}`,icon:"success",allowOutsideClick:!1,showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}).then((e=>{e.isConfirmed&&(this.$refs.fileInput.value=null,this.selectedFile=null,this.$router.push({path:"/sisge/expediente/busqueda"}))}))})).catch((a=>{d().fire({icon:"error",title:"Error al cargar datos",text:`Ha ocurrido un error al cargar el archivo:${a.response.data.message}`}),e&&e.close(),console.error(a)}))},validarCampo(e){this.errores[e]=""===this.datosgenerales[e]},validarCampoAboAsi(e){this.errores[e]=""===this.datosgenerales[e],"tra_abogado"===e?(this.errores["tra_asistente"]=!1,this.datosgenerales["tra_asistente"]=""):(this.errores["tra_abogado"]=!1,this.datosgenerales["tra_abogado"]=""),console.log("Asistente: "+this.errores["tra_asistente"]),console.log("Abogado: "+this.errores["tra_abogado"])},validarCampoResponsable(e){""===e&&0===this.responsables.length?this.tra_person=!0:this.tra_person=!1},validarCampos(){return Object.keys(this.errores).forEach((e=>{this.validarCampo(e,e)})),this.tra_person||0!==this.responsables.length||(this.tra_person=!0),this.errores["tra_asistente"]||(this.errores["tra_abogado"]=!1),this.errores["tra_abogado"]||(this.errores["tra_asistente"]=!1),!Object.values(this.errores).some((e=>e))},goBack(){"ABOGADO"===this.$store.getters.get__user.usu_rol?this.$router.push({path:"/oficio/asignados"}):this.$router.go(-1)}}},p=c,u=t(81656),_=(0,u.A)(p,s,r,!1,null,"6813ab34",null),m=_.exports}}]);
//# sourceMappingURL=8320.419f2d82.js.map