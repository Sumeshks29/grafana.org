define(["Modernizr","docElement","isSVG"],function(e,t,n){function r(r){var i=t.className,o=e._config.classPrefix||"";if(n&&(i=i.baseVal),e._config.enableJSClass){var a=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");i=i.replace(a,"$1"+o+"js$2")}e._config.enableClasses&&(i+=" "+o+r.join(" "+o),n?t.className.baseVal=i:t.className=i)}return r});