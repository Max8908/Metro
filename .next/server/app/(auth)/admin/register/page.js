(()=>{var e={};e.id=1816,e.ids=[1816],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},67974:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>m,tree:()=>d}),s(81658),s(23180),s(68295),s(99287),s(54864);var a=s(23191),r=s(88716),i=s(37922),n=s.n(i),o=s(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d=["",{children:["(auth)",{children:["admin",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,81658)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\(auth)\\admin\\register\\page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,23180)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\(auth)\\layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,68295)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\layout.js"],loading:[()=>Promise.resolve().then(s.bind(s,99287)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,54864)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\(auth)\\admin\\register\\page.js"],c="/(auth)/admin/register/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(auth)/admin/register/page",pathname:"/admin/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8557:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,79404,23))},70465:(e,t,s)=>{Promise.resolve().then(s.bind(s,61916))},61916:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var a=s(10326);s(39649);var r=s(19859),i=s(18132),n=s(59849);s(90434),s(9684);var o=s(9546),l=s(17577);let d=()=>{let{register:e}=(0,o.a)({middleware:"guest",redirectIfAuthenticated:"/dashboard"}),[t,s]=(0,l.useState)(""),[d,u]=(0,l.useState)(""),[c,p]=(0,l.useState)(""),[m,h]=(0,l.useState)(""),[g,x]=(0,l.useState)([]);return(0,a.jsxs)("form",{onSubmit:s=>{s.preventDefault(),e({name:t,email:d,password:c,password_confirmation:m,setErrors:x})},children:[(0,a.jsxs)("div",{children:[a.jsx(n.Z,{htmlFor:"name",children:"Nom"}),a.jsx(r.Z,{id:"name",type:"text",value:t,className:"block mt-1 w-full",onChange:e=>s(e.target.value),required:!0,autoFocus:!0}),a.jsx(i.Z,{messages:g.name,className:"mt-2"})]}),(0,a.jsxs)("div",{className:"mt-4",children:[a.jsx(n.Z,{htmlFor:"email",children:"Email"}),a.jsx(r.Z,{id:"email",type:"email",value:d,className:"block mt-1 w-full",onChange:e=>u(e.target.value),required:!0}),a.jsx(i.Z,{messages:g.email,className:"mt-2"})]}),(0,a.jsxs)("div",{className:"mt-4",children:[a.jsx(n.Z,{htmlFor:"password",children:"Mot de passe"}),a.jsx(r.Z,{id:"password",type:"password",value:c,className:"block mt-1 w-full",onChange:e=>p(e.target.value),required:!0,autoComplete:"new-password"}),a.jsx(i.Z,{messages:g.password,className:"mt-2"})]}),(0,a.jsxs)("div",{className:"mt-4",children:[a.jsx(n.Z,{htmlFor:"passwordConfirmation",children:"Confirmer Mot de passe"}),a.jsx(r.Z,{id:"passwordConfirmation",type:"password",value:m,className:"block mt-1 w-full",onChange:e=>h(e.target.value),required:!0}),a.jsx(i.Z,{messages:g.password_confirmation,className:"mt-2"})]}),a.jsx("div",{className:"flex items-center justify-end mt-4"})]})}},39649:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(10326);let r=({type:e="submit",className:t,...s})=>a.jsx("button",{type:e,className:`${t} inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150`,...s})},19859:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(10326);let r=({disabled:e=!1,className:t,...s})=>a.jsx("input",{disabled:e,className:`${t} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`,...s})},18132:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(10326);let r=({messages:e=[],className:t=""})=>a.jsx(a.Fragment,{children:e.length>0&&a.jsx(a.Fragment,{children:e.map((e,s)=>a.jsx("p",{className:`${t} text-sm text-red-600`,children:e},s))})})},59849:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(10326);let r=({className:e,children:t,...s})=>a.jsx("label",{className:`${e} block font-medium text-sm text-gray-700`,...s,children:t})},9546:(e,t,s)=>{"use strict";s.d(t,{a:()=>o});var a=s(4040),r=s(80235),i=s(17577),n=s(35047);let o=({middleware:e,redirectIfAuthenticated:t}={})=>{let s=(0,n.useRouter)(),o=(0,n.useParams)(),{data:l,error:d,mutate:u}=(0,a.ZP)("/api/user",()=>r.Z.get("/api/user").then(e=>e.data).catch(e=>{if(409!==e.response.status)throw e;s.push("/verify-email")})),c=()=>r.Z.get("/sanctum/csrf-cookie"),p=async({setErrors:e,...t})=>{await c(),e([]),r.Z.post("/register",t).then(()=>u()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},m=async({setErrors:e,setStatus:t,...s})=>{await c(),e([]),t(null),r.Z.post("/login",s).then(()=>u()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},h=async({setErrors:e,...t})=>{await c(),"function"==typeof e&&e([]),r.Z.post("/api/client-register",t).then(()=>u()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},g=async({setErrors:e,setStatus:t,...s})=>{await c(),e([]),t(null),r.Z.post("/api/client-login",s).then(()=>u()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},x=async({setErrors:e,setStatus:t,email:s})=>{await c(),e([]),t(null),r.Z.post("/forgot-password",{email:s}).then(e=>t(e.data.status)).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},v=async({setErrors:e,setStatus:t,...a})=>{await c(),e([]),t(null),r.Z.post("/reset-password",{token:o.token,...a}).then(e=>{"Admin"===e.data.role?s.push("/admin/login?reset="+btoa(e.data.status)):s.push("/login?reset="+btoa(e.data.status))}).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},f=async()=>{d||await r.Z.post("/logout").then(()=>u()),window.location.pathname="/admin/login"},w=async()=>{d||await r.Z.post("/api/client-logout").then(()=>u()),window.location.pathname="/login"},j=()=>{["/admin/login","/admin/register","/dashboard","/valider","/admin-profil","/crediter","/listeclient","/user-info","/update-dette"].includes(window.location.pathname)?f():w()};return(0,i.useEffect)(()=>{"guest"===e&&t&&l&&s.push(t),"/verify-email"===window.location.pathname&&l?.email_verified_at&&s.push(t),"auth"===e&&d&&j()},[l,d]),{user:l,register:p,login:m,registerClient:h,loginClient:g,forgotPassword:x,resetPassword:v,resendEmailVerification:({setStatus:e})=>{r.Z.post("/email/verification-notification").then(t=>e(t.data.status))},logout:j}}},80235:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});let a=s(44099).Z.create({baseURL:"https://metrobnque.xyz",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0,withXSRFToken:!0})},81658:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a=(0,s(68570).createProxy)(String.raw`C:\Users\sidia\OneDrive\Documents\App\Loan 2\src\app\(auth)\admin\register\page.js#default`)},23180:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l,metadata:()=>o});var a=s(19510),r=s(57371);let i=({logo:e,children:t})=>(0,a.jsxs)("div",{className:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100",children:[a.jsx("div",{children:e}),a.jsx("div",{className:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",children:t})]}),n=e=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",fill:"currentColor",className:"bi bi-bank",viewBox:"0 0 16 16",children:a.jsx("path",{d:"m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"})}),o={title:"Laravel"},l=({children:e})=>a.jsx("div",{children:a.jsx("div",{className:"text-gray-900 antialiased",children:a.jsx(i,{logo:a.jsx(r.default,{href:"/",children:a.jsx(n,{className:"w-20 h-20 fill-current text-gray-500"})}),children:e})})})}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[8948,4149,4099,4040,5451],()=>s(67974));module.exports=a})();