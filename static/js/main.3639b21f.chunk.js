(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{204:function(e,t,n){e.exports=n(359)},359:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(16),s=n.n(r),c=(n(38),n(62)),i=n(23),l=n(24),u=n(26),m=n(25),p=n(27),d=n(18),h=n(44),f=n.n(h),v=n(29),C=n.n(v),b=n(59),y=n.n(b),g=n(60),E=n.n(g),k=function(e){return e.every(function(e){return e.length>0})},w=n(133),N=function(e,t,n){var a=e.filter(function(e){return e.key===n})[0],o=e.indexOf(a);return{result:e.map(function(e,n){return o===n?Object(w.a)({},a,{question:t.question,inputType:t.inputType,answer:t.answer,condition:t.condition,childrensData:t.childrensData}):e})}},D=n(45),j=n(43),O=n.n(j),T=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).checkValidation=function(e){e.target.value&&e.target.name&&n.setState(Object(d.a)({},e.target.name,e.target.value),function(){return n.props.onComponentChange(n.state)})},n.state=Object(d.a)({},e.name,e.value),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(O.a,{className:"input",value:this.state[this.props.name],onClick:this.checkValidation,name:this.props.name},this.props.data.map(function(e,t){return o.a.createElement(D.b,{className:"selectItem",value:e,key:t},e)}))}}]),t}(a.Component),I=n(55),S=n.n(I),q=n(36),x=n.n(q),M=n(56),B=n.n(M),V=n(57),A=n.n(V),P=n(58),Y=n.n(P),J=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).checkValidation=function(e){e.target.value&&e.target.name&&(console.log(e.target.checked),console.log(e.target),e.target.checked&&(console.log(e.target),console.log(document.getElementsByClassName("radio")[0].childNodes),document.getElementsByClassName("radio")[0].className+=" checked"),n.setState(Object(d.a)({},e.target.name,e.target.value),function(){},function(){return n.props.onComponentChange(n.state)}))},n.setControl=function(e){switch(e){case"radio":return o.a.createElement(S.a,{className:"input radio",label:"Answer",value:n.state[n.props.name],onChange:n.checkValidation,name:n.props.name},n.props.data.map(function(e,t){return o.a.createElement(x.a,{value:e,key:t,control:o.a.createElement(B.a,{color:"primary"}),label:e})}));case"checkbox":return o.a.createElement(D.a,{className:"input checkbox",label:"Answer",value:n.state[n.props.name],onChange:n.checkValidation,name:n.props.name},n.props.data.map(function(e,t){return o.a.createElement(x.a,{value:e,key:t,control:o.a.createElement(A.a,{color:"primary"}),label:e})}));case"switch":return console.log(n.state),o.a.createElement(D.a,{className:"input switch",value:n.state[n.props.name],onChange:function(){return n.props.onComponentChange()},name:n.props.name},o.a.createElement(x.a,{control:o.a.createElement(Y.a,{color:"primary"}),label:"Night Mode"}))}},n.state=Object(d.a)({},e.name,e.value),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,this.setControl(this.props.control))}}]),t}(a.Component),G=n(30),L=n.n(G),Q=n(61),R=n.n(Q),W=n(37),z=n.n(W),F=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).deleteSelf=function(){n.props.onComponentDelete(n.props.selfIndex)},n.checkValidation=function(e){n.setState(Object(d.a)({},e.target.name,e.target.value),function(){return n.props.onComponentChange(n.state,n.props.selfIndex)})},n.addComponent=function(){n.setState({childrensData:[].concat(Object(c.a)(n.state.childrensData),[{key:Date.now()+Math.random()}])},function(){return n.props.onComponentChange(n.state,n.props.selfIndex)})},n.deleteComponent=function(e){var t=n.state.childrensData.filter(function(t){return t.key!==e});n.setState({childrensData:t},function(){return n.props.onComponentChange(n.state,n.props.selfIndex)})},n.saveChildData=function(e,t){n.setState({childrensData:Object.values(N(n.state.childrensData,e,t))[0]},function(){return n.props.onComponentChange(n.state,n.props.selfIndex)})},n.changeInputType=function(e){n.setState(Object(d.a)({},Object.keys(e)[0],Object.values(e)[0]),function(){return n.props.onComponentChange(n.state,n.props.selfIndex)})},n.state={childrensData:void 0!==e.childrensData?Object.values(e.childrensData):[],question:void 0!==e.question?e.question:"",inputType:void 0!==e.inputType?e.inputType:"",answer:void 0!==e.answer?e.answer:"",condition:void 0!==e.condition?e.condition:"",mode:"night"},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,n=void 0===this.props.parentInputType?[this.state.question,this.state.inputType]:[this.state.question,this.state.inputType,this.state.answer,this.state.condition],a=this.state.childrensData.map(function(n){return o.a.createElement(t,{key:n.key,selfIndex:n.key,parentInputType:e.state.inputType,onComponentDelete:e.deleteComponent,onComponentChange:e.saveChildData,question:n.question,inputType:n.inputType,childrensData:n.childrensData,answer:n.answer,condition:n.condition}," ")});return o.a.createElement(y.a,{className:"card"},o.a.createElement(E.a,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12 inputContainer"},this.props.parentInputType?o.a.createElement(T,{id:Date.now()+Math.random(),name:"condition",value:this.state.condition,onComponentChange:this.changeInputType,data:"Number"===this.props.parentInputType?["Equals","Greather than","Less than"]:["Equals"]}):null),o.a.createElement("div",{className:"col-sm-12 inputContainer"},this.props.parentInputType?"Yes/No"!==this.props.parentInputType?o.a.createElement(f.a,{className:"input",label:"Answer",type:"Text"===this.props.parentInputType?"text":"number",value:this.state.answer,name:"answer",onChange:this.checkValidation,required:!0}):o.a.createElement(J,{id:Date.now()+Math.random(),name:"answer",value:this.state.answer,onComponentChange:this.changeInputType,data:["Yes","No"],control:"radio"}):null),o.a.createElement("div",{className:"col-sm-12 inputContainer"},o.a.createElement(f.a,{className:"input",label:"Question",type:"text",value:this.state.question,name:"question",onChange:this.checkValidation,required:!0})),o.a.createElement("div",{className:"col-sm-12 inputContainer"},o.a.createElement(T,{id:Date.now()+Math.random(),name:"inputType",value:this.state.inputType,onComponentChange:this.changeInputType,data:["Text","Number","Yes/No"]})),o.a.createElement("div",{className:"col-sm-12 buttonContainer"},o.a.createElement(C.a,{className:"button",variant:"contained",color:"primary",disabled:!k(n),onClick:this.addComponent},o.a.createElement(z.a,null)," Add SubInput"),o.a.createElement(L.a,{className:"fabButton",color:"primary",disabled:!k(n),onClick:this.addComponent},o.a.createElement(z.a,null))),o.a.createElement("div",{className:"col-sm-12 buttonContainer"},o.a.createElement(C.a,{className:"button",variant:"contained",color:"secondary",onClick:this.deleteSelf},o.a.createElement(R.a,null)," Remove"),o.a.createElement(L.a,{className:"fabButton",color:"secondary",onClick:this.deleteSelf},o.a.createElement(R.a,null)))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},a)))))}}]),t}(a.Component),H=function(){return new Promise(function(e,t){var n=window.indexedDB.open("database",1);n.onupgradeneeded=function(){n.result.createObjectStore("state",{keyPath:"id"})},n.onsuccess=function(){return e(n.result)},n.onerror=function(){return t(n.error)},n.onblocked=function(){alert("Blocked")}})},K=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).addComponent=function(){n.setState({childrensData:[].concat(Object(c.a)(n.state.childrensData),[{key:Date.now()+Math.random()}])})},n.deleteComponent=function(e){n.setState({childrensData:n.state.childrensData.filter(function(t){return t.key!==e})})},n.generateComponents=function(e){n.setState({childrensData:Object.values(e.data)})},n.saveChildData=function(e,t){n.setState({childrensData:Object.values(N(n.state.childrensData,e,t))[0]})},n.changeMode=function(){!1===n.state.nightMode?n.setState({nightMode:!0},function(){return document.getElementsByTagName("body")[0].className="night"}):n.setState({nightMode:!1},function(){return document.getElementsByTagName("body")[0].className=""})},n.state={childrensData:[],nightMode:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e,t=this;H().then(function(t){e=t}).then(function(){var n;(n=e,new Promise(function(e,t){var a=n.transaction("state","readonly").objectStore("state").get(1);a.onsuccess=function(){return e(a.result)},a.onerror=function(){return t(a.error)}})).then(function(e){t.generateComponents(e)})})}},{key:"componentDidMount",value:function(){var e,t=this,n=[];window.onbeforeunload=function(){t.state.childrensData.forEach(function(e){n.push(e)}),H().then(function(t){e=t}).then(function(){var t,a;t=e,a=n,new Promise(function(e,n){var o=t.transaction("state","readwrite").objectStore("state").put({id:1,data:a});o.onsuccess=function(){return e(o.result)},o.onerror=function(){return n(o.error)}})})}}},{key:"render",value:function(){var e=this,t=this.state.childrensData.map(function(t){return o.a.createElement(F,{key:t.key,selfIndex:t.key,onComponentDelete:e.deleteComponent,onComponentChange:e.saveChildData,question:t.question,inputType:t.inputType,childrensData:t.childrensData,answer:t.answer}," ")});return o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},t))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-4 offset-sm-4 buttonContainer"},o.a.createElement(C.a,{className:"button",variant:"contained",color:"primary",onClick:this.addComponent},o.a.createElement(z.a,null)," Add Input"),o.a.createElement(L.a,{className:"fabButton",color:"primary",onClick:this.addComponent},o.a.createElement(z.a,null)),o.a.createElement(J,{id:Date.now()+Math.random(),name:"nightMode",onComponentChange:this.changeMode,value:this.state.nightMode,data:["true"],control:"switch"}))))}}]),t}(a.Component);n(357);s.a.render(o.a.createElement(K,null),document.getElementById("root"))},38:function(e,t,n){}},[[204,2,1]]]);
//# sourceMappingURL=main.3639b21f.chunk.js.map