define(["../core","../core/parseHTML","../ajax","../traversing","../manipulation","../selector","../event/alias"],function(e){var t=e.fn.load;e.fn.load=function(n,r,i){if("string"!=typeof n&&t)return t.apply(this,arguments);var o,a,s,u=this,c=n.indexOf(" ");return c>-1&&(o=e.trim(n.slice(c)),n=n.slice(0,c)),e.isFunction(r)?(i=r,r=void 0):r&&"object"==typeof r&&(a="POST"),u.length>0&&e.ajax({url:n,type:a||"GET",dataType:"html",data:r}).done(function(t){s=arguments,u.html(o?e("<div>").append(e.parseHTML(t)).find(o):t)}).always(i&&function(e,t){u.each(function(){i.apply(u,s||[e.responseText,t,e])})}),this}});