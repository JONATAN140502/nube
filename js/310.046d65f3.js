"use strict";(self["webpackChunksisge"]=self["webpackChunksisge"]||[]).push([[310],{80310:function(t,a,s){s.r(a),s.d(a,{default:function(){return P}});var e=function(){var t=this,a=t._self._c;return a("section",{staticClass:"pc-container pb-4"},[0==t.registrar?a("div",{staticClass:"pcoded-content pt-4"},[a("div",{staticClass:"row mb-4"},[a("h5",{},[a("button",{staticClass:"btn btn-sm mr-2 btn-secondary",on:{click:t.goBack}},[a("i",{attrs:{"data-feather":"arrow-left"}})]),a("span",{staticClass:"text-primary"},[t._v("Informacion")]),t._v(" | "),a("span",{staticClass:"text-secondary"},[t._v(" "+t._s(t.personaNombreCompleto()))])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body px-5"},[a("div",{staticClass:"row py-2 border-bottom"},[t._m(0),a("div",{staticClass:"col-md-9"},[a("p",{staticClass:"text-secondary"},[t._v(t._s(t.personaNombreCompleto()))])])]),a("div",{staticClass:"row py-2 border-bottom"},[t._m(1),a("div",{staticClass:"col-md-9"},[a("p",{staticClass:"text-secondary"},[t._v(t._s(t.correo()))])])]),a("div",{staticClass:"row py-2 border-bottom"},[t._m(2),a("div",{staticClass:"col-md-9"},[a("p",{staticClass:"text-secondary"},[t._v(t._s(t.telefono()))])])]),a("div",{staticClass:"row py-2 border-bottom"},[t._m(3),a("div",{staticClass:"col-md-9"},[a("p",{staticClass:"text-secondary"},[t._v(t._s(t.direccionData()))])])]),a("div",{staticClass:"row py-2 border-bottom"},[t._m(4),a("div",{staticClass:"col-md-9"},[a("p",{staticClass:"text-secondary"},[t._v(t._s(t.persona.tipo_persona))])])]),a("div",{staticClass:"row py-2 border-bottom"},[t._m(5),a("div",{staticClass:"col-md-9"},[a("p",{staticClass:"text-secondary"},[t._v(t._s(t.persona.tipo_procesal))])])])])])])]),"Natural"===t.persona.tipo_persona?a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"alert alert-primary text-primary",attrs:{role:"alert"}},[t._v(" Sucesores "),a("button",{staticClass:"btn btn-success btn-sm rounded px-3 float-right",attrs:{type:"button"},on:{click:function(a){return t.cambio()}}},[t._v(" Agregar ")])])])]),a("div",{staticClass:"table-responsive"},[a("table",{ref:"dataTable",staticClass:"table table-hover m-b-0",attrs:{id:"table","aria-describedby":"table-expedientes"}},[t._m(6),a("tbody",t._l(t.sucesores,(function(s,e){return a("tr",{key:e},[a("td",[t._v(t._s(e+1))]),a("td",[a("a",{staticClass:"btn-link",attrs:{href:"javascript:void(0)"}},[t._v(" "+t._s(s.sucesor.nat_dni)+" ")])]),a("td",[t._v(t._s(t.capitalizeWords(s.sucesor.nat_nombres)))]),a("td",[t._v(t._s(t.capitalizeWords(s.sucesor.nat_apellido_paterno))+" "+t._s(t.capitalizeWords(s.sucesor.nat_apellido_materno)))]),a("td",[t._v(t._s(s.sucesor.nat_telefono))]),a("td",[t._v(t._s(s.sucesor.nat_correo))]),t._m(7,!0)])})),0)])])])])])]):t._e(),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12"},[a("div",{staticClass:"card"},[t._m(8),a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{ref:"dataTable",staticClass:"table table-hover m-b-0",attrs:{id:"table","aria-describedby":"table-expedientes"}},[t._m(9),a("tbody",t._l(t.expedientes,(function(s,e){return a("tr",{key:e},[a("td",[t._v(t._s(e+1))]),a("td",[a("a",{staticClass:"btn-link",attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.redirectDetalle(s.exp_id)}}},[t._v(" "+t._s(s.exp_numero)+" ")])]),a("td",[t._v(t._s(t.$formatDate(s.exp_fecha_inicio)))]),a("td",[t._v(t._s(s.tipo))]),a("td",[t._v(t._s(s.materia))]),a("td",[t._v(t._s(s.pretension))]),a("td",[t._v(t._s(t.formatFecha(s.creacion)))]),a("td",[a("span",{class:t.badgeClass(s.estado)},[t._v(" "+t._s(s.estado)+" ")])])])})),0)])])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card shadow rounded"},[t._m(10),0===t.historiales.length?a("p",{staticClass:"text-center text-secondary py-4"},[t._v("Sin datos en el historial.")]):a("div",{staticClass:"card-body px-5 py-2"},[a("div",{staticClass:"row px-3"},[a("ul",{staticClass:"sessions"},t._l(t.historiales,(function(s){return a("li",{key:s.his_id},[a("div",{staticClass:"row"},[a("div",{staticClass:"left col-md-2"},[a("div",{staticClass:"time"},[t._v(t._s(s.his_fecha_hora))]),a("p",[t._v(t._s(s.his_medio_comuniacion))])]),a("p",{staticClass:"col-md-8"},[t._v(t._s(s.his_detalle))])])])})),0)])])])])])]):a("SucesorC",{attrs:{idPersona:t.idPersona},on:{cambio:t.cambio,cambio1:t.cambio1}})],1)},r=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-3 pl-1"},[a("p",{staticClass:"text-dark"},[t._v("Nombre completo")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-3 pl-1"},[a("p",{staticClass:"text-dark"},[t._v("Correo electronico")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-3 pl-1"},[a("p",{staticClass:"text-dark"},[t._v("Telefono")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-3 pl-1"},[a("p",{staticClass:"text-dark"},[t._v("Direccion")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-3 pl-1"},[a("p",{staticClass:"text-dark"},[t._v("Tipo de Persona")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-3 pl-1"},[a("p",{staticClass:"text-dark"},[t._v("Tipo Procesal")])])},function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("N° Documento")]),a("th",[t._v("Nombres")]),a("th",[t._v("Apellidos")]),a("th",[t._v("Telefono")]),a("th",[t._v("Correo")]),a("th",[t._v("Estado")])])])},function(){var t=this,a=t._self._c;return a("td",[a("span",[t._v(" SUCESOR ")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-header"},[a("h5",[t._v("Expedientes asociados")])])},function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("N° de Expediente")]),a("th",[t._v("Fecha de Inicio")]),a("th",[t._v("Tipo")]),a("th",[t._v("Materia/Delito")]),a("th",[t._v("Pretensión")]),a("th",[t._v("Fecha de Registro")]),a("th",[t._v("Estado")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-header"},[a("h5",[t._v("Historial de Interacciones")])])}],o=(s(44114),s(90740)),i=s.n(o),l=s(25800),n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"row d-flex align-items-center"},[t._m(0),a("div",{staticClass:"col-xl-6 col-sm-12"},[a("div",{staticClass:"d-flex justify-content-end"},[a("button",{staticClass:"btn btn-outline-primary btn-lg rounded px-5",attrs:{type:"button"},on:{click:t.mostrarModal}},[t._v(" Lista ")])])])])]),a("div",{staticClass:"card-body"},[t._m(1),a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"dni"}},[t._v("DNI")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.procesal.nat_dni,expression:"procesal.nat_dni"}],staticClass:"form-control",attrs:{type:"text",id:"dni",placeholder:"12345678"},domProps:{value:t.procesal.nat_dni},on:{keyup:function(a){return t.filterpersona()},input:function(a){a.target.composing||t.$set(t.procesal,"nat_dni",a.target.value)}}})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Apellido Paterno")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.procesal.nat_apellido_paterno,expression:"procesal.nat_apellido_paterno"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Alarcon"},domProps:{value:t.procesal.nat_apellido_paterno},on:{input:function(a){a.target.composing||t.$set(t.procesal,"nat_apellido_paterno",a.target.value)}}})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Apellido Materno")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.procesal.nat_apellido_materno,expression:"procesal.nat_apellido_materno"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ramirez"},domProps:{value:t.procesal.nat_apellido_materno},on:{input:function(a){a.target.composing||t.$set(t.procesal,"nat_apellido_materno",a.target.value)}}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Nombres")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.procesal.nat_nombres,expression:"procesal.nat_nombres"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Jhon Doe"},domProps:{value:t.procesal.nat_nombres},on:{input:function(a){a.target.composing||t.$set(t.procesal,"nat_nombres",a.target.value)}}})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Telefono")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.procesal.nat_telefono,expression:"procesal.nat_telefono"}],staticClass:"form-control",attrs:{type:"text",placeholder:"980560345"},domProps:{value:t.procesal.nat_telefono},on:{input:function(a){a.target.composing||t.$set(t.procesal,"nat_telefono",a.target.value)}}})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Email ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.procesal.nat_correo,expression:"procesal.nat_correo"}],staticClass:"form-control",attrs:{type:"text",placeholder:"example@gmail.com"},domProps:{value:t.procesal.nat_correo},on:{input:function(a){a.target.composing||t.$set(t.procesal,"nat_correo",a.target.value)}}})])])])]),t._m(2),a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"departamento"}},[t._v("Departamento")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.procesal.dep_id,expression:"procesal.dep_id"}],staticClass:"form-control",attrs:{id:"departamento"},on:{change:[function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.procesal,"dep_id",a.target.multiple?s:s[0])},t.cargarProvinciasConRetraso]}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Seleccione una opción")]),t._l(t.departamentos,(function(s){return a("option",{domProps:{value:s.dep_id}},[t._v(t._s(s.dep_nombre)+" ")])}))],2)])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"provincia"}},[t._v("Provincia")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.procesal.pro_id,expression:"procesal.pro_id"}],staticClass:"form-control",attrs:{id:"provincia"},on:{change:[function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.procesal,"pro_id",a.target.multiple?s:s[0])},t.cargarDistritosConRetraso]}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Seleccione una opción")]),t._l(t.provincias,(function(s){return a("option",{domProps:{value:s.pro_id}},[t._v(t._s(s.pro_nombre))])}))],2)])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"distrito"}},[t._v("Distrito")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.procesal.dis_id,expression:"procesal.dis_id"}],staticClass:"form-control",attrs:{id:"distrito"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.procesal,"dis_id",a.target.multiple?s:s[0])}}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Seleccione una opción")]),t._l(t.distritos,(function(s){return a("option",{domProps:{value:s.dis_id}},[t._v(t._s(s.dis_nombre)+" ")])}))],2)])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"calleAvenida"}},[t._v("Calle, Avenida, Mz, S/N")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.procesal.dir_calle_av,expression:"procesal.dir_calle_av"}],staticClass:"form-control",attrs:{type:"text",id:"calleAvenida",placeholder:"Av. Peru 2345"},domProps:{value:t.procesal.dir_calle_av},on:{input:function(a){a.target.composing||t.$set(t.procesal,"dir_calle_av",a.target.value)}}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"ml-auto"},[a("button",{staticClass:"btn btn-success btn-lg rounded px-4",on:{click:t.addPart}},[t._v(" "+t._s(null===t.editingIndex?"Guardar":"Actualizar")+" ")]),a("button",{staticClass:"btn btn-secondary btn-lg rounded mx-2",attrs:{type:"button"},on:{click:t.anteriorParte}},[a("i",{attrs:{"data-feather":"arrow-left"}}),t._v(" Anterior")]),a("button",{staticClass:"btn btn-primary btn-lg rounded",attrs:{type:"button"},on:{click:t.siguienteParte}},[t._v(" Guardar"),a("i",{attrs:{"data-feather":"arrow-right"}})])])])])])])]),t.showModal?a("div",{staticClass:"modal",on:{click:t.cerrarModal}},[a("div",{staticClass:"modal-content card border-0",on:{click:function(t){t.stopPropagation()}}},[t._m(3),a("div",{staticClass:"card-body p-0"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table",attrs:{id:"table"}},[t._m(4),a("tbody",t._l(t.personas,(function(s,e){return a("tr",{key:e},[a("td",{staticClass:"pl-4"},[t._v(t._s(e+1))]),a("td",[t._v(t._s(s.nat_dni||s.jur_ruc))]),a("td",[t._v(t._s(s.nat_nombres||s.jur_razon_social))]),a("td",[t._v(t._s(s.nat_telefono||s.jur_telefono))]),a("td",[t._v(t._s(s.nat_correo||s.jur_correo))]),a("td",[a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.editarPersona(e)}}},[t._v("Editar")]),a("a",{staticClass:"ml-2 text-danger",attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.eliminarPersona(e)}}},[t._v(" Eliminar")])])])})),0)])])]),a("div",{staticClass:"card-footer border-0 pt-2 pb-4"},[a("div",{staticClass:"d-flex"},[a("button",{staticClass:"btn btn-secondary btn-lg ml-auto px-5 rounded",on:{click:t.cerrarModal}},[t._v("Cerrar")])])])])]):t._e()])},c=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-xl-6 col-sm-12"},[a("h5",[t._v(" Registrar Sucesores")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"alert alert-primary text-primary",attrs:{role:"alert"}},[t._v(" Informacion Personal ")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"row my-2"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"alert alert-primary text-primary",attrs:{role:"alert"}},[t._v(" Direccion ")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-header"},[a("h5",{staticClass:"text-center"},[t._v("Lista de Demandantes")])])},function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",{staticClass:"pl-4"},[t._v("#")]),a("th",[t._v("Documento")]),a("th",[t._v("Nombre")]),a("th",[t._v("Telefono")]),a("th",[t._v("Email")]),a("th",[t._v("Opciones")])])])}],d=s(98355),p=s(4874),_=s.n(p),v=s(38280),u=s(34061),h=s(46587),m={name:"RegistroProcesal",mounted(){this.$nextTick((()=>{i().replace(),this.initDataTable()}))},props:{idPersona:{type:String}},data(){return{dataTable:null,editingIndex:null,departamentos:[],provincias:[],distritos:[],procesal:{dir_calle_av:"",dis_id:"",pro_id:"",dep_id:"",nat_dni:"",nat_apellido_paterno:"",nat_apellido_materno:"",nat_nombres:"",nat_telefono:"",nat_correo:"",jur_ruc:"",jur_razon_social:"",jur_telefono:"",jur_correo:"",jur_rep_legal:"",tipo:"",procesal:"",condicion:""},personas:[],errores:{tipo_procesal:!1,tipo_persona:!1,condicion1:!1,nat_dni:!1,nat_apellido_materno:!1,nat_apellido_materno:!1,nat_nombres:!1,jur_ruc:!1,jur_razon_social:!1,dep_id:!1,pro_id:!1,dis_id:!1,dir_calle_av:!1},modalVisible:!1,showModal:!1}},async created(){await this.cargarDepartamentos()},methods:{...(0,v.i0)(["get","post"]),editarPersona(t){this.procesal={...this.personas[t]},this.editingIndex=t},eliminarPersona(t){this.personas.splice(t,1)},addPart(){null!==this.editingIndex?(this.personas.splice(this.editingIndex,1,{...this.procesal}),this.editingIndex=null,this.procesal={dir_calle_av:"",dis_id:"",pro_id:"",dep_id:"",nat_dni:"",nat_apellido_paterno:"",nat_apellido_materno:"",nat_nombres:"",nat_telefono:"",nat_correo:"",jur_ruc:"",jur_razon_social:"",jur_telefono:"",jur_correo:"",jur_rep_legal:"",tipo:"",procesal:"",condicion:""}):(this.personas.push({...this.procesal}),this.procesal={dir_calle_av:"",dis_id:"",pro_id:"",dep_id:"",nat_dni:"",nat_apellido_paterno:"",nat_apellido_materno:"",nat_nombres:"",nat_telefono:"",nat_correo:"",jur_ruc:"",jur_razon_social:"",jur_telefono:"",jur_correo:"",jur_rep_legal:"",tipo:"",procesal:"",condicion:""})},async cargarDepartamentos(){try{const t=await(0,u.bQ)("department",this);this.departamentos=t.data,this.provincias=[],this.distritos=[]}catch(t){this.$handleApiError(t,"cargar departamentos")}},async cargarProvincias(){if(this.procesal.dep_id)try{const t={dep_id:this.procesal.dep_id},a=await(0,u.LS)("department/provincias",this,t);this.provincias=a.data}catch(t){this.$handleApiError(t,"cargar provincias")}},async cargarDistritos(){if(this.procesal.pro_id)try{const t={pro_id:this.procesal.pro_id},a=await(0,u.LS)("department/distritos",this,t);this.distritos=a.data}catch(t){this.$handleApiError(t,"cargar provincias")}},cargarProvinciasConRetraso(){setTimeout((()=>{this.cargarProvincias()}),500)},cargarDistritosConRetraso(){setTimeout((()=>{this.cargarDistritos()}),1e3)},anteriorParte:function(){this.$emit("cambio")},async siguienteParte(){if(0===this.personas.length)return _().fire("Registre  una Persona","Registre","warning"),console.info("debe registrar por lo menos una persona");try{const t={fallecido:this.idPersona,Personas:this.personas},a=await(0,u.LS)("personas/storesucesor",this,t);0==a.state?(_().fire("Datos registrados","Los datos se han registrado correctamente.","success"),this.$emit("cambio1")):_().fire("Falló la actualización","Verifique los datos","error")}catch(t){this.$handleApiError(t,"cargar provincias")}},mostrarModal(){this.initDataTable(),this.showModal=!0},cerrarModal(){this.showModal=!1},async filterpersona(){let t;if(8===this.procesal.nat_dni.length){if(8===this.procesal.nat_dni.length){t=_().fire({title:"Buscando",text:"Por favor espera...",showConfirmButton:!1,allowOutsideClick:!1,didOpen:()=>_().showLoading()});try{const a=await d.A.post(`${this.$store.getters.get__url}/proceeding/filterprocesal`,{doc:this.procesal.nat_dni,tipo:"NATURAL"},{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});t&&t.close(),0==a.data.state?(_().fire("Datos Encontrados","Ok","success"),this.procesal.nat_apellido_paterno=a.data.data.nat_apellido_paterno,this.procesal.nat_apellido_materno=a.data.data.nat_apellido_materno,this.procesal.nat_nombres=a.data.data.nat_nombres,this.procesal.nat_telefono=a.data.data.nat_telefono,this.procesal.nat_correo=a.data.data.nat_correo,this.procesal.dep_id=a.data.dir.dep_id,this.cargarProvincias(),this.procesal.pro_id=a.data.dir.pro_id,this.cargarDistritos(),this.procesal.dis_id=a.data.dir.dis_id,this.procesal.dir_calle_av=a.data.dir.dir_calle_av):(_().fire("Datos No encontrados","Registre","warning"),this.procesal.dir_calle_av="",this.procesal.dis_id="",this.procesal.pro_id="",this.procesal.dep_id="",this.procesal.nat_apellido_paterno="",this.procesal.nat_apellido_materno="",this.procesal.nat_nombres="",this.procesal.nat_telefono="",this.procesal.nat_correo="")}catch(a){t&&t.close(),_().fire("Datos No encontrados","Registre","warning"),this.procesal.dir_calle_av="",this.procesal.dis_id="",this.procesal.pro_id="",this.procesal.dep_id="",this.procesal.nat_apellido_paterno="",this.procesal.nat_apellido_materno="",this.procesal.nat_nombres="",this.procesal.nat_telefono="",this.procesal.nat_correo=""}}}else if(11===this.procesal.jur_ruc.length){t=_().fire({title:"Buscando",text:"Por favor espera...",showConfirmButton:!1,allowOutsideClick:!1,didOpen:()=>_().showLoading()});try{const a=await d.A.post(`${this.$store.getters.get__url}/proceeding/filterprocesal`,{doc:this.procesal.jur_ruc,tipo:this.procesal.tipo},{headers:{Authorization:`Bearer ${this.$store.getters.get__token}`}});t&&t.close(),0==a.data.state?(_().fire("Datos Encontrados","Ok","success"),this.procesal.jur_razon_social=a.data.data.jur_razon_social,this.procesal.jur_telefono=a.data.data.jur_telefono,this.procesal.jur_correo=a.data.data.jur_correo,this.procesal.jur_rep_legal=a.data.data.jur_rep_legal,this.procesal.dep_id=a.data.dir.dep_id,this.cargarProvincias(),this.procesal.pro_id=a.data.dir.pro_id,this.cargarDistritos(),this.procesal.dis_id=a.data.dir.dis_id,this.procesal.dir_calle_av=a.data.dir.dir_calle_av):(_().fire("Datos No encontrados","Registre","warning"),this.procesal.dir_calle_av="",this.procesal.dis_id="",this.procesal.pro_id="",this.procesal.dep_id="",this.procesal.jur_razon_social="",this.procesal.jur_telefono="",this.procesal.jur_correo="",this.procesal.jur_rep_legal="")}catch(a){t&&t.close(),_().fire("Datos No encontrados","Registre","warning"),this.procesal.dir_calle_av="",this.procesal.dis_id="",this.procesal.pro_id="",this.procesal.dep_id="",this.procesal.jur_razon_social="",this.procesal.jur_telefono="",this.procesal.jur_correo="",this.procesal.jur_rep_legal=""}}},initDataTable(){this.$nextTick((()=>{this.dataTable=h("#table").DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}}),i().replace()}))}}},f=m,C=s(81656),b=(0,C.A)(f,n,c,!1,null,"0c45725e",null),g=b.exports,y={name:"expedienteAll",created(){this.idPersona=this.$route.params.id},components:{SucesorC:g},data(){return{persona:{},direccion:{},idPersona:null,historiales:[],expedientes:[],sucesores:[],registrar:!1}},mounted(){this.$nextTick((()=>{i().replace()})),this.cargarDetallesPersonas(),this.cargarHistorial(),this.cargarSucesor()},methods:{cambio(){this.registrar=!this.registrar},cambio1(){this.registrar=!this.registrar,this.cargarSucesor()},capitalizeWords(t){return t.toLowerCase().split(" ").map((t=>t.charAt(0).toUpperCase()+t.slice(1))).join(" ")},badgeClass:l.U7,redirectDetalle(t){this.$router.push({name:"expediente/detalle",params:{id:t}})},formatFecha(t){const a=new Date(t),s={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};return a.toLocaleDateString("es-ES",s)},async cargarDetallesPersonas(){try{this.$showLoadingAlert();const t={per_id:this.idPersona},a=await this.$postData("personas/detallePersona",this,t);this.persona=a.data.persona,this.direccion=a.data.direccion,this.expedientes=a.data.expedientes,this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"cargar detalles demandante")}},async cargarHistorial(){try{const t={per_id:this.idPersona},a=await this.$postData("history/showPerson",this,t);this.historiales=a.data}catch(t){this.$handleApiError(t,"cargar hisorial del demandante")}},async cargarSucesor(){try{const t={id:this.idPersona},a=await this.$postData("personas/sucesor",this,t);this.sucesores=a.data}catch(t){this.$handleApiError(t,"cargar sucesores")}},personaNombreCompleto(){return"Natural"===this.persona.tipo_persona?`${this.persona.nat_nombres} ${this.persona.nat_apellido_paterno} ${this.persona.nat_apellido_materno}`:this.persona.jur_razon_social},correo(){let t;t="Natural"===this.persona.tipo_persona?this.persona.nat_correo:this.persona.jur_correo;const a=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return t&&a.test(t)?t:"-----"},telefono(){return"Natural"===this.persona.tipo_persona?"0"===this.persona.nat_telefono||""===this.persona.nat_telefono?"-----":this.persona.nat_telefono:this.persona.jur_telefono},direccionData(){return`${this.direccion.dep_nombre}, ${this.direccion.pro_nombre}, ${this.direccion.dis_nombre}, ${this.direccion.dir_calle_av}`},avatar(){const t=this.persona.nat_nombres||"",a=this.persona.nat_apellido_paterno||"",s=t.charAt(0),e=a.charAt(0);return`${s}${e}`},goBack(){this.$router.go(-1)}}},x=y,w=(0,C.A)(x,e,r,!1,null,"3407f44d",null),P=w.exports}}]);
//# sourceMappingURL=310.046d65f3.js.map