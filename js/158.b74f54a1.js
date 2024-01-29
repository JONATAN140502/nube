"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[158],{77158:function(t,e,s){s.r(e),s.d(e,{default:function(){return vt}});var i=function(){var t=this,e=t._self._c;return null!=t.user?e("div",[e("LayoutNavMobile"),e("LayoutSidebar"),e("LayoutNavbar"),t.isAbogado?e("NotificationAlertas",{staticClass:"notification-alertas"}):t._e(),e("router-view")],1):t._e()},a=[],r=(s(70560),function(){var t=this;t._self._c;return t._m(0)}),n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"pc-mob-header pc-header"},[e("div",{staticClass:"pcm-logo"},[e("img",{staticClass:"img-fluid",attrs:{src:s(4979),alt:""}})]),e("div",{staticClass:"pcm-toolbar"},[e("a",{staticClass:"pc-head-link",attrs:{id:"mobile-collapse"}},[e("div",{staticClass:"hamburger hamburger--arrowturn"},[e("div",{staticClass:"hamburger-box"},[e("div",{staticClass:"hamburger-inner"})])])]),e("a",{staticClass:"pc-head-link",attrs:{id:"header-collapse"}},[e("i",{attrs:{"data-feather":"more-vertical"}})])])])}],l=s(98164),o=s.n(l),c={name:"LayoutNavMobile",mounted(){this.$nextTick((()=>{o().replace()}))}},u=c,h=s(1001),d=(0,h.Z)(u,r,n,!1,null,"fed67c4c",null),p=d.exports,g=function(){var t=this,e=t._self._c;return e("header",{staticClass:"pc-header"},[e("div",{staticClass:"header-wrapper"},[t._m(0),e("div",{staticClass:"ml-auto"},[e("ul",{staticClass:"list-unstyled"},[e("li",{staticClass:"pc-h-item"},[e("a",{staticClass:"pc-head-link mr-0 rounded",attrs:{href:"javascript:void(0)"}},[e("div",{staticClass:"circle"},[t._v(t._s(t.userName.charAt(0)))]),e("span",{staticClass:"px-2"},[e("span",{staticClass:"user-name"},[t._v(t._s(t.userName))]),e("span",{staticClass:"user-desc text-secondary"},[t._v(t._s(t.user_rol))])])])])])])])])},m=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mr-auto pc-mob-drp"},[e("ul",{staticClass:"list-unstyled"},[e("li",{staticClass:"dropdown pc-h-item"})])])}],f=s(63822),v={name:"LayoutNavbar",data(){return{user_rol:null}},computed:{userName(){return this.$store.getters.get__user.datos.nombres},userRole(){return this.$store.getters.get__user.usu_rol}},methods:{...(0,f.nv)(["get","post"]),getRole(){"ADMIN"===this.userRole?this.user_rol="Administrador":"ABOGADO"===this.userRole&&(this.user_rol="Abogado")},mtdLogout:function(){this.$store.commit("mt_logout_auth"),this.$router.replace({path:"/"})}},mounted(){this.$nextTick((()=>{o().replace()}))},created(){this.getRole()}},b=v,_=(0,h.Z)(b,g,m,!1,null,"2219c920",null),w=_.exports,C=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"pc-sidebar"},[e("div",{staticClass:"navbar-wrapper"},[t._m(0),e("div",{staticClass:"navbar-content"},[e("ul",{staticClass:"pc-navbar py-4"},[e("li",{staticClass:"pc-item pc-hasmenu",on:{click:function(e){return t.toggleMenu("home")}}},[e("router-link",{staticClass:"pc-link",class:{"bg-primary text-white rounded":t.getRouteHome()},attrs:{to:"/sisge"}},[e("span",{staticClass:"pr-3"},[e("i",{attrs:{"data-feather":"box"}})]),e("span",{staticClass:"pc-mtext"},[t._v("Inicio")])])],1),e("li",{staticClass:"pc-item pc-hasmenu"},[e("a",{staticClass:"pc-link",class:{selected:"expediente"===t.isOpen&&!t.getRouteExpediente(),"bg-primary text-white rounded":t.getRouteExpediente()},attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.toggleMenu("expediente")}}},[t._m(1),e("span",{staticClass:"pc-mtext",class:{"text-primary":"expediente"===t.isOpen,"text-white":t.getRouteExpediente()}},[t._v("Expediente")]),e("span",{staticClass:"pc-arrow",class:{"rotate-down":"expediente"===t.isOpen}},[e("i",{attrs:{"data-feather":"chevron-right"}})])]),e("ul",{directives:[{name:"show",rawName:"v-show",value:"expediente"===t.isOpen,expression:"isOpen === 'expediente'"}],staticClass:"pc-submenu"},[e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",class:{"text-primary":t.getRouteExpedienteRegistro()},attrs:{to:"/sisge/expediente/registro"}},[t._v(" Registrar ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",class:{"text-primary":t.getRouteExpedienteBuscar()},attrs:{to:"/sisge/expediente/busqueda"}},[t._v(" Buscar ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",class:{"text-primary":t.getRouteExpedienteArchivados()},attrs:{to:"/sisge/expediente/archivados"}},[t._v(" Archivados ")])],1)])]),e("li",{staticClass:"pc-item pc-hasmenu"},[e("a",{staticClass:"pc-link",class:{selected:"partesProcesales"===t.isOpen&&!t.getRouteProcesal(),"bg-primary text-white rounded":t.getRouteProcesal()},attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.toggleMenu("partesProcesales")}}},[t._m(2),e("span",{staticClass:"pc-mtext",class:{"text-primary":"partesProcesales"===t.isOpen,"text-white":t.getRouteProcesal()}},[t._v("Partes Procesales")]),e("span",{staticClass:"pc-arrow",class:{"rotate-down":"partesProcesales"===t.isOpen}},[e("i",{attrs:{"data-feather":"chevron-right"}})])]),e("ul",{directives:[{name:"show",rawName:"v-show",value:"partesProcesales"===t.isOpen,expression:"isOpen === 'partesProcesales'"}],staticClass:"pc-submenu"},[e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",class:{"text-primary":t.getRouteDemandante()},attrs:{to:"/sisge/demandantes"}},[t._v(" Demandantes ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",class:{"text-primary":t.getRouteDemandado()},attrs:{to:"/sisge/demandados"}},[t._v(" Demandados ")])],1)])]),"ADMIN"==t.rol?e("li",{staticClass:"pc-item pc-hasmenu"},[e("a",{staticClass:"pc-link",class:{selected:"equipo"===t.isOpen&&!t.getRouteEquipo(),"bg-primary text-white rounded":t.getRouteEquipo()},attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.toggleMenu("equipo")}}},[t._m(3),e("span",{staticClass:"pc-mtext",class:{"text-primary":"equipo"===t.isOpen,"text-white":t.getRouteEquipo()}},[t._v("Equipo UNPRG")]),e("span",{staticClass:"pc-arrow",class:{"rotate-down":"equipo"===t.isOpen}},[e("i",{attrs:{"data-feather":"chevron-right"}})])]),e("ul",{directives:[{name:"show",rawName:"v-show",value:"equipo"===t.isOpen,expression:"isOpen === 'equipo'"}],staticClass:"pc-submenu"},[e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",class:{"text-primary":t.getRouteAbogado()},attrs:{to:"/sisge/abogados"}},[t._v(" Abogados ")])],1)])]):t._e(),e("li",{staticClass:"pc-item pc-hasmenu"},[e("a",{staticClass:"pc-link",class:{selected:"agenda"===t.isOpen&&!t.getRouteAgenda(),"bg-primary text-white rounded":t.getRouteAgenda()},attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.toggleMenu("agenda")}}},[t._m(4),e("span",{staticClass:"pc-mtext",class:{"text-primary":"agenda"===t.isOpen,"text-white":t.getRouteAgenda()}},[t._v("Agenda")]),e("span",{staticClass:"pc-arrow",class:{"rotate-down":"agenda"===t.isOpen}},[e("i",{attrs:{"data-feather":"chevron-right"}})])]),e("ul",{directives:[{name:"show",rawName:"v-show",value:"agenda"===t.isOpen,expression:"isOpen === 'agenda'"}],staticClass:"pc-submenu"},[e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",class:{"text-primary":t.getRouteCalendario()},attrs:{to:"/sisge/calendario"}},[t._v(" Calendario ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",class:{"text-primary":t.getRouteAudiencia()},attrs:{to:"/sisge/audiencias"}},[t._v(" Audiencias ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",class:{"text-primary":t.getRouteAlerta()},attrs:{to:"/sisge/alertas"}},[t._v(" Alertas ")])],1)])]),e("li",{staticClass:"pc-item pc-hasmenu",on:{click:function(e){return t.toggleMenu("reporte")}}},[e("router-link",{staticClass:"pc-link",class:{"bg-primary text-white rounded":t.getRouteReporte()},attrs:{to:"/sisge/reportes"}},[e("span",{staticClass:"pr-3"},[e("i",{attrs:{"data-feather":"file-text"}})]),e("span",{staticClass:"pc-mtext"},[t._v("Reportes")])])],1),"ADMIN"==t.rol?e("li",{staticClass:"pc-item pc-hasmenu"},[e("a",{staticClass:"pc-link",class:{selected:"mantenimiento"===t.isOpen&&!t.getRouteMantenimiento(),"bg-primary text-white rounded":t.getRouteMantenimiento()},attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.toggleMenu("mantenimiento")}}},[t._m(5),e("span",{staticClass:"pc-mtext",class:{"text-primary":"mantenimiento"===t.isOpen,"text-white":t.getRouteMantenimiento()}},[t._v("Mantenimiento")]),e("span",{staticClass:"pc-arrow",class:{"rotate-down":"mantenimiento"===t.isOpen}},[e("i",{attrs:{"data-feather":"chevron-right"}})])]),e("ul",{directives:[{name:"show",rawName:"v-show",value:"mantenimiento"===t.isOpen,expression:"isOpen === 'mantenimiento'"}],staticClass:"pc-submenu"},[e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/sisge/mantenimiento/distritos-judiciales"}},[t._v(" Distrito Judicial ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/sisge/mantenimiento/instancia"}},[t._v(" Instancias ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/sisge/mantenimiento/especialidad"}},[t._v(" Especialidad ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/sisge/mantenimiento/materias"}},[t._v(" Materias ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/sisge/mantenimiento/pretension"}},[t._v(" Pretensiones ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/sisge/mantenimiento/organo-jurisdiccional"}},[t._v(" Organo Jurisdiccional ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/sisge/mantenimiento/cambio-abogado"}},[t._v(" Cambio de Abogado ")])],1),e("li",{staticClass:"pc-item"},[e("router-link",{staticClass:"pc-link",attrs:{to:"/sisge/mantenimiento/eliminar-expediente"}},[t._v(" Eliminar Expediente ")])],1)])]):t._e(),e("div",{staticClass:"col-md-12 py-4 px-2"},[e("button",{staticClass:"btn btn-danger w-100 rounded",on:{click:t.mtdLogout}},[t._v("Salir "),t._m(6)])])])])])])},y=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-header bg-white"},[e("a",{staticClass:"b-brand",attrs:{href:"#"}},[e("img",{staticClass:"img-fluid",attrs:{src:s(4979),alt:""}})])])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"pr-3"},[e("i",{attrs:{"data-feather":"layers"}})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"pr-3"},[e("i",{attrs:{"data-feather":"users"}})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"pr-3"},[e("i",{attrs:{"data-feather":"user"}})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"pr-3"},[e("i",{attrs:{"data-feather":"calendar"}})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"pr-3"},[e("i",{attrs:{"data-feather":"settings"}})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"text-white px-2"},[e("i",{attrs:{"data-feather":"log-out"}})])}];
/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */
function R(t){return getComputedStyle(t)}function x(t,e){for(var s in e){var i=e[s];"number"===typeof i&&(i+="px"),t.style[s]=i}return t}function Y(t){var e=document.createElement("div");return e.className=t,e}var k="undefined"!==typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function A(t,e){if(!k)throw new Error("No element matching method supported");return k.call(t,e)}function X(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function L(t,e){return Array.prototype.filter.call(t.children,(function(t){return A(t,e)}))}var W={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},E={x:null,y:null};function S(t,e){var s=t.element.classList,i=W.state.scrolling(e);s.contains(i)?clearTimeout(E[e]):s.add(i)}function T(t,e){E[e]=setTimeout((function(){return t.isAlive&&t.element.classList.remove(W.state.scrolling(e))}),t.settings.scrollingThreshold)}function M(t,e){S(t,e),T(t,e)}var H=function(t){this.element=t,this.handlers={}},O={isEmpty:{configurable:!0}};H.prototype.bind=function(t,e){"undefined"===typeof this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},H.prototype.unbind=function(t,e){var s=this;this.handlers[t]=this.handlers[t].filter((function(i){return!(!e||i===e)||(s.element.removeEventListener(t,i,!1),!1)}))},H.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)},O.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every((function(e){return 0===t.handlers[e].length}))},Object.defineProperties(H.prototype,O);var P=function(){this.eventElements=[]};function D(t){if("function"===typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function N(t,e,s,i,a){var r;if(void 0===i&&(i=!0),void 0===a&&(a=!1),"top"===e)r=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");r=["contentWidth","containerWidth","scrollLeft","x","left","right"]}$(t,s,r,i,a)}function $(t,e,s,i,a){var r=s[0],n=s[1],l=s[2],o=s[3],c=s[4],u=s[5];void 0===i&&(i=!0),void 0===a&&(a=!1);var h=t.element;t.reach[o]=null,h[l]<1&&(t.reach[o]="start"),h[l]>t[r]-t[n]-1&&(t.reach[o]="end"),e&&(h.dispatchEvent(D("ps-scroll-"+o)),e<0?h.dispatchEvent(D("ps-scroll-"+c)):e>0&&h.dispatchEvent(D("ps-scroll-"+u)),i&&M(t,o)),t.reach[o]&&(e||a)&&h.dispatchEvent(D("ps-"+o+"-reach-"+t.reach[o]))}function B(t){return parseInt(t,10)||0}function I(t){return A(t,"input,[contenteditable]")||A(t,"select,[contenteditable]")||A(t,"textarea,[contenteditable]")||A(t,"button,[contenteditable]")}function j(t){var e=R(t);return B(e.width)+B(e.paddingLeft)+B(e.paddingRight)+B(e.borderLeftWidth)+B(e.borderRightWidth)}P.prototype.eventElement=function(t){var e=this.eventElements.filter((function(e){return e.element===t}))[0];return e||(e=new H(t),this.eventElements.push(e)),e},P.prototype.bind=function(t,e,s){this.eventElement(t).bind(e,s)},P.prototype.unbind=function(t,e,s){var i=this.eventElement(t);i.unbind(e,s),i.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(i),1)},P.prototype.unbindAll=function(){this.eventElements.forEach((function(t){return t.unbindAll()})),this.eventElements=[]},P.prototype.once=function(t,e,s){var i=this.eventElement(t),a=function(t){i.unbind(e,a),s(t)};i.bind(e,a)};var q={isWebKit:"undefined"!==typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!==typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!==typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!==typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)};function K(t){var e=t.element,s=Math.floor(e.scrollTop),i=e.getBoundingClientRect();t.containerWidth=Math.round(i.width),t.containerHeight=Math.round(i.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(L(e,W.element.rail("x")).forEach((function(t){return X(t)})),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(L(e,W.element.rail("y")).forEach((function(t){return X(t)})),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=U(t,B(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=B((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=U(t,B(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=B(s*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),z(e,t),t.scrollbarXActive?e.classList.add(W.state.active("x")):(e.classList.remove(W.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=!0===t.isRtl?t.contentWidth:0),t.scrollbarYActive?e.classList.add(W.state.active("y")):(e.classList.remove(W.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function U(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function z(t,e){var s={width:e.railXWidth},i=Math.floor(t.scrollTop);e.isRtl?s.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:s.left=t.scrollLeft,e.isScrollbarXUsingBottom?s.bottom=e.scrollbarXBottom-i:s.top=e.scrollbarXTop+i,x(e.scrollbarXRail,s);var a={top:i,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?a.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:a.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?a.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:a.left=e.scrollbarYLeft+t.scrollLeft,x(e.scrollbarYRail,a),x(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),x(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function Z(t){t.element;t.event.bind(t.scrollbarY,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarYRail,"mousedown",(function(e){var s=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top,i=s>t.scrollbarYTop?1:-1;t.element.scrollTop+=i*t.containerHeight,K(t),e.stopPropagation()})),t.event.bind(t.scrollbarX,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarXRail,"mousedown",(function(e){var s=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left,i=s>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=i*t.containerWidth,K(t),e.stopPropagation()}))}function V(t){F(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),F(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function F(t,e){var s=e[0],i=e[1],a=e[2],r=e[3],n=e[4],l=e[5],o=e[6],c=e[7],u=e[8],h=t.element,d=null,p=null,g=null;function m(e){e.touches&&e.touches[0]&&(e[a]=e.touches[0].pageY),h[o]=d+g*(e[a]-p),S(t,c),K(t),e.stopPropagation(),e.type.startsWith("touch")&&e.changedTouches.length>1&&e.preventDefault()}function f(){T(t,c),t[u].classList.remove(W.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",m)}function v(e,n){d=h[o],n&&e.touches&&(e[a]=e.touches[0].pageY),p=e[a],g=(t[i]-t[s])/(t[r]-t[l]),n?t.event.bind(t.ownerDocument,"touchmove",m):(t.event.bind(t.ownerDocument,"mousemove",m),t.event.once(t.ownerDocument,"mouseup",f),e.preventDefault()),t[u].classList.add(W.state.clicking),e.stopPropagation()}t.event.bind(t[n],"mousedown",(function(t){v(t)})),t.event.bind(t[n],"touchstart",(function(t){v(t,!0)}))}function G(t){var e=t.element,s=function(){return A(e,":hover")},i=function(){return A(t.scrollbarX,":focus")||A(t.scrollbarY,":focus")};function a(s,i){var a=Math.floor(e.scrollTop);if(0===s){if(!t.scrollbarYActive)return!1;if(0===a&&i>0||a>=t.contentHeight-t.containerHeight&&i<0)return!t.settings.wheelPropagation}var r=e.scrollLeft;if(0===i){if(!t.scrollbarXActive)return!1;if(0===r&&s<0||r>=t.contentWidth-t.containerWidth&&s>0)return!t.settings.wheelPropagation}return!0}t.event.bind(t.ownerDocument,"keydown",(function(r){if(!(r.isDefaultPrevented&&r.isDefaultPrevented()||r.defaultPrevented)&&(s()||i())){var n=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(n){if("IFRAME"===n.tagName)n=n.contentDocument.activeElement;else while(n.shadowRoot)n=n.shadowRoot.activeElement;if(I(n))return}var l=0,o=0;switch(r.which){case 37:l=r.metaKey?-t.contentWidth:r.altKey?-t.containerWidth:-30;break;case 38:o=r.metaKey?t.contentHeight:r.altKey?t.containerHeight:30;break;case 39:l=r.metaKey?t.contentWidth:r.altKey?t.containerWidth:30;break;case 40:o=r.metaKey?-t.contentHeight:r.altKey?-t.containerHeight:-30;break;case 32:o=r.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:o=t.containerHeight;break;case 34:o=-t.containerHeight;break;case 36:o=t.contentHeight;break;case 35:o=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==l||t.settings.suppressScrollY&&0!==o||(e.scrollTop-=o,e.scrollLeft+=l,K(t),a(l,o)&&r.preventDefault())}}))}function J(t){var e=t.element;function s(s,i){var a,r=Math.floor(e.scrollTop),n=0===e.scrollTop,l=r+e.offsetHeight===e.scrollHeight,o=0===e.scrollLeft,c=e.scrollLeft+e.offsetWidth===e.scrollWidth;return a=Math.abs(i)>Math.abs(s)?n||l:o||c,!a||!t.settings.wheelPropagation}function i(t){var e=t.deltaX,s=-1*t.deltaY;return"undefined"!==typeof e&&"undefined"!==typeof s||(e=-1*t.wheelDeltaX/6,s=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,s*=10),e!==e&&s!==s&&(e=0,s=t.wheelDelta),t.shiftKey?[-s,-e]:[e,s]}function a(t,s,i){if(!q.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(t))return!1;var a=t;while(a&&a!==e){if(a.classList.contains(W.element.consuming))return!0;var r=R(a);if(i&&r.overflowY.match(/(scroll|auto)/)){var n=a.scrollHeight-a.clientHeight;if(n>0&&(a.scrollTop>0&&i<0||a.scrollTop<n&&i>0))return!0}if(s&&r.overflowX.match(/(scroll|auto)/)){var l=a.scrollWidth-a.clientWidth;if(l>0&&(a.scrollLeft>0&&s<0||a.scrollLeft<l&&s>0))return!0}a=a.parentNode}return!1}function r(r){var n=i(r),l=n[0],o=n[1];if(!a(r.target,l,o)){var c=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(o?e.scrollTop-=o*t.settings.wheelSpeed:e.scrollTop+=l*t.settings.wheelSpeed,c=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(l?e.scrollLeft+=l*t.settings.wheelSpeed:e.scrollLeft-=o*t.settings.wheelSpeed,c=!0):(e.scrollTop-=o*t.settings.wheelSpeed,e.scrollLeft+=l*t.settings.wheelSpeed),K(t),c=c||s(l,o),c&&!r.ctrlKey&&(r.stopPropagation(),r.preventDefault())}}"undefined"!==typeof window.onwheel?t.event.bind(e,"wheel",r):"undefined"!==typeof window.onmousewheel&&t.event.bind(e,"mousewheel",r)}function Q(t){if(q.supportsTouch||q.supportsIePointer){var e=t.element,s={},i=0,a={},r=null;q.supportsTouch?(t.event.bind(e,"touchstart",u),t.event.bind(e,"touchmove",d),t.event.bind(e,"touchend",p)):q.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",u),t.event.bind(e,"pointermove",d),t.event.bind(e,"pointerup",p)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",u),t.event.bind(e,"MSPointerMove",d),t.event.bind(e,"MSPointerUp",p)))}function n(s,i){var a=Math.floor(e.scrollTop),r=e.scrollLeft,n=Math.abs(s),l=Math.abs(i);if(l>n){if(i<0&&a===t.contentHeight-t.containerHeight||i>0&&0===a)return 0===window.scrollY&&i>0&&q.isChrome}else if(n>l&&(s<0&&r===t.contentWidth-t.containerWidth||s>0&&0===r))return!0;return!0}function l(s,i){e.scrollTop-=i,e.scrollLeft-=s,K(t)}function o(t){return t.targetTouches?t.targetTouches[0]:t}function c(t){return(!t.pointerType||"pen"!==t.pointerType||0!==t.buttons)&&(!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function u(t){if(c(t)){var e=o(t);s.pageX=e.pageX,s.pageY=e.pageY,i=(new Date).getTime(),null!==r&&clearInterval(r)}}function h(t,s,i){if(!e.contains(t))return!1;var a=t;while(a&&a!==e){if(a.classList.contains(W.element.consuming))return!0;var r=R(a);if(i&&r.overflowY.match(/(scroll|auto)/)){var n=a.scrollHeight-a.clientHeight;if(n>0&&(a.scrollTop>0&&i<0||a.scrollTop<n&&i>0))return!0}if(s&&r.overflowX.match(/(scroll|auto)/)){var l=a.scrollWidth-a.clientWidth;if(l>0&&(a.scrollLeft>0&&s<0||a.scrollLeft<l&&s>0))return!0}a=a.parentNode}return!1}function d(t){if(c(t)){var e=o(t),r={pageX:e.pageX,pageY:e.pageY},u=r.pageX-s.pageX,d=r.pageY-s.pageY;if(h(t.target,u,d))return;l(u,d),s=r;var p=(new Date).getTime(),g=p-i;g>0&&(a.x=u/g,a.y=d/g,i=p),n(u,d)&&t.preventDefault()}}function p(){t.settings.swipeEasing&&(clearInterval(r),r=setInterval((function(){t.isInitialized?clearInterval(r):a.x||a.y?Math.abs(a.x)<.01&&Math.abs(a.y)<.01?clearInterval(r):t.element?(l(30*a.x,30*a.y),a.x*=.8,a.y*=.8):clearInterval(r):clearInterval(r)}),10))}}var tt=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},et={"click-rail":Z,"drag-thumb":V,keyboard:G,wheel:J,touch:Q},st=function(t,e){var s=this;if(void 0===e&&(e={}),"string"===typeof t&&(t=document.querySelector(t)),!t||!t.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var i in this.element=t,t.classList.add(W.main),this.settings=tt(),e)this.settings[i]=e[i];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var a=function(){return t.classList.add(W.state.focus)},r=function(){return t.classList.remove(W.state.focus)};this.isRtl="rtl"===R(t).direction,!0===this.isRtl&&t.classList.add(W.rtl),this.isNegativeScroll=function(){var e=t.scrollLeft,s=null;return t.scrollLeft=-1,s=t.scrollLeft<0,t.scrollLeft=e,s}(),this.negativeScrollAdjustment=this.isNegativeScroll?t.scrollWidth-t.clientWidth:0,this.event=new P,this.ownerDocument=t.ownerDocument||document,this.scrollbarXRail=Y(W.element.rail("x")),t.appendChild(this.scrollbarXRail),this.scrollbarX=Y(W.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",a),this.event.bind(this.scrollbarX,"blur",r),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var n=R(this.scrollbarXRail);this.scrollbarXBottom=parseInt(n.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=B(n.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=B(n.borderLeftWidth)+B(n.borderRightWidth),x(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=B(n.marginLeft)+B(n.marginRight),x(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=Y(W.element.rail("y")),t.appendChild(this.scrollbarYRail),this.scrollbarY=Y(W.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",a),this.event.bind(this.scrollbarY,"blur",r),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var l=R(this.scrollbarYRail);this.scrollbarYRight=parseInt(l.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=B(l.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?j(this.scrollbarY):null,this.railBorderYWidth=B(l.borderTopWidth)+B(l.borderBottomWidth),x(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=B(l.marginTop)+B(l.marginBottom),x(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:t.scrollLeft<=0?"start":t.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:t.scrollTop<=0?"start":t.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach((function(t){return et[t](s)})),this.lastScrollTop=Math.floor(t.scrollTop),this.lastScrollLeft=t.scrollLeft,this.event.bind(this.element,"scroll",(function(t){return s.onScroll(t)})),K(this)};st.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,x(this.scrollbarXRail,{display:"block"}),x(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=B(R(this.scrollbarXRail).marginLeft)+B(R(this.scrollbarXRail).marginRight),this.railYMarginHeight=B(R(this.scrollbarYRail).marginTop)+B(R(this.scrollbarYRail).marginBottom),x(this.scrollbarXRail,{display:"none"}),x(this.scrollbarYRail,{display:"none"}),K(this),N(this,"top",0,!1,!0),N(this,"left",0,!1,!0),x(this.scrollbarXRail,{display:""}),x(this.scrollbarYRail,{display:""}))},st.prototype.onScroll=function(t){this.isAlive&&(K(this),N(this,"top",this.element.scrollTop-this.lastScrollTop),N(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},st.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),X(this.scrollbarX),X(this.scrollbarY),X(this.scrollbarXRail),X(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},st.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter((function(t){return!t.match(/^ps([-_].+|)$/)})).join(" ")};var it=st,at={name:"LayoutSidebar",data(){return{isOpen:null}},computed:{rol(){return this.$store.getters.get__user.usu_rol}},created(){this.loadSelect()},mounted(){const t=document.querySelector(".navbar-content"),e=new it(t);this.$once("hook:beforeDestroy",(()=>{e.destroy()})),this.$nextTick((()=>{o().replace()}))},methods:{toggleMenu(t){this.isOpen=this.isOpen===t?null:t,this.saveSelected()},saveSelected(){localStorage.setItem("isOpen",this.isOpen)},loadSelect(){const t=localStorage.getItem("isOpen");null!==t&&(this.isOpen=t)},clearLocalStorage(){localStorage.removeItem("isOpen")},mtdLogout(){this.$store.commit("mt_logout_auth"),this.$router.replace({path:"/"}),this.clearLocalStorage()},getRouteHome(){return"/sisge"===this.$route.path},getRouteExpedienteRegistro(){const t=["/sisge/expediente/registro"];return t.some((t=>this.isRouteActive(t)))},getRouteExpedienteBuscar(){const t=["/sisge/expediente/busqueda","/sisge/expediente/detalle/","/sisge/expediente/lista","/sisge/expediente/actualizacion/","/sisge/eventos/","/sisge/archivos/"];return t.some((t=>this.isRouteActive(t)))},getRouteExpedienteArchivados(){const t=["/sisge/expediente/archivados"];return t.some((t=>this.isRouteActive(t)))},getRouteExpediente(){if(this.getRouteExpedienteRegistro()||this.getRouteExpedienteBuscar())return!0},isRouteActive(t){const e=new RegExp(`^${t}\\d*$`);return e.test(this.$route.path)},getRouteDemandante(){const t=["/sisge/demandantes","/sisge/historial/registro-demandante/","/sisge/demandante/informacion/"];return t.some((t=>this.isRouteActive(t)))},getRouteDemandado(){const t=["/sisge/demandados","/sisge/historial/registro-demandado/","/sisge/demandado/informacion/"];return t.some((t=>this.isRouteActive(t)))},getRouteProcesal(){if(this.getRouteDemandante()||this.getRouteDemandado())return!0},getRouteAbogado(){const t=["/sisge/abogados"];return t.some((t=>this.isRouteActive(t)))},getRouteEquipo(){if(this.getRouteAbogado())return!0},getRouteCalendario(){return"/sisge/calendario"===this.$route.path},getRouteAudiencia(){return"/sisge/audiencias"===this.$route.path},getRouteAlerta(){return"/sisge/alertas"===this.$route.path},getRouteAgenda(){if(this.getRouteCalendario()||this.getRouteAudiencia()||this.getRouteAlerta())return!0},getRouteReporte(){return"/sisge/reportes"===this.$route.path},getRouteMantenimiento(){const t=this.$route.path;return t.includes("/sisge/mantenimiento")}}},rt=at,nt=(0,h.Z)(rt,C,y,!1,null,"2ebdca24",null),lt=nt.exports,ot=function(){var t=this,e=t._self._c;return e("div",[t._l(t.alertas,(function(s){return e("div",{directives:[{name:"show",rawName:"v-show",value:s.alertaVisible,expression:"alerta.alertaVisible"}],key:s.id,staticClass:"ale",class:t.getColorClass(s.ale_porcentaje)},[t._m(0,!0),e("div",{staticClass:"ale-body"},[e("span",{staticClass:"ale-descripcion"},[t._v(t._s(s.ale_descripcion))]),e("span",{staticClass:"ale-fecha"},[t._v(t._s(s.ale_fecha_vencimiento))])])])})),t._l(t.audiencias,(function(s){return e("div",{key:s.id,staticClass:"aud"},[t._m(1,!0),e("div",{staticClass:"aud-body"},[e("span",{staticClass:"aud-descripcion"},[t._v(t._s(s.au_detalles))]),e("span",{staticClass:"aud-fecha"},[t._v(t._s(s.au_fecha))])])])}))],2)},ct=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"ale-icon"},[e("img",{attrs:{src:s(29328),alt:""}})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"aud-icon"},[e("img",{attrs:{src:s(29328),alt:""}})])}],ut={name:"notificationAlertas",data(){return{expedientesAsignados:[],alertas:[],audiencias:[],alertasMostradasHoy:0}},computed:{...(0,f.Se)(["get__user","get__aboid","get__url","get__token"]),userRole(){return this.get__user.usu_rol},userAbogado(){return this.get__aboid}},mounted(){this.$nextTick((()=>{o().replace()}))},methods:{...(0,f.nv)(["post"]),async listExpedientes(){try{const t=await this.post({url:`${this.get__url}/lawyer/expedientes`,token:this.get__token,params:{abo_id:this.userAbogado}});this.expedientesAsignados=t.data,console.log("expedientes_asignados",t)}catch(t){console.error(t)}},mostrarSiguienteAlerta(){if(this.alertas.length>0){const t=this.alertas[0],e=this.getFrecuenciaMostrar(t.ale_porcentaje);e>0?(this.$set(t,"alertaVisible",!0),setTimeout((()=>{this.$set(t,"alertaVisible",!1),this.alertas.shift(),this.alertasMostradasHoy++,this.alertasMostradasHoy<e||(this.alertasMostradasHoy=0),setTimeout((()=>{this.mostrarSiguienteAlerta()}),250)}),3e3)):(this.alertas.shift(),this.mostrarSiguienteAlerta())}},getFrecuenciaMostrar(t){return t>=.63&&t<=1?1:t>=.33&&t<.63?3:t<.33?5:0},getColorClass(t){return t>.67&&t<=1?"color-azul":t>.33&&t<=.67?"color-naranja":t<=.33?"color-rojo":""},async listAlertas(){try{const t=await this.post({url:`${this.get__url}/lawyer/alertas`,token:this.get__token,params:{abo_id:this.userAbogado}});0===t.state&&t.data?(this.alertas=t.data,setTimeout((()=>{this.mostrarSiguienteAlerta()}),3e3),console.log("alertas",t),console.log(this.userAbogado)):console.error("Error en la respuesta del servidor:",t)}catch(t){console.error("Error en la solicitud:",t)}},async listAudiencias(){try{const t=await this.post({url:`${this.get__url}/lawyer/audiencias`,token:this.get__token,params:{abo_id:this.userAbogado}});this.audiencias=t.data,console.log("audiencias",t)}catch(t){console.error(t)}}},created(){this.listExpedientes(),this.listAlertas()}},ht=ut,dt=(0,h.Z)(ht,ot,ct,!1,null,"039eb898",null),pt=dt.exports,gt={name:"sgel",components:{LayoutNavMobile:p,LayoutNavbar:w,LayoutSidebar:lt,NotificationAlertas:pt},data(){return{user:null,rol:null}},computed:{isAbogado(){return"ABOGADO"===this.user?.usu_rol}},created(){this.user=this.$store.getters.get__user.name,this.rol=this.$store.getters.get__user.usu_rol,null===this.user&&this.$router.push({path:"/"})}},mt=gt,ft=(0,h.Z)(mt,i,a,!1,null,"4166fe3d",null),vt=ft.exports},29328:function(t,e,s){t.exports=s.p+"img/alert-triangle-white-32.52fa3de6.svg"},4979:function(t,e,s){t.exports=s.p+"img/logo-unprg.ea335e00.png"}}]);
//# sourceMappingURL=158.b74f54a1.js.map