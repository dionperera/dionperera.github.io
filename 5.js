if(!window.TrustedSite){window.TrustedSite={config:[],window_width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,window_height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,is_mobile:this.window_height<=500||this.window_width<=500,init:function(){this.log("init");
if(navigator.userAgent.match(/; MSIE [6-9]/i)){return}this.load_config(function(){TrustedSite.load_trustmark();if(TrustedSite.config.load_conversion){TrustedSite.load_conversion()
}})},load_trustmark:function(){if(TrustedSite.is_mobile()&&TrustedSite.config.trustmark.disable_on_mobile){return}if(document.getElementById("trustedsite-tm-image")){return
}if(document.getElementById("trustedsite-tm-float-disable")){return}if(document.getElementsByClassName("trustedsite-tm-float-disable").length>0){return
}var m=TrustedSite.config.host;var j=TrustedSite.config.trustmark.position_x;var a=TrustedSite.config.trustmark.position_y;
var f=TrustedSite.config.trustmark.offset_x;if(1){var k=TrustedSite.cookie_get("trustedsite_visit");if(!k){TrustedSite.cookie_set("trustedsite_visit",1,24*60);
TrustedSite.load_js("https://www.trustedsite.com/rpc/ajax?do=tmjs-visit&host="+m+"&rand="+new Date().getTime())}}if(!TrustedSite.config.trustmark.enabled){return
}var b="png";var h=105;if(TrustedSite.config.brand=="ts"){h=205;b="svg"}var g="https://cdn.ywxi.net/meter/"+m+"/"+h+"."+b+"?ts="+TrustedSite.config.timestamp+"&l="+encodeURIComponent(navigator.language);
var d=a=="bottom"?"top":"bottom";var l=j=="right"?"left":"right";var c=document.getElementById("trustedsite-tm-style");if(!c){c=document.createElement("style");
c.setAttribute("id","trustedsite-tm-style");c.setAttribute("type","text/css");c.innerHTML=".trustedsite-body-noscroll{ overflow:hidden !important; width:100% !important;}";
document.getElementsByTagName("head")[0].appendChild(c)}var i=document.createElement("div");i.id="trustedsite-tm-image";i.title=TrustedSite.config.brand=="ts"?"TrustedSite Certified":"McAfee SECURE";
i.style.cssText=TrustedSite.cleanStyleCss()+"position:fixed;height:38px !important;width:92px !important;overflow:hidden !important;"+a+":0px !important;"+j+":"+f+"px !important;z-index:1000003 !important;cursor:pointer !important;";
i.oncontextmenu=function(){return false};i.onclick=function(){TrustedSite.toggleverify()};i.style.boxShadow="0 0 5px 0 rgba(0,0,0,0.20)";
i.style.backgroundColor="#fff";i.style.backgroundImage="url("+g+")";i.style.backgroundSize="92px 38px";i.style.backgroundRepeat="no-repeat";
i.style.backgroundPosition="center center";i.style["border-"+d+"-"+l+"-radius"]="2px";if(f>0){i.style["border-"+d+"-"+j+"-radius"]="2px"
}if(TrustedSite.config.brand=="ts"){TrustedSite.animatetm(i)}TrustedSite.appendChild(i);window.addEventListener("message",function(n){if(n.data&&n.data=="trustedsite_verify_show"){TrustedSite.toggleverify()
}},false)},animatetm:function(a){if(TrustedSite.cookie_get("trustedsite_tm_float_seen")){a.style.bottom="-13px"}else{TrustedSite.cookie_set("trustedsite_tm_float_seen",1,5);
a.style.bottom="-92px";window.setTimeout(function(){a.style.bottom="0px"},10);TrustedSite.animatetm_hide(a,5000)}a.style.transition="1s bottom linear";
a.onmouseout=function(){TrustedSite.animatetm_hide(a,1000)};a.onmouseover=function(){a.style.transition="0.2s bottom ease";
this.style.bottom="0px";window.clearTimeout(TrustedSite.animatetm_hide_to)}},animatetm_hide_to:0,animatetm_hide:function(b,a){TrustedSite.animatetm_hide_to=window.setTimeout(function(){b.style.transition="0.2s all";
b.style.bottom="-13px"},a)},toggleverify:function(c,f){if(!c){c=TrustedSite.config.brand}var d=c=="ts"?"https://www.trustedsite.com":"https://www.mcafeesecure.com";
if(TrustedSite.window_height<490||TrustedSite.window_width()<320||TrustedSite.config.trustmark.disable_modal){var k=d+"/verify?host="+TrustedSite.config.host+"&popup=1";
if(f){k+="&"+f}var j=window.open(k);if(!j){document.location=k}return}var k=d+"/verify-modal?host="+TrustedSite.config.host;
if(f){k+="&"+f}var m=document.getElementById("trustedsite-tm-verify");if(!m){m=document.createElement("div");m.id="trustedsite-tm-verify";
TrustedSite.cleanStyle(m);m.style.position="fixed";m.innerHTML='<iframe style="'+TrustedSite.cleanStyleCss()+'width:100%;height:100%;left:0;right:0;top:0;bottom:0;overflow-y:auto;overflow-x:hidden;" frameborder="0" scrolling="yes" src="'+k+'"></iframe>';
m.style.background="#e6e7e8";m.style.margin="0";m.style.padding="0";m.style.zIndex="1000004";m.style.display="none";document.body.addEventListener("keydown",TrustedSite.escapeverify);
document.body.appendChild(m)}var a=document.getElementById("trustedsite-tm-overlay");if(!a){a=document.createElement("div");
a.id="trustedsite-tm-overlay";TrustedSite.cleanStyle(a);a.style.position="fixed";a.style.top="0px";a.style.right="0px";a.style.left="0px";
a.style.bottom="0px";a.style.width="100%";a.style.height="100%";a.style.background="rgba(20, 20, 20, .95)";a.style.zIndex="1000003";
a.style.display="none";a.onclick=function(){TrustedSite.hideverify()};a.style.cursor="zoom-out";document.body.appendChild(a)
}var b=document.getElementById("trustedsite-tm-close");if(!b){b=document.createElement("div");TrustedSite.cleanStyle(b);b.id="trustedsite-tm-close";
b.style.backgroundImage="url(https://cdn.ywxi.net/static/img/modal-close.png)";b.style.backgroundSize="11px 11px";b.style.backgroundRepeat="no-repeat";
b.style.backgroundPosition="center center";b.style.zIndex="1000005";b.style.position="absolute";b.style.width="11px";b.style.height="11px";
b.style.right="10px";b.style.top="-20px";b.style.cursor="zoom-out";b.onclick=function(){TrustedSite.hideverify()};m.appendChild(b)
}if(TrustedSite.is_hidden("#trustedsite-tm-verify")){var l=TrustedSite.window_width();var i=TrustedSite.window_height();var j=l;
if(j>500){j=500}var g=i-60;if(g>480){g=480}m.style.width=j+"px";m.style.height=g+"px";m.style.top=((i/2)-(g/2))+"px";m.style.left=((l/2)-(j/2))+"px";
document.getElementById("trustedsite-tm-overlay").style.display="";document.getElementById("trustedsite-tm-verify").style.display="";
TrustedSite.add_class("body","trustedsite-body-noscroll")}else{TrustedSite.hideverify()}},hideverify:function(){document.removeEventListener("keydown",TrustedSite.escapeverify);
this.remove_element("#trustedsite-tm-overlay");this.remove_element("#trustedsite-tm-verify");this.remove_class("body","trustedsite-body-noscroll")
},escapeverify:function(a){if(a.key=="Escape"){TrustedSite.hideverify()}},load_conversion:function(){var a;if(TrustedSite.config.platform=="shopify"){if(location.pathname.endsWith("/thank_you")){a=Shopify.checkout.order_id
}}if(TrustedSite.config.platform=="bigcommerce"){}if(!a){return}var b=document.createElement("script");b.setAttribute("type","text/javascript");
b.setAttribute("class","trustedsite-track-conversion");b.setAttribute("data-orderid",a);b.setAttribute("src","https://cdn.ywxi.net/js/conversion.js");
document.getElementsByTagName("head")[0].appendChild(b)},float_reload:function(){var a=document.getElementById("trustedsite-tm-image");
if(a&&(document.getElementById("trustedsite-tm-float-disable")||document.getElementsByClassName("trustedsite-tm-float-disable").length>0)){a.parentNode.removeChild(a)
}TrustedSite.load_trustmark()},load_config:function(d){var b=this;var a=new String(window.location.host).replace(/^www\./,"");
var c="//s3-us-west-2.amazonaws.com/mfesecure-public/host/"+a+"/client.json?source=jsmain";b.get_json(c,function(f){b.config=f;
b.log("load_trustedsite_main");b.log(b.config);b.load_config_local();if(b.config.error){return}if(d){d(b.config)}},function(f){console.log("trustedsite-tm-main[config]["+f+"]")
})},load_config_local:function(){var a=document.getElementById("trustedsite-code");if(!a||!a.dataset){return}if(a.dataset.rescan){this.config.rescan=1
}},cleanStyle:function(a){try{a.style.maxWidth="none"}catch(b){}try{a.style.minWidth="none"}catch(b){}try{a.style.maxHeight="none"
}catch(b){}try{a.style.minHeight="none"}catch(b){}},cleanStyleCss:function(){return"margin:0;padding:0;border:0;background:none;max-width:none;max-height:none;"
},cookie_set:function(b,f,g){if(g){var c=new Date();c.setTime(c.getTime()+(g*60*1000));var a="expires="+c.toGMTString();document.cookie=b+"="+f+"; path=/;"+a
}else{document.cookie=b+"="+f+"; path=/;"}},cookie_get:function(d){var b=d+"=";var a=document.cookie.split(";");for(var f=0;
f<a.length;f++){var g=a[f].trim();if(g.indexOf(b)==0){return g.substring(b.length,g.length)}}return""},load_js:function(b){var a=document.createElement("script");
a.setAttribute("type","text/javascript");a.setAttribute("src",b);document.getElementsByTagName("head")[0].appendChild(a)},get_element:function(b){if(typeof b==="object"){return b
}if(typeof b==="string"){var a=document.querySelectorAll(b);return a.length>0?a.item(0):null}console.log("trustedsite unhandle element type ["+(typeof b)+"]");
return b},remove_element:function(a){if(!a){return}a=this.get_element(a);a.parentNode.removeChild(a)},is_hidden:function(a){a=this.get_element(a);
return window.getComputedStyle(a).display==="none"},has_class:function(a,b){a=this.get_element(a);return new RegExp("\\b"+b+"\\b").test(a.className)
},add_class:function(b,c){b=this.get_element(b);var a=b.className.split(" ");if(a.indexOf(c)==-1){b.className+=" "+c}},remove_class:function(b,c){b=this.get_element(b);
var a=b.className.replace(new RegExp("\\b"+c+"\\b","g"),"");if(b.className!=a){b.className=a}},get_json:function(b,c,a){var d=new XMLHttpRequest();
d.open("GET",b,true);d.responseType="text";d.onload=function(){if(d.status===200){if(c){c(JSON.parse(d.response))}}else{if(a){a(d.status)
}}};d.send()},window_width:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth
},window_height:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},is_mobile:function(){return this.window_height()<=500||this.window_width()<=500
},log:function(b,a){if(!a&&(!window.location.hash||window.location.hash.indexOf("TRUSTEDSITEDEBUG")==-1)){return}console.log("trustedsite-main ",b);
return 0},appendChild:function(a,c){var b=this;if(!c){c=0}if(c>100){return}if(document.body){document.body.appendChild(a)
}else{window.setTimeout(function(){b.appendChild(a,c+1)},100)}},}}if(!window.TrustedSite_done){window.TrustedSite_done=1;
TrustedSite.init()}try{window.addEventListener("message",function(a){if(a.data&&new String(a.data).indexOf("mfesecure_verifyhover_hide")==0){TrustedSite.hideverify()
}if(a.data&&new String(a.data).indexOf("trustedsite_verifyhover_hide")==0){TrustedSite.hideverify()}})}catch(e){}if(!window.TrustedSiteInline){window.TrustedSiteInline={config:[],init:function(){TrustedSiteInline.log("init");
if(navigator.userAgent.match(/; MSIE [6-9]/i)){return}TrustedSiteInline.load_config(function(){TrustedSiteInline.load_inline();
TrustedSiteInline.load_rescan()})},load_inline:function(){if(!TrustedSiteInline.config.secure||!TrustedSiteInline.config.pro){return
}var c=new String(window.location.host).replace(/^www\./,"");var a=document.querySelectorAll("div.mfes-trustmark:not(.loaded),div.trustedsite-trustmark:not(.loaded)");
for(var b=0;b<a.length;b++){var d=a.item(b);if(TrustedSiteInline.has_class(d,"loaded")){return}TrustedSiteInline.add_class(d,"loaded");
TrustedSiteInline.load_inline_sub(d)}},load_inline_sub:function(k){var j=new String(window.location.host).replace(/^www\./,"");
var h=parseInt(k.getAttribute("data-type"));if(!h){return}TrustedSiteInline.log("loading "+h);var a=[parseInt(k.getAttribute("data-width")),parseInt(k.getAttribute("data-height"))];
var b=k.getAttribute("data-ext");if(b!="png"&&b!="svg"){b="svg"}var i=location.protocol==="https:"?1:0;var c="mfe";var d="";
if(h==101){a=TrustedSiteInline.calc_wh(a,125,55);b="png"}else{if(h==102){a=TrustedSiteInline.calc_wh(a,90,37)}else{if(h==103){a=TrustedSiteInline.calc_wh(a,320,40)
}else{if([202,214,301,302,303,304].indexOf(h)>=0){if(TrustedSiteInline.config.brand!="ts"){return}a=TrustedSiteInline.calc_wh(a,120,50);
c="ts"}else{if(h==216){d="inbox=1";a=TrustedSiteInline.calc_wh(a,160,50);c="ts"}else{if(h==204){if(TrustedSiteInline.config.brand!="ts"){return
}a=TrustedSiteInline.calc_wh(a,320,70);c="ts"}else{if(h==203){if(TrustedSiteInline.config.brand!="ts"){return}a=TrustedSiteInline.calc_wh(a,320,40);
c="ts"}else{if([211,212,213].indexOf(h)>=0){if(TrustedSiteInline.config.brand!="ts"){return}if(!i){return}a=TrustedSiteInline.calc_wh(a,120,50);
c="ts"}else{if(h==1001){if(a[0]){k.style.width=a[0]+"px";k.style.display="inline-block"}k.style.height="60px";k.style.minWidth="200px";
b="html"}else{if(h==1002){if(!a[0]&&!a[1]){a[1]=150}if(a[0]){k.style.width=a[0]+"px";k.style.display="inline-block"}if(a[1]){k.style.height=a[1]+"px"
}k.style.minHeight="150px";k.style.minWidth="180px";b="html"}else{return}}}}}}}}}}k.oncontextmenu=function(){return false
};if(b=="html"){k.innerHTML='<iframe src="https://www.trustedsite.com/widget/tm-'+h+"/?host="+j+'" style="border:0px;height:100%;width:100%;" width="100%" height="100%"></iframe>';
return}var g="https://cdn.ywxi.net/meter/"+j+"/"+h+"."+b+"?ts="+TrustedSiteInline.config.timestamp+"&l="+encodeURIComponent(navigator.language);
if(b=="png"){g+="&w="+(2*a[0])+"&h="+(2*a[1])}var f=k.getAttribute("data-color");if(f){g+="&color="+encodeURIComponent(f)
}k.tabIndex=0;k.style.width=a[0]+"px";k.style.height=a[1]+"px";k.style.display="inline-block";k.style.backgroundImage="url("+g+")";
k.style.backgroundSize="contain";k.style.backgroundPosition="top center";k.style.backgroundRepeat="no-repeat";k.style.cursor="pointer";
k.onclick=function(){TrustedSiteInline.handle_verify(c,j,d)};k.addEventListener("keydown",function(l){if(l.key=="Enter"){TrustedSiteInline.handle_verify(c,j)
}})},handle_verify:function(d,c,a){if(window.TrustedSite){window.TrustedSite.toggleverify(d,a)}else{var b=d=="ts"?"https://www.trustedsite.com":"https://www.mcafeesecure.com";
b+="/verify?host="+c;if(a){b+="&"+a}window.open(b)}},calc_wh:function(b,a,d){var c=b&&b.length==2?b[0]:0;var f=b&&b.length==2?b[1]:0;
if(c&&c>0){return[c,parseInt(c/a*d)]}if(f&&f>0){return[parseInt(f/d*a),f]}return[a,d]},load_rescan:function(){if(!TrustedSiteInline.config||!TrustedSiteInline.config.secure||!TrustedSiteInline.config.pro){return
}TrustedSiteInline.log("rescan enabled",1);window.setInterval(function(){TrustedSiteInline.load_inline()},100)},load_config:function(d){var b=this;
var a=new String(window.location.host).replace(/^www\./,"");var c="//s3-us-west-2.amazonaws.com/mfesecure-public/host/"+a+"/client.json?source=jsinline";
b.get_json(c,function(f){b.config=f;b.log("load_trustedsite_inline");b.log(b.config);b.load_config_local();if(b.config.error){return
}if(d){d(b.config)}},function(f){console.log("trustedsite-tm-inline[config]["+f+"]")})},load_config_local:function(){var a=document.getElementById("trustedsite-code");
if(!a||!a.dataset){return}if(a.dataset.rescan){this.config.rescan=1}},cleanStyle:function(a){try{a.style.maxWidth="none"}catch(b){}try{a.style.minWidth="none"
}catch(b){}try{a.style.maxHeight="none"}catch(b){}try{a.style.minHeight="none"}catch(b){}},cleanStyleCss:function(){return"margin:0;padding:0;border:0;background:none;max-width:none;max-height:none;"
},cookie_set:function(b,f,g){if(g){var c=new Date();c.setTime(c.getTime()+(g*60*1000));var a="expires="+c.toGMTString();document.cookie=b+"="+f+"; path=/;"+a
}else{document.cookie=b+"="+f+"; path=/;"}},cookie_get:function(d){var b=d+"=";var a=document.cookie.split(";");for(var f=0;
f<a.length;f++){var g=a[f].trim();if(g.indexOf(b)==0){return g.substring(b.length,g.length)}}return""},load_js:function(b){var a=document.createElement("script");
a.setAttribute("type","text/javascript");a.setAttribute("src",b);document.getElementsByTagName("head")[0].appendChild(a)},get_element:function(b){if(typeof b==="object"){return b
}if(typeof b==="string"){var a=document.querySelectorAll(b);return a.length>0?a.item(0):null}console.log("trustedsite unhandle element type ["+(typeof b)+"]");
return b},remove_element:function(a){if(!a){return}a=this.get_element(a);a.parentNode.removeChild(a)},is_hidden:function(a){a=this.get_element(a);
return window.getComputedStyle(a).display==="none"},has_class:function(a,b){a=this.get_element(a);return new RegExp("\\b"+b+"\\b").test(a.className)
},add_class:function(b,c){b=this.get_element(b);var a=b.className.split(" ");if(a.indexOf(c)==-1){b.className+=" "+c}},remove_class:function(b,c){b=this.get_element(b);
var a=b.className.replace(new RegExp("\\b"+c+"\\b","g"),"");if(b.className!=a){b.className=a}},get_json:function(b,c,a){var d=new XMLHttpRequest();
d.open("GET",b,true);d.responseType="text";d.onload=function(){if(d.status===200){if(c){c(JSON.parse(d.response))}}else{if(a){a(d.status)
}}};d.send()},window_width:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth
},window_height:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},is_mobile:function(){return this.window_height()<=500||this.window_width()<=500
},log:function(b,a){if(!a&&(!window.location.hash||window.location.hash.indexOf("TRUSTEDSITEDEBUG")==-1)){return}console.log("trustedsite-inline ",b);
return 0},appendChild:function(a,c){var b=this;if(!c){c=0}if(c>100){return}if(document.body){document.body.appendChild(a)
}else{window.setTimeout(function(){b.appendChild(a,c+1)},100)}},}}TrustedSiteInline.init();