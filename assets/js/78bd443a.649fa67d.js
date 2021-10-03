"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[643],{7775:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var n=o(7462),s=o(3366),r=(o(7294),o(3905)),i=o(2969),a=["components"],l={sidebar_position:3},u="Convert Subtitles",c={unversionedId:"whatsub/convert-sub",id:"whatsub/convert-sub",isDocsHomePage:!1,title:"Convert Subtitles",description:"Conversion",source:"@site/docs/whatsub/convert-sub.mdx",sourceDirName:"whatsub",slug:"/whatsub/convert-sub",permalink:"/docs/whatsub/convert-sub",tags:[],version:"current",lastUpdatedAt:1633265273,formattedLastUpdatedAt:"10/3/2021",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Convert Charset",permalink:"/docs/whatsub/convert-charset"},next:{title:"Sync",permalink:"/docs/whatsub/sync"}},p=[{value:"Conversion",id:"conversion",children:[]},{value:"Convert from SMI to SRT",id:"convert-from-smi-to-srt",children:[]},{value:"Convert from SRT to SMI",id:"convert-from-srt-to-smi",children:[]},{value:"Help",id:"help",children:[]}],d={toc:p};function h(t){var e=t.components,o=(0,s.Z)(t,a);return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"convert-subtitles"},"Convert Subtitles"),(0,r.kt)("h2",{id:"conversion"},"Conversion"),(0,r.kt)("p",null,"If you have a subtitle file in ",(0,r.kt)(i.Z,{color:"#25c2a0",mdxType:"Highlight"},"SAMI")," (",(0,r.kt)(i.Z,{color:"#25c2a0",mdxType:"Highlight"},"SMI"),") format and want to convert it to an ",(0,r.kt)(i.Z,{color:"#1877F2",mdxType:"Highlight"},"SRT")," file, whatsub is the tool for you.Highlight"),(0,r.kt)("p",null,"The Google Chrome extension like ",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/substital-add-subtitles-t/kkkbiiikppgjdiebcabomlbidfodipjg"},"Substital")," let you use custom subtitles.\nHowever, it supports only ",(0,r.kt)(i.Z,{color:"#1877F2",mdxType:"Highlight"},"SRT")," subtitles so if you have ",(0,r.kt)(i.Z,{color:"#25c2a0",mdxType:"Highlight"},"SMI")," ones, you need to convert it to ",(0,r.kt)(i.Z,{color:"#1877F2",mdxType:"Highlight"},"SRT"),"."),(0,r.kt)("h2",{id:"convert-from-smi-to-srt"},"Convert from SMI to SRT"),(0,r.kt)("p",null,"To convert ",(0,r.kt)("inlineCode",{parentName:"p"},"SMI")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"SRT"),", you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"whatsub convert")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"whatsub convert --from smi --to srt --src sub.smi --out sub.srt\n")),(0,r.kt)("h2",{id:"convert-from-srt-to-smi"},"Convert from SRT to SMI"),(0,r.kt)("p",null,"To convert ",(0,r.kt)("inlineCode",{parentName:"p"},"SRT")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"SMI"),", you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"whatsub convert")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"whatsub convert --from srt --to smi --src sub.srt --out sub.smi\n")),(0,r.kt)("h2",{id:"help"},"Help"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"whatsub convert --help\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Usage:\n  Whatsub convert -f|--from <from> -t|--to <to> -s|--src <src> [-o|--out <out>] [-h|--help HELP]\n\nConvert subtitles\n\nAvailable options:\n  -f|--from <from>        A type of subtitle to be converted from\n  -t|--to <to>            A type of subtitle to be converted to\n  -s|--src <src>          The source subtitle file\n  -o|--out <out>          An optional output subtitle file. If missing, the result is printed\n                          out.\n  -h|--help HELP          Prints the synopsis and a list of options and arguments.\n")))}h.isMDXComponent=!0}}]);