(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{23:function(e,t,a){e.exports=a(58)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),i=a(5),o=a.n(i),l=a(7),u=a(3),d=a(2);!function(e){e.SET_IS_TOGGLE_LOADING="SET_IS_TOGGLE_LOADING"}(n||(n={}));var s,E=function(e){return{type:n.SET_IS_TOGGLE_LOADING,data:e}},m={isToggleLoading:!1};!function(e){e.SET_DATA_CURRENT_CITY="SET_DATA_CURRENT_CITY"}(s||(s={}));var f,g=function(e){return{type:s.SET_DATA_CURRENT_CITY,data:e}},v={data:{coordinates:{latitude:null,longitude:null},name:"",weather:""}};!function(e){e.SET_WEATHER="SET_WEATHER",e.REQUEST_FAILED="REQUEST_FAILED"}(f||(f={}));var p,T={data:null};!function(e){e.SET_GEO="SET_GEO"}(p||(p={}));var h=function(e){return{type:p.SET_GEO,data:e}},_={data:{latitude:null,longitude:null}};var b,y=Object(u.combineReducers)({appConfig:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,a=null;switch(t.type){case n.SET_IS_TOGGLE_LOADING:return a=t.data,Object(d.a)({},e,{},{isToggleLoading:a});default:return e}},currentCity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,a=e.data,n=null;switch(t.type){case s.SET_DATA_CURRENT_CITY:return n=t.data,Object(d.a)({},e,{},{data:Object(d.a)({},a,{},n)});default:return e}},weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,a=null,n=null;switch(t.type){case f.SET_WEATHER:return a=t.data,Object(d.a)({},e,{},{data:a});case f.REQUEST_FAILED:return n=t.data,Object(d.a)({},e,{},{data:Object(d.a)({},n)});default:return e}},geo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,a=null;switch(t.type){case p.SET_GEO:return a=t.data,Object(d.a)({},e,{},{data:a});default:return e}}}),S=a(21),O=a(22),C=Object(u.createStore)(y,Object(S.composeWithDevTools)(Object(u.applyMiddleware)(O.a))),N=a(4),A=(a(34),function(e){var t=e.getGeo,a=e.isToggleLoading;return r.a.createElement("div",{className:"geoAuto"},r.a.createElement("div",{className:"geoAuto__button ".concat(a&&"disabled"),onClick:function(){t()}},r.a.createElement("i",{className:"fas fa-street-view"})))}),k=(a(35),function(e){var t=e.getWeather,a=Object(c.useState)(""),n=Object(N.a)(a,2),i=n[0],o=n[1],l=function(){t(i)};return r.a.createElement("div",{className:"geoManual"},r.a.createElement("div",{className:"geoManual__button margin-bottom20px ".concat(!i&&"disabled"),onClick:function(){l()}},r.a.createElement("i",{className:"fas fa-wind"})),r.a.createElement("input",{className:"margin-bottom20px",type:"text",placeholder:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430...",value:i,onChange:function(e){o(e.currentTarget.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&i&&l()}(e)}}))}),j=(a(36),function(e){var t=e.city,a=e.temperature;return r.a.createElement("div",{className:"display"},r.a.createElement("div",{className:"informMenu"},r.a.createElement("div",{className:"informMenu-city"},t||"..."),r.a.createElement("div",{className:"informMenu-temperature"},null!==a?"".concat(a,"\xb0"):"...")))});a(37);!function(e){e.load="\u0417\u0430\u0433\u0440\u0443\u0437\u043e\u0447\u043a\u0430..."}(b||(b={}));var G=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"rectangle-big rectangle"},r.a.createElement("div",{className:"rectangle-toggle rectangle"},b.load))))},I=function(e){var t=e.isSelected,a=e.dataId,n=e.title,c=e.onClick,i=e.routeClick,o=function(){i(a),c(a)};return r.a.createElement("div",{className:"button ".concat(t===a?"active disabled":""),"data-id":a,onClick:function(){o()}},n)},L=(a(38),function(e){var t=e.routeClick,a=Object(c.useState)(0),n=Object(N.a)(a,2),i=n[0],o=n[1];return r.a.createElement("div",{className:"animateMenu"},r.a.createElement(I,{isSelected:i,dataId:0,title:r.a.createElement("i",{className:"fas fa-map-marked-alt"}),onClick:o,routeClick:t,key:0}),r.a.createElement(I,{isSelected:i,dataId:1,title:r.a.createElement("i",{className:"fas fa-pencil-alt"}),onClick:o,routeClick:t,key:1}))}),w=(a(39),function(e){var t=e.getGeo,a=e.getWeather,n=e.temperature,i=e.city,o=e.isToggleLoading,l=Object(c.useState)(0),u=Object(N.a)(l,2),d=u[0],s=u[1];return r.a.createElement("div",{className:"widjet"},r.a.createElement(j,{temperature:n,city:i}),d?r.a.createElement(k,{getWeather:a}):r.a.createElement(A,{getGeo:t}),r.a.createElement(L,{routeClick:s}),o&&r.a.createElement(G,null))}),R=a(6),D=a.n(R),U=D.a.create({baseURL:"https://api.opencagedata.com/geocode/v1/"}),W={key:"46c3cf317a3e408a88ccefa30701b1e5",getAddress:function(e,t){return U.get("json?q=".concat(e,"+").concat(t,"&key=").concat(this.key)).then((function(e){return e.data.results[0]}))}},M=D.a.create({baseURL:"https://api.weatherbit.io/v2.0/"}),x={access_key:"338296f9e5f54de485e3967ebfeb7da2",getWeather:function(e){return M.get("current?city=".concat(e,"&key=").concat(this.access_key)).then((function(e){return e.data.data[0]}))}},F=function(e){return function(t){t(E(!0)),x.getWeather(e).then((function(a){t(E(!1)),t(function(e){return{type:f.SET_WEATHER,data:e}}(a)),t(g({weather:a.temp,name:e}))})).catch((function(a){var n;t((n={temperature:null},{type:f.REQUEST_FAILED,data:n})),t(g({weather:null,name:e})),t(E(!1))}))}};var H={getGeo:function(){return function(e){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){var a,n,c=t.coords.latitude,r=t.coords.longitude;e(h({latitude:c,longitude:r})),e((a=c,n=r,function(e){e(E(!0)),W.getAddress(a,n).then((function(t){e(F(t.components.city)),e(E(!1))})).catch((function(t){e(E(!1))}))})),e(g({coordinates:{latitude:c,longitude:r}}))}),(function(){e(h({error:"Unable to retrieve your location"}))})):e(h({error:"geo not found"}))}},getWeather:F},Q=Object(l.b)((function(e){return{temperature:e.currentCity.data.weather&&e.currentCity.data.weather,city:e.currentCity.data.name&&e.currentCity.data.name,isToggleLoading:e.appConfig.isToggleLoading}}),H)(w);a(57);o.a.render(r.a.createElement(l.a,{store:C},r.a.createElement(Q,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.2ada238e.chunk.js.map