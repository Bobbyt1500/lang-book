/******/ var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fragment": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "jsx": () => (/* binding */ e),
/* harmony export */   "jsxDEV": () => (/* binding */ e),
/* harmony export */   "jsxs": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var o=0;function e(_,e,n,t,f){var l,s,u={};for(s in e)"ref"==s?l=e[s]:u[s]=e[s];var a={type:_,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o,__source:f,__self:t};if("function"==typeof _&&(l=_.defaultProps))for(s in l)void 0===u[s]&&(u[s]=l[s]);return preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode&&preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode(a),a}
//# sourceMappingURL=jsxRuntime.module.js.map


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ _),
/* harmony export */   "Fragment": () => (/* binding */ d),
/* harmony export */   "cloneElement": () => (/* binding */ B),
/* harmony export */   "createContext": () => (/* binding */ D),
/* harmony export */   "createElement": () => (/* binding */ v),
/* harmony export */   "createRef": () => (/* binding */ p),
/* harmony export */   "h": () => (/* binding */ v),
/* harmony export */   "hydrate": () => (/* binding */ q),
/* harmony export */   "isValidElement": () => (/* binding */ i),
/* harmony export */   "options": () => (/* binding */ l),
/* harmony export */   "render": () => (/* binding */ S),
/* harmony export */   "toChildArray": () => (/* binding */ A)
/* harmony export */ });
var n,l,u,i,t,o,r,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n)}function v(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y(l,f,t,o,null)}function y(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null==r&&null!=l.vnode&&l.vnode(f),f}function p(){return{current:null}}function d(n){return n.children}function _(n,l){this.props=n,this.context=l}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||r!==l.debounceRendering)&&((r=l.debounceRendering)||o)(g)}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a({},t)).__v=t.__v+1,j(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k(t):o,t.__h),z(u,t),t.__e!=o&&b(t)))})}function w(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null}j(n,_,p=p||e,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k(p))}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M(g[h],g[++h],g[++h])}function x(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?x(i,l,u):P(u,i,i,t,i.__e,l));return l}function A(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A(n,l)}):l.push(n)),l}function P(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function C(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i)}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s.test(l)?u:u+"px"}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function I(n){this.l[n.type+!1](l.event?l.event(n):n)}function T(n){this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k)})}h.context=x,h.props=m,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a(a({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w(n,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,i)}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function L(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1}if(null===d)y===p||c&&l.data===p||(l.data=p);else{if(r=r&&n.call(l.childNodes),a=(y=i.props||e).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""))}if(C(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_||"option"===d&&_!==y.value)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1))}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function N(n,u,i){var t,o;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||h(n.__e),n.__e=n.__d=void 0}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var o,r,f;l.__&&l.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j(i,u=(!o&&t||i).__k=v(d,null,[u]),r||e,e,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z(f,u)}function q(n,l){S(n,l,q)}function B(l,u,i){var t,o,r,f=a({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),y(l.type,f,t||l.key,o||l.ref,null)}function D(n,l){var u={__c:l="__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c.slice,l={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this))},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this))},_.prototype.render=d,t=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,f=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
const jsx_runtime_1 = __webpack_require__(1);
const preact = __webpack_require__(2);
const overview_1 = __webpack_require__(4);
const quiz_1 = __webpack_require__(5);
const TabHeader = ({ active, setActiveFunc }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { class: "tab-container", children: [(0, jsx_runtime_1.jsx)("button", { class: "tab-button", onClick: () => { setActiveFunc(0); }, "data-active": active === 0, children: "List Overview" }), (0, jsx_runtime_1.jsx)("button", { class: "tab-button", onClick: () => { setActiveFunc(1); }, "data-active": active === 1, children: "Quiz" })] }));
};
class App extends preact.Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz: false,
            value: "",
            active: 0
        };
        this.setActive = this.setActive.bind(this);
    }
    setActive(index) {
        this.setState({ active: index });
    }
    render() {
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(TabHeader, { active: this.state.active, setActiveFunc: this.setActive }), (0, jsx_runtime_1.jsx)("div", { children: this.state.active === 0 && this.props.data.map((rowData, i) => {
                        return (0, jsx_runtime_1.jsx)(overview_1.LanguageBlockRow, { data: rowData }, i);
                    }) }), this.state.active === 1 &&
                    (0, jsx_runtime_1.jsx)(quiz_1.Quiz, { data: this.props.data, context: this.props.context })] }));
    }
}
exports.App = App;


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LanguageBlockRow = exports.Block = void 0;
const jsx_runtime_1 = __webpack_require__(1);
const Block = ({ data, vocab }) => {
    let originalClassList = [];
    if (data.pronunciation || data.definition)
        originalClassList.push("def-text");
    if (vocab)
        originalClassList.push("vocab-text");
    return ((0, jsx_runtime_1.jsxs)("div", { class: "block", children: [data.definition &&
                (0, jsx_runtime_1.jsx)("span", { class: "tooltip hover-tooltip definition", children: data.definition }), data.pronunciation &&
                (0, jsx_runtime_1.jsx)("span", { class: "tooltip hover-tooltip pronunciation", children: data.pronunciation }), (0, jsx_runtime_1.jsx)("span", { class: originalClassList.join(" "), children: data.original })] }));
};
exports.Block = Block;
const LanguageBlockRow = ({ data }) => {
    let isVocab = data.length === 1;
    return ((0, jsx_runtime_1.jsx)("div", { class: "block-row", children: data.map((blockData, i) => {
            return (0, jsx_runtime_1.jsx)(exports.Block, { data: blockData, vocab: isVocab });
        }) }));
};
exports.LanguageBlockRow = LanguageBlockRow;


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Quiz = void 0;
const jsx_runtime_1 = __webpack_require__(1);
const preact = __webpack_require__(2);
const question_1 = __webpack_require__(31);
const uuid_1 = __webpack_require__(6);
__webpack_require__(32);
class Quiz extends preact.Component {
    constructor(props) {
        super(props);
        // Filter out questions that dont have any definitions
        let filteredData = this.props.data.filter((e) => {
            // Check this line for defs
            for (const block of e) {
                if (block.definition)
                    return true;
            }
            ;
            return false;
        });
        this.state = {
            filteredQuestions: filteredData,
            questionSet: JSON.parse(JSON.stringify(filteredData)),
            chosenQuestion: [],
            answers: new Map(),
            showAnswers: false,
            uuid: (0, uuid_1.v4)(),
            showPronunciations: true
        };
        this.promptAnswer = this.promptAnswer.bind(this);
        this.chooseQuestion = this.chooseQuestion.bind(this);
        this.chooseQuestion();
        // Receive data from extension 
        if (this.props.context.onDidReceiveMessage !== undefined) {
            this.props.context.onDidReceiveMessage((e) => {
                // If this response matches this component's ID
                if (e.targetUuid === this.state.uuid) {
                    // Add the answer to the list of answer
                    if (e.request === "promptAnswer") {
                        let updatedAnswers = this.state.answers;
                        updatedAnswers.set(e.blockIndex, e.response);
                        this.setState({ answers: updatedAnswers });
                    }
                }
            });
        }
    }
    promptAnswer(blockIndex) {
        if (this.props.context.postMessage === undefined)
            return;
        this.props.context.postMessage({
            request: "promptAnswer",
            uuid: this.state.uuid,
            blockIndex: blockIndex,
        });
    }
    chooseQuestion() {
        if (this.state.questionSet.length === 0) {
            // If there are no more questions, reset quiz without chosen questions
            this.setState({
                questionSet: JSON.parse(JSON.stringify(this.state.filteredQuestions)),
                chosenQuestion: [],
                showAnswers: false,
                answers: new Map()
            });
            return;
        }
        ;
        // Select random question
        let index = Math.floor(Math.random() * this.state.questionSet.length);
        // Remove it from the available question set
        let ret = this.state.questionSet[index];
        let updatedQuestionSet = this.state.questionSet;
        updatedQuestionSet.splice(index, 1);
        // Update component state
        this.setState({
            questionSet: updatedQuestionSet,
            chosenQuestion: ret,
            answers: new Map(),
            showAnswers: false
        });
    }
    render() {
        let remainingQuestions = this.state.chosenQuestion.length !== 0; // If there are remaining questions
        return ((0, jsx_runtime_1.jsxs)(preact.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { class: "quiz-config-container", children: (0, jsx_runtime_1.jsxs)("div", { class: "pretty p-switch p-fill", children: [(0, jsx_runtime_1.jsx)("input", { defaultChecked: this.state.showPronunciations, onChange: () => {
                                    this.setState({ showPronunciations: !this.state.showPronunciations });
                                }, type: "checkbox" }), (0, jsx_runtime_1.jsx)("div", { class: "state", children: (0, jsx_runtime_1.jsx)("label", { children: "Show Pronunciations" }) })] }) }), (0, jsx_runtime_1.jsx)("div", { class: "quiz-container", children: (0, jsx_runtime_1.jsxs)("div", { children: [remainingQuestions &&
                                (0, jsx_runtime_1.jsx)(question_1.default, { data: this.state.chosenQuestion, prompt: this.promptAnswer, answers: this.state.answers, showAnswers: this.state.showAnswers, showPronunciations: this.state.showPronunciations }), (0, jsx_runtime_1.jsxs)("div", { class: "controls-container", children: [this.state.showAnswers && remainingQuestions && (0, jsx_runtime_1.jsx)("button", { class: "controls-button", onClick: () => { this.chooseQuestion(); }, children: "Next" }), this.state.showAnswers || (remainingQuestions && (0, jsx_runtime_1.jsx)("button", { class: "controls-button", onClick: () => {
                                            this.setState({ showAnswers: true });
                                        }, children: "Submit" })), remainingQuestions || (0, jsx_runtime_1.jsx)("button", { class: "controls-button", onClick: () => {
                                            // Restart quiz by choosing a new question
                                            this.chooseQuestion();
                                        }, children: "Restart" })] })] }) })] }));
    }
}
exports.Quiz = Quiz;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NIL": () => (/* reexport safe */ _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "parse": () => (/* reexport safe */ _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "stringify": () => (/* reexport safe */ _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "v1": () => (/* reexport safe */ _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "v3": () => (/* reexport safe */ _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "v4": () => (/* reexport safe */ _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "v5": () => (/* reexport safe */ _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "validate": () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "version": () => (/* reexport safe */ _version_js__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);










