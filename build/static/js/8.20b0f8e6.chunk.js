(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8],{622:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var s=r(43),a=r(157),n=r(1),c=r.n(n),i=r(621),o=r(20),l=function(t){var e=t.name,r=t.text,n=Object(a.a)(t,["name","text"]),c=e?"https://coreui.io/react/docs/components/".concat(e):t.href;return Object(o.jsx)("div",{className:"card-header-actions",children:Object(o.jsx)(i.bb,Object(s.a)(Object(s.a)({},n),{},{href:c,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(o.jsx)("small",{className:"text-muted",children:r||"docs"})}))})},d=c.a.memo(l)},629:function(t,e){!function(t,e){for(var r in e)t[r]=e[r]}(e,function(t){var e={};function r(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e),r.d(e,"deepObjectsMerge",(function(){return s})),r.d(e,"getColor",(function(){return o})),r.d(e,"getStyle",(function(){return i})),r.d(e,"hexToRgb",(function(){return l})),r.d(e,"hexToRgba",(function(){return d})),r.d(e,"makeUid",(function(){return b})),r.d(e,"omitByKeys",(function(){return f})),r.d(e,"pickByKeys",(function(){return j})),r.d(e,"rgbToHex",(function(){return h}));var s=function t(e,r){for(var s=0,a=Object.keys(r);s<a.length;s++){var n=a[s];r[n]instanceof Object&&Object.assign(r[n],t(e[n],r[n]))}return Object.assign(e||{},r),e},a=function(){for(var t={},e=document.styleSheets,r="",s=e.length-1;s>-1;s--){for(var a=e[s].cssRules,n=a.length-1;n>-1;n--)if(".ie-custom-properties"===a[n].selectorText){r=a[n].cssText;break}if(r)break}return(r=r.substring(r.lastIndexOf("{")+1,r.lastIndexOf("}"))).split(";").forEach((function(e){if(e){var r=e.split(": ")[0],s=e.split(": ")[1];r&&s&&(t["--".concat(r.trim())]=s.trim())}})),t},n=function(){return Boolean(document.documentMode)&&document.documentMode>=10},c=function(t){return t.match(/^--.*/i)},i=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(c(t)&&n()){var s=a();e=s[t]}else e=window.getComputedStyle(r,null).getPropertyValue(t).replace(/^\s/,"");return e},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,r="--".concat(t),s=i(r,e);return s||t},l=function(t){if(void 0===t)throw new TypeError("Hex color is not defined");var e,r,s;if(!t.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(t," is not a valid hex color"));return 7===t.length?(e=parseInt(t.slice(1,3),16),r=parseInt(t.slice(3,5),16),s=parseInt(t.slice(5,7),16)):(e=parseInt(t.slice(1,2),16),r=parseInt(t.slice(2,3),16),s=parseInt(t.slice(3,5),16)),"rgba(".concat(e,", ").concat(r,", ").concat(s,")")},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===t)throw new TypeError("Hex color is not defined");var r,s,a,n=t.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!n)throw new Error("".concat(t," is not a valid hex color"));return 7===t.length?(r=parseInt(t.slice(1,3),16),s=parseInt(t.slice(3,5),16),a=parseInt(t.slice(5,7),16)):(r=parseInt(t.slice(1,2),16),s=parseInt(t.slice(2,3),16),a=parseInt(t.slice(3,5),16)),"rgba(".concat(r,", ").concat(s,", ").concat(a,", ").concat(e/100,")")},b=function(){return"uid-"+Math.random().toString(36).substr(2)},f=function(t,e){for(var r={},s=Object.keys(t),a=0;a<s.length;a++)!e.includes(s[a])&&(r[s[a]]=t[s[a]]);return r},j=function(t,e){for(var r={},s=0;s<e.length;s++)r[e[s]]=t[e[s]];return r},h=function(t){if(void 0===t)throw new TypeError("Hex color is not defined");if("transparent"===t)return"#00000000";var e=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!e)throw new Error("".concat(t," is not a valid rgb color"));var r="0".concat(parseInt(e[1],10).toString(16)),s="0".concat(parseInt(e[2],10).toString(16)),a="0".concat(parseInt(e[3],10).toString(16));return"#".concat(r.slice(-2)).concat(s.slice(-2)).concat(a.slice(-2))},x={deepObjectsMerge:s,getColor:o,getStyle:i,hexToRgb:l,hexToRgba:d,makeUid:b,omitByKeys:f,pickByKeys:j,rgbToHex:h};e.default=x}]))},631:function(t,e,r){"use strict";e.a=r.p+"static/media/project.4e57b18a.jpg"},632:function(t,e,r){"use strict";var s=r(43),a=r(157),n=(r(1),r(629)),c=r(638),i=r(20),o=function(t){var e=t.borderColor,r=t.backgroundColor,o=t.pointHoverBackgroundColor,l=t.dataPoints,d=t.label,b=t.pointed,f=Object(a.a)(t,["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"]),j=o||("transparent"!==r?r:e),h=[{data:l,borderColor:Object(n.getColor)(e),backgroundColor:Object(n.getColor)(r),pointBackgroundColor:Object(n.getColor)(j),pointHoverBackgroundColor:Object(n.getColor)(j),label:d}],x={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,l)-5,max:Math.max.apply(Math,l)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},u={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},p=function(){var t=b?x:u;return Object.assign({},t,{maintainAspectRatio:!1,legend:{display:!1}})}(),m=Object(n.deepObjectsMerge)(h,f.datasets||{}),g=Object(n.deepObjectsMerge)(p,f.options||{});return Object(i.jsx)(c.c,Object(s.a)(Object(s.a)({},f),{},{datasets:m,options:g,labels:d}))};o.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},e.a=o},698:function(t,e,r){"use strict";r.r(e);r(1);var s=r(621),a=(r(626),r(622),r(634)),n=r.n(a),c=(r(635),r(631)),i=r(636),o=(r(637),r(711),r(632),r(20));e.default=function(){var t={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},e=90,r=90,a=30,l=10,d=[{Id:1,ProjectName:"Project 1",ProfitMargin:"50"},{Id:2,ProjectName:"Project 2",ProfitMargin:"50"},{Id:3,ProjectName:"Project 3",ProfitMargin:"50"},{Id:4,ProjectName:"Project 4",ProfitMargin:"50"},{Id:5,ProjectName:"Project 5",ProfitMargin:"50"},{Id:6,ProjectName:"Project 6",ProfitMargin:"50"},{Id:7,ProjectName:"Project 7",ProfitMargin:"50"},{Id:8,ProjectName:"Project 8",ProfitMargin:"50"},{Id:9,ProjectName:"Project 9",ProfitMargin:"50"},{Id:10,ProjectName:"Project 10",ProfitMargin:"50"},{Id:11,ProjectName:"Project 11",ProfitMargin:"50"},{Id:12,ProjectName:"Project 12",ProfitMargin:"50"},{Id:13,ProjectName:"Project 13",ProfitMargin:"50"},{Id:14,ProjectName:"Project 14",ProfitMargin:"50"},{Id:15,ProjectName:"Project 15",ProfitMargin:"50"},{Id:16,ProjectName:"Project 16",ProfitMargin:"50"},{Id:17,ProjectName:"Project 17",ProfitMargin:"30"},{Id:18,ProjectName:"Project 18",ProfitMargin:"29"},{Id:19,ProjectName:"Project 20",ProfitMargin:"29"},{Id:20,ProjectName:"Project 21",ProfitMargin:"29"},{Id:21,ProjectName:"Project 22",ProfitMargin:"29"},{Id:22,ProjectName:"Project 23",ProfitMargin:"29"},{Id:23,ProjectName:"Project 24",ProfitMargin:"25"},{Id:24,ProjectName:"Project 25",ProfitMargin:"27"},{Id:25,ProjectName:"Project 26",ProfitMargin:"25"},{Id:26,ProjectName:"Project 27",ProfitMargin:"28"}],b=d.map((function(t){if(t.ProfitMargin>=30)return Object(o.jsxs)(s.db,{className:"justify-content-between ",children:[t.ProjectName,Object(o.jsx)(s.b,{className:"float-right",shape:"pill",color:"success",children:Object(o.jsxs)("span",{style:{fontSize:"12px",fontWeight:"700"},children:[t.ProfitMargin,"%"]})})]},t.Id)})),f=d.map((function(t){if(t.ProfitMargin<30)return Object(o.jsxs)(s.db,{accent:"danger",color:"danger",className:"justify-content-between list_card",children:[t.ProjectName,Object(o.jsx)(s.b,{className:"float-right",shape:"pill",color:"danger",children:Object(o.jsxs)("span",{style:{fontSize:"12px",fontWeight:"700"},children:[t.ProfitMargin,"%"]})})]},t.Id)}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(s.ub,{children:[Object(o.jsx)(s.u,{xs:"12",sm:"4",md:"4",xl:"3",children:Object(o.jsxs)("div",{className:"card shadow",children:[Object(o.jsx)("div",{className:"card-header content-center text-white  bg-primary_dark",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"project_val",children:"250"}),Object(o.jsx)("div",{className:"project_label",children:"ALL PROJECTS"})]})}),Object(o.jsxs)("div",{className:"card-body row text-center",style:{height:"75px"},children:[Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("div",{className:"text-value-lg",children:"205"}),Object(o.jsx)("div",{className:"text-uppercase small",children:"ON TIME"})]}),Object(o.jsx)("div",{className:"c-vr"}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("div",{className:"text-value-lg",children:"45"}),Object(o.jsx)("div",{className:"text-uppercase text-muted small",children:"DELAYED"})]})]})]})}),Object(o.jsx)(s.u,{xs:"12",sm:"4",md:"3",xl:"3",children:Object(o.jsxs)("div",{className:"card success shadow",children:[Object(o.jsxs)("div",{className:"card-body d-flex align-items-center p-0",children:[Object(o.jsx)("div",{className:"mr-3 text-white bg-success p-4",children:Object(o.jsx)("span",{className:"iconify","data-icon":"grommet-icons:money","data-inline":"false"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"text-value text-value-lg",children:"$1.999,50"}),Object(o.jsx)("div",{className:"text-muted text-uppercase font-weight-bold small",children:"COLLECTABLES"})]})]}),Object(o.jsx)("footer",{className:"card-footer px-3 py-2 card-footer",children:Object(o.jsx)("a",{href:"https://coreui.io/",className:"font-weight-bold font-xs btn-block text-muted",rel:"noopener norefferer",target:"_blank",children:"View more"})})]})}),Object(o.jsx)(s.u,{xs:"12",sm:"4",md:"3",xl:"3",children:Object(o.jsxs)("div",{className:"card success shadow",children:[Object(o.jsxs)("div",{className:"card-body d-flex align-items-center p-0",children:[Object(o.jsx)("div",{className:"mr-3 text-white bg-success p-4",children:Object(o.jsx)("span",{className:"iconify","data-icon":"grommet-icons:money","data-inline":"false"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"text-value text-value-lg",children:"$1.999,50"}),Object(o.jsx)("div",{className:"text-muted text-uppercase font-weight-bold small",children:"COLLECTABLES"})]})]}),Object(o.jsx)("footer",{className:"card-footer px-3 py-2 card-footer",children:Object(o.jsx)("a",{href:"https://coreui.io/",className:"font-weight-bold font-xs btn-block text-muted",rel:"noopener norefferer",target:"_blank",children:"View more"})})]})}),Object(o.jsx)(s.u,{xs:"12",sm:"4",md:"2",xl:"2",children:Object(o.jsx)(s.j,{className:"text-black shadow",children:Object(o.jsxs)(s.k,{children:[Object(o.jsx)("h4",{className:"pull-left",children:"45%"}),Object(o.jsx)("span",{style:{fontSize:"12px",fontWeight:"600"},children:"PROFIT MARGIN"}),Object(o.jsx)(s.sb,{color:"success",value:45,size:"xs"}),Object(o.jsx)("span",{style:{fontSize:"10px",letterSpacing:"0px",textAlign:"left",lineHeight:"normal"},children:"Acceptable profit margin explained in this section. This will serve as a reminder to the person reading."})]})})}),Object(o.jsx)(s.u,{xs:"12",sm:"4",md:"2",xl:"2",children:Object(o.jsx)(s.j,{className:"text-black shadow",children:Object(o.jsxs)(s.k,{children:[Object(o.jsx)("h4",{className:"pull-left",children:"45%"}),Object(o.jsx)("span",{style:{fontSize:"12px",fontWeight:"600"},children:"RISK VALUE"}),Object(o.jsx)("span",{style:{fontSize:"10px",letterSpacing:"0px",textAlign:"left",lineHeight:"normal"},children:"Acceptable profit margin explained in this section. This will serve as a reminder to the person reading."})]})})})]}),Object(o.jsxs)(s.ub,{children:[Object(o.jsxs)(s.u,{sm:"6",md:"9",children:[Object(o.jsxs)(s.j,{children:[Object(o.jsx)(s.n,{className:"text-center",children:Object(o.jsx)("h2",{children:"TOP 5 EARNING PROJECTS"})}),Object(o.jsx)(s.k,{children:Object(o.jsxs)(n.a,{responsive:t,children:[Object(o.jsxs)("div",{className:"card_container",children:[Object(o.jsx)("img",{src:c.a,alt:"Avatar",style:{width:"100%",height:"55%",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}),Object(o.jsxs)("div",{className:"container_box",children:[Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"PROJECT STATS"}),Object(o.jsx)(i.a,{value:e,text:"".concat(e,"%"),styles:{path:{stroke:"#54c2a2",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#b0ebda",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"TIMELINE"}),Object(o.jsx)(i.a,{value:r,text:"".concat(r,"%"),styles:{path:{stroke:"#4ccee8",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#bbe5ed",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"REMAINING BDG"}),Object(o.jsx)(i.a,{value:a,text:"".concat(a,"%"),styles:{path:{stroke:"#331a73",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#a653e6",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"RISK"}),Object(o.jsx)(i.a,{value:l,text:"".concat(l,"%"),styles:{path:{stroke:"#f7c56d",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#e6d4b5",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]})]})]}),Object(o.jsxs)("div",{className:"card_container",children:[Object(o.jsx)("img",{src:c.a,alt:"Avatar",style:{width:"100%",height:"55%",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}),Object(o.jsxs)("div",{className:"container_box",children:[Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"PROJECT STATS"}),Object(o.jsx)(i.a,{value:e,text:"".concat(e,"%"),styles:{path:{stroke:"#54c2a2",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#b0ebda",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"TIMELINE"}),Object(o.jsx)(i.a,{value:r,text:"".concat(r,"%"),styles:{path:{stroke:"#4ccee8",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#bbe5ed",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"REMAINING BDG"}),Object(o.jsx)(i.a,{value:a,text:"".concat(a,"%"),styles:{path:{stroke:"#331a73",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#a653e6",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"RISK"}),Object(o.jsx)(i.a,{value:l,text:"".concat(l,"%"),styles:{path:{stroke:"#f7c56d",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#e6d4b5",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]})]})]}),Object(o.jsxs)("div",{className:"card_container",children:[Object(o.jsx)("img",{src:c.a,alt:"Avatar",style:{width:"100%",height:"55%",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}),Object(o.jsxs)("div",{className:"container_box",children:[Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"PROJECT STATS"}),Object(o.jsx)(i.a,{value:e,text:"".concat(e,"%"),styles:{path:{stroke:"#54c2a2",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#b0ebda",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"TIMELINE"}),Object(o.jsx)(i.a,{value:r,text:"".concat(r,"%"),styles:{path:{stroke:"#4ccee8",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#bbe5ed",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"REMAINING BDG"}),Object(o.jsx)(i.a,{value:a,text:"".concat(a,"%"),styles:{path:{stroke:"#331a73",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#a653e6",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"RISK"}),Object(o.jsx)(i.a,{value:l,text:"".concat(l,"%"),styles:{path:{stroke:"#f7c56d",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#e6d4b5",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]})]})]}),Object(o.jsxs)("div",{className:"card_container",children:[Object(o.jsx)("img",{src:c.a,alt:"Avatar",style:{width:"100%",height:"55%",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}),Object(o.jsxs)("div",{className:"container_box",children:[Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"PROJECT STATS"}),Object(o.jsx)(i.a,{value:e,text:"".concat(e,"%"),styles:{path:{stroke:"#54c2a2",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#b0ebda",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"TIMELINE"}),Object(o.jsx)(i.a,{value:r,text:"".concat(r,"%"),styles:{path:{stroke:"#4ccee8",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#bbe5ed",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"REMAINING BDG"}),Object(o.jsx)(i.a,{value:a,text:"".concat(a,"%"),styles:{path:{stroke:"#331a73",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#a653e6",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"RISK"}),Object(o.jsx)(i.a,{value:l,text:"".concat(l,"%"),styles:{path:{stroke:"#f7c56d",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#e6d4b5",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]})]})]}),Object(o.jsxs)("div",{className:"card_container",children:[Object(o.jsx)("img",{src:c.a,alt:"Avatar",style:{width:"100%",height:"55%",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}),Object(o.jsxs)("div",{className:"container_box",children:[Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"PROJECT STATS"}),Object(o.jsx)(i.a,{value:e,text:"".concat(e,"%"),styles:{path:{stroke:"#54c2a2",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#b0ebda",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"TIMELINE"}),Object(o.jsx)(i.a,{value:r,text:"".concat(r,"%"),styles:{path:{stroke:"#4ccee8",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#bbe5ed",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"REMAINING BDG"}),Object(o.jsx)(i.a,{value:a,text:"".concat(a,"%"),styles:{path:{stroke:"#331a73",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#a653e6",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"RISK"}),Object(o.jsx)(i.a,{value:l,text:"".concat(l,"%"),styles:{path:{stroke:"#f7c56d",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#e6d4b5",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]})]})]})]})})]}),Object(o.jsxs)(s.j,{children:[Object(o.jsx)(s.n,{className:"text-center",children:Object(o.jsx)("h2",{children:"BOTTOM 5 EARNING PROJECTS"})}),Object(o.jsx)(s.k,{children:Object(o.jsxs)(n.a,{responsive:t,children:[Object(o.jsxs)("div",{className:"card_container",children:[Object(o.jsx)("img",{src:c.a,alt:"Avatar",style:{width:"100%",height:"55%",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}),Object(o.jsxs)("div",{className:"container_box",children:[Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"PROJECT STATS"}),Object(o.jsx)(i.a,{value:e,text:"".concat(e,"%"),styles:{path:{stroke:"#54c2a2",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#b0ebda",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"TIMELINE"}),Object(o.jsx)(i.a,{value:r,text:"".concat(r,"%"),styles:{path:{stroke:"#4ccee8",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#bbe5ed",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"REMAINING BDG"}),Object(o.jsx)(i.a,{value:a,text:"".concat(a,"%"),styles:{path:{stroke:"#331a73",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#a653e6",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"RISK"}),Object(o.jsx)(i.a,{value:l,text:"".concat(l,"%"),styles:{path:{stroke:"#f7c56d",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#e6d4b5",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]})]})]}),Object(o.jsxs)("div",{className:"card_container",children:[Object(o.jsx)("img",{src:c.a,alt:"Avatar",style:{width:"100%",height:"55%",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}),Object(o.jsxs)("div",{className:"container_box",children:[Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"PROJECT STATS"}),Object(o.jsx)(i.a,{value:e,text:"".concat(e,"%"),styles:{path:{stroke:"#54c2a2",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#b0ebda",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"TIMELINE"}),Object(o.jsx)(i.a,{value:r,text:"".concat(r,"%"),styles:{path:{stroke:"#4ccee8",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#bbe5ed",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"REMAINING BDG"}),Object(o.jsx)(i.a,{value:a,text:"".concat(a,"%"),styles:{path:{stroke:"#331a73",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#a653e6",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"RISK"}),Object(o.jsx)(i.a,{value:l,text:"".concat(l,"%"),styles:{path:{stroke:"#f7c56d",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#e6d4b5",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]})]})]}),Object(o.jsxs)("div",{className:"card_container",children:[Object(o.jsx)("img",{src:c.a,alt:"Avatar",style:{width:"100%",height:"55%",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}),Object(o.jsxs)("div",{className:"container_box",children:[Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"PROJECT STATS"}),Object(o.jsx)(i.a,{value:e,text:"".concat(e,"%"),styles:{path:{stroke:"#54c2a2",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#b0ebda",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"TIMELINE"}),Object(o.jsx)(i.a,{value:r,text:"".concat(r,"%"),styles:{path:{stroke:"#4ccee8",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#bbe5ed",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"REMAINING BDG"}),Object(o.jsx)(i.a,{value:a,text:"".concat(a,"%"),styles:{path:{stroke:"#331a73",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#a653e6",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"RISK"}),Object(o.jsx)(i.a,{value:l,text:"".concat(l,"%"),styles:{path:{stroke:"#f7c56d",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#e6d4b5",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]})]})]}),Object(o.jsxs)("div",{className:"card_container",children:[Object(o.jsx)("img",{src:c.a,alt:"Avatar",style:{width:"100%",height:"55%",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}),Object(o.jsxs)("div",{className:"container_box",children:[Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"PROJECT STATS"}),Object(o.jsx)(i.a,{value:e,text:"".concat(e,"%"),styles:{path:{stroke:"#54c2a2",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#b0ebda",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"TIMELINE"}),Object(o.jsx)(i.a,{value:r,text:"".concat(r,"%"),styles:{path:{stroke:"#4ccee8",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#bbe5ed",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"REMAINING BDG"}),Object(o.jsx)(i.a,{value:a,text:"".concat(a,"%"),styles:{path:{stroke:"#331a73",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#a653e6",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"RISK"}),Object(o.jsx)(i.a,{value:l,text:"".concat(l,"%"),styles:{path:{stroke:"#f7c56d",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#e6d4b5",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]})]})]}),Object(o.jsxs)("div",{className:"card_container",children:[Object(o.jsx)("img",{src:c.a,alt:"Avatar",style:{width:"100%",height:"55%",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}),Object(o.jsxs)("div",{className:"container_box",children:[Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"PROJECT STATS"}),Object(o.jsx)(i.a,{value:e,text:"".concat(e,"%"),styles:{path:{stroke:"#54c2a2",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#b0ebda",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"TIMELINE"}),Object(o.jsx)(i.a,{value:r,text:"".concat(r,"%"),styles:{path:{stroke:"#4ccee8",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#bbe5ed",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"REMAINING BDG"}),Object(o.jsx)(i.a,{value:a,text:"".concat(a,"%"),styles:{path:{stroke:"#331a73",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#a653e6",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]}),Object(o.jsxs)("div",{style:{width:60,height:60},children:[Object(o.jsx)("span",{className:"title",children:"RISK"}),Object(o.jsx)(i.a,{value:l,text:"".concat(l,"%"),styles:{path:{stroke:"#f7c56d",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"#e6d4b5",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"black",fontSize:"20px",fontWeight:"700"},background:{fill:"#54c2a2"}}})]})]})]})]})})]})]}),Object(o.jsx)(s.u,{sm:"12",md:"3",children:Object(o.jsxs)(s.j,{children:[Object(o.jsx)(s.n,{children:Object(o.jsx)("h4",{children:"SEB Projects (Ranked)"})}),Object(o.jsx)(s.k,{children:Object(o.jsx)("div",{className:"list_container",children:b})}),Object(o.jsx)(s.l,{children:Object(o.jsx)("div",{className:"list_footer",children:f})})]})})]})]})}},711:function(t,e,r){}}]);
//# sourceMappingURL=8.20b0f8e6.chunk.js.map