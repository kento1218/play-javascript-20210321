(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(8),i=n(1),a=n(2),c=n(4),r=n(3),g=n(5),u=n.n(g),o=n(7),j=n.n(o),h=(n(13),function(t){Object(c.a)(n,t);var e=Object(r.a)(n);function n(t){var s;return Object(i.a)(this,n),(s=e.call(this,t)).init&&s.init(),s}return Object(a.a)(n,[{key:"style",value:function(t){var e={};return void 0!==t.right&&(e.marginLeft=t.right),void 0!==t.rotate&&(e.transform="rotate(".concat(t.rotate,"deg)")),e}},{key:"componentDidMount",value:function(){this.setTimer&&(this.timer=this.setTimer())}},{key:"componentWillUnmount",value:function(){this.timer&&clearInterval(this.timer)}}]),n}(u.a.Component)),l=n(0),p=function(t){Object(c.a)(n,t);var e=Object(r.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"init",value:function(){var t=this;this.state={src:"./image/\u3042\u3064\u3082\u308a1.png"},this.setTimer=function(){return setInterval((function(){"./image/\u3042\u3064\u3082\u308a1.png"===t.state.src?t.setState({src:"./image/\u3042\u3064\u3082\u308a2.png"}):"./image/\u3042\u3064\u3082\u308a2.png"===t.state.src&&t.setState({src:"./image/\u3042\u3064\u3082\u308a1.png"})}),1e3)}}},{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:this.state.src,alt:""})})}}]),n}(h),m=function(t){Object(c.a)(n,t);var e=Object(r.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"init",value:function(){var t=this;this.state={src1:"./image/\u305f\u307e\u30541.png",src2:"./image/\u305f\u307e\u30542.png",src3:"./image/\u305f\u307e\u30543.png",src4:"./image/\u305f\u307e\u30544.png"},this.next1=function(){"./image/\u305f\u307e\u30541.png"===t.state.src1?t.setState({src1:"./image/\u305f\u307e\u30541-\u308f\u308c\u305d\u3046.png"}):"./image/\u305f\u307e\u30541-\u308f\u308c\u305d\u3046.png"===t.state.src1?t.setState({src1:"./image/\u305f\u307e\u30541-\u308f\u308c\u305f.png"}):"./image/\u305f\u307e\u30541-\u308f\u308c\u305f.png"===t.state.src1&&t.setState({src1:"./image/\u3072\u3088\u30531.png"})},this.next2=function(){"./image/\u305f\u307e\u30542.png"===t.state.src2&&t.setState({src2:"./image/\u305f\u307e\u30542-\u308f\u308c\u305d\u3046.png"})},this.next3=function(){"./image/\u305f\u307e\u30543.png"===t.state.src3&&t.setState({src3:"./image/\u305f\u307e\u30543-\u308f\u308c\u305d\u3046.png"})},this.next4=function(){"./image/\u305f\u307e\u30544.png"===t.state.src4&&t.setState({src4:"./image/\u305f\u307e\u30544-\u308f\u308c\u305d\u3046.png"})},this.setTimer=function(){return setInterval((function(){"./image/\u305f\u307e\u30542-\u308f\u308c\u305d\u3046.png"===t.state.src2&&t.setState({src2:"./image/\u305f\u307e\u30542-\u308f\u308c\u305f.png"}),"./image/\u305f\u307e\u30543-\u308f\u308c\u305d\u3046.png"===t.state.src3&&t.setState({src3:"./image/\u305f\u307e\u30543-\u308f\u308c\u305f.png"}),"./image/\u305f\u307e\u30544-\u308f\u308c\u305d\u3046.png"===t.state.src4&&t.setState({src4:"./image/\u305f\u307e\u30544-\u308f\u308c\u305f.png"})}),2e3)}}},{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:this.state.src1,alt:"",onClick:this.next1}),Object(l.jsx)("img",{src:this.state.src2,alt:"",onClick:this.next2}),Object(l.jsx)("img",{src:this.state.src3,alt:"",onClick:this.next3}),Object(l.jsx)("img",{src:this.state.src4,alt:"",onClick:this.next4})]})}}]),n}(h),b=function(t){Object(c.a)(n,t);var e=Object(r.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"init",value:function(){var t=this;this.state={src:"./image/\u304a\u3093\u306a\u306e\u30531.png",pos:0},this.setTimer=function(){return setInterval((function(){var e=t.state.pos;(e+=50)>=500&&(e=0),"./image/\u304a\u3093\u306a\u306e\u30531.png"===t.state.src?t.setState({src:"./image/\u304a\u3093\u306a\u306e\u30532.png",pos:e}):"./image/\u304a\u3093\u306a\u306e\u30532.png"===t.state.src&&t.setState({src:"./image/\u304a\u3093\u306a\u306e\u30531.png",pos:e})}),1e3)}}},{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:this.state.src,alt:"",style:this.style({right:this.state.pos})})})}}]),n}(h),O=function(t){Object(c.a)(n,t);var e=Object(r.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"init",value:function(){var t=this;this.state={src:"./image/\u305f\u304b\u3089\u3070\u3053-\u307e\u3048.png"},this.next=function(){"./image/\u305f\u304b\u3089\u3070\u3053-\u307e\u3048.png"===t.state.src&&t.setState({src:"./image/\u305f\u304b\u3089\u3070\u3053-\u3042\u3068.png"})}}},{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:this.state.src,alt:"",onClick:this.next})})}}]),n}(h),f=function(t){Object(c.a)(n,t);var e=Object(r.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"init",value:function(){var t=this;this.state={src:"./image/\u3075\u3046\u305b\u3093-\u3042\u304a.png"},this.setTimer=function(){return setInterval((function(){"./image/\u3075\u3046\u305b\u3093-\u3042\u304a.png"===t.state.src?t.setState({src:"./image/\u3075\u3046\u305b\u3093-\u3042\u304b.png"}):"./image/\u3075\u3046\u305b\u3093-\u3042\u304b.png"===t.state.src?t.setState({src:"./image/\u3075\u3046\u305b\u3093-\u304d\u3044\u308d.png"}):"./image/\u3075\u3046\u305b\u3093-\u304d\u3044\u308d.png"===t.state.src&&t.setState({src:"./image/\u3075\u3046\u305b\u3093-\u3042\u304a.png"})}),1e3)}}},{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:this.state.src,alt:""})})}}]),n}(h),v=function(t){Object(c.a)(n,t);var e=Object(r.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"init",value:function(){this.state={deg:0,show:"none"}}},{key:"render",value:function(){return Object(l.jsxs)("div",{style:{display:this.state.show},children:[Object(l.jsx)("img",{src:"./image/\u304b\u3055\u3099\u304f\u3099\u308b\u307e_1.png",alt:"",style:this.style({rotate:this.state.deg})}),Object(l.jsx)("img",{src:"./image/\u304b\u3055\u3099\u304f\u3099\u308b\u307e_2.png",alt:"",style:this.style({rotate:this.state.deg})}),Object(l.jsx)("img",{src:"./image/\u304b\u3055\u3099\u304f\u3099\u308b\u307e_3.png",alt:"",style:this.style({rotate:this.state.deg})})]})}}]),n}(h),d=[["\u3060\u3093\u3059",Object(l.jsx)(p,{})],["\u305f\u307e\u3054",Object(l.jsx)(m,{})],["\u3042\u308b\u304f",Object(l.jsx)(b,{})],["\u305f\u304b\u3089\u3070\u3053",Object(l.jsx)(O,{})],["\u3075\u3046\u305b\u3093",Object(l.jsx)(f,{})],["\uff1f\uff1f\uff1f",Object(l.jsx)(v,{})]],x=function(t){Object(c.a)(n,t);var e=Object(r.a)(n);function n(t){var a;Object(i.a)(this,n),(a=e.call(this,t)).state={page:0};var c=function(t){return function(){a.setState({page:t})}};a.pages=[function(){return Object(l.jsx)("div",{className:"Menu",children:d.map((function(t,e){return Object(l.jsxs)("button",{onClick:c(e+1),children:[e+1,". ",t[0]]})}))})}];var r,g=Object(s.a)(d);try{var u=function(){var t=r.value;a.pages.push((function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"Menu",children:Object(l.jsx)("button",{onClick:c(0),children:"\u306f\u3058\u3081\u306b\u3082\u3069\u308b"})}),t[1]]})}))};for(g.s();!(r=g.n()).done;)u()}catch(o){g.e(o)}finally{g.f()}return a}return Object(a.a)(n,[{key:"render",value:function(){return this.pages[this.state.page]()}}]),n}(u.a.Component);j.a.render(Object(l.jsx)(g.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.23f8f8bf.chunk.js.map