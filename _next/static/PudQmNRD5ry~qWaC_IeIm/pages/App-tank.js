(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"61XY":function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/App-tank",function(){var t=a("jaKu");return{page:t.default||t}}])},jaKu:function(t,e,a){"use strict";a.r(e);for(var i=a("0iUn"),l=a("sLSF"),s=a("MI3g"),r=a("a7VT"),n=a("AT/M"),h=a("Tit0"),u=a("q1tI"),d=a.n(u),c=(a("Q8kY"),a("rAsI")),o=16,y=28,f=Object(c.a)(1,14),b=Object(c.a)(1,26),v=[],m=[],O=[],p=[],E=[],x=[],j=Object(c.a)(1,14),k=Object(c.a)(1,14),I=Object(c.a)(1,26),S=Object(c.a)(1,26),B=Object(c.a)(1,4),g=Object(c.a)(1,4);j===f;)j=Object(c.a)(1,14);for(;k===f||k===j;)k=Object(c.a)(1,14);p.push({x:j,y:I,dir:B,health:3},{x:k,y:S,dir:g,health:3}),E.push({x:99,y:99,dir:99},{x:999,y:999,dir:999}),m.push(f),O.push(b);for(var N=9999,M=9999,w=0;w<p.length;w++)x[w]=!1;for(var T=0;T<o;T++){for(var q=[],C=0;C<y;C++){for(var F=!0,_=0;_<p.length;_++)T===p[_].x&&C===p[_].y&&(F=!1,q.push(d.a.createElement("button",{className:"enemy"+p[_].dir})));!0===F&&(T===f&&C===b?q.push(d.a.createElement("button",{className:"tank1"})):15===T||0===T?q.push(d.a.createElement("button",{className:"squareline3"})):27===C||0===C?0===C?q.push(d.a.createElement("button",{className:"squareline2"})):27===C&&q.push(d.a.createElement("button",{className:"squareline4"})):q.push(d.a.createElement("button",{className:"square22"})))}v.push(d.a.createElement("div",{className:"board-row"},q))}var D=function(t){function e(t){var a;return Object(i.default)(this,e),(a=Object(s.default)(this,Object(r.default)(e).call(this,t))).state={dir:1,boardtank:v,isBulletOnBoard:!1,dirbullet:9,isEbulletOnBoard:!1,health:3},a.changedir=a.changedir.bind(Object(n.default)(a)),a.shoot=a.shoot.bind(Object(n.default)(a)),a.bulletfly=a.bulletfly.bind(Object(n.default)(a)),a.isEnemy=a.isEnemy.bind(Object(n.default)(a)),a.EnemyMove=a.EnemyMove.bind(Object(n.default)(a)),a.update=a.update.bind(Object(n.default)(a)),a.EnemyShoot=a.EnemyShoot.bind(Object(n.default)(a)),a.EbulletFly=a.EbulletFly.bind(Object(n.default)(a)),a.check=a.check.bind(Object(n.default)(a)),a.isMe=a.isMe.bind(Object(n.default)(a)),a.bulletOnTank=a.bulletOnTank.bind(Object(n.default)(a)),a.shootEnemy=a.shootEnemy.bind(Object(n.default)(a)),a.restart=a.restart.bind(Object(n.default)(a)),a.abc=a.abc.bind(Object(n.default)(a)),a}return Object(h.default)(e,t),Object(l.default)(e,[{key:"update",value:function(){for(var t=[],e=0;e<o;e++){for(var a=[],i=0;i<y;i++){for(var l=!0,s=!0,r=0;r<E.length;r++)e===E[r].x&&i===E[r].y&&(s=!1,a.push(d.a.createElement("button",{className:"enemybullet"+E[r].dir})));if(!0===s){for(var n=0;n<p.length;n++)e===p[n].x&&i===p[n].y&&(l=!1,a.push(d.a.createElement("button",{className:"enemy"+p[n].dir})));!0===l&&(e===N&&i===M?a.push(d.a.createElement("button",{className:"bullet"+this.state.dirbullet})):e===f&&i===b?a.push(d.a.createElement("button",{className:"tank"+this.state.dir})):15===e||0===e?a.push(d.a.createElement("button",{className:"squareline3"})):27===i||0===i?0===i?a.push(d.a.createElement("button",{className:"squareline2"})):27===i&&a.push(d.a.createElement("button",{className:"squareline4"})):a.push(d.a.createElement("button",{className:"square22"})))}}t.push(d.a.createElement("div",{className:"board-row"},a))}this.setState({boardtank:t})}},{key:"restart",value:function(){for(alert("the game has been restarted"),f=Object(c.a)(1,14),b=Object(c.a)(1,26),v=[],m=[],O=[],p=[],E=[],x=[],j=Object(c.a)(1,14),k=Object(c.a)(1,14),I=Object(c.a)(1,26),S=Object(c.a)(1,26),B=Object(c.a)(1,4),g=Object(c.a)(1,4);j===f;)j=Object(c.a)(1,14);for(;k===f||k===j;)k=Object(c.a)(1,14);p.push({x:j,y:I,dir:B,health:3},{x:k,y:S,dir:g,health:3}),E.push({x:99,y:99,dir:99},{x:999,y:999,dir:999}),m.push(f),O.push(b),N=9999,M=9999,this.setState({health:3});for(var t=0;t<2;t++)x[t]=!1;clearInterval(this.interval),this.setState({isBulletOnBoard:!1}),clearInterval(this.fly1),clearInterval(this.fly2),clearInterval(this.enemymove),this.enemymove=setInterval(this.EnemyMove,1e3),this.update()}},{key:"shootEnemy",value:function(){for(var t=0;t<p.length;t++)p[t].x===N&&p[t].y===M&&(1===p[t].health?1===p.length?(p.splice(t,1),this.restart()):(p.splice(t,1),0===t?(E[t].x=999,E[t].y=999,clearInterval(this.fly1)):(E[t].x=999,E[t].y=999,clearInterval(this.fly2)),N=999,M=999,this.update(),clearInterval(this.interval),this.setState({isBulletOnBoard:!1})):(p[t].health=p[t].health-1,N=999,M=999,this.update(),clearInterval(this.interval),this.setState({isBulletOnBoard:!1})))}},{key:"bulletOnTank",value:function(){for(var t=0;t<2;t++)if(E[t].x===f&&E[t].y===b){0===t?clearInterval(this.fly1):clearInterval(this.fly2),x[t]=!1,E[t].x=99,E[t].y=99;var e=this.state.health-1;0===e?(alert("YOU LOSE"),this.restart()):this.setState({health:e})}}},{key:"check",value:function(){for(var t=0;t<2;t++)if(!0===x[t])return!1;return!0}},{key:"EbulletFly",value:function(t){1===E[t].dir?E[t].x<=1?(E[t].x=99,x[t]=!1,0===t?clearInterval(this.fly1):clearInterval(this.fly2)):E[t].x=E[t].x-1:2===E[t].dir?E[t].y>=27?(E[t].y=99,x[t]=!1,0===t?clearInterval(this.fly1):clearInterval(this.fly2)):E[t].y=E[t].y+1:3===E[t].dir?E[t].x>=14?(E[t].x=99,x[t]=!1,0===t?clearInterval(this.fly1):clearInterval(this.fly2)):E[t].x=E[t].x+1:4===E[t].dir&&(E[t].y<=1?(E[t].y=99,x[t]=!1,0===t?clearInterval(this.fly1):clearInterval(this.fly2)):E[t].y=E[t].y-1),this.bulletOnTank(),this.update()}},{key:"EnemyShoot",value:function(){for(var t=this,e=[],a=0;a<2;a++)e[a]=!0;if(!0===this.check()){for(var i=0;i<p.length;i++)1===p[i].dir?p[i].x>1?(E[i].x=p[i].x-1,E[i].y=p[i].y,E[i].dir=1):e[i]=!1:2===p[i].dir?p[i].y<26?(E[i].x=p[i].x,E[i].y=p[i].y+1,E[i].dir=2):e[i]=!1:3===p[i].dir?p[i].x<14?(E[i].x=p[i].x+1,E[i].y=p[i].y,E[i].dir=3):e[i]=!1:4===p[i].dir&&(p[i].y>1?(E[i].x=p[i].x,E[i].y=p[i].y-1,E[i].dir=4):e[i]=!1),!0===e[i]&&(x[i]=!0);this.update(),!0===e[0]&&(this.fly1=setInterval(function(){t.EbulletFly(0)},300)),!0===e[1]&&(this.fly2=setInterval(function(){t.EbulletFly(1)},300))}}},{key:"isMe",value:function(t,e){return t===f&&e===b}},{key:"EnemyMove",value:function(){if(0===Object(c.a)(0,2))for(var t=0;t<p.length;t++)1===p[t].dir?p[t].x>1&&(p[t].x=p[t].x-1,this.isMe(p[t].x,p[t].y)&&(p[t].x=p[t].x+1)):2===p[t].dir?p[t].y<26&&(p[t].y=p[t].y+1,this.isMe(p[t].x,p[t].y)&&(p[t].y=p[t].y-1)):3===p[t].dir?p[t].x<14&&(p[t].x=p[t].x+1,this.isMe(p[t].x,p[t].y)&&(p[t].x=p[t].x-1)):4===p[t].dir&&p[t].y>1&&(p[t].y=p[t].y-1,this.isMe(p[t].x,p[t].y)&&(p[t].y=p[t].y+1));else for(var e=0;e<p.length;e++)for(var a=p[e].dir;p[e].dir===a;)p[e].dir=Object(c.a)(1,4);this.shootEnemy(),this.update(),this.EnemyShoot()}},{key:"isEnemy",value:function(){for(var t=0;t<p.length;t++)if(f===p[t].x&&b===p[t].y)return!0;return!1}},{key:"bulletfly",value:function(){1===this.state.dirbullet?N<=1?(N=9999,clearInterval(this.interval),this.setState({isBulletOnBoard:!1})):N-=1:2===this.state.dirbullet?M>=27?(M=9999,clearInterval(this.interval),this.setState({isBulletOnBoard:!1})):M+=1:3===this.state.dirbullet?N>=14?(N=9999,clearInterval(this.interval),this.setState({isBulletOnBoard:!1})):N+=1:4===this.state.dirbullet&&(M<=1?(M=9999,clearInterval(this.interval),this.setState({isBulletOnBoard:!1})):M-=1),this.shootEnemy(),this.update()}},{key:"shoot",value:function(){if(!1===this.state.isBulletOnBoard){if(1===this.state.dir){if(f>1){N=f-1,M=b;var t=this.state.dir;this.setState({dirbullet:t})}}else if(2===this.state.dir){if(b<26){N=f,M=b+1;var e=this.state.dir;this.setState({dirbullet:e})}}else if(3===this.state.dir){if(f<14){N=f+1,M=b;var a=this.state.dir;this.setState({dirbullet:a})}}else if(4===this.state.dir&&b>1){N=f,M=b-1;var i=this.state.dir;this.setState({dirbullet:i})}N>0&&M>0&&N<15&&M<27&&(this.interval=setInterval(this.bulletfly,300),this.update(),this.setState({isBulletOnBoard:!0}),this.shootEnemy())}}},{key:"changedir",value:function(t){32===t.keyCode?this.state.isBulletOnBoard||this.shoot():(38===t.keyCode?(t.preventDefault(),1!==this.state.dir?this.setState({dir:1}):f>1&&(f-=1,!0===this.isEnemy()&&(f+=1))):39===t.keyCode?(t.preventDefault(),2!==this.state.dir?this.setState({dir:2}):b<26&&(b+=1,!0===this.isEnemy()&&(b-=1))):40===t.keyCode?(t.preventDefault(),3!==this.state.dir?this.setState({dir:3}):f<14&&(f+=1,!0===this.isEnemy()&&(f-=1))):37===t.keyCode&&(t.preventDefault(),4!==this.state.dir?this.setState({dir:4}):b>1&&(b-=1,!0===this.isEnemy()&&(b+=1))),this.bulletOnTank(),this.update())}},{key:"abc",value:function(t){alert(t.keyCode)}},{key:"componentDidMount",value:function(){this.enemymove=setInterval(this.EnemyMove,1e3),window.addEventListener("keydown",this.changedir,!1)}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("h1",{align:"center"},"Health:",this.state.health),this.state.boardtank)}}]),e}(d.a.Component);e.default=D},rAsI:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var i=function(t,e){return Math.floor(Math.random()*e+t)}}},[["61XY",1,0]]]);