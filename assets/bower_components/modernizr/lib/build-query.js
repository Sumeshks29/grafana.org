define(["lodash","metadata"],function(e,t){function n(n){return e.find(t,function(e){return e.amdPath==n||e.amdPath=="test/"+n})}return function(t){var r=!t.minify,i=e.chain(t["feature-detects"]).map(function(t){var r=n(t),i=r&&r.property;return i?i=e.isArray(i)?i.join("_").replace("-","_"):i.replace("-","_"):void 0}).filter().value(),o=e.map(t.options,function(e){return 0===e.indexOf("html5")&&(e=e.replace("html5","")),e.toLowerCase()}),a=i.sort(),s=o.sort(),c="?-"+a.concat(s).join("-")+(r?"-dontmin":"")+(t.classPrefix?"-cssclassprefix:"+t.classPrefix:"");return c}});