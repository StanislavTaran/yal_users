(this.webpackJsonpyal_users=this.webpackJsonpyal_users||[]).push([[0],{19:function(e,t,n){e.exports={item:"UserItem_item__jkmu9",nameField:"UserItem_nameField__3HW1f"}},30:function(e,t,n){e.exports={enter:"fade_enter__3CXjT",enterActive:"fade_enterActive__2Ahao",exit:"fade_exit__PbwYe",exitActive:"fade_exitActive__Ibs-D"}},31:function(e,t,n){e.exports={list:"UserList_list__3I4G6"}},32:function(e,t,n){e.exports={monthsList:"MonthList_monthsList__37r3w"}},35:function(e,t,n){e.exports=n(64)},45:function(e,t,n){},46:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(6),i=n.n(s),c=n(7),o=n(5),u=n(8),l=n(18),m=n(2),h=Object(o.b)("users/GET_USERS_REQUEST"),_=Object(o.b)("users/GET_USERS_SUCCES"),f=Object(o.b)("users/GET_USERS_ERROR"),b=function(e,t){return t.reduce((function(e,t){var n=new Date(t.dob);return e[new Intl.DateTimeFormat("en-US",{month:"long"}).format(n)].push(t),e}),e)},v={january:[],february:[],march:[],april:[],may:[],june:[],july:[],august:[],september:[],october:[],november:[],december:[]},p=Object(o.c)(v,Object(l.a)({},_,(function(e,t){return b(v,t.payload)}))),d=Object(o.c)({},Object(l.a)({},f,(function(e,t){return t.payload}))),E=Object(m.c)({errors:d,monthsWithUsers:p}),j=[u.a],O=Object(o.a)({reducer:E,middleware:j,devTools:!0}),L=(n(45),n(46),n(10)),U=n(11),y=n(13),S=n(12),I=n(66),w=n(30),T=n.n(w),k=n(19),F=n.n(k),M=function(e){var t=e.name,n=e.surname;return a.a.createElement("li",{className:F.a.item},a.a.createElement("span",{className:F.a.nameField},t," ",n))},x=n(31),g=n.n(x),N=function(e){var t=e.users;return a.a.createElement("ol",{className:g.a.list},t.map((function(e){return a.a.createElement(M,{name:e.firstName,surname:e.lastName})})))},A=n(9),R=n.n(A),C=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){var e;Object(L.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isShowUsers:!1},e.showUsers=function(){e.setState({isShowUsers:!0})},e.hideUsers=function(){e.setState({isShowUsers:!1})},e}return Object(U.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props,r=n.numberUsers,s=n.month,i=this.state.isShowUsers,c=s.slice(1);switch(!0){case r<7&&r>2:e=R.a.itemSecondLevel;break;case r<11&&r>6:e=R.a.itemThirdLevel;break;case r>=11:e=R.a.itemFourthLevel;break;default:e=R.a.itemFirstLevel}return a.a.createElement("li",{className:e,onMouseEnter:function(){return t.showUsers()},onMouseLeave:function(){return t.hideUsers()}},s[0],a.a.createElement(I.a,{in:i,timeout:200,classNames:T.a,unmountOnExit:!0},a.a.createElement(N,{users:c})))}}]),n}(a.a.Component),D=n(32),G=n.n(D),W=function(e){var t=e.months;return a.a.createElement("ul",{className:G.a.monthsList},Object.values(t).map((function(e,n){return a.a.createElement(C,{key:Object.keys(t)[n],monthName:Object.keys(t)[n],usersList:Object.values(t)[n],length:e.length})})))},J=function(e){return e.monthsWithUsers},P=Object(c.b)((function(e){return{months:J(e)}}))(W),B=n(33),H=n.n(B),Q=function(){return H.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users")},X=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersInfo()}},{key:"render",value:function(){return a.a.createElement("section",null,a.a.createElement(P,null))}}]),n}(a.a.Component),Y=Object(c.b)(null,(function(e){return{getUsersInfo:function(){return e((function(e){e(h()),Q().then((function(t){e(_(t.data))})).catch((function(t){e(f(t))}))}))}}}))(X);var q=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(Y,null))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,{store:O},a.a.createElement(q,null))),document.getElementById("root"))},9:function(e,t,n){e.exports={itemFirstLevel:"MonthItem_itemFirstLevel__3IlT6",itemSecondLevel:"MonthItem_itemSecondLevel__3Ckur MonthItem_itemFirstLevel__3IlT6",itemThirdLevel:"MonthItem_itemThirdLevel__2uPlm MonthItem_itemFirstLevel__3IlT6",itemFourthLevel:"MonthItem_itemFourthLevel__2ytgT MonthItem_itemFirstLevel__3IlT6"}}},[[35,1,2]]]);
//# sourceMappingURL=main.97e9a1d2.chunk.js.map