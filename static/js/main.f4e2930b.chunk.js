(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={list:"ContactList_list__MDIqb",item:"ContactList_item__HzoFn",item_text:"ContactList_item_text__3Xjy2",item_button:"ContactList_item_button__M4jel"}},21:function(e,t,n){e.exports={filter_label:"Filter_filter_label__2__--",filter_input:"Filter_filter_input__22ubG"}},37:function(e,t,n){},38:function(e,t,n){},6:function(e,t,n){e.exports={center:"Loader_center__2-RUX",wave:"Loader_wave__2xwvc"}},65:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),i=n.n(r),o=(n(37),n(38),n(22)),s=n(8),u=n.n(s),l=n(1);function b(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),b=Object(o.a)(s,2),j=b[0],d=b[1],f=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":d(a);break;default:return}};return Object(l.jsxs)("form",{className:u.a.form_container,onSubmit:function(e){e.preventDefault();var n=e.currentTarget.name.value,a=e.currentTarget.number.value;t(n,a),i(""),d("")},children:[Object(l.jsxs)("label",{className:u.a.form_label,children:["Name",Object(l.jsx)("input",{className:u.a.form_input,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:f,required:!0})]}),Object(l.jsxs)("label",{className:u.a.form_label,children:["Number",Object(l.jsx)("input",{className:u.a.form_input,type:"tel",name:"number",value:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:f,required:!0})]}),Object(l.jsx)("button",{className:u.a.form_button,type:"submit",children:"Add contact"})]})}var j=n(12),d=n.n(j),f=n(7),m=n(9),O=n.n(m),_=n(18),p=n(13),v=n.n(p),x=n(4);v.a.defaults.baseURL="https://61c230289dbcca0017c823b2.mockapi.io/";var h=Object(x.c)("contacts/fetchContacts",Object(_.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("contacts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),g=Object(x.c)("contacts/addContact",function(){var e=Object(_.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:t.name,phone:t.phone},e.next=3,v.a.post("contacts",n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=Object(x.c)("contacts/delContact",function(){var e=Object(_.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("contacts/".concat(t));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var w=function(e){var t=e.items,n=Object(f.b)(),a=t.map((function(e){var t=e.id,a=e.name,c=e.phone;return Object(l.jsx)("li",{className:d.a.item,children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{className:d.a.item_text,children:[a,": ",c]}),Object(l.jsx)("button",{className:d.a.item_button,id:t,type:"button",onClick:function(){return n(N(t))},children:"Delete"})]})},t)}));return Object(l.jsx)("ul",{className:d.a.list,children:a})},C=n(21),k=n.n(C);var y=function(e){var t=e.value,n=e.onFilterChange;return Object(l.jsxs)("label",{className:k.a.filter_label,children:["Find contacts by name:",Object(l.jsx)("input",{className:k.a.filter_input,type:"text",name:"filter",value:t,onChange:n})]})},F=n.p+"static/media/icon.cb73099c.png",L={contactsFilter:Object(x.b)("contacts/filter")},A=n(6),z=n.n(A);function S(){return Object(l.jsxs)("div",{className:z.a.center,children:[Object(l.jsx)("div",{className:z.a.wave}),Object(l.jsx)("div",{className:z.a.wave}),Object(l.jsx)("div",{className:z.a.wave}),Object(l.jsx)("div",{className:z.a.wave}),Object(l.jsx)("div",{className:z.a.wave}),Object(l.jsx)("div",{className:z.a.wave}),Object(l.jsx)("div",{className:z.a.wave}),Object(l.jsx)("div",{className:z.a.wave}),Object(l.jsx)("div",{className:z.a.wave}),Object(l.jsx)("div",{className:z.a.wave})]})}function q(){var e=Object(f.c)((function(e){return function(e){return e.contacts.items}(e)})),t=Object(f.c)((function(e){return function(e){return e.contacts.filter}(e)})),n=Object(f.c)((function(e){return function(e){return e.contacts.isLoading}(e)})),c=Object(f.b)();Object(a.useEffect)((function(){c(h())}),[]);return Object(l.jsxs)("div",{className:"main_container",children:[Object(l.jsxs)("div",{className:"main_title_container",children:[Object(l.jsx)("img",{className:"main_title_img",src:F,alt:"phonebook-icon"}),Object(l.jsx)("h1",{className:"main_title",children:"Phonebook"})]}),Object(l.jsx)(b,{onSubmit:function(t,n){if(!e.find((function(e){return e.name===t})))return c(g({name:t,number:n}));alert("Inputed ".concat(t," is already in the contacts"))}}),Object(l.jsx)("div",{className:"main_loader-container",children:n&&Object(l.jsx)(S,{})}),Object(l.jsx)("h2",{className:"title",children:"Contacts"}),Object(l.jsx)(y,{value:t,onFilterChange:function(e){return c(L.contactsFilter(e.currentTarget.value))}}),Object(l.jsx)(w,{items:e.filter((function(e){return e.name.toLowerCase().includes(t)}))})]})}var I,M,T,Z=n(3),D=n(2),E=n(32),J=Object(x.d)([],(I={},Object(D.a)(I,h.fulfilled,(function(e,t){return t.payload})),Object(D.a)(I,N.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Object(D.a)(I,g.fulfilled,(function(e,t){return[t.payload].concat(Object(E.a)(e))})),I)),B=Object(x.d)("",Object(D.a)({},L.contactsFilter,(function(e,t){return t.payload}))),P=Object(x.d)(null,(M={},Object(D.a)(M,h.rejected,(function(e,t){var n=t.error;return console.log(n)})),Object(D.a)(M,h.pending,null),Object(D.a)(M,g.rejected,(function(e,t){var n=t.error;return console.log(n)})),Object(D.a)(M,g.pending,null),Object(D.a)(M,N.rejected,(function(e,t){var n=t.error;return console.log(n)})),Object(D.a)(M,N.pending,null),M)),R=Object(x.d)(!1,(T={},Object(D.a)(T,h.pending,(function(){return!0})),Object(D.a)(T,h.fulfilled,(function(){return!1})),Object(D.a)(T,h.rejected,(function(){return!1})),Object(D.a)(T,g.pending,(function(){return!0})),Object(D.a)(T,g.fulfilled,(function(){return!1})),Object(D.a)(T,g.rejected,(function(){return!1})),Object(D.a)(T,N.pending,(function(){return!0})),Object(D.a)(T,N.fulfilled,(function(){return!1})),Object(D.a)(T,N.rejected,(function(){return!1})),T)),U=Object(Z.b)({items:J,filter:B,error:P,isLoading:R}),X=n(10),G=Object(Z.b)({contacts:U}),H=Object(x.a)({reducer:G,middleware:Object(x.e)({serializableCheck:{ignoredActions:[X.a,X.f,X.b,X.c,X.d,X.e]}})});i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f.a,{store:H,children:Object(l.jsx)(q,{})})}),document.getElementById("root"))},8:function(e,t,n){e.exports={form_container:"ContactForm_form_container__3CIq6",form_input:"ContactForm_form_input__2kdlo",form_label:"ContactForm_form_label__13vZ4",form_button:"ContactForm_form_button__1Acs5",animate_grow:"ContactForm_animate_grow__E-bdP"}}},[[65,1,2]]]);
//# sourceMappingURL=main.f4e2930b.chunk.js.map