(function(){
'use strict';CindyJS.registerPlugin(1,"ComplexCurves",function(a){function b(b,a){var c,d;for(c in b)(d=a[c])?d(n(b[c])):console.log("Modifier "+c+" not supported")}function e(a,e){a=h(a[0],"CSCanvas");var c=g[a];if(!c)return console.log("Unknown instance '"+a+"'"),l;var d=1,f=[0,0,0];b(e,{alpha:function(a){d=k(a,d)},autorotate:function(a){c.setAutorotate(m(a))},background:function(a){f=q(a,f)},clip:function(a){c.setClipping(m(a))},ortho:function(a){c.setOrtho(m(a))},transparency:function(a){c.setTransparency(m(a))},
view:function(a){switch(h(a)){case "Back":c.rotateBack();break;case "Bottom":c.rotateBottom();break;case "Default":c.rotateDefault();break;case "Front":c.rotateFront();break;case "Left":c.rotateLeft();break;case "Right":c.rotateRight();break;case "Top":c.rotateTop()}},zoom:function(a){c.setZoom(r(a,1))}});c.setBackground(f[0],f[1],f[2],d);return l}var l=a.nada,n=a.evaluate;a=a.defineFunction;var g={};a("ComplexCurves",1,e);a("ComplexCurves",2,function(a,b){var c=h(a[0],"CSCanvas"),d=document.getElementById(c),
f=h(a[1],"y^2-x"),p=12;void 0!==b.depth&&(p=t(n(b.depth)));delete b.depth;g[c]&&g[c].f&&g[c].f();if(".bin"===f.substr(-4,4))var u=ComplexCurves.fromFile(d,f,"",void 0,void 0,void 0,function(){g[c]=u;e([a[0]],b)});else if(d=ComplexCurves.fromEquation(d,f,p))g[c]=d,e([a[0]],b);return l})});function v(a){var b;b=void 0===b?null:b;return"list"!==a.ctype?(console.log("argument is not a list"),b):a.value}function q(a,b){b=void 0===b?[.5,.5,.5]:b;if("number"===a.ctype){var e=k(a);if(!isNaN(e))return[e,e,e]}a=v(a);return null===a?b:3!=a.length?(console.log("Not an RGB color vector"),b):a.map(function(a){return k(a)})}
function r(a,b){b=void 0===b?Number.NaN:b;if("number"!==a.ctype)return console.log("argument is not a number"),b;a=a.value;b=a.real;0!==a.imag&&console.log("complex number is not real");return b}function t(a){var b=12,b=void 0===b?Number.NaN:b;if("number"!==a.ctype)return console.log("argument is not a number"),b;b=a.value;a=b.real;b=b.imag;0!==b&&console.log("complex number is not real");b=Math.round(a);b!==a&&console.log("number is not an integer");return b}
function k(a,b){b=void 0===b?Number.NaN:b;a=r(a,b);return 0>a?0:1<a?1:a}function h(a,b){b=void 0===b?null:b;if("string"===a.ctype)return a.value;console.log("argument is not a string");return b}function m(a){if("boolean"===a.ctype)return a.value;console.log("argument is not boolean");return!1};
})();

