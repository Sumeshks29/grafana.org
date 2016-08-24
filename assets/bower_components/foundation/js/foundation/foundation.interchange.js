!function(e,t,n,i){"use strict";Foundation.libs.interchange={name:"interchange",version:"5.4.7",cache:{},images_loaded:!1,nodes_loaded:!1,settings:{load_attr:"interchange",named_queries:{"default":"only screen",small:Foundation.media_queries.small,medium:Foundation.media_queries.medium,large:Foundation.media_queries.large,xlarge:Foundation.media_queries.xlarge,xxlarge:Foundation.media_queries.xxlarge,landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(t,n,i){if(/IMG/.test(t[0].nodeName)){var r=t[0].src;if(new RegExp(n,"i").test(r))return;return t[0].src=n,i(t[0].src)}var o=t.data(this.data_attr+"-last-path"),a=this;if(o!=n)return/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(n)?(e(t).css("background-image","url("+n+")"),t.data("interchange-last-path",n),i(n)):e.get(n,function(e){t.html(e),t.data(a.data_attr+"-last-path",n),i()})}}},init:function(t,n,i){Foundation.inherit(this,"throttle random_str"),this.data_attr=this.set_data_attr(),e.extend(!0,this.settings,n,i),this.bindings(n,i),this.load("images"),this.load("nodes")},get_media_hash:function(){var e="";for(var t in this.settings.named_queries)e+=matchMedia(this.settings.named_queries[t]).matches.toString();return e},events:function(){var n,i=this;return e(t).off(".interchange").on("resize.fndtn.interchange",i.throttle(function(){var e=i.get_media_hash();e!==n&&i.resize(),n=e},50)),this},resize:function(){var t=this.cache;if(!this.images_loaded||!this.nodes_loaded)return void setTimeout(e.proxy(this.resize,this),50);for(var n in t)if(t.hasOwnProperty(n)){var i=this.results(n,t[n]);i&&this.settings.directives[i.scenario[1]].call(this,i.el,i.scenario[0],function(){if(arguments[0]instanceof Array)var e=arguments[0];else var e=Array.prototype.slice.call(arguments,0);i.el.trigger(i.scenario[1],e)})}},results:function(e,t){var n=t.length;if(n>0)for(var i=this.S("["+this.add_namespace("data-uuid")+'="'+e+'"]');n--;){var r,o=t[n][2];if(r=this.settings.named_queries.hasOwnProperty(o)?matchMedia(this.settings.named_queries[o]):matchMedia(o),r.matches)return{el:i,scenario:t[n]}}return!1},load:function(e,t){return("undefined"==typeof this["cached_"+e]||t)&&this["update_"+e](),this["cached_"+e]},update_images:function(){var e=this.S("img["+this.data_attr+"]"),t=e.length,n=t,i=0,r=this.data_attr;for(this.cache={},this.cached_images=[],this.images_loaded=0===t;n--;){if(i++,e[n]){var o=e[n].getAttribute(r)||"";o.length>0&&this.cached_images.push(e[n])}i===t&&(this.images_loaded=!0,this.enhance("images"))}return this},update_nodes:function(){var e=this.S("["+this.data_attr+"]").not("img"),t=e.length,n=t,i=0,r=this.data_attr;for(this.cached_nodes=[],this.nodes_loaded=0===t;n--;){i++;var o=e[n].getAttribute(r)||"";o.length>0&&this.cached_nodes.push(e[n]),i===t&&(this.nodes_loaded=!0,this.enhance("nodes"))}return this},enhance:function(n){for(var i=this["cached_"+n].length;i--;)this.object(e(this["cached_"+n][i]));return e(t).trigger("resize").trigger("resize.fndtn.interchange")},convert_directive:function(e){var t=this.trim(e);return t.length>0?t:"replace"},parse_scenario:function(e){var t=e[0].match(/(.+),\s*(\w+)\s*$/),n=e[1];if(t)var i=t[1],r=t[2];else var o=e[0].split(/,\s*$/),i=o[0],r="";return[this.trim(i),this.convert_directive(r),this.trim(n)]},object:function(e){var t=this.parse_data_attr(e),n=[],i=t.length;if(i>0)for(;i--;){var r=t[i].split(/\((.*?)(\))$/);if(r.length>1){var o=this.parse_scenario(r);n.push(o)}}return this.store(e,n)},store:function(e,t){var n=this.random_str(),i=e.data(this.add_namespace("uuid",!0));return this.cache[i]?this.cache[i]:(e.attr(this.add_namespace("data-uuid"),n),this.cache[n]=t)},trim:function(t){return"string"==typeof t?e.trim(t):t},set_data_attr:function(e){return e?this.namespace.length>0?this.namespace+"-"+this.settings.load_attr:this.settings.load_attr:this.namespace.length>0?"data-"+this.namespace+"-"+this.settings.load_attr:"data-"+this.settings.load_attr},parse_data_attr:function(e){for(var t=e.attr(this.attr_name()).split(/\[(.*?)\]/),n=t.length,i=[];n--;)t[n].replace(/[\W\d]+/,"").length>4&&i.push(t[n]);return i},reflow:function(){this.load("images",!0),this.load("nodes",!0)}}}(jQuery,window,window.document);