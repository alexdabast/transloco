(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{103:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return p}));var o=t(0),r=t.n(o);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),b=function(e){var a=r.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=b(e.components);return r.a.createElement(c.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=b(t),d=o,p=m["".concat(l,".").concat(d)]||m[d]||g[d]||n;return t?r.a.createElement(p,s(s({ref:a},c),{},{components:t})):r.a.createElement(p,s({ref:a},c))}));function p(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,l=new Array(n);l[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<n;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return i})),t.d(a,"default",(function(){return b}));var o=t(2),r=t(6),n=(t(0),t(103)),l={title:"Blog Posts",description:"Blog Posts | Transloco Angular i18n"},s={unversionedId:"blog-posts",id:"blog-posts",isDocsHomePage:!1,title:"Blog Posts",description:"Blog Posts | Transloco Angular i18n",source:"@site/docs/blog-posts.mdx",permalink:"/transloco/docs/blog-posts",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/blog-posts.mdx",sidebar:"docs",previous:{title:"Hack The Library",permalink:"/transloco/docs/hack"},next:{title:"FAQ",permalink:"/transloco/docs/faq"}},i=[],c={rightToc:i};function b(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("a",{className:"blog-post",href:"https://netbasal.com/introducing-transloco-angular-internationalization-done-right-54710337630c",rel:"noopener noreferrer",target:"_blank",spellCheck:"false"},Object(n.b)("div",{className:"blog-preview"},Object(n.b)("div",{className:"blog-title"},"\ud83d\ude80 Introducing Transloco: Angular Internationalization Done Right"),Object(n.b)("div",{className:"blog-description"},"For a while I\u2019ve been thinking about creating an Angular i18n library, which incorporates some concepts I had in mind\u2026"),Object(n.b)("div",{className:"blog-source"},"medium.com")),Object(n.b)("div",{className:"blog-image",style:{backgroundImage:"url('https://miro.medium.com/max/1200/1*X1LKTIx6awH2C2xB7G7Nvg.png')"}})),Object(n.b)("a",{className:"blog-post",href:"https://medium.com/@shahar.kazaz/transloco-proudly-presents-functional-translations-e73fca275c33",rel:"noopener noreferrer",target:"_blank",spellCheck:"false"},Object(n.b)("div",{className:"blog-preview"},Object(n.b)("div",{className:"blog-title"},"Transloco Proudly Presents: Functional Translations"),Object(n.b)("div",{className:"blog-description"},"A friend told me of an exciting use-case, where he needed to change translation values depending on whether the user was allowed access to a feature or not.\u2026"),Object(n.b)("div",{className:"blog-source"},"medium.com")),Object(n.b)("div",{className:"blog-image",style:{backgroundImage:"url('https://miro.medium.com/max/1200/1*oJcxt06UXLSNyvbqNe18tA.png')"}})),Object(n.b)("a",{className:"blog-post",href:"https://medium.com/@ItayOded/lazy-load-and-encapsulate-i18n-files-in-angular-with-transloco-55af44885797",rel:"noopener noreferrer",target:"_blank",spellCheck:"false"},Object(n.b)("div",{className:"blog-preview"},Object(n.b)("div",{className:"blog-title"},"Lazy Load and Encapsulate i18n Files in Angular with Transloco"),Object(n.b)("div",{className:"blog-description"},"When building an application that needs to be translated, one of the most important things to consider is how we organize our translation\u2026"),Object(n.b)("div",{className:"blog-source"},"medium.com")),Object(n.b)("div",{className:"blog-image",style:{backgroundImage:"url('https://miro.medium.com/max/1200/1*En9o2wouW_VDElFRG5NR9w.jpeg')"}})),Object(n.b)("a",{className:"blog-post",href:"https://itnext.io/lazy-load-translation-files-in-angular-using-transloco-2d3afed116ce",rel:"noopener noreferrer",target:"_blank",spellCheck:"false"},Object(n.b)("div",{className:"blog-preview"},Object(n.b)("div",{className:"blog-title"},"Lazy Load Translation Files In Angular Using Transloco"),Object(n.b)("div",{className:"blog-description"},"In this article, we will learn how we can use Transloco to lazy load translation files in our Angular application.\u2026"),Object(n.b)("div",{className:"blog-source"},"medium.com")),Object(n.b)("div",{className:"blog-image",style:{backgroundImage:"url('https://miro.medium.com/max/1200/1*7-oF_trxf0s04dJ0F8ThdQ.jpeg')"}})),Object(n.b)("a",{className:"blog-post",href:"https://medium.com/angular-in-depth/introducing-localization-support-for-transloco-the-internalization-library-for-angular-89637a4e7994",rel:"noopener noreferrer",target:"_blank",spellCheck:"false"},Object(n.b)("div",{className:"blog-preview"},Object(n.b)("div",{className:"blog-title"},"Introducing Localization Support for Transloco: The Internalization Library for Angular"),Object(n.b)("div",{className:"blog-description"},"Transloco comes with many features which will help us to easily create\u2026"),Object(n.b)("div",{className:"blog-source"},"medium.com")),Object(n.b)("div",{className:"blog-image",style:{backgroundImage:"url('https://miro.medium.com/max/1200/1*uh3NuBh_Fd1aPKbi5EFBnw.jpeg')"}})),Object(n.b)("a",{className:"blog-post",href:"https://dev.to/coly010/using-messageformat-with-transloco-30em",rel:"noopener noreferrer",target:"_blank",spellCheck:"false"},Object(n.b)("div",{className:"blog-preview"},Object(n.b)("div",{className:"blog-title"},"Using MessageFormat with Transloco"),Object(n.b)("div",{className:"blog-description"},"\ud83c\udfb8 Using MessageFormat with Transloco. Transloco, an Angular Internationalization Library, w\u2026"),Object(n.b)("div",{className:"blog-source"},"dev.to")),Object(n.b)("div",{className:"blog-image",style:{backgroundImage:"url('https://dev.to/social_previews/article/158112.png')"}})),Object(n.b)("a",{className:"blog-post",href:"https://medium.com/@shahar.kazaz/help-the-translator-by-using-transloco-the-internationalization-i18n-library-for-angular-831c3c513ee4",rel:"noopener noreferrer",target:"_blank",spellCheck:"false"},Object(n.b)("div",{className:"blog-preview"},Object(n.b)("div",{className:"blog-title"},"Help the Translator by Using Transloco"),Object(n.b)("div",{className:"blog-description"},"There are times where we need to help the translator with a description and meaning. To translate a text message accurately, the\u2026"),Object(n.b)("div",{className:"blog-source"},"medium.com")),Object(n.b)("div",{className:"blog-image",style:{backgroundImage:"url('https://miro.medium.com/max/1200/1*vkC0OxeUqdmAuzViAnBqHg.jpeg')"}})),Object(n.b)("a",{className:"blog-post",href:"https://netbasal.com/good-things-come-to-those-who-wait-whats-new-in-transloco-5dadf886b485",rel:"noopener noreferrer",target:"_blank",spellCheck:"false"},Object(n.b)("div",{className:"blog-preview"},Object(n.b)("div",{className:"blog-title"},"\ud83c\udf89 Good Things Come to Those Who Wait: What\u2019s new in Transloco"),Object(n.b)("div",{className:"blog-description"},"The next generation i18n library for Angular just got better! Updates for Transloco, the Angular translation library\u2026"),Object(n.b)("div",{className:"blog-source"},"medium.com")),Object(n.b)("div",{className:"blog-image",style:{backgroundImage:"url('https://miro.medium.com/max/1200/1*zGxEuJSfi2IxaJSx7dKw4A.png')"}})),Object(n.b)("a",{className:"blog-post",href:"https://medium.com/@shahar.kazaz/creating-search-engine-friendly-internationalized-apps-with-angular-universal-and-transloco-ab9583cfb5ac",rel:"noopener noreferrer",target:"_blank",spellCheck:"false"},Object(n.b)("div",{className:"blog-preview"},Object(n.b)("div",{className:"blog-title"},"Creating Search Engine-Friendly Internationalized Apps with Angular Universal and Transloco \ud83c\udf10"),Object(n.b)("div",{className:"blog-description"},"In this article, I will show you how easily we can add internalization (i18n) support to Angular SSR using the next generation Angular\u2026"),Object(n.b)("div",{className:"blog-source"},"medium.com")),Object(n.b)("div",{className:"blog-image",style:{backgroundImage:"url('https://miro.medium.com/max/1200/1*41P4drGzZtHRYkQbEqzrJA.jpeg')"}})),Object(n.b)("a",{className:"blog-post",href:"https://medium.com/@shahar.kazaz/translation-files-validation-in-angular-with-transloco-e6ba02467f33",rel:"noopener noreferrer",target:"_blank",spellCheck:"false"},Object(n.b)("div",{className:"blog-preview"},Object(n.b)("div",{className:"blog-title"},"Translation Files Validation in Angular with Transloco"),Object(n.b)("div",{className:"blog-description"},"When working on an enterprise application and with multiple teams, it\u2019s often the case where we have merge conflicts with one of the\u2026"),Object(n.b)("div",{className:"blog-source"},"medium.com")),Object(n.b)("div",{className:"blog-image",style:{backgroundImage:"url('https://miro.medium.com/max/1200/1*HH2LWgE9USaupI47dgsFBw.png')"}})))}b.isMDXComponent=!0}}]);