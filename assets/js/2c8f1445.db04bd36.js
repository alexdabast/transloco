"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[1483],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?o.createElement(f,l(l({ref:n},c),{},{components:t})):o.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(7294),r=t(6010),a="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,l=e.className;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:t},n)}},4866:function(e,n,t){t.d(n,{Z:function(){return w}});var o=t(7462),r=t(7294),a=t(6010),l=t(2466),i=t(6550),s=t(1980),u=t(7392),c=t(12);function p(e){return function(e){var n,t;return null!=(n=null==(t=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,o=e.groupId,a=(0,i.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,o=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:t,groupId:o});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var n=new URLSearchParams(a.location.search);n.set(l,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[l,a])]}function v(e){var n,t,o,a,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,p=d(e),v=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=o.find((function(e){return e.default})))?n:o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:p})})),g=v[0],h=v[1],b=f({queryString:s,groupId:u}),y=b[0],k=b[1],N=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,c.Nk)(n),o=t[0],a=t[1],[o,(0,r.useCallback)((function(e){n&&a.set(e)}),[n,a])]),w=N[0],T=N[1],C=function(){var e=null!=y?y:w;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){C&&h(C)}),[C]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),k(e),T(e)}),[k,T,p]),tabValues:p}}var g=t(2389),h="tabList__CuJ",b="tabItem_LNqP";function y(e){var n=e.className,t=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=c.indexOf(n),o=u[t].value;o!==i&&(p(n),s(o))},m=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var o,r=c.indexOf(e.currentTarget)+1;t=null!=(o=c[r])?o:c[0];break;case"ArrowLeft":var a,l=c.indexOf(e.currentTarget)-1;t=null!=(a=c[l])?a:c[c.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n)},u.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},l,{className:(0,a.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":i===n})}),null!=t?t:n)})))}function k(e){var n=e.lazy,t=e.children,o=e.selectedValue,a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=a.find((function(e){return e.props.value===o}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})})))}function N(e){var n=v(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",h)},r.createElement(y,(0,o.Z)({},e,n)),r.createElement(k,(0,o.Z)({},e,n)))}function w(e){var n=(0,g.Z)();return r.createElement(N,(0,o.Z)({key:String(n)},e))}},7317:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),l=t(4866),i=t(5162),s=["components"],u={title:"Scope Configuration",description:"Scope Configuration | Transloco Angular i18n"},c=void 0,p={unversionedId:"lazy-load/scope-configuration",id:"lazy-load/scope-configuration",title:"Scope Configuration",description:"Scope Configuration | Transloco Angular i18n",source:"@site/docs/lazy-load/scope-configuration.mdx",sourceDirName:"lazy-load",slug:"/lazy-load/scope-configuration",permalink:"/transloco/docs/lazy-load/scope-configuration",draft:!1,editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/lazy-load/scope-configuration.mdx",tags:[],version:"current",frontMatter:{title:"Scope Configuration",description:"Scope Configuration | Transloco Angular i18n"},sidebar:"docs",previous:{title:"Language API",permalink:"/transloco/docs/language-api"},next:{title:"Inline Loaders",permalink:"/transloco/docs/lazy-load/inline-loaders"}},d={},m=[{value:"Lazy Module Providers",id:"lazy-module-providers",level:2},{value:"Component&#39;s Providers",id:"components-providers",level:2},{value:"Inline Input",id:"inline-input",level:2},{value:"Scope&#39;s namespace",id:"scopes-namespace",level:2}],f={toc:m};function v(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"Note that scopes follow ",(0,a.kt)("strong",{parentName:"p"},"Angular DI rules"),". They only work when declared in a lazy load module, or a component's providers.")),(0,a.kt)("p",null,"Let's say we have a todos page and we want to create separate translation files for this page, and load them only when the user navigates there.\nFirst, we need to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"todos")," folder (or whatever name you choose); In it, we create a translation file for each language we want to support:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500 i18n/\n   \u251c\u2500 en.json\n   \u251c\u2500 es.json\n   \u251c\u2500 todos/\n      \u251c\u2500 en.json\n      \u251c\u2500 es.json\n")),(0,a.kt)("p",null,"There are 3 levels of setting the translation scope:"),(0,a.kt)("h2",{id:"lazy-module-providers"},"Lazy Module Providers"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Standalone",mdxType:"TabItem"},(0,a.kt)("p",null,"We can set it inside the ",(0,a.kt)("em",{parentName:"p"},"lazy route")," providers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.routes.ts"',title:'"todos.routes.ts"'},"import { Route } from '@angular/router';\nimport { provideTranslocoScope } from '@ngneat/transloco';\n\nexport const TODO_ROUTES: Route = {\n    path: '',\n    loadComponent: () => import('./todos.component').then((TodosComponent) => TodosComponent),\n    providers: [\n        provideTranslocoScope('todos'),\n    ],\n};\n\n"))),(0,a.kt)(i.Z,{value:"NgModule",mdxType:"TabItem"},(0,a.kt)("p",null,"We can set it inside the ",(0,a.kt)("em",{parentName:"p"},"lazy module")," providers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.module.ts"',title:'"todos.module.ts"'},"import { provideTranslocoScope } from '@ngneat/transloco';\n\nconst routes: Routes = [\n    {\n        path: '',\n        component: TodosComponent\n    }\n];\n\n@NgModule({\n    declarations: [TodosComponent],\n    providers: [provideTranslocoScope('todos')],\n    imports: [RouterModule.forChild(routes), TranslocoModule]\n})\nexport class TodosModule {}\n")))),(0,a.kt)("h2",{id:"components-providers"},"Component's Providers"),(0,a.kt)("p",null,"We can set it in a ",(0,a.kt)("em",{parentName:"p"},"component's providers"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.component.ts"',title:'"todos.component.ts"'},"@Component({\n  selector: 'my-comp',\n  templateUrl: './my-comp.component.html',\n  providers: [provideTranslocoScope('todos')]\n})\nexport class MyComponent {}\n")),(0,a.kt)("h2",{id:"inline-input"},"Inline Input"),(0,a.kt)("p",null,"We can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"scope")," input in the ",(0,a.kt)("inlineCode",{parentName:"p"},"transloco")," structural directive:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{1} title="todos.component.html"',"{1}":!0,title:'"todos.component.html"'},"<ng-container *transloco=\"let t; scope: 'todos';\">\n  <h1>{{ t('todos.keyFromTodos') }}</h1>\n</ng-container>\n")),(0,a.kt)("p",null,"Each one of these options tells Transloco to load the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"scope")," based on the active language and merge it under the scope namespace into the active language translation object."),(0,a.kt)("p",null,"For example, if the active language is ",(0,a.kt)("inlineCode",{parentName:"p"},"en"),", it will load the ",(0,a.kt)("inlineCode",{parentName:"p"},"todos/en.json")," file, and will set the translation to be the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "header": "",\n  "login": "",\n  "todos": {\n    "submit": "",\n    "title": ""\n  }\n}\n')),(0,a.kt)("p",null,"Now we can access each one of the ",(0,a.kt)("inlineCode",{parentName:"p"},"todos")," keys by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"todos")," namespace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="todos.component.html"',title:'"todos.component.html"'},"<ng-container *transloco=\"let t\">\n  <h1>{{ t('todos.title') }}</h1>\n</ng-container>\n\n{{ 'todos.title' | transloco }}\n\n<span transloco=\"todos.submit\"></span>\n")),(0,a.kt)("h2",{id:"scopes-namespace"},"Scope's namespace"),(0,a.kt)("p",null,"By default, the namespace will be the ",(0,a.kt)("inlineCode",{parentName:"p"},"scope")," name (camel cased), but we can override it by providing custom ",(0,a.kt)("inlineCode",{parentName:"p"},"alias")," name in the module/component ",(0,a.kt)("inlineCode",{parentName:"p"},"scope")," provider:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"provideTranslocoScope({ scope: 'todos', alias: 'customName' })\n")),(0,a.kt)("p",null,"Now we can access it through ",(0,a.kt)("inlineCode",{parentName:"p"},"customName")," instead of the original scope name (",(0,a.kt)("inlineCode",{parentName:"p"},"todos")," in our case):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="todos.component.html"',title:'"todos.component.html"'},"<ng-container *transloco=\"let t\">\n  <h1>{{ t('customName.title') }}</h1>\n</ng-container>\n\n{{ 'customName.title' | transloco }}\n\n<span transloco=\"customName.submit\"></span>\n")))}v.isMDXComponent=!0}}]);