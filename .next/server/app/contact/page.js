(()=>{var e={};e.id=1327,e.ids=[1327],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},87755:(e,s,a)=>{"use strict";a.r(s),a.d(s,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>p,tree:()=>l}),a(41843),a(68295),a(99287),a(54864);var t=a(23191),r=a(88716),n=a(37922),i=a.n(n),o=a(95231),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);a.d(s,c);let l=["",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,41843)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\contact\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,68295)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\layout.js"],loading:[()=>Promise.resolve().then(a.bind(a,99287)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(a.bind(a,54864)),"C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\sidia\\OneDrive\\Documents\\App\\Loan 2\\src\\app\\contact\\page.js"],m="/contact/page",u={require:a,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},79872:(e,s,a)=>{Promise.resolve().then(a.bind(a,93963))},93963:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>l});var t=a(10326),r=a(17577),n=a(8816),i=a(80235),o=a(90434),c=a(23844);function l(){let e=(0,c.useTranslations)(),[s,a]=(0,r.useState)({username:"",email:"",phone:"",subject:"",message:""}),[l,d]=(0,r.useState)(!1),[m,u]=(0,r.useState)(null),[p,h]=(0,r.useState)(null),x=e=>{a({...s,[e.target.name]:e.target.value})},j=async e=>{e.preventDefault(),d(!0),u(null),h(null);try{await i.Z.get("/sanctum/csrf-cookie"),await i.Z.post("/api/sendmail",s),h("Email envoy\xe9 avec succ\xe8s !"),a({username:"",email:"",phone:"",subject:"",message:""})}catch(e){u(e.response?e.response.data.message:"Une erreur est survenue")}finally{d(!1)}};return t.jsx(t.Fragment,{children:t.jsx(n.default,{headerStyle:1,footerStyle:1,breadcrumbTitle:e("contact_details"),children:(0,t.jsxs)("div",{children:[t.jsx("section",{className:"contact-info-section centred pt_120 pb_90",children:(0,t.jsxs)("div",{className:"auto-container",children:[(0,t.jsxs)("div",{className:"sec-title mb_70",children:[t.jsx("h6",{children:e("contact_us")}),t.jsx("h2",{children:e("contact_details")})]}),(0,t.jsxs)("div",{className:"row clearfix",children:[t.jsx("div",{className:"col-lg-4 col-md-6 col-sm-12 info-column",children:t.jsx("div",{className:"info-block-one wow fadeInUp animated","data-wow-delay":"00ms","data-wow-duration":"1500ms",children:(0,t.jsxs)("div",{className:"inner-box",children:[t.jsx("div",{className:"icon-box",children:t.jsx("i",{className:"icon-2"})}),t.jsx("h3",{children:e("our_location")}),t.jsx("p",{children:e("address")})]})})}),t.jsx("div",{className:"col-lg-4 col-md-6 col-sm-12 info-column",children:t.jsx("div",{className:"info-block-one wow fadeInUp animated","data-wow-delay":"300ms","data-wow-duration":"1500ms",children:(0,t.jsxs)("div",{className:"inner-box",children:[t.jsx("div",{className:"icon-box",children:t.jsx("i",{className:"icon-43"})}),t.jsx("h3",{children:e("email_address")}),(0,t.jsxs)("p",{children:[t.jsx(o.default,{href:"mailto:contact@metrobnque.xyz",children:"contact@metrobnque.xyz"}),t.jsx("br",{})]})]})})}),t.jsx("div",{className:"col-lg-4 col-md-6 col-sm-12 info-column",children:t.jsx("div",{className:"info-block-one wow fadeInUp animated","data-wow-delay":"600ms","data-wow-duration":"1500ms",children:(0,t.jsxs)("div",{className:"inner-box",children:[t.jsx("div",{className:"icon-box",children:t.jsx("i",{className:"icon-44"})}),t.jsx("h3",{children:e("phone_number")}),(0,t.jsxs)("p",{children:[t.jsx(o.default,{href:"tel:+33757852015",children:"+33 7 57 85 20 15"})," (24/7)"]})]})})})]})]})}),t.jsx("section",{className:"google-map-section pb_120",children:t.jsx("div",{className:"auto-container",children:t.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999052183441!2d2.2922926156743064!3d48.85884407928756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdf43b1bff1%3A0x8c8e4f3bd8a798e1!2sEiffel%20Tower%2C%20Champ%20de%20Mars%2C%205%20Av.%20Anatole%20France%2C%2075015%20Paris%2C%20France!5e0!3m2!1sen!2sfr!4v1601263396347!5m2!1sen!2sfr",height:535,style:{border:0,width:"100%"},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})}),t.jsx("section",{className:"contact-section pt_120 pb_120",children:(0,t.jsxs)("div",{className:"auto-container",children:[(0,t.jsxs)("div",{className:"sec-title centred mb_70",children:[t.jsx("h6",{children:e("contact_us")}),t.jsx("h2",{children:e("contact_details")})]}),t.jsx("div",{className:"form-inner",children:t.jsx("form",{onSubmit:j,children:(0,t.jsxs)("div",{className:"row clearfix",children:[t.jsx("div",{className:"col-lg-6 col-md-6 col-sm-12 form-group",children:t.jsx("input",{type:"text",name:"username",placeholder:e("your_name"),required:!0,value:s.username,onChange:x})}),t.jsx("div",{className:"col-lg-6 col-md-6 col-sm-12 form-group",children:t.jsx("input",{type:"email",name:"email",placeholder:e("your_email"),required:!0,value:s.email,onChange:x})}),t.jsx("div",{className:"col-lg-6 col-md-6 col-sm-12 form-group",children:t.jsx("input",{type:"text",name:"phone",required:!0,placeholder:e("phone"),value:s.phone,onChange:x})}),t.jsx("div",{className:"col-lg-6 col-md-6 col-sm-12 form-group",children:t.jsx("input",{type:"text",name:"subject",required:!0,placeholder:e("subject"),value:s.subject,onChange:x})}),t.jsx("div",{className:"col-lg-12 col-md-12 col-sm-12 form-group",children:t.jsx("textarea",{name:"message",placeholder:e("message"),value:s.message,onChange:x})}),t.jsx("div",{className:"col-lg-12 col-md-12 col-sm-12 form-group message-btn centred",children:t.jsx("button",{className:"theme-btn btn-one",type:"submit",name:"submit-form",disabled:l,children:e(l?"sending":"send_message")})}),m&&t.jsx("p",{style:{color:"red",textAlign:"center"},children:m}),p&&t.jsx("p",{style:{color:"green",textAlign:"center"},children:p})]})})})]})})]})})})}},80235:(e,s,a)=>{"use strict";a.d(s,{Z:()=>t});let t=a(44099).Z.create({baseURL:"https://metrobnque.xyz",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0,withXSRFToken:!0})},41843:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});let t=(0,a(68570).createProxy)(String.raw`C:\Users\sidia\OneDrive\Documents\App\Loan 2\src\app\contact\page.js#default`)}};var s=require("../../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),t=s.X(0,[8948,4149,4099,5451],()=>a(87755));module.exports=t})();