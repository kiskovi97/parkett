webpackJsonp([0xbd098987aef1],{102:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),o=a(l),r=n(3),u=a(r),d=n(114),c=a(d),s=function(e){var t=e.title,n=e.children,a=e.color;return o.default.createElement("article",{className:c.default.card,style:{background:a}},t&&o.default.createElement("header",{className:c.default.header},t),n)};s.propTypes={children:u.default.instanceOf(Object).isRequired,title:u.default.string,color:u.default.string},s.defaultProps={title:"",color:"#FFFFFF"},t.default=s,e.exports=t.default},114:function(e,t){e.exports={card:"src-components----Card-module---card---3ay07",header:"src-components----Card-module---header---3XVzY",open:"src-components----Card-module---open---3q7Ms",close:"src-components----Card-module---close---1o3Xl",title:"src-components----Card-module---title---3PM0A"}},146:function(e,t){e.exports={main:"src-components-CommunityPage----JoinUs-module---main---3iKqu",title:"src-components-CommunityPage----JoinUs-module---title---18hWm",desc:"src-components-CommunityPage----JoinUs-module---desc---2gyGQ",formgroup:"src-components-CommunityPage----JoinUs-module---formgroup---2hhhJ",submit:"src-components-CommunityPage----JoinUs-module---submit---eIMeD"}},426:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),o=a(l),r=n(16),u=a(r),d=n(327),c=a(d),s=function(){return o.default.createElement("div",null,o.default.createElement("div",{className:c.default.title},u.default?u.default.attention.title:""),o.default.createElement("div",null,u.default?u.default.attention.desc:""))};t.default=s,e.exports=t.default},427:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),d=a(u),c=n(16),s=a(c),i=n(328),f=a(i),m=function(e){function t(n){l(this,t);var a=o(this,e.call(this,n));return a.changeTab=function(e){a.setState({selected:e}),a.myDivToFocus.current&&a.myDivToFocus.current.scrollIntoView({behavior:"smooth",block:"nearest"})},a.isActive=function(e){var t=a.state.selected;return t===e},a.state={selected:""},a.myDivToFocus=d.default.createRef(),a}return r(t,e),t.prototype.render=function(){var e=this;return s.default?d.default.createElement("div",{className:f.default.etikett},d.default.createElement("div",{className:f.default.title},s.default.etikett.title),d.default.createElement("div",{className:f.default.long},s.default.etikett.main),d.default.createElement("div",{className:f.default.tabs},s.default.etikett.tabs.map(function(t){return d.default.createElement("button",{onClick:function(){return e.changeTab(t.head)},type:"button",className:e.isActive(t.head)?f.default.active:""},t.head)})),d.default.createElement("div",{ref:this.myDivToFocus},s.default.etikett.tabs.map(function(t){return d.default.createElement("div",{hidden:!e.isActive(t.head),className:f.default.tab},d.default.createElement("div",{key:"7"},d.default.createElement("strong",null,t.head)),d.default.createElement("div",{className:f.default.list},t.body))}))):d.default.createElement("div",{className:f.default.etikett},"Loading")},t}(d.default.Component);t.default=m,e.exports=t.default},428:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(l,o){try{var r=t[l](o),u=r.value}catch(e){return void n(e)}return r.done?void e(u):Promise.resolve(u).then(function(e){a("next",e)},function(e){a("throw",e)})}return a("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(e){var t=e.dance,n=e.selected,a=e.click,l=t.dance_type,o=t.name,r=t.id,u=t.content,d=l.color,s=l.image;return n&&(d+="F0"),i.default.createElement("div",{className:h.default.danceContainer},i.default.createElement(b.default,null,i.default.createElement("div",{className:h.default.dance+" "+(n?h.default.open:""),style:c({backgroundColor:d},E),onClick:function(){return a(r)},key:"card",role:"button",onKeyDown:function(){},tabIndex:0},i.default.createElement("div",null,i.default.createElement("img",{src:s,alt:""})),i.default.createElement("div",{className:h.default.title},i.default.createElement("strong",null,o.charAt(0).toUpperCase()+o.slice(1))),i.default.createElement("div",{className:h.default.descritpion},u))))}t.__esModule=!0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=n(1),i=a(s),f=n(3),m=a(f),p=n(5),v=n(786),h=a(v),g=n(102),b=a(g),E={transition:"all 0.5s ease-out"},w=function(e){function t(){var n=this;o(this,t);var a=r(this,e.call(this));return a.fetchDances=l(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(0,p.fetchAll)("dances").then(function(e){a.setState({dances:e})});case 1:case"end":return e.stop()}},e,n)})),a.select=function(e){var t=a.state.selectedid;t!==e?a.setState({selectedid:e}):a.setState({selectedid:null})},a.state={dances:[],selectedid:null},a}return u(t,e),t.prototype.componentDidMount=function(){this.fetchDances()},t.prototype.render=function(){var e=this,t=this.state,n=t.dances,a=t.selectedid;return i.default.createElement("div",{className:h.default.main},i.default.createElement("div",{className:h.default.grid},n.map(function(t){return i.default.createElement(d,{dance:t,selected:a===t.id,click:e.select,key:t.id})})))},t}(i.default.Component);d.propTypes={dance:m.default.instanceOf(Object).isRequired,selected:m.default.bool,click:m.default.func.isRequired},d.defaultProps={selected:!1},t.default=w,e.exports=t.default},786:function(e,t){e.exports={main:"src-components-KnowledgePage----Dances-module---main---1D9vI",grid:"src-components-KnowledgePage----Dances-module---grid---gBfgd",danceContainer:"src-components-KnowledgePage----Dances-module---danceContainer---o4tG2",dance:"src-components-KnowledgePage----Dances-module---dance---2ht1W",open:"src-components-KnowledgePage----Dances-module---open---34Jqs",descritpion:"src-components-KnowledgePage----Dances-module---descritpion---18hQl",title:"src-components-KnowledgePage----Dances-module---title---3HoV9"}},429:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(){window.location.href="https://forms.gle/vVWavNhnNhYrgRnx9"}t.__esModule=!0;var o=n(1),r=a(o),u=n(146),d=a(u),c=n(16),s=a(c),i=function(){return r.default.createElement("div",{className:d.default.main},r.default.createElement("div",{className:d.default.title},s.default?s.default.knowledge.feedbackForm.title:""),r.default.createElement("div",{className:d.default.desc},s.default?s.default.knowledge.feedbackForm.description:""),r.default.createElement("div",{className:d.default.submit,onClick:l,onKeyDown:function(){},role:"button",tabIndex:0},s.default?s.default.knowledge.feedbackForm.button:""))};t.default=i,e.exports=t.default},327:function(e,t){e.exports={main:"src-components-KnowledgePage----Knowledge-module---main---2_YmO",buttons:"src-components-KnowledgePage----Knowledge-module---buttons---11rZA",general:"src-components-KnowledgePage----Knowledge-module---general---296Pe",attention:"src-components-KnowledgePage----Knowledge-module---attention---6S7yI",thanks:"src-components-KnowledgePage----Knowledge-module---thanks---1Gynu",header:"src-components-KnowledgePage----Knowledge-module---header---16Ua5",dances:"src-components-KnowledgePage----Knowledge-module---dances---28bRv",tips:"src-components-KnowledgePage----Knowledge-module---tips---2W4-Q",title:"src-components-KnowledgePage----Knowledge-module---title---1o9PE",drinksAndPlace:"src-components-KnowledgePage----Knowledge-module---drinksAndPlace---1bKed"}},430:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),d=a(u),c=n(434),s=a(c),i=n(427),f=a(i),m=n(431),p=a(m),v=n(426),h=a(v),g=n(433),b=a(g),E=n(428),w=a(E),y=n(429),k=a(y),_=n(103),N=a(_),P=n(327),T=a(P),K=n(432),C=a(K),A=n(16),D=a(A),O=function(e){function t(n){l(this,t);var a=o(this,e.call(this,n));return a.goTips=function(){a.divTips.current&&a.divTips.current.scrollIntoView({behavior:"smooth",block:"nearest"})},a.goDances=function(){a.divDances.current&&a.divDances.current.scrollIntoView({behavior:"smooth",block:"nearest"})},a.goGeneral=function(){a.divGeneral.current&&a.divGeneral.current.scrollIntoView({behavior:"smooth",block:"nearest"})},a.goApproach=function(){a.divApproach.current&&a.divApproach.current.scrollIntoView({behavior:"smooth",block:"nearest"})},a.goEtikett=function(){a.dicEtikett.current&&a.dicEtikett.current.scrollIntoView({behavior:"smooth",block:"nearest"})},a.state={},a.divTips=d.default.createRef(),a.dicEtikett=d.default.createRef(),a.divDances=d.default.createRef(),a.divGeneral=d.default.createRef(),a.divApproach=d.default.createRef(),a}return r(t,e),t.prototype.render=function(){return D.default?d.default.createElement("div",{className:T.default.main},d.default.createElement("div",{className:T.default.buttons},d.default.createElement("button",{onClick:this.goDances,type:"button"},D.default.knowledge.buttons.dances),d.default.createElement("button",{onClick:this.goGeneral,type:"button"},D.default.knowledge.buttons.general),d.default.createElement("button",{onClick:this.goApproach,type:"button"},D.default.knowledge.buttons.approach),d.default.createElement("button",{onClick:this.goTips,type:"button"},D.default.knowledge.buttons.tipps),d.default.createElement("button",{onClick:this.goEtikett,type:"button"},D.default.knowledge.buttons.etikett)),d.default.createElement("div",{className:T.default.header},d.default.createElement(N.default,null),d.default.createElement(C.default,null)),d.default.createElement("div",{className:T.default.dances,ref:this.divDances},d.default.createElement(w.default,null)),d.default.createElement("div",{className:T.default.general,ref:this.divGeneral},d.default.createElement("div",null,d.default.createElement("div",{className:T.default.title},D.default.knowledge.general.title),d.default.createElement("div",null,D.default.knowledge.general.desc),d.default.createElement("div",{className:T.default.thanks},d.default.createElement("div",null,d.default.createElement("strong",null,D.default.knowledge.thank.title)),d.default.createElement("div",null,d.default.createElement("strong",null,D.default.knowledge.thank.spot),d.default.createElement("a",{href:"https://spot.sch.bme.hu/events/parkett-klub/",target:"_blank",rel:"noopener noreferrer"},"SPOT fotókör")),d.default.createElement("div",null,d.default.createElement("strong",null,D.default.knowledge.thank.ac),d.default.createElement("a",{href:"https://acstudio.sch.bme.hu/",target:"_blank",rel:"noopener noreferrer"},"AC Studio és Live")),d.default.createElement("div",null,d.default.createElement("strong",null,D.default.knowledge.thank.bss),d.default.createElement("a",{href:"https://bsstudio.hu/",target:"_blank",rel:"noopener noreferrer"},"Budavári Schönherz Stúdió"))))),d.default.createElement("div",{className:T.default.attention},d.default.createElement(h.default,null)),d.default.createElement("div",{className:T.default.drinksAndPlace,ref:this.divApproach},d.default.createElement(p.default,null),d.default.createElement(b.default,null)),d.default.createElement("div",{className:T.default.tips,ref:this.divTips},d.default.createElement(s.default,null)),d.default.createElement("div",{className:T.default.tips,ref:this.dicEtikett},d.default.createElement(f.default,null)),d.default.createElement("div",{className:T.default.tips},d.default.createElement(k.default,null))):d.default.createElement("div",{className:T.default.main},d.default.createElement("div",{className:T.default.header},"Loading"))},t}(d.default.Component);t.default=O,e.exports=t.default},431:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),o=a(l),r=n(16),u=a(r),d=function(){return o.default.createElement("div",null,o.default.createElement("div",{key:"megkozelites"},o.default.createElement("strong",null,u.default?u.default.path.title:""),u.default?u.default.path.desc:""),o.default.createElement("div",{key:"bejutas"},o.default.createElement("strong",null,u.default?u.default.wayIn.title:""),u.default?u.default.wayIn.desc:""))};t.default=d,e.exports=t.default},432:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(){window.location.href="http://eepurl.com/veA7v"}t.__esModule=!0;var o=n(1),r=a(o),u=n(146),d=a(u),c=n(16),s=a(c),i=function(){return r.default.createElement("div",{className:d.default.main},r.default.createElement("div",{className:d.default.title},s.default?s.default.newsfeed.title:""),r.default.createElement("div",{className:d.default.desc},s.default?s.default.newsfeed.desc:""),r.default.createElement("div",{className:d.default.submit,onClick:l,onKeyDown:function(){},role:"button",tabIndex:0},s.default?s.default.newsfeed.button:""))};t.default=i,e.exports=t.default},433:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),o=a(l),r=n(16),u=a(r),d=function(){return o.default.createElement("div",null,o.default.createElement("div",null,u.default?u.default.services.title:""),o.default.createElement("li",{key:"ruhatar"},o.default.createElement("strong",null,u.default?u.default.services.cloakroom:"")),o.default.createElement("li",{key:"italpult"},o.default.createElement("strong",null,u.default?u.default.services.drinking:"")))};t.default=d,e.exports=t.default},434:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),d=a(u),c=n(16),s=a(c),i=n(328),f=a(i),m=function(e){function t(n){l(this,t);var a=o(this,e.call(this,n));return a.changeTab=function(e){a.setState({selected:e}),a.myDivToFocus.current&&a.myDivToFocus.current.scrollIntoView({behavior:"smooth",block:"nearest"})},a.isActive=function(e){var t=a.state.selected;return t===e},a.state={selected:""},a.myDivToFocus=d.default.createRef(),a}return r(t,e),t.prototype.render=function(){var e=this;return s.default?d.default.createElement("div",{className:f.default.tips},d.default.createElement("div",{className:f.default.title},s.default.tips.title),d.default.createElement("div",{className:f.default.long},s.default.tips.main),d.default.createElement("div",{className:f.default.tabs},s.default.tips.tabs.map(function(t){return d.default.createElement("button",{onClick:function(){return e.changeTab(t.head)},type:"button",className:e.isActive(t.head)?f.default.active:""},t.head)})),d.default.createElement("div",{ref:this.myDivToFocus},s.default.tips.tabs.map(function(t){return d.default.createElement("div",{hidden:!e.isActive(t.head),className:f.default.tab},d.default.createElement("div",{key:"7"},d.default.createElement("strong",null,t.head)),d.default.createElement("div",{className:f.default.list},t.body.map(function(e,t){return d.default.createElement("li",{key:t},e)})))}))):d.default.createElement("div",{className:f.default.tips},"Loading")},t}(d.default.Component);t.default=m,e.exports=t.default},328:function(e,t){e.exports={etikett:"src-components-KnowledgePage----TipsAndTricks-module---etikett---3kQb5",tips:"src-components-KnowledgePage----TipsAndTricks-module---tips---2yTLI",list:"src-components-KnowledgePage----TipsAndTricks-module---list---1mo1R",long:"src-components-KnowledgePage----TipsAndTricks-module---long---11SOU",title:"src-components-KnowledgePage----TipsAndTricks-module---title---moCHZ",tabs:"src-components-KnowledgePage----TipsAndTricks-module---tabs---33APZ",active:"src-components-KnowledgePage----TipsAndTricks-module---active---3EboD"}},455:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),o=a(l),r=n(23),u=a(r),d=n(57),c=a(d),s=n(430),i=a(s),f=n(24),m=a(f),p=function(){return o.default.createElement("div",null,o.default.createElement(c.default,{knowledgebase:!0}),o.default.createElement(u.default,{transitionName:"fade",transitionAppearTimeout:1e3,transitionEnterTimeout:300,transitionAppear:!0,transitionLeaveTimeout:300},o.default.createElement("div",{className:m.default.main},o.default.createElement(i.default,null))))};t.default=p,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-knowledge-base-js-8636706534211562f857.js.map