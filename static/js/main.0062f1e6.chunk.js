(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(31)},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),l=n.n(i),s=n(1),c=n(2),r=n(4),d=n(3),u=n(5),p=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(r.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={error:void 0},n.handleAddOption=function(e){e.preventDefault();var t=e.target.elements.option.value.trim(),a=n.props.handleAddOption(t);n.setState(function(){return{error:a}}),a||(e.target.elements.option.value="")},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,this.state.error&&o.a.createElement("p",{className:"add-option-error"},this.state.error),o.a.createElement("form",{className:"add-option",onSubmit:this.handleAddOption},o.a.createElement("input",{className:"add-option-input",type:"text",name:"option"}),o.a.createElement("button",{className:"button"},"Add Option")))}}]),t}(o.a.Component),m=function(e){return o.a.createElement("div",null,o.a.createElement("button",{className:"big-button",onClick:e.handlePick,disabled:!e.hasOptions},"What should I do?"))},h=function(e){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"header--title"},e.title),e.subtitle&&o.a.createElement("h2",{className:"header--subtitle"},e.subtitle)))};h.defaultProps={title:"Indecision"};var O=h,f=function(e){return o.a.createElement("div",{className:"option"},o.a.createElement("p",{className:"option__text"},e.count,". ",e.optionText),o.a.createElement("button",{className:"button button--link",onClick:function(t){e.handleDeleteOption(e.optionText)}},"remove"))},v=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"widget-header"},o.a.createElement("h3",{className:"widget-header--title"},"Your Options"),o.a.createElement("button",{className:"button button--link",onClick:e.handleDeleteOptions},"Remove All")),0===e.options.length&&o.a.createElement("p",{className:"widget__message"},"Please add an option to get started!"),e.options.map(function(t,n){return o.a.createElement(f,{key:t,optionText:t,count:n+1,handleDeleteOption:e.handleDeleteOption})}))},E=n(12),b=n.n(E),N=function(e){return o.a.createElement(b.a,{isOpen:!!e.selectOption,contentLabel:"Selected Option",onRequestClose:e.handleClearSelectedOption,closeTimeoutMS:200,className:"modal"},o.a.createElement("h3",{className:"modal__title"},"Selected Option"),e.selectOption&&o.a.createElement("p",{className:"modal__body"},e.selectOption),o.a.createElement("button",{className:"button",onClick:e.handleClearSelectedOption},"Okay"))},g=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(r.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={options:[],selectOption:void 0},n.handleDeleteOptions=function(){n.setState(function(){return{options:[]}})},n.handleClearSelectedOption=function(){n.setState(function(){return{selectOption:void 0}})},n.handleDeleteOption=function(e){n.setState(function(t){return{options:t.options.filter(function(t){return e!==t})}})},n.handlePick=function(){var e=Math.floor(Math.random()*n.state.options.length),t=n.state.options[e];n.setState(function(e){return{selectOption:t}})},n.handleAddOption=function(e){return e?n.state.options.indexOf(e)>-1?"This option already exists":void n.setState(function(t){return{options:t.options.concat(e)}}):"Enter valid value to add item"},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){try{var e=localStorage.getItem("options"),t=JSON.parse(e);t&&this.setState(function(){return{options:t}})}catch(n){}}},{key:"componentDidUpdate",value:function(e,t){if(t.options.length!==this.state.options.length){var n=JSON.stringify(this.state.options);localStorage.setItem("options",n)}}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount")}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(O,{subtitle:"Put your life in the hands of a computer"}),o.a.createElement("div",{className:"container"},o.a.createElement(m,{hasOptions:this.state.options.length>0,handlePick:this.handlePick}),o.a.createElement("div",{className:"widget"},o.a.createElement(v,{options:this.state.options,handleDeleteOptions:this.handleDeleteOptions,handleDeleteOption:this.handleDeleteOption}),o.a.createElement(p,{handleAddOption:this.handleAddOption}))),o.a.createElement(N,{selectOption:this.state.selectOption,handleClearSelectedOption:this.handleClearSelectedOption}))}}]),t}(o.a.Component);n(29),n(30);l.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.0062f1e6.chunk.js.map