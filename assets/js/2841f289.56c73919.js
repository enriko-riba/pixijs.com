"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[3105],{8094:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var s=a(7462),i=(a(7294),a(3905));const n={title:"AssetPack 1.0.0 Release!",description:"AssetPack 1.0.0 is here! \ud83c\udf89",slug:"assetpack-1.0.0",authors:[{name:"Zyie",title:"PixiJS Co-owner",url:"https://github.com/Zyie",image_url:"https://github.com/Zyie.png"}],tags:["PixiJS","AssetPack","Web","Games","Spine","Optimisation","Asset Management"],hide_table_of_contents:!0,keywords:["PixiJS","Spine","JavaScript","game development","web development","asset management","loading"]},o=void 0,l={permalink:"/blog/assetpack-1.0.0",source:"@site/blog/2024-07-18-assetpack-1.0.0.md",title:"AssetPack 1.0.0 Release!",description:"AssetPack 1.0.0 is here! \ud83c\udf89",date:"2024-07-18T00:00:00.000Z",formattedDate:"July 18, 2024",tags:[{label:"PixiJS",permalink:"/blog/tags/pixi-js"},{label:"AssetPack",permalink:"/blog/tags/asset-pack"},{label:"Web",permalink:"/blog/tags/web"},{label:"Games",permalink:"/blog/tags/games"},{label:"Spine",permalink:"/blog/tags/spine"},{label:"Optimisation",permalink:"/blog/tags/optimisation"},{label:"Asset Management",permalink:"/blog/tags/asset-management"}],readingTime:4.825,hasTruncateMarker:!0,authors:[{name:"Zyie",title:"PixiJS Co-owner",url:"https://github.com/Zyie",image_url:"https://github.com/Zyie.png",imageURL:"https://github.com/Zyie.png"}],frontMatter:{title:"AssetPack 1.0.0 Release!",description:"AssetPack 1.0.0 is here! \ud83c\udf89",slug:"assetpack-1.0.0",authors:[{name:"Zyie",title:"PixiJS Co-owner",url:"https://github.com/Zyie",image_url:"https://github.com/Zyie.png",imageURL:"https://github.com/Zyie.png"}],tags:["PixiJS","AssetPack","Web","Games","Spine","Optimisation","Asset Management"],hide_table_of_contents:!0,keywords:["PixiJS","Spine","JavaScript","game development","web development","asset management","loading"]},nextItem:{title:"PixiJS Joins the Spine 4.2 Physics Revolution! \ud83d\ude80",permalink:"/blog/pixi-js-hearts-spine"}},r={authorsImageUrls:[void 0]},p=[{value:"What is AssetPack?",id:"what-is-assetpack",level:2},{value:"Key Features of AssetPack",id:"key-features-of-assetpack",level:3},{value:"Caching &amp; CI",id:"caching--ci",level:4},{value:"Performance",id:"performance",level:4},{value:"Watch Mode",id:"watch-mode",level:4},{value:"Tag System",id:"tag-system",level:4},{value:"How to use AssetPack",id:"how-to-use-assetpack",level:2},{value:"Installation",id:"installation",level:3},{value:"Setup",id:"setup",level:3},{value:"Open Source Games",id:"open-source-games",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"\ud83c\udf10 Stay Connected",id:"-stay-connected",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Today we are very excited to announce ",(0,i.kt)("a",{parentName:"p",href:"https://pixijs.io/assetpack"},"AssetPack")," 1.0, an asset management and optimization tool for web developers."),(0,i.kt)("p",null,"In the world of web development, managing and optimizing assets often demands significant manual effort. Developers need to ensure that their images are compressed, their audio files are optimized, their fonts are loaded efficiently, and more. This process can be time-consuming and error-prone, especially when working on large projects with many assets. To address this challenge, AssetPack provides a configurable asset pipeline that automates many of these tasks, making it easier for developers to manage and deploy assets in their projects."),(0,i.kt)("h2",{id:"what-is-assetpack"},"What is AssetPack?"),(0,i.kt)("p",null,"AssetPack is a tool designed to streamline the management, optimization, and deployment of assets in web projects. It is framework-agnostic and can be used with any framework you like, such as PixiJS, Three.js, Phaser, and others. AssetPack employs a plugin-based system, allowing you to create your own plugins to customize asset processing according to your needs."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"24px"}},(0,i.kt)("img",{src:"/images/blog/assetpack-screenshot.png",alt:"AssetPack screenshot"})),(0,i.kt)("p",null,"AssetPack comes out of the box with the following plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cache Busting"),": Automatically appends a unique hash to asset URLs to ensure that clients always load the latest version of the asset."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Compression"),": Compresses images using sharp, allowing for the creation of webp/avif images and compressing png/jpg to reduce file sizes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TexturePacker"),": Automatically generates spritesheets from images."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mipmap"),": Generates mipmaps for textures to improve rendering performance e.g. 2x, 1x, 0.5x, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spine"),": Optimizes Spine animations by creating mipmaps for ",(0,i.kt)("inlineCode",{parentName:"li"},".atlas")," files."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Audio/FFmpeg"),": Converts audio files to the desired format and bitrate using FFmpeg."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"JSON"),": Minifies JSON files to reduce their size."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Webfont"),": Converts all fonts files to WOFF2 format, and plugins for SDF and MSDF font generation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Manifest"),": Generates a manifest file containing all asset URLs for easy loading. This can be used with PixiJS's ",(0,i.kt)("inlineCode",{parentName:"li"},"Assets")," loader")),(0,i.kt)("p",null,"The above plugins are just a few examples of what AssetPack can do. You can create your own plugins to extend AssetPack's functionality further."),(0,i.kt)("h3",{id:"key-features-of-assetpack"},"Key Features of AssetPack"),(0,i.kt)("h4",{id:"caching--ci"},"Caching & CI"),(0,i.kt)("p",null,"AssetPack intelligently caches assets, transforming each asset only once. This reduces redundant processing and speeds up build times, ensuring that you always have the latest version of your assets without unnecessary overhead."),(0,i.kt)("p",null,"This is perfect for Continuous Integration (CI) environments, AssetPack allows you to commit raw assets to your repository and transform them as part of your build process. This ensures that your assets are always optimized and up-to-date with minimal manual intervention. See the Github Action example ",(0,i.kt)("a",{parentName:"p",href:"https://pixijs.io/assetpack/docs/guide/getting-started/github-action/"},"here")," for more information."),(0,i.kt)("h4",{id:"performance"},"Performance"),(0,i.kt)("p",null,"Designed to handle large quantities of assets, AssetPack utilizes the fastest tools available. This ensures that your asset pipeline can keep up with the demands of modern web development, delivering optimized assets quickly and efficiently."),(0,i.kt)("h4",{id:"watch-mode"},"Watch Mode"),(0,i.kt)("p",null,"With the Watch mode, AssetPack monitors your assets in real-time, updating them as you add or remove files. This live update feature streamlines development, allowing you to see changes immediately without having to manually trigger asset processing. Combined with the caching system, Watch mode ensures that only the necessary assets are transformed, keeping build times to a minimum."),(0,i.kt)("h4",{id:"tag-system"},"Tag System"),(0,i.kt)("p",null,"AssetPack's tag-powered system makes asset management intuitive and flexible. By simply adding tags to folders or files (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"{tps}")," to create a sprite sheet), you can easily apply specific processing rules. This feature simplifies complex asset workflows and enhances customization."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"24px"}},(0,i.kt)("img",{src:"/images/blog/assetpack-screenshot-tags.png",alt:"AssetPack screenshot"})),(0,i.kt)("h2",{id:"how-to-use-assetpack"},"How to use AssetPack"),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To install AssetPack, you need to install the ",(0,i.kt)("inlineCode",{parentName:"p"},"@assetpack/core")," package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @assetpack/core\n")),(0,i.kt)("admonition",{title:"COMPATIBILITY NOTE",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"AssetPack requires ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," version 20+, please upgrade if your package manager warns about it.")),(0,i.kt)("h3",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To set up AssetPack, you need to create a configuration file that defines what assets you want to optimise and how you want to optimise them."),(0,i.kt)("p",null,"First create a ",(0,i.kt)("inlineCode",{parentName:"p"},".assetpack.js")," file in the root of your project. This file should export an object with the following properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// .assetpack.js\nimport { pixiPipes } from '@assetpack/core';\n\nexport default {\n    entry: './raw-assets',\n    output: './public/assets',\n    pipes: [\n      /* If you are using AssetPack with PixiJS, you can use the `pixiPipes` function\n       * to add a pre-configured set of plugins, with an opinionated\n       * set of defaults for PixiJS.\n       */\n      ...pixiPipes()\n    ],\n};\n")),(0,i.kt)("p",null,"To see the full list of configuration options, see the ",(0,i.kt)("a",{parentName:"p",href:"https://pixijs.io/assetpack/docs/guide/configuration/"},"API Reference")," page."),(0,i.kt)("p",null,"Then to run AssetPack, you can use the CLI, run programmatically, or use a build tool like Vite."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pixijs.io/assetpack/docs/guide/getting-started/cli"},"CLI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pixijs.io/assetpack/docs/guide/getting-started/programmatic"},"Programmatic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pixijs.io/assetpack/docs/guide/getting-started/vite"},"Vite"))),(0,i.kt)("p",null,"AssetPack has a number of built-in plugins for you to use, to see the full list of plugins, see the ",(0,i.kt)("a",{parentName:"p",href:"https://pixijs.io/assetpack/docs/guide/pipes/overview"},"Plugins")," page."),(0,i.kt)("h3",{id:"open-source-games"},"Open Source Games"),(0,i.kt)("p",null,"AssetPack is already in use in our open source games repo. Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://pixijs.io/assetpack/examples"},"games")," leveraging AssetPack for asset management. These examples showcase the power and flexibility of AssetPack in real-world scenarios."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"AssetPack is a powerful tool that can help you manage and optimize assets in your web projects. By automating many of the tasks involved in asset management, AssetPack can save you time and effort, allowing you to focus on building great web experiences. We hope you find AssetPack useful in your projects, and we look forward to seeing what you create with it!"),(0,i.kt)("p",null,"We are committed to continuously improving AssetPack, and your feedback is invaluable to us. If you encounter any issues or have suggestions for new features, please reach out on our discord or open an issue on our GitHub repository."),(0,i.kt)("h2",{id:"-stay-connected"},"\ud83c\udf10 Stay Connected"),(0,i.kt)("p",null,"Follow ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/_Zyie_"},"Zyie")," and ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/PixiJS"},"PixiJS")," on social media for the latest updates. Join our vibrant community on ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/nrnDP9wtyX"},"Discord")," for real-time discussions and support."))}c.isMDXComponent=!0}}]);