"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3197],{8096:(e,n,i)=>{i.d(n,{Ay:()=>l,RM:()=>r});var s=i(4848),t=i(8453);const r=[];function o(e){const n={admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8384:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"introduction/resolver_description_file","title":"Resolver Description File","description":"The resolver description file provides information about the identity resolver service. It can be accessed via a GET request to the /.well-known/resolver endpoint.","source":"@site/versioned_docs/version-1.0.0/introduction/resolver_description_file.md","sourceDirName":"introduction","slug":"/introduction/resolver_description_file","permalink":"/pyx-identity-resolver/docs/introduction/resolver_description_file","draft":false,"unlisted":false,"editUrl":"https://github.com/pyx-industries/pyx-identity-resolver/versioned_docs/version-1.0.0/introduction/resolver_description_file.md","tags":[],"version":"1.0.0","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"Resolver Description File"},"sidebar":"tutorialSidebar","previous":{"title":"Link Types","permalink":"/pyx-identity-resolver/docs/introduction/link_types"},"next":{"title":"Link Registration","permalink":"/pyx-identity-resolver/docs/introduction/link_registration"}}');var t=i(4848),r=i(8453),o=i(8096);const l={sidebar_position:6,title:"Resolver Description File"},d="Resolver Description File",c={},a=[...o.RM,{value:"Endpoint",id:"endpoint",level:2},{value:"Response Format",id:"response-format",level:2},{value:"Fields",id:"fields",level:2},{value:"Example",id:"example",level:2},{value:"Additional Information",id:"additional-information",level:2},{value:"Link Types",id:"link-types",level:3},{value:"Custom Link Types",id:"custom-link-types",level:3}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Ay,{}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"resolver-description-file",children:"Resolver Description File"})}),"\n",(0,t.jsxs)(n.p,{children:["The resolver description file provides information about the identity resolver service. It can be accessed via a GET request to the ",(0,t.jsx)(n.code,{children:"/.well-known/resolver"})," endpoint."]}),"\n",(0,t.jsx)(n.h2,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.p,{children:["GET ",(0,t.jsx)(n.code,{children:"/.well-known/resolver"})]}),"\n",(0,t.jsx)(n.h2,{id:"response-format",children:"Response Format"}),"\n",(0,t.jsx)(n.p,{children:"The response is a JSON object with the following structure:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": string,\n  "resolverRoot": string,\n  "supportedLinkType": Array<SupportedLinkType>,\n  "supportedPrimaryKeys": Array<string>\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Where ",(0,t.jsx)(n.code,{children:"SupportedLinkType"})," is an object with the following structure:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "namespace": string,\n  "prefix": string,\n  "profile": string\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"}),": The name of the identity resolver service."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"resolverRoot"}),": The base URL of the resolver service."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"supportedLinkType"}),": An array of supported link types."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"supportedPrimaryKeys"}),": An array of supported primary keys (currently always ",(0,t.jsx)(n.code,{children:'["all"]'}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For each supported link type:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"namespace"}),": The URI of the namespace."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"prefix"}),": The prefix used for the namespace."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"profile"}),": The URL where the link type profile can be found."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X GET http://localhost:3000/api/1.0.0/.well-known/resolver\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "The IDR",\n  "resolverRoot": "http://localhost:3000/api/1.0.0",\n  "supportedLinkType": [\n    {\n      "namespace": "http://gs1.org/voc/",\n      "prefix": "gs1:",\n      "profile": "https://www.gs1.org/voc/?show=linktypes"\n    },\n    {\n      "namespace": "http://localhost:3000/api/1.0.0/voc/",\n      "prefix": "local:",\n      "profile": "http://localhost:3000/api/1.0.0/voc/?show=linktypes"\n    }\n  ],\n  "supportedPrimaryKeys": ["all"]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"additional-information",children:"Additional Information"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"name"})," is derived from the ",(0,t.jsx)(n.code,{children:"APP_NAME"})," environment variable."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"resolverRoot"})," is derived from the ",(0,t.jsx)(n.code,{children:"RESOLVER_DOMAIN"})," environment variable."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"supportedLinkType"})," array is generated based on the identifiers registered in the system."]}),"\n",(0,t.jsxs)(n.li,{children:["If an identifier doesn't have a specified ",(0,t.jsx)(n.code,{children:"namespaceURI"})," or ",(0,t.jsx)(n.code,{children:"namespaceProfile"}),", the default link types are used ",(0,t.jsx)(n.code,{children:"http://localhost:3000/api/1.0.0/voc/"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"link-types",children:"Link Types"}),"\n",(0,t.jsxs)(n.p,{children:["The default link types are defined in a file within the codebase. These default link types are based on the GS1 link types, which are widely used in industry. You can view all available link types by making a GET request to ",(0,t.jsx)(n.code,{children:"/api/1.0.0/voc?show=linktypes"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X GET http://localhost:3000/api/1.0.0/voc?show=linktypes\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will return a JSON object containing all available link types configured in the IDR and their descriptions."}),"\n",(0,t.jsxs)(n.p,{children:["To get details about a specific link type, you can make a GET request to ",(0,t.jsx)(n.code,{children:"/api/1.0.0/voc/{linktype}"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X GET http://localhost:3000/api/1.0.0/voc/productSustainabilityInfo\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will return a JSON object with details about the specified link type, for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "title": "sustainability and recycling",\n  "description": "Information about the products sustainability of manufacture, recycling information etc."\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"custom-link-types",children:"Custom Link Types"}),"\n",(0,t.jsx)(n.p,{children:"The IDR allows operators to create and expose their own custom link types. This feature enables other registry operators to resolve these custom link types, promoting interoperability and extensibility."}),"\n",(0,t.jsx)(n.p,{children:"To add or modify link types:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Custom link types need to be added or modified in the codebase."}),"\n",(0,t.jsxs)(n.li,{children:["The new or modified link types should be included in the ",(0,t.jsx)(n.code,{children:"defaultLinkTypes"})," object within the ",(0,t.jsx)(n.code,{children:"app/src/modules/common/data/default-link-types.ts"})," file."]}),"\n",(0,t.jsx)(n.li,{children:"After modifying the codebase, the IDR needs to be rebuilt and redeployed for the changes to take effect."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"It's important to note that while the default link types are based on GS1 standards, IDR operators have the flexibility to extend or replace this set with their own custom link types. This allows for adaptation to specific industry needs or unique use cases."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);