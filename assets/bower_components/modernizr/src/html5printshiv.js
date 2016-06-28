define(["isSVG"],function(t){var e;return t||!function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=C.elements;return"string"==typeof t?t.split(" "):t}function r(t,e){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof t&&(t=t.join(" ")),C.elements=n+" "+t,c(e)}function o(t){var e=x[t[b]];return e||(e={},w++,t[b]=w,x[w]=e),e}function s(t,n,i){if(n||(n=e),g)return n.createElement(t);i||(i=o(n));var r;return r=i.cache[t]?i.cache[t].cloneNode():_.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),!r.canHaveChildren||A.test(t)||r.tagUrn?r:i.frag.appendChild(r)}function a(t,n){if(t||(t=e),g)return t.createDocumentFragment();n=n||o(t);for(var r=n.frag.cloneNode(),s=0,a=i(),l=a.length;l>s;s++)r.createElement(a[s]);return r}function l(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return C.shivMethods?s(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-:]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(C,e.frag)}function c(t){t||(t=e);var i=o(t);return!C.shivCSS||m||i.hasCSS||(i.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||l(t,i),t}function u(t){for(var e,n=t.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+i().join("|")+")$","i"),s=[];r--;)e=n[r],o.test(e.nodeName)&&s.push(e.applyElement(d(e)));return s}function d(t){for(var e,n=t.attributes,i=n.length,r=t.ownerDocument.createElement(T+":"+t.nodeName);i--;)e=n[i],e.specified&&r.setAttribute(e.nodeName,e.nodeValue);return r.style.cssText=t.style.cssText,r}function f(t){for(var e,n=t.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+i().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),s="$1"+T+"\\:$2";r--;)e=n[r]=n[r].split("}"),e[e.length-1]=e[e.length-1].replace(o,s),n[r]=e.join("}");return n.join("{")}function h(t){for(var e=t.length;e--;)t[e].removeNode()}function p(t){function e(){clearTimeout(s._removeSheetTimer),i&&i.removeNode(!0),i=null}var i,r,s=o(t),a=t.namespaces,l=t.parentWindow;return!k||t.printShived?t:("undefined"==typeof a[T]&&a.add(T),l.attachEvent("onbeforeprint",function(){e();for(var o,s,a,l=t.styleSheets,c=[],d=l.length,h=Array(d);d--;)h[d]=l[d];for(;a=h.pop();)if(!a.disabled&&E.test(a.media)){try{o=a.imports,s=o.length}catch(p){s=0}for(d=0;s>d;d++)h.push(o[d]);try{c.push(a.cssText)}catch(p){}}c=f(c.reverse().join("")),r=u(t),i=n(t,c)}),l.attachEvent("onafterprint",function(){h(r),clearTimeout(s._removeSheetTimer),s._removeSheetTimer=setTimeout(e,500)}),t.printShived=!0,t)}var m,g,v="3.7.3",y=t.html5||{},A=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,_=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,b="_html5shiv",w=0,x={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",m="hidden"in t,g=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){m=!0,g=!0}}();var C={elements:y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:v,shivCSS:y.shivCSS!==!1,supportsUnknownElements:g,shivMethods:y.shivMethods!==!1,type:"default",shivDocument:c,createElement:s,createDocumentFragment:a,addElements:r};t.html5=C,c(e);var E=/^$|\b(?:all|print)\b/,T="html5shiv",k=!g&&function(){var n=e.documentElement;return!("undefined"==typeof e.namespaces||"undefined"==typeof e.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof t.attachEvent)}();C.type+=" print",C.shivPrint=p,p(e),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof window?window:this,document),e});