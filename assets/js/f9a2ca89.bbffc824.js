"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[53188],{58327:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=i(87462),o=(i(67294),i(3905));const s={id:"prerequisites",title:"Prerequisites",pagination_label:"Prerequisites",sidebar_label:"Prerequisites",sidebar_position:1,sidebar_class_name:"prerequisites",keywords:["connectivity","connectors","prerequisites"],description:"These are some prerequisites you must have before you start building SaaS Connectors.",slug:"/docs/saas-connectivity/prerequisites",tags:["Connectivity"]},a=void 0,r={unversionedId:"docs/identity-now/saas-connectivity/prerequisites",id:"docs/identity-now/saas-connectivity/prerequisites",title:"Prerequisites",description:"These are some prerequisites you must have before you start building SaaS Connectors.",source:"@site/products/idn/docs/identity-now/saas-connectivity/prerequisites.md",sourceDirName:"docs/identity-now/saas-connectivity",slug:"/docs/saas-connectivity/prerequisites",permalink:"/idn/docs/saas-connectivity/prerequisites",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/prerequisites.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666883192,formattedLastUpdatedAt:"Oct 27, 2022",sidebarPosition:1,frontMatter:{id:"prerequisites",title:"Prerequisites",pagination_label:"Prerequisites",sidebar_label:"Prerequisites",sidebar_position:1,sidebar_class_name:"prerequisites",keywords:["connectivity","connectors","prerequisites"],description:"These are some prerequisites you must have before you start building SaaS Connectors.",slug:"/docs/saas-connectivity/prerequisites",tags:["Connectivity"]},sidebar:"idnDocs",previous:{title:"SaaS Connectivity",permalink:"/idn/docs/saas-connectivity"},next:{title:"Test, Build, and Deploy",permalink:"/idn/docs/saas-connectivity/test-build-deploy"}},c={},l=[{value:"Packages",id:"packages",level:2},{value:"IDE",id:"ide",level:2},{value:"Install CLI",id:"install-cli",level:2},{value:"Create New Project",id:"create-new-project",level:2},{value:"Source Files",id:"source-files",level:3}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"packages"},"Packages"),(0,o.kt)("p",null,"To build the CLI, the following packages are required:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Golang >= 1.17"),(0,o.kt)("li",{parentName:"ul"},"Make >= 3.81")),(0,o.kt)("p",null,"To develop a connector, the following packages are required:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node >= 14.17.3")),(0,o.kt)("h2",{id:"ide"},"IDE"),(0,o.kt)("p",null,"Although you can develop connectors in a text editor, use an Integrated\nDevelopment Environment (IDE) for a better experience. There are many IDEs that\nsupport Javascript/Typescript, including\n",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/Download"},"Visual Sudio Code"),", a free IDE with\nnative support for Javascript/Typescript. VS Code provides syntax highlight,\ndebugging, hints, code completion, and other helpful options."),(0,o.kt)("h2",{id:"install-cli"},"Install CLI"),(0,o.kt)("p",null,"SailPoint provides a CLI tool to manage the connectors' lifecycles. To install\nand set up the CLI, follow the instructions in this repository's README file\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/sp-connector-cli"},"SailPoint CLI on GitHub")),(0,o.kt)("h2",{id:"create-new-project"},"Create New Project"),(0,o.kt)("p",null,"To create an empty connector project, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sp conn init my-first-project\n")),(0,o.kt)("p",null,"The CLI init command creates a new folder with your project name in the location\nwhere you run the command."),(0,o.kt)("p",null,"Run npm install to change the directory to the project folder and install the\ndependencies. You may need to provide your GitHub credentials because the CLI\ntool depends on a SailPoint internal GitHub repository."),(0,o.kt)("h3",{id:"source-files"},"Source Files"),(0,o.kt)("p",null,"The earlier command creates the initial project source directory below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"my-first-project\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 connector-spec.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src/\n|   \u251c\u2500\u2500 index.ts\n|   \u251c\u2500\u2500 my-client.txt\n|   \u2514\u2500\u2500 connector-spec.ts\n\u251c\u2500\u2500 tsconfig.json\n")),(0,o.kt)("p",null,"This directory contains three main files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"index.ts:")," Use this file to register all the available commands the\nconnector supports, provide the necessary configuration options to the client\ncode implementing the API for the source, and pass data the client code\nobtains to IdentityNow. This file can either use a vendor supplied client\nSoftware Development Kit (SDK) to interact with the web service or reference\ncustom client code within the project.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"my-client.ts:")," Use this template to create custom client code to interact\nwith a web service\u2019s APIs. If the web service does not provide an SDK, you can\nmodify this file to implement the necessary API calls to interact with the\nsource web service.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"connector-spec.ts")," This file describes how the connector works to IDN. More\ninformation about the connector spec is available in the next section. At a\nhigh level, it has the information for the following:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"What commands the connector supports"),(0,o.kt)("li",{parentName:"ul"},"What config values the user must provide when creating the connector"),(0,o.kt)("li",{parentName:"ul"},"Defining the account schema"),(0,o.kt)("li",{parentName:"ul"},"Defining the entitlment schema"),(0,o.kt)("li",{parentName:"ul"},"Defining the account create template that maps fields from IDN to the\nconnector")))),(0,o.kt)("p",null,"These files are templates that provide guidance to begin implementing the\nconnector on the target web service. Although you can implement a connector's\nentire functionality within these three files (or even just one if the web\nservice provides an SDK), you can implement your own code architecture, like\nbreaking out common utility functions into a separate file or creating separate\nfiles for each operation."))}u.isMDXComponent=!0}}]);