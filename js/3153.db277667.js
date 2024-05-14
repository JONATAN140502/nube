"use strict";(self["webpackChunksisge"]=self["webpackChunksisge"]||[]).push([[3153],{3153:function(t,e,i){i.r(e),i.d(e,{default:function(){return Z}});var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"pc-mob-header pc-header"},[t._m(0),e("div",{staticClass:"d-flex"},[e("a",{staticClass:"btn btn-sm btn-outline-dark border-1 rounded mx-1",on:{click:t.toggleSidebar}},[t._m(1)])])]),e("nav",{staticClass:"pc-sidebar",class:{open:t.sidebarOpen}},[e("div",{staticClass:"navbar-wrapper"},[t._m(2),e("div",{staticClass:"navbar-content"},[e("ul",{staticClass:"pc-navbar py-2"},[t.showOption("ADMIN","ABOGADO")?e("li",{staticClass:"pc-item pc-caption"},[e("label",{staticClass:"text-white"},[t._v("Gestion Judicial")])]):t._e(),t.showOption("ADMIN","ABOGADO")?e("li",{staticClass:"pc-item pc-hasmenu",on:{click:function(e){return t.toggleMenu("home")}}},[e("router-link",{staticClass:"pc-link",attrs:{to:"/home"}},[e("span",{staticClass:"pr-3"},[e("i",{attrs:{"data-feather":"box"}})]),e("span",{staticClass:"pc-mtext"},[t._v("Inicio")])])],1):t._e(),t.showOption("ADMIN","ABOGADO")?e("li",{staticClass:"pc-item pc-hasmenu"},[e("a",{staticClass:"pc-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.toggleMenu("expediente")}}},[t._m(3),e("span",{staticClass:"pc-mtext"},[t._v("Expediente")]),t._m(4)]),e("ul",{directives:[{name:"show",rawName:"v-show",value:"expediente"===t.isOpen,expression:"isOpen === 'expediente'"}],staticClass:"pc-submenu"},[e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",class:{"text-white":t.getRouteExpedienteRegistro()},attrs:{to:"/expediente/registro/civil-laboral"}},[t._v(" Registrar ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",class:{"text-white":t.getRouteExpedienteBuscar()},attrs:{to:"/expediente/busqueda"}},[t._v(" Buscar ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",class:{"text-white":t.getRouteExpedienteArchivados()},attrs:{to:"/expediente/archivados"}},[t._v(" Archivados ")])],1)])]):t._e(),t.showOption("ADMIN","ABOGADO")?e("li",{staticClass:"pc-item pc-hasmenu",on:{click:function(e){return t.toggleMenu("personas")}}},[e("router-link",{staticClass:"pc-link",class:{active:t.getRoutePersonas()},attrs:{to:"/personas"}},[e("span",{staticClass:"pr-3"},[e("i",{attrs:{"data-feather":"box"}})]),e("span",{staticClass:"pc-mtext"},[t._v("Personas")])])],1):t._e(),t.showOption("ADMIN")?e("li",{staticClass:"pc-item pc-hasmenu",on:{click:function(e){return t.toggleMenu("equipo")}}},[e("router-link",{staticClass:"pc-link",class:{active:t.getRouteEquipo()},attrs:{to:"/equipo"}},[e("span",{staticClass:"pr-3"},[e("i",{attrs:{"data-feather":"box"}})]),e("span",{staticClass:"pc-mtext"},[t._v("Equipo UNPRG")])])],1):t._e(),t.showOption("ADMIN","ABOGADO")?e("li",{staticClass:"pc-item pc-hasmenu"},[e("a",{staticClass:"pc-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.toggleMenu("agenda")}}},[t._m(5),e("span",{staticClass:"pc-mtext"},[t._v("Agenda")]),e("span",{staticClass:"pc-arrow",class:{"rotate-down":"agenda"===t.isOpen}},[e("i",{attrs:{"data-feather":"chevron-right"}})])]),e("ul",{directives:[{name:"show",rawName:"v-show",value:"agenda"===t.isOpen,expression:"isOpen === 'agenda'"}],staticClass:"pc-submenu"},[e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",class:{"text-white":t.getRouteCalendario()},attrs:{to:"/calendario"}},[t._v(" Calendario ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",class:{"text-white":t.getRouteAudiencia()},attrs:{to:"/audiencias"}},[t._v(" Audiencias ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",class:{"text-white":t.getRouteAlerta()},attrs:{to:"/alertas"}},[t._v(" Alertas ")])],1)])]):t._e(),t.showOption("ADMIN")?e("li",{staticClass:"pc-item pc-hasmenu",on:{click:function(e){return t.toggleMenu("reporte")}}},[e("router-link",{staticClass:"pc-link",class:{active:t.getRouteReporte()},attrs:{to:"/reportes"}},[e("span",{staticClass:"pr-3"},[e("i",{attrs:{"data-feather":"file-text"}})]),e("span",{staticClass:"pc-mtext"},[t._v("Reportes")])])],1):t._e(),t.showOption("ADMIN")?e("li",{staticClass:"pc-item pc-hasmenu"},[e("a",{staticClass:"pc-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.toggleMenu("mantenimiento")}}},[t._m(6),e("span",{staticClass:"pc-mtext"},[t._v("Mantenimiento")]),e("span",{staticClass:"pc-arrow",class:{"rotate-down":"mantenimiento"===t.isOpen}},[e("i",{attrs:{"data-feather":"chevron-right"}})])]),e("ul",{directives:[{name:"show",rawName:"v-show",value:"mantenimiento"===t.isOpen,expression:"isOpen === 'mantenimiento'"}],staticClass:"pc-submenu"},[e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/mantenimiento/distritos-judiciales"}},[t._v(" Distrito Judicial ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/mantenimiento/instancia"}},[t._v(" Instancias ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/mantenimiento/fiscalia"}},[t._v(" Fiscalia ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/mantenimiento/especialidad"}},[t._v(" Especialidad ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/mantenimiento/materias"}},[t._v(" Materias ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/mantenimiento/pretension"}},[t._v(" Pretensiones ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/mantenimiento/delito"}},[t._v(" Delitos ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/mantenimiento/pretensionArbitral"}},[t._v(" Pretensión Arbitral ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/mantenimiento/organo-jurisdiccional"}},[t._v(" Organo Jurisdiccional ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/mantenimiento/juzgado-penal"}},[t._v(" Juzgado Penal ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/mantenimiento/tribunal-arbitral"}},[t._v(" Tribunal Arbitral ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/mantenimiento/cambio-abogado"}},[t._v(" Cambio de Abogado ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/mantenimiento/eliminar-expediente"}},[t._v(" Eliminar Expediente ")])],1)])]):t._e(),e("li",{staticClass:"pc-item pc-caption"},[t.showOption("ADMIN","SECRETARIA")?e("label",{staticClass:"text-white"},[t._v("Gestion Administrativa")]):t._e()]),t.showOption("ADMIN","SECRETARIA")?e("li",{staticClass:"pc-item pc-hasmenu",on:{click:function(e){return t.toggleMenu("panel")}}},[e("router-link",{staticClass:"pc-link",attrs:{to:"/panel"}},[e("span",{staticClass:"pr-3"},[e("i",{attrs:{"data-feather":"box"}})]),e("span",{staticClass:"pc-mtext"},[t._v("Panel")])])],1):t._e(),t.showOption("ADMIN","SECRETARIA")?e("li",{staticClass:"pc-item pc-hasmenu"},[e("a",{staticClass:"pc-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.toggleMenu("oficio")}}},[t._m(7),e("span",{staticClass:"pc-mtext"},[t._v("Expediente")]),e("span",{staticClass:"pc-arrow",class:{"rotate-down":"oficio"===t.isOpen}},[e("i",{attrs:{"data-feather":"chevron-right"}})])]),e("ul",{directives:[{name:"show",rawName:"v-show",value:"oficio"===t.isOpen,expression:"isOpen === 'oficio'"}],staticClass:"pc-submenu"},[e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/oficio/registro"}},[t._v(" Registrar ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/oficio/buscar"}},[t._v(" Buscar ")])],1)])]):t._e(),t.showOption("ADMIN","SECRETARIA")?e("li",{staticClass:"pc-item pc-hasmenu",on:{click:function(e){return t.toggleMenu("responsable")}}},[e("router-link",{staticClass:"pc-link",attrs:{to:"/responsables"}},[e("span",{staticClass:"pr-3"},[e("i",{attrs:{"data-feather":"users"}})]),e("span",{staticClass:"pc-mtext"},[t._v("Equipo")])])],1):t._e()]),e("div",{staticClass:"col-md-12 py-4 px-4"},[e("button",{staticClass:"btn btn-danger w-100",on:{click:t.mtdLogout}},[t._v("Salir "),t._m(8)])])])])]),e("header",{staticClass:"pc-header"},[e("div",{staticClass:"header-wrapper"},[e("div",{staticClass:"ml-auto"},[e("ul",{staticClass:"list-unstyled"},[e("li",{staticClass:"dropdown pc-h-item"}),e("li",{staticClass:"dropdown pc-h-item"},[e("a",{staticClass:"pc-head-link dropdown-toggle arrow-none mr-0",attrs:{"data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"false","aria-expanded":"false"}},[e("img",{staticClass:"user-avtar",attrs:{src:i(82750),alt:"user-image"}}),e("span",[e("span",{staticClass:"user-name"},[t._v(t._s(t.name))]),e("span",{staticClass:"user-desc text-capitalize"},[t._v(t._s(t.rol))])])]),e("div",{staticClass:"dropdown-menu dropdown-menu-right pc-h-dropdown"},[t._m(9),e("a",{staticClass:"dropdown-item",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.logout()}}},[e("i",{staticClass:"material-icons-two-tone"},[t._v("chrome_reader_mode")]),e("span",[t._v("Salir")])])])])])])])]),e("router-view")],1)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"pcm-logo"},[e("img",{staticClass:"img-fluid",attrs:{src:i(93763),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"hamburger hamburger--arrowturn"},[e("div",{staticClass:"hamburger-box"},[e("div",{staticClass:"hamburger-inner"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-header"},[e("a",{staticClass:"b-brand",attrs:{href:"#"}},[e("img",{staticClass:"img-fluid",attrs:{src:i(93763),alt:""}})])])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"pr-3"},[e("i",{attrs:{"data-feather":"layers"}})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"pc-arrow"},[e("i",{attrs:{"data-feather":"chevron-right"}})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"pr-3"},[e("i",{attrs:{"data-feather":"calendar"}})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"pr-3"},[e("i",{attrs:{"data-feather":"settings"}})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"pr-3"},[e("i",{attrs:{"data-feather":"layers"}})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"text-white px-2"},[e("i",{attrs:{"data-feather":"log-out"}})])},function(){var t=this,e=t._self._c;return e("a",{staticClass:"dropdown-item",attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"material-icons-two-tone"},[t._v("account_circle")]),e("span",[t._v("Perfil")])])}],r=function(){var t=this,e=t._self._c;return e("div",[t._l(t.alertas,(function(i){return e("div",{directives:[{name:"show",rawName:"v-show",value:i.alertaVisible,expression:"alerta.alertaVisible"}],key:i.id,staticClass:"ale",class:t.getColorClass(i.ale_porcentaje)},[t._m(0,!0),e("div",{staticClass:"ale-body"},[e("span",{staticClass:"ale-descripcion"},[t._v(t._s(i.ale_descripcion))]),e("span",{staticClass:"ale-fecha"},[t._v(t._s(i.ale_fecha_vencimiento))])])])})),t._l(t.audiencias,(function(i){return e("div",{key:i.id,staticClass:"aud"},[t._m(1,!0),e("div",{staticClass:"aud-body"},[e("span",{staticClass:"aud-descripcion"},[t._v(t._s(i.au_detalles))]),e("span",{staticClass:"aud-fecha"},[t._v(t._s(i.au_fecha))])])])}))],2)},n=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"ale-icon"},[e("img",{attrs:{src:i(96250),alt:""}})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"aud-icon"},[e("img",{attrs:{src:i(96250),alt:""}})])}],o=i(38280),l=i(90740),c=i.n(l),u={name:"notificationAlertas",data(){return{expedientesAsignados:[],alertas:[],audiencias:[],alertasMostradasHoy:0}},computed:{...(0,o.L8)(["get__user","get__aboid","get__url","get__token"]),userRole(){return this.get__user.usu_rol},userAbogado(){return this.get__aboid}},mounted(){this.$nextTick((()=>{c().replace()}))},methods:{...(0,o.i0)(["post"]),async listExpedientes(){try{const t=await this.post({url:`${this.get__url}/lawyer/expedientes`,token:this.get__token,params:{abo_id:this.userAbogado}});this.expedientesAsignados=t.data,console.log("expedientes_asignados",t)}catch(t){console.error(t)}},mostrarSiguienteAlerta(){if(this.alertas.length>0){const t=this.alertas[0],e=this.getFrecuenciaMostrar(t.ale_porcentaje);e>0?(this.$set(t,"alertaVisible",!0),setTimeout((()=>{this.$set(t,"alertaVisible",!1),this.alertas.shift(),this.alertasMostradasHoy++,this.alertasMostradasHoy<e||(this.alertasMostradasHoy=0),setTimeout((()=>{this.mostrarSiguienteAlerta()}),250)}),3e3)):(this.alertas.shift(),this.mostrarSiguienteAlerta())}},getFrecuenciaMostrar(t){return t>=.63&&t<=1?1:t>=.33&&t<.63?3:t<.33?5:0},getColorClass(t){return t>.67&&t<=1?"color-azul":t>.33&&t<=.67?"color-naranja":t<=.33?"color-rojo":""},async listAlertas(){try{const t=await this.post({url:`${this.get__url}/lawyer/alertas`,token:this.get__token,params:{abo_id:this.userAbogado}});0===t.state&&t.data?(this.alertas=t.data,setTimeout((()=>{this.mostrarSiguienteAlerta()}),3e3),console.log("alertas",t),console.log(this.userAbogado)):console.error("Error en la respuesta del servidor:",t)}catch(t){console.error("Error en la solicitud:",t)}},async listAudiencias(){try{const t=await this.post({url:`${this.get__url}/lawyer/audiencias`,token:this.get__token,params:{abo_id:this.userAbogado}});this.audiencias=t.data,console.log("audiencias",t)}catch(t){console.error(t)}}},created(){this.listExpedientes(),this.listAlertas()}},h=u,d=i(81656),p=(0,d.A)(h,r,n,!1,null,"039eb898",null),m=p.exports;i(44114);
/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */
function g(t){return getComputedStyle(t)}function f(t,e){for(var i in e){var s=e[i];"number"===typeof s&&(s+="px"),t.style[i]=s}return t}function v(t){var e=document.createElement("div");return e.className=t,e}var b="undefined"!==typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function C(t,e){if(!b)throw new Error("No element matching method supported");return b.call(t,e)}function w(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function _(t,e){return Array.prototype.filter.call(t.children,(function(t){return C(t,e)}))}var R={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},A={x:null,y:null};function x(t,e){var i=t.element.classList,s=R.state.scrolling(e);i.contains(s)?clearTimeout(A[e]):i.add(s)}function y(t,e){A[e]=setTimeout((function(){return t.isAlive&&t.element.classList.remove(R.state.scrolling(e))}),t.settings.scrollingThreshold)}function k(t,e){x(t,e),y(t,e)}var Y=function(t){this.element=t,this.handlers={}},X={isEmpty:{configurable:!0}};Y.prototype.bind=function(t,e){"undefined"===typeof this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},Y.prototype.unbind=function(t,e){var i=this;this.handlers[t]=this.handlers[t].filter((function(s){return!(!e||s===e)||(i.element.removeEventListener(t,s,!1),!1)}))},Y.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)},X.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every((function(e){return 0===t.handlers[e].length}))},Object.defineProperties(Y.prototype,X);var E=function(){this.eventElements=[]};function W(t){if("function"===typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function L(t,e,i,s,a){var r;if(void 0===s&&(s=!0),void 0===a&&(a=!1),"top"===e)r=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");r=["contentWidth","containerWidth","scrollLeft","x","left","right"]}S(t,i,r,s,a)}function S(t,e,i,s,a){var r=i[0],n=i[1],o=i[2],l=i[3],c=i[4],u=i[5];void 0===s&&(s=!0),void 0===a&&(a=!1);var h=t.element;t.reach[l]=null,h[o]<1&&(t.reach[l]="start"),h[o]>t[r]-t[n]-1&&(t.reach[l]="end"),e&&(h.dispatchEvent(W("ps-scroll-"+l)),e<0?h.dispatchEvent(W("ps-scroll-"+c)):e>0&&h.dispatchEvent(W("ps-scroll-"+u)),s&&k(t,l)),t.reach[l]&&(e||a)&&h.dispatchEvent(W("ps-"+l+"-reach-"+t.reach[l]))}function T(t){return parseInt(t,10)||0}function M(t){return C(t,"input,[contenteditable]")||C(t,"select,[contenteditable]")||C(t,"textarea,[contenteditable]")||C(t,"button,[contenteditable]")}function O(t){var e=g(t);return T(e.width)+T(e.paddingLeft)+T(e.paddingRight)+T(e.borderLeftWidth)+T(e.borderRightWidth)}E.prototype.eventElement=function(t){var e=this.eventElements.filter((function(e){return e.element===t}))[0];return e||(e=new Y(t),this.eventElements.push(e)),e},E.prototype.bind=function(t,e,i){this.eventElement(t).bind(e,i)},E.prototype.unbind=function(t,e,i){var s=this.eventElement(t);s.unbind(e,i),s.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(s),1)},E.prototype.unbindAll=function(){this.eventElements.forEach((function(t){return t.unbindAll()})),this.eventElements=[]},E.prototype.once=function(t,e,i){var s=this.eventElement(t),a=function(t){s.unbind(e,a),i(t)};s.bind(e,a)};var H={isWebKit:"undefined"!==typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!==typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!==typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!==typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)};function D(t){var e=t.element,i=Math.floor(e.scrollTop),s=e.getBoundingClientRect();t.containerWidth=Math.round(s.width),t.containerHeight=Math.round(s.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(_(e,R.element.rail("x")).forEach((function(t){return w(t)})),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(_(e,R.element.rail("y")).forEach((function(t){return w(t)})),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=P(t,T(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=T((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=P(t,T(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=T(i*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),I(e,t),t.scrollbarXActive?e.classList.add(R.state.active("x")):(e.classList.remove(R.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=!0===t.isRtl?t.contentWidth:0),t.scrollbarYActive?e.classList.add(R.state.active("y")):(e.classList.remove(R.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function P(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function I(t,e){var i={width:e.railXWidth},s=Math.floor(t.scrollTop);e.isRtl?i.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:i.left=t.scrollLeft,e.isScrollbarXUsingBottom?i.bottom=e.scrollbarXBottom-s:i.top=e.scrollbarXTop+s,f(e.scrollbarXRail,i);var a={top:s,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?a.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:a.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?a.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:a.left=e.scrollbarYLeft+t.scrollLeft,f(e.scrollbarYRail,a),f(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),f(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function N(t){t.element;t.event.bind(t.scrollbarY,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarYRail,"mousedown",(function(e){var i=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top,s=i>t.scrollbarYTop?1:-1;t.element.scrollTop+=s*t.containerHeight,D(t),e.stopPropagation()})),t.event.bind(t.scrollbarX,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarXRail,"mousedown",(function(e){var i=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left,s=i>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=s*t.containerWidth,D(t),e.stopPropagation()}))}function B(t){$(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),$(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function $(t,e){var i=e[0],s=e[1],a=e[2],r=e[3],n=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=t.element,d=null,p=null,m=null;function g(e){e.touches&&e.touches[0]&&(e[a]=e.touches[0].pageY),h[l]=d+m*(e[a]-p),x(t,c),D(t),e.stopPropagation(),e.type.startsWith("touch")&&e.changedTouches.length>1&&e.preventDefault()}function f(){y(t,c),t[u].classList.remove(R.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",g)}function v(e,n){d=h[l],n&&e.touches&&(e[a]=e.touches[0].pageY),p=e[a],m=(t[s]-t[i])/(t[r]-t[o]),n?t.event.bind(t.ownerDocument,"touchmove",g):(t.event.bind(t.ownerDocument,"mousemove",g),t.event.once(t.ownerDocument,"mouseup",f),e.preventDefault()),t[u].classList.add(R.state.clicking),e.stopPropagation()}t.event.bind(t[n],"mousedown",(function(t){v(t)})),t.event.bind(t[n],"touchstart",(function(t){v(t,!0)}))}function j(t){var e=t.element,i=function(){return C(e,":hover")},s=function(){return C(t.scrollbarX,":focus")||C(t.scrollbarY,":focus")};function a(i,s){var a=Math.floor(e.scrollTop);if(0===i){if(!t.scrollbarYActive)return!1;if(0===a&&s>0||a>=t.contentHeight-t.containerHeight&&s<0)return!t.settings.wheelPropagation}var r=e.scrollLeft;if(0===s){if(!t.scrollbarXActive)return!1;if(0===r&&i<0||r>=t.contentWidth-t.containerWidth&&i>0)return!t.settings.wheelPropagation}return!0}t.event.bind(t.ownerDocument,"keydown",(function(r){if(!(r.isDefaultPrevented&&r.isDefaultPrevented()||r.defaultPrevented)&&(i()||s())){var n=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(n){if("IFRAME"===n.tagName)n=n.contentDocument.activeElement;else while(n.shadowRoot)n=n.shadowRoot.activeElement;if(M(n))return}var o=0,l=0;switch(r.which){case 37:o=r.metaKey?-t.contentWidth:r.altKey?-t.containerWidth:-30;break;case 38:l=r.metaKey?t.contentHeight:r.altKey?t.containerHeight:30;break;case 39:o=r.metaKey?t.contentWidth:r.altKey?t.containerWidth:30;break;case 40:l=r.metaKey?-t.contentHeight:r.altKey?-t.containerHeight:-30;break;case 32:l=r.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:l=t.containerHeight;break;case 34:l=-t.containerHeight;break;case 36:l=t.contentHeight;break;case 35:l=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==o||t.settings.suppressScrollY&&0!==l||(e.scrollTop-=l,e.scrollLeft+=o,D(t),a(o,l)&&r.preventDefault())}}))}function z(t){var e=t.element;function i(i,s){var a,r=Math.floor(e.scrollTop),n=0===e.scrollTop,o=r+e.offsetHeight===e.scrollHeight,l=0===e.scrollLeft,c=e.scrollLeft+e.offsetWidth===e.scrollWidth;return a=Math.abs(s)>Math.abs(i)?n||o:l||c,!a||!t.settings.wheelPropagation}function s(t){var e=t.deltaX,i=-1*t.deltaY;return"undefined"!==typeof e&&"undefined"!==typeof i||(e=-1*t.wheelDeltaX/6,i=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,i*=10),e!==e&&i!==i&&(e=0,i=t.wheelDelta),t.shiftKey?[-i,-e]:[e,i]}function a(t,i,s){if(!H.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(t))return!1;var a=t;while(a&&a!==e){if(a.classList.contains(R.element.consuming))return!0;var r=g(a);if(s&&r.overflowY.match(/(scroll|auto)/)){var n=a.scrollHeight-a.clientHeight;if(n>0&&(a.scrollTop>0&&s<0||a.scrollTop<n&&s>0))return!0}if(i&&r.overflowX.match(/(scroll|auto)/)){var o=a.scrollWidth-a.clientWidth;if(o>0&&(a.scrollLeft>0&&i<0||a.scrollLeft<o&&i>0))return!0}a=a.parentNode}return!1}function r(r){var n=s(r),o=n[0],l=n[1];if(!a(r.target,o,l)){var c=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(l?e.scrollTop-=l*t.settings.wheelSpeed:e.scrollTop+=o*t.settings.wheelSpeed,c=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(o?e.scrollLeft+=o*t.settings.wheelSpeed:e.scrollLeft-=l*t.settings.wheelSpeed,c=!0):(e.scrollTop-=l*t.settings.wheelSpeed,e.scrollLeft+=o*t.settings.wheelSpeed),D(t),c=c||i(o,l),c&&!r.ctrlKey&&(r.stopPropagation(),r.preventDefault())}}"undefined"!==typeof window.onwheel?t.event.bind(e,"wheel",r):"undefined"!==typeof window.onmousewheel&&t.event.bind(e,"mousewheel",r)}function K(t){if(H.supportsTouch||H.supportsIePointer){var e=t.element,i={},s=0,a={},r=null;H.supportsTouch?(t.event.bind(e,"touchstart",u),t.event.bind(e,"touchmove",d),t.event.bind(e,"touchend",p)):H.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",u),t.event.bind(e,"pointermove",d),t.event.bind(e,"pointerup",p)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",u),t.event.bind(e,"MSPointerMove",d),t.event.bind(e,"MSPointerUp",p)))}function n(i,s){var a=Math.floor(e.scrollTop),r=e.scrollLeft,n=Math.abs(i),o=Math.abs(s);if(o>n){if(s<0&&a===t.contentHeight-t.containerHeight||s>0&&0===a)return 0===window.scrollY&&s>0&&H.isChrome}else if(n>o&&(i<0&&r===t.contentWidth-t.containerWidth||i>0&&0===r))return!0;return!0}function o(i,s){e.scrollTop-=s,e.scrollLeft-=i,D(t)}function l(t){return t.targetTouches?t.targetTouches[0]:t}function c(t){return(!t.pointerType||"pen"!==t.pointerType||0!==t.buttons)&&(!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function u(t){if(c(t)){var e=l(t);i.pageX=e.pageX,i.pageY=e.pageY,s=(new Date).getTime(),null!==r&&clearInterval(r)}}function h(t,i,s){if(!e.contains(t))return!1;var a=t;while(a&&a!==e){if(a.classList.contains(R.element.consuming))return!0;var r=g(a);if(s&&r.overflowY.match(/(scroll|auto)/)){var n=a.scrollHeight-a.clientHeight;if(n>0&&(a.scrollTop>0&&s<0||a.scrollTop<n&&s>0))return!0}if(i&&r.overflowX.match(/(scroll|auto)/)){var o=a.scrollWidth-a.clientWidth;if(o>0&&(a.scrollLeft>0&&i<0||a.scrollLeft<o&&i>0))return!0}a=a.parentNode}return!1}function d(t){if(c(t)){var e=l(t),r={pageX:e.pageX,pageY:e.pageY},u=r.pageX-i.pageX,d=r.pageY-i.pageY;if(h(t.target,u,d))return;o(u,d),i=r;var p=(new Date).getTime(),m=p-s;m>0&&(a.x=u/m,a.y=d/m,s=p),n(u,d)&&t.preventDefault()}}function p(){t.settings.swipeEasing&&(clearInterval(r),r=setInterval((function(){t.isInitialized?clearInterval(r):a.x||a.y?Math.abs(a.x)<.01&&Math.abs(a.y)<.01?clearInterval(r):t.element?(o(30*a.x,30*a.y),a.x*=.8,a.y*=.8):clearInterval(r):clearInterval(r)}),10))}}var q=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},G={"click-rail":N,"drag-thumb":B,keyboard:j,wheel:z,touch:K},U=function(t,e){var i=this;if(void 0===e&&(e={}),"string"===typeof t&&(t=document.querySelector(t)),!t||!t.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var s in this.element=t,t.classList.add(R.main),this.settings=q(),e)this.settings[s]=e[s];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var a=function(){return t.classList.add(R.state.focus)},r=function(){return t.classList.remove(R.state.focus)};this.isRtl="rtl"===g(t).direction,!0===this.isRtl&&t.classList.add(R.rtl),this.isNegativeScroll=function(){var e=t.scrollLeft,i=null;return t.scrollLeft=-1,i=t.scrollLeft<0,t.scrollLeft=e,i}(),this.negativeScrollAdjustment=this.isNegativeScroll?t.scrollWidth-t.clientWidth:0,this.event=new E,this.ownerDocument=t.ownerDocument||document,this.scrollbarXRail=v(R.element.rail("x")),t.appendChild(this.scrollbarXRail),this.scrollbarX=v(R.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",a),this.event.bind(this.scrollbarX,"blur",r),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var n=g(this.scrollbarXRail);this.scrollbarXBottom=parseInt(n.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=T(n.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=T(n.borderLeftWidth)+T(n.borderRightWidth),f(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=T(n.marginLeft)+T(n.marginRight),f(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=v(R.element.rail("y")),t.appendChild(this.scrollbarYRail),this.scrollbarY=v(R.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",a),this.event.bind(this.scrollbarY,"blur",r),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var o=g(this.scrollbarYRail);this.scrollbarYRight=parseInt(o.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=T(o.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?O(this.scrollbarY):null,this.railBorderYWidth=T(o.borderTopWidth)+T(o.borderBottomWidth),f(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=T(o.marginTop)+T(o.marginBottom),f(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:t.scrollLeft<=0?"start":t.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:t.scrollTop<=0?"start":t.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach((function(t){return G[t](i)})),this.lastScrollTop=Math.floor(t.scrollTop),this.lastScrollLeft=t.scrollLeft,this.event.bind(this.element,"scroll",(function(t){return i.onScroll(t)})),D(this)};U.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,f(this.scrollbarXRail,{display:"block"}),f(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=T(g(this.scrollbarXRail).marginLeft)+T(g(this.scrollbarXRail).marginRight),this.railYMarginHeight=T(g(this.scrollbarYRail).marginTop)+T(g(this.scrollbarYRail).marginBottom),f(this.scrollbarXRail,{display:"none"}),f(this.scrollbarYRail,{display:"none"}),D(this),L(this,"top",0,!1,!0),L(this,"left",0,!1,!0),f(this.scrollbarXRail,{display:""}),f(this.scrollbarYRail,{display:""}))},U.prototype.onScroll=function(t){this.isAlive&&(D(this),L(this,"top",this.element.scrollTop-this.lastScrollTop),L(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},U.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),w(this.scrollbarX),w(this.scrollbarY),w(this.scrollbarXRail),w(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},U.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter((function(t){return!t.match(/^ps([-_].+|)$/)})).join(" ")};var F=U,J={name:"dashboard",components:{NotificationAlertas:m},data(){return{user:null,isOpen:null,sidebarOpen:!1}},computed:{isAbogado(){return"ABOGADO"===this.user?.usu_rol},rol(){return this.$store.getters.get__user.usu_rol},name(){return this.$store.getters.get__user.name}},mounted(){const t=document.querySelector(".navbar-content");new F(t)},created(){},methods:{async logout(){try{this.$showLoadingAlert("","Cerrando Sesión...");const t={id:null},e=await this.$postData("demandante/logout",this,t);0===e.state?(this.$store.commit("mt_logout_auth"),this.$router.replace({path:"/"})):this.$errorAlert("","Error en la respuesta del servidor")}catch(t){this.$closeLoadingAlert(),this.$handleApiError(t,"Error en la solicitud de cerrar sesión"),this.$errorAlert("",t.message)}finally{this.$closeLoadingAlert()}},toggleSidebar(){this.sidebarOpen=!this.sidebarOpen},closeSidebar(){this.sidebarOpen=!1},showOption(...t){return t.includes(this.rol)},toggleMenu(t){this.isOpen=this.isOpen===t?null:t,this.saveSelected()},saveSelected(){localStorage.setItem("isOpen",this.isOpen)},loadSelect(){const t=localStorage.getItem("isOpen");null!==t&&(this.isOpen=t)},clearLocalStorage(){localStorage.removeItem("isOpen")},mtdLogout(){this.$store.commit("mt_logout_auth"),this.$router.replace({path:"/"}),this.clearLocalStorage()},getRouteHome(){return"/home"===this.$route.path},getRouteExpedienteRegistro(){const t=["/expediente/registro/civil-laboral","/expediente/registro/penal","/expediente/registro/arbitral","/expediente/registro/indecopi"];return t.some((t=>this.isRouteActive(t)))},getRouteExpedienteActualizacion(){const t=["/expediente/actualizacion/civil-laboral/","/expediente/actualizacion/penal/","/expediente/actualizacion/arbitral/","/expediente/actualizacion/indecopi/"];return t.some((t=>this.isRouteActive(t)))},getRouteExpedienteBuscar(){const t=["/expediente/busqueda","/expediente/detalle/","/expediente/lista","/expediente/actualizacion/","/eventos/","/expediente/archivados"];return t.some((t=>this.isRouteActive(t)))},getRouteExpedienteArchivados(){const t=["/expediente/archivados"];return t.some((t=>this.isRouteActive(t)))},getRouteExpediente(){if(this.getRouteExpedienteRegistro()||this.getRouteExpedienteBuscar()||this.getRouteExpedienteActualizacion())return!0},isRouteActive(t){const e=new RegExp(`^${t}\\d*$`);return e.test(this.$route.path)},getRouteDemandante(){const t=["/demandantes","/historial/registro-demandante/","/demandante/informacion/"];return t.some((t=>this.isRouteActive(t)))},getRouteDemandado(){const t=["/demandados","/historial/registro-demandado/","/demandado/informacion/"];return t.some((t=>this.isRouteActive(t)))},getRoutePersonas(){const t=["/personas"];return t.some((t=>this.isRouteActive(t)))},getRouteAbogado(){const t=["/abogados"];return t.some((t=>this.isRouteActive(t)))},getRouteEquipo(){const t=["/equipo"];return t.some((t=>this.isRouteActive(t)))},getRouteCalendario(){return"/calendario"===this.$route.path},getRouteAudiencia(){return"/audiencias"===this.$route.path},getRouteAlerta(){return"/alertas"===this.$route.path},getRouteAgenda(){if(this.getRouteCalendario()||this.getRouteAudiencia()||this.getRouteAlerta())return!0},getRouteReporte(){return"/reportes"===this.$route.path},getRouteMantenimiento(){const t=this.$route.path;return t.includes("/mantenimiento")},getRoutePanel(){return"/panel"===this.$route.path},getRouteEmail(){return"/email/auth"===this.$route.path},getRouteOficioBuscar(){const t=["/oficio/buscar","oficio/lista","oficio/detalle"];return t.some((t=>this.isRouteActive(t)))},getRouteOficioRegistro(){const t=["/oficio/registro"];return t.some((t=>this.isRouteActive(t)))},getRouteOficio(){if(this.getRouteOficioRegistro()||this.getRouteOficioBuscar())return!0}}},V=J,Q=(0,d.A)(V,s,a,!1,null,"26bfbc5c",null),Z=Q.exports},96250:function(t,e,i){t.exports=i.p+"img/alert-triangle-white-32.52fa3de6.svg"},93763:function(t,e,i){t.exports=i.p+"img/logo-unprg.ea335e00.png"},82750:function(t,e,i){t.exports=i.p+"img/user-profile.883bd3b0.png"}}]);
//# sourceMappingURL=3153.db277667.js.map