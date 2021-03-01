(this["webpackJsonpturn-tracker"]=this["webpackJsonpturn-tracker"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(4),a=n.n(s),u=(n(9),n(2)),i=(n(10),n(11),n(0)),o=function(e){var t=e.setTurnNumber,n=e.turnNumber,r=e.reset,c=e.setModal,s=e.modal;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"turnManipulatorButtonsContainer",children:[Object(i.jsx)("button",{className:"basicButton turnManipulatorButton",onClick:function(){return t(n-1)},children:"<<"}),Object(i.jsx)("button",{className:"jumpTurn"===s?"basicButton turnManipulatorButton pressed":"basicButton turnManipulatorButton",onClick:function(){c("jumpTurn"===s?"off":"jumpTurn")},children:"Jump"}),Object(i.jsx)("button",{className:"basicButton turnManipulatorButton",onClick:function(){return t(n+1)},children:">>"})]}),Object(i.jsx)("div",{className:"resetButtonContainer",children:Object(i.jsx)("button",{className:"reset"===s?"resetButton basicButton pressed":"resetButton basicButton",onClick:r,children:"Reset"})})]})};n(13);function l(e){return JSON.parse(JSON.stringify(e))}function d(e){switch(!0){case e===1/0:return"permanent";case e>0:return"active";case e<=0:return"expired";default:return""}}function j(e,t){var n=e.turnUsed+e.duration-t;switch(e.durationType){case"round":break;case"minute":n=e.turnUsed+10*e.duration-t;break;case"hour":n=e.turnUsed+600*e.duration-t;break;case"day":n=e.turnUsed+14400*e.duration-t;break;case"permanent":return 1/0}return n}var f=function(e){var t,n=e.effect,c=e.turnNumber,s=e.removeEffect,a=e.resetEffectDuration,o=Object(r.useState)(!1),l=Object(u.a)(o,2),f=l[0],b=l[1],m=n.name,O=n.target,p=n.details,h=n.conditions,x=j(n,c),N=(t=x,[Math.floor(t/10),Math.floor(t%10*6)]),v=function(e){return[Math.floor(e/600),Math.floor(e%600/10)]}(x),C=function(e){return[Math.floor(e/14400),Math.floor(e%14400/600)]}(x);var B=function(e){return e===1/0?"\u221e":e<20?e+" rounds":e>=20&&e<600?N[0]+"m "+N[1]+"s":e>=600&&e<14400?v[0]+"h "+v[1]+"m":e>=14400?C[0]+"d "+C[1]+"h":void 0}(x),g=d(x);return Object(i.jsxs)("div",{role:"button",className:f?g+" effectContainer insetContainer":g+" effectContainer",onClick:function(){return b(!f)},children:[Object(i.jsxs)("p",{className:"effectItem",children:[Object(i.jsx)("span",{className:"effectKeys",children:"Name"})," - ",m]}),Object(i.jsxs)("p",{className:"effectItem",children:[Object(i.jsx)("span",{className:"effectKeys",children:"Time Left"})," - ",B]}),f?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"break"}),""!==O?Object(i.jsxs)("p",{className:"effectItem",children:[Object(i.jsx)("span",{className:"effectKeys",children:"Target"})," - ",O]}):null,""!==p?Object(i.jsxs)("p",{className:"effectItem",children:[Object(i.jsx)("span",{className:"effectKeys",children:"Details"})," - ",p]}):null,""!==h?Object(i.jsxs)("p",{className:"effectItem",children:[Object(i.jsx)("span",{className:"effectKeys",children:"Conditions"})," - ",h]}):null,Object(i.jsx)("div",{className:"break"}),Object(i.jsxs)("div",{className:"endResetEffectButtonContainer",children:[Object(i.jsx)("button",{className:"basicButton resetEffectButton",onClick:function(){return a(n)},children:"Reset Duration"}),Object(i.jsx)("button",{className:"basicButton endEffectButton",onClick:function(){return s(n)},children:"End Effect"})]})]}):null]})},b=function(e){var t=e.turnNumber,n=e.effects,r=e.setEffects,c=function(e){var t=l(n),c=t.findIndex((function(t){return t.name===e.name}));t.splice(c,1),r(t)},s=function(e){var c=l(n),s=c.findIndex((function(t){return t.name===e.name}));c[s].turnUsed=t,r(c)},a=n.map((function(e){return Object(i.jsx)(f,{effect:e,removeEffect:c,turnNumber:t,resetEffectDuration:s},e.name)}));return Object(i.jsx)(i.Fragment,{children:a})},m=(n(14),function(e){var t=e.addEffect,n=e.turnNumber,c=e.setToggle,s=Object(r.useState)(!1),a=Object(u.a)(s,2),o=a[0],l=a[1],d=Object(r.useState)(""),j=Object(u.a)(d,2),f=j[0],b=j[1],m=Object(r.useState)(""),O=Object(u.a)(m,2),p=O[0],h=O[1],x=Object(r.useState)(""),N=Object(u.a)(x,2),v=N[0],C=N[1],B=Object(r.useState)(1),g=Object(u.a)(B,2),T=g[0],k=g[1],I=Object(r.useState)("round"),S=Object(u.a)(I,2),E=S[0],y=S[1],w=Object(r.useState)(""),M=Object(u.a)(w,2),F=M[0],A=M[1],K={name:f,target:p,details:v,duration:T,durationType:E,conditions:F,turnUsed:n},D=function(e){y(e),l(!1)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault(),"permanent"===K.durationType&&(K.duration=1/0),t(K),b(""),h(""),C(""),k(1),y("round"),A(""),c(!1)},children:Object(i.jsxs)("div",{className:"formContainer",children:[Object(i.jsxs)("fieldset",{className:"formItem insetContainer",children:[Object(i.jsx)("legend",{className:"formItemTitle",children:"Name"}),Object(i.jsx)("div",{className:"textInputContainer",children:Object(i.jsx)("input",{type:"text",placeholder:"name of effect",className:"textInput",value:f,onChange:function(e){return b(e.target.value)},required:!0})}),Object(i.jsx)("p",{className:"requiredText",children:"* required"})]}),Object(i.jsxs)("fieldset",{className:"formItem insetContainer",children:[Object(i.jsx)("legend",{className:"formItemTitle",children:"Duration"}),Object(i.jsxs)("div",{className:"durationInputContainer",children:[Object(i.jsx)("div",{className:"numberInputContainer",children:Object(i.jsx)("input",{className:"durationNumberInput textInput",type:"number",value:T,onChange:function(e){return k(Number(e.target.value))},required:!0})}),o?null:Object(i.jsx)("div",{role:"button",className:"permanent"===E?"durationTypeSelector basicButton permanent":"durationTypeSelector basicButton",value:""===E?"round":E,onClick:function(){l(!o)},children:"permanent"===E?E:E+"(s)"}),o?Object(i.jsxs)("div",{className:"durationTypeSelectorOptionsContainer",children:[Object(i.jsx)("div",{role:"button",className:"durationTypeSelectorOptions basicButton",value:"round",onClick:function(){return D("round")},children:"round(s)"}),Object(i.jsx)("div",{role:"button",className:"durationTypeSelectorOptions basicButton",value:"minute",onClick:function(){return D("minute")},children:"minute(s)"}),Object(i.jsx)("div",{role:"button",className:"durationTypeSelectorOptions basicButton",value:"hour",onClick:function(){return D("hour")},children:"hour(s)"}),Object(i.jsx)("div",{role:"button",className:"durationTypeSelectorOptions basicButton",value:"day",onClick:function(){return D("day")},children:"day(s)"}),Object(i.jsx)("div",{role:"button",className:"durationTypeSelectorOptions permanent basicButton",value:"permanent",onClick:function(){return D("permanent")},children:"permanent"})]}):null]})," ",Object(i.jsx)("p",{className:"requiredText",children:"* required"})]}),Object(i.jsxs)("fieldset",{className:"formItem insetContainer",children:[Object(i.jsx)("legend",{className:"formItemTitle",children:"Target or Area"}),Object(i.jsx)("div",{className:"textAreaInputContainer",children:Object(i.jsx)("textarea",{rows:"3",cols:"30",className:"textAreaInput",placeholder:"who or what is affected",value:p,onChange:function(e){return h(e.target.value)}})})]}),Object(i.jsxs)("fieldset",{className:"formItem insetContainer",children:[Object(i.jsx)("legend",{className:"formItemTitle",children:"Details"}),Object(i.jsx)("div",{className:"textAreaInputContainer",children:Object(i.jsx)("textarea",{rows:"3",cols:"30",className:"textAreaInput",placeholder:'breif description what effect does. ex.: "+4 armor bonus"',value:v,onChange:function(e){return C(e.target.value)}})})]}),Object(i.jsxs)("fieldset",{className:"formItem insetContainer",children:[Object(i.jsx)("legend",{className:"formItemTitle",children:"Conditions"})," ",Object(i.jsx)("div",{className:"textAreaInputContainer",children:Object(i.jsx)("textarea",{rows:"3",cols:"30",className:"textAreaInput",placeholder:"ex.: must be within 60' of Sabri",value:F,onChange:function(e){return A(e.target.value)}})})]}),Object(i.jsx)("div",{className:"break"}),Object(i.jsx)("div",{className:"addEffectButtonContainer",children:Object(i.jsx)("input",{className:"basicButton addEffectButton",type:"submit"})})]})})})}),O=(n(15),function(e){var t=e.effect,n=e.handleClick,r=d(j(t,e.turnNumber));return Object(i.jsx)("div",{className:"effectButtonContainer",children:Object(i.jsx)("button",{value:t.name,className:r+" effectButton basicButton",onClick:function(e){return n(e)},children:t.name},t.name)})}),p=function(e){var t=e.effects,n=e.setEffectsAndResetRounds,c=e.turnNumber,s=Object(r.useState)(t.filter((function(e){return"permanent"===e.durationType}))),a=Object(u.a)(s,2),o=a[0],d=a[1],j=Object(r.useState)(t.filter((function(e){return"permanent"!==e.durationType}))),f=Object(u.a)(j,2),b=f[0],m=f[1],p=function(e){var t=e.target.value;if(o.some((function(e){return e.name===t}))){var n=o.findIndex((function(e){return e.name===t})),r=o.find((function(e){return e.name===t})),c=l(o),s=l(b);c.splice(n,1),s.push(r),d(c),m(s)}else{var a=b.findIndex((function(e){return e.name===t})),u=b.find((function(e){return e.name===t})),i=l(o),j=l(b);j.splice(a,1),i.push(u),d(i),m(j)}},h=o.map((function(e){return Object(i.jsx)(O,{handleClick:p,turnNumber:c,effect:e},e.name)})),x=b.map((function(e){return Object(i.jsx)(O,{handleClick:p,turnNumber:c,effect:e},e.name)}));return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"keepEffectsContainer",children:[Object(i.jsx)("h4",{className:"keepEffectsHeader",children:"Current Effects"}),Object(i.jsxs)("div",{className:"keepLoseHeaders",children:[Object(i.jsx)("p",{className:"smallHeaders",children:"Keep"}),Object(i.jsx)("p",{className:"smallHeaders",children:"Lose"})]}),Object(i.jsxs)("div",{className:"listOfEffectsContainer",children:[Object(i.jsx)("div",{className:"effectsToKeepContainer insetContainer",children:h}),Object(i.jsx)("div",{className:"effectsToLoseContainer insetContainer",children:x})]}),Object(i.jsx)("div",{className:"confirmKeepersButtonContainer",children:Object(i.jsx)("button",{className:"basicButton confirmKeepersButton",onClick:function(){return n(o)},children:"Confirm Reset"})})]})})},h=function(e){var t=e.setTurnNumber,n=e.turnNumber,c=Object(r.useState)(1),s=Object(u.a)(c,2),a=s[0],o=s[1],l=Object(r.useState)("forward"),d=Object(u.a)(l,2),j=d[0],f=d[1],b=function(e){switch(e){case"forward":t(n+a);break;case"backward":t(n-a);break;case"goTo":t(a);break;default:alert("Something went wrong.")}};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"jumpTurnContentContainer",children:[Object(i.jsxs)("div",{className:"jumpOptionsButtonContainer",children:[Object(i.jsx)("button",{className:"forward"===j?"jumpOptionsButton basicButton pressed":"jumpOptionsButton basicButton",value:"forward",onClick:function(e){return f(e.target.value)},children:"Number of rounds forward"}),Object(i.jsx)("button",{className:"backward"===j?"jumpOptionsButton basicButton pressed":"jumpOptionsButton basicButton",value:"backward",onClick:function(e){return f(e.target.value)},children:"Number of rounds backward"}),Object(i.jsx)("button",{className:"goTo"===j?"jumpOptionsButton basicButton pressed":"jumpOptionsButton basicButton",value:"goTo",onClick:function(e){return f(e.target.value)},children:"To specified round"})]}),Object(i.jsxs)("div",{className:"jumpNumberInputAndGoButtonContainer",children:[Object(i.jsx)("div",{className:"numberInputContainer",children:Object(i.jsx)("input",{type:"number",className:"durationNumberInput textInput jumpNumberInput",value:a,onChange:function(e){return o(Number(e.target.value))}})}),Object(i.jsx)("button",{className:"goButton basicButton",onClick:function(){return b(j)},children:"Go"})]})]})})},x=function(e){var t=e.setModal,n=e.modal,r=e.setTurnNumber,c=e.turnNumber,s=e.effects,a=e.setEffects,u=function(e){a(e),r(1),t("off")};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"modalBody topContainer",children:[Object(i.jsx)("div",{className:"modalContent",children:function(e){switch(e){case"jumpTurn":return Object(i.jsx)(h,{setTurnNumber:r,turnNumber:c});case"reset":return Object(i.jsx)(p,{effects:s,setEffectsAndResetRounds:u,turnNumber:c});default:return""}}(n)}),Object(i.jsx)("div",{className:"closeModalButtonContainer",children:Object(i.jsx)("button",{className:"basicButton closeModalButton",onClick:function(){return t("off")},children:"jumpTurn"===n?"Close":"Cancel"})})]})})};var N=function(){var e=Object(r.useState)(Number(localStorage.getItem("turnNumber"))||1),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(JSON.parse(localStorage.getItem("effects"))||[]),a=Object(u.a)(s,2),d=a[0],j=a[1],f=Object(r.useState)(!1),O=Object(u.a)(f,2),p=O[0],h=O[1],N=Object(r.useState)("off"),v=Object(u.a)(N,2),C=v[0],B=v[1];return Object(r.useEffect)((function(){localStorage.setItem("effects",JSON.stringify(d))}),[d]),Object(r.useEffect)((function(){localStorage.setItem("turnNumber",n)}),[n]),Object(i.jsx)("div",{className:"app",children:Object(i.jsxs)("div",{className:"shadow",children:[Object(i.jsxs)("div",{className:"topContainer",children:[Object(i.jsx)("h1",{className:"title",children:"Effect Tracker"}),Object(i.jsxs)("h2",{className:"turnCount",children:["Turn ",n]}),Object(i.jsx)(o,{setTurnNumber:c,turnNumber:n,reset:function(){"reset"===C?B("off"):d.length>0?B("reset"):c(1)},setModal:B,modal:C}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"newEffectButtonContainer",children:Object(i.jsx)("button",{className:p?"newEffectButton basicButton pressed":"newEffectButton basicButton",onClick:function(){return h(!p)},children:"New Effect"})}),p?Object(i.jsx)(m,{addEffect:function(e){var t=l(d);t.push(e),j(t)},turnNumber:n,setToggle:h}):null,"off"!==C?Object(i.jsx)(x,{setModal:B,modal:C,turnNumber:n,setTurnNumber:c,effects:d,setEffects:j}):null]}),Object(i.jsx)(b,{turnNumber:n,effects:d,setEffects:j})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root")),v()}],[[16,1,2]]]);
//# sourceMappingURL=main.212ef35b.chunk.js.map