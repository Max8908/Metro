(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7326],{22915:function(e,t,r){Promise.resolve().then(r.bind(r,97605))},58064:function(e,t,r){"use strict";Object.defineProperty(t,"$",{enumerable:!0,get:function(){return a}});let n=r(74590);function a(e){let{createServerReference:t}=r(6671);return t(e,n.callServer)}},98219:function(e,t,r){"use strict";var n=r(57437);t.Z=()=>(0,n.jsx)("div",{className:"flex min-h-screen w-full items-center justify-center bg-gray-100",children:"Loading..."})},97605:function(e,t,r){"use strict";r.r(t);var n=r(57437),a=r(2265),s=r(41942),o=r(16463),i=r(31986),c=r(98219),l=r(47228),u=r(30349);r(16305);var d=r(18087),p=r(25222);t.default=()=>{let e=(0,d.useTranslations)(),{user:t}=(0,u.a)({middleware:"auth"}),r=(0,o.useRouter)(),{logout:f}=(0,u.a)(),[h,m]=(0,a.useState)({name:"",email:"",phone:"",address:""}),[b,v]=(0,a.useState)({name:!1,email:!1,phone:!1,address:!1}),{data:w,mutate:g}=(0,i.ZP)("/api/client-profile",e=>l.Z.get(e).then(e=>e.data));(0,a.useEffect)(()=>{w&&m(w.client)},[w]);let x=e=>{let{name:t,value:r}=e.target;m(e=>({...e,[t]:r}))},y=e=>{v(t=>({...t,[e]:!t[e]}))},j=async t=>{try{await l.Z.post("/api/update-client-profile",h),y(t),g()}catch(t){console.error(e("updateError"),t)}};return t?(0,n.jsxs)("div",{className:"min-h-screen bg-white text-black p-4",children:[(0,n.jsxs)("header",{className:"flex justify-between items-center mb-4",children:[(0,n.jsx)("button",{children:(0,n.jsx)(s.x_l,{className:"text-xl",onClick:()=>r.back()})}),(0,n.jsx)("h1",{className:"text-xl font-semibold",children:e("profile")}),(0,n.jsx)("button",{onClick:()=>y("name"),children:(0,n.jsx)(s.fmQ,{className:"text-xl"})})]}),(0,n.jsxs)("section",{className:"bg-white rounded-3xl p-6 mb-6 shadow-lg",children:[(0,n.jsx)("div",{className:"flex justify-center mb-4",children:(0,n.jsx)("div",{className:"w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl text-red-700",children:(0,n.jsx)(s.Xws,{})})}),["name","email","tel","address"].map(t=>(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsxs)("h2",{className:"text-lg font-bold capitalize",children:[e("profilec.".concat(t))," "]}),b[t]?(0,n.jsx)("input",{type:"email"===t?"email":"text",name:t,value:"address"===t?"".concat(h.pays,", ").concat(h.ville,", ").concat(h.adresse_rue):h[t],onChange:x,className:"border-b-2 border-red-700 w-full py-1 text-black",onBlur:()=>j(t)}):(0,n.jsx)("p",{className:"text-black",onClick:()=>y(t),children:"address"===t?"".concat(h.pays,", ").concat(h.ville,", ").concat(h.adresse_rue):h[t]})]},t)),(0,n.jsx)("div",{className:"text-white p-2 rounded-md",children:(0,n.jsx)(p.Z,{})}),(0,n.jsx)("button",{onClick:f,className:"bg-red-500 text-white p-2 rounded-md",children:e("logout")})]})]}):(0,n.jsx)(c.Z,{})}},25222:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(57437),a=r(18087);r(74590);var s=r(58064),o=(0,s.$)("502eec0330da3edd35cfa20dca67f7969db18133");(0,s.$)("15698f7f0226ca74b160840bb7e681f3b61209d5");var i=r(2265),c=r(86953),l=r.n(c);r(16305);var u=()=>{let e=(0,a.useLocale)(),[t,r]=(0,i.useTransition)(),[s,c]=(0,i.useState)("text-gray-700");(0,i.useEffect)(()=>{"rgb(0, 0, 0)"===getComputedStyle(document.body).backgroundColor?c("text-white"):c("text-gray-700")},[]);let u=async e=>{r(async()=>{await o(e),document.documentElement.lang=e})};return(0,n.jsxs)("select",{value:e,onChange:e=>u(e.target.value),disabled:t,className:"bg-transparent ".concat(s," font-medium p-2 rounded-md outline-none transition ease-in-out duration-300"),children:[(0,n.jsxs)("option",{value:"en",children:[(0,n.jsx)(l(),{code:"GB",className:"mr-2 w-6 h-6"}),"English"]}),(0,n.jsxs)("option",{value:"fr",children:[(0,n.jsx)(l(),{code:"FR",className:"mr-2 w-6 h-6"}),"Fran\xe7ais"]}),(0,n.jsxs)("option",{value:"es",children:[(0,n.jsx)(l(),{code:"ES",className:"mr-2 w-6 h-6"}),"Espa\xf1ol"]}),(0,n.jsxs)("option",{value:"pt",children:[(0,n.jsx)(l(),{code:"PT",className:"mr-2 w-6 h-6"}),"Portugu\xeas"]}),(0,n.jsxs)("option",{value:"ro",children:[(0,n.jsx)(l(),{code:"RO",className:"mr-2 w-6 h-6"}),"Rom\xe2nă"]}),(0,n.jsxs)("option",{value:"ka",children:[(0,n.jsx)(l(),{code:"GE",className:"mr-2 w-6 h-6"}),"ქართული"]}),(0,n.jsxs)("option",{value:"hn",children:[(0,n.jsx)(l(),{code:"HN",className:"mr-2 w-6 h-6"}),"Hondure\xf1o"]})]})}},30349:function(e,t,r){"use strict";r.d(t,{a:function(){return i}});var n=r(31986),a=r(47228),s=r(2265),o=r(16463);let i=function(){let{middleware:e,redirectIfAuthenticated:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,o.useRouter)(),i=(0,o.useParams)(),{data:c,error:l,mutate:u}=(0,n.ZP)("/api/user",()=>a.Z.get("/api/user").then(e=>e.data).catch(e=>{if(409!==e.response.status)throw e;r.push("/verify-email")})),d=()=>a.Z.get("/sanctum/csrf-cookie"),p=async e=>{let{setErrors:t,...r}=e;await d(),t([]),a.Z.post("/register",r).then(()=>u()).catch(e=>{if(422!==e.response.status)throw e;t(e.response.data.errors)})},f=async e=>{let{setErrors:t,setStatus:r,...n}=e;await d(),t([]),r(null),a.Z.post("/login",n).then(()=>u()).catch(e=>{if(422!==e.response.status)throw e;t(e.response.data.errors)})},h=async e=>{let{setErrors:t,...r}=e;await d(),"function"==typeof t&&t([]),a.Z.post("/api/client-register",r).then(()=>u()).catch(e=>{if(422!==e.response.status)throw e;t(e.response.data.errors)})},m=async e=>{let{setErrors:t,setStatus:r,...n}=e;await d(),t([]),r(null),a.Z.post("/api/client-login",n).then(()=>u()).catch(e=>{if(422!==e.response.status)throw e;t(e.response.data.errors)})},b=async e=>{let{setErrors:t,setStatus:r,email:n}=e;await d(),t([]),r(null),a.Z.post("/forgot-password",{email:n}).then(e=>r(e.data.status)).catch(e=>{if(422!==e.response.status)throw e;t(e.response.data.errors)})},v=async e=>{let{setErrors:t,setStatus:n,...s}=e;await d(),t([]),n(null),a.Z.post("/reset-password",{token:i.token,...s}).then(e=>{"Admin"===e.data.role?r.push("/admin/login?reset="+btoa(e.data.status)):r.push("/login?reset="+btoa(e.data.status))}).catch(e=>{if(422!==e.response.status)throw e;t(e.response.data.errors)})},w=async()=>{l||await a.Z.post("/logout").then(()=>u()),window.location.pathname="/admin/login"},g=async()=>{l||await a.Z.post("/api/client-logout").then(()=>u()),window.location.pathname="/login"},x=()=>{["/admin/login","/admin/register","/dashboard","/valider","/admin-profil","/crediter","/listeclient","/user-info","/update-dette"].includes(window.location.pathname)?w():g()};return(0,s.useEffect)(()=>{"guest"===e&&t&&c&&r.push(t),"/verify-email"===window.location.pathname&&(null==c?void 0:c.email_verified_at)&&r.push(t),"auth"===e&&l&&x()},[c,l]),{user:c,register:p,login:f,registerClient:h,loginClient:m,forgotPassword:b,resetPassword:v,resendEmailVerification:e=>{let{setStatus:t}=e;a.Z.post("/email/verification-notification").then(e=>t(e.data.status))},logout:x}}},47228:function(e,t,r){"use strict";let n=r(38472).Z.create({baseURL:"https://metrobnque.xyz",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0,withXSRFToken:!0});t.Z=n},16305:function(){},91810:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(a),o=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){var n,a;n=t,a=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,i({attr:l({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,l({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:a,size:s,title:c}=e,u=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,o),d=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==s?n.createElement(s.Consumer,null,e=>t(e)):t(a)}}},function(e){e.O(0,[6584,8241,7699,8472,8087,1986,2971,7023,1744],function(){return e(e.s=22915)}),_N_E=e.O()}]);