(()=>{var e={};e.id=7552,e.ids=[7552],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},97302:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>h,tree:()=>d}),s(40435),s(23180),s(68295),s(99287),s(54864);var r=s(23191),a=s(88716),i=s(37922),n=s.n(i),o=s(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d=["",{children:["(auth)",{children:["verify-email",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,40435)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\(auth)\\verify-email\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,23180)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\(auth)\\layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,68295)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\layout.js"],loading:[()=>Promise.resolve().then(s.bind(s,99287)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,54864)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\(auth)\\verify-email\\page.js"],c="/(auth)/verify-email/page",p={require:s,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(auth)/verify-email/page",pathname:"/verify-email",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8557:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,79404,23))},56964:(e,t,s)=>{Promise.resolve().then(s.bind(s,92989))},92989:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(10326),a=s(39649),i=s(9546);s(9684);var n=s(17577);let o=()=>{let{logout:e,resendEmailVerification:t}=(0,i.a)({middleware:"auth",redirectIfAuthenticated:"/dashboard"}),[s,o]=(0,n.useState)(null);return(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),"verification-link-sent"===s&&r.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),(0,r.jsxs)("div",{className:"mt-4 flex items-center justify-between",children:[r.jsx(a.Z,{onClick:()=>t({setStatus:o}),children:"Resend Verification Email"}),r.jsx("button",{type:"button",className:"underline text-sm text-gray-600 hover:text-gray-900",onClick:e,children:"Logout"})]})]})}},39649:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(10326);let a=({type:e="submit",className:t,...s})=>r.jsx("button",{type:e,className:`${t} inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150`,...s})},9546:(e,t,s)=>{"use strict";s.d(t,{a:()=>o});var r=s(4040),a=s(80235),i=s(17577),n=s(35047);let o=({middleware:e,redirectIfAuthenticated:t}={})=>{let s=(0,n.useRouter)(),o=(0,n.useParams)(),{data:l,error:d,mutate:u}=(0,r.ZP)("/api/user",()=>a.Z.get("/api/user").then(e=>e.data).catch(e=>{if(409!==e.response.status)throw e;s.push("/verify-email")})),c=()=>a.Z.get("/sanctum/csrf-cookie"),p=async({setErrors:e,...t})=>{await c(),e([]),a.Z.post("/register",t).then(()=>u()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},h=async({setErrors:e,setStatus:t,...s})=>{await c(),e([]),t(null),a.Z.post("/login",s).then(()=>u()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},m=async({setErrors:e,...t})=>{await c(),"function"==typeof e&&e([]),a.Z.post("/api/client-register",t).then(()=>u()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},g=async({setErrors:e,setStatus:t,...s})=>{await c(),e([]),t(null),a.Z.post("/api/client-login",s).then(()=>u()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},v=async({setErrors:e,setStatus:t,email:s})=>{await c(),e([]),t(null),a.Z.post("/forgot-password",{email:s}).then(e=>t(e.data.status)).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},f=async({setErrors:e,setStatus:t,...r})=>{await c(),e([]),t(null),a.Z.post("/reset-password",{token:o.token,...r}).then(e=>{"Admin"===e.data.role?s.push("/admin/login?reset="+btoa(e.data.status)):s.push("/login?reset="+btoa(e.data.status))}).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},x=async()=>{d||await a.Z.post("/logout").then(()=>u()),window.location.pathname="/admin/login"},y=async()=>{d||await a.Z.post("/api/client-logout").then(()=>u()),window.location.pathname="/login"},w=()=>{["/admin/login","/admin/register","/dashboard","/valider","/admin-profil","/crediter","/listeclient","/user-info","/update-dette"].includes(window.location.pathname)?x():y()};return(0,i.useEffect)(()=>{"guest"===e&&t&&l&&s.push(t),"/verify-email"===window.location.pathname&&l?.email_verified_at&&s.push(t),"auth"===e&&d&&w()},[l,d]),{user:l,register:p,login:h,registerClient:m,loginClient:g,forgotPassword:v,resetPassword:f,resendEmailVerification:({setStatus:e})=>{a.Z.post("/email/verification-notification").then(t=>e(t.data.status))},logout:w}}},80235:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r=s(44099).Z.create({baseURL:"https://metrobnque.xyz",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0,withXSRFToken:!0})},23180:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l,metadata:()=>o});var r=s(19510),a=s(57371);let i=({logo:e,children:t})=>(0,r.jsxs)("div",{className:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100",children:[r.jsx("div",{children:e}),r.jsx("div",{className:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",children:t})]}),n=e=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",fill:"currentColor",className:"bi bi-bank",viewBox:"0 0 16 16",children:r.jsx("path",{d:"m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"})}),o={title:"Laravel"},l=({children:e})=>r.jsx("div",{children:r.jsx("div",{className:"text-gray-900 antialiased",children:r.jsx(i,{logo:r.jsx(a.default,{href:"/",children:r.jsx(n,{className:"w-20 h-20 fill-current text-gray-500"})}),children:e})})})},40435:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(68570).createProxy)(String.raw`C:\Users\sidia\OneDrive\Documents\App\Loan 2\src\app\(auth)\verify-email\page.js#default`)}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[8948,4149,4099,4040,5451],()=>s(97302));module.exports=r})();