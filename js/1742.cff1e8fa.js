"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[1742],{21742:function(t,a,s){s.r(a),s.d(a,{default:function(){return v}});var i=function(){var t=this,a=t._self._c;return a("section",{staticClass:"pc-container pb-4 px-4"},[a("div",{staticClass:"pcoded-content"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header py-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("h5",[t._v("Lista de Tribunales Arbitrales")]),a("button",{staticClass:"btn btn-success btn-sm px-4 ml-auto rounded-1",on:{click:t.mostrarModal}},[t._v(" Nuevo ")])])]),a("div",{staticClass:"card-body"},[t._m(0),a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-xl-3 col-lg-5 col-md-6"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.distrito,expression:"distrito"}],staticClass:"form-control",on:{change:[function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.distrito=a.target.multiple?s:s[0]},function(a){return t.leer()}]}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("-- Seleccionar")]),t._l(t.distritos,(function(s){return a("option",{domProps:{value:s.judis_id}},[t._v(" "+t._s(s.judis_nombre)+" ")])}))],2)]),a("div",{staticClass:"col-xl-3 col-lg-5 col-md-6"},[a("button",{staticClass:"btn btn-primary btn-lg w-100",attrs:{disabled:0==t.favoritos.length},on:{click:function(a){return t.guardarfavorito()}}},[t._v(" Guardar Concurrentes ")])])]),a("div",{staticClass:"table-responsive"},[a("table",{ref:"myDataTable",staticClass:"table",attrs:{id:"table"}},[t._m(1),a("tbody",[""==t.distrito?a("tr",{staticClass:"text-center"},[a("td",{staticClass:"py-3 text-secondary",attrs:{colspan:"4"}},[t._v("Seleccione un Distrito / Sede")])]):t._e(),t._l(t.juzgados,(function(s,i){return 3==s.type_id?a("tr",{key:i},[a("td",{staticClass:"text-center py-2 my-0"},[t._v(" "+t._s(i+1)+" ")]),a("td",[t._v(t._s(s.co_nombre))]),a("td",{staticClass:"text-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.co_isFavorite,expression:"juzgado.co_isFavorite"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.co_isFavorite)?t._i(s.co_isFavorite,null)>-1:s.co_isFavorite},on:{change:[function(a){var i=s.co_isFavorite,r=a.target,e=!!r.checked;if(Array.isArray(i)){var o=null,c=t._i(i,o);r.checked?c<0&&t.$set(s,"co_isFavorite",i.concat([o])):c>-1&&t.$set(s,"co_isFavorite",i.slice(0,c).concat(i.slice(c+1)))}else t.$set(s,"co_isFavorite",e)},function(a){return t.marcarFavorito(s)}]}})]),a("td",{staticClass:"text-center"},[a("a",{staticClass:"text-primary px-2",attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.editar(s.co_id)}}},[t._m(2,!0)]),a("a",{staticClass:"text-danger px-2",attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.borrar(s.co_id)}}},[t._m(3,!0)])])]):t._e()}))],2)])])])]),t.showModal?a("div",{staticClass:"modal",on:{click:t.cerrarModal}},[a("div",{staticClass:"modal-content card border-0",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"card-header"},[a("h5",{staticClass:"text-center"},[t._v(" "+t._s(t.juzgado.co_id?"Actualizar Organo Jurisdiccional":"Registro de nuevo Organo Jurisdiccional")+" ")])]),a("div",{staticClass:"card-body mb-0 pb-4"},[a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-md-12"},[a("label",{staticClass:"form-label"},[t._v("Distrito / Sede: ")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.distrito,expression:"distrito"}],staticClass:"form-control",class:{"has-error":t.errores.distrito},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.distrito=a.target.multiple?s:s[0]}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("--Seleccionar")]),t._l(t.distritos,(function(s){return a("option",{domProps:{value:s.judis_id}},[t._v(" "+t._s(s.judis_nombre)+" ")])}))],2)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group mb-0"},[a("label",{staticClass:"form-label"},[t._v("Nombre")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.juzgado.co_nombre,expression:"juzgado.co_nombre"}],staticClass:"form-control",class:{"has-error":t.errores.co_nombre},domProps:{value:t.juzgado.co_nombre},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.guardar.apply(null,arguments)},input:[function(a){a.target.composing||t.$set(t.juzgado,"co_nombre",a.target.value)},function(a){return t.validarCampo("co_nombre")}]}})]),t.errores.co_nombre?a("span",{staticClass:"error-message"},[t._v("Ingrese un nombre de un Organo Jurisdiccional.")]):t._e()])])]),a("div",{staticClass:"card-footer border-0 mt-0 pt-0"},[a("div",{staticClass:"d-flex justify-content-end"},[a("button",{staticClass:"btn btn-secondary btn-lg px-4 mx-2 rounded",on:{click:t.cerrarModal}},[t._v("Cerrar")]),a("button",{staticClass:"btn btn-primary btn-lg px-4 rounded",on:{click:t.guardar}},[t.isLoading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):a("span",[t._v(t._s(t.juzgado.co_id?"Actualizar":"Guardar"))])])])])])]):t._e()])])},r=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"row"},[a("label",{staticClass:"form-label"},[t._v("Seleccione un Distrito /sede :")])])},function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",{staticClass:"text-center"},[t._v("#")]),a("th",{staticClass:"col-lg-7"},[t._v("Nombre")]),a("th",{staticClass:"text-center"},[t._v("Concurrente")]),a("th",{staticClass:"text-center"},[t._v("Opciones")])])])},function(){var t=this,a=t._self._c;return a("span",[a("i",{attrs:{"data-feather":"edit"}})])},function(){var t=this,a=t._self._c;return a("span",[a("i",{attrs:{"data-feather":"trash"}})])}],e=(s(44114),s(90740)),o=s.n(e),c=s(2637),n=s(46587),d={name:"juzgados",mixins:[c.A],mounted(){this.cargardistritos()},updated(){o().replace()},data(){return{dataTable:null,showModal:!1,distrito:"",distritos:[],juzgados:[],juzgado:{co_id:"",co_nombre:"",favorito:!1,tipo:3},errores:{co_nombre:!1,distrito:!1},favoritos:[],isLoading:!1}},methods:{validarCampo(t){this.errores[t]=""===this.juzgado[t]},validarCampos(){return Object.keys(this.errores).forEach((t=>{this.validarCampo(t,t)})),!Object.values(this.errores).some((t=>t))},marcarFavorito(t){const a=this.favoritos.findIndex((a=>a===t.co_id));1==t.co_isFavorite?-1==a&&this.favoritos.push(t.co_id):-1!=a&&this.favoritos.splice(a,1)},async guardarfavorito(){try{const t={favoritos:this.favitos},a=await this.$postData("juzgado/favorite",this,t);0===a.state&&(this.favoritos=[])}catch(t){this.$handleApiError(t,"guardar juzgados concurrentes")}},async cargardistritos(){try{this.$showLoadingAlert();const t=await this.$getData("judicialdistrict",this);this.distritos=t.data,this.$closeLoadingAlert()}catch(t){this.$handleApiError(t,"cargar distritos judiciales")}},async leer(){try{this.$showLoadingAlert();const t={judis_id:this.distrito},a=await this.$postData("juzgado",this,t);if(0===a.state){this.juzgados=a.data,this.favoritos=[];let t=a.data.length;if(t>0)for(let s=0;s<t;s++)this.marcarFavorito(a.data[s]);this.initDataTable(),this.$closeLoadingAlert()}}catch(t){this.$handleApiError(t,"cargar juzgados")}},async actualizarTable(){try{const t={judis_id:this.distrito},a=await this.$postData("juzgado",this,t);if(0===a.state){this.juzgados=a.data,this.favoritos=[];let t=a.data.length;if(t>0)for(let s=0;s<t;s++)this.marcarFavorito(a.data[s]);this.initDataTable()}}catch(t){this.$handleApiError(t,"cargar juzgados")}},async crear(){if(this.validarCampos()&&""!==this.distrito)try{this.isLoading=!0;const t={judis_id:this.distrito,co_nombre:this.juzgado.co_nombre,tipo:this.juzgado.tipo},a=await this.$postData("juzgado/store",this,t);0===a.state&&(await this.actualizarTable(),this.isLoading=!1,this.cerrarModal())}catch(t){this.$handleApiError(t,"crear juzgado")}else this.errores.distrito=!0},async actualizar(t){if(this.validarCampos())try{this.isLoading=!0;const a={judis_id:this.distrito,co_id:t,co_nombre:this.juzgado.co_nombre},s=await this.$postData("juzgado/update",this,a);0===s.state&&(await this.actualizarTable(),this.isLoading=!1,this.cerrarModal())}catch(a){this.$handleApiError(a,"actualizar juzgado")}},async borrar(t){this.$warningAlertWithCancel("Confirmar Eliminación","¿Estás seguro de que deseas eliminar este Organo Jurisdiccional?",(async()=>{try{this.$showLoadingAlert("Eliminando","");const a={co_id:t},s=await this.$postData("juzgado/destroy",this,a);0===s.state&&(await this.actualizarTable(),this.$closeLoadingAlert(),this.juzgado.co_id="",this.juzgado.co_nombre="")}catch(a){this.$handleApiError(a,a.message),this.$closeLoadingAlert()}}),(()=>{console.info("Cancelado")}))},editar(t){try{const a=this.juzgados.find((a=>a.co_id===t));a?(this.juzgado={...a},this.showModal=!0):console.error("Juzgado no encontrado")}catch(a){}},guardar(){try{this.juzgado.co_id?this.actualizar(this.juzgado.co_id):this.crear()}catch(t){console.error(t)}},initDataTable(){this.dataTable&&this.dataTable.destroy(),this.$nextTick((()=>{this.dataTable=n("#table").DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}}),o().replace()}))},mostrarModal(){this.showModal=!0},cerrarModal(){this.showModal=!1,this.errores.co_nombre=!1,this.errores.distrito=!1,this.juzgado.co_id="",this.juzgado.co_nombre=""}}},l=d,u=s(81656),h=(0,u.A)(l,i,r,!1,null,"7a41738d",null),v=h.exports},2637:function(t,a,s){var i=s(46587);a.A={methods:{async initDataTable(){this.destroyDataTable(),await this.$nextTick(),this.dataTable=i(this.$refs.myDataTable).DataTable({language:{url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"}})},destroyDataTable(){this.dataTable&&this.dataTable.destroy()&&(this.dataTable=null)}},beforeDestroy(){this.destroyDataTable()}}}}]);
//# sourceMappingURL=1742.cff1e8fa.js.map