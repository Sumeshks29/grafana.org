define(["tests"],function(e){var t={_version:"__VERSION__",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(t,n,i){e.push({name:t,fn:n,options:i})},addAsyncTest:function(t){e.push({name:null,fn:t})}};return t});