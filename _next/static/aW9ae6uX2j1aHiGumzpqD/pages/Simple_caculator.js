(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"Mx+K":function(e,_,t){"use strict";var r=t("0iUn"),a=t("sLSF"),s=t("MI3g"),n=t("a7VT"),i=t("Tit0"),l=t("q1tI"),c=t.n(l),u=(t("Q8kY"),function(e){function _(){return Object(r.default)(this,_),Object(s.default)(this,Object(n.default)(_).apply(this,arguments))}return Object(i.default)(_,e),Object(a.default)(_,[{key:"render",value:function(){return c.a.createElement("button",{className:"btn1",onClick:this.props.onClick},this.props.value)}}]),_}(c.a.Component)),o=function(e){function _(){return Object(r.default)(this,_),Object(s.default)(this,Object(n.default)(_).apply(this,arguments))}return Object(i.default)(_,e),Object(a.default)(_,[{key:"renderSquare",value:function(e,_){var t=this;return c.a.createElement(u,{value:this.props.square[e][_],onClick:function(){return t.props.onClick(e,_)}})}},{key:"renderAllSquare",value:function(){for(var e=this.props.n,_=this.props.m,t=Array(e).fill(null),r=0;r<e;r++){for(var a=Array(_).fill(null),s=0;s<_;s++){var n=r,i=s;a.push(this.renderSquare(n,i))}t.push(c.a.createElement("div",{key:r},a))}return t}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",null,this.renderAllSquare()))}}]),_}(c.a.Component);_.a=o},bhZx:function(e,_,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Simple_caculator",function(){var e=t("h7/F");return{page:e.default||e}}])},"h7/F":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("0iUn"),_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("sLSF"),_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("MI3g"),_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("a7VT"),_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("AT/M"),_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("Tit0"),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("q1tI"),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_src_App_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("Q8kY"),_src_App_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_src_App_css__WEBPACK_IMPORTED_MODULE_7__),_src_Caculator_board__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("Mx+K"),square=create_board(6,4);function create_board(e,_){for(var t=Array(e),r=0;r<e;r++){var a=Array(_);t[r]=a}for(var s=0;s<e-1;s++)for(var n=0;n<_-1;n++)t[s][n]=s*(_-1)+n+1;return t[0][3]="/",t[1][3]="*",t[2][3]="-",t[3][3]="+",t[3][0]="0",t[3][1]=".",t[3][2]="=",t[4][0]="AC",t[4][1]="DEL",t[4][2]="sqrt",t[4][3]="%",t[5][0]="(",t[5][1]=")",t[5][2]="00",t[5][3]="Off",t}var Simple_caculator=function(_Component){function Simple_caculator(e){var _;return Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this,Simple_caculator),(_=Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.default)(this,Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(Simple_caculator).call(this,e))).state={expression:""},_.ClickEvent=_.ClickEvent.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_)),_}return Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(Simple_caculator,_Component),Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Simple_caculator,[{key:"ClickEvent",value:function ClickEvent(x,y){if("="!==square[x][y]&&"AC"!==square[x][y]&&"sqrt"!==square[x][y]&&"DEL"!==square[x][y]&&"Off"!==square[x][y]&&"On"!==square[x][y])this.setState({expression:this.state.expression.toString()+square[x][y]});else if("="===square[x][y])try{var s=eval(this.state.expression);this.setState({expression:s})}catch(e){alert("wrong expression")}else if("AC"===square[x][y])this.setState({expression:""});else if("sqrt"===square[x][y])try{this.setState({expression:Math.sqrt(eval(this.state.expression)).toString()})}catch(e){alert("wrong expression")}else"DEL"===square[x][y]?this.setState({expression:this.state.expression.slice(0,this.state.expression.length-1)}):"On"===square[x][y]?(this.setState({expression:""}),square[5][3]="Off"):"Off"===square[x][y]&&(this.setState({expression:""}),square[5][3]="On")}},{key:"render",value:function(){var e=this,_={visibility:"On"===square[5][3]?"hidden":"visible"};return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{align:"center"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1",null,"Simple caculator created by ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100006826129122"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("font",{color:"green"},"Lưu Khánh Tùng"))," from HSGS"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input",{style:_,className:"inpstyle2",value:this.state.expression}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_Caculator_board__WEBPACK_IMPORTED_MODULE_8__.a,{n:6,m:4,square:square,onClick:function(_,t){return e.ClickEvent(_,t)}}))}}]),Simple_caculator}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.default=Simple_caculator}},[["bhZx",1,0]]]);