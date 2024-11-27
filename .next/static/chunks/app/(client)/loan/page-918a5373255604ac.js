(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9731],{23072:function(e,t,r){Promise.resolve().then(r.bind(r,39246))},98219:function(e,t,r){"use strict";var n=r(57437);t.Z=()=>(0,n.jsx)("div",{className:"flex min-h-screen w-full items-center justify-center bg-gray-100",children:"Loading..."})},39246:function(e,t,r){"use strict";r.r(t);var n=r(57437),a=r(2265),s=r(41942),o=r(16463);r(16305);var l=r(18087),i=r(47228),c=r(30349),u=r(98219);t.default=()=>{let e=(0,l.useTranslations)(),t=(0,o.useRouter)(),{user:r}=(0,c.a)({middleware:"auth"});(0,a.useEffect)(()=>{r?"Client"!==r.role&&t.push("/login"):t.push("/login")},[r,t]);let[d,p]=(0,a.useState)({projet:"",description:"",duree:"",montant_voulue:""}),m=e=>{let{name:t,value:r}=e.target;p(e=>({...e,[t]:r}))},h=async t=>{t.preventDefault();try{let e=await i.Z.post("/api/loan-request",d);200===e.status?alert(e.data.success):alert(e.data.error)}catch(t){alert(e("errorSubmit"))}};return r?(0,n.jsxs)("div",{className:"min-h-screen bg-white text-black p-4",children:[(0,n.jsxs)("header",{className:"flex justify-between items-center mb-4",children:[(0,n.jsx)("button",{children:(0,n.jsx)(s.x_l,{className:"text-xl",onClick:()=>t.back()})}),(0,n.jsx)("h1",{className:"text-xl font-semibold",children:e("requestLoan")})]}),(0,n.jsx)("section",{className:"bg-white rounded-3xl p-6 mb-6 shadow-lg",children:(0,n.jsxs)("form",{onSubmit:h,children:[(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{htmlFor:"projet",className:"block text-lg font-bold mb-2",children:e("project")}),(0,n.jsx)("input",{type:"text",id:"projet",name:"projet",value:d.projet,onChange:m,className:"w-full py-1 border-b-2 border-red-700 text-black outline-none",placeholder:"Enter project name"})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{htmlFor:"description",className:"block text-lg font-bold mb-2",children:e("description")}),(0,n.jsx)("input",{type:"text",id:"description",name:"description",value:d.description,onChange:m,className:"w-full py-1 border-b-2 border-red-700 text-black outline-none",placeholder:"Enter project description"})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{htmlFor:"duree",className:"block text-lg font-bold mb-2",children:e("duration")}),(0,n.jsx)("input",{type:"number",id:"duree",name:"duree",value:d.duree,onChange:m,className:"w-full py-1 border-b-2 border-red-700 text-black outline-none",placeholder:"Enter duration"})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{htmlFor:"montant_voulue",className:"block text-lg font-bold mb-2",children:e("loanAmount")}),(0,n.jsxs)("div",{className:"flex items-center border-b-2 border-red-700",children:[(0,n.jsx)(s.l80,{className:"text-xl text-red-700 mr-2"}),(0,n.jsx)("input",{type:"number",id:"montant_voulue",name:"montant_voulue",value:d.montant_voulue,onChange:m,className:"w-full py-1 text-black outline-none",placeholder:"Enter loan amount"})]})]}),(0,n.jsx)("button",{type:"submit",className:"bg-red-700 text-white w-full py-2 rounded-full mt-4",children:e("submitRequest")})]})})]}):(0,n.jsx)(u.Z,{})}},30349:function(e,t,r){"use strict";r.d(t,{a:function(){return l}});var n=r(31986),a=r(47228),s=r(2265),o=r(16463);let l=function(){let{middleware:e,redirectIfAuthenticated:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,o.useRouter)(),l=(0,o.useParams)(),{data:i,error:c,mutate:u}=(0,n.ZP)("/api/user",()=>a.Z.get("/api/user").then(e=>e.data).catch(e=>{if(409!==e.response.status)throw e;r.push("/verify-email")})),d=()=>a.Z.get("/sanctum/csrf-cookie"),p=async e=>{let{setErrors:t,...r}=e;await d(),t([]),a.Z.post("/register",r).then(()=>u()).catch(e=>{if(422!==e.response.status)throw e;t(e.response.data.errors)})},m=async e=>{let{setErrors:t,setStatus:r,...n}=e;await d(),t([]),r(null),a.Z.post("/login",n).then(()=>u()).catch(e=>{if(422!==e.response.status)throw e;t(e.response.data.errors)})},h=async e=>{let{setErrors:t,...r}=e;await d(),"function"==typeof t&&t([]),a.Z.post("/api/client-register",r).then(()=>u()).catch(e=>{if(422!==e.response.status)throw e;t(e.response.data.errors)})},f=async e=>{let{setErrors:t,setStatus:r,...n}=e;await d(),t([]),r(null),a.Z.post("/api/client-login",n).then(()=>u()).catch(e=>{if(422!==e.response.status)throw e;t(e.response.data.errors)})},b=async e=>{let{setErrors:t,setStatus:r,email:n}=e;await d(),t([]),r(null),a.Z.post("/forgot-password",{email:n}).then(e=>r(e.data.status)).catch(e=>{if(422!==e.response.status)throw e;t(e.response.data.errors)})},v=async e=>{let{setErrors:t,setStatus:n,...s}=e;await d(),t([]),n(null),a.Z.post("/reset-password",{token:l.token,...s}).then(e=>{"Admin"===e.data.role?r.push("/admin/login?reset="+btoa(e.data.status)):r.push("/login?reset="+btoa(e.data.status))}).catch(e=>{if(422!==e.response.status)throw e;t(e.response.data.errors)})},y=async()=>{c||await a.Z.post("/logout").then(()=>u()),window.location.pathname="/admin/login"},w=async()=>{c||await a.Z.post("/api/client-logout").then(()=>u()),window.location.pathname="/login"},g=()=>{["/admin/login","/admin/register","/dashboard","/valider","/admin-profil","/crediter","/listeclient","/user-info","/update-dette"].includes(window.location.pathname)?y():w()};return(0,s.useEffect)(()=>{"guest"===e&&t&&i&&r.push(t),"/verify-email"===window.location.pathname&&(null==i?void 0:i.email_verified_at)&&r.push(t),"auth"===e&&c&&g()},[i,c]),{user:i,register:p,login:m,registerClient:h,loginClient:f,forgotPassword:b,resetPassword:v,resendEmailVerification:e=>{let{setStatus:t}=e;a.Z.post("/email/verification-notification").then(e=>t(e.data.status))},logout:g}}},47228:function(e,t,r){"use strict";let n=r(38472).Z.create({baseURL:"https://metrobnque.xyz",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0,withXSRFToken:!0});t.Z=n},16305:function(){},91810:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(a),o=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var n,a;n=t,a=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,l({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:a,size:s,title:i}=e,u=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,o),d=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==s?n.createElement(s.Consumer,null,e=>t(e)):t(a)}}},function(e){e.O(0,[6584,7699,8472,8087,1986,2971,7023,1744],function(){return e(e.s=23072)}),_N_E=e.O()}]);