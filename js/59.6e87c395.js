"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[59],{27059:function(a,t,e){e.r(t),e.d(t,{default:function(){return m}});var s=function(){var a=this,t=a._self._c;return t("section",{staticClass:"pc-container pb-4"},[t("div",{staticClass:"pcoded-content"},[a._m(0),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"card shadow"},[t("div",{staticClass:"card-header border-0 mb-0"},[t("div",{staticClass:"row tabs"},[t("div",{staticClass:"col-md-auto tabs-div"},[t("a",{staticClass:"btn btn-lg rounded tabs-link",class:{active:!0===a.showalerta},attrs:{href:"javascript:void(0)"},on:{click:a.mostrarAlerta}},[a._v("Agendar Alerta")])]),t("div",{staticClass:"col-md-auto tabs-div"},[t("a",{staticClass:"btn btn-lg rounded tabs-link",class:{active:!0===a.showaudiencia},attrs:{href:"javascript:void(0)"},on:{click:a.mostrarAudiencia}},[a._v("Agendar Audiencia")])])])]),t("div",{directives:[{name:"show",rawName:"v-show",value:!0===a.showalerta,expression:"showalerta === true"}]},[t("div",{staticClass:"card-body py-0 my-0"},[a._m(1),t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-4 col-md-8 col-sm-12"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("N° Expediente")]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.expediente,expression:"expediente"}],staticClass:"form-control border-0",attrs:{type:"text",disabled:""},domProps:{value:a.expediente},on:{input:function(t){t.target.composing||(a.expediente=t.target.value)}}})])])])]),t("div",{staticClass:"col-xl-4 col-md-8 col-sm-12"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Demandande")]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.demandante,expression:"demandante"}],staticClass:"form-control border-0",attrs:{type:"text",disabled:""},domProps:{value:a.demandante},on:{input:function(t){t.target.composing||(a.demandante=t.target.value)}}})])])])]),t("div",{staticClass:"col-xl-4 col-md-8 col-sm-12"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Demandado")]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.demandado,expression:"demandado"}],staticClass:"form-control border-0",attrs:{type:"text",placeholder:"N° Expediente",disabled:""},domProps:{value:a.demandado},on:{input:function(t){t.target.composing||(a.demandado=t.target.value)}}})])])])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Fecha de vencimiento")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.alerta.ale_fecha_vencimiento,expression:"alerta.ale_fecha_vencimiento"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:a.alerta.ale_fecha_vencimiento},on:{input:function(t){t.target.composing||a.$set(a.alerta,"ale_fecha_vencimiento",t.target.value)}}})])]),t("div",{staticClass:"col-md-8"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"Detalles"}},[a._v("Detalles o notas sobre la alerta")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.alerta.ale_descripcion,expression:"alerta.ale_descripcion"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.alerta.ale_descripcion},on:{input:function(t){t.target.composing||a.$set(a.alerta,"ale_descripcion",t.target.value)}}})])])])]),t("div",{staticClass:"card-footer border-0 pt-1"},[t("div",{staticClass:"row"},[t("div",{staticClass:"d-flex justify-content-end"},[t("button",{staticClass:"btn btn-lg btn-secondary px-3 mx-2",on:{click:a.goBack}},[t("i",{attrs:{"data-feather":"arrow-left"}}),a._v(" Volver atras ")]),t("button",{staticClass:"btn btn-lg btn-primary px-4",on:{click:a.guardarAlerta}},[a._v("Guardar Alerta")])])])])]),t("div",{directives:[{name:"show",rawName:"v-show",value:!0===a.showaudiencia,expression:"showaudiencia === true"}]},[t("div",{staticClass:"card-body py-0 my-0"},[a._m(2),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("N° Expediente")]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.expediente,expression:"expediente"}],staticClass:"form-control border-0",attrs:{type:"text",disabled:""},domProps:{value:a.expediente},on:{input:function(t){t.target.composing||(a.expediente=t.target.value)}}})])])])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Demandande")]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.demandante,expression:"demandante"}],staticClass:"form-control border-0",attrs:{type:"text",disabled:""},domProps:{value:a.demandante},on:{input:function(t){t.target.composing||(a.demandante=t.target.value)}}})])])])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Demandado")]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.demandado,expression:"demandado"}],staticClass:"form-control border-0",attrs:{type:"text",placeholder:"N° Expediente",disabled:""},domProps:{value:a.demandado},on:{input:function(t){t.target.composing||(a.demandado=t.target.value)}}})])])])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Lugar")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.audiencia.au_lugar,expression:"audiencia.au_lugar"}],staticClass:"form-control border-0",attrs:{type:"text",disabled:""},domProps:{value:a.audiencia.au_lugar},on:{input:function(t){t.target.composing||a.$set(a.audiencia,"au_lugar",t.target.value)}}})])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"NumeroExpediente"}},[a._v("Hora")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.audiencia.au_hora,expression:"audiencia.au_hora"}],staticClass:"form-control",attrs:{type:"time"},domProps:{value:a.audiencia.au_hora},on:{input:function(t){t.target.composing||a.$set(a.audiencia,"au_hora",t.target.value)}}})])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label"},[a._v("Fecha")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.audiencia.au_fecha,expression:"audiencia.au_fecha"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:a.audiencia.au_fecha},on:{input:function(t){t.target.composing||a.$set(a.audiencia,"au_fecha",t.target.value)}}})])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"Detalles"}},[a._v("Detalles o notas a tomar en cuenta para la audiencia")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:a.audiencia.au_detalles,expression:"audiencia.au_detalles"}],staticClass:"form-control",attrs:{id:"Detalles"},domProps:{value:a.audiencia.au_detalles},on:{input:function(t){t.target.composing||a.$set(a.audiencia,"au_detalles",t.target.value)}}})])]),t("div",{staticClass:"row"},[t("div",{staticClass:"form-group text-secondary"},[t("label",{staticClass:"form-label",attrs:{for:"Detalles"}},[a._v("Enlace de reunión si la audiencia es Virtual")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.audiencia.au_link,expression:"audiencia.au_link"}],staticClass:"form-control",attrs:{type:"text",id:"Detalles"},domProps:{value:a.audiencia.au_link},on:{input:function(t){t.target.composing||a.$set(a.audiencia,"au_link",t.target.value)}}})])])]),t("div",{staticClass:"card-footer border-0 pt-1"},[t("div",{staticClass:"row"},[t("div",{staticClass:"d-flex justify-content-end"},[t("button",{staticClass:"btn btn-lg btn-secondary px-3 mx-2",on:{click:a.goBack}},[t("i",{attrs:{"data-feather":"arrow-left"}}),a._v(" Volver atras ")]),t("button",{staticClass:"btn btn-lg btn-primary px-4",on:{click:a.guardarAudiencia}},[a._v("Guardar Audiencia")])])])])])])])])])])},i=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"row mb-4"},[t("h5",{staticClass:"text-dark fw-bold"},[a._v("Registro de Eventos")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"row mb-3 mt-0"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"badge bg-light-primary w-100 rounded py-3 px-4 d-flex text-start",staticStyle:{"font-size":"12px"}},[a._v(" Datos para añadir una nueva alerta. ")])])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"row mb-3 mt-0"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"badge bg-light-primary w-100 rounded py-3 px-4 d-flex text-start",staticStyle:{"font-size":"12px"}},[a._v(" Datos para añadir una nueva audiencia. ")])])])}],o=(e(57658),e(98164)),l=e.n(o),r=e(63822),d={props:["id"],data(){return{alerta:{exp_id:"",ale_fecha_vencimiento:"",ale_descripcion:""},audiencia:{per_id:"",exp_id:"",au_fecha:"",au_hora:"",au_detalles:"",au_lugar:"",au_link:""},expediente:null,demandante:null,demandado:null,pretencion:null,juzgado:null,showalerta:!1,showaudiencia:!1}},created(){this.buscar(),this.mostrarAlerta()},mounted(){this.$nextTick((()=>{l().replace()}))},methods:{...(0,r.nv)(["get","post"]),mostrarAlerta(){this.showalerta=!0,this.showaudiencia=!1,console.log(this.showalerta)},mostrarAudiencia(){this.showaudiencia=!0,this.showalerta=!1},async buscar(){try{const a=await this.get({url:`${this.$store.getters.get__url}/proceeding/${this.$route.params.id}`,token:this.$store.getters.get__token});console.log(a),this.expediente=a.data.exp_numero,this.pretencion=a.data.exp_pretencion,this.juzgado=a.data.ins_nombre,this.audiencia.au_lugar=a.data.nombre_juzgado;const t="Natural"===a.data.tipo_persona;this.demandante=t?"demandante"===a.procesal?`${a.data.nat_apellido_paterno} ${a.data.nat_apellido_materno} ${a.data.nat_nombres}`:"UNPRG":"demandante"===a.procesal?a.data.jur_razon_social:"UNPRG",this.demandado=t?"demandante"===a.procesal?"UNPRG":`${a.data.nat_apellido_paterno} ${a.data.nat_apellido_materno} ${a.data.nat_nombres}`:"demandante"===a.procesal?"UNPRG":a.data.jur_razon_social,this.alerta.exp_id=a.data.exp_id,this.audiencia.exp_id=a.data.exp_id,console.log(a),this.audiencia.per_id=a.data.per_id}catch(a){console.error("Error al cargar los detalles del expediente:",a)}},guardarAlerta(){this.post({url:`${this.$store.getters.get__url}/alerta/store`,token:this.$store.getters.get__token,params:this.alerta}).then((a=>{0===a.state?(console.log(a),this.$router.push({path:"/sisge/expediente/busqueda"})):(console.log(this.visita),console.log(a.exception),alert("Datos no Registrados"))})).catch((a=>{}))},guardarAudiencia(){this.post({url:`${this.$store.getters.get__url}/audiences/store`,token:this.$store.getters.get__token,params:this.audiencia}).then((a=>{0===a.state?(console.log(a),this.$router.push({path:"/sisge/expediente/busqueda"})):(console.log(this.visita),console.log(a.exception),alert("Datos no Registrados"))})).catch((a=>{}))},goBack(){this.$router.go(-1)}}},n=d,c=e(1001),u=(0,c.Z)(n,s,i,!1,null,"1d69a246",null),m=u.exports}}]);
//# sourceMappingURL=59.6e87c395.js.map