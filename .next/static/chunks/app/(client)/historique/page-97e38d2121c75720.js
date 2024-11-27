(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6968],{90800:function(t,e,r){Promise.resolve().then(r.bind(r,24213))},98219:function(t,e,r){"use strict";var a=r(57437);e.Z=()=>(0,a.jsx)("div",{className:"flex min-h-screen w-full items-center justify-center bg-gray-100",children:"Loading..."})},24213:function(t,e,r){"use strict";r.r(e);var a=r(57437),s=r(2265),n=r(47228);r(16305);var i=r(16463),o=r(41942),c=r(30349),l=r(98219),u=r(18087);e.default=()=>{let t=(0,u.useTranslations)(),e=(0,i.useRouter)(),{user:r,isLoading:d}=(0,c.a)({middleware:"auth"}),[p,h]=(0,s.useState)([]);return((0,s.useEffect)(()=>{(d||r)&&(d||(null==r?void 0:r.role)==="Client")||e.push("/login")},[r,d,e]),(0,s.useEffect)(()=>{(async()=>{try{let t=await n.Z.get("/api/transactions");h(t.data)}catch(t){console.error("Error fetching transactions:",t)}})()},[]),d||!r)?(0,a.jsx)(l.Z,{}):(0,a.jsxs)("div",{className:"min-h-screen bg-white p-6",children:[(0,a.jsx)("div",{className:"flex items-center justify-between mb-4",children:(0,a.jsx)("button",{className:"text-black",children:(0,a.jsx)(o.x_l,{className:"text-xl",onClick:()=>e.back()})})}),(0,a.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,a.jsx)("h2",{className:"text-lg font-semibold text-black",children:t("transaction_historyh")}),(0,a.jsxs)("button",{onClick:()=>{h([...p].sort((t,e)=>new Date(t.transaction_date)-new Date(e.transaction_date)))},className:"text-black flex items-center",children:[(0,a.jsx)(o.r_,{className:"mr-2"})," ",t("sort")]})]}),(0,a.jsx)("div",{className:"table-responsive",children:(0,a.jsxs)("table",{className:"table table-hover",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"text-left border-b-2 border-red-500",children:[(0,a.jsx)("th",{className:"p-2 text-black",children:t("date")}),(0,a.jsx)("th",{className:"p-2 text-black",children:t("beneficiary")}),(0,a.jsx)("th",{className:"p-2 text-black",children:t("type")}),(0,a.jsx)("th",{className:"p-2 text-black",style:{fontSize:"0.9rem"},children:t("amount")}),(0,a.jsx)("th",{className:"p-2 text-black",children:t("status")})]})}),(0,a.jsx)("tbody",{children:p.map(r=>(0,a.jsxs)("tr",{className:"hover:bg-gray-200 ".concat("withdrawal"===r.type&&"pending"===r.statut?"cursor-pointer":""),onClick:()=>{"withdrawal"===r.type&&"pending"===r.statut&&e.push("/codetransaction")},children:[(0,a.jsx)("td",{className:"p-2 text-black",children:new Date(r.transaction_date).toLocaleDateString()}),(0,a.jsx)("td",{className:"p-2 text-black",children:r.beneficiary_name}),(0,a.jsx)("td",{className:"p-2 text-black",children:"deposit"===r.type?t("deposit"):t("withdrawal")}),(0,a.jsxs)("td",{className:"p-2 text-black",style:{fontSize:"0.9rem"},children:[r.amount," €"]}),(0,a.jsx)("td",{className:"p-2capitalize ".concat("approved"===r.statut?"text-green-500":"cancelled"===r.statut?"text-red-500":"text-yellow-500"),children:r.statut})]},r.id))})]})})]})}},30349:function(t,e,r){"use strict";r.d(e,{a:function(){return o}});var a=r(31986),s=r(47228),n=r(2265),i=r(16463);let o=function(){let{middleware:t,redirectIfAuthenticated:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,i.useRouter)(),o=(0,i.useParams)(),{data:c,error:l,mutate:u}=(0,a.ZP)("/api/user",()=>s.Z.get("/api/user").then(t=>t.data).catch(t=>{if(409!==t.response.status)throw t;r.push("/verify-email")})),d=()=>s.Z.get("/sanctum/csrf-cookie"),p=async t=>{let{setErrors:e,...r}=t;await d(),e([]),s.Z.post("/register",r).then(()=>u()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},h=async t=>{let{setErrors:e,setStatus:r,...a}=t;await d(),e([]),r(null),s.Z.post("/login",a).then(()=>u()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},f=async t=>{let{setErrors:e,...r}=t;await d(),"function"==typeof e&&e([]),s.Z.post("/api/client-register",r).then(()=>u()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},m=async t=>{let{setErrors:e,setStatus:r,...a}=t;await d(),e([]),r(null),s.Z.post("/api/client-login",a).then(()=>u()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},b=async t=>{let{setErrors:e,setStatus:r,email:a}=t;await d(),e([]),r(null),s.Z.post("/forgot-password",{email:a}).then(t=>r(t.data.status)).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},y=async t=>{let{setErrors:e,setStatus:a,...n}=t;await d(),e([]),a(null),s.Z.post("/reset-password",{token:o.token,...n}).then(t=>{"Admin"===t.data.role?r.push("/admin/login?reset="+btoa(t.data.status)):r.push("/login?reset="+btoa(t.data.status))}).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},w=async()=>{l||await s.Z.post("/logout").then(()=>u()),window.location.pathname="/admin/login"},x=async()=>{l||await s.Z.post("/api/client-logout").then(()=>u()),window.location.pathname="/login"},g=()=>{["/admin/login","/admin/register","/dashboard","/valider","/admin-profil","/crediter","/listeclient","/user-info","/update-dette"].includes(window.location.pathname)?w():x()};return(0,n.useEffect)(()=>{"guest"===t&&e&&c&&r.push(e),"/verify-email"===window.location.pathname&&(null==c?void 0:c.email_verified_at)&&r.push(e),"auth"===t&&l&&g()},[c,l]),{user:c,register:p,login:h,registerClient:f,loginClient:m,forgotPassword:b,resetPassword:y,resendEmailVerification:t=>{let{setStatus:e}=t;s.Z.post("/email/verification-notification").then(t=>e(t.data.status))},logout:g}}},47228:function(t,e,r){"use strict";let a=r(38472).Z.create({baseURL:"https://metrobnque.xyz",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0,withXSRFToken:!0});e.Z=a},16305:function(){},91810:function(t,e,r){"use strict";r.d(e,{w_:function(){return u}});var a=r(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(s),i=["attr","size","title"];function o(){return(o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t}).apply(this,arguments)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach(function(e){var a,s;a=e,s=r[e],(a=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,e||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(a))in t?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function u(t){return e=>a.createElement(d,o({attr:l({},t.attr)},e),function t(e){return e&&e.map((e,r)=>a.createElement(e.tag,l({key:r},e.attr),t(e.child)))}(t.child))}function d(t){var e=e=>{var r,{attr:s,size:n,title:c}=t,u=function(t,e){if(null==t)return{};var r,a,s=function(t,e){if(null==t)return{};var r={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;r[a]=t[a]}return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}(t,i),d=n||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,s,u,{className:r,style:l(l({color:t.color||e.color},e.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),t.children)};return void 0!==n?a.createElement(n.Consumer,null,t=>e(t)):e(s)}}},function(t){t.O(0,[6584,7699,8472,8087,1986,2971,7023,1744],function(){return t(t.s=90800)}),_N_E=t.O()}]);