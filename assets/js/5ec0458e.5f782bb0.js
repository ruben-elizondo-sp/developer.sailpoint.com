"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[44070],{30486:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=i(87462),n=(i(67294),i(3905)),a=i(52991),c=i(53438);const s={id:"schemas",title:"Schemas",description:"Schemas",custom_edit_url:null},l=void 0,o={unversionedId:"api/schemas",id:"api/schemas",title:"Schemas",description:"Schemas",source:"@site/products/iiq/api/schemas.tag.mdx",sourceDirName:"api",slug:"/api/schemas",permalink:"/iiq/api/schemas",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"schemas",title:"Schemas",description:"Schemas",custom_edit_url:null},sidebar:"iiqOpenApiSidebar",previous:{title:"Returns a Role resource based on ID or name.",permalink:"/iiq/api/get-role"},next:{title:"Returns all Schema resources.",permalink:"/iiq/api/get-schemas"}},m={},d=[],u={toc:d};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0},52991:(e,t,i)=>{i.d(t,{Z:()=>y});var r=i(67294),n=i(86010),a=i(53438),c=i(39960),s=i(13919),l=i(95999);const o="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:i}=e;return r.createElement(c.Z,{href:t,className:(0,n.Z)("card padding--lg",o)},i)}function p(e){let{href:t,icon:i,title:a,description:c}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,n.Z)("text--truncate",m),title:a},i," ",a),c&&r.createElement("p",{className:(0,n.Z)("text--truncate",d),title:c},c))}function h(e){let{item:t}=e;const i=(0,a.Wl)(t);return i?r.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t;let{item:i}=e;const n=(0,s.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,a.xz)(null!=(t=i.docId)?t:void 0);return r.createElement(p,{href:i.href,icon:n,title:i.label,description:null==c?void 0:c.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){let{items:t,className:i}=e;return r.createElement("section",{className:(0,n.Z)("row",i)},function(e){return e.filter((e=>"category"!==e.type||!!(0,a.Wl)(e)))}(t).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}}}]);