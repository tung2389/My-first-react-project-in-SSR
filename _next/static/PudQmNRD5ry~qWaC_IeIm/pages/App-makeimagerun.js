(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"3cXR":function(t,e,n){"use strict";n.r(e);var a=n("0iUn"),i=n("sLSF"),c=n("MI3g"),r=n("a7VT"),u=n("AT/M"),l=n("Tit0"),s=n("q1tI"),o=n.n(s),d=(n("Q8kY"),["/static/IMG_1.jpg","/static/IMG_2.jpg","/static/IMG_3.png","/static/IMG_4.jpg"]),f=function(t){function e(t){var n;return Object(a.default)(this,e),(n=Object(c.default)(this,Object(r.default)(e).call(this,t))).state={currentGP:0},n.interval=null,n.nextGP=n.nextGP.bind(Object(u.default)(n)),n}return Object(l.default)(e,t),Object(i.default)(e,[{key:"nextGP",value:function(){var t=this.state.currentGP,e=++t%d.length;this.setState({currentGP:e})}},{key:"componentDidMount",value:function(){this.interval=setInterval(this.nextGP,5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var t=d[this.state.currentGP];return o.a.createElement("div",null,o.a.createElement("h1",null,"My photos"),o.a.createElement("img",{src:t,width:"1000",height:"400",align:"center",valign:"center"}))}}]),e}(s.Component);e.default=f},U4wD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/App-makeimagerun",function(){var t=n("3cXR");return{page:t.default||t}}])}},[["U4wD",1,0]]]);