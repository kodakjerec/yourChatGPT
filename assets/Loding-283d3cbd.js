import{s as c,_ as C,o as $,c as x,p as D,k as T,a as n,__tla as j}from"./index-6d174d10.js";let u,y,g,f,v,_,q=Promise.all([(()=>{try{return j}catch{}})()]).then(async()=>{let i=new AbortController,h=i.signal,a="",o={},d={},s={};function p(){return a||(a=c().getApiKey,a)}f=async function(e,r=!0){a||p(),o=c().getSettings("settings_chat");try{return await fetch("https://api.openai.com/v1/chat/completions",{signal:h,method:"post",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({model:o.model,stream:r,messages:e,temperature:o.temperature,presence_penalty:o.presence_penalty,frequency_penalty:o.frequency_penalty})})}catch(t){throw t}},y=function(){i.abort(),i=new AbortController,h=i.signal},_=async function(e){a||p();try{return await fetch("https://api.openai.com/v1/images/generations",{method:"post",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify(e)})}catch(r){throw r}},g=async function(e,r){a||p(),d=c().getSettings("settings_trans");const t=new FormData;t.append("file",e),t.append("model",d.model),t.append("temperature",d.temperature),r&&t.append("prompt",r);try{return await fetch("https://api.openai.com/v1/audio/translations",{method:"post",headers:{Authorization:`Bearer ${a}`},body:t})}catch(l){throw l}},v=async function(e,r){a||p(),s=c().getSettings("settings_trans");const t=new FormData;t.append("file",e),t.append("model",s.model),t.append("temperature",s.temperature),t.append("language",s.language),r&&t.append("prompt",r);try{return await fetch("https://api.openai.com/v1/audio/transcriptions",{method:"post",headers:{Authorization:`Bearer ${a}`},body:t})}catch(l){throw l}};const w={},m=e=>(D("data-v-7841b870"),e=e(),T(),e),b={class:"flex"},A=m(()=>n("div",{class:"loading mt-1"},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")],-1)),S=m(()=>n("div",{class:"text-gray-500"},"Waiting",-1)),z=[A,S];function B(e,r){return $(),x("div",b,z)}u=C(w,[["render",B],["__scopeId","data-v-7841b870"]])});export{u as L,q as __tla,y as a,g as b,f as c,v as d,_ as i};
