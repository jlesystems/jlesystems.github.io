import{L as te,S as H,a as W,A as K,u as re,b as ne,c as ae,r as s,d as P,s as se,e as x,C as G,U as ie,f as Z,g as p,w as f,h as oe,i as u,j as d,k as F,l as ce,m as ue,n as le,o as pe,N as fe}from"./index-B0lvsryB.js";import{g as me}from"./get-keywords-array-CnCAmZk4.js";import{c as de,g as ge}from"./meta-Dk6Fv5UH.js";import"./route-to-file-path-DlFlI9Pd.js";const ye=`{
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
      "@id": "{ORIGIN}#service-software",
      "name": "{SOFTWARE}",
      "url": "{LOCALIZED_ORIGIN}/solutions/software",
      "provider": { "@id": "{ORIGIN}#organization" },
      "areaServed": "Worldwide"
    },
    {
      "@type": "Service",
      "@id": "{ORIGIN}#service-automation",
      "name": "{AUTOMATION}",
      "url": "{LOCALIZED_ORIGIN}/solutions/automation",
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
`,Oe=(e,n)=>te&&n?e+"/"+n:e,Ie=e=>H.find(n=>n.split("_")[0]===e)||e,Ee=e=>W.filter(t=>t!==e).map(t=>H.find(r=>r.split("_")[0]===t)||t),he=e=>Object.values(K).filter(n=>n!==K.Main).includes(e),Y="[PAGE_ITEM]",Re=/\{([A-Z0-9_]+)\}/g,q=e=>!!e&&typeof e=="object"&&!Array.isArray(e)&&Object.keys(e).length===0,Te=e=>JSON.parse(JSON.stringify(e)),U=(e,n)=>{if(typeof e=="string"){let t=e;for(const[r,a]of Object.entries(n)){const c=`{${r}}`;if(Array.isArray(a)){if(t.trim()===c)return a;continue}t=t.split(c).join(a)}return t}return Array.isArray(e)?e.map(t=>U(t,n)):e&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,r])=>[t,U(r,n)])):e};function Le(e,n){if(!e||q(e))return;const t=U(Te(e),n),r=JSON.stringify(t,null,2);return{schemaObject:t,schemaJson:r}}function Ne(e){try{const n=JSON.parse(String(e??"").trim());return q(n)?void 0:n}catch{return}}function Se(){let e;return n=>(e!==void 0||(e=Ne(n)??null),e??void 0)}function we(e){const n=new Set;let t;for(;(t=Re.exec(e))!==null;)n.add(t[1]);return[...n].sort()}function k(e,n="$",t=[]){if(typeof e=="string")return e.trim()===""&&t.push({path:n,value:e}),t;if(Array.isArray(e))return e.forEach((r,a)=>k(r,`${n}[${a}]`,t)),t;if(e&&typeof e=="object"){for(const[r,a]of Object.entries(e))k(a,`${n}.${r}`,t);return t}return t}function Ge(e){try{return JSON.parse(e)}catch{return}}function be(e){const n=we(e),t=Ge(e),r=t?k(t):[];return{tokens:n,emptyPaths:r.map(a=>a.path)}}function Q(e){const t=Se()(e.schemaTemplateRaw);return(r,a,c,E,l,g)=>{if(!t)return;const A=e.buildReplacements(r,a,c,E,l,g);return Le(t,A)}}const V=new Map;function Pe(e,n){if(!e)return{};const t=V.get(e);if(t)return t;const r=n("schema",{lng:e,returnObjects:!0,defaultValue:null}),a={};if(r&&typeof r=="object"&&!Array.isArray(r))for(const[c,E]of Object.entries(r)){const l=de(c);l&&(a[l]=typeof E=="string"?E:"")}return Object.keys(a).length&&V.set(e,a),a}const j=G.applicationName,_e=G.applicationShortName,Me=G.legal,X=G.author,D=G.logo,ee=(e,n,t,r,a,c)=>({ORIGIN:e,LOCALIZED_ORIGIN:Oe(e,n),LANGUAGE:n,SUPPORTED_LANGUAGES:W,LEGAL:Me,AUTHOR:X,SOCIAL_URLS:pe,APPLICATION_NAME:j,APPLICATION_SHORT_NAME:_e,LOGO_URL:P(Z(D.src),e),PAGE_URL:t,SOCIAL_TITLE:r,META_DESCRIPTION:a.description??"",META_TITLE:a.title??"",META_KEYWORDS:a.keywords??"",...Pe(n,c)}),Ce=Q({schemaTemplateRaw:B.replace(`"${Y}"`,Ae),buildReplacements:ee}),Ue=Q({schemaTemplateRaw:B.replace(`"${Y}"`,ye),buildReplacements:ee});function ve(){const{pathname:e,search:n}=re(),{t,ready:r}=ne(),{current:a}=ae(),[c,E]=s.useState(!0),l=s.useMemo(()=>P("/"),[]),g=s.useMemo(()=>se(x(e)),[e]),A=s.useMemo(()=>he(g)?"article":"website",[g]),J=s.useMemo(()=>x(e)==="/",[e]),h=s.useMemo(()=>A==="article",[A]),i=s.useMemo(()=>ge(g),[g]),_=t("schema.description",{defaultValue:""}),M=t("schema.keywords",{defaultValue:""}),L=t(i.title,{defaultValue:""}),v=t(i.name,{defaultValue:""}),O=t(i.description,{defaultValue:_}),I=t(i.keywords,{defaultValue:M}),R=s.useMemo(()=>L?`${j} | ${L}`:j,[L]),N=s.useMemo(()=>h?v:R,[h,v,R]),T=s.useMemo(()=>ie.has(g),[g]),$=s.useMemo(()=>!!n,[n]),y=s.useMemo(()=>T?P(e,l):void 0,[l,e,T]),m=s.useMemo(()=>{const o=t(i.image.path,{defaultValue:""}),w=t(i.image.alt,{defaultValue:""}),b=t(D.altKey,{defaultValue:""});return{path:P(Z(o||D.src),l),alt:o?w:b}},[l,i,t]),S=s.useMemo(()=>!r||!y?void 0:(h?Ue:Ce)(l,a,y,N,{title:R,description:O,keywords:I},t)?.schemaJson,[l,a,t,y,R,N,O,I,r,h]),z=s.useRef(),C=s.useRef();return s.useEffect(()=>{const o=requestAnimationFrame(()=>{E(!1)});return()=>{cancelAnimationFrame(o)}}),s.useEffect(()=>p(()=>{if(!r)return;const o=`${i.title}|${i.description}|${a}`;o!==z.current&&(z.current=o,!L&&!J&&f("[meta-guard] title translation is empty or doesn't exist for "+i.title+" "+a),O?O===_&&f("[meta-guard] schema description is used for "+i.description+" "+a):f("[meta-guard] description translation is empty or doesn't exist for "+i.description+" "+a),h&&(m.path?m.alt||f("[meta-guard] meta image alt is empty for article "+i.image.alt+" "+a):f("[meta-guard] meta image is default for article "+i.image.path+" "+a),I?I===M&&f("[meta-guard] meta keywords equals schema keywords for article "+i.keywords+" "+a):f("[meta-guard] meta keywords is empty for article "+i.keywords+" "+a)))}),[a,i,L,J,O,I,_,M,m,h,r]),s.useEffect(()=>p(()=>{if(!r||!T)return;if(!S){C.current||f("[meta-guard] schema is empty");return}const o=e;if(o===C.current)return;C.current=o;const{tokens:w,emptyPaths:b}=be(S);w.length&&f("[meta-guard] schema still contains placeholders "+JSON.stringify(w)+" "+e),b.length&&f("[meta-guard] schema contains empty strings "+JSON.stringify(b)+" "+e)}),[e,S,T,r]),s.useEffect(()=>p(()=>{r&&(oe(R),u("og:title",N,{attr:"property"}),u("twitter:title",N))}),[R,N,r]),s.useEffect(()=>p(()=>{if(!r)return;const o=O.trim();if(!o){d("description"),d("og:description",{attr:"property"}),d("twitter:description");return}u("description",o),u("og:description",o,{attr:"property"}),u("twitter:description",o)}),[O,r]),s.useEffect(()=>p(()=>{if(r){if(u("og:type",A,{attr:"property"}),A!=="article"){d("article:author",{attr:"property"}),d("article:tag",{attr:"property"});return}u("article:author",X,{attr:"property"}),F("article:tag",me(I),{attr:"property"})}}),[A,I,r]),s.useEffect(()=>p(()=>{r&&(u("og:image",m.path,{attr:"property"}),u("twitter:image",m.path))}),[m,r]),s.useEffect(()=>p(()=>{if(r){if(!m.alt){d("og:image:alt",{attr:"property"}),d("twitter:image:alt");return}u("og:image:alt",m.alt,{attr:"property"}),u("twitter:image:alt",m.alt)}}),[m,r]),s.useEffect(()=>p(()=>{if(!c){if(!y){ce(),d("og:url",{attr:"property"}),d("twitter:url");return}ue(y),u("og:url",y,{attr:"property"}),u("twitter:url",y)}}),[y,c]),s.useEffect(()=>p(()=>{if(!c){if(T&&!$){d("robots");return}f("[meta-guard] noindex is used"),u("robots",fe)}}),[T,$,c]),s.useEffect(()=>p(()=>{r&&le(S)}),[S,r]),s.useEffect(()=>p(()=>{c||(document.documentElement.lang=a,u("og:locale",Ie(a),{attr:"property"}),F("og:locale:alternate",Ee(a),{attr:"property"}))}),[a,c]),null}export{ve as default};
