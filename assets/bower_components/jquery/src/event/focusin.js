define(["../core","../data/var/dataPriv","./support","../event","./trigger"],function(e,t,n){return n.focusin||e.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(t){e.event.simulate(r,t.target,e.event.fix(t))};e.event.special[r]={setup:function(){var e=this.ownerDocument||this,o=t.access(e,r);o||e.addEventListener(n,i,!0),t.access(e,r,(o||0)+1)},teardown:function(){var e=this.ownerDocument||this,o=t.access(e,r)-1;o?t.access(e,r,o):(e.removeEventListener(n,i,!0),t.remove(e,r))}}}),e});