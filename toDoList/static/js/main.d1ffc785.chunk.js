(this["webpackJsonpcra-redux-default-app"]=this["webpackJsonpcra-redux-default-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,a){t.exports=a(30)},,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),s=a(8),u=a.n(s),r=a(2),l=a(6),i=a(4),d=a(1),o=function(t,e){if(!e)return t;var a=e.id,n=[];return Object(d.a)(t).map((function(t){t.id!==a&&n.push(t)})),n},k=function(t,e){if(!e)return t;var a=e.id,n=Object(d.a)(t);return n.map((function(t,c){t.id===a&&(n[c]=Object(i.a)({},n[c],{},e))})),n},T=function(t){return t?t.id+1:0},b={tasks:[].concat([{text:"\u0421\u044a\u0435\u0437\u0434\u0438\u0442\u044c \u0432 \u0430\u0432\u0442\u043e\u0441\u0430\u043b\u043e\u043d",status:!1,id:0},{text:"\u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u043f\u043b\u044f\u0436\u043d\u044b\u0435 \u0448\u043b\u0435\u043f\u0430\u043d\u0446\u044b",status:!1,id:1},{text:"\u041a\u0443\u043f\u0438\u0442\u044c \u0441\u043e\u043b\u043d\u0435\u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0435 \u043e\u0447\u043a\u0438",status:!0,id:2},{text:"\u0417\u0430\u0435\u0445\u0430\u0442\u044c \u043a \u0420\u043e\u0431\u0443 \u043d\u0430 \u043f\u043b\u044f\u0436",status:!1,id:3},{text:"\u041f\u043e\u0440\u044b\u0431\u0430\u0447\u0438\u0442\u044c \u0432 \u0437\u0430\u043b\u0438\u0432\u0435",status:!0,id:4},{text:"\u041f\u043e\u0447\u0438\u043d\u0438\u0442\u044c \u043a\u0430\u043d\u043e\u044d",status:!1,id:5}]),selectedTasks:[],currentTask:null};var E=Object(l.b)({content:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0,a=Object(d.a)(t.tasks),n=Object(d.a)(t.selectedTasks),c=null,s=null,u={},r=null;switch(e.type){case"ADD_TASK":return r=T(a[a.length-1]),s=e.data,Object(i.a)({},t,{},{tasks:[].concat(Object(d.a)(t.tasks),[{text:s,status:!1,id:r}])});case"REMOVE_TASK":return u=e.data,a=o(Object(d.a)(a),u),n=Object(d.a)(n.filter((function(t){return t!==u.id}))),Object(i.a)({},t,{},{tasks:Object(d.a)(a),selectedTasks:Object(d.a)(n)});case"SELECT_TASK":return c=e.data,a=k(Object(d.a)(a),{id:c,status:!0}),Object(i.a)({},t,{},{selectedTasks:[].concat(Object(d.a)(n),[c]),tasks:Object(d.a)(a)});case"UNSELECT_TASK":return c=e.data,a=k(Object(d.a)(a),{id:c,status:!1}),n=Object(d.a)(t.selectedTasks.filter((function(t){return t!==c}))),Object(i.a)({},t,{},{selectedTasks:Object(d.a)(n),tasks:Object(d.a)(a)});case"UPDATE_TASK":return u=e.data,a=k(Object(d.a)(a),u),Object(i.a)({},t,{},{tasks:Object(d.a)(a)});case"CURRENT_EDIT_TASK":return u=e.data,Object(i.a)({},t,{},{currentTask:u});default:return t}}}),m=Object(l.c)(E,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),f=(a(24),a(25),a(7));a(26);var O=Object(r.b)((function(t){return{currentTask:t.content.currentTask}}),{})((function(t){var e=t.tasks,a=t.handleClick,s=t.currentTask,u=Object(n.useState)(""),r=Object(f.a)(u,2),l=r[0],i=r[1];return Object(n.useEffect)((function(){i("")}),[e]),c.a.createElement("div",{className:"".concat(null!==s?"disabled":"")},c.a.createElement("div",{className:"menu margin-top10"},c.a.createElement("input",{type:"text",value:l,onChange:function(t){i(t.currentTarget.value)},placeholder:"new task...",disabled:null!==s}),c.a.createElement("input",{type:"button",value:"Add Task",onClick:function(){a(l)},disabled:null!==s||!l})))}));a(27);var p={removeTask:function(t){return{type:"REMOVE_TASK",data:t}},selectTask:function(t){return{type:"SELECT_TASK",data:t}},unselectTask:function(t){return{type:"UNSELECT_TASK",data:t}},updateTask:function(t){return{type:"UPDATE_TASK",data:t}},currentEditTask:function(t){return{type:"CURRENT_EDIT_TASK",data:t}}},v=Object(r.b)((function(t){return{currentTask:t.content.currentTask}}),p)((function(t){var e=t.task,a=e.id,s=e.text,u=e.status,r=t.removeTask,l=t.selectTask,i=t.unselectTask,d=t.updateTask,o=t.currentEditTask,k=t.currentTask,T=Object(n.useState)(!1),b=Object(f.a)(T,2),E=b[0],m=b[1],O=Object(n.useState)(s),p=Object(f.a)(O,2),v=p[0],j=p[1];Object(n.useEffect)((function(){j(s),u?l(a):i(a)}),[s]);var _=function(){return null!==k&&k!==a};return c.a.createElement("div",{className:"task margin-top10 ".concat(k&&k.id===a?"enabled":"")},E?c.a.createElement("div",{className:"edit"},c.a.createElement("input",{type:"text",value:v,onChange:function(t){j(t.currentTarget.value)}}),c.a.createElement("div",{className:"button-menu"},c.a.createElement("input",{type:"button",value:"save",onClick:function(){m(!E),d({id:a,text:v}),o(null)},disabled:!v}),c.a.createElement("input",{type:"button",value:"cancel",onClick:function(){m(!E),j(s),o(null)}}),c.a.createElement("input",{type:"button",value:"remove",onClick:function(){m(!E),r({id:a}),o(null)}}))):c.a.createElement("div",{className:"view"},c.a.createElement("label",null,c.a.createElement("div",{className:"text_and_input-menu"},c.a.createElement("input",{type:"checkbox",defaultChecked:u,onChange:function(t){t.currentTarget.checked?l(a):i(a)},disabled:_()}),c.a.createElement("div",{className:"task-text ".concat(u&&"text-strike")},s)),c.a.createElement("div",{className:"button-menu"},c.a.createElement("input",{type:"button",value:"edit",onClick:function(){m(!E),o({id:a,text:s,status:u})},disabled:_()})))))}));function j(t){var e=t.tasks;return c.a.createElement("div",{className:"tasks"},e.map((function(t,e){return c.a.createElement(v,{task:t,key:e})})))}a(28);var _=Object(r.b)((function(t){return{tasks:t.content.tasks,selectedTasks:t.content.selectedTasks,currentTask:t.content.currentTask}}),{})((function(t){var e=t.tasks,a=t.selectedTasks,n=t.currentTask;return c.a.createElement("div",{className:"display margin-top10"},null!==n?"Edit status":"Work status",c.a.createElement("div",null,"Tasks: ".concat(e.length)),c.a.createElement("div",null,"Tasks complete: ".concat(a.length)))}));a(29);var S={addTask:function(t){return{type:"ADD_TASK",data:t}}},N=Object(r.b)((function(t){return{state:t,tasks:t.content.tasks}}),S)((function(t){var e=t.tasks,a=t.addTask;return c.a.createElement("div",{className:"widjet"},c.a.createElement(_,null),c.a.createElement(O,{handleClick:a,tasks:e}),c.a.createElement(j,{tasks:e}))}));u.a.render(c.a.createElement(r.a,{store:m},c.a.createElement(N,null)),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.d1ffc785.chunk.js.map