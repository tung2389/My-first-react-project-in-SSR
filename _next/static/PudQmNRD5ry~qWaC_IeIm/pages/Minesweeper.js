(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"5pKv":function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"6BQ9":function(t,e,a){t.exports=a("uekQ")},XWtR:function(t,e,a){var s=a("5T2Y").parseInt,n=a("oc46").trim,r=a("5pKv"),l=/^[-+]?0[xX]/;t.exports=8!==s(r+"08")||22!==s(r+"0x16")?function(t,e){var a=n(String(t),3);return s(a,e>>>0||(l.test(a)?16:10))}:s},dEVD:function(t,e,a){var s=a("Y7ZC"),n=a("XWtR");s(s.G+s.F*(parseInt!=n),{parseInt:n})},eQPe:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Minesweeper",function(){var t=a("n/Yz");return{page:t.default||t}}])},"n/Yz":function(t,e,a){"use strict";a.r(e);var s=a("6BQ9"),n=a.n(s),r=a("0iUn"),l=a("sLSF"),i=a("MI3g"),u=a("a7VT"),o=a("AT/M"),c=a("Tit0"),h=a("q1tI"),f=a.n(h),d=(a("Q8kY"),function(t){function e(){return Object(r.default)(this,e),Object(i.default)(this,Object(u.default)(e).apply(this,arguments))}return Object(c.default)(e,t),Object(l.default)(e,[{key:"render",value:function(){return f.a.createElement("button",{className:this.props.className,onMouseDown:this.props.onMouseDown,disabled:this.props.disabled},this.props.value)}}]),e}(f.a.Component)),m=function(t){function e(){return Object(r.default)(this,e),Object(i.default)(this,Object(u.default)(e).apply(this,arguments))}return Object(c.default)(e,t),Object(l.default)(e,[{key:"renderSquare",value:function(t,e){var a=this;return f.a.createElement(d,{className:this.props.status[t][e],onMouseDown:function(s){a.props.onMouseDown(s,t,e)},disabled:"butn"!==this.props.status[t][e]&&"flag"!==this.props.status[t][e]||this.props.isEnding||!this.props.start,value:this.props.squares[t][e]})}},{key:"renderAllSquare",value:function(){for(var t=this.props.n,e=this.props.m,a=Array(t).fill(null),s=0;s<t;s++){for(var n=Array(e).fill(null),r=0;r<e;r++){var l=s,i=r;n.push(this.renderSquare(l,i))}a.push(f.a.createElement("div",{className:"strictLine",key:s},n))}return a}},{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement("div",null,this.renderAllSquare()))}}]),e}(f.a.Component),p=[0,1,0,-1,1,1,-1,-1],b=[-1,0,1,0,-1,1,1,-1];function v(t,e,a){for(var s=Array(t),n=0;n<t;n++){var r=Array(e).fill(a);s[n]=r}return s}var g=function(t){function e(t){var a;return Object(r.default)(this,e),(a=Object(i.default)(this,Object(u.default)(e).call(this,t))).state={n:9,m:9,isEnding:!1,presquares:v(9,9,null),squares:v(9,9,null),status:v(9,9,"butn"),start:!1,hard:6,bopen:0},a.random=a.random.bind(Object(o.default)(a)),a.scan=a.scan.bind(Object(o.default)(a)),a.preprocess=a.preprocess.bind(Object(o.default)(a)),a.clickevent=a.clickevent.bind(Object(o.default)(a)),a.start=a.start.bind(Object(o.default)(a)),a.clearAllBomb=a.clearAllBomb.bind(Object(o.default)(a)),a.restart=a.restart.bind(Object(o.default)(a)),a.changeCol=a.changeCol.bind(Object(o.default)(a)),a.changeRow=a.changeRow.bind(Object(o.default)(a)),a.changeDifficult=a.changeDifficult.bind(Object(o.default)(a)),a.dfs=a.dfs.bind(Object(o.default)(a)),a.make_dfs=a.make_dfs.bind(Object(o.default)(a)),a}return Object(c.default)(e,t),Object(l.default)(e,[{key:"componentDidMount",value:function(){window.addEventListener("contextmenu",function(t){t.preventDefault()},!1)}},{key:"make_dfs",value:function(t,e){var a=v(this.state.n,this.state.m,0),s={t:this.state.bopen};this.dfs(t,e,a,s),this.setState({bopen:s.t})}},{key:"dfs",value:function(t,e,a,s){var n=this.state.n,r=this.state.m,l=this.state.presquares.slice(),i=this.state.squares.slice(),u=this.state.status.slice();if("butn"===u[t][e]&&10!==l[t][e]&&(s.t=s.t+1),a[t][e]=1,10!==l[t][e]&&(0!==l[t][e]&&(i[t][e]=l[t][e]),u[t][e]="num"+l[t][e],this.setState({status:u}),this.setState({squares:i})),0===l[t][e])for(var o=0;o<8;o++){var c=t+p[o],h=e+b[o];c>=0&&h>=0&&c<n&&h<r&&0===a[c][h]&&this.dfs(c,h,a,s)}}},{key:"random",value:function(){for(var t=this.state.presquares.slice(),e=this.state.n,a=this.state.m,s=this.state.hard,n=0;n<Math.floor(e*a/s);n++){for(var r=Math.floor(Math.random()*(e-1)+0),l=Math.floor(Math.random()*(a-1)+0);null!=t[r][l];)r=Math.floor(Math.random()*(e-1)+0),l=Math.floor(Math.random()*(a-1)+0);t[r][l]=10}this.setState({presquares:t})}},{key:"scan",value:function(t,e){for(var a=0,s=this.state.presquares.slice(),n=this.state.n,r=this.state.m,l=0;l<8;l++){var i=t+p[l],u=e+b[l];i>=0&&u>=0&&i<n&&u<r&&10===s[i][u]&&a++}return a}},{key:"preprocess",value:function(){for(var t=this.state.presquares.slice(),e=this.state.n,a=this.state.m,s=0;s<e;s++)for(var n=0;n<a;n++)null===t[s][n]&&(t[s][n]=this.scan(s,n));this.setState({presquares:t})}},{key:"clearAllBomb",value:function(){for(var t=this.state.presquares.slice(),e=this.state.status.slice(),a=this.state.n,s=this.state.m,n=0;n<a;n++)for(var r=0;r<s;r++)10===t[n][r]&&"flag"===e[n][r]?e[n][r]="detected":10===t[n][r]&&(e[n][r]="num10");this.setState({status:e})}},{key:"clickevent",value:function(t,e,a){var s=this.state.status.slice(),n=this.state.squares.slice(),r=this.state.presquares.slice();0===t.button?"flag"!==s[e][a]&&(0===r[e][a]?(this.make_dfs(e,a),s[e][a]="num"+r[e][a]):10===r[e][a]?(alert("You lost"),this.clearAllBomb(),this.setState({isEnding:!0}),s[e][a]="critical"):10!==r[e][a]&&0!==r[e][a]&&(n[e][a]=r[e][a],this.setState({bopen:this.state.bopen+1}),s[e][a]="num"+r[e][a])):2===t.button&&("butn"===s[e][a]?s[e][a]="flag":"flag"===s[e][a]&&(s[e][a]="butn")),this.setState({status:s}),this.setState({squares:n})}},{key:"componentDidUpdate",value:function(){var t=this.state.n,e=this.state.m,a=this.state.hard;this.state.bopen>=t*e-Math.floor(t*e/a)&&!this.state.isEnding&&(alert("You won!"),this.clearAllBomb(),this.setState({isEnding:!0}))}},{key:"start",value:function(){!1===this.state.start&&(this.random(),this.preprocess(),this.setState({start:!0}))}},{key:"restart",value:function(){var t=this.state.n,e=this.state.m,a=this.state.hard;this.setState({n:t,m:e,isEnding:!1,presquares:v(t,e,null),squares:v(t,e,null),status:v(t,e,"butn"),start:!1,hard:a,bopen:0})}},{key:"changeRow",value:function(t){var e=n()(t.target.value),a=this.state.m;this.setState({n:t.target.value,presquares:v(e,a,null),squares:v(e,a,null),status:v(e,a,"butn")})}},{key:"changeCol",value:function(t){var e=n()(t.target.value),a=this.state.n;this.setState({m:e,presquares:v(a,e,null),squares:v(a,e,null),status:v(a,e,"butn")})}},{key:"changeDifficult",value:function(t){var e=n()(t.target.value);this.setState({hard:e})}},{key:"render",value:function(){var t=this,e=this.state.squares.slice(),a=this.state.status.slice(),s=this.state.n,n=this.state.m;return f.a.createElement("div",{align:"center"},f.a.createElement("h6",null,"Minesweeper - Created by ",f.a.createElement("a",{href:"https://github.com/tung2389"},"Tung Luu")," from HSGS "),f.a.createElement("button",{onClick:this.start},"Start"),f.a.createElement("button",{onClick:this.restart},"Restart"),f.a.createElement("label",{className:"blabel",htmlFor:"modal-1"},"Notes"),f.a.createElement("input",{className:"modall-state",id:"modal-1",type:"checkbox"}),f.a.createElement("div",{className:"modall"},f.a.createElement("label",{className:"modall2",htmlFor:"modal-1"}),f.a.createElement("div",{className:"modall3"},f.a.createElement("label",{className:"modall2",htmlFor:"modal-1"}),f.a.createElement("h4",null,"Some notes:"),f.a.createElement("h4",null,"To open the cell, click the left mouse button. To put a flag, click the right mouse button. You can't open a cell if there is a flag on it. To remove the flag on a cell, click the right mouse button"),f.a.createElement("h4",null,"If you don't click the start button,you can't click any cell on the game. Every time you restart, make sure to click the start button if you want to play"),f.a.createElement("h4",null,"The bigger values of row x column is, the greater number of value of x is."),f.a.createElement("h4",null,"With many different values of x which are big enough , the numbers of bomb is approximately the same."),f.a.createElement("h4",null,"If the values of (row x column) is big, only with a slight change, it can greatly change the difficulty of the game. So change the value of x slowly"),f.a.createElement("h4",null,"If the values of row is too big, the board will break the line. So change them carefully."),f.a.createElement("h4",null,"Finally,you can click on anywhere in this area to make it dissapear :) ."))),f.a.createElement("h6",null,"Change number of row, default value is 9"),f.a.createElement("input",{onChange:this.changeRow,type:"range",min:1,max:100,step:1,disabled:this.state.start,defaultValue:9}),f.a.createElement("h6",null,"Change number of column, default value is 9"),f.a.createElement("input",{onChange:this.changeCol,type:"range",min:1,max:100,step:1,disabled:this.state.start,defaultValue:9}),f.a.createElement("h6",null,"Change the value x, the number of bomb is caculate according to expression (row * column) / x, default value of x is 6"),f.a.createElement("input",{onChange:this.changeDifficult,type:"range",min:2,max:n*s,step:1,disabled:this.state.start,defaultValue:6}),f.a.createElement(m,{n:s,m:n,onMouseDown:function(e,a,s){return t.clickevent(e,a,s)},squares:e,status:a,isEnding:this.state.isEnding,start:this.state.start}))}}]),e}(f.a.Component);e.default=g},oc46:function(t,e,a){var s=a("Y7ZC"),n=a("Jes0"),r=a("KUxP"),l=a("5pKv"),i="["+l+"]",u=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),c=function(t,e,a){var n={},i=r(function(){return!!l[t]()||"​"!="​"[t]()}),u=n[t]=i?e(h):l[t];a&&(n[a]=u),s(s.P+s.F*i,"String",n)},h=c.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(o,"")),t};t.exports=c},uekQ:function(t,e,a){a("dEVD"),t.exports=a("WEpk").parseInt}},[["eQPe",1,0]]]);