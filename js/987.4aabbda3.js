"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[987],{82987:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var s=function(){var e=this,t=e._self._c;return t("section",{staticClass:"pc-container pb-4"},[t("div",{staticClass:"pcoded-content"},[e._m(0),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"card shadow border-0"},[t("div",{staticClass:"card-body"},[t("FullCalendar",{staticClass:"demo-app-calendar",attrs:{options:e.calendarOptions},scopedSlots:e._u([{key:"eventContent",fn:function(a){return[t("b",[e._v(e._s(a.timeText))]),t("i",[e._v(e._s(a.event.title))])]}}])})],1)])])])])])},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"row mb-4"},[t("h5",{staticClass:"text-dark fw-bold"},[e._v("Calendario de eventos")])])}],n=(a(44114),a(32104)),r=a(15753),l=a(92447),o=a(88439),d=a(62932),c=a(38280),h={components:{FullCalendar:n.A},created(){this.leer()},data(){return{calendarOptions:{plugins:[r.A,l.A,o.Ay],headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},initialView:"dayGridMonth",weekends:!0,themeSystem:"bootstrap",dayMaxEvents:!0,locale:d.A,events:[]},audiencias:[],audiencias_list:[],alertas:[],alertas_list:[]}},methods:{...(0,c.i0)(["get","post"]),handleWeekendsToggle(){this.calendarOptions.weekends=!this.calendarOptions.weekends},async leer(){try{this.$showLoadingAlert();const e=await this.$getData("calendario",this);console.log(e),this.audiencias=e.audiencias,this.alertas=e.alertas,this.formatEvents(),this.$closeLoadingAlert()}catch(e){this.$handleApiError(e,"leer calendario")}},formatEvents(){const e=[];let t=1;this.audiencias.forEach((a=>{let s=a.porcentaje,i="";i=s<=1&&s>.67?"#17C666":s<=.67&&s>.33?"#fd7e14":"#EA4D4D",e.push({id:t,title:`Audiencia: Expediente :: ${a.exp_numero}`,start:a.au_fecha,backgroundColor:i}),t++})),this.alertas.forEach((a=>{let s=a.ale_porcentaje,i="";i=s<=1&&s>.67?"#17C666":s<=.67&&s>.33?"#fd7e14":"#EA4D4D",e.push({id:t,title:`Alerta: Expediente :: ${a.ale_expediente}`,start:a.ale_fecha_vencimiento,backgroundColor:i}),t++})),this.calendarOptions.events=e},getBackgroundColor(e){return e<=1&&e>.67?"bg-success":e<=.67&&e>.33?"bg-warning":"bg-danger text-white"}}},u=h,p=a(81656),v=(0,p.A)(u,s,i,!1,null,null,null),f=v.exports}}]);
//# sourceMappingURL=987.4aabbda3.js.map