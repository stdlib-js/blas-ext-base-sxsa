"use strict";var a=function(s,r){return function(){return r||s((r={exports:{}}).exports,r),r.exports}};var o=a(function(D,q){
var v=5;function E(s,r,e,u,_){var i,n,t;if(s<=0||r===0)return e;if(i=_,u===1){if(n=s%v,n>0)for(t=0;t<n;t++)e[i]-=r,i+=u;if(s<v)return e;for(t=n;t<s;t+=v)e[i]-=r,e[i+1]-=r,e[i+2]-=r,e[i+3]-=r,e[i+4]-=r,i+=v;return e}for(t=0;t<s;t++)e[i]-=r,i+=u;return e}q.exports=E
});var y=a(function(F,c){
var M=require('@stdlib/strided-base-stride2offset/dist'),O=o();function b(s,r,e,u){return O(s,r,e,u,M(s,u))}c.exports=b
});var j=a(function(G,d){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=y(),k=o();g(m,"ndarray",k);d.exports=m
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=j(),f,R=z(w(__dirname,"./native.js"));A(R)?f=B:f=R;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
