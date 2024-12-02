(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{5100:function(e,t,r){Promise.resolve().then(r.bind(r,5115))},7907:function(e,t,r){"use strict";var n=r(5313);r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},9079:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(3127)},3127:function(e){"use strict";!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c=[],l=!1,a=-1;function d(){l&&n&&(l=!1,n.length?c=n.concat(c):a=-1,c.length&&f())}function f(){if(!l){var e=u(d);l=!0;for(var t=c.length;t;){for(n=c,c=[];++a<t;)n&&n[a].run();a=-1,t=c.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new m(e,t)),1!==c.length||l||u(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},s=!0;try{t[e](i,i.exports,n),s=!1}finally{s&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},5115:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(3827),o=r(4090),i=r(7907),s=r(9079);async function u(e){try{let t=await fetch("".concat(s.env.NEXT_PUBLIC_API_URL,"/posts"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await t.json()}catch(e){throw console.error("Error creating post:",e),e}}function c(){let e=(0,i.useRouter)(),[t,r]=(0,o.useState)(null),[s,c]=(0,o.useState)(!1),l=async t=>{t.preventDefault(),c(!0),r(null);let n=new FormData(t.currentTarget);try{await u({title:n.get("title"),description:n.get("description"),imageUrl:n.get("imageUrl")}),e.push("/posts"),e.refresh()}catch(e){r("Failed to create post")}finally{c(!1)}};return(0,n.jsx)("div",{className:"max-w-2xl mx-auto mt-8",children:(0,n.jsxs)("form",{onSubmit:l,className:"space-y-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700",children:"Title"}),(0,n.jsx)("input",{type:"text",name:"title",id:"title",required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Description"}),(0,n.jsx)("textarea",{name:"description",id:"description",rows:4,required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"imageUrl",className:"block text-sm font-medium text-gray-700",children:"Image URL"}),(0,n.jsx)("input",{type:"url",name:"imageUrl",id:"imageUrl",required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),t&&(0,n.jsx)("div",{className:"text-red-500 text-sm",children:t}),(0,n.jsx)("button",{type:"submit",disabled:s,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50",children:s?"Creating...":"Create Post"})]})})}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=5100)}),_N_E=e.O()}]);