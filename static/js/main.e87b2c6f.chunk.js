(this["webpackJsonpstar-wars-ts"]=this["webpackJsonpstar-wars-ts"]||[]).push([[0],{17:function(e,t,a){e.exports={AddMovieFormContainer:"AddMovieForm_AddMovieFormContainer__2fjHs",errorInput:"AddMovieForm_errorInput__1XxvT",correctInput:"AddMovieForm_correctInput__1NVUZ",errorMsg:"AddMovieForm_errorMsg__2rlsi",InputField:"AddMovieForm_InputField__38gaI",hints:"AddMovieForm_hints__2j0YN",selectedPlanets:"AddMovieForm_selectedPlanets__2Co5D",planetItem:"AddMovieForm_planetItem__NdwPX"}},20:function(e,t,a){e.exports={container:"ExpandableItem_container__2xTtA",item:"ExpandableItem_item__3tJHU",item__text:"ExpandableItem_item__text__xc0a-",expanded:"ExpandableItem_expanded__1pXsj",expandedField:"ExpandableItem_expandedField__2y0Fm"}},24:function(e,t,a){e.exports={Container:"MovieTable_Container__1Krdx",table:"MovieTable_table__2vEl7",head:"MovieTable_head__3cSmK",name:"MovieTable_name__1Xb-A",MobileMainTablesContainer:"MovieTable_MobileMainTablesContainer__MCIlz",MovieGrid:"MovieTable_MovieGrid__3_jOY"}},32:function(e,t,a){e.exports={MovieList:"MovieList_MovieList__25lKZ","MovieList-open":"MovieList_MovieList-open__SFsCH",MovieListContent:"MovieList_MovieListContent__30pYf",error:"MovieList_error__2kmfT"}},36:function(e,t,a){e.exports={header:"Header_header__wfufl",header__logo:"Header_header__logo__1e-rT"}},37:function(e,t,a){e.exports={MovieItemContainer:"MovieItem_MovieItemContainer__1tVus",error:"MovieItem_error__3pzMr"}},38:function(e,t,a){e.exports={PlanetItem:"PlanetItem_PlanetItem__TS0G5",remove:"PlanetItem_remove__19LTj"}},50:function(e,t,a){e.exports={Loader:"Loader_Loader__1v9y9",load:"Loader_load__1E-5i"}},53:function(e,t,a){e.exports={Divider:"Divider_Divider__hYyw0"}},54:function(e,t,a){e.exports={AddMovieContainer:"AddMovie_AddMovieContainer__1y7Bx"}},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n,r=a(1),i=a(0),c=a.n(i),o=a(28),l=a.n(o),s=a(16),d=a(36),u=a.n(d),j=a.p+"static/media/LOGO.f12a06d3.svg",b=function(){return Object(r.jsx)("div",{className:u.a.header,children:Object(r.jsx)("img",{src:j,alt:"",className:u.a.header__logo})})},m=a.p+"static/media/loading.bffa8516.svg",O=a(50),p=a.n(O),v=function(e){var t=e.size,a=void 0===t?50:t,n={width:"".concat(a,"px"),height:"".concat(a,"px")};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("img",{style:n,className:p.a.Loader,src:m,alt:""})})},f=a(109),_=a(114),h=a(117),x=a(118),g=a(112),M=a(115),T=a(116),E=a(113),S=a(111),y=a(24),N=a.n(y),P=a(10),I=a.n(P),w=Object(f.a)({TableContainer:{boxShadow:"none"},table:{minWidth:650,"& td":{borderBottom:"none"}},head:{"& th":{fontSize:"0.8rem",color:"black","&:first-child":{color:"#00687F"}}},name:{color:"#00687F"}}),L=["Planet Name","Rotation Period","Orbital period","Diameter","Climate","Surface water","Population"],A=function(e){var t=e.rows,a=Object(S.a)("(max-width:600px)"),n=t.map((function(e){return I.a.values(I.a.omit(e,"url"))})),i=w();return a?Object(r.jsx)("div",{className:N.a.MobileMainTablesContainer,children:n.map((function(e){return Object(r.jsx)("div",{className:N.a.MovieGrid,children:e.map((function(e,t){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:N.a.category,children:L[t]}),Object(r.jsx)("div",{className:"".concat(N.a.value," ").concat(0===t&&N.a.name),children:e})]})}))},e[0])}))},"moblieTable"):Object(r.jsx)(g.a,{id:"Container",className:i.TableContainer,component:E.a,children:Object(r.jsxs)(_.a,{size:"small",className:i.table,"aria-label":"simple table",children:[Object(r.jsx)(M.a,{className:i.head,children:Object(r.jsx)(T.a,{children:L.map((function(e){return Object(r.jsx)(x.a,{children:e})}))})}),Object(r.jsx)(h.a,{children:t.map((function(e){return Object(r.jsxs)(T.a,{children:[Object(r.jsx)(x.a,{className:i.name,children:e.name}),Object(r.jsx)(x.a,{children:e.rotation_period}),Object(r.jsx)(x.a,{children:e.orbital_period}),Object(r.jsx)(x.a,{children:e.diameter}),Object(r.jsx)(x.a,{children:e.climate}),Object(r.jsx)(x.a,{children:e.surface_water}),Object(r.jsx)(x.a,{children:e.population})]},e.name)}))})]})},"deskTable")},C=a(19),F=a.n(C),k=a(9),D=a(51),U=a(30),V=a(4);!function(e){e.SET_MOVIES="SET_MOVIES",e.POST_MOVIE="POST_MOVIES",e.SET_PLANETS="SET_PLANETS",e.ADD_PLANET="ADD_PLANET",e.UPDATE_PLANETS="UPDATE_PLANETS"}(n||(n={}));var B=a(22),R=a.n(B),X=["url","name","rotation_period","orbital_period","diameter","climate","surface_water","population"],z=a(5),G={movies:[],planets:[]},H=a(23),J=a(52),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.c,q=Object(H.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.POST_MOVIE:return Object(z.a)(Object(z.a)({},e),{},{movies:[].concat(Object(k.a)(e.movies),[{title:t.payload.title,planetsUrl:t.payload.planetsUrl}])});case n.SET_MOVIES:return Object(z.a)(Object(z.a)({},e),{},{movies:t.payload});case n.SET_PLANETS:return Object(z.a)(Object(z.a)({},e),{},{planets:Object(k.a)(t.payload)});case n.ADD_PLANET:return Object(z.a)(Object(z.a)({},e),{},{planets:[].concat(Object(k.a)(e.planets),[t.payload])});default:return e}}),Y(Object(H.a)(J.a))),K=function(){return q.dispatch},W=function(){var e,t=JSON.parse(window.localStorage.getItem("planets"))||[];return K()((e=I.a.values(t),{type:n.SET_PLANETS,payload:e})),t},Z=function(e){var t=Object(i.useState)(W),a=Object(V.a)(t,2),r=a[0],c=a[1],o=Object(i.useState)(""),l=Object(V.a)(o,2),s=l[0],d=l[1],u=Object(i.useState)(!0),j=Object(V.a)(u,2),b=j[0],m=j[1];Object(i.useEffect)((function(){O()}),[]),Object(i.useEffect)((function(){!b&&window.localStorage.setItem("planets",JSON.stringify(r))}),[b]);var O=function(){var t=Object(U.a)(F.a.mark((function t(){var a,i,o;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=Object(D.a)(e),t.prev=1,a.s();case 3:if((i=a.n()).done){t.next=12;break}if(o=i.value,I.a.map(r,"url").includes(o)){t.next=9;break}return t.delegateYield(F.a.mark((function e(){var t,a,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.includes("https")?o:o.replace("http","https"),e.next=3,R.a.get(t).then((function(e){return e.data})).catch((function(e){return d(e.message)}));case 3:a=e.sent,r=I.a.pick(a,X),c((function(e){return[].concat(Object(k.a)(e),[r])})),K()((i=r,{type:n.ADD_PLANET,payload:i}));case 7:case"end":return e.stop()}var i}),e)}))(),"t0",7);case 7:t.next=10;break;case 9:console.log("%c IN STORE! ","background: #222; color: #bada55");case 10:t.next=3;break;case 12:t.next=17;break;case 14:t.prev=14,t.t1=t.catch(1),a.e(t.t1);case 17:return t.prev=17,a.f(),t.finish(17);case 20:m(!1);case 21:case"end":return t.stop()}}),t,null,[[1,14,17,20]])})));return function(){return t.apply(this,arguments)}}();return{isLoading:b,error:s}},Q=a(37),$=a.n(Q),ee=function(e){var t=e.movie,a=(e.isOpen,t.planetsUrl),n=Z(a),i=n.isLoading,c=n.error,o=function(e){var t=Object(s.c)((function(e){return e.planets}));return e.map((function(e){return I.a.find(t,["url",e])}))}(a);return Object(r.jsx)(r.Fragment,{children:i?Object(r.jsx)(v,{}):Object(r.jsxs)("div",{className:$.a.MovieItemContainer,children:[c&&Object(r.jsx)("div",{className:$.a.error}),Object(r.jsx)(A,{rows:o})]})})};function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ne=i.createElement("circle",{cx:9,cy:9,r:9,transform:"rotate(-180 9 9)",fill:"#5FBBCF"}),re=i.createElement("path",{d:"M12.75 10.6875L9 6.74013L5.25 10.6875",stroke:"white",strokeWidth:4,strokeLinecap:"square"});function ie(e,t){var a=e.title,n=e.titleId,r=ae(e,["title","titleId"]);return i.createElement("svg",te({width:18,height:18,viewBox:"0 0 18 18",fill:"none",ref:t,"aria-labelledby":n},r),a?i.createElement("title",{id:n},a):null,ne,re)}var ce=i.forwardRef(ie);a.p;function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function le(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var se=i.createElement("circle",{cx:9,cy:9,r:9,fill:"#00687F"}),de=i.createElement("path",{d:"M5.25 7.3125L9 11.2599L12.75 7.3125",stroke:"white",strokeWidth:4,strokeLinecap:"square"});function ue(e,t){var a=e.title,n=e.titleId,r=le(e,["title","titleId"]);return i.createElement("svg",oe({width:18,height:18,viewBox:"0 0 18 18",fill:"none",ref:t,"aria-labelledby":n},r),a?i.createElement("title",{id:n},a):null,se,de)}var je=i.forwardRef(ue),be=(a.p,a(20)),me=a.n(be),Oe=function(e){var t=e.text,a=void 0===t?"Expandable Item":t,n=e.children,o=Object(i.useState)(!1),l=Object(V.a)(o,2),s=l[0],d=l[1],u=c.a.Children.toArray(n).map((function(e){return c.a.cloneElement(e,{isOpen:s})}));return Object(r.jsxs)("div",{className:me.a.container,children:[Object(r.jsxs)("div",{className:"".concat(me.a.item," ").concat(s&&me.a.expanded),children:[Object(r.jsx)("p",{className:me.a.item__text,children:a}),s?Object(r.jsx)(ce,{onClick:function(){return d(!1)}}):Object(r.jsx)(je,{onClick:function(){return d(!0)}})]}),Object(r.jsx)("div",{className:"".concat(me.a.expandedField," ").concat(s&&me.a.expanded),children:s&&u})]})},pe=R.a.create({baseURL:"https://swapi.dev/api"}),ve=function(){var e=Object(s.b)(),t=Object(i.useState)([]),a=Object(V.a)(t,2),r=a[0],c=a[1],o=Object(i.useState)(""),l=Object(V.a)(o,2),d=l[0],u=l[1],j=Object(i.useState)(!0),b=Object(V.a)(j,2),m=b[0],O=b[1];return Object(i.useEffect)((function(){try{pe.get("/films/").then((function(t){var a=t.data.results.map((function(e){return{title:e.title,planetsUrl:e.planets}}));c(a),e(function(e){return{type:n.SET_MOVIES,payload:e}}(a))})).finally((function(){return O(!1)})).catch((function(e){return u(e.message)}))}catch(t){u(t.message)}}),[]),{isLoading:m,movies:r,error:d}},fe=a(32),_e=a.n(fe),he=function(){var e=ve(),t=e.isLoading,a=e.error,n=Object(s.c)((function(e){return e.movies}));return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:_e.a.MovieList,children:t?Object(r.jsx)(v,{},"movieListLoader"):Object(r.jsx)("div",{className:_e.a.MovieListContent,children:a?Object(r.jsxs)("div",{className:_e.a.error,children:["Smthng went wrong during fetch: ",a]}):n.map((function(e,t){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Oe,{text:e.title,children:Object(r.jsx)(ee,{movie:e})},t)})}))})})})},xe=a(53),ge=a.n(xe),Me=function(){return Object(r.jsx)("div",{className:ge.a.Divider})},Te=a(14),Ee=a(17),Se=a.n(Ee),ye=a(38),Ne=a.n(ye),Pe=function(e){var t=e.name,a=e.handleRemove;return Object(r.jsxs)("div",{className:Ne.a.PlanetItem,children:[t," ",Object(r.jsx)("span",{onClick:function(){return a(t)},className:Ne.a.remove})]})},Ie=function(){var e=Object(i.useState)({movieTitle:"",addPlanet:""}),t=Object(V.a)(e,2),a=t[0],c=t[1],o=Object(i.useState)([]),l=Object(V.a)(o,2),s=l[0],d=l[1],u=Object(i.useState)([]),j=Object(V.a)(u,2),b=j[0],m=j[1],O=Object(i.useState)({}),p=Object(V.a)(O,2),v=p[0],f=p[1],_=Object(i.useState)({}),h=Object(V.a)(_,2),x=h[0],g=h[1];Object(i.useEffect)((function(){M(a)}),[a]);var M=function(e){var t={};e.movieTitle?/^[A-Z]/.test(e.movieTitle)||(t.movieTitle="Movie title name must start with a capital letter."):t.movieTitle="Field is required",f(t)},T=function(e){var t=e.target,a=(t.value,t.name);x[a]||g(Object(z.a)(Object(z.a)({},x),{},Object(Te.a)({},a,!0)))},E=function(e){var t=e.target,n=t.value,r=t.name;"addPlanet"===r&&Object(U.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=4;break}d([]),e.next=8;break;case 4:return e.next=6,R.a.get("https://swapi.dev/api/planets/?search=".concat(n)).then((function(e){return e.data.results}));case 6:t=e.sent,d(t);case 8:case"end":return e.stop()}}),e)})))(),c(Object(z.a)(Object(z.a)({},a),{},Object(Te.a)({},r,n)))},S=function(e){m(b.filter((function(t){return t.name!==e})))};return Object(r.jsx)("div",{className:Se.a.AddMovieFormContainer,children:Object(r.jsxs)("form",{onSubmit:function(e){var t,r;(e.preventDefault(),0!==b.length)?(c({addPlanet:"",movieTitle:""}),f({}),g({}),d([]),m([]),K()((t={title:a.movieTitle,planetsUrl:b.map((function(e){return e.url}))},{type:n.POST_MOVIE,payload:t})),K()((r=[],{type:n.UPDATE_PLANETS,payload:r}))):f(Object(z.a)(Object(z.a)({},v),{},Object(Te.a)({},"addPlanet","At Least One planet needs to be selected")))},children:[Object(r.jsxs)("div",{className:Se.a.InputField,children:[Object(r.jsxs)("label",{htmlFor:"movieTitle",children:["Movie Title",Object(r.jsx)("input",{name:"movieTitle",id:"movieTitle",type:"text",placeholder:"Please enter the title of the movie",className:v.movieTitle&&x.movieTitle&&Se.a.errorInput,onChange:E,onBlur:T,value:a.movieTitle})]}),v.movieTitle&&x.movieTitle&&Object(r.jsx)("p",{className:Se.a.errorMsg,children:v.movieTitle})]}),Object(r.jsxs)("div",{className:Se.a.InputField,children:[b.length>0&&Object(r.jsx)("div",{className:Se.a.selectedPlanets,children:b.map((function(e){return Object(r.jsx)(Pe,{name:e.name,handleRemove:S})}))}),Object(r.jsxs)("label",{htmlFor:"addPlanet",children:["Add Planet",Object(r.jsx)("input",{autoComplete:"off",name:"addPlanet",placeholder:"Search for the planet in database",id:"addPlanet",type:"text",className:v.addPlanet&&x.addPlanet&&Se.a.errorInput,onChange:E,onBlur:T,value:a.addPlanet}),s.length>0&&Object(r.jsx)("div",{className:Se.a.hints,children:s.map((function(e){return"unknown"===e.name?null:Object(r.jsx)("p",{onClick:function(){return function(e){d([]),I.a.some(b,{name:e.name})||m([].concat(Object(k.a)(b),[I.a.pick(e,X)]))}(e)},children:e.name})}))})]}),v.addPlanet&&Object(r.jsx)("p",{className:Se.a.errorMsg,children:v.addPlanet})]}),Object(r.jsx)("button",{type:"submit",disabled:!!Object.keys(v).length,children:"ADD MOVIE "})]})})},we=a(54),Le=a.n(we),Ae=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:Le.a.AddMovieContainer,children:Object(r.jsx)(Oe,{text:"Add Movie",children:Object(r.jsx)(Ie,{})})})})},Ce=(a(84),function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(b,{}),Object(r.jsx)(he,{}),Object(r.jsx)(Me,{}),Object(r.jsx)(Ae,{})]})});a(85);l.a.render(Object(r.jsx)(s.a,{store:q,children:Object(r.jsx)(Ce,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.e87b2c6f.chunk.js.map