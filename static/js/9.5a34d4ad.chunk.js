(this.webpackJsonp=this.webpackJsonp||[]).push([[9],{741:function(e,t,n){"use strict";var o=n(9),a=n.n(o),r=n(10),l=n.n(r),c=n(0),i=n.n(c),s=n(4),u=n(29),m=n(42),d=n(738);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(m.a)().backgroundLight,n=Object(d.a)().border;return i.a.createElement(s.a,a()({},e,{style:[f(f({},n({color:t})),{},{backgroundColor:t,marginTop:u.f.normal+u.f.small,padding:u.f.small+u.f.tiny}),e.style]}))}},742:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(4),l=n(29),c=n(738),i=n(300),s=n(70);t.a=function(e){var t=(0,Object(c.a)().border)({color:e.color}),n=e.color||t.borderColor;return a.a.createElement(r.a,{style:[e.clear?{paddingHorizontal:l.f.tiny}:t,e.style]},a.a.createElement(s.a,{note:!0,style:{color:n}},e.text),e.buttonText&&e.onPressButton&&a.a.createElement(i.a,{title:e.buttonText,type:"clear",size:"small",fontWeight:"bold",onPress:e.onPressButton,titleStyle:{color:n},buttonStyle:{paddingHorizontal:0,paddingVertical:0},style:{alignSelf:"flex-end",marginTop:l.f.tiny}}))}},757:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(4),l=n(29),c=n(42);t.a=function(){var e=Object(c.a)().border;return a.a.createElement(r.a,{style:{height:1,width:"100%",backgroundColor:e,marginTop:l.f.small,marginBottom:l.f.small+l.f.tiny}})}},758:function(e,t,n){"use strict";var o=n(126),a=n.n(o),r={};t.a=function(e,t,n){var o=e.toString();a()((function(){var n=setTimeout(e,t);return r[o]=n,n}),(function(e){clearTimeout(e)}),n)}},762:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(30),l=n(70);t.a=function(e){return a.a.createElement(l.a,{caption:!0,disabled:e.disabled,style:e.style},Object(r.c)(e.amount||e.token.balance,e.token.decimals,8))}},763:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(29),l=n(70);t.a=function(e){return a.a.createElement(l.a,{medium:!0,caption:!0,disabled:e.disabled,style:{marginLeft:r.f.tiny}},r.d?e.token.symbol:"")}},768:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(300);t.a=function(e){var t=e.state;return a.a.createElement(r.a,{title:t.fromSymbol+"-"+t.toSymbol+" Not Supported",disabled:!0})}},771:function(e,t,n){"use strict";var o=n(2),a=n.n(o),r=n(19),l=n.n(r),c=n(0),i=n.n(c),s=n(193),u=n(4),m=n(28),d=n(29),b=n(88),f=n(758),y=n(753),p=n(107),k=n(744),O=n(755),E=n(746),g=n(70),j=n(762),T=n(749),S=function(e){return i.a.createElement(g.a,{caption:!0,numberOfLines:1,ellipsizeMode:"tail",style:{marginLeft:d.f.small,width:180},disabled:e.disabled},d.d?e.token.name:e.token.symbol)},v=n(10),h=n.n(v),x=n(81),A=n(42),w=n(738),P=n(307),C=n(300),D=n(756);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(){return i.a.createElement(x.a,{size:"small",style:{position:"absolute",right:16,bottom:16}})},B=function(e){var t=Object(A.a)().accent,n=Object(c.useCallback)((function(){e.onSelectToken(e.token)}),[e.onSelectToken,e.token]);return i.a.createElement(E.a,{selected:!1,disabled:!0,onPress:n,containerStyle:{marginBottom:k.a}},i.a.createElement(p.a,{style:{alignItems:"center"}},i.a.createElement(T.a,{token:e.token}),i.a.createElement(S,{token:e.token}),i.a.createElement(u.a,{style:{flex:1}}),i.a.createElement(C.a,{type:"clear",size:"small",color:t,title:e.duplicate?"Already Added":"ADD "+e.token.symbol,fontWeight:"bold",onPress:n,disabled:e.duplicate,buttonStyle:{paddingHorizontal:4,height:27}})))},F=function(e){var t=Object(w.a)().border,n=Object(c.useContext)(b.a),o=n.provider,r=n.signer,s=n.tokens,y=Object(c.useState)(),k=l()(y,2),O=k[0],E=k[1],g=Object(c.useState)(!1),j=l()(g,2),T=j[0],S=j[1],v=!!O&&-1!==s.findIndex((function(e){return e.address===O.address}));return e.tokens?(Object(c.useEffect)((function(){""===e.text&&(S(!1),E(void 0))}),[e.text]),Object(f.a)((function(){var t,n;return a.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(t=e.text.trim(),!(o&&r&&m.ethers.utils.isAddress(t))){l.next=11;break}return S(!0),l.prev=3,l.next=6,a.a.awrap(Object(P.g)(o,t));case 6:(n=l.sent).name&&n.symbol&&n.decimals&&E(n);case 8:return l.prev=8,S(!1),l.finish(8);case 11:case"end":return l.stop()}}),null,null,[[3,,8,11]],Promise)}),300,[o,r,e.text]),i.a.createElement(u.a,null,i.a.createElement(p.a,{style:{marginBottom:d.f.small}},i.a.createElement(D.a,{value:e.text,onChangeText:e.onChangeText,placeholder:"Token name, symbol or address",autoFocus:!0,inputStyle:{marginHorizontal:d.f.tiny,fontSize:e.text?20:16},inputContainerStyle:{borderBottomWidth:0,marginRight:T?32:0},labelStyle:{height:0},containerStyle:L(L({},t()),{},{paddingHorizontal:d.f.tiny,paddingTop:12,paddingBottom:0})}),e.onAddToken&&T&&i.a.createElement(z,null)),e.onAddToken&&O&&i.a.createElement(B,{token:O,selected:!0,onSelectToken:e.onAddToken,duplicate:v}))):i.a.createElement(u.a,null)},q=n(763),M=function(e){var t=Object(c.useContext)(b.a),n=t.loadingTokens,o=t.tokens,a=Object(c.useCallback)((function(t){var n=t.item;return i.a.createElement(I,{key:n.address,token:n,selected:!1,onSelectToken:e.onSelectToken,disabled:null==e.disabled?void 0:e.disabled(n)})}),[e.onSelectToken,e.disabled]),r=Object(c.useMemo)((function(){return o.filter((function(t){return!e.hidden||!e.hidden(t)})).sort((function(e,t){return(t.balance.isZero()?0:1e10)-(e.balance.isZero()?0:1e10)+e.symbol.localeCompare(t.symbol)}))}),[o,e.hidden]);return n?i.a.createElement(O.a,null):0===r.length?i.a.createElement(W,null):i.a.createElement(s.a,{keyExtractor:function(e){return e.address},data:r,renderItem:a})},W=function(){return i.a.createElement(u.a,{style:{margin:d.f.normal}},i.a.createElement(g.a,{disabled:!0,style:{textAlign:"center",width:"100%"}},"You don't have any matching tokens."))},I=function(e){var t=Object(c.useCallback)((function(){e.onSelectToken(e.token)}),[e.onSelectToken,e.token]);return i.a.createElement(E.a,{selected:e.selected,onPress:t,disabled:e.disabled||e.selectable,containerStyle:{marginBottom:k.a}},i.a.createElement(p.a,{style:{alignItems:"center"}},i.a.createElement(T.a,{token:e.token,disabled:e.disabled}),i.a.createElement(S,{token:e.token,disabled:e.disabled}),i.a.createElement(j.a,{token:e.token,disabled:e.disabled,style:{flex:1,textAlign:"right"}}),i.a.createElement(q.a,{token:e.token,disabled:e.disabled})))};t.a=function(e){var t=Object(c.useContext)(b.a),n=t.tokens,o=t.addCustomToken,r=Object(c.useState)(""),s=l()(r,2),d=s[0],p=s[1],k=Object(c.useState)(""),O=l()(k,2),E=O[0],g=O[1],j=Object(c.useMemo)((function(){return n.find((function(t){return t.symbol===e.symbol}))}),[n,e.symbol]);return Object(c.useEffect)((function(){return p("")}),[e.symbol]),Object(f.a)((function(){return g(d.trim().toLowerCase())}),300,[d]),i.a.createElement(u.a,{style:e.style},i.a.createElement(y.a,{title:e.title,expanded:!e.symbol,onExpand:function(){return e.onChangeSymbol("")}},i.a.createElement(F,{text:d,onChangeText:p,tokens:n,onAddToken:function(e){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(o(e));case 2:p(""),g("");case 4:case"end":return t.stop()}}),null,null,null,Promise)}}),i.a.createElement(M,{disabled:e.disabled,hidden:function(t){var n=(null==e.hidden?void 0:e.hidden(t))||!1;return!n&&E.length>0&&!m.ethers.utils.isAddress(E)&&(n=!t.symbol.toLowerCase().includes(E)&&!t.name.toLowerCase().includes(E)),n},onSelectToken:function(t){return e.onChangeSymbol(t.symbol)}})),j&&i.a.createElement(I,{token:j,selected:!0,onSelectToken:function(){return e.onChangeSymbol("")},selectable:!0}))}},911:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n.n(o),r=n(19),l=n.n(r),c=n(0),i=n.n(c),s=n(11),u=n(4),m=n(126),d=n.n(m),b=n(754),f=n(757),y=n(300),p=n(302),k=n(303),O=n(743),E=n(747),g=n(739),j=n(741),T=n(748),S=n(744),v=n(750),h=n(742),x=n(70),A=n(305),w=n(751),P=n(771),C=n(768),D=n(745),H=n(306),L=n(47),z=n(29),B=n(308),F=n(88),q=n(10),M=n.n(q),W=n(30),I=n(760),Z=n(301),J=n(761);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){M()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=function(){var e=Object(J.a)(),t=Object(c.useContext)(F.a),n=t.provider,o=t.signer,r=t.updateTokens,i=Object(c.useState)(!1),s=l()(i,2),u=s[0],m=s[1],d=Object(c.useState)(),b=l()(d,2),f=b[0],y=b[1],p=Object(c.useState)(!1),k=l()(p,2),O=k[0],E=k[1],g=Object(Z.b)(),j=g.getPair,T=g.addLiquidity,S=g.addLiquidityETH;Object(I.a)((function(t){return a.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(t||(m(!0),y(void 0)),!(e.fromToken&&e.toToken&&n)){o.next=17;break}return o.prev=2,o.t0=y,o.next=6,a.a.awrap(j(e.fromToken,e.toToken,n));case 6:o.t1=o.sent,(0,o.t0)(o.t1),o.next=12;break;case 10:o.prev=10,o.t2=o.catch(2);case 12:return o.prev=12,m(!1),o.finish(12);case 15:o.next=18;break;case 17:m(!1);case 18:case"end":return o.stop()}}),null,null,[[2,10,12,15]],Promise)}),(function(){return"getPair("+e.fromSymbol+","+e.toSymbol+")"}),[e.fromSymbol,e.toSymbol,n],0);var v=Object(c.useCallback)((function(){var t,n,c,i,s,u,m,d,b;return a.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:if(!(e.fromToken&&e.toToken&&e.fromAmount&&e.toAmount&&o)){f.next=25;break}if(E(!0),f.prev=2,t=Object(W.f)(e.fromAmount,e.fromToken.decimals),n=Object(W.f)(e.toAmount,e.toToken.decimals),"ETH"!==e.fromSymbol&&"ETH"!==e.toSymbol){f.next=14;break}return c="ETH"===e.fromSymbol?[e.toToken,n,t]:[e.fromToken,t,n],i=l()(c,3),s=i[0],u=i[1],m=i[2],f.next=9,a.a.awrap(S(s,u,m,o));case 9:return d=f.sent,f.next=12,a.a.awrap(d.wait());case 12:f.next=19;break;case 14:return f.next=16,a.a.awrap(T(e.fromToken,e.toToken,t,n,o));case 16:return b=f.sent,f.next=19,a.a.awrap(b.wait());case 19:return f.next=21,a.a.awrap(r());case 21:e.setFromSymbol("");case 22:return f.prev=22,E(!1),f.finish(22);case 25:case"end":return f.stop()}}),null,null,[[2,,22,25]],Promise)}),[e.fromToken,e.toToken,e.fromAmount,e.toAmount,o]);return R(R({},e),{},{loading:u||e.loading,pair:f,onAdd:v,adding:O})},V=n(42),G=n(740),K=n(304),Q=function(){var e=Y();return i.a.createElement(u.a,{style:{marginTop:z.f.large}},i.a.createElement(U,{state:e}),i.a.createElement(f.a,null),i.a.createElement(X,{state:e}),i.a.createElement(f.a,null),i.a.createElement($,{state:e}),i.a.createElement(S.b,null),i.a.createElement(_,{state:e}),i.a.createElement(S.b,null),i.a.createElement(ee,{state:e}))},U=function(e){var t=e.state,n=Object(c.useContext)(F.a).customTokens;return i.a.createElement(P.a,{title:"1st Token",symbol:t.fromSymbol,onChangeSymbol:t.setFromSymbol,hidden:function(e){return!n.find((function(t){return t.address===e.address}))&&e.balance.isZero()}})},X=function(e){var t=e.state,n=Object(c.useContext)(F.a).customTokens;return t.fromSymbol?i.a.createElement(u.a,null,i.a.createElement(P.a,{title:"2nd Token",symbol:t.toSymbol,onChangeSymbol:t.setToSymbol,hidden:function(e){return e.symbol===t.fromSymbol||!n.find((function(t){return t.address===e.address}))&&e.balance.isZero()}})):i.a.createElement(g.a,{text:"2nd Token",disabled:!0})},$=function(e){var t=e.state;if(!t.fromSymbol||!t.toSymbol)return i.a.createElement(g.a,{text:"Amount of Tokens",disabled:!0});return i.a.createElement(w.a,{title:"Amount of Tokens",token:t.fromToken,amount:t.fromAmount,onAmountChanged:function(e){if(t.setFromAmount(e),t.pair&&t.fromToken){var n=t.pair.priceOf(Object(W.b)(t.fromToken)).quote(Object(W.a)(t.fromToken,e)).toExact();t.setToAmount(Object(W.e)(n)?"":n)}},hideMaxButton:t.loading&&!t.pair})},_=function(e){var t=e.state;if(!t.fromSymbol||!t.toSymbol)return i.a.createElement(u.a,null);return i.a.createElement(w.a,{token:t.toToken,amount:t.toAmount,onAmountChanged:function(e){if(t.setToAmount(e),t.pair&&t.toToken){var n=t.pair.priceOf(Object(W.b)(t.toToken)).quote(Object(W.a)(t.toToken,e)).toExact();t.setFromAmount(Object(W.e)(n)?"":n)}},hideMaxButton:t.loading&&!t.pair})},ee=function(e){var t=e.state;return t.fromToken&&t.toToken&&!t.loading&&!t.pair?i.a.createElement(te,{state:t}):i.a.createElement(ne,{state:t})},te=function(e){var t=e.state,n=Object(V.a)().green,o=Object(W.e)(t.fromAmount)||Object(W.e)(t.toAmount),a=B.a.from(Object(W.f)(t.toAmount,t.toToken.decimals),Object(W.f)(t.fromAmount,t.fromToken.decimals)).toString(8);return i.a.createElement(u.a,null,i.a.createElement(j.a,{style:{marginTop:z.f.normal}},i.a.createElement(oe,{state:t,price:a,disabled:o})),i.a.createElement(h.a,{text:"You are the first liquidity provider.\nThe ratio of tokens you add will set the price of this pool.",color:n,style:{marginTop:z.f.small}}))},ne=function(e){var t=e.state,n=Object(c.useState)(),o=l()(n,2),r=o[0],s=o[1],u=Object(V.a)(),m=u.textDark,b=u.textLight,f=u.placeholder,y=Object(Z.b)().calculateAmountOfLPTokenMinted;d()((function(){var e;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.pair||Object(W.e)(t.fromAmount)||Object(W.e)(t.toAmount)){n.next=5;break}return n.next=3,a.a.awrap(y(t.pair,Object(W.a)(t.fromToken,t.fromAmount),Object(W.a)(t.toToken,t.toAmount)));case 3:e=n.sent,s(null==e?void 0:e.toFixed(8));case 5:case"end":return n.stop()}}),null,null,null,Promise)}),[t.pair,t.fromAmount,t.toAmount]);var p=Object(W.e)(t.fromAmount)||Object(W.e)(t.toAmount),k=t.pair&&t.fromToken?t.pair.priceOf(Object(W.b)(t.fromToken)).toFixed(8):void 0,O=p?f:r?m:b,E=t.fromSymbol+"-"+t.toSymbol;return i.a.createElement(j.a,null,i.a.createElement(x.a,{style:{fontSize:28,marginBottom:z.f.normal,color:O}},p?"N/A":r?r+" "+E:"Fetching\u2026"),i.a.createElement(oe,{state:t,price:k,disabled:!t.fromSymbol||!t.toSymbol}),i.a.createElement(ae,{state:t}))},oe=function(e){var t=e.state,n=e.price,o=e.disabled;return i.a.createElement(v.a,{label:"Price",text:n,suffix:t.toSymbol+" = 1 "+t.fromSymbol,disabled:o})},ae=function(e){var t=e.state,n=Object(c.useState)({}),o=l()(n,2),a=o[0],r=o[1];d()((function(){return r({})}),[t.fromSymbol,t.toSymbol,t.fromAmount]);var s="ETH"!==t.fromSymbol&&!t.fromTokenAllowed,m="ETH"!==t.toSymbol&&!t.toTokenAllowed,f=s||m||Object(W.e)(t.fromAmount)||Object(W.e)(t.toAmount);return i.a.createElement(u.a,{style:{marginTop:z.f.normal}},!t.fromToken||!t.toToken||t.loading||Object(W.e)(t.fromAmount)||Object(W.e)(t.toAmount)?i.a.createElement(re,{state:t,onError:r,disabled:!0}):t.loading||!t.pair?i.a.createElement(E.a,null):Object(W.f)(t.fromAmount,t.fromToken.decimals).gt(t.fromToken.balance)?i.a.createElement(T.a,{symbol:t.fromSymbol}):Object(W.f)(t.toAmount,t.toToken.decimals).gt(t.toToken.balance)?i.a.createElement(T.a,{symbol:t.toSymbol}):"ETH"===t.fromSymbol&&"WETH"===t.toSymbol||"WETH"===t.fromSymbol&&"ETH"===t.toSymbol?i.a.createElement(C.a,{state:t}):i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{token:t.fromToken,spender:L.e,onSuccess:function(){return t.setFromTokenAllowed(!0)},onError:r,hidden:!s}),i.a.createElement(b.a,{token:t.toToken,spender:L.e,onSuccess:function(){return t.setToTokenAllowed(!0)},onError:r,hidden:!m}),i.a.createElement(re,{state:t,onError:r,disabled:f})),a.message&&4001!==a.code&&i.a.createElement(O.a,{error:a}))},re=function(e){var t=e.state,n=e.onError,o=e.disabled,r=Object(G.a)("/liquidity/remove","RemoveLiquidity"),l=Object(c.useCallback)((function(){return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n({}),e.prev=1,e.next=4,a.a.awrap(t.onAdd());case 4:r(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(e.t0);case 10:case"end":return e.stop()}}),null,null,[[1,7]],Promise)}),[t.onAdd,n]);return i.a.createElement(y.a,{title:t.fromSymbol&&t.toSymbol?"Supply "+t.fromSymbol+"-"+t.toSymbol:"Supply",disabled:o,loading:t.adding,onPress:l})};t.default=function(){return i.a.createElement(K.a,null,i.a.createElement(H.a,null),i.a.createElement(p.a,null,i.a.createElement(k.a,null,i.a.createElement(A.a,{text:"Add Liquidity"}),i.a.createElement(x.a,{light:!0},"Add liquidity to a pool and get LP tokens of the pair."),i.a.createElement(Q,null),"web"===s.a.OS&&i.a.createElement(D.a,null))))}}}]);
//# sourceMappingURL=9.5a34d4ad.chunk.js.map