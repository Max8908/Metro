(()=>{var e={};e.id=3853,e.ids=[3853],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},81021:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),s(70453),s(81985),s(68295),s(99287),s(54864);var r=s(23191),a=s(88716),i=s(37922),n=s.n(i),o=s(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d=["",{children:["(client)",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,70453)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\(client)\\login\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,81985)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\(client)\\layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,68295)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\layout.js"],loading:[()=>Promise.resolve().then(s.bind(s,99287)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,54864)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\(client)\\login\\page.js"],u="/(client)/login/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(client)/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},18406:(e,t,s)=>{Promise.resolve().then(s.bind(s,13170))},55523:(e,t,s)=>{Promise.resolve().then(s.bind(s,38759))},13446:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(10326);let a=({status:e,className:t,...s})=>r.jsx(r.Fragment,{children:e&&r.jsx("div",{className:`${t} font-medium text-sm text-green-600`,...s,children:e})})},38759:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var r=s(10326),a=s(39649),i=s(19859),n=s(18132),o=s(59849),l=s(90434),d=s(23844);s(9684);var c=s(9546),u=s(17577),p=s(35047),m=s(13446),h=s(8816);let g=()=>{let e=(0,d.useTranslations)(),t=(0,p.useRouter)(),{loginClient:s}=(0,c.a)({middleware:"guest",redirectIfAuthenticated:"/dash"}),[g,x]=(0,u.useState)(""),[f,b]=(0,u.useState)(""),[v,y]=(0,u.useState)(!1),[w,j]=(0,u.useState)([]),[Z,q]=(0,u.useState)(null);(0,u.useEffect)(()=>{t.reset?.length>0&&0===w.length?q(atob(t.reset)):q(null)});let N=async e=>{e.preventDefault(),s({email:g,password:f,remember:v,setErrors:j,setStatus:q})};return r.jsx(h.default,{headerStyle:1,footerStyle:1,breadcrumbTitle:e("login"),children:r.jsx("div",{className:"min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"max-w-sm w-full space-y-8",children:[r.jsx(m.Z,{className:"mb-4",status:Z}),(0,r.jsxs)("form",{onSubmit:N,className:"-mt-40 space-y-6 -mb-40",children:[(0,r.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[(0,r.jsxs)("div",{children:[r.jsx(o.Z,{htmlFor:"email",children:e("email")}),r.jsx(i.Z,{id:"email",type:"email",value:g,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:e("email"),onChange:e=>x(e.target.value),required:!0,autoFocus:!0}),r.jsx(n.Z,{messages:w.email,className:"mt-2"})]}),(0,r.jsxs)("div",{className:"mt-4",children:[r.jsx(o.Z,{htmlFor:"password",children:e("password")}),r.jsx(i.Z,{id:"password",type:"password",value:f,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:e("password"),onChange:e=>b(e.target.value),required:!0,autoComplete:"current-password"}),r.jsx(n.Z,{messages:w.password,className:"mt-2"})]})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx("input",{id:"remember_me",type:"checkbox",className:"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded",onChange:e=>y(e.target.checked)}),r.jsx("label",{htmlFor:"remember_me",className:"ml-2 block text-sm text-gray-900",children:e("remember_me")})]}),r.jsx("div",{className:"text-sm",children:r.jsx(l.default,{href:"/forgot-password",className:"font-medium text-indigo-600 hover:text-indigo-500",children:e("forgot_password")})})]}),r.jsx("div",{children:r.jsx(a.Z,{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:e("submit")})}),r.jsx("div",{children:(0,r.jsxs)("p",{className:"mt-2 text-center text-sm text-gray-600",children:[e("or")," ",r.jsx(l.default,{href:"/register",className:"font-medium text-indigo-600 hover:text-indigo-500",children:e("sign_up")})]})})]})]})})})}},39649:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(10326);let a=({type:e="submit",className:t,...s})=>r.jsx("button",{type:e,className:`${t} inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150`,...s})},19859:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(10326);let a=({disabled:e=!1,className:t,...s})=>r.jsx("input",{disabled:e,className:`${t} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`,...s})},18132:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(10326);let a=({messages:e=[],className:t=""})=>r.jsx(r.Fragment,{children:e.length>0&&r.jsx(r.Fragment,{children:e.map((e,s)=>r.jsx("p",{className:`${t} text-sm text-red-600`,children:e},s))})})},59849:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(10326);let a=({className:e,children:t,...s})=>r.jsx("label",{className:`${e} block font-medium text-sm text-gray-700`,...s,children:t})},9546:(e,t,s)=>{"use strict";s.d(t,{a:()=>o});var r=s(4040),a=s(80235),i=s(17577),n=s(35047);let o=({middleware:e,redirectIfAuthenticated:t}={})=>{let s=(0,n.useRouter)(),o=(0,n.useParams)(),{data:l,error:d,mutate:c}=(0,r.ZP)("/api/user",()=>a.Z.get("/api/user").then(e=>e.data).catch(e=>{if(409!==e.response.status)throw e;s.push("/verify-email")})),u=()=>a.Z.get("/sanctum/csrf-cookie"),p=async({setErrors:e,...t})=>{await u(),e([]),a.Z.post("/register",t).then(()=>c()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},m=async({setErrors:e,setStatus:t,...s})=>{await u(),e([]),t(null),a.Z.post("/login",s).then(()=>c()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},h=async({setErrors:e,...t})=>{await u(),"function"==typeof e&&e([]),a.Z.post("/api/client-register",t).then(()=>c()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},g=async({setErrors:e,setStatus:t,...s})=>{await u(),e([]),t(null),a.Z.post("/api/client-login",s).then(()=>c()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},x=async({setErrors:e,setStatus:t,email:s})=>{await u(),e([]),t(null),a.Z.post("/forgot-password",{email:s}).then(e=>t(e.data.status)).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},f=async({setErrors:e,setStatus:t,...r})=>{await u(),e([]),t(null),a.Z.post("/reset-password",{token:o.token,...r}).then(e=>{"Admin"===e.data.role?s.push("/admin/login?reset="+btoa(e.data.status)):s.push("/login?reset="+btoa(e.data.status))}).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},b=async()=>{d||await a.Z.post("/logout").then(()=>c()),window.location.pathname="/admin/login"},v=async()=>{d||await a.Z.post("/api/client-logout").then(()=>c()),window.location.pathname="/login"},y=()=>{["/admin/login","/admin/register","/dashboard","/valider","/admin-profil","/crediter","/listeclient","/user-info","/update-dette"].includes(window.location.pathname)?b():v()};return(0,i.useEffect)(()=>{"guest"===e&&t&&l&&s.push(t),"/verify-email"===window.location.pathname&&l?.email_verified_at&&s.push(t),"auth"===e&&d&&y()},[l,d]),{user:l,register:p,login:m,registerClient:h,loginClient:g,forgotPassword:x,resetPassword:f,resendEmailVerification:({setStatus:e})=>{a.Z.post("/email/verification-notification").then(t=>e(t.data.status))},logout:y}}},80235:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r=s(44099).Z.create({baseURL:"https://metrobnque.xyz",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0,withXSRFToken:!0})},81985:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(19510),a=s(35139),i=s(75031),n=s(91622);async function o({children:e,params:{locale:t}}){let s=await (0,i.Z)(t),o=t||await (0,n.Z)();return r.jsx("html",{lang:o,children:r.jsx("body",{children:r.jsx(a.Z,{messages:s,locale:o,children:e})})})}},70453:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(68570).createProxy)(String.raw`C:\Users\sidia\OneDrive\Documents\App\Loan 2\src\app\(client)\login\page.js#default`)}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[8948,4149,4099,4040,5451],()=>s(81021));module.exports=r})();