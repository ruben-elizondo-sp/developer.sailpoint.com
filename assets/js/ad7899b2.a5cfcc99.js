"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[45639],{2713:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={id:"concatenation",title:"Concatenation",pagination_label:"Concatenation",sidebar_label:"Concatenation",sidebar_class_name:"concatenation",keywords:["transforms","operations","concatenation"],description:"Join two or more string values into a combined output.",slug:"/docs/transforms/operations/concatenation",tags:["Transforms","Transform Operations"]},s=void 0,i={unversionedId:"docs/identity-now/transforms/operations/concatenation",id:"docs/identity-now/transforms/operations/concatenation",title:"Concatenation",description:"Join two or more string values into a combined output.",source:"@site/products/idn/docs/identity-now/transforms/operations/concatenation.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/concatenation",permalink:"/idn/docs/transforms/operations/concatenation",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/concatenation.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666883192,formattedLastUpdatedAt:"Oct 27, 2022",frontMatter:{id:"concatenation",title:"Concatenation",pagination_label:"Concatenation",sidebar_label:"Concatenation",sidebar_class_name:"concatenation",keywords:["transforms","operations","concatenation"],description:"Join two or more string values into a combined output.",slug:"/docs/transforms/operations/concatenation",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Base64 Encode",permalink:"/idn/docs/transforms/operations/base64-encode"},next:{title:"Conditional",permalink:"/idn/docs/transforms/operations/conditional"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c};function m(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Use the concatenation transform to join two or more string values into a\ncombined output. The concatenation transform often joins elements such as first\nand last name into a full display name, but it has many other uses."),(0,o.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,o.kt)("p",null,"The concatenation transform requires an array list of ",(0,o.kt)("inlineCode",{parentName:"p"},"values")," that need to be\njoined. These values can be static strings or the return values of other nested\ntransforms."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "values": ["John", " ", "Smith"]\n  },\n  "type": "concat",\n  "name": "Concatenation transform"\n}\n')),(0,o.kt)("h2",{id:"attributes"},"Attributes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Required Attributes"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,o.kt)("inlineCode",{parentName:"li"},"concat"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents\nthe name of the transform as it will appear in the UI's dropdown menus."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"values")," - This is the array of items to join."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Optional Attributes"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether\nthe transform logic should be reevaluated every evening as part of the\nidentity refresh process.")))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,'This transform joins the user\'s first name from the "HR Source" with his/her\nlast name, adds a space between them, and then adds a parenthetical note that\nthe user is a contractor at the end.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "values": [\n      {\n        "attributes": {\n          "sourceName": "HR Source",\n          "attributeName": "FirstName"\n        },\n        "type": "accountAttribute"\n      },\n      " ",\n      {\n        "attributes": {\n          "sourceName": "HR Source",\n          "attributeName": "LastName"\n        },\n        "type": "accountAttribute"\n      },\n      " (Contractor)"\n    ]\n  },\n  "type": "concat",\n  "name": "Test Concat Transform"\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\xa0"),(0,o.kt)("p",null,"This transform joins the user's job title with his/her job code value and adds a\nhyphen between those two pieces of data."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "values": [\n      {\n        "attributes": {\n          "sourceName": "HR Source",\n          "attributeName": "JobTitle"\n        },\n        "type": "accountAttribute"\n      },\n      "-",\n      {\n        "attributes": {\n          "sourceName": "HR Source",\n          "attributeName": "JobCode"\n        },\n        "type": "accountAttribute"\n      }\n    ]\n  },\n  "type": "concat",\n  "name": "Test Concat Transform"\n}\n')))}m.isMDXComponent=!0}}]);