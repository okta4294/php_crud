import{T as c,o as m,f as d,a as e,u as s,w as u,F as f,Z as g,b as l,e as _,d as k,y as x,g as v}from"./app-99f516dd.js";import{_ as y}from"./AuthenticatedLayout-1775790a.js";import{_ as n,a as r,b as i}from"./TextInput-3dc07cc1.js";import{P as V}from"./PrimaryButton-bd0d09d4.js";import"./ApplicationLogo-c4c25250.js";import"./_plugin-vue_export-helper-c27b6911.js";const b=l("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Add Posts",-1),w={class:"py-12"},h={class:"max-w-7xl mx-auto sm:px-2 lg:px-2 space-y-6"},j={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},S=["onSubmit"],q={class:"flex items-center gap-4"},B={key:0,class:"text-sm text-gray-600"},E={__name:"Create",props:{status:{type:String}},setup(C){const t=c({judul:"",kategori:"",konten:"",penulis:""}),p=()=>{t.post(route("posts.store"))};return(N,o)=>(m(),d(f,null,[e(s(g),{title:"Create Posts"}),e(y,null,{header:u(()=>[b]),default:u(()=>[l("div",w,[l("div",h,[l("div",j,[l("form",{name:"createForm",onSubmit:_(p,["prevent"]),class:"mt-6 space-y-6"},[l("div",null,[e(n,{for:"judul",value:"Judul"}),e(r,{id:"judul",type:"text",class:"mt-1 block w-full",modelValue:s(t).judul,"onUpdate:modelValue":o[0]||(o[0]=a=>s(t).judul=a),required:"",autofocus:"",autocomplete:"off"},null,8,["modelValue"]),e(i,{class:"mt-2",message:s(t).errors.judul},null,8,["message"])]),l("div",null,[e(n,{for:"kategori",value:"kategori"}),e(r,{id:"kategori",type:"text",class:"mt-1 block w-full",modelValue:s(t).kategori,"onUpdate:modelValue":o[1]||(o[1]=a=>s(t).kategori=a),required:"",autocomplete:"off"},null,8,["modelValue"]),e(i,{class:"mt-2",message:s(t).errors.kategori},null,8,["message"])]),l("div",null,[e(n,{for:"konten",value:"konten"}),e(r,{id:"konten",type:"text",class:"mt-1 block w-full",modelValue:s(t).konten,"onUpdate:modelValue":o[2]||(o[2]=a=>s(t).konten=a),required:"",autocomplete:"off"},null,8,["modelValue"]),e(i,{class:"mt-2",message:s(t).errors.konten},null,8,["message"])]),l("div",null,[e(n,{for:"penulis",value:"penulis"}),e(r,{id:"konten",type:"text",class:"mt-1 block w-full",modelValue:s(t).penulis,"onUpdate:modelValue":o[3]||(o[3]=a=>s(t).penulis=a),required:"",autocomplete:"off"},null,8,["modelValue"]),e(i,{class:"mt-2",message:s(t).errors.penulis},null,8,["message"])]),l("div",q,[e(V,{disabled:s(t).processing},{default:u(()=>[k("Save")]),_:1},8,["disabled"]),e(x,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:u(()=>[s(t).recentlySuccessful?(m(),d("p",B,"Saved.")):v("",!0)]),_:1})])],40,S)])])])]),_:1})],64))}};export{E as default};
