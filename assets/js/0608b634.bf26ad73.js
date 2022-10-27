"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[60045],{23411:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>y,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>h,toc:()=>T});var r=t(87462),i=(t(67294),t(3905)),a=t(26389),o=t(94891),n=t(74933),c=t(47507),p=t(24310),m=t(63303),u=(t(75035),t(85162));const d={id:"get-resource-type-by-id",sidebar_label:"Returns a ResourceType resource based on ID.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getResourceTypeById",tags:["ResourceTypes"],description:"The ResourceType with the matching ID is returned. The ID is the URN of the SCIM resource. The common fields for each ResourceType entry are 'endpoint', 'id', 'name', 'description', 'schema' and 'schemaExtensions'.",parameters:[{name:"resourceTypeId",in:"path",schema:{type:"string"},description:"ID of ResourceType resource.",required:!0}],responses:{200:{description:"Returns a single ResourceType resource based on the ID.",content:{"application/json":{schema:{type:"object",properties:{id:{description:"ID of the ResourceType.",type:"string",example:"User"},name:{description:"Name of the ResourceType.",type:"string",example:"User"},endpoint:{description:"The ResourceType's HTTP addressable endpoint relative to the Base URL.",type:"string",example:"/Applications"},description:{description:"Description of the ResourceType.",type:"string",example:"User Account."},schema:{description:"The primary/base schema URI of the ResourceType.",type:"string",example:"urn:ietf:params:scim:schemas:sailpoint:1.0:User"},schemaExtensions:{description:"A list of URIs of the ResourceType's schema extensions.",type:"array",items:{example:[{schema:"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",required:!0},{schema:"urn:ietf:params:scim:schemas:sailpoint:1.0:User",required:!0}]}},meta:{description:"Metadata of the ResourceType.",type:"object",properties:{location:{description:"The location of the ResourceType.",type:"string",example:"http://localhost:8080/iiq/scim/v2/ResourceTypes/User"},resourceType:{description:"The SCIM resource type.",type:"string",example:"ResourceType"}}},schemas:{description:"The schema for the ResourceType resource.",type:"array",items:{type:"string"},example:["urn:ietf:params:scim:schemas:core:2.0:ResourceType"]}}}}}}},method:"get",path:"/ResourceTypes/{resourceTypeId}",servers:[{url:"http://localhost:8080/identityiq/scim/v2",description:"IdentityIQ SCIM server basepath and path to API."}],security:[{basicAuth:[]}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},info:{description:"IdentityIQ REST Endpoint Interface Documentation for SCIM\n\n# Authentication\n\n\x3c!-- ReDoc-Inject: <security-definitions> --\x3e",version:"8.3",title:"IdentityIQ SCIM REST API"},postman:{name:"Returns a ResourceType resource based on ID.",description:{content:"The ResourceType with the matching ID is returned. The ID is the URN of the SCIM resource. The common fields for each ResourceType entry are 'endpoint', 'id', 'name', 'description', 'schema' and 'schemaExtensions'.",type:"text/plain"},url:{path:["ResourceTypes",":resourceTypeId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of ResourceType resource.",type:"text/plain"},type:"any",value:"",key:"resourceTypeId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"iiq/api/identity-iq-scim-rest-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns a ResourceType resource based on ID.' (get-resource-type-by-id)"},l=void 0,h={unversionedId:"api/get-resource-type-by-id",id:"api/get-resource-type-by-id",title:"get-resource-type-by-id",description:"Returns a ResourceType resource based on ID.",source:"@site/products/iiq/api/get-resource-type-by-id.api.mdx",sourceDirName:"api",slug:"/api/get-resource-type-by-id",permalink:"/iiq/api/get-resource-type-by-id",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns a ResourceType resource based on ID.' (get-resource-type-by-id)",tags:[],version:"current",frontMatter:{id:"get-resource-type-by-id",sidebar_label:"Returns a ResourceType resource based on ID.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getResourceTypeById",tags:["ResourceTypes"],description:"The ResourceType with the matching ID is returned. The ID is the URN of the SCIM resource. The common fields for each ResourceType entry are 'endpoint', 'id', 'name', 'description', 'schema' and 'schemaExtensions'.",parameters:[{name:"resourceTypeId",in:"path",schema:{type:"string"},description:"ID of ResourceType resource.",required:!0}],responses:{200:{description:"Returns a single ResourceType resource based on the ID.",content:{"application/json":{schema:{type:"object",properties:{id:{description:"ID of the ResourceType.",type:"string",example:"User"},name:{description:"Name of the ResourceType.",type:"string",example:"User"},endpoint:{description:"The ResourceType's HTTP addressable endpoint relative to the Base URL.",type:"string",example:"/Applications"},description:{description:"Description of the ResourceType.",type:"string",example:"User Account."},schema:{description:"The primary/base schema URI of the ResourceType.",type:"string",example:"urn:ietf:params:scim:schemas:sailpoint:1.0:User"},schemaExtensions:{description:"A list of URIs of the ResourceType's schema extensions.",type:"array",items:{example:[{schema:"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",required:!0},{schema:"urn:ietf:params:scim:schemas:sailpoint:1.0:User",required:!0}]}},meta:{description:"Metadata of the ResourceType.",type:"object",properties:{location:{description:"The location of the ResourceType.",type:"string",example:"http://localhost:8080/iiq/scim/v2/ResourceTypes/User"},resourceType:{description:"The SCIM resource type.",type:"string",example:"ResourceType"}}},schemas:{description:"The schema for the ResourceType resource.",type:"array",items:{type:"string"},example:["urn:ietf:params:scim:schemas:core:2.0:ResourceType"]}}}}}}},method:"get",path:"/ResourceTypes/{resourceTypeId}",servers:[{url:"http://localhost:8080/identityiq/scim/v2",description:"IdentityIQ SCIM server basepath and path to API."}],security:[{basicAuth:[]}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},info:{description:"IdentityIQ REST Endpoint Interface Documentation for SCIM\n\n# Authentication\n\n\x3c!-- ReDoc-Inject: <security-definitions> --\x3e",version:"8.3",title:"IdentityIQ SCIM REST API"},postman:{name:"Returns a ResourceType resource based on ID.",description:{content:"The ResourceType with the matching ID is returned. The ID is the URN of the SCIM resource. The common fields for each ResourceType entry are 'endpoint', 'id', 'name', 'description', 'schema' and 'schemaExtensions'.",type:"text/plain"},url:{path:["ResourceTypes",":resourceTypeId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of ResourceType resource.",type:"text/plain"},type:"any",value:"",key:"resourceTypeId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"iiq/api/identity-iq-scim-rest-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns a ResourceType resource based on ID.' (get-resource-type-by-id)"},sidebar:"iiqOpenApiSidebar",previous:{title:"Returns all ResourceType resources.",permalink:"/iiq/api/get-resource-types"},next:{title:"Roles",permalink:"/iiq/api/roles"}},y={},T=[{value:"Returns a ResourceType resource based on ID.",id:"returns-a-resourcetype-resource-based-on-id",level:2}],R={toc:T};function g(e){let{components:s,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},R,t,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"returns-a-resourcetype-resource-based-on-id"},"Returns a ResourceType resource based on ID."),(0,i.kt)("p",null,"The ResourceType with the matching ID is returned. The ID is the URN of the SCIM resource. The common fields for each ResourceType entry are ","'","endpoint","'",", ","'","id","'",", ","'","name","'",", ","'","description","'",", ","'","schema","'"," and ","'","schemaExtensions","'","."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"resourceTypeId",in:"path",schema:{type:"string"},description:"ID of ResourceType resource.",required:!0},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(a.Z,{mdxType:"ApiTabs"},(0,i.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Returns a single ResourceType resource based on the ID.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,i.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,i.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"ID of the ResourceType.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"Name of the ResourceType.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"endpoint",required:!1,schemaDescription:"The ResourceType's HTTP addressable endpoint relative to the Base URL.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:"Description of the ResourceType.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"schema",required:!1,schemaDescription:"The primary/base schema URI of the ResourceType.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"schemaExtensions",required:!1,schemaDescription:"A list of URIs of the ResourceType's schema extensions.",schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"meta"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"Metadata of the ResourceType.")),(0,i.kt)(p.Z,{collapsible:!1,name:"location",required:!1,schemaDescription:"The location of the ResourceType.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"resourceType",required:!1,schemaDescription:"The SCIM resource type.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{collapsible:!1,name:"schemas",required:!1,schemaDescription:"The schema for the ResourceType resource.",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "id": "string",\n  "name": "string",\n  "endpoint": "string",\n  "description": "string",\n  "schema": "string",\n  "schemaExtensions": [\n    null\n  ],\n  "meta": {\n    "location": "string",\n    "resourceType": "string"\n  },\n  "schemas": [\n    "string"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);