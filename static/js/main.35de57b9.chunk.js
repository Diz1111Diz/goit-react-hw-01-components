(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,a,t){e.exports={Profile:"Profile_Profile__1mM5C",Description:"Profile_Description__1siX1",Stats:"Profile_Stats__1OYq1",Avatar:"Profile_Avatar__1cDN6"}},,,,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},,,,function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,function(e,a,t){e.exports=t(24)},,,,,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),i=t.n(c),l=(t(21),t(4)),s=t.n(l),u=function(e){var a=e.name,t=e.tag,n=e.location,c=e.avatar,i=e.stats;return r.a.createElement("div",{className:s.a.Profile},r.a.createElement("div",{className:s.a.Description},r.a.createElement("img",{src:c,alt:"user avatar",className:s.a.Avatar}),r.a.createElement("p",{className:"name"},a),r.a.createElement("p",{className:"tag"},"@",t),r.a.createElement("p",{className:"location"},n)),r.a.createElement("ul",{className:s.a.Stats},r.a.createElement("li",null,r.a.createElement("span",{className:"label"},"Followers"),r.a.createElement("span",{className:"quantity"},i.followers)),r.a.createElement("li",null,r.a.createElement("span",{className:"label"},"Views"),r.a.createElement("span",{className:"quantity"},i.views)),r.a.createElement("li",null,r.a.createElement("span",{className:"label"},"Likes"),r.a.createElement("span",{className:"quantity"},i.likes))))};u.defaultProps={followers:"-",views:"-",likes:"-"};var o=u,m=t(3),f=function(e){var a=e.title,t=e.stats;return r.a.createElement("section",{className:"statistics"},a&&r.a.createElement("h2",{className:"title"},a),r.a.createElement("ul",{className:"stat-list"},t.map((function(e){return r.a.createElement("li",{className:"item",key:e.id},r.a.createElement("span",{className:"label"},e.label),r.a.createElement("span",{className:"percentage"},e.percentage,"%"))}))))};f.defaultProps={title:""};var d=f,p=t(9),b=t(10),y=t(1),v=t(2);function E(){var e=Object(y.a)(["\n  display: flex;\n  list-style: none;\n"]);return E=function(){return e},e}var w=v.a.ul(E());function g(){var e=Object(y.a)([""]);return g=function(){return e},e}function O(){var e=Object(y.a)([""]);return O=function(){return e},e}function N(){var e=Object(y.a)(["\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  background: ",";\n  display: block;\n"]);return N=function(){return e},e}function h(){var e=Object(y.a)([""]);return h=function(){return e},e}var j=v.a.li(h()),P=v.a.span(N(),(function(e){return e.isOnline?"#00ff00":"#ff0000"})),k=v.a.img(O()),_=v.a.p(g()),x=function(e){var a=e.id,t=e.isOnline,n=e.name,c=e.avatar;return r.a.createElement(j,{key:a},r.a.createElement(P,{isOnline:t}),r.a.createElement(k,{src:c}),r.a.createElement(_,null,n))},U=function(e){var a=e.friends;return r.a.createElement(w,null,a.map((function(e){return r.a.createElement(x,e)})))},S=t(14);function D(){var e=Object(y.a)([""]);return D=function(){return e},e}function J(){var e=Object(y.a)([""]);return J=function(){return e},e}function A(){var e=Object(y.a)([""]);return A=function(){return e},e}function C(){var e=Object(y.a)([""]);return C=function(){return e},e}function M(){var e=Object(y.a)([""]);return M=function(){return e},e}function z(){var e=Object(y.a)([""]);return z=function(){return e},e}var G=v.a.table(z()),L=v.a.thead(M()),R=v.a.tr(C()),Y=v.a.th(A()),q=v.a.tbody(J()),T=v.a.td(D()),F=function(e){var a=e.items;return r.a.createElement(G,null,r.a.createElement(L,null,r.a.createElement(R,null,r.a.createElement(Y,null,"TYPE"),r.a.createElement(Y,null,"AMOUNT"),r.a.createElement(Y,null,"CURRENCY"))),r.a.createElement(q,null,a.map((function(e){var a=e.id,t=e.type,n=e.amount,c=e.currency;return r.a.createElement(R,{key:a},r.a.createElement(T,null,t),r.a.createElement(T,null,n),r.a.createElement(T,null,c))}))))};F.defaultProps={};var K=F;var W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{name:m.name,tag:m.tag,location:m.location,avatar:m.avatar,stats:m.stats}),r.a.createElement(d,{stats:p}),r.a.createElement(U,{friends:b}),r.a.createElement(K,{items:S}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.35de57b9.chunk.js.map