(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{165:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return i}),t.d(a,"_frontmatter",function(){return E});t(86);var n=t(87),s=t.n(n),c=t(7),o=t.n(c),l=t(0),m=t.n(l),r=t(179),p=t(184),u={},i=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=p.a,t}return o()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=s()(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},u,t),components:a},m.a.createElement(r.MDXTag,{name:"h3",components:a},"Why is there a blue outline around my element?"),m.a.createElement(r.MDXTag,{name:"p",components:a},"You may notice a blue outline around your reference element. The blue outline is\ncalled a focus ring; it lets keyboard users know which element on the page is\ncurrently in focus. Tippy adds an attribute to the element so that it can\nreceive focus if it natively cannot, so that keyboard users (e.g. blind users)\ncan access the tooltip without using a mouse."),m.a.createElement(r.MDXTag,{name:"p",components:a},"Recommended: use the ",m.a.createElement("code",{className:"language-text"},"focus-visible")," polyfill:\n",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/WICG/focus-visible"}},"https://github.com/WICG/focus-visible"),". This will remove the outline for mouse\nusers but keep it visible for keyboard users."),m.a.createElement(r.MDXTag,{name:"p",components:a},"If your tooltip is ",m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"non-essential")," (only acts as enhancement), then you can\ndisable the ",m.a.createElement("code",{className:"language-text"},"a11y")," option:"),m.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},m.a.createElement("pre",{className:"language-js"},m.a.createElement("code",{className:"language-js"},m.a.createElement("span",{className:"token function"},"tippy"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'div'"),m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",m.a.createElement("span",{className:"token definition property"},"a11y"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token boolean"},"false"),m.a.createElement("span",{className:"token punctuation"},","),"\n",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")")))),m.a.createElement(r.MDXTag,{name:"h3",components:a},"I can't click things inside the tooltip"),m.a.createElement(r.MDXTag,{name:"p",components:a},"To enable interactivity, set the ",m.a.createElement("code",{className:"language-text"},"interactive")," option to ",m.a.createElement("code",{className:"language-text"},"true"),"."),m.a.createElement(r.MDXTag,{name:"h3",components:a},"My tooltip is hiding instantly after showing"),m.a.createElement(r.MDXTag,{name:"p",components:a},"If you're using a ",m.a.createElement("code",{className:"language-text"},"focus")," trigger, for example on an ",m.a.createElement("code",{className:"language-text"},"<input>"),", make sure you\nalso set ",m.a.createElement("code",{className:"language-text"},"hideOnClick: false"),"."),m.a.createElement(r.MDXTag,{name:"h3",components:a},"My tooltip is not working using ",m.a.createElement("code",{className:"language-text"},"data-tippy")),m.a.createElement(r.MDXTag,{name:"p",components:a},"Make sure Tippy's scripts are placed ",m.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"before")," your own scripts, at the very\nbottom of the page, like so:"),m.a.createElement("div",{className:"gatsby-highlight","data-language":"html"},m.a.createElement("pre",{className:"language-html"},m.a.createElement("code",{className:"language-html"},m.a.createElement("span",{className:"token doctype"},"<!DOCTYPE html>"),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"html"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"head"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"title"),m.a.createElement("span",{className:"token punctuation"},">")),"My page",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"title"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"head"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"body"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"button")," ",m.a.createElement("span",{className:"token attr-name"},"data-tippy"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"Created automatically",m.a.createElement("span",{className:"token punctuation"},'"')),m.a.createElement("span",{className:"token punctuation"},">")),"Text",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"button"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"button")," ",m.a.createElement("span",{className:"token attr-name"},"data-tippy-content"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"Created by function",m.a.createElement("span",{className:"token punctuation"},'"')),m.a.createElement("span",{className:"token punctuation"},">")),"Text",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"button"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","\n","    ",m.a.createElement("span",{className:"token comment"},"\x3c!-- Very end of the body --\x3e"),"\n","    ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"script")," ",m.a.createElement("span",{className:"token attr-name"},"src"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"https://unpkg.com/popper.js@1/dist/umd/popper.min.js",m.a.createElement("span",{className:"token punctuation"},'"')),m.a.createElement("span",{className:"token punctuation"},">")),m.a.createElement("span",{className:"token script language-javascript"}),m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"script"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"script")," ",m.a.createElement("span",{className:"token attr-name"},"src"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"https://unpkg.com/tippy.js@4",m.a.createElement("span",{className:"token punctuation"},'"')),m.a.createElement("span",{className:"token punctuation"},">")),m.a.createElement("span",{className:"token script language-javascript"}),m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"script"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"script"),m.a.createElement("span",{className:"token punctuation"},">")),m.a.createElement("span",{className:"token script language-javascript"},"\n","      ",m.a.createElement("span",{className:"token function"},"tippy"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'button'"),m.a.createElement("span",{className:"token punctuation"},")"),"\n","    "),m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"script"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"body"),m.a.createElement("span",{className:"token punctuation"},">")),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"html"),m.a.createElement("span",{className:"token punctuation"},">"))))),m.a.createElement(r.MDXTag,{name:"h3",components:a},"Changing data-tippy-","*"," attributes does not update the tooltip"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Updating the data-tippy-","*"," attribute on an element will currently not update the\ntooltip. You must use the ",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/tippyjs/methods#update-the-tippy"}},m.a.createElement("code",{className:"language-text"},"set()")," method")," on a Tippy\ninstance."),m.a.createElement(r.MDXTag,{name:"p",components:a},"For example, let's say you want to update the ",m.a.createElement("code",{className:"language-text"},"theme")," for tooltips when changing\nbetween dark and light mode:"),m.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},m.a.createElement("pre",{className:"language-js"},m.a.createElement("code",{className:"language-js"},m.a.createElement("span",{className:"token keyword"},"const")," instances ",m.a.createElement("span",{className:"token operator"},"=")," ",m.a.createElement("span",{className:"token function"},"tippy"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'.example'"),m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",m.a.createElement("span",{className:"token definition property"},"theme"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'custom-dark'"),m.a.createElement("span",{className:"token punctuation"},","),"\n",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")"),"\n","\n",m.a.createElement("span",{className:"token comment"},"// When clicking the theme toggle button, you can do this:"),"\n",m.a.createElement("span",{className:"token keyword"},"const")," newTheme ",m.a.createElement("span",{className:"token operator"},"=")," ",m.a.createElement("span",{className:"token string"},"'whatever'"),"\n","instances",m.a.createElement("span",{className:"token punctuation"},"."),m.a.createElement("span",{className:"token func method"},"forEach"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token parameter"},"instance")," ",m.a.createElement("span",{className:"token arrow operator"},"=>")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ","instance",m.a.createElement("span",{className:"token punctuation"},"."),m.a.createElement("span",{className:"token func method"},"set"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token punctuation"},"{")," ",m.a.createElement("span",{className:"token definition property"},"theme"),m.a.createElement("span",{className:"token punctuation"},":")," newTheme ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")"),"\n",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")")))),m.a.createElement(r.MDXTag,{name:"p",components:a},"It's also possible to attach a ",m.a.createElement("code",{className:"language-text"},"MutationObserver")," to the reference elements and\nobserve mutations to attributes if need be, then call ",m.a.createElement("code",{className:"language-text"},".set()")," with the new\nvalues."),m.a.createElement(r.MDXTag,{name:"h3",components:a},"Can I use the ",m.a.createElement("code",{className:"language-text"},"title")," attribute?"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Yes. The ",m.a.createElement("code",{className:"language-text"},"content")," option can be a function that receives the reference element\nas an argument and returns a string or element."),m.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},m.a.createElement("pre",{className:"language-js"},m.a.createElement("code",{className:"language-js"},m.a.createElement("span",{className:"token function"},"tippy"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'button'"),m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",m.a.createElement("span",{className:"token function"},"content"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token parameter"},"reference"),m.a.createElement("span",{className:"token punctuation"},")")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",m.a.createElement("span",{className:"token keyword"},"const")," title ",m.a.createElement("span",{className:"token operator"},"=")," reference",m.a.createElement("span",{className:"token punctuation"},"."),m.a.createElement("span",{className:"token func method"},"getAttribute"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'title'"),m.a.createElement("span",{className:"token punctuation"},")"),"\n","    ","reference",m.a.createElement("span",{className:"token punctuation"},"."),m.a.createElement("span",{className:"token func method"},"removeAttribute"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'title'"),m.a.createElement("span",{className:"token punctuation"},")"),"\n","    ",m.a.createElement("span",{className:"token flow keyword"},"return")," title","\n","  ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")")))),m.a.createElement(r.MDXTag,{name:"p",components:a},"The ",m.a.createElement("code",{className:"language-text"},"title")," attribute should be removed once you have its content so the\nbrowser's default tooltip isn't displayed along with the tippy."),m.a.createElement(r.MDXTag,{name:"p",components:a},'With the beauty of higher-order functions, you can "enhance" the base tippy\nfunction with new functionality. To add this behavior by default, you can do\nsomething like this at the very top of your scripts before any calls to\n',m.a.createElement("code",{className:"language-text"},"tippy()"),":"),m.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},m.a.createElement("pre",{className:"language-js"},m.a.createElement("code",{className:"language-js"},m.a.createElement("span",{className:"token keyword"},"function")," ",m.a.createElement("span",{className:"token function"},"withTitleAttributeContent"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token parameter"},"tippy"),m.a.createElement("span",{className:"token punctuation"},")")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",m.a.createElement("span",{className:"token flow keyword"},"return")," ",m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token parameter"},"targets",m.a.createElement("span",{className:"token punctuation"},",")," options ",m.a.createElement("span",{className:"token operator"},"=")," ",m.a.createElement("span",{className:"token punctuation"},"{"),m.a.createElement("span",{className:"token punctuation"},"}")),m.a.createElement("span",{className:"token punctuation"},")")," ",m.a.createElement("span",{className:"token arrow operator"},"=>")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",m.a.createElement("span",{className:"token flow keyword"},"return")," ",m.a.createElement("span",{className:"token function"},"tippy"),m.a.createElement("span",{className:"token punctuation"},"("),"targets",m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ",m.a.createElement("span",{className:"token spread punctuation"},"..."),"options",m.a.createElement("span",{className:"token punctuation"},","),"\n","      ",m.a.createElement("span",{className:"token function"},"content"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token parameter"},"reference"),m.a.createElement("span",{className:"token punctuation"},")")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ",m.a.createElement("span",{className:"token keyword"},"if")," ",m.a.createElement("span",{className:"token punctuation"},"("),"options",m.a.createElement("span",{className:"token punctuation"},"."),m.a.createElement("span",{className:"token access property"},"content"),m.a.createElement("span",{className:"token punctuation"},")")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ",m.a.createElement("span",{className:"token flow keyword"},"return")," options",m.a.createElement("span",{className:"token punctuation"},"."),m.a.createElement("span",{className:"token access property"},"content"),"\n","        ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","        ",m.a.createElement("span",{className:"token keyword"},"const")," title ",m.a.createElement("span",{className:"token operator"},"=")," reference",m.a.createElement("span",{className:"token punctuation"},"."),m.a.createElement("span",{className:"token func method"},"getAttribute"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'title'"),m.a.createElement("span",{className:"token punctuation"},")"),"\n","        ","reference",m.a.createElement("span",{className:"token punctuation"},"."),m.a.createElement("span",{className:"token func method"},"removeAttribute"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'title'"),m.a.createElement("span",{className:"token punctuation"},")"),"\n","        ",m.a.createElement("span",{className:"token flow keyword"},"return")," title","\n","      ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","    ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")"),"\n","  ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","\n",m.a.createElement("span",{className:"token dom variable"},"window"),m.a.createElement("span",{className:"token punctuation"},"."),m.a.createElement("span",{className:"token access property"},"tippy")," ",m.a.createElement("span",{className:"token operator"},"=")," ",m.a.createElement("span",{className:"token function"},"withTitleAttributeContent"),m.a.createElement("span",{className:"token punctuation"},"("),"tippy",m.a.createElement("span",{className:"token punctuation"},")")))))},a}(m.a.Component);i.isMDXComponent=!0;var E={}},177:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.withMDXComponents=void 0;var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s=l(t(0)),c=l(t(57)),o=l(t(1));function l(e){return e&&e.__esModule?e:{default:e}}var m=(0,c.default)({}),r=m.Provider,p=m.Consumer;a.withMDXComponents=function(e){return function(a){var t=a.components,c=function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(a,["components"]);return s.default.createElement(p,null,function(a){return s.default.createElement(e,n({components:t||a},c))})}};var u=function(e){var a=e.components,t=e.children;return s.default.createElement(r,{value:a},t)};u.propTypes={components:o.default.object.isRequired,children:o.default.element.isRequired},a.default=u},179:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(182);Object.defineProperty(a,"MDXTag",{enumerable:!0,get:function(){return c(n).default}});var s=t(177);function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"MDXProvider",{enumerable:!0,get:function(){return c(s).default}})},182:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),c=t(0),o=r(c),l=r(t(183)),m=t(177);function r(e){return e&&e.__esModule?e:{default:e}}var p={inlineCode:"code",wrapper:"div"},u=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,c.Component),s(a,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.parentName,s=e.props,c=void 0===s?{}:s,m=e.children,r=e.components,u=void 0===r?{}:r,i=e.Layout,E=e.layoutProps,N=u[t+"."+a]||u[a]||p[a]||a;return i?((0,l.default)(this,i),o.default.createElement(i,n({components:u},E),o.default.createElement(N,c,m))):o.default.createElement(N,c,m)}}]),a}();a.default=(0,m.withMDXComponents)(u)},183:function(e,a,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c=Object.defineProperty,o=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,r=Object.getPrototypeOf,p=r&&r(Object);e.exports=function e(a,t,u){if("string"!=typeof t){if(p){var i=r(t);i&&i!==p&&e(a,i,u)}var E=o(t);l&&(E=E.concat(l(t)));for(var N=0;N<E.length;++N){var k=E[N];if(!(n[k]||s[k]||u&&u[k])){var g=m(t,k);try{c(a,k,g)}catch(d){}}}return a}return a}}}]);
//# sourceMappingURL=component---src-pages-faq-mdx-3c5587440142dd18a157.js.map