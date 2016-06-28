define(["./core","./var/document","./var/rnotwhite","./ajax/var/location","./ajax/var/nonce","./ajax/var/rquery","./core/init","./ajax/parseJSON","./ajax/parseXML","./event/trigger","./deferred"],function(e,t,n,r,i,o){function a(t){return function(r,i){"string"!=typeof r&&(i=r,r="*");var o,a=0,s=r.toLowerCase().match(n)||[];if(e.isFunction(i))for(;o=s[a++];)"+"===o[0]?(o=o.slice(1)||"*",(t[o]=t[o]||[]).unshift(i)):(t[o]=t[o]||[]).push(i)}}function s(t,n,r,i){function o(u){var c;return a[u]=!0,e.each(t[u]||[],function(e,t){var u=t(n,r,i);return"string"!=typeof u||s||a[u]?s?!(c=u):void 0:(n.dataTypes.unshift(u),o(u),!1)}),c}var a={},s=t===A;return o(n.dataTypes[0])||!a["*"]&&o("*")}function u(t,n){var r,i,o=e.ajaxSettings.flatOptions||{};for(r in n)void 0!==n[r]&&((o[r]?t:i||(i={}))[r]=n[r]);return i&&e.extend(!0,t,i),t}function c(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}function l(e,t,n,r){var i,o,a,s,u,c={},l=e.dataTypes.slice();if(l[1])for(a in e.converters)c[a.toLowerCase()]=e.converters[a];for(o=l.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=l.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(a=c[u+" "+o]||c["* "+o],!a)for(i in c)if(s=i.split(" "),s[1]===o&&(a=c[u+" "+s[0]]||c["* "+s[0]])){a===!0?a=c[i]:c[i]!==!0&&(o=s[0],l.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(f){return{state:"parsererror",error:a?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}var f=/#.*$/,d=/([?&])_=[^&]*/,p=/^(.*?):[ \t]*([^\r\n]*)$/gm,h=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,m=/^(?:GET|HEAD)$/,g=/^\/\//,v={},A={},y="*/".concat("*"),b=t.createElement("a");return b.href=r.href,e.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:r.href,type:"GET",isLocal:h.test(r.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":y,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":e.parseJSON,"text xml":e.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,n){return n?u(u(t,e.ajaxSettings),n):u(e.ajaxSettings,t)},ajaxPrefilter:a(v),ajaxTransport:a(A),ajax:function(a,u){function h(t,n,r,i){var o,a,s,u,f,d=n;2!==N&&(N=2,E&&window.clearTimeout(E),w=void 0,_=i||"",B.readyState=t>0?4:0,o=t>=200&&300>t||304===t,r&&(u=c(D,B,r)),u=l(D,u,B,o),o?(D.ifModified&&(f=B.getResponseHeader("Last-Modified"),f&&(e.lastModified[x]=f),f=B.getResponseHeader("etag"),f&&(e.etag[x]=f)),204===t||"HEAD"===D.type?d="nocontent":304===t?d="notmodified":(d=u.state,a=u.data,s=u.error,o=!s)):(s=d,(t||!d)&&(d="error",0>t&&(t=0))),B.status=t,B.statusText=(n||d)+"",o?M.resolveWith(P,[a,d,B]):M.rejectWith(P,[B,d,s]),B.statusCode(F),F=void 0,T&&j.trigger(o?"ajaxSuccess":"ajaxError",[B,D,o?a:s]),q.fireWith(P,[B,d]),T&&(j.trigger("ajaxComplete",[B,D]),--e.active||e.event.trigger("ajaxStop")))}"object"==typeof a&&(u=a,a=void 0),u=u||{};var w,x,_,C,E,k,T,S,D=e.ajaxSetup({},u),P=D.context||D,j=D.context&&(P.nodeType||P.jquery)?e(P):e.event,M=e.Deferred(),q=e.Callbacks("once memory"),F=D.statusCode||{},R={},z={},N=0,I="canceled",B={readyState:0,getResponseHeader:function(e){var t;if(2===N){if(!C)for(C={};t=p.exec(_);)C[t[1].toLowerCase()]=t[2];t=C[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===N?_:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return N||(e=z[n]=z[n]||e,R[e]=t),this},overrideMimeType:function(e){return N||(D.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>N)for(t in e)F[t]=[F[t],e[t]];else B.always(e[B.status]);return this},abort:function(e){var t=e||I;return w&&w.abort(t),h(0,t),this}};if(M.promise(B).complete=q.add,B.success=B.done,B.error=B.fail,D.url=((a||D.url||r.href)+"").replace(f,"").replace(g,r.protocol+"//"),D.type=u.method||u.type||D.method||D.type,D.dataTypes=e.trim(D.dataType||"*").toLowerCase().match(n)||[""],null==D.crossDomain){k=t.createElement("a");try{k.href=D.url,k.href=k.href,D.crossDomain=b.protocol+"//"+b.host!=k.protocol+"//"+k.host}catch(O){D.crossDomain=!0}}if(D.data&&D.processData&&"string"!=typeof D.data&&(D.data=e.param(D.data,D.traditional)),s(v,D,u,B),2===N)return B;T=e.event&&D.global,T&&0===e.active++&&e.event.trigger("ajaxStart"),D.type=D.type.toUpperCase(),D.hasContent=!m.test(D.type),x=D.url,D.hasContent||(D.data&&(x=D.url+=(o.test(x)?"&":"?")+D.data,delete D.data),D.cache===!1&&(D.url=d.test(x)?x.replace(d,"$1_="+i++):x+(o.test(x)?"&":"?")+"_="+i++)),D.ifModified&&(e.lastModified[x]&&B.setRequestHeader("If-Modified-Since",e.lastModified[x]),e.etag[x]&&B.setRequestHeader("If-None-Match",e.etag[x])),(D.data&&D.hasContent&&D.contentType!==!1||u.contentType)&&B.setRequestHeader("Content-Type",D.contentType),B.setRequestHeader("Accept",D.dataTypes[0]&&D.accepts[D.dataTypes[0]]?D.accepts[D.dataTypes[0]]+("*"!==D.dataTypes[0]?", "+y+"; q=0.01":""):D.accepts["*"]);for(S in D.headers)B.setRequestHeader(S,D.headers[S]);if(D.beforeSend&&(D.beforeSend.call(P,B,D)===!1||2===N))return B.abort();I="abort";for(S in{success:1,error:1,complete:1})B[S](D[S]);if(w=s(A,D,u,B)){if(B.readyState=1,T&&j.trigger("ajaxSend",[B,D]),2===N)return B;D.async&&D.timeout>0&&(E=window.setTimeout(function(){B.abort("timeout")},D.timeout));try{N=1,w.send(R,h)}catch(O){if(!(2>N))throw O;h(-1,O)}}else h(-1,"No Transport");return B},getJSON:function(t,n,r){return e.get(t,n,r,"json")},getScript:function(t,n){return e.get(t,void 0,n,"script")}}),e.each(["get","post"],function(t,n){e[n]=function(t,r,i,o){return e.isFunction(r)&&(o=o||i,i=r,r=void 0),e.ajax(e.extend({url:t,type:n,dataType:o,data:r,success:i},e.isPlainObject(t)&&t))}}),e});