(this["webpackJsonppersonal-page"]=this["webpackJsonppersonal-page"]||[]).push([[0],Array(29).concat([function(e,t,a){e.exports=a.p+"static/media/phone-icon.887e391a.svg"},function(e,t,a){e.exports=a.p+"static/media/mail-icon.e3c53929.svg"},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/vertical_line.9e2832b1.svg"},function(e,t,a){e.exports=a.p+"static/media/notification-icon.14235d44.svg"},function(e,t,a){e.exports=a.p+"static/media/user-avatar.3a8d3a0a.svg"},,function(e,t,a){e.exports=a.p+"static/media/user-card.4f990247.svg"},,function(e,t,a){e.exports=a(78)},,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),i=a.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o,l=a(2),s=a(28);!function(e){e.HOME="/",e.HISTORY="/history",e.CONTACTS="/contacts",e.LOGIN="/login"}(o||(o={}));var u,m="/";!function(e){e.HOME="\u0413\u043b\u0430\u0432\u043d\u0430\u044f",e.HISTORY="\u0418\u0441\u0442\u043e\u0440\u0438\u044f",e.CONTACTS="\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}(u||(u={}));var d,O,E,b=a(7),f=function(e){return e.authorization},p=a(3),h=a.n(p),v=a(8),N=a(14),T=a(80),j=new function e(){var t=this;Object(N.a)(this,e),this.prefix="NOTIFICATION",this.SET_CONTENT="".concat(this.prefix,".SET_CONTENT"),this.SET_SHOW="".concat(this.prefix,".SET_SHOW"),this.setContent=Object(T.a)(this.SET_CONTENT),this.setShow=Object(T.a)(this.SET_SHOW),this.updateContent=function(e){return function(){var a=Object(v.a)(h.a.mark((function a(n){return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:try{n(t.setContent(e)),n(t.setShow(!0))}catch(c){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u043c\u0435\u0442\u043e\u0434\u0435 updateContent: ",c)}case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}},C=a(4),_=a(1),S=a(79),g=(d={},Object(C.a)(d,j.SET_CONTENT,(function(e,t){return Object(_.a)(Object(_.a)({},e),{},{content:t.payload})})),Object(C.a)(d,j.SET_SHOW,(function(e,t){return Object(_.a)(Object(_.a)({},e),{},{isShow:t.payload})})),d),L=Object(S.a)(g,{content:"",isShow:!1,error:""}),A=function(e){return e.notifications};!function(e){e.LITTLE="LITTLE",e.NORMAL="NORMAL",e.BIG="BIG"}(O||(O={})),function(e){e.DEFAULT="DEFAULT",e.SUCCESS="SUCCESS",e.ERROR="ERROR",e.NORMAL="NORMAL"}(E||(E={}));var I,R=a(10),y=a.n(R),U=(a(55),Object(n.memo)((function(e){var t=e.onClick,a=e.title,r=e.type,i=e.className,o=e.disable,l=e.visible,s=e.loading,u=e.style,m=e.size,d=Object(n.useMemo)((function(){switch(m){case O.NORMAL:return{width:"212px"};default:return{}}}),[m]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:y()(["button",i,{button__success:r===E.SUCCESS},{button__default:r===E.DEFAULT},{button__normal:r===E.NORMAL},{button__error:r===E.ERROR},{button__disabled:o},{button__visible:l},{button__loading:s}]),onClick:t,style:Object(_.a)(Object(_.a)({},u),d)},a,s&&c.a.createElement("div",{className:"spinner"})))}))),w=(a(56),Object(n.memo)((function(e){var t=e.modalClosed,a=e.title,n=e.cbCancel,r=e.cancelTitle,i=void 0===r?"Cancel":r,o=e.cbOk,l=e.okTitle,s=void 0===l?"Ok":l,u=e.children,m=e.backDrop,d=void 0!==m&&m;return c.a.createElement("div",{className:"modal-backdrop",onClick:function(){d&&t&&t()}},c.a.createElement("div",{className:"modal-window",onClick:function(e){return e.stopPropagation()}},c.a.createElement("div",{className:"modal-window-title"},a),c.a.createElement("div",{className:"modal-window-body"},u),c.a.createElement("div",{className:"modal-window-footer"},!!o&&!!s&&c.a.createElement(U,{type:E.SUCCESS,onClick:function(){o&&o()},title:s}),!!n&&!!i&&c.a.createElement(U,{type:E.ERROR,onClick:function(){n&&n()},title:i}))))}))),M=(a(57),Object(n.memo)((function(){var e=Object(l.c)(A),t=e.content,a=e.isShow,r=Object(l.b)(),i=Object(n.useCallback)((function(){r(j.setShow(!1))}),[r]);return c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(w,{modalClosed:i,title:"",cbOk:i,okTitle:"\u0425\u043e\u0440\u043e\u0448\u043e"},t))}))),D=(a(58),Object(n.memo)((function(e){var t=e.isLoading,a=e.children;return c.a.createElement("div",{className:"page-body"},c.a.createElement("div",{className:y()({"page-body-loader":t})},a))}))),k=Object(n.memo)((function(){return c.a.createElement(D,null,"404 Not found")})),x=a(39),G=a.n(x),H=function(e){return e.route};!function(e){e.MEDIUM="MEDIUM",e.LOW="LOW"}(I||(I={}));var F,Y=new function e(){Object(N.a)(this,e),this.prefix="ROUTE",this.SET_CURRENT_ROUTE="SET_CURRENT_ROUTE",this.setCurrentRoute=Object(T.a)(this.SET_CURRENT_ROUTE)},P={route:o.HOME},W=Object(C.a)({},Y.SET_CURRENT_ROUTE,(function(e,t){return Object(_.a)(Object(_.a)({},e),{},{route:t.payload})})),V=Object(S.a)(W,P),z=a(9),B=a(40),Z=a.n(B);!function(e){e.EDIT_CONTACT="\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430",e.ADD_CONTACT="\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430",e.ARCHIVE_CONTACT="\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430",e.LOGIN="\u0412\u0445\u043e\u0434 \u0432 \u0441\u0435\u0440\u0432\u0438\u0441",e.LOGIN_OUT="\u0412\u044b\u0445\u043e\u0434 \u0438\u0437 \u0441\u0435\u0440\u0432\u0438\u0441\u0430",e.UPDATE_USER_INFO="\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}(F||(F={}));var q,J,$=new function e(){var t=this;Object(N.a)(this,e),this.prefix="HISTORY",this.SET_LOADING="".concat(this.prefix,".SET_LOADING"),this.SET_UPDATE_HISTORY="".concat(this.prefix,".SET_UPDATE_HISTORY"),this.setLoading=Object(T.a)(this.SET_LOADING),this.setUpdateHistory=Object(T.a)(this.SET_UPDATE_HISTORY),this.updateHistory=function(e){return function(){var a=Object(v.a)(h.a.mark((function a(n,c){var r;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=c().authorization.user,n(t.setLoading(!0));try{n(t.setUpdateHistory({user:r.name.firstName,action:e})),n(t.setLoading(!1))}catch(i){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u043c\u0435\u0442\u043e\u0434\u0435 updateHistory: ",i),n(t.setLoading(!1))}case 3:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}},K=a(6),Q=(q={},Object(C.a)(q,$.SET_LOADING,(function(e,t){return Object(_.a)(Object(_.a)({},e),{},{isLoading:t.payload})})),Object(C.a)(q,$.SET_UPDATE_HISTORY,(function(e,t){var a=function(e,t,a){var n=e.length;return[].concat(Object(K.a)(e),[{user:{name:{firstName:t,secondName:""},email:"",phone:""},action:a,date:new Date,id:n?n+1:1}])}(e.list,t.payload.user,t.payload.action);return Object(_.a)(Object(_.a)({},e),{},{list:a,lastItem:a[a.length-1]})})),q),X=Object(S.a)(Q,{list:[],lastItem:{},isLoading:!1,error:""}),ee=function(e){return e.history},te=(a(59),Object(n.memo)((function(){var e=Object(l.c)(ee).lastItem.action,t=Object(n.useState)(!1),a=Object(z.a)(t,2),r=a[0],i=a[1],o=Object(n.useMemo)((function(){return y()("notification-tooltip",{"notification-tooltip__hidden":!r})}),[r]),s=Object(n.useMemo)((function(){return y()(["notification-ovalshape",{"notification-ovalshape__success":e===F.EDIT_CONTACT||e===F.LOGIN||e===F.LOGIN_OUT||e===F.ADD_CONTACT||e===F.UPDATE_USER_INFO},{"notification-ovalshape__warning":e===F.ARCHIVE_CONTACT}])}),[e]);return c.a.createElement("div",{className:"notification",onClick:function(){i(!r)}},c.a.createElement("img",{src:Z.a,alt:"\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a\u0430"}),c.a.createElement("div",{className:s}),c.a.createElement("div",{className:o},"\u0438\u0441\u0442\u043e\u0440\u0438\u044f: ",e))}))),ae=(a(60),Object(n.memo)((function(){var e=Object(l.c)(H).route,t=Object(n.useMemo)((function(){switch(e){case o.CONTACTS:return u.CONTACTS;case o.HISTORY:case o.HOME:default:return u.HISTORY}}),[e]);return c.a.createElement("div",{className:"bread-crumbs"},c.a.createElement("div",{className:"bread-crumbs-header"},t),c.a.createElement("div",{className:"bread-crumbs-body"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",e!==o.HOME?" / ".concat(t):""))}))),ne=a(41),ce=a.n(ne);!function(e){e.LOGIN="LOGIN",e.LOGIN_OUT="LOGIN_OUT"}(J||(J={}));var re,ie,oe,le=function(e){return e===J.LOGIN?F.LOGIN:F.LOGIN_OUT},se=function(e,t){return t===J.LOGIN?e:""},ue=new function e(){var t=this;Object(N.a)(this,e),this.prefix="AUTHORIZATION",this.SET_LOADING="".concat(this.prefix,".SET_LOADING"),this.SET_LOGIN="".concat(this.prefix,".SET_LOGIN"),this.SET_UPDATE_USER="".concat(this.prefix,".SET_UPDATE_USER"),this.setLoading=Object(T.a)(this.SET_LOADING),this.setLogin=Object(T.a)(this.SET_LOGIN),this.setUpdateUser=Object(T.a)(this.SET_UPDATE_USER),this.updateLogin=function(e,a){return function(){var n=Object(v.a)(h.a.mark((function n(c){var r;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(t.setLoading(!0)),n.prev=1,r=setTimeout((function(){c(t.setLogin({name:se(e,a),date:new Date,action:a})),c(j.updateContent("\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e")),c($.updateHistory(le(a))),c(t.setLoading(!1))}),1e3),n.abrupt("return",r);case 6:n.prev=6,n.t0=n.catch(1),console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u043c\u0435\u0442\u043e\u0434\u0435 updateLogin: ",n.t0),c(j.updateContent("\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043d\u0435 \u043f\u0440\u043e\u0448\u043b\u0430")),c(t.setLoading(!1));case 11:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(e){return n.apply(this,arguments)}}()},this.updateUserInfo=function(e){return function(){var a=Object(v.a)(h.a.mark((function a(n){var c;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(t.setLoading(!0)),a.prev=1,c=setTimeout((function(){n(t.setUpdateUser(e)),n(j.updateContent("\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b")),n($.updateHistory(F.UPDATE_USER_INFO)),n(t.setLoading(!1))}),1500),a.abrupt("return",c);case 6:a.prev=6,a.t0=a.catch(1),console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u043c\u0435\u0442\u043e\u0434\u0435 updateUserInfo: ",a.t0),n(j.updateContent("\u041f\u0440\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430")),n(t.setLoading(!1));case 11:case"end":return a.stop()}}),a,null,[[1,6]])})));return function(e){return a.apply(this,arguments)}}()}},me={user:{action:F.LOGIN,id:1,date:new Date,user:{name:{firstName:"",secondName:""},email:"",phone:""}}.user,isLoading:!1,date:new Date,error:""},de=(re={},Object(C.a)(re,ue.SET_LOADING,(function(e,t){return Object(_.a)(Object(_.a)({},e),{},{isLoading:t.payload})})),Object(C.a)(re,ue.SET_UPDATE_USER,(function(e,t){return Object(_.a)(Object(_.a)({},e),{},{user:t.payload})})),Object(C.a)(re,ue.SET_LOGIN,(function(e,t){return Object(_.a)(Object(_.a)({},e),{},{user:{name:{firstName:t.payload.name,secondName:""},phone:"",email:""},date:t.payload.date})})),re),Oe=Object(S.a)(de,me),Ee=(a(61),Object(n.memo)((function(e){var t=e.version,a=Object(l.c)(f).user.name,r=Object(n.useMemo)((function(){return y()(["user-block",{"user-block__mini":t===I.LOW}])}),[t]),i=Object(n.useMemo)((function(){switch(t){case I.LOW:return function(e){return e.secondName?"".concat(e.firstName," ").concat(e.secondName.slice(0,1),"."):e.firstName}(a);case I.MEDIUM:return function(e){return e.firstName&&e.secondName?"".concat(e.firstName," ").concat(e.secondName):e.firstName}(a);default:return""}}),[t,a]);return c.a.createElement("div",{className:r},c.a.createElement("div",{className:"user-block-avatar"},c.a.createElement("img",{src:ce.a,alt:"\u0438\u0437\u043e\u0431\u0440\u0436\u0430\u043d\u0438\u0435 \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})),c.a.createElement("div",{className:"user-block-title"},i))}))),be=(a(62),Object(n.memo)((function(){var e=Object(l.c)(H).route,t=Object(b.f)(),a=Object(l.b)(),r=Object(n.useCallback)((function(e){a(Y.setCurrentRoute(e))}),[a]);return Object(n.useEffect)((function(){t.push(e)}),[t,e]),c.a.createElement("div",{className:"page-header"},c.a.createElement("div",{className:"page-header-title"},c.a.createElement(te,null),c.a.createElement("img",{className:"page-header-title-verticalline",src:G.a,alt:"\u0431\u0435\u043b\u0430\u044f \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u043b\u0438\u043d\u0438\u044f"}),c.a.createElement(Ee,{version:I.LOW})),c.a.createElement("div",{className:"page-header-navbar"},c.a.createElement(ae,null),c.a.createElement("div",{className:"flex-end"},c.a.createElement(U,{type:E.NORMAL,onClick:function(){return r(o.HOME)},title:u.HOME,className:y()([{button__active:e===o.HOME}])}),c.a.createElement(U,{type:E.NORMAL,onClick:function(){return r(o.CONTACTS)},title:u.CONTACTS,className:y()([{button__active:e===o.CONTACTS}])}),c.a.createElement(U,{type:E.NORMAL,onClick:function(){return r(o.HISTORY)},title:u.HISTORY,className:y()([{button__active:e===o.HISTORY}])}))))}))),fe=a(22),pe=a(31),he=(a(64),Object(n.memo)((function(e){var t=e.title,a=e.name,r=e.placeholder,i=e.disable,o=e.register,l=e.errors,s=e.pattern,u=e.validate,m=Object(pe.a)(e,["title","name","placeholder","disable","register","errors","pattern","validate"]),d=Object(n.useMemo)((function(){return y()(["fieldText",{fieldText__disable:i}])}),[i]),O=Object(n.useMemo)((function(){return y()(["fieldText__errors",{fieldText__visible:null===l||void 0===l?void 0:l[a]}])}),[l,a]);return c.a.createElement("div",{className:d},c.a.createElement("label",{className:"fieldText-title"},t),c.a.createElement("input",Object.assign({type:"text",name:a,placeholder:r,ref:o({required:"Required",pattern:s,validate:u})},m)),c.a.createElement("div",{className:O},t,"*"))}))),ve=(a(65),Object(n.memo)((function(e){var t=e.icon,a=e.children,r=Object(n.useMemo)((function(){return t?c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:t,alt:"\u0438\u043a\u043e\u043d\u043a\u0430"}),a):c.a.createElement(c.a.Fragment,null,a)}),[t,a]);return c.a.createElement("div",{className:"field-block"},r)}))),Ne=(a(66),Object(n.memo)((function(){var e=Object(l.c)(f).isLoading,t=Object(fe.a)(),a=t.register,r=t.handleSubmit,i=t.errors,o=Object(l.b)(),s=Object(n.useCallback)((function(e){o(ue.updateLogin(e.name,J.LOGIN))}),[o]);return c.a.createElement("div",{className:"page-authorization"},c.a.createElement("div",{className:"page-authorization-body"},c.a.createElement("div",{className:"authorization-form"},c.a.createElement(ve,null,c.a.createElement(he,{name:"name",title:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0424\u0438\u043b\u0438\u043f",register:a,disable:e,errors:i})),c.a.createElement(U,{type:E.DEFAULT,onClick:r(s),title:F.LOGIN,style:{margin:0,width:"100%"},loading:e}))))}))),Te=new function e(){var t=this;Object(N.a)(this,e),this.prefix="PAGE_CONTROL",this.SET_CONTROL="SET_CONTROL",this.setControl=Object(T.a)(this.SET_CONTROL),this.updateControl=function(e){return function(){var a=Object(v.a)(h.a.mark((function a(n,c){var r,i;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=c().route.route,i=r.slice(1),n(t.setControl(Object(C.a)({},i,e)));case 3:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}},je=Object(C.a)({},Te.SET_CONTROL,(function(e,t){return Object(_.a)(Object(_.a)({},e),t.payload)})),Ce=Object(S.a)(je,{home:!1,history:!1,contacts:!1}),_e=function(e){return e.pagecontrol},Se=(a(67),Object(n.memo)((function(e){var t=e.titleContent,a=e.buttonContent;return c.a.createElement("div",{className:"heading-page flex-center"},c.a.createElement("div",{className:"heading-page-title"},t),c.a.createElement("div",{className:"heading-page-buttons"},a))}))),ge=(a(68),Object(n.memo)((function(e){var t=e.children;return c.a.createElement("div",{className:"body-page"},t)}))),Le=(a(69),Object(n.memo)((function(e){var t=e.name,a=e.title,n=e.register,r=Object(pe.a)(e,["name","title","register"]);return c.a.createElement("div",{className:"fieldCheckBox"},c.a.createElement("label",null,"".concat(a,": ")," "),c.a.createElement("input",Object.assign({type:"checkbox",name:t,ref:n({})},r)))}))),Ae=function(e,t){var a=e.length;if(!t.id||!a)return[].concat(Object(K.a)(e),[Object(_.a)(Object(_.a)({},t),{},{id:e[a-1].id+1})]);if(t.id&&a){var n=[];return e.map((function(e){e.id===t.id&&n.push(Object(_.a)(Object(_.a)({},e),t)),e.id!==t.id&&n.push(e)})),n}return e},Ie=new function e(){var t=this;Object(N.a)(this,e),this.prefix="CONTACTS",this.SET_LOADING="".concat(this.prefix,".SET_LOADING"),this.SET_UPDATE_CONTACTS="".concat(this.prefix,".SET_UPDATE_CONTACTS"),this.SET_REMOVE_CONTACT="".concat(this.prefix,".SET_REMOVE_CONTACT"),this.setLoading=Object(T.a)(this.SET_LOADING),this.setRemoveContact=Object(T.a)(this.SET_REMOVE_CONTACT),this.setUpdateContacts=Object(T.a)(this.SET_UPDATE_CONTACTS),this.updateContacts=function(e,a){return function(){var n=Object(v.a)(h.a.mark((function n(c,r){var i,o;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=r().contacts.list,c(t.setLoading(!0)),n.prev=2,o=setTimeout((function(){c(t.setUpdateContacts(Ae(i,e))),c(j.updateContent("\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b")),c($.updateHistory(a)),c(t.setLoading(!1))}),1e3),n.abrupt("return",o);case 7:n.prev=7,n.t0=n.catch(2),console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u043c\u0435\u0442\u043e\u0434\u0435 updateContacts: ",n.t0),c(j.updateContent("\u041f\u0440\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430")),c(t.setLoading(!1));case 12:case"end":return n.stop()}}),n,null,[[2,7]])})));return function(e,t){return n.apply(this,arguments)}}()},this.removeContact=function(e,a){return function(){var n=Object(v.a)(h.a.mark((function n(c,r){var i,o;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=r().contacts.list,c(t.setLoading(!0)),n.prev=2,o=setTimeout((function(){c(t.setRemoveContact(Ae(i,e))),c(j.updateContent("\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b")),c($.updateHistory(a)),c(t.setLoading(!1))}),1e3),n.abrupt("return",o);case 7:n.prev=7,n.t0=n.catch(2),console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u043c\u0435\u0442\u043e\u0434\u0435 updateContacts: ",n.t0),c(j.updateContent("\u041f\u0440\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430")),c(t.setLoading(!1));case 12:case"end":return n.stop()}}),n,null,[[2,7]])})));return function(e,t){return n.apply(this,arguments)}}()}},Re={list:[{id:1,name:"\u0418\u0432\u0430\u043d",email:"ivan@mail.ru",phone:"8-908-878-06-06",isArchive:!1},{id:2,name:"\u041f\u0435\u0442\u0440",email:"petr@mail.ru",phone:"8-998-878-06-11",isArchive:!0},{id:3,name:"\u041c\u0430\u043a\u0441\u0438\u043c",email:"max@mail.ru",phone:"8-908-878-06-06",isArchive:!1},{id:4,name:"\u0421\u0435\u043c\u0435\u043d",email:"semen@mail.ru",phone:"8-908-878-06-06",isArchive:!1},{id:5,name:"\u0412\u0430\u043b\u0435\u043d\u0442\u0438\u043d",email:"valentin@mail.ru",phone:"8-908-878-06-06",isArchive:!1},{id:6,name:"\u0424\u0438\u043b\u0438\u043f",email:"philip@mail.ru",phone:"8-908-878-06-06",isArchive:!1}],isLoading:!1,error:""},ye=(ie={},Object(C.a)(ie,Ie.SET_LOADING,(function(e,t){return Object(_.a)(Object(_.a)({},e),{},{isLoading:t.payload})})),Object(C.a)(ie,Ie.SET_UPDATE_CONTACTS,(function(e,t){return Object(_.a)(Object(_.a)({},e),{},{list:t.payload})})),Object(C.a)(ie,Ie.SET_REMOVE_CONTACT,(function(e,t){return Object(_.a)(Object(_.a)({},e),{},{list:t.payload})})),ie),Ue=Object(S.a)(ye,Re),we=function(e){return e.contacts};!function(e){e.DB="DD.MM.YYYY MM:SS"}(oe||(oe={}));var Me={EMAIL:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i},De=(a(70),Object(n.memo)((function(e){var t=e.initialValues,a=e.title,n=e.modalClosed,r=Object(l.b)(),i=Object(fe.a)({defaultValues:Object(_.a)({},t)}),o=i.handleSubmit,s=i.register,u=i.errors;return c.a.createElement(w,{title:a,cbCancel:n,cancelTitle:"\u041e\u0442\u043c\u0435\u043d\u0430",cbOk:o((function(e){var a=Object(_.a)(Object(_.a)({},t),e);r(Ie.updateContacts(a,F.EDIT_CONTACT)),n()})),okTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",modalClosed:n},c.a.createElement("div",{className:"contacts-modal"},c.a.createElement(ve,null,c.a.createElement(he,{title:"\u0418\u043c\u044f",name:"name",register:s,errors:u})),c.a.createElement(ve,null,c.a.createElement(he,{title:"\u041f\u043e\u0447\u0442\u0430",name:"email",register:s,errors:u,pattern:{value:Me.EMAIL}})),c.a.createElement(ve,null,c.a.createElement(he,{title:"\u0421\u043e\u0442\u043e\u0432\u044b\u0439",name:"phone",register:s,errors:u})),c.a.createElement(ve,null,c.a.createElement(Le,{title:"\u0410\u0440\u0445\u0438\u0432",name:"isArchive",register:s}))))}))),ke=(a(71),Object(n.memo)((function(e){var t=e.item,a=Object(n.useState)(!1),r=Object(z.a)(a,2),i=r[0],o=r[1],s=Object(l.b)(),u=Object(n.useMemo)((function(){return t.isArchive}),[t]),m=Object(n.useMemo)((function(){return t.isArchive?"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c":"\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),[t]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"menu-setting"},c.a.createElement(U,{type:E.DEFAULT,onClick:function(){return F.EDIT_CONTACT,void o(!0)},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",visible:u}),c.a.createElement(U,{type:E.ERROR,onClick:function(){s(Ie.removeContact(Object(_.a)(Object(_.a)({},t),{},{isArchive:!t.isArchive}),F.ARCHIVE_CONTACT))},title:m})),i&&c.a.createElement(De,{initialValues:t,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430",modalClosed:function(){return o(!1)}}))}))),xe=(a(72),Object(n.memo)((function(e){var t=e.list,a=e.archiveMode,n=function(e){return y()(["table-contacts-row",{"table-contacts-row__archive":e.isArchive}])};return c.a.createElement("div",{className:"table-contacts"},c.a.createElement("div",{className:"table-contacts-row table-contacts-row__header"},c.a.createElement("div",{className:"table-contacts-col"},"id"),c.a.createElement("div",{className:"table-contacts-col"},"\u0418\u043c\u044f"),c.a.createElement("div",{className:"table-contacts-col"},"\u041f\u043e\u0447\u0442\u0430"),c.a.createElement("div",{className:"table-contacts-col"},"\u0421\u043e\u0442\u043e\u0432\u044b\u0439"),c.a.createElement("div",{className:"table-contacts-col"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")),t.map((function(e,t){return a&&e.isArchive?c.a.createElement("div",{className:n(e),key:t},c.a.createElement("div",{className:"table-contacts-col"},e.id),c.a.createElement("div",{className:"table-contacts-col"},e.name),c.a.createElement("div",{className:"table-contacts-col"},e.email),c.a.createElement("div",{className:"table-contacts-col"},e.phone),c.a.createElement("div",{className:"flex-end"},c.a.createElement(ke,{item:e}))):a||e.isArchive?void 0:c.a.createElement("div",{className:n(e),key:t},c.a.createElement("div",{className:"table-contacts-col"},e.id),c.a.createElement("div",{className:"table-contacts-col"},e.name),c.a.createElement("div",{className:"table-contacts-col"},e.email),c.a.createElement("div",{className:"table-contacts-col"},e.phone),c.a.createElement("div",{className:"flex-end"},c.a.createElement(ke,{item:e})))})))}))),Ge=Object(n.memo)((function(){var e=Object(l.c)(_e).contacts,t=Object(l.c)(we),a=t.list,r=t.isLoading,i=Object(l.b)(),o=Object(n.useState)(e),s=Object(z.a)(o,2),m=s[0],d=s[1],O=Object(n.useState)(!1),b=Object(z.a)(O,2),f=b[0],p=b[1],h=Object(n.useState)(!1),v=Object(z.a)(h,2),N=v[0],T=v[1],j=Object(n.useMemo)((function(){return"".concat(u.CONTACTS," (").concat(N?"\u0430\u0440\u0445\u0438\u0432\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a":"\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a",")")}),[N]);return Object(n.useEffect)((function(){i(Te.updateControl(m))}),[i,m]),c.a.createElement(D,{isLoading:r},c.a.createElement(Se,{titleContent:j,buttonContent:c.a.createElement(c.a.Fragment,null,c.a.createElement(U,{type:E.NORMAL,onClick:function(){return T(!N)},title:N?"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u0440\u0445\u0438\u0432\u0430":"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0430\u0440\u0445\u0438\u0432",disable:!m}),c.a.createElement(U,{type:E.SUCCESS,onClick:function(){return p(!0)},title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",disable:!m}),c.a.createElement(U,{type:E.DEFAULT,onClick:function(){return d(!m)},title:m?"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}))}),m&&!!a.length&&c.a.createElement(ge,null,c.a.createElement(xe,{list:a,archiveMode:N})),f&&c.a.createElement(De,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",modalClosed:function(){return p(!1)}}))})),He=a(42),Fe=a.n(He),Ye=(a(74),Object(n.memo)((function(e){var t=e.list;return c.a.createElement("div",{className:"table-history"},c.a.createElement("div",{className:"table-history-row table-history-row__header"},c.a.createElement("div",{className:"table-history-col"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"),c.a.createElement("div",{className:"table-history-col"},"\u0414\u0430\u0442\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f"),c.a.createElement("div",{className:"table-history-col"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435")),t.map((function(e,t){var a=e.user,n=e.date,r=e.action;return c.a.createElement("div",{className:"table-history-row",key:t},c.a.createElement("div",{className:"table-history-col"},a.name.firstName),c.a.createElement("div",{className:"table-history-col"},Fe()(n).format(oe.DB)),c.a.createElement("div",{className:"table-history-col"},r))})))}))),Pe=Object(n.memo)((function(){var e=Object(l.c)(ee).list,t=Object(l.c)(_e).history,a=Object(n.useState)(t),r=Object(z.a)(a,2),i=r[0],o=r[1],s=Object(n.useMemo)((function(){return i?"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e"}),[i]),m=Object(l.b)();Object(n.useEffect)((function(){m(Te.updateControl(i))}),[m,i]);var d=Object(n.useMemo)((function(){return"".concat(u.HISTORY," (\u043a\u043e\u043b-\u0432\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 ").concat(e.length,")")}),[e]);return c.a.createElement(D,null,c.a.createElement(Se,{titleContent:d,buttonContent:c.a.createElement(U,{type:E.DEFAULT,onClick:function(){o(!i)},title:s})}),i&&c.a.createElement(ge,null,c.a.createElement(Ye,{list:e})))})),We=[{component:function(){return c.a.createElement(Pe,null)},path:"".concat(o.HISTORY),exact:!1},{component:function(){return c.a.createElement(Ge,null)},path:"".concat(o.CONTACTS),exact:!1},{component:function(){return c.a.createElement(Ne,null)},path:"".concat(o.LOGIN),exact:!1}],Ve=a(43),ze=a.n(Ve),Be=a(29),Ze=a.n(Be),qe=a(30),Je=a.n(qe),$e=function(e){var t=e.name.secondName?"".concat(e.name.firstName," ").concat(e.name.secondName):e.name.firstName;return Object(_.a)(Object(_.a)({},e),{},{name:t})},Ke=(a(75),Object(n.memo)((function(e){var t=e.closedForm,a=Object(l.c)(f).user,n=Object(l.b)(),r=Object(fe.a)({defaultValues:$e(a)}),i=r.register,o=r.handleSubmit,s=r.errors;return c.a.createElement("div",{className:"edit-form-home"},c.a.createElement("div",{className:"edit-form-home grid-row"},c.a.createElement(ve,{icon:ze.a},c.a.createElement(he,{title:"\u0418\u043c\u044f \u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u044f",name:"name",placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448\u0438 \u0438\u043c\u044f \u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u044e",register:i,errors:s})),c.a.createElement(ve,{icon:Je.a},c.a.createElement(he,{title:"E-mail",name:"email",placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448 e-mail",register:i,errors:s,pattern:{value:Me.EMAIL}})),c.a.createElement(ve,{icon:Ze.a},c.a.createElement(he,{title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",name:"phone",placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",register:i,errors:s}))),c.a.createElement("div",{className:"flex-center"},c.a.createElement(U,{type:E.SUCCESS,size:O.NORMAL,onClick:o((function(e){n(ue.updateUserInfo(function(e){var t,a=null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t.split(" ");return Object(_.a)(Object(_.a)({},e),{},{name:{firstName:null===a||void 0===a?void 0:a[0],secondName:null===a||void 0===a?void 0:a[1]}})}(e))),t()})),title:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})))}))),Qe=function(e,t){return e||"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 ".concat(t)},Xe=(a(76),Object(n.memo)((function(e){var t=e.user;return c.a.createElement("div",{className:"table-home"},c.a.createElement("div",{className:"table-home-row"},c.a.createElement("div",{className:"table-home-col"},c.a.createElement("img",{src:Je.a,alt:"\u0441\u0438\u043c\u0432\u043e\u043b \u0441\u043e\u0431\u0430\u043a\u0438"})),c.a.createElement("div",{className:"table-home-col"},Qe(t.email,"\u043f\u043e\u0447\u0442\u0443"))),c.a.createElement("div",{className:"table-home-row"},c.a.createElement("div",{className:"table-home-col"},c.a.createElement("img",{src:Ze.a,alt:"\u0441\u0438\u043c\u0432\u043e\u043b \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"})),c.a.createElement("div",{className:"table-home-col"},Qe(t.phone,"\u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"))))}))),et=Object(n.memo)((function(){var e=Object(l.c)(f),t=e.user,a=e.isLoading,r=Object(l.b)(),i=Object(n.useState)(!1),o=Object(z.a)(i,2),s=o[0],u=o[1],m=Object(n.useCallback)((function(){r(ue.updateLogin(t,J.LOGIN_OUT))}),[r,t]);return c.a.createElement(D,{isLoading:a},c.a.createElement(Se,{titleContent:c.a.createElement(Ee,{version:I.MEDIUM}),buttonContent:c.a.createElement(c.a.Fragment,null,c.a.createElement(U,{type:E.NORMAL,onClick:function(){return u(!s)},title:s?"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",loading:a}),c.a.createElement(U,{type:E.ERROR,onClick:m,title:F.LOGIN_OUT,loading:a}))}),c.a.createElement(ge,null,!s&&c.a.createElement(Xe,{user:t}),!!s&&c.a.createElement(Ke,{closedForm:function(){return u(!1)}})))})),tt=Object(n.memo)((function(){var e=Object(l.c)(f).user.name,t=Object(b.f)(),a=Object(n.useMemo)((function(){return!!e.firstName}),[e]);return Object(n.useEffect)((function(){a||t.push(o.LOGIN)}),[t,a]),c.a.createElement(c.a.Fragment,null,!!a&&c.a.createElement(be,null),c.a.createElement(b.c,null,c.a.createElement(b.a,{exact:!0,path:"/",component:et}),We.map((function(e,t){var a=e.path,n=e.component,r=e.exact;return c.a.createElement(b.a,{exact:r,path:a,component:n,key:t})})),c.a.createElement(k,null)),c.a.createElement(M,null))})),at=a(17),nt=Object(at.combineReducers)({history:X,authorization:Oe,route:V,pagecontrol:Ce,contacts:Ue,notifications:L}),ct=a(44),rt=Object(ct.composeWithDevTools)(Object(at.applyMiddleware)((function(e){var t=e.dispatch,a=e.getState;return function(e){return function(n){return n instanceof Function?n(t,a):e(n)}}}))),it=Object(at.createStore)(nt,rt),ot=(a(77),function(){return c.a.createElement(l.a,{store:it},c.a.createElement(s.a,{basename:m},c.a.createElement(tt,null)))});i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement("div",{className:"page"},c.a.createElement(ot,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[45,1,2]]]);
//# sourceMappingURL=main.5e71b3b1.chunk.js.map