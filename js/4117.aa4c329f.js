"use strict";(self["webpackChunklegalcase"]=self["webpackChunklegalcase"]||[]).push([[4117],{86498:function(e,s,n){n.r(s),n.d(s,{default:function(){return c}});var t=function(){var e=this,s=e._self._c;return s("div",[s("button",{on:{click:e.listMessages}},[e._v("Cargar mensajes")]),e._l(e.messages,(function(n){return s("div",{key:n.id},[s("h2",[e._v(e._s(n.subject))]),s("p",[e._v(e._s(n.snippet))])])}))],2)},a=[],l={data(){return{messages:[]}},methods:{listMessages(){gapi.client.gmail.users.messages.list({userId:"me"}).then((e=>{const s=e.result.messages;s&&s.length>0?this.messages=s.map((e=>({id:e.id,subject:"Asunto del mensaje",snippet:"Fragmento del mensaje"}))):console.log("No new messages.")}))}}},u=l,i=n(81656),r=(0,i.A)(u,t,a,!1,null,null,null),c=r.exports}}]);
//# sourceMappingURL=4117.aa4c329f.js.map