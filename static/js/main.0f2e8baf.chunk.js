(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(e,t,n){e.exports=n(350)},202:function(e,t,n){},204:function(e,t,n){},206:function(e,t,n){},350:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(15),i=n.n(r),s=(n(202),n(48)),c=n(53),u=n(50),l=n(51),p=n(54),d=n(52),h=n(55),f=(n(204),n(49)),m=(n(206),n(56)),y=n(33),D=n.n(y),v=n(26),C=n.n(v),k=n(21),b=n.n(k),w=n(43),T=n.n(w),E=n(44),q=n.n(E),O=n(47),j=n.n(O),I=n(45),g=n.n(I),x=n(46),S=n.n(x),B=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).deleteSelf=function(){n.props.onComponentDelete(n.props.selfIndex)},n.checkValidation=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value),function(){return n.props.onComponentChange(n.state,n.props.selfIndex)})},n.validate=function(e){return e.every(function(e){return e.length>0})},n.addComponent=function(){n.setState({childrensData:[].concat(Object(c.a)(n.state.childrensData),[{key:Date.now()+Math.random()}])},function(){return n.props.onComponentChange(n.state,n.props.selfIndex)})},n.deleteComponent=function(e){var t=n.state.childrensData.filter(function(t){return t.key!==e});n.setState({childrensData:t},function(){return n.props.onComponentChange(n.state,n.props.selfIndex)})},n.saveChildData=function(e,t){var a=n.state.childrensData.filter(function(e){return e.key===t})[0],o=n.state.childrensData.indexOf(a),r={question:e.question,inputType:e.inputType,answer:e.answer,condition:e.condition,childrensData:e.childrensData};n.setState(function(e){return{childrensData:e.childrensData.map(function(e,t){return o===t?Object(s.a)({},a,r):e})}},function(){return n.props.onComponentChange(n.state,n.props.selfIndex)})},n.state={childrensData:void 0!==e.childrensData?e.childrensData:[],question:void 0!==e.question?e.question:"",inputType:void 0!==e.inputType?e.inputType:"",answer:void 0!==e.answer?e.answer:"",condition:void 0!==e.condition?e.condition:""},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,n=void 0===this.props.parentInputType?[this.state.question,this.state.inputType]:[this.state.question,this.state.inputType,this.state.answer,this.state.condition],a=this.state.childrensData.map(function(n){return o.a.createElement(t,{key:n.key,selfIndex:n.key,parentInputType:e.state.inputType,onComponentDelete:e.deleteComponent,onComponentChange:e.saveChildData,question:n.question,inputType:n.inputType,childrensData:n.childrensData,answer:n.answer,condition:n.condition}," ")});return o.a.createElement(T.a,null,o.a.createElement(q.a,null,this.props.parentInputType?o.a.createElement(C.a,{label:"Condition",value:this.state.condition,name:"condition",onClick:this.checkValidation,required:!0},"Number"===this.props.parentInputType?["Equals","Greather than","Less than"].map(function(e,t){return o.a.createElement(m.a,{value:e,key:t},e)}):["Equals"].map(function(e,t){return o.a.createElement(m.a,{value:e,key:t},e)})):null,this.props.parentInputType?"Yes/No"!==this.props.parentInputType?o.a.createElement(D.a,{label:"Answer",type:"Text"===this.props.parentInputType?"text":"number",value:this.state.answer,name:"answer",onChange:this.checkValidation,required:!0}):o.a.createElement(g.a,{label:"Answer",name:"answer",value:this.state.answer,onChange:this.checkValidation},["Yes","No"].map(function(e,t){return o.a.createElement(S.a,{value:e,key:t,control:o.a.createElement(j.a,null),label:e})})):null,o.a.createElement(D.a,{label:"Question",type:"text",value:this.state.question,name:"question",onChange:this.checkValidation,required:!0}),o.a.createElement(C.a,{label:"InputType",value:this.state.inputType,name:"inputType",onClick:this.checkValidation,required:!0},["Text","Number","Yes/No"].map(function(e,t){return o.a.createElement(m.a,{value:e,key:t},e)})),o.a.createElement(b.a,{variant:"contained",color:"primary",disabled:!this.validate(n),onClick:this.addComponent},"Add SubInput"),o.a.createElement(b.a,{variant:"contained",color:"secondary",onClick:this.deleteSelf},"Remove"),a))}}]),t}(a.Component),V=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).openDataBase=function(){return new Promise(function(e,t){var n=window.indexedDB.open("database",1);n.onupgradeneeded=function(){n.result.createObjectStore("state",{keyPath:"id"})},n.onsuccess=function(){return e(n.result)},n.onerror=function(){return t(n.error)},n.onblocked=function(){alert("Blocked")}})},n.loadData=function(e){return new Promise(function(t,n){var a=e.transaction("state","readonly").objectStore("state").get(1);a.onsuccess=function(){return t(a.result)},a.onerror=function(){return n(a.error)}})},n.addOrUpdateData=function(e,t){return new Promise(function(n,a){var o=e.transaction("state","readwrite").objectStore("state").put({id:1,data:t});o.onsuccess=function(){return n(o.result)},o.onerror=function(){return a(o.error)}})},n.addComponent=function(){n.setState({childrensData:[].concat(Object(c.a)(n.state.childrensData),[{key:Date.now()+Math.random()}])})},n.deleteComponent=function(e){n.setState({childrensData:n.state.childrensData.filter(function(t){return t.key!==e})})},n.generateComponents=function(e){n.setState({childrensData:e.data})},n.saveChildData=function(e,t){var a=n.state.childrensData.filter(function(e){return e.key===t})[0],o=n.state.childrensData.indexOf(a),r={question:e.question,inputType:e.inputType,answer:e.answer,condition:e.condition,childrensData:e.childrensData};n.setState(function(e){return{childrensData:e.childrensData.map(function(e,t){return o===t?Object(s.a)({},a,r):e})}})},n.state={childrensData:[]},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e,t=this;this.openDataBase().then(function(t){e=t}).then(function(){t.loadData(e).then(function(e){t.generateComponents(e)})})}},{key:"componentDidMount",value:function(){var e,t=this,n=[];window.onbeforeunload=function(){t.state.childrensData.forEach(function(e){n.push(e)}),t.openDataBase().then(function(t){e=t}).then(function(){t.addOrUpdateData(e,n)})}}},{key:"render",value:function(){var e=this,t=this.state.childrensData.map(function(t){return o.a.createElement(B,{key:t.key,selfIndex:t.key,onComponentDelete:e.deleteComponent,onComponentChange:e.saveChildData,question:t.question,inputType:t.inputType,childrensData:t.childrensData,answer:t.answer}," ")});return o.a.createElement("div",null,t,o.a.createElement(b.a,{variant:"contained",color:"primary",onClick:this.addComponent},"Add Input"))}}]),t}(a.Component);i.a.render(o.a.createElement(V,null),document.getElementById("root"))}},[[197,2,1]]]);
//# sourceMappingURL=main.0f2e8baf.chunk.js.map