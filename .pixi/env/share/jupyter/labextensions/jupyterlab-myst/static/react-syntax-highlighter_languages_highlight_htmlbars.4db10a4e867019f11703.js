(self.webpackChunkjupyterlab_myst=self.webpackChunkjupyterlab_myst||[]).push([[8458],{93202:e=>{function n(e){return e?"string"==typeof e?e:e.source:null}function a(...e){return e.map((e=>n(e))).join("")}e.exports=function(e){const t=function(e){const t={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},s=/\[\]|\[[^\]]+\]/,i=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,l=function(...e){return"("+e.map((e=>n(e))).join("|")+")"}(/""|"[^"]+"/,/''|'[^']+'/,s,i),r=a(a("(",/\.|\.\/|\//,")?"),l,(c=a(/(\.|\/)/,l),a("(",c,")*")));var c;const o=a("(",s,"|",i,")(?==)"),m={begin:r,lexemes:/[\w.\/]+/},d=e.inherit(m,{keywords:{literal:["true","false","undefined","null"]}}),u={begin:/\(/,end:/\)/},b={className:"attr",begin:o,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,d,u]}}},g={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},b,d,u],returnEnd:!0},p=e.inherit(m,{className:"name",keywords:t,starts:e.inherit(g,{end:/\)/})});u.contains=[p];const h=e.inherit(m,{keywords:t,className:"name",starts:e.inherit(g,{end:/\}\}/})}),N=e.inherit(m,{keywords:t,className:"name"}),k=e.inherit(m,{className:"name",keywords:t,starts:e.inherit(g,{end:/\}\}/})});return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[h],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[N]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[h]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[N]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[k]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[k]}]}}(e);return t.name="HTMLbars",e.getLanguage("handlebars")&&(t.disableAutodetect=!0),t}}}]);