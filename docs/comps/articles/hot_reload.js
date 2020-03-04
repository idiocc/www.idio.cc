function S(a,b){this.loaded=this.a=null;this.m=[a];this.j=[b]}S.prototype.error=function(a){this.a=a;this.j.forEach(function(b){b(a)})};S.prototype.load=function(a){this.loaded=a;this.m.forEach(function(b){b(a)})};function pa(a,b,c){var d=document.createElement("script");d.src=a;d.onload=b;d.onerror=c;(document.head||document.body).appendChild(d)}function qa(a,b,c){var d=document.createElement("link");d.rel="stylesheet";d.href=a;d.onload=b;d.onerror=c;(document.head||document.body).appendChild(d)};function ra(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(null,c.responseText)};c.onerror=function(d){return b(d)};c.open("GET",a,!0);c.send()}function sa(a,b){var c=T(a,qa,U[a],function(d){return b(null,d)},function(d){return b(d)},a.nocache);c&&(U[a]=c)}
function T(a,b,c,d,e,f){if(f)b(a,d,e);else if(c&&c.loaded)d(c.loaded);else if(c&&c.a)e(c.a);else if(c)c.m.push(d),c.j.push(e);else{var l=new S(d,e);b(a,function(g){l.load(g)},function(g){l.error(g)});return l}}function V(a,b){var c=!1,d=[],e=0;a.forEach(function(f,l){function g(k){c||(c=k,b(k))}function m(k){c||(e++,d[l]=k,e==a.length&&b(null,d))}f.endsWith(".json")?ra(f,function(k,h){k?g(k):m(h)}):ta(f,m,g)})}var W={},U={};function ta(a,b,c){(b=T(a,pa,W[a],b,c,a.nocache))&&(W[a]=b)};function X(a){this.b=a;this.a=null}X.load=function(a,b,c){b=c.I;c=[c.path,b?"/snapsvg/dist/snap.svg.js":"/snapsvg/dist/snap.svg-min.js"].concat(r(b?[]:["/@artdeco/snapsvg-animator/svg-anim.min.js"]));V(c,function(d,e){if(d)return a(d);try{var f=q(e).next().value;a(null,{json:JSON.parse(f)})}catch(l){a(l)}})};X.prototype.unrender=function(){this.a.stop()};
X.prototype.render=function(a){var b=a.json,c=a.width,d=a.height;a=a.align;if(this.a)this.a.play();else{var e=this.b.querySelector("img");this.a=new window.SVGAnim(b,c,d);b=this.a.s.node;b.style.position="absolute";b.style.top=0;"right"==a?b.style.right=0:"center"==a?(b.style.right=0,b.style.left=0,b.style.margin="0 auto"):b.style.left=0;b.style.maxWidth="100%";b.style.maxHeight="100%";b.removeAttribute("height");this.b.appendChild(b);setTimeout(function(){e.style.opacity=0},100)}};
y.Object.defineProperties(X,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Y(a){this.b=a}
Y.prototype.render=function(a){var b=a.src,c=a.H,d=this.b.querySelector("img"),e="";try{e=this.b.querySelector("picture").className}catch(f){}a=document.createElement("video");b=['<source src="'+b+'" type="video/mp4">'];c&&b.unshift('<source src="'+c+'" type="video/webm">');a.innerHTML=b.join("\n");a.loop=!0;a.autoplay=!0;a.a=!0;a.muted=!0;a.style=d.style;a.style.position="absolute";a.style.top=0;a.style.left=0;b=(d.className.replace("ImageHolder","")+(" "+e)).split(" ").filter(Boolean).join(" ");a.className=
b;this.b.appendChild(a);this.b=null};y.Object.defineProperties(Y,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Z(a){this.b=a}Z.load=function(a,b,c){b=void 0===c.G?"default":c.G;var d=c.lang;c=c.l.i;d||a(Error("The language was not specified."));var e=d.split(",").map(ua);V([c+"js/highlight.pack.js"],function(f){if(f)return a(f);V(e,a)});b&&sa(c+"highlight.js/styles/"+b+".css",function(){})};Z.prototype.render=function(){hljs.highlightBlock(this.b.querySelector("code"))};y.Object.defineProperties(Z,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});
function ua(a){return"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/languages/"+a+".min.js"};var va=window.developer;va.onclick=function(){va.parentElement.innerText="The internet is made by people like you."};var wa=window.user;wa.onclick=function(){wa.parentElement.innerText="You give developers something to do!"};var xa={"styles/sidebar.css":D,"styles/on-this-page.css":E};B();C();var ya={animation:X,ellipsis:N,"gif-video":Y,"github-badge":P,highlightjs:Z,"social-buttons":Q},za=K();
[{key:"gif-video",id:"c5c99",props:{src:"hot_reload/2-history/img/devtools.mp4",H:"hot_reload/2-history/img/devtools.webm"}},{key:"github-badge",id:"ce314",props:{o:"idiocc",name:"idio"}},{key:"ellipsis",id:"c06ef,c06ef1"},{key:"animation",id:"c259c",props:{path:"../flash/animate/frontend.json",width:623,height:256}},{key:"gif-video",id:"c3492",props:{src:"hot_reload/img/dan.mp4"}},{key:"highlightjs",id:"ccdbf,ccdbf1,ccdbf2,ccdbf3,ccdbf4,ccdbf5,ccdbf6,ccdbf7,ccdbf8,ccdbf9",props:{lang:"javascript"}},
{key:"github-badge",id:"ce149",props:{o:"idiocc",name:"www.idio.cc"}},{key:"social-buttons",id:"c5130",props:{url:"https://www.idio.cc/articles/pure-hot-reload.html",c:!0,className:"SocialSharing b-xq b-Hk"}}].forEach(function(a){var b=a.key,c=a.id,d=void 0===a.props?{}:a.props,e=void 0===a.children?[]:a.children,f=ya[b],l=f.plain||/^\s*class\s+/.test(f.toString())&&!I.isPrototypeOf(f);d.l={i:"/",D:function(g){return F(xa[g])}};c.split(",").forEach(function(g){var m=J(g,b),k=m.parent,h=m.b;if(h){var n=
{key:b,id:g,plain:l},p;h.render=function(){return p=M(n,f,p,h,k,d,e)};h.render.c=n;za.observe(h)}})});

//# sourceMappingURL=hot_reload.js.map