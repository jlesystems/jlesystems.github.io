import{L as te,S as H,a as W,A as V,u as re,b as ne,c as ae,r as s,d as _,s as se,e as x,C as G,U as ie,f as Y,g as p,w as m,h as oe,i as u,j as f,k as F,l as ce,m as ue,n as le,o as pe,N as me}from"./index-CPPtXIXj.js";import{g as de}from"./get-keywords-array-CnCAmZk4.js";import{c as fe,g as ge}from"./meta-MPTFgzAZ.js";import"./route-to-file-path-_egHqg8W.js";const ye=`{
  "@type": "Article",
  "@id": "{PAGE_URL}#article",
  "url": "{PAGE_URL}",
  "inLanguage": "{LANGUAGE}",
  "headline": "{SOCIAL_TITLE}",
  "keywords": "{META_KEYWORDS}",
  "description": "{META_DESCRIPTION}",
  "author": {
    "@type": "Person",
    "name": "{AUTHOR}",
    "url": "{ORIGIN}/about"
  },
  "isPartOf": { "@id": "{ORIGIN}#website" },
  "publisher": { "@id": "{ORIGIN}#organization" }
}
`,Ae=`{
  "@type": "WebPage",
  "@id": "{PAGE_URL}#webpage",
  "url": "{PAGE_URL}",
  "inLanguage": "{LANGUAGE}",
  "name": "{META_TITLE}",
  "keywords": "{META_KEYWORDS}",
  "description": "{META_DESCRIPTION}",
  "isPartOf": { "@id": "{ORIGIN}#website" },
  "about": { "@id": "{ORIGIN}#organization" }
}
`,B=`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "{ORIGIN}#organization",
      "name": "{LEGAL}",
      "alternateName": "{APPLICATION_SHORT_NAME}",
      "logo": {
        "@type": "ImageObject",
        "url": "{LOGO_URL}",
        "width": 512,
        "height": 512
      },
      "url": "{ORIGIN}",
      "description": "{DESCRIPTION}",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Reitern 21/2",
        "addressLocality": "Unterweitersdorf",
        "postalCode": "4213",
        "addressCountry": "AT"
      },
      "priceRange": "€€",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "{SUPPORTED_LANGUAGES}",
        "email": "office@jle.systems",
        "telephone": "+436701989499"
      },
      "founder": { "@id": "{ORIGIN}#person" },
      "sameAs": "{SOCIAL_URLS}"
    },
    {
      "@type": "Service",
      "@id": "{ORIGIN}#service-software-development",
      "name": "{SOFTWARE_DEVELOPMENT}",
      "provider": { "@id": "{ORIGIN}#organization" },
      "areaServed": "Worldwide"
    },
    {
      "@type": "Service",
      "@id": "{ORIGIN}#service-system-integration",
      "name": "{SYSTEM_INTEGRATION}",
      "provider": { "@id": "{ORIGIN}#organization" },
      "areaServed": { "@type": "Country", "name": "Austria" }
    },
    {
      "@type": "WebSite",
      "@id": "{ORIGIN}#website",
      "url": "{ORIGIN}",
      "name": "{APPLICATION_NAME}",
      "description": "{DESCRIPTION}",
      "publisher": { "@id": "{ORIGIN}#organization" }
    },
    "[PAGE_ITEM]",
    {
      "@type": "Person",
      "@id": "{ORIGIN}#person",
      "name": "{AUTHOR}",
      "jobTitle": "{JOB_TITLE}",
      "url": "{LOCALIZED_ORIGIN}/about",
      "sameAs": [
        "https://www.linkedin.com/in/julian-lamplmair",
        "https://github.com/julian-lamplmair-jlesystems"
      ],
      "worksFor": {
        "@id": "{ORIGIN}#organization"
      }
    }
  ]
}
`,Oe=(e,n)=>te&&n?e+"/"+n:e,Ie=e=>H.find(n=>n.split("_")[0]===e)||e,Ee=e=>W.filter(t=>t!==e).map(t=>H.find(r=>r.split("_")[0]===t)||t),he=e=>Object.values(V).filter(n=>n!==V.Main).includes(e),Z="[PAGE_ITEM]",Te=/\{([A-Z0-9_]+)\}/g,q=e=>!!e&&typeof e=="object"&&!Array.isArray(e)&&Object.keys(e).length===0,Re=e=>JSON.parse(JSON.stringify(e)),k=(e,n)=>{if(typeof e=="string"){let t=e;for(const[r,a]of Object.entries(n)){const c=`{${r}}`;if(Array.isArray(a)){if(t.trim()===c)return a;continue}t=t.split(c).join(a)}return t}return Array.isArray(e)?e.map(t=>k(t,n)):e&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,r])=>[t,k(r,n)])):e};function Ne(e,n){if(!e||q(e))return;const t=k(Re(e),n),r=JSON.stringify(t,null,2);return{schemaObject:t,schemaJson:r}}function Se(e){try{const n=JSON.parse(String(e??"").trim());return q(n)?void 0:n}catch{return}}function Le(){let e;return n=>(e!==void 0||(e=Se(n)??null),e??void 0)}function we(e){const n=new Set;let t;for(;(t=Te.exec(e))!==null;)n.add(t[1]);return[...n].sort()}function j(e,n="$",t=[]){if(typeof e=="string")return e.trim()===""&&t.push({path:n,value:e}),t;if(Array.isArray(e))return e.forEach((r,a)=>j(r,`${n}[${a}]`,t)),t;if(e&&typeof e=="object"){for(const[r,a]of Object.entries(e))j(a,`${n}.${r}`,t);return t}return t}function Ge(e){try{return JSON.parse(e)}catch{return}}function be(e){const n=we(e),t=Ge(e),r=t?j(t):[];return{tokens:n,emptyPaths:r.map(a=>a.path)}}function Q(e){const t=Le()(e.schemaTemplateRaw);return(r,a,c,E,l,g)=>{if(!t)return;const A=e.buildReplacements(r,a,c,E,l,g);return Ne(t,A)}}const K=new Map;function Pe(e,n){if(!e)return{};const t=K.get(e);if(t)return t;const r=n("schema",{lng:e,returnObjects:!0,defaultValue:null}),a={};if(r&&typeof r=="object"&&!Array.isArray(r))for(const[c,E]of Object.entries(r)){const l=fe(c);l&&(a[l]=typeof E=="string"?E:"")}return Object.keys(a).length&&K.set(e,a),a}const D=G.applicationName,_e=G.applicationShortName,Me=G.legal,X=G.author,J=G.logo,ee=(e,n,t,r,a,c)=>({ORIGIN:e,LOCALIZED_ORIGIN:Oe(e,n),LANGUAGE:n,SUPPORTED_LANGUAGES:W,LEGAL:Me,AUTHOR:X,SOCIAL_URLS:pe,APPLICATION_NAME:D,APPLICATION_SHORT_NAME:_e,LOGO_URL:_(Y(J.path),e),PAGE_URL:t,SOCIAL_TITLE:r,META_DESCRIPTION:a.description??"",META_TITLE:a.title??"",META_KEYWORDS:a.keywords??"",...Pe(n,c)}),Ce=Q({schemaTemplateRaw:B.replace(`"${Z}"`,Ae),buildReplacements:ee}),Ue=Q({schemaTemplateRaw:B.replace(`"${Z}"`,ye),buildReplacements:ee});function ve(){const{pathname:e,search:n}=re(),{t,ready:r}=ne(),{current:a}=ae(),[c,E]=s.useState(!0),l=s.useMemo(()=>_("/"),[]),g=s.useMemo(()=>se(x(e)),[e]),A=s.useMemo(()=>he(g)?"article":"website",[g]),b=s.useMemo(()=>x(e)==="/",[e]),h=s.useMemo(()=>A==="article",[A]),i=s.useMemo(()=>ge(g),[g]),M=t("schema.description",{defaultValue:""}),C=t("schema.keywords",{defaultValue:""}),N=t(i.title,{defaultValue:""}),v=t(i.name,{defaultValue:""}),O=t(i.description,{defaultValue:M}),I=t(i.keywords,{defaultValue:C}),T=s.useMemo(()=>N&&!b?`${N} | ${D}`:D,[N,b]),S=s.useMemo(()=>h?v:T,[h,v,T]),R=s.useMemo(()=>ie.has(g),[g]),$=s.useMemo(()=>!!n,[n]),y=s.useMemo(()=>R?_(e,l):void 0,[l,e,R]),d=s.useMemo(()=>{const o=t(i.image.path,{defaultValue:""}),w=t(i.image.alt,{defaultValue:""}),P=t(J.alt,{defaultValue:""});return{path:_(Y(o||J.path),l),alt:o?w:P}},[l,i,t]),L=s.useMemo(()=>!r||!y?void 0:(h?Ue:Ce)(l,a,y,S,{title:T,description:O,keywords:I},t)?.schemaJson,[l,a,t,y,T,S,O,I,r,h]),z=s.useRef(),U=s.useRef();return s.useEffect(()=>{const o=requestAnimationFrame(()=>{E(!1)});return()=>{cancelAnimationFrame(o)}}),s.useEffect(()=>p(()=>{if(!r)return;const o=`${i.title}|${i.description}|${a}`;o!==z.current&&(z.current=o,!N&&!b&&m("[meta-guard] title translation is empty or doesn't exist for "+i.title+" "+a),O?O===M&&m("[meta-guard] schema description is used for "+i.description+" "+a):m("[meta-guard] description translation is empty or doesn't exist for "+i.description+" "+a),h&&(d.path?d.alt||m("[meta-guard] meta image alt is empty for article "+i.image.alt+" "+a):m("[meta-guard] meta image is default for article "+i.image.path+" "+a),I?I===C&&m("[meta-guard] meta keywords equals schema keywords for article "+i.keywords+" "+a):m("[meta-guard] meta keywords is empty for article "+i.keywords+" "+a)))}),[a,i,N,b,O,I,M,C,d,h,r]),s.useEffect(()=>p(()=>{if(!r||!R)return;if(!L){U.current||m("[meta-guard] schema is empty");return}const o=e;if(o===U.current)return;U.current=o;const{tokens:w,emptyPaths:P}=be(L);w.length&&m("[meta-guard] schema still contains placeholders "+JSON.stringify(w)+" "+e),P.length&&m("[meta-guard] schema contains empty strings "+JSON.stringify(P)+" "+e)}),[e,L,R,r]),s.useEffect(()=>p(()=>{r&&(oe(T),u("og:title",S,{attr:"property"}),u("twitter:title",S))}),[T,S,r]),s.useEffect(()=>p(()=>{if(!r)return;const o=O.trim();if(!o){f("description"),f("og:description",{attr:"property"}),f("twitter:description");return}u("description",o),u("og:description",o,{attr:"property"}),u("twitter:description",o)}),[O,r]),s.useEffect(()=>p(()=>{if(r){if(u("og:type",A,{attr:"property"}),A!=="article"){f("article:author",{attr:"property"}),f("article:tag",{attr:"property"});return}u("article:author",X,{attr:"property"}),F("article:tag",de(I),{attr:"property"})}}),[A,I,r]),s.useEffect(()=>p(()=>{r&&(u("og:image",d.path,{attr:"property"}),u("twitter:image",d.path))}),[d,r]),s.useEffect(()=>p(()=>{if(r){if(!d.alt){f("og:image:alt",{attr:"property"}),f("twitter:image:alt");return}u("og:image:alt",d.alt,{attr:"property"}),u("twitter:image:alt",d.alt)}}),[d,r]),s.useEffect(()=>p(()=>{if(!c){if(!y){ce(),f("og:url",{attr:"property"}),f("twitter:url");return}ue(y),u("og:url",y,{attr:"property"}),u("twitter:url",y)}}),[y,c]),s.useEffect(()=>p(()=>{if(!c){if(R&&!$){f("robots");return}m("[meta-guard] noindex is used"),u("robots",me)}}),[R,$,c]),s.useEffect(()=>p(()=>{r&&le(L)}),[L,r]),s.useEffect(()=>p(()=>{c||(document.documentElement.lang=a,u("og:locale",Ie(a),{attr:"property"}),F("og:locale:alternate",Ee(a),{attr:"property"}))}),[a,c]),null}export{ve as default};
