!function(){"use strict";function e(e){var t=document.createElement("div");return t.innerHTML='<a href="'+e.replace(/"/g,"&quot;")+'"></a>',t.childNodes[0].getAttribute("href")}function t(e,t){var r=e.substr(t,2);return parseInt(r,16)}function r(r,n){for(var a="",c=t(r,n),o=n+2;o<r.length;o+=2){var i=t(r,o)^c;a+=String.fromCharCode(i)}return e(a)}var n="/cdn-cgi/l/email-protection#",a=".__cf_email__",c="data-cfemail";try{!function(){for(var e=document.getElementsByTagName("a"),t=0;t<e.length;t++)try{var a=e[t],c=a.href.indexOf(n);c>-1&&(a.href="mailto:"+r(a.href,c+n.length))}catch(e){}}(),function(){for(var e=document.querySelectorAll(a),t=0;t<e.length;t++)try{var n=e[t],o=r(n.getAttribute(c),0),i=document.createTextNode(o);n.parentNode.replaceChild(i,n)}catch(e){}}()}catch(e){}}();