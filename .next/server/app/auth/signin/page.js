(()=>{var e={};e.id=98,e.ids=[98],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},63477:e=>{"use strict";e.exports=require("querystring")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},26798:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=t(50482),i=t(69108),n=t(62563),a=t.n(n),o=t(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(r,l);let d=["",{children:["auth",{children:["signin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,24841)),"f:\\IT\\GitHub\\chi_it_hw_11\\src\\app\\auth\\signin\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,47570)),"f:\\IT\\GitHub\\chi_it_hw_11\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"]}],c=["f:\\IT\\GitHub\\chi_it_hw_11\\src\\app\\auth\\signin\\page.tsx"],u="/auth/signin/page",x={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/auth/signin/page",pathname:"/auth/signin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},97083:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,26840,23)),Promise.resolve().then(t.t.bind(t,38771,23)),Promise.resolve().then(t.t.bind(t,13225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,43982,23))},14616:(e,r,t)=>{Promise.resolve().then(t.bind(t,45995))},91082:(e,r,t)=>{Promise.resolve().then(t.bind(t,15101)),Promise.resolve().then(t.bind(t,21052))},8428:(e,r,t)=>{"use strict";var s=t(14767);t.o(s,"useRouter")&&t.d(r,{useRouter:function(){return s.useRouter}})},45995:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(95344),i=t(3729),n=t(47674),a=t(8428);function o(){let e=(0,a.useRouter)(),[r,t]=(0,i.useState)("");async function o(r){r.preventDefault();let s=new FormData(r.currentTarget),i=s.get("email"),a=s.get("password");try{let r=await (0,n.signIn)("credentials",{email:i,password:a,redirect:!1});r?.error?t(r.error):(e.push("/"),e.refresh())}catch(e){console.error("An error occurred:",e)}}return s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:(0,s.jsxs)("div",{className:"max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow",children:[s.jsx("div",{children:s.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Увійти в акаунт"})}),(0,s.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:o,children:[r&&s.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded",children:r}),(0,s.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"email",className:"sr-only",children:"Email"}),s.jsx("input",{id:"email",name:"email",type:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",placeholder:"Email"})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"password",className:"sr-only",children:"Пароль"}),s.jsx("input",{id:"password",name:"password",type:"password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",placeholder:"Пароль"})]})]}),s.jsx("div",{children:s.jsx("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:"Увійти"})})]})]})})}},15101:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var s=t(95344),i=t(56506),n=t(47674);function a(){let{data:e}=(0,n.useSession)();return s.jsx("nav",{className:"bg-white shadow-lg",children:s.jsx("div",{className:"container mx-auto px-4",children:(0,s.jsxs)("div",{className:"flex justify-between h-16",children:[(0,s.jsxs)("div",{className:"flex",children:[s.jsx("div",{className:"flex-shrink-0 flex items-center",children:s.jsx(i.default,{href:"/",className:"text-xl font-bold",children:"Museum"})}),(0,s.jsxs)("div",{className:"hidden sm:ml-6 sm:flex sm:space-x-8",children:[s.jsx(i.default,{href:"/posts",className:"inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-500",children:"Exhibits"}),e&&s.jsx(i.default,{href:"/posts/new",className:"inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-500",children:"Add Exhibit"})]})]}),s.jsx("div",{className:"hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4",children:e?(0,s.jsxs)(s.Fragment,{children:[s.jsx("span",{className:"text-gray-900",children:e.user?.name}),s.jsx("button",{onClick:()=>(0,n.signOut)(),className:"px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700",children:"Sign Out"})]}):(0,s.jsxs)(s.Fragment,{children:[s.jsx(i.default,{href:"/auth/login",className:"px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500",children:"Sign In"}),s.jsx(i.default,{href:"/auth/register",className:"px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700",children:"Register"})]})})]})})})}},21052:(e,r,t)=>{"use strict";t.r(r),t.d(r,{SessionProvider:()=>n});var s=t(95344),i=t(47674);function n({children:e,session:r}){return s.jsx(i.SessionProvider,{session:r,children:e})}},24841:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>n,__esModule:()=>i,default:()=>a});let s=(0,t(86843).createProxy)(String.raw`f:\IT\GitHub\chi_it_hw_11\src\app\auth\signin\page.tsx`),{__esModule:i,$$typeof:n}=s,a=s.default},47570:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>g,metadata:()=>f});var s=t(25036),i=t(53640),n=t.n(i);t(5023);var a=t(86843);let o=(0,a.createProxy)(String.raw`f:\IT\GitHub\chi_it_hw_11\src\components\layout\Navigation.tsx`),{__esModule:l,$$typeof:d}=o,c=o.default;var u=t(81355);let x=(0,a.createProxy)(String.raw`f:\IT\GitHub\chi_it_hw_11\src\components\providers\SessionProvider.tsx`),{__esModule:m,$$typeof:p}=x;x.default;let h=(0,a.createProxy)(String.raw`f:\IT\GitHub\chi_it_hw_11\src\components\providers\SessionProvider.tsx#SessionProvider`),f={title:"Музей",description:"Музейна колекція експонатів"};async function g({children:e}){let r=await (0,u.getServerSession)();return s.jsx("html",{lang:"uk",children:s.jsx("body",{className:n().className,children:(0,s.jsxs)(h,{session:r,children:[s.jsx(c,{}),s.jsx("main",{children:e})]})})})}},5023:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[431,355,424],()=>t(26798));module.exports=s})();