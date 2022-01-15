"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[5930],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=o.createContext({}),c=function(n){var e=o.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=c(n.components);return o.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,s=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return t?o.createElement(f,i(i({ref:e},u),{},{components:t})):o.createElement(f,i({ref:e},u))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3919:function(n,e,t){function o(n){return!0===/^(\w*:|\/\/)/.test(n)}function a(n){return void 0!==n&&!o(n)}t.d(e,{b:function(){return o},Z:function(){return a}})},4996:function(n,e,t){t.d(e,{C:function(){return r},Z:function(){return i}});var o=t(2263),a=t(3919);function r(){var n=(0,o.Z)().siteConfig,e=(n=void 0===n?{}:n).baseUrl,t=void 0===e?"/":e,r=n.url;return{withBaseUrl:function(n,e){return function(n,e,t,o){var r=void 0===o?{}:o,i=r.forcePrependBaseUrl,l=void 0!==i&&i,s=r.absolute,c=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(l)return e+t;var u=t.startsWith(e)?t:e+t.replace(/^\//,"");return c?n+u:u}(r,t,n,e)}}}function i(n,e){return void 0===e&&(e={}),(0,r().withBaseUrl)(n,e)}},694:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),i=t(4996),l=["components"],s={id:"installation",title:"Installation",description:"Installation | Transloco Angular i18n"},c=void 0,u={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"Installation | Transloco Angular i18n",source:"@site/docs/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/transloco/docs/installation",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/installation.mdx",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",description:"Installation | Transloco Angular i18n"},sidebar:"docs",next:{title:"Config Options",permalink:"/transloco/docs/config-options"}},p=[],d={toc:p};function m(n){var e=n.components,t=(0,a.Z)(n,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Install the library using Angular CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ng add @ngneat/transloco\n")),(0,r.kt)("img",{className:"gif",src:(0,i.Z)("/img/installation.gif")}),(0,r.kt)("p",null,"As part of the installation process you'll be presented with questions; Once you answer them, everything you need will automatically be created for you. Let's take a closer look at the generated files:"),(0,r.kt)("p",null,"First, Transloco creates boilerplate files for the requested translations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="assets/i18n/en.json"',title:'"assets/i18n/en.json"'},'{\n  "hello": "transloco en",\n  "dynamic": "transloco {{value}}"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="assets/i18n/es.json"',title:'"assets/i18n/es.json"'},'{\n  "hello": "transloco es",\n  "dynamic": "transloco {{value}}"\n}\n')),(0,r.kt)("p",null,"Next, it will create a new file, ",(0,r.kt)("inlineCode",{parentName:"p"},"transloco-root.module.ts")," which exposes an Angular's module with a default configuration, and inject it into the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppModule"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="transloco-root.module.ts"',title:'"transloco-root.module.ts"'},"import { HttpClient } from '@angular/common/http';\nimport {\n  TRANSLOCO_LOADER,\n  Translation,\n  TranslocoLoader,\n  TRANSLOCO_CONFIG,\n  translocoConfig,\n  TranslocoModule\n} from '@ngneat/transloco';\nimport { Injectable, NgModule } from '@angular/core';\nimport { environment } from '../environments/environment';\n\n@Injectable({ providedIn: 'root' })\nexport class TranslocoHttpLoader implements TranslocoLoader {\n  constructor(private http: HttpClient) {}\n\n  getTranslation(lang: string) {\n    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);\n  }\n}\n\n@NgModule({\n  exports: [ TranslocoModule ],\n  providers: [\n    {\n      provide: TRANSLOCO_CONFIG,\n      useValue: translocoConfig({\n        availableLangs: ['en', 'es'],\n        defaultLang: 'en',\n        // Remove this option if your application\n        // doesn't support changing language in runtime.\n        reRenderOnLangChange: true,\n        prodMode: environment.production,\n      })\n    },\n    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }\n  ]\n})\nexport class TranslocoRootModule {}\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You should import the ",(0,r.kt)("inlineCode",{parentName:"p"},"TranslocoRootModule")," once in your root module, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"TranslocoModule")," in any other module. "))),(0,r.kt)("p",null,"As you might have noticed it also set an ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpLoader")," into the module's providers. The ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpLoader")," is a class that implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"TranslocoLoader")," interface. It's responsible for instructing Transloco how to load the translation files. It uses Angular HTTP client to fetch the files, based on the given path (We'll see why it called path on the lazy load section)."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When you deploy your application and Transloco is unable to load your language files it might because you need to use a relative path:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getTranslation(langPath: string) {\n  return this.http.get(`./assets/i18n/${langPath}.json`);\n}\n")))),(0,r.kt)("p",null,"And that's it! Now we are ready to use it in our project."))}m.isMDXComponent=!0}}]);