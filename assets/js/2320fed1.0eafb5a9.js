"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[62180],{68882:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>h,toc:()=>y});var i=a(87462),s=(a(67294),a(3905)),o=a(26389),n=a(94891),l=a(74933),r=a(47507),c=a(24310),d=a(63303),m=(a(75035),a(85162));const p={id:"non-employee-source-delete",sidebar_label:"Delete Non-Employee Source",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"nonEmployeeSourceDelete",tags:["Non-Employee Lifecycle Management"],description:"This request will delete a non-employee source.\nRequest will require the following security scope:\n'idn:nesr:delete'",parameters:[{in:"path",name:"sourceId",description:"Source Id",required:!0,schema:{type:"string"}}],responses:{204:{description:"No content - indicates the request was successful but there is no content to be returned in the response."},400:{description:"Client Error - Returned if the request body is invalid.",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}}}}},401:{description:"Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"JWT validation failed: JWT is expired"}}}}}},403:{description:"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}},examples:{403:{summary:"An example of a 403 response object",value:{detailCode:"403 Forbidden",trackingId:"b21b1f7ce4da4d639f2c62a57171b427",messages:[{locale:"en-US",localeOrigin:"DEFAULT",text:"The server understood the request but refuses to authorize it."}]}}}}}},429:{description:"Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again.",content:{"application/json":{schema:{type:"object",properties:{message:{description:"A message describing the error",example:" Rate Limit Exceeded "}}}}}},500:{description:"Internal Server Error - Returned if there is an unexpected error.",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}},examples:{500:{summary:"An example of a 500 response object",value:{detailCode:"500.0 Internal Fault",trackingId:"b21b1f7ce4da4d639f2c62a57171b427",messages:[{locale:"en-US",localeOrigin:"DEFAULT",text:"An internal fault occurred."}]}}}}}}},method:"delete",path:"/non-employee-sources/{sourceId}",servers:[{url:"https://{tenant}.api.identitynow.com/beta",description:"This is the beta API server.",variables:{tenant:{default:"sailpoint",description:"This is the name of your tenant, typically your company's name."}}}],security:[{oauth2:[]}],securitySchemes:{oauth2:{type:"oauth2",description:"OAuth2 Bearer token (JWT). See [IdentityNow REST API Authentication](https://developer.sailpoint.com/idn/api/authentication) for more information.\n- Directions for generating a [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens)\n- Directions using [client credentials flow](https://developer.sailpoint.com/idn/api/authentication#client-credentials-grant-flow)\n- Directions for using [authorization code flow](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow)\n\nWhich authentication method should I choose?  See our [guide](https://developer.sailpoint.com/idn/api/authentication#which-oauth-20-grant-flow-should-i-use)\n\nLearn more about how to find your `tokenUrl` and `authorizationUrl` [in our docs](https://developer.sailpoint.com/idn/api/authentication#find-your-tenants-oauth-details)\n",flows:{clientCredentials:{tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}},authorizationCode:{authorizationUrl:"https://tenant.identitynow.com/oauth/authorize",tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}}}}},info:{title:"IdentityNow Beta API",description:"Use these APIs to interact with the IdentityNow platform to achieve repeatable, automated processes with greater scalability. These APIs are in beta and are subject to change. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",termsOfService:"https://developer.sailpoint.com/discuss/tos",contact:{name:"Developer Relations",url:"https://developer.sailpoint.com/discuss/api-help"},license:{name:"MIT",url:"https://opensource.org/licenses/MIT"},version:"3.1.0-beta"},postman:{name:"Delete Non-Employee Source",description:{content:"This request will delete a non-employee source.\nRequest will require the following security scope:\n'idn:nesr:delete'",type:"text/plain"},url:{path:["non-employee-sources",":sourceId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Source Id",type:"text/plain"},type:"any",value:"",key:"sourceId"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"idn/api/beta/identity-now-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete Non-Employee Source' (non-employee-source-delete)"},u=void 0,h={unversionedId:"api/beta/non-employee-source-delete",id:"api/beta/non-employee-source-delete",title:"non-employee-source-delete",description:"Delete Non-Employee Source",source:"@site/products/idn/api/beta/non-employee-source-delete.api.mdx",sourceDirName:"api/beta",slug:"/api/beta/non-employee-source-delete",permalink:"/idn/api/beta/non-employee-source-delete",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete Non-Employee Source' (non-employee-source-delete)",tags:[],version:"current",frontMatter:{id:"non-employee-source-delete",sidebar_label:"Delete Non-Employee Source",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"nonEmployeeSourceDelete",tags:["Non-Employee Lifecycle Management"],description:"This request will delete a non-employee source.\nRequest will require the following security scope:\n'idn:nesr:delete'",parameters:[{in:"path",name:"sourceId",description:"Source Id",required:!0,schema:{type:"string"}}],responses:{204:{description:"No content - indicates the request was successful but there is no content to be returned in the response."},400:{description:"Client Error - Returned if the request body is invalid.",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}}}}},401:{description:"Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"JWT validation failed: JWT is expired"}}}}}},403:{description:"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}},examples:{403:{summary:"An example of a 403 response object",value:{detailCode:"403 Forbidden",trackingId:"b21b1f7ce4da4d639f2c62a57171b427",messages:[{locale:"en-US",localeOrigin:"DEFAULT",text:"The server understood the request but refuses to authorize it."}]}}}}}},429:{description:"Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again.",content:{"application/json":{schema:{type:"object",properties:{message:{description:"A message describing the error",example:" Rate Limit Exceeded "}}}}}},500:{description:"Internal Server Error - Returned if there is an unexpected error.",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}},examples:{500:{summary:"An example of a 500 response object",value:{detailCode:"500.0 Internal Fault",trackingId:"b21b1f7ce4da4d639f2c62a57171b427",messages:[{locale:"en-US",localeOrigin:"DEFAULT",text:"An internal fault occurred."}]}}}}}}},method:"delete",path:"/non-employee-sources/{sourceId}",servers:[{url:"https://{tenant}.api.identitynow.com/beta",description:"This is the beta API server.",variables:{tenant:{default:"sailpoint",description:"This is the name of your tenant, typically your company's name."}}}],security:[{oauth2:[]}],securitySchemes:{oauth2:{type:"oauth2",description:"OAuth2 Bearer token (JWT). See [IdentityNow REST API Authentication](https://developer.sailpoint.com/idn/api/authentication) for more information.\n- Directions for generating a [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens)\n- Directions using [client credentials flow](https://developer.sailpoint.com/idn/api/authentication#client-credentials-grant-flow)\n- Directions for using [authorization code flow](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow)\n\nWhich authentication method should I choose?  See our [guide](https://developer.sailpoint.com/idn/api/authentication#which-oauth-20-grant-flow-should-i-use)\n\nLearn more about how to find your `tokenUrl` and `authorizationUrl` [in our docs](https://developer.sailpoint.com/idn/api/authentication#find-your-tenants-oauth-details)\n",flows:{clientCredentials:{tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}},authorizationCode:{authorizationUrl:"https://tenant.identitynow.com/oauth/authorize",tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}}}}},info:{title:"IdentityNow Beta API",description:"Use these APIs to interact with the IdentityNow platform to achieve repeatable, automated processes with greater scalability. These APIs are in beta and are subject to change. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",termsOfService:"https://developer.sailpoint.com/discuss/tos",contact:{name:"Developer Relations",url:"https://developer.sailpoint.com/discuss/api-help"},license:{name:"MIT",url:"https://opensource.org/licenses/MIT"},version:"3.1.0-beta"},postman:{name:"Delete Non-Employee Source",description:{content:"This request will delete a non-employee source.\nRequest will require the following security scope:\n'idn:nesr:delete'",type:"text/plain"},url:{path:["non-employee-sources",":sourceId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Source Id",type:"text/plain"},type:"any",value:"",key:"sourceId"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"idn/api/beta/identity-now-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete Non-Employee Source' (non-employee-source-delete)"},sidebar:"openApiSidebar",previous:{title:"Patch a Non-Employee Source",permalink:"/idn/api/beta/non-employee-source-patch"},next:{title:"Exports Non-Employee Records to CSV",permalink:"/idn/api/beta/non-employee-records-export"}},g={},y=[{value:"Delete Non-Employee Source",id:"delete-non-employee-source",level:2}],f={toc:y};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"delete-non-employee-source"},"Delete Non-Employee Source"),(0,s.kt)("p",null,"This request will delete a non-employee source.\nRequest will require the following security scope:\n","'","idn:nesr:delete","'"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{in:"path",name:"sourceId",description:"Source Id",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"No content - indicates the request was successful but there is no content to be returned in the response.")),(0,s.kt)("div",null)),(0,s.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Client Error - Returned if the request body is invalid.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaDescription:"Fine-grained error code providing more detail of the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaDescription:"Unique tracking id for the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"messages"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Generic localized reason for error")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"causes"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "detailCode": "string",\n  "trackingId": "string",\n  "messages": [\n    {\n      "locale": "string",\n      "localeOrigin": "DEFAULT",\n      "text": "string"\n    }\n  ],\n  "causes": [\n    {\n      "locale": "string",\n      "localeOrigin": "DEFAULT",\n      "text": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"error",required:!1,schemaDescription:"A message describing the error",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaDescription:"Fine-grained error code providing more detail of the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaDescription:"Unique tracking id for the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"messages"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Generic localized reason for error")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"causes"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "detailCode": "string",\n  "trackingId": "string",\n  "messages": [\n    {\n      "locale": "string",\n      "localeOrigin": "DEFAULT",\n      "text": "string"\n    }\n  ],\n  "causes": [\n    {\n      "locale": "string",\n      "localeOrigin": "DEFAULT",\n      "text": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(m.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "detailCode": "403 Forbidden",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The server understood the request but refuses to authorize it."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"429",value:"429",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:"A message describing the error",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error - Returned if there is an unexpected error.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaDescription:"Fine-grained error code providing more detail of the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaDescription:"Unique tracking id for the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"messages"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Generic localized reason for error")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"causes"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "detailCode": "string",\n  "trackingId": "string",\n  "messages": [\n    {\n      "locale": "string",\n      "localeOrigin": "DEFAULT",\n      "text": "string"\n    }\n  ],\n  "causes": [\n    {\n      "locale": "string",\n      "localeOrigin": "DEFAULT",\n      "text": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "detailCode": "500.0 Internal Fault",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "An internal fault occurred."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);