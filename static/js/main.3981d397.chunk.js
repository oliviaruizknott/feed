(this.webpackJsonpfeed=this.webpackJsonpfeed||[]).push([[0],{1538:function(e,t,n){"use strict";n.r(t);var r,o=n(0),a=n.n(o),c=n(8),i=n.n(c),s=(n(40),n(9)),l=n(10),u=n(14),d=n(13),m=n(3),b=n(4),p={I0:{id:"I0",content:"Welcome to Feed! The very best social network for your growing\nyour social network! All you have to do is like and dislike everything correctly\nand quickly and you\u2019ll get lots of followers. The more followers you get, the\nhappier you\u2019ll be! Just like this post to get started."}},f="up",j="down",h="good",v="bad",O=n(6),x="bart",y="acquaintance",g="friend",w=(r={},Object(O.a)(r,x,{id:x,displayName:"Bart Suckerburg",multiplier:10,time:10}),Object(O.a)(r,y,{id:y,displayName:"Acquaintance",multiplier:1,time:10}),Object(O.a)(r,g,{id:g,displayName:"Friend",multiplier:2,time:10}),Object(O.a)(r,"mom",{id:"mom",displayName:"Mom",multiplier:3,time:10}),n(1)),k=n(45),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(e){var n=p[e];return n.posterId=x,n.reactions=f,n.time=null,n.instruction=!0,n}var r=Math.random()<.5;return{id:k.datatype.uuid(),posterId:t||"friend",content:r?h:v,reactions:[f,j],time:10}},C=[N("I0"),N()],F=Object(b.c)({name:"posts",initialState:C,reducers:{addPost:function(e,t){e.push(t.payload)},removePost:function(e,t){var n=e.findIndex((function(e){return e.id===t.payload}));n>-1&&e.splice(n,1)}}}),I=F.actions,M=I.addPost,_=I.removePost,P=function(e){return e.posts},B=F.reducer,T=n(35),A=n(5),R=n(12),S=n(11),E=n(19),H=Object(b.c)({name:"followers",initialState:{value:0},reducers:{incrementFollowers:function(e){e.value+=1},decrementFollowers:function(e){e.value-=1}}}),q=H.actions,J=q.incrementFollowers,D=q.decrementFollowers,W=function(e){return e.followers.value},G=H.reducer,z=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={order:r.setOrder(),colors:r.setColors()},r.reactionHandler=r.reactionHandler.bind(Object(S.a)(r)),r}return Object(l.a)(n,[{key:"setOrder",value:function(){return Math.random()<.5?[f,j]:[j,f]}},{key:"setColors",value:function(){return Math.random()<.5?["text-green-500","text-red-500"]:["text-red-500","text-green-500"]}},{key:"play_multi_sound",value:function(e){for(var t=new Array,n=0;n<6;n++)t[n]=new Array,t[n].channel=new Audio,t[n].finished=-1;for(var r=0;r<t.length;r++){var o=new Date;if(t[r].finished<o.getTime()){t[r].finished=o.getTime()+1e3*document.getElementById(e).duration,t[r].channel.src=document.getElementById(e).src,t[r].channel.load(),t[r].channel.play();break}}}},{key:"reactionHandler",value:function(e){var t=e.target.closest(".reaction-button").id.split("_"),n=t[0],r=t[1];this.props.post.instruction&&r===f?(console.log("CORRECT!"),this.play_multi_sound("audiotag1"),this.props.incrementFollowers()):r===f&&this.props.post.content===h||r===j&&this.props.post.content===v?(console.log("CORRECT!"),this.props.incrementFollowers(),this.play_multi_sound("audiotag1")):(console.log("WRONG!!"),this.props.decrementFollowers(),this.play_multi_sound("audiotag2")),this.props.removePost(n)}},{key:"renderButtons",value:function(){var e=this;return this.state.order.map((function(t,n){var r=t===f?E.b:E.a;return Object(w.jsx)("button",{id:"".concat(e.props.post.id,"_").concat(t),className:"reaction-button p-4 ".concat(e.state.colors[n]),onClick:e.reactionHandler,children:Object(w.jsx)(A.a,{icon:r})},t)}))}},{key:"render",value:function(){return Object(w.jsx)("div",{className:"border-t-2 grid grid-cols-2 divide-x-2 divide-gray-200",children:this.renderButtons()})}}]),n}(a.a.Component),K=Object(m.b)(null,{decrementFollowers:D,incrementFollowers:J,removePost:_})(z);var L=function(e){var t=e.post,n=Object(o.useState)(function(e){if(e.instruction)return e.content;var t=Math.floor(3*Math.random())+1,n=k.lorem.sentences(t).split(" "),r=[Math.floor(Math.random()*n.length)],o="good"===e.content?"text-green-500":"text-red-500";return n.map((function(e,t){return t==r?Object(w.jsxs)("span",{className:o,children:[e," "]},k.datatype.uuid()):Object(w.jsxs)("span",{children:[e," "]},k.datatype.uuid())}))}(t)),r=Object(T.a)(n,1)[0];return Object(w.jsxs)("div",{className:"border-4 border-purple bg-white rounded-lg m-4",children:[Object(w.jsxs)("div",{className:"p-4",children:[Object(w.jsxs)("div",{className:"flex justify-between",children:[Object(w.jsxs)("div",{className:"flex mb-4 items-center",children:[Object(w.jsx)("div",{className:"border border-avatar bg-avatar rounded-full p-1 h-8 w-8 mr-4 text-center text-white",children:Object(w.jsx)(A.a,{icon:R.a})}),Object(w.jsx)("div",{children:"Name"})]}),Object(w.jsx)("div",{children:"Timer"})]}),function(){var e=t.instruction?"font-sans":"font-mockFlow";return Object(w.jsx)("div",{className:"".concat(e," mb-4"),children:r})}()]}),Object(w.jsx)(K,{post:t})]})};function Q(){var e=Object(m.c)(P);return Object(w.jsx)("div",{className:"mb-20",children:e.map((function(e){return Object(w.jsx)(L,{post:e},e.id)}))})}var U=function(){return Object(w.jsx)("div",{className:"border border-avatar bg-avatar rounded-full p-1 h-8 w-8 mr-4 text-center text-white",children:Object(w.jsx)(A.a,{icon:R.a})})};function V(){var e=Object(m.c)(W);return Object(w.jsx)("div",{className:"flex justify-center",children:Object(w.jsxs)("div",{className:"border-4 border-b-0 border-white bottom-0 bg-purple fixed flex items-center mx-auto p-4 text-white rounded-lg rounded-b-none",children:[Object(w.jsx)(U,{}),"".concat(e," followers")]})})}var X=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.props.addPost(N())}),3e3)}},{key:"render",value:function(){return Object(w.jsxs)("div",{className:"max-w-screen-sm m-auto",children:[Object(w.jsx)(Q,{}),Object(w.jsx)(V,{})]})}}]),n}(a.a.Component),Y=Object(m.b)(null,{addPost:M})(X),Z=n(20),$=n.n(Z),ee=n(34);function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var ne=Object(b.b)("counter/fetchCount",function(){var e=Object(ee.a)($.a.mark((function e(t){var n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),re=Object(b.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(ne.pending,(function(e){e.status="loading"})).addCase(ne.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),oe=re.actions,ae=(oe.increment,oe.decrement,oe.incrementByAmount,re.reducer),ce=Object(b.a)({reducer:{counter:ae,followers:G,posts:B}});i.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(m.a,{store:ce,children:Object(w.jsx)(Y,{})})}),document.getElementById("root"))},40:function(e,t,n){}},[[1538,1,2]]]);
//# sourceMappingURL=main.3981d397.chunk.js.map