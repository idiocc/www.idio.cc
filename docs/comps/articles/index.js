function V(a,b){a.prototype=u(b.prototype);a.prototype.constructor=a;if(z)z(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}function W(){var a=M.call(this)||this;a.state.l=!1;return a}V(W,M);W.prototype.componentDidMount=function(){this.setState({l:!0})};W.prototype.componentWillUnmount=function(){this.setState({l:!1})};
W.prototype.render=function(a){var b=void 0===a.timeout?250:a.timeout;return L("span",{},a.children,this.state.l&&L(X,{timeout:b}))};function X(){var a=M.call(this)||this;a.state={j:0};a.a=null;return a}V(X,M);X.prototype.componentDidMount=function(){var a=this;this.a=setInterval(function(){var b=a.state.j+1;3<b&&(b=0);a.setState({j:b})},this.props.timeout)};X.prototype.componentWillUnmount=function(){clearInterval(this.a)};X.prototype.render=function(){return L("span",{},".".repeat(this.state.j))};var da={"styles/sidebar.css":H,"styles/on-this-page.css":I};F();G();var ea={ellipsis:W,"github-badge":S,"social-buttons":T},fa=P();
[{key:"social-buttons",id:"cbbf8",props:{url:"https://www.idio.cc/articles/",c:!0,className:"b-xq b-Hk"}},{key:"github-badge",id:"ce314",props:{g:"idiocc",name:"idio"}},{key:"ellipsis",id:"ceb55",props:{timeout:300},children:["\n  Please bear one moment while I add the content\n"]},{key:"github-badge",id:"ce149",props:{g:"idiocc",name:"www.idio.cc"}}].forEach(function(a){var b=a.key,c=a.id,d=void 0===a.props?{}:a.props,e=void 0===a.children?[]:a.children,f=ea[b],p=f.plain||/^\s*class\s+/.test(f.toString())&&
!M.isPrototypeOf(f);d.i={f:"/",v:function(g){return J(da[g])}};c.split(",").forEach(function(g){var l=O(g,b),m=l.parent,h=l.b;if(h){var k={key:b,id:g,plain:p},n;h.render=function(){return n=R(k,f,n,h,m,d,e)};h.render.c=k;fa.observe(h)}})});

//# sourceMappingURL=index.js.map