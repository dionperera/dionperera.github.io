if(window.jQuery===undefined){var jqTag=document.createElement("script");jqTag.setAttribute("type","text/javascript");jqTag.setAttribute("src","https://code.jquery.com/jquery-2.1.4.min.js");
if(jqTag.readyState){jqTag.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){loadTrustmark()
}}}else{jqTag.onload=loadTrustmark}(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(jqTag)
}else{jQuery=window.jQuery;loadTrustmark()}function loadJs(c,d,b){var a=document.createElement("script");a.setAttribute("type","text/javascript");
a.setAttribute("src",d);c.appendChild(a);if(!!b){a.onload=b}}function loadTrustmark(){jQuery(function(){var a=document.getElementsByTagName("body")[0];
loadJs(a,"https://cdn.ywxi.net/js/1.js",function(){if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||jQuery(window).height()<=400||jQuery(window).width()<=400){var b=setInterval(function(){var c=document.getElementById("trustedsite-image");
if(!!c&&!!c.onmouseover){c.onmouseover=null;clearInterval(b)}},500)}})})};