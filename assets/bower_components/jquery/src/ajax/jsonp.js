define(["../core","./var/nonce","./var/rquery","../ajax"],function(e,t,n){var r=[],i=/(=)\?(?=&|$)|\?\?/;e.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var n=r.pop()||e.expando+"_"+t++;return this[n]=!0,n}}),e.ajaxPrefilter("json jsonp",function(t,o,a){var s,c,u,l=t.jsonp!==!1&&(i.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&i.test(t.data)&&"data");return l||"jsonp"===t.dataTypes[0]?(s=t.jsonpCallback=e.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,l?t[l]=t[l].replace(i,"$1"+s):t.jsonp!==!1&&(t.url+=(n.test(t.url)?"&":"?")+t.jsonp+"="+s),t.converters["script json"]=function(){return u||e.error(s+" was not called"),u[0]},t.dataTypes[0]="json",c=window[s],window[s]=function(){u=arguments},a.always(function(){void 0===c?e(window).removeProp(s):window[s]=c,t[s]&&(t.jsonpCallback=o.jsonpCallback,r.push(s)),u&&e.isFunction(c)&&c(u[0]),u=c=void 0}),"script"):void 0})});