"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[877],{1877:function(r,t,e){e.r(t),e.d(t,{default:function(){return i}});var n=e(885),a=e(9457),u=e(2791),c=e(6871),s=e(273),o=e(184),i=function(){var r=(0,c.UO)().movieId,t=(0,u.useState)(),e=(0,n.Z)(t,2),i=e[0],p=e[1];return(0,u.useEffect)((function(){r&&(0,s.uV)(r).then(p).catch((function(r){return console.log(r)}))}),[r]),(0,o.jsx)(o.Fragment,{children:i&&(0,o.jsx)(a.Z,{display:"grid",gridGap:"20px",gridTemplateColumns:"repeat(auto-fit, 200px)",as:"ul",p:"30px",children:i.cast.map((function(r){var t=r.id,e=r.name,n=r.profile_path,a=r.character;return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:s.$E+n,alt:e,width:100}),(0,o.jsx)("div",{children:e}),(0,o.jsxs)("p",{children:["Character: ",a]})]},t)}))})})}},273:function(r,t,e){e.d(t,{$E:function(){return i},Ny:function(){return l},Tg:function(){return f},r7:function(){return v},uV:function(){return h},z1:function(){return d}});var n=e(5861),a=e(7757),u=e.n(a),c=e(4569),s=e.n(c),o="6836ceb3068f4013cb2a833e30b38a09",i="https://image.tmdb.org/t/p/w500";s().defaults.baseURL="https://api.themoviedb.org/3";var p={params:{api_key:o}},f=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s().get("/trending/movie/day",p).then((function(r){return r.data.results}));case 3:return t=r.sent,r.abrupt("return",t);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s().get("/movie/".concat(t),p).then((function(r){return r.data}));case 3:return e=r.sent,r.abrupt("return",e);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s().get("/movie/".concat(t,"/credits"),p).then((function(r){return r.data}));case 3:return e=r.sent,r.abrupt("return",e);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s().get("/movie/".concat(t,"/reviews"),p).then((function(r){return r.data.results}));case 3:return e=r.sent,r.abrupt("return",e);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),d=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e={params:{api_key:o,query:t}},r.prev=1,r.next=4,s().get("/search/movie",e).then((function(r){return r.data.results}));case 4:return n=r.sent,r.abrupt("return",n);case 8:r.prev=8,r.t0=r.catch(1),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=877.dd8da36f.chunk.js.map