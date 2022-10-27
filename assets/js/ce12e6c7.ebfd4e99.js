"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[74674],{82298:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=i(87462),a=(i(67294),i(3905)),c=i(52991),o=i(53438);const s={id:"account-activities",title:"Account Activities",description:"Account Activities",custom_edit_url:null},r=void 0,l={unversionedId:"api/v3/account-activities",id:"api/v3/account-activities",title:"Account Activities",description:"Account Activities",source:"@site/products/idn/api/v3/account-activities.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/account-activities",permalink:"/idn/api/v3/account-activities",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"account-activities",title:"Account Activities",description:"Account Activities",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Unlock Account",permalink:"/idn/api/v3/unlock-account"},next:{title:"List Account Activities",permalink:"/idn/api/v3/list-account-activities"}},u={},d=[],p={toc:d};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use this API to implement account activity tracking functionality.\nWith this functionality in place, users can track source account activity in IdentityNow, which greatly improves traceability in the system. "),(0,a.kt)("p",null,"An account activity refers to a log of each action performed on a source account. This is useful for auditing the changes performed on an account throughout its life.\nIn IdentityNow's Search, users can search for account activities and select the activity's row to get an overview of the activity's account action and view its progress, its involved sources, and its most basic metadata, such as the identity requesting the option and the recipient. "),(0,a.kt)("p",null,"Account activity includes most actions IdentityNow completes on source accounts. Users can search in IdentityNow for the following account action types: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Access Request: These include any access requests the source account is involved in. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Account Attribute Updates: These include updates to a single attribute on an account on a source. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Account State Update: These include locking or unlocking actions on an account on a source. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Certification: These include actions removing an entitlement from an account on a source as a result of the entitlement's revocation during a certification.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cloud Automated ",(0,a.kt)("inlineCode",{parentName:"p"},"Lifecyclestate"),": These include automated lifecycle state changes that result in a source account's correlated identity being assigned to a different lifecycle state.\nIdentityNow replaces the ",(0,a.kt)("inlineCode",{parentName:"p"},"Lifecyclestate")," variable with the name of the lifecycle state it has moved the account's identity to. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Identity Attribute Update: These include updates to a source account's correlated identity attributes as the result of a provisioning action.\nWhen you update an identity attribute that also updates an identity's lifecycle state, the cloud automated ",(0,a.kt)("inlineCode",{parentName:"p"},"Lifecyclestate")," event also displays.\nAccount Activity does not include attribute updates that occur as a result of aggregation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Identity Refresh: These include correlated identity refreshes that occur for an account on a source whenever the account's correlated identity profile gets a new role or updates.\nThese also include refreshes that occur whenever IdentityNow assigns an application to the account's correlated identity based on the application's being assigned to All Users From Source or Specific Users From Source. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Lifecycle State Refresh: These include the actions that took place when a lifecycle state changed. This event only occurs after a cloud automated ",(0,a.kt)("inlineCode",{parentName:"p"},"Lifecyclestate")," change or a lifecycle state change. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Lifecycle State Change: These include the account activities that result from an identity's manual assignment to a null lifecycle state.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Password Change: These include password changes on sources."))),(0,a.kt)("p",null,"Refer to the following link for more information about account activities:"),(0,a.kt)(c.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0},52991:(e,t,i)=>{i.d(t,{Z:()=>v});var n=i(67294),a=i(86010),c=i(53438),o=i(39960),s=i(13919),r=i(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function p(e){let{href:t,children:i}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},i)}function m(e){let{href:t,icon:i,title:c,description:o}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:c},i," ",c),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",d),title:o},o))}function h(e){let{item:t}=e;const i=(0,c.Wl)(t);return i?n.createElement(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,r.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t;let{item:i}=e;const a=(0,s.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(m,{href:i.href,icon:a,title:i.label,description:null==o?void 0:o.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){let{items:t,className:i}=e;return n.createElement("section",{className:(0,a.Z)("row",i)},function(e){return e.filter((e=>"category"!==e.type||!!(0,c.Wl)(e)))}(t).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}}}]);