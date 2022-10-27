"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[13800],{54768:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=i(87462),r=(i(67294),i(3905)),a=i(52991),o=i(53438);const s={id:"public-identities-config",title:"Public Identities Config",description:"Public Identities Config",custom_edit_url:null},c=void 0,l={unversionedId:"api/v3/public-identities-config",id:"api/v3/public-identities-config",title:"Public Identities Config",description:"Public Identities Config",source:"@site/products/idn/api/v3/public-identities-config.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/public-identities-config",permalink:"/idn/api/v3/public-identities-config",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"public-identities-config",title:"Public Identities Config",description:"Public Identities Config",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get a list of public identities",permalink:"/idn/api/v3/get-public-identities"},next:{title:"Get the Public Identities Configuration",permalink:"/idn/api/v3/get-public-identity-config"}},d={},u=[],p={toc:u};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this API to implement public identity configuration functionality.\nWith this functionality in place, administrators can make up to 5 identity attributes publicly visible so other non-administrator users can see the relevant information they need to make decisions.\nThis can be helpful for approvers making approvals, certification reviewers, managers viewing their direct reports' access, and source owners viewing their tasks."),(0,r.kt)("p",null,"By default, non-administrators can select an identity and view the following attributes: email, lifecycle state, and manager.\nHowever, it may be helpful for a non-administrator reviewer to see other identity attributes like department, region, title, etc.\nAdministrators can use this API to make those necessary identity attributes public to non-administrators. "),(0,r.kt)("p",null,"For example, a non-administrator deciding whether to approve another identity's request for access to the Workday application, whose access may be restricted to members of the HR department, would want to know whether the identity is a member of the HR department.\nIf an administrator has used ",(0,r.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/api/v3/update-public-identity-config"},"Update Public Identity Config"),' to make the "department" attribute public, the approver can see the department and make a decision without requesting any more information.'),(0,r.kt)(a.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0},52991:(e,t,i)=>{i.d(t,{Z:()=>b});var n=i(67294),r=i(86010),a=i(53438),o=i(39960),s=i(13919),c=i(95999);const l="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function p(e){let{href:t,children:i}=e;return n.createElement(o.Z,{href:t,className:(0,r.Z)("card padding--lg",l)},i)}function m(e){let{href:t,icon:i,title:a,description:o}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",d),title:a},i," ",a),o&&n.createElement("p",{className:(0,r.Z)("text--truncate",u),title:o},o))}function f(e){let{item:t}=e;const i=(0,a.Wl)(t);return i?n.createElement(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){var t;let{item:i}=e;const r=(0,s.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(m,{href:i.href,icon:r,title:i.label,description:null==o?void 0:o.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){let{items:t,className:i}=e;return n.createElement("section",{className:(0,r.Z)("row",i)},function(e){return e.filter((e=>"category"!==e.type||!!(0,a.Wl)(e)))}(t).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}}}]);