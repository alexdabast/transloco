(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),b=r,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||a;return n?o.a.createElement(d,i(i({ref:t},s),{},{components:n})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(113)),c={title:"Comments for Translators",description:"Tools - Comments for Translators | Transloco Angular i18n"},i={unversionedId:"tools/comments",id:"tools/comments",isDocsHomePage:!1,title:"Comments for Translators",description:"Tools - Comments for Translators | Transloco Angular i18n",source:"@site/docs/tools/comments.mdx",slug:"/tools/comments",permalink:"/transloco/docs/tools/comments",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/tools/comments.mdx",version:"current",sidebar:"docs",previous:{title:"Transloco Optimize",permalink:"/transloco/docs/tools/optimize"},next:{title:"Scoped Library Extractor",permalink:"/transloco/docs/tools/scope-lib-extractor"}},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Help the translator with a description and meaning")),Object(a.b)("p",null,"There are times where we need to help the translator with a description and meaning. To translate a text message accurately, the translator may need additional information or context."),Object(a.b)("p",null,"For each translation key that requires a description, we can add a companion key post-fixed with ",Object(a.b)("inlineCode",{parentName:"p"},".comment"),", as shown in the example below:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="en.json"',title:'"en.json"'}),'{\n  "hello": "",\n  "hello.comment": "Write a comment for the translator"\n}\n')),Object(a.b)("p",null,"We don't want these keys to get into our final bundle, so we can remove them using the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"optimize"}),"optimize")," library when building the production environment."),Object(a.b)("p",null,"The library will take care of removing these keys from the translation files specified in the path."))}p.isMDXComponent=!0}}]);