(()=>{var e={};e.id=1092,e.ids=[1092],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},59681:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>m,tree:()=>d}),t(59820),t(23180),t(68295),t(99287),t(54864);var r=t(23191),a=t(88716),i=t(37922),n=t.n(i),o=t(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(s,l);let d=["",{children:["(auth)",{children:["password-reset",{children:["[token]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,59820)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\(auth)\\password-reset\\[token]\\page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,23180)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\(auth)\\layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,68295)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\layout.js"],loading:[()=>Promise.resolve().then(t.bind(t,99287)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,54864)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\(auth)\\password-reset\\[token]\\page.js"],c="/(auth)/password-reset/[token]/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(auth)/password-reset/[token]/page",pathname:"/password-reset/[token]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8557:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,79404,23))},58488:(e,s,t)=>{Promise.resolve().then(t.bind(t,96576))},13446:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});var r=t(10326);let a=({status:e,className:s,...t})=>r.jsx(r.Fragment,{children:e&&r.jsx("div",{className:`${s} font-medium text-sm text-green-600`,...t,children:e})})},96576:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>p});var r=t(10326),a=t(39649),i=t(19859),n=t(18132),o=t(59849);t(9684);var l=t(9546),d=t(17577),u=t(35047),c=t(13446);let p=()=>{let e=(0,u.useSearchParams)(),{resetPassword:s}=(0,l.a)({middleware:"guest"}),[t,p]=(0,d.useState)(""),[m,h]=(0,d.useState)(""),[x,g]=(0,d.useState)(""),[v,w]=(0,d.useState)([]),[f,j]=(0,d.useState)(null);return(0,d.useEffect)(()=>{p(e.get("email"))},[e.get("email")]),(0,r.jsxs)(r.Fragment,{children:[r.jsx(c.Z,{className:"mb-4",status:f}),(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault(),s({email:t,password:m,password_confirmation:x,setErrors:w,setStatus:j})},children:[(0,r.jsxs)("div",{children:[r.jsx(o.Z,{htmlFor:"email",children:"Email"}),r.jsx(i.Z,{id:"email",type:"email",value:t,className:"block mt-1 w-full",onChange:e=>p(e.target.value),required:!0,autoFocus:!0}),r.jsx(n.Z,{messages:v.email,className:"mt-2"})]}),(0,r.jsxs)("div",{className:"mt-4",children:[r.jsx(o.Z,{htmlFor:"password",children:"Password"}),r.jsx(i.Z,{id:"password",type:"password",value:m,className:"block mt-1 w-full",onChange:e=>h(e.target.value),required:!0}),r.jsx(n.Z,{messages:v.password,className:"mt-2"})]}),(0,r.jsxs)("div",{className:"mt-4",children:[r.jsx(o.Z,{htmlFor:"passwordConfirmation",children:"Confirm Password"}),r.jsx(i.Z,{id:"passwordConfirmation",type:"password",value:x,className:"block mt-1 w-full",onChange:e=>g(e.target.value),required:!0}),r.jsx(n.Z,{messages:v.password_confirmation,className:"mt-2"})]}),r.jsx("div",{className:"flex items-center justify-end mt-4",children:r.jsx(a.Z,{children:"Reset Password"})})]})]})}},39649:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});var r=t(10326);let a=({type:e="submit",className:s,...t})=>r.jsx("button",{type:e,className:`${s} inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150`,...t})},19859:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});var r=t(10326);let a=({disabled:e=!1,className:s,...t})=>r.jsx("input",{disabled:e,className:`${s} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`,...t})},18132:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});var r=t(10326);let a=({messages:e=[],className:s=""})=>r.jsx(r.Fragment,{children:e.length>0&&r.jsx(r.Fragment,{children:e.map((e,t)=>r.jsx("p",{className:`${s} text-sm text-red-600`,children:e},t))})})},59849:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});var r=t(10326);let a=({className:e,children:s,...t})=>r.jsx("label",{className:`${e} block font-medium text-sm text-gray-700`,...t,children:s})},9546:(e,s,t)=>{"use strict";t.d(s,{a:()=>o});var r=t(4040),a=t(80235),i=t(17577),n=t(35047);let o=({middleware:e,redirectIfAuthenticated:s}={})=>{let t=(0,n.useRouter)(),o=(0,n.useParams)(),{data:l,error:d,mutate:u}=(0,r.ZP)("/api/user",()=>a.Z.get("/api/user").then(e=>e.data).catch(e=>{if(409!==e.response.status)throw e;t.push("/verify-email")})),c=()=>a.Z.get("/sanctum/csrf-cookie"),p=async({setErrors:e,...s})=>{await c(),e([]),a.Z.post("/register",s).then(()=>u()).catch(s=>{if(422!==s.response.status)throw s;e(s.response.data.errors)})},m=async({setErrors:e,setStatus:s,...t})=>{await c(),e([]),s(null),a.Z.post("/login",t).then(()=>u()).catch(s=>{if(422!==s.response.status)throw s;e(s.response.data.errors)})},h=async({setErrors:e,...s})=>{await c(),"function"==typeof e&&e([]),a.Z.post("/api/client-register",s).then(()=>u()).catch(s=>{if(422!==s.response.status)throw s;e(s.response.data.errors)})},x=async({setErrors:e,setStatus:s,...t})=>{await c(),e([]),s(null),a.Z.post("/api/client-login",t).then(()=>u()).catch(s=>{if(422!==s.response.status)throw s;e(s.response.data.errors)})},g=async({setErrors:e,setStatus:s,email:t})=>{await c(),e([]),s(null),a.Z.post("/forgot-password",{email:t}).then(e=>s(e.data.status)).catch(s=>{if(422!==s.response.status)throw s;e(s.response.data.errors)})},v=async({setErrors:e,setStatus:s,...r})=>{await c(),e([]),s(null),a.Z.post("/reset-password",{token:o.token,...r}).then(e=>{"Admin"===e.data.role?t.push("/admin/login?reset="+btoa(e.data.status)):t.push("/login?reset="+btoa(e.data.status))}).catch(s=>{if(422!==s.response.status)throw s;e(s.response.data.errors)})},w=async()=>{d||await a.Z.post("/logout").then(()=>u()),window.location.pathname="/admin/login"},f=async()=>{d||await a.Z.post("/api/client-logout").then(()=>u()),window.location.pathname="/login"},j=()=>{["/admin/login","/admin/register","/dashboard","/valider","/admin-profil","/crediter","/listeclient","/user-info","/update-dette"].includes(window.location.pathname)?w():f()};return(0,i.useEffect)(()=>{"guest"===e&&s&&l&&t.push(s),"/verify-email"===window.location.pathname&&l?.email_verified_at&&t.push(s),"auth"===e&&d&&j()},[l,d]),{user:l,register:p,login:m,registerClient:h,loginClient:x,forgotPassword:g,resetPassword:v,resendEmailVerification:({setStatus:e})=>{a.Z.post("/email/verification-notification").then(s=>e(s.data.status))},logout:j}}},80235:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});let r=t(44099).Z.create({baseURL:"https://metrobnque.xyz",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0,withXSRFToken:!0})},23180:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l,metadata:()=>o});var r=t(19510),a=t(57371);let i=({logo:e,children:s})=>(0,r.jsxs)("div",{className:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100",children:[r.jsx("div",{children:e}),r.jsx("div",{className:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",children:s})]}),n=e=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",fill:"currentColor",className:"bi bi-bank",viewBox:"0 0 16 16",children:r.jsx("path",{d:"m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"})}),o={title:"Laravel"},l=({children:e})=>r.jsx("div",{children:r.jsx("div",{className:"text-gray-900 antialiased",children:r.jsx(i,{logo:r.jsx(a.default,{href:"/",children:r.jsx(n,{className:"w-20 h-20 fill-current text-gray-500"})}),children:e})})})},59820:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});let r=(0,t(68570).createProxy)(String.raw`C:\Users\sidia\OneDrive\Documents\App\Loan 2\src\app\(auth)\password-reset\[token]\page.js#default`)}};var s=require("../../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[8948,4149,4099,4040,5451],()=>t(59681));module.exports=r})();