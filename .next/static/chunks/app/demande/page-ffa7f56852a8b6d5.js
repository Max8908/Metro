(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5953],{6273:function(e,l,t){Promise.resolve().then(t.bind(t,4619))},4619:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return c}});var a=t(57437);t(16305);var n=t(2265),o=t(18087),r=t(22795),s=t(47228),d=t(41942);function c(){let e=(0,o.useTranslations)(),[l,t]=(0,n.useState)({fullName:"",email:"",phoneCode:"",phoneNumber:"",projet:"",description:"",duree:"",montant_voulue:""}),[c,i]=(0,n.useState)(!1),[m,u]=(0,n.useState)(null),[b,h]=(0,n.useState)(null),p=e=>{t({...l,[e.target.name]:e.target.value})},x=async e=>{e.preventDefault(),i(!0),u(null),h(null);try{let e="".concat(l.phoneCode).concat(l.phoneNumber);await s.Z.get("/sanctum/csrf-cookie"),await s.Z.post("/api/submit-loan",{...l,phoneNumberFull:e}),h("Loan request submitted successfully!"),t({fullName:"",email:"",phoneCode:"",phoneNumber:"",projet:"",description:"",duree:"",montant_voulue:""})}catch(e){u(e.response?e.response.data.message:"An error occurred")}finally{i(!1)}};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.default,{headerStyle:1,footerStyle:1,breadcrumbTitle:e("breadcrumbd_title"),children:(0,a.jsx)("div",{className:"min-h-screen bg-white text-black p-4",children:(0,a.jsxs)("section",{className:"bg-white rounded-3xl p-6 mb-6 shadow-lg",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-6",children:e("form_title")}),(0,a.jsxs)("form",{onSubmit:x,children:[(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"fullName",className:"block text-lg font-bold mb-2",children:e("full_name_label")}),(0,a.jsx)("input",{type:"text",id:"fullName",name:"fullName",value:l.fullName,onChange:p,className:"w-full py-1 border-b-2 border-red-700 text-black outline-none",placeholder:e("full_name_placeholder")})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-lg font-bold mb-2",children:e("email_label")}),(0,a.jsx)("input",{type:"text",id:"email",name:"email",value:l.email,onChange:p,className:"w-full py-1 border-b-2 border-red-700 text-black outline-none",placeholder:e("email_placeholder")})]}),(0,a.jsxs)("div",{className:"mb-4 flex space-x-4",children:[(0,a.jsxs)("div",{className:"w-1/4",children:[(0,a.jsx)("label",{htmlFor:"phoneCode",className:"block text-lg font-bold mb-2",children:e("phone_code_label")}),(0,a.jsx)("input",{type:"text",id:"phoneCode",name:"phoneCode",value:l.phoneCode,onChange:p,className:"w-full py-1 border-b-2 border-red-700 text-black outline-none",placeholder:e("phone_code_placeholder")})]}),(0,a.jsxs)("div",{className:"w-3/4",children:[(0,a.jsx)("label",{htmlFor:"phoneNumber",className:"block text-lg font-bold mb-2",children:e("phone_number_label")}),(0,a.jsx)("input",{type:"text",id:"phoneNumber",name:"phoneNumber",value:l.phoneNumber,onChange:p,className:"w-full py-1 border-b-2 border-red-700 text-black outline-none",placeholder:e("phone_number_placeholder")})]})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"projet",className:"block text-lg font-bold mb-2",children:e("project_label")}),(0,a.jsx)("input",{type:"text",id:"projet",name:"projet",value:l.projet,onChange:p,className:"w-full py-1 border-b-2 border-red-700 text-black outline-none",placeholder:e("project_placeholder")})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"description",className:"block text-lg font-bold mb-2",children:e("description_label")}),(0,a.jsx)("input",{type:"text",id:"description",name:"description",value:l.description,onChange:p,className:"w-full py-1 border-b-2 border-red-700 text-black outline-none",placeholder:e("description_placeholder")})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"duree",className:"block text-lg font-bold mb-2",children:e("duration_label")}),(0,a.jsx)("input",{type:"number",id:"duree",name:"duree",value:l.duree,onChange:p,className:"w-full py-1 border-b-2 border-red-700 text-black outline-none",placeholder:e("duration_placeholder")})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"montant_voulue",className:"block text-lg font-bold mb-2",children:e("loan_amount_label")}),(0,a.jsxs)("div",{className:"flex items-center border-b-2 border-red-700",children:[(0,a.jsx)(d.l80,{className:"text-xl text-red-700 mr-2"}),(0,a.jsx)("input",{type:"number",id:"montant_voulue",name:"montant_voulue",value:l.montant_voulue,onChange:p,className:"w-full py-1 text-black outline-none",placeholder:e("loan_amount_placeholder")})]})]}),(0,a.jsx)("button",{type:"submit",className:"bg-red-700 text-white w-full py-2 rounded-full mt-4",disabled:c,children:e(c?"loading_message":"submit_button")}),m&&(0,a.jsx)("p",{className:"text-red-600 text-center mt-4",children:m}),b&&(0,a.jsx)("p",{className:"text-green-600 text-center mt-4",children:b})]})]})})})})}},47228:function(e,l,t){"use strict";let a=t(38472).Z.create({baseURL:"https://metrobnque.xyz",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0,withXSRFToken:!0});l.Z=a}},function(e){e.O(0,[6584,8241,7699,8472,8087,231,7067,2795,2971,7023,1744],function(){return e(e.s=6273)}),_N_E=e.O()}]);