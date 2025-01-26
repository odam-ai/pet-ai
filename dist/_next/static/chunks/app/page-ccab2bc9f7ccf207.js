(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5899:(e,t,a)=>{Promise.resolve().then(a.bind(a,6582))},6582:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>P});var s=a(5155),r=a(8684),n=a(9827),l=a(1273);let i=(0,n.v)((e,t)=>({currentJob:null,isGenerating:!1,prompt:"",aspectRatio:"1:1",error:null,setPrompt:t=>e({prompt:t}),setAspectRatio:t=>e({aspectRatio:t}),generateImage:async()=>{try{e({isGenerating:!0,error:null});let a={input:{prompt:t().prompt},workflow:"labubu"},s=await l.C.createJob(a);e({currentJob:s}),s.id&&await t().checkJobStatus(s.id)}catch(t){e({error:"Failed to generate image"}),console.error("Failed to generate image:",t)}finally{}},checkJobStatus:async t=>{let a=0,s=async()=>{try{let r=await l.C.getJob(t);if(e({currentJob:r}),"succeeded"===r.status||"failed"===r.status){"failed"===r.status&&e({error:r.failed_reason||"Generation failed"}),e({isGenerating:!1});return}a<30?(a++,setTimeout(s,2e3)):e({error:"Generation timeout"})}catch(t){e({error:"Failed to check job status"}),console.error("Failed to check job status:",t)}};await s()},reset:()=>e({currentJob:null,isGenerating:!1,error:null})}));var o=a(2115),d=a(2317),c=a(1027),u=a(3463),m=a(9795);function x(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,m.QP)((0,u.$)(t))}let f=(0,c.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),g=o.forwardRef((e,t)=>{let{className:a,variant:r,size:n,asChild:l=!1,...i}=e,o=l?d.DX:"button";return(0,s.jsx)(o,{className:x(f({variant:r,size:n,className:a})),ref:t,...i})});g.displayName="Button";let h=o.forwardRef((e,t)=>{let{className:a,type:r,...n}=e;return(0,s.jsx)("input",{type:r,className:x("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...n})});h.displayName="Input";let p=(0,c.F)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),b=o.forwardRef((e,t)=>{let{className:a,variant:r,...n}=e;return(0,s.jsx)("div",{ref:t,role:"alert",className:x(p({variant:r}),a),...n})});b.displayName="Alert",o.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("h5",{ref:t,className:x("mb-1 font-medium leading-none tracking-tight",a),...r})}).displayName="AlertTitle",o.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:x("text-sm [&_p]:leading-relaxed",a),...r})}).displayName="AlertDescription";var v=a(5565),y=a(8299);let j=y.bL;y.l9;let w=y.ZL;y.bm;let N=o.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(y.hJ,{ref:t,className:x("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r})});N.displayName=y.hJ.displayName;let k=o.forwardRef((e,t)=>{let{className:a,children:r,...n}=e;return(0,s.jsxs)(w,{children:[(0,s.jsx)(N,{}),(0,s.jsx)(y.UC,{ref:t,className:x("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...n,children:r})]})});k.displayName=y.UC.displayName;let A=o.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(y.hE,{ref:t,className:x("text-lg font-semibold leading-none tracking-tight",a),...r})});function C(){var e,t;let{prompt:a,currentJob:r,isGenerating:n,error:l,setPrompt:d,generateImage:c}=i(),{isMobile:u}=function(){let[e,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=()=>{t(window.innerWidth<768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),{isMobile:e}}(),[m,x]=(0,o.useState)(!1),f=(null==r?void 0:r.status)==="succeeded"?Array.isArray(r.output)?null:null===(t=r.output)||void 0===t?void 0:null===(e=t.image)||void 0===e?void 0:e.url:null;return(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,s.jsx)("div",{className:"aspect-[3/4] rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden relative cursor-pointer",onClick:()=>f&&x(!0),children:f?(0,s.jsx)(v.default,{src:f,alt:"Generated image",fill:!0,className:"object-cover",unoptimized:!0}):(0,s.jsx)("div",{className:"flex items-center justify-center h-full",children:n?(0,s.jsxs)("div",{className:"text-center flex flex-col items-center justify-center",children:[(0,s.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100"}),(0,s.jsx)("p",{className:"mt-4 text-gray-900 dark:text-gray-100",children:r&&null!==r.queue_pos?"Waiting in queue... Position: ".concat(r.queue_pos):(null==r?void 0:r.status)==="started"||(null==r?void 0:r.status)==="rendered"?"Generating your image...":"Processing..."})]}):(0,s.jsx)("span",{className:"text-gray-500 dark:text-gray-400",children:"No image generated"})})}),(0,s.jsx)(j,{open:m,onOpenChange:x,children:(0,s.jsxs)(k,{className:"max-w-3xl p-0 overflow-hidden",children:[(0,s.jsx)(A,{className:"sr-only",children:"Generated Image Preview"}),(0,s.jsx)("div",{className:"absolute right-4 top-4 z-50",children:(0,s.jsx)("button",{className:"rounded-full p-2 bg-black/50 hover:bg-black/70 text-white transition-colors",onClick:()=>x(!1),children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,s.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})}),f&&(0,s.jsx)("div",{className:"aspect-[3/4] relative",children:(0,s.jsx)(v.default,{src:f,alt:"Generated image preview",fill:!0,className:"object-contain",unoptimized:!0})})]})}),l&&(0,s.jsx)(b,{variant:"destructive",children:(0,s.jsx)("p",{children:l})}),(0,s.jsxs)("div",{className:"flex ".concat(u?"flex-col":""," gap-2"),children:[(0,s.jsx)(h,{value:a,onChange:e=>d(e.target.value),placeholder:"Enter your prompt...",className:"flex-1",disabled:n}),(0,s.jsx)(g,{onClick:c,disabled:n||!a,className:u?"w-full":"w-auto",children:n?"Generating...":"Generate"})]})]})}A.displayName=y.hE.displayName,o.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(y.VY,{ref:t,className:x("text-sm text-muted-foreground",a),...r})}).displayName=y.VY.displayName;var L=a(6710),z=a(6148),G=a(1626),_=a(4035),R=a(1125);let E=R.bL,I=o.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(R.B8,{ref:t,className:x("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",a),...r})});I.displayName=R.B8.displayName;let S=o.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(R.l9,{ref:t,className:x("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",a),...r})});S.displayName=R.l9.displayName;let T=o.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(R.UC,{ref:t,className:x("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",a),...r})});T.displayName=R.UC.displayName;var J=a(9253);function F(){let[e,t]=(0,o.useState)([]),[a,r]=(0,o.useState)(!0);return((0,o.useEffect)(()=>{(async()=>{try{let e=(await l.C.getJobs()).sort((e,t)=>{let a=new Date(e.succeeded_at||e.created_at);return new Date(t.succeeded_at||t.created_at).getTime()-a.getTime()});t(e)}catch(e){console.error("Failed to fetch jobs:",e)}finally{r(!1)}})()},[]),a)?(0,s.jsx)("div",{className:"flex justify-center items-center min-h-[200px]",children:(0,s.jsx)("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"})}):0===e.length?(0,s.jsx)("div",{className:"text-center py-8 text-gray-500",children:"No generated images yet. Try creating one!"}):(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(e=>{var t;return(0,s.jsxs)("div",{className:"border rounded-lg overflow-hidden bg-white shadow-sm",children:[(null===(t=e.output)||void 0===t?void 0:t.image)&&(0,s.jsx)("div",{className:"relative h-48",children:(0,s.jsx)(v.default,{src:e.output.image.url,alt:"Generated image",fill:!0,className:"object-cover",unoptimized:!0})}),(0,s.jsxs)("div",{className:"p-4",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,s.jsx)("span",{className:"text-sm px-2 py-1 rounded ".concat("succeeded"===e.status?"bg-green-100 text-green-800":"failed"===e.status?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"),children:e.status}),(0,s.jsx)("span",{className:"text-sm text-gray-500",children:(0,J.GP)(new Date(e.succeeded_at||e.created_at),"MMM d, yyyy HH:mm")})]}),e.failed_reason&&(0,s.jsx)("p",{className:"text-sm text-red-600 mt-2",children:e.failed_reason})]})]},e.id)})})}function P(){let{user:e,loading:t,signInWithGoogle:a,signOut:n}=(0,r.A)(),[l,i]=(0,o.useState)(0),[d,c]=(0,o.useState)(!1),u=[{description:"A Labubu wearing a pig nose and piglet costume, holding a donut",background:"bg-pink-100"},{description:"A Labubu wearing pikachu costume, standing in a Pokemon forest scene",background:"bg-yellow-100"},{description:"A Labubu wearing a poop costume, holding a toilet plug, sitting on toilet stool",background:"bg-blue-100"}];return((0,o.useEffect)(()=>{let e=setInterval(()=>{i(e=>(e+1)%u.length)},3e3);return()=>clearInterval(e)},[u.length]),(0,o.useEffect)(()=>{let e=setInterval(()=>{c(!0),setTimeout(()=>c(!1),800)},2e3);return()=>clearInterval(e)},[]),t)?(0,s.jsx)("div",{className:"flex items-center justify-center min-h-screen",children:(0,s.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"})}):e?(0,s.jsxs)("main",{className:"container mx-auto px-4 py-8 overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-8 flex-wrap",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold",children:"LabuLab"}),(0,s.jsxs)("div",{className:"flex items-center gap-4 flex-wrap",children:[(0,s.jsx)("span",{className:"truncate max-w-xs",children:e.email}),(0,s.jsx)(g,{variant:"outline",onClick:n,children:"Sign Out"})]})]}),(0,s.jsxs)(E,{defaultValue:"generate",className:"w-full",children:[(0,s.jsxs)(I,{className:"grid w-full grid-cols-2 mb-8",children:[(0,s.jsx)(S,{value:"generate",children:"Generate Image"}),(0,s.jsx)(S,{value:"history",children:"History"})]}),(0,s.jsx)(T,{value:"generate",children:(0,s.jsx)(C,{})}),(0,s.jsx)(T,{value:"history",children:(0,s.jsx)(F,{})})]})]}):(0,s.jsxs)("div",{className:"min-h-screen mx-auto relative",children:[(0,s.jsx)("style",{children:"\n            @keyframes gentleJello {\n              0%, 100% { transform: scale3d(1, 1, 1); }\n              30% { transform: scale3d(1.1, 0.9, 1); }\n              40% { transform: scale3d(0.9, 1.1, 1); }\n              50% { transform: scale3d(1.05, 0.95, 1); }\n              65% { transform: scale3d(0.95, 1.05, 1); }\n              75% { transform: scale3d(1.02, 0.98, 1); }\n            }\n            \n            .jello-button {\n              animation: gentleJello 0.8s both;\n            }\n            \n            .carousel-slide {\n              transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n            }\n          "}),(0,s.jsx)("header",{className:"fixed top-0 left-0 right-0 z-50 bg-white shadow-sm",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto px-4 py-3 flex justify-between items-center",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsxs)("h1",{className:"text-2xl md:text-3xl",style:{fontFamily:"var(--font-fredoka-one)"},children:[(0,s.jsx)("span",{children:"Labu"}),(0,s.jsx)("span",{className:"text-blue-400",children:"Lab"})]}),(0,s.jsx)("span",{className:"text-sm md:text-base text-gray-500",style:{fontFamily:"var(--font-fredoka-one)"},children:"Create your own unique Labubu"})]}),(0,s.jsx)(g,{variant:"ghost",size:"icon",children:(0,s.jsx)(L.A,{className:"h-6 w-6"})})]})}),(0,s.jsxs)("main",{className:"pt-0",children:[(0,s.jsx)("div",{className:"relative h-[calc(100vh-120px)] bg-gray-900 mt-14",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto h-full relative",children:[(0,s.jsx)(v.default,{src:"/assets/astro.png",alt:"Astronaut Labubu",fill:!0,className:"object-contain md:object-cover z-0",priority:!0,unoptimized:!0}),(0,s.jsxs)("div",{className:"absolute inset-x-0 bottom-20 px-4 z-10 space-y-4 max-w-xl mx-auto",children:[(0,s.jsx)("div",{className:"bg-white bg-opacity-70 rounded-lg p-3 mx-2",children:(0,s.jsx)("p",{className:"text-gray-800 text-center",children:"A Labubu wearing an astronaut costume, standing on the moon"})}),(0,s.jsx)(g,{className:"w-full bg-orange-500 hover:bg-orange-600 text-white text-xl py-6 font-semibold ".concat(d?"jello-button":""),style:{fontFamily:"var(--font-fredoka-one)"},onClick:a,children:"START GENERATING"})]})]})}),(0,s.jsx)("div",{className:"bg-gray-900 text-center py-12 px-6",children:(0,s.jsx)("div",{className:"max-w-4xl mx-auto",children:(0,s.jsx)("h2",{className:"text-white text-2xl md:text-3xl mb-2",style:{fontFamily:"var(--font-fredoka-one)"},children:"Let your imagination wild! Create your own unique Labubu design at LabuLab!"})})}),(0,s.jsxs)("div",{className:"max-w-6xl mx-auto px-4",children:[(0,s.jsx)("div",{className:"mt-8 overflow-hidden rounded-lg",children:(0,s.jsx)("div",{className:"flex carousel-slide",style:{transform:"translateX(-".concat(100*l,"%)")},children:u.map((e,t)=>(0,s.jsx)("div",{className:"w-full flex-shrink-0 ".concat(e.background," p-6 md:p-8"),children:(0,s.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,s.jsx)("img",{src:"/assets/showcase/showcase-".concat(t+1,".png"),alt:"Labubu design ".concat(t+1),className:"rounded-lg mb-3 w-full"}),(0,s.jsx)("p",{className:"text-sm md:text-base bg-white bg-opacity-75 rounded p-3",children:e.description})]})},t))})}),(0,s.jsxs)("div",{className:"mt-12 bg-gray-50 rounded-lg p-8 mx-auto max-w-3xl",children:[(0,s.jsx)("h3",{className:"text-2xl md:text-3xl mb-6 text-center",style:{fontFamily:"var(--font-fredoka-one)"},children:"How it works:"}),(0,s.jsxs)("ol",{className:"space-y-3 mb-6",children:[(0,s.jsx)("li",{children:"1. Input your desired Labubu design in the text box."}),(0,s.jsx)("li",{children:'2. Click "Generate"'}),(0,s.jsx)("li",{children:"3. Wait ~20 seconds, and receive your one of a kind Labubu design!"})]}),(0,s.jsx)(g,{className:"w-full bg-orange-500 hover:bg-orange-600 text-white text-xl py-6 font-semibold ".concat(d?"jello-button":""),style:{fontFamily:"var(--font-fredoka-one)"},onClick:a,children:"START GENERATING"})]})]})]}),(0,s.jsx)("footer",{className:"bg-gray-900 text-white py-12 px-4 mt-16",children:(0,s.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,s.jsxs)("div",{className:"flex justify-center space-x-6 mb-6",children:[(0,s.jsx)("a",{href:"#",className:"hover:text-gray-300",children:(0,s.jsx)(z.A,{className:"h-6 w-6"})}),(0,s.jsx)("a",{href:"#",className:"hover:text-gray-300",children:(0,s.jsx)(G.A,{className:"h-6 w-6"})}),(0,s.jsx)("a",{href:"#",className:"hover:text-gray-300",children:(0,s.jsx)(_.A,{className:"h-6 w-6"})})]}),(0,s.jsxs)("div",{className:"text-center space-y-4",children:[(0,s.jsxs)("div",{className:"flex justify-center space-x-4 text-sm",children:[(0,s.jsx)("a",{href:"#",className:"hover:text-gray-300",children:"About"}),(0,s.jsx)("a",{href:"#",className:"hover:text-gray-300",children:"Privacy"}),(0,s.jsx)("a",{href:"#",className:"hover:text-gray-300",children:"Terms"}),(0,s.jsx)("a",{href:"#",className:"hover:text-gray-300",children:"Contact"})]}),(0,s.jsx)("p",{className:"text-gray-400 text-sm",children:"\xa9 2025 LabuLab. All rights reserved."})]})]})})]})}},8684:(e,t,a)=>{"use strict";a.d(t,{AuthProvider:()=>c,A:()=>u});var s=a(5155),r=a(2115),n=a(399);let l=(0,a(9904).Wp)({apiKey:"AIzaSyDMSvhlyQrWZTdO4z8O1B2AehhoiyoXNCA",authDomain:"odam-ai.firebaseapp.com",projectId:"odam-ai",storageBucket:"odam-ai.appspot.com",messagingSenderId:"161533228228",appId:"1:161533228228:web:f0259595bc636475c68591"}),i=(0,n.xI)(l);var o=a(1273);let d=(0,r.createContext)({});function c(e){let{children:t}=e,[a,l]=(0,r.useState)(null),[c,u]=(0,r.useState)(!0);(0,r.useEffect)(()=>{let e=(0,n.hg)(i,async e=>{if(l(e),e){let t=await e.getIdToken();(0,o.O)(t)}else(0,o.O)("");u(!1)});return()=>e()},[]);let m=async()=>{let e=new n.HF;try{let t=await (0,n.df)(i,e),a=await t.user.getIdToken();(0,o.O)(a)}catch(e){console.error("Error signing in with Google:",e)}},x=async()=>{try{await (0,n.CI)(i)}catch(e){console.error("Error signing out:",e)}};return(0,s.jsx)(d.Provider,{value:{user:a,loading:c,signInWithGoogle:m,signOut:x},children:t})}let u=()=>(0,r.useContext)(d)},1273:(e,t,a)=>{"use strict";a.d(t,{C:()=>n,O:()=>r});let s=a(2651).A.create({baseURL:"https://jobs.odam.ai",headers:{"Content-Type":"application/json"}}),r=e=>{s.defaults.headers.common.Authorization="Bearer ".concat(e)},n={createJob:async e=>(await s.post("/api/v1/jobs",e)).data,getJob:async e=>(await s.get("/api/v1/jobs/".concat(e))).data,getJobs:async()=>(await s.get("/api/v1/jobs")).data,getQueueSize:async()=>(await s.get("/api/v1/queue/size")).data}}},e=>{var t=t=>e(e.s=t);e.O(0,[882,991,50,441,517,358],()=>t(5899)),_N_E=e.O()}]);