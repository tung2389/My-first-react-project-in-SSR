(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{JEmn:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/App-catchthebutton",function(){var t=n("Zs4O");return{page:t.default||t}}])},Zs4O:function(t,e,n){"use strict";n.r(e);var a=n("0iUn"),i=n("sLSF"),s=n("MI3g"),o=n("a7VT"),c=n("AT/M"),r=n("Tit0"),u=n("q1tI"),l=n.n(u),h=(n("Q8kY"),n("rAsI")),d="#000000",f={backgroundColor:"#FF0000",fontSize:30},b=function(t){function e(t){var n;return Object(a.default)(this,e),(n=Object(s.default)(this,Object(o.default)(e).call(this,t))).state={pos1:Object(h.a)(0,100)+"%",pos2:Object(h.a)(0,100)+"%",start:!1,time:20},n.changepos=n.changepos.bind(Object(c.default)(n)),n.win=n.win.bind(Object(c.default)(n)),n.startgame=n.startgame.bind(Object(c.default)(n)),n.countdown=n.countdown.bind(Object(c.default)(n)),n}return Object(r.default)(e,t),Object(i.default)(e,[{key:"changepos",value:function(){if(this.state.start){var t=Object(h.a)(0,100)+"%",e=Object(h.a)(0,100)+"%";this.setState({pos1:t,pos2:e})}}},{key:"componentDidUpdate",value:function(t,e){0===this.state.time?(alert("you lose"),this.setState({start:!1,time:20}),d="#000000"):this.state.time<6&&(d="#FF0000")}},{key:"countdown",value:function(){this.state.start&&this.setState({time:this.state.time-1})}},{key:"componentDidMount",value:function(){setInterval(this.changepos,600),setInterval(this.countdown,1e3)}},{key:"win",value:function(){this.state.start&&(alert(" you win"),this.setState({start:!1,time:20}),d="#000000")}},{key:"startgame",value:function(){this.setState({start:!0})}},{key:"render",value:function(){var t=this.state.start?"visible":"hidden",e={position:"absolute",backgroundColor:"#FFD712",left:this.state.pos1,top:this.state.pos2,fontSize:40,cursor:"pointer",visibility:t},n={color:d};return l.a.createElement("div",null,l.a.createElement("h1",{align:"center"},l.a.createElement("button",{style:f,onClick:this.startgame}," Start ")),l.a.createElement("h1",{align:"center",style:n}," Remaining Time : ",this.state.time," "),l.a.createElement("button",{style:e,onClick:this.win}," Catch me if you can "))}}]),e}(u.Component);e.default=b},rAsI:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(t,e){return Math.floor(Math.random()*e+t)}}},[["JEmn",1,0]]]);