"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[66283],{67353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>y,frontMatter:()=>p,metadata:()=>u,toc:()=>g});var i=a(87462),o=(a(67294),a(3905)),s=a(26389),n=a(94891),r=(a(74933),a(47507)),l=a(24310),c=a(63303),d=(a(75035),a(85162));const p={id:"get-password-org-config",sidebar_label:"Get Password Org Config",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getPasswordOrgConfig",tags:["Password Configuration"],description:"This API returns the password org config . Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:read'",responses:{200:{description:"Reference to the password org config.",content:{"application/json":{schema:{type:"object",properties:{customInstructionsEnabled:{type:"boolean",description:"Indicator whether custom password instructions feature is enabled. The default value is false."},digitTokenEnabled:{type:"boolean",description:'Indicator whether "digit token" feature is enabled. The default value is false.',example:!0},digitTokenDurationMinutes:{type:"integer",description:'The duration of "digit token" in minutes. The default value is 5.',example:10},digitTokenLength:{type:"integer",description:'The length of "digit token". The default value is 6.',example:9}}},example:{customInstructionsEnabled:!0,digitTokenDurationMinutes:9,digitTokenEnabled:!1,digitTokenLength:6}}}},403:{description:"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}},examples:{403:{summary:"An example of a 403 response object",value:{detailCode:"403 Forbidden",trackingId:"b21b1f7ce4da4d639f2c62a57171b427",messages:[{locale:"en-US",localeOrigin:"DEFAULT",text:"The server understood the request but refuses to authorize it."}]}}}}}},500:{description:"Internal Server Error - Returned if there is an unexpected error.",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}},examples:{500:{summary:"An example of a 500 response object",value:{detailCode:"500.0 Internal Fault",trackingId:"b21b1f7ce4da4d639f2c62a57171b427",messages:[{locale:"en-US",localeOrigin:"DEFAULT",text:"An internal fault occurred."}]}}}}}}},method:"get",path:"/password-org-config",servers:[{url:"https://{tenant}.api.identitynow.com/beta",description:"This is the beta API server.",variables:{tenant:{default:"sailpoint",description:"This is the name of your tenant, typically your company's name."}}}],security:[{oauth2:[]}],securitySchemes:{oauth2:{type:"oauth2",description:"OAuth2 Bearer token (JWT). See [IdentityNow REST API Authentication](https://developer.sailpoint.com/idn/api/authentication) for more information.\n- Directions for generating a [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens)\n- Directions using [client credentials flow](https://developer.sailpoint.com/idn/api/authentication#client-credentials-grant-flow)\n- Directions for using [authorization code flow](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow)\n\nWhich authentication method should I choose?  See our [guide](https://developer.sailpoint.com/idn/api/authentication#which-oauth-20-grant-flow-should-i-use)\n\nLearn more about how to find your `tokenUrl` and `authorizationUrl` [in our docs](https://developer.sailpoint.com/idn/api/authentication#find-your-tenants-oauth-details)\n",flows:{clientCredentials:{tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}},authorizationCode:{authorizationUrl:"https://tenant.identitynow.com/oauth/authorize",tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}}}}},info:{title:"IdentityNow Beta API",description:"Use these APIs to interact with the IdentityNow platform to achieve repeatable, automated processes with greater scalability. These APIs are in beta and are subject to change. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",termsOfService:"https://developer.sailpoint.com/discuss/tos",contact:{name:"Developer Relations",url:"https://developer.sailpoint.com/discuss/api-help"},license:{name:"MIT",url:"https://opensource.org/licenses/MIT"},version:"3.1.0-beta"},postman:{name:"Get Password Org Config",description:{content:"This API returns the password org config . Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:read'",type:"text/plain"},url:{path:["password-org-config"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"idn/api/beta/identity-now-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get Password Org Config' (get-password-org-config)"},m=void 0,u={unversionedId:"api/beta/get-password-org-config",id:"api/beta/get-password-org-config",title:"get-password-org-config",description:"Get Password Org Config",source:"@site/products/idn/api/beta/get-password-org-config.api.mdx",sourceDirName:"api/beta",slug:"/api/beta/get-password-org-config",permalink:"/idn/api/beta/get-password-org-config",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get Password Org Config' (get-password-org-config)",tags:[],version:"current",frontMatter:{id:"get-password-org-config",sidebar_label:"Get Password Org Config",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getPasswordOrgConfig",tags:["Password Configuration"],description:"This API returns the password org config . Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:read'",responses:{200:{description:"Reference to the password org config.",content:{"application/json":{schema:{type:"object",properties:{customInstructionsEnabled:{type:"boolean",description:"Indicator whether custom password instructions feature is enabled. The default value is false."},digitTokenEnabled:{type:"boolean",description:'Indicator whether "digit token" feature is enabled. The default value is false.',example:!0},digitTokenDurationMinutes:{type:"integer",description:'The duration of "digit token" in minutes. The default value is 5.',example:10},digitTokenLength:{type:"integer",description:'The length of "digit token". The default value is 6.',example:9}}},example:{customInstructionsEnabled:!0,digitTokenDurationMinutes:9,digitTokenEnabled:!1,digitTokenLength:6}}}},403:{description:"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}},examples:{403:{summary:"An example of a 403 response object",value:{detailCode:"403 Forbidden",trackingId:"b21b1f7ce4da4d639f2c62a57171b427",messages:[{locale:"en-US",localeOrigin:"DEFAULT",text:"The server understood the request but refuses to authorize it."}]}}}}}},500:{description:"Internal Server Error - Returned if there is an unexpected error.",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}},examples:{500:{summary:"An example of a 500 response object",value:{detailCode:"500.0 Internal Fault",trackingId:"b21b1f7ce4da4d639f2c62a57171b427",messages:[{locale:"en-US",localeOrigin:"DEFAULT",text:"An internal fault occurred."}]}}}}}}},method:"get",path:"/password-org-config",servers:[{url:"https://{tenant}.api.identitynow.com/beta",description:"This is the beta API server.",variables:{tenant:{default:"sailpoint",description:"This is the name of your tenant, typically your company's name."}}}],security:[{oauth2:[]}],securitySchemes:{oauth2:{type:"oauth2",description:"OAuth2 Bearer token (JWT). See [IdentityNow REST API Authentication](https://developer.sailpoint.com/idn/api/authentication) for more information.\n- Directions for generating a [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens)\n- Directions using [client credentials flow](https://developer.sailpoint.com/idn/api/authentication#client-credentials-grant-flow)\n- Directions for using [authorization code flow](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow)\n\nWhich authentication method should I choose?  See our [guide](https://developer.sailpoint.com/idn/api/authentication#which-oauth-20-grant-flow-should-i-use)\n\nLearn more about how to find your `tokenUrl` and `authorizationUrl` [in our docs](https://developer.sailpoint.com/idn/api/authentication#find-your-tenants-oauth-details)\n",flows:{clientCredentials:{tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}},authorizationCode:{authorizationUrl:"https://tenant.identitynow.com/oauth/authorize",tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}}}}},info:{title:"IdentityNow Beta API",description:"Use these APIs to interact with the IdentityNow platform to achieve repeatable, automated processes with greater scalability. These APIs are in beta and are subject to change. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",termsOfService:"https://developer.sailpoint.com/discuss/tos",contact:{name:"Developer Relations",url:"https://developer.sailpoint.com/discuss/api-help"},license:{name:"MIT",url:"https://opensource.org/licenses/MIT"},version:"3.1.0-beta"},postman:{name:"Get Password Org Config",description:{content:"This API returns the password org config . Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:read'",type:"text/plain"},url:{path:["password-org-config"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"idn/api/beta/identity-now-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get Password Org Config' (get-password-org-config)"},sidebar:"openApiSidebar",previous:{title:"Password Configuration",permalink:"/idn/api/beta/password-configuration"},next:{title:"Update Password Org Config",permalink:"/idn/api/beta/update-password-org-config"}},h={},g=[{value:"Get Password Org Config",id:"get-password-org-config",level:2}],f={toc:g};function y(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-password-org-config"},"Get Password Org Config"),(0,o.kt)("p",null,"This API returns the password org config . Requires ORG_ADMIN, API role or authorization scope of ","'","idn:password-org-config:read","'"),(0,o.kt)("div",null,(0,o.kt)(s.Z,{mdxType:"ApiTabs"},(0,o.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Reference to the password org config.")),(0,o.kt)("div",null,(0,o.kt)(n.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(c.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"customInstructionsEnabled",required:!1,schemaDescription:"Indicator whether custom password instructions feature is enabled. The default value is false.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"digitTokenEnabled",required:!1,schemaDescription:'Indicator whether "digit token" feature is enabled. The default value is false.',schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"digitTokenDurationMinutes",required:!1,schemaDescription:'The duration of "digit token" in minutes. The default value is 5.',schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"digitTokenLength",required:!1,schemaDescription:'The length of "digit token". The default value is 6.',schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(r.Z,{responseExample:'{\n  "customInstructionsEnabled": true,\n  "digitTokenEnabled": true,\n  "digitTokenDurationMinutes": 0,\n  "digitTokenLength": 0\n}',language:"json",mdxType:"ResponseSamples"})),(0,o.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,o.kt)(r.Z,{responseExample:'{\n  "customInstructionsEnabled": true,\n  "digitTokenDurationMinutes": 9,\n  "digitTokenEnabled": false,\n  "digitTokenLength": 6\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(d.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.")),(0,o.kt)("div",null,(0,o.kt)(n.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(c.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"detailCode",required:!1,schemaDescription:"Fine-grained error code providing more detail of the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"trackingId",required:!1,schemaDescription:"Unique tracking id for the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"messages"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Generic localized reason for error")),(0,o.kt)(l.Z,{collapsible:!1,name:"locale",required:!1,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"text",required:!1,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"causes"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,o.kt)(l.Z,{collapsible:!1,name:"locale",required:!1,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"text",required:!1,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,o.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(r.Z,{responseExample:'{\n  "detailCode": "string",\n  "trackingId": "string",\n  "messages": [\n    {\n      "locale": "string",\n      "localeOrigin": "DEFAULT",\n      "text": "string"\n    }\n  ],\n  "causes": [\n    {\n      "locale": "string",\n      "localeOrigin": "DEFAULT",\n      "text": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,o.kt)(d.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,o.kt)(r.Z,{responseExample:'{\n  "detailCode": "403 Forbidden",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The server understood the request but refuses to authorize it."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Internal Server Error - Returned if there is an unexpected error.")),(0,o.kt)("div",null,(0,o.kt)(n.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(c.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"detailCode",required:!1,schemaDescription:"Fine-grained error code providing more detail of the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"trackingId",required:!1,schemaDescription:"Unique tracking id for the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"messages"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Generic localized reason for error")),(0,o.kt)(l.Z,{collapsible:!1,name:"locale",required:!1,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"text",required:!1,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"causes"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,o.kt)(l.Z,{collapsible:!1,name:"locale",required:!1,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"text",required:!1,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,o.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(r.Z,{responseExample:'{\n  "detailCode": "string",\n  "trackingId": "string",\n  "messages": [\n    {\n      "locale": "string",\n      "localeOrigin": "DEFAULT",\n      "text": "string"\n    }\n  ],\n  "causes": [\n    {\n      "locale": "string",\n      "localeOrigin": "DEFAULT",\n      "text": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,o.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,o.kt)(r.Z,{responseExample:'{\n  "detailCode": "500.0 Internal Fault",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "An internal fault occurred."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);