/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v1);

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);


var v3 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v3);

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DNS": () => (/* binding */ DNS),
/* harmony export */   "URL": () => (/* binding */ URL),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0,_parse_js__WEBPACK_IMPORTED_MODULE_0__["default"])(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


function parse(uuid) {
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (md5);

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);


var v5 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v5);

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sha1);

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('00000000-0000-0000-0000-000000000000');

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


function version(uuid) {
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (version);

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 22 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 23 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 24 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 26 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 27 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 28 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\nHeader styles\n----------------------- \n*/\n\n#tabContainer {\n    display: flex;\n    justify-content: left;\n}\n\n.tab-button {\n    padding: 5px 20px 5px 20px;\n    \n    border: none;\n\n    background-color:rgb(66, 105, 222);\n    color: white;\n    transition: background-color 0.5s;\n}\n\n.tab-button:hover { \n    background-color: rgb(51, 83, 178);\n    cursor: pointer;\n}\n\n.tab-button[data-active] {\n    background-color: rgb(51, 83, 178);\n    border-bottom: 1px solid red;\n}\n\n\n/*\n\nDisplay Styles\n------------------------\n\n*/\n.block-row {\n    margin-top: 18px;\n    margin-bottom: 18px;\n    display: flex;\n}\n\n.block {\n    font-size: 20px;\n    margin-left: 5px;\n    margin-right: 5px;\n    position: relative;\n}\n\n.block:hover .hover-tooltip {\n    visibility: visible;\n}\n\n.hover-tooltip {\n    visibility: hidden;\n}\n\n.tooltip {\n    white-space: nowrap;\n    font-size: 10px;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.def-text {\n    text-decoration: underline;\n    text-decoration-thickness: 3px;\n    text-decoration-color: yellow;\n}\n\n.vocab-text {\n    text-decoration-color: #c88ced !important;\n}\n\n.pronunciation {\n    top: -20px;\n}\n\n.definition {\n    top: -10px;\n}\n\n.question-tooltip {\n    top: -12px;\n}\n\n/* \nQuiz Styles\n------------------\n*/\n\n.quiz-container {\n    width: 400px;\n    height: 300px;\n    background-color: rgb(57, 57, 57);\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.question {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin: 20px 10px 20px 10px;\n}\n\n.question-block {\n    margin-left: 5px;\n    margin-right: 5px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.question-text {\n    font-size: 20px;\n    color: white;\n}\n\n.question-def-text {\n    font-size: 20px;\n    color: white;\n    text-decoration: underline;\n    text-decoration-thickness: 3px;\n    text-decoration-color: yellow;\n}\n\n.question-def-text:hover {\n    background-color: rgba(255, 255, 255, 0.225);\n    cursor: pointer;\n}\n\n.input-text {\n    color: white;\n    font-size: 15px;\n}\n\n.answer-text {\n    font-size: 15px;\n}\n\n.answer-text[data-correct=\"true\"] {\n    color: rgb(1, 198, 1);\n}\n\n.answer-text[data-correct=\"false\"] {\n    color: red;\n}\n\n/*\nQuiz Controls\n--------------------\n*/\n\n.controls-container {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\n.controls-button {\n    padding: 5px 20px 5px 20px;\n    \n    border: none;\n    border-radius: 3px;\n\n    background-color:rgb(66, 105, 222);\n    color: white;\n    transition: all 0.5s;\n}\n\n.controls-button:hover { \n    background-color: rgb(51, 83, 178);\n    cursor: pointer;\n}\n\n/*\nQuiz Config\n------------------\n*/\n\n.quiz-config-container {\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/renderer/style.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,0BAA0B;;IAE1B,YAAY;;IAEZ,kCAAkC;IAClC,YAAY;IACZ,iCAAiC;AACrC;;AAEA;IACI,kCAAkC;IAClC,eAAe;AACnB;;AAEA;IACI,kCAAkC;IAClC,4BAA4B;AAChC;;;AAGA;;;;;CAKC;AACD;IACI,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,SAAS;IACT,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;IAC1B,8BAA8B;IAC9B,6BAA6B;AACjC;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;;;CAGC;;AAED;IACI,YAAY;IACZ,aAAa;IACb,iCAAiC;IACjC,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,0BAA0B;IAC1B,8BAA8B;IAC9B,6BAA6B;AACjC;;AAEA;IACI,4CAA4C;IAC5C,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,UAAU;AACd;;AAEA;;;CAGC;;AAED;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,0BAA0B;;IAE1B,YAAY;IACZ,kBAAkB;;IAElB,kCAAkC;IAClC,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,kCAAkC;IAClC,eAAe;AACnB;;AAEA;;;CAGC;;AAED;IACI,gBAAgB;IAChB,mBAAmB;AACvB","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 29 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 30 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsx_runtime_1 = __webpack_require__(1);
const Question = ({ data, prompt, answers, showAnswers, showPronunciations }) => {
    return ((0, jsx_runtime_1.jsx)("div", { class: "question", children: data.map((block, i) => {
            let answerCorrect = false;
            let inputtedAnswer = answers.get(i); // The answer given by the user for this word
            let definition = block.definition;
            if (definition && inputtedAnswer) {
                answerCorrect = definition.toLowerCase() === inputtedAnswer.toLowerCase();
            }
            return ((0, jsx_runtime_1.jsxs)("div", { class: "question-block", children: [(0, jsx_runtime_1.jsxs)("div", { class: "block", children: [block.pronunciation && showPronunciations && (0, jsx_runtime_1.jsx)("span", { class: "tooltip question-tooltip", children: block.pronunciation }), (0, jsx_runtime_1.jsx)("span", { onClick: () => {
                                    // Prompt for user input if this is a def block
                                    // And it is not in showAnswers state
                                    if (definition && !showAnswers)
                                        prompt(i);
                                }, class: definition ? "question-def-text" : "question-text", children: block.original })] }), inputtedAnswer &&
                        (0, jsx_runtime_1.jsx)("span", { class: "input-text", children: inputtedAnswer }), showAnswers && definition &&
                        (0, jsx_runtime_1.jsx)("span", { class: "answer-text", "data-correct": answerCorrect.toString(), children: definition })] }));
        }) }));
};
exports["default"] = Question;


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_pretty_checkbox_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_pretty_checkbox_min_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_pretty_checkbox_min_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_pretty_checkbox_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_pretty_checkbox_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 33 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * pretty-checkbox.css\n *\n * A pure CSS library to beautify checkbox and radio buttons\n *\n * Source: https://github.com/atomicpages/pretty-checkbox\n * Demo: https://pretty-checkbox.netlify.app/\n *\n * Copyright (c) 2020 Dennis Thompson\n * Originally By: Lokesh rajendran\n */\n\n.pretty *{-webkit-box-sizing:border-box;box-sizing:border-box}.pretty input:not([type=checkbox]):not([type=radio]){display:none}.pretty{position:relative;display:inline-block;margin-right:1em;white-space:nowrap;line-height:1}.pretty input{position:absolute;left:0;top:0;min-width:1em;width:100%;height:100%;z-index:2;opacity:0;margin:0;padding:0;cursor:pointer}.pretty .state label{position:initial;display:inline-block;font-weight:400;margin:0;text-indent:1.5em;min-width:calc(1em + 2px)}.pretty .state label:after,.pretty .state label:before{content:\"\";width:calc(1em + 2px);height:calc(1em + 2px);display:block;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:0;border:1px solid transparent;z-index:0;position:absolute;left:0;top:calc((0% - (100% - 1em)) - 8%);background-color:transparent}.pretty .state label:before{border-color:#bdc3c7}.pretty .state.p-is-hover,.pretty .state.p-is-indeterminate{display:none}@-webkit-keyframes zoom{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes zoom{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-transform:scale(7);transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;-webkit-transform:scale(1);transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.5);transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.24);transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.04);transform:scale(1.04)}100%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}}@keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-transform:scale(7);transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;-webkit-transform:scale(1);transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.5);transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.24);transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.04);transform:scale(1.04)}100%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes jelly{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}40%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}50%{-webkit-transform:scale3d(.85,1.15,1);transform:scale3d(.85,1.15,1)}65%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}75%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes jelly{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}40%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}50%{-webkit-transform:scale3d(.85,1.15,1);transform:scale3d(.85,1.15,1)}65%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}75%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@-webkit-keyframes rotate{0%{opacity:0;-webkit-transform:translateZ(-200px) rotate(-45deg);transform:translateZ(-200px) rotate(-45deg)}100%{opacity:1;-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0)}}@keyframes rotate{0%{opacity:0;-webkit-transform:translateZ(-200px) rotate(-45deg);transform:translateZ(-200px) rotate(-45deg)}100%{opacity:1;-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0)}}@-webkit-keyframes pulse{0%{-webkit-box-shadow:0 0 0 0 #bdc3c7;box-shadow:0 0 0 0 #bdc3c7}100%{-webkit-box-shadow:0 0 0 1.5em rgba(189,195,199,0);box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}@keyframes pulse{0%{-webkit-box-shadow:0 0 0 0 #bdc3c7;box-shadow:0 0 0 0 #bdc3c7}100%{-webkit-box-shadow:0 0 0 1.5em rgba(189,195,199,0);box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}.pretty.p-default.p-fill .state label:after{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.pretty.p-default .state label:after{-webkit-transform:scale(.6);-ms-transform:scale(.6);transform:scale(.6)}.pretty.p-default input:checked~.state label:after{background-color:#bdc3c7!important}.pretty.p-default.p-thick .state label:after,.pretty.p-default.p-thick .state label:before{border-width:calc(1em / 7)}.pretty.p-default.p-thick .state label:after{-webkit-transform:scale(.4)!important;-ms-transform:scale(.4)!important;transform:scale(.4)!important}.pretty.p-icon .state .icon{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc((0% - (100% - 1em)) - 8%);border:1px solid transparent;opacity:0}.pretty.p-icon .state .icon:before{margin:0;width:100%;height:100%;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1}.pretty.p-icon input:checked~.state .icon,.pretty.p-icon input:indeterminate~.state .icon{opacity:1}.pretty.p-icon input:checked~.state label:before,.pretty.p-icon input:indeterminate~.state label:before{border-color:#5a656b}.pretty.p-svg .state .svg{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc((0% - (100% - 1em)) - 8%);border:1px solid transparent;opacity:0}.pretty.p-svg .state svg{margin:0;width:100%;height:100%;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1}.pretty.p-svg input:checked~.state .svg,.pretty.p-svg input:indeterminate~.state .svg{opacity:1}.pretty.p-image .state img{opacity:0;position:absolute;width:calc(1em + 2px);height:calc(1em + 2px);top:0;top:calc((0% - (100% - 1em)) - 8%);left:0;z-index:0;text-align:center;line-height:normal;-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8)}.pretty.p-image input:checked~.state img,.pretty.p-image input:indeterminate~.state img{opacity:1}.pretty.p-switch input{min-width:2em}.pretty.p-switch .state{position:relative}.pretty.p-switch .state:before{content:\"\";border:1px solid #bdc3c7;border-radius:60px;width:2em;-webkit-box-sizing:unset;box-sizing:unset;height:calc(1em + 2px);position:absolute;top:0;top:calc((0% - (100% - 1em)) - 16%);z-index:0;-webkit-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease}.pretty.p-switch .state label{text-indent:2.5em}.pretty.p-switch .state label:after,.pretty.p-switch .state label:before{-webkit-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease;border-radius:100%;left:0;border-color:transparent;-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8)}.pretty.p-switch .state label:after{background-color:#bdc3c7!important}.pretty.p-switch input:checked~.state:before{border-color:#5a656b}.pretty.p-switch input:checked~.state label:before{opacity:0}.pretty.p-switch input:checked~.state label:after{background-color:#5a656b!important;left:1em}.pretty.p-switch.p-fill input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-switch.p-fill input:checked~.state label:before{opacity:0}.pretty.p-switch.p-fill input:checked~.state label:after{background-color:#fff!important;left:1em}.pretty.p-switch.p-slim .state:before{height:.1em;background:#bdc3c7!important;top:calc(50% - .1em)}.pretty.p-switch.p-slim input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-has-hover input:hover~.state:not(.p-is-hover){display:none}.pretty.p-has-hover input:hover~.state.p-is-hover{display:block}.pretty.p-has-hover input:hover~.state.p-is-hover .icon{display:block}.pretty.p-has-focus input:focus~.state label:before{-webkit-box-shadow:0 0 3px 0 #bdc3c7;box-shadow:0 0 3px 0 #bdc3c7}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state:not(.p-is-indeterminate){display:none}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate{display:block}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate .icon{display:block;opacity:1}.pretty.p-toggle .state.p-on{opacity:0;display:none}.pretty.p-toggle .state .icon,.pretty.p-toggle .state .svg,.pretty.p-toggle .state img,.pretty.p-toggle .state.p-off{opacity:1;display:inherit}.pretty.p-toggle .state.p-off .icon{color:#bdc3c7}.pretty.p-toggle input:checked~.state.p-on{opacity:1;display:inherit}.pretty.p-toggle input:checked~.state.p-off{opacity:0;display:none}.pretty.p-plain input:checked~.state label:before,.pretty.p-plain.p-toggle .state label:before{content:none}.pretty.p-plain.p-plain .icon{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1)}.pretty.p-round .state label:after,.pretty.p-round .state label:before{border-radius:100%}.pretty.p-round.p-icon .state .icon{border-radius:100%;overflow:hidden}.pretty.p-round.p-icon .state .icon:before{-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8)}.pretty.p-curve .state label:after,.pretty.p-curve .state label:before{border-radius:20%}.pretty.p-smooth .icon,.pretty.p-smooth .svg,.pretty.p-smooth label:after,.pretty.p-smooth label:before{-webkit-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease}.pretty.p-smooth input:checked+.state label:after{-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.pretty.p-smooth input:checked+.state .icon,.pretty.p-smooth input:checked+.state .svg,.pretty.p-smooth input:checked+.state img{-webkit-animation:zoom .2s ease;animation:zoom .2s ease}.pretty.p-smooth.p-default input:checked+.state label:after{-webkit-animation:zoom .2s ease;animation:zoom .2s ease}.pretty.p-smooth.p-plain input:checked+.state label:before{content:\"\";-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease}.pretty.p-tada:not(.p-default) input:checked+.state .icon,.pretty.p-tada:not(.p-default) input:checked+.state .svg,.pretty.p-tada:not(.p-default) input:checked+.state img,.pretty.p-tada:not(.p-default) input:checked+.state label:after,.pretty.p-tada:not(.p-default) input:checked+.state label:before{-webkit-animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state .icon,.pretty.p-jelly:not(.p-default) input:checked+.state .svg,.pretty.p-jelly:not(.p-default) input:checked+.state img,.pretty.p-jelly:not(.p-default) input:checked+.state label:after,.pretty.p-jelly:not(.p-default) input:checked+.state label:before{-webkit-animation:jelly .7s cubic-bezier(.25,.46,.45,.94);animation:jelly .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state label:before{border-color:transparent}.pretty.p-rotate:not(.p-default) input:checked~.state .icon,.pretty.p-rotate:not(.p-default) input:checked~.state .svg,.pretty.p-rotate:not(.p-default) input:checked~.state img,.pretty.p-rotate:not(.p-default) input:checked~.state label:after,.pretty.p-rotate:not(.p-default) input:checked~.state label:before{-webkit-animation:rotate .7s cubic-bezier(.25,.46,.45,.94);animation:rotate .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-rotate:not(.p-default) input:checked~.state label:before{border-color:transparent}.pretty.p-pulse:not(.p-switch) input:checked~.state label:before{-webkit-animation:pulse 1s;animation:pulse 1s}.pretty input[disabled]{cursor:not-allowed;display:none}.pretty input[disabled]~*{opacity:.5}.pretty.p-locked input{display:none;cursor:not-allowed}.pretty input:checked~.state.p-primary label:after,.pretty.p-toggle .state.p-primary label:after{background-color:#428bca!important}.pretty input:checked~.state.p-primary .icon,.pretty input:checked~.state.p-primary .svg,.pretty.p-toggle .state.p-primary .icon,.pretty.p-toggle .state.p-primary .svg{color:#fff;stroke:#fff}.pretty input:checked~.state.p-primary-o label:before,.pretty.p-toggle .state.p-primary-o label:before{border-color:#428bca}.pretty input:checked~.state.p-primary-o label:after,.pretty.p-toggle .state.p-primary-o label:after{background-color:transparent}.pretty input:checked~.state.p-primary-o .icon,.pretty input:checked~.state.p-primary-o .svg,.pretty input:checked~.state.p-primary-o svg,.pretty.p-toggle .state.p-primary-o .icon,.pretty.p-toggle .state.p-primary-o .svg,.pretty.p-toggle .state.p-primary-o svg{color:#428bca;stroke:#428bca}.pretty.p-default:not(.p-fill) input:checked~.state.p-primary-o label:after{background-color:#428bca!important}.pretty.p-switch input:checked~.state.p-primary:before{border-color:#428bca}.pretty.p-switch.p-fill input:checked~.state.p-primary:before{background-color:#428bca!important}.pretty.p-switch.p-slim input:checked~.state.p-primary:before{border-color:#245682;background-color:#245682!important}.pretty input:checked~.state.p-info label:after,.pretty.p-toggle .state.p-info label:after{background-color:#5bc0de!important}.pretty input:checked~.state.p-info .icon,.pretty input:checked~.state.p-info .svg,.pretty.p-toggle .state.p-info .icon,.pretty.p-toggle .state.p-info .svg{color:#fff;stroke:#fff}.pretty input:checked~.state.p-info-o label:before,.pretty.p-toggle .state.p-info-o label:before{border-color:#5bc0de}.pretty input:checked~.state.p-info-o label:after,.pretty.p-toggle .state.p-info-o label:after{background-color:transparent}.pretty input:checked~.state.p-info-o .icon,.pretty input:checked~.state.p-info-o .svg,.pretty input:checked~.state.p-info-o svg,.pretty.p-toggle .state.p-info-o .icon,.pretty.p-toggle .state.p-info-o .svg,.pretty.p-toggle .state.p-info-o svg{color:#5bc0de;stroke:#5bc0de}.pretty.p-default:not(.p-fill) input:checked~.state.p-info-o label:after{background-color:#5bc0de!important}.pretty.p-switch input:checked~.state.p-info:before{border-color:#5bc0de}.pretty.p-switch.p-fill input:checked~.state.p-info:before{background-color:#5bc0de!important}.pretty.p-switch.p-slim input:checked~.state.p-info:before{border-color:#2390b0;background-color:#2390b0!important}.pretty input:checked~.state.p-success label:after,.pretty.p-toggle .state.p-success label:after{background-color:#5cb85c!important}.pretty input:checked~.state.p-success .icon,.pretty input:checked~.state.p-success .svg,.pretty.p-toggle .state.p-success .icon,.pretty.p-toggle .state.p-success .svg{color:#fff;stroke:#fff}.pretty input:checked~.state.p-success-o label:before,.pretty.p-toggle .state.p-success-o label:before{border-color:#5cb85c}.pretty input:checked~.state.p-success-o label:after,.pretty.p-toggle .state.p-success-o label:after{background-color:transparent}.pretty input:checked~.state.p-success-o .icon,.pretty input:checked~.state.p-success-o .svg,.pretty input:checked~.state.p-success-o svg,.pretty.p-toggle .state.p-success-o .icon,.pretty.p-toggle .state.p-success-o .svg,.pretty.p-toggle .state.p-success-o svg{color:#5cb85c;stroke:#5cb85c}.pretty.p-default:not(.p-fill) input:checked~.state.p-success-o label:after{background-color:#5cb85c!important}.pretty.p-switch input:checked~.state.p-success:before{border-color:#5cb85c}.pretty.p-switch.p-fill input:checked~.state.p-success:before{background-color:#5cb85c!important}.pretty.p-switch.p-slim input:checked~.state.p-success:before{border-color:#357935;background-color:#357935!important}.pretty input:checked~.state.p-warning label:after,.pretty.p-toggle .state.p-warning label:after{background-color:#f0ad4e!important}.pretty input:checked~.state.p-warning .icon,.pretty input:checked~.state.p-warning .svg,.pretty.p-toggle .state.p-warning .icon,.pretty.p-toggle .state.p-warning .svg{color:#fff;stroke:#fff}.pretty input:checked~.state.p-warning-o label:before,.pretty.p-toggle .state.p-warning-o label:before{border-color:#f0ad4e}.pretty input:checked~.state.p-warning-o label:after,.pretty.p-toggle .state.p-warning-o label:after{background-color:transparent}.pretty input:checked~.state.p-warning-o .icon,.pretty input:checked~.state.p-warning-o .svg,.pretty input:checked~.state.p-warning-o svg,.pretty.p-toggle .state.p-warning-o .icon,.pretty.p-toggle .state.p-warning-o .svg,.pretty.p-toggle .state.p-warning-o svg{color:#f0ad4e;stroke:#f0ad4e}.pretty.p-default:not(.p-fill) input:checked~.state.p-warning-o label:after{background-color:#f0ad4e!important}.pretty.p-switch input:checked~.state.p-warning:before{border-color:#f0ad4e}.pretty.p-switch.p-fill input:checked~.state.p-warning:before{background-color:#f0ad4e!important}.pretty.p-switch.p-slim input:checked~.state.p-warning:before{border-color:#c77c11;background-color:#c77c11!important}.pretty input:checked~.state.p-danger label:after,.pretty.p-toggle .state.p-danger label:after{background-color:#d9534f!important}.pretty input:checked~.state.p-danger .icon,.pretty input:checked~.state.p-danger .svg,.pretty.p-toggle .state.p-danger .icon,.pretty.p-toggle .state.p-danger .svg{color:#fff;stroke:#fff}.pretty input:checked~.state.p-danger-o label:before,.pretty.p-toggle .state.p-danger-o label:before{border-color:#d9534f}.pretty input:checked~.state.p-danger-o label:after,.pretty.p-toggle .state.p-danger-o label:after{background-color:transparent}.pretty input:checked~.state.p-danger-o .icon,.pretty input:checked~.state.p-danger-o .svg,.pretty input:checked~.state.p-danger-o svg,.pretty.p-toggle .state.p-danger-o .icon,.pretty.p-toggle .state.p-danger-o .svg,.pretty.p-toggle .state.p-danger-o svg{color:#d9534f;stroke:#d9534f}.pretty.p-default:not(.p-fill) input:checked~.state.p-danger-o label:after{background-color:#d9534f!important}.pretty.p-switch input:checked~.state.p-danger:before{border-color:#d9534f}.pretty.p-switch.p-fill input:checked~.state.p-danger:before{background-color:#d9534f!important}.pretty.p-switch.p-slim input:checked~.state.p-danger:before{border-color:#a02622;background-color:#a02622!important}.pretty.p-bigger .icon,.pretty.p-bigger .img,.pretty.p-bigger .svg,.pretty.p-bigger label:after,.pretty.p-bigger label:before{font-size:1.2em!important;top:calc((0% - (100% - 1em)) - 35%)!important}.pretty.p-bigger label{text-indent:1.7em}@media print{.pretty .state .icon,.pretty .state label:after,.pretty .state label:before,.pretty .state:before{color-adjust:exact;-webkit-print-color-adjust:exact;print-color-adjust:exact}}", "",{"version":3,"sources":["webpack://./node_modules/@djthoms/pretty-checkbox/dist/pretty-checkbox.min.css"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })
/******/ ]);
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.activate = void 0;
const jsx_runtime_1 = __webpack_require__(1);
const render_1 = __webpack_require__(3);
const preact = __webpack_require__(2);
__webpack_require__(21);
const activate = (context) => ({
    renderOutputItem(data, element) {
        let blockData = data.json();
        if (!context.postMessage || !context.onDidReceiveMessage) {
            return;
        }
        preact.render((0, jsx_runtime_1.jsx)(render_1.App, { data: blockData, context: context }), element);
    }
});
exports.activate = activate;

})();

var __webpack_exports___esModule = __webpack_exports__.__esModule;
var __webpack_exports__activate = __webpack_exports__.activate;
export { __webpack_exports___esModule as __esModule, __webpack_exports__activate as activate };

//# sourceMappingURL=index.js.map