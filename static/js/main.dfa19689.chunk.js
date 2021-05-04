(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(t,e,n){},2:function(t,e,n){t.exports={formContainer:"ContactForm_formContainer__3vQc7",form:"ContactForm_form__35LY4",input:"ContactForm_input__26PFe",title:"ContactForm_title__1XcCP",button:"ContactForm_button__3nWjA"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(11),r=n.n(i),s=(n(18),n(13)),o=n(3),u=n(4),l=n(6),m=n(5),d=n(21),b=n(12),h=n(2),j=n.n(h),f=n(0),p=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.inputNameId=Object(d.a)(),t.inputNumberId=Object(d.a)(),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;a&&c&&(t.props.onSubmit(a,c),t.resetInput())},t.resetInput=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsx)("div",{className:j.a.formContainer,children:Object(f.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsx)("h3",{className:j.a.title,children:"Name"}),Object(f.jsx)("label",{htmlFor:this.inputNameId,children:Object(f.jsx)("input",{className:j.a.input,id:this.inputNameId,type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange})}),Object(f.jsx)("h3",{className:j.a.title,children:"Number"}),Object(f.jsx)("label",{htmlFor:this.inputNumberId,children:Object(f.jsx)("input",{className:j.a.input,id:this.inputNumberId,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})}),Object(f.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),C=n(7),O=n.n(C),v=function(t){var e=t.\u0441ontacts,n=t.onDelete;return Object(f.jsx)("ul",{className:O.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{className:O.a.item,children:[a,": ",c,Object(f.jsx)("button",{className:O.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},x=n(8),_=n.n(x),N=Object(d.a)(),g=function(t){var e=t.name,n=t.onChange;return Object(f.jsxs)("div",{className:_.a.container,children:[Object(f.jsx)("p",{className:_.a.text,children:"Find Contacts by name:"}),Object(f.jsx)("label",{htmlFor:N,children:Object(f.jsx)("input",{className:_.a.input,id:N,type:"text",value:e,onChange:n})})]})},S=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).defaultNames=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],t.state={contacts:t.defaultNames,filter:""},t.addContact=function(e,n){var a={id:Object(d.a)(),name:e,number:n};t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))?alert("".concat(e.toUpperCase()," is allready in contacts")):t.setContacts(a)},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.setContacts=function(e){t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[e])}}))},t.filterContacts=function(e){var n=e.target;t.setState({filter:n.value})},t.visibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;if(!localStorage.getItem("contacts"))return this.setState((function(){return{contacts:t.defaultNames}}));this.setState((function(){return{contacts:JSON.parse(localStorage.getItem("contacts"))}}))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.visibleContacts();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:"main-title",children:"Phonebook"}),Object(f.jsx)(p,{onSubmit:this.addContact}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{className:"subtitle",children:"Contacts"}),Object(f.jsx)(g,{name:this.state.filter,onChange:this.filterContacts}),Object(f.jsx)(v,{"\u0441ontacts":t,onDelete:this.deleteContact})]})]})}}]),n}(a.Component);r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={list:"ContactsList_list__luN5v",item:"ContactsList_item__1T9Va",button:"ContactsList_button__1eCL8"}},8:function(t,e,n){t.exports={container:"Filter_container__1e2oh",text:"Filter_text__Qc3gh",input:"Filter_input__2ON08"}}},[[20,1,2]]]);
//# sourceMappingURL=main.dfa19689.chunk.js.map