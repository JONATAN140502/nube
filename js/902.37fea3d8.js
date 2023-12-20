"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[902],{14902:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"pc-container pb-4"},[e("div",{staticClass:"pcoded-content"},[t._m(0),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card shadow"},[t._m(1),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row mb-3"},[e("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[e("a",{staticClass:"py-0 w-100",attrs:{href:"javascript:void(0)"}},[e("div",{staticClass:"d-flex align-items-center p-2 bg-light rounded",on:{click:function(e){return t.generarPDFexptra()}}},[t._m(2),e("div",{staticClass:"px-2"},[t._v("Expedientes en Trámite")]),e("i",{staticClass:"ml-auto",attrs:{"data-feather":"download"}})])])]),e("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[e("a",{staticClass:"py-0 w-100",attrs:{href:"javascript:void(0)"}},[e("div",{staticClass:"d-flex align-items-center p-2 bg-light rounded",on:{click:function(e){return t.generarPDFexpejec()}}},[t._m(3),e("div",{staticClass:"px-2"},[t._v("Expedientes en Ejecución")]),e("i",{staticClass:"ml-auto",attrs:{"data-feather":"download"}})])])]),e("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[e("a",{staticClass:"py-0 w-100",attrs:{href:"javascript:void(0)"}},[e("div",{staticClass:"d-flex align-items-center p-2 bg-light rounded",on:{click:function(e){return t.generarPDFexps()}}},[t._m(4),e("div",{staticClass:"px-2"},[t._v("Total de Expedientes")]),e("i",{staticClass:"ml-auto",attrs:{"data-feather":"download"}})])])])]),e("div",{staticClass:"row mb-3"},[e("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[e("a",{staticClass:"py-0 w-100",attrs:{href:"javascript:void(0)"}},[e("div",{staticClass:"d-flex align-items-center p-2 bg-light rounded",on:{click:function(e){return t.generarPDFpretensiones()}}},[t._m(5),e("div",{staticClass:"px-2"},[t._v("Total de Reclamación Monetaria")]),e("i",{staticClass:"ml-auto",attrs:{"data-feather":"download"}})])])]),e("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[e("a",{staticClass:"py-0 w-100",attrs:{href:"javascript:void(0)"}},[e("div",{staticClass:"d-flex align-items-center p-2 bg-light rounded",on:{click:function(e){return t.generarPDFejecuciones()}}},[t._m(6),e("div",{staticClass:"px-2"},[t._v("Total de Pretensión en Ejecución")]),e("i",{staticClass:"ml-auto",attrs:{"data-feather":"download"}})])])])])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card shadow"},[t._m(7),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("label",{staticClass:"form-label"},[t._v("Reportes de expediente Desde-Hasta")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.fecha_desde,expression:"fecha_desde"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.fecha_desde},on:{input:function(e){e.target.composing||(t.fecha_desde=e.target.value)}}})])]),e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.fecha_hasta,expression:"fecha_hasta"}],staticClass:"form-control",attrs:{type:"date",min:t.fecha_desde},domProps:{value:t.fecha_hasta},on:{input:function(e){e.target.composing||(t.fecha_hasta=e.target.value)}}})])]),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-primary w-100 rounded",attrs:{disabled:""===t.fecha_hasta},on:{click:function(e){return t.generarPDFintervalos()}}},[t._v("Generar")])])])])])]),e("label",{staticClass:"form-label"},[t._v("Reportes de expedientes por Mes y Año")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"form-group"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedMonth,expression:"selectedMonth"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedMonth=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("--Mes")]),t._l(t.months,(function(a,s){return e("option",{domProps:{value:s+1}},[t._v(t._s(a)+" ")])}))],2)])]),e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"form-group"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedYear,expression:"selectedYear"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedYear=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("--Año")]),t._l(t.years,(function(a){return e("option",{domProps:{value:a}},[t._v(t._s(a))])}))],2)])]),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-primary w-100 rounded",attrs:{disabled:""===t.selectedMonth},on:{click:function(e){t.generarPDFmesaño()}}},[t._v("Generar")])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[t._v("Reporte de expedientes por Materia")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-10"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.rep_materia,expression:"rep_materia"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.rep_materia=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("--Seleccione una Materia ")]),t._l(t.materias,(function(a){return e("option",{key:a.mat_id,domProps:{value:a.mat_id}},[t._v(t._s(a.mat_nombre))])}))],2)]),e("div",{staticClass:"col-md-2"},[e("button",{staticClass:"btn btn-success w-100 rounded",attrs:{type:"button",disabled:""===t.rep_materia},on:{click:function(e){return t.generarPDFmateria()}}},[e("i",{attrs:{"data-feather":"download"}})])])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[t._v("Reporte de expedientes por Pretensión")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-10"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.rep_pretension,expression:"rep_pretension"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.rep_pretension=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("--Seleccione una Pretensión ")]),t._l(t.pretensiones,(function(a){return e("option",{key:a.pre_id,domProps:{value:a.pre_id}},[t._v(t._s(a.pre_nombre))])}))],2)]),e("div",{staticClass:"col-md-2"},[e("button",{staticClass:"btn btn-success w-100 rounded",attrs:{type:"button",disabled:""===t.rep_pretension},on:{click:function(e){return t.generarPDFpretension()}}},[e("i",{attrs:{"data-feather":"download"}})])])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[t._v("Reporte de expedientes asignados a un Abogado")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-10"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.rep_abogado,expression:"rep_abogado"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.rep_abogado=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("--Seleccione un Abogado ")]),t._l(t.abogados,(function(a){return e("option",{key:a.nat_dni,domProps:{value:a.abo_id}},[t._v(t._s(t.nombreCompleto(a)))])}))],2)]),e("div",{staticClass:"col-md-2"},[e("button",{staticClass:"btn btn-success w-100 rounded",attrs:{type:"button",disabled:""===t.rep_abogado},on:{click:function(e){return t.generarPDFexpsAbogado()}}},[e("i",{attrs:{"data-feather":"download"}})])])])])])])])])])])])])},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row mb-4"},[e("h5",{staticClass:"text-dark fw-bold"},[t._v("Generacion de Reportes")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header"},[e("h5",[t._v("Reportes Automatizados")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-items-center justify-content-center bg-primary rounded-pill p-2 text-white"},[e("i",{attrs:{"data-feather":"file-text"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-items-center justify-content-center bg-primary rounded-pill p-2 text-white"},[e("i",{attrs:{"data-feather":"file-text"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-items-center justify-content-center bg-primary rounded-pill p-2 text-white"},[e("i",{attrs:{"data-feather":"file-text"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-items-center justify-content-center bg-primary rounded-pill p-2 text-white"},[e("i",{attrs:{"data-feather":"file-text"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-items-center justify-content-center bg-primary rounded-pill p-2 text-white"},[e("i",{attrs:{"data-feather":"file-text"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header"},[e("h5",[t._v("Reportes Personalizados")])])}],i=(a(57658),a(46229),a(17330),a(62062),a(63822)),o=a(44161),n=a(98164),l=a.n(n),c=a(42492),d=a.n(c),p={name:"reporte",data(){const t=(new Date).getFullYear(),e=[];for(let a=t;a>=2e3;a--)e.push(a);return{selectedYear:t,years:e,selectedMonth:"",months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],rep_materia:"",materias:[],rep_especialidad:"",especialidades:[],rep_pretension:"",pretensiones:[],abogados:[],rep_abogado:"",fecha_desde:"",fecha_hasta:"",distritos:[],provincias:[],id_distrito:"",id_provincia:""}},updated(){l().replace()},mounted(){this.cargarDatos();(new Date).getFullYear();for(let t=2e3;t<=2030;t++)this.years.push(t)},computed:{isGenerarEnabled(){return""!==this.rep_materia}},methods:{...(0,i.nv)(["get","post"]),async listarMaterias(){try{this.$showLoadingAlert();const t=await this.$getData("subject",this);this.materias=t.data,this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"listar materias")}},async listarPretensiones(){try{const t=await this.$getData("claim",this);this.pretensiones=t.data}catch(t){this.$handleApiError(t,"listar pretensiones")}},async listarAbogados(){try{const t=await this.$getData("lawyer",this);this.abogados=t.data}catch(t){this.$handleApiError(t,"listar abogados")}},async listardistricts(){try{const t=await this.$postData("reportes/distritos",this);this.distritos=t.distritos,this.provincias=t.provincias}catch(t){this.$handleApiError(t,"listar distritos")}},async cargarDatos(){try{await this.listarMaterias(),setTimeout((async()=>{await this.listarPretensiones(),await this.listarAbogados(),await this.listardistricts(),console.log("Todas las funciones cargadas exitosamente")}),500)}catch(t){this.$handleApiError(t,"cargar datos")}},nombreCompleto(t){return`${t.nat_nombres} ${t.nat_apellido_paterno} ${t.nat_apellido_materno}`},generarPDFexptra(){this.generatePDFWithAlert("/reportespfd/pdfexptramite",{})},generarPDFexpsAbogado(){this.generatePDFWithAlert("/reportespfd/pdfexpsabogado",{abo_id:this.rep_abogado})},generarPDFexpejec(){this.generatePDFWithAlert("/reportespfd/pdfexpejecucion",{})},generarPDFexps(){this.generatePDFWithAlert("/reportespfd/pdfexps",{})},"generarPDFmesaño"(){this.generatePDFWithAlert("/reportespfd/pdffechaaño",{mes:this.selectedMonth,"año":this.selectedYear})},generarPDFmateria(){this.generatePDFWithAlert("/reportespfd/pdfmateria",{exp_materia:this.rep_materia})},generarPDFpretension(){this.generatePDFWithAlert("/reportespfd/pdfpretension",{exp_pretension:this.rep_pretension})},generarPDFpretensiones(){this.generatePDFWithAlert("/reportespfd/pdfpretensiones",{})},generarPDFejecuciones(){this.generatePDFWithAlert("/reportespfd/pdfejecuciones",{})},generarPDFintervalos(){this.generatePDFWithAlert("/reportespfd/pdffechas",{fechaDesde:this.fecha_desde,fechaHasta:this.fecha_hasta})},generarPDFintervalos(){this.generatePDFWithAlert("/reportespfd/pdffechas",{fechaDesde:this.fecha_desde,fechaHasta:this.fecha_hasta})},generarPDFdistrito(){this.generatePDFWithAlert("/reportespfd/pdfdistrito",{distrito:this.id_distrito})},async generatePDFWithAlert(t,e){const a=this.$store.getters.get__url+t,s=this.$store.getters.get__token,r=this.$store.getters.get__idusu;let i;i=d().fire({title:"Gerenando Reporte",text:"Por favor espera...",showConfirmButton:!1,allowOutsideClick:!1,didOpen:()=>d().showLoading()}),o.Z.get(a,{responseType:"blob",params:{usu_id:r,...e},headers:{Authorization:`Bearer ${s}`}}).then((t=>{i&&i.close(),d().fire({title:"Reporte generado",text:"Presiona OK para abrir el Reporte.",icon:"success",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}).then((e=>{if(e.isConfirmed){const e=new Blob([t.data],{type:t.headers["content-type"]}),a=window.URL.createObjectURL(e);window.open(a,"_blank"),window.URL.revokeObjectURL(a)}}))})).catch((t=>{d().fire({icon:"error",title:"Error",text:"No se pudo generar el Reporte, Vuelve a Intentar."}),i&&i.close(),console.error(t)}))}}},u=p,v=a(1001),m=(0,v.Z)(u,s,r,!1,null,"7aa72c04",null),f=m.exports}}]);
//# sourceMappingURL=902.37fea3d8.js.map