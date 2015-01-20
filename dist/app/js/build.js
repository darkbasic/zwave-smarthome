/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.1-beta.4
 *
 * Copyright 2014 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */


(function(){

	"use strict";

	//Declare root variable - window in the browser, global on the server
	var root = this,
		previous = root.Chart;

	//Occupy the global variable of Chart, and create a simple base class
	var Chart = function(context){
		var chart = this;
		this.canvas = context.canvas;

		this.ctx = context;

		//Variables global to the chart
		var width = this.width = context.canvas.width;
		var height = this.height = context.canvas.height;
		this.aspectRatio = this.width / this.height;
		//High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.
		helpers.retinaScale(this);

		return this;
	};
	//Globally expose the defaults to allow for user updating/changing
	Chart.defaults = {
		global: {
			// Boolean - Whether to animate the chart
			animation: true,

			// Number - Number of animation steps
			animationSteps: 60,

			// String - Animation easing effect
			animationEasing: "easeOutQuart",

			// Boolean - If we should show the scale at all
			showScale: true,

			// Boolean - If we want to override with a hard coded scale
			scaleOverride: false,

			// ** Required if scaleOverride is true **
			// Number - The number of steps in a hard coded scale
			scaleSteps: null,
			// Number - The value jump in the hard coded scale
			scaleStepWidth: null,
			// Number - The scale starting value
			scaleStartValue: null,

			// String - Colour of the scale line
			scaleLineColor: "rgba(0,0,0,.1)",

			// Number - Pixel width of the scale line
			scaleLineWidth: 1,

			// Boolean - Whether to show labels on the scale
			scaleShowLabels: true,

			// Interpolated JS string - can access value
			scaleLabel: "<%=value%>",

			// Boolean - Whether the scale should stick to integers, and not show any floats even if drawing space is there
			scaleIntegersOnly: true,

			// Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
			scaleBeginAtZero: false,

			// String - Scale label font declaration for the scale label
			scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Scale label font size in pixels
			scaleFontSize: 12,

			// String - Scale label font weight style
			scaleFontStyle: "normal",

			// String - Scale label font colour
			scaleFontColor: "#666",

			// Boolean - whether or not the chart should be responsive and resize when the browser does.
			responsive: false,

                        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
                        maintainAspectRatio: true,

			// Boolean - Determines whether to draw tooltips on the canvas or not - attaches events to touchmove & mousemove
			showTooltips: true,

			// Array - Array of string names to attach tooltip events
			tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],

			// String - Tooltip background colour
			tooltipFillColor: "rgba(0,0,0,0.8)",

			// String - Tooltip label font declaration for the scale label
			tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Tooltip label font size in pixels
			tooltipFontSize: 14,

			// String - Tooltip font weight style
			tooltipFontStyle: "normal",

			// String - Tooltip label font colour
			tooltipFontColor: "#fff",

			// String - Tooltip title font declaration for the scale label
			tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Tooltip title font size in pixels
			tooltipTitleFontSize: 14,

			// String - Tooltip title font weight style
			tooltipTitleFontStyle: "bold",

			// String - Tooltip title font colour
			tooltipTitleFontColor: "#fff",

			// Number - pixel width of padding around tooltip text
			tooltipYPadding: 6,

			// Number - pixel width of padding around tooltip text
			tooltipXPadding: 6,

			// Number - Size of the caret on the tooltip
			tooltipCaretSize: 8,

			// Number - Pixel radius of the tooltip border
			tooltipCornerRadius: 6,

			// Number - Pixel offset from point x to tooltip edge
			tooltipXOffset: 10,

			// String - Template string for single tooltips
			tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

			// String - Template string for single tooltips
			multiTooltipTemplate: "<%= value %>",

			// String - Colour behind the legend colour block
			multiTooltipKeyBackground: '#fff',

			// Function - Will fire on animation progression.
			onAnimationProgress: function(){},

			// Function - Will fire on animation completion.
			onAnimationComplete: function(){}

		}
	};

	//Create a dictionary of chart types, to allow for extension of existing types
	Chart.types = {};

	//Global Chart helpers object for utility methods and classes
	var helpers = Chart.helpers = {};

		//-- Basic js utility methods
	var each = helpers.each = function(loopable,callback,self){
			var additionalArgs = Array.prototype.slice.call(arguments, 3);
			// Check to see if null or undefined firstly.
			if (loopable){
				if (loopable.length === +loopable.length){
					var i;
					for (i=0; i<loopable.length; i++){
						callback.apply(self,[loopable[i], i].concat(additionalArgs));
					}
				}
				else{
					for (var item in loopable){
						callback.apply(self,[loopable[item],item].concat(additionalArgs));
					}
				}
			}
		},
		clone = helpers.clone = function(obj){
			var objClone = {};
			each(obj,function(value,key){
				if (obj.hasOwnProperty(key)) objClone[key] = value;
			});
			return objClone;
		},
		extend = helpers.extend = function(base){
			each(Array.prototype.slice.call(arguments,1), function(extensionObject) {
				each(extensionObject,function(value,key){
					if (extensionObject.hasOwnProperty(key)) base[key] = value;
				});
			});
			return base;
		},
		merge = helpers.merge = function(base,master){
			//Merge properties in left object over to a shallow clone of object right.
			var args = Array.prototype.slice.call(arguments,0);
			args.unshift({});
			return extend.apply(null, args);
		},
		indexOf = helpers.indexOf = function(arrayToSearch, item){
			if (Array.prototype.indexOf) {
				return arrayToSearch.indexOf(item);
			}
			else{
				for (var i = 0; i < arrayToSearch.length; i++) {
					if (arrayToSearch[i] === item) return i;
				}
				return -1;
			}
		},
		where = helpers.where = function(collection, filterCallback){
			var filtered = [];

			helpers.each(collection, function(item){
				if (filterCallback(item)){
					filtered.push(item);
				}
			});

			return filtered;
		},
		findNextWhere = helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex){
			// Default to start of the array
			if (!startIndex){
				startIndex = -1;
			}
			for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
				var currentItem = arrayToSearch[i];
				if (filterCallback(currentItem)){
					return currentItem;
				}
			};
		},
		findPreviousWhere = helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex){
			// Default to end of the array
			if (!startIndex){
				startIndex = arrayToSearch.length;
			}
			for (var i = startIndex - 1; i >= 0; i--) {
				var currentItem = arrayToSearch[i];
				if (filterCallback(currentItem)){
					return currentItem;
				}
			};
		},
		inherits = helpers.inherits = function(extensions){
			//Basic javascript inheritance based on the model created in Backbone.js
			var parent = this;
			var ChartElement = (extensions && extensions.hasOwnProperty("constructor")) ? extensions.constructor : function(){ return parent.apply(this, arguments); };

			var Surrogate = function(){ this.constructor = ChartElement;};
			Surrogate.prototype = parent.prototype;
			ChartElement.prototype = new Surrogate();

			ChartElement.extend = inherits;

			if (extensions) extend(ChartElement.prototype, extensions);

			ChartElement.__super__ = parent.prototype;

			return ChartElement;
		},
		noop = helpers.noop = function(){},
		uid = helpers.uid = (function(){
			var id=0;
			return function(){
				return "chart-" + id++;
			};
		})(),
		warn = helpers.warn = function(str){
			//Method for warning of errors
			if (window.console && typeof window.console.warn == "function") console.warn(str);
		},
		amd = helpers.amd = (typeof define == 'function' && define.amd),
		//-- Math methods
		isNumber = helpers.isNumber = function(n){
			return !isNaN(parseFloat(n)) && isFinite(n);
		},
		max = helpers.max = function(array){
			return Math.max.apply( Math, array );
		},
		min = helpers.min = function(array){
			return Math.min.apply( Math, array );
		},
		cap = helpers.cap = function(valueToCap,maxValue,minValue){
			if(isNumber(maxValue)) {
				if( valueToCap > maxValue ) {
					return maxValue;
				}
			}
			else if(isNumber(minValue)){
				if ( valueToCap < minValue ){
					return minValue;
				}
			}
			return valueToCap;
		},
		getDecimalPlaces = helpers.getDecimalPlaces = function(num){
			if (num%1!==0 && isNumber(num)){
				return num.toString().split(".")[1].length;
			}
			else {
				return 0;
			}
		},
		toRadians = helpers.radians = function(degrees){
			return degrees * (Math.PI/180);
		},
		// Gets the angle from vertical upright to the point about a centre.
		getAngleFromPoint = helpers.getAngleFromPoint = function(centrePoint, anglePoint){
			var distanceFromXCenter = anglePoint.x - centrePoint.x,
				distanceFromYCenter = anglePoint.y - centrePoint.y,
				radialDistanceFromCenter = Math.sqrt( distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);


			var angle = Math.PI * 2 + Math.atan2(distanceFromYCenter, distanceFromXCenter);

			//If the segment is in the top left quadrant, we need to add another rotation to the angle
			if (distanceFromXCenter < 0 && distanceFromYCenter < 0){
				angle += Math.PI*2;
			}

			return {
				angle: angle,
				distance: radialDistanceFromCenter
			};
		},
		aliasPixel = helpers.aliasPixel = function(pixelWidth){
			return (pixelWidth % 2 === 0) ? 0 : 0.5;
		},
		splineCurve = helpers.splineCurve = function(FirstPoint,MiddlePoint,AfterPoint,t){
			//Props to Rob Spencer at scaled innovation for his post on splining between points
			//http://scaledinnovation.com/analytics/splines/aboutSplines.html
			var d01=Math.sqrt(Math.pow(MiddlePoint.x-FirstPoint.x,2)+Math.pow(MiddlePoint.y-FirstPoint.y,2)),
				d12=Math.sqrt(Math.pow(AfterPoint.x-MiddlePoint.x,2)+Math.pow(AfterPoint.y-MiddlePoint.y,2)),
				fa=t*d01/(d01+d12),// scaling factor for triangle Ta
				fb=t*d12/(d01+d12);
			return {
				inner : {
					x : MiddlePoint.x-fa*(AfterPoint.x-FirstPoint.x),
					y : MiddlePoint.y-fa*(AfterPoint.y-FirstPoint.y)
				},
				outer : {
					x: MiddlePoint.x+fb*(AfterPoint.x-FirstPoint.x),
					y : MiddlePoint.y+fb*(AfterPoint.y-FirstPoint.y)
				}
			};
		},
		calculateOrderOfMagnitude = helpers.calculateOrderOfMagnitude = function(val){
			return Math.floor(Math.log(val) / Math.LN10);
		},
		calculateScaleRange = helpers.calculateScaleRange = function(valuesArray, drawingSize, textSize, startFromZero, integersOnly){

			//Set a minimum step of two - a point at the top of the graph, and a point at the base
			var minSteps = 2,
				maxSteps = Math.floor(drawingSize/(textSize * 1.5)),
				skipFitting = (minSteps >= maxSteps);

			var maxValue = max(valuesArray),
				minValue = min(valuesArray);

			// We need some degree of seperation here to calculate the scales if all the values are the same
			// Adding/minusing 0.5 will give us a range of 1.
			if (maxValue === minValue){
				maxValue += 0.5;
				// So we don't end up with a graph with a negative start value if we've said always start from zero
				if (minValue >= 0.5 && !startFromZero){
					minValue -= 0.5;
				}
				else{
					// Make up a whole number above the values
					maxValue += 0.5;
				}
			}

			var	valueRange = Math.abs(maxValue - minValue),
				rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange),
				graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
				graphMin = (startFromZero) ? 0 : Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
				graphRange = graphMax - graphMin,
				stepValue = Math.pow(10, rangeOrderOfMagnitude),
				numberOfSteps = Math.round(graphRange / stepValue);

			//If we have more space on the graph we'll use it to give more definition to the data
			while((numberOfSteps > maxSteps || (numberOfSteps * 2) < maxSteps) && !skipFitting) {
				if(numberOfSteps > maxSteps){
					stepValue *=2;
					numberOfSteps = Math.round(graphRange/stepValue);
					// Don't ever deal with a decimal number of steps - cancel fitting and just use the minimum number of steps.
					if (numberOfSteps % 1 !== 0){
						skipFitting = true;
					}
				}
				//We can fit in double the amount of scale points on the scale
				else{
					//If user has declared ints only, and the step value isn't a decimal
					if (integersOnly && rangeOrderOfMagnitude >= 0){
						//If the user has said integers only, we need to check that making the scale more granular wouldn't make it a float
						if(stepValue/2 % 1 === 0){
							stepValue /=2;
							numberOfSteps = Math.round(graphRange/stepValue);
						}
						//If it would make it a float break out of the loop
						else{
							break;
						}
					}
					//If the scale doesn't have to be an int, make the scale more granular anyway.
					else{
						stepValue /=2;
						numberOfSteps = Math.round(graphRange/stepValue);
					}

				}
			}

			if (skipFitting){
				numberOfSteps = minSteps;
				stepValue = graphRange / numberOfSteps;
			}

			return {
				steps : numberOfSteps,
				stepValue : stepValue,
				min : graphMin,
				max	: graphMin + (numberOfSteps * stepValue)
			};

		},
		/* jshint ignore:start */
		// Blows up jshint errors based on the new Function constructor
		//Templating methods
		//Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/
		template = helpers.template = function(templateString, valuesObject){
			 // If templateString is function rather than string-template - call the function for valuesObject
			if(templateString instanceof Function){
			 	return templateString(valuesObject);
		 	}

			var cache = {};
			function tmpl(str, data){
				// Figure out if we're getting a template, or if we need to
				// load the template - and be sure to cache the result.
				var fn = !/\W/.test(str) ?
				cache[str] = cache[str] :

				// Generate a reusable function that will serve as a template
				// generator (and which will be cached).
				new Function("obj",
					"var p=[],print=function(){p.push.apply(p,arguments);};" +

					// Introduce the data as local variables using with(){}
					"with(obj){p.push('" +

					// Convert the template into pure JavaScript
					str
						.replace(/[\r\t\n]/g, " ")
						.split("<%").join("\t")
						.replace(/((^|%>)[^\t]*)'/g, "$1\r")
						.replace(/\t=(.*?)%>/g, "',$1,'")
						.split("\t").join("');")
						.split("%>").join("p.push('")
						.split("\r").join("\\'") +
					"');}return p.join('');"
				);

				// Provide some basic currying to the user
				return data ? fn( data ) : fn;
			}
			return tmpl(templateString,valuesObject);
		},
		/* jshint ignore:end */
		generateLabels = helpers.generateLabels = function(templateString,numberOfSteps,graphMin,stepValue){
			var labelsArray = new Array(numberOfSteps);
			if (labelTemplateString){
				each(labelsArray,function(val,index){
					labelsArray[index] = template(templateString,{value: (graphMin + (stepValue*(index+1)))});
				});
			}
			return labelsArray;
		},
		//--Animation methods
		//Easing functions adapted from Robert Penner's easing equations
		//http://www.robertpenner.com/easing/
		easingEffects = helpers.easingEffects = {
			linear: function (t) {
				return t;
			},
			easeInQuad: function (t) {
				return t * t;
			},
			easeOutQuad: function (t) {
				return -1 * t * (t - 2);
			},
			easeInOutQuad: function (t) {
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t;
				return -1 / 2 * ((--t) * (t - 2) - 1);
			},
			easeInCubic: function (t) {
				return t * t * t;
			},
			easeOutCubic: function (t) {
				return 1 * ((t = t / 1 - 1) * t * t + 1);
			},
			easeInOutCubic: function (t) {
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t;
				return 1 / 2 * ((t -= 2) * t * t + 2);
			},
			easeInQuart: function (t) {
				return t * t * t * t;
			},
			easeOutQuart: function (t) {
				return -1 * ((t = t / 1 - 1) * t * t * t - 1);
			},
			easeInOutQuart: function (t) {
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t;
				return -1 / 2 * ((t -= 2) * t * t * t - 2);
			},
			easeInQuint: function (t) {
				return 1 * (t /= 1) * t * t * t * t;
			},
			easeOutQuint: function (t) {
				return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
			},
			easeInOutQuint: function (t) {
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t * t;
				return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
			},
			easeInSine: function (t) {
				return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
			},
			easeOutSine: function (t) {
				return 1 * Math.sin(t / 1 * (Math.PI / 2));
			},
			easeInOutSine: function (t) {
				return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
			},
			easeInExpo: function (t) {
				return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
			},
			easeOutExpo: function (t) {
				return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
			},
			easeInOutExpo: function (t) {
				if (t === 0) return 0;
				if (t === 1) return 1;
				if ((t /= 1 / 2) < 1) return 1 / 2 * Math.pow(2, 10 * (t - 1));
				return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
			},
			easeInCirc: function (t) {
				if (t >= 1) return t;
				return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
			},
			easeOutCirc: function (t) {
				return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
			},
			easeInOutCirc: function (t) {
				if ((t /= 1 / 2) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
				return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
			},
			easeInElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0) return 0;
				if ((t /= 1) == 1) return 1;
				if (!p) p = 1 * 0.3;
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else s = p / (2 * Math.PI) * Math.asin(1 / a);
				return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
			},
			easeOutElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0) return 0;
				if ((t /= 1) == 1) return 1;
				if (!p) p = 1 * 0.3;
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else s = p / (2 * Math.PI) * Math.asin(1 / a);
				return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
			},
			easeInOutElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0) return 0;
				if ((t /= 1 / 2) == 2) return 1;
				if (!p) p = 1 * (0.3 * 1.5);
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else s = p / (2 * Math.PI) * Math.asin(1 / a);
				if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
				return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
			},
			easeInBack: function (t) {
				var s = 1.70158;
				return 1 * (t /= 1) * t * ((s + 1) * t - s);
			},
			easeOutBack: function (t) {
				var s = 1.70158;
				return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
			},
			easeInOutBack: function (t) {
				var s = 1.70158;
				if ((t /= 1 / 2) < 1) return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
				return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
			},
			easeInBounce: function (t) {
				return 1 - easingEffects.easeOutBounce(1 - t);
			},
			easeOutBounce: function (t) {
				if ((t /= 1) < (1 / 2.75)) {
					return 1 * (7.5625 * t * t);
				} else if (t < (2 / 2.75)) {
					return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
				} else if (t < (2.5 / 2.75)) {
					return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
				} else {
					return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
				}
			},
			easeInOutBounce: function (t) {
				if (t < 1 / 2) return easingEffects.easeInBounce(t * 2) * 0.5;
				return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
			}
		},
		//Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
		requestAnimFrame = helpers.requestAnimFrame = (function(){
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function(callback) {
					return window.setTimeout(callback, 1000 / 60);
				};
		})(),
		cancelAnimFrame = helpers.cancelAnimFrame = (function(){
			return window.cancelAnimationFrame ||
				window.webkitCancelAnimationFrame ||
				window.mozCancelAnimationFrame ||
				window.oCancelAnimationFrame ||
				window.msCancelAnimationFrame ||
				function(callback) {
					return window.clearTimeout(callback, 1000 / 60);
				};
		})(),
		animationLoop = helpers.animationLoop = function(callback,totalSteps,easingString,onProgress,onComplete,chartInstance){

			var currentStep = 0,
				easingFunction = easingEffects[easingString] || easingEffects.linear;

			var animationFrame = function(){
				currentStep++;
				var stepDecimal = currentStep/totalSteps;
				var easeDecimal = easingFunction(stepDecimal);

				callback.call(chartInstance,easeDecimal,stepDecimal, currentStep);
				onProgress.call(chartInstance,easeDecimal,stepDecimal);
				if (currentStep < totalSteps){
					chartInstance.animationFrame = requestAnimFrame(animationFrame);
				} else{
					onComplete.apply(chartInstance);
				}
			};
			requestAnimFrame(animationFrame);
		},
		//-- DOM methods
		getRelativePosition = helpers.getRelativePosition = function(evt){
			var mouseX, mouseY;
			var e = evt.originalEvent || evt,
				canvas = evt.currentTarget || evt.srcElement,
				boundingRect = canvas.getBoundingClientRect();

			if (e.touches){
				mouseX = e.touches[0].clientX - boundingRect.left;
				mouseY = e.touches[0].clientY - boundingRect.top;

			}
			else{
				mouseX = e.clientX - boundingRect.left;
				mouseY = e.clientY - boundingRect.top;
			}

			return {
				x : mouseX,
				y : mouseY
			};

		},
		addEvent = helpers.addEvent = function(node,eventType,method){
			if (node.addEventListener){
				node.addEventListener(eventType,method);
			} else if (node.attachEvent){
				node.attachEvent("on"+eventType, method);
			} else {
				node["on"+eventType] = method;
			}
		},
		removeEvent = helpers.removeEvent = function(node, eventType, handler){
			if (node.removeEventListener){
				node.removeEventListener(eventType, handler, false);
			} else if (node.detachEvent){
				node.detachEvent("on"+eventType,handler);
			} else{
				node["on" + eventType] = noop;
			}
		},
		bindEvents = helpers.bindEvents = function(chartInstance, arrayOfEvents, handler){
			// Create the events object if it's not already present
			if (!chartInstance.events) chartInstance.events = {};

			each(arrayOfEvents,function(eventName){
				chartInstance.events[eventName] = function(){
					handler.apply(chartInstance, arguments);
				};
				addEvent(chartInstance.chart.canvas,eventName,chartInstance.events[eventName]);
			});
		},
		unbindEvents = helpers.unbindEvents = function (chartInstance, arrayOfEvents) {
			each(arrayOfEvents, function(handler,eventName){
				removeEvent(chartInstance.chart.canvas, eventName, handler);
			});
		},
		getMaximumWidth = helpers.getMaximumWidth = function(domNode){
			var container = domNode.parentNode;
			// TODO = check cross browser stuff with this.
			return container.clientWidth;
		},
		getMaximumHeight = helpers.getMaximumHeight = function(domNode){
			var container = domNode.parentNode;
			// TODO = check cross browser stuff with this.
			return container.clientHeight;
		},
		getMaximumSize = helpers.getMaximumSize = helpers.getMaximumWidth, // legacy support
		retinaScale = helpers.retinaScale = function(chart){
			var ctx = chart.ctx,
				width = chart.canvas.width,
				height = chart.canvas.height;

			if (window.devicePixelRatio) {
				ctx.canvas.style.width = width + "px";
				ctx.canvas.style.height = height + "px";
				ctx.canvas.height = height * window.devicePixelRatio;
				ctx.canvas.width = width * window.devicePixelRatio;
				ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
			}
		},
		//-- Canvas methods
		clear = helpers.clear = function(chart){
			chart.ctx.clearRect(0,0,chart.width,chart.height);
		},
		fontString = helpers.fontString = function(pixelSize,fontStyle,fontFamily){
			return fontStyle + " " + pixelSize+"px " + fontFamily;
		},
		longestText = helpers.longestText = function(ctx,font,arrayOfStrings){
			ctx.font = font;
			var longest = 0;
			each(arrayOfStrings,function(string){
				var textWidth = ctx.measureText(string).width;
				longest = (textWidth > longest) ? textWidth : longest;
			});
			return longest;
		},
		drawRoundedRectangle = helpers.drawRoundedRectangle = function(ctx,x,y,width,height,radius){
			ctx.beginPath();
			ctx.moveTo(x + radius, y);
			ctx.lineTo(x + width - radius, y);
			ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
			ctx.lineTo(x + width, y + height - radius);
			ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
			ctx.lineTo(x + radius, y + height);
			ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
			ctx.lineTo(x, y + radius);
			ctx.quadraticCurveTo(x, y, x + radius, y);
			ctx.closePath();
		};


	//Store a reference to each instance - allowing us to globally resize chart instances on window resize.
	//Destroy method on the chart will remove the instance of the chart from this reference.
	Chart.instances = {};

	Chart.Type = function(data,options,chart){
		this.options = options;
		this.chart = chart;
		this.id = uid();
		//Add the chart instance to the global namespace
		Chart.instances[this.id] = this;

		// Initialize is always called when a chart type is created
		// By default it is a no op, but it should be extended
		if (options.responsive){
			this.resize();
		}
		this.initialize.call(this,data);
	};

	//Core methods that'll be a part of every chart type
	extend(Chart.Type.prototype,{
		initialize : function(){return this;},
		clear : function(){
			clear(this.chart);
			return this;
		},
		stop : function(){
			// Stops any current animation loop occuring
			helpers.cancelAnimFrame.call(root, this.animationFrame);
			return this;
		},
		resize : function(callback){
			this.stop();
			var canvas = this.chart.canvas,
				newWidth = getMaximumWidth(this.chart.canvas),
				newHeight = this.options.maintainAspectRatio ? newWidth / this.chart.aspectRatio : getMaximumHeight(this.chart.canvas);

			canvas.width = this.chart.width = newWidth;
			canvas.height =  this.chart.height = newHeight;

			retinaScale(this.chart);

			if (typeof callback === "function"){
				callback.apply(this, Array.prototype.slice.call(arguments, 1));
			}
			return this;
		},
		reflow : noop,
		render : function(reflow){
			if (reflow){
				this.reflow();
			}
			if (this.options.animation && !reflow){
				helpers.animationLoop(
					this.draw,
					this.options.animationSteps,
					this.options.animationEasing,
					this.options.onAnimationProgress,
					this.options.onAnimationComplete,
					this
				);
			}
			else{
				this.draw();
				this.options.onAnimationComplete.call(this);
			}
			return this;
		},
		generateLegend : function(){
			return template(this.options.legendTemplate,this);
		},
		destroy : function(){
			this.clear();
			unbindEvents(this, this.events);
			delete Chart.instances[this.id];
		},
		showTooltip : function(ChartElements, forceRedraw){
			// Only redraw the chart if we've actually changed what we're hovering on.
			if (typeof this.activeElements === 'undefined') this.activeElements = [];

			var isChanged = (function(Elements){
				var changed = false;

				if (Elements.length !== this.activeElements.length){
					changed = true;
					return changed;
				}

				each(Elements, function(element, index){
					if (element !== this.activeElements[index]){
						changed = true;
					}
				}, this);
				return changed;
			}).call(this, ChartElements);

			if (!isChanged && !forceRedraw){
				return;
			}
			else{
				this.activeElements = ChartElements;
			}
			this.draw();
			if (ChartElements.length > 0){
				// If we have multiple datasets, show a MultiTooltip for all of the data points at that index
				if (this.datasets && this.datasets.length > 1) {
					var dataArray,
						dataIndex;

					for (var i = this.datasets.length - 1; i >= 0; i--) {
						dataArray = this.datasets[i].points || this.datasets[i].bars || this.datasets[i].segments;
						dataIndex = indexOf(dataArray, ChartElements[0]);
						if (dataIndex !== -1){
							break;
						}
					}
					var tooltipLabels = [],
						tooltipColors = [],
						medianPosition = (function(index) {

							// Get all the points at that particular index
							var Elements = [],
								dataCollection,
								xPositions = [],
								yPositions = [],
								xMax,
								yMax,
								xMin,
								yMin;
							helpers.each(this.datasets, function(dataset){
								dataCollection = dataset.points || dataset.bars || dataset.segments;
								if (dataCollection[dataIndex] && dataCollection[dataIndex].hasValue()){
									Elements.push(dataCollection[dataIndex]);
								}
							});

							helpers.each(Elements, function(element) {
								xPositions.push(element.x);
								yPositions.push(element.y);


								//Include any colour information about the element
								tooltipLabels.push(helpers.template(this.options.multiTooltipTemplate, element));
								tooltipColors.push({
									fill: element._saved.fillColor || element.fillColor,
									stroke: element._saved.strokeColor || element.strokeColor
								});

							}, this);

							yMin = min(yPositions);
							yMax = max(yPositions);

							xMin = min(xPositions);
							xMax = max(xPositions);

							return {
								x: (xMin > this.chart.width/2) ? xMin : xMax,
								y: (yMin + yMax)/2
							};
						}).call(this, dataIndex);

					new Chart.MultiTooltip({
						x: medianPosition.x,
						y: medianPosition.y,
						xPadding: this.options.tooltipXPadding,
						yPadding: this.options.tooltipYPadding,
						xOffset: this.options.tooltipXOffset,
						fillColor: this.options.tooltipFillColor,
						textColor: this.options.tooltipFontColor,
						fontFamily: this.options.tooltipFontFamily,
						fontStyle: this.options.tooltipFontStyle,
						fontSize: this.options.tooltipFontSize,
						titleTextColor: this.options.tooltipTitleFontColor,
						titleFontFamily: this.options.tooltipTitleFontFamily,
						titleFontStyle: this.options.tooltipTitleFontStyle,
						titleFontSize: this.options.tooltipTitleFontSize,
						cornerRadius: this.options.tooltipCornerRadius,
						labels: tooltipLabels,
						legendColors: tooltipColors,
						legendColorBackground : this.options.multiTooltipKeyBackground,
						title: ChartElements[0].label,
						chart: this.chart,
						ctx: this.chart.ctx
					}).draw();

				} else {
					each(ChartElements, function(Element) {
						var tooltipPosition = Element.tooltipPosition();
						new Chart.Tooltip({
							x: Math.round(tooltipPosition.x),
							y: Math.round(tooltipPosition.y),
							xPadding: this.options.tooltipXPadding,
							yPadding: this.options.tooltipYPadding,
							fillColor: this.options.tooltipFillColor,
							textColor: this.options.tooltipFontColor,
							fontFamily: this.options.tooltipFontFamily,
							fontStyle: this.options.tooltipFontStyle,
							fontSize: this.options.tooltipFontSize,
							caretHeight: this.options.tooltipCaretSize,
							cornerRadius: this.options.tooltipCornerRadius,
							text: template(this.options.tooltipTemplate, Element),
							chart: this.chart
						}).draw();
					}, this);
				}
			}
			return this;
		},
		toBase64Image : function(){
			return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
		}
	});

	Chart.Type.extend = function(extensions){

		var parent = this;

		var ChartType = function(){
			return parent.apply(this,arguments);
		};

		//Copy the prototype object of the this class
		ChartType.prototype = clone(parent.prototype);
		//Now overwrite some of the properties in the base class with the new extensions
		extend(ChartType.prototype, extensions);

		ChartType.extend = Chart.Type.extend;

		if (extensions.name || parent.prototype.name){

			var chartName = extensions.name || parent.prototype.name;
			//Assign any potential default values of the new chart type

			//If none are defined, we'll use a clone of the chart type this is being extended from.
			//I.e. if we extend a line chart, we'll use the defaults from the line chart if our new chart
			//doesn't define some defaults of their own.

			var baseDefaults = (Chart.defaults[parent.prototype.name]) ? clone(Chart.defaults[parent.prototype.name]) : {};

			Chart.defaults[chartName] = extend(baseDefaults,extensions.defaults);

			Chart.types[chartName] = ChartType;

			//Register this new chart type in the Chart prototype
			Chart.prototype[chartName] = function(data,options){
				var config = merge(Chart.defaults.global, Chart.defaults[chartName], options || {});
				return new ChartType(data,config,this);
			};
		} else{
			warn("Name not provided for this chart, so it hasn't been registered");
		}
		return parent;
	};

	Chart.Element = function(configuration){
		extend(this,configuration);
		this.initialize.apply(this,arguments);
		this.save();
	};
	extend(Chart.Element.prototype,{
		initialize : function(){},
		restore : function(props){
			if (!props){
				extend(this,this._saved);
			} else {
				each(props,function(key){
					this[key] = this._saved[key];
				},this);
			}
			return this;
		},
		save : function(){
			this._saved = clone(this);
			delete this._saved._saved;
			return this;
		},
		update : function(newProps){
			each(newProps,function(value,key){
				this._saved[key] = this[key];
				this[key] = value;
			},this);
			return this;
		},
		transition : function(props,ease){
			each(props,function(value,key){
				this[key] = ((value - this._saved[key]) * ease) + this._saved[key];
			},this);
			return this;
		},
		tooltipPosition : function(){
			return {
				x : this.x,
				y : this.y
			};
		},
		hasValue: function(){
			return isNumber(this.value);
		}
	});

	Chart.Element.extend = inherits;


	Chart.Point = Chart.Element.extend({
		display: true,
		inRange: function(chartX,chartY){
			var hitDetectionRange = this.hitDetectionRadius + this.radius;
			return ((Math.pow(chartX-this.x, 2)+Math.pow(chartY-this.y, 2)) < Math.pow(hitDetectionRange,2));
		},
		draw : function(){
			if (this.display){
				var ctx = this.ctx;
				ctx.beginPath();

				ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
				ctx.closePath();

				ctx.strokeStyle = this.strokeColor;
				ctx.lineWidth = this.strokeWidth;

				ctx.fillStyle = this.fillColor;

				ctx.fill();
				ctx.stroke();
			}


			//Quick debug for bezier curve splining
			//Highlights control points and the line between them.
			//Handy for dev - stripped in the min version.

			// ctx.save();
			// ctx.fillStyle = "black";
			// ctx.strokeStyle = "black"
			// ctx.beginPath();
			// ctx.arc(this.controlPoints.inner.x,this.controlPoints.inner.y, 2, 0, Math.PI*2);
			// ctx.fill();

			// ctx.beginPath();
			// ctx.arc(this.controlPoints.outer.x,this.controlPoints.outer.y, 2, 0, Math.PI*2);
			// ctx.fill();

			// ctx.moveTo(this.controlPoints.inner.x,this.controlPoints.inner.y);
			// ctx.lineTo(this.x, this.y);
			// ctx.lineTo(this.controlPoints.outer.x,this.controlPoints.outer.y);
			// ctx.stroke();

			// ctx.restore();



		}
	});

	Chart.Arc = Chart.Element.extend({
		inRange : function(chartX,chartY){

			var pointRelativePosition = helpers.getAngleFromPoint(this, {
				x: chartX,
				y: chartY
			});

			//Check if within the range of the open/close angle
			var betweenAngles = (pointRelativePosition.angle >= this.startAngle && pointRelativePosition.angle <= this.endAngle),
				withinRadius = (pointRelativePosition.distance >= this.innerRadius && pointRelativePosition.distance <= this.outerRadius);

			return (betweenAngles && withinRadius);
			//Ensure within the outside of the arc centre, but inside arc outer
		},
		tooltipPosition : function(){
			var centreAngle = this.startAngle + ((this.endAngle - this.startAngle) / 2),
				rangeFromCentre = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
			return {
				x : this.x + (Math.cos(centreAngle) * rangeFromCentre),
				y : this.y + (Math.sin(centreAngle) * rangeFromCentre)
			};
		},
		draw : function(animationPercent){

			var easingDecimal = animationPercent || 1;

			var ctx = this.ctx;

			ctx.beginPath();

			ctx.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle);

			ctx.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, true);

			ctx.closePath();
			ctx.strokeStyle = this.strokeColor;
			ctx.lineWidth = this.strokeWidth;

			ctx.fillStyle = this.fillColor;

			ctx.fill();
			ctx.lineJoin = 'bevel';

			if (this.showStroke){
				ctx.stroke();
			}
		}
	});

	Chart.Rectangle = Chart.Element.extend({
		draw : function(){
			var ctx = this.ctx,
				halfWidth = this.width/2,
				leftX = this.x - halfWidth,
				rightX = this.x + halfWidth,
				top = this.base - (this.base - this.y),
				halfStroke = this.strokeWidth / 2;

			// Canvas doesn't allow us to stroke inside the width so we can
			// adjust the sizes to fit if we're setting a stroke on the line
			if (this.showStroke){
				leftX += halfStroke;
				rightX -= halfStroke;
				top += halfStroke;
			}

			ctx.beginPath();

			ctx.fillStyle = this.fillColor;
			ctx.strokeStyle = this.strokeColor;
			ctx.lineWidth = this.strokeWidth;

			// It'd be nice to keep this class totally generic to any rectangle
			// and simply specify which border to miss out.
			ctx.moveTo(leftX, this.base);
			ctx.lineTo(leftX, top);
			ctx.lineTo(rightX, top);
			ctx.lineTo(rightX, this.base);
			ctx.fill();
			if (this.showStroke){
				ctx.stroke();
			}
		},
		height : function(){
			return this.base - this.y;
		},
		inRange : function(chartX,chartY){
			return (chartX >= this.x - this.width/2 && chartX <= this.x + this.width/2) && (chartY >= this.y && chartY <= this.base);
		}
	});

	Chart.Tooltip = Chart.Element.extend({
		draw : function(){

			var ctx = this.chart.ctx;

			ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

			this.xAlign = "center";
			this.yAlign = "above";

			//Distance between the actual element.y position and the start of the tooltip caret
			var caretPadding = 2;

			var tooltipWidth = ctx.measureText(this.text).width + 2*this.xPadding,
				tooltipRectHeight = this.fontSize + 2*this.yPadding,
				tooltipHeight = tooltipRectHeight + this.caretHeight + caretPadding;

			if (this.x + tooltipWidth/2 >this.chart.width){
				this.xAlign = "left";
			} else if (this.x - tooltipWidth/2 < 0){
				this.xAlign = "right";
			}

			if (this.y - tooltipHeight < 0){
				this.yAlign = "below";
			}


			var tooltipX = this.x - tooltipWidth/2,
				tooltipY = this.y - tooltipHeight;

			ctx.fillStyle = this.fillColor;

			switch(this.yAlign)
			{
			case "above":
				//Draw a caret above the x/y
				ctx.beginPath();
				ctx.moveTo(this.x,this.y - caretPadding);
				ctx.lineTo(this.x + this.caretHeight, this.y - (caretPadding + this.caretHeight));
				ctx.lineTo(this.x - this.caretHeight, this.y - (caretPadding + this.caretHeight));
				ctx.closePath();
				ctx.fill();
				break;
			case "below":
				tooltipY = this.y + caretPadding + this.caretHeight;
				//Draw a caret below the x/y
				ctx.beginPath();
				ctx.moveTo(this.x, this.y + caretPadding);
				ctx.lineTo(this.x + this.caretHeight, this.y + caretPadding + this.caretHeight);
				ctx.lineTo(this.x - this.caretHeight, this.y + caretPadding + this.caretHeight);
				ctx.closePath();
				ctx.fill();
				break;
			}

			switch(this.xAlign)
			{
			case "left":
				tooltipX = this.x - tooltipWidth + (this.cornerRadius + this.caretHeight);
				break;
			case "right":
				tooltipX = this.x - (this.cornerRadius + this.caretHeight);
				break;
			}

			drawRoundedRectangle(ctx,tooltipX,tooltipY,tooltipWidth,tooltipRectHeight,this.cornerRadius);

			ctx.fill();

			ctx.fillStyle = this.textColor;
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillText(this.text, tooltipX + tooltipWidth/2, tooltipY + tooltipRectHeight/2);
		}
	});

	Chart.MultiTooltip = Chart.Element.extend({
		initialize : function(){
			this.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

			this.titleFont = fontString(this.titleFontSize,this.titleFontStyle,this.titleFontFamily);

			this.height = (this.labels.length * this.fontSize) + ((this.labels.length-1) * (this.fontSize/2)) + (this.yPadding*2) + this.titleFontSize *1.5;

			this.ctx.font = this.titleFont;

			var titleWidth = this.ctx.measureText(this.title).width,
				//Label has a legend square as well so account for this.
				labelWidth = longestText(this.ctx,this.font,this.labels) + this.fontSize + 3,
				longestTextWidth = max([labelWidth,titleWidth]);

			this.width = longestTextWidth + (this.xPadding*2);


			var halfHeight = this.height/2;

			//Check to ensure the height will fit on the canvas
			//The three is to buffer form the very
			if (this.y - halfHeight < 0 ){
				this.y = halfHeight;
			} else if (this.y + halfHeight > this.chart.height){
				this.y = this.chart.height - halfHeight;
			}

			//Decide whether to align left or right based on position on canvas
			if (this.x > this.chart.width/2){
				this.x -= this.xOffset + this.width;
			} else {
				this.x += this.xOffset;
			}


		},
		getLineHeight : function(index){
			var baseLineHeight = this.y - (this.height/2) + this.yPadding,
				afterTitleIndex = index-1;

			//If the index is zero, we're getting the title
			if (index === 0){
				return baseLineHeight + this.titleFontSize/2;
			} else{
				return baseLineHeight + ((this.fontSize*1.5*afterTitleIndex) + this.fontSize/2) + this.titleFontSize * 1.5;
			}

		},
		draw : function(){
			drawRoundedRectangle(this.ctx,this.x,this.y - this.height/2,this.width,this.height,this.cornerRadius);
			var ctx = this.ctx;
			ctx.fillStyle = this.fillColor;
			ctx.fill();
			ctx.closePath();

			ctx.textAlign = "left";
			ctx.textBaseline = "middle";
			ctx.fillStyle = this.titleTextColor;
			ctx.font = this.titleFont;

			ctx.fillText(this.title,this.x + this.xPadding, this.getLineHeight(0));

			ctx.font = this.font;
			helpers.each(this.labels,function(label,index){
				ctx.fillStyle = this.textColor;
				ctx.fillText(label,this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(index + 1));

				//A bit gnarly, but clearing this rectangle breaks when using explorercanvas (clears whole canvas)
				//ctx.clearRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);
				//Instead we'll make a white filled block to put the legendColour palette over.

				ctx.fillStyle = this.legendColorBackground;
				ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);

				ctx.fillStyle = this.legendColors[index].fill;
				ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);


			},this);
		}
	});

	Chart.Scale = Chart.Element.extend({
		initialize : function(){
			this.fit();
		},
		buildYLabels : function(){
			this.yLabels = [];

			var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

			for (var i=0; i<=this.steps; i++){
				this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
			}
			this.yLabelWidth = (this.display && this.showLabels) ? longestText(this.ctx,this.font,this.yLabels) : 0;
		},
		addXLabel : function(label){
			this.xLabels.push(label);
			this.valuesCount++;
			this.fit();
		},
		removeXLabel : function(){
			this.xLabels.shift();
			this.valuesCount--;
			this.fit();
		},
		// Fitting loop to rotate x Labels and figure out what fits there, and also calculate how many Y steps to use
		fit: function(){
			// First we need the width of the yLabels, assuming the xLabels aren't rotated

			// To do that we need the base line at the top and base of the chart, assuming there is no x label rotation
			this.startPoint = (this.display) ? this.fontSize : 0;
			this.endPoint = (this.display) ? this.height - (this.fontSize * 1.5) - 5 : this.height; // -5 to pad labels

			// Apply padding settings to the start and end point.
			this.startPoint += this.padding;
			this.endPoint -= this.padding;

			// Cache the starting height, so can determine if we need to recalculate the scale yAxis
			var cachedHeight = this.endPoint - this.startPoint,
				cachedYLabelWidth;

			// Build the current yLabels so we have an idea of what size they'll be to start
			/*
			 *	This sets what is returned from calculateScaleRange as static properties of this class:
			 *
				this.steps;
				this.stepValue;
				this.min;
				this.max;
			 *
			 */
			this.calculateYRange(cachedHeight);

			// With these properties set we can now build the array of yLabels
			// and also the width of the largest yLabel
			this.buildYLabels();

			this.calculateXLabelRotation();

			while((cachedHeight > this.endPoint - this.startPoint)){
				cachedHeight = this.endPoint - this.startPoint;
				cachedYLabelWidth = this.yLabelWidth;

				this.calculateYRange(cachedHeight);
				this.buildYLabels();

				// Only go through the xLabel loop again if the yLabel width has changed
				if (cachedYLabelWidth < this.yLabelWidth){
					this.calculateXLabelRotation();
				}
			}

		},
		calculateXLabelRotation : function(){
			//Get the width of each grid by calculating the difference
			//between x offsets between 0 and 1.

			this.ctx.font = this.font;

			var firstWidth = this.ctx.measureText(this.xLabels[0]).width,
				lastWidth = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width,
				firstRotated,
				lastRotated;


			this.xScalePaddingRight = lastWidth/2 + 3;
			this.xScalePaddingLeft = (firstWidth/2 > this.yLabelWidth + 10) ? firstWidth/2 : this.yLabelWidth + 10;

			this.xLabelRotation = 0;
			if (this.display){
				var originalLabelWidth = longestText(this.ctx,this.font,this.xLabels),
					cosRotation,
					firstRotatedWidth;
				this.xLabelWidth = originalLabelWidth;
				//Allow 3 pixels x2 padding either side for label readability
				var xGridWidth = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6;

				//Max label rotate should be 90 - also act as a loop counter
				while ((this.xLabelWidth > xGridWidth && this.xLabelRotation === 0) || (this.xLabelWidth > xGridWidth && this.xLabelRotation <= 90 && this.xLabelRotation > 0)){
					cosRotation = Math.cos(toRadians(this.xLabelRotation));

					firstRotated = cosRotation * firstWidth;
					lastRotated = cosRotation * lastWidth;

					// We're right aligning the text now.
					if (firstRotated + this.fontSize / 2 > this.yLabelWidth + 8){
						this.xScalePaddingLeft = firstRotated + this.fontSize / 2;
					}
					this.xScalePaddingRight = this.fontSize/2;


					this.xLabelRotation++;
					this.xLabelWidth = cosRotation * originalLabelWidth;

				}
				if (this.xLabelRotation > 0){
					this.endPoint -= Math.sin(toRadians(this.xLabelRotation))*originalLabelWidth + 3;
				}
			}
			else{
				this.xLabelWidth = 0;
				this.xScalePaddingRight = this.padding;
				this.xScalePaddingLeft = this.padding;
			}

		},
		// Needs to be overidden in each Chart type
		// Otherwise we need to pass all the data into the scale class
		calculateYRange: noop,
		drawingArea: function(){
			return this.startPoint - this.endPoint;
		},
		calculateY : function(value){
			var scalingFactor = this.drawingArea() / (this.min - this.max);
			return this.endPoint - (scalingFactor * (value - this.min));
		},
		calculateX : function(index){
			var isRotated = (this.xLabelRotation > 0),
				// innerWidth = (this.offsetGridLines) ? this.width - offsetLeft - this.padding : this.width - (offsetLeft + halfLabelWidth * 2) - this.padding,
				innerWidth = this.width - (this.xScalePaddingLeft + this.xScalePaddingRight),
				valueWidth = innerWidth/(this.valuesCount - ((this.offsetGridLines) ? 0 : 1)),
				valueOffset = (valueWidth * index) + this.xScalePaddingLeft;

			if (this.offsetGridLines){
				valueOffset += (valueWidth/2);
			}

			return Math.round(valueOffset);
		},
		update : function(newProps){
			helpers.extend(this, newProps);
			this.fit();
		},
		draw : function(){
			var ctx = this.ctx,
				yLabelGap = (this.endPoint - this.startPoint) / this.steps,
				xStart = Math.round(this.xScalePaddingLeft);
			if (this.display){
				ctx.fillStyle = this.textColor;
				ctx.font = this.font;
				each(this.yLabels,function(labelString,index){
					var yLabelCenter = this.endPoint - (yLabelGap * index),
						linePositionY = Math.round(yLabelCenter);

					ctx.textAlign = "right";
					ctx.textBaseline = "middle";
					if (this.showLabels){
						ctx.fillText(labelString,xStart - 10,yLabelCenter);
					}
					ctx.beginPath();
					if (index > 0){
						// This is a grid line in the centre, so drop that
						ctx.lineWidth = this.gridLineWidth;
						ctx.strokeStyle = this.gridLineColor;
					} else {
						// This is the first line on the scale
						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
					}

					linePositionY += helpers.aliasPixel(ctx.lineWidth);

					ctx.moveTo(xStart, linePositionY);
					ctx.lineTo(this.width, linePositionY);
					ctx.stroke();
					ctx.closePath();

					ctx.lineWidth = this.lineWidth;
					ctx.strokeStyle = this.lineColor;
					ctx.beginPath();
					ctx.moveTo(xStart - 5, linePositionY);
					ctx.lineTo(xStart, linePositionY);
					ctx.stroke();
					ctx.closePath();

				},this);

				each(this.xLabels,function(label,index){
					var xPos = this.calculateX(index) + aliasPixel(this.lineWidth),
						// Check to see if line/bar here and decide where to place the line
						linePos = this.calculateX(index - (this.offsetGridLines ? 0.5 : 0)) + aliasPixel(this.lineWidth),
						isRotated = (this.xLabelRotation > 0);

					ctx.beginPath();

					if (index > 0){
						// This is a grid line in the centre, so drop that
						ctx.lineWidth = this.gridLineWidth;
						ctx.strokeStyle = this.gridLineColor;
					} else {
						// This is the first line on the scale
						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
					}
					ctx.moveTo(linePos,this.endPoint);
					ctx.lineTo(linePos,this.startPoint - 3);
					ctx.stroke();
					ctx.closePath();


					ctx.lineWidth = this.lineWidth;
					ctx.strokeStyle = this.lineColor;


					// Small lines at the bottom of the base grid line
					ctx.beginPath();
					ctx.moveTo(linePos,this.endPoint);
					ctx.lineTo(linePos,this.endPoint + 5);
					ctx.stroke();
					ctx.closePath();

					ctx.save();
					ctx.translate(xPos,(isRotated) ? this.endPoint + 12 : this.endPoint + 8);
					ctx.rotate(toRadians(this.xLabelRotation)*-1);
					ctx.font = this.font;
					ctx.textAlign = (isRotated) ? "right" : "center";
					ctx.textBaseline = (isRotated) ? "middle" : "top";
					ctx.fillText(label, 0, 0);
					ctx.restore();
				},this);

			}
		}

	});

	Chart.RadialScale = Chart.Element.extend({
		initialize: function(){
			this.size = min([this.height, this.width]);
			this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
		},
		calculateCenterOffset: function(value){
			// Take into account half font size + the yPadding of the top value
			var scalingFactor = this.drawingArea / (this.max - this.min);

			return (value - this.min) * scalingFactor;
		},
		update : function(){
			if (!this.lineArc){
				this.setScaleSize();
			} else {
				this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
			}
			this.buildYLabels();
		},
		buildYLabels: function(){
			this.yLabels = [];

			var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

			for (var i=0; i<=this.steps; i++){
				this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
			}
		},
		getCircumference : function(){
			return ((Math.PI*2) / this.valuesCount);
		},
		setScaleSize: function(){
			/*
			 * Right, this is really confusing and there is a lot of maths going on here
			 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
			 *
			 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
			 *
			 * Solution:
			 *
			 * We assume the radius of the polygon is half the size of the canvas at first
			 * at each index we check if the text overlaps.
			 *
			 * Where it does, we store that angle and that index.
			 *
			 * After finding the largest index and angle we calculate how much we need to remove
			 * from the shape radius to move the point inwards by that x.
			 *
			 * We average the left and right distances to get the maximum shape radius that can fit in the box
			 * along with labels.
			 *
			 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
			 * on each side, removing that from the size, halving it and adding the left x protrusion width.
			 *
			 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
			 * and position it in the most space efficient manner
			 *
			 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
			 */


			// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
			// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
			var largestPossibleRadius = min([(this.height/2 - this.pointLabelFontSize - 5), this.width/2]),
				pointPosition,
				i,
				textWidth,
				halfTextWidth,
				furthestRight = this.width,
				furthestRightIndex,
				furthestRightAngle,
				furthestLeft = 0,
				furthestLeftIndex,
				furthestLeftAngle,
				xProtrusionLeft,
				xProtrusionRight,
				radiusReductionRight,
				radiusReductionLeft,
				maxWidthRadius;
			this.ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
			for (i=0;i<this.valuesCount;i++){
				// 5px to space the text slightly out - similar to what we do in the draw function.
				pointPosition = this.getPointPosition(i, largestPossibleRadius);
				textWidth = this.ctx.measureText(template(this.templateString, { value: this.labels[i] })).width + 5;
				if (i === 0 || i === this.valuesCount/2){
					// If we're at index zero, or exactly the middle, we're at exactly the top/bottom
					// of the radar chart, so text will be aligned centrally, so we'll half it and compare
					// w/left and right text sizes
					halfTextWidth = textWidth/2;
					if (pointPosition.x + halfTextWidth > furthestRight) {
						furthestRight = pointPosition.x + halfTextWidth;
						furthestRightIndex = i;
					}
					if (pointPosition.x - halfTextWidth < furthestLeft) {
						furthestLeft = pointPosition.x - halfTextWidth;
						furthestLeftIndex = i;
					}
				}
				else if (i < this.valuesCount/2) {
					// Less than half the values means we'll left align the text
					if (pointPosition.x + textWidth > furthestRight) {
						furthestRight = pointPosition.x + textWidth;
						furthestRightIndex = i;
					}
				}
				else if (i > this.valuesCount/2){
					// More than half the values means we'll right align the text
					if (pointPosition.x - textWidth < furthestLeft) {
						furthestLeft = pointPosition.x - textWidth;
						furthestLeftIndex = i;
					}
				}
			}

			xProtrusionLeft = furthestLeft;

			xProtrusionRight = Math.ceil(furthestRight - this.width);

			furthestRightAngle = this.getIndexAngle(furthestRightIndex);

			furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);

			radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI/2);

			radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI/2);

			// Ensure we actually need to reduce the size of the chart
			radiusReductionRight = (isNumber(radiusReductionRight)) ? radiusReductionRight : 0;
			radiusReductionLeft = (isNumber(radiusReductionLeft)) ? radiusReductionLeft : 0;

			this.drawingArea = largestPossibleRadius - (radiusReductionLeft + radiusReductionRight)/2;

			//this.drawingArea = min([maxWidthRadius, (this.height - (2 * (this.pointLabelFontSize + 5)))/2])
			this.setCenterPoint(radiusReductionLeft, radiusReductionRight);

		},
		setCenterPoint: function(leftMovement, rightMovement){

			var maxRight = this.width - rightMovement - this.drawingArea,
				maxLeft = leftMovement + this.drawingArea;

			this.xCenter = (maxLeft + maxRight)/2;
			// Always vertically in the centre as the text height doesn't change
			this.yCenter = (this.height/2);
		},

		getIndexAngle : function(index){
			var angleMultiplier = (Math.PI * 2) / this.valuesCount;
			// Start from the top instead of right, so remove a quarter of the circle

			return index * angleMultiplier - (Math.PI/2);
		},
		getPointPosition : function(index, distanceFromCenter){
			var thisAngle = this.getIndexAngle(index);
			return {
				x : (Math.cos(thisAngle) * distanceFromCenter) + this.xCenter,
				y : (Math.sin(thisAngle) * distanceFromCenter) + this.yCenter
			};
		},
		draw: function(){
			if (this.display){
				var ctx = this.ctx;
				each(this.yLabels, function(label, index){
					// Don't draw a centre value
					if (index > 0){
						var yCenterOffset = index * (this.drawingArea/this.steps),
							yHeight = this.yCenter - yCenterOffset,
							pointPosition;

						// Draw circular lines around the scale
						if (this.lineWidth > 0){
							ctx.strokeStyle = this.lineColor;
							ctx.lineWidth = this.lineWidth;

							if(this.lineArc){
								ctx.beginPath();
								ctx.arc(this.xCenter, this.yCenter, yCenterOffset, 0, Math.PI*2);
								ctx.closePath();
								ctx.stroke();
							} else{
								ctx.beginPath();
								for (var i=0;i<this.valuesCount;i++)
								{
									pointPosition = this.getPointPosition(i, this.calculateCenterOffset(this.min + (index * this.stepValue)));
									if (i === 0){
										ctx.moveTo(pointPosition.x, pointPosition.y);
									} else {
										ctx.lineTo(pointPosition.x, pointPosition.y);
									}
								}
								ctx.closePath();
								ctx.stroke();
							}
						}
						if(this.showLabels){
							ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);
							if (this.showLabelBackdrop){
								var labelWidth = ctx.measureText(label).width;
								ctx.fillStyle = this.backdropColor;
								ctx.fillRect(
									this.xCenter - labelWidth/2 - this.backdropPaddingX,
									yHeight - this.fontSize/2 - this.backdropPaddingY,
									labelWidth + this.backdropPaddingX*2,
									this.fontSize + this.backdropPaddingY*2
								);
							}
							ctx.textAlign = 'center';
							ctx.textBaseline = "middle";
							ctx.fillStyle = this.fontColor;
							ctx.fillText(label, this.xCenter, yHeight);
						}
					}
				}, this);

				if (!this.lineArc){
					ctx.lineWidth = this.angleLineWidth;
					ctx.strokeStyle = this.angleLineColor;
					for (var i = this.valuesCount - 1; i >= 0; i--) {
						if (this.angleLineWidth > 0){
							var outerPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max));
							ctx.beginPath();
							ctx.moveTo(this.xCenter, this.yCenter);
							ctx.lineTo(outerPosition.x, outerPosition.y);
							ctx.stroke();
							ctx.closePath();
						}
						// Extra 3px out for some label spacing
						var pointLabelPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
						ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
						ctx.fillStyle = this.pointLabelFontColor;

						var labelsCount = this.labels.length,
							halfLabelsCount = this.labels.length/2,
							quarterLabelsCount = halfLabelsCount/2,
							upperHalf = (i < quarterLabelsCount || i > labelsCount - quarterLabelsCount),
							exactQuarter = (i === quarterLabelsCount || i === labelsCount - quarterLabelsCount);
						if (i === 0){
							ctx.textAlign = 'center';
						} else if(i === halfLabelsCount){
							ctx.textAlign = 'center';
						} else if (i < halfLabelsCount){
							ctx.textAlign = 'left';
						} else {
							ctx.textAlign = 'right';
						}

						// Set the correct text baseline based on outer positioning
						if (exactQuarter){
							ctx.textBaseline = 'middle';
						} else if (upperHalf){
							ctx.textBaseline = 'bottom';
						} else {
							ctx.textBaseline = 'top';
						}

						ctx.fillText(this.labels[i], pointLabelPosition.x, pointLabelPosition.y);
					}
				}
			}
		}
	});

	// Attach global event to resize each chart instance when the browser resizes
	helpers.addEvent(window, "resize", (function(){
		// Basic debounce of resize function so it doesn't hurt performance when resizing browser.
		var timeout;
		return function(){
			clearTimeout(timeout);
			timeout = setTimeout(function(){
				each(Chart.instances,function(instance){
					// If the responsive flag is set in the chart instance config
					// Cascade the resize event down to the chart.
					if (instance.options.responsive){
						instance.resize(instance.render, true);
					}
				});
			}, 50);
		};
	})());


	if (amd) {
		define(function(){
			return Chart;
		});
	} else if (typeof module === 'object' && module.exports) {
		module.exports = Chart;
	}

	root.Chart = Chart;

	Chart.noConflict = function(){
		root.Chart = previous;
		return Chart;
	};

}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;


	var defaultConfig = {
		//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
		scaleBeginAtZero : true,

		//Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,

		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",

		//Number - Width of the grid lines
		scaleGridLineWidth : 1,

		//Boolean - If there is a stroke on each bar
		barShowStroke : true,

		//Number - Pixel width of the bar stroke
		barStrokeWidth : 2,

		//Number - Spacing between each of the X value sets
		barValueSpacing : 5,

		//Number - Spacing between data sets within X values
		barDatasetSpacing : 1,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

	};


	Chart.Type.extend({
		name: "Bar",
		defaults : defaultConfig,
		initialize:  function(data){

			//Expose options as a scope variable here so we can access it in the ScaleClass
			var options = this.options;

			this.ScaleClass = Chart.Scale.extend({
				offsetGridLines : true,
				calculateBarX : function(datasetCount, datasetIndex, barIndex){
					//Reusable method for calculating the xPosition of a given bar based on datasetIndex & width of the bar
					var xWidth = this.calculateBaseWidth(),
						xAbsolute = this.calculateX(barIndex) - (xWidth/2),
						barWidth = this.calculateBarWidth(datasetCount);

					return xAbsolute + (barWidth * datasetIndex) + (datasetIndex * options.barDatasetSpacing) + barWidth/2;
				},
				calculateBaseWidth : function(){
					return (this.calculateX(1) - this.calculateX(0)) - (2*options.barValueSpacing);
				},
				calculateBarWidth : function(datasetCount){
					//The padding between datasets is to the right of each bar, providing that there are more than 1 dataset
					var baseWidth = this.calculateBaseWidth() - ((datasetCount - 1) * options.barDatasetSpacing);

					return (baseWidth / datasetCount);
				}
			});

			this.datasets = [];

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeBars = (evt.type !== 'mouseout') ? this.getBarsAtEvent(evt) : [];

					this.eachBars(function(bar){
						bar.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activeBars, function(activeBar){
						activeBar.fillColor = activeBar.highlightFill;
						activeBar.strokeColor = activeBar.highlightStroke;
					});
					this.showTooltip(activeBars);
				});
			}

			//Declare the extension of the default point, to cater for the options passed in to the constructor
			this.BarClass = Chart.Rectangle.extend({
				strokeWidth : this.options.barStrokeWidth,
				showStroke : this.options.barShowStroke,
				ctx : this.chart.ctx
			});

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset,datasetIndex){

				var datasetObject = {
					label : dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					bars : []
				};

				this.datasets.push(datasetObject);

				helpers.each(dataset.data,function(dataPoint,index){
					//Add a new point for each piece of data, passing any required data to draw.
					datasetObject.bars.push(new this.BarClass({
						value : dataPoint,
						label : data.labels[index],
						datasetLabel: dataset.label,
						strokeColor : dataset.strokeColor,
						fillColor : dataset.fillColor,
						highlightFill : dataset.highlightFill || dataset.fillColor,
						highlightStroke : dataset.highlightStroke || dataset.strokeColor
					}));
				},this);

			},this);

			this.buildScale(data.labels);

			this.BarClass.prototype.base = this.scale.endPoint;

			this.eachBars(function(bar, index, datasetIndex){
				helpers.extend(bar, {
					width : this.scale.calculateBarWidth(this.datasets.length),
					x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
					y: this.scale.endPoint
				});
				bar.save();
			}, this);

			this.render();
		},
		update : function(){
			this.scale.update();
			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor', 'strokeColor']);
			});

			this.eachBars(function(bar){
				bar.save();
			});
			this.render();
		},
		eachBars : function(callback){
			helpers.each(this.datasets,function(dataset, datasetIndex){
				helpers.each(dataset.bars, callback, this, datasetIndex);
			},this);
		},
		getBarsAtEvent : function(e){
			var barsArray = [],
				eventPosition = helpers.getRelativePosition(e),
				datasetIterator = function(dataset){
					barsArray.push(dataset.bars[barIndex]);
				},
				barIndex;

			for (var datasetIndex = 0; datasetIndex < this.datasets.length; datasetIndex++) {
				for (barIndex = 0; barIndex < this.datasets[datasetIndex].bars.length; barIndex++) {
					if (this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x,eventPosition.y)){
						helpers.each(this.datasets, datasetIterator);
						return barsArray;
					}
				}
			}

			return barsArray;
		},
		buildScale : function(labels){
			var self = this;

			var dataTotal = function(){
				var values = [];
				self.eachBars(function(bar){
					values.push(bar.value);
				});
				return values;
			};

			var scaleOptions = {
				templateString : this.options.scaleLabel,
				height : this.chart.height,
				width : this.chart.width,
				ctx : this.chart.ctx,
				textColor : this.options.scaleFontColor,
				fontSize : this.options.scaleFontSize,
				fontStyle : this.options.scaleFontStyle,
				fontFamily : this.options.scaleFontFamily,
				valuesCount : labels.length,
				beginAtZero : this.options.scaleBeginAtZero,
				integersOnly : this.options.scaleIntegersOnly,
				calculateYRange: function(currentHeight){
					var updatedRanges = helpers.calculateScaleRange(
						dataTotal(),
						currentHeight,
						this.fontSize,
						this.beginAtZero,
						this.integersOnly
					);
					helpers.extend(this, updatedRanges);
				},
				xLabels : labels,
				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
				lineWidth : this.options.scaleLineWidth,
				lineColor : this.options.scaleLineColor,
				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
				padding : (this.options.showScale) ? 0 : (this.options.barShowStroke) ? this.options.barStrokeWidth : 0,
				showLabels : this.options.scaleShowLabels,
				display : this.options.showScale
			};

			if (this.options.scaleOverride){
				helpers.extend(scaleOptions, {
					calculateYRange: helpers.noop,
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				});
			}

			this.scale = new this.ScaleClass(scaleOptions);
		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets
			helpers.each(valuesArray,function(value,datasetIndex){
				//Add a new point for each piece of data, passing any required data to draw.
				this.datasets[datasetIndex].bars.push(new this.BarClass({
					value : value,
					label : label,
					x: this.scale.calculateBarX(this.datasets.length, datasetIndex, this.scale.valuesCount+1),
					y: this.scale.endPoint,
					width : this.scale.calculateBarWidth(this.datasets.length),
					base : this.scale.endPoint,
					strokeColor : this.datasets[datasetIndex].strokeColor,
					fillColor : this.datasets[datasetIndex].fillColor
				}));
			},this);

			this.scale.addXLabel(label);
			//Then re-render the chart.
			this.update();
		},
		removeData : function(){
			this.scale.removeXLabel();
			//Then re-render the chart.
			helpers.each(this.datasets,function(dataset){
				dataset.bars.shift();
			},this);
			this.update();
		},
		reflow : function(){
			helpers.extend(this.BarClass.prototype,{
				y: this.scale.endPoint,
				base : this.scale.endPoint
			});
			var newScaleProps = helpers.extend({
				height : this.chart.height,
				width : this.chart.width
			});
			this.scale.update(newScaleProps);
		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			this.clear();

			var ctx = this.chart.ctx;

			this.scale.draw(easingDecimal);

			//Draw all the bars for each dataset
			helpers.each(this.datasets,function(dataset,datasetIndex){
				helpers.each(dataset.bars,function(bar,index){
					if (bar.hasValue()){
						bar.base = this.scale.endPoint;
						//Transition then draw
						bar.transition({
							x : this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
							y : this.scale.calculateY(bar.value),
							width : this.scale.calculateBarWidth(this.datasets.length)
						}, easingDecimal).draw();
					}
				},this);

			},this);
		}
	});


}).call(this);
(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		//Cache a local reference to Chart.helpers
		helpers = Chart.helpers;

	var defaultConfig = {
		//Boolean - Whether we should show a stroke on each segment
		segmentShowStroke : true,

		//String - The colour of each segment stroke
		segmentStrokeColor : "#fff",

		//Number - The width of each segment stroke
		segmentStrokeWidth : 2,

		//The percentage of the chart that we cut out of the middle.
		percentageInnerCutout : 50,

		//Number - Amount of animation steps
		animationSteps : 100,

		//String - Animation easing effect
		animationEasing : "easeOutBounce",

		//Boolean - Whether we animate the rotation of the Doughnut
		animateRotate : true,

		//Boolean - Whether we animate scaling the Doughnut from the centre
		animateScale : false,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

	};


	Chart.Type.extend({
		//Passing in a name registers this chart in the Chart namespace
		name: "Doughnut",
		//Providing a defaults will also register the deafults in the chart namespace
		defaults : defaultConfig,
		//Initialize is fired when the chart is initialized - Data is passed in as a parameter
		//Config is automatically merged by the core of Chart.js, and is available at this.options
		initialize:  function(data){

			//Declare segments as a static property to prevent inheriting across the Chart type prototype
			this.segments = [];
			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;

			this.SegmentArc = Chart.Arc.extend({
				ctx : this.chart.ctx,
				x : this.chart.width/2,
				y : this.chart.height/2
			});

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];

					helpers.each(this.segments,function(segment){
						segment.restore(["fillColor"]);
					});
					helpers.each(activeSegments,function(activeSegment){
						activeSegment.fillColor = activeSegment.highlightColor;
					});
					this.showTooltip(activeSegments);
				});
			}
			this.calculateTotal(data);

			helpers.each(data,function(datapoint, index){
				this.addData(datapoint, index, true);
			},this);

			this.render();
		},
		getSegmentsAtEvent : function(e){
			var segmentsArray = [];

			var location = helpers.getRelativePosition(e);

			helpers.each(this.segments,function(segment){
				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
			},this);
			return segmentsArray;
		},
		addData : function(segment, atIndex, silent){
			var index = atIndex || this.segments.length;
			this.segments.splice(index, 0, new this.SegmentArc({
				value : segment.value,
				outerRadius : (this.options.animateScale) ? 0 : this.outerRadius,
				innerRadius : (this.options.animateScale) ? 0 : (this.outerRadius/100) * this.options.percentageInnerCutout,
				fillColor : segment.color,
				highlightColor : segment.highlight || segment.color,
				showStroke : this.options.segmentShowStroke,
				strokeWidth : this.options.segmentStrokeWidth,
				strokeColor : this.options.segmentStrokeColor,
				startAngle : Math.PI * 1.5,
				circumference : (this.options.animateRotate) ? 0 : this.calculateCircumference(segment.value),
				label : segment.label
			}));
			if (!silent){
				this.reflow();
				this.update();
			}
		},
		calculateCircumference : function(value){
			return (Math.PI*2)*(value / this.total);
		},
		calculateTotal : function(data){
			this.total = 0;
			helpers.each(data,function(segment){
				this.total += segment.value;
			},this);
		},
		update : function(){
			this.calculateTotal(this.segments);

			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor']);
			});

			helpers.each(this.segments,function(segment){
				segment.save();
			});
			this.render();
		},

		removeData: function(atIndex){
			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
			this.segments.splice(indexToDelete, 1);
			this.reflow();
			this.update();
		},

		reflow : function(){
			helpers.extend(this.SegmentArc.prototype,{
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;
			helpers.each(this.segments, function(segment){
				segment.update({
					outerRadius : this.outerRadius,
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
				});
			}, this);
		},
		draw : function(easeDecimal){
			var animDecimal = (easeDecimal) ? easeDecimal : 1;
			this.clear();
			helpers.each(this.segments,function(segment,index){
				segment.transition({
					circumference : this.calculateCircumference(segment.value),
					outerRadius : this.outerRadius,
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
				},animDecimal);

				segment.endAngle = segment.startAngle + segment.circumference;

				segment.draw();
				if (index === 0){
					segment.startAngle = Math.PI * 1.5;
				}
				//Check to see if it's the last segment, if not get the next and update the start angle
				if (index < this.segments.length-1){
					this.segments[index+1].startAngle = segment.endAngle;
				}
			},this);

		}
	});

	Chart.types.Doughnut.extend({
		name : "Pie",
		defaults : helpers.merge(defaultConfig,{percentageInnerCutout : 0})
	});

}).call(this);
(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;

	var defaultConfig = {

		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,

		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",

		//Number - Width of the grid lines
		scaleGridLineWidth : 1,

		//Boolean - Whether the line is curved between points
		bezierCurve : true,

		//Number - Tension of the bezier curve between points
		bezierCurveTension : 0.4,

		//Boolean - Whether to show a dot for each point
		pointDot : true,

		//Number - Radius of each point dot in pixels
		pointDotRadius : 4,

		//Number - Pixel width of point dot stroke
		pointDotStrokeWidth : 1,

		//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
		pointHitDetectionRadius : 20,

		//Boolean - Whether to show a stroke for datasets
		datasetStroke : true,

		//Number - Pixel width of dataset stroke
		datasetStrokeWidth : 2,

		//Boolean - Whether to fill the dataset with a colour
		datasetFill : true,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

	};


	Chart.Type.extend({
		name: "Line",
		defaults : defaultConfig,
		initialize:  function(data){
			//Declare the extension of the default point, to cater for the options passed in to the constructor
			this.PointClass = Chart.Point.extend({
				strokeWidth : this.options.pointDotStrokeWidth,
				radius : this.options.pointDotRadius,
				display: this.options.pointDot,
				hitDetectionRadius : this.options.pointHitDetectionRadius,
				ctx : this.chart.ctx,
				inRange : function(mouseX){
					return (Math.pow(mouseX-this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius,2));
				}
			});

			this.datasets = [];

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activePoints = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];
					this.eachPoints(function(point){
						point.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activePoints, function(activePoint){
						activePoint.fillColor = activePoint.highlightFill;
						activePoint.strokeColor = activePoint.highlightStroke;
					});
					this.showTooltip(activePoints);
				});
			}

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset){

				var datasetObject = {
					label : dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					pointColor : dataset.pointColor,
					pointStrokeColor : dataset.pointStrokeColor,
					points : []
				};

				this.datasets.push(datasetObject);


				helpers.each(dataset.data,function(dataPoint,index){
					//Add a new point for each piece of data, passing any required data to draw.
					datasetObject.points.push(new this.PointClass({
						value : dataPoint,
						label : data.labels[index],
						datasetLabel: dataset.label,
						strokeColor : dataset.pointStrokeColor,
						fillColor : dataset.pointColor,
						highlightFill : dataset.pointHighlightFill || dataset.pointColor,
						highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
					}));
				},this);

				this.buildScale(data.labels);


				this.eachPoints(function(point, index){
					helpers.extend(point, {
						x: this.scale.calculateX(index),
						y: this.scale.endPoint
					});
					point.save();
				}, this);

			},this);


			this.render();
		},
		update : function(){
			this.scale.update();
			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor', 'strokeColor']);
			});
			this.eachPoints(function(point){
				point.save();
			});
			this.render();
		},
		eachPoints : function(callback){
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,callback,this);
			},this);
		},
		getPointsAtEvent : function(e){
			var pointsArray = [],
				eventPosition = helpers.getRelativePosition(e);
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,function(point){
					if (point.inRange(eventPosition.x,eventPosition.y)) pointsArray.push(point);
				});
			},this);
			return pointsArray;
		},
		buildScale : function(labels){
			var self = this;

			var dataTotal = function(){
				var values = [];
				self.eachPoints(function(point){
					values.push(point.value);
				});

				return values;
			};

			var scaleOptions = {
				templateString : this.options.scaleLabel,
				height : this.chart.height,
				width : this.chart.width,
				ctx : this.chart.ctx,
				textColor : this.options.scaleFontColor,
				fontSize : this.options.scaleFontSize,
				fontStyle : this.options.scaleFontStyle,
				fontFamily : this.options.scaleFontFamily,
				valuesCount : labels.length,
				beginAtZero : this.options.scaleBeginAtZero,
				integersOnly : this.options.scaleIntegersOnly,
				calculateYRange : function(currentHeight){
					var updatedRanges = helpers.calculateScaleRange(
						dataTotal(),
						currentHeight,
						this.fontSize,
						this.beginAtZero,
						this.integersOnly
					);
					helpers.extend(this, updatedRanges);
				},
				xLabels : labels,
				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
				lineWidth : this.options.scaleLineWidth,
				lineColor : this.options.scaleLineColor,
				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
				padding: (this.options.showScale) ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
				showLabels : this.options.scaleShowLabels,
				display : this.options.showScale
			};

			if (this.options.scaleOverride){
				helpers.extend(scaleOptions, {
					calculateYRange: helpers.noop,
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				});
			}


			this.scale = new Chart.Scale(scaleOptions);
		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets

			helpers.each(valuesArray,function(value,datasetIndex){
				//Add a new point for each piece of data, passing any required data to draw.
				this.datasets[datasetIndex].points.push(new this.PointClass({
					value : value,
					label : label,
					x: this.scale.calculateX(this.scale.valuesCount+1),
					y: this.scale.endPoint,
					strokeColor : this.datasets[datasetIndex].pointStrokeColor,
					fillColor : this.datasets[datasetIndex].pointColor
				}));
			},this);

			this.scale.addXLabel(label);
			//Then re-render the chart.
			this.update();
		},
		removeData : function(){
			this.scale.removeXLabel();
			//Then re-render the chart.
			helpers.each(this.datasets,function(dataset){
				dataset.points.shift();
			},this);
			this.update();
		},
		reflow : function(){
			var newScaleProps = helpers.extend({
				height : this.chart.height,
				width : this.chart.width
			});
			this.scale.update(newScaleProps);
		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			this.clear();

			var ctx = this.chart.ctx;

			// Some helper methods for getting the next/prev points
			var hasValue = function(item){
				return item.value !== null;
			},
			nextPoint = function(point, collection, index){
				return helpers.findNextWhere(collection, hasValue, index) || point;
			},
			previousPoint = function(point, collection, index){
				return helpers.findPreviousWhere(collection, hasValue, index) || point;
			};

			this.scale.draw(easingDecimal);


			helpers.each(this.datasets,function(dataset){
				var pointsWithValues = helpers.where(dataset.points, hasValue);

				//Transition each point first so that the line and point drawing isn't out of sync
				//We can use this extra loop to calculate the control points of this dataset also in this loop

				helpers.each(dataset.points, function(point, index){
					if (point.hasValue()){
						point.transition({
							y : this.scale.calculateY(point.value),
							x : this.scale.calculateX(index)
						}, easingDecimal);
					}
				},this);


				// Control points need to be calculated in a seperate loop, because we need to know the current x/y of the point
				// This would cause issues when there is no animation, because the y of the next point would be 0, so beziers would be skewed
				if (this.options.bezierCurve){
					helpers.each(pointsWithValues, function(point, index){
						var tension = (index > 0 && index < pointsWithValues.length - 1) ? this.options.bezierCurveTension : 0;
						point.controlPoints = helpers.splineCurve(
							previousPoint(point, pointsWithValues, index),
							point,
							nextPoint(point, pointsWithValues, index),
							tension
						);

						// Prevent the bezier going outside of the bounds of the graph

						// Cap puter bezier handles to the upper/lower scale bounds
						if (point.controlPoints.outer.y > this.scale.endPoint){
							point.controlPoints.outer.y = this.scale.endPoint;
						}
						else if (point.controlPoints.outer.y < this.scale.startPoint){
							point.controlPoints.outer.y = this.scale.startPoint;
						}

						// Cap inner bezier handles to the upper/lower scale bounds
						if (point.controlPoints.inner.y > this.scale.endPoint){
							point.controlPoints.inner.y = this.scale.endPoint;
						}
						else if (point.controlPoints.inner.y < this.scale.startPoint){
							point.controlPoints.inner.y = this.scale.startPoint;
						}
					},this);
				}


				//Draw the line between all the points
				ctx.lineWidth = this.options.datasetStrokeWidth;
				ctx.strokeStyle = dataset.strokeColor;
				ctx.beginPath();

				helpers.each(pointsWithValues, function(point, index){
					if (index === 0){
						ctx.moveTo(point.x, point.y);
					}
					else{
						if(this.options.bezierCurve){
							var previous = previousPoint(point, pointsWithValues, index);

							ctx.bezierCurveTo(
								previous.controlPoints.outer.x,
								previous.controlPoints.outer.y,
								point.controlPoints.inner.x,
								point.controlPoints.inner.y,
								point.x,
								point.y
							);
						}
						else{
							ctx.lineTo(point.x,point.y);
						}
					}
				}, this);

				ctx.stroke();

				if (this.options.datasetFill && pointsWithValues.length > 0){
					//Round off the line by going to the base of the chart, back to the start, then fill.
					ctx.lineTo(pointsWithValues[pointsWithValues.length - 1].x, this.scale.endPoint);
					ctx.lineTo(pointsWithValues[0].x, this.scale.endPoint);
					ctx.fillStyle = dataset.fillColor;
					ctx.closePath();
					ctx.fill();
				}

				//Now draw the points over the line
				//A little inefficient double looping, but better than the line
				//lagging behind the point positions
				helpers.each(pointsWithValues,function(point){
					point.draw();
				});
			},this);
		}
	});


}).call(this);
(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		//Cache a local reference to Chart.helpers
		helpers = Chart.helpers;

	var defaultConfig = {
		//Boolean - Show a backdrop to the scale label
		scaleShowLabelBackdrop : true,

		//String - The colour of the label backdrop
		scaleBackdropColor : "rgba(255,255,255,0.75)",

		// Boolean - Whether the scale should begin at zero
		scaleBeginAtZero : true,

		//Number - The backdrop padding above & below the label in pixels
		scaleBackdropPaddingY : 2,

		//Number - The backdrop padding to the side of the label in pixels
		scaleBackdropPaddingX : 2,

		//Boolean - Show line for each value in the scale
		scaleShowLine : true,

		//Boolean - Stroke a line around each segment in the chart
		segmentShowStroke : true,

		//String - The colour of the stroke on each segement.
		segmentStrokeColor : "#fff",

		//Number - The width of the stroke value in pixels
		segmentStrokeWidth : 2,

		//Number - Amount of animation steps
		animationSteps : 100,

		//String - Animation easing effect.
		animationEasing : "easeOutBounce",

		//Boolean - Whether to animate the rotation of the chart
		animateRotate : true,

		//Boolean - Whether to animate scaling the chart from the centre
		animateScale : false,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
	};


	Chart.Type.extend({
		//Passing in a name registers this chart in the Chart namespace
		name: "PolarArea",
		//Providing a defaults will also register the deafults in the chart namespace
		defaults : defaultConfig,
		//Initialize is fired when the chart is initialized - Data is passed in as a parameter
		//Config is automatically merged by the core of Chart.js, and is available at this.options
		initialize:  function(data){
			this.segments = [];
			//Declare segment class as a chart instance specific class, so it can share props for this instance
			this.SegmentArc = Chart.Arc.extend({
				showStroke : this.options.segmentShowStroke,
				strokeWidth : this.options.segmentStrokeWidth,
				strokeColor : this.options.segmentStrokeColor,
				ctx : this.chart.ctx,
				innerRadius : 0,
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.scale = new Chart.RadialScale({
				display: this.options.showScale,
				fontStyle: this.options.scaleFontStyle,
				fontSize: this.options.scaleFontSize,
				fontFamily: this.options.scaleFontFamily,
				fontColor: this.options.scaleFontColor,
				showLabels: this.options.scaleShowLabels,
				showLabelBackdrop: this.options.scaleShowLabelBackdrop,
				backdropColor: this.options.scaleBackdropColor,
				backdropPaddingY : this.options.scaleBackdropPaddingY,
				backdropPaddingX: this.options.scaleBackdropPaddingX,
				lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
				lineColor: this.options.scaleLineColor,
				lineArc: true,
				width: this.chart.width,
				height: this.chart.height,
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2,
				ctx : this.chart.ctx,
				templateString: this.options.scaleLabel,
				valuesCount: data.length
			});

			this.updateScaleRange(data);

			this.scale.update();

			helpers.each(data,function(segment,index){
				this.addData(segment,index,true);
			},this);

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];
					helpers.each(this.segments,function(segment){
						segment.restore(["fillColor"]);
					});
					helpers.each(activeSegments,function(activeSegment){
						activeSegment.fillColor = activeSegment.highlightColor;
					});
					this.showTooltip(activeSegments);
				});
			}

			this.render();
		},
		getSegmentsAtEvent : function(e){
			var segmentsArray = [];

			var location = helpers.getRelativePosition(e);

			helpers.each(this.segments,function(segment){
				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
			},this);
			return segmentsArray;
		},
		addData : function(segment, atIndex, silent){
			var index = atIndex || this.segments.length;

			this.segments.splice(index, 0, new this.SegmentArc({
				fillColor: segment.color,
				highlightColor: segment.highlight || segment.color,
				label: segment.label,
				value: segment.value,
				outerRadius: (this.options.animateScale) ? 0 : this.scale.calculateCenterOffset(segment.value),
				circumference: (this.options.animateRotate) ? 0 : this.scale.getCircumference(),
				startAngle: Math.PI * 1.5
			}));
			if (!silent){
				this.reflow();
				this.update();
			}
		},
		removeData: function(atIndex){
			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
			this.segments.splice(indexToDelete, 1);
			this.reflow();
			this.update();
		},
		calculateTotal: function(data){
			this.total = 0;
			helpers.each(data,function(segment){
				this.total += segment.value;
			},this);
			this.scale.valuesCount = this.segments.length;
		},
		updateScaleRange: function(datapoints){
			var valuesArray = [];
			helpers.each(datapoints,function(segment){
				valuesArray.push(segment.value);
			});

			var scaleSizes = (this.options.scaleOverride) ?
				{
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				} :
				helpers.calculateScaleRange(
					valuesArray,
					helpers.min([this.chart.width, this.chart.height])/2,
					this.options.scaleFontSize,
					this.options.scaleBeginAtZero,
					this.options.scaleIntegersOnly
				);

			helpers.extend(
				this.scale,
				scaleSizes,
				{
					size: helpers.min([this.chart.width, this.chart.height]),
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2
				}
			);

		},
		update : function(){
			this.calculateTotal(this.segments);

			helpers.each(this.segments,function(segment){
				segment.save();
			});
			this.render();
		},
		reflow : function(){
			helpers.extend(this.SegmentArc.prototype,{
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.updateScaleRange(this.segments);
			this.scale.update();

			helpers.extend(this.scale,{
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2
			});

			helpers.each(this.segments, function(segment){
				segment.update({
					outerRadius : this.scale.calculateCenterOffset(segment.value)
				});
			}, this);

		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			//Clear & draw the canvas
			this.clear();
			helpers.each(this.segments,function(segment, index){
				segment.transition({
					circumference : this.scale.getCircumference(),
					outerRadius : this.scale.calculateCenterOffset(segment.value)
				},easingDecimal);

				segment.endAngle = segment.startAngle + segment.circumference;

				// If we've removed the first segment we need to set the first one to
				// start at the top.
				if (index === 0){
					segment.startAngle = Math.PI * 1.5;
				}

				//Check to see if it's the last segment, if not get the next and update the start angle
				if (index < this.segments.length - 1){
					this.segments[index+1].startAngle = segment.endAngle;
				}
				segment.draw();
			}, this);
			this.scale.draw();
		}
	});

}).call(this);
(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;



	Chart.Type.extend({
		name: "Radar",
		defaults:{
			//Boolean - Whether to show lines for each scale point
			scaleShowLine : true,

			//Boolean - Whether we show the angle lines out of the radar
			angleShowLineOut : true,

			//Boolean - Whether to show labels on the scale
			scaleShowLabels : false,

			// Boolean - Whether the scale should begin at zero
			scaleBeginAtZero : true,

			//String - Colour of the angle line
			angleLineColor : "rgba(0,0,0,.1)",

			//Number - Pixel width of the angle line
			angleLineWidth : 1,

			//String - Point label font declaration
			pointLabelFontFamily : "'Arial'",

			//String - Point label font weight
			pointLabelFontStyle : "normal",

			//Number - Point label font size in pixels
			pointLabelFontSize : 10,

			//String - Point label font colour
			pointLabelFontColor : "#666",

			//Boolean - Whether to show a dot for each point
			pointDot : true,

			//Number - Radius of each point dot in pixels
			pointDotRadius : 3,

			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 1,

			//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
			pointHitDetectionRadius : 20,

			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,

			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 2,

			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

		},

		initialize: function(data){
			this.PointClass = Chart.Point.extend({
				strokeWidth : this.options.pointDotStrokeWidth,
				radius : this.options.pointDotRadius,
				display: this.options.pointDot,
				hitDetectionRadius : this.options.pointHitDetectionRadius,
				ctx : this.chart.ctx
			});

			this.datasets = [];

			this.buildScale(data);

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activePointsCollection = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];

					this.eachPoints(function(point){
						point.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activePointsCollection, function(activePoint){
						activePoint.fillColor = activePoint.highlightFill;
						activePoint.strokeColor = activePoint.highlightStroke;
					});

					this.showTooltip(activePointsCollection);
				});
			}

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset){

				var datasetObject = {
					label: dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					pointColor : dataset.pointColor,
					pointStrokeColor : dataset.pointStrokeColor,
					points : []
				};

				this.datasets.push(datasetObject);

				helpers.each(dataset.data,function(dataPoint,index){
					//Add a new point for each piece of data, passing any required data to draw.
					var pointPosition;
					if (!this.scale.animation){
						pointPosition = this.scale.getPointPosition(index, this.scale.calculateCenterOffset(dataPoint));
					}
					datasetObject.points.push(new this.PointClass({
						value : dataPoint,
						label : data.labels[index],
						datasetLabel: dataset.label,
						x: (this.options.animation) ? this.scale.xCenter : pointPosition.x,
						y: (this.options.animation) ? this.scale.yCenter : pointPosition.y,
						strokeColor : dataset.pointStrokeColor,
						fillColor : dataset.pointColor,
						highlightFill : dataset.pointHighlightFill || dataset.pointColor,
						highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
					}));
				},this);

			},this);

			this.render();
		},
		eachPoints : function(callback){
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,callback,this);
			},this);
		},

		getPointsAtEvent : function(evt){
			var mousePosition = helpers.getRelativePosition(evt),
				fromCenter = helpers.getAngleFromPoint({
					x: this.scale.xCenter,
					y: this.scale.yCenter
				}, mousePosition);

			var anglePerIndex = (Math.PI * 2) /this.scale.valuesCount,
				pointIndex = Math.round((fromCenter.angle - Math.PI * 1.5) / anglePerIndex),
				activePointsCollection = [];

			// If we're at the top, make the pointIndex 0 to get the first of the array.
			if (pointIndex >= this.scale.valuesCount || pointIndex < 0){
				pointIndex = 0;
			}

			if (fromCenter.distance <= this.scale.drawingArea){
				helpers.each(this.datasets, function(dataset){
					activePointsCollection.push(dataset.points[pointIndex]);
				});
			}

			return activePointsCollection;
		},

		buildScale : function(data){
			this.scale = new Chart.RadialScale({
				display: this.options.showScale,
				fontStyle: this.options.scaleFontStyle,
				fontSize: this.options.scaleFontSize,
				fontFamily: this.options.scaleFontFamily,
				fontColor: this.options.scaleFontColor,
				showLabels: this.options.scaleShowLabels,
				showLabelBackdrop: this.options.scaleShowLabelBackdrop,
				backdropColor: this.options.scaleBackdropColor,
				backdropPaddingY : this.options.scaleBackdropPaddingY,
				backdropPaddingX: this.options.scaleBackdropPaddingX,
				lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
				lineColor: this.options.scaleLineColor,
				angleLineColor : this.options.angleLineColor,
				angleLineWidth : (this.options.angleShowLineOut) ? this.options.angleLineWidth : 0,
				// Point labels at the edge of each line
				pointLabelFontColor : this.options.pointLabelFontColor,
				pointLabelFontSize : this.options.pointLabelFontSize,
				pointLabelFontFamily : this.options.pointLabelFontFamily,
				pointLabelFontStyle : this.options.pointLabelFontStyle,
				height : this.chart.height,
				width: this.chart.width,
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2,
				ctx : this.chart.ctx,
				templateString: this.options.scaleLabel,
				labels: data.labels,
				valuesCount: data.datasets[0].data.length
			});

			this.scale.setScaleSize();
			this.updateScaleRange(data.datasets);
			this.scale.buildYLabels();
		},
		updateScaleRange: function(datasets){
			var valuesArray = (function(){
				var totalDataArray = [];
				helpers.each(datasets,function(dataset){
					if (dataset.data){
						totalDataArray = totalDataArray.concat(dataset.data);
					}
					else {
						helpers.each(dataset.points, function(point){
							totalDataArray.push(point.value);
						});
					}
				});
				return totalDataArray;
			})();


			var scaleSizes = (this.options.scaleOverride) ?
				{
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				} :
				helpers.calculateScaleRange(
					valuesArray,
					helpers.min([this.chart.width, this.chart.height])/2,
					this.options.scaleFontSize,
					this.options.scaleBeginAtZero,
					this.options.scaleIntegersOnly
				);

			helpers.extend(
				this.scale,
				scaleSizes
			);

		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets
			this.scale.valuesCount++;
			helpers.each(valuesArray,function(value,datasetIndex){
				var pointPosition = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(value));
				this.datasets[datasetIndex].points.push(new this.PointClass({
					value : value,
					label : label,
					x: pointPosition.x,
					y: pointPosition.y,
					strokeColor : this.datasets[datasetIndex].pointStrokeColor,
					fillColor : this.datasets[datasetIndex].pointColor
				}));
			},this);

			this.scale.labels.push(label);

			this.reflow();

			this.update();
		},
		removeData : function(){
			this.scale.valuesCount--;
			this.scale.labels.shift();
			helpers.each(this.datasets,function(dataset){
				dataset.points.shift();
			},this);
			this.reflow();
			this.update();
		},
		update : function(){
			this.eachPoints(function(point){
				point.save();
			});
			this.reflow();
			this.render();
		},
		reflow: function(){
			helpers.extend(this.scale, {
				width : this.chart.width,
				height: this.chart.height,
				size : helpers.min([this.chart.width, this.chart.height]),
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2
			});
			this.updateScaleRange(this.datasets);
			this.scale.setScaleSize();
			this.scale.buildYLabels();
		},
		draw : function(ease){
			var easeDecimal = ease || 1,
				ctx = this.chart.ctx;
			this.clear();
			this.scale.draw();

			helpers.each(this.datasets,function(dataset){

				//Transition each point first so that the line and point drawing isn't out of sync
				helpers.each(dataset.points,function(point,index){
					if (point.hasValue()){
						point.transition(this.scale.getPointPosition(index, this.scale.calculateCenterOffset(point.value)), easeDecimal);
					}
				},this);



				//Draw the line between all the points
				ctx.lineWidth = this.options.datasetStrokeWidth;
				ctx.strokeStyle = dataset.strokeColor;
				ctx.beginPath();
				helpers.each(dataset.points,function(point,index){
					if (index === 0){
						ctx.moveTo(point.x,point.y);
					}
					else{
						ctx.lineTo(point.x,point.y);
					}
				},this);
				ctx.closePath();
				ctx.stroke();

				ctx.fillStyle = dataset.fillColor;
				ctx.fill();

				//Now draw the points over the line
				//A little inefficient double looping, but better than the line
				//lagging behind the point positions
				helpers.each(dataset.points,function(point){
					if (point.hasValue()){
						point.draw();
					}
				});

			},this);

		}

	});





}).call(this);

/*!jQuery Knob*/
/**
 * Downward compatible, touchable dial
 *
 * Version: 1.2.10
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    /**
     * Kontrol library
     */
    "use strict";

    /**
     * Definition of globals and core
     */
    var k = {}, // kontrol
        max = Math.max,
        min = Math.min;

    k.c = {};
    k.c.d = $(document);
    k.c.t = function (e) {
        return e.originalEvent.touches.length - 1;
    };

    /**
     * Kontrol Object
     *
     * Definition of an abstract UI control
     *
     * Each concrete component must call this one.
     * <code>
     * k.o.call(this);
     * </code>
     */
    k.o = function () {
        var s = this;

        this.o = null; // array of options
        this.$ = null; // jQuery wrapped element
        this.i = null; // mixed HTMLInputElement or array of HTMLInputElement
        this.g = null; // deprecated 2D graphics context for 'pre-rendering'
        this.v = null; // value ; mixed array or integer
        this.cv = null; // change value ; not commited value
        this.x = 0; // canvas x position
        this.y = 0; // canvas y position
        this.w = 0; // canvas width
        this.h = 0; // canvas height
        this.$c = null; // jQuery canvas element
        this.c = null; // rendered canvas context
        this.t = 0; // touches index
        this.isInit = false;
        this.fgColor = null; // main color
        this.pColor = null; // previous color
        this.dH = null; // draw hook
        this.cH = null; // change hook
        this.eH = null; // cancel hook
        this.rH = null; // release hook
        this.scale = 1; // scale factor
        this.relative = false;
        this.relativeWidth = false;
        this.relativeHeight = false;
        this.$div = null; // component div

        this.run = function () {
            var cf = function (e, conf) {
                var k;
                for (k in conf) {
                    s.o[k] = conf[k];
                }
                s._carve().init();
                s._configure()
                 ._draw();
            };

            if (this.$.data('kontroled')) return;
            this.$.data('kontroled', true);

            this.extend();
            this.o = $.extend({
                    // Config
                    min: this.$.data('min') !== undefined ? this.$.data('min') : 0,
                    max: this.$.data('max') !== undefined ? this.$.data('max') : 100,
                    stopper: true,
                    readOnly: this.$.data('readonly') || (this.$.attr('readonly') === 'readonly'),

                    // UI
                    cursor: this.$.data('cursor') === true && 30
                            || this.$.data('cursor') || 0,
                    thickness: this.$.data('thickness')
                               && Math.max(Math.min(this.$.data('thickness'), 1), 0.01)
                               || 0.35,
                    lineCap: this.$.data('linecap') || 'butt',
                    width: this.$.data('width') || 200,
                    height: this.$.data('height') || 200,
                    displayInput: this.$.data('displayinput') == null || this.$.data('displayinput'),
                    displayPrevious: this.$.data('displayprevious'),
                    fgColor: this.$.data('fgcolor') || '#87CEEB',
                    inputColor: this.$.data('inputcolor'),
                    font: this.$.data('font') || 'Arial',
                    fontWeight: this.$.data('font-weight') || 'bold',
                    inline: false,
                    step: this.$.data('step') || 1,
                    rotation: this.$.data('rotation'),

                    // Hooks
                    draw: null, // function () {}
                    change: null, // function (value) {}
                    cancel: null, // function () {}
                    release: null, // function (value) {}

                    // Output formatting, allows to add unit: %, ms ...
                    format: function(v) {
                        return v;
                    },
                    parse: function (v) {
                        return parseFloat(v);
                    }
                }, this.o
            );

            // finalize options
            this.o.flip = this.o.rotation === 'anticlockwise' || this.o.rotation === 'acw';
            if (!this.o.inputColor) {
                this.o.inputColor = this.o.fgColor;
            }

            // routing value
            if (this.$.is('fieldset')) {

                // fieldset = array of integer
                this.v = {};
                this.i = this.$.find('input');
                this.i.each(function(k) {
                    var $this = $(this);
                    s.i[k] = $this;
                    s.v[k] = s.o.parse($this.val());

                    $this.bind(
                        'change blur',
                        function () {
                            var val = {};
                            val[k] = $this.val();
                            s.val(val);
                        }
                    );
                });
                this.$.find('legend').remove();
            } else {

                // input = integer
                this.i = this.$;
                this.v = this.o.parse(this.$.val());
                this.v === '' && (this.v = this.o.min);
                this.$.bind(
                    'change blur',
                    function () {
                        s.val(s._validate(s.o.parse(s.$.val())));
                    }
                );

            }

            !this.o.displayInput && this.$.hide();

            // adds needed DOM elements (canvas, div)
            this.$c = $(document.createElement('canvas')).attr({
                width: this.o.width,
                height: this.o.height
            });

            // wraps all elements in a div
            // add to DOM before Canvas init is triggered
            this.$div = $('<div style="'
                + (this.o.inline ? 'display:inline;' : '')
                + 'width:' + this.o.width + 'px;height:' + this.o.height + 'px;'
                + '"></div>');

            this.$.wrap(this.$div).before(this.$c);
            this.$div = this.$.parent();

            if (typeof G_vmlCanvasManager !== 'undefined') {
                G_vmlCanvasManager.initElement(this.$c[0]);
            }

            this.c = this.$c[0].getContext ? this.$c[0].getContext('2d') : null;

            if (!this.c) {
                throw {
                    name:        "CanvasNotSupportedException",
                    message:     "Canvas not supported. Please use excanvas on IE8.0.",
                    toString:    function(){return this.name + ": " + this.message}
                }
            }

            // hdpi support
            this.scale = (window.devicePixelRatio || 1) / (
                            this.c.webkitBackingStorePixelRatio ||
                            this.c.mozBackingStorePixelRatio ||
                            this.c.msBackingStorePixelRatio ||
                            this.c.oBackingStorePixelRatio ||
                            this.c.backingStorePixelRatio || 1
                         );

            // detects relative width / height
            this.relativeWidth =  this.o.width % 1 !== 0
                                  && this.o.width.indexOf('%');
            this.relativeHeight = this.o.height % 1 !== 0
                                  && this.o.height.indexOf('%');
            this.relative = this.relativeWidth || this.relativeHeight;

            // computes size and carves the component
            this._carve();

            // prepares props for transaction
            if (this.v instanceof Object) {
                this.cv = {};
                this.copy(this.v, this.cv);
            } else {
                this.cv = this.v;
            }

            // binds configure event
            this.$
                .bind("configure", cf)
                .parent()
                .bind("configure", cf);

            // finalize init
            this._listen()
                ._configure()
                ._xy()
                .init();

            this.isInit = true;

            this.$.val(this.o.format(this.v));
            this._draw();

            return this;
        };

        this._carve = function() {
            if (this.relative) {
                var w = this.relativeWidth ?
                        this.$div.parent().width() *
                        parseInt(this.o.width) / 100
                        : this.$div.parent().width(),
                    h = this.relativeHeight ?
                        this.$div.parent().height() *
                        parseInt(this.o.height) / 100
                        : this.$div.parent().height();

                // apply relative
                this.w = this.h = Math.min(w, h);
            } else {
                this.w = this.o.width;
                this.h = this.o.height;
            }

            // finalize div
            this.$div.css({
                'width': this.w + 'px',
                'height': this.h + 'px'
            });

            // finalize canvas with computed width
            this.$c.attr({
                width: this.w,
                height: this.h
            });

            // scaling
            if (this.scale !== 1) {
                this.$c[0].width = this.$c[0].width * this.scale;
                this.$c[0].height = this.$c[0].height * this.scale;
                this.$c.width(this.w);
                this.$c.height(this.h);
            }

            return this;
        }

        this._draw = function () {

            // canvas pre-rendering
            var d = true;

            s.g = s.c;

            s.clear();

            s.dH && (d = s.dH());

            d !== false && s.draw();
        };

        this._touch = function (e) {
            var touchMove = function (e) {
                var v = s.xy2val(
                            e.originalEvent.touches[s.t].pageX,
                            e.originalEvent.touches[s.t].pageY
                        );

                if (v == s.cv) return;

                if (s.cH && s.cH(v) === false) return;

                s.change(s._validate(v));
                s._draw();
            };

            // get touches index
            this.t = k.c.t(e);

            // First touch
            touchMove(e);

            // Touch events listeners
            k.c.d
                .bind("touchmove.k", touchMove)
                .bind(
                    "touchend.k",
                    function () {
                        k.c.d.unbind('touchmove.k touchend.k');
                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._mouse = function (e) {
            var mouseMove = function (e) {
                var v = s.xy2val(e.pageX, e.pageY);

                if (v == s.cv) return;

                if (s.cH && (s.cH(v) === false)) return;

                s.change(s._validate(v));
                s._draw();
            };

            // First click
            mouseMove(e);

            // Mouse events listeners
            k.c.d
                .bind("mousemove.k", mouseMove)
                .bind(
                    // Escape key cancel current change
                    "keyup.k",
                    function (e) {
                        if (e.keyCode === 27) {
                            k.c.d.unbind("mouseup.k mousemove.k keyup.k");

                            if (s.eH && s.eH() === false)
                                return;

                            s.cancel();
                        }
                    }
                )
                .bind(
                    "mouseup.k",
                    function (e) {
                        k.c.d.unbind('mousemove.k mouseup.k keyup.k');
                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._xy = function () {
            var o = this.$c.offset();
            this.x = o.left;
            this.y = o.top;

            return this;
        };

        this._listen = function () {
            if (!this.o.readOnly) {
                this.$c
                    .bind(
                        "mousedown",
                        function (e) {
                            e.preventDefault();
                            s._xy()._mouse(e);
                        }
                    )
                    .bind(
                        "touchstart",
                        function (e) {
                            e.preventDefault();
                            s._xy()._touch(e);
                        }
                    );

                this.listen();
            } else {
                this.$.attr('readonly', 'readonly');
            }

            if (this.relative) {
                $(window).resize(function() {
                    s._carve().init();
                    s._draw();
                });
            }

            return this;
        };

        this._configure = function () {

            // Hooks
            if (this.o.draw) this.dH = this.o.draw;
            if (this.o.change) this.cH = this.o.change;
            if (this.o.cancel) this.eH = this.o.cancel;
            if (this.o.release) this.rH = this.o.release;

            if (this.o.displayPrevious) {
                this.pColor = this.h2rgba(this.o.fgColor, "0.4");
                this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
            } else {
                this.fgColor = this.o.fgColor;
            }

            return this;
        };

        this._clear = function () {
            this.$c[0].width = this.$c[0].width;
        };

        this._validate = function (v) {
            return (~~ (((v < 0) ? -0.5 : 0.5) + (v/this.o.step))) * this.o.step;
        };

        // Abstract methods
        this.listen = function () {}; // on start, one time
        this.extend = function () {}; // each time configure triggered
        this.init = function () {}; // each time configure triggered
        this.change = function (v) {}; // on change
        this.val = function (v) {}; // on release
        this.xy2val = function (x, y) {}; //
        this.draw = function () {}; // on change / on release
        this.clear = function () { this._clear(); };

        // Utils
        this.h2rgba = function (h, a) {
            var rgb;
            h = h.substring(1,7)
            rgb = [
                parseInt(h.substring(0,2), 16),
                parseInt(h.substring(2,4), 16),
                parseInt(h.substring(4,6), 16)
            ];

            return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
        };

        this.copy = function (f, t) {
            for (var i in f) {
                t[i] = f[i];
            }
        };
    };


    /**
     * k.Dial
     */
    k.Dial = function () {
        k.o.call(this);

        this.startAngle = null;
        this.xy = null;
        this.radius = null;
        this.lineWidth = null;
        this.cursorExt = null;
        this.w2 = null;
        this.PI2 = 2*Math.PI;

        this.extend = function () {
            this.o = $.extend({
                bgColor: this.$.data('bgcolor') || '#EEEEEE',
                angleOffset: this.$.data('angleoffset') || 0,
                angleArc: this.$.data('anglearc') || 360,
                inline: true
            }, this.o);
        };

        this.val = function (v, triggerRelease) {
            if (null != v) {

                // reverse format
                v = this.o.parse(v);

                if (triggerRelease !== false
                    && v != this.v
                    && this.rH
                    && this.rH(v) === false) { return; }

                this.cv = this.o.stopper ? max(min(v, this.o.max), this.o.min) : v;
                this.v = this.cv;
                this.$.val(this.o.format(this.v));
                this._draw();
            } else {
                return this.v;
            }
        };

        this.xy2val = function (x, y) {
            var a, ret;

            a = Math.atan2(
                        x - (this.x + this.w2),
                        - (y - this.y - this.w2)
                    ) - this.angleOffset;

            if (this.o.flip) {
                a = this.angleArc - a - this.PI2;
            }

            if (this.angleArc != this.PI2 && (a < 0) && (a > -0.5)) {

                // if isset angleArc option, set to min if .5 under min
                a = 0;
            } else if (a < 0) {
                a += this.PI2;
            }

            ret = ~~ (0.5 + (a * (this.o.max - this.o.min) / this.angleArc)) + this.o.min;

            this.o.stopper && (ret = max(min(ret, this.o.max), this.o.min));

            return ret;
        };

        this.listen = function () {

            // bind MouseWheel
            var s = this, mwTimerStop,
                mwTimerRelease,
                mw = function (e) {
                    e.preventDefault();

                    var ori = e.originalEvent,
                        deltaX = ori.detail || ori.wheelDeltaX,
                        deltaY = ori.detail || ori.wheelDeltaY,
                        v = s._validate(s.o.parse(s.$.val()))
                            + (
                                deltaX > 0 || deltaY > 0
                                ? s.o.step
                                : deltaX < 0 || deltaY < 0 ? -s.o.step : 0
                              );

                    v = max(min(v, s.o.max), s.o.min);

                    s.val(v, false);

                    if (s.rH) {
                        // Handle mousewheel stop
                        clearTimeout(mwTimerStop);
                        mwTimerStop = setTimeout(function () {
                            s.rH(v);
                            mwTimerStop = null;
                        }, 100);

                        // Handle mousewheel releases
                        if (!mwTimerRelease) {
                            mwTimerRelease = setTimeout(function () {
                                if (mwTimerStop)
                                    s.rH(v);
                                mwTimerRelease = null;
                            }, 200);
                        }
                    }
                },
                kval,
                to,
                m = 1,
                kv = {
                    37: -s.o.step,
                    38: s.o.step,
                    39: s.o.step,
                    40: -s.o.step
                };

            this.$
                .bind(
                    "keydown",
                    function (e) {
                        var kc = e.keyCode;

                        // numpad support
                        if (kc >= 96 && kc <= 105) {
                            kc = e.keyCode = kc - 48;
                        }

                        kval = parseInt(String.fromCharCode(kc));

                        if (isNaN(kval)) {
                            (kc !== 13)                     // enter
                            && kc !== 8                     // bs
                            && kc !== 9                     // tab
                            && kc !== 189                   // -
                            && (kc !== 190
                                || s.$.val().match(/\./))   // . allowed once
                            && e.preventDefault();

                            // arrows
                            if ($.inArray(kc,[37,38,39,40]) > -1) {
                                e.preventDefault();

                                var v = s.o.parse(s.$.val()) + kv[kc] * m;
                                s.o.stopper && (v = max(min(v, s.o.max), s.o.min));

                                s.change(v);
                                s._draw();

                                // long time keydown speed-up
                                to = window.setTimeout(function () {
                                    m *= 2;
                                }, 30);
                            }
                        }
                    }
                )
                .bind(
                    "keyup",
                    function (e) {
                        if (isNaN(kval)) {
                            if (to) {
                                window.clearTimeout(to);
                                to = null;
                                m = 1;
                                s.val(s.$.val());
                            }
                        } else {
                            // kval postcond
                            (s.$.val() > s.o.max && s.$.val(s.o.max))
                            || (s.$.val() < s.o.min && s.$.val(s.o.min));
                        }
                    }
                );

            this.$c.bind("mousewheel DOMMouseScroll", mw);
            this.$.bind("mousewheel DOMMouseScroll", mw)
        };

        this.init = function () {
            if (this.v < this.o.min
                || this.v > this.o.max) { this.v = this.o.min; }

            this.$.val(this.v);
            this.w2 = this.w / 2;
            this.cursorExt = this.o.cursor / 100;
            this.xy = this.w2 * this.scale;
            this.lineWidth = this.xy * this.o.thickness;
            this.lineCap = this.o.lineCap;
            this.radius = this.xy - this.lineWidth / 2;

            this.o.angleOffset
            && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);

            this.o.angleArc
            && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);

            // deg to rad
            this.angleOffset = this.o.angleOffset * Math.PI / 180;
            this.angleArc = this.o.angleArc * Math.PI / 180;

            // compute start and end angles
            this.startAngle = 1.5 * Math.PI + this.angleOffset;
            this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;

            var s = max(
                String(Math.abs(this.o.max)).length,
                String(Math.abs(this.o.min)).length,
                2
            ) + 2;

            this.o.displayInput
                && this.i.css({
                        'width' : ((this.w / 2 + 4) >> 0) + 'px',
                        'height' : ((this.w / 3) >> 0) + 'px',
                        'position' : 'absolute',
                        'vertical-align' : 'middle',
                        'margin-top' : ((this.w / 3) >> 0) + 'px',
                        'margin-left' : '-' + ((this.w * 3 / 4 + 2) >> 0) + 'px',
                        'border' : 0,
                        'background' : 'none',
                        'font' : this.o.fontWeight + ' ' + ((this.w / s) >> 0) + 'px ' + this.o.font,
                        'text-align' : 'center',
                        'color' : this.o.inputColor || this.o.fgColor,
                        'padding' : '0px',
                        '-webkit-appearance': 'none'
                        }) || this.i.css({
                            'width': '0px',
                            'visibility': 'hidden'
                        });
        };

        this.change = function (v) {
            this.cv = v;
            this.$.val(this.o.format(v));
        };

        this.angle = function (v) {
            return (v - this.o.min) * this.angleArc / (this.o.max - this.o.min);
        };

        this.arc = function (v) {
          var sa, ea;
          v = this.angle(v);
          if (this.o.flip) {
              sa = this.endAngle + 0.00001;
              ea = sa - v - 0.00001;
          } else {
              sa = this.startAngle - 0.00001;
              ea = sa + v + 0.00001;
          }
          this.o.cursor
              && (sa = ea - this.cursorExt)
              && (ea = ea + this.cursorExt);

          return {
              s: sa,
              e: ea,
              d: this.o.flip && !this.o.cursor
          };
        };

        this.draw = function () {
            var c = this.g,                 // context
                a = this.arc(this.cv),      // Arc
                pa,                         // Previous arc
                r = 1;

            c.lineWidth = this.lineWidth;
            c.lineCap = this.lineCap;

            if (this.o.bgColor !== "none") {
                c.beginPath();
                    c.strokeStyle = this.o.bgColor;
                    c.arc(this.xy, this.xy, this.radius, this.endAngle - 0.00001, this.startAngle + 0.00001, true);
                c.stroke();
            }

            if (this.o.displayPrevious) {
                pa = this.arc(this.v);
                c.beginPath();
                c.strokeStyle = this.pColor;
                c.arc(this.xy, this.xy, this.radius, pa.s, pa.e, pa.d);
                c.stroke();
                r = this.cv == this.v;
            }

            c.beginPath();
            c.strokeStyle = r ? this.o.fgColor : this.fgColor ;
            c.arc(this.xy, this.xy, this.radius, a.s, a.e, a.d);
            c.stroke();
        };

        this.cancel = function () {
            this.val(this.v);
        };
    };

    $.fn.dial = $.fn.knob = function (o) {
        return this.each(
            function () {
                var d = new k.Dial();
                d.o = o;
                d.$ = $(this);
                d.run();
            }
        ).parent();
    };

}));

/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
var Handlebars=function(){var a=function(){"use strict";function a(a){this.string=a}var b;return a.prototype.toString=function(){return""+this.string},b=a}(),b=function(a){"use strict";function b(a){return h[a]||"&amp;"}function c(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])}function d(a){return a instanceof g?a.toString():a||0===a?(a=""+a,j.test(a)?a.replace(i,b):a):""}function e(a){return a||0===a?m(a)&&0===a.length?!0:!1:!0}var f={},g=a,h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},i=/[&<>"'`]/g,j=/[&<>"'`]/;f.extend=c;var k=Object.prototype.toString;f.toString=k;var l=function(a){return"function"==typeof a};l(/x/)&&(l=function(a){return"function"==typeof a&&"[object Function]"===k.call(a)});var l;f.isFunction=l;var m=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===k.call(a):!1};return f.isArray=m,f.escapeExpression=d,f.isEmpty=e,f}(a),c=function(){"use strict";function a(a,b){var d;b&&b.firstLine&&(d=b.firstLine,a+=" - "+d+":"+b.firstColumn);for(var e=Error.prototype.constructor.call(this,a),f=0;f<c.length;f++)this[c[f]]=e[c[f]];d&&(this.lineNumber=d,this.column=b.firstColumn)}var b,c=["description","fileName","lineNumber","message","name","number","stack"];return a.prototype=new Error,b=a}(),d=function(a,b){"use strict";function c(a,b){this.helpers=a||{},this.partials=b||{},d(this)}function d(a){a.registerHelper("helperMissing",function(a){if(2===arguments.length)return void 0;throw new h("Missing helper: '"+a+"'")}),a.registerHelper("blockHelperMissing",function(b,c){var d=c.inverse||function(){},e=c.fn;return m(b)&&(b=b.call(this)),b===!0?e(this):b===!1||null==b?d(this):l(b)?b.length>0?a.helpers.each(b,c):d(this):e(b)}),a.registerHelper("each",function(a,b){var c,d=b.fn,e=b.inverse,f=0,g="";if(m(a)&&(a=a.call(this)),b.data&&(c=q(b.data)),a&&"object"==typeof a)if(l(a))for(var h=a.length;h>f;f++)c&&(c.index=f,c.first=0===f,c.last=f===a.length-1),g+=d(a[f],{data:c});else for(var i in a)a.hasOwnProperty(i)&&(c&&(c.key=i,c.index=f,c.first=0===f),g+=d(a[i],{data:c}),f++);return 0===f&&(g=e(this)),g}),a.registerHelper("if",function(a,b){return m(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||g.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})}),a.registerHelper("with",function(a,b){return m(a)&&(a=a.call(this)),g.isEmpty(a)?void 0:b.fn(a)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)})}function e(a,b){p.log(a,b)}var f={},g=a,h=b,i="1.3.0";f.VERSION=i;var j=4;f.COMPILER_REVISION=j;var k={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};f.REVISION_CHANGES=k;var l=g.isArray,m=g.isFunction,n=g.toString,o="[object Object]";f.HandlebarsEnvironment=c,c.prototype={constructor:c,logger:p,log:e,registerHelper:function(a,b,c){if(n.call(a)===o){if(c||b)throw new h("Arg not supported with multiple helpers");g.extend(this.helpers,a)}else c&&(b.not=c),this.helpers[a]=b},registerPartial:function(a,b){n.call(a)===o?g.extend(this.partials,a):this.partials[a]=b}};var p={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(a,b){if(p.level<=a){var c=p.methodMap[a];"undefined"!=typeof console&&console[c]&&console[c].call(console,b)}}};f.logger=p,f.log=e;var q=function(a){var b={};return g.extend(b,a),b};return f.createFrame=q,f}(b,c),e=function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=m;if(b!==c){if(c>b){var d=n[c],e=n[b];throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){if(!b)throw new l("No environment passed to template");var c=function(a,c,d,e,f,g){var h=b.VM.invokePartial.apply(this,arguments);if(null!=h)return h;if(b.compile){var i={helpers:e,partials:f,data:g};return f[c]=b.compile(a,{data:void 0!==g},b),f[c](d,i)}throw new l("The partial "+c+" could not be compiled when running in runtime-only mode")},d={escapeExpression:k.escapeExpression,invokePartial:c,programs:[],program:function(a,b,c){var d=this.programs[a];return c?d=g(a,b,c):d||(d=this.programs[a]=g(a,b)),d},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c={},k.extend(c,b),k.extend(c,a)),c},programWithDepth:b.VM.programWithDepth,noop:b.VM.noop,compilerInfo:null};return function(c,e){e=e||{};var f,g,h=e.partial?e:b;e.partial||(f=e.helpers,g=e.partials);var i=a.call(d,h,c,f,g,e.data);return e.partial||b.VM.checkRevision(d.compilerInfo),i}}function f(a,b,c){var d=Array.prototype.slice.call(arguments,3),e=function(a,e){return e=e||{},b.apply(this,[a,e.data||c].concat(d))};return e.program=a,e.depth=d.length,e}function g(a,b,c){var d=function(a,d){return d=d||{},b(a,d.data||c)};return d.program=a,d.depth=0,d}function h(a,b,c,d,e,f){var g={partial:!0,helpers:d,partials:e,data:f};if(void 0===a)throw new l("The partial "+b+" could not be found");return a instanceof Function?a(c,g):void 0}function i(){return""}var j={},k=a,l=b,m=c.COMPILER_REVISION,n=c.REVISION_CHANGES;return j.checkRevision=d,j.template=e,j.programWithDepth=f,j.program=g,j.invokePartial=h,j.noop=i,j}(b,c,d),f=function(a,b,c,d,e){"use strict";var f,g=a,h=b,i=c,j=d,k=e,l=function(){var a=new g.HandlebarsEnvironment;return j.extend(a,g),a.SafeString=h,a.Exception=i,a.Utils=j,a.VM=k,a.template=function(b){return k.template(b,a)},a},m=l();return m.create=l,f=m}(d,a,c,b,e),g=function(a){"use strict";function b(a){a=a||{},this.firstLine=a.first_line,this.firstColumn=a.first_column,this.lastColumn=a.last_column,this.lastLine=a.last_line}var c,d=a,e={ProgramNode:function(a,c,d,f){var g,h;3===arguments.length?(f=d,d=null):2===arguments.length&&(f=c,c=null),b.call(this,f),this.type="program",this.statements=a,this.strip={},d?(h=d[0],h?(g={first_line:h.firstLine,last_line:h.lastLine,last_column:h.lastColumn,first_column:h.firstColumn},this.inverse=new e.ProgramNode(d,c,g)):this.inverse=new e.ProgramNode(d,c),this.strip.right=c.left):c&&(this.strip.left=c.right)},MustacheNode:function(a,c,d,f,g){if(b.call(this,g),this.type="mustache",this.strip=f,null!=d&&d.charAt){var h=d.charAt(3)||d.charAt(2);this.escaped="{"!==h&&"&"!==h}else this.escaped=!!d;this.sexpr=a instanceof e.SexprNode?a:new e.SexprNode(a,c),this.sexpr.isRoot=!0,this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(a,c,d){b.call(this,d),this.type="sexpr",this.hash=c;var e=this.id=a[0],f=this.params=a.slice(1),g=this.eligibleHelper=e.isSimple;this.isHelper=g&&(f.length||c)},PartialNode:function(a,c,d,e){b.call(this,e),this.type="partial",this.partialName=a,this.context=c,this.strip=d},BlockNode:function(a,c,e,f,g){if(b.call(this,g),a.sexpr.id.original!==f.path.original)throw new d(a.sexpr.id.original+" doesn't match "+f.path.original,this);this.type="block",this.mustache=a,this.program=c,this.inverse=e,this.strip={left:a.strip.left,right:f.strip.right},(c||e).strip.left=a.strip.right,(e||c).strip.right=f.strip.left,e&&!c&&(this.isInverse=!0)},ContentNode:function(a,c){b.call(this,c),this.type="content",this.string=a},HashNode:function(a,c){b.call(this,c),this.type="hash",this.pairs=a},IdNode:function(a,c){b.call(this,c),this.type="ID";for(var e="",f=[],g=0,h=0,i=a.length;i>h;h++){var j=a[h].part;if(e+=(a[h].separator||"")+j,".."===j||"."===j||"this"===j){if(f.length>0)throw new d("Invalid path: "+e,this);".."===j?g++:this.isScoped=!0}else f.push(j)}this.original=e,this.parts=f,this.string=f.join("."),this.depth=g,this.isSimple=1===a.length&&!this.isScoped&&0===g,this.stringModeValue=this.string},PartialNameNode:function(a,c){b.call(this,c),this.type="PARTIAL_NAME",this.name=a.original},DataNode:function(a,c){b.call(this,c),this.type="DATA",this.id=a},StringNode:function(a,c){b.call(this,c),this.type="STRING",this.original=this.string=this.stringModeValue=a},IntegerNode:function(a,c){b.call(this,c),this.type="INTEGER",this.original=this.integer=a,this.stringModeValue=Number(a)},BooleanNode:function(a,c){b.call(this,c),this.type="BOOLEAN",this.bool=a,this.stringModeValue="true"===a},CommentNode:function(a,c){b.call(this,c),this.type="comment",this.comment=a}};return c=e}(c),h=function(){"use strict";var a,b=function(){function a(a,b){return{left:"~"===a.charAt(2),right:"~"===b.charAt(0)||"~"===b.charAt(1)}}function b(){this.yy={}}var c={trace:function(){},yy:{},symbols_:{error:2,root:3,statements:4,EOF:5,program:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,sexpr:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,CLOSE_UNESCAPED:24,OPEN_PARTIAL:25,partialName:26,partial_option0:27,sexpr_repetition0:28,sexpr_option0:29,dataName:30,param:31,STRING:32,INTEGER:33,BOOLEAN:34,OPEN_SEXPR:35,CLOSE_SEXPR:36,hash:37,hash_repetition_plus0:38,hashSegment:39,ID:40,EQUALS:41,DATA:42,pathSegments:43,SEP:44,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",35:"OPEN_SEXPR",36:"CLOSE_SEXPR",40:"ID",41:"EQUALS",42:"DATA",44:"SEP"},productions_:[0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[37,1],[39,3],[26,1],[26,1],[26,1],[30,2],[21,1],[43,3],[43,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[38,1],[38,2]],performAction:function(b,c,d,e,f,g){var h=g.length-1;switch(f){case 1:return new e.ProgramNode(g[h-1],this._$);case 2:return new e.ProgramNode([],this._$);case 3:this.$=new e.ProgramNode([],g[h-1],g[h],this._$);break;case 4:this.$=new e.ProgramNode(g[h-2],g[h-1],g[h],this._$);break;case 5:this.$=new e.ProgramNode(g[h-1],g[h],[],this._$);break;case 6:this.$=new e.ProgramNode(g[h],this._$);break;case 7:this.$=new e.ProgramNode([],this._$);break;case 8:this.$=new e.ProgramNode([],this._$);break;case 9:this.$=[g[h]];break;case 10:g[h-1].push(g[h]),this.$=g[h-1];break;case 11:this.$=new e.BlockNode(g[h-2],g[h-1].inverse,g[h-1],g[h],this._$);break;case 12:this.$=new e.BlockNode(g[h-2],g[h-1],g[h-1].inverse,g[h],this._$);break;case 13:this.$=g[h];break;case 14:this.$=g[h];break;case 15:this.$=new e.ContentNode(g[h],this._$);break;case 16:this.$=new e.CommentNode(g[h],this._$);break;case 17:this.$=new e.MustacheNode(g[h-1],null,g[h-2],a(g[h-2],g[h]),this._$);break;case 18:this.$=new e.MustacheNode(g[h-1],null,g[h-2],a(g[h-2],g[h]),this._$);break;case 19:this.$={path:g[h-1],strip:a(g[h-2],g[h])};break;case 20:this.$=new e.MustacheNode(g[h-1],null,g[h-2],a(g[h-2],g[h]),this._$);break;case 21:this.$=new e.MustacheNode(g[h-1],null,g[h-2],a(g[h-2],g[h]),this._$);break;case 22:this.$=new e.PartialNode(g[h-2],g[h-1],a(g[h-3],g[h]),this._$);break;case 23:this.$=a(g[h-1],g[h]);break;case 24:this.$=new e.SexprNode([g[h-2]].concat(g[h-1]),g[h],this._$);break;case 25:this.$=new e.SexprNode([g[h]],null,this._$);break;case 26:this.$=g[h];break;case 27:this.$=new e.StringNode(g[h],this._$);break;case 28:this.$=new e.IntegerNode(g[h],this._$);break;case 29:this.$=new e.BooleanNode(g[h],this._$);break;case 30:this.$=g[h];break;case 31:g[h-1].isHelper=!0,this.$=g[h-1];break;case 32:this.$=new e.HashNode(g[h],this._$);break;case 33:this.$=[g[h-2],g[h]];break;case 34:this.$=new e.PartialNameNode(g[h],this._$);break;case 35:this.$=new e.PartialNameNode(new e.StringNode(g[h],this._$),this._$);break;case 36:this.$=new e.PartialNameNode(new e.IntegerNode(g[h],this._$));break;case 37:this.$=new e.DataNode(g[h],this._$);break;case 38:this.$=new e.IdNode(g[h],this._$);break;case 39:g[h-2].push({part:g[h],separator:g[h-1]}),this.$=g[h-2];break;case 40:this.$=[{part:g[h]}];break;case 43:this.$=[];break;case 44:g[h-1].push(g[h]);break;case 47:this.$=[g[h]];break;case 48:g[h-1].push(g[h])}},table:[{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:29,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:30,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:31,21:24,30:25,40:[1,28],42:[1,27],43:26},{21:33,26:32,32:[1,34],33:[1,35],40:[1,28],43:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,40:[1,28],42:[1,27],43:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,43],24:[2,43],28:43,32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],40:[2,43],42:[2,43]},{18:[2,25],24:[2,25],36:[2,25]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],40:[2,38],42:[2,38],44:[1,44]},{21:45,40:[1,28],43:26},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],42:[2,40],44:[2,40]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,41],21:50,27:49,40:[1,28],43:26},{18:[2,34],40:[2,34]},{18:[2,35],40:[2,35]},{18:[2,36],40:[2,36]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,40:[1,28],43:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,45],21:56,24:[2,45],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:[1,61],36:[2,45],37:55,38:62,39:63,40:[1,64],42:[1,27],43:26},{40:[1,65]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],40:[2,37],42:[2,37]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,66]},{18:[2,42]},{18:[1,67]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24],36:[2,24]},{18:[2,44],24:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],40:[2,44],42:[2,44]},{18:[2,46],24:[2,46],36:[2,46]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],40:[2,26],42:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],40:[2,27],42:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],40:[2,28],42:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],40:[2,29],42:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],40:[2,30],42:[2,30]},{17:68,21:24,30:25,40:[1,28],42:[1,27],43:26},{18:[2,32],24:[2,32],36:[2,32],39:69,40:[1,70]},{18:[2,47],24:[2,47],36:[2,47],40:[2,47]},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],41:[1,71],42:[2,40],44:[2,40]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],40:[2,39],42:[2,39],44:[2,39]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{36:[1,72]},{18:[2,48],24:[2,48],36:[2,48],40:[2,48]},{41:[1,71]},{21:56,30:60,31:73,32:[1,57],33:[1,58],34:[1,59],35:[1,61],40:[1,28],42:[1,27],43:26},{18:[2,31],24:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],40:[2,31],42:[2,31]},{18:[2,33],24:[2,33],36:[2,33],40:[2,33]}],defaultActions:{3:[2,2],16:[2,1],50:[2,42]},parseError:function(a){throw new Error(a)},parse:function(a){function b(){var a;return a=c.lexer.lex()||1,"number"!=typeof a&&(a=c.symbols_[a]||a),a}var c=this,d=[0],e=[null],f=[],g=this.table,h="",i=0,j=0,k=0;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var l=this.lexer.yylloc;f.push(l);var m=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var n,o,p,q,r,s,t,u,v,w={};;){if(p=d[d.length-1],this.defaultActions[p]?q=this.defaultActions[p]:((null===n||"undefined"==typeof n)&&(n=b()),q=g[p]&&g[p][n]),"undefined"==typeof q||!q.length||!q[0]){var x="";if(!k){v=[];for(s in g[p])this.terminals_[s]&&s>2&&v.push("'"+this.terminals_[s]+"'");x=this.lexer.showPosition?"Parse error on line "+(i+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[n]||n)+"'":"Parse error on line "+(i+1)+": Unexpected "+(1==n?"end of input":"'"+(this.terminals_[n]||n)+"'"),this.parseError(x,{text:this.lexer.match,token:this.terminals_[n]||n,line:this.lexer.yylineno,loc:l,expected:v})}}if(q[0]instanceof Array&&q.length>1)throw new Error("Parse Error: multiple actions possible at state: "+p+", token: "+n);switch(q[0]){case 1:d.push(n),e.push(this.lexer.yytext),f.push(this.lexer.yylloc),d.push(q[1]),n=null,o?(n=o,o=null):(j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,l=this.lexer.yylloc,k>0&&k--);break;case 2:if(t=this.productions_[q[1]][1],w.$=e[e.length-t],w._$={first_line:f[f.length-(t||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(t||1)].first_column,last_column:f[f.length-1].last_column},m&&(w._$.range=[f[f.length-(t||1)].range[0],f[f.length-1].range[1]]),r=this.performAction.call(w,h,j,i,this.yy,q[1],e,f),"undefined"!=typeof r)return r;t&&(d=d.slice(0,-1*t*2),e=e.slice(0,-1*t),f=f.slice(0,-1*t)),d.push(this.productions_[q[1]][0]),e.push(w.$),f.push(w._$),u=g[d[d.length-2]][d[d.length-1]],d.push(u);break;case 3:return!0}}return!0}},d=function(){var a={EOF:1,parseError:function(a,b){if(!this.yy.parser)throw new Error(a);this.yy.parser.parseError(a,b)},setInput:function(a){return this._input=a,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var b=a.match(/(?:\r\n?|\n).*/g);return b?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-b-1),this.offset-=b;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===d.length?this.yylloc.first_column:0)+d[d.length-c.length].length-c[0].length:this.yylloc.first_column-b},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-b]),this},more:function(){return this._more=!0,this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=new Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c,d,e;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),g=0;g<f.length&&(c=this._input.match(this.rules[f[g]]),!c||b&&!(c[0].length>b[0].length)||(b=c,d=g,this.options.flex));g++);return b?(e=b[0].match(/(?:\r\n?|\n).*/g),e&&(this.yylineno+=e.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:e?e[e.length-1].length-e[e.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+b[0].length},this.yytext+=b[0],this.match+=b[0],this.matches=b,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(b[0].length),this.matched+=b[0],a=this.performAction.call(this,this.yy,this,f[d],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a?a:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return"undefined"!=typeof a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)}};return a.options={},a.performAction=function(a,b,c,d){function e(a,c){return b.yytext=b.yytext.substr(a,b.yyleng-c)}switch(c){case 0:if("\\\\"===b.yytext.slice(-2)?(e(0,1),this.begin("mu")):"\\"===b.yytext.slice(-1)?(e(0,1),this.begin("emu")):this.begin("mu"),b.yytext)return 14;break;case 1:return 14;case 2:return this.popState(),14;case 3:return e(0,4),this.popState(),15;case 4:return 35;case 5:return 36;case 6:return 25;case 7:return 16;case 8:return 20;case 9:return 19;case 10:return 19;case 11:return 23;case 12:return 22;case 13:this.popState(),this.begin("com");break;case 14:return e(3,5),this.popState(),15;case 15:return 22;case 16:return 41;case 17:return 40;case 18:return 40;case 19:return 44;case 20:break;case 21:return this.popState(),24;case 22:return this.popState(),18;case 23:return b.yytext=e(1,2).replace(/\\"/g,'"'),32;case 24:return b.yytext=e(1,2).replace(/\\'/g,"'"),32;case 25:return 42;case 26:return 34;case 27:return 34;case 28:return 33;case 29:return 40;case 30:return b.yytext=e(1,2),40;case 31:return"INVALID";case 32:return 5}},a.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],a.conditions={mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[3],inclusive:!1},INITIAL:{rules:[0,1,32],inclusive:!0}},a}();return c.lexer=d,b.prototype=c,c.Parser=b,new b}();return a=b}(),i=function(a,b){"use strict";function c(a){return a.constructor===f.ProgramNode?a:(e.yy=f,e.parse(a))}var d={},e=a,f=b;return d.parser=e,d.parse=c,d}(h,g),j=function(a){"use strict";function b(){}function c(a,b,c){if(null==a||"string"!=typeof a&&a.constructor!==c.AST.ProgramNode)throw new f("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+a);b=b||{},"data"in b||(b.data=!0);var d=c.parse(a),e=(new c.Compiler).compile(d,b);return(new c.JavaScriptCompiler).compile(e,b)}function d(a,b,c){function d(){var d=c.parse(a),e=(new c.Compiler).compile(d,b),f=(new c.JavaScriptCompiler).compile(e,b,void 0,!0);return c.template(f)}if(null==a||"string"!=typeof a&&a.constructor!==c.AST.ProgramNode)throw new f("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+a);b=b||{},"data"in b||(b.data=!0);var e;return function(a,b){return e||(e=d()),e.call(this,a,b)}}var e={},f=a;return e.Compiler=b,b.prototype={compiler:b,disassemble:function(){for(var a,b,c,d=this.opcodes,e=[],f=0,g=d.length;g>f;f++)if(a=d[f],"DECLARE"===a.opcode)e.push("DECLARE "+a.name+"="+a.value);else{b=[];for(var h=0;h<a.args.length;h++)c=a.args[h],"string"==typeof c&&(c='"'+c.replace("\n","\\n")+'"'),b.push(c);e.push(a.opcode+" "+b.join(" "))}return e.join("\n")},equals:function(a){var b=this.opcodes.length;if(a.opcodes.length!==b)return!1;for(var c=0;b>c;c++){var d=this.opcodes[c],e=a.opcodes[c];if(d.opcode!==e.opcode||d.args.length!==e.args.length)return!1;for(var f=0;f<d.args.length;f++)if(d.args[f]!==e.args[f])return!1}if(b=this.children.length,a.children.length!==b)return!1;for(c=0;b>c;c++)if(!this.children[c].equals(a.children[c]))return!1;return!0},guid:0,compile:function(a,b){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=b;var c=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0},c)for(var d in c)this.options.knownHelpers[d]=c[d];return this.accept(a)},accept:function(a){var b,c=a.strip||{};return c.left&&this.opcode("strip"),b=this[a.type](a),c.right&&this.opcode("strip"),b},program:function(a){for(var b=a.statements,c=0,d=b.length;d>c;c++)this.accept(b[c]);return this.isSimple=1===d,this.depths.list=this.depths.list.sort(function(a,b){return a-b}),this},compileProgram:function(a){var b,c=(new this.compiler).compile(a,this.options),d=this.guid++;this.usePartial=this.usePartial||c.usePartial,this.children[d]=c;for(var e=0,f=c.depths.list.length;f>e;e++)b=c.depths.list[e],2>b||this.addDepth(b-1);return d},block:function(a){var b=a.mustache,c=a.program,d=a.inverse;c&&(c=this.compileProgram(c)),d&&(d=this.compileProgram(d));var e=b.sexpr,f=this.classifySexpr(e);"helper"===f?this.helperSexpr(e,c,d):"simple"===f?(this.simpleSexpr(e),this.opcode("pushProgram",c),this.opcode("pushProgram",d),this.opcode("emptyHash"),this.opcode("blockValue")):(this.ambiguousSexpr(e,c,d),this.opcode("pushProgram",c),this.opcode("pushProgram",d),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(a){var b,c,d=a.pairs;this.opcode("pushHash");for(var e=0,f=d.length;f>e;e++)b=d[e],c=b[1],this.options.stringParams?(c.depth&&this.addDepth(c.depth),this.opcode("getContext",c.depth||0),this.opcode("pushStringParam",c.stringModeValue,c.type),"sexpr"===c.type&&this.sexpr(c)):this.accept(c),this.opcode("assignToHash",b[0]);this.opcode("popHash")},partial:function(a){var b=a.partialName;this.usePartial=!0,a.context?this.ID(a.context):this.opcode("push","depth0"),this.opcode("invokePartial",b.name),this.opcode("append")},content:function(a){this.opcode("appendContent",a.string)},mustache:function(a){this.sexpr(a.sexpr),a.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(a,b,c){var d=a.id,e=d.parts[0],f=null!=b||null!=c;this.opcode("getContext",d.depth),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.opcode("invokeAmbiguous",e,f)},simpleSexpr:function(a){var b=a.id;"DATA"===b.type?this.DATA(b):b.parts.length?this.ID(b):(this.addDepth(b.depth),this.opcode("getContext",b.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(a,b,c){var d=this.setupFullMustacheParams(a,b,c),e=a.id.parts[0];if(this.options.knownHelpers[e])this.opcode("invokeKnownHelper",d.length,e);else{if(this.options.knownHelpersOnly)throw new f("You specified knownHelpersOnly, but used the unknown helper "+e,a);this.opcode("invokeHelper",d.length,e,a.isRoot)}},sexpr:function(a){var b=this.classifySexpr(a);"simple"===b?this.simpleSexpr(a):"helper"===b?this.helperSexpr(a):this.ambiguousSexpr(a)},ID:function(a){this.addDepth(a.depth),this.opcode("getContext",a.depth);var b=a.parts[0];b?this.opcode("lookupOnContext",a.parts[0]):this.opcode("pushContext");for(var c=1,d=a.parts.length;d>c;c++)this.opcode("lookup",a.parts[c])},DATA:function(a){if(this.options.data=!0,a.id.isScoped||a.id.depth)throw new f("Scoped data references are not supported: "+a.original,a);this.opcode("lookupData");for(var b=a.id.parts,c=0,d=b.length;d>c;c++)this.opcode("lookup",b[c])},STRING:function(a){this.opcode("pushString",a.string)},INTEGER:function(a){this.opcode("pushLiteral",a.integer)},BOOLEAN:function(a){this.opcode("pushLiteral",a.bool)},comment:function(){},opcode:function(a){this.opcodes.push({opcode:a,args:[].slice.call(arguments,1)})},declare:function(a,b){this.opcodes.push({opcode:"DECLARE",name:a,value:b})},addDepth:function(a){0!==a&&(this.depths[a]||(this.depths[a]=!0,this.depths.list.push(a)))},classifySexpr:function(a){var b=a.isHelper,c=a.eligibleHelper,d=this.options;if(c&&!b){var e=a.id.parts[0];d.knownHelpers[e]?b=!0:d.knownHelpersOnly&&(c=!1)}return b?"helper":c?"ambiguous":"simple"},pushParams:function(a){for(var b,c=a.length;c--;)b=a[c],this.options.stringParams?(b.depth&&this.addDepth(b.depth),this.opcode("getContext",b.depth||0),this.opcode("pushStringParam",b.stringModeValue,b.type),"sexpr"===b.type&&this.sexpr(b)):this[b.type](b)},setupFullMustacheParams:function(a,b,c){var d=a.params;return this.pushParams(d),this.opcode("pushProgram",b),this.opcode("pushProgram",c),a.hash?this.hash(a.hash):this.opcode("emptyHash"),d}},e.precompile=c,e.compile=d,e}(c),k=function(a,b){"use strict";function c(a){this.value=a}function d(){}var e,f=a.COMPILER_REVISION,g=a.REVISION_CHANGES,h=a.log,i=b;d.prototype={nameLookup:function(a,b){var c,e;return 0===a.indexOf("depth")&&(c=!0),e=/^[0-9]+$/.test(b)?a+"["+b+"]":d.isValidJavaScriptVariableName(b)?a+"."+b:a+"['"+b+"']",c?"("+a+" && "+e+")":e},compilerInfo:function(){var a=f,b=g[a];return"this.compilerInfo = ["+a+",'"+b+"'];\n"},appendToBuffer:function(a){return this.environment.isSimple?"return "+a+";":{appendToBuffer:!0,content:a,toString:function(){return"buffer += "+a+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(a,b,c,d){this.environment=a,this.options=b||{},h("debug",this.environment.disassemble()+"\n\n"),this.name=this.environment.name,this.isChild=!!c,this.context=c||{programs:[],environments:[],aliases:{}},this.preamble(),this.stackSlot=0,this.stackVars=[],this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(a,b);
var e,f=a.opcodes;this.i=0;for(var g=f.length;this.i<g;this.i++)e=f[this.i],"DECLARE"===e.opcode?this[e.name]=e.value:this[e.opcode].apply(this,e.args),e.opcode!==this.stripNext&&(this.stripNext=!1);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new i("Compile completed with content left on stack");return this.createFunctionContext(d)},preamble:function(){var a=[];if(this.isChild)a.push("");else{var b=this.namespace,c="helpers = this.merge(helpers, "+b+".helpers);";this.environment.usePartial&&(c=c+" partials = this.merge(partials, "+b+".partials);"),this.options.data&&(c+=" data = data || {};"),a.push(c)}this.environment.isSimple?a.push(""):a.push(", buffer = "+this.initializeBuffer()),this.lastContext=0,this.source=a},createFunctionContext:function(a){var b=this.stackVars.concat(this.registers.list);if(b.length>0&&(this.source[1]=this.source[1]+", "+b.join(", ")),!this.isChild)for(var c in this.context.aliases)this.context.aliases.hasOwnProperty(c)&&(this.source[1]=this.source[1]+", "+c+"="+this.context.aliases[c]);this.source[1]&&(this.source[1]="var "+this.source[1].substring(2)+";"),this.isChild||(this.source[1]+="\n"+this.context.programs.join("\n")+"\n"),this.environment.isSimple||this.pushSource("return buffer;");for(var d=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"],e=0,f=this.environment.depths.list.length;f>e;e++)d.push("depth"+this.environment.depths.list[e]);var g=this.mergeSource();if(this.isChild||(g=this.compilerInfo()+g),a)return d.push(g),Function.apply(this,d);var i="function "+(this.name||"")+"("+d.join(",")+") {\n  "+g+"}";return h("debug",i+"\n\n"),i},mergeSource:function(){for(var a,b="",c=0,d=this.source.length;d>c;c++){var e=this.source[c];e.appendToBuffer?a=a?a+"\n    + "+e.content:e.content:(a&&(b+="buffer += "+a+";\n  ",a=void 0),b+=e+"\n  ")}return b},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var a=["depth0"];this.setupParams(0,a),this.replaceStack(function(b){return a.splice(1,0,b),"blockHelperMissing.call("+a.join(", ")+")"})},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var a=["depth0"];this.setupParams(0,a);var b=this.topStack();a.splice(1,0,b),this.pushSource("if (!"+this.lastHelper+") { "+b+" = blockHelperMissing.call("+a.join(", ")+"); }")},appendContent:function(a){this.pendingContent&&(a=this.pendingContent+a),this.stripNext&&(a=a.replace(/^\s+/,"")),this.pendingContent=a},strip:function(){this.pendingContent&&(this.pendingContent=this.pendingContent.replace(/\s+$/,"")),this.stripNext="strip"},append:function(){this.flushInline();var a=this.popStack();this.pushSource("if("+a+" || "+a+" === 0) { "+this.appendToBuffer(a)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(a){this.lastContext!==a&&(this.lastContext=a)},lookupOnContext:function(a){this.push(this.nameLookup("depth"+this.lastContext,a,"context"))},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"',this.replaceStack(function(a){return"typeof "+a+" === functionType ? "+a+".apply(depth0) : "+a})},lookup:function(a){this.replaceStack(function(b){return b+" == null || "+b+" === false ? "+b+" : "+this.nameLookup(b,a,"context")})},lookupData:function(){this.pushStackLiteral("data")},pushStringParam:function(a,b){this.pushStackLiteral("depth"+this.lastContext),this.pushString(b),"sexpr"!==b&&("string"==typeof a?this.pushString(a):this.pushStackLiteral(a))},emptyHash:function(){this.pushStackLiteral("{}"),this.options.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[]}},popHash:function(){var a=this.hash;this.hash=this.hashes.pop(),this.options.stringParams&&(this.push("{"+a.contexts.join(",")+"}"),this.push("{"+a.types.join(",")+"}")),this.push("{\n    "+a.values.join(",\n    ")+"\n  }")},pushString:function(a){this.pushStackLiteral(this.quotedString(a))},push:function(a){return this.inlineStack.push(a),a},pushLiteral:function(a){this.pushStackLiteral(a)},pushProgram:function(a){null!=a?this.pushStackLiteral(this.programExpression(a)):this.pushStackLiteral(null)},invokeHelper:function(a,b,c){this.context.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var d=this.lastHelper=this.setupHelper(a,b,!0),e=this.nameLookup("depth"+this.lastContext,b,"context"),f="helper = "+d.name+" || "+e;d.paramsInit&&(f+=","+d.paramsInit),this.push("("+f+",helper ? helper.call("+d.callParams+") : helperMissing.call("+d.helperMissingParams+"))"),c||this.flushInline()},invokeKnownHelper:function(a,b){var c=this.setupHelper(a,b);this.push(c.name+".call("+c.callParams+")")},invokeAmbiguous:function(a,b){this.context.aliases.functionType='"function"',this.useRegister("helper"),this.emptyHash();var c=this.setupHelper(0,a,b),d=this.lastHelper=this.nameLookup("helpers",a,"helper"),e=this.nameLookup("depth"+this.lastContext,a,"context"),f=this.nextStack();c.paramsInit&&this.pushSource(c.paramsInit),this.pushSource("if (helper = "+d+") { "+f+" = helper.call("+c.callParams+"); }"),this.pushSource("else { helper = "+e+"; "+f+" = typeof helper === functionType ? helper.call("+c.callParams+") : helper; }")},invokePartial:function(a){var b=[this.nameLookup("partials",a,"partial"),"'"+a+"'",this.popStack(),"helpers","partials"];this.options.data&&b.push("data"),this.context.aliases.self="this",this.push("self.invokePartial("+b.join(", ")+")")},assignToHash:function(a){var b,c,d=this.popStack();this.options.stringParams&&(c=this.popStack(),b=this.popStack());var e=this.hash;b&&e.contexts.push("'"+a+"': "+b),c&&e.types.push("'"+a+"': "+c),e.values.push("'"+a+"': ("+d+")")},compiler:d,compileChildren:function(a,b){for(var c,d,e=a.children,f=0,g=e.length;g>f;f++){c=e[f],d=new this.compiler;var h=this.matchExistingProgram(c);null==h?(this.context.programs.push(""),h=this.context.programs.length,c.index=h,c.name="program"+h,this.context.programs[h]=d.compile(c,b,this.context),this.context.environments[h]=c):(c.index=h,c.name="program"+h)}},matchExistingProgram:function(a){for(var b=0,c=this.context.environments.length;c>b;b++){var d=this.context.environments[b];if(d&&d.equals(a))return b}},programExpression:function(a){if(this.context.aliases.self="this",null==a)return"self.noop";for(var b,c=this.environment.children[a],d=c.depths.list,e=[c.index,c.name,"data"],f=0,g=d.length;g>f;f++)b=d[f],1===b?e.push("depth0"):e.push("depth"+(b-1));return(0===d.length?"self.program(":"self.programWithDepth(")+e.join(", ")+")"},register:function(a,b){this.useRegister(a),this.pushSource(a+" = "+b+";")},useRegister:function(a){this.registers[a]||(this.registers[a]=!0,this.registers.list.push(a))},pushStackLiteral:function(a){return this.push(new c(a))},pushSource:function(a){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),a&&this.source.push(a)},pushStack:function(a){this.flushInline();var b=this.incrStack();return a&&this.pushSource(b+" = "+a+";"),this.compileStack.push(b),b},replaceStack:function(a){var b,d,e,f="",g=this.isInline();if(g){var h=this.popStack(!0);if(h instanceof c)b=h.value,e=!0;else{d=!this.stackSlot;var i=d?this.incrStack():this.topStackName();f="("+this.push(i)+" = "+h+"),",b=this.topStack()}}else b=this.topStack();var j=a.call(this,b);return g?(e||this.popStack(),d&&this.stackSlot--,this.push("("+f+j+")")):(/^stack/.test(b)||(b=this.nextStack()),this.pushSource(b+" = ("+f+j+");")),b},nextStack:function(){return this.pushStack()},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var a=this.inlineStack;if(a.length){this.inlineStack=[];for(var b=0,d=a.length;d>b;b++){var e=a[b];e instanceof c?this.compileStack.push(e):this.pushStack(e)}}},isInline:function(){return this.inlineStack.length},popStack:function(a){var b=this.isInline(),d=(b?this.inlineStack:this.compileStack).pop();if(!a&&d instanceof c)return d.value;if(!b){if(!this.stackSlot)throw new i("Invalid stack pop");this.stackSlot--}return d},topStack:function(a){var b=this.isInline()?this.inlineStack:this.compileStack,d=b[b.length-1];return!a&&d instanceof c?d.value:d},quotedString:function(a){return'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},setupHelper:function(a,b,c){var d=[],e=this.setupParams(a,d,c),f=this.nameLookup("helpers",b,"helper");return{params:d,paramsInit:e,name:f,callParams:["depth0"].concat(d).join(", "),helperMissingParams:c&&["depth0",this.quotedString(b)].concat(d).join(", ")}},setupOptions:function(a,b){var c,d,e,f=[],g=[],h=[];f.push("hash:"+this.popStack()),this.options.stringParams&&(f.push("hashTypes:"+this.popStack()),f.push("hashContexts:"+this.popStack())),d=this.popStack(),e=this.popStack(),(e||d)&&(e||(this.context.aliases.self="this",e="self.noop"),d||(this.context.aliases.self="this",d="self.noop"),f.push("inverse:"+d),f.push("fn:"+e));for(var i=0;a>i;i++)c=this.popStack(),b.push(c),this.options.stringParams&&(h.push(this.popStack()),g.push(this.popStack()));return this.options.stringParams&&(f.push("contexts:["+g.join(",")+"]"),f.push("types:["+h.join(",")+"]")),this.options.data&&f.push("data:data"),f},setupParams:function(a,b,c){var d="{"+this.setupOptions(a,b).join(",")+"}";return c?(this.useRegister("options"),b.push("options"),"options="+d):(b.push(d),"")}};for(var j="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),k=d.RESERVED_WORDS={},l=0,m=j.length;m>l;l++)k[j[l]]=!0;return d.isValidJavaScriptVariableName=function(a){return!d.RESERVED_WORDS[a]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a)?!0:!1},e=d}(d,c),l=function(a,b,c,d,e){"use strict";var f,g=a,h=b,i=c.parser,j=c.parse,k=d.Compiler,l=d.compile,m=d.precompile,n=e,o=g.create,p=function(){var a=o();return a.compile=function(b,c){return l(b,c,a)},a.precompile=function(b,c){return m(b,c,a)},a.AST=h,a.Compiler=k,a.JavaScriptCompiler=n,a.Parser=i,a.parse=j,a};return g=p(),g.create=p,f=g}(f,g,i,j,k);return l}();
!function(e,t){var i=!0;e&&"undefined"!=typeof e.umd&&(i=e.umd),i&&"object"==typeof exports?module.exports=t(require("jquery"),require("handlebars"),require("bootstrap")):i&&"function"==typeof define&&define.amd?define("alpaca",["jquery","handlebars","bootstrap"],t):e.Alpaca=t(e.jQuery,e.Handlebars,e.Bootstrap)}(this,function($,Handlebars,Bootstrap){return this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-display"]=this.HandlebarsPrecompiled["web-display"]||{},this.HandlebarsPrecompiled["web-display"]["container-array"]=function(e,t,i,a,n){function r(e,t){var a,n,r,s="";return s+="\n\n            ",r={hash:{},inverse:c.noop,fn:c.program(2,o,t),data:t},(n=i.item)?a=n.call(e,r):(n=e&&e.item,a=typeof n===d?n.call(e,r):n),i.item||(a=p.call(e,a,{hash:{},inverse:c.noop,fn:c.program(2,o,t),data:t})),(a||0===a)&&(s+=a),s+="\n\n        "}function o(){var e="";return e}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var s,l="",c=this,d="function",p=i.blockHelperMissing;return l+='<script type="text/x-handlebars-template">\n\n    <div>\n\n        ',s=i.each.call(t,t&&t.items,{hash:{},inverse:c.noop,fn:c.program(1,r,n),data:n}),(s||0===s)&&(l+=s),l+="\n\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-display"]=this.HandlebarsPrecompiled["web-display"]||{},this.HandlebarsPrecompiled["web-display"]["container-object"]=function(e,t,i,a,n){function r(e,t){var a,n,r,s="";return s+="\n\n            ",r={hash:{},inverse:c.noop,fn:c.program(2,o,t),data:t},(n=i.item)?a=n.call(e,r):(n=e&&e.item,a=typeof n===d?n.call(e,r):n),i.item||(a=p.call(e,a,{hash:{},inverse:c.noop,fn:c.program(2,o,t),data:t})),(a||0===a)&&(s+=a),s+="\n\n        "}function o(){var e="";return e}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var s,l="",c=this,d="function",p=i.blockHelperMissing;return l+='<script type="text/x-handlebars-template">\n\n    <div>\n\n        ',s=i.each.call(t,t&&t.items,{hash:{},inverse:c.noop,fn:c.program(1,r,n),data:n}),(s||0===s)&&(l+=s),l+="\n\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-display"]=this.HandlebarsPrecompiled["web-display"]||{},this.HandlebarsPrecompiled["web-display"].container=function(e,t,i,a,n){function r(e,t){var a,n="";return n+='\n        <legend class="',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.labelClass),{hash:{},inverse:g.noop,fn:g.program(2,o,t),data:t}),(a||0===a)&&(n+=a),n+=' alpaca-container-label">',a=e&&e.options,a=null==a||a===!1?a:a.label,a=typeof a===f?a.apply(e):a,(a||0===a)&&(n+=a),n+="</legend>\n        "}function o(e){var t;return m((t=e&&e.options,t=null==t||t===!1?t:t.labelClass,typeof t===f?t.apply(e):t))}function s(e,t){var a,n="";return n+='\n        <p class="alpaca-helper ',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.helperClass),{hash:{},inverse:g.noop,fn:g.program(5,l,t),data:t}),(a||0===a)&&(n+=a),n+='">\n            <i class="alpaca-icon-helper"></i>\n            ',a=e&&e.options,a=null==a||a===!1?a:a.helper,a=typeof a===f?a.apply(e):a,(a||0===a)&&(n+=a),n+="\n        </p>\n        "}function l(e){var t;return m((t=e&&e.options,t=null==t||t===!1?t:t.helperClass,typeof t===f?t.apply(e):t))}function c(){var e="";return e}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var d,p,u,h="",f="function",m=this.escapeExpression,g=this,v=i.blockHelperMissing;return h+='<script type="text/x-handlebars-template">\n\n    <div>\n\n        ',d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.label),{hash:{},inverse:g.noop,fn:g.program(1,r,n),data:n}),(d||0===d)&&(h+=d),h+="\n\n        ",d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.helper),{hash:{},inverse:g.noop,fn:g.program(4,s,n),data:n}),(d||0===d)&&(h+=d),h+="\n\n        ",u={hash:{},inverse:g.noop,fn:g.program(7,c,n),data:n},(p=i.container)?d=p.call(t,u):(p=t&&t.container,d=typeof p===f?p.call(t,u):p),i.container||(d=v.call(t,d,{hash:{},inverse:g.noop,fn:g.program(7,c,n),data:n})),(d||0===d)&&(h+=d),h+="\n\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-display"]=this.HandlebarsPrecompiled["web-display"]||{},this.HandlebarsPrecompiled["web-display"]["control-any"]=function(e,t,i,a,n){this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var r,o,s,l="",c=i.helperMissing;return l+='<script type="text/x-handlebars-template">\n\n    <div>',o=i.str||t&&t.str,s={hash:{},data:n},r=o?o.call(t,t&&t.data,s):c.call(t,"str",t&&t.data,s),(r||0===r)&&(l+=r),l+="</div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-display"]=this.HandlebarsPrecompiled["web-display"]||{},this.HandlebarsPrecompiled["web-display"]["control-checkbox"]=function(e,t,i,a,n){this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var r,o,s,l="",c=i.helperMissing;return l+='<script type="text/x-handlebars-template">\n\n    <div>',o=i.str||t&&t.str,s={hash:{},data:n},r=o?o.call(t,t&&t.data,s):c.call(t,"str",t&&t.data,s),(r||0===r)&&(l+=r),l+="</div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-display"]=this.HandlebarsPrecompiled["web-display"]||{},this.HandlebarsPrecompiled["web-display"]["control-image"]=function(e,t,i,a,n){this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var r,o,s="",l="function",c=this.escapeExpression;return s+='<script type="text/x-handlebars-template">\n\n    <div class="alpaca-image-display">\n        <img id="',(o=i.id)?r=o.call(t,{hash:{},data:n}):(o=t&&t.id,r=typeof o===l?o.call(t,{hash:{},data:n}):o),s+=c(r)+'-image" src="',(o=i.data)?r=o.call(t,{hash:{},data:n}):(o=t&&t.data,r=typeof o===l?o.call(t,{hash:{},data:n}):o),s+=c(r)+'">\n    </div>\n\n</script>'},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-display"]=this.HandlebarsPrecompiled["web-display"]||{},this.HandlebarsPrecompiled["web-display"]["control-radio"]=function(e,t,i,a,n){function r(e,t,a){var n,r,s,l="";return l+="\n            ",r=i.compare||e&&e.compare,s={hash:{},inverse:d.noop,fn:d.program(2,o,t),data:t},n=r?r.call(e,e&&e.value,a&&a.data,s):p.call(e,"compare",e&&e.value,a&&a.data,s),(n||0===n)&&(l+=n),l+="\n        "}function o(e,t){var a,n,r="";return r+="\n                ",(n=i.text)?a=n.call(e,{hash:{},data:t}):(n=e&&e.text,a=typeof n===c?n.call(e,{hash:{},data:t}):n),(a||0===a)&&(r+=a),r+="\n            "}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var s,l="",c="function",d=this,p=i.helperMissing;return l+='<script type="text/x-handlebars-template">\n\n    <div>\n        ',s=i.each.call(t,t&&t.selectOptions,{hash:{},inverse:d.noop,fn:d.programWithDepth(1,r,n,t),data:n}),(s||0===s)&&(l+=s),l+="\n    </div>\n\n</script>\n"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-display"]=this.HandlebarsPrecompiled["web-display"]||{},this.HandlebarsPrecompiled["web-display"]["control-select"]=function(e,t,i,a,n){function r(e,t,a){var n,r,s,l="";return l+="\n            ",r=i.compare||e&&e.compare,s={hash:{},inverse:d.noop,fn:d.program(2,o,t),data:t},n=r?r.call(e,e&&e.value,a&&a.data,s):p.call(e,"compare",e&&e.value,a&&a.data,s),(n||0===n)&&(l+=n),l+="\n        "}function o(e,t){var a,n,r="";return r+="\n                ",(n=i.text)?a=n.call(e,{hash:{},data:t}):(n=e&&e.text,a=typeof n===c?n.call(e,{hash:{},data:t}):n),(a||0===a)&&(r+=a),r+="\n            "}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var s,l="",c="function",d=this,p=i.helperMissing;return l+='<script type="text/x-handlebars-template">\n\n    <div>\n        ',s=i.each.call(t,t&&t.selectOptions,{hash:{},inverse:d.noop,fn:d.programWithDepth(1,r,n,t),data:n}),(s||0===s)&&(l+=s),l+="\n    </div>\n\n</script>\n"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-display"]=this.HandlebarsPrecompiled["web-display"]||{},this.HandlebarsPrecompiled["web-display"]["control-text"]=function(e,t,i,a,n){this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var r,o,s="",l="function";return s+='<script type="text/x-handlebars-template">\n\n    <div>',(o=i.data)?r=o.call(t,{hash:{},data:n}):(o=t&&t.data,r=typeof o===l?o.call(t,{hash:{},data:n}):o),(r||0===r)&&(s+=r),s+="</div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-display"]=this.HandlebarsPrecompiled["web-display"]||{},this.HandlebarsPrecompiled["web-display"]["control-textarea"]=function(e,t,i,a,n){this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var r,o,s="",l="function";return s+='<script type="text/x-handlebars-template">\n\n    <p>\n        ',(o=i.data)?r=o.call(t,{hash:{},data:n}):(o=t&&t.data,r=typeof o===l?o.call(t,{hash:{},data:n}):o),(r||0===r)&&(s+=r),s+="\n    </p>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-display"]=this.HandlebarsPrecompiled["web-display"]||{},this.HandlebarsPrecompiled["web-display"]["control-url"]=function(e,t,i,a,n){function r(e){var t,i="";return i+='target="'+f((t=e&&e.options,t=null==t||t===!1?t:t.anchorTarget,typeof t===h?t.apply(e):t))+'"'}function o(e){var t;return f((t=e&&e.options,t=null==t||t===!1?t:t.anchorTitle,typeof t===h?t.apply(e):t))}function s(e,t){var a,n;return(n=i.data)?a=n.call(e,{hash:{},data:t}):(n=e&&e.data,a=typeof n===h?n.call(e,{hash:{},data:t}):n),f(a)}function l(e){var t,i="";return i+="\n            "+f((t=e&&e.options,t=null==t||t===!1?t:t.anchorTitle,typeof t===h?t.apply(e):t))+"\n        "}function c(e,t){var a,n,r="";return r+="\n            ",(n=i.data)?a=n.call(e,{hash:{},data:t}):(n=e&&e.data,a=typeof n===h?n.call(e,{hash:{},data:t}):n),r+=f(a)+"\n        "}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var d,p,u="",h="function",f=this.escapeExpression,m=this;return u+='<script type="text/x-handlebars-template">\n\n    <a href="',(p=i.data)?d=p.call(t,{hash:{},data:n}):(p=t&&t.data,d=typeof p===h?p.call(t,{hash:{},data:n}):p),u+=f(d)+'" ',d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.anchorTarget),{hash:{},inverse:m.noop,fn:m.program(1,r,n),data:n}),(d||0===d)&&(u+=d),u+=' title="',d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.anchorTitle),{hash:{},inverse:m.program(5,s,n),fn:m.program(3,o,n),data:n}),(d||0===d)&&(u+=d),u+='">\n        ',d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.anchorTitle),{hash:{},inverse:m.program(9,c,n),fn:m.program(7,l,n),data:n}),(d||0===d)&&(u+=d),u+="\n    </a>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-display"]=this.HandlebarsPrecompiled["web-display"]||{},this.HandlebarsPrecompiled["web-display"].control=function(e,t,i,a,n){function r(e,t){var a,n,r="";return r+='\n        <label class="',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.labelClass),{hash:{},inverse:g.noop,fn:g.program(2,o,t),data:t}),(a||0===a)&&(r+=a),r+=' alpaca-control-label" for="',(n=i.id)?a=n.call(e,{hash:{},data:t}):(n=e&&e.id,a=typeof n===f?n.call(e,{hash:{},data:t}):n),r+=m(a)+'">',a=e&&e.options,a=null==a||a===!1?a:a.label,a=typeof a===f?a.apply(e):a,(a||0===a)&&(r+=a),r+="</label>\n        "}function o(e){var t;return m((t=e&&e.options,t=null==t||t===!1?t:t.labelClass,typeof t===f?t.apply(e):t))}function s(){var e="";return e}function l(e,t){var a,n="";return n+='\n        <p class="',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.helperClass),{hash:{},inverse:g.noop,fn:g.program(7,c,t),data:t}),(a||0===a)&&(n+=a),n+='">\n            <i class="info-sign"></i>\n            ',a=e&&e.options,a=null==a||a===!1?a:a.helper,a=typeof a===f?a.apply(e):a,(a||0===a)&&(n+=a),n+="\n        </p>\n        "}function c(e){var t;return m((t=e&&e.options,t=null==t||t===!1?t:t.helperClass,typeof t===f?t.apply(e):t))}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var d,p,u,h="",f="function",m=this.escapeExpression,g=this,v=i.blockHelperMissing;return h+='<script type="text/x-handlebars-template">\n\n    <div>\n\n        ',d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.label),{hash:{},inverse:g.noop,fn:g.program(1,r,n),data:n}),(d||0===d)&&(h+=d),h+="\n\n        ",u={hash:{},inverse:g.noop,fn:g.program(4,s,n),data:n},(p=i.control)?d=p.call(t,u):(p=t&&t.control,d=typeof p===f?p.call(t,u):p),i.control||(d=v.call(t,d,{hash:{},inverse:g.noop,fn:g.program(4,s,n),data:n})),(d||0===d)&&(h+=d),h+="\n\n        ",d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.helper),{hash:{},inverse:g.noop,fn:g.program(6,l,n),data:n}),(d||0===d)&&(h+=d),h+="\n\n    </div>\n\n</script>\n"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-display"]=this.HandlebarsPrecompiled["web-display"]||{},this.HandlebarsPrecompiled["web-display"].form=function(e,t,i,a,n){function r(){var e="";return e}function o(e,t){var a,n="";return n+="\n            ",a=i.each.call(e,(a=e&&e.options,null==a||a===!1?a:a.buttons),{hash:{},inverse:v.noop,fn:v.program(4,s,t),data:t}),(a||0===a)&&(n+=a),n+="\n            "}function s(e,t){var a,n,r,o="";return o+='\n            <button data-key="'+g((a=null==t||t===!1?t:t.key,typeof a===m?a.apply(e):a))+'" ',n=i.compare||e&&e.compare,r={hash:{},inverse:v.noop,fn:v.program(5,l,t),data:t},a=n?n.call(e,e&&e.type,"submit",r):y.call(e,"compare",e&&e.type,"submit",r),(a||0===a)&&(o+=a),o+=" ",n=i.compare||e&&e.compare,r={hash:{},inverse:v.noop,fn:v.program(7,c,t),data:t},a=n?n.call(e,e&&e.type,"reset",r):y.call(e,"compare",e&&e.type,"reset",r),(a||0===a)&&(o+=a),o+=' class="alpaca-form-button alpaca-form-button-'+g((a=null==t||t===!1?t:t.key,typeof a===m?a.apply(e):a))+' btn btn-default" ',a=i.each.call(e,e&&e.value,{hash:{},inverse:v.noop,fn:v.program(9,d,t),data:t}),(a||0===a)&&(o+=a),o+=">",(n=i.value)?a=n.call(e,{hash:{},data:t}):(n=e&&e.value,a=typeof n===m?n.call(e,{hash:{},data:t}):n),(a||0===a)&&(o+=a),o+="</button>\n            "}function l(){return'type="submit"'}function c(){return'type="reset"'}function d(e,t){var a,n,r="";return r+=g((a=null==t||t===!1?t:t.key,typeof a===m?a.apply(e):a))+'="',(n=i.value)?a=n.call(e,{hash:{},data:t}):(n=e&&e.value,a=typeof n===m?n.call(e,{hash:{},data:t}):n),r+=g(a)+'"'}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var p,u,h,f="",m="function",g=this.escapeExpression,v=this,y=i.helperMissing,b=i.blockHelperMissing;return f+='<script type="text/x-handlebars-template">\n\n    <form role="form">\n\n        ',h={hash:{},inverse:v.noop,fn:v.program(1,r,n),data:n},(u=i.formItems)?p=u.call(t,h):(u=t&&t.formItems,p=typeof u===m?u.call(t,h):u),i.formItems||(p=b.call(t,p,{hash:{},inverse:v.noop,fn:v.program(1,r,n),data:n})),(p||0===p)&&(f+=p),f+='\n\n        <div class="alpaca-form-buttons-container">\n            ',p=i["if"].call(t,(p=t&&t.options,null==p||p===!1?p:p.buttons),{hash:{},inverse:v.noop,fn:v.program(3,o,n),data:n}),(p||0===p)&&(f+=p),f+="\n        </div>\n\n    </form>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"]["container-array-actionbar"]=function(e,t,i,a,n){function r(e,t){var a,n,r="";return r+='\n        <button class="alpaca-array-actionbar-action btn btn-default btn-sm" data-alpaca-array-actionbar-action="',(n=i.action)?a=n.call(e,{hash:{},data:t}):(n=e&&e.action,a=typeof n===p?n.call(e,{hash:{},data:t}):n),r+=u(a)+'">\n            ',a=i["if"].call(e,e&&e.iconClass,{hash:{},inverse:h.noop,fn:h.program(2,o,t),data:t}),(a||0===a)&&(r+=a),r+="\n            ",a=i["if"].call(e,e&&e.label,{hash:{},inverse:h.noop,fn:h.program(4,s,t),data:t}),(a||0===a)&&(r+=a),r+="\n        </button>\n        "}function o(e){var t,i="";return i+='\n            <i class="'+u((t=e&&e.iconClass,typeof t===p?t.apply(e):t))+'"></i>\n            '}function s(e,t){var a,n;return(n=i.label)?a=n.call(e,{hash:{},data:t}):(n=e&&e.label,a=typeof n===p?n.call(e,{hash:{},data:t}):n),a||0===a?a:""}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var l,c,d="",p="function",u=this.escapeExpression,h=this;return d+='<script type="text/x-handlebars-template">\n\n    <div class="alpaca-array-actionbar btn-group" data-alpaca-array-actionbar-field-id="',(c=i.fieldId)?l=c.call(t,{hash:{},data:n}):(c=t&&t.fieldId,l=typeof c===p?c.call(t,{hash:{},data:n}):c),d+=u(l)+'" data-alpaca-array-actionbar-item-index="',(c=i.itemIndex)?l=c.call(t,{hash:{},data:n}):(c=t&&t.itemIndex,l=typeof c===p?c.call(t,{hash:{},data:n}):c),d+=u(l)+'">\n        ',l=i.each.call(t,t&&t.actions,{hash:{},inverse:h.noop,fn:h.program(1,r,n),data:n}),(l||0===l)&&(d+=l),d+="\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"]["container-array-toolbar"]=function(e,t,i,a,n){function r(){return" btn-group"}function o(e,t,a){var n,r,o,c="";return c+="\n\n            ",r=i.compare||a&&a.compare,o={hash:{},inverse:v.noop,fn:v.program(4,s,t),data:t},n=r?r.call(e,a&&a.toolbarStyle,"link",o):y.call(e,"compare",a&&a.toolbarStyle,"link",o),(n||0===n)&&(c+=n),c+="\n\n            ",r=i.compare||a&&a.compare,o={hash:{},inverse:v.noop,fn:v.program(6,l,t),data:t},n=r?r.call(e,a&&a.toolbarStyle,"button",o):y.call(e,"compare",a&&a.toolbarStyle,"button",o),(n||0===n)&&(c+=n),c+="\n\n        "}function s(e){var t,i="";return i+='\n                <a href="#" class="alpaca-array-toolbar-action" data-alpaca-array-toolbar-action="'+g((t=e&&e.action,typeof t===m?t.apply(e):t))+'">',t=e&&e.label,t=typeof t===m?t.apply(e):t,(t||0===t)&&(i+=t),i+="</a>\n            "}function l(e,t){var a,n="";return n+='\n                <button class="alpaca-array-toolbar-action btn btn-default btn-sm" data-alpaca-array-toolbar-action="'+g((a=e&&e.action,typeof a===m?a.apply(e):a))+'">\n                    ',a=i["if"].call(e,e&&e.iconClass,{hash:{},inverse:v.noop,fn:v.program(7,c,t),data:t}),(a||0===a)&&(n+=a),n+="\n                    ",a=i["if"].call(e,e&&e.label,{hash:{},inverse:v.noop,fn:v.program(9,d,t),data:t}),(a||0===a)&&(n+=a),n+="\n                </button>\n            "}function c(e){var t,i="";return i+='\n                    <i class="'+g((t=e&&e.iconClass,typeof t===m?t.apply(e):t))+'"></i>\n                    '}function d(e,t){var a,n;return(n=i.label)?a=n.call(e,{hash:{},data:t}):(n=e&&e.label,a=typeof n===m?n.call(e,{hash:{},data:t}):n),a||0===a?a:""}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var p,u,h,f="",m="function",g=this.escapeExpression,v=this,y=i.helperMissing;return f+='<script type="text/x-handlebars-template">\n\n    <div class="alpaca-array-toolbar" data-alpaca-array-toolbar-field-id="',(u=i.fieldId)?p=u.call(t,{hash:{},data:n}):(u=t&&t.fieldId,p=typeof u===m?u.call(t,{hash:{},data:n}):u),f+=g(p)+'" ',u=i.compare||t&&t.compare,h={hash:{},inverse:v.noop,fn:v.program(1,r,n),data:n},p=u?u.call(t,(p=t&&t.options,null==p||p===!1?p:p.toolbarStyle),"button",h):y.call(t,"compare",(p=t&&t.options,null==p||p===!1?p:p.toolbarStyle),"button",h),(p||0===p)&&(f+=p),f+=">\n\n        ",p=i.each.call(t,t&&t.actions,{hash:{},inverse:v.noop,fn:v.programWithDepth(3,o,n,t),data:n}),(p||0===p)&&(f+=p),f+="\n\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"]["container-array"]=function(e,t,i,a,n){function r(e,t){var a,n,r,s="";return s+="\n\n            ",r={hash:{},inverse:c.noop,fn:c.program(2,o,t),data:t},(n=i.item)?a=n.call(e,r):(n=e&&e.item,a=typeof n===d?n.call(e,r):n),i.item||(a=p.call(e,a,{hash:{},inverse:c.noop,fn:c.program(2,o,t),data:t})),(a||0===a)&&(s+=a),s+="\n\n        "}function o(){var e="";return e}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var s,l="",c=this,d="function",p=i.blockHelperMissing;return l+='<script type="text/x-handlebars-template">\n\n    <div>\n\n        ',s=i.each.call(t,t&&t.items,{hash:{},inverse:c.noop,fn:c.program(1,r,n),data:n}),(s||0===s)&&(l+=s),l+="\n\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"]["container-object"]=function(e,t,i,a,n){function r(e,t){var a,n,r,s="";return s+="\n\n            ",r={hash:{},inverse:c.noop,fn:c.program(2,o,t),data:t},(n=i.item)?a=n.call(e,r):(n=e&&e.item,a=typeof n===d?n.call(e,r):n),i.item||(a=p.call(e,a,{hash:{},inverse:c.noop,fn:c.program(2,o,t),data:t})),(a||0===a)&&(s+=a),s+="\n\n        "}function o(){var e="";return e}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var s,l="",c=this,d="function",p=i.blockHelperMissing;return l+='<script type="text/x-handlebars-template">\n\n    <div>\n\n        ',s=i.each.call(t,t&&t.items,{hash:{},inverse:c.noop,fn:c.program(1,r,n),data:n}),(s||0===s)&&(l+=s),l+="\n\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"]["container-table"]=function(e,t,i,a,n){function r(){return" btn-group"}function o(e,t,a){var n,r,o,c="";return c+="\n\n        ",r=i.compare||a&&a.compare,o={hash:{},inverse:x.noop,fn:x.program(4,s,t),data:t},n=r?r.call(e,(n=a&&a.options,null==n||n===!1?n:n.toolbarStyle),"link",o):S.call(e,"compare",(n=a&&a.options,null==n||n===!1?n:n.toolbarStyle),"link",o),(n||0===n)&&(c+=n),c+="\n\n        ",r=i.compare||a&&a.compare,o={hash:{},inverse:x.noop,fn:x.program(6,l,t),data:t},n=r?r.call(e,(n=a&&a.options,null==n||n===!1?n:n.toolbarStyle),"button",o):S.call(e,"compare",(n=a&&a.options,null==n||n===!1?n:n.toolbarStyle),"button",o),(n||0===n)&&(c+=n),c+="\n\n        "}function s(e){var t,i="";return i+='\n        <a href="#" class="alpaca-array-toolbar-action" data-array-toolbar-action="'+F((t=e&&e.action,typeof t===w?t.apply(e):t))+'">',t=e&&e.label,t=typeof t===w?t.apply(e):t,(t||0===t)&&(i+=t),i+="</a>\n        "}function l(e,t){var a,n="";return n+='\n        <button class="alpaca-array-toolbar-action btn btn-default" data-array-toolbar-action="'+F((a=e&&e.action,typeof a===w?a.apply(e):a))+'">\n            ',a=i["if"].call(e,e&&e.iconClass,{hash:{},inverse:x.noop,fn:x.program(7,c,t),data:t}),(a||0===a)&&(n+=a),n+="\n            ",a=i["if"].call(e,e&&e.label,{hash:{},inverse:x.noop,fn:x.program(9,d,t),data:t}),(a||0===a)&&(n+=a),n+="\n        </button>\n        "}function c(e){var t,i="";return i+='\n            <i class="'+F((t=e&&e.iconClass,typeof t===w?t.apply(e):t))+'"></i>\n            '}function d(e,t){var a,n;return(n=i.label)?a=n.call(e,{hash:{},data:t}):(n=e&&e.label,a=typeof n===w?n.call(e,{hash:{},data:t}):n),a||0===a?a:""}function p(e,t){var a,n,r="";return r+="\n                    <th>",(n=i.label)?a=n.call(e,{hash:{},data:t}):(n=e&&e.label,a=typeof n===w?n.call(e,{hash:{},data:t}):n),(a||0===a)&&(r+=a),r+="</th>\n                    "}function u(e,t,a){var n,r="";return r+="\n                <tr>\n                    ",n=i.each.call(e,e&&e.data,{hash:{},inverse:x.noop,fn:x.program(14,h,t),data:t}),(n||0===n)&&(r+=n),r+='\n\n                    <!-- actions cell -->\n                    <td>\n                        <div class="alpaca-array-item-actions btn-group">\n                            ',n=i.each.call(e,a&&a.arrayItemActions,{hash:{},inverse:x.noop,fn:x.program(16,f,t),data:t}),(n||0===n)&&(r+=n),r+="\n                        </div>\n                    </td>\n                </tr>\n            "}function h(e){var t,i="";return i+="\n                    <td>",t=typeof e===w?e.apply(e):e,(t||0===t)&&(i+=t),i+="</td>\n                    "}function f(e,t){var a,n,r="";return r+='\n                            <button class="alpaca-array-item-action btn btn-default" data-array-item-action="',(n=i.action)?a=n.call(e,{hash:{},data:t}):(n=e&&e.action,a=typeof n===w?n.call(e,{hash:{},data:t}):n),r+=F(a)+'">\n                                ',a=i["if"].call(e,e&&e.iconClass,{hash:{},inverse:x.noop,fn:x.program(17,m,t),data:t}),(a||0===a)&&(r+=a),r+="\n                                ",a=i["if"].call(e,e&&e.label,{hash:{},inverse:x.noop,fn:x.program(9,d,t),data:t}),(a||0===a)&&(r+=a),r+="\n                            </button>\n                            "}function m(e){var t,i="";return i+='\n                                <i class="'+F((t=e&&e.iconClass,typeof t===w?t.apply(e):t))+'"></i>\n                                '}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var g,v,y,b="",w="function",F=this.escapeExpression,x=this,S=i.helperMissing;return b+='<script type="text/x-handlebars-template">\n\n    <div>\n\n        <div class="alpaca-array-toolbar" ',v=i.compare||t&&t.compare,y={hash:{},inverse:x.noop,fn:x.program(1,r,n),data:n},g=v?v.call(t,(g=t&&t.options,null==g||g===!1?g:g.toolbarStyle),"button",y):S.call(t,"compare",(g=t&&t.options,null==g||g===!1?g:g.toolbarStyle),"button",y),(g||0===g)&&(b+=g),b+=">\n\n        ",g=i.each.call(t,t&&t.arrayToolbarActions,{hash:{},inverse:x.noop,fn:x.programWithDepth(3,o,n,t),data:n}),(g||0===g)&&(b+=g),b+="\n\n        </div>\n\n        <table>\n\n            <!-- table headers -->\n            <thead>\n                <tr>\n                    ",g=i.each.call(t,(g=t&&t.options,null==g||g===!1?g:g.fields),{hash:{},inverse:x.noop,fn:x.program(11,p,n),data:n}),(g||0===g)&&(b+=g),b+="\n\n                    <th>Actions</th>\n                </tr>\n            </thead>\n\n            <!-- table body -->\n            <tbody>\n            ",g=i.each.call(t,t&&t.items,{hash:{},inverse:x.noop,fn:x.programWithDepth(13,u,n,t),data:n}),(g||0===g)&&(b+=g),b+="\n            </tbody>\n\n        </table>\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"].container=function(e,t,i,a,n){function r(e,t){var a,n="";return n+='\n        <legend class="',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.labelClass),{hash:{},inverse:g.noop,fn:g.program(2,o,t),data:t}),(a||0===a)&&(n+=a),n+=' alpaca-container-label">',a=e&&e.options,a=null==a||a===!1?a:a.label,a=typeof a===f?a.apply(e):a,(a||0===a)&&(n+=a),n+="</legend>\n        "}function o(e){var t;return m((t=e&&e.options,t=null==t||t===!1?t:t.labelClass,typeof t===f?t.apply(e):t))}function s(e,t){var a,n="";return n+='\n        <p class="alpaca-helper ',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.helperClass),{hash:{},inverse:g.noop,fn:g.program(5,l,t),data:t}),(a||0===a)&&(n+=a),n+='">\n            <i class="alpaca-icon-helper"></i>\n            ',a=e&&e.options,a=null==a||a===!1?a:a.helper,a=typeof a===f?a.apply(e):a,(a||0===a)&&(n+=a),n+="\n        </p>\n        "}function l(e){var t;return m((t=e&&e.options,t=null==t||t===!1?t:t.helperClass,typeof t===f?t.apply(e):t))}function c(){var e="";return e}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var d,p,u,h="",f="function",m=this.escapeExpression,g=this,v=i.blockHelperMissing;return h+='<script type="text/x-handlebars-template">\n\n    <div>\n\n        ',d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.label),{hash:{},inverse:g.noop,fn:g.program(1,r,n),data:n}),(d||0===d)&&(h+=d),h+="\n\n        ",d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.helper),{hash:{},inverse:g.noop,fn:g.program(4,s,n),data:n}),(d||0===d)&&(h+=d),h+="\n\n        ",u={hash:{},inverse:g.noop,fn:g.program(7,c,n),data:n},(p=i.container)?d=p.call(t,u):(p=t&&t.container,d=typeof p===f?p.call(t,u):p),i.container||(d=v.call(t,d,{hash:{},inverse:g.noop,fn:g.program(7,c,n),data:n})),(d||0===d)&&(h+=d),h+="\n\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"]["control-any"]=function(e,t,i,a,n){function r(){return'readonly="readonly"'}function o(e,t){var a,n,r="";return r+='name="',(n=i.name)?a=n.call(e,{hash:{},data:t}):(n=e&&e.name,a=typeof n===p?n.call(e,{hash:{},data:t}):n),r+=u(a)+'"'}function s(e,t){var i,a="";return a+="data-"+u((i=null==t||t===!1?t:t.key,typeof i===p?i.apply(e):i))+'="'+u(typeof e===p?e.apply(e):e)+'"'}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var l,c,d="",p="function",u=this.escapeExpression,h=this;return d+='<script type="text/x-handlebars-template">\n\n    <input type="text" id="',(c=i.id)?l=c.call(t,{hash:{},data:n}):(c=t&&t.id,l=typeof c===p?c.call(t,{hash:{},data:n}):c),d+=u(l)+'" size="40" ',l=i["if"].call(t,(l=t&&t.options,null==l||l===!1?l:l.readonly),{hash:{},inverse:h.noop,fn:h.program(1,r,n),data:n}),(l||0===l)&&(d+=l),d+=" ",l=i["if"].call(t,t&&t.name,{hash:{},inverse:h.noop,fn:h.program(3,o,n),data:n}),(l||0===l)&&(d+=l),d+=" ",l=i.each.call(t,(l=t&&t.options,null==l||l===!1?l:l.data),{hash:{},inverse:h.noop,fn:h.program(5,s,n),data:n}),(l||0===l)&&(d+=l),d+="/>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"]["control-checkbox"]=function(e,t,i,a,n){function r(e,t,a){var n,r="";return r+="\n\n        ",n=i.each.call(e,e&&e.checkboxOptions,{hash:{},inverse:m.noop,fn:m.programWithDepth(2,o,t,a),data:t}),(n||0===n)&&(r+=n),r+="\n\n    "}function o(e,t,a){var n,r,o="";return o+='\n\n            <div>\n\n                <label>\n\n                    <input type="checkbox" data-checkbox-index="'+f((n=null==t||t===!1?t:t.index,typeof n===h?n.apply(e):n))+'" data-checkbox-value="',(r=i.value)?n=r.call(e,{hash:{},data:t}):(r=e&&e.value,n=typeof r===h?r.call(e,{hash:{},data:t}):r),o+=f(n)+'" ',n=i["if"].call(e,(n=a&&a.options,null==n||n===!1?n:n.readonly),{hash:{},inverse:m.noop,fn:m.program(3,s,t),data:t}),(n||0===n)&&(o+=n),o+=" ",n=i["if"].call(e,e&&e.name,{hash:{},inverse:m.noop,fn:m.program(5,l,t),data:t}),(n||0===n)&&(o+=n),o+=" ",n=i.each.call(e,(n=a&&a.options,null==n||n===!1?n:n.data),{hash:{},inverse:m.noop,fn:m.program(7,c,t),data:t}),(n||0===n)&&(o+=n),o+="/>\n                    ",(r=i.text)?n=r.call(e,{hash:{},data:t}):(r=e&&e.text,n=typeof r===h?r.call(e,{hash:{},data:t}):r),(n||0===n)&&(o+=n),o+="\n\n                </label>\n            </div>\n\n        "}function s(){return'readonly="readonly"'}function l(e,t){var a,n,r="";return r+='name="',(n=i.name)?a=n.call(e,{hash:{},data:t}):(n=e&&e.name,a=typeof n===h?n.call(e,{hash:{},data:t}):n),r+=f(a)+'"'}function c(e,t){var a,n,r="";return r+="data-"+f((a=null==t||t===!1?t:t.key,typeof a===h?a.apply(e):a))+'="',(n=i.value)?a=n.call(e,{hash:{},data:t}):(n=e&&e.value,a=typeof n===h?n.call(e,{hash:{},data:t}):n),r+=f(a)+'"'}function d(e,t){var a,n="";return n+='\n\n        <div>\n\n            <label>\n\n                <input type="checkbox" ',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.readonly),{hash:{},inverse:m.noop,fn:m.program(3,s,t),data:t}),(a||0===a)&&(n+=a),n+=" ",a=i["if"].call(e,e&&e.name,{hash:{},inverse:m.noop,fn:m.program(5,l,t),data:t}),(a||0===a)&&(n+=a),n+=" ",a=i.each.call(e,(a=e&&e.options,null==a||a===!1?a:a.data),{hash:{},inverse:m.noop,fn:m.program(7,c,t),data:t}),(a||0===a)&&(n+=a),n+="/>\n\n                ",a=e&&e.options,a=null==a||a===!1?a:a.rightLabel,a=typeof a===h?a.apply(e):a,(a||0===a)&&(n+=a),n+="\n            </label>\n\n        </div>\n\n    "}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var p,u="",h="function",f=this.escapeExpression,m=this;
return u+='<script type="text/x-handlebars-template">\n\n    ',p=i["if"].call(t,(p=t&&t.options,null==p||p===!1?p:p.multiple),{hash:{},inverse:m.program(9,d,n),fn:m.programWithDepth(1,r,n,t),data:n}),(p||0===p)&&(u+=p),u+="\n\n</script>\n"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"]["control-ckeditor"]=function(e,t,i,a,n){this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var r,o,s="",l="function",c=this.escapeExpression;return s+='<script type="text/x-handlebars-template">\n\n    <textarea id="',(o=i.id)?r=o.call(t,{hash:{},data:n}):(o=t&&t.id,r=typeof o===l?o.call(t,{hash:{},data:n}):o),s+=c(r)+'" cols="80" rows="10">\n    </textarea>\n\n</script>'},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"]["control-editor"]=function(e,t,i,a,n){this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var r,o,s="",l="function",c=this.escapeExpression;return s+='<script type="text/x-handlebars-template">\n\n    <div id="',(o=i.id)?r=o.call(t,{hash:{},data:n}):(o=t&&t.id,r=typeof o===l?o.call(t,{hash:{},data:n}):o),s+=c(r)+'" class="control-field-editor-el"></div>\n\n</script>'},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"]["control-file"]=function(e,t,i,a,n){function r(e){var t,i="";return i+='size="'+h((t=e&&e.options,t=null==t||t===!1?t:t.size,typeof t===u?t.apply(e):t))+'"'}function o(){return'readonly="readonly"'}function s(e,t){var a,n,r="";return r+='name="',(n=i.name)?a=n.call(e,{hash:{},data:t}):(n=e&&e.name,a=typeof n===u?n.call(e,{hash:{},data:t}):n),r+=h(a)+'"'}function l(e,t){var i,a="";return a+="data-"+h((i=null==t||t===!1?t:t.key,typeof i===u?i.apply(e):i))+'="'+h(typeof e===u?e.apply(e):e)+'"'}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var c,d,p="",u="function",h=this.escapeExpression,f=this;return p+='<script type="text/x-handlebars-template">\n\n    <input type="file" id="',(d=i.id)?c=d.call(t,{hash:{},data:n}):(d=t&&t.id,c=typeof d===u?d.call(t,{hash:{},data:n}):d),p+=h(c)+'" ',c=i["if"].call(t,(c=t&&t.options,null==c||c===!1?c:c.size),{hash:{},inverse:f.noop,fn:f.program(1,r,n),data:n}),(c||0===c)&&(p+=c),p+=" ",c=i["if"].call(t,(c=t&&t.options,null==c||c===!1?c:c.readonly),{hash:{},inverse:f.noop,fn:f.program(3,o,n),data:n}),(c||0===c)&&(p+=c),p+=" ",c=i["if"].call(t,t&&t.name,{hash:{},inverse:f.noop,fn:f.program(5,s,n),data:n}),(c||0===c)&&(p+=c),p+=" ",c=i.each.call(t,(c=t&&t.options,null==c||c===!1?c:c.data),{hash:{},inverse:f.noop,fn:f.program(7,l,n),data:n}),(c||0===c)&&(p+=c),p+="/>\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"]["control-hidden"]=function(e,t,i,a,n){function r(e,t){var a,n,r="";return r+='name="',(n=i.name)?a=n.call(e,{hash:{},data:t}):(n=e&&e.name,a=typeof n===d?n.call(e,{hash:{},data:t}):n),r+=p(a)+'"'}function o(e,t){var i,a="";return a+="data-"+p((i=null==t||t===!1?t:t.key,typeof i===d?i.apply(e):i))+'="'+p(typeof e===d?e.apply(e):e)+'"'}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var s,l,c="",d="function",p=this.escapeExpression,u=this;return c+='<script type="text/x-handlebars-template">\n\n    <input type="hidden" id="',(l=i.id)?s=l.call(t,{hash:{},data:n}):(l=t&&t.id,s=typeof l===d?l.call(t,{hash:{},data:n}):l),c+=p(s)+'" ',s=i["if"].call(t,t&&t.name,{hash:{},inverse:u.noop,fn:u.program(1,r,n),data:n}),(s||0===s)&&(c+=s),c+=" ",s=i.each.call(t,(s=t&&t.options,null==s||s===!1?s:s.data),{hash:{},inverse:u.noop,fn:u.program(3,o,n),data:n}),(s||0===s)&&(c+=s),c+="/>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"]["control-image"]=function(e,t,i,a,n){function r(e){var t,i="";return i+='placeholder="'+f((t=e&&e.options,t=null==t||t===!1?t:t.placeholder,typeof t===h?t.apply(e):t))+'"'}function o(e){var t,i="";return i+='size="'+f((t=e&&e.options,t=null==t||t===!1?t:t.size,typeof t===h?t.apply(e):t))+'"'}function s(){return'readonly="readonly"'}function l(e,t){var a,n,r="";return r+='name="',(n=i.name)?a=n.call(e,{hash:{},data:t}):(n=e&&e.name,a=typeof n===h?n.call(e,{hash:{},data:t}):n),r+=f(a)+'"'}function c(e,t){var i,a="";return a+="data-"+f((i=null==t||t===!1?t:t.key,typeof i===h?i.apply(e):i))+'="'+f(typeof e===h?e.apply(e):e)+'"'}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var d,p,u="",h="function",f=this.escapeExpression,m=this;return u+='<script type="text/x-handlebars-template">\n\n    <input type="text" id="',(p=i.id)?d=p.call(t,{hash:{},data:n}):(p=t&&t.id,d=typeof p===h?p.call(t,{hash:{},data:n}):p),u+=f(d)+'" ',d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.placeholder),{hash:{},inverse:m.noop,fn:m.program(1,r,n),data:n}),(d||0===d)&&(u+=d),u+=" ",d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.size),{hash:{},inverse:m.noop,fn:m.program(3,o,n),data:n}),(d||0===d)&&(u+=d),u+=" ",d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.readonly),{hash:{},inverse:m.noop,fn:m.program(5,s,n),data:n}),(d||0===d)&&(u+=d),u+=" ",d=i["if"].call(t,t&&t.name,{hash:{},inverse:m.noop,fn:m.program(7,l,n),data:n}),(d||0===d)&&(u+=d),u+=" ",d=i.each.call(t,(d=t&&t.options,null==d||d===!1?d:d.data),{hash:{},inverse:m.noop,fn:m.program(9,c,n),data:n}),(d||0===d)&&(u+=d),u+='/>\n\n    <div class="alpaca-image-display">\n        <h5>Preview</h5>\n        <img id="',(p=i.id)?d=p.call(t,{hash:{},data:n}):(p=t&&t.id,d=typeof p===h?p.call(t,{hash:{},data:n}):p),u+=f(d)+'-image" src="',(p=i.data)?d=p.call(t,{hash:{},data:n}):(p=t&&t.data,d=typeof p===h?p.call(t,{hash:{},data:n}):p),u+=f(d)+'">\n    </div>\n\n</script>'},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"]["control-password"]=function(e,t,i,a,n){function r(e){var t,i="";return i+='placeholder="'+f((t=e&&e.options,t=null==t||t===!1?t:t.placeholder,typeof t===h?t.apply(e):t))+'"'}function o(e){var t,i="";return i+='size="'+f((t=e&&e.options,t=null==t||t===!1?t:t.size,typeof t===h?t.apply(e):t))+'"'}function s(){return'readonly="readonly"'}function l(e,t){var a,n,r="";return r+='name="',(n=i.name)?a=n.call(e,{hash:{},data:t}):(n=e&&e.name,a=typeof n===h?n.call(e,{hash:{},data:t}):n),r+=f(a)+'"'}function c(e,t){var i,a="";return a+="data-"+f((i=null==t||t===!1?t:t.key,typeof i===h?i.apply(e):i))+'="'+f(typeof e===h?e.apply(e):e)+'"'}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var d,p,u="",h="function",f=this.escapeExpression,m=this;return u+='<script type="text/x-handlebars-template">\n\n    <input type="password" id="',(p=i.id)?d=p.call(t,{hash:{},data:n}):(p=t&&t.id,d=typeof p===h?p.call(t,{hash:{},data:n}):p),u+=f(d)+'" ',d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.placeholder),{hash:{},inverse:m.noop,fn:m.program(1,r,n),data:n}),(d||0===d)&&(u+=d),u+=" ",d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.size),{hash:{},inverse:m.noop,fn:m.program(3,o,n),data:n}),(d||0===d)&&(u+=d),u+=" ",d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.readonly),{hash:{},inverse:m.noop,fn:m.program(5,s,n),data:n}),(d||0===d)&&(u+=d),u+=" ",d=i["if"].call(t,t&&t.name,{hash:{},inverse:m.noop,fn:m.program(7,l,n),data:n}),(d||0===d)&&(u+=d),u+=" ",d=i.each.call(t,(d=t&&t.options,null==d||d===!1?d:d.data),{hash:{},inverse:m.noop,fn:m.program(9,c,n),data:n}),(d||0===d)&&(u+=d),u+="/>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"]["control-radio"]=function(e,t,i,a,n,r){function o(){return"\n    "}function s(e,t){var a,n,r="";return r+='\n    <div class="radio">\n        <label class="alpaca-controlfield-radio-label">\n            <input type="radio" ',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.readonly),{hash:{},inverse:h.noop,fn:h.program(4,l,t),data:t}),(a||0===a)&&(r+=a),r+=' name="',(n=i.name)?a=n.call(e,{hash:{},data:t}):(n=e&&e.name,a=typeof n===f?n.call(e,{hash:{},data:t}):n),r+=m(a)+'" value=""/>',(n=i.noneLabel)?a=n.call(e,{hash:{},data:t}):(n=e&&e.noneLabel,a=typeof n===f?n.call(e,{hash:{},data:t}):n),(a||0===a)&&(r+=a),r+="\n        </label>\n    </div>\n    "}function l(){return'readonly="readonly"'}function c(e,t,a){var n,r,o,s="";return s+='\n    <div class="radio">\n        <label class="alpaca-controlfield-radio-label">\n            <input type="radio" ',n=i["if"].call(e,(n=e&&e.options,null==n||n===!1?n:n.readonly),{hash:{},inverse:h.noop,fn:h.program(4,l,t),data:t}),(n||0===n)&&(s+=n),s+=' name="',(r=i.name)?n=r.call(e,{hash:{},data:t}):(r=e&&e.name,n=typeof r===f?r.call(e,{hash:{},data:t}):r),s+=m(n)+'" value="',(r=i.value)?n=r.call(e,{hash:{},data:t}):(r=e&&e.value,n=typeof r===f?r.call(e,{hash:{},data:t}):r),s+=m(n)+'" ',r=i.compare||e&&e.compare,o={hash:{},inverse:h.noop,fn:h.program(7,d,t),data:t},n=r?r.call(e,e&&e.value,a&&a.data,o):g.call(e,"compare",e&&e.value,a&&a.data,o),(n||0===n)&&(s+=n),s+="/>",(r=i.text)?n=r.call(e,{hash:{},data:t}):(r=e&&e.text,n=typeof r===f?r.call(e,{hash:{},data:t}):r),(n||0===n)&&(s+=n),s+="\n        </label>\n    </div>\n    "}function d(){return'checked="checked"'}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var p,u="",h=this,f="function",m=this.escapeExpression,g=i.helperMissing;return u+='<script type="text/x-handlebars-template">\n\n    ',p=i["if"].call(t,t&&t.hideNone,{hash:{},inverse:h.program(3,s,n),fn:h.program(1,o,n),data:n}),(p||0===p)&&(u+=p),u+="\n\n    ",p=i.each.call(t,t&&t.selectOptions,{hash:{},inverse:h.noop,fn:h.programWithDepth(6,c,n,r),data:n}),(p||0===p)&&(u+=p),u+="\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"]["control-select"]=function(e,t,i,a,n){function r(){return'readonly="readonly"'}function o(){return'multiple="multiple"'}function s(e){var t,i="";return i+='size="'+F((t=e&&e.options,t=null==t||t===!1?t:t.size,typeof t===w?t.apply(e):t))+'"'}function l(e,t){var a,n,r="";return r+='name="',(n=i.name)?a=n.call(e,{hash:{},data:t}):(n=e&&e.name,a=typeof n===w?n.call(e,{hash:{},data:t}):n),r+=F(a)+'"'}function c(e,t){var a,n="";return n+="\n\n        ",a=i["if"].call(e,e&&e.hideNone,{hash:{},inverse:x.program(12,p,t),fn:x.program(10,d,t),data:t}),(a||0===a)&&(n+=a),n+="\n\n        ",a=i.each.call(e,e&&e.selectOptions,{hash:{},inverse:x.noop,fn:x.programWithDepth(14,u,t,e),data:t}),(a||0===a)&&(n+=a),n+="\n\n    "}function d(){return"\n        "}function p(e,t){var a,n,r="";return r+='\n        <option value="">',(n=i.noneLabel)?a=n.call(e,{hash:{},data:t}):(n=e&&e.noneLabel,a=typeof n===w?n.call(e,{hash:{},data:t}):n),(a||0===a)&&(r+=a),r+="</option>\n        "}function u(e,t,a){var n,r,o="";return o+='\n        <option value="',(r=i.value)?n=r.call(e,{hash:{},data:t}):(r=e&&e.value,n=typeof r===w?r.call(e,{hash:{},data:t}):r),(n||0===n)&&(o+=n),o+='" ',n=i.each.call(e,a&&a.data,{hash:{},inverse:x.noop,fn:x.programWithDepth(15,h,t,a),data:t}),(n||0===n)&&(o+=n),o+=">",(r=i.text)?n=r.call(e,{hash:{},data:t}):(r=e&&e.text,n=typeof r===w?r.call(e,{hash:{},data:t}):r),o+=F(n)+"</option>\n        "}function h(e,t,a){var n,r,o;return r=i.compare||e&&e.compare,o={hash:{},inverse:x.noop,fn:x.program(16,f,t),data:t},n=r?r.call(e,e&&e.value,a&&a.value,o):S.call(e,"compare",e&&e.value,a&&a.value,o),n||0===n?n:""}function f(){return'selected="selected"'}function m(e,t,a){var n,r="";return r+="\n\n        ",n=i["if"].call(e,e&&e.hideNone,{hash:{},inverse:x.program(12,p,t),fn:x.program(10,d,t),data:t}),(n||0===n)&&(r+=n),r+="\n\n        ",n=i.each.call(e,e&&e.selectOptions,{hash:{},inverse:x.noop,fn:x.programWithDepth(19,g,t,a),data:t}),(n||0===n)&&(r+=n),r+="\n\n    "}function g(e,t,a){var n,r,o,s="";return s+='\n        <option value="',(r=i.value)?n=r.call(e,{hash:{},data:t}):(r=e&&e.value,n=typeof r===w?r.call(e,{hash:{},data:t}):r),(n||0===n)&&(s+=n),s+='" ',r=i.compare||e&&e.compare,o={hash:{},inverse:x.noop,fn:x.program(16,f,t),data:t},n=r?r.call(e,e&&e.value,a&&a.data,o):S.call(e,"compare",e&&e.value,a&&a.data,o),(n||0===n)&&(s+=n),s+=">",(r=i.text)?n=r.call(e,{hash:{},data:t}):(r=e&&e.text,n=typeof r===w?r.call(e,{hash:{},data:t}):r),s+=F(n)+"</option>\n        "}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var v,y,b="",w="function",F=this.escapeExpression,x=this,S=i.helperMissing;return b+='<script type="text/x-handlebars-template">\n\n    <select id="',(y=i.id)?v=y.call(t,{hash:{},data:n}):(y=t&&t.id,v=typeof y===w?y.call(t,{hash:{},data:n}):y),b+=F(v)+'" ',v=i["if"].call(t,(v=t&&t.options,null==v||v===!1?v:v.readonly),{hash:{},inverse:x.noop,fn:x.program(1,r,n),data:n}),(v||0===v)&&(b+=v),b+=" ",v=i["if"].call(t,(v=t&&t.options,null==v||v===!1?v:v.multiple),{hash:{},inverse:x.noop,fn:x.program(3,o,n),data:n}),(v||0===v)&&(b+=v),b+=" ",v=i["if"].call(t,(v=t&&t.options,null==v||v===!1?v:v.size),{hash:{},inverse:x.noop,fn:x.program(5,s,n),data:n}),(v||0===v)&&(b+=v),b+=" ",v=i["if"].call(t,t&&t.name,{hash:{},inverse:x.noop,fn:x.program(7,l,n),data:n}),(v||0===v)&&(b+=v),b+=">\n\n    ",v=i["if"].call(t,(v=t&&t.options,null==v||v===!1?v:v.multiple),{hash:{},inverse:x.programWithDepth(18,m,n,t),fn:x.program(9,c,n),data:n}),(v||0===v)&&(b+=v),b+="\n\n    </select>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"]["control-text"]=function(e,t,i,a,n){function r(e){var t,i="";return i+='placeholder="'+m((t=e&&e.options,t=null==t||t===!1?t:t.placeholder,typeof t===f?t.apply(e):t))+'"'}function o(e){var t,i="";return i+='size="'+m((t=e&&e.options,t=null==t||t===!1?t:t.size,typeof t===f?t.apply(e):t))+'"'}function s(){return'readonly="readonly"'}function l(e,t){var a,n,r="";return r+='name="',(n=i.name)?a=n.call(e,{hash:{},data:t}):(n=e&&e.name,a=typeof n===f?n.call(e,{hash:{},data:t}):n),r+=m(a)+'"'}function c(e,t){var i,a="";return a+="data-"+m((i=null==t||t===!1?t:t.key,typeof i===f?i.apply(e):i))+'="'+m(typeof e===f?e.apply(e):e)+'"'}function d(e,t){var i,a="";return a+=m((i=null==t||t===!1?t:t.key,typeof i===f?i.apply(e):i))+'="'+m(typeof e===f?e.apply(e):e)+'"'}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var p,u,h="",f="function",m=this.escapeExpression,g=this;return h+='<script type="text/x-handlebars-template">\n\n    <input type="',(u=i.inputType)?p=u.call(t,{hash:{},data:n}):(u=t&&t.inputType,p=typeof u===f?u.call(t,{hash:{},data:n}):u),h+=m(p)+'" id="',(u=i.id)?p=u.call(t,{hash:{},data:n}):(u=t&&t.id,p=typeof u===f?u.call(t,{hash:{},data:n}):u),h+=m(p)+'" ',p=i["if"].call(t,(p=t&&t.options,null==p||p===!1?p:p.placeholder),{hash:{},inverse:g.noop,fn:g.program(1,r,n),data:n}),(p||0===p)&&(h+=p),h+=" ",p=i["if"].call(t,(p=t&&t.options,null==p||p===!1?p:p.size),{hash:{},inverse:g.noop,fn:g.program(3,o,n),data:n}),(p||0===p)&&(h+=p),h+=" ",p=i["if"].call(t,(p=t&&t.options,null==p||p===!1?p:p.readonly),{hash:{},inverse:g.noop,fn:g.program(5,s,n),data:n}),(p||0===p)&&(h+=p),h+=" ",p=i["if"].call(t,t&&t.name,{hash:{},inverse:g.noop,fn:g.program(7,l,n),data:n}),(p||0===p)&&(h+=p),h+=" ",p=i.each.call(t,(p=t&&t.options,null==p||p===!1?p:p.data),{hash:{},inverse:g.noop,fn:g.program(9,c,n),data:n}),(p||0===p)&&(h+=p),h+=" ",p=i.each.call(t,(p=t&&t.options,null==p||p===!1?p:p.attributes),{hash:{},inverse:g.noop,fn:g.program(11,d,n),data:n}),(p||0===p)&&(h+=p),h+="/>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"]["control-textarea"]=function(e,t,i,a,n){function r(e){var t,i="";return i+='placeholder="'+m((t=e&&e.options,t=null==t||t===!1?t:t.placeholder,typeof t===f?t.apply(e):t))+'"'}function o(e){var t,i="";return i+='rows="'+m((t=e&&e.options,t=null==t||t===!1?t:t.rows,typeof t===f?t.apply(e):t))+'"'}function s(e){var t,i="";return i+='cols="'+m((t=e&&e.options,t=null==t||t===!1?t:t.cols,typeof t===f?t.apply(e):t))+'"'}function l(){return'readonly="readonly"'}function c(e,t){var a,n,r="";return r+='name="',(n=i.name)?a=n.call(e,{hash:{},data:t}):(n=e&&e.name,a=typeof n===f?n.call(e,{hash:{},data:t}):n),r+=m(a)+'"'}function d(e,t){var a,n,r="";return r+="data-",(n=i.fieldId)?a=n.call(e,{hash:{},data:t}):(n=e&&e.fieldId,a=typeof n===f?n.call(e,{hash:{},data:t}):n),r+=m(a)+'="',(n=i.value)?a=n.call(e,{hash:{},data:t}):(n=e&&e.value,a=typeof n===f?n.call(e,{hash:{},data:t}):n),(a||0===a)&&(r+=a),r+='"'}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var p,u,h="",f="function",m=this.escapeExpression,g=this;return h+='<script type="text/x-handlebars-template">\n\n    <textarea id="',(u=i.id)?p=u.call(t,{hash:{},data:n}):(u=t&&t.id,p=typeof u===f?u.call(t,{hash:{},data:n}):u),h+=m(p)+'" ',p=i["if"].call(t,(p=t&&t.options,null==p||p===!1?p:p.placeholder),{hash:{},inverse:g.noop,fn:g.program(1,r,n),data:n}),(p||0===p)&&(h+=p),h+=" ",p=i["if"].call(t,(p=t&&t.options,null==p||p===!1?p:p.rows),{hash:{},inverse:g.noop,fn:g.program(3,o,n),data:n}),(p||0===p)&&(h+=p),h+=" ",p=i["if"].call(t,(p=t&&t.options,null==p||p===!1?p:p.cols),{hash:{},inverse:g.noop,fn:g.program(5,s,n),data:n}),(p||0===p)&&(h+=p),h+=" ",p=i["if"].call(t,(p=t&&t.options,null==p||p===!1?p:p.readonly),{hash:{},inverse:g.noop,fn:g.program(7,l,n),data:n}),(p||0===p)&&(h+=p),h+=" ",p=i["if"].call(t,t&&t.name,{hash:{},inverse:g.noop,fn:g.program(9,c,n),data:n}),(p||0===p)&&(h+=p),h+=" ",p=i.each.call(t,(p=t&&t.options,null==p||p===!1?p:p.data),{hash:{},inverse:g.noop,fn:g.program(11,d,n),data:n}),(p||0===p)&&(h+=p),h+="/>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"]["control-url"]=function(e,t,i,a,n){function r(e){var t,i="";return i+='placeholder="'+f((t=e&&e.options,t=null==t||t===!1?t:t.placeholder,typeof t===h?t.apply(e):t))+'"'}function o(e){var t,i="";return i+='size="'+f((t=e&&e.options,t=null==t||t===!1?t:t.size,typeof t===h?t.apply(e):t))+'"'}function s(){return'readonly="readonly"'}function l(e,t){var a,n,r="";return r+='name="',(n=i.name)?a=n.call(e,{hash:{},data:t}):(n=e&&e.name,a=typeof n===h?n.call(e,{hash:{},data:t}):n),r+=f(a)+'"'}function c(e,t){var i,a="";return a+="data-"+f((i=null==t||t===!1?t:t.key,typeof i===h?i.apply(e):i))+'="'+f(typeof e===h?e.apply(e):e)+'"'}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var d,p,u="",h="function",f=this.escapeExpression,m=this;return u+='<script type="text/x-handlebars-template">\n\n    <input type="text" id="',(p=i.id)?d=p.call(t,{hash:{},data:n}):(p=t&&t.id,d=typeof p===h?p.call(t,{hash:{},data:n}):p),u+=f(d)+'" ',d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.placeholder),{hash:{},inverse:m.noop,fn:m.program(1,r,n),data:n}),(d||0===d)&&(u+=d),u+=" ",d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.size),{hash:{},inverse:m.noop,fn:m.program(3,o,n),data:n}),(d||0===d)&&(u+=d),u+=" ",d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.readonly),{hash:{},inverse:m.noop,fn:m.program(5,s,n),data:n}),(d||0===d)&&(u+=d),u+=" ",d=i["if"].call(t,t&&t.name,{hash:{},inverse:m.noop,fn:m.program(7,l,n),data:n}),(d||0===d)&&(u+=d),u+=" ",d=i.each.call(t,(d=t&&t.options,null==d||d===!1?d:d.data),{hash:{},inverse:m.noop,fn:m.program(9,c,n),data:n}),(d||0===d)&&(u+=d),u+="/>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"].control=function(e,t,i,a,n){function r(e,t){var a,n,r="";return r+='\n        <label class="',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.labelClass),{hash:{},inverse:g.noop,fn:g.program(2,o,t),data:t}),(a||0===a)&&(r+=a),r+=' alpaca-control-label" for="',(n=i.id)?a=n.call(e,{hash:{},data:t}):(n=e&&e.id,a=typeof n===f?n.call(e,{hash:{},data:t}):n),r+=m(a)+'">',a=e&&e.options,a=null==a||a===!1?a:a.label,a=typeof a===f?a.apply(e):a,(a||0===a)&&(r+=a),r+="</label>\n        "}function o(e){var t;return m((t=e&&e.options,t=null==t||t===!1?t:t.labelClass,typeof t===f?t.apply(e):t))}function s(){var e="";return e}function l(e,t){var a,n="";return n+='\n        <p class="',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.helperClass),{hash:{},inverse:g.noop,fn:g.program(7,c,t),data:t}),(a||0===a)&&(n+=a),n+='">\n            <i class="info-sign"></i>\n            ',a=e&&e.options,a=null==a||a===!1?a:a.helper,a=typeof a===f?a.apply(e):a,(a||0===a)&&(n+=a),n+="\n        </p>\n        "}function c(e){var t;return m((t=e&&e.options,t=null==t||t===!1?t:t.helperClass,typeof t===f?t.apply(e):t))}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var d,p,u,h="",f="function",m=this.escapeExpression,g=this,v=i.blockHelperMissing;return h+='<script type="text/x-handlebars-template">\n\n    <div>\n\n        ',d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.label),{hash:{},inverse:g.noop,fn:g.program(1,r,n),data:n}),(d||0===d)&&(h+=d),h+="\n\n        ",u={hash:{},inverse:g.noop,fn:g.program(4,s,n),data:n},(p=i.control)?d=p.call(t,u):(p=t&&t.control,d=typeof p===f?p.call(t,u):p),i.control||(d=v.call(t,d,{hash:{},inverse:g.noop,fn:g.program(4,s,n),data:n})),(d||0===d)&&(h+=d),h+="\n\n        ",d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.helper),{hash:{},inverse:g.noop,fn:g.program(6,l,n),data:n}),(d||0===d)&&(h+=d),h+="\n\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"].form=function(e,t,i,a,n){function r(){var e="";return e}function o(e,t){var a,n="";return n+="\n            ",a=i.each.call(e,(a=e&&e.options,null==a||a===!1?a:a.buttons),{hash:{},inverse:m.noop,fn:m.program(4,s,t),data:t}),(a||0===a)&&(n+=a),n+="\n            "}function s(e,t){var a,n,r="";return r+='\n            <button data-key="'+f((a=null==t||t===!1?t:t.key,typeof a===h?a.apply(e):a))+'" type="',(n=i.type)?a=n.call(e,{hash:{},data:t}):(n=e&&e.type,a=typeof n===h?n.call(e,{hash:{},data:t}):n),r+=f(a)+'" class="alpaca-form-button alpaca-form-button-'+f((a=null==t||t===!1?t:t.key,typeof a===h?a.apply(e):a))+' btn btn-default" ',a=i.each.call(e,e&&e.value,{hash:{},inverse:m.noop,fn:m.program(5,l,t),data:t}),(a||0===a)&&(r+=a),r+=">",(n=i.value)?a=n.call(e,{hash:{},data:t}):(n=e&&e.value,a=typeof n===h?n.call(e,{hash:{},data:t}):n),(a||0===a)&&(r+=a),r+="</button>\n            "}function l(e,t){var a,n,r="";return r+=f((a=null==t||t===!1?t:t.key,typeof a===h?a.apply(e):a))+'="',(n=i.value)?a=n.call(e,{hash:{},data:t}):(n=e&&e.value,a=typeof n===h?n.call(e,{hash:{},data:t}):n),r+=f(a)+'"'}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var c,d,p,u="",h="function",f=this.escapeExpression,m=this,g=i.blockHelperMissing;return u+='<script type="text/x-handlebars-template">\n\n    <form role="form">\n\n        ',p={hash:{},inverse:m.noop,fn:m.program(1,r,n),data:n},(d=i.formItems)?c=d.call(t,p):(d=t&&t.formItems,c=typeof d===h?d.call(t,p):d),i.formItems||(c=g.call(t,c,{hash:{},inverse:m.noop,fn:m.program(1,r,n),data:n})),(c||0===c)&&(u+=c),u+='\n\n        <div class="alpaca-form-buttons-container">\n            ',c=i["if"].call(t,(c=t&&t.options,null==c||c===!1?c:c.buttons),{hash:{},inverse:m.noop,fn:m.program(3,o,n),data:n}),(c||0===c)&&(u+=c),u+="\n        </div>\n\n    </form>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"].message=function(e,t,i,a,n){this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var r,o,s="",l="function";return s+='<script type="text/x-handlebars-template">\n\n    <div class="alpaca-message alpaca-message-',(o=i.id)?r=o.call(t,{hash:{},data:n}):(o=t&&t.id,r=typeof o===l?o.call(t,{hash:{},data:n}):o),(r||0===r)&&(s+=r),s+='">\n        ',(o=i.message)?r=o.call(t,{hash:{},data:n}):(o=t&&t.message,r=typeof o===l?o.call(t,{hash:{},data:n}):o),(r||0===r)&&(s+=r),s+="\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["web-edit"]=this.HandlebarsPrecompiled["web-edit"]||{},this.HandlebarsPrecompiled["web-edit"].wizard=function(e,t,i,a,n){function r(e,t){var a,n="";return n+='\n        <div class="alpaca-wizard-nav">\n            <nav class="navbar navbar-default" role="navigation">\n                <div class="container-fluid alpaca-wizard-back">\n                    <ul class="nav navbar-nav">\n                        ',a=i.each.call(e,e&&e.steps,{hash:{},inverse:v.noop,fn:v.program(2,o,t),data:t}),(a||0===a)&&(n+=a),n+="\n                    </ul>\n                </div>\n            </nav>\n        </div>\n        "}function o(e,t){var a,n,r="";return r+='\n                        <li data-alpaca-wizard-step-index="'+g((a=null==t||t===!1?t:t.index,typeof a===m?a.apply(e):a))+'">\n                            <div class="holder">\n                                <div class="title">',(n=i.title)?a=n.call(e,{hash:{},data:t}):(n=e&&e.title,a=typeof n===m?n.call(e,{hash:{},data:t}):n),(a||0===a)&&(r+=a),r+='</div>\n                                <div class="description">',(n=i.description)?a=n.call(e,{hash:{},data:t}):(n=e&&e.description,a=typeof n===m?n.call(e,{hash:{},data:t}):n),(a||0===a)&&(r+=a),r+='</div>\n                            </div>\n                            <div class="chevron"></div>\n                        </li>\n                        '}function s(){return'\n        <div class="alpaca-wizard-progress-bar">\n            <div class="progress">\n                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">\n                </div>\n            </div>\n        </div>\n        '}function l(e,t){var a,n,r="";return r+="\n            <h3>",(n=i.wizardTitle)?a=n.call(e,{hash:{},data:t}):(n=e&&e.wizardTitle,a=typeof n===m?n.call(e,{hash:{},data:t}):n),(a||0===a)&&(r+=a),r+="</h3>\n        "}function c(e,t){var a,n,r="";return r+="\n            <h4>",(n=i.wizardDescription)?a=n.call(e,{hash:{},data:t}):(n=e&&e.wizardDescription,a=typeof n===m?n.call(e,{hash:{},data:t}):n),(a||0===a)&&(r+=a),r+="</h4>\n        "}function d(e,t){var a,n,r,o="";return o+="\n                    ",n=i.compare||e&&e.compare,r={hash:{},inverse:v.noop,fn:v.program(11,p,t),data:t},a=n?n.call(e,e&&e.align,"left",r):y.call(e,"compare",e&&e.align,"left",r),(a||0===a)&&(o+=a),o+="\n                "}function p(e,t){var a,n,r="";return r+='\n                        <button type="',(n=i.type)?a=n.call(e,{hash:{},data:t}):(n=e&&e.type,a=typeof n===m?n.call(e,{hash:{},data:t}):n),r+=g(a)+'" class="btn btn-default" data-alpaca-wizard-button-key="'+g((a=null==t||t===!1?t:t.key,typeof a===m?a.apply(e):a))+'">',(n=i.title)?a=n.call(e,{hash:{},data:t}):(n=e&&e.title,a=typeof n===m?n.call(e,{hash:{},data:t}):n),(a||0===a)&&(r+=a),r+="</button>\n                    "}function u(e,t){var a,n,r,o="";return o+="\n                    ",n=i.compare||e&&e.compare,r={hash:{},inverse:v.noop,fn:v.program(11,p,t),data:t},a=n?n.call(e,e&&e.align,"right",r):y.call(e,"compare",e&&e.align,"right",r),(a||0===a)&&(o+=a),o+="\n                "}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var h,f="",m="function",g=this.escapeExpression,v=this,y=i.helperMissing;return f+='<script type="text/x-handlebars-template">\n\n    <div class="alpaca-wizard">\n\n        <!-- nav bar -->\n        ',h=i["if"].call(t,t&&t.showSteps,{hash:{},inverse:v.noop,fn:v.program(1,r,n),data:n}),(h||0===h)&&(f+=h),f+="\n\n        <!-- wizard progress bar -->\n        ",h=i["if"].call(t,t&&t.showProgressBar,{hash:{},inverse:v.noop,fn:v.program(4,s,n),data:n}),(h||0===h)&&(f+=h),f+="\n\n        ",h=i["if"].call(t,t&&t.wizardTitle,{hash:{},inverse:v.noop,fn:v.program(6,l,n),data:n}),(h||0===h)&&(f+=h),f+="\n        ",h=i["if"].call(t,t&&t.wizardDescription,{hash:{},inverse:v.noop,fn:v.program(8,c,n),data:n}),(h||0===h)&&(f+=h),f+='\n\n        <!-- wizard steps -->\n        <div class="alpaca-wizard-steps">\n\n        </div>\n\n        <!-- wizard buttons -->\n        <div class="alpaca-wizard-buttons">\n\n            <div class="pull-left">\n                ',h=i.each.call(t,t&&t.buttons,{hash:{},inverse:v.noop,fn:v.program(10,d,n),data:n}),(h||0===h)&&(f+=h),f+='\n            </div>\n\n            <div class="pull-right">\n                ',h=i.each.call(t,t&&t.buttons,{hash:{},inverse:v.noop,fn:v.program(13,u,n),data:n}),(h||0===h)&&(f+=h),f+='\n            </div>\n\n            <div style="clear:both"></div>\n\n        </div>\n\n    </div>\n\n</script>'},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["bootstrap-display"]=this.HandlebarsPrecompiled["bootstrap-display"]||{},this.HandlebarsPrecompiled["bootstrap-display"]["container-array"]=function(e,t,i,a,n){function r(e,t){var a,n,r,s="";return s+="\n\n            ",r={hash:{},inverse:c.noop,fn:c.program(2,o,t),data:t},(n=i.item)?a=n.call(e,r):(n=e&&e.item,a=typeof n===d?n.call(e,r):n),i.item||(a=p.call(e,a,{hash:{},inverse:c.noop,fn:c.program(2,o,t),data:t})),(a||0===a)&&(s+=a),s+="\n\n        "}function o(){var e="";return e}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var s,l="",c=this,d="function",p=i.blockHelperMissing;return l+='<script type="text/x-handlebars-template">\n\n    <div>\n\n        ',s=i.each.call(t,t&&t.items,{hash:{},inverse:c.noop,fn:c.program(1,r,n),data:n}),(s||0===s)&&(l+=s),l+="\n\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["bootstrap-display"]=this.HandlebarsPrecompiled["bootstrap-display"]||{},this.HandlebarsPrecompiled["bootstrap-display"]["container-object"]=function(e,t,i,a,n){function r(e,t){var a,n,r,s="";return s+="\n\n            ",r={hash:{},inverse:c.noop,fn:c.program(2,o,t),data:t},(n=i.item)?a=n.call(e,r):(n=e&&e.item,a=typeof n===d?n.call(e,r):n),i.item||(a=p.call(e,a,{hash:{},inverse:c.noop,fn:c.program(2,o,t),data:t})),(a||0===a)&&(s+=a),s+="\n\n        "}function o(){var e="";return e}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var s,l="",c=this,d="function",p=i.blockHelperMissing;return l+='<script type="text/x-handlebars-template">\n\n    <div>\n\n        ',s=i.each.call(t,t&&t.items,{hash:{},inverse:c.noop,fn:c.program(1,r,n),data:n}),(s||0===s)&&(l+=s),l+="\n\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["bootstrap-display"]=this.HandlebarsPrecompiled["bootstrap-display"]||{},this.HandlebarsPrecompiled["bootstrap-display"].container=function(e,t,i,a,n){function r(e,t){var a,n="";return n+='\n        <legend class="',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.labelClass),{hash:{},inverse:g.noop,fn:g.program(2,o,t),data:t}),(a||0===a)&&(n+=a),n+=' alpaca-container-label">',a=e&&e.options,a=null==a||a===!1?a:a.label,a=typeof a===f?a.apply(e):a,(a||0===a)&&(n+=a),n+="</legend>\n        "
}function o(e){var t;return m((t=e&&e.options,t=null==t||t===!1?t:t.labelClass,typeof t===f?t.apply(e):t))}function s(e,t){var a,n="";return n+='\n        <p class="alpaca-helper help-block ',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.helperClass),{hash:{},inverse:g.noop,fn:g.program(5,l,t),data:t}),(a||0===a)&&(n+=a),n+='">\n            <i class="alpaca-icon-16 glyphicon glyphicon-info-sign"></i>\n            ',a=e&&e.options,a=null==a||a===!1?a:a.helper,a=typeof a===f?a.apply(e):a,(a||0===a)&&(n+=a),n+="\n        </p>\n        "}function l(e){var t;return m((t=e&&e.options,t=null==t||t===!1?t:t.helperClass,typeof t===f?t.apply(e):t))}function c(){var e="";return e}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var d,p,u,h="",f="function",m=this.escapeExpression,g=this,v=i.blockHelperMissing;return h+='<script type="text/x-handlebars-template">\n\n    <div>\n\n        ',d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.label),{hash:{},inverse:g.noop,fn:g.program(1,r,n),data:n}),(d||0===d)&&(h+=d),h+="\n\n        ",d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.helper),{hash:{},inverse:g.noop,fn:g.program(4,s,n),data:n}),(d||0===d)&&(h+=d),h+="\n\n        ",u={hash:{},inverse:g.noop,fn:g.program(7,c,n),data:n},(p=i.container)?d=p.call(t,u):(p=t&&t.container,d=typeof p===f?p.call(t,u):p),i.container||(d=v.call(t,d,{hash:{},inverse:g.noop,fn:g.program(7,c,n),data:n})),(d||0===d)&&(h+=d),h+="\n\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["bootstrap-display"]=this.HandlebarsPrecompiled["bootstrap-display"]||{},this.HandlebarsPrecompiled["bootstrap-display"]["control-radio"]=function(e,t,i,a,n){function r(e,t,a){var n,r,s,l="";return l+="\n            ",r=i.compare||e&&e.compare,s={hash:{},inverse:d.noop,fn:d.program(2,o,t),data:t},n=r?r.call(e,e&&e.value,a&&a.data,s):p.call(e,"compare",e&&e.value,a&&a.data,s),(n||0===n)&&(l+=n),l+="\n        "}function o(e,t){var a,n,r="";return r+="\n                ",(n=i.text)?a=n.call(e,{hash:{},data:t}):(n=e&&e.text,a=typeof n===c?n.call(e,{hash:{},data:t}):n),(a||0===a)&&(r+=a),r+="\n            "}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var s,l="",c="function",d=this,p=i.helperMissing;return l+='<script type="text/x-handlebars-template">\n\n    <div>\n        ',s=i.each.call(t,t&&t.selectOptions,{hash:{},inverse:d.noop,fn:d.programWithDepth(1,r,n,t),data:n}),(s||0===s)&&(l+=s),l+="\n    </div>\n\n</script>\n"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["bootstrap-display"]=this.HandlebarsPrecompiled["bootstrap-display"]||{},this.HandlebarsPrecompiled["bootstrap-display"]["control-select"]=function(e,t,i,a,n){function r(e,t,a){var n,r,s,l="";return l+="\n        ",r=i.compare||e&&e.compare,s={hash:{},inverse:d.noop,fn:d.program(2,o,t),data:t},n=r?r.call(e,e&&e.value,a&&a.data,s):p.call(e,"compare",e&&e.value,a&&a.data,s),(n||0===n)&&(l+=n),l+="\n    "}function o(e,t){var a,n,r="";return r+="\n            ",(n=i.text)?a=n.call(e,{hash:{},data:t}):(n=e&&e.text,a=typeof n===c?n.call(e,{hash:{},data:t}):n),(a||0===a)&&(r+=a),r+="\n        "}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var s,l="",c="function",d=this,p=i.helperMissing;return l+='<script type="text/x-handlebars-template">\n\n    <div>\n    ',s=i.each.call(t,t&&t.selectOptions,{hash:{},inverse:d.noop,fn:d.programWithDepth(1,r,n,t),data:n}),(s||0===s)&&(l+=s),l+="\n    </div>\n\n</script>\n"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["bootstrap-display"]=this.HandlebarsPrecompiled["bootstrap-display"]||{},this.HandlebarsPrecompiled["bootstrap-display"].control=function(e,t,i,a,n){function r(e,t){var a,n,r="";return r+='\n        <label class="',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.labelClass),{hash:{},inverse:g.noop,fn:g.program(2,o,t),data:t}),(a||0===a)&&(r+=a),r+=' control-label alpaca-control-label" for="',(n=i.id)?a=n.call(e,{hash:{},data:t}):(n=e&&e.id,a=typeof n===f?n.call(e,{hash:{},data:t}):n),r+=m(a)+'">',a=e&&e.options,a=null==a||a===!1?a:a.label,a=typeof a===f?a.apply(e):a,(a||0===a)&&(r+=a),r+="</label>\n        "}function o(e){var t;return m((t=e&&e.options,t=null==t||t===!1?t:t.labelClass,typeof t===f?t.apply(e):t))}function s(){var e="";return e}function l(e,t){var a,n="";return n+='\n        <p class="help-block ',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.helperClass),{hash:{},inverse:g.noop,fn:g.program(7,c,t),data:t}),(a||0===a)&&(n+=a),n+='">\n            <i class="glyphicon glyphicon-info-sign"></i>\n            ',a=e&&e.options,a=null==a||a===!1?a:a.helper,a=typeof a===f?a.apply(e):a,(a||0===a)&&(n+=a),n+="\n        </p>\n        "}function c(e){var t;return m((t=e&&e.options,t=null==t||t===!1?t:t.helperClass,typeof t===f?t.apply(e):t))}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var d,p,u,h="",f="function",m=this.escapeExpression,g=this,v=i.blockHelperMissing;return h+='<script type="text/x-handlebars-template">\n\n    <div class="form-group">\n\n        ',d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.label),{hash:{},inverse:g.noop,fn:g.program(1,r,n),data:n}),(d||0===d)&&(h+=d),h+="\n\n        ",u={hash:{},inverse:g.noop,fn:g.program(4,s,n),data:n},(p=i.control)?d=p.call(t,u):(p=t&&t.control,d=typeof p===f?p.call(t,u):p),i.control||(d=v.call(t,d,{hash:{},inverse:g.noop,fn:g.program(4,s,n),data:n})),(d||0===d)&&(h+=d),h+="\n\n        ",d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.helper),{hash:{},inverse:g.noop,fn:g.program(6,l,n),data:n}),(d||0===d)&&(h+=d),h+="\n\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["bootstrap-display"]=this.HandlebarsPrecompiled["bootstrap-display"]||{},this.HandlebarsPrecompiled["bootstrap-display"].message=function(e,t,i,a,n){this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var r,o,s="",l="function";return s+='<script type="text/x-handlebars-template">\n\n    <div class="help-block">\n        <i class="glyphicon glyphicon-exclamation-sign"></i>&nbsp;',(o=i.message)?r=o.call(t,{hash:{},data:n}):(o=t&&t.message,r=typeof o===l?o.call(t,{hash:{},data:n}):o),(r||0===r)&&(s+=r),s+="\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["bootstrap-edit"]=this.HandlebarsPrecompiled["bootstrap-edit"]||{},this.HandlebarsPrecompiled["bootstrap-edit"]["container-array"]=function(e,t,i,a,n){function r(e,t){var a,n,r,s="";return s+="\n\n            ",r={hash:{},inverse:c.noop,fn:c.program(2,o,t),data:t},(n=i.item)?a=n.call(e,r):(n=e&&e.item,a=typeof n===d?n.call(e,r):n),i.item||(a=p.call(e,a,{hash:{},inverse:c.noop,fn:c.program(2,o,t),data:t})),(a||0===a)&&(s+=a),s+="\n\n        "}function o(){var e="";return e}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var s,l="",c=this,d="function",p=i.blockHelperMissing;return l+='<script type="text/x-handlebars-template">\n\n    <div>\n\n        ',s=i.each.call(t,t&&t.items,{hash:{},inverse:c.noop,fn:c.program(1,r,n),data:n}),(s||0===s)&&(l+=s),l+="\n\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["bootstrap-edit"]=this.HandlebarsPrecompiled["bootstrap-edit"]||{},this.HandlebarsPrecompiled["bootstrap-edit"]["container-grid"]=function(e,t,i,a,n){function r(){return" btn-group"}function o(e,t,a){var n,r,o,c="";return c+="\n\n            ",r=i.compare||a&&a.compare,o={hash:{},inverse:v.noop,fn:v.program(4,s,t),data:t},n=r?r.call(e,(n=a&&a.options,null==n||n===!1?n:n.toolbarStyle),"link",o):y.call(e,"compare",(n=a&&a.options,null==n||n===!1?n:n.toolbarStyle),"link",o),(n||0===n)&&(c+=n),c+="\n\n            ",r=i.compare||a&&a.compare,o={hash:{},inverse:v.noop,fn:v.program(6,l,t),data:t},n=r?r.call(e,(n=a&&a.options,null==n||n===!1?n:n.toolbarStyle),"button",o):y.call(e,"compare",(n=a&&a.options,null==n||n===!1?n:n.toolbarStyle),"button",o),(n||0===n)&&(c+=n),c+="\n\n            "}function s(e){var t,i="";return i+='\n            <a href="#" class="alpaca-array-toolbar-action" data-array-toolbar-action="'+g((t=e&&e.action,typeof t===m?t.apply(e):t))+'">'+g((t=e&&e.label,typeof t===m?t.apply(e):t))+"</a>\n            "}function l(e,t){var a,n="";return n+='\n            <button class="alpaca-array-toolbar-action btn btn-default" data-array-toolbar-action="'+g((a=e&&e.action,typeof a===m?a.apply(e):a))+'">\n                ',a=i["if"].call(e,e&&e.iconClass,{hash:{},inverse:v.noop,fn:v.program(7,c,t),data:t}),(a||0===a)&&(n+=a),n+="\n                ",a=i["if"].call(e,e&&e.label,{hash:{},inverse:v.noop,fn:v.program(9,d,t),data:t}),(a||0===a)&&(n+=a),n+="\n            </button>\n            "}function c(e){var t,i="";return i+='\n                <i class="'+g((t=e&&e.iconClass,typeof t===m?t.apply(e):t))+'"></i>\n                '}function d(e,t){var a,n;return(n=i.label)?a=n.call(e,{hash:{},data:t}):(n=e&&e.label,a=typeof n===m?n.call(e,{hash:{},data:t}):n),a||0===a?a:""}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var p,u,h,f="",m="function",g=this.escapeExpression,v=this,y=i.helperMissing;return f+='<script type="text/x-handlebars-template">\n\n    <div>\n\n        <div class="alpaca-array-toolbar" ',u=i.compare||t&&t.compare,h={hash:{},inverse:v.noop,fn:v.program(1,r,n),data:n},p=u?u.call(t,(p=t&&t.options,null==p||p===!1?p:p.toolbarStyle),"button",h):y.call(t,"compare",(p=t&&t.options,null==p||p===!1?p:p.toolbarStyle),"button",h),(p||0===p)&&(f+=p),f+=">\n\n            ",p=i.each.call(t,t&&t.arrayToolbarActions,{hash:{},inverse:v.noop,fn:v.programWithDepth(3,o,n,t),data:n}),(p||0===p)&&(f+=p),f+='\n\n        </div>\n\n        <div class="alpaca-container-grid-holder"></div>\n\n    </div>\n\n</script>'},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["bootstrap-edit"]=this.HandlebarsPrecompiled["bootstrap-edit"]||{},this.HandlebarsPrecompiled["bootstrap-edit"]["container-object"]=function(e,t,i,a,n){function r(e,t){var a,n,r,s="";return s+="\n\n            ",r={hash:{},inverse:c.noop,fn:c.program(2,o,t),data:t},(n=i.item)?a=n.call(e,r):(n=e&&e.item,a=typeof n===d?n.call(e,r):n),i.item||(a=p.call(e,a,{hash:{},inverse:c.noop,fn:c.program(2,o,t),data:t})),(a||0===a)&&(s+=a),s+="\n\n        "}function o(){var e="";return e}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var s,l="",c=this,d="function",p=i.blockHelperMissing;return l+='<script type="text/x-handlebars-template">\n\n    <div>\n\n        ',s=i.each.call(t,t&&t.items,{hash:{},inverse:c.noop,fn:c.program(1,r,n),data:n}),(s||0===s)&&(l+=s),l+="\n\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["bootstrap-edit"]=this.HandlebarsPrecompiled["bootstrap-edit"]||{},this.HandlebarsPrecompiled["bootstrap-edit"]["container-table"]=function(e,t,i,a,n){function r(){return" btn-group"}function o(e,t,a){var n,r,o,c="";return c+="\n\n        ",r=i.compare||a&&a.compare,o={hash:{},inverse:x.noop,fn:x.program(4,s,t),data:t},n=r?r.call(e,(n=a&&a.options,null==n||n===!1?n:n.toolbarStyle),"link",o):S.call(e,"compare",(n=a&&a.options,null==n||n===!1?n:n.toolbarStyle),"link",o),(n||0===n)&&(c+=n),c+="\n\n        ",r=i.compare||a&&a.compare,o={hash:{},inverse:x.noop,fn:x.program(6,l,t),data:t},n=r?r.call(e,(n=a&&a.options,null==n||n===!1?n:n.toolbarStyle),"button",o):S.call(e,"compare",(n=a&&a.options,null==n||n===!1?n:n.toolbarStyle),"button",o),(n||0===n)&&(c+=n),c+="\n\n        "}function s(e){var t,i="";return i+='\n        <a href="#" class="alpaca-array-toolbar-action" data-array-toolbar-action="'+F((t=e&&e.action,typeof t===w?t.apply(e):t))+'">',t=e&&e.label,t=typeof t===w?t.apply(e):t,(t||0===t)&&(i+=t),i+="</a>\n        "}function l(e,t){var a,n="";return n+='\n        <button class="alpaca-array-toolbar-action btn btn-default" data-array-toolbar-action="'+F((a=e&&e.action,typeof a===w?a.apply(e):a))+'">\n            ',a=i["if"].call(e,e&&e.iconClass,{hash:{},inverse:x.noop,fn:x.program(7,c,t),data:t}),(a||0===a)&&(n+=a),n+="\n            ",a=i["if"].call(e,e&&e.label,{hash:{},inverse:x.noop,fn:x.program(9,d,t),data:t}),(a||0===a)&&(n+=a),n+="\n        </button>\n        "}function c(e){var t,i="";return i+='\n            <i class="'+F((t=e&&e.iconClass,typeof t===w?t.apply(e):t))+'"></i>\n            '}function d(e,t){var a,n;return(n=i.label)?a=n.call(e,{hash:{},data:t}):(n=e&&e.label,a=typeof n===w?n.call(e,{hash:{},data:t}):n),a||0===a?a:""}function p(e,t){var a,n,r="";return r+="\n                    <th>",(n=i.label)?a=n.call(e,{hash:{},data:t}):(n=e&&e.label,a=typeof n===w?n.call(e,{hash:{},data:t}):n),(a||0===a)&&(r+=a),r+="</th>\n                    "}function u(e,t,a){var n,r="";return r+="\n                <tr>\n                    ",n=i.each.call(e,e&&e.data,{hash:{},inverse:x.noop,fn:x.program(14,h,t),data:t}),(n||0===n)&&(r+=n),r+='\n\n                    <!-- actions cell -->\n                    <td>\n                        <div class="alpaca-array-item-actions btn-group">\n                            ',n=i.each.call(e,a&&a.arrayItemActions,{hash:{},inverse:x.noop,fn:x.program(16,f,t),data:t}),(n||0===n)&&(r+=n),r+="\n                        </div>\n                    </td>\n                </tr>\n            "}function h(e){var t,i="";return i+="\n                    <td>",t=typeof e===w?e.apply(e):e,(t||0===t)&&(i+=t),i+="</td>\n                    "}function f(e,t){var a,n,r="";return r+='\n                            <button class="alpaca-array-item-action btn btn-default" data-array-item-action="',(n=i.action)?a=n.call(e,{hash:{},data:t}):(n=e&&e.action,a=typeof n===w?n.call(e,{hash:{},data:t}):n),r+=F(a)+'">\n                                ',a=i["if"].call(e,e&&e.iconClass,{hash:{},inverse:x.noop,fn:x.program(17,m,t),data:t}),(a||0===a)&&(r+=a),r+="\n                                ",a=i["if"].call(e,e&&e.label,{hash:{},inverse:x.noop,fn:x.program(9,d,t),data:t}),(a||0===a)&&(r+=a),r+="\n                            </button>\n                            "}function m(e){var t,i="";return i+='\n                                <i class="'+F((t=e&&e.iconClass,typeof t===w?t.apply(e):t))+'"></i>\n                                '}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var g,v,y,b="",w="function",F=this.escapeExpression,x=this,S=i.helperMissing;return b+='<script type="text/x-handlebars-template">\n\n    <div>\n\n        <div class="alpaca-array-toolbar" ',v=i.compare||t&&t.compare,y={hash:{},inverse:x.noop,fn:x.program(1,r,n),data:n},g=v?v.call(t,(g=t&&t.options,null==g||g===!1?g:g.toolbarStyle),"button",y):S.call(t,"compare",(g=t&&t.options,null==g||g===!1?g:g.toolbarStyle),"button",y),(g||0===g)&&(b+=g),b+=">\n\n        ",g=i.each.call(t,t&&t.arrayToolbarActions,{hash:{},inverse:x.noop,fn:x.programWithDepth(3,o,n,t),data:n}),(g||0===g)&&(b+=g),b+="\n\n        </div>\n\n        <table>\n\n            <!-- table headers -->\n            <thead>\n                <tr>\n                    ",g=i.each.call(t,(g=t&&t.options,null==g||g===!1?g:g.fields),{hash:{},inverse:x.noop,fn:x.program(11,p,n),data:n}),(g||0===g)&&(b+=g),b+="\n\n                    <th>Actions</th>\n                </tr>\n            </thead>\n\n            <!-- table body -->\n            <tbody>\n            ",g=i.each.call(t,t&&t.items,{hash:{},inverse:x.noop,fn:x.programWithDepth(13,u,n,t),data:n}),(g||0===g)&&(b+=g),b+="\n            </tbody>\n\n        </table>\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["bootstrap-edit"]=this.HandlebarsPrecompiled["bootstrap-edit"]||{},this.HandlebarsPrecompiled["bootstrap-edit"].container=function(e,t,i,a,n){function r(e,t){var a,n="";return n+='\n        <legend class="',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.labelClass),{hash:{},inverse:y.noop,fn:y.program(2,o,t),data:t}),(a||0===a)&&(n+=a),n+=' alpaca-container-label">\n\n            ',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.collapsible),{hash:{},inverse:y.noop,fn:y.program(4,s,t),data:t}),(a||0===a)&&(n+=a),n+="\n\n            ",a=e&&e.options,a=null==a||a===!1?a:a.label,a=typeof a===g?a.apply(e):a,(a||0===a)&&(n+=a),n+="\n\n            ",a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.collapsible),{hash:{},inverse:y.noop,fn:y.program(6,l,t),data:t}),(a||0===a)&&(n+=a),n+="\n\n        </legend>\n        "}function o(e){var t;return v((t=e&&e.options,t=null==t||t===!1?t:t.labelClass,typeof t===g?t.apply(e):t))}function s(){return'\n            <span data-toggle="collapse">\n            '}function l(){return"\n            </span>\n            "}function c(e,t){var a,n="";return n+='\n        <p class="alpaca-helper help-block ',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.helperClass),{hash:{},inverse:y.noop,fn:y.program(9,d,t),data:t}),(a||0===a)&&(n+=a),n+='">\n            <i class="alpaca-icon-16 glyphicon glyphicon-info-sign"></i>\n            ',a=e&&e.options,a=null==a||a===!1?a:a.helper,a=typeof a===g?a.apply(e):a,(a||0===a)&&(n+=a),n+="\n        </p>\n        "}function d(e){var t;return v((t=e&&e.options,t=null==t||t===!1?t:t.helperClass,typeof t===g?t.apply(e):t))}function p(){var e="";return e}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var u,h,f,m="",g="function",v=this.escapeExpression,y=this,b=i.blockHelperMissing;return m+='<script type="text/x-handlebars-template">\n\n    <div>\n\n        ',u=i["if"].call(t,(u=t&&t.options,null==u||u===!1?u:u.label),{hash:{},inverse:y.noop,fn:y.program(1,r,n),data:n}),(u||0===u)&&(m+=u),m+="\n\n        ",u=i["if"].call(t,(u=t&&t.options,null==u||u===!1?u:u.helper),{hash:{},inverse:y.noop,fn:y.program(8,c,n),data:n}),(u||0===u)&&(m+=u),m+="\n\n        ",f={hash:{},inverse:y.noop,fn:y.program(11,p,n),data:n},(h=i.container)?u=h.call(t,f):(h=t&&t.container,u=typeof h===g?h.call(t,f):h),i.container||(u=b.call(t,u,{hash:{},inverse:y.noop,fn:y.program(11,p,n),data:n})),(u||0===u)&&(m+=u),m+="\n\n    </div>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["bootstrap-edit"]=this.HandlebarsPrecompiled["bootstrap-edit"]||{},this.HandlebarsPrecompiled["bootstrap-edit"]["control-upload-partial-download"]=function(e,t,i,a,n){function r(e){var t,i="";return i+='\n        <td></td>\n        <td class="name">\n            <span>'+y((t=e&&e.file,t=null==t||t===!1?t:t.name,typeof t===v?t.apply(e):t))+'</span>\n        </td>\n        <td class="size">\n            <span>'+y((t=e&&e.file,t=null==t||t===!1?t:t.size,typeof t===v?t.apply(e):t))+'</span>\n        </td>\n        <td class="error" colspan="2">\n            Error:\n            '+y((t=e&&e.file,t=null==t||t===!1?t:t.error,typeof t===v?t.apply(e):t))+"\n        </td>\n    "}function o(e,t){var a,n="";return n+='\n        <td class="preview">\n            ',a=i["if"].call(e,(a=e&&e.file,null==a||a===!1?a:a.thumbnailUrl),{hash:{},inverse:b.noop,fn:b.program(4,s,t),data:t}),(a||0===a)&&(n+=a),n+='\n        </td>\n        <td class="name">\n            <a href="'+y((a=e&&e.file,a=null==a||a===!1?a:a.url,typeof a===v?a.apply(e):a))+'" title="'+y((a=e&&e.file,a=null==a||a===!1?a:a.name,typeof a===v?a.apply(e):a))+'" data-gallery="'+y((a=e&&e.file,a=null==a||a===!1?a:a.thumbnailUrl,typeof a===v?a.apply(e):a))+'gallery" download="'+y((a=e&&e.file,a=null==a||a===!1?a:a.name,typeof a===v?a.apply(e):a))+'">'+y((a=e&&e.file,a=null==a||a===!1?a:a.name,typeof a===v?a.apply(e):a))+'</a>\n        </td>\n        <td class="size"><span>'+y((a=e&&e.file,a=null==a||a===!1?a:a.size,typeof a===v?a.apply(e):a))+'</span></td>\n        <td colspan="2"></td>\n    '}function s(e){var t,i="";return i+='\n            <a href="'+y((t=e&&e.file,t=null==t||t===!1?t:t.url,typeof t===v?t.apply(e):t))+'" title="'+y((t=e&&e.file,t=null==t||t===!1?t:t.name,typeof t===v?t.apply(e):t))+'" data-gallery="gallery" download="'+y((t=e&&e.file,t=null==t||t===!1?t:t.name,typeof t===v?t.apply(e):t))+'">\n                <img src="'+y((t=e&&e.file,t=null==t||t===!1?t:t.thumbnailUrl,typeof t===v?t.apply(e):t))+'">\n            </a>\n            '}function l(e,t){var a,n="";return n+="\n                ",a=i.each.call(e,e&&e.buttons,{hash:{},inverse:b.noop,fn:b.programWithDepth(7,c,t,e),data:t}),(a||0===a)&&(n+=a),n+="\n            "}function c(e,t,a){var n,r="";return r+="\n                    ",n=i["if"].call(e,e&&e.isDelete,{hash:{},inverse:b.programWithDepth(11,u,t,a),fn:b.program(8,d,t),data:t}),(n||0===n)&&(r+=n),r+="\n                "}function d(e,t){var a,n="";return n+='\n                        <button class="delete btn btn-danger" data-type="'+y((a=e&&e.file,a=null==a||a===!1?a:a.deleteType,typeof a===v?a.apply(e):a))+'" data-file-id="'+y((a=e&&e.file,a=null==a||a===!1?a:a.id,typeof a===v?a.apply(e):a))+'" data-url="'+y((a=e&&e.file,a=null==a||a===!1?a:a.deleteUrl,typeof a===v?a.apply(e):a))+'" ',a=i["if"].call(e,(a=e&&e.file,null==a||a===!1?a:a.deleteWithCredentials),{hash:{},inverse:b.noop,fn:b.program(9,p,t),data:t}),(a||0===a)&&(n+=a),n+='>\n                            <i class="glyphicon glyphicon-trash glyphicon-white"></i>\n                        </button>\n                    '}function p(){return'data-xhr-fields="{\\"withCredentials\\":true}" '}function u(e,t,a){var n,r,o="";return o+='\n                        <button class="',(r=i.key)?n=r.call(e,{hash:{},data:t}):(r=e&&e.key,n=typeof r===v?r.call(e,{hash:{},data:t}):r),o+=y(n)+" btn ",(r=i.buttonClass)?n=r.call(e,{hash:{},data:t}):(r=e&&e.buttonClass,n=typeof r===v?r.call(e,{hash:{},data:t}):r),o+=y(n)+'" data-file-id="'+y((n=a&&a.file,n=null==n||n===!1?n:n.id,typeof n===v?n.apply(e):n))+'">\n                            ',n=i["if"].call(e,e&&e.iconClass,{hash:{},inverse:b.noop,fn:b.program(12,h,t),data:t}),(n||0===n)&&(o+=n),o+="\n                            ",n=i["if"].call(e,e&&e.label,{hash:{},inverse:b.noop,fn:b.program(14,f,t),data:t}),(n||0===n)&&(o+=n),o+="\n                        </button>\n                    "}function h(e,t){var a,n,r="";return r+='\n                                <i class="',(n=i.iconClass)?a=n.call(e,{hash:{},data:t}):(n=e&&e.iconClass,a=typeof n===v?n.call(e,{hash:{},data:t}):n),r+=y(a)+'"></i>\n                            '}function f(e,t){var a,n,r="";return r+="\n                                ",(n=i.label)?a=n.call(e,{hash:{},data:t}):(n=e&&e.label,a=typeof n===v?n.call(e,{hash:{},data:t}):n),r+=y(a)+"\n                            "}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var m,g="",v="function",y=this.escapeExpression,b=this;return g+='<script type="text/x-handlebars-template">\n\n    <tr class="template-download">\n    ',m=i["if"].call(t,(m=t&&t.file,null==m||m===!1?m:m.error),{hash:{},inverse:b.program(3,o,n),fn:b.program(1,r,n),data:n}),(m||0===m)&&(g+=m),g+="\n        <td>\n            ",m=i["if"].call(t,t&&t.buttons,{hash:{},inverse:b.noop,fn:b.program(6,l,n),data:n}),(m||0===m)&&(g+=m),g+="\n        </td>\n    </tr>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["bootstrap-edit"]=this.HandlebarsPrecompiled["bootstrap-edit"]||{},this.HandlebarsPrecompiled["bootstrap-edit"]["control-upload-partial-upload"]=function(e,t,i,a,n){function r(){return'\n        <td class="preview">\n            <span class="fade"></span>\n        </td>\n    '}function o(){return"\n        <td></td>\n    "}function s(e){var t,i="";return i+='\n        <td class="error" colspan="2"><span class="label label-important">Error</span> '+y((t=e&&e.file,t=null==t||t===!1?t:t.error,typeof t===v?t.apply(e):t))+"</td>\n    "}function l(e,t){var a,n="";return n+="\n        ",a=i["if"].call(e,(a=e&&e.file,null==a||a===!1?a:a.valid),{hash:{},inverse:b.program(15,h,t),fn:b.program(8,c,t),data:t}),(a||0===a)&&(n+=a),n+="\n    "}function c(e,t){var a,n,r,o="";return o+="\n            ",n=i.compare||e&&e.compare,r={hash:{},inverse:b.noop,fn:b.program(9,d,t),data:t},a=n?n.call(e,null==t||t===!1?t:t.index,0,r):w.call(e,"compare",null==t||t===!1?t:t.index,0,r),(a||0===a)&&(o+=a),o+='\n            <td class="start">\n                ',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.autoUpload),{hash:{},inverse:b.program(13,u,t),fn:b.program(11,p,t),data:t}),(a||0===a)&&(o+=a),o+="\n            </td>\n        "}function d(){return'\n                <td>\n                    <div class="progress progress-success progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">\n                        <div class="progress-bar" style="width:0%;"></div>\n                    </div>\n                </td>\n            '}function p(){return"\n                "}function u(){return'\n                <button class="btn btn-primary"> \\\n                    <i class="glyphicon glyphicon-upload glyphicon-white"></i>\n                    <span>Start</span>\n                </button>\n                '}function h(e,t){var a,n,r,o="";return o+='\n            <td></td>\n            <td class="cancel">\n                ',n=i.compare||e&&e.compare,r={hash:{},inverse:b.noop,fn:b.program(16,f,t),data:t},a=n?n.call(e,null==t||t===!1?t:t.index,0,r):w.call(e,"compare",null==t||t===!1?t:t.index,0,r),(a||0===a)&&(o+=a),o+="\n            </td>\n        "}function f(){return'\n                <button class="btn btn-warning">\n                    <i class="glyphicon glyphicon-ban-circle glyphicon-white"></i>\n                    <span>Cancel</span>\n                </button>\n                '}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var m,g="",v="function",y=this.escapeExpression,b=this,w=i.helperMissing;return g+='<script type="text/x-handlebars-template">\n\n    <tr class="template-upload">\n\n    ',m=i["if"].call(t,(m=t&&t.options,null==m||m===!1?m:m.showUploadPreview),{hash:{},inverse:b.program(3,o,n),fn:b.program(1,r,n),data:n}),(m||0===m)&&(g+=m),g+='\n\n        <td class="name"><span>'+y((m=t&&t.file,m=null==m||m===!1?m:m.name,typeof m===v?m.apply(t):m))+'</span></td>\n        <td class="size"><span>'+y((m=t&&t.file,m=null==m||m===!1?m:m.size,typeof m===v?m.apply(t):m))+"</span></td>\n\n    ",m=i["if"].call(t,(m=t&&t.file,null==m||m===!1?m:m.error),{hash:{},inverse:b.program(7,l,n),fn:b.program(5,s,n),data:n}),(m||0===m)&&(g+=m),g+="\n        <td></td>\n    </tr>\n\n</script>"},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["bootstrap-edit"]=this.HandlebarsPrecompiled["bootstrap-edit"]||{},this.HandlebarsPrecompiled["bootstrap-edit"]["control-upload"]=function(e,t,i,a,n){function r(e,t){var a,n;return(n=i.cssClasses)?a=n.call(e,{hash:{},data:t}):(n=e&&e.cssClasses,a=typeof n===u?n.call(e,{hash:{},data:t}):n),h(a)}function o(e,t){var a,n="";return n+="\n                        <thead>\n                            <tr>\n                                ",a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.showUploadPreview),{hash:{},inverse:f.program(6,l,t),fn:f.program(4,s,t),data:t}),(a||0===a)&&(n+=a),n+='\n                                <td>Name</td>\n                                <td>Size</td>\n                                <td colspan="2"></td><!-- error or start or progress indicator -->\n                                <td>Actions</td>\n                            </tr>\n                        </thead>\n                        '}function s(){return"\n                                    <td>Thumbnail</td>\n                                "}function l(){return"\n                                    <td></td>\n                                "}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var c,d,p="",u="function",h=this.escapeExpression,f=this;return p+='<script type="text/x-handlebars-template">\n\n    <div class="alpaca-fileupload-container ',c=i["if"].call(t,t&&t.cssClasses,{hash:{},inverse:f.noop,fn:f.program(1,r,n),data:n}),(c||0===c)&&(p+=c),p+='">\n        <div class="container-fluid">\n            <div class="row">\n                <div class="col-md-12">\n                    <div class="btn-group">\n                        <span class="btn btn-default fileinput-button">\n                            <i class="glyphicon glyphicon-upload"></i>\n                            <span class="fileupload-add-button">Choose files...</span>\n                            <input class="alpaca-fileupload-input" type="file" name="',(d=i.name)?c=d.call(t,{hash:{},data:n}):(d=t&&t.name,c=typeof d===u?d.call(t,{hash:{},data:n}):d),p+=h(c)+'_files">\n                            <input class="alpaca-fileupload-input-hidden" type="hidden" name="',(d=i.name)?c=d.call(t,{hash:{},data:n}):(d=t&&t.name,c=typeof d===u?d.call(t,{hash:{},data:n}):d),p+=h(c)+'_files_hidden">\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class="row alpaca-fileupload-well">\n                <div class="col-md-12 fileupload-active-zone">\n                    <table class="table table-striped">\n                        ',c=i["if"].call(t,(c=t&&t.options,null==c||c===!1?c:c.showHeaders),{hash:{},inverse:f.noop,fn:f.program(3,o,n),data:n}),(c||0===c)&&(p+=c),p+='\n                        <tbody class="files">\n                        </tbody>\n                    </table>\n                    <p align="center" class="dropzone-message">Click the Choose button or Drag and Drop files here to start...</p>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-md-12">\n                    <div id="progress" class="progress">\n                        <div class="progress-bar progress-bar-success"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</script>'},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["bootstrap-edit"]=this.HandlebarsPrecompiled["bootstrap-edit"]||{},this.HandlebarsPrecompiled["bootstrap-edit"].control=function(e,t,i,a,n){function r(e,t){var a,n,r="";return r+='\n        <label class="',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.labelClass),{hash:{},inverse:g.noop,fn:g.program(2,o,t),data:t}),(a||0===a)&&(r+=a),r+=' control-label alpaca-control-label" for="',(n=i.id)?a=n.call(e,{hash:{},data:t}):(n=e&&e.id,a=typeof n===f?n.call(e,{hash:{},data:t}):n),r+=m(a)+'">',a=e&&e.options,a=null==a||a===!1?a:a.label,a=typeof a===f?a.apply(e):a,(a||0===a)&&(r+=a),r+="</label>\n        "}function o(e){var t;return m((t=e&&e.options,t=null==t||t===!1?t:t.labelClass,typeof t===f?t.apply(e):t))}function s(){var e="";return e}function l(e,t){var a,n="";return n+='\n        <p class="help-block ',a=i["if"].call(e,(a=e&&e.options,null==a||a===!1?a:a.helperClass),{hash:{},inverse:g.noop,fn:g.program(7,c,t),data:t}),(a||0===a)&&(n+=a),n+='">\n            <i class="glyphicon glyphicon-info-sign"></i>\n            ',a=e&&e.options,a=null==a||a===!1?a:a.helper,a=typeof a===f?a.apply(e):a,(a||0===a)&&(n+=a),n+="\n        </p>\n        "}function c(e){var t;return m((t=e&&e.options,t=null==t||t===!1?t:t.helperClass,typeof t===f?t.apply(e):t))}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var d,p,u,h="",f="function",m=this.escapeExpression,g=this,v=i.blockHelperMissing;return h+='<script type="text/x-handlebars-template">\n\n    <div class="form-group">\n\n        ',d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.label),{hash:{},inverse:g.noop,fn:g.program(1,r,n),data:n}),(d||0===d)&&(h+=d),h+="\n\n        ",u={hash:{},inverse:g.noop,fn:g.program(4,s,n),data:n},(p=i.control)?d=p.call(t,u):(p=t&&t.control,d=typeof p===f?p.call(t,u):p),i.control||(d=v.call(t,d,{hash:{},inverse:g.noop,fn:g.program(4,s,n),data:n})),(d||0===d)&&(h+=d),h+="\n\n        ",d=i["if"].call(t,(d=t&&t.options,null==d||d===!1?d:d.helper),{hash:{},inverse:g.noop,fn:g.program(6,l,n),data:n}),(d||0===d)&&(h+=d),h+="\n\n    </div>\n\n</script>"
},this.HandlebarsPrecompiled=this.HandlebarsPrecompiled||{},this.HandlebarsPrecompiled["bootstrap-edit"]=this.HandlebarsPrecompiled["bootstrap-edit"]||{},this.HandlebarsPrecompiled["bootstrap-edit"].message=function(e,t,i,a,n){this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),n=n||{};var r,o,s="",l="function";return s+='<script type="text/x-handlebars-template">\n\n    <div class="help-block alpaca-message alpaca-message-',(o=i.id)?r=o.call(t,{hash:{},data:n}):(o=t&&t.id,r=typeof o===l?o.call(t,{hash:{},data:n}):o),(r||0===r)&&(s+=r),s+='">\n        <i class="glyphicon glyphicon-exclamation-sign"></i>&nbsp;',(o=i.message)?r=o.call(t,{hash:{},data:n}):(o=t&&t.message,r=typeof o===l?o.call(t,{hash:{},data:n}):o),(r||0===r)&&(s+=r),s+="\n    </div>\n\n</script>"},function(e,t,i){t[e]=i()}("Base",this,function(){var e=function(){};return e.extend=function(t,i){var a=e.prototype.extend;e._prototyping=!0;var n=new this;a.call(n,t),n.base=function(){},delete e._prototyping;var r=n.constructor,o=n.constructor=function(){if(!e._prototyping)if(this._constructing||this.constructor===o)this._constructing=!0,r.apply(this,arguments),delete this._constructing;else if(null!==arguments[0])return(arguments[0].extend||a).call(arguments[0],n)};return o.ancestor=this,o.extend=this.extend,o.forEach=this.forEach,o.implement=this.implement,o.prototype=n,o.toString=this.toString,o.valueOf=function(e){return"object"===e?o:r.valueOf()},a.call(o,i),"function"==typeof o.init&&o.init(),o},e.prototype={extend:function(t,i){if(arguments.length>1){var a=this[t];if(a&&"function"==typeof i&&(!a.valueOf||a.valueOf()!==i.valueOf())&&/\bbase\b/.test(i)){var n=i.valueOf();i=function(){var t=this.base||e.prototype.base;this.base=a;var i=n.apply(this,arguments);return this.base=t,i},i.valueOf=function(e){return"object"===e?i:n},i.toString=e.toString}this[t]=i}else if(t){var r=e.prototype.extend;e._prototyping||"function"==typeof this||(r=this.extend||r);for(var o={toSource:null},s=["constructor","toString","valueOf"],l=e._prototyping?0:1;l<s.length;l++){var c=s[l];t[c]!==o[c]&&r.call(this,c,t[c])}for(var d in t)o[d]||r.call(this,d,t[d])}return this}},e=e.extend({constructor:function(){this.extend(arguments[0])}},{ancestor:Object,version:"1.1",forEach:function(e,t,i){for(var a in e)void 0===this.prototype[a]&&t.call(i,e[a],a,e)},implement:function(){for(var e=0;e<arguments.length;e++)"function"==typeof arguments[e]?arguments[e](this.prototype):this.prototype.extend(arguments[e]);return this},toString:function(){return String(this.valueOf())}})}),function(e){var t=function(){var i=t.makeArray(arguments);if(0===i.length)return t.throwDefaultError("You must supply at least one argument which is the element against which to apply the Alpaca generated form");var a=i[0],n=null,r=null,o=null,s=null,l=null,c=null,d=null,p=null,u=!1,h={},f=null,m=null,g=null,v=null;if(1===i.length){for(var y=e(a).find(":first"),b=null,w=0;w<y.length;w++){var F=y[w],x=e(F).attr("alpaca-field-id");if(x){var S=t.fieldInstances[x];S&&(b=S)}}if(null!==b)return b;var E=e(a).html();e(a).html(""),n=E}if(i.length>=2&&(t.isObject(i[1])?(n=i[1].data,r=i[1].schema,o=i[1].options,s=i[1].view,l=i[1].render,c=i[1].postRender,d=i[1].error,p=i[1].connector,f=i[1].dataSource,m=i[1].schemaSource,g=i[1].optionsSource,v=i[1].viewSource,i[1].ui&&(h.ui=i[1].ui),i[1].type&&(h.type=i[1].type),t.isEmpty(i[1].notTopLevel)||(u=i[1].notTopLevel)):(n=i[1],t.isFunction(n)&&(n=n()))),t.isEmpty(d)&&(d=t.defaultErrorCallback),t.isEmpty(p)){var C=t.getConnectorClass("default");p=new C("default")}a&&t.isString(a)&&(a=e("#"+a));var T=p;if(u){var O=t.getConnectorClass("default");T=new O("default")}o||(o={});var I=function(e){e.parent||(e.hideInitValidationError||e.refreshValidationState(!0),"view"!==e.view.type&&t.fieldApplyFieldAndChildren(e,function(e){e.hideInitValidationError=!1}))},k=function(e){e.parent||(e.observableScope=t.generateId()),t.isUndefined(o.focus)&&!e.parent&&(o.focus=t.defaultFocus),o&&o.focus?window.setTimeout(function(){var t=function(e){e.suspendBlurFocus=!0,e.focus(),e.suspendBlurFocus=!1};if(o.focus){if(e.isControlField&&e.isAutoFocusable())t(e);else if(e.isContainerField)if(o.focus===!0){if(e.children&&e.children.length>0)for(var i=0;i<e.children.length;i++)if(e.children[i].isControlField&&e.children[i].isAutoFocusable()&&!e.children[i].options.readonly){t(e.children[i]);break}}else if("string"==typeof o.focus){var a=e.getControlByPath(o.focus);a&&a.isControlField&&a.isAutoFocusable()&&t(a)}I(e)}},500):I(e),c&&c(e)};T.loadAll({data:n,schema:r,options:o,view:s,dataSource:f,schemaSource:m,optionsSource:g,viewSource:v},function(e,i,c,u){return e=e?e:n,c=c?c:r,i=i?i:o,u=u?u:s,t.isEmpty(e)&&t.isEmpty(c)&&(t.isEmpty(i)||t.isEmpty(i.type))&&(e="",t.isEmpty(i)?i="text":o&&t.isObject(o)&&(i.type="text")),i.view&&(u=i.view),t.init(a,e,i,c,u,h,l,k,p,d)},function(e){return d(e),null})};t.Fields={},t.Connectors={},t.Extend=e.extend,t.Create=function(){var t=Array.prototype.slice.call(arguments);return t.unshift({}),e.extend.apply(this,t)},t.Extend(t,{makeArray:function(e){return Array.prototype.slice.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isString:function(e){return"string"==typeof e},isObject:function(e){return!t.isUndefined(e)&&"[object Object]"===Object.prototype.toString.call(e)},isPlainObject:function(t){return e.isPlainObject(t)},isNumber:function(e){return"number"==typeof e},isArray:function(e){return e instanceof Array},isBoolean:function(e){return"boolean"==typeof e},isUndefined:function(e){return"undefined"==typeof e},trim:function(e){var i=e;return i&&t.isString(i)&&(i=i.replace(/^\s+|\s+$/g,"")),i},safeDomParse:function(i){if(i&&t.isString(i)){i=t.trim(i);var a=null;try{a=e(i)}catch(n){i="<div>"+i+"</div>",a=e(i).children()}return a}return i},isEmpty:function(e){var i=this;if(t.isUndefined(e))return!0;if(null===e)return!0;if(e&&t.isObject(e)){var a=i.countProperties(e);if(0===a)return!0}return!1},countProperties:function(e){var i=0;if(e&&t.isObject(e))for(var a in e)e.hasOwnProperty(a)&&"function"!=typeof e[a]&&i++;return i},copyOf:function(i){var a=i;if(t.isArray(i)){a=[];for(var n=0;n<i.length;n++)a.push(t.copyOf(i[n]))}else if(t.isObject(i)){if(i instanceof Date)return new Date(i.getTime());if(i instanceof RegExp)return new RegExp(i);if(i.nodeType&&"cloneNode"in i)a=i.cloneNode(!0);else if(e.isPlainObject(i)){a={};for(var r in i)i.hasOwnProperty(r)&&(a[r]=t.copyOf(i[r]))}}return a},cloneObject:function(e){return t.copyOf(e)},spliceIn:function(e,t,i){return e.substring(0,t)+i+e.substring(t,e.length)},compactArray:function(e){var t,i=[],a=e.length;for(t=0;a>t;t++)lang.isNull(e[t])||lang.isUndefined(e[t])||i.push(e[t]);return i},removeAccents:function(e){return e.replace(/[àáâãäå]/g,"a").replace(/[èéêë]/g,"e").replace(/[ìíîï]/g,"i").replace(/[òóôõö]/g,"o").replace(/[ùúûü]/g,"u").replace(/[ýÿ]/g,"y").replace(/[ñ]/g,"n").replace(/[ç]/g,"c").replace(/[œ]/g,"oe").replace(/[æ]/g,"ae")},indexOf:function(e,i,a){var n,r=i.length;for(t.isFunction(a)||(a=function(e,t){return e===t}),n=0;r>n;n++)if(a.call({},e,i[n]))return n;return-1},uniqueIdCounter:0,defaultLocale:"en_US",defaultFocus:!0,setDefaultLocale:function(e){this.defaultLocale=e},defaultSchemaFieldMapping:{},registerDefaultSchemaFieldMapping:function(e,t){e&&t&&(this.defaultSchemaFieldMapping[e]=t)},defaultFormatFieldMapping:{},registerDefaultFormatFieldMapping:function(e,t){e&&t&&(this.defaultFormatFieldMapping[e]=t)},getSchemaType:function(e){var i=null;return t.isEmpty(e)&&(i="string"),t.isObject(e)&&(i="object"),t.isString(e)&&(i="string"),t.isNumber(e)&&(i="number"),t.isArray(e)&&(i="array"),t.isBoolean(e)&&(i="boolean"),"object"==typeof e&&(i="object"),i},views:{},generateViewId:function(){return"view-"+this.generateId()},registerView:function(e){var i=e.id;if(!i)return t.throwDefaultError("Cannot register view with missing view id: "+i);var a=this.views[i];if(a)t.mergeObject(a,e);else{this.views[i]=e,e.templates||(e.templates={});for(var n=t.TemplateEngineRegistry.ids(),r=0;r<n.length;r++){var o=n[r],s=t.TemplateEngineRegistry.find(o);if(s)for(var l=s.findCacheKeys(i),c=0;c<l.length;c++){var d=t.splitCacheKey(l[c]);e.templates[d.templateId]={type:o,template:!0,cacheKey:l[c]}}}}},getNormalizedView:function(e){return this.normalizedViews[e]},lookupNormalizedView:function(e,t){var i=null;for(var a in this.normalizedViews){var n=this.normalizedViews[a];if(n.ui===e&&n.type===t){i=a;break}}return i},registerTemplate:function(e,t,i){i||(i="base"),this.views[i]||(this.views[i]={},this.views[i].id=i),this.views[i].templates||(this.views[i].templates={}),this.views[i].templates[e]=t},registerTemplates:function(e,t){for(var i in e)this.registerTemplate(i,e[i],t)},registerMessage:function(e,t,i){i||(i="base"),this.views[i]||(this.views[i]={},this.views[i].id=i),this.views[i].messages||(this.views[i].messages={}),this.views[i].messages[e]=t},registerMessages:function(e,t){for(var i in e)e.hasOwnProperty(i)&&this.registerMessage(i,e[i],t)},defaultDateFormat:"MM/DD/YYYY",defaultTimeFormat:"HH:SS",regexps:{email:/^[a-z0-9!\#\$%&'\*\-\/=\?\+\-\^_`\{\|\}~]+(?:\.[a-z0-9!\#\$%&'\*\-\/=\?\+\-\^_`\{\|\}~]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,6}$/i,url:/^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(\:[0-9]{1,5})?(([0-9]{1,5})?\/.*)?$/i,password:/^[0-9a-zA-Z\x20-\x7E]*$/,date:/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.]\d\d$/,integer:/^([\+\-]?([1-9]\d*)|0)$/,number:/^([\+\-]?((([0-9]+(\.)?)|([0-9]*\.[0-9]+))([eE][+-]?[0-9]+)?))$/,phone:/^(\D?(\d{3})\D?\D?(\d{3})\D?(\d{4}))?$/,ipv4:/^(?:1\d?\d?|2(?:[0-4]\d?|[6789]|5[0-5]?)?|[3-9]\d?|0)(?:\.(?:1\d?\d?|2(?:[0-4]\d?|[6789]|5[0-5]?)?|[3-9]\d?|0)){3}$/,"zipcode-five":/^(\d{5})?$/,"zipcode-nine":/^(\d{5}(-\d{4})?)?$/},fieldInstances:{},fieldClassRegistry:{},registerFieldClass:function(e,t){this.fieldClassRegistry[e]=t},getFieldClass:function(e){return this.fieldClassRegistry[e]},getFieldClassType:function(e){for(var t in this.fieldClassRegistry)if(this.fieldClassRegistry.hasOwnProperty(t)&&this.fieldClassRegistry[t]===e)return t;return null},connectorClassRegistry:{},registerConnectorClass:function(e,t){this.connectorClassRegistry[e]=t},getConnectorClass:function(e){return this.connectorClassRegistry[e]},replaceAll:function(e,t,i){return e.replace(new RegExp(t,"g"),i)},element:function(t,i,a,n){var r=e("<"+t+"/>");if(i&&r.attr(i),a&&r.css(a),n)for(var o in n)r.addClass(o)},elementFromTemplate:function(i,a){var n=i;if(a)for(var r in a)n=t.replaceAll(n,"${"+r+"}",a[r]);return e(n)},generateId:function(){return t.uniqueIdCounter++,"alpaca"+t.uniqueIdCounter},later:function(t,i,a,n,r){t=t||0,i=i||{};var o,s,l=a,c=e.makeArray(n);if("string"==typeof a&&(l=i[a]),!l)throw{name:"TypeError",message:"The function is undefined."};return o=function(){l.apply(i,c)},s=r?setInterval(o,t):setTimeout(o,t),{id:s,interval:r,cancel:function(){this.interval?clearInterval(s):clearTimeout(s)}}},endsWith:function(e,t){return-1!==e.indexOf(t,e.length-t.length)},startsWith:function(e,t){return e.substr(0,t.length)===t},isUri:function(e){return t.isString(e)&&(t.startsWith(e,"http://")||t.startsWith(e,"https://")||t.startsWith(e,"/")||t.startsWith(e,"./")||t.startsWith(e,"../"))},traverseObject:function(e,i,a){t.isString(i)&&(i=i.split("."));var n=null,r=e,o=null;do o=i.shift(),a&&o===a&&(o=i.shift()),t.isEmpty(r[o])?i=[]:(r=r[o],0===i.length&&(n=r));while(i.length>0);return n},each:function(e,i){if(t.isArray(e))for(var a=0;a<e.length;a++)i.apply(e[a]);else if(t.isObject(e))for(var n in e)i.apply(e[n])},merge:function(e,i,a){e||(e={});for(var n in i){var r=!0;a&&(r=a(n)),r&&(t.isEmpty(i[n])?e[n]=i[n]:t.isObject(i[n])?(e[n]||(e[n]={}),e[n]=t.merge(e[n],i[n])):e[n]=i[n])}return e},mergeObject:function(e,t){return e||(e={}),t||(t={}),this.mergeObject2(t,e),e},mergeObject2:function(i,a){var n=t.isArray,r=t.isObject,o=t.isUndefined,s=t.copyOf,l=function(t,i){return n(t)?n(i)&&e.each(t,function(e){i.push(s(t[e]))}):r(t)?r(i)&&e.each(t,function(e){i[e]=o(i[e])?s(t[e]):l(t[e],i[e])}):i=s(t),i};return l(i,a),a},substituteTokens:function(e,i){if(!t.isEmpty(e))for(var a=0;a<i.length;a++){var n="{"+a+"}",r=e.indexOf(n);if(r>-1){var o=e.substring(0,r)+i[a]+e.substring(r+3);e=o}}return e},compareObject:function(e,t){return equiv(e,t)},compareArrayContent:function(t,i){var a=t&&i&&t.length===i.length;if(a)for(var n=t.length-1;n>=0;n--){var r=t[n];if(e.inArray(r,i)<0)return!1}return a},testRegex:function(e,t){var i=new RegExp(e);return i.test(t)},isValEmpty:function(i){var a=!1;return t.isEmpty(i)?a=!0:(t.isString(i)&&""===i&&(a=!0),t.isObject(i)&&e.isEmptyObject(i)&&(a=!0),t.isArray(i)&&0===i.length&&(a=!0),t.isNumber(i)&&isNaN(i)&&(a=!0)),a},init:function(e,i,a,n,r,o,s,l,c,d){var p=this;if(t.isObject(r)){var u=r.id;u||(r.id=this.generateViewId());var h=r.parent;h||(r.parent="web-edit"),this.registerView(r),r=r.id}this.compile(function(u){if(u.errors&&u.errors.length>0){for(var h=[],f=0;f<u.errors.length;f++){var m=u.errors[f].view,g=u.errors[f].cacheKey,v=u.errors[f].err,y="The template with cache key: "+g+" for view: "+m+" failed to compile";v&&v.message&&(y+=", message: "+v.message,h.push(v.message)),v&&(y+=", err: "+JSON.stringify(v)),t.logError(y),delete p.normalizedViews[m],delete p.views[m]}return t.throwErrorWithCallback("View compilation failed, cannot initialize Alpaca. "+h.join(", "),d)}p._init(e,i,a,n,r,o,s,l,c,d)},d)},_init:function(i,a,n,r,o,s,l,c,d,p){var u=this,h=t.defaultView||null,f=null;e.mobile&&!h&&(h="jquerymobile");var m="function"==typeof e.fn.modal;m&&!h&&(h="bootstrap");var g="undefined"!=typeof e.ui;if(g&&!h&&(h="jqueryui"),h&&(f=a?"edit":"create"),!o){var v=s.ui,y=s.type;v||(h||(h=t.defaultUI),h&&(v=h)),v&&(y||(y=f?f:"edit"),t.logDebug("No view provided but found request for UI: "+v+" and type: "+y),o=this.lookupNormalizedView(v,y),t.logDebug(o?"Found view: "+o:"No view found for UI: "+v+" and type: "+y))}if(!o)return t.throwErrorWithCallback("A view was not specified and could not be automatically determined.",p);if(t.isString(o)&&!this.normalizedViews[o])return t.throwErrorWithCallback("The desired view: "+o+" could not be loaded.  Please make sure it is loaded and not misspelled.",p);var b=t.createFieldInstance(i,a,n,r,o,d,p);if(b){e(i).addClass("alpaca-field-rendering"),e(i).addClass("alpaca-hidden"),t.fieldInstances[b.getId()]=b,b.allFieldInstances=function(){return t.fieldInstances},t.isEmpty(l)&&(l=b.view.render),t.isEmpty(c)&&(c=b.view.postRender);var w=function(){b.parent||b.getFieldEl().addClass("alpaca-"+u.getNormalizedView(o).type),b.parent||b.getFieldEl().addClass("alpaca-top"),e(i).removeClass("alpaca-field-rendering"),e(i).removeClass("alpaca-hidden"),b._oldFieldEl&&e(b._oldFieldEl).remove(),c(b)};t.isEmpty(l)?b.render(function(){w()}):l(b,function(){w()}),b.callback=l,b.renderedCallback=c}},createFieldInstance:function(e,i,a,n,r,o,s){if(t.isValEmpty(a)&&(a={}),t.isValEmpty(n)&&(n={}),a&&t.isString(a)){var l=a;a={},a.type=l}a.type||(n.type||(n.type=t.getSchemaType(i)),n.type||(n.type="object"),a.type=n&&n["enum"]?n["enum"].length>3?"select":"radio":t.defaultSchemaFieldMapping[n.type],n.format&&t.defaultFormatFieldMapping[n.format]&&(a.type=t.defaultFormatFieldMapping[n.format]));var c=t.getFieldClass(a.type);return c?new c(e,i,a,n,r,o,s):(s({message:"Unable to find field class for type: "+a.type,reason:"FIELD_INSTANTIATION_ERROR"}),null)},parseJSON:function(t){return t?e.parseJSON(t):null},compile:function(i,a){var n=this,r={errors:[],count:0,successCount:0},o=function(e){if(0===r.errors.length)for(var t in e)n.normalizedViews[t]=e[t];i(r)},s=function(e,t,i,a,n){var s=i.id;r.count++,t?r.errors.push({view:s,cacheKey:a,err:t}):r.successCount++,r.count==n&&o(e)},l=function(i,a,n,r,o,l,c){var d=t.makeCacheKey(a.id,n,r,o),p="text/x-handlebars-template";if(l&&t.isObject(l)&&(p=l.type,l.cacheKey&&(d=l.cacheKey),l=l.template),l&&"string"==typeof l){var u=l.toLowerCase();if(0===u.indexOf("http://")||0===u.indexOf("https://")||0===u.indexOf("/")||0===u.indexOf("./"));else if(!l||0!==l.indexOf("#")&&0!==l.indexOf(".")){if(l){var h=a.templates[l];h&&(l=h)}}else{var f=e(l);p=e(f).attr("type"),l=e(f).html()}}if(!p){t.logError("Engine type was empty");var m=new Error("Engine type was empty");return void s(i,m,a,d,c)}var g=t.TemplateEngineRegistry.find(p);if(!g){t.logError("Cannot find template engine for type: "+type);var m=new Error("Cannot find template engine for type: "+type);return void s(i,m,a,d,c)}if(l===!0){if(g.isCached(d))return void s(i,null,a,d,c);var v="View configuration for view: "+a.id+" claims to have precompiled template for cacheKey: "+d+" but it could not be found";return t.logError(v),void s(i,new Error(v),a,d,c)}return g.isCached(d)?void s(i,null,a,d,c):void g.compile(d,l,function(e){s(i,e,a,d,c)})},c=function(e){var t=[];for(var i in e){var a=e[i];if(a.templates)for(var n in a.templates){var r=a.templates[n];t.push(function(e,t,i,a,n,r){return function(o){l(e,t,i,a,n,r,o)}}(e,a,"view",a.id,n,r))}if(a.fields)for(var o in a.fields)if(a.fields[o].templates)for(var n in a.fields[o].templates){var r=a.fields[o].templates[n];t.push(function(e,t,i,a,n,r){return function(o){l(e,t,i,a,n,r,o)}}(e,a,"field",o,n,r))}if(a.layout&&a.layout.template){var r=a.layout.template;t.push(function(e,t,i,a,n,r){return function(o){l(e,t,i,a,n,r,o)}}(e,a,"layout","layout","layoutTemplate",r))}if(a.globalTemplate){var r=a.globalTemplate;t.push(function(e,t,i,a,n,r){return function(o){l(e,t,i,a,n,r,o)}}(e,a,"global","global","globalTemplate",r))}}for(var s=t.length,c=0;c<t.length;c++)t[c](s)},d=function(){var e={},i=0;t.normalizedViews||(t.normalizedViews={}),n.normalizedViews=t.normalizedViews;for(var r in n.views)if(!t.normalizedViews[r]){var s=new t.NormalizedView(r);if(!s.normalize(n.views))return t.throwErrorWithCallback("View normalization failed, cannot initialize Alpaca.  Please check the error logs.",a);e[r]=s,i++}i>0?c(e):o(e)};d()},getTemplateDescriptor:function(e,i,a){var n=null,r=null,o=null;if(e.templates&&e.templates[i]){o=t.makeCacheKey(e.id,"view",e.id,i);var s=e.templates[i];t.isObject(s)&&s.cacheKey&&(o=s.cacheKey)}if(a&&a.path){var l=a.path;e&&e.fields&&e.fields[l]&&e.fields[l].templates&&e.fields[l].templates[i]&&(o=t.makeCacheKey(e.id,"field",l,i))}if(("globalTemplate"===i||"global"===i)&&(o=t.makeCacheKey(e.id,"global","global","globalTemplate")),("layoutTemplate"===i||"layout"===i)&&(o=t.makeCacheKey(e.id,"layout","layout","layoutTemplate")),o){for(var c=t.TemplateEngineRegistry.ids(),d=0;d<c.length;d++){var p=c[d],u=t.TemplateEngineRegistry.find(p);if(u.isCached(o)){r=p;break}}r&&(n={engine:r,cacheKey:o})}return n},tmpl:function(e,i){var a=t.tmplHtml(e,i);return t.safeDomParse(a)},tmplHtml:function(e,i){i||(i={});var a=e.engine,n=t.TemplateEngineRegistry.find(a);if(!n)return t.throwDefaultError("Cannot find template engine for type: "+a);var r=e.cacheKey,o=n.execute(r,i,function(e){var i=JSON.stringify(e);return e.message&&(i=e.message),t.throwDefaultError("The compiled template: "+r+" failed to execute: "+i)});return o}}),t.DEBUG=0,t.INFO=1,t.WARN=2,t.ERROR=3,t.logLevel=t.WARN,t.logDebug=function(e){t.log(t.DEBUG,e)},t.logInfo=function(e){t.log(t.INFO,e)},t.logWarn=function(e){t.log(t.WARN,e)},t.logError=function(e){t.log(t.ERROR,e)},t.LOG_METHOD_MAP={0:"debug",1:"info",2:"warn",3:"error"},t.log=function(e,i){if(t.logLevel<=e){var a=t.LOG_METHOD_MAP[e];"undefined"!=typeof console&&console[a]&&("debug"===a?console.debug(i):"info"===a?console.info(i):"warn"===a?console.warn(i):"error"===a?console.error(i):console.log(i))}},t.checked=function(e,i){return t.attrProp(e,"checked",i)},t.attrProp=function(t,i,a){return"undefined"!=typeof a&&(e(t).prop?e(t).prop(i,a):a?e(t).attr(i,a):e(t).removeAttr(i)),e(t).prop?e(t).prop(i):e(t).attr(i)},t.loadRefSchemaOptions=function(e,i,a){if(i)if("#"===i)a(e.schema,e.options);else if(0===i.indexOf("#/")){for(var n=i.substring(2),r=n.split("/"),o=e.schema,s=0;s<r.length;s++){var l=r[s];if(o[l])o=o[l];else if(o.properties&&o.properties[l])o=o.properties[l];else{if(!o.definitions||!o.definitions[l]){o=null;break}o=o.definitions[l]}}for(var c=e.options,s=0;s<r.length;s++){var l=r[s];if(c[l])c=c[l];else if(c.fields&&c.fields[l])c=c.fields[l];else{if(!c.definitions||!c.definitions[l]){c=null;break}c=c.definitions[l]}}a(o,c)}else if(0===i.indexOf("#")){var d=t.resolveReference(e.schema,e.options,i);d?a(d.schema,d.options):a()}else{var p=t.pathParts(i);e.connector.loadReferenceSchema(p.path,function(i){e.connector.loadReferenceOptions(p.path,function(e){if(p.id){var n=t.resolveReference(i,e,p.id);n&&(i=n.schema,e=n.options)}a(i,e)},function(){a(i)})},function(){a()})}else a()},t.DEFAULT_ERROR_CALLBACK=function(e){if(e&&e.message)throw t.logError(JSON.stringify(e)),new Error("Alpaca caught an error with the default error handler: "+JSON.stringify(e))},t.defaultErrorCallback=t.DEFAULT_ERROR_CALLBACK,t.throwDefaultError=function(e){e&&t.isObject(e)&&(e=JSON.stringify(e));var i={message:e};t.defaultErrorCallback(i)},t.throwErrorWithCallback=function(e,i){e&&t.isObject(e)&&(e=JSON.stringify(e));var a={message:e};i?i(a):t.defaultErrorCallback(a)},t.resolveReference=function(e,i,a){if(e.id==a){var n={};return e&&(n.schema=e),i&&(n.options=i),n}if(e&&e.properties)for(var r in e.properties){var o=e.properties[r],s=null;i&&i.fields&&i.fields[r]&&(s=i.fields[r]);var l=t.resolveReference(o,s,a);if(l)return l}return null},e.alpaca=window.Alpaca=t,e.fn.alpaca=function(){var e=t.makeArray(arguments),i=[].concat(this,e);return t.apply(this,i),this},e.fn.outerHTML=function(t){return t?e("<div></div>").append(this).html():e("<div></div>").append(this.clone()).html()},e.fn.swapWith=function(t){return this.each(function(){var i=e(t).clone(),a=e(this).clone();e(t).replaceWith(a),e(this).replaceWith(i)})},e.fn.attrProp=function(i,a){return t.attrProp(e(this),i,a)},e.event.special.destroyed={remove:function(e){e.handler&&e.handler()}},t.pathParts=function(e){if("string"!=typeof e)return e;var i=e,a=null,n=i.indexOf("#");n>-1&&(a=i.substring(n+1),i=i.substring(0,n)),t.endsWith(i,"/")&&(i=i.substring(0,i.length-1));var r={};return r.path=i,a&&(r.id=a),r},t.resolveField=function(e,i){var a=null;if("string"==typeof i)if(0===i.indexOf("#/")&&propertyId.length>2);else if("#"===i||"#/"===i)a=e;else if(0===i.indexOf("#")){for(var n=e;n.parent;)n=n.parent;var r=i.substring(1);a=t.resolveFieldByReference(n,r)}else a=e.childrenByPropertyId[i];return a},t.resolveFieldByReference=function(e,i){if(e.schema&&e.schema.id==i)return e;if(e.children&&e.children.length>0)for(var a=0;a<e.children.length;a++){var n=e.children[a],r=t.resolveFieldByReference(n,i);if(r)return r}return null},t.anyEquality=function(e,i){var a={};if("object"==typeof e||t.isArray(e))for(var n in e)a[e[n]]=!0;else a[e]=!0;var r=!1;if("object"==typeof i||t.isArray(i))for(var n in i){var o=i[n];if(a[o]){r=!0;break}}else r=a[i];return r},t.series=function(e,t){async.series(e,function(){t()})},t.parallel=function(e,t){async.parallel(e,function(){t()})},t.nextTick=function(e){async.nextTick(function(){e()})},t.compileValidationContext=function(e,t){var i=[],a=e;do a.isValidationParticipant()||(a=null),a&&i.push(a),a&&(a=a.parent);while(a);i.reverse();var n=[],r=function(e,t,i){if(!e||0===e.length)return void i();var a=e[0],n={};n.id=a.getId(),n.field=a,n.path=a.path;var o=a.isValid();a.isContainer()&&(o=a.isValid(!0)),n.before=o;var s=function(e,i,a){var n=e._previouslyValidated;e.validate(),e._validateCustomValidator(function(){var r=e.isValid();e.isContainer()&&(r=e.isValid(!0)),i.after=r,i.validated=!1,i.invalidated=!1,!o&&r?i.validated=!0:o&&!r?i.invalidated=!0:n||r||(i.invalidated=!0),i.container=e.isContainer(),i.valid=i.after,t.push(i),a()})};if(e.length>1){var l=e.slice(0);l.shift(),r(l,t,function(){s(a,n,function(){i()})})}else s(a,n,function(){i()})};r(i,n,function(){t(n)})},t.updateValidationStateForContext=function(e,i){for(var a=0;a<i.length;a++){var n=i[a],r=n.field;if(r.getFieldEl().removeClass("alpaca-invalid alpaca-invalid-hidden alpaca-valid"),r.fireCallback("clearValidity"),n.valid)r.getFieldEl().addClass("alpaca-field-valid"),r.fireCallback("valid");else if(r.options.readonly)t.logWarn("The field (id="+r.getId()+", title="+r.getTitle()+", path="+r.path+") is invalid and also read-only");else{var o=!1;r.hideInitValidationError&&(o=!0),r.fireCallback("invalid",o),r.getFieldEl().addClass("alpaca-invalid"),o&&r.getFieldEl().addClass("alpaca-invalid-hidden")}if(n.validated?t.later(25,this,function(){r.trigger("validated")}):n.invalidated&&t.later(25,this,function(){r.trigger("invalidated")}),r.options.showMessages&&!r.initializing&&!r.options.readonly){var s=[];for(var l in r.validation)r.validation[l].status||s.push({id:l,message:r.validation[l].message});r.displayMessage(s,r.valid)}}},t.fieldApplyChildren=function(e,t){var i=function(e,t){if(e.children&&e.children.length>0)for(var i=0;i<e.children.length;i++)t(e.children[i])};i(e,t)},t.fieldApplyFieldAndChildren=function(e,i){i(e),t.fieldApplyChildren(e,i)},t.replaceAll=function(e,t,i){return e.replace(new RegExp(t,"g"),i)},t.asArray=function(e){if(!t.isArray(e)){var i=[];return i.push(e),i}return e},function(){function e(e){var t=!1;return function(){if(t)throw new Error("Callback was already called.");t=!0,e.apply(a,arguments)}}function t(e){return e.constructor===String?"string":e.constructor===Boolean?"boolean":e.constructor===Number?isNaN(e)?"nan":"number":"undefined"==typeof e?"undefined":null===e?"null":e instanceof Array?"array":e instanceof Date?"date":e instanceof RegExp?"regexp":"object"==typeof e?"object":e instanceof Function?"function":void 0}function i(e,i,a){var n=t(e);return n?"function"===t(i[n])?i[n].apply(i,a):i[n]:void 0}var a,n,r={};a=this,null!=a&&(n=a.async),r.noConflict=function(){return a.async=n,r};var o=function(e,t){if(e.forEach)return e.forEach(t);for(var i=0;i<e.length;i+=1)t(e[i],i,e)},s=function(e,t){if(e.map)return e.map(t);var i=[];return o(e,function(e,a,n){i.push(t(e,a,n))}),i},l=function(e,t,i){return e.reduce?e.reduce(t,i):(o(e,function(e,a,n){i=t(i,e,a,n)}),i)},c=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var i in e)e.hasOwnProperty(i)&&t.push(i);return t};"undefined"!=typeof process&&process.nextTick?(r.nextTick=process.nextTick,r.setImmediate="undefined"!=typeof setImmediate?function(e){setImmediate(e)}:r.nextTick):"function"==typeof setImmediate?(r.nextTick=function(e){setImmediate(e)},r.setImmediate=r.nextTick):(r.nextTick=function(e){setTimeout(e,0)},r.setImmediate=r.nextTick),r.each=function(t,i,a){if(a=a||function(){},!t.length)return a();var n=0;o(t,function(r){i(r,e(function(e){e?(a(e),a=function(){}):(n+=1,n>=t.length&&a(null))}))})},r.forEach=r.each,r.eachSeries=function(e,t,i){if(i=i||function(){},!e.length)return i();var a=0,n=function(){t(e[a],function(t){t?(i(t),i=function(){}):(a+=1,a>=e.length?i(null):n())})};n()},r.forEachSeries=r.eachSeries,r.eachLimit=function(e,t,i,a){var n=d(t);n.apply(null,[e,i,a])},r.forEachLimit=r.eachLimit;var d=function(e){return function(t,i,a){if(a=a||function(){},!t.length||0>=e)return a();var n=0,r=0,o=0;!function s(){if(n>=t.length)return a();for(;e>o&&r<t.length;)r+=1,o+=1,i(t[r-1],function(e){e?(a(e),a=function(){}):(n+=1,o-=1,n>=t.length?a():s())})}()}},p=function(e){return function(){var t=Array.prototype.slice.call(arguments);return e.apply(null,[r.each].concat(t))}},u=function(e,t){return function(){var i=Array.prototype.slice.call(arguments);return t.apply(null,[d(e)].concat(i))}},h=function(e){return function(){var t=Array.prototype.slice.call(arguments);return e.apply(null,[r.eachSeries].concat(t))}},f=function(e,t,i,a){var n=[];t=s(t,function(e,t){return{index:t,value:e}}),e(t,function(e,t){i(e.value,function(i,a){n[e.index]=a,t(i)})},function(e){a(e,n)})};r.map=p(f),r.mapSeries=h(f),r.mapLimit=function(e,t,i,a){return m(t)(e,i,a)};var m=function(e){return u(e,f)};r.reduce=function(e,t,i,a){r.eachSeries(e,function(e,a){i(t,e,function(e,i){t=i,a(e)})},function(e){a(e,t)})},r.inject=r.reduce,r.foldl=r.reduce,r.reduceRight=function(e,t,i,a){var n=s(e,function(e){return e}).reverse();r.reduce(n,t,i,a)},r.foldr=r.reduceRight;var g=function(e,t,i,a){var n=[];t=s(t,function(e,t){return{index:t,value:e}}),e(t,function(e,t){i(e.value,function(i){i&&n.push(e),t()})},function(){a(s(n.sort(function(e,t){return e.index-t.index}),function(e){return e.value}))})};r.filter=p(g),r.filterSeries=h(g),r.select=r.filter,r.selectSeries=r.filterSeries;var v=function(e,t,i,a){var n=[];t=s(t,function(e,t){return{index:t,value:e}}),e(t,function(e,t){i(e.value,function(i){i||n.push(e),t()})},function(){a(s(n.sort(function(e,t){return e.index-t.index}),function(e){return e.value}))})};r.reject=p(v),r.rejectSeries=h(v);var y=function(e,t,i,a){e(t,function(e,t){i(e,function(i){i?(a(e),a=function(){}):t()})},function(){a()})};r.detect=p(y),r.detectSeries=h(y),r.some=function(e,t,i){r.each(e,function(e,a){t(e,function(e){e&&(i(!0),i=function(){}),a()})},function(){i(!1)})},r.any=r.some,r.every=function(e,t,i){r.each(e,function(e,a){t(e,function(e){e||(i(!1),i=function(){}),a()})},function(){i(!0)})},r.all=r.every,r.sortBy=function(e,t,i){r.map(e,function(e,i){t(e,function(t,a){t?i(t):i(null,{value:e,criteria:a})})},function(e,t){if(e)return i(e);var a=function(e,t){var i=e.criteria,a=t.criteria;return a>i?-1:i>a?1:0};i(null,s(t.sort(a),function(e){return e.value}))})},r.auto=function(e,t){t=t||function(){};var i=c(e);if(!i.length)return t(null);var a={},n=[],s=function(e){n.unshift(e)},d=function(e){for(var t=0;t<n.length;t+=1)if(n[t]===e)return void n.splice(t,1)},p=function(){o(n.slice(0),function(e){e()})};s(function(){c(a).length===i.length&&(t(null,a),t=function(){})}),o(i,function(i){var n=e[i]instanceof Function?[e[i]]:e[i],u=function(e){var n=Array.prototype.slice.call(arguments,1);if(n.length<=1&&(n=n[0]),e){var s={};o(c(a),function(e){s[e]=a[e]}),s[i]=n,t(e,s),t=function(){}}else a[i]=n,r.setImmediate(p)},h=n.slice(0,Math.abs(n.length-1))||[],f=function(){return l(h,function(e,t){return e&&a.hasOwnProperty(t)},!0)&&!a.hasOwnProperty(i)};if(f())n[n.length-1](u,a);else{var m=function(){f()&&(d(m),n[n.length-1](u,a))};s(m)}})},r.waterfall=function(e,t){if(t=t||function(){},e.constructor!==Array){var i=new Error("First argument to waterfall must be an array of functions");return t(i)}if(!e.length)return t();var a=function(e){return function(i){if(i)t.apply(null,arguments),t=function(){};else{var n=Array.prototype.slice.call(arguments,1),o=e.next();n.push(o?a(o):t),r.setImmediate(function(){e.apply(null,n)})}}};a(r.iterator(e))()};var b=function(e,t,i){if(i=i||function(){},t.constructor===Array)e.map(t,function(e,t){e&&e(function(e){var i=Array.prototype.slice.call(arguments,1);i.length<=1&&(i=i[0]),t.call(null,e,i)})},i);else{var a={};e.each(c(t),function(e,i){t[e](function(t){var n=Array.prototype.slice.call(arguments,1);n.length<=1&&(n=n[0]),a[e]=n,i(t)})},function(e){i(e,a)})}};r.parallel=function(e,t){b({map:r.map,each:r.each},e,t)},r.parallelLimit=function(e,t,i){b({map:m(t),each:d(t)},e,i)},r.series=function(e,t){if(t=t||function(){},e.constructor===Array)r.mapSeries(e,function(e,t){e&&e(function(e){var i=Array.prototype.slice.call(arguments,1);i.length<=1&&(i=i[0]),t.call(null,e,i)})},t);else{var i={};r.eachSeries(c(e),function(t,a){e[t](function(e){var n=Array.prototype.slice.call(arguments,1);n.length<=1&&(n=n[0]),i[t]=n,a(e)})},function(e){t(e,i)})}},r.iterator=function(e){var t=function(i){var a=function(){return e.length&&e[i].apply(null,arguments),a.next()};return a.next=function(){return i<e.length-1?t(i+1):null},a};return t(0)},r.apply=function(e){var t=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,t.concat(Array.prototype.slice.call(arguments)))}};var w=function(e,t,i,a){var n=[];e(t,function(e,t){i(e,function(e,i){n=n.concat(i||[]),t(e)})},function(e){a(e,n)})};r.concat=p(w),r.concatSeries=h(w),r.whilst=function(e,t,i){e()?t(function(a){return a?i(a):void r.whilst(e,t,i)
}):i()},r.doWhilst=function(e,t,i){e(function(a){return a?i(a):void(t()?r.doWhilst(e,t,i):i())})},r.until=function(e,t,i){e()?i():t(function(a){return a?i(a):void r.until(e,t,i)})},r.doUntil=function(e,t,i){e(function(a){return a?i(a):void(t()?i():r.doUntil(e,t,i))})},r.queue=function(t,i){function a(e,t,a,n){t.constructor!==Array&&(t=[t]),o(t,function(t){var o={data:t,callback:"function"==typeof n?n:null};a?e.tasks.unshift(o):e.tasks.push(o),e.saturated&&e.tasks.length===i&&e.saturated(),r.setImmediate(e.process)})}void 0===i&&(i=1);var n=0,s={tasks:[],concurrency:i,saturated:null,empty:null,drain:null,push:function(e,t){a(s,e,!1,t)},unshift:function(e,t){a(s,e,!0,t)},process:function(){if(n<s.concurrency&&s.tasks.length){var i=s.tasks.shift();s.empty&&0===s.tasks.length&&s.empty(),n+=1;var a=function(){n-=1,i.callback&&i.callback.apply(i,arguments),s.drain&&s.tasks.length+n===0&&s.drain(),s.process()},r=e(a);t(i.data,r)}},length:function(){return s.tasks.length},running:function(){return n}};return s},r.cargo=function(e,t){var i=!1,a=[],n={tasks:a,payload:t,saturated:null,empty:null,drain:null,push:function(e,i){e.constructor!==Array&&(e=[e]),o(e,function(e){a.push({data:e,callback:"function"==typeof i?i:null}),n.saturated&&a.length===t&&n.saturated()}),r.setImmediate(n.process)},process:function l(){if(!i){if(0===a.length)return void(n.drain&&n.drain());var r="number"==typeof t?a.splice(0,t):a.splice(0),c=s(r,function(e){return e.data});n.empty&&n.empty(),i=!0,e(c,function(){i=!1;var e=arguments;o(r,function(t){t.callback&&t.callback.apply(null,e)}),l()})}},length:function(){return a.length},running:function(){return i}};return n};var F=function(e){return function(t){var i=Array.prototype.slice.call(arguments,1);t.apply(null,i.concat([function(t){var i=Array.prototype.slice.call(arguments,1);"undefined"!=typeof console&&(t?console.error&&console.error(t):console[e]&&o(i,function(t){console[e](t)}))}]))}};r.log=F("log"),r.dir=F("dir"),r.memoize=function(e,t){var i={},a={};t=t||function(e){return e};var n=function(){var n=Array.prototype.slice.call(arguments),r=n.pop(),o=t.apply(null,n);o in i?r.apply(null,i[o]):o in a?a[o].push(r):(a[o]=[r],e.apply(null,n.concat([function(){i[o]=arguments;var e=a[o];delete a[o];for(var t=0,n=e.length;n>t;t++)e[t].apply(null,arguments)}])))};return n.memo=i,n.unmemoized=e,n},r.unmemoize=function(e){return function(){return(e.unmemoized||e).apply(null,arguments)}},r.times=function(e,t,i){for(var a=[],n=0;e>n;n++)a.push(n);return r.map(a,t,i)},r.timesSeries=function(e,t,i){for(var a=[],n=0;e>n;n++)a.push(n);return r.mapSeries(a,t,i)},r.compose=function(){var e=Array.prototype.reverse.call(arguments);return function(){var t=this,i=Array.prototype.slice.call(arguments),a=i.pop();r.reduce(e,i,function(e,i,a){i.apply(t,e.concat([function(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);a(e,t)}]))},function(e,i){a.apply(t,[e].concat(i))})}};var x=function(e,t){var i=function(){var i=this,a=Array.prototype.slice.call(arguments),n=a.pop();return e(t,function(e,t){e.apply(i,a.concat([t]))},n)};if(arguments.length>2){var a=Array.prototype.slice.call(arguments,2);return i.apply(this,a)}return i};r.applyEach=p(x),r.applyEachSeries=h(x),r.forever=function(e,t){function i(a){if(a){if(t)return t(a);throw a}e(i)}i()},a.async=r;!function(){var e,a=[],n=function(){function i(e,t){return e instanceof t.constructor||t instanceof e.constructor?t==e:t===e}return{string:i,"boolean":i,number:i,"null":i,undefined:i,nan:function(e){return isNaN(e)},date:function(e,i){return"date"===t(e)&&i.valueOf()===e.valueOf()},regexp:function(e,i){return"regexp"===t(e)&&i.source===e.source&&i.global===e.global&&i.ignoreCase===e.ignoreCase&&i.multiline===e.multiline},"function":function(){var e=a[a.length-1];return e!==Object&&"undefined"!=typeof e},array:function(i,a){var n,r;if("array"!==t(i))return!1;if(r=a.length,r!==i.length)return!1;for(n=0;r>n;n++)if(!e(a[n],i[n]))return!1;return!0},object:function(t,i){var n,r=!0,o=[],s=[];if(i.constructor!==t.constructor)return!1;a.push(i.constructor);for(n in i)o.push(n),e(i[n],t[n])||(r=!1);a.pop();for(n in t)s.push(n);return r&&e(o.sort(),s.sort())}}}();return e=function(){var e=Array.prototype.slice.apply(arguments);return e.length<2?!0:function(e,a){return e===a?!0:null===e||null===a||"undefined"==typeof e||"undefined"==typeof a||t(e)!==t(a)?!1:i(e,n,[a,e])}(e[0],e[1])&&arguments.callee.apply(this,e.splice(1,e.length-1))}}()}(),t.MARKER_CLASS_CONTROL_FIELD="alpaca-marker-control-field",t.MARKER_CLASS_CONTAINER_FIELD="alpaca-marker-container-field",t.MARKER_CLASS_CONTAINER_FIELD_ITEM="alpaca-marker-control-field-item",t.MARKER_DATA_CONTAINER_FIELD_ITEM_KEY="data-alpaca-container-field-item-key",t.MARKER_CLASS_FORM_ITEMS_FIELD="alpaca-marker-form-items-field",t.CLASS_CONTAINER="alpaca-container",t.CLASS_CONTROL="alpaca-control",t.MARKER_CLASS_INSERT="alpaca-marker-insert",t.MARKER_DATA_INSERT_KEY="data-alpaca-marker-insert-key",t.makeCacheKey=function(e,t,i,a){return e+":"+t+":"+i+":"+a},t.splitCacheKey=function(e){var t={},i=e.indexOf(":"),a=e.lastIndexOf(":");t.viewId=e.substring(0,i),t.templateId=e.substring(a+1);var n=e.substring(i+1,a),r=n.indexOf(":");return t.scopeType=n.substring(0,r),t.scopeId=n.substring(r+1),t},t.createEmptyDataInstance=function(){return""},t.animatedSwap=function(t,i,a,n){"function"==typeof a&&(n=a,a=500);var r=function(t,i,a,n){var r=e(t),o=e(i),s=r.offset(),l=o.offset(),c=r.clone(),d=o.clone(),p=l.top+o.height()-s.top,u=0,h=0,f=l.left+o.width()-s.left,m=0,g=0;r.css("opacity",0),o.css("opacity",0),c.insertAfter(r).css({position:"absolute",width:r.outerWidth(),height:r.outerHeight()}).offset(s).css("z-index","999"),d.insertAfter(o).css({position:"absolute",width:o.outerWidth(),height:o.outerHeight()}).offset(l).css("z-index","999"),s.top!==l.top&&(u=p-r.height()),h=p-o.height(),s.left!==l.left&&(m=f-r.width()),g=f-o.width(),c.animate({top:"+="+u+"px",left:"+="+m+"px"},a,function(){o.css("opacity",1),e(this).remove()}),d.animate({top:"-="+h+"px",left:"-="+g+"px"},a,function(){r.css("opacity",1),e(this).remove()}),window.setTimeout(function(){c.remove(),d.remove(),n()},a+1)};r(t,i,a,n)}}(jQuery),function(e){var t=e.alpaca;t.listenerId=function(){var e=0;return function(){return"listener-"+e++}}(),t.subscribe=function(){var e=t.makeArray(arguments),i=null,a=null,n=null;if(2==e.length?(i="global",a=e.shift(),n=e.shift()):(i=e.shift(),a=e.shift(),n=e.shift()),a&&t.isObject(a)&&(a=a.path),!a)return t.logError("Missing observable subscribe id: "+a),null;var r=n._lfid;r||(r=t.listenerId(),n._lfid=r);var o=function(e){return function(){return n.apply(e,arguments)}}(this);o._lfid=n._lfid;var s=t.ScopedObservables.get(i),l=s.observable(a);return l.subscribe(r,o),{scope:i,id:a,listenerId:r}},t.unsubscribe=function(){var e=t.makeArray(arguments),i=null,a=null,n=null;2==e.length?(i="global",a=e.shift(),n=e.shift()):3==e.length&&(i=e.shift(),a=e.shift(),n=e.shift());var r=n;if(t.isFunction(r)&&(r=r._lfid),a&&t.isObject(a)&&(a=a.path),!a)return t.logError("Missing observable id: "+a),null;var o=t.ScopedObservables.get(i),s=o.observable(a);return s.unsubscribe(r),{scope:i,id:a,listenerId:r}},t.observable=function(){var e,i,a=t.makeArray(arguments);if(1==a.length?(e="global",i=a.shift()):2==a.length&&(e=a.shift(),i=a.shift()),i&&t.isObject(i)&&(i=i.path),i){var n=t.ScopedObservables.get(e);observable=n.observable(i)}else t.logError("Missing observable id: "+JSON.stringify(a));return observable},t.clearObservable=function(){var e,i,a=t.makeArray(arguments);1==a.length?(e="global",i=a.shift()):2==a.length&&(e=a.shift(),i=a.shift()),i&&t.isObject(i)&&(i=i.path),i||t.logError("Missing observable id: "+JSON.stringify(a));var n=t.ScopedObservables.get(e),r=n.observable(i);r.clear()},t.dependentObservable=function(){var e=null,i=null,a=null,n=t.makeArray(arguments);if(2==n.length)e="global",i=n.shift(),a=n.shift();else{if(3!=n.length)return void t.error("Wrong number of arguments");e=n.shift(),i=n.shift(),a=n.shift()}i&&t.isObject(i)&&(i=i.path),i||t.logError("Missing observable id: "+JSON.stringify(n));var r=t.ScopedObservables.get(e);return r.dependentObservable(i,a)}}(jQuery),function(e){var t=e.alpaca;t.Observables=Base.extend({constructor:function(e){this.base(),this.scope=e,this.observables={}},observable:function(e,i){if(!this.observables[e]){var a=new t.Observable(this.scope,e);i&&a.set(i),this.observables[e]=a}return this.observables[e]},dependentObservable:function(e,i){var a=this;if(!this.observables[e]){var n=this.observable(e),r=new t.Observables(this.scope);r.observable=function(e,t){var i=a.observable(e,t);return i.markDependentOnUs(n),i};var o=function(){return i.call(r)};n.setValueFunction(o)}return this.observables[e]},observables:function(){return this.observables}})}(jQuery),function(e){var t=e.alpaca;t.Observable=Base.extend({constructor:function(t,i){this.base(),this.id=t+"-"+i,this.value=null,this.subscribers={},this.dependentOnUs={},this.notifySubscribers=function(t){var i=this;e.each(this.subscribers,function(e,a){a(i.value,t)})},this.notifyDependents=function(){e.each(this.dependentOnUs,function(e,t){t.onDependencyChange()})},this.valueFunction=null},setValueFunction:function(e){this.valueFunction=e,this.onDependencyChange()},subscribe:function(e,t){this.isSubscribed(e)||(this.subscribers[e]=t)},unsubscribe:function(e){delete this.subscribers[e]},isSubscribed:function(e){return this.subscribers[e]?!0:!1},markDependentOnUs:function(e){this.dependentOnUs[e.id]=e},onDependencyChange:function(){var e=this.get();if(this.valueFunction){var t=this.valueFunction();e!=t&&this.set(t)}},set:function(e){var t=this.value;this.value=e,this.notifyDependents(t),this.notifySubscribers(t)},get:function(e){var t=this.value;return t||(t=e),t},clear:function(){var e=this.value;delete this.value,this.notifyDependents(e),this.notifySubscribers(e)}})}(jQuery),function(e){var t=e.alpaca;t.ScopedObservables={},t.ScopedObservables.map={},t.ScopedObservables.get=function(e){return t.ScopedObservables.map[e]||(t.ScopedObservables.map[e]=new t.Observables(e)),t.ScopedObservables.map[e]}}(jQuery),function(){Alpaca.TemplateEngineRegistry=function(){var e={};return{register:function(t,i){e[t]=i,i.init()},find:function(t){var i=null;if(e[t])i=e[t];else for(var a in e)for(var n=e[a].supportedMimetypes(),r=0;r<n.length;r++)if(t.toLowerCase()===n[r].toLowerCase()){i=e[a];break}return i},ids:function(){var t=[];for(var i in e)t.push(i);return t}}}()}(),function(e){Alpaca.AbstractTemplateEngine=Base.extend({constructor:function(t){this.base(),this.id=t,this.cleanup=function(t){return t&&1===e(t).length&&"script"===e(t)[0].nodeName.toLowerCase()?e(t).html():t}},compile:function(t,i,a){var n=this,r="html";if(Alpaca.isString(i)){var o=i.toLowerCase();0===o.indexOf("http://")||0===o.indexOf("https://")||0===o.indexOf("./")||0===o.indexOf("/")||0===o.indexOf("../")?r="uri":(0===i.indexOf("#")||0===i.indexOf(".")||0===i.indexOf("["))&&(r="selector")}if("selector"===r)n._compile(t,i,function(e){a(e)});else if("uri"===r){var s=n.fileExtension(),l=i;-1===l.indexOf("."+s)&&(l+="."+s),e.ajax({url:l,dataType:"html",success:function(e){e=n.cleanup(e),n._compile(t,e,function(e){a(e)})},error:function(e,t){a({message:e.responseText,xhr:e,code:t},null)}})}else if("html"===r){var c=i;c instanceof jQuery&&(c=e(c).outerHTML()),n._compile(t,c,function(e){a(e)})}else a(new Error("Template engine cannot determine how to handle type: "+r))},_compile:function(e,t,i){Alpaca.isEmpty(t)&&(t=""),t=Alpaca.trim(t),0===t.toLowerCase().indexOf("<script")||(t="<script type='"+this.supportedMimetypes()[0]+"'>"+t+"</script>"),Alpaca.logDebug("Compiling template: "+this.id+", cacheKey: "+e+", template: "+t),this.doCompile(e,t,i)},doCompile:function(){},execute:function(e,t,i){Alpaca.logDebug("Executing template for cache key: "+e);var a=this.doExecute(e,t,i);return a=this.cleanup(a)},doExecute:function(){return null},fileExtension:function(){return"html"},supportedMimetypes:function(){return[]},isCached:function(){return!1},findCacheKeys:function(){return[]}})}(jQuery),function($,Handlebars,HandlebarsPrecompiled){var COMPILED_TEMPLATES={},helpers={};helpers.compare=function(e,t,i){if(arguments.length<3)throw new Error("Handlerbars Helper 'compare' needs 2 parameters");var a=i.hash.operator||"==",n={"==":function(e,t){return e==t},"===":function(e,t){return e===t},"!=":function(e,t){return e!=t},"!==":function(e,t){return e!==t},"<":function(e,t){return t>e},">":function(e,t){return e>t},"<=":function(e,t){return t>=e},">=":function(e,t){return e>=t},"typeof":function(e,t){return typeof e==t}};if(!n[a])throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+a);var r=n[a](e,t);return r?i.fn(this):i.inverse(this)},helpers.times=function(e,t){for(var i="",a=0;e>a;++a)i+=t.fn(a);return i},helpers.control=function(){return"<div class='"+Alpaca.MARKER_CLASS_CONTROL_FIELD+"'></div>"},helpers.container=function(){return"<div class='"+Alpaca.MARKER_CLASS_CONTAINER_FIELD+"'></div>"},helpers.item=function(){return"<div class='"+Alpaca.MARKER_CLASS_CONTAINER_FIELD_ITEM+"' "+Alpaca.MARKER_DATA_CONTAINER_FIELD_ITEM_KEY+"='"+this.name+"'></div>"},helpers.formItems=function(){return"<div class='"+Alpaca.MARKER_CLASS_FORM_ITEMS_FIELD+"'></div>"},helpers.insert=function(e){return"<div class='"+Alpaca.MARKER_CLASS_INSERT+"' "+Alpaca.MARKER_DATA_INSERT_KEY+"='"+e+"'></div>"},helpers.str=function(e){return e===!1?"false":e===!0?"true":0===e?"0":"undefined"==typeof e?"":null===e?"":Alpaca.isString(e)?e:Alpaca.isNumber(e)?e:Alpaca.isObject(e)?JSON.stringify(e,null,"  "):Alpaca.isArray(e)?JSON.stringify(e,null,"  "):e},Handlebars.registerHelper("setIndex",function(e){this.index=Number(e)}),Handlebars.registerHelper("uploadErrorMessage",function(e){var t=e;return 1===e?t="File exceeds upload_max_filesize":2===e?t="File exceeds MAX_FILE_SIZE":3===e?t="File was only partially uploaded":4===e?t="No File was uploaded":5===e?t="Missing a temporary folder":6===e?t="Failed to write file to disk":7===e?t="File upload stopped by extension":"maxFileSize"===e?t="File is too big":"minFileSize"===e?t="File is too small":"acceptFileTypes"===e?t="Filetype not allowed":"maxNumberOfFiles"===e?t="Max number of files exceeded":"uploadedBytes"===e?t="Uploaded bytes exceed file size":"emptyResult"===e&&(t="Empty file upload result"),t}),Handlebars.registerHelper("compare",helpers.compare),Handlebars.registerHelper("control",helpers.control),Handlebars.registerHelper("container",helpers.container),Handlebars.registerHelper("item",helpers.item),Handlebars.registerHelper("formItems",helpers.formItems),Handlebars.registerHelper("times",helpers.times),Handlebars.registerHelper("str",helpers.str),Handlebars.registerHelper("with",function(e,t){return t.fn(e)});var partials={};Alpaca.HandlebarsTemplateEngine=Alpaca.AbstractTemplateEngine.extend({fileExtension:function(){return"html"},supportedMimetypes:function(){return["text/x-handlebars-template","text/x-handlebars-tmpl"]},init:function(){if(HandlebarsPrecompiled)for(var e in HandlebarsPrecompiled){var t=HandlebarsPrecompiled[e];for(var i in t){var a=t[i];if("function"==typeof a){var n=Alpaca.makeCacheKey(e,"view",e,i);COMPILED_TEMPLATES[n]=a}}}},doCompile:function(cacheKey,html,callback){var self=this,template=null;try{var functionString=Handlebars.precompile(html);template=eval("("+functionString+")"),COMPILED_TEMPLATES[cacheKey]=template}catch(e){return void callback(e)}callback()},doExecute:function(e,t,i){var a=COMPILED_TEMPLATES[e];if(!a)return void i(new Error("Could not find handlebars cached template for key: "+e));var n=null;try{n=Handlebars.template(a)(t)}catch(r){return i(r),null}return n},isCached:function(e){return COMPILED_TEMPLATES[e]?!0:!1},findCacheKeys:function(e){var t=[];for(var i in COMPILED_TEMPLATES)0===i.indexOf(e+":")&&t.push(i);return t}}),Alpaca.TemplateEngineRegistry.register("handlebars",new Alpaca.HandlebarsTemplateEngine("handlebars"))}(jQuery,"undefined"!=typeof Handlebars?Handlebars:window.Handlebars,"undefined"!=typeof HandlebarsPrecompiled?HandlebarsPrecompiled:window.HandlebarsPrecompiled),function(e){var t=e.alpaca;t.NormalizedView=Base.extend({constructor:function(e){this.id=e},normalize:function(e){var i=e[this.id];if(!i)return t.logError("View compilation failed - view not found: "+this.id),!1;for(var a=[],n=i;n;){a.push(n);var r=n.parent;if(r){var o=e[n.parent];if(!o)return t.logError("View compilation failed - cannot find parent view: "+r+" for view: "+n.id),!1;n=o}else n=null}a=a.reverse();for(var s=function(e,i,a){var n=i[a],r=e[a];t.isUndefined(r)||t.isUndefined(n)||t.logDebug("View property: "+a+" already has value: "+r+" and overwriting to: "+n),t.isUndefined(n)||(e[a]=n)},l=function(e,i,a){var n=i[a],r=e[a];t.isUndefined(r)||t.isUndefined(n)||t.logDebug("View property: "+a+" already has function, overwriting"),t.isUndefined(n)||(e[a]=n)},c=function(e,i,a){var n=i[a];n&&(e[a]||(e[a]={}),t.mergeObject2(n,e[a]))},d=0;d<a.length;d++){var p=a[d];s(this,p,"type"),s(this,p,"ui"),s(this,p,"displayReadonly"),l(this,p,"render"),l(this,p,"postRender"),c(this,p,"templates"),c(this,p,"fields"),c(this,p,"layout"),c(this,p,"styles"),c(this,p,"callbacks"),c(this,p,"messages"),s(this,p,"horizontal"),s(this,p,"collapsible"),s(this,p,"legendStyle"),s(this,p,"toolbarStyle"),s(this,p,"buttonStyle"),s(this,p,"toolbarSticky"),s(this,p,"globalTemplate"),c(this,p,"wizard")}return t.logDebug("View compilation complete for view: "+this.id),t.logDebug("Final view: "),t.logDebug(JSON.stringify(this,null,"   ")),!0}})}(jQuery),function(e){var t=e.alpaca;t.RuntimeView=Base.extend({constructor:function(e,t){this.field=t,this.setView(e)},setView:function(e){e||(e="web-edit");var i=t.getNormalizedView(e);if(!i)throw new Error("Runtime view for view id: "+e+" could not find a normalized view");for(var a in i)i.hasOwnProperty(a)&&(this[a]=i[a])},getWizard:function(){return this.getViewParam("wizard")},getGlobalTemplateDescriptor:function(){return this.getTemplateDescriptor("globalTemplate")},getLayout:function(){var e=this;return{templateDescriptor:this.getTemplateDescriptor("layoutTemplate",e),bindings:this.getViewParam(["layout","bindings"],!0)}},getTemplateDescriptor:function(e,i){return t.getTemplateDescriptor(this,e,i)},getMessage:function(e){var i=this.getViewParam(["messages",t.defaultLocale,e]);return t.isEmpty(i)?this.getViewParam(["messages",e]):i},getViewParam:function(e,i){var a=this.field.path;if(this.fields&&this.fields[a]){var n=this._getConfigVal(this.fields[a],e);if(!t.isEmpty(n))return n}if(a&&-1!==a.indexOf("[")&&-1!==a.indexOf("]")&&(a=a.replace(/\[\d+\]/g,"[*]"),this.fields&&this.fields[a])){var n=this._getConfigVal(this.fields[a],e);if(!t.isEmpty(n))return n}return!t.isEmpty(i)&&i&&"/"!==this.field.path?null:this._getConfigVal(this,e)},_getConfigVal:function(e,i){if(t.isArray(i))for(var a=0;a<i.length&&!t.isEmpty(e);a++)e=e[i[a]];else t.isEmpty(e)||(e=e[i]);return e},fireCallback:function(e,t,i,a,n,r,o){this.callbacks&&this.callbacks[t]&&this.callbacks[t].call(e,i,a,n,r,o)},applyStyle:function(t,i){var a=i;a&&a.getFieldEl&&(a=a.getFieldEl()),a&&this.styles&&this.styles[t]&&e(a).addClass(this.styles[t])},getStyle:function(e){return this.styles[e]?this.styles[e]:""}})}(jQuery),function(e){var t=e.alpaca;t.Field=Base.extend({constructor:function(e,i,a,n,r,o,s){var l=this;this.initializing=!0,this.domEl=e,this.parent=null,this.data=i,this.options=a,this.schema=n,this.connector=o,this.errorCallback=function(e){s?s(e):t.defaultErrorCallback.call(l,e)},this.singleLevelRendering=!1,this.view=new t.RuntimeView(r,this);var c=!1;this.options||(this.options={},c=!0),this.id=this.options.id,this.type=this.options.type,this.id||(this.id=t.generateId());var d=!1;this.schema||(this.schema={},d=!0),this.options.label||null===this.schema.title||(this.options.label=this.schema.title),t.isEmpty(this.options.readonly)&&!t.isEmpty(this.schema.readonly)&&(this.options.readonly=this.schema.readonly),t.isValEmpty(this.data)&&!t.isEmpty(this.schema["default"])&&(this.data=this.schema["default"],this.showingDefaultData=!0),this.path="/",this.validation={},this._events={},this.isDisplayOnly=function(){return"view"===l.view.type||"display"==l.view.type},this.schema&&this.schema.id&&0===this.schema.id.indexOf("#")&&(this.schema.id=this.schema.id.substring(1)),this._previouslyValidated=!1,this.updateObservable=function(){this.data?this.observable(this.path).set(this.data):this.observable(this.path).clear()},this.getObservableScope=function(){for(var e=this;!e.isTop();)e=e.parent;var t=e.observableScope;return t||(t="global"),t},this.ensureProperType=function(e){var i=this;return"undefined"!=typeof e&&(t.isString(e)?"number"===i.schema.type?e=parseFloat(e):"boolean"===i.schema.type&&(e=""===e||"false"===e.toLowerCase()?!1:!0):t.isNumber(e)&&("string"===i.schema.type?e=""+e:"boolean"===i.schema.type&&(e=-1===e||0===e?!1:!0))),e},this.onConstruct()},onConstruct:function(){},isTop:function(){return!this.parent},getTemplateDescriptorId:function(){throw new Error("Template descriptor ID was not specified")},initTemplateDescriptor:function(){var e=this,i=this.view.getTemplateDescriptor(this.getTemplateDescriptorId(),this),a=this.view.getGlobalTemplateDescriptor(),n=this.view.getLayout(),r=!1;this.isTop()&&(a?(this.setTemplateDescriptor(a),this.singleLevelRendering=!0,r=!0):n&&n.templateDescriptor&&(this.setTemplateDescriptor(n.templateDescriptor),r=!0)),!r&&i&&this.setTemplateDescriptor(i);var o=this.getTemplateDescriptor();return o?void 0:t.throwErrorWithCallback("Unable to find template descriptor for field: "+e.getFieldType())},setup:function(){this.initializing||(this.data=this.getValue()),this.initTemplateDescriptor(),t.isUndefined(this.schema.required)&&(this.schema.required=!1),t.isUndefined(this.options.validate)&&(this.options.validate=!0),t.isUndefined(this.options.disabled)&&(this.options.disabled=!1),t.isUndefined(this.options.showMessages)&&(this.options.showMessages=!0)},on:function(e,i){return t.logDebug("Adding listener for event: "+e),this._events[e]=i,this},triggerWithPropagation:function(e,t){this.trigger.call(this,e,t),this.parent&&this.parent.triggerWithPropagation.call(this.parent,e,t)},trigger:function(e,i){var a=this._events[e],n=null;if("function"==typeof a){t.logDebug("Firing event: "+e);try{n=a.call(this,i)}catch(r){t.logDebug("The event handler caught an exception: "+e)}}return n},bindData:function(){t.isEmpty(this.data)||this.setValue(this.data)},render:function(e,i){e&&(t.isString(e)||t.isObject(e))?this.view.setView(e):t.isEmpty(i)&&t.isFunction(e)&&(i=e),null===this.options.label&&this.propertyId&&(this.options.label=this.propertyId),this.options.name&&(this.name=this.options.name),this.calculateName(),this.setup(),this._render(i)},calculateName:function(){if(!this.name||this.name&&this.nameCalculated)if(this.parent&&this.parent.name&&this.path){var e=this.path.substring(this.path.lastIndexOf("/")+1);-1!==e.indexOf("[")&&-1!==e.indexOf("]")&&(e=e.substring(e.indexOf("[")+1,e.indexOf("]"))),e&&(this.name=this.parent.name+"_"+e,this.nameCalculated=!0)}else this.path&&(this.name=this.path.replace(/\//g,"").replace(/\[/g,"_").replace(/\]/g,""),this.nameCalculated=!0)},_render:function(i){var a=this;if(a.options.form&&t.isObject(a.options.form)){a.options.form.viewType=this.view.type;var n=a.form;n||(n=new t.Form(a.domEl,this.options.form,a.view.id,a.connector,a.errorCallback)),n.render(function(n){var r=e("<div></div>");a._processRender(r,function(){n.formFieldsContainer.before(a.field),n.formFieldsContainer.remove(),n.topControl=a,a.view.type&&"view"!==a.view.type&&n.initEvents(),a.form=n,a.postRender(function(){i&&t.isFunction(i)&&i(a)})})})}else this._processRender(a.domEl,function(){a.postRender(function(){i&&t.isFunction(i)&&i(a)})})},_processRender:function(e,t){var i=this;i.renderField(e,function(){i.fireCallback("field"),i.renderFieldElements(function(){t()})})},renderField:function(e,i){var a=this,n=this.getTemplateDescriptor(),r=this.data;this.isDisplayOnly()&&"object"==typeof r&&(r=JSON.stringify(r));var o=t.tmpl(n,{id:this.getId(),options:this.options,schema:this.schema,data:r,view:this.view,path:this.path,name:this.name});a._oldFieldEl=a.field,this.field=o,this.field.appendTo(e),i()},renderFieldElements:function(e){e()},postRender:function(i){var a=this;if(this.field.addClass("alpaca-field"),this.field.addClass("alpaca-field-"+this.getFieldType()),this.field.attr("data-alpaca-field-id",this.getId()),"view"!==this.view.type){this.isRequired()?(e(this.field).addClass("alpaca-required"),a.fireCallback("required")):(e(this.field).addClass("alpaca-optional"),a.fireCallback("optional")),this.options.readonly&&(e(this.field).addClass("alpaca-readonly"),e(":input",this.field).attr("readonly","readonly"),e("select",this.field).attr("disabled","disabled"),e(":radio",this.field).attr("disabled","disabled"),e(":checkbox",this.field).attr("disabled","disabled"),a.fireCallback("readonly"));var n=function(e,i){if(i){var a=0,n=null;if(t.isArray(i))for(a=0;a<i.length;a++)e.addClass(i[a]);else if(i.indexOf(",")>-1)for(n=i.split(","),a=0;a<n.length;a++)e.addClass(n[a]);else if(i.indexOf(" ")>-1)for(n=i.split(" "),a=0;a<n.length;a++)e.addClass(n[a]);else e.addClass(i)}};n(this.field,this.options.fieldClass),this.options.disabled&&(this.disable(),a.fireCallback("disable")),this.view.type&&"edit"===this.view.type?this.bindData():this.showingDefaultData&&this.bindData(),"create"===this.view.type&&t.logDebug("Skipping data binding for field: "+this.id+" since view mode is 'create'"),this.view.type&&"view"!==this.view.type&&this.initEvents()}this.options.hidden&&this.field.hide(),this.initializing=!1;var r="create"===this.view.type&&!this.refreshed;this.hideInitValidationError=t.isValEmpty(this.options.hideInitValidationError)?r:this.options.hideInitValidationError,this.view.displayReadonly||e(this.field).find(".alpaca-readonly").hide(),this.options.postRender?this.options.postRender.call(this,function(){i()}):i()},refresh:function(t){var i=this;i.refreshed=!0;var a=e("<div></div>");e(i.field).before(a),i.domEl=e("<div></div>"),i.setup(),i._render(function(){e(a).before(i.domEl.children()),e(a).remove(),i._oldFieldEl&&e(i._oldFieldEl).remove(),t&&t()})},applyStyle:function(e,t){this.view.applyStyle(e,t)},fireCallback:function(e,t,i,a,n,r){this.view.fireCallback(this,e,t,i,a,n,r)},getFieldEl:function(){return this.field},getId:function(){return this.id},getParent:function(){return this.parent},isTopLevel:function(){return t.isEmpty(this.parent)},getValue:function(){var e=this,t=this.data;return t=e.ensureProperType(t)},setValue:function(e){this.data=e,this.updateObservable(),this.triggerUpdate()},setDefault:function(){},getTemplateDescriptor:function(){return this.templateDescriptor},setTemplateDescriptor:function(e){this.templateDescriptor=e},displayMessage:function(i){var a=this;i&&t.isObject(i)&&(i=[i]),i&&t.isString(i)&&(i=[{id:"custom",message:i}]),e(this.getFieldEl()).children(".alpaca-message").remove(),a.fireCallback("removeMessages"),i&&i.length>0&&e.each(i,function(i,n){var r=!1;a.hideInitValidationError&&(r=!0);var o=a.view.getTemplateDescriptor("message");if(o){var s=t.tmpl(o,{id:n.id,message:n.message});s.addClass("alpaca-message"),r&&s.addClass("alpaca-message-hidden"),e(a.getFieldEl()).append(s)}a.fireCallback("addMessage",i,n.id,n.message,r)})},refreshValidationState:function(e,i){var a=this,n=[],r=[],o=function(e,i){return function(a){t.compileValidationContext(e,function(e){i.push(e),a()})}};if(e){var s=function(e,t){if(e.isValidationParticipant()){if(e.children&&e.children.length>0)for(var i=0;i<e.children.length;i++)s(e.children[i],t);r.push(o(e,t))}};s(this,n)}r.push(o(this,n)),t.series(r,function(){for(var e={},r=[],o=0;o<n.length;o++)for(var s=n[o],l=r.length,c=0;c<s.length;c++){var d=s[c],p=e[d.id];if(p)d.validated&&!p.invalidated&&(p.validated=!0,p.invalidated=!1,p.valid=d.valid),d.invalidated&&(p.invalidated=!0,p.validated=!1,p.valid=d.valid);else{var u={};u.id=d.id,u.path=d.path,u.domEl=d.domEl,u.field=d.field,u.validated=d.validated,u.invalidated=d.invalidated,u.valid=d.valid,r.splice(l,0,u),e[u.id]=u}}r.reverse(),a.hideInitValidationError||t.updateValidationStateForContext(a.view,r),i&&i()})},validate:function(e){var i=!0;if(!this.initializing&&this.options.validate){if(this.children&&e)for(var a=0;a<this.children.length;a++){var n=this.children[a];n.isValidationParticipant()&&n.validate(e)}if(i=this.handleValidate(),!i&&t.logLevel==t.DEBUG){var r=[];for(var o in this.validation)this.validation[o].status||r.push(this.validation[o].message);t.logDebug("Validation failure for field (id="+this.getId()+", path="+this.path+"), messages: "+JSON.stringify(r))}}return this._previouslyValidated=!0,i},handleValidate:function(){var e=this.validation,i=this._validateOptional();return e.notOptional={message:i?"":this.view.getMessage("notOptional"),status:i},i=this._validateDisallow(),e.disallowValue={message:i?"":t.substituteTokens(this.view.getMessage("disallowValue"),[this.schema.disallow.join(", ")]),status:i},e.notOptional.status&&e.disallowValue.status},_validateCustomValidator:function(e){var i=this;this.options.validator&&t.isFunction(this.options.validator)?this.options.validator.call(this,function(t){i.validation.custom=t,e()}):e()},_validateOptional:function(){return this.isRequired()&&this.isEmpty()?!1:!0},_validateDisallow:function(){if(!t.isValEmpty(this.schema.disallow)){var i=this.getValue(),a=this.schema.disallow;if(t.isArray(a)){var n=!0;return e.each(a,function(e,a){(t.isObject(i)||t.isArray(i))&&t.isString(a)&&(a=t.parseJSON(a)),t.compareObject(i,a)&&(n=!1)}),n}return(t.isObject(i)||t.isArray(i))&&t.isString(a)&&(a=t.parseJSON(a)),!t.compareObject(i,a)}return!0},triggerUpdate:function(){e(this.field).trigger("fieldupdate")},disable:function(){},enable:function(){},focus:function(){},destroy:function(){t.observable(this.path).clear(),t&&t.fieldInstances&&t.fieldInstances[this.getId()]&&delete t.fieldInstances[this.getId()],e(this.field).remove()},show:function(){this.options&&this.options.hidden||(e(this.field).css({display:""}),this.onShow(),this.fireCallback("show"))},onShow:function(){},hide:function(){e(this.field).css({display:"none"}),this.onHide(),this.fireCallback("hide")},onHide:function(){},isValidationParticipant:function(){return this.isShown()},isShown:function(){return this.isVisible()},isVisible:function(){return!this.isHidden()},isHidden:function(){return"none"===e(this.field).css("display")},print:function(){this.getFieldEl().printArea&&this.getFieldEl().printArea()},onDependentReveal:function(){},onDependentConceal:function(){},reload:function(){this.initializing=!0,t.isEmpty(this.callback)?this.render(this.renderedCallback):this.callback(this,this.renderedCallback)},clear:function(){var e=null;this.data&&(e=this.data),this.setValue(e)},isEmpty:function(){return t.isValEmpty(this.getValue())},isValid:function(t){if(t&&this.children)for(var i=0;i<this.children.length;i++){var a=this.children[i];if(a.isValidationParticipant()&&!a.isValid(t))return!1}if(e.isEmptyObject(this.validation))return!0;for(var n in this.validation)if(!this.validation[n].status)return!1;return!0},initEvents:function(){var i=this;this.field&&(this.field.mouseover(function(e){i.onMouseOver.call(i,e),i.trigger("mouseover",e)}),this.field.mouseout(function(e){i.onMouseOut.call(i,e),i.trigger("mouseout",e)}),e.each(this.options,function(e,a){if(t.startsWith(e,"onField")&&t.isFunction(a)){var n=e.substring(7).toLowerCase();i.field.on(n,function(e){a.call(i,e)})}}),this.options&&this.options.events&&e.each(this.options.events,function(e,a){t.isFunction(a)&&i.field.on(e,function(e){a.call(i,e)})}))},onFocus:function(){e(this.field).removeClass("alpaca-field-empty"),e(this.field).addClass("alpaca-field-focused")},onBlur:function(){var t=e(this.field).hasClass("alpaca-field-focused");e(this.field).removeClass("alpaca-field-focused"),t&&this.refreshValidationState()
},onChange:function(){this.data=this.getValue(),this.updateObservable(),this.triggerUpdate()},onMouseOver:function(){},onMouseOut:function(){},getControlByPath:function(e){var i=this;if(e){for(var a=e.split("/"),n=0;n<a.length;n++){if(t.isValEmpty(a[n]))return null;if(!i||!i.childrenByPropertyId)return null;if(!i.childrenByPropertyId[a[n]])return null;i=i.childrenByPropertyId[a[n]]}return i}},subscribe:function(){var e=t.makeArray(arguments);return e.unshift(this.getObservableScope()),t.subscribe.apply(this,e)},unsubscribe:function(){var e=t.makeArray(arguments);return e.unshift(this.getObservableScope()),t.unsubscribe.apply(this,e)},observable:function(){var e=t.makeArray(arguments);return e.unshift(this.getObservableScope()),t.observable.apply(this,e)},clearObservable:function(){var e=t.makeArray(arguments);return e.unshift(this.getObservableScope()),t.clearObservable.apply(this,e)},dependentObservable:function(){var e=t.makeArray(arguments);return e.unshift(this.getObservableScope()),t.dependentObservable.apply(this,e)},getType:function(){},getFieldType:function(){return""},getBaseFieldType:function(){var e=null,t=this.constructor.ancestor.prototype;return t&&t.getFieldType&&(e=t.getFieldType()),e},isContainer:function(){return!1},isRequired:function(){var e=!1;if("boolean"==typeof this.schema.required&&(e=this.schema.required),this.parent&&this.parent.schema.required&&t.isArray(this.parent.schema.required)){var i=this.parent.schema.required;if(i)for(var a=0;a<i.length;a++)if(i[a]===this.name){e=!0;break}}return e},getTitle:function(){},getDescription:function(){},getSchemaOfSchema:function(){var e={title:this.getTitle(),description:this.getDescription(),type:"object",properties:{title:{title:"Title",description:"Short description of the property.",type:"string"},description:{title:"Description",description:"Detailed description of the property.",type:"string"},readonly:{title:"Readonly",description:"Indicates that the field is read-only.  A read-only field cannot have it's value changed.  Read-only fields render in a grayed-out or disabled control.  If the field is rendered using a view with the <code>displayReadonly</code> attribute set to false, the read-only field will not appear.",type:"boolean","default":!1},required:{title:"Required",description:"Indicates whether the field's value is required.  If set to true, the field must take on a valid value and cannnot be left empty or unassigned.",type:"boolean","default":!1},"default":{title:"Default",description:"The default value to be assigned for this property.  If the data for the field is empty or not provided, this default value will be plugged in for you.  Specify a default value when you want to pre-populate the field's value ahead of time.",type:"any"},type:{title:"Type",description:"Data type of the property.",type:"string",readonly:!0},format:{title:"Format",description:"Data format of the property.",type:"string"},disallow:{title:"Disallowed Values",description:"List of disallowed values for the property.",type:"array"},dependencies:{title:"Dependencies",description:"List of property dependencies.",type:"array"}}};return this.getType&&!t.isValEmpty(this.getType())&&(e.properties.type["default"]=this.getType(),e.properties.type["enum"]=[this.getType()]),e},getOptionsForSchema:function(){return{fields:{title:{helper:"Field short description",type:"text"},description:{helper:"Field detailed description",type:"textarea"},readonly:{helper:"Field will be read only if checked",rightLabel:"This field is read-only",type:"checkbox"},required:{helper:"Field value must be set if checked",rightLabel:"This field is required",type:"checkbox"},"default":{helper:"Field default value",type:"textarea"},type:{helper:"Field data type",type:"text"},format:{type:"select",dataSource:function(e){for(var i in t.defaultFormatFieldMapping)this.selectOptions.push({value:i,text:i});e()}},disallow:{helper:"Disallowed values for the field",itemLabel:"Value",type:"array"},dependencies:{helper:"Field Dependencies",multiple:!0,size:3,type:"select",dataSource:function(e,t){if(e.parent&&e.parent.schemaParent&&e.parent.schemaParent.parent)for(var i in e.parent.schemaParent.parent.childrenByPropertyId)i!=e.parent.schemaParent.propertyId&&e.selectOptions.push({value:i,text:i});t&&t()}}}}},getSchemaOfOptions:function(){var e={title:"Options for "+this.getTitle(),description:this.getDescription()+" (Options)",type:"object",properties:{form:{},id:{title:"Field Id",description:"Unique field id. Auto-generated if not provided.",type:"string"},type:{title:"Field Type",description:"Field type.",type:"string","default":this.getFieldType(),readonly:!0},validate:{title:"Validation",description:"Field validation is required if true.",type:"boolean","default":!0},showMessages:{title:"Show Messages",description:"Display validation messages if true.",type:"boolean","default":!0},disabled:{title:"Disabled",description:"Field will be disabled if true.",type:"boolean","default":!1},readonly:{title:"Readonly",description:"Field will be readonly if true.",type:"boolean","default":!1},hidden:{title:"Hidden",description:"Field will be hidden if true.",type:"boolean","default":!1},label:{title:"Label",description:"Field label.",type:"string"},helper:{title:"Helper",description:"Field help message.",type:"string"},fieldClass:{title:"CSS class",description:"Specifies one or more CSS classes that should be applied to the dom element for this field once it is rendered.  Supports a single value, comma-delimited values, space-delimited values or values passed in as an array.",type:"string"},hideInitValidationError:{title:"Hide Initial Validation Errors",description:"Hide initial validation errors if true.",type:"boolean","default":!1},focus:{title:"Focus",description:"If true, the initial focus for the form will be set to the first child element (usually the first field in the form).  If a field name or path is provided, then the specified child field will receive focus.  For example, you might set focus to 'name' (selecting the 'name' field) or you might set it to 'client/name' which picks the 'name' field on the 'client' object.",type:"checkbox","default":!0},optionLabels:{title:"Enumerated Value Labels",description:"An array of string labels for items in the enum array",type:"array"},view:{title:"Override of the view for this field",description:"Allows for this field to be rendered with a different view (such as 'display' or 'create')",type:"string"}}};return this.isTopLevel()?e.properties.form={title:"Form",description:"Options for rendering the FORM tag.",type:"object",properties:{attributes:{title:"Form Attributes",description:"List of attributes for the FORM tag.",type:"object",properties:{id:{title:"Id",description:"Unique form id. Auto-generated if not provided.",type:"string"},action:{title:"Action",description:"Form submission endpoint",type:"string"},method:{title:"Method",description:"Form submission method","enum":["post","get"],type:"string"},rubyrails:{title:"Ruby On Rails",description:"Ruby on Rails Name Standard","enum":["true","false"],type:"string"},name:{title:"Name",description:"Form name",type:"string"},focus:{title:"Focus",description:"Focus Setting",type:"any"}}},buttons:{title:"Form Buttons",description:"Configuration for form-bound buttons",type:"object",properties:{submit:{type:"object",title:"Submit Button",required:!1},reset:{type:"object",title:"Reset button",required:!1}}},toggleSubmitValidState:{title:"Toggle Submit Valid State",description:"Toggle the validity state of the Submit button",type:"boolean","default":!0}}}:delete e.properties.form,e},getOptionsForOptions:function(){var e={type:"object",fields:{id:{type:"text",readonly:!0},type:{type:"text"},validate:{rightLabel:"Enforce validation",type:"checkbox"},showMessages:{rightLabel:"Show validation messages",type:"checkbox"},disabled:{rightLabel:"Disable this field",type:"checkbox"},hidden:{type:"checkbox",rightLabel:"Hide this field"},label:{type:"text"},helper:{type:"textarea"},fieldClass:{type:"text"},hideInitValidationError:{rightLabel:"Hide initial validation errors",type:"checkbox"},focus:{type:"checkbox",rightLabel:"Auto-focus first child field"},optionLabels:{type:"array",items:{type:"string"}},view:{type:"text"}}};return this.isTopLevel()&&(e.fields.form={type:"object",fields:{attributes:{type:"object",fields:{id:{type:"text",readonly:!0},action:{type:"text"},method:{type:"select"},name:{type:"text"}}}}}),e}}),t.registerMessages({disallowValue:"{0} are disallowed values.",notOptional:"This field is not optional."})}(jQuery),function(e){var t=e.alpaca;t.ControlField=t.Field.extend({onConstruct:function(){var t=this;this.isControlField=!0,this._getControlVal=function(i){var a=null;return this.control&&(a=e(this.control).val(),i&&(a=t.ensureProperType(a))),a}},setup:function(){var e=this;this.base();var i=e.resolveControlTemplateType();return i?void(this.controlDescriptor=this.view.getTemplateDescriptor("control-"+i,e)):t.throwErrorWithCallback("Unable to find template descriptor for control: "+e.getFieldType())},getControlEl:function(){return this.control},resolveControlTemplateType:function(){var e=this,t=!1,i=null,a=this;do if(a.getFieldType){var n=this.view.getTemplateDescriptor("control-"+a.getFieldType(),e);n?(i=a.getFieldType(),t=!0):a=a.constructor.ancestor.prototype}else t=!0;while(!t);return i},onSetup:function(){},isAutoFocusable:function(){return!0},getTemplateDescriptorId:function(){return"control"},renderFieldElements:function(i){var a=this;this.control=e(this.field).find("."+t.MARKER_CLASS_CONTROL_FIELD),this.control.removeClass(t.MARKER_CLASS_CONTROL_FIELD),a.prepareControlModel(function(e){a.beforeRenderControl(e,function(){a.renderControl(e,function(n){n&&(a.control.replaceWith(n),a.control=n,a.control.addClass(t.CLASS_CONTROL)),a.fireCallback("control"),a.afterRenderControl(e,function(){i()})})})})},prepareControlModel:function(e){var t={};t.id=this.getId(),t.name=this.name,t.options=this.options,t.schema=this.schema,t.data=this.data,t.required=this.isRequired(),e(t)},beforeRenderControl:function(e,t){t()},afterRenderControl:function(e,t){var i=this;i.firstUpdateObservableFire||"undefined"==typeof i.data||null==i.data||(i.firstUpdateObservableFire=!0,i.updateObservable()),t()},renderControl:function(e,i){var a=null;this.controlDescriptor&&(a=t.tmpl(this.controlDescriptor,e)),i(a)},postRender:function(e){this.base(function(){e()})},setDefault:function(){var e=t.isEmpty(this.schema["default"])?"":this.schema["default"];this.setValue(e)},_validateEnum:function(){if(this.schema["enum"]){var i=this.data;return i=this.getValue(),!this.isRequired()&&t.isValEmpty(i)?!0:e.inArray(i,this.schema["enum"])>-1?!0:!1}return!0},handleValidate:function(){var e=this.base(),i=this.validation,a=this._validateEnum();return i.invalidValueOfEnum={message:a?"":t.substituteTokens(this.view.getMessage("invalidValueOfEnum"),[this.schema["enum"].join(", "),this.data]),status:a},e&&i.invalidValueOfEnum.status},initEvents:function(){this.base(),this.control&&this.control.length>0&&this.initControlEvents()},initControlEvents:function(){var e=this,t=this.control;t.click(function(t){e.onClick.call(e,t),e.trigger("click",t)}),t.change(function(t){setTimeout(function(){e.onChange.call(e,t),e.triggerWithPropagation("change",t)},250)}),t.focus(function(t){e.suspendBlurFocus||(e.onFocus.call(e,t),e.trigger("focus",t))}),t.blur(function(t){e.suspendBlurFocus||(e.onBlur.call(e,t),e.trigger("blur",t))}),t.keypress(function(t){e.onKeyPress.call(e,t),e.trigger("keypress",t)}),t.keyup(function(t){e.onKeyUp.call(e,t),e.trigger("keyup",t)}),t.keydown(function(t){e.onKeyDown.call(e,t),e.trigger("keydown",t)})},onKeyPress:function(){var e=this,t=this.isValid();t||window.setTimeout(function(){e.refreshValidationState()},50)},onKeyDown:function(){},onKeyUp:function(){},onClick:function(){},disable:function(){this.base(),this.control&&this.control.length>0&&e(this.control).prop("disabled",!0)},enable:function(){this.base(),this.control&&this.control.length>0&&e(this.control).prop("disabled",!1)},getSchemaOfSchema:function(){return t.merge(this.base(),{properties:{"enum":{title:"Enumerated Values",description:"List of specific values for this property",type:"array"}}})},getOptionsForSchema:function(){return t.merge(this.base(),{fields:{"enum":{itemLabel:"Value",type:"array"}}})},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{name:{title:"Field Name",description:"Field Name.",type:"string"}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{name:{type:"text"}}})}}),t.registerMessages({invalidValueOfEnum:"This field should have one of the values in {0}.  Current value is: {1}"})}(jQuery),function(e){var t=e.alpaca;t.ContainerField=t.Field.extend({onConstruct:function(){this.isContainerField=!0},isContainer:function(){return!0},getContainerEl:function(){return this.container},getTemplateDescriptorId:function(){return"container"},resolveContainerTemplateType:function(){var e=!1,t=null,i=this;do if(i.getFieldType){var a=this.view.getTemplateDescriptor("container-"+i.getFieldType(),this);a?(t=i.getFieldType(),e=!0):i=i.constructor.ancestor.prototype}else e=!0;while(!e);return t},setup:function(){var e=this;this.base();var i=e.resolveContainerTemplateType();if(!i)return t.throwErrorWithCallback("Unable to find template descriptor for container: "+e.getFieldType());this.containerDescriptor=this.view.getTemplateDescriptor("container-"+i,e);var a=!0;t.isEmpty(this.view.collapsible)||(a=this.view.collapsible),t.isEmpty(this.options.collapsible)||(a=this.options.collapsible),this.options.collapsible=a;var n="button";t.isEmpty(this.view.legendStyle)||(n=this.view.legendStyle),t.isEmpty(this.options.legendStyle)||(n=this.options.legendStyle),this.options.legendStyle=n,this.lazyLoading=!1,t.isEmpty(this.options.lazyLoading)||(this.lazyLoading=this.options.lazyLoading,this.lazyLoading&&(this.options.collapsed=!0)),this.children=[],this.childrenById={},this.childrenByPropertyId={},this.expandedIcon=this.view.getStyle("expandedIcon"),this.collapsedIcon=this.view.getStyle("collapsedIcon"),this.commonIcon=this.view.getStyle("commonIcon"),this.addIcon=this.view.getStyle("addIcon"),this.removeIcon=this.view.getStyle("removeIcon"),this.upIcon=this.view.getStyle("upIcon"),this.downIcon=this.view.getStyle("downIcon")},destroy:function(){this.form&&(this.form.destroy(!0),delete this.form),t.each(this.children,function(){this.destroy()}),this.base()},renderFieldElements:function(i){var a=this;this.container=e(this.field).find("."+t.MARKER_CLASS_CONTAINER_FIELD),this.container.removeClass(t.MARKER_CLASS_CONTAINER_FIELD),a.prepareContainerModel(function(e){a.beforeRenderContainer(e,function(){a.renderContainer(e,function(n){n&&(a.container.replaceWith(n),a.container=n,a.container.addClass(t.CLASS_CONTAINER)),a.container.addClass(a.view.horizontal?"alpaca-horizontal":"alpaca-vertical"),a.fireCallback("container"),a.afterRenderContainer(e,function(){i()})})})})},prepareContainerModel:function(e){var t=this,i={id:this.getId(),name:this.name,options:this.options};t.createItems(function(t){t||(t=[]),i.items=t,e(i)})},beforeRenderContainer:function(e,t){t()},renderContainer:function(e,i){var a=null;this.containerDescriptor&&(a=t.tmpl(this.containerDescriptor,e)),i(a)},afterRenderContainer:function(e,t){var i=this;i.applyCreatedItems(e,function(){i.afterApplyCreatedItems(e,function(){t()})})},postRender:function(e){this.base(function(){e()})},initEvents:function(){this.base()},createItems:function(e){e()},applyCreatedItems:function(i,a){var n=this,r=null;if(n.isTopLevel()&&n.view.getLayout()&&(r=n.view.getLayout().bindings,!r&&n.view.getLayout().templateDescriptor&&i.items.length>0)){r={};for(var o=0;o<i.items.length;o++){var s=i.items[o].name;r[s]="[data-alpaca-layout-binding='"+s+"']"}}i.items.length>0?(e(n.container).addClass("alpaca-container-has-items"),e(n.container).attr("data-alpaca-container-item-count",i.items.length)):(e(n.container).removeClass("alpaca-container-has-items"),e(n.container).removeAttr("data-alpaca-container-item-count"));for(var o=0;o<i.items.length;o++){var l=i.items[o],c=e(n.container).find("["+t.MARKER_DATA_CONTAINER_FIELD_ITEM_KEY+"='"+l.name+"']");if(r){var d=r[l.name];if(d){var p=e(d,n.field);if(0==p.length)try{p=e("#"+d,n.field)}catch(u){}p.length>0&&(e(l.field).appendTo(p),l.domEl=p)}e(c).remove()}else{var p=e(c).parent();e(c).replaceWith(l.field),l.domEl=p}e(l.field).addClass("alpaca-container-item"),0===o&&e(l.field).addClass("alpaca-container-item-first"),o+1===i.items.length&&e(l.field).addClass("alpaca-container-item-last"),e(l.field).attr("data-alpaca-container-item-index",o),e(l.field).attr("data-alpaca-container-item-name",l.name),n.registerChild(l,o)}n.options.collapsible&&n.fireCallback("collapsible"),n.triggerUpdate(),a()},afterApplyCreatedItems:function(e,t){t()},registerChild:function(e,i){t.isEmpty(i)?this.children.push(e):this.children.splice(i,0,e),this.childrenById[e.getId()]=e,e.propertyId&&(this.childrenByPropertyId[e.propertyId]=e),e.parent=this},unregisterChild:function(e){var i=this.children[e];i&&(t.isEmpty(e)||this.children.splice(e,1),delete this.childrenById[i.getId()],i.propertyId&&delete this.childrenByPropertyId[i.propertyId],i.parent=null)},updateChildDOMElements:function(){var t=this,i=null;if(t.view.getLayout()&&(i=t.view.getLayout().bindings),!i){t.children.length>0?(e(t.getContainerEl()).addClass("alpaca-container-has-items"),e(t.getContainerEl()).attr("data-alpaca-container-item-count",t.children.length)):(e(t.getContainerEl()).removeClass("alpaca-container-has-items"),e(t.getContainerEl()).removeAttr("data-alpaca-container-item-count"));for(var a=0;a<t.children.length;a++){var n=t.children[a],r=n.getFieldEl();n.path=t.path+"["+a+"]",n.calculateName(),e(r).removeClass("alpaca-container-item-first"),e(r).removeClass("alpaca-container-item-last"),e(r).removeClass("alpaca-container-item-index"),e(r).removeClass("alpaca-container-item-key"),e(r).addClass("alpaca-container-item"),0===a&&e(r).addClass("alpaca-container-item-first"),a+1===t.children.length&&e(r).addClass("alpaca-container-item-last"),e(r).attr("data-alpaca-container-item-index",a),e(r).attr("data-alpaca-container-item-name",n.name)}}},onDependentReveal:function(){for(var e=0;e<this.children.length;e++)this.children[e].onDependentReveal()},onDependentConceal:function(){for(var e=0;e<this.children.length;e++)this.children[e].onDependentConceal()},focus:function(){this.base();for(var e=-1,t=0;t<this.children.length;t++)if(!this.children[t].isValid(!0)){e=t;break}-1===e&&this.children.length>0&&(e=0),e>-1&&this.children[e].focus()},disable:function(){this.base();for(var e=0;e<this.children.length;e++)this.children[e].disable()},enable:function(){this.base();for(var e=0;e<this.children.length;e++)this.children[e].enable()},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{lazyLoading:{title:"Lazy Loading",description:"Child fields will only be rendered when the fieldset is expanded if this option is set true.",type:"boolean","default":!1},collapsible:{title:"Collapsible",description:"Field set is collapsible if true.",type:"boolean","default":!0},collapsed:{title:"Collapsed",description:"Field set is initially collapsed if true.",type:"boolean","default":!1},legendStyle:{title:"Legend Style",description:"Field set legend style.",type:"string","enum":["button","link"],"default":"button"},animate:{title:"Animate movements and transitions",description:"Up and down transitions will be animated",type:"boolean","default":!0}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{lazyLoading:{rightLabel:"Lazy loading child fields ?",helper:"Lazy loading will be enabled if checked.",type:"checkbox"},collapsible:{rightLabel:"Field set collapsible ?",helper:"Field set is collapsible if checked.",type:"checkbox"},collapsed:{rightLabel:"Field set initially collapsed ?",description:"Field set is initially collapsed if checked.",type:"checkbox"},legendStyle:{type:"select"},animate:{rightLabel:"Animate movements and transitions",type:"checkbox"}}})}})}(jQuery),function(e){var t=e.alpaca;t.Connector=Base.extend({constructor:function(e){this.id=e,this.isUri=function(e){return!t.isEmpty(e)&&t.isUri(e)};var a=36e5;this.cache=new i("URL",!0,a)},connect:function(e){e&&t.isFunction(e)&&e()},loadTemplate:function(e,i,a){t.isEmpty(e)?a({message:"Empty data source.",reason:"TEMPLATE_LOADING_ERROR"}):t.isUri(e)?this.loadUri(e,!1,function(e){i&&t.isFunction(i)&&i(e)},function(e){a&&t.isFunction(a)&&a(e)}):i(e)},loadData:function(e,t,i){return this._handleLoadJsonResource(e,t,i)},loadSchema:function(e,t,i){return this._handleLoadJsonResource(e,t,i)},loadOptions:function(e,t,i){return this._handleLoadJsonResource(e,t,i)},loadView:function(e,t,i){return this._handleLoadJsonResource(e,t,i)},loadAll:function(e,i,a){var n=e.dataSource,r=e.schemaSource,o=e.optionsSource,s=e.viewSource;r||(r=e.schema),o||(o=e.options),s||(s=e.view);var l={},c=0,d=0,p=function(){c===d&&i&&t.isFunction(i)&&i(l.data,l.options,l.schema,l.view)},u=function(e){a&&t.isFunction(a)&&a(e)};return n&&d++,r&&d++,o&&d++,s&&d++,0===d?void p():(n&&this.loadData(n,function(e){l.data=e,c++,p()},u),r&&this.loadSchema(r,function(e){l.schema=e,c++,p()},u),o&&this.loadOptions(o,function(e){l.options=e,c++,p()},u),void(s&&this.loadView(s,function(e){l.view=e,c++,p()},u)))},loadJson:function(e,t,i){this.loadUri(e,!0,t,i)},loadUri:function(i,a,n,r){var o=this,s={url:i,type:"get",success:function(e){o.cache.put(i,e),n&&t.isFunction(n)&&n(e)},error:function(e,a,n){r&&t.isFunction(r)&&r({message:"Unable to load data from uri : "+i,stage:"DATA_LOADING_ERROR",details:{jqXHR:e,textStatus:a,errorThrown:n}})}};s.dataType=a?"json":"text";var l=o.cache.get(i);l!==!1&&n&&t.isFunction(n)?n(l):e.ajax(s)},loadReferenceSchema:function(e,t,i){return this._handleLoadJsonResource(e,t,i)},loadReferenceOptions:function(e,t,i){return this._handleLoadJsonResource(e,t,i)},_handleLoadJsonResource:function(e,t,i){this.isUri(e)?this.loadJson(e,function(e){t(e)},i):t(e)}}),t.registerConnectorClass("default",t.Connector);var i=function(e,t,i){switch(this.on=t?!0:!1,null!=i&&(this.defaultLifetime=i),this.type=e,this.type){case"URL":this.put=this.put_url;break;case"GET":this.put=this.put_GET}};i.prototype.on=!1,i.prototype.type=void 0,i.prototype.defaultLifetime=18e5,i.prototype.items={},i.prototype.put_url=function(e,t,i){null==i&&(i=this.defaultLifetime);var a=this.make_key(e);return this.items[a]={},this.items[a].key=a,this.items[a].url=e,this.items[a].response=t,this.items[a].expire=(new Date).getTime()+i,!0},i.prototype.put_GET=function(e,t,i,a){null==a&&(a=this.defaultLifetime);var n=this.make_key(e,[t]);return this.items[n]={},this.items[n].key=n,this.items[n].url=e,this.items[n].data=t,this.items[n].response=i,this.items[n].expire=(new Date).getTime()+a,!0},i.prototype.get=function(e,t){var i=this.make_key(e,t);return null==this.items[i]?!1:this.items[i].expire<(new Date).getTime()?!1:this.items[i].response},i.prototype.make_key=function(e,t){var i=e;switch(this.type){case"URL":break;case"GET":i+=this.stringify(t[0])}return i},i.prototype.flush=function(){return cache.items={},!0},i.prototype.stringify=function(e,t,i){var a;if(gap="",indent="","number"==typeof i)for(a=0;i>a;a+=1)indent+=" ";else"string"==typeof i&&(indent=i);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return this.str("",{"":e})},i.prototype.quote=function(e){var t=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;return t.lastIndex=0,t.test(e)?'"'+e.replace(t,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'},i.prototype.str=function(e,t){var i,a,n,r,o,s=gap,l=t[e];switch(l&&"object"==typeof l&&"function"==typeof l.toJSON&&(l=l.toJSON(e)),"function"==typeof rep&&(l=rep.call(t,e,l)),typeof l){case"string":return this.quote(l);case"number":return isFinite(l)?String(l):"null";case"boolean":case"null":return String(l);case"object":if(!l)return"null";if(gap+=indent,o=[],"[object Array]"===Object.prototype.toString.apply(l)){for(r=l.length,i=0;r>i;i+=1)o[i]=this.str(i,l)||"null";return n=0===o.length?"[]":gap?"[\n"+gap+o.join(",\n"+gap)+"\n"+s+"]":"["+o.join(",")+"]",gap=s,n}if(rep&&"object"==typeof rep)for(r=rep.length,i=0;r>i;i+=1)a=rep[i],"string"==typeof a&&(n=this.str(a,l),n&&o.push(this.quote(a)+(gap?": ":":")+n));else for(a in l)Object.hasOwnProperty.call(l,a)&&(n=this.str(a,l),n&&o.push(this.quote(a)+(gap?": ":":")+n));return n=0===o.length?"{}":gap?"{\n"+gap+o.join(",\n"+gap)+"\n"+s+"}":"{"+o.join(",")+"}",gap=s,n}}}(jQuery),function(e){var t=e.alpaca;t.Form=Base.extend({constructor:function(e,i,a,n,r){if(this.domEl=e,this.parent=null,this.connector=n,this.errorCallback=r,this.options=i,this.attributes=this.options.attributes?this.options.attributes:{},this.options.buttons){this.options.buttons.submit&&(this.options.buttons.submit.type||(this.options.buttons.submit.type="submit"),this.options.buttons.submit.name||(this.options.buttons.submit.name="submit"),this.options.buttons.submit.value||(this.options.buttons.submit.value="Submit")),this.options.buttons.reset&&(this.options.buttons.reset.type||(this.options.buttons.reset.type="reset"),this.options.buttons.reset.name||(this.options.buttons.reset.name="reset"),this.options.buttons.reset.value||(this.options.buttons.reset.value="Reset"));for(var o in this.options.buttons)this.options.buttons[o].label&&(this.options.buttons[o].value=this.options.buttons[o].label),this.options.buttons[o].title&&(this.options.buttons[o].value=this.options.buttons[o].title),this.options.buttons[o].type||(this.options.buttons[o].type="button")}this.attributes.id?this.id=this.attributes.id:(this.id=t.generateId(),this.attributes.id=this.id),this.options.buttons&&this.options.buttons.submit&&t.isUndefined(this.options.toggleSubmitValidState)&&(this.options.toggleSubmitValidState=!0),this.viewType=i.viewType,this.view=new t.RuntimeView(a,this)},render:function(e){var t=this;this.form&&this.form.remove(),this.processRender(this.domEl,function(){t.form.appendTo(t.container),t.form.addClass("alpaca-form"),t.fireCallback("form"),e(t)})},isFormValid:function(){this.topControl.validate(!0);var e=this.topControl.isValid(!0);return e},isValid:function(){return this.isFormValid()},validate:function(e){return this.topControl.validate(e)},enableSubmitButton:function(){if(e(".alpaca-form-button-submit").attrProp("disabled",!1),e.mobile)try{e(".alpaca-form-button-submit").button("refresh")}catch(t){}},disableSubmitButton:function(){if(e(".alpaca-form-button-submit").attrProp("disabled",!0),e.mobile)try{e(".alpaca-form-button-submit").button("refresh")}catch(t){}},adjustSubmitButtonState:function(){this.disableSubmitButton(),this.isFormValid()&&this.enableSubmitButton()},processRender:function(i,a){var n=this;if(this.formDescriptor=this.view.getTemplateDescriptor("form"),!this.formDescriptor)return t.throwErrorWithCallback("Could not find template descriptor: form");var r=t.tmpl(this.formDescriptor,{id:this.getId(),options:this.options,view:this.view});r.appendTo(i),this.form=r,this.formFieldsContainer=e(this.form).find("."+t.MARKER_CLASS_FORM_ITEMS_FIELD),this.formFieldsContainer.removeClass(t.MARKER_CLASS_FORM_ITEMS_FIELD),t.isEmpty(this.form.attr("id"))&&this.form.attr("id",this.getId()+"-form-outer"),t.isEmpty(this.form.attr("alpaca-field-id"))&&this.form.attr("alpaca-field-id",this.getId()),i.find("form").attr(this.attributes),this.buttons={},e(i).find(".alpaca-form-button").each(function(){e(this).click(function(){e(this).attr("button-pushed",!0)});var t=e(this).attr("data-key");if(t){var i=n.options.buttons[t];i&&i.click&&e(this).click(function(e,t){return function(i){i.preventDefault(),t.call(e,i)}}(n,i.click))}}),a()},getId:function(){return this.id},getType:function(){return this.type},getParent:function(){return this.parent},getValue:function(){return this.topControl.getValue()},setValue:function(e){this.topControl.setValue(e)},initEvents:function(){var t=this,i=e(this.domEl).find("form"),a=this.getValue();e(i).submit(a,function(e){return t.onSubmit(e,t)}),this.options.toggleSubmitValidState&&(e(t.topControl.getFieldEl()).bind("fieldupdate",function(){t.adjustSubmitButtonState()}),this.adjustSubmitButtonState())},getButtonEl:function(t){return e(this.domEl).find(".alpaca-form-button-"+t)},onSubmit:function(e,i){if(this.submitHandler){e.stopPropagation();var a=this.submitHandler(e,i);return t.isUndefined(a)&&(a=!1),a}},registerSubmitHandler:function(e){t.isFunction(e)&&(this.submitHandler=e)},refreshValidationState:function(e,t){this.topControl.refreshValidationState(e,t)},disable:function(){this.topControl.disable()},enable:function(){this.topControl.enable()},focus:function(){this.topControl.focus()},destroy:function(e){this.getFieldEl().remove(),!e&&this.parent&&this.parent.destroy()},show:function(){this.getFieldEl().css({display:""})},hide:function(){this.getFieldEl().css({display:"none"})},clear:function(e){this.topControl.clear(e)},isEmpty:function(){return this.topControl.isEmpty()},fireCallback:function(e,t,i,a,n,r){this.view.fireCallback(this,e,t,i,a,n,r)},getFormEl:function(){return this.form},submit:function(){this.form.submit()},ajaxSubmit:function(){var t=this;return e.ajax({data:this.getValue(),url:t.options.attributes.action,type:t.options.attributes.method,dataType:"json"})}})}(jQuery),function(e){var t=e.alpaca;t.Fields.TextField=t.ControlField.extend({getFieldType:function(){return"text"},setup:function(){this.base(),this.options.size||(this.options.size=40),this.inputType||(this.inputType="text"),this.options.inputType&&(this.inputType=this.options.inputType),this.options.data||(this.options.data={}),this.options.attributes||(this.options.attributes={}),"undefined"==typeof this.options.allowOptionalEmpty&&(this.options.allowOptionalEmpty=!0)},destroy:function(){this.base(),this.control&&this.control.typeahead&&this.options.typeahead&&e(this.control).typeahead("destroy")},postRender:function(e){var t=this;this.base(function(){t.control&&(t.applyMask(),t.applyTypeAhead(),t.updateMaxLengthIndicator()),e()})},applyMask:function(){var e=this;e.control.mask&&e.options.maskString&&e.control.mask(e.options.maskString)},applyTypeAhead:function(){var i=this;if(i.control.typeahead&&i.options.typeahead&&!t.isEmpty(i.options.typeahead)){var a=i.options.typeahead.config;a||(a={});var n=i.options.typeahead.datasets;n||(n={}),n.name||(n.name=i.getId());var r=i.options.typeahead.events;if(r||(r={}),"local"===n.type||"remote"===n.type||"prefetch"===n.type){var o={datumTokenizer:function(e){return Bloodhound.tokenizers.whitespace(e.value)},queryTokenizer:Bloodhound.tokenizers.whitespace};if("local"===n.type){var s=[];if("function"==typeof n.source)o.local=n.source;else{for(var l=0;l<n.source.length;l++){var c=n.source[l];"string"==typeof c&&(c={value:c}),s.push(c)}o.local=s}n.local&&(o.local=n.local)}"prefetch"===n.type&&(o.prefetch={url:n.source},n.filter&&(o.prefetch.filter=n.filter)),"remote"===n.type&&(o.remote={url:n.source},n.filter&&(o.remote.filter=n.filter),n.replace&&(o.remote.replace=n.replace));var d=new Bloodhound(o);d.initialize(),n.source=d.ttAdapter()}if(n.templates)for(var p in n.templates){var u=n.templates[p];"string"==typeof u&&(n.templates[p]=Handlebars.compile(u))}e(i.control).typeahead(a,n),e(i.control).on("typeahead:autocompleted",function(e,t){i.setValue(t.value)}),e(i.control).on("typeahead:selected",function(e,t){i.setValue(t.value)}),r&&(r.autocompleted&&e(i.control).on("typeahead:autocompleted",function(e,t){r.autocompleted(e,t)}),r.selected&&e(i.control).on("typeahead:selected",function(e,t){r.selected(e,t)}));var h=e(i.control);e(i.control).change(function(){var t=e(this).val(),i=e(h).typeahead("val");i!==t&&e(h).typeahead("val",i)
})}},prepareControlModel:function(e){var t=this;this.base(function(i){i.inputType=t.inputType,e(i)})},updateMaxLengthIndicator:function(){var i=this,a=e(i.field).find(".alpaca-field-text-max-length-indicator");0===a.length&&(a=e("<p class='alpaca-field-text-max-length-indicator'></p>"),e(i.control).after(a));var n=!1,r="";if(!t.isEmpty(i.schema.maxLength)&&i.options.showMaxLengthIndicator){var o=i.getValue()||"",s=i.schema.maxLength-o.length;s>=0?r="You have "+s+" characters remaining":(r="Your message is too long by "+-1*s+" characters",n=!0),e(a).html(r),e(a).removeClass("err"),n&&e(a).addClass("err")}},getValue:function(){var t=this,i=null;if(!this.isDisplayOnly()&&this.control&&this.control.length>0){if(i=this._getControlVal(!0),t.control.mask&&t.options.maskString){var a=e(this.control).data(e.mask.dataName);a&&(i=a(),i=t.ensureProperType(i))}}else i=this.base();return i},setValue:function(e){this.control&&this.control.length>0&&this.control.val(t.isEmpty(e)?"":e),this.base(e),this.updateMaxLengthIndicator()},handleValidate:function(){var e=this.base(),i=this.validation,a=this._validatePattern();return i.invalidPattern={message:a?"":t.substituteTokens(this.view.getMessage("invalidPattern"),[this.schema.pattern]),status:a},a=this._validateMaxLength(),i.stringTooLong={message:a?"":t.substituteTokens(this.view.getMessage("stringTooLong"),[this.schema.maxLength]),status:a},a=this._validateMinLength(),i.stringTooShort={message:a?"":t.substituteTokens(this.view.getMessage("stringTooShort"),[this.schema.minLength]),status:a},e&&i.invalidPattern.status&&i.stringTooLong.status&&i.stringTooShort.status},_validatePattern:function(){if(this.schema.pattern){var e=this.getValue();if(""===e&&this.options.allowOptionalEmpty&&!this.isRequired())return!0;if(t.isEmpty(e)&&(e=""),!e.match(this.schema.pattern))return!1}return!0},_validateMinLength:function(){if(!t.isEmpty(this.schema.minLength)){var e=this.getValue();if(""===e&&this.options.allowOptionalEmpty&&!this.isRequired())return!0;if(t.isEmpty(e)&&(e=""),e.length<this.schema.minLength)return!1}return!0},_validateMaxLength:function(){if(!t.isEmpty(this.schema.maxLength)){var e=this.getValue();if(""===e&&this.options.allowOptionalEmpty&&!this.isRequired())return!0;if(t.isEmpty(e)&&(e=""),e.length>this.schema.maxLength)return!1}return!0},focus:function(){if(this.control&&this.control.length>0){var t=e(this.control).get(0);try{var i=t.value?t.value.length:0;t.selectionStart=i,t.selectionEnd=i}catch(a){}t.focus()}},getType:function(){return"string"},onKeyDown:function(e){var i=this;if(8===e.keyCode){if(!t.isEmpty(i.schema.minLength)&&(i.options.constrainLengths||i.options.constrainMinLength)){var a=i.getValue()||"";a.length<=i.schema.minLength&&(e.preventDefault(),e.stopImmediatePropagation())}}else if(!t.isEmpty(i.schema.maxLength)&&(i.options.constrainLengths||i.options.constrainMaxLength)){var a=i.getValue()||"";a.length>=i.schema.maxLength&&(e.preventDefault(),e.stopImmediatePropagation())}},onKeyUp:function(){var e=this;e.updateMaxLengthIndicator()},getTitle:function(){return"Single-Line Text"},getDescription:function(){return"Text field for single-line text."},getSchemaOfSchema:function(){return t.merge(this.base(),{properties:{minLength:{title:"Minimal Length",description:"Minimal length of the property value.",type:"number"},maxLength:{title:"Maximum Length",description:"Maximum length of the property value.",type:"number"},pattern:{title:"Pattern",description:"Regular expression for the property value.",type:"string"}}})},getOptionsForSchema:function(){return t.merge(this.base(),{fields:{"default":{helper:"Field default value",type:"text"},minLength:{type:"integer"},maxLength:{type:"integer"},pattern:{type:"text"}}})},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{size:{title:"Field Size",description:"Field size.",type:"number","default":40},maskString:{title:"Mask Expression",description:"Expression for the field mask. Field masking will be enabled if not empty.",type:"string"},placeholder:{title:"Field Placeholder",description:"Field placeholder.",type:"string"},typeahead:{title:"Type Ahead",description:"Provides configuration for the $.typeahead plugin if it is available.  For full configuration options, see: https://github.com/twitter/typeahead.js"},allowOptionalEmpty:{title:"Allow Optional Empty",description:"Allows this non-required field to validate when the value is empty"},inputType:{title:"HTML5 Input Type",description:"Allows for the override of the underlying HTML5 input type.  If not specified, an assumed value is provided based on the kind of input control (i.e. 'text', 'date', 'email' and so forth)",type:"string"},data:{title:"Data attributes for the underlying DOM input control",description:"Allows you to specify a key/value map of data attributes that will be added as DOM attribuets for the underlying input control.  The data attributes will be added as data-{name}='{value}'.",type:"object"}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{size:{type:"integer"},maskString:{helper:"a - an alpha character;9 - a numeric character;* - an alphanumeric character",type:"text"},typeahead:{type:"object"},allowOptionalEmpty:{type:"checkbox"},inputType:{type:"string"},data:{type:"object"}}})}}),t.registerMessages({invalidPattern:"This field should have pattern {0}",stringTooShort:"This field should contain at least {0} numbers or characters",stringTooLong:"This field should contain at most {0} numbers or characters"}),t.registerFieldClass("text",t.Fields.TextField),t.registerDefaultSchemaFieldMapping("string","text")}(jQuery),function(e){var t=e.alpaca;t.Fields.TextAreaField=t.Fields.TextField.extend({getFieldType:function(){return"textarea"},setup:function(){this.base(),this.options.rows||(this.options.rows=5),this.options.cols||(this.options.cols=40)},handleValidate:function(){var e=this.base(),i=this.validation,a=this._validateWordCount();return i.wordLimitExceeded={message:a?"":t.substituteTokens(this.view.getMessage("wordLimitExceeded"),[this.options.wordlimit]),status:a},e&&i.wordLimitExceeded.status},_validateWordCount:function(){if(this.options.wordlimit&&this.options.wordlimit>-1){var e=this.data;if(e){var t=e.split(" ").length;if(t>this.options.wordlimit)return!1}}return!0},getTitle:function(){return"Multi-Line Text"},getDescription:function(){return"Textarea field for multiple line text."},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{rows:{title:"Rows",description:"Number of rows",type:"number","default":5},cols:{title:"Columns",description:"Number of columns",type:"number","default":40},wordlimit:{title:"Word Limit",description:"Limits the number of words allowed in the text area.",type:"number","default":-1}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{rows:{type:"integer"},cols:{type:"integer"},wordlimit:{type:"integer"}}})}}),t.registerMessages({wordLimitExceeded:"The maximum word limit of {0} has been exceeded."}),t.registerFieldClass("textarea",t.Fields.TextAreaField)}(jQuery),function(e){var t=e.alpaca;t.Fields.CheckBoxField=t.ControlField.extend({getFieldType:function(){return"checkbox"},setup:function(){var i=this;i.base(),this.options.rightLabel||(this.options.rightLabel=""),"undefined"==typeof i.options.multiple&&("array"===i.schema.type?i.options.multiple=!0:"undefined"!=typeof i.schema["enum"]&&(i.options.multiple=!0)),i.checkboxOptions=[],i.options.multiple&&e.each(i.getEnum(),function(e,a){var n=a;i.options.optionLabels&&(t.isEmpty(i.options.optionLabels[e])?t.isEmpty(i.options.optionLabels[a])||(n=i.options.optionLabels[a]):n=i.options.optionLabels[e]),i.checkboxOptions.push({value:a,text:n})})},getEnum:function(){var e=[];return this.schema&&this.schema["enum"]&&(e=this.schema["enum"]),e},onClick:function(){this.refreshValidationState()},prepareControlModel:function(e){var t=this;this.base(function(i){i.checkboxOptions=t.checkboxOptions,e(i)})},postRender:function(t){var i=this;this.base(function(){if(i.data&&"undefined"!=typeof i.data&&i.setValue(i.data),e(i.getFieldEl()).find("input:checkbox").change(function(){i.triggerWithPropagation("change")}),i.options.multiple&&(e(i.getFieldEl()).find("input:checkbox").prop("checked",!1),i.data)){var a=i.data;if("string"==typeof i.data){a=i.data.split(",");for(var n=0;n<a.length;n++)a[n]=e.trim(a[n])}for(var r in a)e(i.getFieldEl()).find("input:checkbox[data-checkbox-value='"+a[r]+"']").prop("checked",!0)}t()})},getValue:function(){var i=this,a=null;if(i.options.multiple){for(var n=[],r=0;r<i.checkboxOptions.length;r++){var o=e(i.getFieldEl()).find("input[data-checkbox-index='"+r+"']");if(t.checked(o)){var s=e(o).attr("data-checkbox-value");n.push(s)}}"array"===i.schema.type?a=n:"string"===i.schema.type&&(a=n.join(","))}else{var l=e(i.getFieldEl()).find("input");a=l.length>0?t.checked(e(l[0])):!1}return a},setValue:function(i){var a=this,n=function(i){t.isString(i)&&(i="true"===i);var n=e(a.getFieldEl()).find("input");n.length>0&&t.checked(e(n[0]),i)},r=function(n){"string"==typeof n&&(n=n.split(","));for(var r=0;r<n.length;r++)n[r]=t.trim(n[r]);for(var o=0;o<n.length;o++){var s=e(a.getFieldEl()).find("input[data-checkbox-value='"+n[o]+"']");s.length>0&&t.checked(e(s[0]),i)}},o=!1;a.options.multiple?"string"==typeof i?(r(i),o=!0):t.isArray(i)&&(r(i),o=!0):"boolean"==typeof i?(n(i),o=!0):"string"==typeof i&&(n(i),o=!0),!o&&i&&t.logError("CheckboxField cannot set value for schema.type="+a.schema.type+" and value="+i),this.base(i)},_validateEnum:function(){var e=this;if(!e.options.multiple)return!0;var i=e.getValue();return!e.isRequired()&&t.isValEmpty(i)?!0:("string"==typeof i&&(i=i.split(",")),t.anyEquality(i,e.schema["enum"]))},disable:function(){e(this.control).find("input").each(function(){e(this).disabled=!0})},enable:function(){e(this.control).find("input").each(function(){e(this).disabled=!1})},getType:function(){return"boolean"},getTitle:function(){return"Checkbox Field"},getDescription:function(){return"Checkbox Field for boolean (true/false), string ('true', 'false' or comma-delimited string of values) or data array."},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{rightLabel:{title:"Option Label",description:"Optional right-hand side label for single checkbox field.",type:"string"},multiple:{title:"Multiple",description:"Whether to render multiple checkboxes for multi-valued type (such as an array or a comma-delimited string)",type:"boolean"}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{rightLabel:{type:"text"},multiple:{type:"checkbox"}}})}}),t.registerFieldClass("checkbox",t.Fields.CheckBoxField),t.registerDefaultSchemaFieldMapping("boolean","checkbox")}(jQuery),function(e){var t=e.alpaca;t.Fields.FileField=t.Fields.TextField.extend({getFieldType:function(){return"file"},setValue:function(e){this.data=e,this.data=e,this.updateObservable(),this.triggerUpdate()},getValue:function(){return this.data},onChange:function(e){this.base(e),this.options.selectionHandler&&this.processSelectionHandler(e.target.files)},processSelectionHandler:function(e){if(e&&e.length>0&&"undefined"!=typeof FileReader){var t=[],i=0,a=new FileReader;a.onload=function(){var a=this;return function(n){var r=n.target.result;t.push(r),i++,i===e.length&&a.options.selectionHandler.call(a,e,t)}}.call(this);for(var n=0;n<e.length;n++)a.readAsDataURL(e[n])}},getTitle:function(){return"File Field"},getDescription:function(){return"Field for uploading files."},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{selectionHandler:{title:"Selection Handler",description:"Function that should be called when files are selected.  Requires HTML5.",type:"boolean","default":!1}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{selectionHandler:{type:"checkbox"}}})}}),t.registerFieldClass("file",t.Fields.FileField)}(jQuery),function(e){var t=e.alpaca;t.Fields.ListField=t.ControlField.extend({setup:function(){var i=this;i.base(),i.selectOptions=[],i.getEnum()&&e.each(i.getEnum(),function(e,a){var n=a;i.options.optionLabels&&(t.isEmpty(i.options.optionLabels[e])?t.isEmpty(i.options.optionLabels[a])||(n=i.options.optionLabels[a]):n=i.options.optionLabels[e]),i.selectOptions.push({value:a,text:n})}),i.isRequired()&&!i.data&&i.options.removeDefaultNone===!0&&i.schema.enum&&i.schema.enum.length>0&&(i.data=i.schema.enum[0])},prepareControlModel:function(e){var t=this;this.base(function(i){i.noneLabel="None","undefined"!=typeof t.options.noneLabel&&(i.noneLabel=t.options.noneLabel),i.hideNone=t.isRequired(),"undefined"!=typeof t.options.removeDefaultNone&&(i.hideNone=t.options.removeDefaultNone),e(i)})},getEnum:function(){return this.schema&&this.schema["enum"]?this.schema["enum"]:void 0},getValue:function(i){var a=this;return t.isArray(i)?e.each(i,function(t,n){e.each(a.selectOptions,function(e,a){a.value===n&&(i[t]=a.value)})}):e.each(this.selectOptions,function(e,t){t.value===i&&(i=t.value)}),i},beforeRenderControl:function(i,a){var n=this;this.base(i,function(){if(n.options.dataSource){n.selectOptions=[];var r=function(){n.schema.enum=[],n.options.optionLabels=[];for(var e=0;e<n.selectOptions.length;e++)n.schema.enum.push(n.selectOptions[e].value),n.options.optionLabels.push(n.selectOptions[e].text);i.selectOptions=n.selectOptions,a()};if(t.isFunction(n.options.dataSource))n.options.dataSource.call(n,function(e){if(t.isArray(e)){for(var i=0;i<e.length;i++)"string"==typeof e[i]?n.selectOptions.push({text:e[i],value:e[i]}):t.isObject(e[i])&&n.selectOptions.push(e[i]);r()}else if(t.isObject(e)){for(var a in e)n.selectOptions.push({text:a,value:e[a]});r()}else r()});else if(t.isUri(n.options.dataSource))e.ajax({url:n.options.dataSource,type:"get",dataType:"json",success:function(i){var a=i;n.options.dsTransformer&&t.isFunction(n.options.dsTransformer)&&(a=n.options.dsTransformer(a)),a&&(t.isObject(a)?(e.each(a,function(e,t){n.selectOptions.push({value:e,text:t})}),r()):t.isArray(a)&&(e.each(a,function(e,t){n.selectOptions.push({value:t.value,text:t.text})}),r()))},error:function(e,t,i){n.errorCallback({message:"Unable to load data from uri : "+_this.options.dataSource,stage:"DATASOURCE_LOADING_ERROR",details:{jqXHR:e,textStatus:t,errorThrown:i}})}});else if(t.isArray(n.options.dataSource)){for(var o=0;o<n.options.dataSource.length;o++)"string"==typeof n.options.dataSource[o]?n.selectOptions.push({text:n.options.dataSource[o],value:n.options.dataSource[o]}):t.isObject(n.options.dataSource[o])&&n.selectOptions.push(n.options.dataSource[o]);r()}else a()}else a()})},getSchemaOfSchema:function(){return t.merge(this.base(),{properties:{"enum":{title:"Enumeration",description:"List of field value options",type:"array",required:!0}}})},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{optionLabels:{title:"Option Labels",description:"Labels for options. It can either be a map object or an array field that maps labels to items defined by enum schema property one by one.",type:"array"},dataSource:{title:"Option Datasource",description:"Datasource for generating list of options.  This can be a string or a function.  If a string, it is considered to be a URI to a service that produces a object containing key/value pairs or an array of elements of structure {'text': '', 'value': ''}.  This can also be a function that is called to produce the same list.",type:"string"},removeDefaultNone:{title:"Remove Default None",description:"If true, the default 'None' option will not be shown.",type:"boolean","default":!1},noneLabel:{title:"None Label",description:"The label to use for the 'None' option in a list (select, radio or otherwise).",type:"string","default":"None"},hideNone:{title:"Hide None",description:"Whether to hide the None option from a list (select, radio or otherwise).  This will be true if the field is required and false otherwise.",type:"boolean","default":!1}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{optionLabels:{itemLabel:"Label",type:"array"},dataSource:{type:"text"},removeDefaultNone:{type:"checkbox",rightLabel:"Remove Default None"},noneLabel:{type:"text"},hideNone:{type:"checkbox",rightLabel:"Hide the 'None' option from the list"}}})}})}(jQuery),function(e){var t=e.alpaca;t.Fields.RadioField=t.Fields.ListField.extend({getFieldType:function(){return"radio"},setup:function(){this.base(),this.options.name?this.name=this.options.name:this.name||(this.name=this.getId()+"-name"),t.isUndefined(this.options.emptySelectFirst)&&(this.options.emptySelectFirst=!1)},getValue:function(){var t=this,i=null;return e(this.control).find(":checked").each(function(){i=e(this).val(),i=t.ensureProperType(i)}),i},setValue:function(i){var a=this;e(this.control).find("input").each(function(){t.checked(e(this),null)}),"undefined"!=typeof i&&t.checked(e(a.control).find("input[value='"+i+"']"),"checked"),this.options.emptySelectFirst&&0===e(this.control).find("input:checked").length&&t.checked(e(a.control).find("input:radio").first(),"checked"),this.base(i)},initControlEvents:function(){var t=this;t.base();var i=e(this.control).find("input");i.focus(function(e){t.suspendBlurFocus||(t.onFocus.call(t,e),t.trigger("focus",e))}),i.blur(function(e){t.suspendBlurFocus||(t.onBlur.call(t,e),t.trigger("blur",e))})},prepareControlModel:function(e){var t=this;this.base(function(i){i.selectOptions=t.selectOptions,i.removeDefaultNone=t.options.removeDefaultNone,e(i)})},afterRenderControl:function(i,a){var n=this;this.base(i,function(){n.options.emptySelectFirst&&n.selectOptions&&n.selectOptions.length>0&&(n.data=n.selectOptions[0].value,0===e("input:radio:checked",n.control).length&&t.checked(e(n.control).find("input:radio").first(),"checked")),n.options.vertical&&e(".alpaca-controlfield-radio-item",n.control).css("display","block"),a()})},onClick:function(t){this.base(t);var i=this,a=e(t.currentTarget).find("input").val();"undefined"!=typeof a&&(i.setValue(a),i.refreshValidationState())},getTitle:function(){return"Radio Group Field"},getDescription:function(){return"Radio Group Field with list of options."},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{name:{title:"Field name",description:"Field name.",type:"string"},emptySelectFirst:{title:"Empty Select First",description:"If the data is empty, then automatically select the first item in the list.",type:"boolean","default":!1},vertical:{title:"Position the radio selector items vertically",description:"When true, the radio selector items will be stacked vertically and not horizontally",type:"boolean","default":!1}}})}}),t.registerFieldClass("radio",t.Fields.RadioField)}(jQuery),function(e){var t=e.alpaca;t.Fields.SelectField=t.Fields.ListField.extend({getFieldType:function(){return"select"},setup:function(){this.base(),t.isUndefined(this.options.emptySelectFirst)&&(this.options.emptySelectFirst=!1)},getValue:function(){if(this.control&&this.control.length>0){var e=this._getControlVal(!0);return"undefined"==typeof e&&(e=this.data),this.base(e)}},setValue:function(e){t.isArray(e)?t.compareArrayContent(e,this.getValue())||(!t.isEmpty(e)&&this.control&&this.control.val(e),this.base(e)):e!==this.getValue()&&(this.control&&"undefined"!=typeof e&&null!=e&&this.control.val(e),this.base(e))},getEnum:function(){if(this.schema){if(this.schema["enum"])return this.schema["enum"];if(this.schema.type&&"array"===this.schema.type&&this.schema.items&&this.schema.items["enum"])return this.schema.items["enum"]}},initControlEvents:function(){var e=this;if(e.base(),e.options.multiple){var t=this.control.parent().find("button.multiselect");t.focus(function(t){e.suspendBlurFocus||(e.onFocus.call(e,t),e.trigger("focus",t))}),t.blur(function(t){e.suspendBlurFocus||(e.onBlur.call(e,t),e.trigger("blur",t))})}},beforeRenderControl:function(e,t){var i=this;this.base(e,function(){i.schema.type&&"array"===i.schema.type&&(i.options.multiple=!0),t()})},prepareControlModel:function(e){var t=this;this.base(function(i){i.selectOptions=t.selectOptions,e(i)})},afterRenderControl:function(i,a){var n=this;this.base(i,function(){if(t.isUndefined(n.data)&&n.options.emptySelectFirst&&n.selectOptions&&n.selectOptions.length>0&&(n.data=n.selectOptions[0].value),n.data&&n.setValue(n.data),n.options.multiple&&e.fn.multiselect){var i=null;i=n.options.multiselect?n.options.multiselect:{},i.nonSelectedText||(i.nonSelectedText="None",n.options.noneLabel&&(i.nonSelectedText=n.options.noneLabel)),n.options.hideNone&&delete i.nonSelectedText,e(n.getControlEl()).multiselect(i)}a()})},_validateEnum:function(){var i=this;if(this.schema["enum"]){var a=this.data;if(!this.isRequired()&&t.isValEmpty(a))return!0;if(this.options.multiple){var n=!0;return a||(a=[]),t.isArray(a)||t.isObject(a)||(a=[a]),e.each(a,function(t,a){return e.inArray(a,i.schema["enum"])<=-1?(n=!1,!1):void 0}),n}return e.inArray(a,this.schema["enum"])>-1}return!0},onChange:function(e){this.base(e);var i=this;t.later(25,this,function(){var e=i.getValue();i.setValue(e),i.refreshValidationState()})},_validateMinItems:function(){return this.schema.items&&this.schema.items.minItems&&e(":selected",this.control).length<this.schema.items.minItems?!1:!0},_validateMaxItems:function(){return this.schema.items&&this.schema.items.maxItems&&e(":selected",this.control).length>this.schema.items.maxItems?!1:!0},handleValidate:function(){var e=this.base(),i=this.validation,a=this._validateMaxItems();return i.tooManyItems={message:a?"":t.substituteTokens(this.view.getMessage("tooManyItems"),[this.schema.items.maxItems]),status:a},a=this._validateMinItems(),i.notEnoughItems={message:a?"":t.substituteTokens(this.view.getMessage("notEnoughItems"),[this.schema.items.minItems]),status:a},e&&i.tooManyItems.status&&i.notEnoughItems.status},getTitle:function(){return"Select Field"},getDescription:function(){return"Select Field"},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{multiple:{title:"Mulitple Selection",description:"Allow multiple selection if true.",type:"boolean","default":!1},size:{title:"Displayed Options",description:"Number of options to be shown.",type:"number"},emptySelectFirst:{title:"Empty Select First",description:"If the data is empty, then automatically select the first item in the list.",type:"boolean","default":!1},multiselect:{title:"Multiselect Plugin Settings",description:"Multiselect plugin properties - http://davidstutz.github.io/bootstrap-multiselect",type:"any"}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{multiple:{rightLabel:"Allow multiple selection ?",helper:"Allow multiple selection if checked",type:"checkbox"},size:{type:"integer"},emptySelectFirst:{type:"checkbox",rightLabel:"Empty Select First"},multiselect:{type:"object",rightLabel:"Multiselect plugin properties - http://davidstutz.github.io/bootstrap-multiselect"}}})}}),t.registerFieldClass("select",t.Fields.SelectField)}(jQuery),function(e){var t=e.alpaca;t.Fields.NumberField=t.Fields.TextField.extend({setup:function(){this.base()},getFieldType:function(){return"number"},getValue:function(){var e=this._getControlVal(!0);return"undefined"==typeof e||""==e?e:parseFloat(e)},handleValidate:function(){var e=this.base(),i=this.validation,a=this._validateNumber();return i.stringNotANumber={message:a?"":this.view.getMessage("stringNotANumber"),status:a},a=this._validateDivisibleBy(),i.stringDivisibleBy={message:a?"":t.substituteTokens(this.view.getMessage("stringDivisibleBy"),[this.schema.divisibleBy]),status:a},a=this._validateMaximum(),i.stringValueTooLarge={message:"",status:a},a||(i.stringValueTooLarge.message=this.schema.exclusiveMaximum?t.substituteTokens(this.view.getMessage("stringValueTooLargeExclusive"),[this.schema.maximum]):t.substituteTokens(this.view.getMessage("stringValueTooLarge"),[this.schema.maximum])),a=this._validateMinimum(),i.stringValueTooSmall={message:"",status:a},a||(i.stringValueTooSmall.message=this.schema.exclusiveMinimum?t.substituteTokens(this.view.getMessage("stringValueTooSmallExclusive"),[this.schema.minimum]):t.substituteTokens(this.view.getMessage("stringValueTooSmall"),[this.schema.minimum])),a=this._validateMultipleOf(),i.stringValueNotMultipleOf={message:"",status:a},a||(i.stringValueNotMultipleOf.message=t.substituteTokens(this.view.getMessage("stringValueNotMultipleOf"),[this.schema.multipleOf])),e&&i.stringNotANumber.status&&i.stringDivisibleBy.status&&i.stringValueTooLarge.status&&i.stringValueTooSmall.status&&i.stringValueNotMultipleOf.status},_validateNumber:function(){var e=this._getControlVal();if("number"==typeof e&&(e=""+e),t.isValEmpty(e))return!0;var i=t.testRegex(t.regexps.number,e);if(!i)return!1;var a=this.getValue();return isNaN(a)?!1:!0},_validateDivisibleBy:function(){var e=this.getValue();return t.isEmpty(this.schema.divisibleBy)||e%this.schema.divisibleBy===0?!0:!1},_validateMaximum:function(){var e=this.getValue();if(!t.isEmpty(this.schema.maximum)){if(e>this.schema.maximum)return!1;if(!t.isEmpty(this.schema.exclusiveMaximum)&&e==this.schema.maximum&&this.schema.exclusiveMaximum)return!1}return!0},_validateMinimum:function(){var e=this.getValue();if(!t.isEmpty(this.schema.minimum)){if(e<this.schema.minimum)return!1;if(!t.isEmpty(this.schema.exclusiveMinimum)&&e==this.schema.minimum&&this.schema.exclusiveMinimum)return!1}return!0},_validateMultipleOf:function(){var e=this.getValue();return!t.isEmpty(this.schema.multipleOf)&&e&&0!==this.schema.multipleOf?!1:!0},getType:function(){return"number"},getSchemaOfSchema:function(){return t.merge(this.base(),{properties:{multipleOf:{title:"Multiple Of",description:"Property value must be a multiple of the multipleOf schema property such that division by this value yields an interger (mod zero).",type:"number"},minimum:{title:"Minimum",description:"Minimum value of the property.",type:"number"},maximum:{title:"Maximum",description:"Maximum value of the property.",type:"number"},exclusiveMinimum:{title:"Exclusive Minimum",description:"Property value can not equal the number defined by the minimum schema property.",type:"boolean","default":!1},exclusiveMaximum:{title:"Exclusive Maximum",description:"Property value can not equal the number defined by the maximum schema property.",type:"boolean","default":!1}}})},getOptionsForSchema:function(){return t.merge(this.base(),{fields:{multipleOf:{title:"Multiple Of",description:"The value must be a integral multiple of the property",type:"number"},minimum:{title:"Minimum",description:"Minimum value of the property",type:"number"},maximum:{title:"Maximum",description:"Maximum value of the property",type:"number"},exclusiveMinimum:{rightLabel:"Exclusive minimum ?",helper:"Field value must be greater than but not equal to this number if checked",type:"checkbox"},exclusiveMaximum:{rightLabel:"Exclusive Maximum ?",helper:"Field value must be less than but not equal to this number if checked",type:"checkbox"}}})},getTitle:function(){return"Number Field"},getDescription:function(){return"Field for float numbers."}}),t.registerMessages({stringValueTooSmall:"The minimum value for this field is {0}",stringValueTooLarge:"The maximum value for this field is {0}",stringValueTooSmallExclusive:"Value of this field must be greater than {0}",stringValueTooLargeExclusive:"Value of this field must be less than {0}",stringDivisibleBy:"The value must be divisible by {0}",stringNotANumber:"This value is not a number.",stringValueNotMultipleOf:"This value is nu"}),t.registerFieldClass("number",t.Fields.NumberField),t.registerDefaultSchemaFieldMapping("number","number")}(jQuery),function(e){var t=e.alpaca;t.Fields.ArrayField=t.ContainerField.extend({getFieldType:function(){return"array"},setup:function(){var i=this;this.base(),this.options.toolbarStyle=t.isEmpty(this.view.toolbarStyle)?"button":this.view.toolbarStyle,this.options.actionbarStyle=t.isEmpty(this.view.actionbarStyle)?"top":this.view.actionbarStyle,this.options.rubyrails=!1,this.parent&&this.parent.options&&this.parent.options.form&&this.parent.options.form.attributes&&(t.isEmpty(this.parent.options.form.attributes.rubyrails)||(this.options.rubyrails=!0)),this.options.items||(this.options.items={});var a=!0;if(t.isEmpty(this.view.toolbarSticky)||(a=this.view.toolbarSticky),t.isEmpty(this.options.toolbarSticky)||(a=this.options.toolbarSticky),t.isEmpty(this.options.items.showMoveUpItemButton)&&(this.options.items.showMoveUpItemButton=!0),t.isEmpty(this.options.items.showMoveDownItemButton)&&(this.options.items.showMoveDownItemButton=!0),this.options.toolbarSticky=a,this.schema.items&&this.schema.uniqueItems&&t.mergeObject(this.options,{forceRevalidation:!0}),"undefined"==typeof this.data&&(this.data=[]),null==this.data&&(this.data=[]),""==this.data&&(this.data=[]),t.isString(this.data))try{var n=t.parseJSON(this.data);if(!t.isArray(n)&&!t.isObject(n))return void t.logWarn("ArrayField parsed string data but it was not an array: "+this.data);this.data=n}catch(r){this.data=[this.data]}if(!t.isArray(this.data)&&!t.isObject(this.data))return void t.logWarn("ArrayField data is not an array: "+JSON.stringify(this.data,null,"  "));if(i.toolbar={},i.options.toolbar)for(var o in i.options.toolbar)i.toolbar[o]=i.options.toolbar[o];if(i.toolbar.actions||(i.toolbar.actions=[],i.toolbar.actions.push({label:i.options.items&&i.options.items.addItemLabel?i.options.items.addItemLabel:"Add Item",action:"add",iconClass:i.addIcon,click:function(){i.resolveItemSchemaOptions(function(e,a){var n=t.createEmptyDataInstance(e);i.addItem(0,e,a,n,function(){})})}})),i.actionbar={},i.options.actionbar)for(var s in i.options.actionbar)i.actionbar[s]=i.options.actionbar[s];i.actionbar.actions||(i.actionbar.actions=[],i.actionbar.actions.push({action:"add",iconClass:i.addIcon,click:function(e,a,n){i.resolveItemSchemaOptions(function(e,a){var r=t.createEmptyDataInstance(e);i.addItem(n+1,e,a,r,function(){})})}}),i.actionbar.actions.push({action:"remove",iconClass:i.removeIcon,click:function(e,t,a){i.removeItem(a,function(){})}}),i.actionbar.actions.push({action:"up",iconClass:i.upIcon,click:function(e,t,a){i.moveItem(a,a-1,i.options.animate,function(){})}}),i.actionbar.actions.push({action:"down",iconClass:i.downIcon,click:function(e,t,a){i.moveItem(a,a+1,i.options.animate,function(){})}}));var l=this.data.length,c=e.extend(!0,{},this.data);c.length=l,this.data=Array.prototype.slice.call(c)},setValue:function(e){var i=this;if(e&&t.isArray(e)){var a=0;do if(a<i.children.length){var n=i.children[a];e.length>a?(n.setValue(e[a]),a++):i.removeItem(a)}while(a<i.children.length);a<e.length&&i.resolveItemSchemaOptions(function(n,r){n||t.logDebug("Unable to resolve schema for item: "+a);for(var o=[];a<e.length;){var s=function(e,a){return function(o){i.addItem(e,n,r,a[e],function(){t.nextTick(function(){o()})})}}(a,e[a]);o.push(s),a++}t.series(o,function(){})})}},getValue:function(){if(0!==this.children.length||this.isRequired()){for(var e=[],t=0;t<this.children.length;t++){var i=this.children[t].getValue();"undefined"!=typeof i&&e.push(i)}return e}},createItems:function(e){var i=this,a=[];i.data?i.resolveItemSchemaOptions(function(n,r){for(var o=[],s=0;s<i.data.length;s++){var l=i.data[s],c=function(e,o){return function(s){i.createItem(e,n,r,o,function(e){a.push(e),t.nextTick(function(){s()})})}}(s,l);o.push(c)}t.series(o,function(){e(a)})}):e(a)},createItem:function(i,a,n,r,o){var s=this;if(s._validateEqualMaxItems()){null===n&&s.options&&s.options.fields&&s.options.fields.item&&(n=s.options.fields.item);var l=e("<div></div>");return l.alpaca({data:r,options:n,schema:a,view:this.view.id?this.view.id:this.view,connector:this.connector,error:function(e){s.destroy(),s.errorCallback.call(_this,e)},notTopLevel:!0,render:function(e,t){e.parent=s,e.path=s.path+"["+i+"]",e.render(null,function(){s.refreshValidationState(),s.updatePathAndName(),s.triggerUpdate(),t&&t()})},postRender:function(e){t.isFunction(s.options.items.postRender)&&s.options.items.postRender(l),o&&o(e)}}),l}},resolveItemSchemaOptions:function(e){var i,a=this;
a.options&&a.options.fields&&a.options.fields.item&&(i=a.options.fields.item);var n;if(a.schema&&a.schema.items&&(n=a.schema.items),n&&n.$ref){for(var r=n.$ref,o=this,s=[o];o.parent;)o=o.parent,s.push(o);var l=n,c=i;t.loadRefSchemaOptions(o,r,function(i,a){for(var n=0,o=0;o<s.length;o++)s[o].schema&&s[o].schema.id===r&&n++;var d=n>1,p={};l&&t.mergeObject(p,l),i&&t.mergeObject(p,i),delete p.id;var u={};c&&t.mergeObject(u,c),a&&t.mergeObject(u,a),e(p,u,d)})}else e(n,i)},handleValidate:function(){var e=this.base(),i=this.validation,a=this._validateUniqueItems();return i.valueNotUnique={message:a?"":this.view.getMessage("valueNotUnique"),status:a},a=this._validateMaxItems(),i.tooManyItems={message:a?"":t.substituteTokens(this.view.getMessage("tooManyItems"),[this.schema.items.maxItems]),status:a},a=this._validateMinItems(),i.notEnoughItems={message:a?"":t.substituteTokens(this.view.getMessage("notEnoughItems"),[this.schema.items.minItems]),status:a},e&&i.valueNotUnique.status&&i.tooManyItems.status&&i.notEnoughItems.status},_validateEqualMaxItems:function(){return this.schema.items&&this.schema.items.maxItems&&this.getSize()>=this.schema.items.maxItems?!1:!0},_validateEqualMinItems:function(){return this.schema.items&&this.schema.items.minItems&&this.getSize()<=this.schema.items.minItems?!1:!0},_validateMinItems:function(){return this.schema.items&&this.schema.items.minItems&&this.getSize()<this.schema.items.minItems?!1:!0},_validateMaxItems:function(){return this.schema.items&&this.schema.items.maxItems&&this.getSize()>this.schema.items.maxItems?!1:!0},_validateUniqueItems:function(){if(this.schema.items&&this.schema.uniqueItems)for(var e={},t=0,i=this.children.length;i>t;++t){if(e.hasOwnProperty(this.children[t]))return!1;e[this.children[t]]=!0}return!0},findAction:function(t,i){var a=null;return e.each(t,function(e,t){t.action==i&&(a=t)}),a},postRender:function(e){var t=this;this.base(function(){t.updateToolbars(),e()})},getSize:function(){return this.children.length},updatePathAndName:function(){var i=function(a){a.children&&e.each(a.children,function(n,r){a.prePath&&t.startsWith(r.path,a.prePath)&&(r.prePath=r.path,r.path=r.path.replace(a.prePath,a.path)),a.preName&&t.startsWith(r.name,a.preName)&&(r.preName=r.name,r.name=r.name.replace(a.preName,a.name),r.field&&e(r.field).attr("name",r.name)),i(r)})};this.children&&this.children.length>0&&e.each(this.children,function(t,a){var n=a.path.lastIndexOf("/"),r=a.path.substring(n+1);r.indexOf("[")<0&&r.indexOf("]")<0&&(r=r.substring(r.indexOf("[")+1,r.indexOf("]"))),r!==t&&(a.prePath=a.path,a.path=a.path.substring(0,n)+"/["+t+"]"),a.nameCalculated&&(a.preName=a.name,a.parent&&a.parent.name&&a.path?a.name=a.parent.name+"_"+t:a.path&&(a.name=a.path.replace(/\//g,"").replace(/\[/g,"_").replace(/\]/g,"")),this.parent.options.rubyrails?e(a.field).attr("name",a.parent.name):e(a.field).attr("name",a.name)),a.prePath||(a.prePath=a.path),i(a)})},updateToolbars:function(){var t=this;if("display"!==this.view.type&&!this.schema.readonly){t.toolbar&&(t.fireCallback("arrayToolbar",!0),t.fireCallback("arrayToolbar")),t.actionbar&&(t.fireCallback("arrayActionbars",!0),t.fireCallback("arrayActionbars"));var i=e(this.getFieldEl()).find(".alpaca-array-toolbar[data-alpaca-array-toolbar-field-id='"+t.getId()+"']");if(this.children.length>0?e(i).hide():(e(i).show(),e(i).find("[data-alpaca-array-toolbar-action]").each(function(){var i=e(this).attr("data-alpaca-array-toolbar-action"),a=t.findAction(t.toolbar.actions,i);a&&e(this).off().click(function(e){e.preventDefault(),a.click.call(t,i,a)})})),this.options.toolbarSticky)e(t.getFieldEl()).find(".alpaca-array-actionbar[data-alpaca-array-actionbar-field-id='"+t.getId()+"']").show();else{var a=this.getFieldEl().find(".alpaca-container-item");e(a).each(function(i){var a=e(t.getFieldEl()).find(".alpaca-array-actionbar[data-alpaca-array-actionbar-field-id='"+t.getId()+"'][data-alpaca-array-actionbar-item-index='"+i+"']");a&&a.length>0&&(e(this).hover(function(){e(a).show()},function(){e(a).hide()}),e(a).hide())})}var n=e(this.getFieldEl()).find(".alpaca-array-actionbar[data-alpaca-array-actionbar-field-id='"+t.getId()+"']");e(n).each(function(){var i=e(this).attr("data-alpaca-array-actionbar-item-index");"string"==typeof i&&(i=parseInt(i,10)),e(this).find("[data-alpaca-array-actionbar-action]").each(function(){var a=e(this).attr("data-alpaca-array-actionbar-action"),n=t.findAction(t.actionbar.actions,a);n&&e(this).off().click(function(e){e.preventDefault(),n.click.call(t,a,n,i)})}),e(this).find("[data-alpaca-array-actionbar-action='add']").each(t._validateEqualMaxItems()?function(){e(this).removeClass("alpaca-button-disabled"),t.fireCallback("enableButton",this)}:function(){e(this).addClass("alpaca-button-disabled"),t.fireCallback("disableButton",this)}),e(this).find("[data-alpaca-array-actionbar-action='remove']").each(t._validateEqualMinItems()?function(){e(this).removeClass("alpaca-button-disabled"),t.fireCallback("enableButton",this)}:function(){e(this).addClass("alpaca-button-disabled"),t.fireCallback("disableButton",this)})}),e(n).first().find("[data-alpaca-array-actionbar-action='up']").each(function(){e(this).addClass("alpaca-button-disabled"),t.fireCallback("disableButton",this)}),e(n).last().find("[data-alpaca-array-actionbar-action='down']").each(function(){e(this).addClass("alpaca-button-disabled"),t.fireCallback("disableButton",this)})}},addItem:function(t,i,a,n,r){var o=this;o._validateEqualMaxItems()&&o.createItem(t,i,a,n,function(i){if(o.registerChild(i,t),0===t)e(o.container).append(i.getFieldEl());else{var a=o.getContainerEl().children("[data-alpaca-container-item-index='"+(t-1)+"']");a&&a.length>0&&a.after(i.getFieldEl())}o.updateChildDOMElements(),o.updateToolbars(),o.refreshValidationState(),o.triggerUpdate(),r&&r()})},removeItem:function(e,t){var i=this;this._validateEqualMinItems()&&(i.unregisterChild(e),i.getContainerEl().children("[data-alpaca-container-item-index='"+e+"']").remove(),i.updateChildDOMElements(),i.updateToolbars(),i.refreshValidationState(),i.triggerUpdate(),t&&t())},moveItem:function(i,a,n,r){var o=this;if("function"==typeof n&&(r=n,n=o.options.animate),"undefined"==typeof n&&(n=o.options.animate?o.options.animate:!0),"string"==typeof i&&(i=parseInt(i,10)),"string"==typeof a&&(a=parseInt(a,10)),0>a&&(a=0),a>=o.children.length&&(a=o.children.length-1),-1!==a&&i!==a){var s=o.children[a];if(s){var l=o.getContainerEl().children("[data-alpaca-container-item-index='"+i+"']"),c=o.getContainerEl().children("[data-alpaca-container-item-index='"+a+"']"),d=e("<div class='tempMarker1'></div>");l.before(d);var p=e("<div class='tempMarker2'></div>");c.before(p);var u=function(){for(var t=[],n=0;n<o.children.length;n++)t[n]=n===i?o.children[a]:n===a?o.children[i]:o.children[n];o.children=t,d.replaceWith(c),p.replaceWith(l),o.updateChildDOMElements(),e(l).find("[data-alpaca-array-actionbar-item-index='"+i+"']").attr("data-alpaca-array-actionbar-item-index",a),e(c).find("[data-alpaca-array-actionbar-item-index='"+a+"']").attr("data-alpaca-array-actionbar-item-index",i),o.updateToolbars(),o.refreshValidationState(),o.triggerUpdate(),r&&r()};n?t.animatedSwap(l,c,500,function(){u()}):u()}}},getType:function(){return"array"},getTitle:function(){return"Array Field"},getDescription:function(){return"Field for list of items with same data type or structure."},getSchemaOfSchema:function(){var e={properties:{items:{title:"Array Items",description:"Schema for array items.",type:"object",properties:{minItems:{title:"Minimum Items",description:"Minimum number of items.",type:"number"},maxItems:{title:"Maximum Items",description:"Maximum number of items.",type:"number"},uniqueItems:{title:"Items Unique",description:"Item values should be unique if true.",type:"boolean","default":!1}}}}};return this.children&&this.children[0]&&t.merge(e.properties.items.properties,this.children[0].getSchemaOfSchema()),t.merge(this.base(),e)},getOptionsForSchema:function(){return t.merge(this.base(),{fields:{items:{type:"object",fields:{minItems:{type:"integer"},maxItems:{type:"integer"},uniqueItems:{type:"checkbox"}}}}})},getSchemaOfOptions:function(){var e={properties:{toolbarSticky:{title:"Sticky Toolbar",description:"Array item toolbar will be aways on if true.",type:"boolean","default":!1},items:{title:"Array Items",description:"Options for array items.",type:"object",properties:{extraToolbarButtons:{title:"Extra Toolbar buttons",description:"Buttons to be added next to add/remove/up/down, see examples",type:"array","default":void 0},moveUpItemLabel:{title:"Move Up Item Label",description:"The label to use for the toolbar's 'move up' button.",type:"string","default":"Move Up"},moveDownItemLabel:{title:"Move Down Item Label",description:"The label to use for the toolbar's 'move down' button.",type:"string","default":"Move Down"},removeItemLabel:{title:"Remove Item Label",description:"The label to use for the toolbar's 'remove item' button.",type:"string","default":"Remove Item"},addItemLabel:{title:"Add Item Label",description:"The label to use for the toolbar's 'add item' button.",type:"string","default":"Add Item"},showMoveDownItemButton:{title:"Show Move Down Item Button",description:"Whether to show to the 'Move Down' button on the toolbar.",type:"boolean","default":!0},showMoveUpItemButton:{title:"Show Move Up Item Button",description:"Whether to show the 'Move Up' button on the toolbar.",type:"boolean","default":!0}}}}};return this.children&&this.children[0]&&t.merge(e.properties.items.properties,this.children[0].getSchemaOfSchema()),t.merge(this.base(),e)},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{toolbarSticky:{type:"checkbox"},items:{type:"object",fields:{}}}})}}),t.registerMessages({notEnoughItems:"The minimum number of items is {0}",tooManyItems:"The maximum number of items is {0}",valueNotUnique:"Values are not unique",notAnArray:"This value is not an Array"}),t.registerFieldClass("array",t.Fields.ArrayField),t.registerDefaultSchemaFieldMapping("array","array")}(jQuery),function(e){var t=e.alpaca;t.Fields.ObjectField=t.ContainerField.extend({getFieldType:function(){return"object"},setup:function(){if(this.base(),!t.isEmpty(this.data)&&""!==this.data&&!t.isObject(this.data)){if(!t.isString(this.data))return;try{if(this.data=t.parseJSON(this.data),!t.isObject(this.data))return void t.logWarn("ObjectField parsed data but it was not an object: "+JSON.stringify(this.data))}catch(e){return}}},setValue:function(e){if(e||(e={}),t.isObject(e)){var i={};for(var a in this.childrenById){var n=this.childrenById[a].propertyId;i[n]=this.childrenById[a]}var r={};for(var o in e)e.hasOwnProperty(o)&&(r[o]=e[o]);for(var n in r){var s=i[n];s&&(s.setValue(r[n]),delete i[n],delete r[n])}for(var n in i){var s=i[n];s.setValue(null)}}},getValue:function(){if(0===this.children.length&&!this.isRequired())return{};for(var e={},i=0;i<this.children.length;i++){var a=this.children[i].propertyId,n=this.children[i].getValue();if("undefined"!=typeof n&&this.determineAllDependenciesValid(a)){var r=null;"boolean"==typeof n?r=n?!0:!1:t.isArray(n)||t.isObject(n)?r=n:n&&(r=n),null!==r&&(e[a]=r)}}return e},afterRenderContainer:function(e,i){var a=this;this.base(e,function(){if(a.isTopLevel()&&a.view){a.wizardConfigs=a.view.getWizard(),"undefined"!=typeof a.wizardConfigs&&(a.wizardConfigs&&a.wizardConfigs!==!0||(a.wizardConfigs={}));var e=a.view.getLayout().templateDescriptor;a.wizardConfigs&&t.isObject(a.wizardConfigs)&&(!e||a.wizardConfigs.bindings?a.autoWizard():a.wizard())}i()})},createItems:function(e){var i=this,a=[],n={};for(var r in i.data)n[r]=r;var o=i.data;i.schema&&i.schema.properties&&(o=i.schema.properties);var s=function(){var i=[];for(var r in n)i.push(r);i.length>0&&t.logDebug("There were "+i.length+" extra data keys that were not part of the schema "+JSON.stringify(i)),e(a)},l=[];for(var c in o){var d=null;i.data&&(d=i.data[c]);var p=function(e,n,r){return function(o){i.resolvePropertySchemaOptions(e,function(s,l,c){return c?t.throwErrorWithCallback("Circular reference detected for schema: "+s,i.errorCallback):(s||t.logDebug("Unable to resolve schema for property: "+e),void i.createItem(e,s,l,n,null,function(i){a.push(i),delete r[e],t.nextTick(function(){o()})}))})}}(c,d,n);l.push(p)}t.series(l,function(){s()})},createItem:function(t,i,a,n,r,o){var s=this,l=e("<div></div>");l.alpaca({data:n,options:a,schema:i,view:this.view.id?this.view.id:this.view,connector:this.connector,error:function(e){s.destroy(),s.errorCallback.call(s,e)},notTopLevel:!0,render:function(e,i){e.parent=s,e.propertyId=t,e.path="/"!==s.path?s.path+"/"+t:s.path+t,e.render(null,function(){i()})},postRender:function(e){o&&o(e)}})},resolvePropertySchemaOptions:function(e,i){var a=this,n=null;a.schema&&a.schema.properties&&a.schema.properties[e]&&(n=a.schema.properties[e]);var r={};if(a.options&&a.options.fields&&a.options.fields[e]&&(r=a.options.fields[e]),n&&n.$ref){for(var o=n.$ref,s=this,l=[s];s.parent;)s=s.parent,l.push(s);var c=n,d=r;t.loadRefSchemaOptions(s,o,function(e,a){for(var n=0,r=0;r<l.length;r++)l[r].schema&&l[r].schema.id===o&&n++;var s=n>1,p={};c&&t.mergeObject(p,c),e&&t.mergeObject(p,e),c&&c.id&&(p.id=c.id);var u={};d&&t.mergeObject(u,d),a&&t.mergeObject(u,a),t.nextTick(function(){i(p,u,s)})})}else t.nextTick(function(){i(n,r)})},applyCreatedItems:function(e,t){var i=this;this.base(e,function(){var a=function(n){if(n===e.items.length)return void t();var r=e.items[n],o=r.propertyId;i.showOrHidePropertyBasedOnDependencies(o),i.bindDependencyFieldUpdateEvent(o),i.refreshDependentFieldStates(o),a(n+1)};a(0)})},handleValidate:function(){var e=this.base(),i=this.validation,a=this._validateMaxProperties();return i.tooManyProperties={message:a?"":t.substituteTokens(this.view.getMessage("tooManyProperties"),[this.schema.maxProperties]),status:a},a=this._validateMinProperties(),i.tooFewProperties={message:a?"":t.substituteTokens(this.view.getMessage("tooManyItems"),[this.schema.items.minProperties]),status:a},e&&i.tooManyProperties.status&&i.tooFewProperties.status},_validateMaxProperties:function(){if("undefined"==typeof this.schema.maxProperties)return!0;var e=this.schema.maxProperties,t=0;for(var i in this.data)t++;return e>=t},_validateMinProperties:function(){if("undefined"==typeof this.schema.minProperties)return!0;var e=this.schema.minProperties,t=0;for(var i in this.data)t++;return t>=e},showOrHidePropertyBasedOnDependencies:function(e){var i=this,a=this.childrenByPropertyId[e];if(!a)return t.throwErrorWithCallback("Missing property: "+e,i.errorCallback);var n=this.determineAllDependenciesValid(e);n?(a.show(),a.onDependentReveal()):(a.hide(),a.onDependentConceal()),a.getFieldEl().trigger("fieldupdate")},determineAllDependenciesValid:function(i){var a=this,n=this.childrenByPropertyId[i];if(!n)return t.throwErrorWithCallback("Missing property: "+i,a.errorCallback);var r=n.schema.dependencies;if(!r)return!0;var o=!0;return t.isString(r)?o=a.determineSingleDependencyValid(i,r):t.isArray(r)&&e.each(r,function(e,t){o=o&&a.determineSingleDependencyValid(i,t)}),o},bindDependencyFieldUpdateEvent:function(i){var a=this,n=this.childrenByPropertyId[i];if(!n)return t.throwErrorWithCallback("Missing property: "+i,a.errorCallback);var r=n.schema.dependencies;if(!r)return!0;var o=function(e,i){var r=t.resolveField(a,i);r&&(r.getFieldEl().bind("fieldupdate",function(e,t,i){return function(){a.showOrHidePropertyBasedOnDependencies(i),e.getFieldEl().trigger("fieldupdate")}}(n,r,e,i)),r.getFieldEl().trigger("fieldupdate"))};t.isString(r)?o(i,r):t.isArray(r)&&e.each(r,function(e,t){o(i,t)})},refreshDependentFieldStates:function(i){var a=this,n=this.childrenByPropertyId[i];if(!n)return t.throwErrorWithCallback("Missing property: "+i,a.errorCallback);var r=n.schema.dependencies;if(!r)return!0;var o=function(e){var i=t.resolveField(a,e);i&&i.getFieldEl().trigger("fieldupdate")};t.isString(r)?o(r):t.isArray(r)&&e.each(r,function(e,t){o(t)})},determineSingleDependencyValid:function(e,i){var a=this,n=t.resolveField(a,i);if(!n)return!1;var r=n.data,o=!1,s=this.childrenByPropertyId[e].options.dependencies;if(s&&0!==s.length){"boolean"!==n.getType()||r||(r=!1);var l=s[i];!t.isEmpty(l)&&t.isFunction(l)?o=l.call(this,r):(o=!0,t.isArray(l)?t.anyEquality(r,l)&&(o=!1):t.isEmpty(l)||t.anyEquality(l,r)||(o=!1))}else o="boolean"!==n.getType()||this.childrenByPropertyId[e].options.dependencies||r?!t.isValEmpty(n.data):!1;return n&&n.isHidden()&&(o=!1),o},getIndex:function(e){if(t.isEmpty(e))return-1;for(var i=0;i<this.children.length;i++){var a=this.children[i].propertyId;if(a==e)return i}return-1},addItem:function(t,i,a,n,r,o){var s=this;this.createItem(t,i,a,n,r,function(t){var i=null;if(r&&s.childrenById[r])for(var a=0;a<s.children.length;a++)if(s.children[a].getId()==r){i=a;break}if(s.registerChild(t,null!=i?i+1:null),i){var n=s.getContainerEl().children("[data-alpaca-container-item-index='"+i+"']");n&&n.length>0&&n.after(t.getFieldEl())}else e(s.container).append(t.getFieldEl());s.updateChildDOMElements(),s.refreshValidationState(!0,function(){s.triggerUpdate(),o&&o()})})},removeItem:function(t,i){var a=this;this.children=e.grep(this.children,function(e){return e.getId()!=t});var n=this.childrenById[t];delete this.childrenById[t],n.propertyId&&delete this.childrenByPropertyId[n.propertyId],n.destroy(),this.refreshValidationState(!0,function(){a.triggerUpdate(),i&&i()})},wizard:function(){var i=this,a=this.wizardConfigs.steps;a||(a=[]);var n=this.wizardConfigs.title,r=this.wizardConfigs.description,o=this.wizardConfigs.buttons;o||(o={}),o.previous||(o.previous={}),o.previous.title||(o.previous.title="Previous"),o.previous.align||(o.previous.align="left"),o.previous.type||(o.previous.type="button"),o.next||(o.next={}),o.next.title||(o.next.title="Next"),o.next.align||(o.next.align="right"),o.next.type||(o.next.type="button"),this.wizardConfigs.hideSubmitButton||(o.submit||(o.submit={}),o.submit.title||(o.submit.title="Submit"),o.submit.align||(o.submit.align="right"),o.submit.type||(o.submit.type="button"));for(var s in o)o[s].type||(o[s].type="button");var l=this.wizardConfigs.showSteps;"undefined"==typeof l&&(l=!0);var c=this.wizardConfigs.showProgressBar,d=this.wizardConfigs.validation;"undefined"==typeof d&&(d=!0);var n=e(this.field).attr("data-alpaca-wizard-title"),r=e(this.field).attr("data-alpaca-wizard-description"),p=e(this.field).attr("data-alpaca-wizard-validation");"undefined"!=typeof p&&(d=p?!0:!1);var u=e(this.field).attr("data-alpaca-wizard-show-steps");"undefined"!=typeof u&&(l=u?!0:!1);var h=e(this.field).attr("data-alpaca-wizard-show-progress-bar");"undefined"!=typeof h&&(c=h?!0:!1);var f=e(this.field).find("[data-alpaca-wizard-role='step']");0==a.length&&f.each(function(t){var i={},n=e(this).attr("data-alpaca-wizard-step-title");"undefined"!=typeof n&&(i.title=n),i.title||(i.title="Step "+t);var r=e(this).attr("data-alpaca-wizard-step-description");"undefined"!=typeof r&&(i.description=r),i.description||(i.description="Step "+t),a.push(i)}),"undefined"==typeof c&&a.length>1&&(c=!0);var m={};m.wizardTitle=n,m.wizardDescription=r,m.showSteps=l,m.performValidation=d,m.steps=a,m.buttons=o,m.schema=i.schema,m.options=i.options,m.data=i.data,m.showProgressBar=c,m.markAllStepsVisited=this.wizardConfigs.markAllStepsVisited;var g=i.view.getTemplateDescriptor("wizard",i);if(g){var v=t.tmpl(g,m);e(i.field).append(v);var y=e(v).find(".alpaca-wizard-nav"),b=e(v).find(".alpaca-wizard-steps"),w=e(v).find(".alpaca-wizard-buttons"),F=e(v).find(".alpaca-wizard-progress-bar");e(b).append(f),function(a,n,r,o){var s=0,l=e(r).find("[data-alpaca-wizard-button-key='previous']"),c=e(r).find("[data-alpaca-wizard-button-key='next']"),d=e(r).find("[data-alpaca-wizard-button-key='submit']"),p=function(){if(o.showSteps){if(o.visits||(o.visits={}),o.markAllStepsVisited)for(var t=e(a).find("[data-alpaca-wizard-step-index]"),i=0;i<t.length;i++)o.visits[i]=!0;o.visits[s]=!0;var t=e(a).find("[data-alpaca-wizard-step-index]");e(t).removeClass("disabled"),e(t).removeClass("completed"),e(t).removeClass("active"),e(t).removeClass("visited");for(var i=0;i<t.length;i++)s>i?e(a).find("[data-alpaca-wizard-step-index='"+i+"']").addClass("completed"):i===s?e(a).find("[data-alpaca-wizard-step-index='"+i+"']").addClass("active"):o.visits&&o.visits[i]||e(a).find("[data-alpaca-wizard-step-index='"+i+"']").addClass("disabled"),o.visits&&o.visits[i]&&e(a).find("[data-alpaca-wizard-step-index='"+i+"']").addClass("visited")}if(o.showProgressBar){var r=s+1,p=o.steps.length+1,u=parseInt(r/p*100,10)+"%";e(F).find(".progress-bar").attr("aria-valuemax",p),e(F).find(".progress-bar").attr("aria-valuenow",r),e(F).find(".progress-bar").css("width",u)}l.hide(),c.hide(),d.hide(),1==o.steps.length?d.show():o.steps.length>1&&(s>0&&l.show(),c.show(),0==s?c.show():s==o.steps.length-1&&(c.hide(),d.show())),e(n).find("[data-alpaca-wizard-role='step']").hide(),e(e(n).find("[data-alpaca-wizard-role='step']")[s]).show()},u=function(a,r){if(!o.performValidation)return void r(!0);var l=[],c=e(e(n).find("[data-alpaca-wizard-role='step']")[s]);e(c).find(".alpaca-field").each(function(){var t=e(this).attr("data-alpaca-field-id");if(t){var a=i.childrenById[t];a&&l.push(a)}});for(var d=[],p=0;p<l.length;p++)d.push(function(e){return function(t){e.refreshValidationState(!0,function(){t()})}}(l[p]));t.series(d,function(){for(var e=!0,t=0;t<l.length;t++)e=e&&l[t].isValid(!0);var n=o.buttons[a];n&&n.validate?n.validate.call(i,function(t){e=e&&t,r(e)}):r(e)})};e(l).click(function(e){if(e.preventDefault(),s>=1){var t=o.buttons.previous;t&&t.click&&t.click.call(i,e),s--,p()}}),e(c).click(function(e){e.preventDefault(),s+1<=o.steps.length-1&&u("next",function(t){if(t){var a=o.buttons.next;a&&a.click&&a.click.call(i,e),s++,p()}})}),e(d).click(function(e){e.preventDefault(),s===o.steps.length-1&&u("submit",function(t){if(t){var a=o.buttons.submit;a&&(a.click?a.click.call(i,e):i.form&&i.form.submit())}})}),e(r).find("[data-alpaca-wizard-button-key]").each(function(){var t=e(this).attr("data-alpaca-wizard-button-key");if("submit"!=t&&"next"!=t&&"previous"!=t){var a=o.buttons[t];a&&a.click&&e(this).click(function(e){return function(t){e.click.call(i,t)}}(a))}}),e(a).find("[data-alpaca-wizard-step-index]").click(function(t){t.preventDefault();var i=e(this).attr("data-alpaca-wizard-step-index");i&&(i=parseInt(i,10),(i==s||o.visits&&o.visits[i])&&(s>i?(s=i,p()):i>s&&u(null,function(e){e&&(s=i,p())})))}),i.on("moveToStep",function(e){var t=e.index,i=e.skipValidation;"undefined"!=typeof t&&t<=o.steps.length-1&&(i?(s=t,p()):u(null,function(e){e&&(s=t,p())}))}),i.on("advanceOrSubmit",function(){u(null,function(t){t&&(s===o.steps.length-1?e(d).click():e(c).click())})}),p()}(y,b,w,m)}},autoWizard:function(){var t=this.wizardConfigs.bindings;t||(t={});for(var i in this.childrenByPropertyId)t.hasOwnProperty(i)||(t[i]=1);var a=!0;e(this.field).find("[data-alpaca-wizard-role='step']").length>0&&(a=!1);var n=1,r=[];do{r=[];for(var i in t)t[i]==n&&this.childrenByPropertyId&&this.childrenByPropertyId[i]&&r.push(this.childrenByPropertyId[i].field);if(r.length>0){var o=null;a?(o=e('<div data-alpaca-wizard-role="step"></div>'),e(this.field).append(o)):o=e(e(this.field).find("[data-alpaca-wizard-role='step']")[n-1]);for(var s=0;s<r.length;s++)e(o).append(r[s]);n++}}while(r.length>0);this.wizard()},getType:function(){return"object"},moveItem:function(i,a,n,r){var o=this;if("function"==typeof n&&(r=n,n=o.options.animate),"undefined"==typeof n&&(n=o.options.animate?o.options.animate:!0),"string"==typeof i&&(i=parseInt(i,10)),"string"==typeof a&&(a=parseInt(a,10)),0>a&&(a=0),a>=o.children.length&&(a=o.children.length-1),-1!==a){var s=o.children[a];if(s){var l=o.getContainerEl().children("[data-alpaca-container-item-index='"+i+"']"),c=o.getContainerEl().children("[data-alpaca-container-item-index='"+a+"']"),d=e("<div class='tempMarker1'></div>");l.before(d);var p=e("<div class='tempMarker2'></div>");c.before(p);var u=function(){for(var t=[],n=0;n<o.children.length;n++)t[n]=n===i?o.children[a]:n===a?o.children[i]:o.children[n];o.children=t,d.replaceWith(c),p.replaceWith(l),o.updateChildDOMElements(),e(l).find("[data-alpaca-array-actionbar-item-index='"+i+"']").attr("data-alpaca-array-actionbar-item-index",a),e(c).find("[data-alpaca-array-actionbar-item-index='"+a+"']").attr("data-alpaca-array-actionbar-item-index",i),o.refreshValidationState(),o.triggerUpdate(),r&&r()};n?t.animatedSwap(l,c,500,function(){u()}):u()}}},getTitle:function(){return"Object Field"},getDescription:function(){return"Object field for containing other fields"},getSchemaOfSchema:function(){var e={properties:{properties:{title:"Properties",description:"List of child properties.",type:"object"},maxProperties:{type:"number",title:"Maximum Number Properties",description:"The maximum number of properties that this object is allowed to have"},minProperties:{type:"number",title:"Minimum Number of Properties",description:"The minimum number of properties that this object is required to have"}}},i=e.properties.properties;if(i.properties={},this.children)for(var a=0;a<this.children.length;a++){var n=this.children[a].propertyId;i.properties[n]=this.children[a].getSchemaOfSchema(),i.properties[n].title=n+" :: "+i.properties[n].title}return t.merge(this.base(),e)},getSchemaOfOptions:function(){var e=t.merge(this.base(),{properties:{}}),i={properties:{fields:{title:"Field Options",description:"List of options for child fields.",type:"object"}}},a=i.properties.fields;if(a.properties={},this.children)for(var n=0;n<this.children.length;n++){var r=this.children[n].propertyId;a.properties[r]=this.children[n].getSchemaOfOptions(),a.properties[r].title=r+" :: "+a.properties[r].title}return t.merge(e,i)}}),t.registerMessages({tooManyProperties:"The maximum number of properties ({0}) has been exceeded.",tooFewProperties:"There are not enough properties ({0} are required)"}),t.registerFieldClass("object",t.Fields.ObjectField),t.registerDefaultSchemaFieldMapping("object","object")}(jQuery),function(e){var t=e.alpaca;t.Fields.AnyField=t.ControlField.extend({getFieldType:function(){return"any"},setup:function(){this.base()},getValue:function(){return this._getControlVal(!0)},setValue:function(e){this.control.val(t.isEmpty(e)?"":e),this.base(e)},disable:function(){this.control.disabled=!0},enable:function(){this.control.disabled=!1},focus:function(){this.control.focus()},getType:function(){return"any"},getTitle:function(){return"Any Field"},getDescription:function(){return"Any field."},getSchemaOfSchema:function(){return t.merge(this.base(),{properties:{}})},getOptionsForSchema:function(){return t.merge(this.base(),{fields:{}})},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{}})}}),t.registerFieldClass("any",t.Fields.AnyField),t.registerDefaultSchemaFieldMapping("any","any")}(jQuery),function(e){var t=e.alpaca;t.Fields.HiddenField=t.ControlField.extend({getFieldType:function(){return"hidden"},setup:function(){this.base()},getValue:function(){return this._getControlVal(!0)},setValue:function(e){this.getControlEl().val(t.isEmpty(e)?"":e),this.base(e)},getType:function(){return"string"},getTitle:function(){return"Hidden"},getDescription:function(){return"Field for a hidden HTML input"}}),t.registerFieldClass("hidden",t.Fields.HiddenField)}(jQuery),function(e){var t=e.alpaca;t.Fields.AddressField=t.Fields.ObjectField.extend({getFieldType:function(){return"address"},setup:function(){this.base(),void 0===this.data&&(this.data={street:["",""]}),this.schema={title:"Home Address",type:"object",properties:{street:{title:"Street",type:"array",items:{type:"string",maxLength:30,minItems:0,maxItems:3}},city:{title:"City",type:"string"},state:{title:"State",type:"string","enum":["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"]},zip:{title:"Zip Code",type:"string",pattern:/^(\d{5}(-\d{4})?)?$/}}},t.merge(this.options,{fields:{zip:{maskString:"99999",size:5},state:{optionLabels:["ALABAMA","ALASKA","AMERICANSAMOA","ARIZONA","ARKANSAS","CALIFORNIA","COLORADO","CONNECTICUT","DELAWARE","DISTRICTOFCOLUMBIA","FEDERATEDSTATESOFMICRONESIA","FLORIDA","GEORGIA","GUAM","HAWAII","IDAHO","ILLINOIS","INDIANA","IOWA","KANSAS","KENTUCKY","LOUISIANA","MAINE","MARSHALLISLANDS","MARYLAND","MASSACHUSETTS","MICHIGAN","MINNESOTA","MISSISSIPPI","MISSOURI","MONTANA","NEBRASKA","NEVADA","NEWHAMPSHIRE","NEWJERSEY","NEWMEXICO","NEWYORK","NORTHCAROLINA","NORTHDAKOTA","NORTHERNMARIANAISLANDS","OHIO","OKLAHOMA","OREGON","PALAU","PENNSYLVANIA","PUERTORICO","RHODEISLAND","SOUTHCAROLINA","SOUTHDAKOTA","TENNESSEE","TEXAS","UTAH","VERMONT","VIRGINISLANDS","VIRGINIA","WASHINGTON","WESTVIRGINIA","WISCONSIN","WYOMING"]}}}),t.isEmpty(this.options.addressValidation)&&(this.options.addressValidation=!0)},isContainer:function(){return!1},getAddress:function(){var t=this.getValue();"view"===this.view.type&&(t=this.data);var i="";return t&&(t.street&&e.each(t.street,function(e,t){i+=t+" "}),t.city&&(i+=t.city+" "),t.state&&(i+=t.state+" "),t.zip&&(i+=t.zip)),i},afterRenderContainer:function(t,i){var a=this;this.base(t,function(){var t=a.getContainerEl();if(e(t).addClass("alpaca-addressfield"),a.options.addressValidation&&!a.isDisplayOnly()){e('<div style="clear:both;"></div>').appendTo(t);var n=e('<div class="alpaca-form-button">Show Google Map</div>').appendTo(t);n.button&&n.button({text:!0}),n.click(function(){if(google&&google.maps){var t=new google.maps.Geocoder,i=a.getAddress();t&&t.geocode({address:i},function(t,i){if(i===google.maps.GeocoderStatus.OK){var n=a.getId()+"-map-canvas";0===e("#"+n).length&&e("<div id='"+n+"' class='alpaca-field-address-mapcanvas'></div>").appendTo(a.getFieldEl());{var r=new google.maps.Map(document.getElementById(a.getId()+"-map-canvas"),{zoom:10,center:t[0].geometry.location,mapTypeId:google.maps.MapTypeId.ROADMAP});new google.maps.Marker({map:r,position:t[0].geometry.location})}}else a.displayMessage("Geocoding failed: "+i)})}else a.displayMessage("Google Map API is not installed.")}).wrap("<small/>"),a.options.showMapOnLoad&&n.click()}i()})},getType:function(){return"any"},getTitle:function(){return"Address"},getDescription:function(){return"Standard US Address with Street, City, State and Zip. Also comes with support for Google map."},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{validateAddress:{title:"Address Validation",description:"Enable address validation if true",type:"boolean","default":!0},showMapOnLoad:{title:"Whether to show the map when first loaded",type:"boolean"}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{validateAddress:{helper:"Address validation if checked",rightLabel:"Enable Google Map for address validation?",type:"checkbox"}}})}}),t.registerFieldClass("address",t.Fields.AddressField)}(jQuery),function(e){var t=e.alpaca;t.Fields.CKEditorField=t.Fields.TextAreaField.extend({getFieldType:function(){return"ckeditor"},setup:function(){this.data||(this.data=""),this.base(),"undefined"==typeof this.options.ckeditor&&(this.options.ckeditor={})},afterRenderControl:function(t,i){var a=this;this.base(t,function(){!a.isDisplayOnly()&&a.control&&e.fn.ckeditor&&(a.plugin=e(a.control).ckeditor(a.options.ckeditor)),i()})},getTitle:function(){return"CK Editor"},getDescription:function(){return"Provides an instance of a CK Editor control for use in editing HTML."},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{ckeditor:{title:"CK Editor options",description:"Use this entry to provide configuration options to the underlying CKEditor plugin.",type:"any"}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{wysiwyg:{type:"any"}}})
}}),t.registerFieldClass("ckeditor",t.Fields.CKEditorField)}(jQuery),function(e){var t=e.alpaca;t.Fields.ColorField=t.Fields.TextField.extend({setup:function(){this.inputType="color",this.base()},getFieldType:function(){return"color"},getType:function(){return"string"},getTitle:function(){return"Color Field"},getDescription:function(){return"A color picker for selecting hexadecimal color values"}}),t.registerFieldClass("color",t.Fields.ColorField),t.registerDefaultSchemaFieldMapping("color","color")}(jQuery),function(e){var t=e.alpaca;t.Fields.CountryField=t.Fields.SelectField.extend({getFieldType:function(){return"country"},setup:function(){t.isUndefined(this.options.capitalize)&&(this.options.capitalize=!1),this.schema["enum"]=[],this.options.optionLabels=[];var e=this.view.getMessage("countries");if(e)for(var i in e){this.schema["enum"].push(i);var a=e[i];this.options.capitalize&&(a=a.toUpperCase()),this.options.optionLabels.push(a)}this.base()},getTitle:function(){return"Country Field"},getDescription:function(){return"Provides a dropdown selector of countries keyed by their ISO3 code.  The names of the countries are read from the I18N bundle for the current locale."},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{capitalize:{title:"Capitalize",description:"Whether the values should be capitalized",type:"boolean","default":!1,readonly:!0}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{capitalize:{type:"checkbox"}}})}}),t.registerFieldClass("country",t.Fields.CountryField),t.registerDefaultFormatFieldMapping("country","country")}(jQuery),function(e){var t=function(){var e={up:Math.ceil,down:function(e){return~~e},nearest:Math.round};return function(t){return e[t]}}(),i=e.alpaca;i.Fields.CurrencyField=i.Fields.TextField.extend({constructor:function(e,t,i,a,n,r,o){i=i||{};var s=this.getSchemaOfPriceFormatOptions().properties;for(var l in s){var c=s[l];l in i||(i[l]=c["default"]||void 0)}"undefined"!=typeof t&&(t=""+parseFloat(t).toFixed(i.centsLimit)),this.base(e,t,i,a,n,r,o)},getFieldType:function(){return"currency"},afterRenderControl:function(t,i){var a=this,n=this.getControlEl();this.base(t,function(){e(n).priceFormat(a.options),i()})},getValue:function(){var i=this.getControlEl(),a=e(i).is("input")?i.val():i.hmtl();if(this.options.unmask||"none"!==this.options.round){var n=function(){var e="";for(var t in a){var i=a[t];isNaN(i)?i===this.options.centsSeparator&&(e+="."):e+=i}return parseFloat(e)}.bind(this)();if("none"!==this.options.round&&(n=t(this.options.round)(n),!this.options.unmask)){for(var r=[],o=""+n,s=0,l=0;s<a.length;s++)r.push(isNaN(a[s])?a[s]:o[l++]||0);return r.join("")}return n}return a},getTitle:function(){return"Currency Field"},getDescription:function(){return"Provides an automatically formatted and configurable input for entering currency amounts."},getSchemaOfPriceFormatOptions:function(){return{properties:{allowNegative:{title:"Allow Negative",description:"Determines if negative numbers are allowed.",type:"boolean","default":!1},centsLimit:{title:"Cents Limit",description:"The limit of fractional digits.",type:"number","default":2,minimum:0},centsSeparator:{title:"Cents Separator",description:"The separator between whole and fractional amounts.",type:"text","default":"."},clearPrefix:{title:"Clear Prefix",description:"Determines if the prefix is cleared on blur.",type:"boolean","default":!1},clearSuffix:{title:"Clear Suffix",description:"Determines if the suffix is cleared on blur.",type:"boolean","default":!1},insertPlusSign:{title:"Plus Sign",description:"Determines if a plus sign should be inserted for positive values.",type:"boolean","default":!1},limit:{title:"Limit",description:"A limit of the length of the field.",type:"number","default":void 0,minimum:0},prefix:{title:"Prefix",description:"The prefix if any for the field.",type:"text","default":"$"},round:{title:"Round",description:"Determines if the field is rounded. (Rounding is done when getValue is called and is not reflected in the UI)",type:"string","enum":["up","down","nearest","none"],"default":"none"},suffix:{title:"Suffix",description:"The suffix if any for the field.",type:"text","default":""},thousandsSeparator:{title:"Thousands Separator",description:"The separator between thousands.",type:"string","default":","},unmask:{title:"Unmask",description:"If true then the resulting value for this field will be unmasked.  That is, the resulting value will be a float instead of a string (with the prefix, suffix, etc. removed).",type:"boolean","default":!0}}}},getSchemaOfOptions:function(){return i.merge(this.base(),this.getSchemaOfPriceFormatOptions())},getOptionsForOptions:function(){return i.merge(this.base(),{fields:{allowNegative:{type:"checkbox"},centsLimit:{type:"number"},centsSeparator:{type:"text"},clearPrefix:{type:"checkbox"},clearSuffix:{type:"checkbox"},insertPlusSign:{type:"checkbox"},limit:{type:"number"},prefix:{type:"text"},round:{type:"select"},suffix:{type:"text"},thousandsSeparator:{type:"string"},unmask:{type:"checkbox"}}})}}),i.registerFieldClass("currency",i.Fields.CurrencyField)}(jQuery),function(e){var t=e.alpaca;t.Fields.DateField=t.Fields.TextField.extend({getFieldType:function(){return"date"},setup:function(){var e=this;this.base(),e.options.picker||(e.options.picker={}),e.options.picker.pickDate=!0,e.options.picker.pickTime=!1,e.options.picker.useCurrent=!1},afterRenderControl:function(t,i){var a=this;this.base(t,function(){"display"!==a.view.type&&e.fn.datetimepicker&&(a.getControlEl().datetimepicker(a.options.picker),a.picker=a.getControlEl().data("DateTimePicker"),a.picker&&a.options.dateFormat&&(a.picker.format=a.options.dateFormat),a.picker&&(a.options.dateFormat=a.picker.format)),i()})},getDate:function(){try{return this.getControlEl().datetimepicker("getDate")}catch(e){return this.getValue()}},onChange:function(){this.base(),this.refreshValidationState()},isAutoFocusable:function(){return!1},handleValidate:function(){var e=this.base(),i=this.validation,a=this._validateDateFormat();return i.invalidDate={message:a?"":t.substituteTokens(this.view.getMessage("invalidDate"),[this.options.dateFormat]),status:a},e&&i.invalidDate.status},_validateDateFormat:function(){var e=this;if(e.options.dateFormat){var t=this.getControlEl().val();return t||e.isRequired()?moment(t,e.options.dateFormat,!0).isValid():!0}return!0},setValue:function(e){this.base(e),this.picker&&this.picker.setValue(e)},getValue:function(){var e=this.base();return this.picker&&this.picker.getDate()&&(e=this.picker.getDate()._i),e},destroy:function(){this.base(),this.picker=null},getTitle:function(){return"Date Field"},getDescription:function(){return"Date Field"},getSchemaOfSchema:function(){return t.merge(this.base(),{properties:{format:{title:"Format",description:"Property data format",type:"string","default":"date","enum":["date"],readonly:!0}}})},getOptionsForSchema:function(){return t.merge(this.base(),{fields:{format:{type:"text"}}})},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{dateFormat:{title:"Date Format",description:"Date format",type:"string"},picker:{title:"DatetimePicker options",description:"Options that are supported by the <a href='http://eonasdan.github.io/bootstrap-datetimepicker/'>Bootstrap DateTime Picker</a>.",type:"any"}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{dateFormat:{type:"text"},picker:{type:"any"}}})}}),t.registerMessages({invalidDate:"Invalid date for format {0}"}),t.registerFieldClass("date",t.Fields.DateField),t.registerDefaultFormatFieldMapping("date","date")}(jQuery),function(e){var t=e.alpaca;t.Fields.DatetimeField=t.Fields.DateField.extend({getFieldType:function(){return"datetime"},setup:function(){var e=this;this.base(),e.options.picker.pickDate=!0,e.options.picker.pickTime=!0,"undefined"==typeof e.options.picker.sideBySide&&(e.options.picker.sideBySide=!0)},setValue:function(e){e?(t.isNumber()&&(e=new Date(e)),this.base("[object Date]"===Object.prototype.toString.call(e)?e.getMonth()+1+"/"+e.getDate()+"/"+e.getFullYear()+" "+e.getHours()+":"+e.getMinutes():e)):this.base(e)},getDatetime:function(){return this.getDate()},getTitle:function(){return"Datetime Field"},getDescription:function(){return"Datetime Field based on Trent Richardson's <a href='http://trentrichardson.com/examples/timepicker/'>jQuery timepicker addon</a>."},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{picker:{title:"DatetimePicker options",description:"Options that are supported by the <a href='http://eonasdan.github.io/bootstrap-datetimepicker/'>Bootstrap DateTime Picker</a>.",type:"any"}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{picker:{type:"any"}}})}}),t.registerFieldClass("datetime",t.Fields.DatetimeField),t.registerDefaultFormatFieldMapping("datetime","datetime"),t.registerDefaultFormatFieldMapping("date-time","datetime")}(jQuery),function(e){var t=e.alpaca;t.Fields.EditorField=t.Fields.TextField.extend({getFieldType:function(){return"editor"},setup:function(){var e=this;this.base(),e.options.aceTheme||(e.options.aceTheme="ace/theme/chrome"),e.options.aceMode||(e.options.aceMode="ace/mode/json"),"undefined"==typeof e.options.beautify&&(e.options.beautify=!0),e.options.beautify&&this.data&&("ace/mode/json"===e.options.aceMode&&(t.isObject(this.data)?this.data=JSON.stringify(this.data,null,"    "):t.isString(this.data)&&(this.data=JSON.stringify(JSON.parse(this.data),null,"    "))),"ace/mode/html"===e.options.aceMode&&"undefined"!=typeof html_beautify&&(this.data=html_beautify(this.data)),"ace/mode/css"===e.options.aceMode&&"undefined"!=typeof css_beautify&&(this.data=css_beautify(this.data)),"ace/mode/javascript"===e.options.aceMode&&"undefined"!=typeof js_beautify&&(this.data=js_beautify(this.data))),"ace/mode/json"===e.options.aceMode&&(this.data&&"{}"!==this.data||(this.data="{\n	\n}"))},afterRenderControl:function(i,a){var n=this;this.base(i,function(){if(n.control){var i=n.options.aceHeight;i&&e(n.control).css("height",i);var r=n.options.aceWidth;r||(r="100%"),e(n.control).css("width",r)}var o=e(n.control)[0];if(!ace&&window.ace&&(ace=window.ace),ace){n.editor=ace.edit(o),n.editor.setOptions({maxLines:1/0}),n.editor.getSession().setUseWrapMode(!0);var s=n.options.aceTheme;n.editor.setTheme(s);var l=n.options.aceMode;if(n.editor.getSession().setMode(l),n.editor.renderer.setHScrollBarAlwaysVisible(!1),n.editor.setShowPrintMargin(!1),n.editor.setValue(n.data),n.editor.clearSelection(),n.editor.getSession().getUndoManager().reset(),n.options.aceFitContentHeight){var c=function(){var t=!1;0===n.editor.renderer.lineHeight&&(t=!0,n.editor.renderer.lineHeight=16);var i=n.editor.getSession().getScreenLength()*n.editor.renderer.lineHeight+n.editor.renderer.scrollBar.getWidth();e(n.control).height(i.toString()+"px"),n.editor.resize(),t&&window.setTimeout(function(){n.editor.clearSelection()},100)};c(),n.editor.getSession().on("change",c)}n.schema.readonly&&n.editor.setReadOnly(!0),e(o).bind("destroyed",function(){n.editor&&(n.editor.destroy(),n.editor=null)})}else t.logError("Editor Field is missing the 'ace' Cloud 9 Editor");a()})},destroy:function(){this.editor&&(this.editor.destroy(),this.editor=null),this.base()},getEditor:function(){return this.editor},handleValidate:function(){var e=this.base(),i=this.validation,a=this._validateWordCount();i.wordLimitExceeded={message:a?"":t.substituteTokens(this.view.getMessage("wordLimitExceeded"),[this.options.wordlimit]),status:a};var n=this._validateEditorAnnotations();return i.editorAnnotationsExist={message:n?"":this.view.getMessage("editorAnnotationsExist"),status:n},e&&i.wordLimitExceeded.status&&i.editorAnnotationsExist.status},_validateEditorAnnotations:function(){if(this.editor){var e=this.editor.getSession().getAnnotations();if(e&&e.length>0)return!1}return!0},_validateWordCount:function(){if(this.options.wordlimit&&this.options.wordlimit>-1){var e=this.editor.getValue();if(e){var t=e.split(" ").length;if(t>this.options.wordlimit)return!1}}return!0},onDependentReveal:function(){this.editor&&this.editor.resize()},setValue:function(e){var i=this;this.editor&&("object"==i.schema.type&&t.isObject(e)&&(e=JSON.stringify(e,null,"    ")),this.editor.setValue(e),i.editor.clearSelection()),this.base(e)},getValue:function(){var e=null;return this.editor&&(e=this.editor.getValue()),"object"==this.schema.type&&(e=e?JSON.parse(e):{}),e},getTitle:function(){return"Editor"},getDescription:function(){return"Editor"},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{aceTheme:{title:"ACE Editor Theme",description:"Specifies the theme to set onto the editor instance",type:"string","default":"ace/theme/twilight"},aceMode:{title:"ACE Editor Mode",description:"Specifies the mode to set onto the editor instance",type:"string","default":"ace/mode/javascript"},aceWidth:{title:"ACE Editor Height",description:"Specifies the width of the wrapping div around the editor",type:"string","default":"100%"},aceHeight:{title:"ACE Editor Height",description:"Specifies the height of the wrapping div around the editor",type:"string","default":"300px"},aceFitContentHeight:{title:"ACE Fit Content Height",description:"Configures the ACE Editor to auto-fit its height to the contents of the editor",type:"boolean","default":!1},wordlimit:{title:"Word Limit",description:"Limits the number of words allowed in the text area.",type:"number","default":-1}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{aceTheme:{type:"text"},aceMode:{type:"text"},wordlimit:{type:"integer"}}})}}),t.registerMessages({wordLimitExceeded:"The maximum word limit of {0} has been exceeded.",editorAnnotationsExist:"The editor has errors in it that must be corrected"}),t.registerFieldClass("editor",t.Fields.EditorField)}(jQuery),function(e){var t=e.alpaca;t.Fields.EmailField=t.Fields.TextField.extend({getFieldType:function(){return"email"},setup:function(){this.inputType="email",this.base(),this.schema.pattern||(this.schema.pattern=t.regexps.email)},handleValidate:function(){var e=this.base(),t=this.validation;return t.invalidPattern.status||(t.invalidPattern.message=this.view.getMessage("invalidEmail")),e},getTitle:function(){return"Email Field"},getDescription:function(){return"Email Field."},getSchemaOfSchema:function(){var e=this.schema&&this.schema.pattern?this.schema.pattern:t.regexps.email;return t.merge(this.base(),{properties:{pattern:{title:"Pattern",description:"Field Pattern in Regular Expression",type:"string","default":e,"enum":[e],readonly:!0},format:{title:"Format",description:"Property data format",type:"string","default":"email","enum":["email"],readonly:!0}}})},getOptionsForSchema:function(){return t.merge(this.base(),{fields:{format:{type:"text"}}})}}),t.registerMessages({invalidEmail:"Invalid Email address e.g. info@cloudcms.com"}),t.registerFieldClass("email",t.Fields.EmailField),t.registerDefaultFormatFieldMapping("email","email")}(jQuery),function(e){var t=e.alpaca;t.Fields.GridField=t.Fields.ArrayField.extend({getFieldType:function(){return"grid"},setup:function(){this.base(),"undefined"==typeof this.options.grid&&(this.options.grid={})},afterRenderContainer:function(t,i){var a=this;this.base(t,function(){var t=[],n=[];for(var r in a.options.fields){var o=a.options.fields[r],s=r;o.label&&(s=o.label),n.push(s)}t.push(n);for(var l=0;l<a.data.length;l++){var c=[];for(var d in a.data[l])c.push(a.data[l][d]);t.push(c)}var p=e(a.container).find(".alpaca-container-grid-holder"),u=a.options.grid;u.data=t,e(p).handsontable(u),i()})},getType:function(){return"array"},getTitle:function(){return"Grid Field"},getDescription:function(){return"Renders array items into a grid"}}),t.registerFieldClass("grid",t.Fields.GridField)}(jQuery),function(e){var t=e.alpaca;t.Fields.ImageField=t.Fields.TextField.extend({getFieldType:function(){return"image"},getTitle:function(){return"Image Field"},getDescription:function(){return"Image Field."}}),t.registerFieldClass("image",t.Fields.ImageField)}(jQuery),function(e){var t=e.alpaca;t.Fields.IntegerField=t.Fields.NumberField.extend({getFieldType:function(){return"integer"},getValue:function(){var e=this.base();return"undefined"==typeof e||""==e?e:parseInt(e,10)},onChange:function(){this.base(),this.slider&&this.slider.slider("value",this.getValue())},postRender:function(i){var a=this;this.base(function(){a.options.slider&&(t.isEmpty(a.schema.maximum)||t.isEmpty(a.schema.minimum)||a.control&&(a.control.after('<div id="slider"></div>'),a.slider=e("#slider",a.control.parent()).slider({value:a.getValue(),min:a.schema.minimum,max:a.schema.maximum,slide:function(e,t){a.setValue(t.value),a.refreshValidationState()}}))),i()})},handleValidate:function(){var e=this.base(),t=this.validation,i=this._validateInteger();return t.stringNotANumber={message:i?"":this.view.getMessage("stringNotAnInteger"),status:i},e},_validateInteger:function(){var e=this._getControlVal();if("number"==typeof e&&(e=""+e),t.isValEmpty(e))return!0;var i=t.testRegex(t.regexps.integer,e);if(!i)return!1;var a=this.getValue();return isNaN(a)?!1:!0},getType:function(){return"integer"},getTitle:function(){return"Integer Field"},getDescription:function(){return"Field for integers."},getSchemaOfSchema:function(){return t.merge(this.base(),{properties:{minimum:{title:"Minimum",description:"Minimum value of the property.",type:"integer"},maximum:{title:"Maximum",description:"Maximum value of the property.",type:"integer"},divisibleBy:{title:"Divisible By",description:"Property value must be divisible by this number.",type:"integer"}}})},getOptionsForSchema:function(){return t.merge(this.base(),{fields:{minimum:{helper:"Minimum value of the field.",type:"integer"},maximum:{helper:"Maximum value of the field.",type:"integer"},divisibleBy:{helper:"Property value must be divisible by this number.",type:"integer"}}})},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{slider:{title:"Slider",description:"Generate jQuery UI slider control with the field if true.",type:"boolean","default":!1}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{slider:{rightLabel:"Slider control ?",helper:"Generate slider control if selected.",type:"checkbox"}}})}}),t.registerMessages({stringNotAnInteger:"This value is not an integer."}),t.registerFieldClass("integer",t.Fields.IntegerField),t.registerDefaultSchemaFieldMapping("integer","integer")}(jQuery),function(e){var t=e.alpaca;t.Fields.IPv4Field=t.Fields.TextField.extend({getFieldType:function(){return"ipv4"},setup:function(){this.base(),this.schema.pattern||(this.schema.pattern=t.regexps.ipv4)},handleValidate:function(){var e=this.base(),t=this.validation;return t.invalidPattern.status||(t.invalidPattern.message=this.view.getMessage("invalidIPv4")),e},getTitle:function(){return"IP Address Field"},getDescription:function(){return"IP Address Field."},getSchemaOfSchema:function(){var e=this.schema&&this.schema.pattern?this.schema.pattern:t.regexps.ipv4;return t.merge(this.base(),{properties:{pattern:{title:"Pattern",description:"Field Pattern in Regular Expression",type:"string","default":e,readonly:!0},format:{title:"Format",description:"Property data format",type:"string","enum":["ip-address"],"default":"ip-address",readonly:!0}}})},getOptionsForSchema:function(){return t.merge(this.base(),{fields:{format:{type:"text"}}})}}),t.registerMessages({invalidIPv4:"Invalid IPv4 address, e.g. 192.168.0.1"}),t.registerFieldClass("ipv4",t.Fields.IPv4Field),t.registerDefaultFormatFieldMapping("ip-address","ipv4")}(jQuery),function(e){function t(e){if("string"==typeof e.data){var t=e.handler,i=e.data.toLowerCase().split(" ");e.handler=function(e){if(this===e.target||!/textarea|select/i.test(e.target.nodeName)&&"text"!==e.target.type){var a="keypress"!==e.type&&jQuery.hotkeys.specialKeys[e.which],n=String.fromCharCode(e.which).toLowerCase(),r="",o={};e.altKey&&"alt"!==a&&(r+="alt+"),e.ctrlKey&&"ctrl"!==a&&(r+="ctrl+"),e.metaKey&&!e.ctrlKey&&"meta"!==a&&(r+="meta+"),e.shiftKey&&"shift"!==a&&(r+="shift+"),a?o[r+a]=!0:(o[r+n]=!0,o[r+jQuery.hotkeys.shiftNums[n]]=!0,"shift+"===r&&(o[jQuery.hotkeys.shiftNums[n]]=!0));for(var s=0,l=i.length;l>s;s++)if(o[i[s]])return t.apply(this,arguments)}}}}var i=e.alpaca;i.Fields.JSONField=i.Fields.TextAreaField.extend({getFieldType:function(){return"json"},setValue:function(e){(i.isObject(e)||"object"==typeof e)&&(e=JSON.stringify(e,null,3)),this.base(e)},getValue:function(){var e=this.base();return e&&i.isString(e)&&(e=JSON.parse(e)),e},handleValidate:function(){var e=this.base(),t=this.validation,i=this._validateJSON();return t.stringNotAJSON={message:i.status?"":this.view.getMessage("stringNotAJSON")+" "+i.message,status:i.status},e&&t.stringNotAJSON.status},_validateJSON:function(){var e=this.control.val();if(i.isValEmpty(e))return{status:!0};try{var t=JSON.parse(e);return this.setValue(JSON.stringify(t,null,3)),{status:!0}}catch(a){return{status:!1,message:a.message}}},afterRenderControl:function(e,t){var i=this;this.base(e,function(){i.control&&(i.control.bind("keypress",function(e){var t=e.keyCode||e.wich;34===t&&i.control.insertAtCaret('"'),123===t&&i.control.insertAtCaret("}"),91===t&&i.control.insertAtCaret("]")}),i.control.bind("keypress","Ctrl+l",function(){i.getFieldEl().removeClass("alpaca-field-focused"),i.refreshValidationState()}),i.control.attr("title","Type Ctrl+L to format and validate the JSON string.")),t()})},getTitle:function(){return"JSON Editor"},getDescription:function(){return"Editor for JSON objects with basic validation and formatting."}}),i.registerMessages({stringNotAJSON:"This value is not a valid JSON string."}),i.registerFieldClass("json",i.Fields.JSONField),e.fn.insertAtCaret=function(e){return this.each(function(){if(document.selection)this.focus(),sel=document.selection.createRange(),sel.text=e,this.focus();else if(this.selectionStart||"0"==this.selectionStart){var t=this.selectionStart,i=this.selectionEnd,a=this.scrollTop;this.value=this.value.substring(0,t)+e+this.value.substring(i,this.value.length),this.focus(),this.selectionStart=t,this.selectionEnd=t,this.scrollTop=a}else this.value+=e,this.focus()})},jQuery.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",191:"/",224:"meta"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"}},jQuery.each(["keydown","keyup","keypress"],function(){jQuery.event.special[this]={add:t}})}(jQuery),function(e){var t=e.alpaca;t.Fields.LowerCaseField=t.Fields.TextField.extend({getFieldType:function(){return"lowercase"},setValue:function(e){var t=e.toLowerCase();t!=this.getValue()&&this.base(t)},onKeyPress:function(e){this.base(e);var i=this;t.later(25,this,function(){var e=i.getValue();i.setValue(e)})},getTitle:function(){return"Lowercase Text"},getDescription:function(){return"Text field for lowercase text."}}),t.registerFieldClass("lowercase",t.Fields.LowerCaseField),t.registerDefaultFormatFieldMapping("lowercase","lowercase")}(jQuery),function(e){var t=e.alpaca;t.Fields.MapField=t.Fields.ArrayField.extend({getFieldType:function(){return"map"},getType:function(){return"object"},setup:function(){if(this.data&&t.isObject(this.data)){var i=[];e.each(this.data,function(e,a){var n=t.copyOf(a);n._key=e,i.push(n)}),this.data=i}this.base(),t.mergeObject(this.options,{forceRevalidation:!0}),t.isEmpty(this.data)},getValue:function(){if(0!==this.children.length||this.isRequired()){for(var e={},t=0;t<this.children.length;t++){var i=this.children[t].getValue(),a=i._key;a&&(delete i._key,e[a]=i)}return e}},handleValidate:function(){var e=this.base(),t=this.validation,i=this._validateMapKeysNotEmpty();t.keyMissing={message:i?"":this.view.getMessage("keyMissing"),status:i};var a=this._validateMapKeysUnique();return t.keyNotUnique={message:a?"":this.view.getMessage("keyNotUnique"),status:a},e&&t.keyMissing.status&&t.keyNotUnique.status},_validateMapKeysNotEmpty:function(){for(var e=!0,t=0;t<this.children.length;t++){var i=this.children[t].getValue(),a=i._key;if(!a){e=!1;break}}return e},_validateMapKeysUnique:function(){for(var e=!0,t={},i=0;i<this.children.length;i++){var a=this.children[i].getValue(),n=a._key;t[n]&&(e=!1),t[n]=n}return e},getTitle:function(){return"Map Field"},getDescription:function(){return"Field for objects with key/value pairs that share the same schema for values."}}),t.registerFieldClass("map",t.Fields.MapField),t.registerMessages({keyNotUnique:"Keys of map field are not unique.",keyMissing:"Map contains an empty key."})}(jQuery),function(e){var t=e.alpaca;t.Fields.PasswordField=t.Fields.TextField.extend({getFieldType:function(){return"password"},setup:function(){this.base(),this.schema.pattern||(this.schema.pattern=t.regexps.password)},handleValidate:function(){var e=this.base(),t=this.validation;return t.invalidPattern.status||(t.invalidPattern.message=this.view.getMessage("invalidPassword")),e},getTitle:function(){return"Password Field"},getDescription:function(){return"Password Field."},getSchemaOfSchema:function(){var e=this.schema&&this.schema.pattern?this.schema.pattern:/^[0-9a-zA-Z\x20-\x7E]*$/;return t.merge(this.base(),{properties:{pattern:{title:"Pattern",description:"Field Pattern in Regular Expression",type:"string","default":this.schema.pattern,"enum":[e],readonly:!0},format:{title:"Format",description:"Property data format",type:"string","default":"password","enum":["password"],readonly:!0}}})},getOptionsForSchema:function(){return t.merge(this.base(),{fields:{format:{type:"text"}}})}}),t.registerMessages({invalidPassword:"Invalid Password"}),t.registerFieldClass("password",t.Fields.PasswordField),t.registerDefaultFormatFieldMapping("password","password")}(jQuery),function(e){var t=e.alpaca;t.Fields.PersonalNameField=t.Fields.TextField.extend({getFieldType:function(){return"personalname"},setValue:function(e){for(var t="",i=0;i<e.length;i++)t+=0===i?e.charAt(i).toUpperCase():" "===e.charAt(i-1)||"-"===e.charAt(i-1)||"'"===e.charAt(i-1)?e.charAt(i).toUpperCase():e.charAt(i);t!=this.getValue()&&this.base(t)},onKeyPress:function(e){this.base(e);var i=this;t.later(25,this,function(){var e=i.getValue();i.setValue(e)})},getTitle:function(){return"Personal Name"},getDescription:function(){return"Text Field for personal name with captical letter for first letter & after hyphen, space or apostrophe."}}),t.registerFieldClass("personalname",t.Fields.PersonalNameField)}(jQuery),function(e){var t=e.alpaca;t.Fields.PhoneField=t.Fields.TextField.extend({setup:function(){this.inputType="tel",this.base(),this.schema.pattern||(this.schema.pattern=t.regexps.phone),t.isEmpty(this.options.maskString)&&(this.options.maskString="(999) 999-9999")},postRender:function(e){this.base(function(){e()})},handleValidate:function(){var e=this.base(),t=this.validation;return t.invalidPattern.status||(t.invalidPattern.message=this.view.getMessage("invalidPhone")),e},getFieldType:function(){return"phone"},getTitle:function(){return"Phone Field"},getDescription:function(){return"Phone Field."},getSchemaOfSchema:function(){var e=this.schema&&this.schema.pattern?this.schema.pattern:t.regexps.phone;return t.merge(this.base(),{properties:{pattern:{title:"Pattern",description:"Field Pattern in Regular Expression",type:"string","default":e,"enum":[e],readonly:!0},format:{title:"Format",description:"Property data format",type:"string","default":"phone","enum":["phone"],readonly:!0}}})},getOptionsForSchema:function(){return t.merge(this.base(),{fields:{format:{type:"text"}}})},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{maskString:{title:"Field Mask String",description:"Expression for field mask",type:"string","default":"(999) 999-9999"}}})}}),t.registerMessages({invalidPhone:"Invalid Phone Number, e.g. (123) 456-9999"}),t.registerFieldClass("phone",t.Fields.PhoneField),t.registerDefaultFormatFieldMapping("phone","phone")}(jQuery),function(e){var t=e.alpaca;t.Fields.SearchField=t.Fields.TextField.extend({setup:function(){this.inputType="search",this.base(),this.options.attributes.results=5},getFieldType:function(){return"search"},getType:function(){return"string"},getTitle:function(){return"Search Field"},getDescription:function(){return"A search box field"}}),t.registerFieldClass("search",t.Fields.SearchField),t.registerDefaultSchemaFieldMapping("search","search")}(jQuery),function(e){var t=e.alpaca;t.Fields.StateField=t.Fields.SelectField.extend({getFieldType:function(){return"state"},setup:function(){t.isUndefined(this.options.capitalize)&&(this.options.capitalize=!1),t.isUndefined(this.options.includeStates)&&(this.options.includeStates=!0),t.isUndefined(this.options.includeTerritories)&&(this.options.includeTerritories=!0),t.isUndefined(this.options.format)&&(this.options.format="name"),"name"===this.options.format||"code"===this.options.format||(t.logError("The configured state format: "+this.options.format+" is not a legal value [name, code]"),this.options.format="name");var e=t.retrieveUSHoldings(this.options.includeStates,this.options.includeTerritories,"code"===this.options.format,this.options.capitalize);this.schema["enum"]=e.keys,this.options.optionLabels=e.values,this.base()},getTitle:function(){return"State Field"},getDescription:function(){return"Provides a dropdown selector of states and/or territories in the United States, keyed by their two-character code."},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{format:{title:"Format",description:"How to represent the state values in the selector",type:"string","default":"name","enum":["name","code"],readonly:!0},capitalize:{title:"Capitalize",description:"Whether the values should be capitalized",type:"boolean","default":!1,readonly:!0},includeStates:{title:"Include States",description:"Whether to include the states of the United States",type:"boolean","default":!0,readonly:!0},includeTerritories:{title:"Include Territories",description:"Whether to include the territories of the United States",type:"boolean","default":!0,readonly:!0}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{format:{type:"text"},capitalize:{type:"checkbox"},includeStates:{type:"checkbox"},includeTerritories:{type:"checkbox"}}})}}),t.registerFieldClass("state",t.Fields.StateField),t.registerDefaultFormatFieldMapping("state","state"),t.retrieveUSHoldings=function(){var e=[];return e.push({name:"Arkansas",code:"AK",state:!0,territory:!1}),e.push({name:"Alabama",code:"AL",state:!0,territory:!1}),e.push({name:"American Samoa",code:"AS",state:!1,territory:!0}),e.push({name:"Arizona",code:"AR",state:!0,territory:!1}),e.push({name:"California",code:"CA",state:!0,territory:!1}),e.push({name:"Colorado",code:"CO",state:!0,territory:!1}),e.push({name:"Connecticut",code:"CT",state:!0,territory:!1}),e.push({name:"Delaware",code:"DE",state:!0,territory:!1}),e.push({name:"Distict of Columbia",code:"DC",state:!1,territory:!0}),e.push({name:"Federated States of Micronesia",code:"FM",state:!1,territory:!0}),e.push({name:"Florida",code:"FL",state:!0,territory:!1}),e.push({name:"Georgia",code:"GA",state:!0,territory:!1}),e.push({name:"Guam",code:"GU",state:!1,territory:!0}),e.push({name:"Georgia",code:"GA",state:!0,territory:!1}),e.push({name:"Hawaii",code:"HI",state:!0,territory:!1}),e.push({name:"Idaho",code:"ID",state:!0,territory:!1}),e.push({name:"Illinois",code:"IL",state:!0,territory:!1}),e.push({name:"Indiana",code:"IN",state:!0,territory:!1}),e.push({name:"Iowa",code:"IA",state:!0,territory:!1}),e.push({name:"Kansas",code:"KS",state:!0,territory:!1}),e.push({name:"Kentucky",code:"KY",state:!0,territory:!1}),e.push({name:"Louisiana",code:"LA",state:!0,territory:!1}),e.push({name:"Maine",code:"ME",state:!0,territory:!1}),e.push({name:"Marshall Islands",code:"MH",state:!1,territory:!0}),e.push({name:"Maryland",code:"MD",state:!0,territory:!1}),e.push({name:"Massachusetts",code:"MA",state:!0,territory:!1}),e.push({name:"Michigan",code:"MI",state:!0,territory:!1}),e.push({name:"Minnesota",code:"MN",state:!0,territory:!1}),e.push({name:"Mississippi",code:"MS",state:!0,territory:!1}),e.push({name:"Missouri",code:"MO",state:!0,territory:!1}),e.push({name:"Montana",code:"MT",state:!0,territory:!1}),e.push({name:"Nebraska",code:"NE",state:!0,territory:!1}),e.push({name:"Nevada",code:"NV",state:!0,territory:!1}),e.push({name:"New Hampshire",code:"NH",state:!0,territory:!1}),e.push({name:"New Jersey",code:"NJ",state:!0,territory:!1}),e.push({name:"New Mexico",code:"NM",state:!0,territory:!1}),e.push({name:"New York",code:"NY",state:!0,territory:!1}),e.push({name:"North Carolina",code:"NC",state:!0,territory:!1}),e.push({name:"North Dakota",code:"ND",state:!0,territory:!1}),e.push({name:"Northern Mariana Islands",code:"MP",state:!0,territory:!1}),e.push({name:"Ohio",code:"OH",state:!0,territory:!1}),e.push({name:"Oklahoma",code:"OK",state:!0,territory:!1}),e.push({name:"Oregon",code:"OR",state:!0,territory:!1}),e.push({name:"Palau",code:"PW",state:!1,territory:!0}),e.push({name:"Pennsylvania",code:"PA",state:!0,territory:!1}),e.push({name:"Puerto Rico",code:"PR",state:!1,territory:!0}),e.push({name:"Rhode Island",code:"RI",state:!0,territory:!1}),e.push({name:"South Carolina",code:"SC",state:!0,territory:!1}),e.push({name:"South Dakota",code:"SD",state:!0,territory:!1}),e.push({name:"Tennessee",code:"TN",state:!0,territory:!1}),e.push({name:"Texas",code:"TX",state:!0,territory:!1}),e.push({name:"Utah",code:"UT",state:!0,territory:!1}),e.push({name:"Vermont",code:"VT",state:!0,territory:!1}),e.push({name:"Virgin Islands",code:"VI",state:!1,territory:!0}),e.push({name:"Virginia",code:"VA",state:!0,territory:!1}),e.push({name:"Washington",code:"WA",state:!0,territory:!1}),e.push({name:"West Virginia",code:"WV",state:!0,territory:!1}),e.push({name:"Wisconsin",code:"WI",state:!0,territory:!1}),e.push({name:"Wyoming",code:"WY",state:!0,territory:!1}),function(t,i,a,n){for(var r={keys:[],values:[]},o=0;o<e.length;o++){var s=!1;
if(e[o].state&&t?s=!0:e[o].territory&&i&&(s=!0),s){var l=e[o].code,c=e[o].name;a&&(c=e[o].code),n&&(c=c.toUpperCase()),r.keys.push(l),r.values.push(c)}}return r}}()}(jQuery),function(e){var t=e.alpaca;t.Fields.TableField=t.Fields.ArrayField.extend({getFieldType:function(){return"table"},afterRenderContainer:function(t,i){var a=this;this.base(t,function(){e(a.container).find("table").dataTable({}),i()})},getType:function(){return"array"},getTitle:function(){return"Table Field"},getDescription:function(){return"Renders array items into a table"}}),t.registerFieldClass("table",t.Fields.TableField)}(jQuery),function(e){var t=e.alpaca;t.Fields.TagField=t.Fields.LowerCaseField.extend({getFieldType:function(){return"tag"},setup:function(){this.base(),this.options.separator||(this.options.separator=",")},getValue:function(){var e=this.base();return""===e?[]:e.split(this.options.separator)},setValue:function(e){return""!==e?e?void this.base(e.join(this.options.separator)):void this.base(""):void 0},onBlur:function(t){this.base(t);var i=this.getValue(),a=[];e.each(i,function(e,t){""!==t.trim()&&a.push(t.trim())}),this.setValue(a)},getTitle:function(){return"Tag Field"},getDescription:function(){return"Text field for entering list of tags separated by delimiter."},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{separator:{title:"Separator",description:"Separator used to split tags.",type:"string","default":","}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{separator:{type:"text"}}})}}),t.registerFieldClass("tag",t.Fields.TagField)}(jQuery),function(e){var t=e.alpaca;t.REGEX_TIME=/^((0?[1-9]|1[012])(:[0-5]\d){0,2}(\ [AP]M))$|^([01]\d|2[0-3])(:[0-5]\d){0,2}$/,t.Fields.TimeField=t.Fields.TextField.extend({getFieldType:function(){return"time"},setup:function(){var e=this;this.base(),e.options.picker||(e.options.picker={})},afterRenderControl:function(t,i){var a=this;this.base(t,function(){e.fn.timepicker&&a.getControlEl().timepicker(a.options.picker),i()})},onChange:function(){this.base(),this.refreshValidationState()},isAutoFocusable:function(){return!1},handleValidate:function(){var e=this.base(),t=this.validation,i=this._validateTime();return t.invalidTime={message:i?"":this.view.getMessage("invalidTime"),status:i},e&&t.invalidTime.status},_validateTime:function(){var e=this.getControlEl().val();return e||this.isRequired()?t.REGEX_TIME.test(e):!0},setValue:function(t){var i=this;this.base(t),e.fn.timepicker&&i.getControlEl().timepicker("setTime",t)},getTitle:function(){return"Time Field"},getDescription:function(){return"Time Field"},getSchemaOfSchema:function(){return t.merge(this.base(),{properties:{format:{title:"Format",description:"Property data format",type:"string","default":"time","enum":["time"],readonly:!0}}})},getOptionsForSchema:function(){return t.merge(this.base(),{fields:{format:{type:"text"}}})},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{picker:{title:"DatetimePicker options",description:"Options that are supported by the <a href='https://github.com/m3wolf/bootstrap3-timepicker'>Bootstrap Time Picker</a>.",type:"any"}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{picker:{type:"any"}}})}}),t.registerMessages({invalidTime:"Invalid time"}),t.registerFieldClass("time",t.Fields.TimeField),t.registerDefaultFormatFieldMapping("time","time")}(jQuery),function(e){var t=e.alpaca;t.Fields.UploadField=t.Fields.TextField.extend({constructor:function(i,a,n,r,o,s){var l=this;this.base(i,a,n,r,o,s),this.wrapTemplate=function(i){return function(a){for(var n=a.files,r=a.formatFileSize,o=a.options,s=[],c=0;c<n.length;c++){var d={};d.options=l.options,d.file=t.cloneObject(n[c]),d.size=r(d.size),d.buttons=l.options.buttons;var p=t.tmpl(l.view.getTemplateDescriptor(i),d,l);s.push(p[0])}return s=e(s),e(s).each(function(){o.fileupload&&o.fileupload.autoUpload&&e(this).find("button.start").css("display","none"),l.handleWrapRow(this,o),e(this).find("button.delete").on("destroyed",function(){setTimeout(function(){l.refreshUIState(),l.onFileDelete(p),l.triggerWithPropagation("change")},250)})}),e(s)}}},getFieldType:function(){return"upload"},setup:function(){var e=this;this.base(),e.options.buttons||(e.options.buttons=[]),e.options.hideDeleteButton||e.options.buttons.push({key:"delete",isDelete:!0}),"undefined"==typeof e.options.multiple&&(e.options.multiple=!1),"undefined"==typeof e.options.showUploadPreview&&(e.options.showUploadPreview=!0),"undefined"==typeof e.options.showHeaders&&(e.options.showHeaders=!0),e.data||(e.data=[])},afterRenderControl:function(e,t){var i=this;this.base(e,function(){i.handlePostRender(function(){t()})})},getUploadTemplate:function(){return this.wrapTemplate("control-upload-partial-upload")},getDownloadTemplate:function(){return this.wrapTemplate("control-upload-partial-download")},handlePostRender:function(t){var i=this,a=this.control,n={};if(n.dataType="json",n.uploadTemplateId=null,n.uploadTemplate=this.getUploadTemplate(),n.downloadTemplateId=null,n.downloadTemplate=this.getDownloadTemplate(),n.filesContainer=e(a).find(".files"),n.dropZone=e(a).find(".fileupload-active-zone"),n.url="/",n.method="post",n.showUploadPreview=i.options.showUploadPreview,i.options.upload)for(var r in i.options.upload)n[r]=i.options.upload[r];i.options.multiple&&(e(a).find(".alpaca-fileupload-input").attr("multiple",!0),e(a).find(".alpaca-fileupload-input").attr("name",i.name+"_files[]")),e(a).find(".progress").css("display","none"),n.progressall=function(t,i){var n=!1;if(i.loaded<i.total&&(n=!0),n){e(a).find(".progress").css("display","block");var r=parseInt(i.loaded/i.total*100,10);e("#progress .progress-bar").css("width",r+"%")}else e(a).find(".progress").css("display","none")},i.applyConfiguration(n);var o=i.fileUpload=e(a).find(".alpaca-fileupload-input").fileupload(n);o.bindFirst("fileuploaddone",function(e,t){var a=i.options.enhanceFiles;a?a(n,t):i.enhanceFiles(n,t),t.files=t.result.files,setTimeout(function(){i.refreshUIState()},250)}),o.bindFirst("fileuploadsubmit",function(t,a){i.options.properties&&e.each(a.files,function(e,t){for(var n in i.options.properties){var r="property"+e+"__"+n,o=i.options.properties[n];o=i.applyTokenSubstitutions(o,e,t),a.formData||(a.formData={}),a.formData[r]=o}}),i.options.parameters&&e.each(a.files,function(e,t){for(var n in i.options.parameters){var r="param"+e+"__"+n,o=i.options.parameters[n];o=i.applyTokenSubstitutions(o,e,t),a.formData||(a.formData={}),a.formData[r]=o}})}),o.bind("fileuploaddone",function(e,t){var a=i.getValue(),n=function(e){return e==t.files.length?void i.setValue(a):void i.convertFileToDescriptor(t.files[e],function(t,i){i&&a.push(i),n(e+1)})};n(0)}),i.applyBindings(o,a),i.preload(o,a,function(n){if(n){var r=e(i.control).find(".alpaca-fileupload-input");e(r).fileupload("option","done").call(r,e.Event("done"),{result:{files:n}}),i.afterPreload(o,a,n,function(){t()})}else t()}),"undefined"!=typeof document&&e(document).bind("drop dragover",function(e){e.preventDefault()})},handleWrapRow:function(){},applyTokenSubstitutions:function(e,t,i){var a={index:t,name:i.name,size:i.size,url:i.url,thumbnailUrl:i.thumbnailUrl},n=-1,r=0;do if(n=e.indexOf("{",r),n>-1){var o=e.indexOf("}",n);if(o>-1){var s=e.substring(n+car.length,o),l=a[s];l&&(e=e.substring(0,n)+l+e.substring(o+1)),r=o+1}}while(n>-1);return e},removeValue:function(e){for(var t=this,i=t.getValue(),a=0;a<i.length;a++)if(i[a].id==e){i.splice(a,1);break}t.setValue(i)},applyConfiguration:function(){},applyBindings:function(){},convertFileToDescriptor:function(e,t){var i={id:e.id,name:e.name,size:e.size,url:e.url,thumbnailUrl:e.thumbnailUrl,deleteUrl:e.deleteUrl,deleteType:e.deleteType};t(null,i)},convertDescriptorToFile:function(e,t){var i={id:e.id,name:e.name,size:e.size,url:e.url,thumbnailUrl:e.thumbnailUrl,deleteUrl:e.deleteUrl,deleteType:e.deleteType};t(null,i)},enhanceFiles:function(){},preload:function(e,t,i){var a=this,n=[],r=a.getValue(),o=function(e){return e==r.length?void i(n):void a.convertDescriptorToFile(r[e],function(t,i){i&&n.push(i),o(e+1)})};o(0)},afterPreload:function(e,t,i,a){a()},getValue:function(){return this.data},setValue:function(e){e||(e=[]),this.data=e,this.updateObservable(),this.triggerUpdate()},reload:function(t){var i=this,a=this.getValue(),n=[],r=function(o){if(o===a.length){var s=e(i.control).find(".alpaca-fileupload-input");return e(s).fileupload("option","done").call(s,e.Event("done"),{result:{files:n}}),void t()}i.convertDescriptorToFile(a[o],function(e,t){t&&n.push(t),r(o+1)})};r(0)},plugin:function(){var t=this;return e(t.control).find(".alpaca-fileupload-input").data().blueimpFileupload},refreshUIState:function(){var t=this,i=t.plugin();if(i){var a=99999;t.options.upload&&"undefined"!=typeof t.options.upload.maxNumberOfFiles&&(a=t.options.upload.maxNumberOfFiles),i.options.getNumberOfFiles&&i.options.getNumberOfFiles()>=a?(e(t.control).find("span.btn.fileinput-button").prop("disabled",!0),e(t.control).find("span.btn.fileinput-button").attr("disabled","disabled"),e(t.control).find(".fileupload-active-zone p.dropzone-message").css("display","none")):(e(t.control).find("span.btn.fileinput-button").prop("disabled",!1),e(t.control).find("span.btn.fileinput-button").attr("disabled",null),e(t.control).find(".fileupload-active-zone p.dropzone-message").css("display","block"))}},onFileDelete:function(){},getTitle:function(){return"Upload Field"},getDescription:function(){return"Provides an upload field with support for thumbnail preview"},getType:function(){return"array"}}),t.registerFieldClass("upload",t.Fields.UploadField),function(e){function t(t){return s?t.data("events"):e._data(t[0]).events}function i(e,i,a){var n=t(e),r=n[i];if(!s){var o=a?r.splice(r.delegateCount-1,1)[0]:r.pop();return void r.splice(a?0:r.delegateCount||0,0,o)}a?n.live.unshift(n.live.pop()):r.unshift(r.pop())}function a(t,a,n){var r=a.split(/\s+/);t.each(function(){for(var t=0;t<r.length;++t){var a=e.trim(r[t]).match(/[^\.]+/i)[0];i(e(this),a,n)}})}var n=e.fn.jquery.split("."),r=parseInt(n[0]),o=parseInt(n[1]),s=1>r||1===r&&7>o;e.fn.bindFirst=function(){var t=e.makeArray(arguments),i=t.shift();return i&&(e.fn.bind.apply(this,arguments),a(this,i)),this}}(e)}(jQuery),function(e){var t=e.alpaca;t.Fields.UpperCaseField=t.Fields.TextField.extend({getFieldType:function(){return"uppercase"},setValue:function(e){var t=e.toUpperCase();t!=this.getValue()&&this.base(t)},onKeyPress:function(e){this.base(e);var i=this;t.later(25,this,function(){var e=i.getValue();i.setValue(e)})},getTitle:function(){return"Uppercase Text"},getDescription:function(){return"Text field for uppercase text."}}),t.registerFieldClass("uppercase",t.Fields.UpperCaseField),t.registerDefaultFormatFieldMapping("uppercase","uppercase")}(jQuery),function(e){var t=e.alpaca;t.Fields.URLField=t.Fields.TextField.extend({getFieldType:function(){return"url"},setup:function(){this.inputType="url",this.base(),this.schema.pattern=t.regexps.url,this.schema.format="uri"},handleValidate:function(){var e=this.base(),t=this.validation;return t.invalidPattern.status||(t.invalidPattern.message=this.view.getMessage("invalidURLFormat")),e},getTitle:function(){return"URL Field"},getDescription:function(){return"Provides a text control with validation for an internet web address."}}),t.registerMessages({invalidURLFormat:"The URL provided is not a valid web address."}),t.registerFieldClass("url",t.Fields.URLField),t.registerDefaultFormatFieldMapping("url","url")}(jQuery),function(e){var t=e.alpaca;t.Fields.ZipcodeField=t.Fields.TextField.extend({getFieldType:function(){return"zipcode"},setup:function(){this.base(),this.options.format=this.options.format?this.options.format:"nine","nine"===this.options.format?this.schema.pattern=t.regexps["zipcode-nine"]:"five"===this.options.format?this.schema.pattern=t.regexps["zipcode-five"]:(t.logError("The configured zipcode format: "+this.options.format+" is not a legal value [five, nine]"),this.options.format="nine",this.schema.pattern=t.regexps["zipcode-nine"]),"nine"===this.options.format?this.options.maskString="99999-9999":"five"===this.options.format&&(this.options.maskString="99999")},handleValidate:function(){var e=this.base(),t=this.validation;return t.invalidPattern.status||("nine"===this.options.format?t.invalidPattern.message=this.view.getMessage("invalidZipcodeFormatNine"):"five"===this.options.format&&(t.invalidPattern.message=this.view.getMessage("invalidZipcodeFormatFive"))),e},getSchemaOfOptions:function(){return t.merge(this.base(),{properties:{format:{title:"Format",description:"How to represent the zipcode field",type:"string","default":"five","enum":["five","nine"],readonly:!0}}})},getOptionsForOptions:function(){return t.merge(this.base(),{fields:{format:{type:"text"}}})},getTitle:function(){return"Zipcode Field"},getDescription:function(){return"Provides a five or nine-digital US zipcode control with validation."}}),t.registerMessages({invalidZipcodeFormatFive:"Invalid Five-Digit Zipcode (#####)",invalidZipcodeFormatNine:"Invalid Nine-Digit Zipcode (#####-####)"}),t.registerFieldClass("zipcode",t.Fields.ZipcodeField),t.registerDefaultFormatFieldMapping("zipcode","zipcode")}(jQuery),function(e){var t=e.alpaca;t.registerView({id:"base",title:"Abstract base view",messages:{countries:{afg:"Afghanistan",ala:"Aland Islands",alb:"Albania",dza:"Algeria",asm:"American Samoa",and:"Andorra",ago:"Angola",aia:"Anguilla",ata:"Antarctica",atg:"Antigua and Barbuda",arg:"Argentina",arm:"Armenia",abw:"Aruba",aus:"Australia",aut:"Austria",aze:"Azerbaijan",bhs:"Bahamas",bhr:"Bahrain",bgd:"Bangladesh",brb:"Barbados",blr:"Belarus",bel:"Belgium",blz:"Belize",ben:"Benin",bmu:"Bermuda",btn:"Bhutan",bol:"Bolivia",bih:"Bosnia and Herzegovina",bwa:"Botswana",bvt:"Bouvet Island",bra:"Brazil",iot:"British Indian Ocean Territory",brn:"Brunei Darussalam",bgr:"Bulgaria",bfa:"Burkina Faso",bdi:"Burundi",khm:"Cambodia",cmr:"Cameroon",can:"Canada",cpv:"Cape Verde",cym:"Cayman Islands",caf:"Central African Republic",tcd:"Chad",chl:"Chile",chn:"China",cxr:"Christmas Island",cck:"Cocos (Keeling), Islands",col:"Colombia",com:"Comoros",cog:"Congo",cod:"Congo, the Democratic Republic of the",cok:"Cook Islands",cri:"Costa Rica",hrv:"Croatia",cub:"Cuba",cyp:"Cyprus",cze:"Czech Republic",civ:"Cote d'Ivoire",dnk:"Denmark",dji:"Djibouti",dma:"Dominica",dom:"Dominican Republic",ecu:"Ecuador",egy:"Egypt",slv:"El Salvador",gnq:"Equatorial Guinea",eri:"Eritrea",est:"Estonia",eth:"Ethiopia",flk:"Falkland Islands (Malvinas),",fro:"Faroe Islands",fji:"Fiji",fin:"Finland",fra:"France",guf:"French Guiana",pyf:"French Polynesia",atf:"French Southern Territories",gab:"Gabon",gmb:"Gambia",geo:"Georgia",deu:"Germany",gha:"Ghana",gib:"Gibraltar",grc:"Greece",grl:"Greenland",grd:"Grenada",glp:"Guadeloupe",gum:"Guam",gtm:"Guatemala",ggy:"Guernsey",gin:"Guinea",gnb:"Guinea-Bissau",guy:"Guyana",hti:"Haiti",hmd:"Heard Island and McDonald Islands",vat:"Holy See (Vatican City State),",hnd:"Honduras",hkg:"Hong Kong",hun:"Hungary",isl:"Iceland",ind:"India",idn:"Indonesia",irn:"Iran, Islamic Republic of",irq:"Iraq",irl:"Ireland",imn:"Isle of Man",isr:"Israel",ita:"Italy",jam:"Jamaica",jpn:"Japan",jey:"Jersey",jor:"Jordan",kaz:"Kazakhstan",ken:"Kenya",kir:"Kiribati",prk:"Korea, Democratic People's Republic of",kor:"Korea, Republic of",kwt:"Kuwait",kgz:"Kyrgyzstan",lao:"Lao People's Democratic Republic",lva:"Latvia",lbn:"Lebanon",lso:"Lesotho",lbr:"Liberia",lby:"Libyan Arab Jamahiriya",lie:"Liechtenstein",ltu:"Lithuania",lux:"Luxembourg",mac:"Macao",mkd:"Macedonia, the former Yugoslav Republic of",mdg:"Madagascar",mwi:"Malawi",mys:"Malaysia",mdv:"Maldives",mli:"Mali",mlt:"Malta",mhl:"Marshall Islands",mtq:"Martinique",mrt:"Mauritania",mus:"Mauritius",myt:"Mayotte",mex:"Mexico",fsm:"Micronesia, Federated States of",mda:"Moldova, Republic of",mco:"Monaco",mng:"Mongolia",mne:"Montenegro",msr:"Montserrat",mar:"Morocco",moz:"Mozambique",mmr:"Myanmar",nam:"Namibia",nru:"Nauru",npl:"Nepal",nld:"Netherlands",ant:"Netherlands Antilles",ncl:"New Caledonia",nzl:"New Zealand",nic:"Nicaragua",ner:"Niger",nga:"Nigeria",niu:"Niue",nfk:"Norfolk Island",mnp:"Northern Mariana Islands",nor:"Norway",omn:"Oman",pak:"Pakistan",plw:"Palau",pse:"Palestinian Territory, Occupied",pan:"Panama",png:"Papua New Guinea",pry:"Paraguay",per:"Peru",phl:"Philippines",pcn:"Pitcairn",pol:"Poland",prt:"Portugal",pri:"Puerto Rico",qat:"Qatar",rou:"Romania",rus:"Russian Federation",rwa:"Rwanda",reu:"Reunion",blm:"Saint Barthelemy",shn:"Saint Helena",kna:"Saint Kitts and Nevis",lca:"Saint Lucia",maf:"Saint Martin (French part)",spm:"Saint Pierre and Miquelon",vct:"Saint Vincent and the Grenadines",wsm:"Samoa",smr:"San Marino",stp:"Sao Tome and Principe",sau:"Saudi Arabia",sen:"Senegal",srb:"Serbia",syc:"Seychelles",sle:"Sierra Leone",sgp:"Singapore",svk:"Slovakia",svn:"Slovenia",slb:"Solomon Islands",som:"Somalia",zaf:"South Africa",sgs:"South Georgia and the South Sandwich Islands",esp:"Spain",lka:"Sri Lanka",sdn:"Sudan",sur:"Suriname",sjm:"Svalbard and Jan Mayen",swz:"Swaziland",swe:"Sweden",che:"Switzerland",syr:"Syrian Arab Republic",twn:"Taiwan, Province of China",tjk:"Tajikistan",tza:"Tanzania, United Republic of",tha:"Thailand",tls:"Timor-Leste",tgo:"Togo",tkl:"Tokelau",ton:"Tonga",tto:"Trinidad and Tobago",tun:"Tunisia",tur:"Turkey",tkm:"Turkmenistan",tca:"Turks and Caicos Islands",tuv:"Tuvalu",uga:"Uganda",ukr:"Ukraine",are:"United Arab Emirates",gbr:"United Kingdom",usa:"United States",umi:"United States Minor Outlying Islands",ury:"Uruguay",uzb:"Uzbekistan",vut:"Vanuatu",ven:"Venezuela",vnm:"Viet Nam",vgb:"Virgin Islands, British",vir:"Virgin Islands, U.S.",wlf:"Wallis and Futuna",esh:"Western Sahara",yem:"Yemen",zmb:"Zambia",zwe:"Zimbabwe"},empty:"",required:"This field is required",valid:"",invalid:"This field is invalid",months:["January","February","March","April","May","June","July","August","September","October","November","December"],timeUnits:{SECOND:"seconds",MINUTE:"minutes",HOUR:"hours",DAY:"days",MONTH:"months",YEAR:"years"}}})}(jQuery),function(e){var t=e.alpaca;t.registerView({id:"base",messages:{zh_CN:{required:"&#27492;&#22495;&#24517;&#39035;",invalid:"&#27492;&#22495;&#19981;&#21512;&#26684;",months:["&#19968;&#26376;","&#20108;&#26376;","&#19977;&#26376;","&#22235;&#26376;","&#20116;&#26376;","&#20845;&#26376;","&#19971;&#26376;","&#20843;&#26376;","&#20061;&#26376;","&#21313;&#26376;","&#21313;&#19968;&#26376;","&#21313;&#20108;&#26376;"],timeUnits:{SECOND:"&#31186;",MINUTE:"&#20998;",HOUR:"&#26102;",DAY:"&#26085;",MONTH:"&#26376;",YEAR:"&#24180;"},notOptional:"&#27492;&#22495;&#38750;&#20219;&#36873;",disallowValue:"&#38750;&#27861;&#36755;&#20837;&#21253;&#25324; {0}.",invalidValueOfEnum:"&#20801;&#35768;&#36755;&#20837;&#21253;&#25324; {0}. [{1}]",notEnoughItems:"&#26368;&#23567;&#20010;&#25968; {0}",tooManyItems:"&#26368;&#22823;&#20010;&#25968; {0}",valueNotUnique:"&#36755;&#20837;&#20540;&#19981;&#29420;&#29305;",notAnArray:"&#19981;&#26159;&#25968;&#32452;",invalidDate:"&#26085;&#26399;&#26684;&#24335;&#22240;&#35813;&#26159; {0}",invalidEmail:"&#20234;&#22969;&#20799;&#26684;&#24335;&#19981;&#23545;, ex: info@cloudcms.com",stringNotAnInteger:"&#19981;&#26159;&#25972;&#25968;.",invalidIPv4:"&#19981;&#26159;&#21512;&#27861;IP&#22320;&#22336;, ex: 192.168.0.1",stringValueTooSmall:"&#26368;&#23567;&#20540;&#26159; {0}",stringValueTooLarge:"&#26368;&#22823;&#20540;&#26159; {0}",stringValueTooSmallExclusive:"&#20540;&#24517;&#39035;&#22823;&#20110; {0}",stringValueTooLargeExclusive:"&#20540;&#24517;&#39035;&#23567;&#20110; {0}",stringDivisibleBy:"&#20540;&#24517;&#39035;&#33021;&#34987; {0} &#25972;&#38500;",stringNotANumber:"&#19981;&#26159;&#25968;&#23383;.",invalidPassword:"&#38750;&#27861;&#23494;&#30721;",invalidPhone:"&#38750;&#27861;&#30005;&#35805;&#21495;&#30721;, ex: (123) 456-9999",invalidPattern:"&#27492;&#22495;&#39035;&#26377;&#26684;&#24335; {0}",stringTooShort:"&#27492;&#22495;&#33267;&#23569;&#38271;&#24230; {0}",stringTooLong:"&#27492;&#22495;&#26368;&#22810;&#38271;&#24230; {0}"}}})}(jQuery),function(e){var t=e.alpaca;t.registerView({id:"base",messages:{es_ES:{required:"Este campo es obligatorio",invalid:"Este campo es inválido",months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],timeUnits:{SECOND:"segundos",MINUTE:"minutos",HOUR:"horas",DAY:"días",MONTH:"meses",YEAR:"años"},notOptional:"Este campo no es opcional.",disallowValue:"{0} son los valores rechazados.",invalidValueOfEnum:"Este campo debe tener uno de los valores adentro {0}. [{1}]",notEnoughItems:"El número mínimo de artículos es {0}",tooManyItems:"El número máximo de artículos es {0}",valueNotUnique:"Los valores no son únicos",notAnArray:"Este valor no es un arsenal",invalidDate:"Fecha inválida para el formato {0}",invalidEmail:"Email address inválido, ex: info@cloudcms.com",stringNotAnInteger:"Este valor no es un número entero.",invalidIPv4:"Dirección inválida IPv4, ex: 192.168.0.1",stringValueTooSmall:"El valor mínimo para este campo es {0}",stringValueTooLarge:"El valor míximo para este campo es {0}",stringValueTooSmallExclusive:"El valor de este campo debe ser mayor que {0}",stringValueTooLargeExclusive:"El valor de este campo debe ser menos que {0}",stringDivisibleBy:"El valor debe ser divisible cerca {0}",stringNotANumber:"Este valor no es un número.",invalidPassword:"Contraseña inválida",invalidPhone:"Número de teléfono inválido, ex: (123) 456-9999",invalidPattern:"Este campo debe tener patrón {0}",stringTooShort:"Este campo debe contener por lo menos {0} números o caracteres",stringTooLong:"Este campo debe contener a lo más {0} números o caracteres"}}})}(jQuery),function(e){var t=e.alpaca;t.registerView({id:"base",messages:{fr_FR:{required:"Ce champ est requis",invalid:"Ce champ est invalide",months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],timeUnits:{SECOND:"secondes",MINUTE:"minutes",HOUR:"heures",DAY:"jours",MONTH:"mois",YEAR:"années"},notOptional:"Ce champ n'est pas optionnel.",disallowValue:"{0} sont des valeurs interdites.",invalidValueOfEnum:"Ce champ doit prendre une des valeurs suivantes : {0}. [{1}]",notEnoughItems:"Le nombre minimum d'éléments est {0}",tooManyItems:"Le nombre maximum d'éléments est {0}",valueNotUnique:"Les valeurs sont uniques",notAnArray:"Cette valeur n'est pas une liste",invalidDate:"Cette date ne correspond pas au format {0}",invalidEmail:"Adresse de courriel invalide, ex: info@cloudcms.com",stringNotAnInteger:"Cette valeur n'est pas un nombre entier.",invalidIPv4:"Adresse IPv4 invalide, ex: 192.168.0.1",stringValueTooSmall:"La valeur minimale pour ce champ est {0}",stringValueTooLarge:"La valeur maximale pour ce champ est {0}",stringValueTooSmallExclusive:"La valeur doit-être supérieure à {0}",stringValueTooLargeExclusive:"La valeur doit-être inférieure à {0}",stringDivisibleBy:"La valeur doit-être divisible par {0}",stringNotANumber:"Cette valeur n'est pas un nombre.",invalidPassword:"Mot de passe invalide",invalidPhone:"Numéro de téléphone invalide, ex: (123) 456-9999",invalidPattern:"Ce champ doit correspondre au motif {0}",stringTooShort:"Ce champ doit contenir au moins {0} caractères",stringTooLong:"Ce champ doit contenir au plus {0} caractères"}}})}(jQuery),function(e){var t=e.alpaca;t.registerView({id:"base",messages:{pl_PL:{required:"To pole jest wymagane",invalid:"To pole jest nieprawidłowe",months:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],timeUnits:{SECOND:"sekundy",MINUTE:"minuty",HOUR:"godziny",DAY:"dni",MONTH:"miesiące",YEAR:"lata"},notOptional:"To pole nie jest opcjonalne",disallowValue:"Ta wartość nie jest dozwolona: {0}",invalidValueOfEnum:"To pole powinno zawierać jedną z następujących wartości: {0}. [{1}]",notEnoughItems:"Minimalna liczba elementów wynosi {0}",tooManyItems:"Maksymalna liczba elementów wynosi {0}",valueNotUnique:"Te wartości nie są unikalne",notAnArray:"Ta wartość nie jest tablicą",invalidDate:"Niepoprawny format daty: {0}",invalidEmail:"Niepoprawny adres email, n.p.: info@cloudcms.com",stringNotAnInteger:"Ta wartość nie jest liczbą całkowitą",invalidIPv4:"Niepoprawny adres IPv4, n.p.: 192.168.0.1",stringValueTooSmall:"Minimalna wartość dla tego pola wynosi {0}",stringValueTooLarge:"Maksymalna wartość dla tego pola wynosi {0}",stringValueTooSmallExclusive:"Wartość dla tego pola musi być większa niż {0}",stringValueTooLargeExclusive:"Wartość dla tego pola musi być mniejsza niż {0}",stringDivisibleBy:"Wartość musi być podzielna przez {0}",stringNotANumber:"Wartość nie jest liczbą",invalidPassword:"Niepoprawne hasło",invalidPhone:"Niepoprawny numer telefonu, n.p.: (123) 456-9999",invalidPattern:"To pole powinno mieć format {0}",stringTooShort:"To pole powinno zawierać co najmniej {0} znaków",stringTooLong:"To pole powinno zawierać najwyżej {0} znaków"}}})}(jQuery),function(e){var t=e.alpaca;t.registerView({id:"base",messages:{pt_BR:{required:"Este campo é obrigatório",invalid:"Este campo é inválido",months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],timeUnits:{SECOND:"segundos",MINUTE:"minutos",HOUR:"horas",DAY:"dias",MONTH:"meses",YEAR:"anos"},notOptional:"Este campo não é opcional.",disallowValue:"{0} são valores proibidas.",invalidValueOfEnum:"Este campo deve ter um dos seguintes valores: {0}. [{1}]",notEnoughItems:"O número mínimo de elementos é {0}",tooManyItems:"O número máximo de elementos é {0}",valueNotUnique:"Os valores não são únicos",notAnArray:"Este valor não é uma lista",invalidDate:"Esta data não tem o formato {0}",invalidEmail:"Endereço de email inválida, ex: info@cloudcms.com",stringNotAnInteger:"Este valor não é um número inteiro.",invalidIPv4:"Endereço IPv4 inválida, ex: 192.168.0.1",stringValueTooSmall:"O valor mínimo para este campo é {0}",stringValueTooLarge:"O valor máximo para este campo é {0}",stringValueTooSmallExclusive:"O valor deste campo deve ser maior que {0}",stringValueTooLargeExclusive:"O valor deste campo deve ser menor que {0}",stringDivisibleBy:"O valor deve ser divisível por {0}",stringNotANumber:"Este valor não é um número.",invalidPassword:"Senha inválida",invalidPhone:"Número de telefone inválido, ex: (123) 456-9999",invalidPattern:"Este campo deve ter o padrão {0}",stringTooShort:"Este campo deve incluir pelo menos {0} caracteres",stringTooLong:"Este campo pode incluir no máximo {0} caracteres"}}})}(jQuery),function(e){var t=e.alpaca;t.registerView({id:"base",messages:{de_AT:{required:"Eingabe erforderlich",invalid:"Eingabe invalid",months:["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],timeUnits:{SECOND:"Sekunden",MINUTE:"Minuten",HOUR:"Stunden",DAY:"Tage",MONTH:"Monate",YEAR:"Jahre"},notOptional:"Dieses Feld ist nicht optional",disallowValue:"Diese Werte sind nicht erlaubt: {0}",invalidValueOfEnum:"Diese Feld sollte einen der folgenden Werte enthalten: {0}. [{1}]",notEnoughItems:"Die Mindestanzahl von Elementen ist {0}",tooManyItems:"Die Maximalanzahl von Elementen ist {0}",valueNotUnique:"Diese Werte sind nicht eindeutig",notAnArray:"Keine Liste von Werten",invalidDate:"Falsches Datumsformat: {0}",invalidEmail:"Ungültige e-Mail Adresse, z.B.: info@cloudcms.com",stringNotAnInteger:"Eingabe ist keine Ganz Zahl.",invalidIPv4:"Ungültige IPv4 Adresse, z.B.: 192.168.0.1",stringValueTooSmall:"Die Mindestanzahl von Zeichen ist {0}",stringValueTooLarge:"Die Maximalanzahl von Zeichen ist {0}",stringValueTooSmallExclusive:"Die Anzahl der Zeichen muss größer sein als {0}",stringValueTooLargeExclusive:"Die Anzahl der Zeichen muss kleiner sein als {0}",stringDivisibleBy:"Der Wert muss durch {0} dividierbar sein",stringNotANumber:"Die Eingabe ist keine Zahl",invalidPassword:"Ungültiges Passwort.",invalidPhone:"Ungültige Telefonnummer, z.B.: (123) 456-9999",invalidPattern:"Diese Feld stimmt nicht mit folgender Vorgabe überein {0}",stringTooShort:"Dieses Feld sollte mindestens {0} Zeichen enthalten",stringTooLong:"Dieses Feld sollte höchstens {0} Zeichen enthalten"}}})}(jQuery),function(e){var t=e.alpaca,i={};i.field=function(){},i.control=function(){},i.container=function(){},i.form=function(){},i.required=function(){},i.optional=function(){},i.readonly=function(){},i.disabled=function(){},i.enabled=function(){},i.clearValidity=function(){},i.invalid=function(){},i.valid=function(){},i.addMessage=function(){},i.removeMessages=function(){},i.enableButton=function(){},i.disableButton=function(){},i.arrayToolbar=function(i){var a=this,n=this.getId();if(i)e(this.getFieldEl()).find(".alpaca-array-toolbar[data-alpaca-array-toolbar-field-id='"+n+"']").remove();else{var r=this.view.getTemplateDescriptor("container-array-toolbar",a),o=t.tmpl(r,{actions:a.toolbar.actions,fieldId:a.getId(),toolbarStyle:a.options.toolbarStyle});e(this.getContainerEl()).before(o)}},i.arrayActionbars=function(i){var a=this,n=this.getId();if(i)e(this.getFieldEl()).find(".alpaca-array-actionbar[data-alpaca-array-actionbar-field-id='"+n+"']").remove();else{var r=this.view.getTemplateDescriptor("container-array-actionbar",a),o=this.getContainerEl().children(".alpaca-container-item");e(o).each(function(i){var n=t.tmpl(r,{actions:a.actionbar.actions,fieldId:a.getId(),itemIndex:i,actionbarStyle:a.options.actionbarStyle});"top"==a.options.actionbarStyle?e(this).children().first().before(n):"bottom"==a.options.actionbarStyle&&e(this).children().last().after(n)})}};var a={};a.commonIcon="",a.addIcon="",a.removeIcon="",a.upIcon="",a.downIcon="",a.containerExpandedIcon="",a.containerCollapsedIcon="",t.registerView({id:"web-display",parent:"base",type:"display",ui:"web",title:"Default HTML5 display view",displayReadonly:!0,templates:{},callbacks:i,styles:a,horizontal:!1}),t.registerView({id:"web-display-horizontal",parent:"web-display",horizontal:!0}),t.registerView({id:"web-edit",parent:"base",type:"edit",ui:"web",title:"Default HTML5 edit view",displayReadonly:!0,templates:{},callbacks:i,styles:a,horizontal:!1}),t.registerView({id:"web-edit-horizontal",parent:"web-edit",horizontal:!0}),t.registerView({id:"web-create",parent:"web-edit",type:"create",title:"Default HTML5 create view",displayReadonly:!1,templates:{},horizontal:!1}),t.registerView({id:"web-create-horizontal",parent:"web-create",horizontal:!0})}(jQuery),function(e){var t=e.alpaca,i={};i.commonIcon="",i.addIcon="glyphicon glyphicon-plus-sign",i.removeIcon="glyphicon glyphicon-minus-sign",i.upIcon="glyphicon glyphicon-chevron-up",i.downIcon="glyphicon glyphicon-chevron-down",i.containerExpandedIcon="glyphicon glyphicon-circle-arrow-down",i.containerCollapsedIcon="glyphicon glyphicon-circle-arrow-right";var a={};a.required=function(){var t=this.getFieldEl(),i=e(t).find("label.alpaca-control-label");e('<span class="alpaca-icon-required glyphicon glyphicon-star"></span>').prependTo(i)},a.invalid=function(){this.isControlField&&e(this.getFieldEl()).addClass("has-error")},a.valid=function(){e(this.getFieldEl()).removeClass("has-error")},a.control=function(){var t=this.getFieldEl(),i=this.getControlEl();if(e(t).find("input").addClass("form-control"),e(t).find("textarea").addClass("form-control"),e(t).find("select").addClass("form-control"),e(t).find("input[type=checkbox]").removeClass("form-control"),e(t).find("input[type=file]").removeClass("form-control"),e(t).find("input[type=radio]").removeClass("form-control"),"color"===this.inputType&&e(t).find("input").removeClass("form-control"),e(t).find("input[type=checkbox]").parent().parent().addClass("checkbox"),e(t).find("input[type=radio]").parent().parent().addClass("radio"),e(t).parents("form").hasClass("form-inline")&&(e(t).find("input[type=checkbox]").parent().addClass("checkbox-inline"),e(t).find("input[type=radio]").parent().addClass("radio-inline")),e(t).find("label.alpaca-control-label").addClass("control-label"),this.view.horizontal){e(t).find("label.alpaca-control-label").addClass("col-sm-3");
var a=e("<div></div>");a.addClass("col-sm-9"),e(i).after(a),a.append(i),e(t).append("<div style='clear:both;'></div>")}},a.container=function(){var t=this.getContainerEl();this.view.horizontal&&e(t).addClass("form-horizontal")},a.form=function(){this.getFormEl()},a.enableButton=function(t){e(t).removeAttr("disabled")},a.disableButton=function(t){e(t).attr("disabled","disabled")},a.collapsible=function(){var i=this.getFieldEl(),a=e(i).find("legend").first(),n=e("[data-toggle='collapse']",a);if(e(n).length>0){var r=this.getContainerEl(),o=e(r).attr("id");o||(o=t.generateId(),e(r).attr("id",o)),e(r).addClass("collapse in"),e(n).attr("data-target","#"+o),e(n).mouseover(function(){e(this).css("cursor","pointer")})}},t.registerView({id:"bootstrap-display",parent:"web-display",type:"display",ui:"bootstrap",title:"Display View for Bootstrap 3",displayReadonly:!0,callbacks:a,styles:i,templates:{}}),t.registerView({id:"bootstrap-display-horizontal",parent:"bootstrap-display",horizontal:!0}),t.registerView({id:"bootstrap-edit",parent:"web-edit",type:"edit",ui:"bootstrap",title:"Edit View for Bootstrap 3",displayReadonly:!0,callbacks:a,styles:i,templates:{}}),t.registerView({id:"bootstrap-edit-horizontal",parent:"bootstrap-edit",horizontal:!0}),t.registerView({id:"bootstrap-create",parent:"bootstrap-edit",title:"Create View for Bootstrap 3",type:"create",displayReadonly:!1}),t.registerView({id:"bootstrap-create-horizontal",parent:"bootstrap-create",horizontal:!0})}(jQuery),Alpaca.defaultView="bootstrap",Alpaca});
/*
 AngularJS v1.2.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(O,U,s){'use strict';function t(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.16/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function ab(b){if(null==b||Ca(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:w(b)||M(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(P(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(ab(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Qb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Sc(b,
a,c){for(var d=Qb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Rb(b){return function(a,c){b(c,a)}}function bb(){for(var b=ka.length,a;b;){b--;a=ka[b].charCodeAt(0);if(57==a)return ka[b]="A",ka.join("");if(90==a)ka[b]="0";else return ka[b]=String.fromCharCode(a+1),ka.join("")}ka.unshift("0");return ka.join("")}function Sb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function D(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Sb(b,a);return b}function Y(b){return parseInt(b,
10)}function Tb(b,a){return D(new (D(function(){},{prototype:b})),a)}function C(){}function Da(b){return b}function aa(b){return function(){return b}}function E(b){return"undefined"===typeof b}function B(b){return"undefined"!==typeof b}function X(b){return null!=b&&"object"===typeof b}function w(b){return"string"===typeof b}function vb(b){return"number"===typeof b}function Na(b){return"[object Date]"===wa.call(b)}function M(b){return"[object Array]"===wa.call(b)}function P(b){return"function"===typeof b}
function cb(b){return"[object RegExp]"===wa.call(b)}function Ca(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Tc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Uc(b,a,c){var d=[];q(b,function(b,g,f){d.push(a.call(c,b,g,f))});return d}function db(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Oa(b,a){var c=db(b,a);0<=c&&b.splice(c,1);return a}function ba(b,a){if(Ca(b)||b&&b.$evalAsync&&b.$watch)throw Pa("cpws");
if(a){if(b===a)throw Pa("cpi");if(M(b))for(var c=a.length=0;c<b.length;c++)a.push(ba(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=ba(b[d]);Sb(a,c)}}else(a=b)&&(M(b)?a=ba(b,[]):Na(b)?a=new Date(b.getTime()):cb(b)?a=RegExp(b.source):X(b)&&(a=ba(b,{})));return a}function Ub(b,a){a=a||{};for(var c in b)!b.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a}function xa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;
var c=typeof b,d;if(c==typeof a&&"object"==c)if(M(b)){if(!M(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!xa(b[d],a[d]))return!1;return!0}}else{if(Na(b))return Na(a)&&b.getTime()==a.getTime();if(cb(b)&&cb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ca(b)||Ca(a)||M(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!P(b[d])){if(!xa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!P(a[d]))return!1;
return!0}return!1}function Vb(){return U.securityPolicy&&U.securityPolicy.isActive||U.querySelector&&!(!U.querySelector("[ng-csp]")&&!U.querySelector("[data-ng-csp]"))}function eb(b,a){var c=2<arguments.length?ya.call(arguments,2):[];return!P(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ya.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Vc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=
s:Ca(a)?c="$WINDOW":a&&U===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function qa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Vc,a?"  ":null)}function Wb(b){return w(b)?JSON.parse(b):b}function Qa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=K(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ha(b){b=y(b).clone();try{b.empty()}catch(a){}var c=y("<div>").append(b).html();try{return 3===b[0].nodeType?K(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+K(b)})}catch(d){return K(c)}}function Xb(b){try{return decodeURIComponent(b)}catch(a){}}function Yb(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=Xb(c[0]),B(d)&&(b=B(c[1])?Xb(c[1]):!0,a[d]?M(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Zb(b){var a=[];q(b,function(b,d){M(b)?q(b,function(b){a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))}):a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))});return a.length?a.join("&"):""}function wb(b){return za(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function za(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Wc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,f=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(f,function(a){f[a]=!0;c(U.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+
a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&f[b.name]&&(e=a,g=b.value)})}});e&&a(e,g?[g]:[])}function $b(b,a){var c=function(){b=y(b);if(b.injector()){var c=b[0]===U?"document":ha(b);throw Pa("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=ac(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",
function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(O&&!d.test(O.name))return c();O.name=O.name.replace(d,"");Ea.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function fb(b,a){a=a||"_";return b.replace(Xc,function(b,d){return(d?a:"")+b.toLowerCase()})}function xb(b,a,c){if(!b)throw Pa("areq",a||"?",c||"required");return b}function Ra(b,a,c){c&&M(b)&&(b=b[b.length-1]);xb(P(b),a,"not a function, got "+(b&&"object"==typeof b?
b.constructor.name||"Object":typeof b));return b}function Aa(b,a){if("hasOwnProperty"===b)throw Pa("badname",a);}function bc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,g=a.length,f=0;f<g;f++)d=a[f],b&&(b=(e=b)[d]);return!c&&P(b)?eb(e,b):b}function yb(b){var a=b[0];b=b[b.length-1];if(a===b)return y(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return y(c)}function Yc(b){var a=t("$injector"),c=t("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||t;return b.module||
(b.module=function(){var b={};return function(e,g,f){if("hasOwnProperty"===e)throw c("badname","module");g&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!g)throw a("nomod",e);var c=[],d=[],m=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide",
"constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:m,run:function(a){d.push(a);return this}};f&&m(f);return n}())}}())}function Zc(b){D(b,{bootstrap:$b,copy:ba,extend:D,equals:xa,element:y,forEach:q,injector:ac,noop:C,bind:eb,toJson:qa,fromJson:Wb,identity:Da,isUndefined:E,isDefined:B,isString:w,isFunction:P,isObject:X,isNumber:vb,isElement:Tc,isArray:M,
version:$c,isDate:Na,lowercase:K,uppercase:Fa,callbacks:{counter:0},$$minErr:t,$$csp:Vb});Sa=Yc(O);try{Sa("ngLocale")}catch(a){Sa("ngLocale",[]).provider("$locale",ad)}Sa("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:bd});a.provider("$compile",cc).directive({a:cd,input:dc,textarea:dc,form:dd,script:ed,select:fd,style:gd,option:hd,ngBind:id,ngBindHtml:jd,ngBindTemplate:kd,ngClass:ld,ngClassEven:md,ngClassOdd:nd,ngCloak:od,ngController:pd,ngForm:qd,ngHide:rd,ngIf:sd,ngInclude:td,
ngInit:ud,ngNonBindable:vd,ngPluralize:wd,ngRepeat:xd,ngShow:yd,ngStyle:zd,ngSwitch:Ad,ngSwitchWhen:Bd,ngSwitchDefault:Cd,ngOptions:Dd,ngTransclude:Ed,ngModel:Fd,ngList:Gd,ngChange:Hd,required:ec,ngRequired:ec,ngValue:Id}).directive({ngInclude:Jd}).directive(zb).directive(fc);a.provider({$anchorScroll:Kd,$animate:Ld,$browser:Md,$cacheFactory:Nd,$controller:Od,$document:Pd,$exceptionHandler:Qd,$filter:gc,$interpolate:Rd,$interval:Sd,$http:Td,$httpBackend:Ud,$location:Vd,$log:Wd,$parse:Xd,$rootScope:Yd,
$q:Zd,$sce:$d,$sceDelegate:ae,$sniffer:be,$templateCache:ce,$timeout:de,$window:ee,$$rAF:fe,$$asyncCallback:ge})}])}function Ta(b){return b.replace(he,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ie,"Moz$1")}function Ab(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],l=a,k,m,n,p,r,z;if(!d||null!=b)for(;e.length;)for(k=e.shift(),m=0,n=k.length;m<n;m++)for(p=y(k[m]),l?p.triggerHandler("$destroy"):l=!l,r=0,p=(z=p.children()).length;r<p;r++)e.push(Ga(z[r]));return g.apply(this,arguments)}
var g=Ga.fn[b],g=g.$original||g;e.$original=g;Ga.fn[b]=e}function N(b){if(b instanceof N)return b;w(b)&&(b=ca(b));if(!(this instanceof N)){if(w(b)&&"<"!=b.charAt(0))throw Bb("nosel");return new N(b)}if(w(b)){var a=b;b=U;var c;if(c=je.exec(a))b=[b.createElement(c[1])];else{var d=b,e;b=d.createDocumentFragment();c=[];if(Cb.test(a)){d=b.appendChild(d.createElement("div"));e=(ke.exec(a)||["",""])[1].toLowerCase();e=ea[e]||ea._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(le,"<$1></$2>")+e[2];
d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Db(this,b);y(U.createDocumentFragment()).append(this)}else Db(this,b)}function Eb(b){return b.cloneNode(!0)}function Ha(b){hc(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ha(b[a])}function ic(b,a,c,d){if(B(d))throw Bb("offargs");var e=la(b,"events");la(b,"handle")&&(E(a)?q(e,
function(a,c){Fb(b,c,a);delete e[c]}):q(a.split(" "),function(a){E(c)?(Fb(b,a,e[a]),delete e[a]):Oa(e[a]||[],c)}))}function hc(b,a){var c=b[gb],d=Ua[c];d&&(a?delete Ua[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),ic(b)),delete Ua[c],b[gb]=s))}function la(b,a,c){var d=b[gb],d=Ua[d||-1];if(B(c))d||(b[gb]=d=++me,d=Ua[d]={}),d[a]=c;else return d&&d[a]}function jc(b,a,c){var d=la(b,"data"),e=B(c),g=!e&&B(a),f=g&&!X(a);d||f||la(b,"data",d={});if(e)d[a]=c;else if(g){if(f)return d&&d[a];
D(d,a)}else return d}function Gb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function hb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",ca((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+ca(a)+" "," ")))})}function ib(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=ca(a);-1===c.indexOf(" "+a+" ")&&
(c+=a+" ")});b.setAttribute("class",ca(c))}}function Db(b,a){if(a){a=a.nodeName||!B(a.length)||Ca(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function kc(b,a){return jb(b,"$"+(a||"ngController")+"Controller")}function jb(b,a,c){b=y(b);9==b[0].nodeType&&(b=b.find("html"));for(a=M(a)?a:[a];b.length;){for(var d=b[0],e=0,g=a.length;e<g;e++)if((c=b.data(a[e]))!==s)return c;b=y(d.parentNode||11===d.nodeType&&d.host)}}function lc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ha(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}
function mc(b,a){var c=kb[a.toLowerCase()];return c&&nc[b.nodeName]&&c}function ne(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||U);if(E(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var f=Ub(a[e||
c.type]||[]);q(f,function(a){a.call(b,c)});8>=S?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ia(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===s&&(c=b.$$hashKey=bb()):c=b;return a+":"+c}function Va(b){q(b,this.put,this)}function oc(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(oe,
""),c=c.match(pe),q(c[1].split(qe),function(b){b.replace(re,function(b,c,d){a.push(d)})})),b.$inject=a):M(b)?(c=b.length-1,Ra(b[c],"fn"),a=b.slice(0,c)):Ra(b,"fn",!0);return a}function ac(b){function a(a){return function(b,c){if(X(b))q(b,Rb(a));else return a(b,c)}}function c(a,b){Aa(a,"service");if(P(b)||M(b))b=n.instantiate(b);if(!b.$get)throw Wa("pget",a);return m[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,g,h;q(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(w(a))for(c=
Sa(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,g=0,h=d.length;g<h;g++){var f=d[g],l=n.get(f[0]);l[f[1]].apply(l,f[2])}else P(a)?b.push(n.invoke(a)):M(a)?b.push(n.invoke(a)):Ra(a,"module")}catch(m){throw M(a)&&(a=a[a.length-1]),m.message&&(m.stack&&-1==m.stack.indexOf(m.message))&&(m=m.message+"\n"+m.stack),Wa("modulerr",a,m.stack||m.message||m);}}});return b}function g(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===f)throw Wa("cdep",l.join(" <- "));return a[d]}try{return l.unshift(d),
a[d]=f,a[d]=b(d)}catch(e){throw a[d]===f&&delete a[d],e;}finally{l.shift()}}function d(a,b,e){var g=[],h=oc(a),f,l,k;l=0;for(f=h.length;l<f;l++){k=h[l];if("string"!==typeof k)throw Wa("itkn",k);g.push(e&&e.hasOwnProperty(k)?e[k]:c(k))}a.$inject||(a=a[f]);return a.apply(b,g)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(M(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return X(e)||P(e)?e:c},get:c,annotate:oc,has:function(b){return m.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}
var f={},h="Provider",l=[],k=new Va,m={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,aa(b))}),constant:a(function(a,b){Aa(a,"constant");m[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},n=m.$injector=g(m,function(){throw Wa("unpr",l.join(" <- "));}),p={},r=p.$injector=g(p,function(a){a=n.get(a+
h);return r.invoke(a.$get,a)});q(e(b),function(a){r.invoke(a||C)});return r}function Kd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==K(a.nodeName)||(b=a)});return b}function g(){var b=c.hash(),d;b?(d=f.getElementById(b))?d.scrollIntoView():(d=e(f.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var f=a.document;b&&d.$watch(function(){return c.hash()},
function(){d.$evalAsync(g)});return g}]}function ge(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function se(b,a,c,d){function e(a){try{a.apply(null,ya.call(arguments,1))}finally{if(z--,0===z)for(;u.length;)try{u.pop()()}catch(b){c.error(b)}}}function g(a,b){(function T(){q(F,function(a){a()});v=b(T,a)})()}function f(){x=null;J!=h.url()&&(J=h.url(),q(ma,function(a){a(h.url())}))}var h=this,l=a[0],k=b.location,m=b.history,
n=b.setTimeout,p=b.clearTimeout,r={};h.isMock=!1;var z=0,u=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){z++};h.notifyWhenNoOutstandingRequests=function(a){q(F,function(a){a()});0===z?a():u.push(a)};var F=[],v;h.addPollFn=function(a){E(v)&&g(100,n);F.push(a);return a};var J=k.href,A=a.find("base"),x=null;h.url=function(a,c){k!==b.location&&(k=b.location);m!==b.history&&(m=b.history);if(a){if(J!=a)return J=a,d.history?c?m.replaceState(null,"",a):(m.pushState(null,"",
a),A.attr("href",A.attr("href"))):(x=a,c?k.replace(a):k.href=a),h}else return x||k.href.replace(/%27/g,"'")};var ma=[],L=!1;h.onUrlChange=function(a){if(!L){if(d.history)y(b).on("popstate",f);if(d.hashchange)y(b).on("hashchange",f);else h.addPollFn(f);L=!0}ma.push(a);return a};h.baseHref=function(){var a=A.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var Q={},da="",H=h.baseHref();h.cookies=function(a,b){var d,e,g,h;if(a)b===s?l.cookie=escape(a)+"=;path="+H+";expires=Thu, 01 Jan 1970 00:00:00 GMT":
w(b)&&(d=(l.cookie=escape(a)+"="+escape(b)+";path="+H).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(l.cookie!==da)for(da=l.cookie,d=da.split("; "),Q={},g=0;g<d.length;g++)e=d[g],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),Q[a]===s&&(Q[a]=unescape(e.substring(h+1))));return Q}};h.defer=function(a,b){var c;z++;c=n(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};h.defer.cancel=function(a){return r[a]?(delete r[a],
p(a),e(C),!0):!1}}function Md(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new se(b,d,a,c)}]}function Nd(){this.$get=function(){function b(b,d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,g(a.n,a.p),g(a,n),n=a,n.n=null)}function g(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw t("$cacheFactory")("iid",b);var f=0,h=D({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},n=null,p=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});
e(c)}if(!E(b))return a in l||f++,l[a]=b,f>k&&this.remove(p.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);g(b.n,b.p);delete m[a]}delete l[a];f--},removeAll:function(){l={};f=0;m={};n=p=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return D({},h,{size:f})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};
return b}}function ce(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function cc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,g=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f=/^(on[a-z]+|formaction)$/;this.directive=function l(a,e){Aa(a,"directive");w(a)?(xb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,g){try{var f=b.invoke(c);P(f)?f={compile:aa(f)}:!f.compile&&f.link&&(f.compile=
aa(f.link));f.priority=f.priority||0;f.index=g;f.name=f.name||a;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(l){d(l)}});return e}])),c[a].push(e)):q(a,Rb(l));return this};this.aHrefSanitizationWhitelist=function(b){return B(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate",
"$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,m,n,p,r,z,u,F,v,J,A){function x(a,b,c,d,e){a instanceof y||(a=y(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=y(b).wrap("<span></span>").parent()[0])});var g=L(a,b,a,c,d,e);ma(a,"ng-scope");return function(b,c,d){xb(b,"scope");var e=c?Ja.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var f=e.length;d<f;d++){var l=
e[d].nodeType;1!==l&&9!==l||e.eq(d).data("$scope",b)}c&&c(e,b);g&&g(b,e,e);return e}}function ma(a,b){try{a.addClass(b)}catch(c){}}function L(a,b,c,d,e,g){function f(a,c,d,e){var g,k,m,r,n,p,z;g=c.length;var I=Array(g);for(n=0;n<g;n++)I[n]=c[n];z=n=0;for(p=l.length;n<p;z++)k=I[z],c=l[n++],g=l[n++],m=y(k),c?(c.scope?(r=a.$new(),m.data("$scope",r)):r=a,(m=c.transclude)||!e&&b?c(g,r,k,d,Q(a,m||b)):c(g,r,k,d,e)):g&&g(a,k.childNodes,s,e)}for(var l=[],k,m,r,n,p=0;p<a.length;p++)k=new Hb,m=da(a[p],[],k,
0===p?d:s,e),(g=m.length?ia(m,a[p],k,b,c,null,[],[],g):null)&&g.scope&&ma(y(a[p]),"ng-scope"),k=g&&g.terminal||!(r=a[p].childNodes)||!r.length?null:L(r,g?g.transclude:b),l.push(g,k),n=n||g||k,g=null;return n?f:null}function Q(a,b){return function(c,d,e){var g=!1;c||(c=a.$new(),g=c.$$transcluded=!0);d=b(c,d,e);if(g)d.on("$destroy",eb(c,c.$destroy));return d}}function da(a,b,c,d,f){var k=c.$attr,l;switch(a.nodeType){case 1:T(b,na(Ka(a).toLowerCase()),"E",d,f);var m,r,n;l=a.attributes;for(var p=0,z=
l&&l.length;p<z;p++){var u=!1,F=!1;m=l[p];if(!S||8<=S||m.specified){r=m.name;n=na(r);W.test(n)&&(r=fb(n.substr(6),"-"));var J=n.replace(/(Start|End)$/,"");n===J+"Start"&&(u=r,F=r.substr(0,r.length-5)+"end",r=r.substr(0,r.length-6));n=na(r.toLowerCase());k[n]=r;c[n]=m=ca(m.value);mc(a,n)&&(c[n]=!0);N(a,b,m,n);T(b,n,"A",d,f,u,F)}}a=a.className;if(w(a)&&""!==a)for(;l=g.exec(a);)n=na(l[2]),T(b,n,"C",d,f)&&(c[n]=ca(l[3])),a=a.substr(l.index+l[0].length);break;case 3:t(b,a.nodeValue);break;case 8:try{if(l=
e.exec(a.nodeValue))n=na(l[1]),T(b,n,"M",d,f)&&(c[n]=ca(l[2]))}catch(x){}}b.sort(E);return b}function H(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return y(d)}function R(a,b,c){return function(d,e,g,f,l){e=H(e[0],b,c);return a(d,e,g,f,l)}}function ia(a,c,d,e,g,f,l,n,p){function u(a,b,c,d){if(a){c&&(a=R(a,c,d));a.require=G.require;if(Q===
G||G.$$isolateScope)a=qc(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=R(b,c,d));b.require=G.require;if(Q===G||G.$$isolateScope)b=qc(b,{isolateScope:!0});n.push(b)}}function F(a,b,c){var d,e="data",g=!1;if(w(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),g=g||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!g)throw ja("ctreq",a,t);}else M(a)&&(d=[],q(a,function(a){d.push(F(a,b,c))}));return d}function J(a,e,g,f,p){function u(a,b){var c;2>arguments.length&&
(b=a,a=s);D&&(c=lb);return p(a,b,c)}var I,x,v,A,R,H,lb={},da;I=c===g?d:Ub(d,new Hb(y(g),d.$attr));x=I.$$element;if(Q){var T=/^\s*([@=&])(\??)\s*(\w*)\s*$/;f=y(g);H=e.$new(!0);ia&&ia===Q.$$originalDirective?f.data("$isolateScope",H):f.data("$isolateScopeNoTemplate",H);ma(f,"ng-isolate-scope");q(Q.scope,function(a,c){var d=a.match(T)||[],g=d[3]||c,f="?"==d[2],d=d[1],l,m,n,p;H.$$isolateBindings[c]=d+g;switch(d){case "@":I.$observe(g,function(a){H[c]=a});I.$$observers[g].$$scope=e;I[g]&&(H[c]=b(I[g])(e));
break;case "=":if(f&&!I[g])break;m=r(I[g]);p=m.literal?xa:function(a,b){return a===b};n=m.assign||function(){l=H[c]=m(e);throw ja("nonassign",I[g],Q.name);};l=H[c]=m(e);H.$watch(function(){var a=m(e);p(a,H[c])||(p(a,l)?n(e,a=H[c]):H[c]=a);return l=a},null,m.literal);break;case "&":m=r(I[g]);H[c]=function(a){return m(e,a)};break;default:throw ja("iscp",Q.name,c,a);}})}da=p&&u;L&&q(L,function(a){var b={$scope:a===Q||a.$$isolateScope?H:e,$element:x,$attrs:I,$transclude:da},c;R=a.controller;"@"==R&&(R=
I[a.name]);c=z(R,b);lb[a.name]=c;D||x.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for(v=l.length;f<v;f++)try{A=l[f],A(A.isolateScope?H:e,x,I,A.require&&F(A.require,x,lb),da)}catch(G){m(G,ha(x))}f=e;Q&&(Q.template||null===Q.templateUrl)&&(f=H);a&&a(f,g.childNodes,s,p);for(f=n.length-1;0<=f;f--)try{A=n[f],A(A.isolateScope?H:e,x,I,A.require&&F(A.require,x,lb),da)}catch(B){m(B,ha(x))}}p=p||{};for(var v=-Number.MAX_VALUE,A,L=p.controllerDirectives,Q=p.newIsolateScopeDirective,
ia=p.templateDirective,T=p.nonTlbTranscludeDirective,E=!1,D=p.hasElementTranscludeDirective,Z=d.$$element=y(c),G,t,V,Xa=e,O,N=0,S=a.length;N<S;N++){G=a[N];var ra=G.$$start,W=G.$$end;ra&&(Z=H(c,ra,W));V=s;if(v>G.priority)break;if(V=G.scope)A=A||G,G.templateUrl||(K("new/isolated scope",Q,G,Z),X(V)&&(Q=G));t=G.name;!G.templateUrl&&G.controller&&(V=G.controller,L=L||{},K("'"+t+"' controller",L[t],G,Z),L[t]=G);if(V=G.transclude)E=!0,G.$$tlb||(K("transclusion",T,G,Z),T=G),"element"==V?(D=!0,v=G.priority,
V=H(c,ra,W),Z=d.$$element=y(U.createComment(" "+t+": "+d[t]+" ")),c=Z[0],mb(g,y(ya.call(V,0)),c),Xa=x(V,e,v,f&&f.name,{nonTlbTranscludeDirective:T})):(V=y(Eb(c)).contents(),Z.empty(),Xa=x(V,e));if(G.template)if(K("template",ia,G,Z),ia=G,V=P(G.template)?G.template(Z,d):G.template,V=Y(V),G.replace){f=G;V=Cb.test(V)?y(V):[];c=V[0];if(1!=V.length||1!==c.nodeType)throw ja("tplrt",t,"");mb(g,Z,c);S={$attr:{}};V=da(c,[],S);var $=a.splice(N+1,a.length-(N+1));Q&&pc(V);a=a.concat(V).concat($);B(d,S);S=a.length}else Z.html(V);
if(G.templateUrl)K("template",ia,G,Z),ia=G,G.replace&&(f=G),J=C(a.splice(N,a.length-N),Z,d,g,Xa,l,n,{controllerDirectives:L,newIsolateScopeDirective:Q,templateDirective:ia,nonTlbTranscludeDirective:T}),S=a.length;else if(G.compile)try{O=G.compile(Z,d,Xa),P(O)?u(null,O,ra,W):O&&u(O.pre,O.post,ra,W)}catch(aa){m(aa,ha(Z))}G.terminal&&(J.terminal=!0,v=Math.max(v,G.priority))}J.scope=A&&!0===A.scope;J.transclude=E&&Xa;p.hasElementTranscludeDirective=D;return J}function pc(a){for(var b=0,c=a.length;b<c;b++)a[b]=
Tb(a[b],{$$isolateScope:!0})}function T(b,e,g,f,k,n,r){if(e===k)return null;k=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var z=0,u=e.length;z<u;z++)try{p=e[z],(f===s||f>p.priority)&&-1!=p.restrict.indexOf(g)&&(n&&(p=Tb(p,{$$start:n,$$end:r})),b.push(p),k=p)}catch(F){m(F)}}return k}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,g){"class"==g?(ma(e,b),a["class"]=(a["class"]?
a["class"]+" ":"")+b):"style"==g?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==g.charAt(0)||a.hasOwnProperty(g)||(a[g]=b,d[g]=c[g])})}function C(a,b,c,d,e,g,f,l){var k=[],m,r,z=b[0],u=a.shift(),F=D({},u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),x=P(u.templateUrl)?u.templateUrl(b,c):u.templateUrl;b.empty();n.get(v.getTrustedResourceUrl(x),{cache:p}).success(function(n){var p,J;n=Y(n);if(u.replace){n=Cb.test(n)?y(n):[];p=n[0];if(1!=n.length||
1!==p.nodeType)throw ja("tplrt",u.name,x);n={$attr:{}};mb(d,b,p);var v=da(p,[],n);X(u.scope)&&pc(v);a=v.concat(a);B(c,n)}else p=z,b.html(n);a.unshift(F);m=ia(a,p,c,e,b,u,g,f,l);q(d,function(a,c){a==p&&(d[c]=b[0])});for(r=L(b[0].childNodes,e);k.length;){n=k.shift();J=k.shift();var A=k.shift(),R=k.shift(),v=b[0];if(J!==z){var H=J.className;l.hasElementTranscludeDirective&&u.replace||(v=Eb(p));mb(A,y(J),v);ma(y(v),H)}J=m.transclude?Q(n,m.transclude):R;m(r,n,v,d,J)}k=null}).error(function(a,b,c,d){throw ja("tpload",
d.url);});return function(a,b,c,d,e){k?(k.push(b),k.push(c),k.push(d),k.push(e)):m(r,b,c,d,e)}}function E(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function K(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ha(d));}function t(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:aa(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);ma(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function O(a,b){if("srcdoc"==
b)return v.HTML;var c=Ka(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return v.RESOURCE_URL}function N(a,c,d,e){var g=b(d,!0);if(g){if("multiple"===e&&"SELECT"===Ka(a))throw ja("selmulti",ha(a));c.push({priority:100,compile:function(){return{pre:function(c,d,l){d=l.$$observers||(l.$$observers={});if(f.test(e))throw ja("nodomevents");if(g=b(l[e],!0,O(a,e)))l[e]=g(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(g,function(a,b){"class"===
e&&a!=b?l.$updateClass(a,b):l.$set(e,a)})}}}})}}function mb(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,l;if(a)for(f=0,l=a.length;f<l;f++)if(a[f]==d){a[f++]=c;l=f+e-1;for(var k=a.length;f<k;f++,l++)l<k?a[f]=a[l]:delete a[f];a.length-=e-1;break}g&&g.replaceChild(c,d);a=U.createDocumentFragment();a.appendChild(d);c[y.expando]=d[y.expando];d=1;for(e=b.length;d<e;d++)g=b[d],y(g).remove(),a.appendChild(g),delete b[d];b[0]=c;b.length=1}function qc(a,b){return D(function(){return a.apply(null,arguments)},
a,b)}var Hb=function(a,b){this.$$element=a;this.$attr=b||{}};Hb.prototype={$normalize:na,$addClass:function(a){a&&0<a.length&&J.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&J.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=rc(a,b),d=rc(b,a);0===c.length?J.removeClass(this.$$element,d):0===d.length?J.addClass(this.$$element,c):J.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=mc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=
d:(d=this.$attr[a])||(this.$attr[a]=d=fb(a,"-"));e=Ka(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=A(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){m(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);u.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var Z=b.startSymbol(),ra=b.endSymbol(),Y="{{"==Z||"}}"==ra?
Da:function(a){return a.replace(/\{\{/g,Z).replace(/}}/g,ra)},W=/^ngAttr[A-Z]/;return x}]}function na(b){return Ta(b.replace(te,""))}function rc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),g=0;a:for(;g<d.length;g++){for(var f=d[g],h=0;h<e.length;h++)if(f==e[h])continue a;c+=(0<c.length?" ":"")+f}return c}function Od(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Aa(a,"controller");X(a)?D(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,g){var f,
h,l;w(e)&&(f=e.match(a),h=f[1],l=f[3],e=b.hasOwnProperty(h)?b[h]:bc(g.$scope,h,!0)||bc(d,h,!0),Ra(e,h,!0));f=c.instantiate(e,g);if(l){if(!g||"object"!=typeof g.$scope)throw t("$controller")("noscp",h||e.name,l);g.$scope[l]=f}return f}}]}function Pd(){this.$get=["$window",function(b){return y(b.document)}]}function Qd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function sc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=K(ca(b.substr(0,
e)));d=ca(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function tc(b){var a=X(b)?b:s;return function(c){a||(a=sc(b));return c?a[K(c)]||null:a}}function uc(b,a,c){if(P(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function Td(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){w(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Wb(d)));return d}],transformRequest:[function(a){return X(a)&&
"[object File]"!==wa.call(a)&&"[object Blob]"!==wa.call(a)?qa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ba(d),put:ba(d),patch:ba(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],f=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function r(a){function c(a){var b=D({},a,{data:uc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?
b:n.reject(b)}var d={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},g=function(a){function b(a){var c;q(a,function(b,d){P(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=D({},a.headers),g,f,c=D({},c.common,c[K(a.method)]);b(c);b(d);a:for(g in c){a=K(g);for(f in d)if(K(f)===a)continue a;d[g]=c[g]}return d}(a);D(d,a);d.headers=g;d.method=Fa(d.method);(a=Ib(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(g[d.xsrfHeaderName||e.xsrfHeaderName]=
a);var f=[function(a){g=a.headers;var b=uc(a.data,tc(g),a.transformRequest);E(a.data)&&q(g,function(a,b){"content-type"===K(b)&&delete g[b]});E(a.withCredentials)&&!E(e.withCredentials)&&(a.withCredentials=e.withCredentials);return z(a,b,g).then(c,c)},s],h=n.when(d);for(q(v,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),h=h.then(a,k)}h.success=function(a){h.then(function(b){a(b.data,
b.status,b.headers,d)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,d)});return h};return h}function z(b,c,g){function f(a,b,c,e){v&&(200<=a&&300>a?v.put(s,[a,b,sc(c),e]):v.remove(s));l(b,a,c,e);d.$$phase||d.$apply()}function l(a,c,d,e){c=Math.max(c,0);(200<=c&&300>c?p.resolve:p.reject)({data:a,status:c,headers:tc(d),config:b,statusText:e})}function k(){var a=db(r.pendingRequests,b);-1!==a&&r.pendingRequests.splice(a,1)}var p=n.defer(),z=p.promise,v,q,s=u(b.url,
b.params);r.pendingRequests.push(b);z.then(k,k);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(v=X(b.cache)?b.cache:X(e.cache)?e.cache:F);if(v)if(q=v.get(s),B(q)){if(q.then)return q.then(k,k),q;M(q)?l(q[1],q[0],ba(q[2]),q[3]):l(q,200,{},"OK")}else v.put(s,z);E(q)&&a(b.method,s,c,f,g,b.timeout,b.withCredentials,b.responseType);return z}function u(a,b){if(!b)return a;var c=[];Sc(b,function(a,b){null===a||E(a)||(M(a)||(a=[a]),q(a,function(a){X(a)&&(a=qa(a));c.push(za(b)+"="+za(a))}))});0<c.length&&
(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var F=c("$http"),v=[];q(g,function(a){v.unshift(w(a)?p.get(a):p.invoke(a))});q(f,function(a,b){var c=w(a)?p.get(a):p.invoke(a);v.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});r.pendingRequests=[];(function(a){q(arguments,function(a){r[a]=function(b,c){return r(D(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){r[a]=function(b,c,d){return r(D(d||
{},{method:a,url:b,data:c}))}})})("post","put");r.defaults=e;return r}]}function ue(b){if(8>=S&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!O.XMLHttpRequest))return new O.ActiveXObject("Microsoft.XMLHTTP");if(O.XMLHttpRequest)return new O.XMLHttpRequest;throw t("$httpBackend")("noxhr");}function Ud(){this.$get=["$browser","$window","$document",function(b,a,c){return ve(b,ue,b.defer,a.angular.callbacks,c[0])}]}function ve(b,a,c,d,e){function g(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=
c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;S&&8>=S?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=function(){d()};e.body.appendChild(c);return d}var f=-1;return function(e,l,k,m,n,p,r,z){function u(){v=f;A&&A();x&&x.abort()}function F(a,d,e,g,f){L&&c.cancel(L);A=x=null;0===d&&(d=e?200:"file"==sa(l).protocol?404:0);a(1223===d?204:d,e,g,f||"");b.$$completeOutstandingRequest(C)}var v;b.$$incOutstandingRequestCount();
l=l||b.url();if("jsonp"==K(e)){var J="_"+(d.counter++).toString(36);d[J]=function(a){d[J].data=a};var A=g(l.replace("JSON_CALLBACK","angular.callbacks."+J),function(){d[J].data?F(m,200,d[J].data):F(m,v||-2);d[J]=Ea.noop})}else{var x=a(e);x.open(e,l,!0);q(n,function(a,b){B(a)&&x.setRequestHeader(b,a)});x.onreadystatechange=function(){if(x&&4==x.readyState){var a=null,b=null;v!==f&&(a=x.getAllResponseHeaders(),b="response"in x?x.response:x.responseText);F(m,v||x.status,b,a,x.statusText||"")}};r&&(x.withCredentials=
!0);if(z)try{x.responseType=z}catch(s){if("json"!==z)throw s;}x.send(k||null)}if(0<p)var L=c(u,p);else p&&p.then&&p.then(u)}}function Rd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function g(g,k,m){for(var n,p,r=0,z=[],u=g.length,F=!1,v=[];r<u;)-1!=(n=g.indexOf(b,r))&&-1!=(p=g.indexOf(a,n+f))?(r!=n&&z.push(g.substring(r,n)),z.push(r=c(F=g.substring(n+f,p))),
r.exp=F,r=p+h,F=!0):(r!=u&&z.push(g.substring(r)),r=u);(u=z.length)||(z.push(""),u=1);if(m&&1<z.length)throw vc("noconcat",g);if(!k||F)return v.length=u,r=function(a){try{for(var b=0,c=u,f;b<c;b++)"function"==typeof(f=z[b])&&(f=f(a),f=m?e.getTrusted(m,f):e.valueOf(f),null===f||E(f)?f="":"string"!=typeof f&&(f=qa(f))),v[b]=f;return v.join("")}catch(h){a=vc("interr",g,h.toString()),d(a)}},r.exp=g,r.parts=z,r}var f=b.length,h=a.length;g.startSymbol=function(){return b};g.endSymbol=function(){return a};
return g}]}function Sd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,f,h,l){var k=a.setInterval,m=a.clearInterval,n=c.defer(),p=n.promise,r=0,z=B(l)&&!l;h=B(h)?h:0;p.then(null,null,d);p.$$intervalId=k(function(){n.notify(r++);0<h&&r>=h&&(n.resolve(r),m(p.$$intervalId),delete e[p.$$intervalId]);z||b.$apply()},f);e[p.$$intervalId]=n;return p}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],
!0):!1};return d}]}function ad(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function wc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=wb(b[a]);return b.join("/")}function xc(b,a,c){b=sa(b,c);a.$$protocol=
b.protocol;a.$$host=b.hostname;a.$$port=Y(b.port)||we[b.protocol]||null}function yc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=sa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=Yb(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function oa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ya(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Jb(b){return b.substr(0,
Ya(b).lastIndexOf("/")+1)}function zc(b,a){this.$$html5=!0;a=a||"";var c=Jb(b);xc(b,this,b);this.$$parse=function(a){var e=oa(c,a);if(!w(e))throw Kb("ipthprfx",a,c);yc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Zb(this.$$search),b=this.$$hash?"#"+wb(this.$$hash):"";this.$$url=wc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=oa(b,d))!==s)return d=e,(e=oa(a,e))!==s?c+(oa("/",e)||e):b+d;if((e=oa(c,
d))!==s)return c+e;if(c==d+"/")return c}}function Lb(b,a){var c=Jb(b);xc(b,this,b);this.$$parse=function(d){var e=oa(b,d)||oa(c,d),e="#"==e.charAt(0)?oa(a,e):this.$$html5?e:"";if(!w(e))throw Kb("ihshprfx",d,a);yc(e,this,b);d=this.$$path;var g=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));g.exec(e)||(d=(e=g.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Zb(this.$$search),e=this.$$hash?"#"+wb(this.$$hash):"";this.$$url=wc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=
b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Ya(b)==Ya(a))return a}}function Ac(b,a){this.$$html5=!0;Lb.apply(this,arguments);var c=Jb(b);this.$$rewrite=function(d){var e;if(b==Ya(d))return d;if(e=oa(c,d))return b+a+e;if(c===d+"/")return c}}function nb(b){return function(){return this[b]}}function Bc(b,a){return function(c){if(E(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Vd(){var b="",a=!1;this.hashPrefix=function(a){return B(a)?(b=a,this):b};this.html5Mode=
function(b){return B(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function f(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,l=d.baseHref(),k=d.url();a?(l=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(l||"/"),e=e.history?zc:Ac):(l=Ya(k),e=Lb);h=new e(l,"#"+b);h.$$parse(h.$$rewrite(k));g.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=y(a.target);"a"!==K(b[0].nodeName);)if(b[0]===g[0]||!(b=b.parent())[0])return;
var e=b.prop("href");X(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=sa(e.animVal).href);var f=h.$$rewrite(e);e&&(!b.attr("target")&&f&&!a.isDefaultPrevented())&&(a.preventDefault(),f!=d.url()&&(h.$$parse(f),c.$apply(),O.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):f(b)}),c.$$phase||
c.$digest())});var m=0;c.$watch(function(){var a=d.url(),b=h.$$replace;m&&a==h.absUrl()||(m++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),f(a))}));h.$$replace=!1;return m});return h}]}function Wd(){var b=!0,a=this;this.debugEnabled=function(a){return B(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:
a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||C;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function fa(b,a){if("constructor"===b)throw Ba("isecfld",a);return b}function Za(b,
a){if(b){if(b.constructor===b)throw Ba("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw Ba("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw Ba("isecdom",a);}return b}function ob(b,a,c,d,e){e=e||{};a=a.split(".");for(var g,f=0;1<a.length;f++){g=fa(a.shift(),d);var h=b[g];h||(h={},b[g]=h);b=h;b.then&&e.unwrapPromises&&(ta(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}g=fa(a.shift(),d);return b[g]=c}function Cc(b,
a,c,d,e,g,f){fa(b,g);fa(a,g);fa(c,g);fa(d,g);fa(e,g);return f.unwrapPromises?function(f,l){var k=l&&l.hasOwnProperty(b)?l:f,m;if(null==k)return k;(k=k[b])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!a)return k;if(null==k)return s;(k=k[a])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return s;(k=k[c])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!d)return k;if(null==
k)return s;(k=k[d])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!e)return k;if(null==k)return s;(k=k[e])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);return k}:function(g,f){var k=f&&f.hasOwnProperty(b)?f:g;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return s;k=k[a];if(!c)return k;if(null==k)return s;k=k[c];if(!d)return k;if(null==k)return s;k=k[d];return e?null==k?s:k=k[e]:k}}function xe(b,a){fa(b,a);return function(a,
d){return null==a?s:(d&&d.hasOwnProperty(b)?d:a)[b]}}function ye(b,a,c){fa(b,c);fa(a,c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?s:c[a]}}function Dc(b,a,c){if(Mb.hasOwnProperty(b))return Mb[b];var d=b.split("."),e=d.length,g;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)g=6>e?Cc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,g){var f=0,h;do h=Cc(d[f++],d[f++],d[f++],d[f++],d[f++],c,a)(b,g),g=s,b=h;while(f<e);return h};else{var f="var p;\n";
q(d,function(b,d){fa(b,c);f+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var f=f+"return s;",h=new Function("s","k","pw",f);h.toString=aa(f);g=a.unwrapPromises?function(a,b){return h(a,b,ta)}:h}else g=ye(d[0],d[1],c);else g=xe(d[0],c);"hasOwnProperty"!==
b&&(Mb[b]=g);return g}function Xd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return B(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return B(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;ta=function(b){a.logPromiseWarnings&&!Ec.hasOwnProperty(b)&&(Ec[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};
return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Nb(a);e=(new $a(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return C}}}]}function Zd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return ze(function(a){b.$evalAsync(a)},a)}]}function ze(b,a){function c(a){return a}function d(a){return f(a)}var e=function(){var f=[],k,m;return m={resolve:function(a){if(f){var c=f;f=s;k=g(a);c.length&&b(function(){for(var a,
b=0,d=c.length;b<d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){m.resolve(h(a))},notify:function(a){if(f){var c=f;f.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,g,h){var m=e(),u=function(d){try{m.resolve((P(b)?b:c)(d))}catch(e){m.reject(e),a(e)}},F=function(b){try{m.resolve((P(g)?g:d)(b))}catch(c){m.reject(c),a(c)}},v=function(b){try{m.notify((P(h)?h:c)(b))}catch(d){a(d)}};f?f.push([u,F,v]):k.then(u,F,v);return m.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,g){var f=null;try{f=(a||c)()}catch(h){return b(h,!1)}return f&&P(f.then)?f.then(function(){return b(e,g)},function(a){return b(a,!1)}):b(e,g)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(a){return a&&P(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},f=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(g,
f){var h=e();b(function(){try{h.resolve((P(f)?f:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:f,when:function(h,k,m,n){var p=e(),r,z=function(b){try{return(P(k)?k:c)(b)}catch(d){return a(d),f(d)}},u=function(b){try{return(P(m)?m:d)(b)}catch(c){return a(c),f(c)}},F=function(b){try{return(P(n)?n:c)(b)}catch(d){a(d)}};b(function(){g(h).then(function(a){r||(r=!0,p.resolve(g(a).then(z,u,F)))},function(a){r||(r=!0,p.resolve(u(a)))},function(a){r||p.notify(F(a))})});return p.promise},
all:function(a){var b=e(),c=0,d=M(a)?[]:{};q(a,function(a,e){c++;g(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function fe(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,g=e?
function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};g.supported=e;return g}]}function Yd(){var b=10,a=t("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,g,f){function h(){this.$id=bb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;
this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function l(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function k(a,b){var c=g(a);Ra(c,b);return c}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=
this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=bb());a["this"]=a;a.$$listeners={};a.$$listenerCount={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),g=this.$$watchers,f={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!P(b)){var h=k(b||C,"listener");f.fn=function(a,
b,c){h(c)}}if("string"==typeof a&&e.constant){var l=f.fn;f.fn=function(a,b,c){l.call(this,a,b,c);Oa(g,f)}}g||(g=this.$$watchers=[]);g.unshift(f);return function(){Oa(g,f);c=null}},$watchCollection:function(a,b){var c=this,d,e,f,h=1<b.length,l=0,k=g(a),m=[],n={},p=!0,q=0;return this.$watch(function(){d=k(c);var a,b;if(X(d))if(ab(d))for(e!==m&&(e=m,q=e.length=0,l++),a=d.length,q!==a&&(l++,e.length=q=a),b=0;b<a;b++)e[b]!==e[b]&&d[b]!==d[b]||e[b]===d[b]||(l++,e[b]=d[b]);else{e!==n&&(e=n={},q=0,l++);a=
0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==d[b]&&(l++,e[b]=d[b]):(q++,e[b]=d[b],l++));if(q>a)for(b in l++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(q--,delete e[b])}else e!==d&&(e=d,l++);return l},function(){p?(p=!1,b(d,d,c)):b(d,f,c);if(h)if(X(d))if(ab(d)){f=Array(d.length);for(var a=0;a<d.length;a++)f[a]=d[a]}else for(a in f={},d)Fc.call(d,a)&&(f[a]=d[a]);else f=d})},$digest:function(){var d,g,f,h,k=this.$$asyncQueue,m=this.$$postDigestQueue,q,x,s=b,L,Q=[],y,H,R;l("$digest");
c=null;do{x=!1;for(L=this;k.length;){try{R=k.shift(),R.scope.$eval(R.expression)}catch(B){p.$$phase=null,e(B)}c=null}a:do{if(h=L.$$watchers)for(q=h.length;q--;)try{if(d=h[q])if((g=d.get(L))!==(f=d.last)&&!(d.eq?xa(g,f):"number"==typeof g&&"number"==typeof f&&isNaN(g)&&isNaN(f)))x=!0,c=d,d.last=d.eq?ba(g):g,d.fn(g,f===n?g:f,L),5>s&&(y=4-s,Q[y]||(Q[y]=[]),H=P(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,H+="; newVal: "+qa(g)+"; oldVal: "+qa(f),Q[y].push(H));else if(d===c){x=!1;break a}}catch(w){p.$$phase=
null,e(w)}if(!(h=L.$$childHead||L!==this&&L.$$nextSibling))for(;L!==this&&!(h=L.$$nextSibling);)L=L.$parent}while(L=h);if((x||k.length)&&!s--)throw p.$$phase=null,a("infdig",b,qa(Q));}while(x||k.length);for(p.$$phase=null;m.length;)try{m.shift()()}catch(T){e(T)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==p&&(q(this.$$listenerCount,eb(null,m,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&
(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=C,this.$on=this.$watch=function(){return C})}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){p.$$phase||
p.$$asyncQueue.length||f.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return l("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);
var e=this;return function(){c[db(c,b)]=null;m(e,1,a)}},$emit:function(a,b){var c=[],d,g=this,f=!1,h={name:a,targetScope:g,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=[h].concat(ya.call(arguments,1)),k,m;do{d=g.$$listeners[a]||c;h.currentScope=g;k=0;for(m=d.length;k<m;k++)if(d[k])try{d[k].apply(null,l)}catch(n){e(n)}else d.splice(k,1),k--,m--;if(f)break;g=g.$parent}while(g);return h},$broadcast:function(a,b){for(var c=this,d=this,g={name:a,
targetScope:this,preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},f=[g].concat(ya.call(arguments,1)),h,k;c=d;){g.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return g}};var p=new h;return p}]}function bd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;
this.aHrefSanitizationWhitelist=function(a){return B(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,g;if(!S||8<=S)if(g=sa(c).href,""!==g&&!g.match(e))return"unsafe:"+g;return c}}}function Ae(b){if("self"===b)return b;if(w(b)){if(-1<b.indexOf("***"))throw ua("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+
b+"$")}if(cb(b))return RegExp("^"+b.source+"$");throw ua("imatcher");}function Gc(b){var a=[];B(b)&&q(b,function(b){a.push(Ae(b))});return a}function ae(){this.SCE_CONTEXTS=ga;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Gc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Gc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=
function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ua("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var g=d(),f={};f[ga.HTML]=d(g);f[ga.CSS]=d(g);f[ga.URL]=d(g);f[ga.JS]=d(g);f[ga.RESOURCE_URL]=d(f[ga.URL]);return{trustAs:function(a,b){var c=f.hasOwnProperty(a)?f[a]:null;if(!c)throw ua("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw ua("itype",a);return new c(b)},
getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var g=f.hasOwnProperty(c)?f[c]:null;if(g&&d instanceof g)return d.$$unwrapTrustedValue();if(c===ga.RESOURCE_URL){var g=sa(d.toString()),m,n,p=!1;m=0;for(n=b.length;m<n;m++)if("self"===b[m]?Ib(g):b[m].exec(g.href)){p=!0;break}if(p)for(m=0,n=a.length;m<n;m++)if("self"===a[m]?Ib(g):a[m].exec(g.href)){p=!1;break}if(p)return d;throw ua("insecurl",d.toString());}if(c===ga.HTML)return e(d);throw ua("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function $d(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ua("iequirks");var e=ba(ga);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Da);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,
d(a,c))}};var g=e.parseAs,f=e.getTrusted,h=e.trustAs;q(ga,function(a,b){var c=K(b);e[Ta("parse_as_"+c)]=function(b){return g(a,b)};e[Ta("get_trusted_"+c)]=function(b){return f(a,b)};e[Ta("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function be(){this.$get=["$window","$document",function(b,a){var c={},d=Y((/android (\d+)/.exec(K((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),g=a[0]||{},f=g.documentMode,h,l=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=g.body&&g.body.style,
m=!1,n=!1;if(k){for(var p in k)if(m=l.exec(p)){h=m[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");m=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in k);!d||m&&n||(m=w(g.body.style.webkitTransition),n=w(g.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!f||7<f),hasEvent:function(a){if("input"==a&&9==S)return!1;if(E(c[a])){var b=g.createElement("div");c[a]="on"+
a in b}return c[a]},csp:Vb(),vendorPrefix:h,transitions:m,animations:n,android:d,msie:S,msieDocumentMode:f}}]}function de(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,l){var k=c.defer(),m=k.promise,n=B(l)&&!l;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete g[m.$$timeoutId]}n||b.$apply()},h);m.$$timeoutId=h;g[h]=k;return m}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),
delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function sa(b,a){var c=b;S&&(W.setAttribute("href",c),c=W.href);W.setAttribute("href",c);return{href:W.href,protocol:W.protocol?W.protocol.replace(/:$/,""):"",host:W.host,search:W.search?W.search.replace(/^\?/,""):"",hash:W.hash?W.hash.replace(/^#/,""):"",hostname:W.hostname,port:W.port,pathname:"/"===W.pathname.charAt(0)?W.pathname:"/"+W.pathname}}function Ib(b){b=w(b)?sa(b):b;return b.protocol===Hc.protocol&&b.host===Hc.host}
function ee(){this.$get=aa(O)}function gc(b){function a(d,e){if(X(d)){var g={};q(d,function(b,c){g[c]=a(c,b)});return g}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Ic);a("date",Jc);a("filter",Be);a("json",Ce);a("limitTo",De);a("lowercase",Ee);a("number",Kc);a("orderBy",Lc);a("uppercase",Fe)}function Be(){return function(b,a,c){if(!M(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;
return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ea.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Fc.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var g=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!g(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,
b);default:for(var d in a)if("$"!==d.charAt(0)&&g(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(g(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var f in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return g("$"==b?c:c&&c[b],a[b])})})(f);break;case "function":e.push(a);break;default:return b}d=[];for(f=0;f<b.length;f++){var h=b[f];e.check(h)&&d.push(h)}return d}}function Ic(b){var a=
b.NUMBER_FORMATS;return function(b,d){E(d)&&(d=a.CURRENCY_SYM);return Mc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Kc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Mc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Mc(b,a,c,d,e){if(null==b||!isFinite(b)||X(b))return"";var g=0>b;b=Math.abs(b);var f=b+"",h="",l=[],k=!1;if(-1!==f.indexOf("e")){var m=f.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?f="0":(h=f,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));
else{f=(f.split(Nc)[1]||"").length;E(e)&&(e=Math.min(Math.max(a.minFrac,f),a.maxFrac));f=Math.pow(10,e);b=Math.round(b*f)/f;b=(""+b).split(Nc);f=b[0];b=b[1]||"";var m=0,n=a.lgSize,p=a.gSize;if(f.length>=n+p)for(m=f.length-n,k=0;k<m;k++)0===(m-k)%p&&0!==k&&(h+=c),h+=f.charAt(k);for(k=m;k<f.length;k++)0===(f.length-k)%n&&0!==k&&(h+=c),h+=f.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}l.push(g?a.negPre:a.posPre);l.push(h);l.push(g?a.negSuf:a.posSuf);return l.join("")}function Ob(b,
a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ob(e,a,d)}}function pb(b,a){return function(c,d){var e=c["get"+b](),g=Fa(a?"SHORT"+b:b);return d[g][e]}}function Jc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var g=0,f=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(g=Y(b[9]+b[10]),f=Y(b[9]+b[11]));
h.call(a,Y(b[1]),Y(b[2])-1,Y(b[3]));g=Y(b[4]||0)-g;f=Y(b[5]||0)-f;h=Y(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,g,f,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",f=[],h,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;w(c)&&(c=Ge.test(c)?Y(c):a(c));vb(c)&&(c=new Date(c));if(!Na(c))return c;for(;e;)(l=He.exec(e))?(f=f.concat(ya.call(l,1)),e=f.pop()):(f.push(e),e=null);q(f,function(a){h=
Ie[a];g+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ce(){return function(b){return qa(b,!0)}}function De(){return function(b,a){if(!M(b)&&!w(b))return b;a=Y(a);if(w(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Lc(b){return function(a,c,d){function e(a,b){return Qa(b)?function(b,c){return a(c,b)}:a}
function g(a,b){var c=typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!M(a)||!c)return a;c=M(c)?c:[c];c=Uc(c,function(a){var c=!1,d=a||Da;if(w(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var f=d();return e(function(a,b){return g(a[f],b[f])},c)}}return e(function(a,b){return g(d(a),d(b))},c)});for(var f=[],h=0;h<a.length;h++)f.push(a[h]);return f.sort(e(function(a,b){for(var d=
0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function va(b){P(b)&&(b={link:b});b.restrict=b.restrict||"AC";return aa(b)}function Oc(b,a,c,d){function e(a,c){c=c?"-"+fb(c,"-"):"";d.removeClass(b,(a?qb:rb)+c);d.addClass(b,(a?rb:qb)+c)}var g=this,f=b.parent().controller("form")||sb,h=0,l=g.$error={},k=[];g.$name=a.name||a.ngForm;g.$dirty=!1;g.$pristine=!0;g.$valid=!0;g.$invalid=!1;f.$addControl(g);b.addClass(La);e(!0);g.$addControl=function(a){Aa(a.$name,"input");k.push(a);a.$name&&
(g[a.$name]=a)};g.$removeControl=function(a){a.$name&&g[a.$name]===a&&delete g[a.$name];q(l,function(b,c){g.$setValidity(c,!0,a)});Oa(k,a)};g.$setValidity=function(a,b,c){var d=l[a];if(b)d&&(Oa(d,c),d.length||(h--,h||(e(b),g.$valid=!0,g.$invalid=!1),l[a]=!1,e(!0,a),f.$setValidity(a,!0,g)));else{h||e(b);if(d){if(-1!=db(d,c))return}else l[a]=d=[],h++,e(!1,a),f.$setValidity(a,!1,g);d.push(c);g.$valid=!1;g.$invalid=!0}};g.$setDirty=function(){d.removeClass(b,La);d.addClass(b,tb);g.$dirty=!0;g.$pristine=
!1;f.$setDirty()};g.$setPristine=function(){d.removeClass(b,tb);d.addClass(b,La);g.$dirty=!1;g.$pristine=!0;q(k,function(a){a.$setPristine()})}}function pa(b,a,c,d){b.$setValidity(a,c);return c?d:s}function Je(b,a,c){var d=c.prop("validity");X(d)&&b.$parsers.push(function(c){if(b.$error[a]||!(d.badInput||d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)})}function ub(b,a,c,d,e,g){var f=a.prop("validity");if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});
a.on("compositionend",function(){h=!1;l()})}var l=function(){if(!h){var e=a.val();Qa(c.ngTrim||"T")&&(e=ca(e));if(d.$viewValue!==e||f&&""===e&&!f.valueMissing)b.$$phase?d.$setViewValue(e):b.$apply(function(){d.$setViewValue(e)})}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(){k||(k=g.defer(function(){l();k=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||m()});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?
"":d.$viewValue)};var n=c.ngPattern;n&&((e=n.match(/^\/(.*)\/([gim]*)$/))?(n=RegExp(e[1],e[2]),e=function(a){return pa(d,"pattern",d.$isEmpty(a)||n.test(a),a)}):e=function(c){var e=b.$eval(n);if(!e||!e.test)throw t("ngPattern")("noregexp",n,e,ha(a));return pa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var p=Y(c.ngMinlength);e=function(a){return pa(d,"minlength",d.$isEmpty(a)||a.length>=p,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var r=
Y(c.ngMaxlength);e=function(a){return pa(d,"maxlength",d.$isEmpty(a)||a.length<=r,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Pb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!M(a)){if(w(a))return a.split(" ");if(X(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b}}return a}return{restrict:"AC",link:function(g,f,h){function l(a,b){var c=
f.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});f.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||g.$index%2===a){var k=e(b||[]);if(!m){var r=l(k,1);h.$addClass(r)}else if(!xa(b,m)){var q=e(m),r=d(k,q),k=d(q,k),k=l(k,-1),r=l(r,1);0===r.length?c.removeClass(f,k):0===k.length?c.addClass(f,r):c.setClass(f,r,k)}}m=ba(b)}var m;g.$watch(h[b],k,!0);h.$observe("class",function(a){k(g.$eval(h[b]))});"ngClass"!==b&&g.$watch("$index",
function(c,d){var f=c&1;if(f!==d&1){var k=e(g.$eval(h[b]));f===a?(f=l(k,1),h.$addClass(f)):(f=l(k,-1),h.$removeClass(f))}})}}}]}var K=function(b){return w(b)?b.toLowerCase():b},Fc=Object.prototype.hasOwnProperty,Fa=function(b){return w(b)?b.toUpperCase():b},S,y,Ga,ya=[].slice,Ke=[].push,wa=Object.prototype.toString,Pa=t("ng"),Ea=O.angular||(O.angular={}),Sa,Ka,ka=["0","0","0"];S=Y((/msie (\d+)/.exec(K(navigator.userAgent))||[])[1]);isNaN(S)&&(S=Y((/trident\/.*; rv:(\d+)/.exec(K(navigator.userAgent))||
[])[1]));C.$inject=[];Da.$inject=[];var ca=function(){return String.prototype.trim?function(b){return w(b)?b.trim():b}:function(b){return w(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ka=9>S?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Fa(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Xc=/[A-Z]/g,$c={full:"1.2.16",major:1,minor:2,dot:16,codeName:"badger-enumeration"},Ua=N.cache={},gb=N.expando="ng-"+(new Date).getTime(),
me=1,Pc=O.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Fb=O.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};N._data=function(b){return this.cache[b[this.expando]]||{}};var he=/([\:\-\_]+(.))/g,ie=/^moz([A-Z])/,Bb=t("jqLite"),je=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Cb=/<|&#?\w+;/,ke=/<([\w:]+)/,le=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ea=
{option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ea.optgroup=ea.option;ea.tbody=ea.tfoot=ea.colgroup=ea.caption=ea.thead;ea.th=ea.td;var Ja=N.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===U.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),N(O).on("load",a))},toString:function(){var b=
[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?y(this[b]):y(this[this.length+b])},length:0,push:Ke,sort:[].sort,splice:[].splice},kb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){kb[K(b)]=b});var nc={};q("input select option textarea button form details".split(" "),function(b){nc[Fa(b)]=!0});q({data:jc,inheritedData:jb,scope:function(b){return y(b).data("$scope")||jb(b.parentNode||b,["$isolateScope","$scope"])},
isolateScope:function(b){return y(b).data("$isolateScope")||y(b).data("$isolateScopeNoTemplate")},controller:kc,injector:function(b){return jb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Gb,css:function(b,a,c){a=Ta(a);if(B(c))b.style[a]=c;else{var d;8>=S&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=S&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=K(a);if(kb[d])if(B(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));
else return b[a]||(b.attributes.getNamedItem(a)||C).specified?d:s;else if(B(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(B(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(E(d))return e?b[e]:"";b[e]=d}var a=[];9>S?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(E(a)){if("SELECT"===Ka(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&
c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(E(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ha(d[c]);b.innerHTML=a},empty:lc},function(b,a){N.prototype[a]=function(a,d){var e,g;if(b!==lc&&(2==b.length&&b!==Gb&&b!==kc?a:d)===s){if(X(a)){for(e=0;e<this.length;e++)if(b===jc)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}e=b.$dv;g=e===s?Math.min(this.length,1):this.length;for(var f=0;f<g;f++){var h=b(this[f],a,d);e=
e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:hc,dealoc:Ha,on:function a(c,d,e,g){if(B(g))throw Bb("onargs");var f=la(c,"events"),h=la(c,"handle");f||la(c,"events",f={});h||la(c,"handle",h=ne(c,f));q(d.split(" "),function(d){var g=f[d];if(!g){if("mouseenter"==d||"mouseleave"==d){var m=U.body.contains||U.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):
a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};f[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||m(this,c))||h(a,d)})}else Pc(c,d,h),f[d]=[];g=f[d]}g.push(e)})},off:ic,one:function(a,c,d){a=y(a);a.on(c,function g(){a.off(c,d);a.off(c,g)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ha(a);q(new N(c),function(c){d?e.insertBefore(c,d.nextSibling):
e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){q(new N(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new N(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=y(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ha(a);
var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new N(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:ib,removeClass:hb,toggleClass:function(a,c,d){c&&q(c.split(" "),function(c){var g=d;E(g)&&(g=!Gb(a,c));(g?ib:hb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?
a.getElementsByTagName(c):[]},clone:Eb,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];d=d||[];var e=[{preventDefault:C,stopPropagation:C}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){N.prototype[c]=function(c,e,g){for(var f,h=0;h<this.length;h++)E(f)?(f=a(this[h],c,e,g),B(f)&&(f=y(f))):Db(f,a(this[h],c,e,g));return B(f)?f:this};N.prototype.bind=N.prototype.on;N.prototype.unbind=N.prototype.off});Va.prototype={put:function(a,c){this[Ia(a)]=c},get:function(a){return this[Ia(a)]},
remove:function(a){var c=this[a=Ia(a)];delete this[a];return c}};var pe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,qe=/,/,re=/^\s*(_?)(\S+?)\1\s*$/,oe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Wa=t("$injector"),Le=t("$animate"),Ld=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Le("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?
a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,f,h){f?f.after(a):(c&&c[0]||(c=f.parent()),c.append(a));h&&d(h)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,f){c=w(c)?c:M(c)?c.join(" "):"";q(a,function(a){ib(a,c)});f&&d(f)},removeClass:function(a,c,f){c=w(c)?c:M(c)?c.join(" "):"";q(a,function(a){hb(a,c)});f&&d(f)},setClass:function(a,c,f,h){q(a,function(a){ib(a,c);hb(a,
f)});h&&d(h)},enabled:C}}]}],ja=t("$compile");cc.$inject=["$provide","$$sanitizeUriProvider"];var te=/^(x[\:\-_]|data[\:\-_])/i,vc=t("$interpolate"),Me=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,we={http:80,https:443,ftp:21},Kb=t("$location");Ac.prototype=Lb.prototype=zc.prototype={$$html5:!1,$$replace:!1,absUrl:nb("$$absUrl"),url:function(a,c){if(E(a))return this.$$url;var d=Me.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:nb("$$protocol"),
host:nb("$$host"),port:nb("$$port"),path:Bc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(w(a))this.$$search=Yb(a);else if(X(a))this.$$search=a;else throw Kb("isrcharg");break;default:E(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Bc("$$hash",Da),replace:function(){this.$$replace=!0;return this}};var Ba=t("$parse"),Ec={},ta,Ma={"null":function(){return null},"true":function(){return!0},
"false":function(){return!1},undefined:C,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return B(d)?B(e)?d+e:d:B(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(B(d)?d:0)-(B(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":C,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,
c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Ne={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},
Nb=function(a){this.options=a};Nb.prototype={constructor:Nb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));
else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),g=Ma[this.ch],f=Ma[d],h=Ma[e];h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=3):f?(this.tokens.push({index:this.index,text:d,fn:f}),this.index+=2):g?(this.tokens.push({index:this.index,
text:this.ch,fn:g,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===
a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=B(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw Ba("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=
d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,g,f,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;
this.index++}if(e)for(g=this.index;g<this.text.length;){h=this.text.charAt(g);if("("===h){f=c.substr(e-d+1);c=c.substr(0,e-d);this.index=g;break}if(this.isWhitespace(h))g++;else break}d={index:d,text:c};if(Ma.hasOwnProperty(c))d.fn=Ma[c],d.json=Ma[c];else{var l=Dc(c,this.options,this.text);d.fn=D(function(a,c){return l(a,c)},{assign:function(d,e){return ob(d,c,e,a.text,a.options)}})}this.tokens.push(d);f&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:f,json:!1}))},
readString:function(a){var c=this.index;this.index++;for(var d="",e=a,g=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),e=e+f;if(g)"u"===f?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d=(g=Ne[f])?d+g:d+f,g=!1;else if("\\"===f)g=!0;else{if(f===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=
f}this.index++}this.throwError("Unterminated quote",c)}};var $a=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};$a.ZERO=D(function(){return 0},{constant:!0});$a.prototype={constructor:$a,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&
this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?
(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw Ba("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw Ba("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var g=this.tokens[0],f=g.text;if(f===a||f===c||f===d||f===e||!(a||c||d||e))return g}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,
e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return D(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return D(function(e,g){return a(e,g)?c(e,g):d(e,g)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return D(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant})},
statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,g=0;g<a.length;g++){var f=a[g];f&&(e=f(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=
function(a,e,h){h=[h];for(var l=0;l<d.length;l++)h.push(d[l](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,g){return a.assign(d,c(d,g),g)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn($a.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Dc(d,this.options,this.text);return D(function(c,d,h){return e(h||a(c,d))},{assign:function(e,f,h){return ob(a(e,h),d,f,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return D(function(e,g){var f=a(e,g),h=d(e,g),l;if(!f)return s;(f=Za(f[h],c.text))&&(f.then&&c.options.unwrapPromises)&&(l=f,"$$v"in f||(l.$$v=s,l.then(function(a){l.$$v=
a})),f=f.$$v);return f},{assign:function(e,g,f){var h=d(e,f);return Za(a(e,f),c.text)[h]=g}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(g,f){for(var h=[],l=c?c(g,f):g,k=0;k<d.length;k++)h.push(d[k](g,f));k=a(g,f,l)||C;Za(l,e.text);Za(k,e.text);h=k.apply?k.apply(l,h):k(h[0],h[1],h[2],h[3],h[4]);return Za(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return D(function(c,d){for(var f=[],h=0;h<a.length;h++)f.push(a[h](c,d));return f},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return D(function(c,d){for(var e={},l=0;l<
a.length;l++){var k=a[l];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Mb={},ua=t("$sce"),ga={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},W=U.createElement("a"),Hc=sa(O.location.href,!0);gc.$inject=["$provide"];Ic.$inject=["$locale"];Kc.$inject=["$locale"];var Nc=".",Ie={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:pb("Month"),MMM:pb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",
1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:pb("Day"),EEE:pb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ob(Math[0<a?"floor":"ceil"](a/60),2)+Ob(Math.abs(a%60),2))}},He=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Ge=/^\-?\d+$/;Jc.$inject=["$locale"];var Ee=aa(K),Fe=aa(Fa);Lc.$inject=
["$parse"];var cd=aa({restrict:"E",compile:function(a,c){8>=S&&(c.href||c.name||c.$set("href",""),a.append(U.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var g="[object SVGAnimatedString]"===wa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(g)||a.preventDefault()})}}}),zb={};q(kb,function(a,c){if("multiple"!=a){var d=na("ng-"+c);zb[d]=function(){return{priority:100,link:function(a,g,f){a.$watch(f[d],function(a){f.$set(c,!!a)})}}}}});q(["src",
"srcset","href"],function(a){var c=na("ng-"+a);zb[c]=function(){return{priority:99,link:function(d,e,g){var f=a,h=a;"href"===a&&"[object SVGAnimatedString]"===wa.call(e.prop("href"))&&(h="xlinkHref",g.$attr[h]="xlink:href",f=null);g.$observe(c,function(a){a&&(g.$set(h,a),S&&f&&e.prop(f,g[h]))})}}}});var sb={$addControl:C,$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C};Oc.$inject=["$element","$attrs","$scope","$animate"];var Qc=function(a){return["$timeout",function(c){return{name:"form",
restrict:a?"EAC":"E",controller:Oc,compile:function(){return{pre:function(a,e,g,f){if(!g.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Pc(e[0],"submit",h);e.on("$destroy",function(){c(function(){Fb(e[0],"submit",h)},0,!1)})}var l=e.parent().controller("form"),k=g.name||g.ngForm;k&&ob(a,k,f,k);if(l)e.on("$destroy",function(){l.$removeControl(f);k&&ob(a,k,s,k);D(f,sb)})}}}}}]},dd=Qc(),qd=Qc(!0),Oe=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Pe=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,Qe=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Rc={text:ub,number:function(a,c,d,e,g,f){ub(a,c,d,e,g,f);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Qe.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});Je(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return pa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),
e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return pa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return pa(e,"number",e.$isEmpty(a)||vb(a),a)})},url:function(a,c,d,e,g,f){ub(a,c,d,e,g,f);a=function(a){return pa(e,"url",e.$isEmpty(a)||Oe.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,f){ub(a,c,d,e,g,f);a=function(a){return pa(e,"email",e.$isEmpty(a)||Pe.test(a),a)};e.$formatters.push(a);
e.$parsers.push(a)},radio:function(a,c,d,e){E(d.name)&&c.attr("name",bb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,f=d.ngFalseValue;w(g)||(g=!0);w(f)||(f=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==g};
e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:f})},hidden:C,button:C,submit:C,reset:C,file:C},dc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,f){f&&(Rc[K(g.type)]||Rc.text)(d,e,g,f,c,a)}}}],rb="ng-valid",qb="ng-invalid",La="ng-pristine",tb="ng-dirty",Re=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,g,f){function h(a,c){c=c?"-"+fb(c,"-"):"";f.removeClass(e,(a?qb:rb)+c);
f.addClass(e,(a?rb:qb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var l=g(d.ngModel),k=l.assign;if(!k)throw t("ngModel")("nonassign",d.ngModel,ha(e));this.$render=C;this.$isEmpty=function(a){return E(a)||""===a||null===a||a!==a};var m=e.inheritedData("$formController")||sb,n=0,p=this.$error={};e.addClass(La);h(!0);this.$setValidity=function(a,c){p[a]!==
!c&&(c?(p[a]&&n--,n||(h(!0),this.$valid=!0,this.$invalid=!1)):(h(!1),this.$invalid=!0,this.$valid=!1,n++),p[a]=!c,h(c,a),m.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;f.removeClass(e,tb);f.addClass(e,La)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,f.removeClass(e,La),f.addClass(e,tb),m.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,k(a,d),q(this.$viewChangeListeners,
function(a){try{a()}catch(d){c(d)}}))};var r=this;a.$watch(function(){var c=l(a);if(r.$modelValue!==c){var d=r.$formatters,e=d.length;for(r.$modelValue=c;e--;)c=d[e](c);r.$viewValue!==c&&(r.$viewValue=c,r.$render())}return c})}],Fd=function(){return{require:["ngModel","^?form"],controller:Re,link:function(a,c,d,e){var g=e[0],f=e[1]||sb;f.$addControl(g);a.$on("$destroy",function(){f.$removeControl(g)})}}},Hd=aa({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
ec=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},Gd=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!E(a)){var c=[];a&&q(a.split(g),function(a){a&&
c.push(ca(a))});return c}});e.$formatters.push(function(a){return M(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},Se=/^(true|false|\d+)$/,Id=function(){return{priority:100,compile:function(a,c){return Se.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a)})}}}},id=va(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),kd=["$interpolate",
function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],jd=["$sce","$parse",function(a,c){return function(d,e,g){e.addClass("ng-binding").data("$binding",g.ngBindHtml);var f=c(g.ngBindHtml);d.$watch(function(){return(f(d)||"").toString()},function(c){e.html(a.getTrustedHtml(f(d))||"")})}}],ld=Pb("",!0),nd=Pb("Odd",0),md=Pb("Even",1),od=va({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),
pd=[function(){return{scope:!0,controller:"@",priority:500}}],fc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=na("ng-"+a);fc[c]=["$parse",function(d){return{compile:function(e,g){var f=d(g[c]);return function(c,d,e){d.on(K(a),function(a){c.$apply(function(){f(c,{$event:a})})})}}}}]});var sd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",
$$tlb:!0,link:function(c,d,e,g,f){var h,l,k;c.$watch(e.ngIf,function(g){Qa(g)?l||(l=c.$new(),f(l,function(c){c[c.length++]=U.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=yb(h.clone),a.leave(k,function(){k=null}),h=null))})}}}],td=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,g){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ea.noop,compile:function(f,
h){var l=h.ngInclude||h.src,k=h.onload||"",m=h.autoscroll;return function(f,h,q,s,u){var F=0,v,y,A,x=function(){y&&(y.remove(),y=null);v&&(v.$destroy(),v=null);A&&(e.leave(A,function(){y=null}),y=A,A=null)};f.$watch(g.parseAsResourceUrl(l),function(g){var l=function(){!B(m)||m&&!f.$eval(m)||d()},q=++F;g?(a.get(g,{cache:c}).success(function(a){if(q===F){var c=f.$new();s.template=a;a=u(c,function(a){x();e.enter(a,null,h,l)});v=c;A=a;v.$emit("$includeContentLoaded");f.$eval(k)}}).error(function(){q===
F&&x()}),f.$emit("$includeContentRequested")):(x(),s.template=null)})}}}}],Jd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,g){d.html(g.template);a(d.contents())(c)}}}],ud=va({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),vd=va({terminal:!0,priority:1E3}),wd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,f){var h=f.count,l=f.$attr.when&&g.attr(f.$attr.when),k=f.offset||
0,m=e.$eval(l)||{},n={},p=c.startSymbol(),r=c.endSymbol(),s=/^when(Minus)?(.+)$/;q(f,function(a,c){s.test(c)&&(m[K(c.replace("when","").replace("Minus","-"))]=g.attr(f.$attr[c]))});q(m,function(a,e){n[e]=c(a.replace(d,p+h+"-"+k+r))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in m||(c=a.pluralCat(c-k));return n[c](e,g,!0)},function(a){g.text(a)})}}}],xd=["$parse","$animate",function(a,c){var d=t("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,
link:function(e,g,f,h,l){var k=f.ngRepeat,m=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,r,s,u,F,v={$id:Ia};if(!m)throw d("iexp",k);f=m[1];h=m[2];(m=m[3])?(n=a(m),p=function(a,c,d){F&&(v[F]=a);v[u]=c;v.$index=d;return n(e,v)}):(r=function(a,c){return Ia(c)},s=function(a){return a});m=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!m)throw d("iidexp",f);u=m[3]||m[1];F=m[2];var B={};e.$watchCollection(h,function(a){var f,h,m=g[0],n,v={},H,R,w,C,T,t,
E=[];if(ab(a))T=a,n=p||r;else{n=p||s;T=[];for(w in a)a.hasOwnProperty(w)&&"$"!=w.charAt(0)&&T.push(w);T.sort()}H=T.length;h=E.length=T.length;for(f=0;f<h;f++)if(w=a===T?f:T[f],C=a[w],C=n(w,C,f),Aa(C,"`track by` id"),B.hasOwnProperty(C))t=B[C],delete B[C],v[C]=t,E[f]=t;else{if(v.hasOwnProperty(C))throw q(E,function(a){a&&a.scope&&(B[a.id]=a)}),d("dupes",k,C);E[f]={id:C};v[C]=!1}for(w in B)B.hasOwnProperty(w)&&(t=B[w],f=yb(t.clone),c.leave(f),q(f,function(a){a.$$NG_REMOVED=!0}),t.scope.$destroy());
f=0;for(h=T.length;f<h;f++){w=a===T?f:T[f];C=a[w];t=E[f];E[f-1]&&(m=E[f-1].clone[E[f-1].clone.length-1]);if(t.scope){R=t.scope;n=m;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);t.clone[0]!=n&&c.move(yb(t.clone),null,y(m));m=t.clone[t.clone.length-1]}else R=e.$new();R[u]=C;F&&(R[F]=w);R.$index=f;R.$first=0===f;R.$last=f===H-1;R.$middle=!(R.$first||R.$last);R.$odd=!(R.$even=0===(f&1));t.scope||l(R,function(a){a[a.length++]=U.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,y(m));m=a;t.scope=R;t.clone=
a;v[t.id]=t})}B=v})}}}],yd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Qa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],rd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Qa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],zd=va(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ad=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(c,d,e,g){var f,h,l,k=[];c.$watch(e.ngSwitch||e.on,function(d){var n,p=k.length;if(0<p){if(l){for(n=0;n<p;n++)l[n].remove();l=null}l=[];for(n=0;n<p;n++){var r=h[n];k[n].$destroy();l[n]=r;a.leave(r,function(){l.splice(n,1);0===l.length&&(l=null)})}}h=[];k=[];if(f=g.cases["!"+d]||g.cases["?"])c.$eval(e.change),q(f,function(d){var e=c.$new();k.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Bd=va({transclude:"element",priority:800,require:"^ngSwitch",
link:function(a,c,d,e,g){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:g,element:c})}}),Cd=va({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,g){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:g,element:c})}}),Ed=va({link:function(a,c,d,e,g){if(!g)throw t("ngTransclude")("orphan",ha(c));g(function(a){c.empty();c.append(a)})}}),ed=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,
d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Te=t("ngOptions"),Dd=aa({terminal:!0}),fd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:C};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},m=e,n;l.databound=
d.ngModel;l.init=function(a,c,d){m=a;n=d};l.addOption=function(c){Aa(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],m.$viewValue==a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c="? "+Ia(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=C})}],link:function(e,f,h,l){function k(a,
c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(A.parent()&&A.remove(),c.val(a),""===a&&w.prop("selected",!0)):E(a)&&w?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){A.parent()&&A.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new Va(d.$viewValue);q(c.find("option"),function(c){c.selected=B(a.get(c.value))})};a.$watch(function(){xa(e,d.$viewValue)||(e=ba(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=
[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,s,t,z;t=g.$modelValue;z=y(e)||[];var E=n?Qb(z):z,F,I,A;I={};s=!1;var D,H;if(r)if(w&&M(t))for(s=new Va([]),A=0;A<t.length;A++)I[m]=t[A],s.put(w(e,I),t[A]);else s=new Va(t);for(A=0;F=E.length,A<F;A++){k=A;if(n){k=E[A];if("$"===k.charAt(0))continue;I[n]=k}I[m]=z[k];d=p(e,I)||"";(k=a[d])||(k=a[d]=[],c.push(d));r?d=B(s.remove(w?w(e,I):q(e,I))):(w?(d={},d[m]=t,d=
w(e,d)===w(e,I)):d=t===q(e,I),s=s||d);D=l(e,I);D=B(D)?D:"";k.push({id:w?w(e,I):n?E[A]:A,label:D,selected:d})}r||(u||null===t?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));I=0;for(E=c.length;I<E;I++){d=c[I];k=a[d];x.length<=I?(t={element:C.clone().attr("label",d),label:k.label},z=[t],x.push(z),f.append(t.element)):(z=x[I],t=z[0],t.label!=d&&t.element.attr("label",t.label=d));D=null;A=0;for(F=k.length;A<F;A++)s=k[A],(d=z[A+1])?(D=d.element,d.label!==s.label&&
D.text(d.label=s.label),d.id!==s.id&&D.val(d.id=s.id),d.selected!==s.selected&&D.prop("selected",d.selected=s.selected)):(""===s.id&&u?H=u:(H=v.clone()).val(s.id).attr("selected",s.selected).text(s.label),z.push({element:H,label:s.label,id:s.id,selected:s.selected}),D?D.after(H):t.element.append(H),D=H);for(A++;z.length>A;)z.pop().element.remove()}for(;x.length>I;)x.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Te("iexp",t,ha(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=
c(k[2]?k[1]:m),y=c(k[7]),w=k[8]?c(k[8]):null,x=[[{element:f,label:""}]];u&&(a(u)(e),u.removeClass("ng-scope"),u.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=y(e)||[],d={},h,k,l,p,t,v,u;if(r)for(k=[],p=0,v=x.length;p<v;p++)for(a=x[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(w)for(u=0;u<c.length&&(d[m]=c[u],w(e,d)!=h);u++);else d[m]=c[h];k.push(q(e,d))}}else{h=f.val();if("?"==h)k=s;else if(""===h)k=null;else if(w)for(u=0;u<c.length;u++){if(d[m]=
c[u],w(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);1<x[0].length&&x[0][1].id!==h&&(x[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(l[1]){var p=l[0];l=l[1];var r=h.multiple,t=h.ngOptions,u=!1,w,v=y(U.createElement("option")),C=y(U.createElement("optgroup")),A=v.clone();h=0;for(var x=f.children(),D=x.length;h<D;h++)if(""===x[h].value){w=u=x.eq(h);break}p.init(l,u,A);r&&(l.$isEmpty=function(a){return!a||0===a.length});t?n(e,f,l):r?m(e,f,l):k(e,f,l,p)}}}}],hd=["$interpolate",
function(a){var c={addOption:C,removeOption:C};return{restrict:"E",priority:100,compile:function(d,e){if(E(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound?d.prop("selected",!1):m=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&m.removeOption(c);m.addOption(a)}):m.addOption(e.value);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],gd=aa({restrict:"E",
terminal:!0});O.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ga=O.jQuery)?(y=Ga,D(Ga.fn,{scope:Ja.scope,isolateScope:Ja.isolateScope,controller:Ja.controller,injector:Ja.injector,inheritedData:Ja.inheritedData}),Ab("remove",!0,!0,!1),Ab("empty",!1,!1,!1),Ab("html",!1,!1,!0)):y=N,Ea.element=y,Zc(Ea),y(U).ready(function(){Wc(U,$b)}))})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>');
//# sourceMappingURL=angular.min.js.map

/**!
 * AngularJS file upload/drop directive with http post and progress
 * @author  Danial  <danial.farid@gmail.com>
 * @version 1.6.5
 */
(function() {

var angularFileUpload = angular.module('angularFileUpload', []);

angularFileUpload.service('$upload', ['$http', '$q', '$timeout', function($http, $q, $timeout) {
	function sendHttp(config) {
		config.method = config.method || 'POST';
		config.headers = config.headers || {};
		config.transformRequest = config.transformRequest || function(data, headersGetter) {
			if (window.ArrayBuffer && data instanceof window.ArrayBuffer) {
				return data;
			}
			return $http.defaults.transformRequest[0](data, headersGetter);
		};
		var deferred = $q.defer();

		if (window.XMLHttpRequest.__isShim) {
			config.headers['__setXHR_'] = function() {
				return function(xhr) {
					if (!xhr) return;
					config.__XHR = xhr;
					config.xhrFn && config.xhrFn(xhr);
					xhr.upload.addEventListener('progress', function(e) {
						deferred.notify(e);
					}, false);
					//fix for firefox not firing upload progress end, also IE8-9
					xhr.upload.addEventListener('load', function(e) {
						if (e.lengthComputable) {
							deferred.notify(e);
						}
					}, false);
				};
			};
		}

		$http(config).then(function(r){deferred.resolve(r)}, function(e){deferred.reject(e)}, function(n){deferred.notify(n)});
		
		var promise = deferred.promise;
		promise.success = function(fn) {
			promise.then(function(response) {
				fn(response.data, response.status, response.headers, config);
			});
			return promise;
		};

		promise.error = function(fn) {
			promise.then(null, function(response) {
				fn(response.data, response.status, response.headers, config);
			});
			return promise;
		};

		promise.progress = function(fn) {
			promise.then(null, null, function(update) {
				fn(update);
			});
			return promise;
		};
		promise.abort = function() {
			if (config.__XHR) {
				$timeout(function() {
					config.__XHR.abort();
				});
			}
			return promise;
		};
		promise.xhr = function(fn) {
			config.xhrFn = (function(origXhrFn) {
				return function() {
					origXhrFn && origXhrFn.apply(promise, arguments);
					fn.apply(promise, arguments);
				}
			})(config.xhrFn);
			return promise;
		};
		
		return promise;
	}

	this.upload = function(config) {
		config.headers = config.headers || {};
		config.headers['Content-Type'] = undefined;
		config.transformRequest = config.transformRequest || $http.defaults.transformRequest;
		var formData = new FormData();
		var origTransformRequest = config.transformRequest;
		var origData = config.data;
		config.transformRequest = function(formData, headerGetter) {
			if (origData) {
				if (config.formDataAppender) {
					for (var key in origData) {
						var val = origData[key];
						config.formDataAppender(formData, key, val);
					}
				} else {
					for (var key in origData) {
						var val = origData[key];
						if (typeof origTransformRequest == 'function') {
							val = origTransformRequest(val, headerGetter);
						} else {
							for (var i = 0; i < origTransformRequest.length; i++) {
								var transformFn = origTransformRequest[i];
								if (typeof transformFn == 'function') {
									val = transformFn(val, headerGetter);
								}
							}
						}
						formData.append(key, val);
					}
				}
			}

			if (config.file != null) {
				var fileFormName = config.fileFormDataName || 'file';

				if (Object.prototype.toString.call(config.file) === '[object Array]') {
					var isFileFormNameString = Object.prototype.toString.call(fileFormName) === '[object String]';
					for (var i = 0; i < config.file.length; i++) {
						formData.append(isFileFormNameString ? fileFormName : fileFormName[i], config.file[i], 
								(config.fileName && config.fileName[i]) || config.file[i].name);
					}
				} else {
					formData.append(fileFormName, config.file, config.fileName || config.file.name);
				}
			}
			return formData;
		};

		config.data = formData;

		return sendHttp(config);
	};

	this.http = function(config) {
		return sendHttp(config);
	}
}]);

angularFileUpload.directive('ngFileSelect', [ '$parse', '$timeout', function($parse, $timeout) {
	return function(scope, elem, attr) {
		var fn = $parse(attr['ngFileSelect']);
		if (elem[0].tagName.toLowerCase() !== 'input' || (elem.attr('type') && elem.attr('type').toLowerCase()) !== 'file') {
			var fileElem = angular.element('<input type="file">')
			for (var i = 0; i < elem[0].attributes.length; i++) {
				fileElem.attr(elem[0].attributes[i].name, elem[0].attributes[i].value);
			}
			if (elem.attr("data-multiple")) fileElem.attr("multiple", "true");
			fileElem.css("top", 0).css("bottom", 0).css("left", 0).css("right", 0).css("width", "100%").
					css("opacity", 0).css("position", "absolute").css('filter', 'alpha(opacity=0)');
			elem.append(fileElem);
			if (elem.css("position") === '' || elem.css("position") === 'static') {
				elem.css("position", "relative");
			}
			elem = fileElem;
		}
		elem.bind('change', function(evt) {
			var files = [], fileList, i;
			fileList = evt.__files_ || evt.target.files;
			if (fileList != null) {
				for (i = 0; i < fileList.length; i++) {
					files.push(fileList.item(i));
				}
			}
			$timeout(function() {
				fn(scope, {
					$files : files,
					$event : evt
				});
			});
		});
		// removed this since it was confusing if the user click on browse and then cancel #181
//		elem.bind('click', function(){
//			this.value = null;
//		});

		// removed because of #253 bug
		// touch screens
//		if (('ontouchstart' in window) ||
//				(navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
//			elem.bind('touchend', function(e) {
//				e.preventDefault();
//				e.target.click();
//			});
//		}
	};
} ]);

angularFileUpload.directive('ngFileDropAvailable', [ '$parse', '$timeout', function($parse, $timeout) {
	return function(scope, elem, attr) {
		if ('draggable' in document.createElement('span')) {
			var fn = $parse(attr['ngFileDropAvailable']);
			$timeout(function() {
				fn(scope);
			});
		}
	};
} ]);

angularFileUpload.directive('ngFileDrop', [ '$parse', '$timeout', '$location', function($parse, $timeout, $location) {
	return function(scope, elem, attr) {
		if ('draggable' in document.createElement('span')) {
			var leaveTimeout = null;
			elem[0].addEventListener("dragover", function(evt) {
				evt.stopPropagation();
				evt.preventDefault();
				$timeout.cancel(leaveTimeout);
				if (!elem[0].__drag_over_class_) {
					if (attr['ngFileDragOverClass'].search(/\) *$/) > -1) {
						dragOverClassFn = $parse(attr['ngFileDragOverClass']);
						var dragOverClass = dragOverClassFn(scope, {
							$event : evt
						});					
						elem[0].__drag_over_class_ = dragOverClass; 
					} else {
						elem[0].__drag_over_class_ = attr['ngFileDragOverClass'] || "dragover";
					}
				}
				elem.addClass(elem[0].__drag_over_class_);
			}, false);
			elem[0].addEventListener("dragenter", function(evt) {
				evt.stopPropagation();
				evt.preventDefault();
			}, false);
			elem[0].addEventListener("dragleave", function(evt) {
				leaveTimeout = $timeout(function() {
					elem.removeClass(elem[0].__drag_over_class_);
					elem[0].__drag_over_class_ = null;
				}, attr['ngFileDragOverDelay'] || 1);
			}, false);
			var fn = $parse(attr['ngFileDrop']);
			elem[0].addEventListener("drop", function(evt) {
				evt.stopPropagation();
				evt.preventDefault();
				elem.removeClass(elem[0].__drag_over_class_);
				elem[0].__drag_over_class_ = null;
				extractFiles(evt, function(files) {
					fn(scope, {
						$files : files,
						$event : evt
					});					
				});
			}, false);
						
			function isASCII(str) {
				return /^[\000-\177]*$/.test(str);
			}

			function extractFiles(evt, callback) {
				var files = [], items = evt.dataTransfer.items;
				if (items && items.length > 0 && items[0].webkitGetAsEntry && $location.protocol() != 'file') {
					for (var i = 0; i < items.length; i++) {
						var entry = items[i].webkitGetAsEntry();
						if (entry != null) {
							//fix for chrome bug https://code.google.com/p/chromium/issues/detail?id=149735
							if (isASCII(entry.name)) {
								traverseFileTree(files, entry);
							} else if (!items[i].webkitGetAsEntry().isDirectory) {
								files.push(items[i].getAsFile());
							}
						}
					}
				} else {
					var fileList = evt.dataTransfer.files;
					if (fileList != null) {
						for (var i = 0; i < fileList.length; i++) {
							files.push(fileList.item(i));
						}
					}
				}
				(function waitForProcess(delay) {
					$timeout(function() {
						if (!processing) {
							callback(files);
						} else {
							waitForProcess(10);
						}
					}, delay || 0)
				})();
			}
			
			var processing = 0;
			function traverseFileTree(files, entry, path) {
				if (entry != null) {
					if (entry.isDirectory) {
						var dirReader = entry.createReader();
						processing++;
						dirReader.readEntries(function(entries) {
							for (var i = 0; i < entries.length; i++) {
								traverseFileTree(files, entries[i], (path ? path : "") + entry.name + "/");
							}
							processing--;
						});
					} else {
						processing++;
						entry.file(function(file) {
							processing--;
							file._relativePath = (path ? path : "") + file.name;
							files.push(file);
						});
					}
				}
			}
		}
	};
} ]);

})();

/*
 AngularJS v1.2.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,e,A){'use strict';function x(s,g,k){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,w){function y(){p&&(p.remove(),p=null);h&&(h.$destroy(),h=null);l&&(k.leave(l,function(){p=null}),p=l,l=null)}function v(){var b=s.current&&s.current.locals;if(e.isDefined(b&&b.$template)){var b=a.$new(),d=s.current;l=w(b,function(d){k.enter(d,null,l||c,function(){!e.isDefined(t)||t&&!a.$eval(t)||g()});y()});h=d.scope=b;h.$emit("$viewContentLoaded");h.$eval(u)}else y()}
var h,l,p,t=b.autoscroll,u=b.onload||"";a.$on("$routeChangeSuccess",v);v()}}}function z(e,g,k){return{restrict:"ECA",priority:-400,link:function(a,c){var b=k.current,f=b.locals;c.html(f.$template);var w=e(c.contents());b.controller&&(f.$scope=a,f=g(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));w(a)}}}n=e.module("ngRoute",["ng"]).provider("$route",function(){function s(a,c){return e.extend(new (e.extend(function(){},
{prototype:a})),c)}function g(a,e){var b=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},k=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,b,c){a="?"===c?c:null;c="*"===c?c:null;k.push({name:b,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=RegExp("^"+a+"$",b?"i":"");return f}var k={};this.when=function(a,c){k[a]=e.extend({reloadOnSearch:!0},c,a&&g(a,c));if(a){var b=
"/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";k[b]=e.extend({redirectTo:a},g(b,c))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,c,b,f,g,n,v,h){function l(){var d=p(),m=r.current;if(d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!u)m.params=d.params,e.copy(m.params,b),a.$broadcast("$routeUpdate",m);else if(d||m)u=!1,a.$broadcast("$routeChangeStart",
d,m),(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?c.path(t(d.redirectTo,d.params)).search(d.params).replace():c.url(d.redirectTo(d.pathParams,c.path(),c.search())).replace()),f.when(d).then(function(){if(d){var a=e.extend({},d.resolve),c,b;e.forEach(a,function(d,c){a[c]=e.isString(d)?g.get(d):g.invoke(d)});e.isDefined(c=d.template)?e.isFunction(c)&&(c=c(d.params)):e.isDefined(b=d.templateUrl)&&(e.isFunction(b)&&(b=b(d.params)),b=h.getTrustedResourceUrl(b),e.isDefined(b)&&(d.loadedTemplateUrl=
b,c=n.get(b,{cache:v}).then(function(a){return a.data})));e.isDefined(c)&&(a.$template=c);return f.all(a)}}).then(function(c){d==r.current&&(d&&(d.locals=c,e.copy(d.params,b)),a.$broadcast("$routeChangeSuccess",d,m))},function(c){d==r.current&&a.$broadcast("$routeChangeError",d,m,c)})}function p(){var a,b;e.forEach(k,function(f,k){var q;if(q=!b){var g=c.path();q=f.keys;var l={};if(f.regexp)if(g=f.regexp.exec(g)){for(var h=1,p=g.length;h<p;++h){var n=q[h-1],r="string"==typeof g[h]?decodeURIComponent(g[h]):
g[h];n&&r&&(l[n.name]=r)}q=l}else q=null;else q=null;q=a=q}q&&(b=s(f,{params:e.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||k[null]&&s(k[null],{params:{},pathParams:{}})}function t(a,c){var b=[];e.forEach((a||"").split(":"),function(a,d){if(0===d)b.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];b.push(c[f]);b.push(e[2]||"");delete c[f]}});return b.join("")}var u=!1,r={routes:k,reload:function(){u=!0;a.$evalAsync(l)}};a.$on("$locationChangeSuccess",l);return r}]});n.provider("$routeParams",
function(){this.$get=function(){return{}}});n.directive("ngView",x);n.directive("ngView",z);x.$inject=["$route","$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.2.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,f,n){'use strict';f.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(e,b){var c={},g={},h,k=!1,l=f.copy,m=f.isUndefined;b.addPollFn(function(){var a=b.cookies();h!=a&&(h=a,l(a,g),l(a,c),k&&e.$apply())})();k=!0;e.$watch(function(){var a,d,e;for(a in g)m(c[a])&&b.cookies(a,n);for(a in c)d=c[a],f.isString(d)||(d=""+d,c[a]=d),d!==g[a]&&(b.cookies(a,d),e=!0);if(e)for(a in d=b.cookies(),c)c[a]!==d[a]&&(m(d[a])?delete c[a]:c[a]=d[a])});return c}]).factory("$cookieStore",
["$cookies",function(e){return{get:function(b){return(b=e[b])?f.fromJson(b):b},put:function(b,c){e[b]=f.toJson(c)},remove:function(b){delete e[b]}}}])})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b).on("keydown.bs.carousel",a.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.to=function(b){var c=this,d=this.getItemIndex(this.$active=this.$element.find(".item.active"));return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=e[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:g});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,f&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(e)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:g});return a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one("bsTransitionEnd",function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(m)),f&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(b=!b),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.VERSION="3.2.0",c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c=a.Event("show.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.$parent&&this.$parent.find("> .panel > .in");if(d&&d.length){var e=d.data("bs.collapse");if(e&&e.transitioning)return;b.call(d,"hide"),e||d.data("bs.collapse",null)}var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0),this.transitioning=1;var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return g.call(this);var h=a.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(350)[f](this.$element[0][h])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);h&&h.transitioning||(k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed"),e[g.hasClass("in")?"addClass":"removeClass"]("collapsed")),b.call(g,i)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/**
 * Application base
 * @author Martin Vach
 */

//Define an angular module for our app
var myApp = angular.module('myApp', [
    'ngRoute',
    'ngCookies',
    'myAppConfig',
    'myAppController',
    'myAppFactory',
    'myAppService',
     'angularFileUpload'

]);

//Define Routing for app
myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
                // Home
                when('/', {
                    redirectTo: '/elements/dashboard/1'
                }).
                // Elements
                when('/elements/:filter?/:val?', {
                    templateUrl: 'app/views/elements/elements.html'
                }).
                // Rooms
                when('/rooms', {
                    templateUrl: 'app/views/rooms/rooms.html'
                }).
                // Events
                when('/events/:param?/:val?', {
                    templateUrl: 'app/views/events/events.html'
                }).
                //Profile
                when('/profiles', {
                    templateUrl: 'app/views/config/profiles.html'
                }).
                //Apps
                when('/apps', {
                    templateUrl: 'app/views/config/apps.html'
                }).
                //Module
                when('/module/:action/:id', {
                    templateUrl: 'app/views/config/app_module_alpaca.html'
                }).
                //Devices
                when('/devices/:type?', {
                    templateUrl: 'app/views/config/devices.html'
                }).
                //Include Devices
                when('/include/:device?', {
                    templateUrl: 'app/views/config/device_include.html'
                }).
                //Rooms
                when('/config-rooms', {
                    templateUrl: 'app/views/config/config_rooms.html'
                }).
                //Network
                when('/network', {
                    templateUrl: 'app/views/config/network.html'
                }).
                //About
                when('/about', {
                    templateUrl: 'app/views/pages/about.html'
                }).
                // Test
                when('/test', {
                    templateUrl: 'app/views/test.html'
                }).
                otherwise({
                    redirectTo: '/elements/dashboard/1'
                });
    }]);

/**
 * App configuration
 */

var config_module = angular.module('myAppConfig', []);

angular.forEach(config_data,function(key,value) {
  config_module.constant(value,key);
});

// Intercepting HTTP calls with AngularJS.
myApp.config(function ($provide, $httpProvider) {
  $httpProvider.defaults.timeout = 5000;
  // Intercept http calls.
  $provide.factory('MyHttpInterceptor', function ($q) {
    return {
      // On request success
      request: function (config) {
       //console.log(config); // Contains the data about the request before it is sent.

        // Return the config or wrap it in a promise if blank.
        return config || $q.when(config);
      },

      // On request failure
      requestError: function (rejection) {
        console.log(rejection); // Contains the data about the error on the request.
        
        // Return the promise rejection.
        return $q.reject(rejection);
      },

      // On response success
      response: function (response) {
        //console.log(response.data); // Contains the data from the response.
        
        // Return the response or promise.
        return response || $q.when(response);
      },

      // On response failture
      responseError: function (rejection) {
        // console.log(rejection); // Contains the data about the error.
        
        // Return the promise rejection.
        return $q.reject(rejection);
      }
    };
  });

  // Add the interceptor to the $httpProvider.
  //$httpProvider.interceptors.push('MyHttpInterceptor');

});



/**
 * Application factories
 * @author Martin Vach
 */
var myAppFactory = angular.module('myAppFactory', []);

/**
 * Caching the river...
 */
myAppFactory.factory('myCache', function($cacheFactory) {
    return $cacheFactory('myData');
});

/**
 * Main data factory
 */
myAppFactory.factory('dataFactory', function($http, $interval,$window,$filter,myCache, cfg) {
    var apiDataInterval;
    var enableCache = true;
    var updatedTime = Math.round(+new Date() / 1000);
    return({
        getApiData: getApiData,
        postApiData: postApiData,
        putApiData: putApiData,
        deleteApiData: deleteApiData,
        localData: localData,
        setCache: setCache,
        runCmd: runCmd,
        updateApiData: updateApiData,
        cancelApiDataInterval: cancelApiDataInterval,
        getLanguageFile: getLanguageFile,
         getZwaveApiData: getZwaveApiData,
         updateZwaveApiData: updateZwaveApiData,
         runZwaveCmd: runZwaveCmd
    });

    /// --- Public functions --- ///

    /**
     * Gets app local data
     */
    function localData(file, callback) {
        var request = {
            method: "get",
            url: cfg.local_data_url + file
        };
        return getApiHandle(callback, request, file);

    }

    /**
     * API data
     */
    // Get
    function getApiData(api, callback, params) {
        var request = {
            method: "get",
            url: cfg.server_url + cfg.api[api] + (params ? params : '')
        };
        return getApiHandle(callback, request, api + params);
    }

    // Post
    function postApiData(api, data, callback) {
        var request = {
            method: "post",
            data: data,
            url: cfg.server_url + cfg.api[api]
        };
        return storeApiHandle(callback, request);
    }

    // Put
    function putApiData(api, id, data, callback) {
        var request = {
            method: "put",
            data: data,
            url: cfg.server_url + cfg.api[api] + "/" + id
        };
        return storeApiHandle(callback, request);
    }

    // Delete
    function deleteApiData(api, id, target) {
        var request = {
            method: "delete",
            //data: data,
            url: cfg.server_url + cfg.api[api] + "/" + id
        };
        return deleteApiHandle(request, target);
    }

    /**
     * Run command
     */
    function runCmd(cmd) {
        var request = {
            method: "get",
            url: cfg.server_url + cfg.api_url + "devices/" + cmd
        };
        return $http(request).success(function(data) {
            console.log('SUCCESS:' + cfg.server_url + cfg.api_url + "devices/" + cmd);
        }).error(function(data, status, headers, config, statusText) {
            handleError(data, status, headers, config, statusText);

        });
    }


    /**
     * Get updated data from the api collection.
     */
    function  updateApiData(api,callback) {
        var refresh = function() {
            var request = {
                method: "get",
                //url:  cfg.demo_url + api + '.json',
                url: cfg.server_url + cfg.api[api] + '?since=' +  updatedTime
            };
            if($http.pendingRequests.length > 0){
                addErrorElement();
            }
            $http(request).success(function(data) {
                addTimeTickElement();
                updateTimeTick($filter('hasNode')(data,'data.updateTime'));
                return callback(data);
            }).error(function(data, status, headers, config, statusText) {
                handleError(data, status, headers, config, statusText);

            });
        };
        apiDataInterval = $interval(refresh, cfg.interval);
    }

    /**
     * Cancel data interval
     */
    function cancelApiDataInterval() {
        if (apiDataInterval) {
            $interval.cancel(apiDataInterval);
            apiDataInterval = undefined;
        }
        return;
    }

    /**
     * Load language file
     */
    function getLanguageFile(callback, lang) {
        var langFile = lang + '.json';
        var request = {
            method: "get",
            url: cfg.lang_dir + langFile
        };
        return getApiHandle(callback, request, langFile);
    }
    
    /**
     * Get ExpertUI data
     */
    function getZwaveApiData(callback) {
        var request = {
            method: "post",
            url: cfg.server_url + cfg.zwave_api_url  + 'Data/0'
        };
        return getApiHandle(callback, request);
    }
    
    /**
     * Get updated data from ExpertUI
     */
    function  updateZwaveApiData(callback) {
         var zTime = Math.round(+new Date() / 1000);
        var refresh = function() {
            var request = {
                method: "post",
                url: cfg.server_url + cfg.zwave_api_url  + 'Data/' + zTime
            };
            if($http.pendingRequests.length > 0){
                addErrorElement();
            }
            $http(request).success(function(data) {
                 zTime = data.updateTime;
                addTimeTickElement();
                updateTimeTick($filter('hasNode')(data,'data.updateTime'));
                return callback(data);
            }).error(function(data, status, headers, config, statusText) {
                handleError(data, status, headers, config, statusText);

            });
        };
        apiDataInterval = $interval(refresh, cfg.interval);
    }
    
    /**
     * Run ExpertUI command
     */
    function runZwaveCmd(cmd) {
        var request = {
            method: "get",
            url: cfg.server_url + cfg.zwave_api_url + "Run/" + cmd
        };
        return $http(request).success(function(data) {
            console.log('SUCCESS:' + request.url);
        }).error(function(data, status, headers, config, statusText) {
            handleError(data, status, headers, config, statusText);

        });
    }

    /// --- Private functions --- ///

    /**
     * Api handle
     */
    // GET
    function getApiHandle(callback, request, cacheName) {
        var cached = null;
        if (cacheName) {
            cached = myCache.get(cacheName);
        }
        // Cached data
        if (enableCache && cached) {
            console.log('CACHED: ' + cacheName);
            return callback(cached);
        } else {
            console.log('NOT CACHED: ' + cacheName);
            if($http.pendingRequests.length > 0){
                addErrorElement();
            }
            return $http(request).success(function(data) {
                addTimeTickElement();
                updateTimeTick($filter('hasNode')(data,'data.updateTime'));
                myCache.put(cacheName, data);
                return callback(data);
            }).error(function(data, status, headers, config, statusText) {
                handleError(data, status, headers, config, statusText);

            });
        }

    }
    // POST/PUT
    function storeApiHandle(callback, request) {
        //$('#respone_container').html('Loading').show();
        return $http(request).success(function(data) {
            return callback(data);
        }).error(function(data, status, headers, config, statusText) {
            handlePostError(data, status, headers, config, statusText);

        });
    }

    // Delete
    function deleteApiHandle(request, target) {
        return $http(request).success(function(data) {
            if (target) {
                $(target).fadeOut();
            }
        }).error(function(data, status, headers, config, statusText) {
            handleDeleteError(data, status, headers, config, statusText);
        });
    }


    /**
     * Handle errors
     */
    function handleError(data, status, headers, config, statusText) {
        var msg = 'Can`t receive data from the remote server';
       addErrorElement();
        //$('#main_content').html('<div class="alert alert-danger alert-dismissable response-message"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button> <i class="icon-ban-circle"></i> ' + msg + '</div>');
        //console.log(config);
        return;


    }

    function handlePostError(data, status, headers, config, statusText) {
        var msg = 'Can`t store data in the remote server';
       $window.alert(msg);
        console.log(config);
        return;


    }

    function handleDeleteError(data, status, headers, config, statusText) {
        var msg = 'Can`t delete data from the remote server';
        $window.alert(msg);
        console.log(config);
        return;


    }

    /**
     * Enable/Disable the cache
     */
    function setCache(enable) {
        enableCache = enable;
        return;
    }
     /**
     * Add add error element
     */
    function addErrorElement() {
         $('.navi-time').html('<i class="fa fa-minus-circle fa-lg text-danger"></i>');
    }
     /**
     * Add spinner
     */
    function addSpinnerElement() {
         $('.navi-time').html('<i class="fa fa-spinner fa-spin"></i>');
    }
    
    /**
     * Add time tick
     */
    function addTimeTickElement() {
         $('.navi-time').html('<i class="fa fa-clock-o"></i> <span id="update_time_tick"></span>');
    }
    
    /**
     * Update time tick
     */
    function updateTimeTick(time) {
        time = (time || Math.round(+new Date() / 1000));
        updatedTime = time;
        $('#update_time_tick').html($filter('getCurrentTime')(time));
    }

});


/**
 * Application services
 * @author Martin Vach
 */
var myAppService = angular.module('myAppService', []);

/**
 * Device service
 */
myAppService.service('dataService', function($filter, myCache) {
    /// --- Public functions --- ///
    /**
     * Get language line by key
     */
    this.getLangLine = function(key, languages) {
        if (angular.isObject(languages)) {
            if (angular.isDefined(languages[key])) {
                return languages[key] !== '' ? languages[key] : key;
            }
        }
        return key;
    };
    /**
     * Mobile device detect
     */
    this.isMobile = function(a) {
        return isMobile(a);
    };

    /**
     * Get data or filtered data
     */
    this.getData = function(data, filter) {
        return getData(data, filter);
    };

    /**
     * Get device data
     */
    this.getDevices = function(data, filter, positions, instances, location) {
        return getDevices(data, filter, positions, instances, location);
    };

    /**
     * Get device types
     */
    this.getDeviceType = function(data) {
        return getDeviceType(data);
    };

    /**
     * Update devices
     */
    this.updateDevices = function(data) {
        return updateDevices(data);
    };

    /**
     * Get tags
     */
    this.getTags = function(data) {
        return getTags(data);
    };

    /**
     * Get instances
     */
    this.getInstances = function(data, modules) {
        return getInstances(data, modules);
    };

    /**
     * Get module form data
     */
    this.getModuleFormData = function(module, data, namespaces) {
        return getModuleFormData(module, data, namespaces);
    };

    /**
     * Get module config input
     */
    this.getModuleConfigInputs = function(module, params, namespaces) {
        return getModuleConfigInputs(module, params, namespaces);
    };


    /**
     * Set array value
     */
    this.setArrayValue = function(data, key, add) {
        return setArrayValue(data, key, add);
    };

    /**
     * Get event level
     */
    this.getEventLevel = function(data) {
        return getEventLevel(data);
    };

    /**
     * Get pairs
     */
    this.getPairs = function(data, key, val, cache) {
        return getPairs(data, key, val, cache);
    };

    /**
     * Get row by
     */
    this.getRowBy = function(data, key, val, cache) {
        return getRowBy(data, key, val, cache);
    };

    /// --- Private functions --- ///

    /**
     * Mobile device detect
     */
    function isMobile(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
            return true;
        } else {
            return false;
        }
    }


    /**
     * Get data or filtered data
     */
    function getData(data, filter) {
        var collection = [];
        if (filter) {
            angular.forEach(data, function(v, k) {
                if (angular.isArray(v[filter.filter])) {
                    if (v[filter.filter].indexOf(filter.val) > -1) {
                        collection.push(v);
                    }
                } else {
                    if (v[filter.filter] == filter.val) {
                        collection.push(v);
                    }
                }
            });
            return collection;
        } else {
            return data;
        }

    }

    /**
     * Get device data
     */
    function getDevices(data, filter, positions, instances, location) {

        var obj;
        var collection = [];
        var onDashboard = false;
        var findZwaveStr = "ZWayVDev_zway_";

        angular.forEach(data, function(v, k) {
            var instance;
            var hasInstance = false;
            var zwaveId = false;
            if (v.permanently_hidden || v.deviceType == 'battery') {
                return;
            }
            if (location) {
                if (v.location != location && v.location) {
                    return;
                }
            }
            if (positions && positions.indexOf(v.id) !== -1) {
                var onDashboard = true;
            }

            if (v.id.indexOf(findZwaveStr) > -1) {
                zwaveId = v.id.split(findZwaveStr)[1].split('-')[0];
            } else {

                instance = getRowBy(instances, 'id', v.creatorId);
                if (instance && instance['moduleId'] != 'ZWave') {
                    hasInstance = instance;

                }
            }
            obj = {
                'id': v.id,
                'zwaveId': zwaveId,
                'title': v.metrics.title,
                'metrics': v.metrics,
                'tags': v.tags,
                'permanently_hidden': v.permanently_hidden,
                'level': $filter('numberFixedLen')(v.metrics.level),
                'icon': v.metrics.icon,
                'probeTitle': v.metrics.probeTitle,
                'scaleTitle': v.metrics.scaleTitle,
                'deviceType': v.deviceType,
                'location': v.location,
                'creatorID': v.creatorId,
                'updateTime': v.updateTime,
                'onDashboard': onDashboard,
                'cfg': {
                    'zwaveId': zwaveId,
                    'hasInstance': hasInstance
                }
            };
            if (filter) {
                if (angular.isArray(obj[filter.filter])) {
                    if (obj[filter.filter].indexOf(filter.val) > -1) {
                        collection.push(obj);
                    }
                } else {
                    if (obj[filter.filter] == filter.val) {
                        collection.push(obj);
                    }
                }

            } else {
                collection.push(obj);
            }

        });
        return collection;
    }

    /**
     * Update devices
     */
    function updateDevices(data) {
        var devices = data.data.devices;
        var widgetId;
        if (devices.length > 0) {
            angular.forEach(devices, function(v, k) {
                widgetId = '#Widget_' + v.id;
                updateDeviceLevel(widgetId, v);
                updateDeviceTime(widgetId, v);
                updateDeviceIcon(widgetId, v);
                updateDeviceBtn(widgetId, v);


            });
        }

    }
    /**
     * Update device level
     */
    function updateDeviceLevel(widgetId, v) {
        var level = $filter('numberFixedLen')(v.metrics.level);
        var val;
        if (level) {
            switch (v.deviceType) {
                case 'switchMultilevel':
                    val = $filter('getMaxLevel')(level);
                    break;
                default:
                    val = level;
                    break;
            }
            $(widgetId + ' .widget-level').html(val);
        }
        console.log('Update device: ID: ' + v.id + ' - level: ' + val)

    }

    /**
     * Update device time
     */
    function updateDeviceTime(widgetId, v) {
        var time = $filter('isToday')(v.updateTime, true);
        if (time) {
            $(widgetId + ' .widget-update-time').html(time);
        }
        console.log('Update device: ID: ' + v.id + ' - time: ' + time)
    }

    /**
     * Update device icon
     */
    function updateDeviceIcon(widgetId, v) {
        var icon = $filter('getElementIcon')(v.metrics.icon, v);
        if (icon) {
            $(widgetId + ' .widget-image').attr('src', icon);
        }
        console.log('Update device: ID: ' + v.id + ' - icon: ' + icon)
    }

    /**
     * Update device button
     */
    function updateDeviceBtn(widgetId, v) {
        var status = false;
        switch (v.deviceType) {
            case 'switchBinary':
                if (v.metrics.level == 'on') {
                    status = 'on';
                } else {
                    status = 'off';
                }
                break;

            case 'doorlock':
                if (v.metrics.level == 'open') {
                    status = 'on';
                } else {
                    status = 'off';
                }
                break;
            default:
                break;
        }
        if (status == false) {
            return;
        }
        if (v.deviceType == 'switchBinary') {
            if (status == 'on') {
                $(widgetId + ' .widget-btn-on').removeClass('btn-default').addClass('btn-primary');
                $(widgetId + ' .widget-btn-off').removeClass('btn-primary').addClass('btn-default');
            } else {
                $(widgetId + ' .widget-btn-on').removeClass('btn-primary').addClass('btn-default');
                $(widgetId + ' .widget-btn-off').removeClass('btn-default').addClass('btn-primary');
            }
            console.log('Update device: ID: ' + v.id + ' - button ' + v.metrics.level)
        }

    }

    /**
     * Get instances data
     */
    function getInstances(data, modules) {
        var collection = [];
        var moduleOptions;
        var module;
        var moduleTitle;
        var params;
        angular.forEach(data, function(v, k) {
            params = (!v.params ? [] : v.params);
            module = getRowBy(modules, 'id', v.moduleId);
            if (module) {
                moduleTitle = $filter('hasNode')(module, 'defaults.title');
                moduleOptions = getModuleConfigOptions(module, params);
            }

            collection.push({
                'id': v.id,
                'moduleId': v.moduleId,
                'title': v.title,
                'moduleTitle': moduleTitle,
                'params': params,
                'description': v.description,
                'moduleData': module,
                'moduleOptions': moduleOptions,
                'moduleInput': getModuleConfigInputs(module, params)
            });

        });
        return collection;
    }

    /**
     * Get module form data
     */
    function getModuleFormData(module, data, namespaces) {
        var collection = {
            'options': {},
            'schema': {},
            'data': {}
        };
        var bind = setModuleFormData(module.options, module.schema, namespaces);
        collection.options = bind.options;
        collection.schema = bind.schema;
        collection.data = data;
        return collection;
    }

    /**
     * Set module form data
     */
    function setModuleFormData(options, schema, namespaces) {
        var collection = {
            'options': replaceModuleFormData(options, 'optionLabels', namespaces, 'deviceName'),
            'schema': replaceModuleFormData(schema, 'enum', namespaces, 'deviceId')
        };
        return collection;
    }
    /**
     * Replace module object
     */
    function replaceModuleFormData(obj, key, namespaces, namespaceKey) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i))
                continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(replaceModuleFormData(obj[i], key, namespaces, namespaceKey));
            } else if (i == key && !angular.isArray(obj[key])) {
                obj[key] = buildArrayFromNamespaces(obj[key], namespaces, namespaceKey);
            }
        }
        return obj;
    }


    /**
     * Build an array from namespaces
     */
    function buildArrayFromNamespaces(enums, namespaces, namespaceKey) {
         
        var collection = [];
        var namesp = enums.split(',');
        if (!angular.isArray(namesp)) {
            return false;
        }
        angular.forEach(namesp, function(v, k) {
            var id = v.split(':');
            if (!angular.isArray(id)) {
                return false;
            }
            angular.forEach(namespaces, function(nm, km) {
               if (nm.id == id[1]) {
                    angular.forEach(nm.params, function(i, n) {
                        collection.push(i[namespaceKey]);
                    });
                }
            });
        });
       
        return collection;
    }

    /**
     *  Get module config options
     */
//    function getModuleConfigInputs(module, params, namespaces) {
//        if (!module) {
//            return false;
//        }
//        var options = $filter('hasNode')(module, 'options.fields');
//        var schema = $filter('hasNode')(module, 'schema.properties');
//        var defaults = $filter('hasNode')(module, 'defaults');
//        if (!options || !schema) {
//            return false;
//        }
//        //console.log(module.id);
//
//        var collection = {};
//        var cfg = {};
////        var type;
////        var enums;
////        var items;
////        var itemsProperties;
////        var pairs;
////        var itemPairs;
////        var inputType;
//        angular.forEach(options, function(v, k) {
//            if ((v.hidden) || (v.hidden == true)) {
//                return false;
//            }
//            cfg = {
//                'pairs': [],
//                'pairsItemsProperties': {},
//                'inputType': $filter('hasNode')(options[k], 'type'),
//                'enums': $filter('hasNode')(schema[k], 'enum'),
//                'items': $filter('hasNode')(schema[k], 'items'),
//                'itemsProperties': $filter('hasNode')(schema[k], 'items.properties')
//            };
////            inputType = $filter('hasNode')(options[k], 'type');
////            type = $filter('hasNode')(schema[k], 'type');
////            enums = $filter('hasNode')(schema[k], 'enum');
////            items = $filter('hasNode')(schema[k], 'items');
////            itemsProperties = $filter('hasNode')(schema[k], 'items.properties');
//
//            if (v.datasource == 'namespaces') {
//                cfg.pairs = getModulePairsFromNamespaces(cfg.enums, namespaces);
//            } else if (cfg.items) {
//                if (cfg.itemsProperties) {
//                    angular.forEach(cfg.itemsProperties, function(item, ik) {
//                        var iPairs = getItemsPropertiesPairs(item, v.optionLabels, namespaces);
//                        if (iPairs) {
//                            cfg.pairsItemsProperties = {
//                                'name': ik,
//                                'pairs': getItemsPropertiesPairs(item, v.optionLabels, namespaces)
//                            };
//                            return;
//                        }
//
//                        // getItemsPropertiesPairs(item,v.optionLabels,namespaces);
//                        //cfg.pairs = getItemsPropertiesPairs(item,v.optionLabels,namespaces);
//                        //console.log(item);
//
//                    });
//
//                }
//                if (cfg.items.datasource == 'namespaces') {
//                    cfg.pairs = getModulePairsFromNamespaces(cfg.items.enum, namespaces);
//
//                }
//            } else {
//                cfg.pairs = getModulePairsFromArray(cfg.enums, v.optionLabels);
//            }
//
//            //console.log(cfg.pairsItemsProperties);
//            //console.log(itemPairs)
//            collection[k] = {
//                'inputName': k,
//                'label': v.label,
//                'placeholder': v.placeholder,
//                'helper': v.helper,
//                'optionLabels': v.optionLabels,
//                'default': defaults[k],
//                'inputType': getModuleInputType(cfg),
//                'enum': cfg.enums,
//                "datasource": v.datasource,
//                'pairs': cfg.pairs,
//                'pairsItemsProperties': cfg.pairsItemsProperties,
//                'pattern': $filter('hasNode')(schema[k], 'pattern'),
//                'required': $filter('hasNode')(schema[k], 'required'),
//                'value': $filter('hasNode')(params, k)
//            };
//
//        });
//        return collection;
//    }
//    /**
//     * Get module input type
//     */
//    function getModuleInputType(cfg) {
//        var inputType;
//        if (!cfg.inputType) {
//            if (cfg.enums) {
//                inputType = 'select';
//            } else if (cfg.itemsProperties) {
//                inputType = 'itemsProperties';
//            } else if (cfg.items) {
//                inputType = 'items';
//            }
//            else {
//                inputType = 'text';
//            }
//        } else {
//            inputType = cfg.inputType;
//        }
//
//        return inputType;
//    }
//
//    /**
//     * Get Items Properties Input
//     */
//    function getItemsPropertiesPairs(item, optionLabels, namespaces) {
//        var pairs;
//        if (item.field == 'enum') {
//            if (item.datasource == 'namespaces') {
//                pairs = getModulePairsFromNamespaces(item.enum, namespaces);
//            } else {
//                pairs = getModulePairsFromArray(item.enum, optionLabels);
//            }
//        }
//        return pairs;
//    }
//    /**
//     * Get module pairs from array - enums and labels
//     */
//    function getModulePairsFromArray(enums, labels) {
//        if (!angular.isArray(enums)) {
//            return false;
//        }
//        var collection = {};
//        angular.forEach(enums, function(v, k) {
//            if (labels) {
//                collection[v] = (labels[k] ? labels[k] : v);
//            } else {
//                collection[v] = v;
//            }
//        });
//
//        return collection;
//    }
//
//    /**
//     * Get module pairs from namespaces
//     */
//    function getModulePairsFromNamespaces(enums, namespaces) {
//        var collection = {};
//        var namesp = enums.split(',');
//        if (!angular.isArray(namesp)) {
//            return false;
//        }
//        angular.forEach(namesp, function(v, k) {
//            var id = v.split(':');
//            if (!angular.isArray(id)) {
//                return false;
//            }
//            angular.forEach(namespaces, function(nm, km) {
//                if (nm.id == id[1]) {
//                    angular.forEach(nm.params, function(i, n) {
//                        collection[i['deviceId']] = i['deviceName'];
//                    });
//                }
//            });
//        });
//        return collection;
//    }
//
//    /**
//     * Get module pairs from items
//     */
//    function getModulePairsFromItems(items, namespaces) {
//        console.log(items)
//        return;
//        var collection = {};
//        var arr = enums.split(':');
//        if (!$.isArray(arr)) {
//            return false;
//        }
//        var devices = arr[1];
//        angular.forEach(namespaces, function(v, k) {
//            if (v.id == devices) {
//                angular.forEach(v.params, function(i, n) {
//                    collection[i['deviceId']] = i['deviceName'];
//                });
//            }
//
//        });
//        return collection;
//    }
//    /**
//     *  Get module config options
//     */
//    function getModuleConfigOptions(module, params) {
//        var collection = [];
//        if (module) {
//            angular.forEach($filter('hasNode')(module, 'options.fields'), function(v, k) {
//                if ((!v.hidden) || (v.hidden != true)) {
//                    collection.push({
//                        'value': $filter('hasNode')(params, k),
//                        'field': k,
//                        'label': v.label,
//                        'helper': v.helper
//                    });
//                }
//            });
//        }
//        return collection;
//    }



    /**
     * Get device type
     */
    function getDeviceType(data) {
        var collection = [];
        angular.forEach(data, function(v, k) {
            if (v.deviceType == 'battery') {
                return;
            }
            collection.push({
                'key': v.deviceType,
                'val': v.deviceType
            });
        });
        return $filter('unique')(collection, 'key');
    }

    /**
     * Get tags
     */
    function getTags(data) {
        var collection = [];
        angular.forEach(data, function(v, k) {
            if (v.deviceType == 'battery' || v.tags.length < 1) {
                return;
            }
            angular.forEach(v.tags, function(t, k) {
                collection.push({
                    'key': t,
                    'val': t
                });
            });
        });
        return $filter('unique')(collection, 'key');
    }

    /**
     * Set array value
     */
    function setArrayValue(data, key, add) {
        if (add) {
            return addArrayValue(data, key);
        } else {
            return removeArrayValue(data, key);
        }
    }

    /**
     * Add array value
     */
    function addArrayValue(data, key) {
        var collection = data;
        if (collection.indexOf(key) === -1) {
            collection.push(key);
        }
        return collection;
    }

    /**
     * Remove array value
     */
    function removeArrayValue(data, key) {
        var collection = [];
        angular.forEach(data, function(v, k) {
            if (v != key) {
                collection.push(v);
            }
        });
        return collection;
    }

    /**
     * Get event level
     */
    function getEventLevel(data) {
        var collection = [];
        angular.forEach(data, function(v, k) {
            collection.push({
                'key': v.level,
                'val': v.level
            });
        });
        return $filter('unique')(collection, 'key');
    }

    /**
     * Get pairs - key => value
     */
    function getPairs(data, key, val, cache) {
        var ret;
        var collection = [];
        var cached = myCache.get(cache);
        // Cached data
        if (cached) {
            return cached;
        }

        // Load data
        angular.forEach(data, function(v, k) {
            if (v[val] != '') {
                collection.push({
                    'key': v[key],
                    'val': v[val]
                });
            }

        });
        ret = $filter('unique')(collection, 'key');
        //debugger;
        myCache.put(cache, ret);
        return ret;
    }

    /**
     * Get 1 row by - key => value
     */
    function getRowBy(data, key, val, cache) {
        var collection = null;
//        var cached = myCache.get(cache);
//        // Cached data
//        if (cached) {
//            return cached;
//        }
        angular.forEach(data, function(v, k) {
            if (v[key] == val) {
                collection = v;
//                if (cache) {
//                    myCache.put(cache, collection);
//                }
                return;
            }

        });
        return collection;
    }
});

/**
 * Application directives
 * @author Martin Vach
 */
myApp.directive('testDir', function() {
    return {
        restrict: "E",
        replace: true,
        template: '<p>This is a test directive</p>'
    };
});
/**
 * Hide collapsed navi after click on mobile devices
 */
myApp.directive('collapseNavbar', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).click(function() {
                $("#nav_collapse").removeClass("in").addClass("collapse");
            });
        }
    };
});
/**
 * Go back
 */
myApp.directive('goBack', ['$window', function($window) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    $window.history.back();
                });
            }
        };
    }]);

/**
 * Knob directive
 */
myApp.directive('knob', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).val(25).knob();
        }
    };
});

myApp.directive('myknob', ['$timeout','dataFactory', function($timeout,dataFactory) {
    'use strict';

    return {
        restrict: 'A',
        replace: true,
        //template: '<input class="dial" data-width="100" data-height="100" value="{{ knobData }}"/>',
        scope: {
            knobId: '=',
            knobData: '=',
            knobOptions: '&'
        },
        link: function($scope, $element) {
            var knobInit = $scope.knobOptions() || {};

            knobInit.release = function(newValue) {
                $timeout(function() {
                    $scope.knobData = newValue;
                    runCmdExact($scope.knobId,newValue);
                   $scope.$apply();
                });
            };

            $scope.$watch('knobData', function(newValue, oldValue) {
                if (newValue != oldValue) {
                    $($element).val(newValue).change();
                }
            });

            $($element).val($scope.knobData).knob(knobInit);
        }
    };
    
    /**
     * Run command exact value
     */
    function runCmdExact(id,val) {
        var cmd = id +  '/command/exact?level=' + val;
        dataFactory.runCmd(cmd);
        return;
    };
}]);
/**
 * Bootstrap tooltip
 */
myApp.directive('tooltip', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).hover(function() {
                // on mouseenter
                $(element).tooltip('show');
            }, function() {
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
});
/**
 * Bootstrap Popover window
 */
myApp.directive('customPopover', function () {
    return {
        restrict: 'A',
        template: '<span>{{label}}</span>',
        link: function (scope, el, attrs) {
            scope.label = attrs.popoverLabel;
            $(el).popover({
                trigger: 'click',
                html: true,
                content: attrs.popoverHtml,
                placement: attrs.popoverPlacement
            });
        }
    };
});
/**
 * Confirm dialog after click
 */
myApp.directive('ngConfirmClick', [
  function(){
    return {
      priority: -1,
      restrict: 'A',
      link: function(scope, element, attrs){
        element.bind('click', function(e){
          var message = attrs.ngConfirmClick;
          if(message && !confirm(message)){
            e.stopImmediatePropagation();
            e.preventDefault();
          }
        });
      }
    };
  }
]);


/**
 * dirPagination - AngularJS module for paginating (almost) anything.
 * 
 * 
 * Credit to https://groups.google.com/d/msg/angular/an9QpzqIYiM/r8v-3W1X5vcJ
 * for the idea on how to dynamically invoke the ng-repeat directive.
 *
 * Created by Michael on 04/05/14.
 */

//angular.module('myApp')
//   .directive('dirPaginate', function($compile, $parse, $timeout, paginationService) {
myApp.directive('dirPaginate', function($compile, $parse, $timeout, paginationService) {
        return  {
            priority: 5000, //High priority means it will execute first
            terminal: true,
            compile: function(element, attrs){
                attrs.$set('ngRepeat', attrs.dirPaginate); //Add ng-repeat to the dom

                var expression = attrs.dirPaginate;
                // regex taken directly from https://github.com/angular/angular.js/blob/master/src/ng/directive/ngRepeat.js#L211
                var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

                var filterPattern = /\|\s*itemsPerPage:\s*\S+\s*/;
                if (match[2].match(filterPattern) === null) {
                    throw "pagination directive: the 'itemsPerPage' filter must be set.";
                }
                var itemsPerPageFilterRemoved = match[2].replace(filterPattern, '');
                var collectionGetter = $parse(itemsPerPageFilterRemoved);

                //Now that we added ng-repeat to the element, proceed with compilation
                //but skip directives with priority 5000 or above to avoid infinite
                //recursion (we don't want to compile ourselves again)
                var compiled =  $compile(element, null, 5000);

                paginationService.paginationDirectiveInitialized = true;

                return function(scope, element, attrs){
                    var currentPageGetter;
                    if (attrs.currentPage) {
                        currentPageGetter = $parse(attrs.currentPage);
                    } else {
                        // if the current-page attribute was not set, we'll make our own
                        scope.__currentPage = 1;
                        currentPageGetter = $parse('__currentPage');
                    }
                    paginationService.setCurrentPageParser(currentPageGetter, scope);

                    scope.$watchCollection(function() {
                        return collectionGetter(scope);
                    }, function(collection) {
                        if (collection) {
                            paginationService.setCollectionLength(collection.length);
                        }
                    });

                    compiled(scope);
                };
            }
        };
    })

    .filter('itemsPerPage', function(paginationService) {
        return function(collection, itemsPerPage) {
            itemsPerPage = itemsPerPage || 9999999999;
            var start = (paginationService.getCurrentPage() - 1) * itemsPerPage;
            var end = start + itemsPerPage;
            paginationService.setItemsPerPage(itemsPerPage);

            return collection.slice(start, end);
        };
    })

    .service('paginationService', function() {
        var itemsPerPage;
        var collectionLength;
        var currentPageParser;
        var context;
        this.paginationDirectiveInitialized = false;

        this.setCurrentPageParser = function(val, scope) {
            currentPageParser = val;
            context = scope;
        };
        this.setCurrentPage = function(val) {
            currentPageParser.assign(context, val);
        };
        this.getCurrentPage = function() {
            return currentPageParser(context);
        };

        this.setItemsPerPage = function(val) {
            itemsPerPage = val;
        };
        this.getItemsPerPage = function() {
            return itemsPerPage;
        };

        this.setCollectionLength = function(val) {
            collectionLength = val;
        };
        this.getCollectionLength = function() {
            return collectionLength;
        };
    })

    .directive('dirPaginationControls', function(paginationService) {

        /**
         * Generate an array of page numbers (or the '...' string) which is used in an ng-repeat to generate the
         * links used in pagination
         *
         * @param currentPage
         * @param dataset
         * @param rowsPerPage
         * @param paginationRange
         * @returns {Array}
         */
        function generatePagesArray(currentPage, collectionLength, rowsPerPage, paginationRange) {
            var pages = [];
            var totalPages = Math.ceil(collectionLength / rowsPerPage);
            var halfWay = Math.ceil(paginationRange / 2);
            var position;

            if (currentPage <= halfWay) {
                position = 'start';
            } else if (totalPages - halfWay < currentPage) {
                position = 'end';
            } else {
                position = 'middle';
            }

            var ellipsesNeeded = paginationRange < totalPages;
            var i = 1;
            while (i <= totalPages && i <= paginationRange) {
                var pageNumber = calculatePageNumber(i, currentPage, paginationRange, totalPages);

                var openingEllipsesNeeded = (i === 2 && (position === 'middle' || position === 'end'));
                var closingEllipsesNeeded = (i === paginationRange - 1 && (position === 'middle' || position === 'start'));
                if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                    pages.push('...');
                } else {
                    pages.push(pageNumber);
                }
                i ++;
            }
            return pages;
        }

        /**
         * Given the position in the sequence of pagination links [i], figure out what page number corresponds to that position.
         *
         * @param i
         * @param currentPage
         * @param paginationRange
         * @param totalPages
         * @returns {*}
         */
        function calculatePageNumber(i, currentPage, paginationRange, totalPages) {
            var halfWay = Math.ceil(paginationRange/2);
            if (i === paginationRange) {
                return totalPages;
            } else if (i === 1) {
                return i;
            } else if (paginationRange < totalPages) {
                if (totalPages - halfWay < currentPage) {
                    return totalPages - paginationRange + i;
                } else if (halfWay < currentPage) {
                    return currentPage - halfWay + i;
                } else {
                    return i;
                }
            } else {
                return i;
            }
        }

        return {
            restrict: 'AE',
            templateUrl:  'app/views/dir-pagination.html',
            scope: {},
            link: function(scope, element, attrs) {
                if (!scope.maxSize) { scope.maxSize = 9; }
                scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : true;
                scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : false;

                if (paginationService.paginationDirectiveInitialized === false) {
                    throw "pagination directive: the pagination controls cannot be used without the corresponding pagination directive.";
                }

                var paginationRange = Math.max(scope.maxSize, 5);
                scope.pages = [];
                scope.pagination = {
                    last: 1,
                    current: 1
                };

                scope.$watch(function() {
                   return paginationService.getCollectionLength() * paginationService.getItemsPerPage();
                }, function(length) {
                    if (0 < length) {
                        generatePagination();
                    }
                });

                scope.$watch(function() {
                    return paginationService.getCurrentPage();
                }, function(currentPage) {
                    scope.pages = generatePagesArray(currentPage, paginationService.getCollectionLength(), paginationService.getItemsPerPage(), paginationRange);
                });

                scope.setCurrent = function(num) {
                    if (/^\d+$/.test(num)) {
                        if (0 < num && num <= scope.pagination.last) {
                            paginationService.setCurrentPage(num);
                            scope.pages = generatePagesArray(num, paginationService.getCollectionLength(), paginationService.getItemsPerPage(), paginationRange);
                            scope.pagination.current = num;
                        }
                    }
                };

                function generatePagination() {
                    scope.pages = generatePagesArray(1, paginationService.getCollectionLength(), paginationService.getItemsPerPage(), paginationRange);
                    scope.pagination.last = scope.pages[scope.pages.length - 1];
               
                    if (scope.pagination.last < scope.pagination.current) {
                        scope.setCurrent(scope.pagination.last);
                    }
                }
            }
        };
    });
/**
 * App filters
 * @author Martin Vach
 */
/**
 * Display HTML tags in scope
 */
myApp.filter('toTrusted', ['$sce', function($sce) {

        return function(text) {
            if (text == null) {
                return '';
            }
            return $sce.trustAsHtml(text);
        };
    }]);
/**
 * Strip HTML tags from input
 */
myApp.filter('stripTags', function() {
    return String(input).replace(/<[^>]+>/gm, '');
});
/**
 * Cut text into x chars
 */
myApp.filter('cutText', function() {
    return function(value, wordwise, max, tail) {
        if (!value)
            return '';

        max = parseInt(max, 10);
        if (!max)
            return value;
        if (value.length <= max)
            return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace != -1) {
                value = value.substr(0, lastspace);
            }
        }

        return value + (tail || ' …');
    };
});
/**
 * Set the max dec. lenghth
 */
myApp.filter('numberFixedLen', function() {
    return function(val) {
        if (val == 0) {
            return 0;
        }
        if (!val) {
            return;
        }
        var len = 1;
        var isDec = val.toString().split(".");
        if (isDec.length > 1 && isDec[1].length > len) {
            var num = parseFloat(val);
            if (isNaN(num)) {
                return val;
            } else {
                return num.toFixed(len);
            }

        }
        return val;
    };
});

/**
 * Check if JSON keys/nodes exist
 */
myApp.filter('hasNode', function() {
    return function(obj, path) {
        if (!obj || !path) {
            return null;
        }
        //console.log(path);
        path = path.split('.');
        var p = obj || {};
        for (var i in path) {
            if (p === null || typeof p[path[i]] === 'undefined') {
                return null;
            }
            p = p[path[i]];
        }
        return p;
    };
});
/**
 * Get current time
 */
myApp.filter('getElementIcon', function(cfg) {
    return function(input, device) {
        var icon = cfg.img.icons + 'placeholder.png';
        if (input) {
            if ((/^http:\/\//.test(input))) {
                return input;
            }
            switch (input) {
                case 'door':
                    icon = cfg.img.icons + (device.metrics.level == 'open' ? 'door-open.png' : 'door-closed.png');
                    break;

                case 'switch':
                    icon = cfg.img.icons + (device.metrics.level == 'on' ? 'switch-on.png' : 'switch-off.png');
                    break;

                case 'motion':
                    icon = cfg.img.icons + (device.metrics.level == 'on' ? 'motion-on.png' : 'motion-off.png');
                    break;

                case 'blinds':
                    if (device.metrics.level == 0) {
                        icon = cfg.img.icons + 'blind-down.png';
                    } else if (device.metrics.level >= 99) {
                        icon = cfg.img.icons + 'blind-up.png';
                    } else {
                        icon = cfg.img.icons + 'blind-half.png';
                    }
                    break;

                case 'multilevel':
                    if (device.metrics.level == 0) {
                        icon = cfg.img.icons + 'dimmer-off.png';
                    } else if (device.metrics.level >= 99) {
                        icon = cfg.img.icons + 'dimmer-on.png';
                    } else {
                        icon = cfg.img.icons + 'dimmer-half.png';
                    }
                    break;
                case 'thermostat':
                    icon = cfg.img.icons + 'thermostat.png';
                    break;

                case 'energy':
                    icon = cfg.img.icons + 'energy.png';
                    break;

                case 'meter':
                    icon = cfg.img.icons + 'meter.png';
                    break;

                case 'temperature':
                    icon = cfg.img.icons + 'temperature.png';
                    break;

                case 'camera':
                    icon = cfg.img.icons + 'camera.png';
                    break;
                case 'smoke':
                    icon = cfg.img.icons + 'smoke.png';
                    break;
                case 'alarm':
                    icon = cfg.img.icons + 'alarm.png';
                    break;
                case 'battery':
                    icon = cfg.img.icons + 'battery.png';
                    break;
                default:
                    break;
            }

        }
        return icon;
    };
});

/**
 * Get max level
 */
myApp.filter('getMaxLevel', function() {
    return function(input) {
        var maxLevel = 100;
        var levelVal = (input < 101 ? input : 100);
        return levelVal;
    };
});

/**
 * Get current time
 */
myApp.filter('getCurrentTime', function() {
    return function() {
        var d = new Date();
        var hrs = (d.getHours() < 10 ? '0' + d.getHours() : d.getHours());
        var min = (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes());
        var sec = (d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds());
        var time = hrs + ':' + min + ':' + sec;
        return time;
    };
});
/**
 * If is today display h:m otherwise d:m:y
 */
myApp.filter('isToday', function() {
    return function(input, fromunix) {
        if (fromunix) {
            var d = new Date(input * 1000);
            var startDate = new Date(input * 1000);  // 2000-01-01
        } else {
            var d = new Date(input);
            var startDate = new Date(input);  // 2000-01-01
        }


        var hrs = (d.getHours() < 10 ? '0' + d.getHours() : d.getHours());
        var min = (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes());

        if (d.toDateString() == (new Date()).toDateString()) {
            return hrs + ':' + min;

        } else {

            var endDate = new Date();              // Today
            var nDays = diffDays(startDate, endDate) + 1;
            var str = '' + nDays + ' days';
            if (nDays < 2) {
                str = 'yesterday';
            }
            return str;
        }
    };
    // Calculate the number of days between two dates
    function diffDays(d1, d2)
    {
        var ndays;
        var tv1 = d1.valueOf();  // msec since 1970
        var tv2 = d2.valueOf();

        ndays = (tv2 - tv1) / 1000 / 86400;
        ndays = Math.round(ndays - 0.5);
        return ndays;
    }
});

/**
 * If is today from unix stamp display h:m otherwise d:m:y
 */
myApp.filter('isTodayFromUnix', function() {
    return function(input) {
        if (isNaN(input)) {
            return '';
        }
        var d = new Date(input * 1000);
        var day = d.getDate();
        var mon = d.getMonth() + 1; //Months are zero based
        var year = d.getFullYear();
        var hrs = (d.getHours() < 10 ? '0' + d.getHours() : d.getHours());
        var min = (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes());
        var sec = (d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds());

        if (d.toDateString() == (new Date()).toDateString()) {
            //return hrs + ':' + min + ':' + sec;
            return hrs + ':' + min;

        } else {
            //return day + '.' + mon + '.' + year + ' ' + hrs + ':' + min + ':' + sec;
            return day + '.' + mon + '.' + year;
        }
    };
});

/**
 * Get only unique values
 */
myApp.filter('unique', function() {
    return function(items, filterOn) {

        if (filterOn === false) {
            return items;
        }

        if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
            var hashCheck = {}, newItems = [];

            var extractValueToCompare = function(item) {
                if (angular.isObject(item) && angular.isString(filterOn)) {
                    return item[filterOn];
                } else {
                    return item;
                }
            };

            angular.forEach(items, function(item) {
                var valueToCheck, isDuplicate = false;

                for (var i = 0; i < newItems.length; i++) {
                    if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (!isDuplicate) {
                    newItems.push(item);
                }

            });
            items = newItems;
        }
        return items;
    };
});
/**
 * Get uri segment
 */
myApp.filter('uri', function($location) {
    return {
        segment: function(segment) {
            var data = $location.path().split("/");
            if (data[segment]) {
                return data[segment];
            }
            return false;
        },
        total_segments: function() {
            var data = $location.path().split("/");
            var i = 0;
            angular.forEach(data, function(value) {
                if (value.length) {
                    i++;
                }
            });
            return i;
        }
    };
});
/**
 * Application controllers
 * @author Martin Vach
 */

/*** Controllers ***/
var myAppController = angular.module('myAppController', []);
/**
 * Base controller
 */
myAppController.controller('BaseController', function($scope, $cookies, $filter, $location, $route, cfg, dataFactory, dataService) {
    /**
     * Global scopes
     */
    $scope.cfg = cfg;
    // Current profile
    $scope.demoColor = ['#6494bc', '#80ad80', '#dd976e', '#6494bc', '#80ad80', '#dd976e', '#6494bc', '#80ad80', '#dd976e', '#6494bc', '#80ad80', '#dd976e'];
    $scope.profile = {
        'id': 1,
        'name': 'Default',
        'cssClass': 'profile-default',
        'active': true,
        'lang': 'en',
        'positions': []
    };
    /**
     * Language settings
     */
    $scope.lang_list = cfg.lang_list;
    // Set language
    //$scope.lang = (angular.isDefined($cookies.lang) ? $cookies.lang : cfg.lang);
    $scope.lang = (angular.isDefined($scope.profile.lang) ? $scope.profile.lang : cfg.lang);
    // TODO: remove?
    $scope.changeLang = function(lang) {
        $cookies.lang = lang;
        $scope.lang = lang;
    };
    // Load language files
    $scope.loadLang = function(lang) {
        // Is lang in language list?
        var lang = (cfg.lang_list.indexOf(lang) > -1 ? lang : cfg.lang);
        dataFactory.getLanguageFile(function(data) {
            $scope.languages = data;
        }, lang);
    };
    // Get language lines
    $scope._t = function(key) {
        return dataService.getLangLine(key, $scope.languages);
    };
    // Watch for lang change
    $scope.$watch('lang', function() {
        $scope.loadLang($scope.lang);
    });
    /**
     * Set time
     */
    $scope.setTime = function() {
        var time = Math.round(+new Date() / 1000);
        $('#update_time_tick').html($filter('getCurrentTime')(time));
    };
    $scope.setTime();
    // Order by
    $scope.orderBy = function(field) {
        $scope.predicate = field;
        $scope.reverse = !$scope.reverse;
    };
    /**
     * Load base data (profiles, languages)
     */
    $scope.navpPofiles = [];
    $scope.loadBaseData = function() {
        dataFactory.getApiData('profiles', function(data) {
            $scope.navpPofiles = data.data;
        });
    };
    $scope.loadBaseData();
    /**
     * Get body ID
     */
    $scope.getBodyId = function() {
        var path = $location.path().split('/');
        if (path[1] == 'elements') {
            switch (path[2]) {
                case 'location':
                    return 'location';
                    break;
                case 'dashboard':
                    return 'dashboard';
                    break;
                default:
                    return 'elements';
                    break;
            }

        } else {
            return path[1];
        }

    };
    /**
     * Get body ID
     */
    $scope.footer = 'Home footer';
    /**
     * 
     * Mobile detect
     */
    $scope.isMobile = dataService.isMobile(navigator.userAgent || navigator.vendor || window.opera);
    /*
     * Menu active class
     */
    $scope.isActive = function(route) {
        return (route === $scope.getBodyId() ? 'active' : '');
    };
    /**
     * Set profile
     */
    $scope.setProfile = function(data) {
        if (data.color) {
            $scope.profile.cssClass = 'profile-' + data.color.substring(1);
            data.cssClass = 'profile-' + data.color.substring(1);
        }
        if (data.name) {
            $scope.profile.name = data.name;
        }
        if (data.id) {
            $scope.profile.id = data.id;
        }
        if (data.lang) {
            $scope.profile.lang = data.lang;
        }
        if (data.positions) {
            $scope.profile.positions = data.positions;
        }

        $cookies.profile = angular.toJson(data);
        $route.reload();
    };
    /**
     * Get profile
     */
    $scope.getProfile = function() {
        var cookie = angular.fromJson($cookies.profile);
        if (cookie) {
            $scope.profile = cookie;
        }
    };
    $scope.getProfile();
});
/**
 * Test controller
 */
myAppController.controller('TestController', function($scope, $routeParams, $filter, $location, dataFactory, dataService) {
});
/**
 * Home controller
 */
myAppController.controller('HomeController', function($scope, dataFactory, dataService) {

});
/**
 * Element controller
 */
myAppController.controller('ElementController', function($scope, $routeParams, $location, dataFactory, dataService, myCache) {
    $scope.collection = [];
    $scope.showFooter = true;
    $scope.deviceType = [];
    $scope.tags = [];
    $scope.rooms = [];
    $scope.levelVal = [];
    $scope.profileData = [];
    $scope.input = {
        'id': null,
        'metrics': null,
        'location': null,
        'tags': null,
        'permanently_hidden': false,
        'title': '',
        'dashboard': false,
        'deviceType': null,
        'level': null
    };
    $scope.isSelected = true;
    $scope.onText = 'ON';
    $scope.offText = 'OFF';
    $scope.isActive = true;
    $scope.size = 'small';
    $scope.animate = false;

    $scope.knobopt = {
        width: 100
    };

    // Cancel interval on page destroy
    $scope.$on('$destroy', function() {
        dataFactory.cancelApiDataInterval();
    });

    /**
     * Load data into collection
     */
    dataFactory.setCache(true);
    $scope.loadData = function() {
        //getData(callback,api,cache,params)
        dataFactory.getApiData('devices', function(data) {
            var filter = null;
            $scope.deviceType = dataService.getDeviceType(data.data.devices);
            $scope.tags = dataService.getTags(data.data.devices);
            dataFactory.getApiData('profiles', function(data) {
                var profile = dataService.getRowBy(data.data, 'id', $scope.profile.id);
                $scope.profileData = {
                    'id': profile ? profile.id : 1,
                    'name': profile ? profile.name : 'Default',
                    'positions': profile ? profile.positions : []
                };
            });
            dataFactory.getApiData('locations', function(data) {
                $scope.rooms = data.data;
            });
            if (angular.isDefined($routeParams.filter) && angular.isDefined($routeParams.val)) {
                switch ($routeParams.filter) {
                    case 'dashboard':
                        $scope.showFooter = false;
                        filter = {filter: "onDashboard", val: true};
                        break;
                    case 'deviceType':
                        filter = $routeParams;
                        break;
                    case 'tags':
                        filter = $routeParams;
                        break;
                    case 'location':
                        $scope.showFooter = false;
                        filter = $routeParams;
                        dataFactory.getApiData('locations', function(rooms) {
                            //getRowBy(data, key, val, cache);
                            var room = dataService.getRowBy(rooms.data, 'id', $routeParams.val, 'room_' + $routeParams.val);
                            if (room) {
                                $scope.headline = $scope._t('lb_devices_room') + ' ' + room.title;
                            }
                        });
                        break;
                    default:
                        break;
                }
            }
            dataFactory.getApiData('instances', function(instances) {
                $scope.collection = dataService.getDevices(data.data.devices, filter, $scope.profileData.positions, instances.data);
            });

        });
    };
    $scope.loadData();

    $scope.updateData = function() {
        dataFactory.updateApiData('devices', function(data) {
            dataService.updateDevices(data);
        });
    };
    $scope.updateData();
    //$(".dial").knob();

    /**
     * Chart data
     */
    $scope.chartData = {
        labels: ['01:00', '06:00', '10:00', '12:00', '14:00', '18:00', '20:00'],
        datasets: [
            /*{
             fillColor: 'rgba(220,220,220,0.5)',
             strokeColor: 'rgba(220,220,220,1)',
             pointColor: 'rgba(220,220,220,1)',
             pointStrokeColor: '#fff',
             data: [65, 59, 90, 81, 56, 55, 40]
             },*/
            {
                fillColor: 'rgba(151,187,205,0.5)',
                strokeColor: 'rgba(151,187,205,1)',
                pointColor: 'rgba(151,187,205,1)',
                pointStrokeColor: '#fff',
                data: [8, 10, 15, 20, 22, 18, 16]
            }
        ]
    };
    /**
     * Chart settings
     */
    $scope.chartOptions = {
        // Chart.js options can go here.
    };
    /**
     * Slider options
     */
    $scope.slider = {
        modelMax: 38
    };
    /**
     * Show modal window
     */
    $scope.showModal = function(target, input) {
        $scope.input = input;
        $(target).modal();
    };
    /**
     * Add tag to list
     */
    $scope.addTag = function(tag) {
        if (!tag || $scope.input.tags.indexOf(tag) > -1) {
            return;
        }
        $scope.input.tags.push(tag);
        $scope.addNewTag = null;
        return;
    };
    /**
     * Remove tag from list
     */
    $scope.removeTag = function(index) {
        $scope.input.tags.splice(index, 1);
    };
    /**
     * Update an item
     */
    $scope.store = function(input) {
        var inputData = {
            'id': input.id,
            'location': input.location,
            'tags': dataService.setArrayValue(input.tags, 'dashboard', input.dashboard),
            'permanently_hidden': input.permanently_hidden,
            'metrics': input.metrics
        };
        inputData.metrics.title = input.title;
        if (input.id) {
            //Load devices
            dataFactory.putApiData('devices', input.id, inputData, function(data) {
                //Load profiles
                dataFactory.getApiData('profiles', function(data) {
                    var profile = dataService.getRowBy(data.data, 'id', $scope.profile.id);
                    $scope.profileData = {
                        'id': profile.id,
                        'name': profile.name,
                        'positions': dataService.setArrayValue(profile.positions, input.id, input.dashboard)
                    };
                    saveDeviceIdIntoProfile(data, $scope.profileData);
                });
                myCache.remove('devices');
                myCache.remove('profiles');
                //dataFactory.setCache(false);
                $scope.loadData();
                //$route.reload();
            });
        }

    };
    /**
     * Redirect to module config
     */
    $scope.toModule = function(id, target) {
        $('.modal').remove();
        $('.modal-backdrop').remove();
        $('body').removeClass("modal-open");
        $location.path('module/put/' + id);
    };
    /**
     * Run command
     */
    $scope.runCmd = function(cmd) {
        dataFactory.runCmd(cmd);
        return;
    };
    /**
     * Run command exact value
     */
    $scope.runCmdExact = function(id, type, min, max) {
        var count;
        var val = parseInt($scope.levelVal[id]);
        var min = parseInt(min, 10);
        var max = parseInt(max, 10);
        switch (type) {
            case '-':
                count = val - 1;
                break;
            case '+':
                count = val + 1;
                break;
            default:
                count = parseInt(type, 10);
                break;
        }

        if (count < min) {
            count = min;
        }
        if (count > max) {
            count = max;
        }
        $scope.levelVal[id] = count;
        var cmd = id + '/command/exact?level=' + $scope.levelVal[id];
        console.log(cmd);
        dataFactory.runCmd(cmd);
        return;
    };

    /// --- Private functions --- ///
    /**
     * Save device id into profile
     */
    function saveDeviceIdIntoProfile(data, profileData) {
        if (data.error == null) {
            dataFactory.putApiData('profiles', profileData.id, profileData, function(data) {
            });
        }
        return;
    }
});
/**
 * Event controller
 */
myAppController.controller('EventController', function($scope, $routeParams, dataFactory, dataService, paginationService, cfg) {
    $scope.collection = [];
    $scope.eventLevel = [];
    $scope.currentPage = 1;
    $scope.pageSize = cfg.page_results;
    $scope.reset = function() {
        $scope.collection = angular.copy([]);
    };

    // Cancel interval on page destroy
    $scope.$on('$destroy', function() {
        dataFactory.cancelApiDataInterval();
    });

    /**
     * Load data into collection
     */
    $scope.loadData = function() {
        dataFactory.getApiData('notifications', function(data) {
            $scope.eventLevel = dataService.getEventLevel(data.data.notifications);
            var filter = null;
            if (angular.isDefined($routeParams.param) && angular.isDefined($routeParams.val)) {
                filter = $routeParams;
                angular.forEach(data.data.notifications, function(v, k) {
                    if (filter && angular.isDefined(v[filter.param])) {
                        if (v[filter.param] == filter.val) {
                            $scope.collection.push(v);
                        }
                    }
                });
            } else {
                $scope.collection = data.data.notifications;
            }

            //console.log($scope.eventLevel);
        });
    };
    $scope.loadData();
    /**
     * Update data into collection
     */
    $scope.updateData = function() {
        dataFactory.updateApiData('notifications', function(data) {
            angular.forEach(data.data.notifications, function(v, k) {
                $scope.collection.push(v);
            });
            //console.log(data.data.notifications);
        });
    };
    $scope.updateData();

    /**
     * Watch for pagination change
     */
    $scope.$watch('currentPage', function(page) {
        paginationService.setCurrentPage(page);
    });

    $scope.setCurrentPage = function(val) {
        $scope.currentPage = val;
    };

    /**
     * Update data into collection
     */
    $scope.markAsRead = function(id) {
        $('#row_' + id).fadeOut();
    };
    $scope.updateData();
});
/**
 * Profile controller
 */
myAppController.controller('ProfileController', function($scope, $window, $cookies, dataFactory) {
    $scope.collection = [];
    $scope.targetColor = '#6C7A89';
    $scope.input = {
        "id": null,
        "active": "false",
        "name": null,
        "description": null,
        "lang": 'en',
        "positions": [],
        "color": null,
        "groups": {
            "instances": []
        }

    };
    $scope.reset = function() {
        $scope.collection = angular.copy([]);
    };

    /**
     * Load data into collection
     */
    dataFactory.setCache(true);
    $scope.loadData = function() {
        dataFactory.getApiData('profiles', function(data) {
            $scope.collection = data.data;
        });
    };
    $scope.loadData();
    /**
     * Show modal window
     */
    $scope.showModal = function(target, input) {
        $scope.input = input;
        $(target).modal();
    };
    /**
     * Create/Update an item
     */
    $scope.store = function(input) {
        //var profileLang = (angular.fromJson($cookies.profileLang) ? angular.fromJson($cookies.profileLang) : []);
        var inputData = {
            "id": input.id,
            "name": input.name,
            "active": input.active,
            "lang": input.lang

        };
        if (input.id) {
            dataFactory.putApiData('profiles', input.id, inputData, function(data) {
                $scope.collection.push = data.data;
                dataFactory.setCache(false);
                $scope.loadData();
                //$route.reload();
            });
        } else {
            dataFactory.postApiData('profiles', inputData, function(data) {
                $scope.collection.push = data.data;
                dataFactory.setCache(false);
                $scope.loadData();
                input.id = data.data.id

            });
        }
//        if (profileLang.length > 0) {
//            angular.forEach(profileLang, function(v, k) {
//                if (v['id'] != input.id) {
//                    profileLang.push({'id': input.id, 'lang': input.lang});
//                }
//            });
//        } else {
//            profileLang.push({'id': input.id, 'lang': input.lang});
//        }
//         $cookies.profileLang = angular.toJson(profileLang);

    };
    /**
     * Delete an item
     */
    $scope.delete = function(target, input, dialog, except) {
        if (input.id == except) {
            return;
        }
        var confirm = true;
        if (dialog) {
            confirm = $window.confirm(dialog);
        }
        if (confirm) {
            dataFactory.deleteApiData('profiles', input.id, target);
            dataFactory.setCache(false);
            $scope.loadData();
        }
    };
});
/**
 * App controller
 */
myAppController.controller('AppController', function($scope, $window, dataFactory, dataService) {
    $scope.instances = [];
    $scope.modules = [];
    $scope.categories = [];
    $scope.activeTab = 'local';
    $scope.category = '';
    $scope.showFooter = true;
    $scope.showInFooter = {
        'categories': true,
        'serach': true
    };
    $scope.input = {
        'id': null,
        'name': null
    };
    $scope.reset = function() {
        $scope.instances = angular.copy([]);
        $scope.modules = angular.copy([]);
    };

    /**
     * Load data into collections
     */
    dataFactory.setCache(true);
    $scope.loadCategories = function() {
        dataFactory.getApiData('modules_categories', function(data) {
            $scope.categories = data.data;
        });
    };
    $scope.loadCategories();
    $scope.loadModules = function(filter) {
        dataFactory.getApiData('modules', function(data) {
            $scope.modules = dataService.getData(data.data, filter);
            console.log(filter);


        });
//        dataFactory.localData('apps.json', function(data) {
//            //$scope.modules = data;
//        });
    };
    $scope.loadInstances = function() {
        dataFactory.getApiData('instances', function(data) {
            $scope.instances = data.data;
        });
    };

    /**
     * Set tab
     */
    $scope.setTab = function(tabId) {
        $scope.activeTab = tabId;
    };

    // Watch for tab change
    $scope.$watch('activeTab', function() {
        switch ($scope.activeTab) {
            case 'instance':
                $scope.showInFooter.categories = false;
                $scope.loadInstances();

                break;
            default:
                $scope.showInFooter.categories = true;
                $scope.$watch('category', function() {
                    $scope.modules = angular.copy([]);
                    var filter = false;
                    if ($scope.category != '') {
                        filter = {
                            'filter': 'category',
                            'val': $scope.category
                        };
                    }
                    $scope.loadModules(filter);
                });
                break;
        }
    });

    /**
     * Show modal window
     */
    $scope.showInstanceModal = function(target, input) {
        $scope.input = input;
        $(target).modal();
    };
    /**
     * Show modal window for activate
     */
    $scope.showActivateModal = function(target, input) {
        console.log('Acivate func');
        $scope.input = input;
        $(target).modal();
    };

    /**
     * Ictivate instance
     */
    $scope.activateInstance = function(input) {
        var inputData = {
            'id': input.id,
            'active': input.active
        };
        if (input.id) {
            dataFactory.putApiData('instances', input.id, inputData, function(data) {
                //$scope.instance.push = data.data;
                dataFactory.setCache(false);
                $scope.loadInstances();
                //$route.reload();
            });
        }

    };

    /**
     * Ictivate instance
     */
    $scope.deleteInstance = function(target, input, dialog) {
        var confirm = true;
        if (dialog) {
            confirm = $window.confirm(dialog);
        }
        if (confirm) {
            dataFactory.deleteApiData('instances', input.id, target);
            dataFactory.setCache(false);
            //$scope.loadData();
        }
    };


    /**
     * Create an item
     */
    $scope.create = function(input) {
        if (input.id === null) {
            $scope.collection.push(input);
        }
        console.log(input);
    };
});
/**
 * App controller - add module
 */
myAppController.controller('AppModuleAlpacaController', function($scope, $routeParams, $filter, $location, dataFactory, dataService) {
   $scope.showForm = false;
    $scope.success = false;
    $scope.collection = {};
    $scope.input = {
        'instanceId': 0,
        'active': true,
        'moduleId': null,
        'title': null,
        'description': null,
        'moduleTitle': null,
         'category': null
    };

    // Post new module instance
    $scope.postModule = function(id) {
        dataFactory.getApiData('modules', function(module) {
           dataFactory.getApiData('namespaces', function(namespaces) {
                var formData =  dataService.getModuleFormData(module.data.meta, module.data.meta.defaults, namespaces.data);
                $scope.input = {
                    'instanceId': 0,
                    'moduleId': id,
                    'active': true,
                    'title': $filter('hasNode')(formData, 'data.title'),
                    'description': $filter('hasNode')(formData, 'data.description'),
                    'moduleTitle': $filter('hasNode')(formData, 'data.title'),
                    'category': module.data.meta.category
                };
                $('#alpaca_data').alpaca(formData);
                $scope.showForm = true;
            });
        }, '/' + id);
    };

    // Put module instance
    $scope.putModule = function(id) {
        if (id < 1) {
            return;
        }
        dataFactory.getApiData('instances', function(data) {
            var instance = data.data;
            dataFactory.getApiData('modules', function(module) {
                dataFactory.getApiData('namespaces', function(namespaces) {
                     var formData =  dataService.getModuleFormData(module.data.meta, instance.params, namespaces.data);
                   
                   $scope.input = {
                        'instanceId': instance.id,
                        'moduleId': module.data.meta.id,
                        'active': instance.active,
                        'title': instance.title,
                        'description': instance.description,
                        'moduleTitle': instance.title,
                        'category': module.data.meta.category
                    };
                    $('#alpaca_data').alpaca(formData);
                    $scope.showForm = true;
                    
                });
            }, '/' + instance.moduleId);

        }, '/' + id);
    };
    /**
     * Load data
     */

    switch ($routeParams.action) {
        case 'put':
            $scope.putModule($routeParams.id);
            break;
        case 'post':
            $scope.postModule($routeParams.id);
            break;
        default:
            break;
    }

    $scope.store = function(formId) {
        var data = $(formId).serializeArray();
        var defaults = ['instanceId','moduleId','active','title','description'];
        var input = [];
        var params = {};
        angular.forEach(data, function(v, k) {
           if(defaults.indexOf(v.name) > -1){
                 input[v.name] = v.value;
            }else{
                params[v.name] = v.value;
            }
           
        });
         console.log(params);
         var inputData = {
            'id': input.instanceId,
            'moduleId': input.moduleId,
            'active': input.active,
            'title': input.title,
            'description': input.description,
            'params': params
        };
        if (input.instanceId > 0) {
            dataFactory.putApiData('instances', input.instanceId, inputData, function(data) {
                $scope.success = true;
            });
        } else {
           
            dataFactory.postApiData('instances', inputData, function(data) {
                $location.path('/apps');
            });
        }
    };

});
/**
 * App controller - add module
 */
myAppController.controller('AppModuleController', function($scope, $routeParams, $filter, $location, dataFactory, dataService) {
    $scope.showForm = false;
    $scope.success = false;
    $scope.input = {
        'id': 0,
        'active': true,
        'moduleId': null,
        'title': null,
        'description': null,
        'moduleTitle': null,
        'params': {},
        'moduleInput': false
    };

    // Post new module instance
    $scope.postModule = function(id) {
        var module;
        dataFactory.getApiData('modules', function(modules) {
            module = dataService.getRowBy(modules.data, 'id', id);
            if (!module) {
                return;
            }
            dataFactory.getApiData('namespaces', function(namespaces) {
                $scope.input = {
                    //'id': instance.id,
                    'active': true,
                    'title': $filter('hasNode')(module, 'defaults.title'),
                    'description': $filter('hasNode')(module, 'defaults.description'),
                    'moduleTitle': $filter('hasNode')(module, 'defaults.title'),
                    'moduleId': module.id,
                    'category': module.category,
                    //'params': instance.params,
                    'moduleInput': dataService.getModuleConfigInputs(module, null, namespaces.data)
                };
                //console.log($scope.input)

                $scope.showForm = true;
            });
        });
        console.log('Add new module: ' + id);
    };

    // Put module instance
    $scope.putModule = function(id) {
        if (id < 1) {
            return;
        }
        var instance;
        var module;
        dataFactory.getApiData('instances', function(data) {
            instance = dataService.getRowBy(data.data, 'id', id);
            if (!instance) {
                return;
            }
            dataFactory.getApiData('modules', function(modules) {
                module = dataService.getRowBy(modules.data, 'id', instance.moduleId);
                dataFactory.getApiData('namespaces', function(namespaces) {
                    $scope.input = {
                        'id': instance.id,
                        'moduleId': module.id,
                        'active': instance.active,
                        'title': instance.title,
                        'description': instance.description,
                        'moduleTitle': $filter('hasNode')(module, 'defaults.title'),
                        'params': instance.params,
                        'moduleInput': dataService.getModuleConfigInputs(module, instance.params, namespaces.data)
                    };
                    $scope.showForm = true;
                });
            });

        });
    };
    /**
     * Load data
     */

    switch ($routeParams.action) {
        case 'put':
            $scope.putModule($routeParams.id);
            break;
        case 'post':
            $scope.postModule($routeParams.id);
            break;
        default:
            break;
    }

    /**
     * Store data
     */
    $scope.store = function(input) {
        var params = {};
        angular.forEach(input.moduleInput, function(v, k) {
            if (angular.isArray(v.value)) {
                params[v.inputName] = v.value.filter(function(e) {
                    return e
                });
            } else {
                params[v.inputName] = v.value;
            }

        });

        var inputData = {
            'id': input.id,
            'moduleId': input.moduleId,
            'active': input.active,
            'title': input.title,
            'description': input.description,
            'params': params
        };

        //return;
        if (input.id > 0) {
            dataFactory.putApiData('instances', input.id, inputData, function(data) {
                $scope.success = true;
            });
        } else {
            dataFactory.postApiData('instances', inputData, function(data) {
                $location.path('/apps');
            });
        }

    };

    /**
     * Update instance
     */
    $scope.putModule = function(form, input) {
        var data = $(form).serializeArray();
        var params = {};
        angular.forEach(data, function(v, k) {
            if (angular.isDefined(input.params[v.name])) {
                params[v.name] = v.value;
            }

        });

        var inputData = {
            'id': input.id,
            'title': input.title,
            //'description': input.description,
            'params': params
        };
        if (input.id) {
            dataFactory.putApiData('instances', input.id, inputData, function(data) {
                dataFactory.setCache(false);
                $scope.loadInstances();
            });
        }

    };

});
/**
 * Device controller
 */
myAppController.controller('DeviceController', function($scope, $routeParams, dataFactory, dataService) {
    $scope.zwaveDevices = [];
    $scope.zwaveDevicesFilter = false;
    $scope.deviceVendor = false;
    $scope.manufacturers = [];
    $scope.manufacturer = false;

    $scope.ipcameraDevices = [];

    if (angular.isDefined($routeParams.type)) {
        $scope.deviceVendor = $routeParams.type;
    }
    /**
     * Set filter
     */
    $scope.setFilter = function(filter) {
        $scope.zwaveDevicesFilter = filter;
    };
    /**
     * Load z-wave devices
     */
    $scope.loadZwaveDevices = function(filter, lang) {
        dataFactory.localData('dev.' + lang + '.json', function(data) {
            $scope.manufacturers = dataService.getPairs(data, 'ManufacturersName', 'ManufacturersImage', 'manufacturers');
            if (filter) {
                $scope.zwaveDevices = dataService.getData(data, filter);
                $scope.manufacturer = filter.val;
            }

        });
    };

    /**
     * Load ip cameras
     */
    $scope.loadIpcameras = function() {
        dataFactory.getApiData('modules', function(data) {
            $scope.ipcameraDevices = dataService.getData(data.data, {filter: "category", val: "surveillance"});
        });
    };

    $scope.$watch('deviceVendor', function() {
        switch ($scope.deviceVendor) {
            case 'zwave':
                $scope.$watch('zwaveDevicesFilter', function() {
                    $scope.loadZwaveDevices($scope.zwaveDevicesFilter, $scope.lang);
                });
                break;
            case 'ipcamera':
                $scope.loadIpcameras();
                break;
            case 'enocean':
                break;
            default:
                break;
        }
    });
});
/**
 * Device controller
 */
myAppController.controller('IncludeController', function($scope, $routeParams, $timeout, dataFactory) {
    $scope.device = {
        'data': null
    };
    $scope.controllerState = 0;
    $scope.zwaveApiData = [];
    $scope.includedDeviceId = null;
    $scope.lastIncludedDevice = null;
    $scope.lastExcludedDevice = null;
    $scope.hasBattery = false;
    $scope.inclusionError = false;
    $scope.messages = {
        "nm_controller_state_0": "Controller is in normal mode",
        "nm_controller_state_1": "Ready to include.",
        "nm_controller_state_2": "Device found, please wait...",
        "nm_controller_state_3": "Including device, please wait...",
        "nm_controller_state_4": "Device included.",
        "nm_controller_state_5": "Ready to exclude.",
        "nm_controller_state_6": "Device found, please wait...",
        "nm_controller_state_7": "Device excluded.",
        "nm_controller_state_8": "Ready to be (re-)included in the network.",
        "nm_controller_state_9": "(Re-)inclusion started.",
        "nm_controller_state_10": "Controller found, please wait...",
        "nm_controller_state_11": "(Re-)including myself in network, please wait...",
        "nm_controller_state_12": "Controller was (re-)included in network.",
        "nm_controller_state_13": "Ready to include new primary. Press a button on the device to be included.",
        "nm_controller_state_14": "Device found, please wait...",
        "nm_controller_state_15": "Including new primary, please wait...",
        "nm_controller_state_16": "Device included as primary.",
        "nm_controller_state_17": "Canceling.",
        "nm_controller_state_18": "Replace Failed Node process started.",
        "nm_controller_state_19": "Replace Failed Node ready to include replacement device."
    };
    // Cancel interval on page destroy
    $scope.$on('$destroy', function() {
        dataFactory.cancelApiDataInterval();
    });
    /**
     * Load data into collection
     */
    $scope.loadData = function(lang) {
        // Get device from JSON
        if (angular.isDefined($routeParams.device)) {
            dataFactory.localData('dev.' + lang + '.json', function(devices) {
                $scope.device.data = devices[$routeParams.device];

            });
        }

        // Get ZwaveApiData
        dataFactory.updateZwaveApiData(function(data) {
            if ('controller.data.controllerState' in data) {
                $scope.controllerState = data['controller.data.controllerState'].value;
                //console.log($scope.controllerState);
            }
            if ('controller.data.lastExcludedDevice' in data) {
                $scope.lastExcludedDevice = data['controller.data.lastExcludedDevice'].value;
            }
            if ('controller.data.lastIncludedDevice' in data) {
                var deviceIncId = data['controller.data.lastIncludedDevice'].value;
                if (deviceIncId != null) {
                    var givenName = 'Device_' + deviceIncId;
                    var cmd = 'devices[' + deviceIncId + '].data.givenName.value=\'' + givenName + '\'';
                    dataFactory.runZwaveCmd(cmd);
                    $scope.includedDeviceId = deviceIncId;
                }
            }
        });
    };

    $scope.loadData($scope.lang);

    // Watch for last excluded device
    $scope.$watch('includedDeviceId', function() {
        if ($scope.includedDeviceId) {
            var timeOut;
            timeOut = $timeout(function() {
                dataFactory.getZwaveApiData(function(ZWaveAPIData) {
                    var interviewDone = true;
                    var nodeId = $scope.includedDeviceId;
                    var instanceId = 0;
                    var hasBattery = 0x80 in ZWaveAPIData.devices[nodeId].instances[0].commandClasses;
                    var vendor = ZWaveAPIData.devices[nodeId].data.vendorString.value;
                    var deviceType = ZWaveAPIData.devices[nodeId].data.deviceTypeString.value;
                    $scope.hasBattery = hasBattery;
                    // Check interview
                    if (ZWaveAPIData.devices[nodeId].data.nodeInfoFrame.value && ZWaveAPIData.devices[nodeId].data.nodeInfoFrame.value.length) {
                        for (var iId in ZWaveAPIData.devices[nodeId].instances) {
                            if (ZWaveAPIData.devices[nodeId].instances[iId].commandClasses.length > 0) {
                                for (var ccId in ZWaveAPIData.devices[nodeId].instances[iId].commandClasses) {
                                    if (!ZWaveAPIData.devices[nodeId].instances[iId].commandClasses[ccId].data.interviewDone.value) {
                                        interviewDone = false;
                                    }
                                }
                            } else {
                                interviewDone = false;
                            }
                        }

                    } else {
                        interviewDone = false;
                    }
                    // Set device name
                    var deviceName = function(vendor, deviceType) {
                        if (!vendor && deviceType) {
                            return 'Device';
                        }
                        return vendor + ' ' + deviceType;
                    };
                    if (interviewDone) {
                        $scope.lastIncludedDevice = deviceName(vendor, deviceType) + ' ' + nodeId + '-' + instanceId;
                    } else {
                        $scope.inclusionError = true;
                    }

                    $scope.includedDeviceId = null;
                });

            }, 10000);
        }
    });

    /**
     * Run ExpertUI command
     */
    $scope.runZwaveCmd = function(cmd) {
        $scope.lastIncludedDevice = null;
        $scope.lastExcludedDevice = null;
        dataFactory.runZwaveCmd(cmd);

    };


});
/**
 * Room controller
 */
myAppController.controller('RoomController', function($scope, dataFactory) {
    $scope.collection = [];
    $scope.upload = {
        'showProgress': false,
        'progressVal': 0
    };
    $scope.showProgress = false;
    $scope.input = {
        'id': null,
        'name': null
    };
    $scope.reset = function() {
        $scope.collection = angular.copy([]);
    };

    /**
     * Load data into collection
     */
    $scope.loadData = function() {
        dataFactory.getApiData('locations', function(data) {
            $scope.collection = data.data;
        });
    };
    $scope.loadData();
    /**
     * Show modal window
     */
    $scope.showModal = function(target, input) {
        $scope.input = input;
        $(target).modal();
    };
});
/**
 * Room config controller
 */
myAppController.controller('RoomConfigController', function($scope, $window, $interval, $upload, cfg, dataFactory, dataService) {
    $scope.collection = [];
    $scope.devicesAssigned = [];
    //$scope.devicesAvailable = [];
    $scope.devicesToRemove = [];
    $scope.upload = {
        'showProgress': false,
        'progressVal': 0
    };
    $scope.defaultImages = [
        'kitchen.jpg',
        'bathroom.jpg',
        'sleeping_room.jpg',
        'living_room.jpg'
    ];
    $scope.showProgress = false;
    $scope.input = {
        'id': null,
        'title': null,
        'icon': null
    };
    $scope.reset = function() {
        $scope.collection = angular.copy([]);
    };

    /**
     * Load data into collection
     */
    dataFactory.setCache(true);
    $scope.loadData = function() {
        dataFactory.getApiData('locations', function(data) {
            $scope.collection = data.data;
        });
    };
    $scope.loadData();


    /**
     * Show modal window
     */
    $scope.showModal = function(target, input) {
        $scope.loadDevices = function() {
            dataFactory.getApiData('devices', function(data) {
                $scope.devices = dataService.getDevices(data.data.devices, false, false, false, input.id);
                $scope.devicesAssigned = dataService.getDevices(data.data.devices, {filter: "location", val: input.id});

            });
        };
        $scope.loadDevices();
        $scope.input = input;
        $(target).modal();
    };
    /**
     * Create/Update an item
     */
    $scope.store = function(input) {
        var inputData = {
            "id": input.id,
            "title": input.title,
            "icon": input.icon
        };

        if (input.id) {
            dataFactory.putApiData('locations', input.id, inputData, function(data) {
                $scope.collection.push = data.data;
                $scope.saveRoomIdIntoDevice(data, $scope.devicesAssigned);
                $scope.removeRoomIdFromDevice(data, $scope.devicesToRemove);
                dataFactory.setCache(false);
                $scope.loadData();
            });
        } else {
            dataFactory.postApiData('locations', inputData, function(data) {
                $scope.collection.push = data.data;
                $scope.saveRoomIdIntoDevice(data, $scope.devicesAssigned);
                $scope.removeRoomIdFromDevice(data, $scope.devicesToRemove);
                dataFactory.setCache(false);
                $scope.loadData();
                //$route.reload();
            });
        }
        return;

    };
    /**
     * Delete an item
     */
    $scope.delete = function(target, input, dialog) {
        var confirm = true;
        if (dialog) {
            confirm = $window.confirm(dialog);
        }
        if (confirm) {
            dataFactory.deleteApiData('locations', input.id, target);
            dataFactory.getApiData('devices', function(data) {
                var devices = dataService.getDevices(data.data.devices, {filter: "location", val: input.id});
                $scope.removeRoomIdFromDevice({'error': null}, devices);

            });
            dataFactory.setCache(false);
            $scope.loadData();
        }
    };
    /**
     * Assign device to room
     */
    $scope.assignDevice = function(id, selector, assign) {
        $(selector).toggleClass('hidden-device');
        $('#device_assigned_' + id).toggleClass('hidden-device');
        $scope.devicesAssigned.push(assign);
        return;

    };
    /**
     * Remove device from the room
     */
    $scope.removeDevice = function(id, selector, deviceId) {
        $(selector).toggleClass('hidden-device');
        $('#device_unassigned_' + id).toggleClass('hidden-device');
        var oldList = $scope.devicesAssigned;
        $scope.devicesAssigned = [];
        angular.forEach(oldList, function(v, k) {
            if (v.id != deviceId) {
                $scope.devicesAssigned.push(v);
            } else {
                $scope.devicesToRemove.push(v);
            }
        });
        return;
    };

    /**
     * Save room id into device
     */
    $scope.saveRoomIdIntoDevice = function(data, devices) {
        if (data.error == null) {
            angular.forEach(devices, function(v, k) {
                dataFactory.putApiData('devices', v.id, {'location': data.data.id}, function(data) {
                    //console.log(data);
                });
            });
        }
        return;

    };

    /**
     * Remove room id from device
     */
    $scope.removeRoomIdFromDevice = function(data, devices) {
        if (data.error == null) {
            angular.forEach(devices, function(v, k) {
                dataFactory.putApiData('devices', v.id, {'location': null}, function(data) {
                    // console.log(data);
                });
            });
        }
        return;

    };

    /**
     * Upload image
     */
    $scope.uploadImage = function($files) {
        $scope.showProgress = true;
        $scope.upload.showProgress = true;
        var url = 'upload.php';
        for (var i = 0; i < $files.length; i++) {
            var $file = $files[i];
            $upload.upload({
                url: url,
                fileFormDataName: 'config_backup',
                file: $file
            }).progress(function(evt) {
                console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            }).success(function(data, status, headers, config) {
                // file is uploaded successfully
                console.log(data);
            });
        }
        var countUp = function() {

            $scope.upload.progressVal += 5;
            if ($scope.upload.progressVal == 100) {
                $interval.cancel(progress);
                $scope.upload.showProgress = false;
                $scope.upload.progressVal = 0;
            }
        };
        var progress = $interval(countUp, 100);
    };
});
/**
 * Network controller
 */
myAppController.controller('NetworkController', function($scope, cfg, dataFactory, dataService) {

    $scope.batteries = {
        'list': [],
        'cntLess20': [],
        'cnt0': []
    };
    $scope.devices = {
        'failed': []
    };

    $scope.notInterviewDevices = [];
    $scope.reset = function() {
        $scope.batteries = angular.copy([]);
    };

    $scope.loadData = function() {
        dataFactory.getApiData('devices', function(data) {
            var devices = data.data.devices;
            $scope.batteries.list = dataService.getData(data.data.devices, {filter: "deviceType", val: 'battery'});
            for (i = 0; i < $scope.batteries.list.length; ++i) {
                var battery = $scope.batteries.list[i];
                if (battery.metrics.level < 1) {
                    $scope.batteries.cnt0.push(battery.id);
                }
                if (battery.metrics.level > 0 && battery.metrics.level < 20) {
                    $scope.batteries.cntLess20.push(battery.id);
                }

            }
            // Get ZwaveApiData
            dataFactory.getZwaveApiData(function(ZWaveAPIData) {
                var findZwaveStr = "ZWayVDev_zway_";
                angular.forEach(devices, function(v, k) {
                    var cmd;
                    var nodeId;
                    var iId;
                    var ccId;
                    if (v.id.indexOf(findZwaveStr) > -1) {
                        cmd = v.id.split(findZwaveStr)[1].split('-');
                        nodeId = cmd[0];
                        iId = cmd[1];
                        ccId = cmd[2];

                        var obj = {};
                        obj['id'] = v.id;
                        obj['metrics'] = v.metrics;
                        obj['messages'] = [];

                        var interviewDone = ZWaveAPIData.devices[nodeId].instances[iId].commandClasses[ccId].data.interviewDone.value;
                        if (!interviewDone) {
                            obj['messages'].push($scope._t('lb_not_configured'));
                        }
                        //obj['messages'].push('Another error message');
//                         console.log(v.id + ': ' + nodeId + ', ' + iId + ', ' + ccId)
//                         console.log(interviewDone)
//                          console.log(interviewDone)
                        // if(angular.isDefined())
                        $scope.devices.failed.push(obj);
                    }
                });
                //console.log($scope.devices.failed)
            });


        });
    };
    $scope.loadData();
});
/**
 * About controller
 */
myAppController.controller('AboutController', function($scope, dataFactory) {

});
